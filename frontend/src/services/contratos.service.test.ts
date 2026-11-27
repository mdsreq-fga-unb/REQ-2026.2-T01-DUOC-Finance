import { afterEach, describe, expect, it, vi } from 'vitest'
import { AuthApi } from './auth.service'
import { ContratosApi } from './contratos.service'

function resposta(body: unknown, status = 200): Response {
  return {
    ok: status >= 200 && status < 300,
    status,
    json: async () => body,
  } as Response
}

afterEach(() => vi.restoreAllMocks())

describe('ContratosApi', () => {
  it('lista gestores ativos pelo endpoint próprio de contratos', async () => {
    const gestores = [{ id: 'g-1', email: 'gestor@duoc.com.br', ativo: true }]
    const requisicao = vi.spyOn(AuthApi, 'requisicaoAutenticada')
      .mockResolvedValue(resposta(gestores))

    await expect(ContratosApi.listarGestores()).resolves.toEqual(gestores)
    expect(requisicao).toHaveBeenCalledWith('/api/contratos/gestores', {})
  })

  it('consulta rateio e indicadores com filtros opcionais', async () => {
    const requisicao = vi.spyOn(AuthApi, 'requisicaoAutenticada')
      .mockResolvedValueOnce(resposta({ totalCentavos: 50000 }))
      .mockResolvedValueOnce(resposta({ custosTotalCentavos: 50000 }))

    await ContratosApi.rateio('c-1', '2026-11-01', '2026-11-30')
    expect(requisicao).toHaveBeenNthCalledWith(
      1,
      '/api/contratos/c-1/rateio?inicio=2026-11-01&fim=2026-11-30',
      {},
    )

    await ContratosApi.indicadores('2026-11-01', '2026-11-30', 'ATIVO', 'c-1')
    expect(requisicao).toHaveBeenNthCalledWith(
      2,
      '/api/contratos/indicadores?inicio=2026-11-01&fim=2026-11-30&status=ATIVO&contratoId=c-1',
      {},
    )
  })

  it('envia criação, atualização e encerramento de contrato', async () => {
    const requisicao = vi.spyOn(AuthApi, 'requisicaoAutenticada')
      .mockResolvedValue(resposta({ id: 'c-1' }))

    await ContratosApi.criar({ codigo: 'OBR-01', nome: 'Obra Alpha' })
    expect(requisicao).toHaveBeenLastCalledWith(
      '/api/contratos',
      expect.objectContaining({ method: 'POST' }),
    )

    await ContratosApi.atualizar('c-1', { centroCusto: 'CC-02' })
    expect(requisicao).toHaveBeenLastCalledWith(
      '/api/contratos/c-1',
      expect.objectContaining({ method: 'PATCH' }),
    )

    await ContratosApi.encerrar('c-1')
    expect(requisicao).toHaveBeenLastCalledWith(
      '/api/contratos/c-1/encerrar',
      expect.objectContaining({ method: 'PATCH' }),
    )
  })

  it('propaga mensagem de erro do backend', async () => {
    vi.spyOn(AuthApi, 'requisicaoAutenticada')
      .mockResolvedValue(resposta({ message: ['codigo obrigatório.'] }, 400))

    await expect(ContratosApi.criar({})).rejects.toThrow('codigo obrigatório.')
  })
})
