import {
  BadRequestException, Injectable, UnprocessableEntityException,
} from '@nestjs/common';
import { randomUUID } from 'node:crypto';
import { StatusContratoObra } from '../generated/prisma/client.js';
import type { UsuarioAutenticado } from '../auth/jwt-auth.guard.js';
import { PrismaService } from '../prisma/prisma.service.js';
import {
  detectarTipoEvidencia, sanitizarNomeOriginal,
  type ArquivoRecebido,
} from '../rvt/evidencias/arquivo-evidencia.util.js';
import type { CriarReembolsoDto } from './dto/criar-reembolso.dto.js';
import { ComprovanteStorageService } from './comprovante-storage.service.js';

export const LIMITE_COMPROVANTE_BYTES = 5 * 1024 * 1024;

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
}
