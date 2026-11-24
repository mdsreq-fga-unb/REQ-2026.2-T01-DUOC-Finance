import { BadRequestException } from '@nestjs/common';
import { validarDeliberarRvtDto } from './deliberar-rvt.dto.js';
import { validarRetificarRvtDto } from './retificar-rvt.dto.js';

function mensagens(validar: () => unknown): string[] {
  try {
    validar();
  } catch (erro) {
    expect(erro).toBeInstanceOf(BadRequestException);
    return (
      (erro as BadRequestException).getResponse() as { message: string[] }
    ).message;
  }
  return [];
}

describe('validarRetificarRvtDto (RF35)', () => {
  it('aceita só os campos enviados e descarta contrato/data/colaborador', () => {
    expect(
      validarRetificarRvtDto({
        horasTrabalhadas: 7.5,
        contratoId: 'outro',
        dataJornada: '2026-01-01',
        colaboradorId: 'intruso',
      }),
    ).toEqual({ horasTrabalhadas: 7.5 });
  });

  it('normaliza o escopo', () => {
    expect(
      validarRetificarRvtDto({
        escopoExecutado: '  Troca de luminárias no corredor do bloco A.  ',
      }),
    ).toEqual({ escopoExecutado: 'Troca de luminárias no corredor do bloco A.' });
  });

  it('aceita corpo vazio (reenvio de rejeitado)', () => {
    expect(validarRetificarRvtDto(undefined)).toEqual({});
  });

  it('aplica as mesmas regras de horas e escopo da criação', () => {
    expect(
      mensagens(() =>
        validarRetificarRvtDto({ horasTrabalhadas: 13, escopoExecutado: 'curto' }),
      ),
    ).toHaveLength(2);
  });
});

describe('validarDeliberarRvtDto (RF32)', () => {
  it('homologa sem parecer', () => {
    expect(validarDeliberarRvtDto({ decisao: 'HOMOLOGAR' })).toEqual({
      decisao: 'HOMOLOGAR',
    });
  });

  it('exige parecer de 15 caracteres na rejeição (RN30)', () => {
    expect(
      mensagens(() =>
        validarDeliberarRvtDto({ decisao: 'REJEITAR', parecer: '  sem foto   ' }),
      )[0],
    ).toMatch(/RN30/);
    expect(
      validarDeliberarRvtDto({
        decisao: 'REJEITAR',
        parecer: ' Faltou a foto do quadro. ',
      }),
    ).toEqual({ decisao: 'REJEITAR', parecer: 'Faltou a foto do quadro.' });
  });

  it('recusa decisão desconhecida e parecer não textual', () => {
    expect(
      mensagens(() => validarDeliberarRvtDto({ decisao: 'APROVAR', parecer: 1 })),
    ).toHaveLength(2);
  });
});
