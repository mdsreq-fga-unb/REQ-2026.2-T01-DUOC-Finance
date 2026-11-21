import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import type { Request } from 'express';
import { PrismaService } from '../prisma/prisma.service.js';
import { JwtInvalidoError, verificarJwtHs256 } from './jwt.util.js';
import { senhaExpirada } from './politica-senha.util.js';

export interface UsuarioAutenticado {
  usuarioId?: string;
  sessaoId?: string;
  /**
   * Colaborador vinculado à conta (usuario.id_colab, DER). Vazio quando a
   * conta não é de um colaborador de campo (ex.: admin inicial).
   */
  colaboradorId: string;
  papel?: string;
}

export interface RequestAutenticado extends Request {
  usuario?: UsuarioAutenticado;
}

/**
 * Valida assinatura e expiração do JWT E a sessão/conta no PostgreSQL.
 * Tokens sem sid são recusados; revogação passa a ter efeito imediato.
 */
@Injectable()
export class JwtAuthGuard implements CanActivate {
  private readonly logger = new Logger(JwtAuthGuard.name);

  constructor(private readonly prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<RequestAutenticado>();
    const [tipo, token] = request.headers.authorization?.split(' ') ?? [];
    if (tipo !== 'Bearer' || !token) {
      throw new UnauthorizedException('Token de acesso ausente.');
    }

    const segredo = process.env.JWT_SECRET;
    if (!segredo || Buffer.byteLength(segredo, 'utf8') < 32) {
      this.logger.error('JWT_SECRET inválido ou ausente; requisição recusada.');
      throw new UnauthorizedException('Autenticação indisponível.');
    }

    let sub: string;
    let sid: string;
    try {
      const payload = verificarJwtHs256(token, segredo);
      if (
        typeof payload.sub !== 'string' || !payload.sub.trim() ||
        typeof payload.sid !== 'string' || !payload.sid.trim()
      ) {
        throw new JwtInvalidoError('Token sem identificação de sessão.');
      }
      sub = payload.sub;
      sid = payload.sid;
    } catch (erro) {
      if (erro instanceof JwtInvalidoError) {
        throw new UnauthorizedException(erro.message);
      }
      throw erro;
    }

    const sessao = await this.prisma.sessao.findUnique({
      where: { id: sid },
      include: { usuario: true },
    });
    if (
      !sessao ||
      sessao.usuarioId !== sub ||
      sessao.revogadaEm !== null ||
      sessao.expiraEm <= new Date() ||
      !sessao.usuario.ativo ||
      sessao.usuario.senhaAtualizadaEm.getTime() > sessao.criadaEm.getTime() ||
      senhaExpirada(sessao.usuario.senhaAtualizadaEm)
    ) {
      throw new UnauthorizedException('Sessão inválida ou revogada.');
    }

    request.usuario = {
      usuarioId: sessao.usuario.id,
      sessaoId: sessao.id,
      // Vínculo e papel atuais do banco; claims antigos do JWT não prevalecem.
      colaboradorId: sessao.usuario.colaboradorId ?? '',
      papel: sessao.usuario.papel,
    };
    return true;
  }
}
