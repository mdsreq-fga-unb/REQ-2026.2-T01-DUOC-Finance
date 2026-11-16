import {
  assinarJwtHs256,
  JwtInvalidoError,
  verificarJwtHs256,
} from './jwt.util.js';

const SEGREDO = 'segredo-de-teste';
const AGORA = 1_800_000_000;

describe('verificarJwtHs256', () => {
  it('aceita token válido e devolve o payload', () => {
    const token = assinarJwtHs256({ sub: 'colab-1', exp: AGORA + 60 }, SEGREDO);
    expect(verificarJwtHs256(token, SEGREDO, AGORA)).toMatchObject({
      sub: 'colab-1',
    });
  });

  it('rejeita token assinado com outro segredo', () => {
    const token = assinarJwtHs256({ sub: 'colab-1', exp: AGORA + 60 }, 'outro');
    expect(() => verificarJwtHs256(token, SEGREDO, AGORA)).toThrow(
      JwtInvalidoError,
    );
  });

  it('rejeita payload adulterado', () => {
    const token = assinarJwtHs256({ sub: 'colab-1', exp: AGORA + 60 }, SEGREDO);
    const [h, , s] = token.split('.');
    const forjado = Buffer.from(
      JSON.stringify({ sub: 'colab-2', exp: AGORA + 60 }),
    ).toString('base64url');
    expect(() =>
      verificarJwtHs256(`${h}.${forjado}.${s}`, SEGREDO, AGORA),
    ).toThrow('Assinatura do token inválida.');
  });

  it('rejeita token expirado', () => {
    const token = assinarJwtHs256({ sub: 'colab-1', exp: AGORA }, SEGREDO);
    expect(() => verificarJwtHs256(token, SEGREDO, AGORA)).toThrow(
      'Token expirado.',
    );
  });

  it('rejeita token sem exp', () => {
    const token = assinarJwtHs256(
      { sub: 'colab-1' } as unknown as { exp: number },
      SEGREDO,
    );
    expect(() => verificarJwtHs256(token, SEGREDO, AGORA)).toThrow(
      'Token sem data de expiração.',
    );
  });

  it('rejeita alg "none"', () => {
    const h = Buffer.from(JSON.stringify({ alg: 'none' })).toString(
      'base64url',
    );
    const p = Buffer.from(
      JSON.stringify({ sub: 'colab-1', exp: AGORA + 60 }),
    ).toString('base64url');
    expect(() => verificarJwtHs256(`${h}.${p}.`, SEGREDO, AGORA)).toThrow(
      'Algoritmo de assinatura não suportado.',
    );
  });

  it('rejeita token malformado', () => {
    expect(() => verificarJwtHs256('abc', SEGREDO, AGORA)).toThrow(
      'Token malformado.',
    );
    expect(() => verificarJwtHs256('@@.@@.@@', SEGREDO, AGORA)).toThrow(
      JwtInvalidoError,
    );
  });
});
