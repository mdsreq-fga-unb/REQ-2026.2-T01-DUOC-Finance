/** CAR-04 / RF08 — exclusivamente dados fictícios de interface.
 * Não correspondem ao usuário autenticado nem à API.
 */
export type StatusReembolso = 'PENDENTE' | 'APROVADO' | 'REJEITADO'
export interface SolicitacaoDemonstrativa {
  id: string
  codigo: string
  colaborador: string
  contrato: string
  categoria: string
  dataDespesa: string
  descricao: string
  valorCentavos: number
  status: StatusReembolso
  parecer: string | null
}

/**
 * RF08 / CAR-04 — apenas dados fictícios para validação da interface.
 * A lista administrativa real virá de endpoint protegido por ADMIN_FINANCEIRO.
 */
export const REGISTROS_DEMONSTRATIVOS: SolicitacaoDemonstrativa[] = [
  {
    id: 'demo-0086',
    codigo: 'DES-0086',
    colaborador: 'Rafael Almeida',
    contrato: 'Residencial Aurora',
    categoria: 'Alimentação',
    dataDespesa: '2026-10-09',
    descricao: 'Alimentação durante visita técnica à obra.',
    valorCentavos: 18590,
    status: 'PENDENTE',
    parecer: null,
  },
  {
    id: 'demo-0085',
    codigo: 'DES-0085',
    colaborador: 'Lucas Ferreira',
    contrato: 'Edifício Horizonte',
    categoria: 'Materiais emergenciais',
    dataDespesa: '2026-10-08',
    descricao: 'Compra emergencial de material de consumo para execução da obra.',
    valorCentavos: 45000,
    status: 'PENDENTE',
    parecer: null,
  },
  {
    id: 'demo-0082',
    codigo: 'DES-0082',
    colaborador: 'Rafael Almeida',
    contrato: 'Residencial Aurora',
    categoria: 'Transporte',
    dataDespesa: '2026-10-05',
    descricao: 'Transporte para atividade técnica.',
    valorCentavos: 8000,
    status: 'APROVADO',
    parecer: 'Despesa compatível com a atividade informada.',
  },
  {
    id: 'demo-0079',
    codigo: 'DES-0079',
    colaborador: 'Rafael Almeida',
    contrato: 'Residencial Aurora',
    categoria: 'Materiais emergenciais',
    dataDespesa: '2026-10-02',
    descricao: 'Aquisição de material para a obra.',
    valorCentavos: 4200,
    status: 'REJEITADO',
    parecer: 'Comprovante fiscal ilegível.',
  },
]

