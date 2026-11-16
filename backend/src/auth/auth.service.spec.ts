import { ServiceUnavailableException, UnauthorizedException } from '@nestjs/common';
import type { PrismaService } from '../prisma/prisma.service.js';
import { verificarJwtHs256 } from './jwt.util.js';
import { AuthService, ACCESS_TOKEN_TTL_SECONDS } from './auth.service.js';
import { gerarHashSenha } from './senha.util.js';

const SEGREDO = 'segredo-seguro-para-testes-de-autenticacao-123';
const SENHA = 'SenhaForteDeTeste!2026';
const USUARIO_ID = '22f0e6c0-7a87-4789-9940-ddda33071733';
const SESSAO_ID = 'c66782e9-3686-4d0a-8e5a-8299f4e89ef4';
const ambienteOriginal = process.env.JWT_SECRET;

const usuarioFindUnique = vi.fn();
const sessaoCreate = vi.fn();
const prisma = {
  usuario: { findUnique: usuarioFindUnique },
  sessao: { create: sessaoCreate },
} as unknown as PrismaService;
const service = new AuthService(prisma);

let senhaHash: string;

beforeAll(async () => {
  senhaHash = await gerarHashSenha(SENHA);
});

beforeEach(() => {
  process.env.JWT_SECRET = SEGREDO;
  usuarioFindUnique.mockReset();
  sessaoCreate.mockReset();
  usuarioFindUnique.mockResolvedValue({
    id: USUARIO_ID,
    email: 'admin@duoc.com.br',
    senhaHash,
    papel: 'ADMIN_FINANCEIRO',
    ativo: true,
  });
  sessaoCreate.mockResolvedValue({ id: SESSAO_ID });
});

afterAll(() => {
  if (ambienteOriginal === undefined) delete process.env.JWT_SECRET;
  else process.env.JWT_SECRET = ambienteOriginal;
});

describe('AuthService.login | RF13 / RNF01 / RNF13', () => {
  it('valida a senha, cria sessão e emite JWT de 15 minutos', async () => {
    const resposta = await service.login('  ADMIN@DUOC.COM.BR ', SENHA);
    expect(usuarioFindUnique).toHaveBeenCalledWith({
      where: { email: 'admin@duoc.com.br' },
    });
    expect(sessaoCreate).toHaveBeenCalledWith({
      data: {
        usuarioId: USUARIO_ID,
        expiraEm: expect.any(Date),
      },
    });
    expect(resposta.tokenType).toBe('Bearer');
    expect(resposta.expiresIn).toBe(ACCESS_TOKEN_TTL_SECONDS);
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
    usuarioFindUnique.mockResolvedValue({
      id: USUARIO_ID,
      email: 'admin@duoc.com.br',
      senhaHash,
      papel: 'ADMIN_FINANCEIRO',
      ativo: false,
    });
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
