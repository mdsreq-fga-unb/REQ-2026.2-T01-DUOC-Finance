import {
  BadRequestException,
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { Role } from './role.enum.js';

const usuarioPublico = {
  id: true,
  email: true,
  papel: true,
  ativo: true,
} as const;

@Injectable()
export class AcessoService {
  constructor(private readonly prisma: PrismaService) {}

  listarUsuarios() {
    return this.prisma.usuario.findMany({
      select: usuarioPublico,
      orderBy: { email: 'asc' },
      take: 50,
    });
  }

  historicoUsuario(usuarioId: string) {
    return this.prisma.usuario.findUnique({
      where: { id: usuarioId },
      select: { id: true },
    }).then((usuario) => {
      if (!usuario) throw new NotFoundException('Usuário não encontrado.');
      return this.prisma.eventoAcesso.findMany({
        where: { usuarioId },
        select: {
          id: true,
          acao: true,
          papelAnterior: true,
          papelNovo: true,
          ativoAnterior: true,
          ativoNovo: true,
          ocorridoEm: true,
          operador: { select: { email: true } },
        },
        orderBy: { ocorridoEm: 'desc' },
        take: 50,
      });
    });
  }

  async alterarPapel(usuarioId: string, operadorId: string, papel: Role) {
    return this.prisma.$transaction(async (tx) => {
      const usuario = await tx.usuario.findUnique({
        where: { id: usuarioId },
        select: usuarioPublico,
      });
      if (!usuario) throw new NotFoundException('Usuário não encontrado.');
      if (usuarioId === operadorId && papel !== usuario.papel) {
        throw new ForbiddenException('Você não pode alterar o próprio papel.');
      }
      if (usuario.papel === papel) return usuario;

      const atualizado = await tx.usuario.update({
        where: { id: usuarioId },
        data: { papel },
        select: usuarioPublico,
      });
      await tx.sessao.updateMany({
        where: { usuarioId, revogadaEm: null },
        data: { revogadaEm: new Date(), refreshTokenHash: null },
      });
      await tx.eventoAcesso.create({
        data: {
          operadorId,
          usuarioId,
          acao: 'PAPEL_ALTERADO',
          papelAnterior: usuario.papel,
          papelNovo: papel,
        },
      });
      return atualizado;
    });
  }

  async alterarStatus(usuarioId: string, operadorId: string, ativo: boolean) {
    return this.prisma.$transaction(async (tx) => {
      const usuario = await tx.usuario.findUnique({
        where: { id: usuarioId },
        select: usuarioPublico,
      });
      if (!usuario) throw new NotFoundException('Usuário não encontrado.');
      if (usuarioId === operadorId && !ativo) {
        throw new ForbiddenException('Você não pode desativar a própria conta.');
      }
      if (usuario.ativo === ativo) return usuario;

      const atualizado = await tx.usuario.update({
        where: { id: usuarioId },
        data: { ativo },
        select: usuarioPublico,
      });
      if (!ativo) {
        await tx.sessao.updateMany({
          where: { usuarioId, revogadaEm: null },
          data: { revogadaEm: new Date(), refreshTokenHash: null },
        });
      }
      await tx.eventoAcesso.create({
        data: {
          operadorId,
          usuarioId,
          acao: ativo ? 'CONTA_ATIVADA' : 'CONTA_DESATIVADA',
          ativoAnterior: usuario.ativo,
          ativoNovo: ativo,
        },
      });
      return atualizado;
    });
  }

  validarPapel(valor: unknown): Role {
    const papel = typeof valor === 'string'
      ? Object.values(Role).find((opcao) => opcao === valor)
      : undefined;
    if (papel) return papel;
    throw new BadRequestException('Informe um papel de acesso válido.');
  }

  validarStatus(valor: unknown): boolean {
    if (typeof valor === 'boolean') return valor;
    throw new BadRequestException('Informe o status da conta como booleano.');
  }
}
