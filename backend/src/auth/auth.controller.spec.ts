import { INestApplication, UnauthorizedException } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { AuthController } from './auth.controller.js';
import { AuthService } from './auth.service.js';

describe('POST /api/auth/login | HTTP', () => {
  let app: INestApplication;
  const login = vi.fn();

  beforeAll(async () => {
    const modulo = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [{ provide: AuthService, useValue: { login } }],
    }).compile();
    app = modulo.createNestApplication();
    app.setGlobalPrefix('api');
    await app.init();
  });

  beforeEach(() => login.mockReset());
  afterAll(async () => app.close());

  it('retorna 200 e token no login válido', async () => {
    login.mockResolvedValue({
      accessToken: 'token-assinado',
      tokenType: 'Bearer',
      expiresIn: 900,
      usuario: { id: 'usuario-1', email: 'admin@duoc.com.br', papel: 'ADMIN_FINANCEIRO' },
    });
    await request(app.getHttpServer())
      .post('/api/auth/login')
      .send({ email: 'admin@duoc.com.br', senha: 'SenhaForteDeTeste!2026' })
      .expect(200)
      .expect((res) => {
        expect(res.body.accessToken).toBe('token-assinado');
        expect(res.body.usuario.papel).toBe('ADMIN_FINANCEIRO');
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
    // Simula uma exceção HTTP emitida pelo serviço ao atender a requisição.
    login.mockImplementationOnce(() => {
      throw new UnauthorizedException('Credenciais inválidas.');
    });
    await request(app.getHttpServer())
      .post('/api/auth/login')
      .send({ email: 'admin@duoc.com.br', senha: 'SenhaErrada!123' })
      .expect(401)
      .expect((res) => {
        expect(res.body).toMatchObject({
          statusCode: 401,
          message: 'Credenciais inválidas.',
        });
      });
    expect(login).toHaveBeenCalledTimes(1);
  });
});
