/**
 * RF07 / CAR-04 — filtros da listagem de reembolsos.
 * Funções puras para uso no frontend demonstrativo e na futura integração da API.
 */
export type StatusReembolso = 'PENDENTE' | 'APROVADO' | 'REJEITADO'
export type FiltroStatusReembolso = StatusReembolso | 'TODOS'

export interface ReembolsoListavel {
  id: string
  codigo: string
  categoria: string
  descricao: string
  dataDespesa: string // YYYY-MM-DD
  valorCentavos: number
  status: StatusReembolso
  contrato: { id: string; codigo: string; nome: string }
  parecer: string | null
}

export interface FiltrosReembolso {
  contratoId: string
  periodo: string // YYYY-MM ou vazio
  status: FiltroStatusReembolso
}

export function filtrarReembolsos(
  registros: readonly ReembolsoListavel[],
  filtros: FiltrosReembolso,
): ReembolsoListavel[] {
  return registros
    .filter((item) => !filtros.contratoId || item.contrato.id === filtros.contratoId)
    .filter((item) => !filtros.periodo || item.dataDespesa.startsWith(`${filtros.periodo}-`))
    .filter((item) => filtros.status === 'TODOS' || item.status === filtros.status)
    .sort((a, b) =>
      b.dataDespesa.localeCompare(a.dataDespesa) || b.codigo.localeCompare(a.codigo),
    )
}
