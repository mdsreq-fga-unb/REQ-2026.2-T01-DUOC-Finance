import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import {
  PARECER_MAX_CARACTERES,
  PARECER_MIN_CARACTERES,
} from '../rvt.constants.js';

export const DECISOES_RVT = ['HOMOLOGAR', 'REJEITAR'] as const;
export type DecisaoRvt = (typeof DECISOES_RVT)[number];

/** RF32 — decisão do gestor sobre um apontamento pendente */
export class DeliberarRvtDto {
  decisao: DecisaoRvt;
  /** Obrigatório na rejeição (RN30); opcional na homologação */
  parecer?: string;
}

export function validarDeliberarRvtDto(corpo: unknown): DeliberarRvtDto {
  const erros: string[] = [];
  const dados = (
    typeof corpo === 'object' && corpo !== null ? corpo : {}
  ) as Record<string, unknown>;

  const decisao = dados.decisao;
  const decisaoValida = DECISOES_RVT.some((d) => d === decisao);
  if (!decisaoValida) {
    erros.push('decisao deve ser HOMOLOGAR ou REJEITAR.');
  }

  if (dados.parecer !== undefined && typeof dados.parecer !== 'string') {
    erros.push('parecer deve ser um texto.');
  }
  const parecer =
    typeof dados.parecer === 'string' ? dados.parecer.trim() : '';

  if (decisao === 'REJEITAR' && parecer.length < PARECER_MIN_CARACTERES) {
    erros.push(
      `A rejeição exige parecer justificado com ao menos ${PARECER_MIN_CARACTERES} caracteres (RN30).`,
    );
  }
  if (parecer.length > PARECER_MAX_CARACTERES) {
    erros.push(
      `parecer deve ter no máximo ${PARECER_MAX_CARACTERES} caracteres.`,
    );
  }

  if (erros.length > 0) {
    throw new BadRequestException(erros);
  }
  return {
    decisao: decisao as DecisaoRvt,
    ...(parecer ? { parecer } : {}),
  };
}

@Injectable()
export class DeliberarRvtValidationPipe implements PipeTransform<
  unknown,
  DeliberarRvtDto
> {
  transform(valor: unknown): DeliberarRvtDto {
    return validarDeliberarRvtDto(valor);
  }
}
