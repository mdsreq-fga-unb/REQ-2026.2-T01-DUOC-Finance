import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { JwtAuthGuard } from '../auth/jwt-auth.guard.js';
import { assinarJwtHs256 } from '../auth/jwt.util.js';
import { PrismaService } from '../prisma/prisma.service.js';
import { RvtController } from './rvt.controller.js';
import { RvtService } from './rvt.service.js';

const SEGREDO = 'segredo-seguro-para-testes-de-autenticacao-123';
const SESSAO_ID = 'sessao-de-teste';
const RVT_ID = '6f1c1c1e-3f8a-4c4b-9d55-6a2f3b2f9b10';

describe('RvtController (HTTP)', () => {
  let app: INestApplication;
  let usuarioAtual = 'colab-1';
  const findSessao = vi.fn();
  const service = {
    listarContratosAtivos: vi.fn(),
    criar: vi.fn(),
    anexarEvidencias: vi.fn(),
    listarDoColaborador: vi.fn(),
  };

  function token(sub = 'colab-1', vinculado = true): string {
    usuarioAtual = sub;
    return assinarJwtHs256(
      { sub, sid: SESSAO_ID, ...(vinculado ? { colaboradorId: sub } : {}), exp: Math.floor(Date.now() / 1000) + 300 },
      SEGREDO,
    );
  }

  beforeAll(async () => {
    process.env.JWT_SECRET = SEGREDO;
    const modulo = await Test.createTestingModule({
      controllers: [RvtController],
      providers: [
        { provide: RvtService, useValue: service },
        { provide: PrismaService, useValue: { sessao: { findUnique: findSessao } } },
        JwtAuthGuard,
      ],
    }).compile();
    app = modulo.createNestApplication();
    app.setGlobalPrefix('api');
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  beforeEach(() => {
    Object.values(service).forEach((fn) => fn.mockReset());
    findSessao.mockReset();
    usuarioAtual = 'colab-1';
    findSessao.mockImplementation(async () => ({
      id: SESSAO_ID,
      usuarioId: usuarioAtual,
      criadaEm: new Date(Date.now() - 60_000),
      expiraEm: new Date(Date.now() + 60_000),
      revogadaEm: null,
      usuario: {
        id: usuarioAtual,
        ativo: true,
        papel: 'TECNICO_CAMPO',
        senhaAtualizadaEm: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
      },
    }));
  });

  it('exige token de acesso', async () => {
    await request(app.getHttpServer())
      .get('/api/rvt/meus-apontamentos')
      .expect(401);
    expect(service.listarDoColaborador).not.toHaveBeenCalled();
  });

  it('recusa acesso ao RVT para conta sem vínculo com colaborador', async () => {
    await request(app.getHttpServer())
      .get('/api/rvt/meus-apontamentos')
      .set('Authorization', `Bearer ${token('usuario-1', false)}`)
      .expect(403);
    expect(service.listarDoColaborador).not.toHaveBeenCalled();
  });

  it('lista apenas os apontamentos do colaborador do token', async () => {
    service.listarDoColaborador.mockResolvedValue([]);
    await request(app.getHttpServer())
      .get('/api/rvt/meus-apontamentos')
      .set('Authorization', `Bearer ${token('colab-9')}`)
      .expect(200, []);
    expect(service.listarDoColaborador).toHaveBeenCalledWith('colab-9');
  });

  it('ignora colaboradorId enviado no corpo e usa o do JWT', async () => {
    service.criar.mockResolvedValue({ id: 'rvt-1' });
    await request(app.getHttpServer())
      .post('/api/rvt')
      .set('Authorization', `Bearer ${token('colab-1')}`)
      .send({
        colaboradorId: 'colab-intruso',
        contratoId: 'contrato-1',
        dataJornada: '2026-01-10',
        horasTrabalhadas: 8,
        escopoExecutado: 'Instalação de luminárias na garagem.',
      })
      .expect(201);
    expect(service.criar).toHaveBeenCalledWith(
      'colab-1',
      expect.not.objectContaining({ colaboradorId: expect.anything() }),
    );
  });

  it('retorna 400 com as mensagens de validação', async () => {
    const resposta = await request(app.getHttpServer())
      .post('/api/rvt')
      .set('Authorization', `Bearer ${token()}`)
      .send({
        contratoId: 'contrato-1',
        dataJornada: '2026-01-10',
        horasTrabalhadas: 20,
        escopoExecutado: 'x',
      })
      .expect(400);
    expect(resposta.body.message).toHaveLength(2);
    expect(service.criar).not.toHaveBeenCalled();
  });

  it('recebe evidências por multipart no campo "arquivos"', async () => {
    service.anexarEvidencias.mockResolvedValue({ id: RVT_ID });
    await request(app.getHttpServer())
      .post(`/api/rvt/${RVT_ID}/evidencias`)
      .set('Authorization', `Bearer ${token()}`)
      .attach('arquivos', Buffer.from([0xff, 0xd8, 0xff, 0xe0]), 'obra.jpg')
      .expect(201);
    const [colaboradorId, id, arquivos] =
      service.anexarEvidencias.mock.calls[0];
    expect(colaboradorId).toBe('colab-1');
    expect(id).toBe(RVT_ID);
    expect(arquivos[0]).toMatchObject({ originalname: 'obra.jpg', size: 4 });
    expect(Buffer.isBuffer(arquivos[0].buffer)).toBe(true);
  });

  it('recusa arquivo acima de 5 MB com 413', async () => {
    await request(app.getHttpServer())
      .post(`/api/rvt/${RVT_ID}/evidencias`)
      .set('Authorization', `Bearer ${token()}`)
      .attach('arquivos', Buffer.alloc(5 * 1024 * 1024 + 1, 0xff), 'grande.jpg')
      .expect(413);
    expect(service.anexarEvidencias).not.toHaveBeenCalled();
  });

  it('valida o id do apontamento', async () => {
    await request(app.getHttpServer())
      .post('/api/rvt/nao-e-uuid/evidencias')
      .set('Authorization', `Bearer ${token()}`)
      .attach('arquivos', Buffer.from([0xff, 0xd8, 0xff]), 'obra.jpg')
      .expect(400);
  });
});
