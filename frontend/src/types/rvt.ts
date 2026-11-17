/**
 * Tipagens do Apontamento de Campo / RVT (CAR-02)
 * Espelham as respostas de /api/rvt no backend.
 */

export type StatusRvt = "PENDENTE" | "HOMOLOGADO" | "REJEITADO";

export interface ContratoObra {
  id: string;
  codigo: string;
  nome: string;
  cliente: string | null;
}

export interface EvidenciaRvt {
  id: string;
  nomeOriginal: string;
  mimeType: string;
  tamanhoBytes: number;
  createdAt: string;
}

export interface Rvt {
  id: string;
  contrato: { id: string; codigo: string; nome: string };
  /** YYYY-MM-DD */
  dataJornada: string;
  horasTrabalhadas: number;
  escopoExecutado: string;
  status: StatusRvt;
  evidencias: EvidenciaRvt[];
  createdAt: string;
  updatedAt: string;
}

export interface CriarRvtDTO {
  contratoId: string;
  dataJornada: string;
  horasTrabalhadas: number;
  escopoExecutado: string;
}

/** Campos do formulário persistidos como rascunho (sem arquivos) */
export interface RascunhoRvt {
  contratoId: string;
  dataJornada: string;
  horasTrabalhadas: string;
  escopoExecutado: string;
  salvoEm: string;
}
