import {
  formatoRefreshTokenValido,
  gerarRefreshToken,
  hashRefreshToken,
} from './refresh-token.util.js';

describe('Refresh token opaco | RN16', () => {
  it('gera tokens distintos de 256 bits e armazena apenas hash SHA-256', () => {
    const a = gerarRefreshToken();
    const b = gerarRefreshToken();
    expect(formatoRefreshTokenValido(a)).toBe(true);
    expect(a).not.toBe(b);
    expect(hashRefreshToken(a)).toMatch(/^[a-f0-9]{64}$/);
    expect(hashRefreshToken(a)).not.toBe(a);
    expect(hashRefreshToken(a)).not.toBe(hashRefreshToken(b));
  });

  it('recusa formatos inválidos', () => {
    for (const token of [null, '', 'curto', 42, '.'.repeat(43)]) {
      expect(formatoRefreshTokenValido(token)).toBe(false);
    }
  });
});
