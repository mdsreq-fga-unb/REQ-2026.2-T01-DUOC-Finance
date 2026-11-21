/** RN05 — teto de horas somadas por colaborador em uma mesma data de jornada */
export const LIMITE_HORAS_DIARIAS = 12;

/** RN06 — o escopo executado é a evidência descritiva mínima do apontamento */
export const ESCOPO_MIN_CARACTERES = 20;
export const ESCOPO_MAX_CARACTERES = 2000;

/** RNF19 — limites de upload de evidências */
export const TAMANHO_MAXIMO_EVIDENCIA_BYTES = 5 * 1024 * 1024;
export const MAX_ARQUIVOS_POR_ENVIO = 5;
export const MAX_EVIDENCIAS_POR_RVT = 10;

/** RN02 — janela de retificação/reenvio em dias úteis */
export const DIAS_UTEIS_RETIFICACAO = 5;

/** RN30 — parecer mínimo exigido na rejeição de apontamento */
export const PARECER_MIN_CARACTERES = 15;
export const PARECER_MAX_CARACTERES = 2000;

/** Fuso usado para definir o "hoje" da jornada em campo */
export const FUSO_OPERACIONAL = 'America/Sao_Paulo';
