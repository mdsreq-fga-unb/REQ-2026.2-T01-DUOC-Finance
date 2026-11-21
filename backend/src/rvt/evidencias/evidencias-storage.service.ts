import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { createHash, randomUUID } from 'node:crypto';
import { createReadStream, type ReadStream } from 'node:fs';
import { mkdir, stat, unlink, writeFile } from 'node:fs/promises';
import { join, resolve, sep } from 'node:path';
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

  /** Abre a evidência para leitura; 404 se o arquivo sumiu do disco */
  async abrir(caminhoRelativo: string): Promise<ReadStream> {
    const caminho = resolve(this.raiz, caminhoRelativo);
    // Defesa extra: o caminho vem do banco, mas nunca sai da raiz de uploads
    if (!caminho.startsWith(this.raiz + sep)) {
      throw new NotFoundException('Evidência não encontrada.');
    }
    try {
      const info = await stat(caminho);
      if (!info.isFile()) throw new Error('não é arquivo');
    } catch {
      this.logger.warn(`Evidência ausente no disco: ${caminhoRelativo}`);
      throw new NotFoundException('Arquivo da evidência não encontrado.');
    }
    return createReadStream(caminho);
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
