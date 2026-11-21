import {
  adicionarDiasUteis,
  calcularPrazoRetificacao,
  dentroDaJanelaRetificacao,
  formatarPrazo,
} from './janela-retificacao.util.js';

describe('adicionarDiasUteis', () => {
  it('pula sábado e domingo', () => {
    // 16/11/2026 é segunda; 20/11 é sexta
    expect(adicionarDiasUteis('2026-11-16', 5)).toBe('2026-11-23');
    expect(adicionarDiasUteis('2026-11-20', 1)).toBe('2026-11-23');
  });

  it('a partir de sábado conta desde a segunda seguinte', () => {
    expect(adicionarDiasUteis('2026-11-21', 5)).toBe('2026-11-27');
  });

  it('atravessa a virada de mês e de ano', () => {
    expect(adicionarDiasUteis('2026-12-29', 5)).toBe('2027-01-05');
  });
});

describe('calcularPrazoRetificacao (RN02)', () => {
  it('termina às 23h59 (Brasília) do quinto dia útil', () => {
    expect(
      calcularPrazoRetificacao(new Date('2026-11-16T20:00:00Z')).toISOString(),
    ).toBe('2026-11-24T02:59:59.999Z');
  });

  it('usa a data local, não a data UTC, como início', () => {
    // 02h UTC de 17/11 ainda é 23h de 16/11 em Brasília
    expect(
      calcularPrazoRetificacao(new Date('2026-11-17T02:00:00Z')).toISOString(),
    ).toBe('2026-11-24T02:59:59.999Z');
  });
});

describe('dentroDaJanelaRetificacao', () => {
  const inicio = new Date('2026-11-16T20:00:00Z');

  it('aceita até o último milissegundo do prazo', () => {
    expect(
      dentroDaJanelaRetificacao(inicio, new Date('2026-11-24T02:59:59.999Z')),
    ).toBe(true);
    expect(
      dentroDaJanelaRetificacao(inicio, new Date('2026-11-24T03:00:00.000Z')),
    ).toBe(false);
  });
});

describe('formatarPrazo', () => {
  it('formata no fuso operacional', () => {
    expect(formatarPrazo(new Date('2026-11-24T02:59:59.999Z'))).toBe(
      '23/11/2026',
    );
  });
});
