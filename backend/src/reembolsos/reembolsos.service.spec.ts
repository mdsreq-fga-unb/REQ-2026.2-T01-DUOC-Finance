import { BadRequestException, UnprocessableEntityException } from '@nestjs/common';
import { StatusContratoObra, StatusReembolso } from '../generated/prisma/client.js';
import type { PrismaService } from '../prisma/prisma.service.js';
import type { ComprovanteStorageService } from './comprovante-storage.service.js';
import { ReembolsosService } from './reembolsos.service.js';

const contratoId = 'af8c5627-65bd-4bcd-87d4-2f4d4a49c003';
const usuario = { usuarioId: 'usuario-1', colaboradorId: 'colaborador-1', papel: 'TECNICO_CAMPO' };
const dto = { contratoId, rvtId: null, categoria: 'Alimentação', descricao: 'Almoço em obra autorizado.', valorCentavos: 5990, dataDespesa: '2026-11-20' };
const comprovante = { originalname: 'nota.pdf', mimetype: 'application/pdf', buffer: Buffer.from('%PDF-1.7\n'), size: 9 };

const findContrato = vi.fn();
const findRvt = vi.fn();
const createReembolso = vi.fn();
const salvar = vi.fn();
const remover = vi.fn();
const prisma = {
  contratoObra: { findUnique: findContrato },
  rvt: { findUnique: findRvt },
  solicitacaoReembolso: { create: createReembolso },
} as unknown as PrismaService;
const storage = { salvar, remover } as unknown as ComprovanteStorageService;
const service = new ReembolsosService(prisma, storage);

beforeEach(() => {
  vi.resetAllMocks();
  findContrato.mockResolvedValue({ id: contratoId, codigo: 'CT-123', nome: 'Obra', status: StatusContratoObra.ATIVO });
  salvar.mockResolvedValue({ chave: 'reembolsos/id/arquivo.pdf', hashSha256: 'abc' });
  remover.mockResolvedValue(undefined);
  createReembolso.mockImplementation(async ({ data }) => ({
    ...data, status: StatusReembolso.PENDENTE, createdAt: new Date('2026-11-21T12:00:00Z'),
  }));
});

describe('RF07 — criação autenticada', () => {
  it('grava com solicitante do JWT e sem expor chave de armazenamento', async () => {
    const resposta = await service.criar(usuario, dto, comprovante);
    expect(createReembolso).toHaveBeenCalledWith({data: expect.objectContaining({
      solicitanteId: 'usuario-1', valorCentavos: 5990, contratoId,
      comprovanteMimeType: 'application/pdf',
    })});
    expect(resposta).not.toHaveProperty('comprovanteChaveArquivo');
    expect(resposta).not.toHaveProperty('comprovanteHashSha256');
    expect(resposta.codigo).toMatch(/^DES-[A-F0-9]{24}$/);
  });
  it('recusa comprovante ausente antes de qualquer inserção', async () => {
    await expect(service.criar(usuario, dto, undefined)).rejects.toBeInstanceOf(BadRequestException);
    expect(salvar).not.toHaveBeenCalled();
  });
  it('recusa conteúdo com assinatura inválida', async () => {
    const arquivo = { originalname: 'fraude.pdf', mimetype: 'application/pdf', buffer: Buffer.from('programa'), size: 8 };
    await expect(service.criar(usuario, dto, arquivo)).rejects.toBeInstanceOf(BadRequestException);
    expect(createReembolso).not.toHaveBeenCalled();
  });
  it('recusa contrato inativo', async () => {
    findContrato.mockResolvedValue({ status: StatusContratoObra.SUSPENSO });
    await expect(service.criar(usuario, dto, comprovante)).rejects.toBeInstanceOf(UnprocessableEntityException);
    expect(salvar).not.toHaveBeenCalled();
  });
  it('recusa RVT de outro usuário ou contrato', async () => {
    findRvt.mockResolvedValue({ contratoId, colaboradorId: 'outra-pessoa' });
    await expect(service.criar(usuario, {...dto, rvtId: '123'}, comprovante)).rejects.toBeInstanceOf(UnprocessableEntityException);
    expect(salvar).not.toHaveBeenCalled();
  });
  it('remove arquivo se a inserção no banco falhar', async () => {
    createReembolso.mockRejectedValue(new Error('Falha no banco'));
    await expect(service.criar(usuario, dto, comprovante)).rejects.toThrow('Falha no banco');
    expect(remover).toHaveBeenCalledWith('reembolsos/id/arquivo.pdf');
  });
});
