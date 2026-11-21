import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  Injectable,
  NotFoundException,
  PayloadTooLargeException,
  UnprocessableEntityException,
} from '@nestjs/common';
import {
  Prisma,
  StatusContratoObra,
  StatusRvt,
  TipoEventoRvt,
} from '../generated/prisma/client.js';
import type { ReadStream } from 'node:fs';
import { PrismaService } from '../prisma/prisma.service.js';
import type { CriarRvtDto } from './dto/criar-rvt.dto.js';
import type { DeliberarRvtDto } from './dto/deliberar-rvt.dto.js';
import type { RetificarRvtDto } from './dto/retificar-rvt.dto.js';
import {
  detectarTipoEvidencia,
  sanitizarNomeOriginal,
  type ArquivoRecebido,
  type TipoEvidencia,
} from './evidencias/arquivo-evidencia.util.js';
import {
  EvidenciasStorageService,
  type ArquivoArmazenado,
} from './evidencias/evidencias-storage.service.js';
import {
  calcularPrazoRetificacao,
  dentroDaJanelaRetificacao,
  formatarPrazo,
} from './janela-retificacao.util.js';
import {
  LIMITE_HORAS_DIARIAS,
  MAX_EVIDENCIAS_POR_RVT,
  TAMANHO_MAXIMO_EVIDENCIA_BYTES,
} from './rvt.constants.js';

const INCLUDE_RVT = {
  contrato: { select: { id: true, codigo: true, nome: true } },
  evidencias: { orderBy: { createdAt: 'asc' as const } },
  historico: {
    orderBy: { createdAt: 'asc' as const },
    select: { id: true, tipo: true, parecer: true, alteracoes: true, createdAt: true },
  },
} satisfies Prisma.RvtInclude;

type RvtComRelacoes = Prisma.RvtGetPayload<{ include: typeof INCLUDE_RVT }>;

export interface ContratoObraResumo {
  id: string;
  codigo: string;
  nome: string;
  cliente: string | null;
}

export interface EvidenciaResposta {
  id: string;
  nomeOriginal: string;
  mimeType: string;
  tamanhoBytes: number;
  hashSha256: string;
  createdAt: string;
}

export interface EventoHistoricoResposta {
  id: string;
  tipo: TipoEventoRvt;
  parecer: string | null;
  alteracoes: Prisma.JsonValue;
  createdAt: string;
}

export interface RvtResposta {
  id: string;
  contrato: { id: string; codigo: string; nome: string };
  dataJornada: string;
  horasTrabalhadas: number;
  escopoExecutado: string;
  status: StatusRvt;
  evidencias: EvidenciaResposta[];
  /** RN02 — fim da janela de retificação; null quando homologado */
  prazoRetificacao: string | null;
  /** Se o autor ainda pode retificar/reenviar agora */
  podeRetificar: boolean;
  historico: EventoHistoricoResposta[];
  createdAt: string;
  updatedAt: string;
}

/** Visão do gestor: inclui o colaborador autor do apontamento */
export interface RvtGestorResposta extends RvtResposta {
  colaboradorId: string;
}

/** Conta que consulta uma evidência (autor ou gestor do contrato) */
export interface LeitorEvidencia {
  usuarioId?: string;
  colaboradorId?: string;
  papel?: string;
}

export interface ArquivoEvidencia {
  conteudo: ReadStream;
  mimeType: string;
  nomeOriginal: string;
}

/** Quem executa a ação (o colaborador vem sempre do JWT) */
export interface AutorRvt {
  colaboradorId: string;
  usuarioId?: string;
}

export interface GestorRvt {
  usuarioId: string;
  colaboradorId?: string;
}

const MENSAGEM_CONFLITO =
  'Outra alteração foi registrada ao mesmo tempo neste apontamento. Atualize a página e tente novamente.';

function formatarHoras(horas: number): string {
  return horas.toLocaleString('pt-BR', { maximumFractionDigits: 2 });
}

export function mapearRvt(
  rvt: RvtComRelacoes,
  agora = new Date(),
): RvtResposta {
  const prazo =
    rvt.status === StatusRvt.HOMOLOGADO
      ? null
      : calcularPrazoRetificacao(rvt.janelaRetificacaoInicio);
  return {
    id: rvt.id,
    contrato: rvt.contrato,
    dataJornada: rvt.dataJornada.toISOString().slice(0, 10),
    horasTrabalhadas: Number(rvt.horasTrabalhadas),
    escopoExecutado: rvt.escopoExecutado,
    status: rvt.status,
    evidencias: rvt.evidencias.map((e) => ({
      id: e.id,
      nomeOriginal: e.nomeOriginal,
      mimeType: e.mimeType,
      tamanhoBytes: e.tamanhoBytes,
      hashSha256: e.hashSha256,
      createdAt: e.createdAt.toISOString(),
    })),
    prazoRetificacao: prazo?.toISOString() ?? null,
    podeRetificar: prazo !== null && agora.getTime() <= prazo.getTime(),
    historico: rvt.historico.map((h) => ({
      id: h.id,
      tipo: h.tipo,
      parecer: h.parecer,
      alteracoes: h.alteracoes,
      createdAt: h.createdAt.toISOString(),
    })),
    createdAt: rvt.createdAt.toISOString(),
    updatedAt: rvt.updatedAt.toISOString(),
  };
}

function mapearRvtGestor(
  rvt: RvtComRelacoes,
  agora = new Date(),
): RvtGestorResposta {
  return { ...mapearRvt(rvt, agora), colaboradorId: rvt.colaboradorId };
}

/**
 * RN02 — o autor só altera o próprio apontamento, nunca um homologado,
 * e apenas dentro da janela de cinco dias úteis.
 */
function garantirAlteravelPeloAutor(
  rvt: {
    colaboradorId: string;
    status: StatusRvt;
    janelaRetificacaoInicio: Date;
  } | null,
  colaboradorId: string,
  agora: Date,
): asserts rvt is NonNullable<typeof rvt> {
  // Apontamento de outro colaborador responde como inexistente
  if (!rvt || rvt.colaboradorId !== colaboradorId) {
    throw new NotFoundException('Apontamento não encontrado.');
  }
  if (rvt.status === StatusRvt.HOMOLOGADO) {
    throw new UnprocessableEntityException(
      'Apontamento homologado não pode ser alterado (RN02).',
    );
  }
  if (!dentroDaJanelaRetificacao(rvt.janelaRetificacaoInicio, agora)) {
    const prazo = calcularPrazoRetificacao(rvt.janelaRetificacaoInicio);
    throw new UnprocessableEntityException(
      `O prazo de retificação terminou em ${formatarPrazo(prazo)} (RN02).`,
    );
  }
}

@Injectable()
export class RvtService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly storage: EvidenciasStorageService,
  ) {}

  listarContratosAtivos(): Promise<ContratoObraResumo[]> {
    return this.prisma.contratoObra.findMany({
      where: { status: StatusContratoObra.ATIVO },
      select: { id: true, codigo: true, nome: true, cliente: true },
      orderBy: { codigo: 'asc' },
    });
  }

  /** Transação serializável: evita furar o teto diário e decisões cruzadas */
  private async emTransacaoSerializavel<T>(
    operacao: (tx: Prisma.TransactionClient) => Promise<T>,
    mensagemConflito = MENSAGEM_CONFLITO,
  ): Promise<T> {
    try {
      return await this.prisma.$transaction(operacao, {
        isolationLevel: Prisma.TransactionIsolationLevel.Serializable,
      });
    } catch (erro) {
      if (
        erro instanceof Prisma.PrismaClientKnownRequestError &&
        erro.code === 'P2034'
      ) {
        throw new ConflictException(mensagemConflito);
      }
      throw erro;
    }
  }

  /** RN05 — soma das horas do dia (rejeitados não contam) */
  private async garantirSaldoDiario(
    tx: Prisma.TransactionClient,
    colaboradorId: string,
    dataJornada: Date,
    horas: number,
    ignorarRvtId?: string,
  ): Promise<void> {
    const agregado = await tx.rvt.aggregate({
      _sum: { horasTrabalhadas: true },
      where: {
        colaboradorId,
        dataJornada,
        status: { not: StatusRvt.REJEITADO },
        ...(ignorarRvtId ? { id: { not: ignorarRvtId } } : {}),
      },
    });
    const jaApontadas = Number(agregado._sum.horasTrabalhadas ?? 0);
    if (jaApontadas + horas > LIMITE_HORAS_DIARIAS + 1e-9) {
      const restantes = Math.max(LIMITE_HORAS_DIARIAS - jaApontadas, 0);
      throw new UnprocessableEntityException(
        `Limite de ${LIMITE_HORAS_DIARIAS}h diárias excedido (RN05): ` +
          `já existem ${formatarHoras(jaApontadas)}h apontadas nesta data; ` +
          `restam ${formatarHoras(restantes)}h.`,
      );
    }
  }

  async criar(
    colaboradorId: string,
    dto: CriarRvtDto,
    usuarioId?: string,
  ): Promise<RvtResposta> {
    const dataJornada = new Date(`${dto.dataJornada}T00:00:00.000Z`);

    const rvt = await this.emTransacaoSerializavel(async (tx) => {
      // RN04 — vínculo obrigatório com contrato de obra ativo
      const contrato = await tx.contratoObra.findUnique({
        where: { id: dto.contratoId },
        select: { status: true },
      });
      if (!contrato || contrato.status !== StatusContratoObra.ATIVO) {
        throw new UnprocessableEntityException(
          'Selecione um contrato de obra ativo para registrar o apontamento (RN04).',
        );
      }

      await this.garantirSaldoDiario(
        tx,
        colaboradorId,
        dataJornada,
        dto.horasTrabalhadas,
      );

      return tx.rvt.create({
        data: {
          colaboradorId,
          contratoId: dto.contratoId,
          dataJornada,
          horasTrabalhadas: dto.horasTrabalhadas,
          escopoExecutado: dto.escopoExecutado,
          historico: {
            create: {
              tipo: TipoEventoRvt.SUBMISSAO,
              autorUsuarioId: usuarioId ?? null,
            },
          },
        },
        include: INCLUDE_RVT,
      });
    }, 'Outro apontamento foi registrado ao mesmo tempo. Tente enviar novamente.');
    return mapearRvt(rvt);
  }

  /**
   * RF35 — retifica horas/escopo de um apontamento pendente ou reenvia um
   * rejeitado. O reenvio volta o status a PENDENTE e abre nova janela de
   * cinco dias úteis; a retificação de um pendente mantém o prazo vigente.
   */
  async retificar(
    autor: AutorRvt,
    rvtId: string,
    dto: RetificarRvtDto,
    agora = new Date(),
  ): Promise<RvtResposta> {
    const rvt = await this.emTransacaoSerializavel(async (tx) => {
      const atual = await tx.rvt.findUnique({
        where: { id: rvtId },
        select: {
          colaboradorId: true,
          status: true,
          janelaRetificacaoInicio: true,
          dataJornada: true,
          horasTrabalhadas: true,
          escopoExecutado: true,
        },
      });
      garantirAlteravelPeloAutor(atual, autor.colaboradorId, agora);

      const alteracoes: Record<string, { de: unknown; para: unknown }> = {};
      const horasAtuais = Number(atual.horasTrabalhadas);
      if (
        dto.horasTrabalhadas !== undefined &&
        Math.abs(dto.horasTrabalhadas - horasAtuais) > 1e-9
      ) {
        alteracoes.horasTrabalhadas = {
          de: horasAtuais,
          para: dto.horasTrabalhadas,
        };
      }
      if (
        dto.escopoExecutado !== undefined &&
        dto.escopoExecutado !== atual.escopoExecutado
      ) {
        alteracoes.escopoExecutado = {
          de: atual.escopoExecutado,
          para: dto.escopoExecutado,
        };
      }

      const reenvio = atual.status === StatusRvt.REJEITADO;
      if (!reenvio && Object.keys(alteracoes).length === 0) {
        throw new BadRequestException(
          'Nenhuma alteração informada para retificar.',
        );
      }

      // Rejeitados não contam no teto; ao voltar a PENDENTE, passam a contar
      if (reenvio || alteracoes.horasTrabalhadas) {
        await this.garantirSaldoDiario(
          tx,
          autor.colaboradorId,
          atual.dataJornada,
          dto.horasTrabalhadas ?? horasAtuais,
          rvtId,
        );
      }

      return tx.rvt.update({
        where: { id: rvtId },
        data: {
          horasTrabalhadas: dto.horasTrabalhadas,
          escopoExecutado: dto.escopoExecutado,
          status: StatusRvt.PENDENTE,
          ...(reenvio ? { janelaRetificacaoInicio: agora } : {}),
          historico: {
            create: {
              tipo: reenvio ? TipoEventoRvt.REENVIO : TipoEventoRvt.RETIFICACAO,
              autorUsuarioId: autor.usuarioId ?? null,
              ...(Object.keys(alteracoes).length > 0
                ? { alteracoes: alteracoes as Prisma.InputJsonObject }
                : {}),
            },
          },
        },
        include: INCLUDE_RVT,
      });
    });
    return mapearRvt(rvt, agora);
  }

  /** RF35 — remove um anexo de apontamento pendente dentro da janela */
  async removerEvidencia(
    autor: AutorRvt,
    rvtId: string,
    evidenciaId: string,
    agora = new Date(),
  ): Promise<RvtResposta> {
    const { rvt, caminhoArquivo } = await this.emTransacaoSerializavel(
      async (tx) => {
        const atual = await tx.rvt.findUnique({
          where: { id: rvtId },
          select: {
            colaboradorId: true,
            status: true,
            janelaRetificacaoInicio: true,
            evidencias: { where: { id: evidenciaId } },
          },
        });
        garantirAlteravelPeloAutor(atual, autor.colaboradorId, agora);
        if (atual.status !== StatusRvt.PENDENTE) {
          throw new UnprocessableEntityException(
            'Reenvie o apontamento rejeitado antes de alterar os anexos.',
          );
        }
        const [evidencia] = atual.evidencias;
        if (!evidencia) {
          throw new NotFoundException('Evidência não encontrada.');
        }

        await tx.rvtEvidencia.delete({ where: { id: evidencia.id } });
        const atualizado = await tx.rvt.update({
          where: { id: rvtId },
          data: {
            historico: {
              create: {
                tipo: TipoEventoRvt.RETIFICACAO,
                autorUsuarioId: autor.usuarioId ?? null,
                alteracoes: {
                  evidenciaRemovida: {
                    nomeOriginal: evidencia.nomeOriginal,
                    hashSha256: evidencia.hashSha256,
                  },
                },
              },
            },
          },
          include: INCLUDE_RVT,
        });
        return { rvt: atualizado, caminhoArquivo: evidencia.caminhoArquivo };
      },
    );

    // Só apaga o arquivo depois que o banco confirmou a remoção
    await this.storage.remover(caminhoArquivo);
    return mapearRvt(rvt, agora);
  }

  /** RF32 — apontamentos pendentes dos contratos sob responsabilidade do gestor */
  async listarPendentesDoGestor(
    gestorUsuarioId: string,
  ): Promise<RvtGestorResposta[]> {
    const rvts = await this.prisma.rvt.findMany({
      where: {
        status: StatusRvt.PENDENTE,
        contrato: { gestorResponsavelId: gestorUsuarioId },
      },
      include: INCLUDE_RVT,
      // Mais antigos primeiro: são os que bloqueiam o fechamento (RN05)
      orderBy: [{ dataJornada: 'asc' }, { createdAt: 'asc' }],
      take: 200,
    });
    const agora = new Date();
    return rvts.map((rvt) => mapearRvtGestor(rvt, agora));
  }

  /**
   * RF32 — homologa ou rejeita um apontamento pendente. A homologação
   * trava a edição (RN02); a rejeição exige parecer (RN30) e abre nova
   * janela de cinco dias úteis para retificação e reenvio.
   */
  async deliberar(
    gestor: GestorRvt,
    rvtId: string,
    dto: DeliberarRvtDto,
    agora = new Date(),
  ): Promise<RvtGestorResposta> {
    const rvt = await this.emTransacaoSerializavel(async (tx) => {
      const atual = await tx.rvt.findUnique({
        where: { id: rvtId },
        select: {
          colaboradorId: true,
          status: true,
          contrato: { select: { gestorResponsavelId: true } },
        },
      });
      // Contrato de outro gestor responde como inexistente
      if (!atual || atual.contrato.gestorResponsavelId !== gestor.usuarioId) {
        throw new NotFoundException('Apontamento não encontrado.');
      }
      // RN16 — segregação de funções: ninguém delibera o próprio registro
      if (gestor.colaboradorId && atual.colaboradorId === gestor.colaboradorId) {
        throw new ForbiddenException(
          'Você não pode deliberar o próprio apontamento (RN16).',
        );
      }
      if (atual.status !== StatusRvt.PENDENTE) {
        throw new ConflictException(
          'Somente apontamentos pendentes de homologação podem ser deliberados.',
        );
      }

      const rejeitar = dto.decisao === 'REJEITAR';
      return tx.rvt.update({
        where: { id: rvtId },
        data: {
          status: rejeitar ? StatusRvt.REJEITADO : StatusRvt.HOMOLOGADO,
          // A notificação da rejeição inicia o prazo de reenvio (RN02)
          ...(rejeitar ? { janelaRetificacaoInicio: agora } : {}),
          historico: {
            create: {
              tipo: rejeitar
                ? TipoEventoRvt.REJEICAO
                : TipoEventoRvt.HOMOLOGACAO,
              autorUsuarioId: gestor.usuarioId,
              parecer: dto.parecer ?? null,
            },
          },
        },
        include: INCLUDE_RVT,
      });
    });
    return mapearRvtGestor(rvt, agora);
  }

  async anexarEvidencias(
    colaboradorId: string,
    rvtId: string,
    arquivos: ArquivoRecebido[] | undefined,
    agora = new Date(),
  ): Promise<RvtResposta> {
    if (!arquivos || arquivos.length === 0) {
      throw new BadRequestException(
        'Envie ao menos um arquivo no campo "arquivos".',
      );
    }

    const rvt = await this.prisma.rvt.findUnique({
      where: { id: rvtId },
      select: {
        colaboradorId: true,
        status: true,
        janelaRetificacaoInicio: true,
        _count: { select: { evidencias: true } },
      },
    });
    if (rvt?.colaboradorId === colaboradorId && rvt.status !== StatusRvt.PENDENTE) {
      throw new UnprocessableEntityException(
        'Somente apontamentos pendentes de homologação aceitam novas evidências.',
      );
    }
    // Inclui a trava da janela de cinco dias úteis (RN02)
    garantirAlteravelPeloAutor(rvt, colaboradorId, agora);
    if (rvt._count.evidencias + arquivos.length > MAX_EVIDENCIAS_POR_RVT) {
      throw new UnprocessableEntityException(
        `Cada apontamento aceita no máximo ${MAX_EVIDENCIAS_POR_RVT} evidências.`,
      );
    }

    // RNF19 — valida todos os arquivos antes de gravar qualquer um
    const validados: {
      arquivo: ArquivoRecebido;
      nome: string;
      tipo: TipoEvidencia;
    }[] = [];
    for (const arquivo of arquivos) {
      const nome = sanitizarNomeOriginal(arquivo.originalname);
      if (arquivo.size > TAMANHO_MAXIMO_EVIDENCIA_BYTES) {
        throw new PayloadTooLargeException(
          `O arquivo "${nome}" excede o limite de 5 MB.`,
        );
      }
      const tipo = detectarTipoEvidencia(arquivo.buffer);
      if (!tipo) {
        throw new BadRequestException(
          `O arquivo "${nome}" não é um JPEG, PNG ou PDF válido.`,
        );
      }
      validados.push({ arquivo, nome, tipo });
    }

    const gravados: ArquivoArmazenado[] = [];
    try {
      for (const { arquivo, tipo } of validados) {
        gravados.push(await this.storage.salvar(rvtId, arquivo.buffer, tipo));
      }

      await this.prisma.$transaction(
        validados.map(({ arquivo, nome, tipo }, i) =>
          this.prisma.rvtEvidencia.create({
            data: {
              rvtId,
              nomeOriginal: nome,
              mimeType: tipo.mimeType,
              tamanhoBytes: arquivo.size,
              hashSha256: gravados[i].hashSha256,
              caminhoArquivo: gravados[i].caminhoRelativo,
            },
          }),
        ),
      );
    } catch (erro) {
      // Não deixa arquivos órfãos em disco se algo falhar no meio do caminho
      await Promise.all(
        gravados.map((g) => this.storage.remover(g.caminhoRelativo)),
      );
      throw erro;
    }

    const atualizado = await this.prisma.rvt.findUniqueOrThrow({
      where: { id: rvtId },
      include: INCLUDE_RVT,
    });
    return mapearRvt(atualizado, agora);
  }

  /**
   * Visualização de evidência restrita por perfil (RN16): só o autor do
   * apontamento e o gestor responsável pelo contrato. Os demais recebem 404.
   */
  async obterArquivoEvidencia(
    leitor: LeitorEvidencia,
    rvtId: string,
    evidenciaId: string,
  ): Promise<ArquivoEvidencia> {
    const evidencia = await this.prisma.rvtEvidencia.findFirst({
      where: { id: evidenciaId, rvtId },
      select: {
        nomeOriginal: true,
        mimeType: true,
        caminhoArquivo: true,
        rvt: {
          select: {
            colaboradorId: true,
            contrato: { select: { gestorResponsavelId: true } },
          },
        },
      },
    });

    const ehAutor =
      Boolean(leitor.colaboradorId) &&
      evidencia?.rvt.colaboradorId === leitor.colaboradorId;
    const ehGestorResponsavel =
      leitor.papel === 'GESTOR_OBRAS' &&
      Boolean(leitor.usuarioId) &&
      evidencia?.rvt.contrato.gestorResponsavelId === leitor.usuarioId;
    if (!evidencia || (!ehAutor && !ehGestorResponsavel)) {
      throw new NotFoundException('Evidência não encontrada.');
    }

    return {
      conteudo: await this.storage.abrir(evidencia.caminhoArquivo),
      mimeType: evidencia.mimeType,
      nomeOriginal: evidencia.nomeOriginal,
    };
  }

  async listarDoColaborador(colaboradorId: string): Promise<RvtResposta[]> {
    const rvts = await this.prisma.rvt.findMany({
      where: { colaboradorId },
      include: INCLUDE_RVT,
      orderBy: [{ dataJornada: 'desc' }, { createdAt: 'desc' }],
      take: 100,
    });
    const agora = new Date();
    return rvts.map((rvt) => mapearRvt(rvt, agora));
  }
}
