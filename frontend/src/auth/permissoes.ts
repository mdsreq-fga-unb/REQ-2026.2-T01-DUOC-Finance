/**
 * CAR-07 / RN15 — matriz inicial de autorização da interface.
 * Confirmar com a DUOC antes do PR. O backend deve validar papéis novamente:
 * esconder links e proteger rotas React não substitui autorização REST (403).
 */
export const PAPEIS = [
  'ADMIN_FINANCEIRO',
  'GESTOR_OPERACIONAL',
  'TECNICO_CAMPO',
  'AUDITOR_EXTERNO',
] as const

export type Papel = (typeof PAPEIS)[number]

export function papelValido(valor: unknown): valor is Papel {
  return typeof valor === 'string' && PAPEIS.some((papel) => papel === valor)
}

export const PERMISSOES = {
  dashboard: PAPEIS,
  colaboradores: ['ADMIN_FINANCEIRO'],
  novoRvt: ['TECNICO_CAMPO', 'ADMIN_FINANCEIRO'],
  historicoRvt: ['TECNICO_CAMPO', 'GESTOR_OPERACIONAL', 'ADMIN_FINANCEIRO'],
  aprovacaoRvt: ['ADMIN_FINANCEIRO'],
  /** RF35 — o backend ainda confere autoria, status e prazo (RN02) */
  retificarRvt: ['TECNICO_CAMPO', 'ADMIN_FINANCEIRO'],
  /** RF32 / RN16 — só o gestor operacional delibera apontamentos */
  homologacaoRvt: ['GESTOR_OPERACIONAL'],
  fechamento: ['ADMIN_FINANCEIRO'],
} as const satisfies Record<string, readonly Papel[]>

export function possuiPapel(
  papel: Papel | null | undefined,
  permitidos: readonly Papel[],
): boolean {
  return papel !== undefined && papel !== null && permitidos.includes(papel)
}
