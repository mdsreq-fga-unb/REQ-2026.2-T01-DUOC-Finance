import { BadRequestException, NotFoundException } from '@nestjs/common';
import { StatusContratoObra, StatusReembolso, StatusRvt } from '../generated/prisma/client.js';
import type { PrismaService } from '../prisma/prisma.service.js';
import { ContratosService } from './contratos.service.js';

const contratoId = 'af8c5627-65bd-4bcd-87d4-2f4d4a49c003';
const gestorId = 'b18b9d4e-7d55-4f8e-9e75-a7f1b6cf6b10';

const findManyContrato = vi.fn();
const findUniqueContrato = vi.fn();
const createContrato = vi.fn();
const updateContrato = vi.fn();
const findManyRvt = vi.fn();
const findManyReembolso = vi.fn();
const findUsuario = vi.fn();
const findManyUsuario = vi.fn();
const countUsuario = vi.fn();
const countRvt = vi.fn();
const countReembolso = vi.fn();

const prisma = {
  contratoObra: {
    findMany: findManyContrato,
    findUnique: findUniqueContrato,
    create: createContrato,
    update: updateContrato,
  },
  usuario: {
    findUnique: findUsuario,
    findMany: findManyUsuario,
    count: countUsuario,
  },
  rvt: { findMany: findManyRvt, count: countRvt },
  solicitacaoReembolso: { findMany: findManyReembolso, count: countReembolso },
} as unknown as PrismaService;

const service = new ContratosService(prisma);

beforeEach(() => {
  vi.resetAllMocks();
  findUniqueContrato.mockResolvedValue({
    id: contratoId,
    codigo: 'OBR-001',
    nome: 'Obra Centro',
    centroCusto: 'CC-01',
    valorDiariaCentavos: 25000,
    dataInicio: null,
    dataFim: null,
    status: StatusContratoObra.ATIVO,
  });
  findManyContrato.mockResolvedValue([]);
  findManyRvt.mockResolvedValue([]);
  findManyReembolso.mockResolvedValue([]);
  findUsuario.mockResolvedValue({ id: gestorId, ativo: true, papel: 'GESTOR_OBRAS' });
  findManyUsuario.mockResolvedValue([]);
  countUsuario.mockResolvedValue(3);
  countRvt.mockResolvedValue(4);
  countReembolso.mockResolvedValue(2);
  createContrato.mockResolvedValue({ id: contratoId, codigo: 'OBR-001', nome: 'Obra Centro' });
  updateContrato.mockResolvedValue({ id: contratoId, status: StatusContratoObra.ENCERRADO });
});

describe('ContratosService', () => {
  it('lista contratos filtrando opcionalmente por status', async () => {
    await service.listar();
    expect(findManyContrato).toHaveBeenLastCalledWith(expect.objectContaining({ where: undefined }));

    await service.listar('ATIVO');
    expect(findManyContrato).toHaveBeenLastCalledWith(expect.objectContaining({
      where: { status: StatusContratoObra.ATIVO },
    }));
  });

  it('cria contrato com gestor válido', async () => {
    const resposta = await service.criar({
      codigo: 'OBR-001',
      nome: 'Obra Centro',
      cliente: null,
      descricao: null,
      centroCusto: 'CC-01',
      valorDiariaCentavos: 25000,
      dataInicio: '2026-11-01',
      dataFim: '2026-11-30',
      gestorResponsavelId: gestorId,
    });
    expect(resposta.id).toBe(contratoId);
    expect(createContrato).toHaveBeenCalledWith(expect.objectContaining({
      data: expect.objectContaining({ codigo: 'OBR-001', gestorResponsavelId: gestorId }),
    }));
  });

  it('recusa código duplicado na criação', async () => {
    createContrato.mockRejectedValue({ code: 'P2002' });
    await expect(service.criar({ codigo: 'OBR-001', nome: 'Obra Centro' })).rejects.toBeInstanceOf(BadRequestException);
  });

  it('recusa gestor inativo ou com papel diferente de GESTOR_OBRAS', async () => {
    findUsuario.mockResolvedValue({ id: gestorId, ativo: true, papel: 'TECNICO_CAMPO' });
    await expect(service.criar({
      codigo: 'OBR-001',
      nome: 'Obra Centro',
      gestorResponsavelId: gestorId,
    })).rejects.toBeInstanceOf(BadRequestException);

    findUsuario.mockResolvedValue({ id: gestorId, ativo: false, papel: 'GESTOR_OBRAS' });
    await expect(service.criar({
      codigo: 'OBR-001',
      nome: 'Obra Centro',
      gestorResponsavelId: gestorId,
    })).rejects.toBeInstanceOf(BadRequestException);
  });

  it('atualiza contrato e valida consistência parcial de datas', async () => {
    findUniqueContrato.mockResolvedValue({
      id: contratoId,
      codigo: 'OBR-001',
      nome: 'Obra Centro',
      centroCusto: 'CC-01',
      valorDiariaCentavos: 25000,
      dataInicio: new Date('2026-11-10T00:00:00.000Z'),
      dataFim: new Date('2026-11-20T00:00:00.000Z'),
      status: StatusContratoObra.ATIVO,
    });
    await expect(service.atualizar(contratoId, { dataInicio: '2026-11-25' })).rejects.toBeInstanceOf(BadRequestException);

    updateContrato.mockResolvedValue({ id: contratoId, nome: 'Obra Atualizada' });
    const atualizado = await service.atualizar(contratoId, { nome: 'Obra Atualizada' });
    expect(atualizado.nome).toBe('Obra Atualizada');
  });

  it('retorna erro de não encontrado para contrato inexistente', async () => {
    findUniqueContrato.mockResolvedValue(null);
    await expect(service.obter(contratoId)).rejects.toBeInstanceOf(NotFoundException);
  });

  it('encerra contrato', async () => {
    const resposta = await service.encerrar(contratoId);
    expect(resposta.status).toBe(StatusContratoObra.ENCERRADO);
    expect(updateContrato).toHaveBeenCalledWith(expect.objectContaining({
      data: { status: StatusContratoObra.ENCERRADO },
    }));
  });

  it('calcula rateio de diárias homologadas e reembolsos aprovados no período', async () => {
    findManyRvt.mockResolvedValue([
      { id: 'rvt-1', dataJornada: new Date('2026-11-20'), horasTrabalhadas: 8 },
      { id: 'rvt-2', dataJornada: new Date('2026-11-21'), horasTrabalhadas: 8 },
    ]);
    findManyReembolso.mockResolvedValue([
      { id: 'des-1', codigo: 'DES-001', categoria: 'Alimentação', valorAprovadoCentavos: 5990, valorCentavos: 7000, dataDespesa: new Date('2026-11-20') },
      { id: 'des-2', codigo: 'DES-002', categoria: 'Transporte', valorAprovadoCentavos: null, valorCentavos: 3000, dataDespesa: new Date('2026-11-21') },
    ]);

    const resposta = await service.rateio(contratoId, '2026-11-01', '2026-11-30');
    expect(resposta.centroCusto).toBe('CC-01');
    expect(resposta.diariasHomologadas).toBe(2);
    expect(resposta.diariasCentavos).toBe(50000);
    expect(resposta.reembolsosAprovados).toBe(2);
    expect(resposta.reembolsosCentavos).toBe(8990);
    expect(resposta.totalCentavos).toBe(58990);
    expect(resposta.itens).toHaveLength(4);
  });

  it('rejeita período inválido no rateio', async () => {
    await expect(service.rateio(contratoId, '2026-11-30', '2026-11-01')).rejects.toBeInstanceOf(BadRequestException);
    await expect(service.rateio(contratoId, '2026-02-30')).rejects.toBeInstanceOf(BadRequestException);
  });

  it('gera indicadores reais e consolida por contrato, período e status', async () => {
    const contrato = {
      id: contratoId,
      codigo: 'OBR-001',
      nome: 'Obra Centro',
      status: StatusContratoObra.ATIVO,
      centroCusto: 'CC-01',
      valorDiariaCentavos: 25000,
    };
    findManyContrato.mockResolvedValue([contrato]);
    findManyRvt.mockResolvedValue([{ contratoId, status: StatusRvt.HOMOLOGADO }]);
    findManyReembolso.mockResolvedValue([
      { contratoId, status: StatusReembolso.APROVADO, valorAprovadoCentavos: 4000, valorCentavos: 4000 },
    ]);

    const resposta = await service.indicadores('2026-11-01', '2026-11-30', 'ATIVO', contratoId);
    expect(findManyContrato).toHaveBeenCalledWith(expect.objectContaining({
      where: { status: StatusContratoObra.ATIVO, id: contratoId },
    }));
    expect(resposta.colaboradoresAtivos).toBe(3);
    expect(resposta.apontamentosPendentes).toBe(4);
    expect(resposta.reembolsosPendentes).toBe(2);
    expect(resposta.obrasEmAndamento).toBe(1);
    expect(resposta.custosTotalCentavos).toBe(29000);
    expect(resposta.contratos[0]).toMatchObject({
      diariasHomologadas: 1,
      diariasCentavos: 25000,
      reembolsosAprovados: 1,
      reembolsosCentavos: 4000,
      totalCentavos: 29000,
    });
  });

  it('rejeita filtros inválidos em indicadores', async () => {
    await expect(service.indicadores(undefined, undefined, 'INEXISTENTE')).rejects.toBeInstanceOf(BadRequestException);
    await expect(service.indicadores(undefined, undefined, undefined, 'invalido')).rejects.toBeInstanceOf(BadRequestException);
  });

  it('lista apenas gestores ativos', async () => {
    await service.listarGestores();
    expect(findManyUsuario).toHaveBeenCalledWith(expect.objectContaining({
      where: { ativo: true, papel: 'GESTOR_OBRAS' },
    }));
  });
});
