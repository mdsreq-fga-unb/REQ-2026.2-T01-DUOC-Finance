import {
  BadRequestException,
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
    createdAt: new Date('2026-11-16T20:00:00.000Z'),
    updatedAt: new Date('2026-11-16T20:00:00.000Z'),
    contrato: {
      id: 'contrato-1',
      codigo: 'OBR-001',
      nome: 'Residencial Noroeste',
    },
    evidencias: [],
    ...sobrescritas,
  };
}

function criarMocks() {
  const prisma = {
    contratoObra: { findUnique: vi.fn(), findMany: vi.fn() },
    rvt: {
      aggregate: vi.fn(),
      create: vi.fn(),
      findUnique: vi.fn(),
      findUniqueOrThrow: vi.fn(),
      findMany: vi.fn(),
    },
    rvtEvidencia: { create: vi.fn((args: unknown) => args) },
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

    const resposta = await service.criar('colab-1', DTO);

    expect(prisma.rvt.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          colaboradorId: 'colab-1',
          dataJornada: new Date('2026-11-16T00:00:00.000Z'),
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
      _count: { evidencias: 0 },
    });
    storage.salvar.mockResolvedValue({
      caminhoRelativo: 'rvt/rvt-1/x.png',
      hashSha256: 'abc',
    });
    prisma.rvt.findUniqueOrThrow.mockResolvedValue(rvtDoBanco());

    await service.anexarEvidencias('colab-1', 'rvt-1', [arquivo]);

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
      _count: { evidencias: 0 },
    });
    await expect(
      service.anexarEvidencias('colab-1', 'rvt-1', [arquivo]),
    ).rejects.toBeInstanceOf(NotFoundException);
  });

  it('não aceita evidências em apontamento já homologado', async () => {
    const { prisma, service } = criarMocks();
    prisma.rvt.findUnique.mockResolvedValue({
      colaboradorId: 'colab-1',
      status: 'HOMOLOGADO',
      _count: { evidencias: 0 },
    });
    await expect(
      service.anexarEvidencias('colab-1', 'rvt-1', [arquivo]),
    ).rejects.toBeInstanceOf(UnprocessableEntityException);
  });

  it('rejeita arquivo disfarçado sem gravar nada (RNF19)', async () => {
    const { prisma, storage, service } = criarMocks();
    prisma.rvt.findUnique.mockResolvedValue({
      colaboradorId: 'colab-1',
      status: 'PENDENTE',
      _count: { evidencias: 0 },
    });
    const falso = {
      ...arquivo,
      originalname: 'foto.jpg',
      buffer: Buffer.from('MZ\x90\x00'),
    };

    await expect(
      service.anexarEvidencias('colab-1', 'rvt-1', [arquivo, falso]),
    ).rejects.toBeInstanceOf(BadRequestException);
    expect(storage.salvar).not.toHaveBeenCalled();
  });

  it('remove os arquivos gravados se o banco falhar', async () => {
    const { prisma, storage, service } = criarMocks();
    prisma.rvt.findUnique.mockResolvedValue({
      colaboradorId: 'colab-1',
      status: 'PENDENTE',
      _count: { evidencias: 0 },
    });
    storage.salvar.mockResolvedValue({
      caminhoRelativo: 'rvt/rvt-1/x.png',
      hashSha256: 'abc',
    });
    prisma.$transaction.mockRejectedValueOnce(new Error('falha no banco'));

    await expect(
      service.anexarEvidencias('colab-1', 'rvt-1', [arquivo]),
    ).rejects.toThrow('falha no banco');
    expect(storage.remover).toHaveBeenCalledWith('rvt/rvt-1/x.png');
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
