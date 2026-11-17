import bcrypt from 'bcrypt';

/** RNF13 — bcrypt com custo 12, superior ao mínimo de 10 da issue #155. */
export const BCRYPT_SALT_ROUNDS = 12;

/** Use este helper ao criar ou redefinir senhas; jamais grave texto puro. */
export async function gerarHashSenha(senha: string): Promise<string> {
  if (senha.length < 12 || Buffer.byteLength(senha, 'utf8') > 72) {
    throw new Error('A senha deve ter 12 ou mais caracteres e no máximo 72 bytes.');
  }
  return bcrypt.hash(senha, BCRYPT_SALT_ROUNDS);
}

export async function conferirSenha(senha: string, hash: string): Promise<boolean> {
  return bcrypt.compare(senha, hash);
}
