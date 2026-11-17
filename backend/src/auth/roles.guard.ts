import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import type { RequestAutenticado } from './jwt-auth.guard.js';
import { Role } from './role.enum.js';
import { ROLES_KEY } from './roles.decorator.js';

/**
 * Autoriza rotas marcadas com @Roles(...).
 * Deve ser usado DEPOIS do JwtAuthGuard: @UseGuards(JwtAuthGuard, RolesGuard).
 */
@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const papeisPermitidos = this.reflector.getAllAndOverride<readonly Role[]>(
      ROLES_KEY,
      [context.getHandler(), context.getClass()],
    );

    // Rotas sem @Roles continuam sujeitas aos outros guards configurados.
    if (!papeisPermitidos?.length) {
      return true;
    }

    const request = context.switchToHttp().getRequest<RequestAutenticado>();
    const usuario = request.usuario;
    if (!usuario) {
      throw new UnauthorizedException('Usuário não autenticado.');
    }
    if (!usuario.papel || !papeisPermitidos.some((p) => p === usuario.papel)) {
      throw new ForbiddenException('Seu perfil não tem acesso a este recurso.');
    }
    return true;
  }
}
