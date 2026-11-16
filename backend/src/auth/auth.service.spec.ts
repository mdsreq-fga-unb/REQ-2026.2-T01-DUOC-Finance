import { ServiceUnavailableException, UnauthorizedException } from '@nestjs/common';
import type { PrismaService } from '../prisma/prisma.service.js';
import { verificarJwtHs256 } from './jwt.util.js';
import {
  AuthService,
  ACCESS_TOKEN_TTL_SECONDS,
  SESSAO_TTL_SECONDS,
} from './auth.service.js';
import { gerarHashSenha } from './senha.util.js';
import { gerarRefreshToken, hashRefreshToken } from './refresh-token.util.js';

const SEGREDO = 'segredo-seguro-para-testes-de-autenticacao-123';
const SENHA = 'SenhaForteDeTeste!2026';
const USUARIO_ID = '22f0e6c0-7a87-4789-9940-ddda33071733';
const SESSAO_ID = 'c66782e9-3686-4d0a-8e5a-8299f4e89ef4';
const ambienteOriginal = process.env.JWT_SECRET;
const usuarioFindUnique = vi.fn();
const sessaoCreate = vi.fn();
const sessaoFindUnique = vi.fn();
const sessaoUpdateMany = vi.fn();
const prisma = {
  usuario: { findUnique: usuarioFindUnique },
  sessao: {
    create: sessaoCreate,
    findUnique: sessaoFindUnique,
    updateMany: sessaoUpdateMany,
  },
} as unknown as PrismaService;
const service = new AuthService(prisma);

let senhaHash: string;

function usuarioBase() {
  return {
    id: USUARIO_ID,
    email: 'admin@duoc.com.br',
    senhaHash,
    papel: 'ADMIN_FINANCEIRO',
    ativo: true,
    senhaAtualizadaEm: new Date('2026-01-01T00:00:00Z'),
  };
}

function sessaoBase() {
  return {
    id: SESSAO_ID,
    usuarioId: USUARIO_ID,
    criadaEm: new Date(Date.now() - 30_000),
    expiraEm: new Date(Date.now() + 60_000),
    revogadaEm: null,
    usuario: usuarioBase(),
  };
}

beforeAll(async () => {
  senhaHash = await gerarHashSenha(SENHA);
});

beforeEach(() => {
  process.env.JWT_SECRET = SEGREDO;
  usuarioFindUnique.mockReset();
  sessaoCreate.mockReset();
  sessaoFindUnique.mockReset();
  sessaoUpdateMany.mockReset();
  usuarioFindUnique.mockResolvedValue(usuarioBase());
  sessaoCreate.mockResolvedValue({ id: SESSAO_ID });
  sessaoFindUnique.mockResolvedValue(sessaoBase());
  sessaoUpdateMany.mockResolvedValue({ count: 1 });
});

afterAll(() => {
  if (ambienteOriginal === undefined) delete process.env.JWT_SECRET;
  else process.env.JWT_SECRET = ambienteOriginal;
});

describe('AuthService.login | RF13 / RNF01 / RNF13', () => {
  it('valida a senha, cria sessão e emite access JWT e refresh token', async () => {
    const resposta = await service.login('  ADMIN@DUOC.COM.BR ', SENHA);
    expect(usuarioFindUnique).toHaveBeenCalledWith({
      where: { email: 'admin@duoc.com.br' },
    });
    expect(sessaoCreate).toHaveBeenCalledWith({
      data: {
        usuarioId: USUARIO_ID,
        expiraEm: expect.any(Date),
        refreshTokenHash: hashRefreshToken(resposta.refreshToken),
      },
    });
    expect(resposta.tokenType).toBe('Bearer');
    expect(resposta.expiresIn).toBe(ACCESS_TOKEN_TTL_SECONDS);
    expect(resposta.refreshExpiresIn).toBe(SESSAO_TTL_SECONDS);
    expect(resposta.usuario).toEqual({
      id: USUARIO_ID,
      email: 'admin@duoc.com.br',
      papel: 'ADMIN_FINANCEIRO',
    });
    expect(JSON.stringify(resposta)).not.toContain(senhaHash);
    expect(JSON.stringify(resposta)).not.toContain(SENHA);
    const claims = verificarJwtHs256(resposta.accessToken, SEGREDO);
    expect(claims).toMatchObject({
      sub: USUARIO_ID,
      sid: SESSAO_ID,
      papel: 'ADMIN_FINANCEIRO',
    });
    expect(claims.colaboradorId).toBeUndefined();
    expect(claims.exp - (claims.iat ?? 0)).toBe(15 * 60);
  });

  it('recusa senha incorreta sem criar sessão', async () => {
    await expect(service.login('admin@duoc.com.br', 'errada')).rejects.toThrow(
      UnauthorizedException,
    );
    expect(sessaoCreate).not.toHaveBeenCalled();
  });

  it('recusa e-mail desconhecido sem criar sessão', async () => {
    usuarioFindUnique.mockResolvedValue(null);
    await expect(service.login('naoexiste@duoc.com.br', SENHA)).rejects.toThrow(
      UnauthorizedException,
    );
    expect(sessaoCreate).not.toHaveBeenCalled();
  });

  it('recusa usuário inativo mesmo com senha válida', async () => {
    usuarioFindUnique.mockResolvedValue({ ...usuarioBase(), ativo: false });
    await expect(service.login('admin@duoc.com.br', SENHA)).rejects.toThrow(
      UnauthorizedException,
    );
    expect(sessaoCreate).not.toHaveBeenCalled();
  });

  it('recusa iniciar autenticação sem segredo JWT forte', async () => {
    process.env.JWT_SECRET = 'curto';
    await expect(service.login('admin@duoc.com.br', SENHA)).rejects.toThrow(
      ServiceUnavailableException,
    );
    expect(usuarioFindUnique).not.toHaveBeenCalled();
  });
});

describe('AuthService.renovar / logout | RF18 / RN16', () => {
  it('rotaciona refresh token, preserva sid e rejeita reutilização do antigo', async () => {
    const original = gerarRefreshToken();
    let hashAtual = hashRefreshToken(original);
    sessaoFindUnique.mockImplementation(({ where }: { where: { refreshTokenHash: string } }) =>
      where.refreshTokenHash === hashAtual ? sessaoBase() : null,
    );
    sessaoUpdateMany.mockImplementation(
      ({ where, data }: { where: { refreshTokenHash: string }; data: { refreshTokenHash: string } }) => {
        if (where.refreshTokenHash !== hashAtual) return { count: 0 };
        hashAtual = data.refreshTokenHash;
        return { count: 1 };
      },
    );

    const resposta = await service.renovar(original);
    // O refresh também não pode devolver campos internos da conta.
    expect(resposta.usuario).toEqual({
      id: USUARIO_ID,
      email: 'admin@duoc.com.br',
      papel: 'ADMIN_FINANCEIRO',
    });
    expect(JSON.stringify(resposta)).not.toContain(senhaHash);
    expect(resposta.refreshToken).not.toBe(original);
    expect(hashAtual).toBe(hashRefreshToken(resposta.refreshToken));
    const claims = verificarJwtHs256(resposta.accessToken, SEGREDO);
    expect(claims.sid).toBe(SESSAO_ID);
    await expect(service.renovar(original)).rejects.toThrow(UnauthorizedException);
  });

  it('recusa refresh de sessão revogada e de conta desativada', async () => {
    const token = gerarRefreshToken();
    sessaoFindUnique.mockResolvedValue({ ...sessaoBase(), revogadaEm: new Date() });
    await expect(service.renovar(token)).rejects.toThrow(UnauthorizedException);
    sessaoFindUnique.mockResolvedValue({
      ...sessaoBase(), usuario: { ...usuarioBase(), ativo: false },
    });
    await expect(service.renovar(token)).rejects.toThrow(UnauthorizedException);
    expect(sessaoUpdateMany).not.toHaveBeenCalled();
  });

  it('recusa refresh após atualização de senha ou término da sessão', async () => {
    const token = gerarRefreshToken();
    sessaoFindUnique.mockResolvedValue({ ...sessaoBase(), expiraEm: new Date(0) });
    await expect(service.renovar(token)).rejects.toThrow(UnauthorizedException);
    sessaoFindUnique.mockResolvedValue({
      ...sessaoBase(),
      usuario: { ...usuarioBase(), senhaAtualizadaEm: new Date(Date.now() + 5000) },
    });
    await expect(service.renovar(token)).rejects.toThrow(UnauthorizedException);
  });

  it('recusa refresh quando outra requisição já rotacionou o token', async () => {
    sessaoUpdateMany.mockResolvedValue({ count: 0 });
    await expect(service.renovar(gerarRefreshToken())).rejects.toThrow(
      UnauthorizedException,
    );
  });

  it('revoga sessão no logout e não revela se token era inexistente', async () => {
    const token = gerarRefreshToken();
    await service.logout(token);
    expect(sessaoUpdateMany).toHaveBeenCalledWith({
      where: { refreshTokenHash: hashRefreshToken(token), revogadaEm: null },
      data: { revogadaEm: expect.any(Date), refreshTokenHash: null },
    });
    sessaoUpdateMany.mockReset();
    await service.logout('invalido');
    expect(sessaoUpdateMany).not.toHaveBeenCalled();
  });
});
