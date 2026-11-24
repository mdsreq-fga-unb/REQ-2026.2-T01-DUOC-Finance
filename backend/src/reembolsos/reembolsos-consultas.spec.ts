import { ConflictException, NotFoundException } from '@nestjs/common';
import { StatusReembolso } from '../generated/prisma/client.js';
import type { PrismaService } from '../prisma/prisma.service.js';
import type { ComprovanteStorageService } from './comprovante-storage.service.js';
import { ReembolsosService } from './reembolsos.service.js';

const id = 'af8c5627-65bd-4bcd-87d4-2f4d4a49c003';
const registro = {
  id, codigo: 'DES-001', solicitanteId: 'autor', contratoId: 'ct', rvtId: null,
  categoria: 'Alimentação', descricao: 'Despesa feita em campo.', valorCentavos: 1200,
  valorAprovadoCentavos: null, dataDespesa: new Date('2026-11-20T00:00:00Z'),
  status: StatusReembolso.PENDENTE, parecer: null, deliberadoEm: null,
  comprovanteNomeOriginal: 'nota.pdf', comprovanteMimeType: 'application/pdf',
  comprovanteTamanhoBytes: 120, comprovanteChaveArquivo: 'reembolsos/id/nota.pdf',
  comprovanteHashSha256: 'abc',
  solicitante: { id: 'autor', email: 'autor@example.com' },
  contrato: { id: 'ct', codigo: 'CT-1', nome: 'Obra A' },
  createdAt: new Date('2026-11-21T10:00:00Z'), updatedAt: new Date('2026-11-21T10:00:00Z'),
};
const findMany = vi.fn(), findFirst = vi.fn(), findUnique = vi.fn(), updateMany = vi.fn(), findUniqueOrThrow = vi.fn(), abrir = vi.fn();
const db = { solicitacaoReembolso: { findMany, findFirst, findUnique, updateMany, findUniqueOrThrow } } as unknown as PrismaService;
const storage = { abrir } as unknown as ComprovanteStorageService;
const service = new ReembolsosService(db, storage);
const autor = { usuarioId: 'autor', colaboradorId: '', papel: 'TECNICO_CAMPO' };
const admin = { usuarioId: 'admin', colaboradorId: '', papel: 'ADMIN_FINANCEIRO' };

beforeEach(() => { vi.resetAllMocks(); findMany.mockResolvedValue([registro]); findFirst.mockResolvedValue(registro); findUnique.mockResolvedValue(registro); updateMany.mockResolvedValue({count:1}); findUniqueOrThrow.mockResolvedValue(registro); abrir.mockResolvedValue(Buffer.from('%PDF-1.4')); });

describe('RF07 e RF08 — consultas protegidas', () => {
  it('filtra minhas solicitações no SQL pelo usuário autenticado', async () => {
    const dados = await service.listarMeus('autor');
    expect(findMany).toHaveBeenCalledWith(expect.objectContaining({where: {solicitanteId: 'autor'}}));
    expect(dados).toHaveLength(1);
    expect(dados[0]).not.toHaveProperty('comprovanteChaveArquivo');
  });
  it('lista solicitações administrativas com informação do solicitante', async () => {
    const dados = await service.listarAdministrativo();
    expect(dados[0].solicitante.email).toBe('autor@example.com');
  });
  it('filtra detalhes por usuário quando não é administrador', async () => {
    await service.detalhar(autor, id);
    expect(findFirst).toHaveBeenCalledWith(expect.objectContaining({where: {id, solicitanteId: 'autor'}}));
  });
  it('não aplica filtro de autoria ao administrador', async () => {
    await service.detalhar(admin, id);
    expect(findFirst).toHaveBeenCalledWith(expect.objectContaining({where: {id}}));
  });
  it('retorna 404 sem distinguir registro inexistente de não autorizado', async () => {
    findFirst.mockResolvedValue(null);
    await expect(service.obterComprovante(autor, id)).rejects.toBeInstanceOf(NotFoundException);
    expect(abrir).not.toHaveBeenCalled();
  });
  it('abre comprovante somente após consulta com controle de autoria', async () => {
    await service.obterComprovante(autor, id);
    expect(findFirst).toHaveBeenCalled();
    expect(abrir).toHaveBeenCalledWith('reembolsos/id/nota.pdf');
  });
});

describe('RF08 — deliberação única e segura', () => {
  it('aprova com parecer e valor integral', async () => {
    await service.deliberar('admin', id, {decisao: 'APROVAR', parecer: 'Despesa comprovada.'});
    expect(updateMany).toHaveBeenCalledWith({
      where: { id, status: StatusReembolso.PENDENTE },
      data: expect.objectContaining({
        status: StatusReembolso.APROVADO, parecer: 'Despesa comprovada.',
        valorAprovadoCentavos: 1200, deliberadoPorId: 'admin',
      }),
    });
  });
  it('rejeita com parecer e sem valor aprovado', async () => {
    await service.deliberar('admin', id, {decisao: 'REJEITAR', parecer: 'Documento ilegível.'});
    expect(updateMany).toHaveBeenCalledWith(expect.objectContaining({data: expect.objectContaining({status: StatusReembolso.REJEITADO, valorAprovadoCentavos: null})}));
  });
  it('nega deliberação de solicitação inexistente', async () => {
    findUnique.mockResolvedValue(null);
    await expect(service.deliberar('admin', id, {decisao:'APROVAR', parecer:'Despesa comprovada.'})).rejects.toBeInstanceOf(NotFoundException);
  });
  it('nega segunda deliberação', async () => {
    findUnique.mockResolvedValue({...registro,status:StatusReembolso.APROVADO});
    await expect(service.deliberar('admin', id, {decisao:'REJEITAR', parecer:'Documento ilegível.'})).rejects.toBeInstanceOf(ConflictException);
    expect(updateMany).not.toHaveBeenCalled();
  });
  it('recusa conflito de concorrência em atualização atômica', async () => {
    updateMany.mockResolvedValue({count:0});
    await expect(service.deliberar('admin', id, {decisao:'APROVAR', parecer:'Despesa comprovada.'})).rejects.toBeInstanceOf(ConflictException);
  });
});
