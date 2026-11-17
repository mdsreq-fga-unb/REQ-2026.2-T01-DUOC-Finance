import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

function resposta(dados: unknown, status = 200) {
  return {
    ok: status >= 200 && status < 300,
    status,
    json: vi.fn(async () => dados),
  } as unknown as Response
}

const usuario = { id: 'u-1', email: 'admin@duoc.com.br', papel: 'ADMIN_FINANCEIRO' }
const tokens = (refreshToken: string) => ({
  accessToken: `jwt-${refreshToken}`,
  refreshToken,
  tokenType: 'Bearer',
  expiresIn: 900,
  refreshExpiresIn: 604800,
  usuario,
})

beforeEach(() => {
  vi.resetModules()
  const dados = new Map<string, string>()
  vi.stubGlobal('sessionStorage', {
    getItem: (chave: string) => dados.get(chave) ?? null,
    setItem: (chave: string, valor: string) => { dados.set(chave, valor) },
    removeItem: (chave: string) => { dados.delete(chave) },
  })
  vi.stubGlobal('fetch', vi.fn())
})

afterEach(() => { vi.unstubAllGlobals() })

describe('RF13 / RF18 / RN16 — cliente de autenticação', () => {
  it('login exige API e nao autentica por timeout ou usuario de demonstracao', async () => {
    vi.mocked(fetch).mockResolvedValueOnce(resposta(tokens('refresh-1')))
    const { AuthApi } = await import('./auth.service')
    await AuthApi.login('admin@duoc.com.br', 'senha-de-teste')
    expect(AuthApi.obterEstado().usuario).toEqual(usuario)
    expect(AuthApi.obterEstado().accessToken).toBe('jwt-refresh-1')
    expect(sessionStorage.getItem('duoc_auth_refresh_sessao')).toBe('refresh-1')
    expect(sessionStorage.getItem('duoc_finance_access_token')).toBe(null)
  })

  it('recusa credenciais incorretas sem criar sessao local', async () => {
    vi.mocked(fetch).mockResolvedValueOnce(resposta({ message: 'Credenciais inválidas.' }, 401))
    const { AuthApi, ErroAuth } = await import('./auth.service')
    await expect(AuthApi.login('x@y.com', 'errada')).rejects.toBeInstanceOf(ErroAuth)
    expect(AuthApi.obterEstado().usuario).toBe(null)
  })

  it('restaura acesso renovando token da aba e rotaciona refresh', async () => {
    sessionStorage.setItem('duoc_auth_refresh_sessao', 'refresh-anterior')
    vi.mocked(fetch).mockResolvedValueOnce(resposta(tokens('refresh-novo')))
    const { AuthApi } = await import('./auth.service')
    await AuthApi.restaurar()
    expect(AuthApi.obterEstado().accessToken).toBe('jwt-refresh-novo')
    expect(sessionStorage.getItem('duoc_auth_refresh_sessao')).toBe('refresh-novo')
    expect(fetch).toHaveBeenCalledWith('/api/auth/refresh', expect.any(Object))
  })

  it('descarta sessao quando refresh foi revogado no servidor', async () => {
    sessionStorage.setItem('duoc_auth_refresh_sessao', 'refresh-expirado')
    vi.mocked(fetch).mockResolvedValueOnce(resposta({ message: 'Sessão inválida.' }, 401))
    const { AuthApi } = await import('./auth.service')
    await AuthApi.restaurar()
    expect(AuthApi.obterEstado().usuario).toBe(null)
    expect(sessionStorage.getItem('duoc_auth_refresh_sessao')).toBe(null)
  })

  it('logout revoga token mais recente e limpa estado local', async () => {
    vi.mocked(fetch)
      .mockResolvedValueOnce(resposta(tokens('refresh-1')))
      .mockResolvedValueOnce(resposta(null, 204))
    const { AuthApi } = await import('./auth.service')
    await AuthApi.login('admin@duoc.com.br', 'senha')
    await AuthApi.logout()
    expect(AuthApi.obterEstado().usuario).toBe(null)
    expect(sessionStorage.getItem('duoc_auth_refresh_sessao')).toBe(null)
    expect(fetch).toHaveBeenLastCalledWith('/api/auth/logout', expect.objectContaining({
      body: JSON.stringify({ refreshToken: 'refresh-1' }),
    }))
  })

  it('requisicao protegida renova o JWT apos HTTP 401 e repete com novo token', async () => {
    vi.mocked(fetch)
      .mockResolvedValueOnce(resposta(tokens('refresh-1')))
      .mockResolvedValueOnce(resposta({ message: 'JWT expirado.' }, 401))
      .mockResolvedValueOnce(resposta(tokens('refresh-2')))
      .mockResolvedValueOnce(resposta({ id: 'rvt-1' }))
    const { AuthApi } = await import('./auth.service')
    await AuthApi.login('admin@duoc.com.br', 'senha')
    const resultado = await AuthApi.requisicaoAutenticada('/api/rvt')
    expect(resultado.status).toBe(200)
    const ultimaChamada = vi.mocked(fetch).mock.calls[3]
    expect(new Headers(ultimaChamada[1]?.headers).get('Authorization')).toBe('Bearer jwt-refresh-2')
    expect(sessionStorage.getItem('duoc_auth_refresh_sessao')).toBe('refresh-2')
  })

  it('nao renova nem apaga sessao em caso de HTTP 403', async () => {
    vi.mocked(fetch)
      .mockResolvedValueOnce(resposta(tokens('refresh-1')))
      .mockResolvedValueOnce(resposta({ message: 'Acesso negado.' }, 403))
    const { AuthApi } = await import('./auth.service')
    await AuthApi.login('admin@duoc.com.br', 'senha')
    const resultado = await AuthApi.requisicaoAutenticada('/api/rvt')
    expect(resultado.status).toBe(403)
    expect(AuthApi.obterEstado().usuario).toEqual(usuario)
    expect(fetch).toHaveBeenCalledTimes(2)
  })

  it('troca de senha encerra a sessao local', async () => {
    vi.mocked(fetch)
      .mockResolvedValueOnce(resposta(tokens('refresh-1')))
      .mockResolvedValueOnce(resposta(null, 204))
    const { AuthApi } = await import('./auth.service')
    await AuthApi.login('admin@duoc.com.br', 'senha-antiga')
    await AuthApi.trocarSenha('admin@duoc.com.br', 'senha-antiga', 'senha-nova-123')
    expect(AuthApi.obterEstado().usuario).toBe(null)
  })
})
