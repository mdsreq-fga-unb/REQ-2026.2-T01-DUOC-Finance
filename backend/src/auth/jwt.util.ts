import { createHmac, timingSafeEqual } from 'node:crypto';

/**
 * Verificação de JWT HS256 sem dependências externas.
 *
 * O payload segue o padrão JWT: `sub` é o ID da conta e `sid` o da sessão.
 * O vínculo com colaborador NÃO vem do token: o guard o lê de
 * usuario.id_colab no banco.
 */
export interface JwtPayload {
  sub?: string;
  /** Ignorado pelo guard; mantido só para tokens antigos */
  colaboradorId?: string;
  papel?: string;
  exp: number;
  iat?: number;
  nbf?: number;
  [claim: string]: unknown;
}

export class JwtInvalidoError extends Error {}

function decodificarJson(segmento: string): unknown {
  try {
    return JSON.parse(Buffer.from(segmento, 'base64url').toString('utf8'));
  } catch {
    throw new JwtInvalidoError('Token malformado.');
  }
}

function assinatura(conteudo: string, segredo: string): Buffer {
  return createHmac('sha256', segredo).update(conteudo).digest();
}

export function verificarJwtHs256(
  token: string,
  segredo: string,
  agoraEmSegundos = Math.floor(Date.now() / 1000),
): JwtPayload {
  const partes = token.split('.');
  if (partes.length !== 3) {
    throw new JwtInvalidoError('Token malformado.');
  }
  const [headerB64, payloadB64, assinaturaB64] = partes;

  const header = decodificarJson(headerB64) as { alg?: unknown } | null;
  // Rejeita "alg: none" e qualquer algoritmo diferente do configurado
  if (!header || header.alg !== 'HS256') {
    throw new JwtInvalidoError('Algoritmo de assinatura não suportado.');
  }

  const esperada = assinatura(`${headerB64}.${payloadB64}`, segredo);
  const recebida = Buffer.from(assinaturaB64, 'base64url');
  if (
    recebida.length !== esperada.length ||
    !timingSafeEqual(recebida, esperada)
  ) {
    throw new JwtInvalidoError('Assinatura do token inválida.');
  }

  const payload = decodificarJson(payloadB64);
  if (typeof payload !== 'object' || payload === null) {
    throw new JwtInvalidoError('Payload do token inválido.');
  }
  const claims = payload as Partial<JwtPayload>;

  if (typeof claims.exp !== 'number') {
    throw new JwtInvalidoError('Token sem data de expiração.');
  }
  if (agoraEmSegundos >= claims.exp) {
    throw new JwtInvalidoError('Token expirado.');
  }
  if (typeof claims.nbf === 'number' && agoraEmSegundos < claims.nbf) {
    throw new JwtInvalidoError('Token ainda não é válido.');
  }

  return claims as JwtPayload;
}

/** Emite um JWT HS256. Usado em testes e, futuramente, no fluxo de login. */
export function assinarJwtHs256(payload: JwtPayload, segredo: string): string {
  const header = Buffer.from(
    JSON.stringify({ alg: 'HS256', typ: 'JWT' }),
  ).toString('base64url');
  const corpo = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const sig = assinatura(`${header}.${corpo}`, segredo).toString('base64url');
  return `${header}.${corpo}.${sig}`;
}
