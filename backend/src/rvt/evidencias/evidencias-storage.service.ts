import { Injectable, Logger } from '@nestjs/common';
import { createHash, randomUUID } from 'node:crypto';
import { mkdir, unlink, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import type { TipoEvidencia } from './arquivo-evidencia.util.js';

export interface ArquivoArmazenado {
  /** Caminho relativo ao diretório de uploads (o que vai para o banco) */
  caminhoRelativo: string;
  hashSha256: string;
}

/**
 * Persistência das evidências em disco, fora da pasta pública e com nome
 * gerado pelo servidor. Diretório configurável por UPLOAD_DIR.
 */
@Injectable()
export class EvidenciasStorageService {
  private readonly logger = new Logger(EvidenciasStorageService.name);
  private readonly raiz = resolve(process.env.UPLOAD_DIR ?? 'uploads');

  async salvar(
    rvtId: string,
    conteudo: Buffer,
    tipo: TipoEvidencia,
  ): Promise<ArquivoArmazenado> {
    const caminhoRelativo = join(
      'rvt',
      rvtId,
      `${randomUUID()}.${tipo.extensao}`,
    );
    const destino = join(this.raiz, caminhoRelativo);

    await mkdir(join(this.raiz, 'rvt', rvtId), { recursive: true });
    // flag "wx": nunca sobrescreve um arquivo existente
    await writeFile(destino, conteudo, { flag: 'wx', mode: 0o640 });

    return {
      caminhoRelativo,
      hashSha256: createHash('sha256').update(conteudo).digest('hex'),
    };
  }

  async remover(caminhoRelativo: string): Promise<void> {
    try {
      await unlink(join(this.raiz, caminhoRelativo));
    } catch (erro) {
      this.logger.warn(
        `Não foi possível remover a evidência ${caminhoRelativo}: ${String(erro)}`,
      );
    }
  }
}
