import {
  CanActivate,
  ExecutionContext,
  Injectable,
  Logger,
  UnauthorizedException,
} from '@nestjs/common';
import type { Request } from 'express';
import { JwtInvalidoError, verificarJwtHs256 } from './jwt.util.js';

export interface UsuarioAutenticado {
  colaboradorId: string;
  papel?: string;
}

export interface RequestAutenticado extends Request {
  usuario?: UsuarioAutenticado;
}

/**
 * Exige um Bearer token válido e expõe o colaborador autenticado em
 * `request.usuario`. O colaborador nunca é aceito pelo corpo da requisição.
 */
@Injectable()
export class JwtAuthGuard implements CanActivate {
  private readonly logger = new Logger(JwtAuthGuard.name);

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<RequestAutenticado>();
    const [tipo, token] = request.headers.authorization?.split(' ') ?? [];

    if (tipo !== 'Bearer' || !token) {
      throw new UnauthorizedException('Token de acesso ausente.');
    }

    const segredo = process.env.JWT_SECRET;
    if (!segredo) {
      this.logger.error('JWT_SECRET não configurado; requisição recusada.');
      throw new UnauthorizedException('Autenticação indisponível.');
    }

    try {
      const payload = verificarJwtHs256(token, segredo);
      const colaboradorId = payload.colaboradorId ?? payload.sub;
      if (typeof colaboradorId !== 'string' || !colaboradorId.trim()) {
        throw new JwtInvalidoError('Token sem identificação do colaborador.');
      }
      request.usuario = {
        colaboradorId,
        papel: typeof payload.papel === 'string' ? payload.papel : undefined,
      };
      return true;
    } catch (erro) {
      if (erro instanceof JwtInvalidoError) {
        throw new UnauthorizedException(erro.message);
      }
      throw erro;
    }
  }
}
