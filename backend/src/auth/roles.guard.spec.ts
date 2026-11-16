import 'reflect-metadata';
import { ForbiddenException, UnauthorizedException } from '@nestjs/common';
import type { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import type { RequestAutenticado, UsuarioAutenticado } from './jwt-auth.guard.js';
import { Role } from './role.enum.js';
import { Roles, ROLES_KEY } from './roles.decorator.js';
import { RolesGuard } from './roles.guard.js';

function criarContexto(usuario?: UsuarioAutenticado): ExecutionContext {
  const request = { usuario } as RequestAutenticado;
  return {
    getHandler: () => criarContexto,
    getClass: () => RolesGuard,
    switchToHttp: () => ({ getRequest: () => request }),
  } as unknown as ExecutionContext;
}

describe('RolesGuard | RF14 / RN15', () => {
  const reflector = { getAllAndOverride: vi.fn() };
  const guard = new RolesGuard(reflector as unknown as Reflector);

  beforeEach(() => {
    reflector.getAllAndOverride.mockReset();
  });

  it('autoriza papel presente na lista de permissões', () => {
    reflector.getAllAndOverride.mockReturnValue([
      Role.ADMIN_FINANCEIRO,
      Role.GESTOR_OPERACIONAL,
    ]);
    expect(
      guard.canActivate(
        criarContexto({ colaboradorId: 'colab-1', papel: Role.GESTOR_OPERACIONAL }),
      ),
    ).toBe(true);
  });

  it('retorna 403 para papel sem permissão', () => {
    reflector.getAllAndOverride.mockReturnValue([Role.ADMIN_FINANCEIRO]);
    expect(() =>
      guard.canActivate(
        criarContexto({ colaboradorId: 'colab-2', papel: Role.TECNICO_CAMPO }),
      ),
    ).toThrow(ForbiddenException);
  });

  it('retorna 403 para usuário sem papel no token', () => {
    reflector.getAllAndOverride.mockReturnValue([Role.ADMIN_FINANCEIRO]);
    expect(() =>
      guard.canActivate(criarContexto({ colaboradorId: 'colab-3' })),
    ).toThrow(ForbiddenException);
  });

  it('retorna 401 se o guard de autenticação não forneceu usuário', () => {
    reflector.getAllAndOverride.mockReturnValue([Role.ADMIN_FINANCEIRO]);
    expect(() => guard.canActivate(criarContexto())).toThrow(
      UnauthorizedException,
    );
  });

  it('não adiciona restrição de papel quando não há @Roles', () => {
    reflector.getAllAndOverride.mockReturnValue(undefined);
    expect(guard.canActivate(criarContexto())).toBe(true);
  });

  it('consulta metadados do método antes dos do controller', () => {
    reflector.getAllAndOverride.mockReturnValue([Role.AUDITOR_EXTERNO]);
    guard.canActivate(
      criarContexto({ colaboradorId: 'colab-4', papel: Role.AUDITOR_EXTERNO }),
    );
    expect(reflector.getAllAndOverride).toHaveBeenCalledWith(
      ROLES_KEY,
      [criarContexto, RolesGuard],
    );
  });
});

describe('@Roles', () => {
  it('registra os papéis canônicos como metadados', () => {
    class ControllerFake {
      @Roles(Role.ADMIN_FINANCEIRO, Role.AUDITOR_EXTERNO)
      rota() {}
    }
    expect(Reflect.getMetadata(ROLES_KEY, ControllerFake.prototype.rota)).toEqual([
      Role.ADMIN_FINANCEIRO,
      Role.AUDITOR_EXTERNO,
    ]);
  });
});
