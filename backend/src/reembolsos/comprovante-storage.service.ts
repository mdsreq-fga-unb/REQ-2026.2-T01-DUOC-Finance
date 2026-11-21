import { Injectable } from '@nestjs/common';
import { createHash, randomUUID } from 'node:crypto';
import { mkdir, unlink, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import type { TipoEvidencia } from '../rvt/evidencias/arquivo-evidencia.util.js';

/** Storage privado local para desenvolvimento; em produção substituir por armazenamento persistente. */
@Injectable()
export class ComprovanteStorageService {
  private readonly raiz = resolve(process.env.UPLOAD_DIR ?? 'uploads');

  async salvar(reembolsoId: string, buffer: Buffer, tipo: TipoEvidencia) {
    const chave = join('reembolsos', reembolsoId, `${randomUUID()}.${tipo.extensao}`);
    const destino = join(this.raiz, chave);
    await mkdir(join(this.raiz, 'reembolsos', reembolsoId), { recursive: true });
    await writeFile(destino, buffer, { flag: 'wx', mode: 0o640 });
    return {
      chave,
      hashSha256: createHash('sha256').update(buffer).digest('hex'),
    };
  }

  async remover(chave: string): Promise<void> {
    // Chave gerada exclusivamente pelo servidor, nunca pelo usuário.
    await unlink(join(this.raiz, chave)).catch((erro: unknown) => {
      if ((erro as NodeJS.ErrnoException).code !== 'ENOENT') throw erro;
    });
  }
}
