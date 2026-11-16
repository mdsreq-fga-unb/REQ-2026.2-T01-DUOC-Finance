/**
 * Regras e formatadores do Apontamento de Campo (RVT)
 * Os limites espelham backend/src/rvt/rvt.constants.ts
 */
import type { StatusRvt } from "../types/rvt";

/** RN05 — teto de horas somadas por dia */
export const LIMITE_HORAS_DIARIAS = 12;

/** RN06 — evidência descritiva mínima */
export const ESCOPO_MIN_CARACTERES = 20;
export const ESCOPO_MAX_CARACTERES = 2000;

/** RNF19 — limites de upload */
export const TAMANHO_MAXIMO_EVIDENCIA_BYTES = 5 * 1024 * 1024;
export const MAX_ARQUIVOS_POR_ENVIO = 5;
export const TIPOS_EVIDENCIA_ACEITOS = ["image/jpeg", "image/png", "application/pdf"];

/** Data local de hoje em YYYY-MM-DD (evita o deslocamento de fuso do toISOString) */
export function hojeISO(agora = new Date()): string {
  const ano = agora.getFullYear();
  const mes = String(agora.getMonth() + 1).padStart(2, "0");
  const dia = String(agora.getDate()).padStart(2, "0");
  return `${ano}-${mes}-${dia}`;
}

/** "2026-11-16" -> "seg., 16/11/2026" */
export function formatarDataJornada(dataISO: string): string {
  const [ano, mes, dia] = dataISO.split("-").map(Number);
  const data = new Date(ano, mes - 1, dia);
  const semana = data.toLocaleDateString("pt-BR", { weekday: "short" });
  return `${semana}, ${String(dia).padStart(2, "0")}/${String(mes).padStart(2, "0")}/${ano}`;
}

/** 7.5 -> "7h30" ; 8 -> "8h" */
export function formatarHoras(horas: number): string {
  const inteiras = Math.floor(horas);
  const minutos = Math.round((horas - inteiras) * 60);
  return minutos ? `${inteiras}h${String(minutos).padStart(2, "0")}` : `${inteiras}h`;
}

/** Converte o texto do campo de horas (aceita vírgula) em número */
export function parseHoras(valor: string): number {
  const normalizado = valor.replace(",", ".").trim();
  if (!normalizado) return NaN;
  return Number(normalizado);
}

export function formatarTamanhoArquivo(bytes: number): string {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1).replace(".", ",")} MB`;
}

export const STATUS_RVT_CONFIG: Record<StatusRvt, { label: string; className: string }> = {
  PENDENTE: {
    label: "Pendente",
    className: "bg-amber-50 text-amber-700 border-amber-200",
  },
  HOMOLOGADO: {
    label: "Homologado",
    className: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  REJEITADO: {
    label: "Rejeitado",
    className: "bg-red-50 text-red-700 border-red-200",
  },
};
