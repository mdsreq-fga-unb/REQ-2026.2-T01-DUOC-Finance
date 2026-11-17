/** RF24 — prazo inicial de renovação. Validar os 90 dias com a DUOC antes do PR. */
export const VALIDADE_SENHA_DIAS = 90;
const MILISSEGUNDOS_POR_DIA = 24 * 60 * 60 * 1000;

/** A senha vence exatamente ao completar o prazo contado da última alteração. */
export function senhaExpirada(atualizadaEm: Date, agora = new Date()): boolean {
  return agora.getTime() - atualizadaEm.getTime() >=
    VALIDADE_SENHA_DIAS * MILISSEGUNDOS_POR_DIA;
}
