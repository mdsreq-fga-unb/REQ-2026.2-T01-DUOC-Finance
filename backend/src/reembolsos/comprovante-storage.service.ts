import { Injectable, NotFoundException } from '@nestjs/common';
import { createHash, randomUUID } from 'node:crypto';
import { mkdir, stat, unlink, writeFile } from 'node:fs/promises';
import { createReadStream, type ReadStream } from 'node:fs';
import { join, resolve, sep } from 'node:path';
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

  async abrir(chave: string): Promise<ReadStream> {
    const destino = resolve(this.raiz, chave);
    if (!destino.startsWith(this.raiz + sep)) {
      throw new NotFoundException('Comprovante não encontrado.');
    }
    try {
      const arquivo = await stat(destino);
      if (!arquivo.isFile()) throw new Error('Não é arquivo.');
    } catch {
      throw new NotFoundException('Comprovante não encontrado.');
    }
    return createReadStream(destino);
  }

  async remover(chave: string): Promise<void> {
    // Chave gerada exclusivamente pelo servidor, nunca pelo usuário.
    await unlink(join(this.raiz, chave)).catch((erro: unknown) => {
      if ((erro as NodeJS.ErrnoException).code !== 'ENOENT') throw erro;
    });
  }
}
