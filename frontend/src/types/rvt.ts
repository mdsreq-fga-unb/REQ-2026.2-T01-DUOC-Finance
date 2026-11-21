/**
 * Tipagens do Apontamento de Campo / RVT (CAR-02)
 * Espelham as respostas de /api/rvt no backend.
 */

export type StatusRvt = "PENDENTE" | "HOMOLOGADO" | "REJEITADO";

export type TipoEventoRvt = "SUBMISSAO" | "RETIFICACAO" | "REENVIO" | "HOMOLOGACAO" | "REJEICAO";

export interface EventoHistoricoRvt {
  id: string;
  tipo: TipoEventoRvt;
  /** Parecer do gestor (obrigatório na rejeição — RN30) */
  parecer: string | null;
  /** Campos alterados na retificação: { campo: { de, para } } */
  alteracoes: Record<string, unknown> | null;
  createdAt: string;
}

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
  justificativaRejeicao: string | null;
  evidencias: EvidenciaRvt[];
  /** RN02 — fim da janela de retificação (ISO); null quando homologado */
  prazoRetificacao: string | null;
  /** Calculado pelo backend no momento da consulta */
  podeRetificar: boolean;
  historico: EventoHistoricoRvt[];
  createdAt: string;
  updatedAt: string;
}

/** Visão do gestor operacional (RF32): inclui o autor do apontamento */
export interface RvtGestor extends Rvt {
  colaboradorId: string;
}

/** RF35 — campos retificáveis (contrato e data não mudam) */
export interface RetificarRvtDTO {
  horasTrabalhadas?: number;
  escopoExecutado?: string;
}

export type DecisaoRvt = "HOMOLOGAR" | "REJEITAR";

export interface DeliberarRvtDTO {
  decisao: DecisaoRvt;
  parecer?: string;
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
