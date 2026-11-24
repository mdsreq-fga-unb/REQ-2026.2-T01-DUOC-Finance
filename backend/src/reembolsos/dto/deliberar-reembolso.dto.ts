import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

export interface DeliberarReembolsoDto {
  decisao: 'APROVAR' | 'REJEITAR';
  parecer: string;
}

export function validarDeliberarReembolso(corpo: unknown): DeliberarReembolsoDto {
  const dados = (corpo && typeof corpo === 'object' ? corpo : {}) as Record<string, unknown>;
  const parecer = typeof dados.parecer === 'string' ? dados.parecer.trim() : '';
  const erros: string[] = [];
  if (dados.decisao !== 'APROVAR' && dados.decisao !== 'REJEITAR') {
    erros.push('decisao deve ser APROVAR ou REJEITAR.');
  }
  if (parecer.length < 10 || parecer.length > 1500) {
    erros.push('parecer é obrigatório e deve ter entre 10 e 1500 caracteres.');
  }
  if (erros.length) throw new BadRequestException(erros);
  return { decisao: dados.decisao as DeliberarReembolsoDto['decisao'], parecer };
}

@Injectable()
export class DeliberarReembolsoValidationPipe implements PipeTransform<unknown, DeliberarReembolsoDto> {
  transform(valor: unknown) { return validarDeliberarReembolso(valor); }
}
