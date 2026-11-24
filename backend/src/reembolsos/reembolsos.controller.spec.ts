import type { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { assinarJwtHs256 } from '../auth/jwt.util.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { RolesGuard } from '../auth/roles.guard.js';
import { ReembolsosController } from './reembolsos.controller.js';
import { ReembolsosService } from './reembolsos.service.js';

const segredo = 'segredo-seguro-para-testes-de-autenticacao-123';
const idSessao = 'sessao-1';
const contratoId = 'af8c5627-65bd-4bcd-87d4-2f4d4a49c003';
const dados = { contratoId, categoria: 'Alimentação', descricao: 'Almoço realizado na obra.', dataDespesa: '2026-11-20', valorCentavos: '5990' };

let app: INestApplication;
let papel = 'TECNICO_CAMPO';
const findSessao = vi.fn();
const criar = vi.fn();
function token() {
  return assinarJwtHs256({ sub: 'usuario-1', sid: idSessao, exp: Math.floor(Date.now()/1000)+300 }, segredo);
}

beforeAll(async () => {
  process.env.JWT_SECRET = segredo;
  const modulo = await Test.createTestingModule({
    controllers: [ReembolsosController],
    providers: [
      { provide: ReembolsosService, useValue: { criar } },
      { provide: PrismaService, useValue: { sessao: { findUnique: findSessao } } },
      JwtAuthGuard, RolesGuard,
    ],
  }).compile();
  app = modulo.createNestApplication();
  app.setGlobalPrefix('api');
  await app.init();
});
afterAll(async () => { await app.close(); });
beforeEach(() => {
  vi.clearAllMocks();
  papel = 'TECNICO_CAMPO';
  findSessao.mockImplementation(async () => ({
    id: idSessao, usuarioId: 'usuario-1', criadaEm: new Date(Date.now() - 60_000),
    expiraEm: new Date(Date.now() + 60_000), revogadaEm: null,
    usuario: { id: 'usuario-1', ativo: true, papel,
      senhaAtualizadaEm: new Date(Date.now() - 86_400_000) },
  }));
  criar.mockResolvedValue({ id: 'id-1', status: 'PENDENTE' });
});

describe('POST /api/reembolsos (HTTP)', () => {
  it('recusa requisição sem JWT', async () => {
    await request(app.getHttpServer()).post('/api/reembolsos').expect(401);
    expect(criar).not.toHaveBeenCalled();
  });
  it('recusa administrador do sistema com 403', async () => {
    papel = 'ADMIN_SISTEMA';
    await request(app.getHttpServer()).post('/api/reembolsos').set('Authorization', `Bearer ${token()}`)
      .field('contratoId', contratoId).expect(403);
    expect(criar).not.toHaveBeenCalled();
  });
  it('recusa falta de comprovante', async () => {
    await request(app.getHttpServer()).post('/api/reembolsos').set('Authorization', `Bearer ${token()}`)
      .field(dados).expect(400);
    expect(criar).not.toHaveBeenCalled();
  });
  it('descarta solicitante enviado pelo cliente e usa sessão autenticada', async () => {
    await request(app.getHttpServer()).post('/api/reembolsos').set('Authorization', `Bearer ${token()}`)
      .field({ ...dados, solicitanteId: 'invasor' })
      .attach('comprovante', Buffer.from('%PDF-1.7\n'), 'nota.pdf').expect(201);
    const [usuario, dto, arquivo] = criar.mock.calls[0];
    expect(usuario.usuarioId).toBe('usuario-1');
    expect(dto).not.toHaveProperty('solicitanteId');
    expect(dto.valorCentavos).toBe(5990);
    expect(arquivo.originalname).toBe('nota.pdf');
  });
  it('recusa arquivo maior que 5 MB antes do service', async () => {
    await request(app.getHttpServer()).post('/api/reembolsos').set('Authorization', `Bearer ${token()}`)
      .field(dados).attach('comprovante', Buffer.alloc(5*1024*1024 + 1, 0xff), 'enorme.pdf')
      .expect(413);
    expect(criar).not.toHaveBeenCalled();
  });
  it('recusa valor inválido no multipart antes do service', async () => {
    await request(app.getHttpServer()).post('/api/reembolsos').set('Authorization', `Bearer ${token()}`)
      .field({ ...dados, valorCentavos: '0' })
      .attach('comprovante', Buffer.from('%PDF-1.7\n'), 'nota.pdf').expect(400);
    expect(criar).not.toHaveBeenCalled();
  });
});
