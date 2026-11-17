import {
  createParamDecorator,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import type {
  RequestAutenticado,
  UsuarioAutenticado as Usuario,
} from './jwt-auth.guard.js';

/** Injeta o usuário populado pelo JwtAuthGuard. */
export const UsuarioAutenticado = createParamDecorator(
  (_dados: unknown, context: ExecutionContext): Usuario => {
    const request = context.switchToHttp().getRequest<RequestAutenticado>();
    if (!request.usuario) {
      throw new UnauthorizedException('Usuário não autenticado.');
    }
    return request.usuario;
  },
);
