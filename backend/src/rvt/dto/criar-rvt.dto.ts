import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import {
  ESCOPO_MAX_CARACTERES,
  ESCOPO_MIN_CARACTERES,
  FUSO_OPERACIONAL,
  LIMITE_HORAS_DIARIAS,
} from '../rvt.constants.js';

export class CriarRvtDto {
  contratoId: string;
  /** Data da jornada no formato YYYY-MM-DD */
  dataJornada: string;
  horasTrabalhadas: number;
  escopoExecutado: string;
}

/** Data de hoje (YYYY-MM-DD) no fuso operacional da DUOC */
export function hojeNoFusoOperacional(agora = new Date()): string {
  // en-CA formata como YYYY-MM-DD
  return new Intl.DateTimeFormat('en-CA', {
    timeZone: FUSO_OPERACIONAL,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(agora);
}

function dataIsoValida(valor: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(valor)) return false;
  const data = new Date(`${valor}T00:00:00.000Z`);
  return !Number.isNaN(data.getTime()) && data.toISOString().startsWith(valor);
}

/**
 * Valida o corpo de POST /api/rvt. Campos desconhecidos (inclusive
 * `colaboradorId`) são descartados: o colaborador vem sempre do JWT.
 */
export function validarCriarRvtDto(
  corpo: unknown,
  hoje = hojeNoFusoOperacional(),
): CriarRvtDto {
  const erros: string[] = [];
  const dados = (
    typeof corpo === 'object' && corpo !== null ? corpo : {}
  ) as Record<string, unknown>;

  const { contratoId, dataJornada, horasTrabalhadas, escopoExecutado } = dados;

  if (typeof contratoId !== 'string' || !contratoId.trim()) {
    erros.push('contratoId é obrigatório (RN04).');
  }

  if (typeof dataJornada !== 'string' || !dataIsoValida(dataJornada)) {
    erros.push('dataJornada deve ser uma data válida no formato YYYY-MM-DD.');
  } else if (dataJornada > hoje) {
    erros.push('dataJornada não pode estar no futuro.');
  }

  if (
    typeof horasTrabalhadas !== 'number' ||
    !Number.isFinite(horasTrabalhadas)
  ) {
    erros.push('horasTrabalhadas deve ser numérico.');
  } else if (horasTrabalhadas <= 0) {
    erros.push('horasTrabalhadas deve ser maior que zero.');
  } else if (horasTrabalhadas > LIMITE_HORAS_DIARIAS) {
    erros.push(
      `horasTrabalhadas não pode exceder ${LIMITE_HORAS_DIARIAS}h por dia (RN05).`,
    );
  } else if (
    Math.abs(horasTrabalhadas * 100 - Math.round(horasTrabalhadas * 100)) > 1e-6
  ) {
    erros.push('horasTrabalhadas aceita no máximo duas casas decimais.');
  }

  const escopo =
    typeof escopoExecutado === 'string' ? escopoExecutado.trim() : '';
  if (escopo.length < ESCOPO_MIN_CARACTERES) {
    erros.push(
      `escopoExecutado deve descrever o serviço com ao menos ${ESCOPO_MIN_CARACTERES} caracteres (RN06).`,
    );
  } else if (escopo.length > ESCOPO_MAX_CARACTERES) {
    erros.push(
      `escopoExecutado deve ter no máximo ${ESCOPO_MAX_CARACTERES} caracteres.`,
    );
  }

  if (erros.length > 0) {
    throw new BadRequestException(erros);
  }

  return {
    contratoId: (contratoId as string).trim(),
    dataJornada: dataJornada as string,
    horasTrabalhadas: horasTrabalhadas as number,
    escopoExecutado: escopo,
  };
}

@Injectable()
export class CriarRvtValidationPipe implements PipeTransform<
  unknown,
  CriarRvtDto
> {
  transform(valor: unknown): CriarRvtDto {
    return validarCriarRvtDto(valor);
  }
}
