import { senhaExpirada, VALIDADE_SENHA_DIAS } from './politica-senha.util.js';

describe('Política de renovação de senha | RF24', () => {
  const agora = new Date('2026-11-16T12:00:00.000Z');
  const prazoMs = VALIDADE_SENHA_DIAS * 24 * 60 * 60 * 1000;

  it('aceita senha ainda dentro do prazo', () => {
    expect(senhaExpirada(new Date(agora.getTime() - prazoMs + 1), agora)).toBe(false);
  });

  it('expira no limite exato e após o prazo', () => {
    expect(senhaExpirada(new Date(agora.getTime() - prazoMs), agora)).toBe(true);
    expect(senhaExpirada(new Date(agora.getTime() - prazoMs - 1), agora)).toBe(true);
  });
});
