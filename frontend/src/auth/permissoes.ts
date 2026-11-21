/**
 * CAR-07 / RN15 — matriz canônica de autorização da interface.
 * O backend deve validar papéis novamente:
 * esconder links e proteger rotas React não substitui autorização REST (403).
 */
export const PAPEIS = [
  'ADMIN_SISTEMA',
  'ADMIN_FINANCEIRO',
  'GESTOR_OBRAS',
  'TECNICO_CAMPO',
] as const

export type Papel = (typeof PAPEIS)[number]

export function papelValido(valor: unknown): valor is Papel {
  return typeof valor === 'string' && PAPEIS.some((papel) => papel === valor)
}

export const PERMISSOES = {
  dashboard: PAPEIS,
  colaboradores: ['ADMIN_FINANCEIRO'],
  novoRvt: ['TECNICO_CAMPO'],
  historicoRvt: ['TECNICO_CAMPO'],
  aprovacaoRvt: ['ADMIN_FINANCEIRO'],
  /** RF35 — o backend ainda confere autoria, status e prazo (RN02) */
  retificarRvt: ['TECNICO_CAMPO'],
  /** RF32 / RN16 — só o gestor de obras delibera apontamentos */
  homologacaoRvt: ['GESTOR_OBRAS'],
  aprovacaoDiarias: ['ADMIN_FINANCEIRO'],
  reembolsos: ['TECNICO_CAMPO', 'GESTOR_OBRAS', 'ADMIN_FINANCEIRO'],
  /** RF07 — solicitação e consulta de reembolsos */
  solicitarReembolso: ['TECNICO_CAMPO', 'GESTOR_OBRAS', 'ADMIN_FINANCEIRO'],
  /** RF08 — análise e decisão financeira */
  administrarReembolsos: ['ADMIN_FINANCEIRO'],
  fechamento: ['ADMIN_FINANCEIRO'],
  gestaoAcessos: ['ADMIN_SISTEMA'],
} as const satisfies Record<string, readonly Papel[]>

export function possuiPapel(
  papel: Papel | null | undefined,
  permitidos: readonly Papel[],
): boolean {
  return papel !== undefined && papel !== null && permitidos.includes(papel)
}
