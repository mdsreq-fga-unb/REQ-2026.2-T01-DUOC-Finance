import {
  BadRequestException, ConflictException, Injectable, NotFoundException, UnprocessableEntityException,
} from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { Prisma, StatusContratoObra, StatusReembolso } from '../generated/prisma/client.js';
import type { UsuarioAutenticado } from '../auth/jwt-auth.guard.js';
import { PrismaService } from '../prisma/prisma.service.js';
import {
  detectarTipoEvidencia, sanitizarNomeOriginal,
  type ArquivoRecebido,
} from '../rvt/evidencias/arquivo-evidencia.util.js';
import type { CriarReembolsoDto } from './dto/criar-reembolso.dto.js';
import type { DeliberarReembolsoDto } from './dto/deliberar-reembolso.dto.js';
import { ComprovanteStorageService } from './comprovante-storage.service.js';

export const LIMITE_COMPROVANTE_BYTES = 5 * 1024 * 1024;

const INCLUDE_REEMBOLSO = {
  contrato: { select: { id: true, codigo: true, nome: true } },
  solicitante: { select: { id: true, email: true } },
} satisfies Prisma.SolicitacaoReembolsoInclude;

type ReembolsoCompleto = Prisma.SolicitacaoReembolsoGetPayload<{include: typeof INCLUDE_REEMBOLSO}>;

function respostaReembolso(item: ReembolsoCompleto) {
  return {
    id: item.id,
    codigo: item.codigo,
    solicitante: item.solicitante,
    contrato: item.contrato,
    rvtId: item.rvtId,
    categoria: item.categoria,
    descricao: item.descricao,
    valorCentavos: item.valorCentavos,
    valorAprovadoCentavos: item.valorAprovadoCentavos,
    dataDespesa: item.dataDespesa.toISOString().slice(0, 10),
    status: item.status,
    parecer: item.parecer,
    deliberadoEm: item.deliberadoEm?.toISOString() ?? null,
    comprovante: {
      nomeOriginal: item.comprovanteNomeOriginal,
      mimeType: item.comprovanteMimeType,
      tamanhoBytes: item.comprovanteTamanhoBytes,
    },
    createdAt: item.createdAt.toISOString(),
    updatedAt: item.updatedAt.toISOString(),
  };
}


@Injectable()
export class ReembolsosService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly storage: ComprovanteStorageService,
  ) {}

  /** RF07 — grava solicitação e comprovante; o solicitante vem exclusivamente da sessão JWT. */
  async criar(usuario: UsuarioAutenticado & { usuarioId: string }, dto: CriarReembolsoDto, comprovante?: ArquivoRecebido) {
    if (!comprovante || !Buffer.isBuffer(comprovante.buffer)) {
      throw new BadRequestException('Comprovante fiscal obrigatório.');
    }
    if (comprovante.size < 1 || comprovante.size > LIMITE_COMPROVANTE_BYTES ||
        comprovante.buffer.length !== comprovante.size) {
      throw new BadRequestException('Comprovante inválido ou maior que 5 MB.');
    }
    const tipo = detectarTipoEvidencia(comprovante.buffer);
    if (!tipo) {
      throw new BadRequestException('Comprovante deve ser PDF, JPG ou PNG válido.');
    }

    const contrato = await this.prisma.contratoObra.findUnique({
      where: { id: dto.contratoId }, select: { id: true, codigo: true, nome: true, status: true },
    });
    if (!contrato || contrato.status !== StatusContratoObra.ATIVO) {
      throw new UnprocessableEntityException('Selecione um contrato de obra ativo.');
    }

    if (dto.rvtId) {
      const rvt = await this.prisma.rvt.findUnique({
        where: { id: dto.rvtId },
        select: { contratoId: true, colaboradorId: true },
      });
      if (!usuario.colaboradorId || !rvt || rvt.contratoId !== dto.contratoId ||
          rvt.colaboradorId !== usuario.colaboradorId) {
        throw new UnprocessableEntityException('O RVT deve pertencer ao solicitante e ao contrato informado.');
      }
    }

    const id = randomUUID();
    const codigo = `DES-${randomUUID().replaceAll('-', '').slice(0, 24).toUpperCase()}`;
    const arquivo = await this.storage.salvar(id, comprovante.buffer, tipo);
    try {
      const criado = await this.prisma.solicitacaoReembolso.create({
        data: {
          id, codigo,
          solicitanteId: usuario.usuarioId,
          contratoId: dto.contratoId,
          rvtId: dto.rvtId,
          categoria: dto.categoria,
          descricao: dto.descricao,
          valorCentavos: dto.valorCentavos,
          dataDespesa: new Date(`${dto.dataDespesa}T00:00:00.000Z`),
          comprovanteNomeOriginal: sanitizarNomeOriginal(comprovante.originalname),
          comprovanteMimeType: tipo.mimeType,
          comprovanteTamanhoBytes: comprovante.size,
          comprovanteHashSha256: arquivo.hashSha256,
          comprovanteChaveArquivo: arquivo.chave,
        },
      });
      // Nunca revelar hash, path do storage ou identidade completa do usuário na resposta.
      return {
        id: criado.id,
        codigo: criado.codigo,
        status: criado.status,
        valorCentavos: criado.valorCentavos,
        dataDespesa: criado.dataDespesa.toISOString().slice(0, 10),
        contrato: { id: contrato.id, codigo: contrato.codigo, nome: contrato.nome },
        categoria: criado.categoria,
        descricao: criado.descricao,
        comprovante: {
          nomeOriginal: criado.comprovanteNomeOriginal,
          mimeType: criado.comprovanteMimeType,
          tamanhoBytes: criado.comprovanteTamanhoBytes,
        },
        createdAt: criado.createdAt.toISOString(),
      };
    } catch (erro) {
      await this.storage.remover(arquivo.chave).catch(() => undefined);
      throw erro;
    }
  }
  /** RF07 — consulta estritamente as solicitações da conta do JWT, nunca por ID do cliente. */
  async listarMeus(usuarioId: string) {
    const itens = await this.prisma.solicitacaoReembolso.findMany({
      where: { solicitanteId: usuarioId },
      include: INCLUDE_REEMBOLSO,
      orderBy: { createdAt: 'desc' },
      take: 100,
    });
    return itens.map(respostaReembolso);
  }

  /** RF08 — a autorização de ADMIN_FINANCEIRO ocorre também no controller. */
  async listarAdministrativo() {
    const itens = await this.prisma.solicitacaoReembolso.findMany({
      include: INCLUDE_REEMBOLSO,
      orderBy: { createdAt: 'desc' },
      take: 100,
    });
    return itens.map(respostaReembolso);
  }

  /** O não titular recebe 404, sem confirmar a existência do documento. */
  private async encontrarAutorizado(
    usuario: UsuarioAutenticado & { usuarioId: string },
    id: string,
  ) {
    const registro = await this.prisma.solicitacaoReembolso.findFirst({
      where: {
        id,
        ...(usuario.papel === 'ADMIN_FINANCEIRO' ? {} : { solicitanteId: usuario.usuarioId }),
      },
      include: INCLUDE_REEMBOLSO,
    });
    if (!registro) throw new NotFoundException('Solicitação não encontrada.');
    return registro;
  }

  async detalhar(usuario: UsuarioAutenticado & { usuarioId: string }, id: string) {
    return respostaReembolso(await this.encontrarAutorizado(usuario, id));
  }

  async obterComprovante(usuario: UsuarioAutenticado & { usuarioId: string }, id: string) {
    const registro = await this.encontrarAutorizado(usuario, id);
    const conteudo = await this.storage.abrir(registro.comprovanteChaveArquivo);
    return { conteudo, mimeType: registro.comprovanteMimeType, nomeOriginal: registro.comprovanteNomeOriginal };
  }

  /** RF08 — compare-and-swap no status: evita deliberações concorrentes/duplas. */
  async deliberar(
    usuarioId: string,
    id: string,
    dto: DeliberarReembolsoDto,
  ) {
    const atual = await this.prisma.solicitacaoReembolso.findUnique({
      where: { id }, select: { id: true, valorCentavos: true, status: true },
    });
    if (!atual) throw new NotFoundException('Solicitação não encontrada.');
    if (atual.status !== StatusReembolso.PENDENTE) {
      throw new ConflictException('Solicitação já deliberada.');
    }
    const resultado = await this.prisma.solicitacaoReembolso.updateMany({
      where: { id, status: StatusReembolso.PENDENTE },
      data: {
        status: dto.decisao === 'APROVAR' ? StatusReembolso.APROVADO : StatusReembolso.REJEITADO,
        parecer: dto.parecer,
        valorAprovadoCentavos: dto.decisao === 'APROVAR' ? atual.valorCentavos : null,
        deliberadoPorId: usuarioId,
        deliberadoEm: new Date(),
      },
    });
    if (resultado.count !== 1) throw new ConflictException('Outra decisão já foi registrada.');
    const atualizado = await this.prisma.solicitacaoReembolso.findUniqueOrThrow({
      where: { id }, include: INCLUDE_REEMBOLSO,
    });
    return respostaReembolso(atualizado);
  }

  /** RF07 — contratos ativos para vínculo de despesas por qualquer perfil habilitado. */
  listarContratosAtivos() {
    return this.prisma.contratoObra.findMany({
      where: { status: StatusContratoObra.ATIVO },
      select: { id: true, codigo: true, nome: true, cliente: true },
      orderBy: { nome: 'asc' },
    });
  }
}
