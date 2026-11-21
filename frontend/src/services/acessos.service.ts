import { AuthApi } from './auth.service'
import type { Papel } from '../auth/permissoes'

export interface UsuarioAcesso {
  id: string
  email: string
  papel: Papel
  ativo: boolean
}

export interface EventoAcesso {
  id: string
  acao: 'PAPEL_ALTERADO' | 'CONTA_ATIVADA' | 'CONTA_DESATIVADA'
  papelAnterior: Papel | null
  papelNovo: Papel | null
  ativoAnterior: boolean | null
  ativoNovo: boolean | null
  ocorridoEm: string
  operador: { email: string }
}

async function respostaJson<T>(resposta: Response): Promise<T> {
  let dados: unknown = null
  try {
    dados = await resposta.json()
  } catch {
    if (resposta.ok) throw new Error('O servidor retornou uma resposta inválida.')
  }
  if (!resposta.ok) {
    let mensagem = `Falha ao gerenciar acesso (HTTP ${resposta.status}).`
    if (typeof dados === 'object' && dados !== null && 'message' in dados) {
      const valor = dados.message
      if (typeof valor === 'string') mensagem = valor
      else if (Array.isArray(valor)) mensagem = valor.join(' ')
    }
    throw new Error(mensagem)
  }
  return dados as T
}

async function requisicao<T>(url: string, opcoes?: RequestInit): Promise<T> {
  const resposta = await AuthApi.requisicaoAutenticada(url, opcoes)
  return respostaJson<T>(resposta)
}

export const AcessosService = {
  listarUsuarios(): Promise<UsuarioAcesso[]> {
    return requisicao('/api/auth/usuarios')
  },

  alterarPapel(id: string, papel: Papel): Promise<UsuarioAcesso> {
    return requisicao(`/api/auth/usuarios/${id}/papel`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ papel }),
    })
  },

  alterarStatus(id: string, ativo: boolean): Promise<UsuarioAcesso> {
    return requisicao(`/api/auth/usuarios/${id}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ativo }),
    })
  },

  historico(id: string): Promise<EventoAcesso[]> {
    return requisicao(`/api/auth/usuarios/${id}/historico`)
  },
}
