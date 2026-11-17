import { BCRYPT_SALT_ROUNDS, conferirSenha, gerarHashSenha } from './senha.util.js';

describe('Senha bcrypt | RNF13', () => {
  it('gera hash bcrypt com custo pelo menos 10, sem persistir texto puro', async () => {
    const senha = 'SenhaForteDeTeste!2026';
    const hash = await gerarHashSenha(senha);
    expect(hash).not.toBe(senha);
    expect(hash).toMatch(/^\$2[ab]\$12\$/);
    expect(BCRYPT_SALT_ROUNDS).toBeGreaterThanOrEqual(10);
    expect(await conferirSenha(senha, hash)).toBe(true);
    expect(await conferirSenha('senha-incorreta', hash)).toBe(false);
  });

  it('recusa senha fraca e senha que ultrapassa os 72 bytes do bcrypt', async () => {
    await expect(gerarHashSenha('curta')).rejects.toThrow(/12 ou mais/);
    await expect(gerarHashSenha('a'.repeat(73))).rejects.toThrow(/72 bytes/);
  });
});
