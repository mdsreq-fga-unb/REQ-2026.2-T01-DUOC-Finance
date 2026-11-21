import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { EvidenciasStorageService } from './evidencias/evidencias-storage.service.js';
import { RvtService } from './rvt.service.js';

const PNG = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0x01]);

function rvtDoBanco(sobrescritas: Record<string, unknown> = {}) {
  return {
    id: 'rvt-1',
    colaboradorId: 'colab-1',
    contratoId: 'contrato-1',
    dataJornada: new Date('2026-11-16T00:00:00.000Z'),
    horasTrabalhadas: 8,
    escopoExecutado: 'Montagem de eletrocalhas no pavimento 2.',
    status: 'PENDENTE',
    janelaRetificacaoInicio: new Date('2026-11-16T20:00:00.000Z'),
    createdAt: new Date('2026-11-16T20:00:00.000Z'),
    updatedAt: new Date('2026-11-16T20:00:00.000Z'),
    contrato: {
      id: 'contrato-1',
      codigo: 'OBR-001',
      nome: 'Residencial Noroeste',
    },
    evidencias: [],
    historico: [],
    ...sobrescritas,
  };
}

/** Segunda 16/11 às 17h (Brasília): prazo vai até 23/11 às 23h59 */
const SUBMISSAO = new Date('2026-11-16T20:00:00.000Z');
const DENTRO_DO_PRAZO = new Date('2026-11-23T20:00:00.000Z');
const FORA_DO_PRAZO = new Date('2026-11-24T03:00:00.000Z');

function criarMocks() {
  const prisma = {
    contratoObra: { findUnique: vi.fn(), findMany: vi.fn() },
    rvt: {
      aggregate: vi.fn(),
      create: vi.fn(),
      findUnique: vi.fn(),
      findUniqueOrThrow: vi.fn(),
      findMany: vi.fn(),
      update: vi.fn(),
    },
    rvtEvidencia: {
      create: vi.fn((args: unknown) => args),
      delete: vi.fn(),
      findFirst: vi.fn(),
    },
    $transaction: vi.fn(),
  };
  // Transação interativa executa o callback com o próprio mock;
  // transação em lote apenas resolve as operações.
  prisma.$transaction.mockImplementation((arg: unknown) =>
    typeof arg === 'function'
      ? (arg as (tx: unknown) => unknown)(prisma)
      : Promise.all(arg as unknown[]),
  );
  const storage = {
    abrir: vi.fn().mockResolvedValue('stream'),
    salvar: vi.fn(),
    remover: vi.fn().mockResolvedValue(undefined),
  };
  const service = new RvtService(
    prisma as unknown as PrismaService,
    storage as unknown as EvidenciasStorageService,
  );
  return { prisma, storage, service };
}

const DTO = {
  contratoId: 'contrato-1',
  dataJornada: '2026-11-16',
  horasTrabalhadas: 8,
  escopoExecutado: 'Montagem de eletrocalhas no pavimento 2.',
};

describe('RvtService.criar', () => {
  it('cria o apontamento vinculado ao colaborador do token com status PENDENTE', async () => {
    const { prisma, service } = criarMocks();
    prisma.contratoObra.findUnique.mockResolvedValue({ status: 'ATIVO' });
    prisma.rvt.aggregate.mockResolvedValue({
      _sum: { horasTrabalhadas: null },
    });
    prisma.rvt.create.mockResolvedValue(rvtDoBanco());

    const resposta = await service.criar('colab-1', DTO, 'usuario-1');

    expect(prisma.rvt.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          colaboradorId: 'colab-1',
          dataJornada: new Date('2026-11-16T00:00:00.000Z'),
          historico: {
            create: { tipo: 'SUBMISSAO', autorUsuarioId: 'usuario-1' },
          },
        }),
      }),
    );
    expect(resposta).toMatchObject({
      id: 'rvt-1',
      dataJornada: '2026-11-16',
      horasTrabalhadas: 8,
      status: 'PENDENTE',
    });
  });

  it.each([null, { status: 'ENCERRADO' }, { status: 'SUSPENSO' }])(
    'recusa contrato inexistente ou inativo (RN04): %o',
    async (contrato) => {
      const { prisma, service } = criarMocks();
      prisma.contratoObra.findUnique.mockResolvedValue(contrato);
      await expect(service.criar('colab-1', DTO)).rejects.toBeInstanceOf(
        UnprocessableEntityException,
      );
      expect(prisma.rvt.create).not.toHaveBeenCalled();
    },
  );

  it('recusa quando a soma do dia ultrapassa o teto (RN05)', async () => {
    const { prisma, service } = criarMocks();
    prisma.contratoObra.findUnique.mockResolvedValue({ status: 'ATIVO' });
    prisma.rvt.aggregate.mockResolvedValue({ _sum: { horasTrabalhadas: 6 } });

    await expect(
      service.criar('colab-1', { ...DTO, horasTrabalhadas: 6.5 }),
    ).rejects.toThrow(/restam 6h/);
    expect(prisma.rvt.create).not.toHaveBeenCalled();
  });

  it('permite completar exatamente o teto diário', async () => {
    const { prisma, service } = criarMocks();
    prisma.contratoObra.findUnique.mockResolvedValue({ status: 'ATIVO' });
    prisma.rvt.aggregate.mockResolvedValue({ _sum: { horasTrabalhadas: 4 } });
    prisma.rvt.create.mockResolvedValue(rvtDoBanco());

    await expect(service.criar('colab-1', DTO)).resolves.toBeDefined();
    expect(prisma.rvt.aggregate).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({ status: { not: 'REJEITADO' } }),
      }),
    );
  });
});

describe('RvtService.anexarEvidencias', () => {
  const arquivo = {
    originalname: '../foto.png',
    mimetype: 'image/png',
    size: PNG.length,
    buffer: PNG,
  };

  it('grava o arquivo, registra hash e devolve o apontamento atualizado', async () => {
    const { prisma, storage, service } = criarMocks();
    prisma.rvt.findUnique.mockResolvedValue({
      colaboradorId: 'colab-1',
      status: 'PENDENTE',
      janelaRetificacaoInicio: SUBMISSAO,
      _count: { evidencias: 0 },
    });
    storage.salvar.mockResolvedValue({
      caminhoRelativo: 'rvt/rvt-1/x.png',
      hashSha256: 'abc',
    });
    prisma.rvt.findUniqueOrThrow.mockResolvedValue(rvtDoBanco());

    await service.anexarEvidencias('colab-1', 'rvt-1', [arquivo], DENTRO_DO_PRAZO);

    expect(storage.salvar).toHaveBeenCalledWith(
      'rvt-1',
      PNG,
      expect.objectContaining({ extensao: 'png' }),
    );
    expect(prisma.rvtEvidencia.create).toHaveBeenCalledWith({
      data: expect.objectContaining({
        nomeOriginal: 'foto.png',
        mimeType: 'image/png',
        hashSha256: 'abc',
        caminhoArquivo: 'rvt/rvt-1/x.png',
      }),
    });
  });

  it('responde 404 para apontamento de outro colaborador', async () => {
    const { prisma, service } = criarMocks();
    prisma.rvt.findUnique.mockResolvedValue({
      colaboradorId: 'colab-2',
      status: 'PENDENTE',
      janelaRetificacaoInicio: SUBMISSAO,
      _count: { evidencias: 0 },
    });
    await expect(
      service.anexarEvidencias('colab-1', 'rvt-1', [arquivo], DENTRO_DO_PRAZO),
    ).rejects.toBeInstanceOf(NotFoundException);
  });

  it('não aceita evidências em apontamento já homologado', async () => {
    const { prisma, service } = criarMocks();
    prisma.rvt.findUnique.mockResolvedValue({
      colaboradorId: 'colab-1',
      status: 'HOMOLOGADO',
      janelaRetificacaoInicio: SUBMISSAO,
      _count: { evidencias: 0 },
    });
    await expect(
      service.anexarEvidencias('colab-1', 'rvt-1', [arquivo], DENTRO_DO_PRAZO),
    ).rejects.toBeInstanceOf(UnprocessableEntityException);
  });

  it('rejeita arquivo disfarçado sem gravar nada (RNF19)', async () => {
    const { prisma, storage, service } = criarMocks();
    prisma.rvt.findUnique.mockResolvedValue({
      colaboradorId: 'colab-1',
      status: 'PENDENTE',
      janelaRetificacaoInicio: SUBMISSAO,
      _count: { evidencias: 0 },
    });
    const falso = {
      ...arquivo,
      originalname: 'foto.jpg',
      buffer: Buffer.from('MZ\x90\x00'),
    };

    await expect(
      service.anexarEvidencias('colab-1', 'rvt-1', [arquivo, falso], DENTRO_DO_PRAZO),
    ).rejects.toBeInstanceOf(BadRequestException);
    expect(storage.salvar).not.toHaveBeenCalled();
  });

  it('remove os arquivos gravados se o banco falhar', async () => {
    const { prisma, storage, service } = criarMocks();
    prisma.rvt.findUnique.mockResolvedValue({
      colaboradorId: 'colab-1',
      status: 'PENDENTE',
      janelaRetificacaoInicio: SUBMISSAO,
      _count: { evidencias: 0 },
    });
    storage.salvar.mockResolvedValue({
      caminhoRelativo: 'rvt/rvt-1/x.png',
      hashSha256: 'abc',
    });
    prisma.$transaction.mockRejectedValueOnce(new Error('falha no banco'));

    await expect(
      service.anexarEvidencias('colab-1', 'rvt-1', [arquivo], DENTRO_DO_PRAZO),
    ).rejects.toThrow('falha no banco');
    expect(storage.remover).toHaveBeenCalledWith('rvt/rvt-1/x.png');
  });

  it('trava novos anexos após o prazo de cinco dias úteis (RN02)', async () => {
    const { prisma, storage, service } = criarMocks();
    prisma.rvt.findUnique.mockResolvedValue({
      colaboradorId: 'colab-1',
      status: 'PENDENTE',
      janelaRetificacaoInicio: SUBMISSAO,
      _count: { evidencias: 0 },
    });
    await expect(
      service.anexarEvidencias('colab-1', 'rvt-1', [arquivo], FORA_DO_PRAZO),
    ).rejects.toThrow(/terminou em 23\/11\/2026/);
    expect(storage.salvar).not.toHaveBeenCalled();
  });

  it('exige ao menos um arquivo', async () => {
    const { service } = criarMocks();
    await expect(
      service.anexarEvidencias('colab-1', 'rvt-1', []),
    ).rejects.toBeInstanceOf(BadRequestException);
  });
});

describe('RvtService.listarDoColaborador', () => {
  it('filtra pelo colaborador e ordena do mais recente para o mais antigo', async () => {
    const { prisma, service } = criarMocks();
    prisma.rvt.findMany.mockResolvedValue([rvtDoBanco()]);

    const lista = await service.listarDoColaborador('colab-1');

    expect(prisma.rvt.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { colaboradorId: 'colab-1' },
        orderBy: [{ dataJornada: 'desc' }, { createdAt: 'desc' }],
      }),
    );
    expect(lista[0].contrato.codigo).toBe('OBR-001');
  });
});

describe('mapearRvt via listarDoColaborador', () => {
  it('expõe prazo, possibilidade de retificação e histórico', async () => {
    const { prisma, service } = criarMocks();
    prisma.rvt.findMany.mockResolvedValue([
      rvtDoBanco({
        historico: [
          {
            id: 'h1',
            tipo: 'SUBMISSAO',
            parecer: null,
            alteracoes: null,
            createdAt: SUBMISSAO,
          },
        ],
      }),
      rvtDoBanco({ id: 'rvt-2', status: 'HOMOLOGADO' }),
    ]);

    const [pendente, homologado] = await service.listarDoColaborador('colab-1');

    expect(pendente.prazoRetificacao).toBe('2026-11-24T02:59:59.999Z');
    expect(pendente.historico).toEqual([
      expect.objectContaining({ tipo: 'SUBMISSAO', createdAt: SUBMISSAO.toISOString() }),
    ]);
    expect(homologado.prazoRetificacao).toBeNull();
    expect(homologado.podeRetificar).toBe(false);
  });
});

describe('RvtService.retificar (RF35)', () => {
  const AUTOR = { colaboradorId: 'colab-1', usuarioId: 'usuario-1' };

  function atual(sobrescritas: Record<string, unknown> = {}) {
    return {
      colaboradorId: 'colab-1',
      status: 'PENDENTE',
      janelaRetificacaoInicio: SUBMISSAO,
      dataJornada: new Date('2026-11-16T00:00:00.000Z'),
      horasTrabalhadas: 8,
      escopoExecutado: 'Montagem de eletrocalhas no pavimento 2.',
      ...sobrescritas,
    };
  }

  it('retifica horas de um pendente, registra o histórico e mantém o prazo', async () => {
    const { prisma, service } = criarMocks();
    prisma.rvt.findUnique.mockResolvedValue(atual());
    prisma.rvt.aggregate.mockResolvedValue({ _sum: { horasTrabalhadas: 2 } });
    prisma.rvt.update.mockResolvedValue(rvtDoBanco({ horasTrabalhadas: 9.5 }));

    await service.retificar(AUTOR, 'rvt-1', { horasTrabalhadas: 9.5 }, DENTRO_DO_PRAZO);

    // RN05 desconsidera o próprio apontamento na soma do dia
    expect(prisma.rvt.aggregate).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({ id: { not: 'rvt-1' } }),
      }),
    );
    const { data } = prisma.rvt.update.mock.calls[0][0];
    expect(data).not.toHaveProperty('janelaRetificacaoInicio');
    expect(data).toMatchObject({
      horasTrabalhadas: 9.5,
      status: 'PENDENTE',
      historico: {
        create: {
          tipo: 'RETIFICACAO',
          autorUsuarioId: 'usuario-1',
          alteracoes: { horasTrabalhadas: { de: 8, para: 9.5 } },
        },
      },
    });
  });

  it('reenvia um rejeitado: volta a PENDENTE e abre nova janela', async () => {
    const { prisma, service } = criarMocks();
    // Rejeitado em 20/11: o prazo antigo (23/11) já não vale
    const rejeicao = new Date('2026-11-20T15:00:00.000Z');
    const agora = new Date('2026-11-26T15:00:00.000Z');
    prisma.rvt.findUnique.mockResolvedValue(
      atual({ status: 'REJEITADO', janelaRetificacaoInicio: rejeicao }),
    );
    prisma.rvt.aggregate.mockResolvedValue({ _sum: { horasTrabalhadas: null } });
    prisma.rvt.update.mockResolvedValue(rvtDoBanco());

    await service.retificar(
      AUTOR,
      'rvt-1',
      { escopoExecutado: 'Montagem de eletrocalhas e perfilados no pavimento 2.' },
      agora,
    );

    const { data } = prisma.rvt.update.mock.calls[0][0];
    expect(data).toMatchObject({
      status: 'PENDENTE',
      janelaRetificacaoInicio: agora,
      historico: { create: { tipo: 'REENVIO' } },
    });
    // Ao voltar a contar no dia, o teto é conferido mesmo sem mudar as horas
    expect(prisma.rvt.aggregate).toHaveBeenCalled();
  });

  it('permite reenviar um rejeitado sem alterar campos (só anexos)', async () => {
    const { prisma, service } = criarMocks();
    prisma.rvt.findUnique.mockResolvedValue(
      atual({ status: 'REJEITADO', janelaRetificacaoInicio: DENTRO_DO_PRAZO }),
    );
    prisma.rvt.aggregate.mockResolvedValue({ _sum: { horasTrabalhadas: null } });
    prisma.rvt.update.mockResolvedValue(rvtDoBanco());

    await service.retificar(AUTOR, 'rvt-1', {}, DENTRO_DO_PRAZO);

    const { data } = prisma.rvt.update.mock.calls[0][0];
    expect(data.historico.create).not.toHaveProperty('alteracoes');
  });

  it('recusa retificação vazia de um pendente', async () => {
    const { prisma, service } = criarMocks();
    prisma.rvt.findUnique.mockResolvedValue(atual());
    await expect(
      service.retificar(AUTOR, 'rvt-1', { horasTrabalhadas: 8 }, DENTRO_DO_PRAZO),
    ).rejects.toBeInstanceOf(BadRequestException);
    expect(prisma.rvt.update).not.toHaveBeenCalled();
  });

  it('trava a edição após cinco dias úteis (RN02)', async () => {
    const { prisma, service } = criarMocks();
    prisma.rvt.findUnique.mockResolvedValue(atual());
    await expect(
      service.retificar(AUTOR, 'rvt-1', { horasTrabalhadas: 7 }, FORA_DO_PRAZO),
    ).rejects.toThrow(/prazo de retificação terminou em 23\/11\/2026/);
    expect(prisma.rvt.update).not.toHaveBeenCalled();
  });

  it('trava a edição de apontamento homologado', async () => {
    const { prisma, service } = criarMocks();
    prisma.rvt.findUnique.mockResolvedValue(atual({ status: 'HOMOLOGADO' }));
    await expect(
      service.retificar(AUTOR, 'rvt-1', { horasTrabalhadas: 7 }, DENTRO_DO_PRAZO),
    ).rejects.toThrow(/homologado não pode ser alterado/);
  });

  it('responde 404 para apontamento de outro colaborador', async () => {
    const { prisma, service } = criarMocks();
    prisma.rvt.findUnique.mockResolvedValue(atual({ colaboradorId: 'colab-2' }));
    await expect(
      service.retificar(AUTOR, 'rvt-1', { horasTrabalhadas: 7 }, DENTRO_DO_PRAZO),
    ).rejects.toBeInstanceOf(NotFoundException);
  });

  it('respeita o teto diário ao aumentar as horas (RN05)', async () => {
    const { prisma, service } = criarMocks();
    prisma.rvt.findUnique.mockResolvedValue(atual());
    prisma.rvt.aggregate.mockResolvedValue({ _sum: { horasTrabalhadas: 4 } });
    await expect(
      service.retificar(AUTOR, 'rvt-1', { horasTrabalhadas: 8.5 }, DENTRO_DO_PRAZO),
    ).rejects.toThrow(/restam 8h/);
  });

  it('converte conflito de serialização em 409', async () => {
    const { prisma, service } = criarMocks();
    const { Prisma } = await import('../generated/prisma/client.js');
    prisma.$transaction.mockRejectedValueOnce(
      new Prisma.PrismaClientKnownRequestError('conflito', {
        code: 'P2034',
        clientVersion: 'teste',
      }),
    );
    await expect(
      service.retificar(AUTOR, 'rvt-1', { horasTrabalhadas: 7 }, DENTRO_DO_PRAZO),
    ).rejects.toBeInstanceOf(ConflictException);
  });
});

describe('RvtService.removerEvidencia (RF35)', () => {
  const AUTOR = { colaboradorId: 'colab-1', usuarioId: 'usuario-1' };
  const EVIDENCIA = {
    id: 'ev-1',
    nomeOriginal: 'foto.png',
    hashSha256: 'abc',
    caminhoArquivo: 'rvt/rvt-1/x.png',
  };

  it('remove o registro, guarda o rastro no histórico e só então apaga o arquivo', async () => {
    const { prisma, storage, service } = criarMocks();
    prisma.rvt.findUnique.mockResolvedValue({
      colaboradorId: 'colab-1',
      status: 'PENDENTE',
      janelaRetificacaoInicio: SUBMISSAO,
      evidencias: [EVIDENCIA],
    });
    prisma.rvt.update.mockResolvedValue(rvtDoBanco());

    await service.removerEvidencia(AUTOR, 'rvt-1', 'ev-1', DENTRO_DO_PRAZO);

    expect(prisma.rvtEvidencia.delete).toHaveBeenCalledWith({ where: { id: 'ev-1' } });
    expect(prisma.rvt.update.mock.calls[0][0].data.historico.create).toMatchObject({
      tipo: 'RETIFICACAO',
      alteracoes: { evidenciaRemovida: { nomeOriginal: 'foto.png', hashSha256: 'abc' } },
    });
    expect(storage.remover).toHaveBeenCalledWith('rvt/rvt-1/x.png');
  });

  it('não apaga o arquivo se a transação falhar', async () => {
    const { prisma, storage, service } = criarMocks();
    prisma.rvt.findUnique.mockResolvedValue({
      colaboradorId: 'colab-1',
      status: 'PENDENTE',
      janelaRetificacaoInicio: SUBMISSAO,
      evidencias: [EVIDENCIA],
    });
    prisma.rvtEvidencia.delete.mockRejectedValue(new Error('falha no banco'));

    await expect(
      service.removerEvidencia(AUTOR, 'rvt-1', 'ev-1', DENTRO_DO_PRAZO),
    ).rejects.toThrow('falha no banco');
    expect(storage.remover).not.toHaveBeenCalled();
  });

  it('exige reenvio antes de mexer nos anexos de um rejeitado', async () => {
    const { prisma, service } = criarMocks();
    prisma.rvt.findUnique.mockResolvedValue({
      colaboradorId: 'colab-1',
      status: 'REJEITADO',
      janelaRetificacaoInicio: SUBMISSAO,
      evidencias: [EVIDENCIA],
    });
    await expect(
      service.removerEvidencia(AUTOR, 'rvt-1', 'ev-1', DENTRO_DO_PRAZO),
    ).rejects.toThrow(/Reenvie/);
  });

  it('responde 404 para evidência inexistente', async () => {
    const { prisma, service } = criarMocks();
    prisma.rvt.findUnique.mockResolvedValue({
      colaboradorId: 'colab-1',
      status: 'PENDENTE',
      janelaRetificacaoInicio: SUBMISSAO,
      evidencias: [],
    });
    await expect(
      service.removerEvidencia(AUTOR, 'rvt-1', 'ev-x', DENTRO_DO_PRAZO),
    ).rejects.toBeInstanceOf(NotFoundException);
  });
});

describe('RvtService.deliberar (RF32)', () => {
  const GESTOR = { usuarioId: 'gestor-1' };

  function atual(sobrescritas: Record<string, unknown> = {}) {
    return {
      colaboradorId: 'colab-1',
      status: 'PENDENTE',
      contrato: { gestorResponsavelId: 'gestor-1' },
      ...sobrescritas,
    };
  }

  it('homologa: trava a edição e registra o gestor no histórico', async () => {
    const { prisma, service } = criarMocks();
    prisma.rvt.findUnique.mockResolvedValue(atual());
    prisma.rvt.update.mockResolvedValue(rvtDoBanco({ status: 'HOMOLOGADO' }));

    const resposta = await service.deliberar(
      GESTOR,
      'rvt-1',
      { decisao: 'HOMOLOGAR' },
      DENTRO_DO_PRAZO,
    );

    const { data } = prisma.rvt.update.mock.calls[0][0];
    expect(data).toEqual({
      status: 'HOMOLOGADO',
      gestorId: null,
      historico: {
        create: { tipo: 'HOMOLOGACAO', autorUsuarioId: 'gestor-1', parecer: null },
      },
    });
    expect(resposta).toMatchObject({
      colaboradorId: 'colab-1',
      podeRetificar: false,
      prazoRetificacao: null,
    });
  });

  it('rejeita com parecer e reinicia a janela a partir da notificação', async () => {
    const { prisma, service } = criarMocks();
    prisma.rvt.findUnique.mockResolvedValue(atual());
    prisma.rvt.update.mockResolvedValue(rvtDoBanco({ status: 'REJEITADO' }));
    const parecer = 'Horas acima do registrado na portaria da obra.';

    await service.deliberar(
      GESTOR,
      'rvt-1',
      { decisao: 'REJEITAR', parecer },
      FORA_DO_PRAZO,
    );

    expect(prisma.rvt.update.mock.calls[0][0].data).toMatchObject({
      status: 'REJEITADO',
      janelaRetificacaoInicio: FORA_DO_PRAZO,
      historico: { create: { tipo: 'REJEICAO', parecer } },
    });
  });

  it('responde 404 para contrato sob responsabilidade de outro gestor', async () => {
    const { prisma, service } = criarMocks();
    prisma.rvt.findUnique.mockResolvedValue(
      atual({ contrato: { gestorResponsavelId: 'gestor-2' } }),
    );
    await expect(
      service.deliberar(GESTOR, 'rvt-1', { decisao: 'HOMOLOGAR' }),
    ).rejects.toBeInstanceOf(NotFoundException);
    expect(prisma.rvt.update).not.toHaveBeenCalled();
  });

  it('responde 404 para contrato sem gestor responsável', async () => {
    const { prisma, service } = criarMocks();
    prisma.rvt.findUnique.mockResolvedValue(
      atual({ contrato: { gestorResponsavelId: null } }),
    );
    await expect(
      service.deliberar(GESTOR, 'rvt-1', { decisao: 'HOMOLOGAR' }),
    ).rejects.toBeInstanceOf(NotFoundException);
  });

  it('impede o gestor de deliberar o próprio apontamento (RN16)', async () => {
    const { prisma, service } = criarMocks();
    prisma.rvt.findUnique.mockResolvedValue(atual());
    await expect(
      service.deliberar(
        { usuarioId: 'gestor-1', colaboradorId: 'colab-1' },
        'rvt-1',
        { decisao: 'HOMOLOGAR' },
      ),
    ).rejects.toBeInstanceOf(ForbiddenException);
  });

  it.each(['HOMOLOGADO', 'REJEITADO'])(
    'recusa deliberar apontamento já %s',
    async (status) => {
      const { prisma, service } = criarMocks();
      prisma.rvt.findUnique.mockResolvedValue(atual({ status }));
      await expect(
        service.deliberar(GESTOR, 'rvt-1', { decisao: 'HOMOLOGAR' }),
      ).rejects.toBeInstanceOf(ConflictException);
    },
  );
});

describe('RvtService.listarPendentesDoGestor (RF32)', () => {
  it('filtra pendentes dos contratos do gestor, mais antigos primeiro', async () => {
    const { prisma, service } = criarMocks();
    prisma.rvt.findMany.mockResolvedValue([rvtDoBanco()]);

    const lista = await service.listarPendentesDoGestor('gestor-1');

    expect(prisma.rvt.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: {
          status: 'PENDENTE',
          contrato: { gestorResponsavelId: 'gestor-1' },
        },
        orderBy: [{ dataJornada: 'asc' }, { createdAt: 'asc' }],
      }),
    );
    expect(lista[0].colaboradorId).toBe('colab-1');
  });
});

describe('RvtService.obterArquivoEvidencia (RN16)', () => {
  const EVIDENCIA = {
    nomeOriginal: 'quadro.jpg',
    mimeType: 'image/jpeg',
    caminhoArquivo: 'rvt/rvt-1/a.jpg',
    rvt: {
      colaboradorId: 'colab-1',
      contrato: { gestorResponsavelId: 'gestor-1' },
    },
  };

  it.each([
    ['autor', { usuarioId: 'u-1', colaboradorId: 'colab-1', papel: 'TECNICO_CAMPO' }],
    ['gestor responsável', { usuarioId: 'gestor-1', colaboradorId: '', papel: 'GESTOR_OPERACIONAL' }],
  ])('libera o arquivo para o %s', async (_quem, leitor) => {
    const { prisma, storage, service } = criarMocks();
    prisma.rvtEvidencia.findFirst.mockResolvedValue(EVIDENCIA);

    const arquivo = await service.obterArquivoEvidencia(leitor, 'rvt-1', 'ev-1');

    expect(prisma.rvtEvidencia.findFirst).toHaveBeenCalledWith(
      expect.objectContaining({ where: { id: 'ev-1', rvtId: 'rvt-1' } }),
    );
    expect(storage.abrir).toHaveBeenCalledWith('rvt/rvt-1/a.jpg');
    expect(arquivo).toMatchObject({ mimeType: 'image/jpeg', nomeOriginal: 'quadro.jpg' });
  });

  it.each([
    ['outro técnico', { usuarioId: 'u-2', colaboradorId: 'colab-2', papel: 'TECNICO_CAMPO' }],
    ['gestor de outro contrato', { usuarioId: 'gestor-2', colaboradorId: '', papel: 'GESTOR_OPERACIONAL' }],
    ['administrador financeiro', { usuarioId: 'gestor-1', colaboradorId: '', papel: 'ADMIN_FINANCEIRO' }],
    ['conta sem colaborador', { usuarioId: 'u-3', colaboradorId: '', papel: 'TECNICO_CAMPO' }],
  ])('responde 404 para %s', async (_quem, leitor) => {
    const { prisma, storage, service } = criarMocks();
    prisma.rvtEvidencia.findFirst.mockResolvedValue(EVIDENCIA);
    await expect(
      service.obterArquivoEvidencia(leitor, 'rvt-1', 'ev-1'),
    ).rejects.toBeInstanceOf(NotFoundException);
    expect(storage.abrir).not.toHaveBeenCalled();
  });
});
