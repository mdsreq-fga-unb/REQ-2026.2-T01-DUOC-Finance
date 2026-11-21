import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import {
  normalizarEscopo,
  validarEscopoExecutado,
  validarHorasTrabalhadas,
} from './criar-rvt.dto.js';

/**
 * RF35 — campos retificáveis. Contrato e data da jornada não mudam:
 * corrigir a obra ou o dia exige um novo apontamento.
 * Anexos são retificados pelas rotas de evidências.
 */
export class RetificarRvtDto {
  horasTrabalhadas?: number;
  escopoExecutado?: string;
}

/**
 * Valida o corpo de PATCH /api/rvt/:id. Todos os campos são opcionais:
 * um corpo vazio é aceito para reenviar um apontamento rejeitado após
 * ajustar apenas os anexos. Campos desconhecidos são descartados.
 */
export function validarRetificarRvtDto(corpo: unknown): RetificarRvtDto {
  const erros: string[] = [];
  const dados = (
    typeof corpo === 'object' && corpo !== null ? corpo : {}
  ) as Record<string, unknown>;
  const dto: RetificarRvtDto = {};

  if (dados.horasTrabalhadas !== undefined) {
    const erro = validarHorasTrabalhadas(dados.horasTrabalhadas);
    if (erro) erros.push(erro);
    else dto.horasTrabalhadas = dados.horasTrabalhadas as number;
  }

  if (dados.escopoExecutado !== undefined) {
    const escopo = normalizarEscopo(dados.escopoExecutado);
    const erro = validarEscopoExecutado(escopo);
    if (erro) erros.push(erro);
    else dto.escopoExecutado = escopo;
  }

  if (erros.length > 0) {
    throw new BadRequestException(erros);
  }
  return dto;
}

@Injectable()
export class RetificarRvtValidationPipe implements PipeTransform<
  unknown,
  RetificarRvtDto
> {
  transform(valor: unknown): RetificarRvtDto {
    return validarRetificarRvtDto(valor);
  }
}
