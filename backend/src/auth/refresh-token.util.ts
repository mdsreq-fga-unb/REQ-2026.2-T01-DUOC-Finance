import { createHash, randomBytes } from 'node:crypto';

/** Token opaco de 256 bits; o banco armazena apenas seu SHA-256. */
export function gerarRefreshToken(): string {
  return randomBytes(32).toString('base64url');
}

/** 32 bytes em base64url têm exatamente 43 caracteres. */
export function formatoRefreshTokenValido(token: unknown): token is string {
  return typeof token === 'string' && /^[A-Za-z0-9_-]{43}$/.test(token);
}

export function hashRefreshToken(token: string): string {
  return createHash('sha256').update(token, 'utf8').digest('hex');
}
