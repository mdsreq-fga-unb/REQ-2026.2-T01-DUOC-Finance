import { INestApplication, UnauthorizedException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AuthController } from './auth.controller.js';
import { AuthService } from './auth.service.js';
import { gerarRefreshToken } from './refresh-token.util.js';

describe('AuthController | HTTP', () => {
  let app: INestApplication;
  const login = vi.fn();
  const renovar = vi.fn();
  const logout = vi.fn();
  const trocarSenha = vi.fn();

  beforeAll(async () => {
    const modulo = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [{ provide: AuthService, useValue: { login, renovar, logout, trocarSenha } }],
    }).compile();
    app = modulo.createNestApplication();
    app.setGlobalPrefix('api');
    await app.init();
  });

  beforeEach(() => {
    login.mockReset();
    renovar.mockReset();
    logout.mockReset();
    trocarSenha.mockReset();
  });
  afterAll(async () => app.close());

  it('retorna 200 e token no login válido', async () => {
    login.mockResolvedValue({
      accessToken: 'token-assinado',
      refreshToken: gerarRefreshToken(),
      tokenType: 'Bearer',
      expiresIn: 900,
      refreshExpiresIn: 604800,
      usuario: { id: 'usuario-1', email: 'admin@duoc.com.br', papel: 'ADMIN_FINANCEIRO' },
    });
    await request(app.getHttpServer())
      .post('/api/auth/login')
      .send({ email: 'admin@duoc.com.br', senha: 'SenhaForteDeTeste!2026' })
      .expect(200)
      .expect((res) => {
        expect(res.body.accessToken).toBe('token-assinado');
        expect(res.body.usuario.papel).toBe('ADMIN_FINANCEIRO');
        expect(res.body.refreshToken).toHaveLength(43);
      });
    expect(login).toHaveBeenCalledWith('admin@duoc.com.br', 'SenhaForteDeTeste!2026');
  });

  it('retorna 400 se e-mail ou senha forem inválidos', async () => {
    await request(app.getHttpServer())
      .post('/api/auth/login')
      .send({ email: 'invalido', senha: '' })
      .expect(400);
    expect(login).not.toHaveBeenCalled();
  });

  it('retorna 401 quando as credenciais não conferem', async () => {
    // Reproduz o mock corrigido e validado na etapa 2.
    login.mockImplementationOnce(() => {
      throw new UnauthorizedException('Credenciais inválidas.');
    });
    await request(app.getHttpServer())
      .post('/api/auth/login')
      .send({ email: 'admin@duoc.com.br', senha: 'SenhaErrada!123' })
      .expect(401)
      .expect((res) => {
        expect(res.body).toMatchObject({ statusCode: 401, message: 'Credenciais inválidas.' });
      });
    expect(login).toHaveBeenCalledTimes(1);
  });

  it('troca senha por HTTP 204 e não devolve nenhum hash', async () => {
    trocarSenha.mockResolvedValue(undefined);
    await request(app.getHttpServer())
      .post('/api/auth/trocar-senha')
      .send({
        email: 'admin@duoc.com.br',
        senhaAtual: 'SenhaAntigaDeTeste!2026',
        senhaNova: 'SenhaNovaDeTeste!2026',
      })
      .expect(204);
    expect(trocarSenha).toHaveBeenCalledWith(
      'admin@duoc.com.br', 'SenhaAntigaDeTeste!2026', 'SenhaNovaDeTeste!2026',
    );
  });

  it('recusa payload inválido na troca de senha com HTTP 400', async () => {
    await request(app.getHttpServer())
      .post('/api/auth/trocar-senha')
      .send({ email: 'invalido', senhaAtual: 'x', senhaNova: 'curta' })
      .expect(400);
    expect(trocarSenha).not.toHaveBeenCalled();
  });

  it('responde HTTP 401 para senha atual incorreta', async () => {
    trocarSenha.mockImplementationOnce(() => {
      throw new UnauthorizedException('Credenciais inválidas.');
    });
    await request(app.getHttpServer())
      .post('/api/auth/trocar-senha')
      .send({
        email: 'admin@duoc.com.br',
        senhaAtual: 'SenhaAntigaDeTeste!2026',
        senhaNova: 'SenhaNovaDeTeste!2026',
      })
      .expect(401);
  });

  it('renova tokens por HTTP 200', async () => {
    const token = gerarRefreshToken();
    renovar.mockResolvedValue({ accessToken: 'novo', refreshToken: gerarRefreshToken() });
    await request(app.getHttpServer())
      .post('/api/auth/refresh')
      .send({ refreshToken: token })
      .expect(200)
      .expect((res) => expect(res.body.accessToken).toBe('novo'));
    expect(renovar).toHaveBeenCalledWith(token);
  });

  it('encerra a sessão por HTTP 204', async () => {
    const token = gerarRefreshToken();
    logout.mockResolvedValue(undefined);
    await request(app.getHttpServer())
      .post('/api/auth/logout')
      .send({ refreshToken: token })
      .expect(204);
    expect(logout).toHaveBeenCalledWith(token);
  });

  it('rejeita token malformado sem chamar serviço', async () => {
    await request(app.getHttpServer())
      .post('/api/auth/refresh')
      .send({ refreshToken: 'curto' })
      .expect(400);
    await request(app.getHttpServer())
      .post('/api/auth/logout')
      .send({})
      .expect(400);
    expect(renovar).not.toHaveBeenCalled();
    expect(logout).not.toHaveBeenCalled();
  });
});
