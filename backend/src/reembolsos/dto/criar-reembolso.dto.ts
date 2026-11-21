import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

/** RF07 — campos aceitos no multipart/form-data (sem solicitanteId). */
export interface CriarReembolsoDto {
  contratoId: string;
  rvtId: string | null;
  categoria: string;
  descricao: string;
  valorCentavos: number;
  dataDespesa: string;
}

const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const CATEGORIAS = new Set([
  'Alimentação', 'Transporte', 'Combustível',
  'Hospedagem', 'Materiais emergenciais', 'Outros',
]);

function hojeBrasilia(agora = new Date()): string {
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Sao_Paulo', year: 'numeric', month: '2-digit', day: '2-digit',
  }).format(agora);
}

function dataValida(data: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data)) return false;
  const dataUTC = new Date(`${data}T00:00:00.000Z`);
  return !Number.isNaN(dataUTC.getTime()) && dataUTC.toISOString().slice(0, 10) === data;
}

/** Converte inteiro em centavos; não aceita float, expoente nem locale ambíguo. */
export function validarCriarReembolsoDto(
  corpo: unknown,
  agora = new Date(),
): CriarReembolsoDto {
  const dados = (typeof corpo === 'object' && corpo !== null ? corpo : {}) as Record<string, unknown>;
  const erros: string[] = [];
  const contratoId = typeof dados.contratoId === 'string' ? dados.contratoId.trim() : '';
  const rvtId = typeof dados.rvtId === 'string' ? dados.rvtId.trim() : '';
  const categoria = typeof dados.categoria === 'string' ? dados.categoria.trim() : '';
  const descricao = typeof dados.descricao === 'string' ? dados.descricao.trim() : '';
  const dataDespesa = typeof dados.dataDespesa === 'string' ? dados.dataDespesa : '';
  const valorTexto = dados.valorCentavos;
  let valorCentavos = 0;

  if (!UUID.test(contratoId)) erros.push('contratoId deve ser um UUID válido.');
  if (rvtId && !UUID.test(rvtId)) erros.push('rvtId deve ser um UUID válido.');
  if (!CATEGORIAS.has(categoria)) erros.push('Selecione uma categoria de despesa válida.');
  if (descricao.length < 10 || descricao.length > 2000) {
    erros.push('descricao deve conter entre 10 e 2000 caracteres.');
  }
  if (typeof valorTexto !== 'string' || !/^\d{1,10}$/.test(valorTexto)) {
    erros.push('valorCentavos deve ser um inteiro positivo em centavos.');
  } else {
    valorCentavos = Number(valorTexto);
    if (!Number.isSafeInteger(valorCentavos) || valorCentavos <= 0 || valorCentavos > 2147483647) {
      erros.push('valorCentavos deve ser maior que zero e caber em um inteiro de 32 bits.');
    }
  }
  if (!dataValida(dataDespesa)) {
    erros.push('dataDespesa deve ser uma data válida no formato YYYY-MM-DD.');
  } else if (dataDespesa > hojeBrasilia(agora)) {
    erros.push('dataDespesa não pode estar no futuro.');
  }
  if (erros.length) throw new BadRequestException(erros);

  return { contratoId, rvtId: rvtId || null, categoria, descricao, valorCentavos, dataDespesa };
}

@Injectable()
export class CriarReembolsoValidationPipe implements PipeTransform<unknown, CriarReembolsoDto> {
  transform(valor: unknown): CriarReembolsoDto {
    return validarCriarReembolsoDto(valor);
  }
}
