import { BadRequestException, ForbiddenException, ServiceUnavailableException, UnauthorizedException } from '@nestjs/common';
import type { PrismaService } from '../prisma/prisma.service.js';
import { verificarJwtHs256 } from './jwt.util.js';
import {
  AuthService,
  ACCESS_TOKEN_TTL_SECONDS,
  SESSAO_TTL_SECONDS,
  MAX_TENTATIVAS_LOGIN,
  BLOQUEIO_LOGIN_MINUTOS,
} from './auth.service.js';
import { conferirSenha, gerarHashSenha } from './senha.util.js';
import { VALIDADE_SENHA_DIAS } from './politica-senha.util.js';
import { gerarRefreshToken, hashRefreshToken } from './refresh-token.util.js';

const SEGREDO = 'segredo-seguro-para-testes-de-autenticacao-123';
const SENHA = 'SenhaForteDeTeste!2026';
const USUARIO_ID = '22f0e6c0-7a87-4789-9940-ddda33071733';
const SESSAO_ID = 'c66782e9-3686-4d0a-8e5a-8299f4e89ef4';
const ambienteOriginal = process.env.JWT_SECRET;
const usuarioFindUnique = vi.fn();
const usuarioUpdateMany = vi.fn();
const executeRaw = vi.fn();
const transacao = vi.fn();
const sessaoCreate = vi.fn();
const sessaoFindUnique = vi.fn();
const sessaoUpdateMany = vi.fn();
const prisma = {
  usuario: { findUnique: usuarioFindUnique, updateMany: usuarioUpdateMany },
  $executeRaw: executeRaw,
  $transaction: transacao,
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
    senhaAtualizadaEm: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    tentativasFalhas: 0,
    bloqueadoAte: null as Date | null,
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
  usuarioUpdateMany.mockReset();
  executeRaw.mockReset();
  usuarioUpdateMany.mockResolvedValue({ count: 1 });
  executeRaw.mockResolvedValue(1);
  transacao.mockReset();
  transacao.mockImplementation((operacao: (tx: unknown) => Promise<unknown>) =>
    operacao({
      usuario: { updateMany: usuarioUpdateMany },
      sessao: { updateMany: sessaoUpdateMany },
    }),
  );
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


describe('AuthService.login | RF23 — cinco falhas e bloqueio de 15 minutos', () => {
  it('registra cada falha em UPDATE atômico, sem emitir token ou expor se a conta existe', async () => {
    await expect(service.login('admin@duoc.com.br', 'SenhaErrada123!')).rejects.toThrow(
      UnauthorizedException,
    );
    expect(executeRaw).toHaveBeenCalledTimes(1);
    const [sql, ...parametros] = executeRaw.mock.calls[0] as [TemplateStringsArray, ...unknown[]];
    const comando = sql.join('?');
    expect(comando).toContain('UPDATE "usuarios"');
    expect(comando).toContain('"tentativas_falhas" + 1');
    expect(comando).toContain('"bloqueado_ate"');
    expect(parametros).toContain(MAX_TENTATIVAS_LOGIN);
    expect(parametros).toEqual(expect.arrayContaining([USUARIO_ID]));
    const datas = parametros.filter((valor) => valor instanceof Date) as Date[];
    expect(datas).toHaveLength(4);
    expect(datas[2].getTime() - datas[0].getTime()).toBe(
      BLOQUEIO_LOGIN_MINUTOS * 60 * 1000,
    );
    expect(sessaoCreate).not.toHaveBeenCalled();

    usuarioFindUnique.mockResolvedValue(null);
    await expect(service.login('desconhecido@duoc.com.br', 'SenhaErrada123!'))
      .rejects.toThrow(UnauthorizedException);
    expect(executeRaw).toHaveBeenCalledTimes(1);
  });

  it('bloqueia no quinto erro e não prolonga o bloqueio mesmo com a senha correta', async () => {
    let falhas = 0;
    let bloqueadoAte: Date | null = null;
    usuarioFindUnique.mockImplementation(() =>
      Promise.resolve({ ...usuarioBase(), tentativasFalhas: falhas, bloqueadoAte }),
    );
    executeRaw.mockImplementation(() => {
      falhas += 1;
      if (falhas === MAX_TENTATIVAS_LOGIN) {
        bloqueadoAte = new Date(Date.now() + BLOQUEIO_LOGIN_MINUTOS * 60 * 1000);
      }
      return 1;
    });

    for (let indice = 0; indice < MAX_TENTATIVAS_LOGIN; indice += 1) {
      await expect(service.login('admin@duoc.com.br', 'SenhaErrada123!'))
        .rejects.toThrow(UnauthorizedException);
    }
    expect(falhas).toBe(5);
    expect(bloqueadoAte).toBeInstanceOf(Date);
    await expect(service.login('admin@duoc.com.br', SENHA))
      .rejects.toThrow(UnauthorizedException);
    await expect(service.login('admin@duoc.com.br', 'SenhaErrada123!'))
      .rejects.toThrow(UnauthorizedException);
    expect(executeRaw).toHaveBeenCalledTimes(5);
    expect(usuarioUpdateMany).not.toHaveBeenCalled();
    expect(sessaoCreate).not.toHaveBeenCalled();
  });

  it('reinicia o contador no login correto antes do limite', async () => {
    usuarioFindUnique.mockResolvedValue({
      ...usuarioBase(), tentativasFalhas: MAX_TENTATIVAS_LOGIN - 1,
    });
    await service.login('admin@duoc.com.br', SENHA);
    expect(usuarioUpdateMany).toHaveBeenCalledWith({
      where: {
        id: USUARIO_ID,
        ativo: true,
        OR: [{ bloqueadoAte: null }, { bloqueadoAte: { lte: expect.any(Date) } }],
      },
      data: { tentativasFalhas: 0, bloqueadoAte: null },
    });
    expect(executeRaw).not.toHaveBeenCalled();
    expect(sessaoCreate).toHaveBeenCalledTimes(1);
  });

  it('permite login após 15 minutos; falha posterior recomeça em um', async () => {
    usuarioFindUnique.mockResolvedValue({
      ...usuarioBase(),
      tentativasFalhas: MAX_TENTATIVAS_LOGIN,
      bloqueadoAte: new Date(Date.now() - 1000),
    });
    await service.login('admin@duoc.com.br', SENHA);
    expect(usuarioUpdateMany).toHaveBeenCalledTimes(1);
    expect(sessaoCreate).toHaveBeenCalledTimes(1);
    // Após um bloqueio expirado, a instrução SQL zera a série e inicia em 1.
    expect(executeRaw).not.toHaveBeenCalled();

    usuarioUpdateMany.mockClear();
    sessaoCreate.mockClear();
    await expect(service.login('admin@duoc.com.br', 'SenhaErrada123!'))
      .rejects.toThrow(UnauthorizedException);
    expect(executeRaw).toHaveBeenCalledTimes(1);
    const [sql] = executeRaw.mock.calls[0] as [TemplateStringsArray];
    expect(sql.join('?')).toContain('THEN 1');
    expect(sessaoCreate).not.toHaveBeenCalled();
  });

  it('não cria sessão se a conta foi bloqueada entre leitura e atualização', async () => {
    usuarioUpdateMany.mockResolvedValue({ count: 0 });
    await expect(service.login('admin@duoc.com.br', SENHA))
      .rejects.toThrow(UnauthorizedException);
    expect(sessaoCreate).not.toHaveBeenCalled();
  });

  it('não contabiliza falhas em contas desativadas', async () => {
    usuarioFindUnique.mockResolvedValue({ ...usuarioBase(), ativo: false });
    await expect(service.login('admin@duoc.com.br', 'SenhaErrada123!'))
      .rejects.toThrow(UnauthorizedException);
    expect(executeRaw).not.toHaveBeenCalled();
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


describe('AuthService | RF24 — renovação periódica de senhas', () => {
  const SENHA_NOVA = 'NovaSenhaDeTeste!2026';
  const senhaVencidaEm = () => new Date(
    Date.now() - (VALIDADE_SENHA_DIAS + 1) * 24 * 60 * 60 * 1000,
  );

  it('nega login com senha vencida, mesmo correta, com 403 e sem criar sessão', async () => {
    usuarioFindUnique.mockResolvedValue({
      ...usuarioBase(), senhaAtualizadaEm: senhaVencidaEm(),
    });
    await expect(service.login('admin@duoc.com.br', SENHA))
      .rejects.toThrow(ForbiddenException);
    expect(sessaoCreate).not.toHaveBeenCalled();
    expect(usuarioUpdateMany).not.toHaveBeenCalled();
  });

  it('mantém 401 genérico para senha errada mesmo quando a senha venceu', async () => {
    usuarioFindUnique.mockResolvedValue({
      ...usuarioBase(), senhaAtualizadaEm: senhaVencidaEm(),
    });
    await expect(service.login('admin@duoc.com.br', 'SenhaErradaDeTeste!'))
      .rejects.toThrow(UnauthorizedException);
    expect(executeRaw).toHaveBeenCalledTimes(1);
  });

  it('recusa refresh quando a senha venceu, sem rotacionar token', async () => {
    sessaoFindUnique.mockResolvedValue({
      ...sessaoBase(),
      usuario: { ...usuarioBase(), senhaAtualizadaEm: senhaVencidaEm() },
    });
    await expect(service.renovar(gerarRefreshToken()))
      .rejects.toThrow(UnauthorizedException);
    expect(sessaoUpdateMany).not.toHaveBeenCalled();
  });

  it('permite trocar senha vencida e revoga todas as sessões em transação', async () => {
    usuarioFindUnique.mockResolvedValue({
      ...usuarioBase(), senhaAtualizadaEm: senhaVencidaEm(),
    });
    await expect(service.trocarSenha(' ADMIN@DUOC.COM.BR ', SENHA, SENHA_NOVA))
      .resolves.toBeUndefined();
    expect(transacao).toHaveBeenCalledTimes(1);
    expect(usuarioUpdateMany).toHaveBeenCalledTimes(1);
    const alteracao = usuarioUpdateMany.mock.calls[0][0];
    expect(alteracao.where).toMatchObject({
      id: USUARIO_ID, ativo: true, senhaHash,
    });
    expect(alteracao.data).toMatchObject({
      senhaAtualizadaEm: expect.any(Date),
      tentativasFalhas: 0,
      bloqueadoAte: null,
    });
    expect(alteracao.data.senhaHash).not.toBe(senhaHash);
    expect(await conferirSenha(SENHA_NOVA, alteracao.data.senhaHash)).toBe(true);
    expect(sessaoUpdateMany).toHaveBeenCalledWith({
      where: { usuarioId: USUARIO_ID, revogadaEm: null },
      data: { revogadaEm: alteracao.data.senhaAtualizadaEm, refreshTokenHash: null },
    });
    expect(sessaoCreate).not.toHaveBeenCalled();
  });

  it('recusa reutilização da senha atual', async () => {
    await expect(service.trocarSenha('admin@duoc.com.br', SENHA, SENHA))
      .rejects.toThrow(BadRequestException);
    expect(transacao).not.toHaveBeenCalled();
  });

  it('recusa nova senha fraca e não consulta o banco', async () => {
    await expect(service.trocarSenha('admin@duoc.com.br', SENHA, '123'))
      .rejects.toThrow(BadRequestException);
    expect(usuarioFindUnique).not.toHaveBeenCalled();
  });

  it('registra falha quando a senha atual está errada, sem alterar o hash', async () => {
    await expect(service.trocarSenha('admin@duoc.com.br', 'senha-errada', SENHA_NOVA))
      .rejects.toThrow(UnauthorizedException);
    expect(executeRaw).toHaveBeenCalledTimes(1);
    expect(transacao).not.toHaveBeenCalled();
  });

  it('não permite trocar senha com conta bloqueada, mesmo conhecendo a atual', async () => {
    usuarioFindUnique.mockResolvedValue({
      ...usuarioBase(), bloqueadoAte: new Date(Date.now() + 60_000),
    });
    await expect(service.trocarSenha('admin@duoc.com.br', SENHA, SENHA_NOVA))
      .rejects.toThrow(UnauthorizedException);
    expect(transacao).not.toHaveBeenCalled();
  });

  it('cancela transação quando outro processo já trocou a senha', async () => {
    usuarioUpdateMany.mockResolvedValue({ count: 0 });
    await expect(service.trocarSenha('admin@duoc.com.br', SENHA, SENHA_NOVA))
      .rejects.toThrow(UnauthorizedException);
    expect(sessaoUpdateMany).not.toHaveBeenCalled();
  });
});
