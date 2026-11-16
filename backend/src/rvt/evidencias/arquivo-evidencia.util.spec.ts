import {
  detectarTipoEvidencia,
  sanitizarNomeOriginal,
} from './arquivo-evidencia.util.js';

describe('detectarTipoEvidencia', () => {
  it('identifica JPEG, PNG e PDF pelos magic numbers', () => {
    expect(
      detectarTipoEvidencia(Buffer.from([0xff, 0xd8, 0xff, 0xe0, 0x00]))
        ?.mimeType,
    ).toBe('image/jpeg');
    expect(
      detectarTipoEvidencia(
        Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0x00]),
      )?.mimeType,
    ).toBe('image/png');
    expect(detectarTipoEvidencia(Buffer.from('%PDF-1.7\n'))?.mimeType).toBe(
      'application/pdf',
    );
  });

  it('rejeita executáveis e scripts mesmo com extensão de imagem', () => {
    expect(detectarTipoEvidencia(Buffer.from('MZ\x90\x00'))).toBeNull();
    expect(
      detectarTipoEvidencia(Buffer.from('<svg onload=alert(1)>')),
    ).toBeNull();
    expect(detectarTipoEvidencia(Buffer.from('#!/bin/sh'))).toBeNull();
  });

  it('rejeita arquivos vazios ou truncados', () => {
    expect(detectarTipoEvidencia(Buffer.alloc(0))).toBeNull();
    expect(detectarTipoEvidencia(Buffer.from([0x89, 0x50]))).toBeNull();
  });
});

describe('sanitizarNomeOriginal', () => {
  it('remove diretórios e tentativas de path traversal', () => {
    expect(sanitizarNomeOriginal('../../etc/passwd')).toBe('passwd');
    expect(sanitizarNomeOriginal('C:\\fotos\\obra.jpg')).toBe('obra.jpg');
  });

  it('remove caracteres de controle e reservados', () => {
    expect(sanitizarNomeOriginal('foto\u0000<script>.png')).toBe(
      'fotoscript.png',
    );
  });

  it('usa nome padrão quando nada sobra', () => {
    expect(sanitizarNomeOriginal('///')).toBe('evidencia');
  });
});
