import { basename } from 'node:path';

/** Subconjunto do arquivo entregue pelo multer (memoryStorage) */
export interface ArquivoRecebido {
  originalname: string;
  mimetype: string;
  size: number;
  buffer: Buffer;
}

export interface TipoEvidencia {
  mimeType: 'image/jpeg' | 'image/png' | 'application/pdf';
  extensao: 'jpg' | 'png' | 'pdf';
}

const ASSINATURAS: { bytes: number[]; tipo: TipoEvidencia }[] = [
  {
    bytes: [0xff, 0xd8, 0xff],
    tipo: { mimeType: 'image/jpeg', extensao: 'jpg' },
  },
  {
    bytes: [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a],
    tipo: { mimeType: 'image/png', extensao: 'png' },
  },
  {
    bytes: [0x25, 0x50, 0x44, 0x46, 0x2d],
    tipo: { mimeType: 'application/pdf', extensao: 'pdf' },
  },
];

/**
 * RNF19 — identifica o tipo real do arquivo pelos magic numbers, ignorando
 * extensão e Content-Type informados pelo cliente. Retorna null para
 * qualquer formato fora de JPEG/PNG/PDF.
 */
export function detectarTipoEvidencia(buffer: Buffer): TipoEvidencia | null {
  for (const { bytes, tipo } of ASSINATURAS) {
    if (
      buffer.length >= bytes.length &&
      bytes.every((byte, i) => buffer[i] === byte)
    ) {
      return tipo;
    }
  }
  return null;
}

/**
 * Normaliza o nome original apenas para exibição/auditoria. O arquivo é
 * gravado em disco sempre com um nome gerado pelo servidor.
 */
export function sanitizarNomeOriginal(nome: string): string {
  const semCaminho = basename(nome.replace(/\\/g, '/'));
  const limpo = semCaminho
    .normalize('NFC')
    // remove caracteres de controle e separadores problemáticos
    // oxlint-disable-next-line no-control-regex -- intencional: sanitização
    .replace(/[\u0000-\u001f\u007f<>:"|?*]/g, '')
    .trim()
    .slice(0, 200);
  return limpo || 'evidencia';
}
