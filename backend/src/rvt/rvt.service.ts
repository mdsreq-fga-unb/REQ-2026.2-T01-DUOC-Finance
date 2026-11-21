import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
  PayloadTooLargeException,
  UnprocessableEntityException,
} from '@nestjs/common';
import {
  Prisma,
  StatusContratoObra,
  StatusRvt,
} from '../generated/prisma/client.js';
import { PrismaService } from '../prisma/prisma.service.js';
import type { CriarRvtDto } from './dto/criar-rvt.dto.js';
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
  LIMITE_HORAS_DIARIAS,
  MAX_EVIDENCIAS_POR_RVT,
  TAMANHO_MAXIMO_EVIDENCIA_BYTES,
} from './rvt.constants.js';

const INCLUDE_RVT = {
  contrato: { select: { id: true, codigo: true, nome: true } },
  evidencias: { orderBy: { createdAt: 'asc' as const } },
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

export interface RvtResposta {
  id: string;
  contrato: { id: string; codigo: string; nome: string };
  dataJornada: string;
  horasTrabalhadas: number;
  escopoExecutado: string;
  status: StatusRvt;
  justificativaRejeicao: string | null;
  evidencias: EvidenciaResposta[];
  createdAt: string;
  updatedAt: string;
}

function formatarHoras(horas: number): string {
  return horas.toLocaleString('pt-BR', { maximumFractionDigits: 2 });
}

export function mapearRvt(rvt: RvtComRelacoes): RvtResposta {
  return {
    id: rvt.id,
    contrato: rvt.contrato,
    dataJornada: rvt.dataJornada.toISOString().slice(0, 10),
    horasTrabalhadas: Number(rvt.horasTrabalhadas),
    escopoExecutado: rvt.escopoExecutado,
    status: rvt.status,
    justificativaRejeicao: rvt.justificativaRejeicao ?? null,
    evidencias: rvt.evidencias.map((e) => ({
      id: e.id,
      nomeOriginal: e.nomeOriginal,
      mimeType: e.mimeType,
      tamanhoBytes: e.tamanhoBytes,
      hashSha256: e.hashSha256,
      createdAt: e.createdAt.toISOString(),
    })),
    createdAt: rvt.createdAt.toISOString(),
    updatedAt: rvt.updatedAt.toISOString(),
  };
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

  async criar(colaboradorId: string, dto: CriarRvtDto): Promise<RvtResposta> {
    const dataJornada = new Date(`${dto.dataJornada}T00:00:00.000Z`);

    try {
      const rvt = await this.prisma.$transaction(
        async (tx) => {
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

          // RN05 — soma das horas do dia (rejeitados não contam)
          const agregado = await tx.rvt.aggregate({
            _sum: { horasTrabalhadas: true },
            where: {
              colaboradorId,
              dataJornada,
              status: { not: StatusRvt.REJEITADO },
            },
          });
          const jaApontadas = Number(agregado._sum.horasTrabalhadas ?? 0);
          if (
            jaApontadas + dto.horasTrabalhadas >
            LIMITE_HORAS_DIARIAS + 1e-9
          ) {
            const restantes = Math.max(LIMITE_HORAS_DIARIAS - jaApontadas, 0);
            throw new UnprocessableEntityException(
              `Limite de ${LIMITE_HORAS_DIARIAS}h diárias excedido (RN05): ` +
                `já existem ${formatarHoras(jaApontadas)}h apontadas nesta data; ` +
                `restam ${formatarHoras(restantes)}h.`,
            );
          }

          return tx.rvt.create({
            data: {
              colaboradorId,
              contratoId: dto.contratoId,
              dataJornada,
              horasTrabalhadas: dto.horasTrabalhadas,
              escopoExecutado: dto.escopoExecutado,
            },
            include: INCLUDE_RVT,
          });
        },
        // Serializable evita que dois envios simultâneos furem o teto diário
        { isolationLevel: Prisma.TransactionIsolationLevel.Serializable },
      );
      return mapearRvt(rvt);
    } catch (erro) {
      if (
        erro instanceof Prisma.PrismaClientKnownRequestError &&
        erro.code === 'P2034'
      ) {
        throw new ConflictException(
          'Outro apontamento foi registrado ao mesmo tempo. Tente enviar novamente.',
        );
      }
      throw erro;
    }
  }

  async anexarEvidencias(
    colaboradorId: string,
    rvtId: string,
    arquivos: ArquivoRecebido[] | undefined,
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
        _count: { select: { evidencias: true } },
      },
    });
    // Apontamento de outro colaborador responde como inexistente
    if (!rvt || rvt.colaboradorId !== colaboradorId) {
      throw new NotFoundException('Apontamento não encontrado.');
    }
    if (rvt.status !== StatusRvt.PENDENTE) {
      throw new UnprocessableEntityException(
        'Somente apontamentos pendentes de homologação aceitam novas evidências.',
      );
    }
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
    return mapearRvt(atualizado);
  }

  async listarDoColaborador(colaboradorId: string): Promise<RvtResposta[]> {
    const rvts = await this.prisma.rvt.findMany({
      where: { colaboradorId },
      include: INCLUDE_RVT,
      orderBy: [{ dataJornada: 'desc' }, { createdAt: 'desc' }],
      take: 100,
    });
    return rvts.map(mapearRvt);
  }
    async listarParaAprovacao(filtros: {
    status?: string;
    contratoId?: string;
  }): Promise<RvtResposta[]> {
    let status: StatusRvt | undefined;

    if (filtros.status) {
      if (!Object.values(StatusRvt).includes(filtros.status as StatusRvt)) {
        throw new BadRequestException('Status de RVT inválido.');
      }
      status = filtros.status as StatusRvt;
    }

    const rvts = await this.prisma.rvt.findMany({
      where: {
        ...(status ? { status } : { status: StatusRvt.PENDENTE }),
        ...(filtros.contratoId ? { contratoId: filtros.contratoId } : {}),
      },
      include: INCLUDE_RVT,
      orderBy: [{ dataJornada: 'asc' }, { createdAt: 'asc' }],
      take: 100,
    });

    return rvts.map(mapearRvt);
  }

  async decidir(
    rvtId: string,
    decisao: 'HOMOLOGADO' | 'REJEITADO',
    justificativa?: string,
  ): Promise<RvtResposta> {
    const motivo = justificativa?.trim() ?? '';

    if (decisao !== 'HOMOLOGADO' && decisao !== 'REJEITADO') {
      throw new BadRequestException('A decisão deve ser HOMOLOGADO ou REJEITADO.');
    }
    if (decisao === 'REJEITADO' && !motivo) {
      throw new BadRequestException(
        'A justificativa é obrigatória para reprovar o apontamento.',
      );
    }

    const resultado = await this.prisma.rvt.updateMany({
      where: { id: rvtId, status: StatusRvt.PENDENTE },
      data: {
        status: decisao,
        justificativaRejeicao:
          decisao === 'REJEITADO' ? motivo : null,
      },
    });

    if (resultado.count === 0) {
      const existente = await this.prisma.rvt.findUnique({
        where: { id: rvtId },
        select: { id: true },
      });
      if (!existente) throw new NotFoundException('Apontamento não encontrado.');
      throw new ConflictException(
        'Somente apontamentos pendentes podem ser decididos.',
      );
    }

    const atualizado = await this.prisma.rvt.findUniqueOrThrow({
      where: { id: rvtId },
      include: INCLUDE_RVT,
    });

    return mapearRvt(atualizado);
  }
}
