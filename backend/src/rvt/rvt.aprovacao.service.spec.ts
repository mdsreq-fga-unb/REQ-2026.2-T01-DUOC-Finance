import {
  BadRequestException,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { EvidenciasStorageService } from './evidencias/evidencias-storage.service.js';
import { RvtService } from './rvt.service.js';

function criarService() {
  const prisma = {
    rvt: {
      findMany: vi.fn(),
      updateMany: vi.fn(),
      findUnique: vi.fn(),
      findUniqueOrThrow: vi.fn(),
    },
  };

  const service = new RvtService(
    prisma as unknown as PrismaService,
    {} as EvidenciasStorageService,
  );

  return { prisma, service };
}

const rvt = {
  id: '6f1c1c1e-3f8a-4c4b-9d55-6a2f3b2f9b10',
  contratoId: 'contrato-1',
  colaboradorId: 'colaborador-1',
  dataJornada: new Date('2026-11-16T00:00:00.000Z'),
  horasTrabalhadas: 8,
  escopoExecutado: 'Instalação elétrica.',
  status: 'PENDENTE',
  justificativaRejeicao: null,
  createdAt: new Date('2026-11-16T20:00:00.000Z'),
  updatedAt: new Date('2026-11-16T20:00:00.000Z'),
  contrato: {
    id: 'contrato-1',
    codigo: 'OBR-001',
    nome: 'Residencial Noroeste',
  },
  evidencias: [],
};

describe('RvtService.listarParaAprovacao', () => {
  it('lista pendentes por padrão', async () => {
    const { prisma, service } = criarService();
    prisma.rvt.findMany.mockResolvedValue([rvt]);

    const resposta = await service.listarParaAprovacao({});

    expect(prisma.rvt.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { status: 'PENDENTE' },
        take: 100,
      }),
    );
    expect(resposta).toHaveLength(1);
    expect(resposta[0].status).toBe('PENDENTE');
  });

  it('filtra por status e contrato', async () => {
    const { prisma, service } = criarService();
    prisma.rvt.findMany.mockResolvedValue([]);

    await service.listarParaAprovacao({
      status: 'REJEITADO',
      contratoId: 'contrato-1',
    });

    expect(prisma.rvt.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: {
          status: 'REJEITADO',
          contratoId: 'contrato-1',
        },
      }),
    );
  });

  it('recusa status inválido', async () => {
    const { prisma, service } = criarService();

    await expect(
      service.listarParaAprovacao({ status: 'INVALIDO' }),
    ).rejects.toBeInstanceOf(BadRequestException);

    expect(prisma.rvt.findMany).not.toHaveBeenCalled();
  });
});

describe('RvtService.decidir', () => {
  it('exige justificativa para reprovar', async () => {
    const { prisma, service } = criarService();

    await expect(
      service.decidir(rvt.id, 'REJEITADO'),
    ).rejects.toBeInstanceOf(BadRequestException);

    expect(prisma.rvt.updateMany).not.toHaveBeenCalled();
  });

  it('homologa somente um RVT pendente', async () => {
    const { prisma, service } = criarService();
    prisma.rvt.updateMany.mockResolvedValue({ count: 1 });
    prisma.rvt.findUniqueOrThrow.mockResolvedValue({
      ...rvt,
      status: 'HOMOLOGADO',
    });

    const resposta = await service.decidir(rvt.id, 'HOMOLOGADO');

    expect(prisma.rvt.updateMany).toHaveBeenCalledWith({
      where: { id: rvt.id, status: 'PENDENTE' },
      data: {
        status: 'HOMOLOGADO',
        justificativaRejeicao: null,
      },
    });
    expect(resposta.status).toBe('HOMOLOGADO');
  });

  it('rejeita e salva a justificativa sem espaços extras', async () => {
    const { prisma, service } = criarService();
    prisma.rvt.updateMany.mockResolvedValue({ count: 1 });
    prisma.rvt.findUniqueOrThrow.mockResolvedValue({
      ...rvt,
      status: 'REJEITADO',
      justificativaRejeicao: 'Anexo ilegível',
    });

    const resposta = await service.decidir(
      rvt.id,
      'REJEITADO',
      '  Anexo ilegível  ',
    );

    expect(prisma.rvt.updateMany).toHaveBeenCalledWith({
      where: { id: rvt.id, status: 'PENDENTE' },
      data: {
        status: 'REJEITADO',
        justificativaRejeicao: 'Anexo ilegível',
      },
    });
    expect(resposta.justificativaRejeicao).toBe('Anexo ilegível');
  });

  it('retorna 404 quando o RVT não existe', async () => {
    const { prisma, service } = criarService();
    prisma.rvt.updateMany.mockResolvedValue({ count: 0 });
    prisma.rvt.findUnique.mockResolvedValue(null);

    await expect(
      service.decidir(rvt.id, 'HOMOLOGADO'),
    ).rejects.toBeInstanceOf(NotFoundException);
  });

  it('impede decidir um RVT que já não está pendente', async () => {
    const { prisma, service } = criarService();
    prisma.rvt.updateMany.mockResolvedValue({ count: 0 });
    prisma.rvt.findUnique.mockResolvedValue({ id: rvt.id });

    await expect(
      service.decidir(rvt.id, 'HOMOLOGADO'),
    ).rejects.toBeInstanceOf(ConflictException);
  });
});