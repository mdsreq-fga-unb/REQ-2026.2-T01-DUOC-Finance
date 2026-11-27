import type { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { assinarJwtHs256 } from '../auth/jwt.util.js';
import { RolesGuard } from '../auth/roles.guard.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { ContratosController } from './contratos.controller.js';
import { ContratosService } from './contratos.service.js';

const segredo = 'segredo-seguro-para-testes-de-autenticacao-123';
const sessaoId = 'sessao-de-teste';
const contratoId = 'af8c5627-65bd-4bcd-87d4-2f4d4a49c003';

describe('ContratosController (HTTP)', () => {
  let app: INestApplication;
  let papel = 'ADMIN_FINANCEIRO';
  const findSessao = vi.fn();
  const service = {
    listar: vi.fn(),
    listarGestores: vi.fn(),
    criar: vi.fn(),
    obter: vi.fn(),
    atualizar: vi.fn(),
    encerrar: vi.fn(),
    rateio: vi.fn(),
    indicadores: vi.fn(),
  };

  function token() {
    return assinarJwtHs256({ sub: 'usuario-1', sid: sessaoId, exp: Math.floor(Date.now() / 1000) + 300 }, segredo);
  }

  beforeAll(async () => {
    process.env.JWT_SECRET = segredo;
    const module = await Test.createTestingModule({
      controllers: [ContratosController],
      providers: [
        { provide: ContratosService, useValue: service },
        { provide: PrismaService, useValue: { sessao: { findUnique: findSessao } } },
        JwtAuthGuard,
        RolesGuard,
      ],
    }).compile();
    app = module.createNestApplication();
    app.setGlobalPrefix('api');
    await app.init();
  });
  afterAll(async () => { await app.close(); });
  beforeEach(() => {
    papel = 'ADMIN_FINANCEIRO';
    Object.values(service).forEach((fn) => fn.mockReset());
    findSessao.mockImplementation(async () => ({
      id: sessaoId,
      usuarioId: 'usuario-1',
      criadaEm: new Date(Date.now() - 60_000),
      expiraEm: new Date(Date.now() + 60_000),
      revogadaEm: null,
      usuario: {
        id: 'usuario-1',
        ativo: true,
        papel,
        senhaAtualizadaEm: new Date(Date.now() - 120_000),
      },
    }));
  });

  it('recusa criação e consultas sem autenticação', async () => {
    await request(app.getHttpServer()).post('/api/contratos').send({}).expect(401);
    await request(app.getHttpServer()).get('/api/contratos/indicadores').expect(401);
  });

  it('permite ADMIN_FINANCEIRO criar, atualizar e encerrar contrato', async () => {
    service.criar.mockResolvedValue({ id: contratoId });
    service.atualizar.mockResolvedValue({ id: contratoId, nome: 'Obra Atualizada' });
    service.encerrar.mockResolvedValue({ id: contratoId, status: 'ENCERRADO' });

    await request(app.getHttpServer()).post('/api/contratos')
      .set('Authorization', `Bearer ${token()}`)
      .send({ codigo: 'OBR-001', nome: 'Obra Centro', valorDiariaCentavos: 25000 })
      .expect(201);

    await request(app.getHttpServer()).patch(`/api/contratos/${contratoId}`)
      .set('Authorization', `Bearer ${token()}`)
      .send({ nome: 'Obra Atualizada' })
      .expect(200);

    await request(app.getHttpServer()).patch(`/api/contratos/${contratoId}/encerrar`)
      .set('Authorization', `Bearer ${token()}`)
      .expect(200);
  });

  it('recusa TECNICO_CAMPO consultar e alterar contratos', async () => {
    papel = 'TECNICO_CAMPO';
    await request(app.getHttpServer()).get('/api/contratos')
      .set('Authorization', `Bearer ${token()}`).expect(403);
    await request(app.getHttpServer()).get('/api/contratos/indicadores')
      .set('Authorization', `Bearer ${token()}`).expect(403);
  });

  it('reserva mutações de contrato apenas para ADMIN_FINANCEIRO', async () => {
    papel = 'ADMIN_SISTEMA';
    await request(app.getHttpServer()).post('/api/contratos')
      .set('Authorization', `Bearer ${token()}`)
      .send({ codigo: 'OBR-001', nome: 'Obra Centro' })
      .expect(403);

    papel = 'GESTOR_OBRAS';
    await request(app.getHttpServer()).patch(`/api/contratos/${contratoId}/encerrar`)
      .set('Authorization', `Bearer ${token()}`)
      .expect(403);
  });

  it('permite ADMIN_FINANCEIRO e ADMIN_SISTEMA listar gestores ativos, mas recusa GESTOR_OBRAS', async () => {
    service.listarGestores.mockResolvedValue([{ id: 'gestor-1', email: 'gestor@duoc.test', ativo: true }]);
    await request(app.getHttpServer()).get('/api/contratos/gestores')
      .set('Authorization', `Bearer ${token()}`).expect(200);

    papel = 'ADMIN_SISTEMA';
    await request(app.getHttpServer()).get('/api/contratos/gestores')
      .set('Authorization', `Bearer ${token()}`).expect(200);

    papel = 'GESTOR_OBRAS';
    await request(app.getHttpServer()).get('/api/contratos/gestores')
      .set('Authorization', `Bearer ${token()}`).expect(403);
  });

  it('permite GESTOR_OBRAS consultar indicadores e rateio com filtros', async () => {
    papel = 'GESTOR_OBRAS';
    service.indicadores.mockResolvedValue({ contratos: [] });
    service.rateio.mockResolvedValue({ totalCentavos: 0 });
    await request(app.getHttpServer())
      .get(`/api/contratos/indicadores?inicio=2026-11-01&fim=2026-11-30&status=ATIVO&contratoId=${contratoId}`)
      .set('Authorization', `Bearer ${token()}`).expect(200);
    expect(service.indicadores).toHaveBeenCalledWith('2026-11-01', '2026-11-30', 'ATIVO', contratoId);

    await request(app.getHttpServer())
      .get(`/api/contratos/${contratoId}/rateio?inicio=2026-11-01&fim=2026-11-30`)
      .set('Authorization', `Bearer ${token()}`).expect(200);
    expect(service.rateio).toHaveBeenCalledWith(contratoId, '2026-11-01', '2026-11-30');
  });

  it('valida UUID nos parâmetros de contrato e rateio', async () => {
    await request(app.getHttpServer()).get('/api/contratos/invalido')
      .set('Authorization', `Bearer ${token()}`).expect(400);
    await request(app.getHttpServer()).get('/api/contratos/invalido/rateio')
      .set('Authorization', `Bearer ${token()}`).expect(400);
  });
});
