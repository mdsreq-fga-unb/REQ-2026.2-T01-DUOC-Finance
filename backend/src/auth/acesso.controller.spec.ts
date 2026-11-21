import { type INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { PrismaService } from '../prisma/prisma.service.js';
import { AcessoController } from './acesso.controller.js';
import { AcessoService } from './acesso.service.js';
import { JwtAuthGuard } from './jwt-auth.guard.js';
import { assinarJwtHs256 } from './jwt.util.js';
import { Role } from './role.enum.js';
import { RolesGuard } from './roles.guard.js';

const SECRET = 'segredo-seguro-para-testes-de-sessoes-duoc-155';
const USUARIO_ID = 'usuario-admin-1';
const SESSAO_ID = 'sessao-1';
const USUARIO_ALVO_ID = '00000000-0000-4000-8000-000000000002';

describe('CAR-07 / RN15 / RN16 — autorização HTTP real', () => {
  let app: INestApplication;
  let papelBanco: Role;
  let revogadaEm: Date | null;
  const encontrarSessao = vi.fn();
  const consultarUsuarios = vi.fn();
  const alterarPapel = vi.fn();
  const alterarStatus = vi.fn();
  const historicoUsuario = vi.fn();
  const validarPapel = vi.fn();
  const validarStatus = vi.fn();
  const segredoAnterior = process.env.JWT_SECRET;

  const tokenValido = (papelJwt: Role = Role.ADMIN_SISTEMA) => {
    const agora = Math.floor(Date.now() / 1000);
    return assinarJwtHs256(
      { sub: USUARIO_ID, sid: SESSAO_ID, papel: papelJwt, iat: agora, exp: agora + 900 },
      SECRET,
    );
  };

  beforeAll(async () => {
    process.env.JWT_SECRET = SECRET;
    const modulo = await Test.createTestingModule({
      controllers: [AcessoController],
      providers: [
        JwtAuthGuard,
        RolesGuard,
        {
          provide: AcessoService,
          useValue: {
            listarUsuarios: consultarUsuarios,
            alterarPapel,
            alterarStatus,
            historicoUsuario,
            validarPapel,
            validarStatus,
          },
        },
        {
          provide: PrismaService,
          useValue: {
            sessao: { findUnique: encontrarSessao },
          },
        },
      ],
    }).compile();
    app = modulo.createNestApplication();
    app.setGlobalPrefix('api');
    await app.init();
  });

  beforeEach(() => {
    papelBanco = Role.ADMIN_SISTEMA;
    revogadaEm = null;
    encontrarSessao.mockReset();
    consultarUsuarios.mockReset();
    alterarPapel.mockReset();
    alterarStatus.mockReset();
    historicoUsuario.mockReset();
    validarPapel.mockReset();
    validarStatus.mockReset();
    validarPapel.mockReturnValue(Role.GESTOR_OBRAS);
    validarStatus.mockReturnValue(false);
    encontrarSessao.mockImplementation(async () => ({
      id: SESSAO_ID,
      usuarioId: USUARIO_ID,
      criadaEm: new Date(Date.now() - 60 * 60 * 1000),
      expiraEm: new Date(Date.now() + 60 * 60 * 1000),
      revogadaEm,
      usuario: {
        id: USUARIO_ID,
        papel: papelBanco,
        ativo: true,
        senhaAtualizadaEm: new Date(Date.now() - 24 * 60 * 60 * 1000),
      },
    }));
    consultarUsuarios.mockResolvedValue([
      { id: USUARIO_ID, email: 'admin@duoc.com.br', papel: Role.ADMIN_SISTEMA, ativo: true },
    ]);
  });

  afterAll(async () => {
    await app?.close();
    if (segredoAnterior === undefined) delete process.env.JWT_SECRET;
    else process.env.JWT_SECRET = segredoAnterior;
  });

  it('rejeita acesso anônimo com HTTP 401', async () => {
    await request(app.getHttpServer()).get('/api/auth/me').expect(401);
    await request(app.getHttpServer()).get('/api/auth/usuarios').expect(401);
    expect(consultarUsuarios).not.toHaveBeenCalled();
  });

  it('permite consultar a própria sessão sem expor dados sensíveis', async () => {
    await request(app.getHttpServer())
      .get('/api/auth/me')
      .set('Authorization', `Bearer ${tokenValido()}`)
      .expect(200)
      .expect((res) => {
        expect(res.body).toEqual({ id: USUARIO_ID, papel: Role.ADMIN_SISTEMA });
      });
  });

  it.each([
    Role.ADMIN_FINANCEIRO,
    Role.GESTOR_OBRAS,
    Role.TECNICO_CAMPO,
  ])('retorna HTTP 403 ao listar contas para o perfil %s', async (papel) => {
    papelBanco = papel;
    await request(app.getHttpServer())
      .get('/api/auth/usuarios')
      .set('Authorization', `Bearer ${tokenValido(Role.ADMIN_SISTEMA)}`)
      .expect(403);
    expect(consultarUsuarios).not.toHaveBeenCalled();
  });

  it.each([
    Role.ADMIN_FINANCEIRO,
    Role.GESTOR_OBRAS,
    Role.TECNICO_CAMPO,
  ])('retorna HTTP 403 ao alterar papel para o perfil %s', async (papel) => {
    papelBanco = papel;
    await request(app.getHttpServer())
      .patch(`/api/auth/usuarios/${USUARIO_ALVO_ID}/papel`)
      .set('Authorization', `Bearer ${tokenValido()}`)
      .send({ papel: Role.GESTOR_OBRAS })
      .expect(403);
    expect(validarPapel).not.toHaveBeenCalled();
    expect(alterarPapel).not.toHaveBeenCalled();
  });

  it.each([
    Role.ADMIN_FINANCEIRO,
    Role.GESTOR_OBRAS,
    Role.TECNICO_CAMPO,
  ])('retorna HTTP 403 ao alterar status para o perfil %s', async (papel) => {
    papelBanco = papel;
    await request(app.getHttpServer())
      .patch(`/api/auth/usuarios/${USUARIO_ALVO_ID}/status`)
      .set('Authorization', `Bearer ${tokenValido()}`)
      .send({ ativo: false })
      .expect(403);
    expect(validarStatus).not.toHaveBeenCalled();
    expect(alterarStatus).not.toHaveBeenCalled();
  });

  it.each([
    Role.ADMIN_FINANCEIRO,
    Role.GESTOR_OBRAS,
    Role.TECNICO_CAMPO,
  ])('retorna HTTP 403 ao consultar histórico para o perfil %s', async (papel) => {
    papelBanco = papel;
    await request(app.getHttpServer())
      .get(`/api/auth/usuarios/${USUARIO_ALVO_ID}/historico`)
      .set('Authorization', `Bearer ${tokenValido()}`)
      .expect(403);
    expect(historicoUsuario).not.toHaveBeenCalled();
  });

  it('permite editar o papel somente após validar papel no banco e requisição', async () => {
    const usuarioAtualizado = {
      id: USUARIO_ALVO_ID,
      email: 'campo@duoc.com.br',
      papel: Role.GESTOR_OBRAS,
      ativo: true,
    };
    alterarPapel.mockResolvedValue(usuarioAtualizado);
    await request(app.getHttpServer())
      .patch(`/api/auth/usuarios/${USUARIO_ALVO_ID}/papel`)
      .set('Authorization', `Bearer ${tokenValido()}`)
      .send({ papel: Role.GESTOR_OBRAS })
      .expect(200, usuarioAtualizado);
    expect(validarPapel).toHaveBeenCalledWith(Role.GESTOR_OBRAS);
    expect(alterarPapel).toHaveBeenCalledWith(
      USUARIO_ALVO_ID,
      USUARIO_ID,
      Role.GESTOR_OBRAS,
    );
  });

  it('altera o status da conta pela API', async () => {
    const usuarioAtualizado = {
      id: USUARIO_ALVO_ID,
      email: 'campo@duoc.com.br',
      papel: Role.TECNICO_CAMPO,
      ativo: false,
    };
    alterarStatus.mockResolvedValue(usuarioAtualizado);
    await request(app.getHttpServer())
      .patch(`/api/auth/usuarios/${USUARIO_ALVO_ID}/status`)
      .set('Authorization', `Bearer ${tokenValido()}`)
      .send({ ativo: false })
      .expect(200, usuarioAtualizado);
    expect(validarStatus).toHaveBeenCalledWith(false);
    expect(alterarStatus).toHaveBeenCalledWith(USUARIO_ALVO_ID, USUARIO_ID, false);
  });

  it('permite listar contas somente ao administrador, com campos públicos', async () => {
    await request(app.getHttpServer())
      .get('/api/auth/usuarios')
      .set('Authorization', `Bearer ${tokenValido()}`)
      .expect(200)
      .expect((res) => {
        expect(res.body).toEqual([
          { id: USUARIO_ID, email: 'admin@duoc.com.br', papel: Role.ADMIN_SISTEMA, ativo: true },
        ]);
      });
    expect(consultarUsuarios).toHaveBeenCalledOnce();
  });

  it('nega imediatamente o JWT de uma sessão revogada, mesmo não expirado', async () => {
    revogadaEm = new Date();
    await request(app.getHttpServer())
      .get('/api/auth/me')
      .set('Authorization', `Bearer ${tokenValido()}`)
      .expect(401);
    await request(app.getHttpServer())
      .get('/api/auth/usuarios')
      .set('Authorization', `Bearer ${tokenValido()}`)
      .expect(401);
    expect(consultarUsuarios).not.toHaveBeenCalled();
  });
});
