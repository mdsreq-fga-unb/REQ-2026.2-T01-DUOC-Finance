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
  let papelAtual = 'TECNICO_CAMPO';
  let colaboradorAtual: string | null = 'colab-1';
  const findSessao = vi.fn();
  const service = {
    listarContratosAtivos: vi.fn(),
    criar: vi.fn(),
    anexarEvidencias: vi.fn(),
    listarDoColaborador: vi.fn(),
    retificar: vi.fn(),
    removerEvidencia: vi.fn(),
    listarPendentesDoGestor: vi.fn(),
    deliberar: vi.fn(),
  };

  function token(sub = 'colab-1', vinculado = true): string {
    usuarioAtual = sub;
    // O vínculo com colaborador vem de usuario.id_colab, não do JWT
    colaboradorAtual = vinculado ? sub : null;
    return assinarJwtHs256(
      { sub, sid: SESSAO_ID, exp: Math.floor(Date.now() / 1000) + 300 },
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
    papelAtual = 'TECNICO_CAMPO';
    findSessao.mockImplementation(async () => ({
      id: SESSAO_ID,
      usuarioId: usuarioAtual,
      criadaEm: new Date(Date.now() - 60_000),
      expiraEm: new Date(Date.now() + 60_000),
      revogadaEm: null,
      usuario: {
        id: usuarioAtual,
        ativo: true,
        papel: papelAtual,
        colaboradorId: colaboradorAtual,
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
      'colab-1',
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

  describe('RF35 — retificação', () => {
    it('envia ao service apenas os campos retificáveis', async () => {
      service.retificar.mockResolvedValue({ id: RVT_ID });
      await request(app.getHttpServer())
        .patch(`/api/rvt/${RVT_ID}`)
        .set('Authorization', `Bearer ${token('colab-1')}`)
        .send({ horasTrabalhadas: 7.5, contratoId: 'outro', colaboradorId: 'x' })
        .expect(200);
      expect(service.retificar).toHaveBeenCalledWith(
        { colaboradorId: 'colab-1', usuarioId: 'colab-1' },
        RVT_ID,
        { horasTrabalhadas: 7.5 },
      );
    });

    it('valida horas e escopo como na criação', async () => {
      await request(app.getHttpServer())
        .patch(`/api/rvt/${RVT_ID}`)
        .set('Authorization', `Bearer ${token()}`)
        .send({ horasTrabalhadas: 30 })
        .expect(400);
      expect(service.retificar).not.toHaveBeenCalled();
    });

    it('remove evidência pelo id', async () => {
      const EVIDENCIA_ID = '0b9a4f3e-2c1d-4e5f-8a7b-6c5d4e3f2a1b';
      service.removerEvidencia.mockResolvedValue({ id: RVT_ID });
      await request(app.getHttpServer())
        .delete(`/api/rvt/${RVT_ID}/evidencias/${EVIDENCIA_ID}`)
        .set('Authorization', `Bearer ${token()}`)
        .expect(200);
      expect(service.removerEvidencia).toHaveBeenCalledWith(
        { colaboradorId: 'colab-1', usuarioId: 'colab-1' },
        RVT_ID,
        EVIDENCIA_ID,
      );
    });
  });

  describe('RF32 — deliberação (RN16)', () => {
    it.each(['TECNICO_CAMPO', 'ADMIN_FINANCEIRO', 'AUDITOR_EXTERNO'])(
      'recusa a fila de homologação para %s',
      async (papel) => {
        papelAtual = papel;
        await request(app.getHttpServer())
          .get('/api/rvt/pendentes-homologacao')
          .set('Authorization', `Bearer ${token()}`)
          .expect(403);
        expect(service.listarPendentesDoGestor).not.toHaveBeenCalled();
      },
    );

    it('lista a fila do gestor mesmo sem vínculo com colaborador', async () => {
      papelAtual = 'GESTOR_OPERACIONAL';
      service.listarPendentesDoGestor.mockResolvedValue([]);
      await request(app.getHttpServer())
        .get('/api/rvt/pendentes-homologacao')
        .set('Authorization', `Bearer ${token('gestor-1', false)}`)
        .expect(200, []);
      expect(service.listarPendentesDoGestor).toHaveBeenCalledWith('gestor-1');
    });

    it('recusa deliberação por técnico de campo', async () => {
      await request(app.getHttpServer())
        .post(`/api/rvt/${RVT_ID}/deliberacao`)
        .set('Authorization', `Bearer ${token()}`)
        .send({ decisao: 'HOMOLOGAR' })
        .expect(403);
      expect(service.deliberar).not.toHaveBeenCalled();
    });

    it('exige parecer na rejeição (RN30)', async () => {
      papelAtual = 'GESTOR_OPERACIONAL';
      const resposta = await request(app.getHttpServer())
        .post(`/api/rvt/${RVT_ID}/deliberacao`)
        .set('Authorization', `Bearer ${token('gestor-1', false)}`)
        .send({ decisao: 'REJEITAR' })
        .expect(400);
      expect(resposta.body.message[0]).toMatch(/RN30/);
      expect(service.deliberar).not.toHaveBeenCalled();
    });

    it('repassa a decisão com o gestor da sessão', async () => {
      papelAtual = 'GESTOR_OPERACIONAL';
      service.deliberar.mockResolvedValue({ id: RVT_ID });
      await request(app.getHttpServer())
        .post(`/api/rvt/${RVT_ID}/deliberacao`)
        .set('Authorization', `Bearer ${token('gestor-1', false)}`)
        .send({ decisao: 'REJEITAR', parecer: 'Foto do quadro ilegível, reenviar.' })
        .expect(201);
      expect(service.deliberar).toHaveBeenCalledWith(
        { usuarioId: 'gestor-1', colaboradorId: undefined },
        RVT_ID,
        { decisao: 'REJEITAR', parecer: 'Foto do quadro ilegível, reenviar.' },
      );
    });
  });
});
