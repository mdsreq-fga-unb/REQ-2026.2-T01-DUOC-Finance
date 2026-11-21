import { UnauthorizedException } from '@nestjs/common';
import type { ExecutionContext } from '@nestjs/common';
import type { PrismaService } from '../prisma/prisma.service.js';
import { JwtAuthGuard, type RequestAutenticado } from './jwt-auth.guard.js';
import { assinarJwtHs256 } from './jwt.util.js';

const SEGREDO = 'segredo-seguro-para-testes-de-autenticacao-123';
const ambienteOriginal = process.env.JWT_SECRET;
const sessaoFindUnique = vi.fn();
const guard = new JwtAuthGuard({
  sessao: { findUnique: sessaoFindUnique },
} as unknown as PrismaService);

function sessaoBase() {
  return {
    id: 'sessao-1',
    usuarioId: 'usuario-1',
    criadaEm: new Date(Date.now() - 30_000),
    expiraEm: new Date(Date.now() + 60_000),
    revogadaEm: null,
    usuario: {
      id: 'usuario-1',
      ativo: true,
      papel: 'GESTOR_OPERACIONAL',
      senhaAtualizadaEm: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    },
  };
}

function contexto(token?: string) {
  const request = {
    headers: token ? { authorization: `Bearer ${token}` } : {},
  } as RequestAutenticado;
  return {
    request,
    context: {
      switchToHttp: () => ({ getRequest: () => request }),
    } as unknown as ExecutionContext,
  };
}

function jwt(claims: Record<string, unknown> = {}): string {
  return assinarJwtHs256({
    sub: 'usuario-1',
    sid: 'sessao-1',
    papel: 'ADMIN_FINANCEIRO', // antigo papel não deve prevalecer sobre o banco
    iat: Math.floor(Date.now() / 1000),
    exp: Math.floor(Date.now() / 1000) + 300,
    ...claims,
  }, SEGREDO);
}

beforeEach(() => {
  process.env.JWT_SECRET = SEGREDO;
  sessaoFindUnique.mockReset();
  sessaoFindUnique.mockResolvedValue(sessaoBase());
});
afterAll(() => {
  if (ambienteOriginal === undefined) delete process.env.JWT_SECRET;
  else process.env.JWT_SECRET = ambienteOriginal;
});

describe('JwtAuthGuard | sessão real / RN16', () => {
  it('aceita sessão ativa, carrega papel atualizado do banco', async () => {
    const { request, context } = contexto(jwt());
    await expect(guard.canActivate(context)).resolves.toBe(true);
    expect(sessaoFindUnique).toHaveBeenCalledWith({
      where: { id: 'sessao-1' }, include: { usuario: true },
    });
    expect(request.usuario).toMatchObject({
      usuarioId: 'usuario-1', sessaoId: 'sessao-1',
      papel: 'GESTOR_OPERACIONAL', colaboradorId: '',
    });
  });

  it('recusa requisição sem Bearer', async () => {
    await expect(guard.canActivate(contexto().context)).rejects.toThrow(UnauthorizedException);
  });

  it('recusa JWT sem sid e JWT expirado', async () => {
    const semSid = assinarJwtHs256({ sub: 'usuario-1', exp: Math.floor(Date.now()/1000)+300 }, SEGREDO);
    await expect(guard.canActivate(contexto(semSid).context)).rejects.toThrow(UnauthorizedException);
    await expect(guard.canActivate(contexto(jwt({exp: 0})).context)).rejects.toThrow(UnauthorizedException);
  });

  it('recusa sessão revogada e sessão expirada', async () => {
    sessaoFindUnique.mockResolvedValue({ ...sessaoBase(), revogadaEm: new Date() });
    await expect(guard.canActivate(contexto(jwt()).context)).rejects.toThrow(UnauthorizedException);
    sessaoFindUnique.mockResolvedValue({ ...sessaoBase(), expiraEm: new Date(0) });
    await expect(guard.canActivate(contexto(jwt()).context)).rejects.toThrow(UnauthorizedException);
  });

  it('recusa sessão que não pertence ao sub do token', async () => {
    sessaoFindUnique.mockResolvedValue({ ...sessaoBase(), usuarioId: 'outro-usuario' });
    await expect(guard.canActivate(contexto(jwt()).context)).rejects.toThrow(UnauthorizedException);
  });

  it('recusa usuário desativado', async () => {
    sessaoFindUnique.mockResolvedValue({
      ...sessaoBase(), usuario: { ...sessaoBase().usuario, ativo: false },
    });
    await expect(guard.canActivate(contexto(jwt()).context)).rejects.toThrow(UnauthorizedException);
  });

  it('recusa sessão criada antes da troca de senha', async () => {
    sessaoFindUnique.mockResolvedValue({
      ...sessaoBase(),
      usuario: { ...sessaoBase().usuario, senhaAtualizadaEm: new Date(Date.now()+1000) },
    });
    await expect(guard.canActivate(contexto(jwt()).context)).rejects.toThrow(UnauthorizedException);
  });

  it('recusa access token quando a senha já ultrapassou o prazo RF24', async () => {
    sessaoFindUnique.mockResolvedValue({
      ...sessaoBase(),
      usuario: {
        ...sessaoBase().usuario,
        senhaAtualizadaEm: new Date(Date.now() - 91 * 24 * 60 * 60 * 1000),
      },
    });
    await expect(guard.canActivate(contexto(jwt()).context))
      .rejects.toThrow(UnauthorizedException);
  });

  it('usa o colaborador vinculado à conta no banco (usuario.id_colab)', async () => {
    sessaoFindUnique.mockResolvedValue({
      ...sessaoBase(),
      usuario: { ...sessaoBase().usuario, colaboradorId: 'colab-autorizado' },
    });
    const { request, context } = contexto(jwt());
    await guard.canActivate(context);
    expect(request.usuario?.colaboradorId).toBe('colab-autorizado');
    expect(request.usuario?.usuarioId).toBe('usuario-1');
  });

  it('ignora colaboradorId forjado no JWT', async () => {
    const { request, context } = contexto(jwt({ colaboradorId: 'colab-intruso' }));
    await guard.canActivate(context);
    expect(request.usuario?.colaboradorId).toBe('');
  });
});
