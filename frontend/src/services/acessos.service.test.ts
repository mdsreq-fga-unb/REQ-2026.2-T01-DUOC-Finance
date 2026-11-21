import { afterEach, describe, expect, it, vi } from 'vitest'
import { AuthApi } from './auth.service'
import { AcessosService } from './acessos.service'

function resposta(body: unknown, status = 200): Response {
  return {
    ok: status >= 200 && status < 300,
    status,
    json: async () => body,
  } as Response
}

afterEach(() => vi.restoreAllMocks())

describe('AcessosService', () => {
  it('lista contas usando a requisição autenticada', async () => {
    const usuarios = [{
      id: '00000000-0000-4000-8000-000000000001',
      email: 'admin@duoc.com.br',
      papel: 'ADMIN_SISTEMA',
      ativo: true,
    }]
    const requisicao = vi.spyOn(AuthApi, 'requisicaoAutenticada')
      .mockResolvedValue(resposta(usuarios))

    await expect(AcessosService.listarUsuarios()).resolves.toEqual(usuarios)
    expect(requisicao).toHaveBeenCalledWith('/api/auth/usuarios', undefined)
  })

  it('envia novo papel e estado nos endpoints de gestão', async () => {
    const requisicao = vi.spyOn(AuthApi, 'requisicaoAutenticada')
      .mockResolvedValue(resposta({}))
    const id = '00000000-0000-4000-8000-000000000002'

    await AcessosService.alterarPapel(id, 'GESTOR_OBRAS')
    expect(requisicao).toHaveBeenLastCalledWith(
      `/api/auth/usuarios/${id}/papel`,
      expect.objectContaining({
        method: 'PATCH',
        body: JSON.stringify({ papel: 'GESTOR_OBRAS' }),
      }),
    )

    await AcessosService.alterarStatus(id, false)
    expect(requisicao).toHaveBeenLastCalledWith(
      `/api/auth/usuarios/${id}/status`,
      expect.objectContaining({
        method: 'PATCH',
        body: JSON.stringify({ ativo: false }),
      }),
    )
  })

  it('propaga a mensagem do backend ao receber 403', async () => {
    vi.spyOn(AuthApi, 'requisicaoAutenticada')
      .mockResolvedValue(resposta({ message: 'Acesso negado.' }, 403))

    await expect(AcessosService.listarUsuarios()).rejects.toThrow('Acesso negado.')
  })

  it('não aceita corpo inválido em resposta HTTP bem-sucedida', async () => {
    const respostaInvalida = resposta({}, 200)
    vi.spyOn(respostaInvalida, 'json').mockRejectedValue(new SyntaxError('JSON inválido'))
    vi.spyOn(AuthApi, 'requisicaoAutenticada').mockResolvedValue(respostaInvalida)

    await expect(AcessosService.listarUsuarios())
      .rejects.toThrow('O servidor retornou uma resposta inválida.')
  })
})
