import { AuthApi, ErroAuth } from './auth.service'
import type { ContratoReembolso, CriarReembolsoDados, ReembolsoApi, RvtReembolso } from '../types/reembolso-api'

async function enviar<T>(url: string, opcoes: RequestInit = {}): Promise<T> {
  let resposta: Response
  try { resposta = await AuthApi.requisicaoAutenticada(url, opcoes) }
  catch (erro) {
    if (erro instanceof ErroAuth && erro.status === 401) throw erro
    throw new Error('Falha de conexão com o servidor. Verifique o backend.')
  }
  if (!resposta.ok) {
    const corpo = await resposta.json().catch(() => null)
    const mensagem = Array.isArray(corpo?.message) ? corpo.message.join(' ') : corpo?.message
    throw new Error(mensagem || `Falha ao consultar a API (HTTP ${resposta.status}).`)
  }
  return resposta.json() as Promise<T>
}

export const ReembolsosApi = {
  listarContratosAtivos() { return enviar<ContratoReembolso[]>('/api/reembolsos/contratos-ativos') },
  listarMeusRvt() { return enviar<RvtReembolso[]>('/api/rvt/meus-apontamentos') },
  meus() { return enviar<ReembolsoApi[]>('/api/reembolsos/meus') },
  administrativos() { return enviar<ReembolsoApi[]>('/api/reembolsos') },
  detalhe(id: string) { return enviar<ReembolsoApi>(`/api/reembolsos/${encodeURIComponent(id)}`) },
  criar(dados: CriarReembolsoDados) {
    const form = new FormData()
    form.append('categoria', dados.categoria)
    form.append('descricao', dados.descricao)
    form.append('valorCentavos', String(dados.valorCentavos))
    form.append('dataDespesa', dados.dataDespesa)
    form.append('contratoId', dados.contratoId)
    if (dados.rvtId) form.append('rvtId', dados.rvtId)
    form.append('comprovante', dados.comprovante)
    return enviar<{ id: string; codigo: string; status: string }>('/api/reembolsos', { method: 'POST', body: form })
  },
  deliberar(id: string, decisao: 'APROVAR' | 'REJEITAR', parecer: string) {
    return enviar<ReembolsoApi>(`/api/reembolsos/${encodeURIComponent(id)}/deliberacao`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ decisao, parecer }),
    })
  },
  async baixarComprovante(id: string) {
    let resposta: Response
    try { resposta = await AuthApi.requisicaoAutenticada(`/api/reembolsos/${encodeURIComponent(id)}/comprovante`) }
    catch { throw new Error('Não foi possível consultar o comprovante. Verifique a conexão.') }
    if (!resposta.ok) throw new Error(`Comprovante indisponível (HTTP ${resposta.status}).`)
    return resposta.blob()
  },
}
