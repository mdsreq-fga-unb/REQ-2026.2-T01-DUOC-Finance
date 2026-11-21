import type { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { assinarJwtHs256 } from '../auth/jwt.util.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { RolesGuard } from '../auth/roles.guard.js';
import { ReembolsosController } from './reembolsos.controller.js';
import { ReembolsosService } from './reembolsos.service.js';

const SEGREDO = 'segredo-seguro-para-testes-de-autenticacao-123';
const ID = 'af8c5627-65bd-4bcd-87d4-2f4d4a49c003';
const findSessao = vi.fn();
const listarMeus = vi.fn(), listarAdministrativo = vi.fn(), detalhar = vi.fn(), obterComprovante = vi.fn(), deliberar = vi.fn();
let app: INestApplication;
let papel = 'TECNICO_CAMPO';
function token() { return assinarJwtHs256({sub: 'autor', sid: 'sessao-1', exp: Math.floor(Date.now()/1000)+300}, SEGREDO); }

beforeAll(async () => {
  process.env.JWT_SECRET = SEGREDO;
  const modulo = await Test.createTestingModule({
    controllers: [ReembolsosController],
    providers: [
      {provide: ReembolsosService, useValue: {criar: vi.fn(), listarMeus, listarAdministrativo, detalhar, obterComprovante, deliberar}},
      {provide: PrismaService, useValue: {sessao: {findUnique: findSessao}}},
      JwtAuthGuard, RolesGuard,
    ],
  }).compile();
  app = modulo.createNestApplication(); app.setGlobalPrefix('api'); await app.init();
});
afterAll(async () => { await app.close(); });
beforeEach(() => {
  vi.resetAllMocks(); papel = 'TECNICO_CAMPO';
  findSessao.mockImplementation(async () => ({
    id: 'sessao-1', usuarioId: 'autor', criadaEm: new Date(Date.now()-60_000),
    expiraEm: new Date(Date.now()+60_000), revogadaEm: null,
    usuario: {id:'autor', ativo:true, papel, senhaAtualizadaEm:new Date(Date.now()-86_400_000)},
  }));
  listarMeus.mockResolvedValue([]); listarAdministrativo.mockResolvedValue([]);
  detalhar.mockResolvedValue({id:ID}); deliberar.mockResolvedValue({id:ID});
});

describe('RF07/RF08 HTTP — autenticação e papéis', () => {
  it('exige JWT em minhas solicitações', async () => {
    await request(app.getHttpServer()).get('/api/reembolsos/meus').expect(401);
  });
  it('encaminha apenas ID da sessão para minhas solicitações', async () => {
    await request(app.getHttpServer()).get('/api/reembolsos/meus').set('Authorization',`Bearer ${token()}`).expect(200);
    expect(listarMeus).toHaveBeenCalledWith('autor');
  });
  it('nega listagem global ao técnico', async () => {
    await request(app.getHttpServer()).get('/api/reembolsos').set('Authorization',`Bearer ${token()}`).expect(403);
    expect(listarAdministrativo).not.toHaveBeenCalled();
  });
  it('permite listagem global ao administrador', async () => {
    papel = 'ADMIN_FINANCEIRO';
    await request(app.getHttpServer()).get('/api/reembolsos').set('Authorization',`Bearer ${token()}`).expect(200);
    expect(listarAdministrativo).toHaveBeenCalled();
  });
  it('nega deliberação ao técnico', async () => {
    await request(app.getHttpServer()).post(`/api/reembolsos/${ID}/deliberacao`)
      .set('Authorization',`Bearer ${token()}`)
      .send({decisao:'APROVAR', parecer:'Despesa compatível.'}).expect(403);
    expect(deliberar).not.toHaveBeenCalled();
  });
  it('exige parecer mesmo para aprovar', async () => {
    papel = 'ADMIN_FINANCEIRO';
    await request(app.getHttpServer()).post(`/api/reembolsos/${ID}/deliberacao`)
      .set('Authorization',`Bearer ${token()}`)
      .send({decisao:'APROVAR', parecer:''}).expect(400);
    expect(deliberar).not.toHaveBeenCalled();
  });
  it('delibera com administrador autenticado', async () => {
    papel = 'ADMIN_FINANCEIRO';
    await request(app.getHttpServer()).post(`/api/reembolsos/${ID}/deliberacao`)
      .set('Authorization',`Bearer ${token()}`)
      .send({decisao:'REJEITAR', parecer:'Documento inválido.'}).expect(201);
    expect(deliberar).toHaveBeenCalledWith('autor', ID, {decisao:'REJEITAR',parecer:'Documento inválido.'});
  });
  it('recusa identificador inválido no detalhe', async () => {
    await request(app.getHttpServer()).get('/api/reembolsos/invalido').set('Authorization',`Bearer ${token()}`).expect(400);
    expect(detalhar).not.toHaveBeenCalled();
  });
});
