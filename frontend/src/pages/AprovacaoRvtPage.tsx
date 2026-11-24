import { useCallback, useEffect, useState } from 'react'
import { Check, RefreshCw, X } from 'lucide-react'
import Button from '../components/ui/Button'
import { RvtService } from '../services/rvt.service'
import type { ContratoObra, Rvt, StatusRvt } from '../types/rvt'
import { formatarDataJornada, formatarHoras } from '../utils/rvt'

const STATUS: { valor: StatusRvt; rotulo: string }[] = [
  { valor: 'PENDENTE', rotulo: 'Pendentes' },
  { valor: 'HOMOLOGADO', rotulo: 'Homologados' },
  { valor: 'REJEITADO', rotulo: 'Rejeitados' },
]

export default function AprovacaoRvtPage() {
  const [itens, setItens] = useState<Rvt[]>([])
  const [contratos, setContratos] = useState<ContratoObra[]>([])
  const [status, setStatus] = useState<StatusRvt>('PENDENTE')
  const [contratoId, setContratoId] = useState('')
  const [selecionado, setSelecionado] = useState<string | null>(null)
  const [justificativa, setJustificativa] = useState('')
  const [carregando, setCarregando] = useState(true)
  const [salvando, setSalvando] = useState(false)
  const [erro, setErro] = useState<string | null>(null)
  const [mensagem, setMensagem] = useState<string | null>(null)

  const carregar = useCallback(async () => {
    try {
      const [lista, contratosAtivos] = await Promise.all([
        RvtService.listarParaAprovacao({
          status,
          contratoId: contratoId || undefined,
        }),
        RvtService.listarContratosParaAprovacao(),
      ])

      setErro(null)
      setItens(lista)
      setContratos(contratosAtivos)
      setSelecionado((atual) =>
        atual && lista.some((item) => item.id === atual)
          ? atual
          : lista[0]?.id ?? null,
      )
      setJustificativa('')
    } catch (e) {
      setErro(e instanceof Error ? e.message : 'Não foi possível carregar a fila.')
    } finally {
      setCarregando(false)
    }
  }, [status, contratoId])

    useEffect(() => {
    let cancelado = false

    async function carregarInicial() {
      try {
        const [lista, contratosAtivos] = await Promise.all([
          RvtService.listarParaAprovacao({
            status,
            contratoId: contratoId || undefined,
          }),
          RvtService.listarContratosParaAprovacao(),
        ])

        if (cancelado) return

        setErro(null)
        setItens(lista)
        setContratos(contratosAtivos)
        setSelecionado((atual) =>
          atual && lista.some((item) => item.id === atual)
            ? atual
            : lista[0]?.id ?? null,
        )
        setJustificativa('')
      } catch (e) {
        if (cancelado) return
        setErro(e instanceof Error ? e.message : 'Não foi possível carregar a fila.')
      } finally {
        if (!cancelado) setCarregando(false)
      }
    }

    void carregarInicial()

    return () => {
      cancelado = true
    }
  }, [status, contratoId])

  const atual = itens.find((item) => item.id === selecionado)

  async function decidir(decisao: 'HOMOLOGADO' | 'REJEITADO') {
    if (!atual) return
    if (decisao === 'REJEITADO' && !justificativa.trim()) {
      setErro('Informe a justificativa para reprovar o apontamento.')
      return
    }

    setSalvando(true)
    setErro(null)
    setMensagem(null)
    try {
      await RvtService.decidirAprovacao(
        atual.id,
        decisao,
        decisao === 'REJEITADO' ? justificativa.trim() : undefined,
      )
      setMensagem(decisao === 'HOMOLOGADO' ? 'RVT homologado.' : 'RVT rejeitado.')
      await carregar()
    } catch (e) {
      setErro(e instanceof Error ? e.message : 'Não foi possível registrar a decisão.')
    } finally {
      setSalvando(false)
    }
  }

  return (
    <div className="space-y-6 pb-12">
      <header className="border-b border-border pb-4">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-xl sm:text-2xl font-bold text-dark">Aprovação e homologação</h1>
          <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary-light text-primary border border-primary/20">
            CAR-03 · RVT
          </span>
        </div>
        <p className="mt-1 text-xs text-muted leading-relaxed">
          Confira os apontamentos pendentes antes do fechamento quinzenal.
        </p>
      </header>

      <section className="grid gap-3 rounded-xl border border-border bg-surface p-4 shadow-xs sm:grid-cols-2">
        <label className="text-xs font-semibold text-dark">
          Status
          <select
            className="mt-1.5 block h-11 w-full rounded-lg border border-border bg-surface px-3.5 text-sm text-dark focus:outline-hidden focus:border-primary focus:ring-2 focus:ring-primary/20"
            value={status}
            onChange={(e) => setStatus(e.target.value as StatusRvt)}
          >
            {STATUS.map((item) => (
              <option key={item.valor} value={item.valor}>{item.rotulo}</option>
            ))}
          </select>
        </label>

        <label className="text-xs font-semibold text-dark">
          Contrato
          <select
            className="mt-1.5 block h-11 w-full rounded-lg border border-border bg-surface px-3.5 text-sm text-dark focus:outline-hidden focus:border-primary focus:ring-2 focus:ring-primary/20"
            value={contratoId}
            onChange={(e) => setContratoId(e.target.value)}
          >
            <option value="">Todos os contratos</option>
            {contratos.map((contrato) => (
              <option key={contrato.id} value={contrato.id}>
                {contrato.codigo} — {contrato.nome}
              </option>
            ))}
          </select>
        </label>
      </section>

      {erro && (
        <p role="alert" className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-800">
          {erro}
        </p>
      )}
      {mensagem && (
        <output className="rounded-lg border border-green-200 bg-green-50 p-3 text-sm text-green-800">
          {mensagem}
        </output>
      )}

      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]">
        <section className="overflow-hidden rounded-xl border border-border bg-surface">
          <div className="flex items-center justify-between border-b border-border p-4">
            <h2 className="font-semibold text-dark">
              {status === 'PENDENTE' ? 'Pendentes de homologação' : 'Apontamentos'}
              {' · '}{itens.length}
            </h2>
            <button
              type="button"
              onClick={() => void carregar()}
              disabled={carregando}
              className="rounded p-2 text-muted hover:bg-surface-subtle"
              aria-label="Atualizar fila"
            >
              <RefreshCw className={`h-4 w-4 ${carregando ? 'animate-spin' : ''}`} />
            </button>
          </div>

          {carregando ? (
            <p className="p-6 text-sm text-muted">Carregando fila...</p>
          ) : itens.length === 0 ? (
            <p className="p-6 text-sm text-muted">Nenhum apontamento encontrado.</p>
          ) : (
            <ul className="divide-y divide-border">
              {itens.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => {
                      setSelecionado(item.id)
                      setJustificativa('')
                      setErro(null)
                    }}
                    className={`w-full p-4 text-left hover:bg-surface-subtle ${
                      selecionado === item.id ? 'bg-primary-light' : ''
                    }`}
                  >
                    <span className="block text-sm font-semibold text-primary">
                      {item.contrato.codigo} · {formatarDataJornada(item.dataJornada)}
                    </span>
                    <span className="mt-1 block text-xs text-muted">
                      {item.contrato.nome} · {formatarHoras(item.horasTrabalhadas)}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="rounded-xl border border-border bg-surface p-5">
          {!atual ? (
            <p className="text-sm text-muted">Selecione um apontamento para conferir.</p>
          ) : (
            <>
              <h2 className="text-lg font-semibold text-dark">
                Conferência · {atual.contrato.codigo}
              </h2>
              <dl className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                <div>
                  <dt className="text-xs text-muted">Contrato</dt>
                  <dd className="font-medium">{atual.contrato.nome}</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted">Data da jornada</dt>
                  <dd className="font-medium">{formatarDataJornada(atual.dataJornada)}</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted">Horas apontadas</dt>
                  <dd className="font-medium">{formatarHoras(atual.horasTrabalhadas)}</dd>
                </div>
                <div>
                  <dt className="text-xs text-muted">Status</dt>
                  <dd className="font-medium">{atual.status}</dd>
                </div>
              </dl>

              <div className="mt-4">
                <h3 className="text-xs font-semibold text-muted">Escopo executado</h3>
                <p className="mt-1 whitespace-pre-wrap text-sm">{atual.escopoExecutado}</p>
              </div>

              <div className="mt-4">
                <h3 className="text-xs font-semibold text-muted">
                  Evidências · {atual.evidencias.length}
                </h3>
                {atual.evidencias.length === 0 ? (
                  <p className="mt-1 text-sm text-muted">Nenhuma evidência anexada.</p>
                ) : (
                  <ul className="mt-1 list-inside list-disc text-sm">
                    {atual.evidencias.map((evidencia) => (
                      <li key={evidencia.id}>{evidencia.nomeOriginal}</li>
                    ))}
                  </ul>
                )}
              </div>

              {atual.status === 'PENDENTE' ? (
                <>
                  <label className="mt-5 block text-sm font-medium text-dark">
                    Justificativa para reprovação
                    <textarea
                      className="mt-1 min-h-24 w-full rounded-lg border border-border p-3 text-sm"
                      value={justificativa}
                      onChange={(e) => setJustificativa(e.target.value)}
                      maxLength={1000}
                      placeholder="Obrigatória para reprovar"
                    />
                  </label>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Button
                      type="button"
                      onClick={() => void decidir('HOMOLOGADO')}
                      disabled={salvando}
                    >
                      <Check className="h-4 w-4" /> Aprovar
                    </Button>
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => void decidir('REJEITADO')}
                      disabled={salvando || !justificativa.trim()}
                    >
                      <X className="h-4 w-4" /> Reprovar
                    </Button>
                  </div>
                </>
              ) : atual.justificativaRejeicao ? (
                <p className="mt-5 rounded-lg bg-red-50 p-3 text-sm text-red-800">
                  Justificativa: {atual.justificativaRejeicao}
                </p>
              ) : null}
            </>
          )}
        </section>
      </div>
    </div>
  )
}
