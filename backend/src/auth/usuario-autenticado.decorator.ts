import {
  createParamDecorator,
  ExecutionContext,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import type {
  RequestAutenticado,
  UsuarioAutenticado as Usuario,
} from './jwt-auth.guard.js';

/**
 * Usado atualmente pelo RVT: exige vínculo explícito com colaborador.
 * Nunca usa o `sub` (ID da conta) como ID de colaborador por aproximação.
 */
export const UsuarioAutenticado = createParamDecorator(
  (_dados: unknown, context: ExecutionContext): Usuario => {
    const request = context.switchToHttp().getRequest<RequestAutenticado>();
    if (!request.usuario) {
      throw new UnauthorizedException('Usuário não autenticado.');
    }
    if (!request.usuario.colaboradorId) {
      throw new ForbiddenException('Conta sem vínculo com colaborador de campo.');
    }
    return request.usuario;
  },
);

/**
 * Conta da sessão sem exigir vínculo com colaborador (ex.: gestor que
 * delibera apontamentos). Garante que o ID da conta está presente.
 */
export const UsuarioDaSessao = createParamDecorator(
  (
    _dados: unknown,
    context: ExecutionContext,
  ): Usuario & { usuarioId: string } => {
    const request = context.switchToHttp().getRequest<RequestAutenticado>();
    const usuario = request.usuario;
    if (!usuario?.usuarioId) {
      throw new UnauthorizedException('Usuário não autenticado.');
    }
    return { ...usuario, usuarioId: usuario.usuarioId };
  },
);
