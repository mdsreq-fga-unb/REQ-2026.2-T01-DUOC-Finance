import { ForbiddenException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { AcessoService } from './acesso.service.js';
import { Role } from './role.enum.js';

const ID_OPERADOR = '00000000-0000-4000-8000-000000000001';
const ID_ALVO = '00000000-0000-4000-8000-000000000002';

describe('AcessoService | gestão de usuários e rastreabilidade', () => {
  const transacao = {
    usuario: {
      findUnique: vi.fn(),
      findMany: vi.fn(),
      update: vi.fn(),
    },
    sessao: { updateMany: vi.fn() },
    eventoAcesso: { create: vi.fn(), findMany: vi.fn() },
  };
  const prisma = {
    usuario: { findMany: vi.fn(), findUnique: vi.fn() },
    eventoAcesso: { findMany: vi.fn() },
    $transaction: vi.fn(
      async (operacao: (tx: typeof transacao) => Promise<unknown>) =>
        operacao(transacao),
    ),
  };
  const service = new AcessoService(prisma as unknown as PrismaService);
  const usuarioAdmin = {
    id: ID_OPERADOR,
    email: 'admin@duoc.com.br',
    papel: Role.ADMIN_SISTEMA,
    ativo: true,
  };

  beforeEach(() => {
    vi.clearAllMocks();
    prisma.usuario.findUnique.mockReset();
    prisma.eventoAcesso.findMany.mockReset();
    transacao.usuario.findUnique.mockResolvedValue(usuarioAdmin);
    transacao.usuario.update.mockImplementation(async ({ data }) => ({
      ...usuarioAdmin,
      ...data,
      id: ID_ALVO,
      email: 'colaborador@duoc.com.br',
    }));
    transacao.eventoAcesso.create.mockResolvedValue({});
    transacao.sessao.updateMany.mockResolvedValue({ count: 1 });
  });

  it('impede o administrador de rebaixar o próprio papel', async () => {
    await expect(
      service.alterarPapel(ID_OPERADOR, ID_OPERADOR, Role.ADMIN_FINANCEIRO),
    ).rejects.toBeInstanceOf(ForbiddenException);
    expect(transacao.usuario.update).not.toHaveBeenCalled();
    expect(transacao.eventoAcesso.create).not.toHaveBeenCalled();
  });

  it('persiste alteração de papel e evento com estado anterior e novo', async () => {
    transacao.usuario.findUnique.mockResolvedValue({
      ...usuarioAdmin,
      id: ID_ALVO,
      email: 'colaborador@duoc.com.br',
      papel: Role.TECNICO_CAMPO,
    });

    const resultado = await service.alterarPapel(
      ID_ALVO,
      ID_OPERADOR,
      Role.GESTOR_OBRAS,
    );

    expect(resultado.papel).toBe(Role.GESTOR_OBRAS);
    expect(transacao.sessao.updateMany).toHaveBeenCalledWith({
      where: { usuarioId: ID_ALVO, revogadaEm: null },
      data: { revogadaEm: expect.any(Date), refreshTokenHash: null },
    });
    expect(transacao.eventoAcesso.create).toHaveBeenCalledWith({
      data: {
        operadorId: ID_OPERADOR,
        usuarioId: ID_ALVO,
        acao: 'PAPEL_ALTERADO',
        papelAnterior: Role.TECNICO_CAMPO,
        papelNovo: Role.GESTOR_OBRAS,
      },
    });
  });

  it('impede desativação da própria conta', async () => {
    await expect(
      service.alterarStatus(ID_OPERADOR, ID_OPERADOR, false),
    ).rejects.toBeInstanceOf(ForbiddenException);
    expect(transacao.usuario.update).not.toHaveBeenCalled();
    expect(transacao.eventoAcesso.create).not.toHaveBeenCalled();
  });

  it('registra a desativação da conta e invalida o acesso subsequente', async () => {
    transacao.usuario.findUnique.mockResolvedValue({
      ...usuarioAdmin,
      id: ID_ALVO,
      email: 'colaborador@duoc.com.br',
    });
    transacao.usuario.update.mockResolvedValue({
      ...usuarioAdmin,
      id: ID_ALVO,
      email: 'colaborador@duoc.com.br',
      ativo: false,
    });

    const resultado = await service.alterarStatus(ID_ALVO, ID_OPERADOR, false);

    expect(resultado.ativo).toBe(false);
    expect(transacao.sessao.updateMany).toHaveBeenCalledWith({
      where: { usuarioId: ID_ALVO, revogadaEm: null },
      data: { revogadaEm: expect.any(Date), refreshTokenHash: null },
    });
    expect(transacao.eventoAcesso.create).toHaveBeenCalledWith({
      data: {
        operadorId: ID_OPERADOR,
        usuarioId: ID_ALVO,
        acao: 'CONTA_DESATIVADA',
        ativoAnterior: true,
        ativoNovo: false,
      },
    });
  });

  it('retorna 404 para conta inexistente sem registrar evento', async () => {
    transacao.usuario.findUnique.mockResolvedValue(null);

    await expect(
      service.alterarStatus(ID_ALVO, ID_OPERADOR, false),
    ).rejects.toBeInstanceOf(NotFoundException);
    expect(transacao.eventoAcesso.create).not.toHaveBeenCalled();
  });

  it('lista o histórico de uma conta identificando o operador', async () => {
    const historico = [{ id: 'evento-1', operador: { email: 'admin@duoc.com.br' } }];
    prisma.usuario.findUnique.mockResolvedValue({ id: ID_ALVO });
    prisma.eventoAcesso.findMany.mockResolvedValue(historico);

    await expect(service.historicoUsuario(ID_ALVO)).resolves.toEqual(historico);
    expect(prisma.eventoAcesso.findMany).toHaveBeenCalledWith({
      where: { usuarioId: ID_ALVO },
      select: {
        id: true,
        acao: true,
        papelAnterior: true,
        papelNovo: true,
        ativoAnterior: true,
        ativoNovo: true,
        ocorridoEm: true,
        operador: { select: { email: true } },
      },
      orderBy: { ocorridoEm: 'desc' },
      take: 50,
    });
  });

  it('rejeita papéis desconhecidos e status não booleano', () => {
    expect(() => service.validarPapel('AUDITOR_EXTERNO')).toThrow();
    expect(() => service.validarStatus('false')).toThrow();
  });
});
