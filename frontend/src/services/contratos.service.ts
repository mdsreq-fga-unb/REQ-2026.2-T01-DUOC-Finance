import { AuthApi, ErroAuth } from './auth.service'

export type StatusContrato = 'ATIVO' | 'SUSPENSO' | 'ENCERRADO'

export interface GestorContrato {
  id: string
  email: string
  ativo?: boolean
}

export interface Contrato {
  id: string
  codigo: string
  nome: string
  cliente: string | null
  descricao: string | null
  centroCusto: string | null
  valorDiariaCentavos: number
  dataInicio: string | null
  dataFim: string | null
  gestorResponsavelId: string | null
  gestorResponsavel: GestorContrato | null
  status: StatusContrato
  createdAt: string
  updatedAt: string
}

export interface ContratoIndicador {
  contratoId: string
  codigo: string
  nome: string
  status: StatusContrato
  centroCusto: string | null
  diariasHomologadas: number
  diariasCentavos: number
  reembolsosAprovados: number
  reembolsosCentavos: number
  totalCentavos: number
}

export interface Indicadores {
  periodo: { inicio: string | null; fim: string | null }
  colaboradoresAtivos: number
  apontamentosPendentes: number
  reembolsosPendentes: number
  obrasEmAndamento: number
  custosTotalCentavos: number
  contratos: ContratoIndicador[]
}

export interface RateioItem {
  tipo: 'DIARIA' | 'REEMBOLSO'
  referenciaId: string
  codigo?: string
  data: string
  horas?: number
  categoria?: string
  valorCentavos: number
}

export interface RateioContrato {
  contratoId: string
  centroCusto: string | null
  periodo: { inicio: string | null; fim: string | null }
  diariasHomologadas: number
  diariasCentavos: number
  reembolsosAprovados: number
  reembolsosCentavos: number
  totalCentavos: number
  itens: RateioItem[]
}

async function requisicao<T>(url: string, init: RequestInit = {}): Promise<T> {
  let resposta: Response
  try { resposta = await AuthApi.requisicaoAutenticada(url, init) }
  catch (erro) {
    if (erro instanceof ErroAuth) throw erro
    throw new Error('Falha de conexão com o servidor.')
  }
  if (!resposta.ok) {
    const corpo = await resposta.json().catch(() => null)
    const mensagem = Array.isArray(corpo?.message) ? corpo.message.join(' ') : corpo?.message
    throw new Error(mensagem || `Erro ${resposta.status} ao consultar contratos.`)
  }
  return resposta.json() as Promise<T>
}

export const ContratosApi = {
  listarGestores() {
    return requisicao<{ id: string; email: string; ativo: boolean }[]>('/api/contratos/gestores')
  },
  listar(status?: StatusContrato) {
    const params = status ? `?status=${status}` : ''
    return requisicao<Contrato[]>(`/api/contratos${params}`)
  },
  criar(dados: Partial<Contrato>) {
    return requisicao<Contrato>('/api/contratos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados),
    })
  },
  atualizar(id: string, dados: Partial<Contrato>) {
    return requisicao<Contrato>(`/api/contratos/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(dados),
    })
  },
  encerrar(id: string) {
    return requisicao<Contrato>(`/api/contratos/${id}/encerrar`, { method: 'PATCH' })
  },
  rateio(id: string, inicio?: string, fim?: string) {
    const params = new URLSearchParams()
    if (inicio) params.set('inicio', inicio)
    if (fim) params.set('fim', fim)
    const query = params.size ? `?${params}` : ''
    return requisicao<RateioContrato>(`/api/contratos/${id}/rateio${query}`)
  },
  indicadores(inicio?: string, fim?: string, status?: StatusContrato, contratoId?: string) {
    const params = new URLSearchParams()
    if (inicio) params.set('inicio', inicio)
    if (fim) params.set('fim', fim)
    if (status) params.set('status', status)
    if (contratoId) params.set('contratoId', contratoId)
    const query = params.size ? `?${params}` : ''
    return requisicao<Indicadores>(`/api/contratos/indicadores${query}`)
  },
}
