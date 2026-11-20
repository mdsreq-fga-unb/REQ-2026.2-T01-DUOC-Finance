import { type INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { PrismaService } from '../prisma/prisma.service.js';
import { AcessoController } from './acesso.controller.js';
import { JwtAuthGuard } from './jwt-auth.guard.js';
import { assinarJwtHs256 } from './jwt.util.js';
import { Role } from './role.enum.js';
import { RolesGuard } from './roles.guard.js';

const SECRET = 'segredo-seguro-para-testes-de-sessoes-duoc-155';
const USUARIO_ID = 'usuario-admin-1';
const SESSAO_ID = 'sessao-1';

describe('CAR-07 / RN15 / RN16 — autorização HTTP real', () => {
  let app: INestApplication;
  let papelBanco: Role;
  let revogadaEm: Date | null;
  const encontrarSessao = vi.fn();
  const listarUsuarios = vi.fn();
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
          provide: PrismaService,
          useValue: {
            sessao: { findUnique: encontrarSessao },
            usuario: { findMany: listarUsuarios },
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
    listarUsuarios.mockReset();
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
    listarUsuarios.mockResolvedValue([
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
    expect(listarUsuarios).not.toHaveBeenCalled();
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

  it('retorna HTTP 403 para outro papel, mesmo que o JWT declare ADMIN', async () => {
    papelBanco = Role.TECNICO_CAMPO;
    await request(app.getHttpServer())
      .get('/api/auth/usuarios')
      .set('Authorization', `Bearer ${tokenValido(Role.ADMIN_SISTEMA)}`)
      .expect(403);
    expect(listarUsuarios).not.toHaveBeenCalled();
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
    expect(listarUsuarios).toHaveBeenCalledWith({
      select: { id: true, email: true, papel: true, ativo: true },
      orderBy: { email: 'asc' },
      take: 50,
    });
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
    expect(listarUsuarios).not.toHaveBeenCalled();
  });
});
