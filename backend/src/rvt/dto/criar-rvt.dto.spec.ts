import { BadRequestException } from '@nestjs/common';
import { hojeNoFusoOperacional, validarCriarRvtDto } from './criar-rvt.dto.js';

const HOJE = '2026-11-16';
const VALIDO = {
  contratoId: 'contrato-1',
  dataJornada: '2026-11-16',
  horasTrabalhadas: 8,
  escopoExecutado: 'Passagem de cabos no quadro geral do bloco B.',
};

function mensagens(corpo: unknown): string[] {
  try {
    validarCriarRvtDto(corpo, HOJE);
  } catch (erro) {
    expect(erro).toBeInstanceOf(BadRequestException);
    const resposta = (erro as BadRequestException).getResponse() as {
      message: string[];
    };
    return resposta.message;
  }
  return [];
}

describe('validarCriarRvtDto', () => {
  it('aceita payload válido, normaliza o escopo e descarta campos extras', () => {
    const dto = validarCriarRvtDto(
      {
        ...VALIDO,
        escopoExecutado: `  ${VALIDO.escopoExecutado}  `,
        colaboradorId: 'intruso',
      },
      HOJE,
    );
    expect(dto).toEqual(VALIDO);
    expect(dto).not.toHaveProperty('colaboradorId');
  });

  it('exige contrato (RN04)', () => {
    expect(mensagens({ ...VALIDO, contratoId: ' ' })).toContain(
      'contratoId é obrigatório (RN04).',
    );
  });

  it('rejeita horas acima do teto diário (RN05)', () => {
    expect(mensagens({ ...VALIDO, horasTrabalhadas: 12.5 })[0]).toMatch(/RN05/);
  });

  it('aceita exatamente o teto diário', () => {
    expect(mensagens({ ...VALIDO, horasTrabalhadas: 12 })).toEqual([]);
  });

  it('rejeita horas zero, negativas, não numéricas ou com mais de 2 casas', () => {
    expect(mensagens({ ...VALIDO, horasTrabalhadas: 0 })).toHaveLength(1);
    expect(mensagens({ ...VALIDO, horasTrabalhadas: -1 })).toHaveLength(1);
    expect(mensagens({ ...VALIDO, horasTrabalhadas: '8' })).toHaveLength(1);
    expect(mensagens({ ...VALIDO, horasTrabalhadas: 7.333 })).toHaveLength(1);
  });

  it('rejeita data futura e datas inválidas', () => {
    expect(mensagens({ ...VALIDO, dataJornada: '2026-11-17' })).toContain(
      'dataJornada não pode estar no futuro.',
    );
    expect(mensagens({ ...VALIDO, dataJornada: '2026-02-30' })).toHaveLength(1);
    expect(mensagens({ ...VALIDO, dataJornada: '16/11/2026' })).toHaveLength(1);
  });

  it('exige escopo descritivo mínimo (RN06)', () => {
    expect(
      mensagens({ ...VALIDO, escopoExecutado: 'Serviço feito' })[0],
    ).toMatch(/RN06/);
  });

  it('acumula todos os erros de um corpo vazio', () => {
    expect(mensagens(undefined)).toHaveLength(4);
  });
});

describe('hojeNoFusoOperacional', () => {
  it('usa o fuso de São Paulo, não UTC', () => {
    // 02:00 UTC de 17/11 ainda é 23:00 de 16/11 em Brasília
    expect(hojeNoFusoOperacional(new Date('2026-11-17T02:00:00Z'))).toBe(
      '2026-11-16',
    );
  });
});
