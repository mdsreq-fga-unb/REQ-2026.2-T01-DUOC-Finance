/**
 * Regras e formatadores do Apontamento de Campo (RVT)
 * Os limites espelham backend/src/rvt/rvt.constants.ts
 */
import type { Rvt, StatusRvt, TipoEventoRvt } from "../types/rvt";

/** RN05 — teto de horas somadas por dia */
export const LIMITE_HORAS_DIARIAS = 12;

/** RN06 — evidência descritiva mínima */
export const ESCOPO_MIN_CARACTERES = 20;
export const ESCOPO_MAX_CARACTERES = 2000;

/** RNF19 — limites de upload */
export const TAMANHO_MAXIMO_EVIDENCIA_BYTES = 5 * 1024 * 1024;
export const MAX_ARQUIVOS_POR_ENVIO = 5;
export const MAX_EVIDENCIAS_POR_RVT = 10;
export const TIPOS_EVIDENCIA_ACEITOS = ["image/jpeg", "image/png", "application/pdf"];

/** RN02 — janela de retificação/reenvio em dias úteis */
export const DIAS_UTEIS_RETIFICACAO = 5;

/** RN30 — parecer mínimo exigido na rejeição */
export const PARECER_MIN_CARACTERES = 15;
export const PARECER_MAX_CARACTERES = 2000;

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

/**
 * RN02 — espelha backend/src/rvt/janela-retificacao.util.ts: 23h59 (Brasília)
 * do quinto dia útil após a data local do início da janela. Usado só no
 * modo local; com a API, o prazo vem calculado pelo backend.
 */
export function calcularPrazoRetificacao(inicio: Date): Date {
  const dataLocal = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(inicio);
  const data = new Date(`${dataLocal}T12:00:00.000Z`);
  let restantes = DIAS_UTEIS_RETIFICACAO;
  while (restantes > 0) {
    data.setUTCDate(data.getUTCDate() + 1);
    const diaSemana = data.getUTCDay();
    if (diaSemana !== 0 && diaSemana !== 6) restantes--;
  }
  return new Date(`${data.toISOString().slice(0, 10)}T23:59:59.999-03:00`);
}

/** "2026-11-28T02:59:59.999Z" -> "27/11 às 23:59" (horário de Brasília) */
export function formatarPrazo(prazoISO: string): string {
  const prazo = new Date(prazoISO);
  const data = prazo.toLocaleDateString("pt-BR", {
    timeZone: "America/Sao_Paulo",
    day: "2-digit",
    month: "2-digit",
  });
  const hora = prazo.toLocaleTimeString("pt-BR", {
    timeZone: "America/Sao_Paulo",
    hour: "2-digit",
    minute: "2-digit",
  });
  return `${data} às ${hora}`;
}

/** "2026-11-20T15:04:00Z" -> "20/11/2026 12:04" (horário de Brasília) */
export function formatarDataHora(iso: string): string {
  return new Date(iso).toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

/** Parecer da rejeição mais recente, se o apontamento estiver rejeitado */
export function ultimoParecerRejeicao(rvt: Rvt): string | null {
  if (rvt.status !== "REJEITADO") return null;
  const rejeicao = [...rvt.historico].reverse().find((e) => e.tipo === "REJEICAO");
  return rejeicao?.parecer ?? null;
}

/**
 * Mensagem de trava de edição exibida ao técnico (RN02).
 * null quando o apontamento ainda pode ser retificado.
 */
export function motivoTravaEdicao(rvt: Rvt): string | null {
  if (rvt.status === "HOMOLOGADO") {
    return "Homologado pela supervisão: edição travada.";
  }
  if (!rvt.podeRetificar) {
    return rvt.prazoRetificacao
      ? `Prazo de retificação encerrado em ${formatarPrazo(rvt.prazoRetificacao)}.`
      : "Prazo de retificação encerrado.";
  }
  return null;
}

export const EVENTO_RVT_LABEL: Record<TipoEventoRvt, string> = {
  SUBMISSAO: "Enviado para homologação",
  RETIFICACAO: "Retificado pelo técnico",
  REENVIO: "Corrigido e reenviado",
  HOMOLOGACAO: "Homologado pela supervisão",
  REJEICAO: "Rejeitado pela supervisão",
};

const CAMPO_LABEL: Record<string, string> = {
  horasTrabalhadas: "Horas",
  escopoExecutado: "Escopo",
};

/** Resume as alterações de um evento de retificação em linhas legíveis */
export function descreverAlteracoes(alteracoes: Record<string, unknown> | null): string[] {
  if (!alteracoes) return [];
  return Object.entries(alteracoes).map(([campo, valor]) => {
    const v = valor as { de?: unknown; para?: unknown; nomeOriginal?: string };
    if (campo === "evidenciaRemovida") return `Anexo removido: ${v.nomeOriginal ?? "arquivo"}`;
    const formatar = (x: unknown) =>
      campo === "horasTrabalhadas" && typeof x === "number" ? formatarHoras(x) : String(x ?? "");
    return `${CAMPO_LABEL[campo] ?? campo}: ${formatar(v.de)} → ${formatar(v.para)}`;
  });
}
