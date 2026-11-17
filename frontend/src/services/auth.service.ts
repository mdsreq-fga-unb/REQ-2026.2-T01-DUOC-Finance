import { papelValido, type Papel } from '../auth/permissoes'

export interface UsuarioAutenticado {
  id: string
  email: string
  papel: Papel
}

interface TokensResposta {
  accessToken: string
  refreshToken: string
  tokenType: 'Bearer'
  expiresIn: number
  refreshExpiresIn: number
  usuario: UsuarioAutenticado
}

export interface EstadoAutenticacao {
  accessToken: string | null
  usuario: UsuarioAutenticado | null
}

export class ErroAuth extends Error {
  readonly status: number

  constructor(status: number, mensagem: string) {
    super(mensagem)
    this.name = 'ErroAuth'
    this.status = status
  }
}

// Backend retorna o refresh token no JSON (etapa 3). Armazenamento temporário
// restrito à aba: uma futura API baseada em cookies HttpOnly será preferível.
// NUNCA armazenar access token ou refresh token em localStorage.
const CHAVE_REFRESH = 'duoc_auth_refresh_sessao'
let estado: EstadoAutenticacao = { accessToken: null, usuario: null }
const ouvintes = new Set<() => void>()
let renovacaoPendente: Promise<TokensResposta> | null = null
let geracao = 0

function notificar() {
  ouvintes.forEach((ouvinte) => ouvinte())
}

function limparSessao() {
  estado = { accessToken: null, usuario: null }
  sessionStorage.removeItem(CHAVE_REFRESH)
  notificar()
}

function validarResposta(valor: TokensResposta): TokensResposta {
  if (
    !valor || typeof valor.accessToken !== 'string' ||
    typeof valor.refreshToken !== 'string' ||
    typeof valor.usuario?.id !== 'string' ||
    typeof valor.usuario?.email !== 'string' ||
    !papelValido(valor.usuario?.papel)
  ) {
    throw new Error('Resposta de autenticação inválida.')
  }
  return valor
}

function atualizarSessao(resposta: TokensResposta) {
  const dados = validarResposta(resposta)
  sessionStorage.setItem(CHAVE_REFRESH, dados.refreshToken)
  estado = { accessToken: dados.accessToken, usuario: dados.usuario }
  notificar()
}

async function requisicao<T>(caminho: string, corpo: object): Promise<T> {
  let resposta: Response
  try {
    resposta = await fetch(`/api/auth/${caminho}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(corpo),
    })
  } catch {
    throw new Error('Não foi possível conectar ao servidor. Tente novamente.')
  }
  if (!resposta.ok) {
    const dados: unknown = await resposta.json().catch(() => null)
    let mensagem = `Falha de autenticação (HTTP ${resposta.status}).`
    if (typeof dados === 'object' && dados !== null && 'message' in dados) {
      const valor = dados.message
      if (typeof valor === 'string') mensagem = valor
    }
    throw new ErroAuth(resposta.status, mensagem)
  }
  if (resposta.status === 204) return undefined as T
  return (await resposta.json()) as T
}

async function renovarToken(): Promise<TokensResposta> {
  if (renovacaoPendente) return renovacaoPendente
  const tokenAnterior = sessionStorage.getItem(CHAVE_REFRESH)
  if (!tokenAnterior) throw new ErroAuth(401, 'Sessão expirada.')
  const geracaoInicial = geracao
  const tarefa = requisicao<TokensResposta>('refresh', { refreshToken: tokenAnterior })
    .then((resposta) => {
      // Resposta antiga de uma requisição concorrente jamais restaura logout.
      if (geracao !== geracaoInicial) throw new ErroAuth(401, 'Sessão encerrada.')
      atualizarSessao(resposta)
      return resposta
    })
    .catch((erro: unknown) => {
      if (geracao === geracaoInicial) limparSessao()
      throw erro
    })
    .finally(() => {
      renovacaoPendente = null
    })
  renovacaoPendente = tarefa
  return tarefa
}

export const AuthApi = {
  obterEstado: () => estado,
  inscrever(ouvinte: () => void) {
    ouvintes.add(ouvinte)
    return () => { ouvintes.delete(ouvinte) }
  },
  async restaurar(): Promise<void> {
    if (estado.usuario || !sessionStorage.getItem(CHAVE_REFRESH)) return
    try {
      await renovarToken()
    } catch {
      // Acesso não é concedido sem refresh válido no backend.
    }
  },
  async login(email: string, senha: string): Promise<void> {
    geracao += 1
    limparSessao()
    const geracaoInicial = geracao
    const resposta = await requisicao<TokensResposta>('login', { email, senha })
    if (geracaoInicial === geracao) atualizarSessao(resposta)
  },
  async trocarSenha(email: string, senhaAtual: string, senhaNova: string): Promise<void> {
    await requisicao<void>('trocar-senha', { email, senhaAtual, senhaNova })
    geracao += 1
    limparSessao() // Backend revoga todas as sessões ao trocar a senha.
  },
  async logout(): Promise<void> {
    // Se houver rotação em andamento, aguarda para revogar o token mais novo.
    if (renovacaoPendente) await renovacaoPendente.catch(() => undefined)
    const refreshToken = sessionStorage.getItem(CHAVE_REFRESH)
    geracao += 1
    limparSessao()
    if (refreshToken) {
      try {
        await requisicao<void>('logout', { refreshToken })
      } catch {
        // O cliente já descartou as credenciais. Falhas de rede devem ser
        // monitoradas; a sessão do servidor pode permanecer até sua expiração.
      }
    }
  },
  async requisicaoAutenticada(
    url: string,
    opcoes: RequestInit = {},
  ): Promise<Response> {
    if (!estado.accessToken) await renovarToken()
    const enviar = (token: string | null) => {
      const headers = new Headers(opcoes.headers)
      if (token) headers.set('Authorization', `Bearer ${token}`)
      return fetch(url, { ...opcoes, headers })
    }
    let resposta = await enviar(estado.accessToken)
    if (resposta.status === 401 && sessionStorage.getItem(CHAVE_REFRESH)) {
      try {
        await renovarToken()
        resposta = await enviar(estado.accessToken)
      } catch {
        throw new ErroAuth(401, 'Sessão expirada. Entre novamente.')
      }
    }
    if (resposta.status === 401) {
      geracao += 1
      limparSessao()
    }
    return resposta
  },
}
