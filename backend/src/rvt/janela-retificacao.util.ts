import { hojeNoFusoOperacional } from './dto/criar-rvt.dto.js';
import { DIAS_UTEIS_RETIFICACAO } from './rvt.constants.js';

/**
 * Brasília não adota horário de verão desde 2019, então o fim do dia
 * operacional pode ser expresso com deslocamento fixo.
 */
const DESLOCAMENTO_OPERACIONAL = '-03:00';

/** Soma `dias` dias úteis (segunda a sexta) a uma data YYYY-MM-DD. */
export function adicionarDiasUteis(dataIso: string, dias: number): string {
  const data = new Date(`${dataIso}T12:00:00.000Z`);
  let restantes = dias;
  while (restantes > 0) {
    data.setUTCDate(data.getUTCDate() + 1);
    const diaSemana = data.getUTCDay();
    if (diaSemana !== 0 && diaSemana !== 6) restantes--;
  }
  return data.toISOString().slice(0, 10);
}

/**
 * RN02 — fim da janela de retificação: 23h59 do quinto dia útil após a
 * data (no fuso operacional) da submissão mais recente ou da notificação
 * de rejeição. Feriados ainda não são considerados.
 */
export function calcularPrazoRetificacao(inicio: Date): Date {
  const dataFinal = adicionarDiasUteis(
    hojeNoFusoOperacional(inicio),
    DIAS_UTEIS_RETIFICACAO,
  );
  return new Date(`${dataFinal}T23:59:59.999${DESLOCAMENTO_OPERACIONAL}`);
}

export function dentroDaJanelaRetificacao(
  inicio: Date,
  agora = new Date(),
): boolean {
  return agora.getTime() <= calcularPrazoRetificacao(inicio).getTime();
}

/** "2026-11-27T02:59:59.999Z" -> "26/11/2026" (fuso operacional) */
export function formatarPrazo(prazo: Date): string {
  const [ano, mes, dia] = hojeNoFusoOperacional(prazo).split('-');
  return `${dia}/${mes}/${ano}`;
}
