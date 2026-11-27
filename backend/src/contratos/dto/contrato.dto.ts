import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

export interface ContratoDto {
  codigo?: string;
  nome?: string;
  cliente?: string | null;
  descricao?: string | null;
  centroCusto?: string | null;
  valorDiariaCentavos?: number;
  dataInicio?: string | null;
  dataFim?: string | null;
  gestorResponsavelId?: string | null;
  status?: 'ATIVO' | 'SUSPENSO' | 'ENCERRADO';
}

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const DATA_ISO = /^\d{4}-\d{2}-\d{2}$/;

export function dataIsoValida(valor: string): boolean {
  if (!DATA_ISO.test(valor)) return false;
  const data = new Date(`${valor}T00:00:00.000Z`);
  return !Number.isNaN(data.getTime()) && data.toISOString().slice(0, 10) === valor;
}

function opcionalTexto(dados: Record<string, unknown>, chave: string, tamanho: number): string | null {
  const valor = dados[chave];
  if (valor === undefined || valor === null || valor === '') return null;
  if (typeof valor !== 'string') throw new BadRequestException(`${chave} deve ser um texto.`);
  const texto = valor.trim();
  if (texto.length > tamanho) throw new BadRequestException(`${chave} deve ter até ${tamanho} caracteres.`);
  return texto;
}

export function validarContrato(corpo: unknown, atualizacao = false): ContratoDto {
  const dados = (corpo && typeof corpo === 'object' ? corpo : {}) as Record<string, unknown>;
  const codigo = typeof dados.codigo === 'string' ? dados.codigo.trim().toUpperCase() : '';
  const nome = typeof dados.nome === 'string' ? dados.nome.trim() : '';
  const erros: string[] = [];
  if (!atualizacao || dados.codigo !== undefined) {
    if (codigo.length < 2 || codigo.length > 32) erros.push('codigo deve ter entre 2 e 32 caracteres.');
  }
  if (!atualizacao || dados.nome !== undefined) {
    if (nome.length < 3 || nome.length > 160) erros.push('nome deve ter entre 3 e 160 caracteres.');
  }
  if (dados.valorDiariaCentavos !== undefined) {
    if (!Number.isInteger(dados.valorDiariaCentavos) || Number(dados.valorDiariaCentavos) < 0) {
      erros.push('valorDiariaCentavos deve ser um inteiro não negativo.');
    }
  }
  if (dados.status !== undefined && !['ATIVO', 'SUSPENSO', 'ENCERRADO'].includes(String(dados.status))) {
    erros.push('status deve ser ATIVO, SUSPENSO ou ENCERRADO.');
  }
  const gestor = opcionalTexto(dados, 'gestorResponsavelId', 36);
  if (gestor && !UUID.test(gestor)) erros.push('gestorResponsavelId deve ser um UUID válido.');
  const dataInicio = opcionalTexto(dados, 'dataInicio', 10);
  const dataFim = opcionalTexto(dados, 'dataFim', 10);
  if (dataInicio && !dataIsoValida(dataInicio)) erros.push('dataInicio deve estar no formato AAAA-MM-DD.');
  if (dataFim && !dataIsoValida(dataFim)) erros.push('dataFim deve estar no formato AAAA-MM-DD.');
  if (dataInicio && dataFim && dataInicio > dataFim) erros.push('dataInicio não pode ser posterior a dataFim.');
  if (erros.length) throw new BadRequestException(erros);
  return {
    ...(!atualizacao || dados.codigo !== undefined ? { codigo } : {}),
    ...(!atualizacao || dados.nome !== undefined ? { nome } : {}),
    ...(!atualizacao || dados.cliente !== undefined ? { cliente: opcionalTexto(dados, 'cliente', 160) } : {}),
    ...(!atualizacao || dados.descricao !== undefined ? { descricao: opcionalTexto(dados, 'descricao', 3000) } : {}),
    ...(!atualizacao || dados.centroCusto !== undefined ? { centroCusto: opcionalTexto(dados, 'centroCusto', 80) } : {}),
    ...(!atualizacao || dados.valorDiariaCentavos !== undefined ? { valorDiariaCentavos: Number(dados.valorDiariaCentavos ?? 0) } : {}),
    ...(!atualizacao || dados.dataInicio !== undefined ? { dataInicio } : {}),
    ...(!atualizacao || dados.dataFim !== undefined ? { dataFim } : {}),
    ...(!atualizacao || dados.gestorResponsavelId !== undefined ? { gestorResponsavelId: gestor } : {}),
    ...(dados.status ? { status: dados.status as ContratoDto['status'] } : {}),
  };
}

@Injectable()
export class ContratoValidationPipe implements PipeTransform<unknown, ContratoDto> {
  constructor(private readonly atualizacao = false) {}
  transform(valor: unknown) { return validarContrato(valor, this.atualizacao); }
}
