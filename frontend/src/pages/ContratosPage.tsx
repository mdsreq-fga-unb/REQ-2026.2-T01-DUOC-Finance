import { useEffect, useState } from 'react'
import { BriefcaseBusiness, Calculator, Loader2, Plus, RefreshCw, X } from 'lucide-react'
import { useAuth } from '../auth/AuthContext'
import Button from '../components/ui/Button'
import { useToast } from '../components/ui/useToast'
import { ContratosApi, type Contrato, type RateioContrato, type StatusContrato } from '../services/contratos.service'
import type { UsuarioAcesso } from '../services/acessos.service'

const vazio = {
  codigo: '',
  nome: '',
  cliente: '',
  descricao: '',
  centroCusto: '',
  valorDiariaCentavos: 0,
  dataInicio: '',
  dataFim: '',
  gestorResponsavelId: '',
  status: 'ATIVO' as StatusContrato,
}

const moeda = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

export default function ContratosPage() {
  const { usuario } = useAuth()
  const toast = useToast()
  const podeEditar = usuario?.papel === 'ADMIN_FINANCEIRO'
  const [lista, setLista] = useState<Contrato[]>([])
  const [gestores, setGestores] = useState<UsuarioAcesso[]>([])
  const [filtroStatus, setFiltroStatus] = useState<StatusContrato | ''>('')
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')
  const [formAberto, setFormAberto] = useState(false)
  const [editando, setEditando] = useState<Contrato | null>(null)
  const [form, setForm] = useState(vazio)
  const [salvando, setSalvando] = useState(false)

  const [contratoRateio, setContratoRateio] = useState<Contrato | null>(null)
  const [rateioInicio, setRateioInicio] = useState('')
  const [rateioFim, setRateioFim] = useState('')
  const [rateio, setRateio] = useState<RateioContrato | null>(null)
  const [carregandoRateio, setCarregandoRateio] = useState(false)
  const [erroRateio, setErroRateio] = useState('')

  async function carregar(statusSelecionado: StatusContrato | '' = filtroStatus) {
    setCarregando(true)
    setErro('')
    try {
      const [contratos, gestoresAtivos] = await Promise.all([
        ContratosApi.listar(statusSelecionado || undefined),
        podeEditar ? ContratosApi.listarGestores() : Promise.resolve([]),
      ])
      setLista(contratos)
      if (podeEditar) {
        setGestores(gestoresAtivos.map((item) => ({ ...item, papel: 'GESTOR_OBRAS' as const })))
      }
    } catch (falha) {
      setErro(falha instanceof Error ? falha.message : 'Não foi possível carregar os contratos.')
    } finally {
      setCarregando(false)
    }
  }

  useEffect(() => {
    let ativo = true
    Promise.all([
      ContratosApi.listar(filtroStatus || undefined),
      podeEditar ? ContratosApi.listarGestores() : Promise.resolve([]),
    ])
      .then(([contratos, gestoresAtivos]) => {
        if (!ativo) return
        setLista(contratos)
        if (podeEditar) {
          setGestores(gestoresAtivos.map((item) => ({ ...item, papel: 'GESTOR_OBRAS' as const })))
        }
        setErro('')
      })
      .catch((falha) => {
        if (ativo) setErro(falha instanceof Error ? falha.message : 'Não foi possível carregar os contratos.')
      })
      .finally(() => {
        if (ativo) setCarregando(false)
      })
    return () => { ativo = false }
  }, [podeEditar, filtroStatus])

  function novo() {
    setEditando(null)
    setForm(vazio)
    setFormAberto(true)
  }

  function editar(contrato: Contrato) {
    setEditando(contrato)
    setForm({
      codigo: contrato.codigo,
      nome: contrato.nome,
      cliente: contrato.cliente ?? '',
      descricao: contrato.descricao ?? '',
      centroCusto: contrato.centroCusto ?? '',
      valorDiariaCentavos: contrato.valorDiariaCentavos,
      dataInicio: contrato.dataInicio?.slice(0, 10) ?? '',
      dataFim: contrato.dataFim?.slice(0, 10) ?? '',
      gestorResponsavelId: contrato.gestorResponsavelId ?? '',
      status: contrato.status,
    })
    setFormAberto(true)
  }

  async function salvar(evento: React.FormEvent) {
    evento.preventDefault()
    setSalvando(true)
    try {
      const dados = {
        ...form,
        cliente: form.cliente || null,
        descricao: form.descricao || null,
        centroCusto: form.centroCusto || null,
        dataInicio: form.dataInicio || null,
        dataFim: form.dataFim || null,
        gestorResponsavelId: form.gestorResponsavelId || null,
      }
      const salvo = editando
        ? await ContratosApi.atualizar(editando.id, dados)
        : await ContratosApi.criar(dados)
      setLista((atual) => editando ? atual.map((item) => item.id === salvo.id ? salvo : item) : [salvo, ...atual])
      setFormAberto(false)
      toast.success(editando ? 'Contrato atualizado.' : 'Contrato cadastrado.')
    } catch (falha) {
      toast.error(falha instanceof Error ? falha.message : 'Não foi possível salvar o contrato.')
    } finally {
      setSalvando(false)
    }
  }

  async function encerrar(contrato: Contrato) {
    if (!window.confirm(`Encerrar o contrato ${contrato.codigo}?`)) return
    try {
      const salvo = await ContratosApi.encerrar(contrato.id)
      setLista((atual) => atual.map((item) => item.id === salvo.id ? salvo : item))
      toast.success('Contrato encerrado.')
    } catch (falha) {
      toast.error(falha instanceof Error ? falha.message : 'Não foi possível encerrar o contrato.')
    }
  }

  async function consultarRateio(contrato: Contrato, inicio = rateioInicio, fim = rateioFim) {
    setContratoRateio(contrato)
    setCarregandoRateio(true)
    setErroRateio('')
    try {
      setRateio(await ContratosApi.rateio(contrato.id, inicio || undefined, fim || undefined))
    } catch (falha) {
      setRateio(null)
      setErroRateio(falha instanceof Error ? falha.message : 'Não foi possível calcular o rateio.')
    } finally {
      setCarregandoRateio(false)
    }
  }

  const gestorInativoAtual = editando?.gestorResponsavel && !gestores.some((g) => g.id === editando.gestorResponsavel?.id)
    ? editando.gestorResponsavel
    : null

  return (
    <div className="space-y-6 pb-12">
      <header className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">CAR-05 · RF33/RF37/RF38</p>
          <h1 className="mt-1 text-2xl font-bold text-dark">Contratos de obra</h1>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <select
            aria-label="Filtrar contratos por status"
            value={filtroStatus}
            onChange={(e) => {
              setCarregando(true)
              setFiltroStatus(e.target.value as StatusContrato | '')
            }}
            className="h-9 rounded-lg border border-border bg-surface px-3 text-sm text-dark"
          >
            <option value="">Todos os status</option>
            <option value="ATIVO">Ativos</option>
            <option value="SUSPENSO">Suspensos</option>
            <option value="ENCERRADO">Encerrados</option>
          </select>
          <Button variant="outline" size="sm" onClick={() => void carregar()} disabled={carregando}>
            <RefreshCw className={`h-4 w-4 ${carregando ? 'animate-spin' : ''}`} /> Atualizar
          </Button>
          {podeEditar && <Button size="sm" onClick={novo}><Plus className="h-4 w-4" /> Novo contrato</Button>}
        </div>
      </header>

      {formAberto && (
        <form onSubmit={(event) => void salvar(event)} className="grid gap-4 rounded-xl border border-border bg-surface p-5 shadow-xs md:grid-cols-2">
          <label className="text-sm font-medium text-dark">Código *
            <input required value={form.codigo} onChange={(e) => setForm({ ...form, codigo: e.target.value })} className="mt-1 w-full rounded-lg border border-border px-3 py-2" />
          </label>
          <label className="text-sm font-medium text-dark">Nome da obra *
            <input required value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })} className="mt-1 w-full rounded-lg border border-border px-3 py-2" />
          </label>
          <label className="text-sm font-medium text-dark">Cliente
            <input value={form.cliente} onChange={(e) => setForm({ ...form, cliente: e.target.value })} className="mt-1 w-full rounded-lg border border-border px-3 py-2" />
          </label>
          <label className="text-sm font-medium text-dark">Centro de custo
            <input value={form.centroCusto} onChange={(e) => setForm({ ...form, centroCusto: e.target.value })} className="mt-1 w-full rounded-lg border border-border px-3 py-2" />
          </label>
          <label className="text-sm font-medium text-dark">Valor da diária (centavos)
            <input type="number" min="0" value={form.valorDiariaCentavos} onChange={(e) => setForm({ ...form, valorDiariaCentavos: Number(e.target.value) })} className="mt-1 w-full rounded-lg border border-border px-3 py-2" />
          </label>
          <label className="text-sm font-medium text-dark">Gestor responsável
            <select value={form.gestorResponsavelId} onChange={(e) => setForm({ ...form, gestorResponsavelId: e.target.value })} className="mt-1 w-full rounded-lg border border-border px-3 py-2">
              <option value="">Sem gestor</option>
              {gestorInativoAtual && (
                <option value={gestorInativoAtual.id}>{gestorInativoAtual.email} (inativo)</option>
              )}
              {gestores.map((gestor) => <option key={gestor.id} value={gestor.id}>{gestor.email}</option>)}
            </select>
          </label>
          <label className="text-sm font-medium text-dark">Início
            <input type="date" value={form.dataInicio} onChange={(e) => setForm({ ...form, dataInicio: e.target.value })} className="mt-1 w-full rounded-lg border border-border px-3 py-2" />
          </label>
          <label className="text-sm font-medium text-dark">Fim
            <input type="date" value={form.dataFim} onChange={(e) => setForm({ ...form, dataFim: e.target.value })} className="mt-1 w-full rounded-lg border border-border px-3 py-2" />
          </label>
          <label className="text-sm font-medium text-dark">Status
            <select value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value as StatusContrato })} className="mt-1 w-full rounded-lg border border-border px-3 py-2">
              <option value="ATIVO">Ativo</option><option value="SUSPENSO">Suspenso</option><option value="ENCERRADO">Encerrado</option>
            </select>
          </label>
          <label className="text-sm font-medium text-dark md:col-span-2">Descrição
            <textarea value={form.descricao} onChange={(e) => setForm({ ...form, descricao: e.target.value })} className="mt-1 min-h-24 w-full rounded-lg border border-border px-3 py-2" />
          </label>
          <div className="flex gap-2 md:col-span-2">
            <Button type="submit" disabled={salvando}>{salvando ? 'Salvando…' : 'Salvar contrato'}</Button>
            <Button type="button" variant="outline" onClick={() => setFormAberto(false)}>Cancelar</Button>
          </div>
        </form>
      )}

      {erro && <div role="alert" className="rounded-lg border border-primary/20 bg-primary-light p-4 text-sm text-primary">{erro}</div>}
      {carregando ? (
        <output className="flex justify-center gap-2 p-12 text-sm text-muted"><Loader2 className="h-4 w-4 animate-spin" /> Carregando contratos…</output>
      ) : (
        <section className="overflow-hidden rounded-xl border border-border bg-surface">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px] text-left text-sm">
              <thead className="bg-surface-subtle text-xs uppercase text-muted"><tr>
                <th className="px-5 py-3">Contrato</th><th className="px-5 py-3">Gestor</th><th className="px-5 py-3">Centro de custo</th><th className="px-5 py-3">Diária</th><th className="px-5 py-3">Status</th><th className="px-5 py-3">Ações</th>
              </tr></thead>
              <tbody className="divide-y divide-border">
                {lista.map((contrato) => (
                  <tr key={contrato.id}>
                    <td className="px-5 py-4"><div className="font-semibold text-dark">{contrato.codigo}</div><div className="text-xs text-muted">{contrato.nome}</div></td>
                    <td className="px-5 py-4">{contrato.gestorResponsavel?.email ?? '—'}</td>
                    <td className="px-5 py-4">{contrato.centroCusto ?? '—'}</td>
                    <td className="px-5 py-4">{moeda.format(contrato.valorDiariaCentavos / 100)}</td>
                    <td className="px-5 py-4"><span className="rounded-full bg-surface-subtle px-2.5 py-1 text-xs font-semibold">{contrato.status}</span></td>
                    <td className="px-5 py-4">
                      <div className="flex flex-wrap gap-2">
                        <Button size="sm" variant="outline" onClick={() => void consultarRateio(contrato)}>
                          <Calculator className="h-3.5 w-3.5" /> Rateio
                        </Button>
                        {podeEditar && <Button size="sm" variant="outline" onClick={() => editar(contrato)}>Editar</Button>}
                        {podeEditar && contrato.status !== 'ENCERRADO' && <Button size="sm" variant="secondary" onClick={() => void encerrar(contrato)}>Encerrar</Button>}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {lista.length === 0 && <p className="p-8 text-center text-sm text-muted"><BriefcaseBusiness className="mx-auto mb-2 h-5 w-5" />Nenhum contrato cadastrado.</p>}
        </section>
      )}

      {contratoRateio && (
        <section className="rounded-xl border border-border bg-surface p-5 shadow-xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">RF09 / RF10 · Rateio por contrato</p>
              <h2 className="text-lg font-bold text-dark">{contratoRateio.codigo} · {contratoRateio.nome}</h2>
            </div>
            <Button size="sm" variant="ghost" onClick={() => { setContratoRateio(null); setRateio(null) }} aria-label="Fechar rateio">
              <X className="h-4 w-4" /> Fechar
            </Button>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); void consultarRateio(contratoRateio) }}
            className="flex flex-wrap items-end gap-3"
          >
            <label className="text-xs font-medium text-dark">Início
              <input type="date" value={rateioInicio} onChange={(e) => setRateioInicio(e.target.value)} className="mt-1 block rounded-lg border border-border px-3 py-1.5 text-sm" />
            </label>
            <label className="text-xs font-medium text-dark">Fim
              <input type="date" value={rateioFim} onChange={(e) => setRateioFim(e.target.value)} className="mt-1 block rounded-lg border border-border px-3 py-1.5 text-sm" />
            </label>
            <Button size="sm" type="submit" disabled={carregandoRateio}>Filtrar período</Button>
            {(rateioInicio || rateioFim) && (
              <Button size="sm" type="button" variant="outline" onClick={() => { setRateioInicio(''); setRateioFim(''); void consultarRateio(contratoRateio, '', '') }}>
                Limpar
              </Button>
            )}
          </form>

          {erroRateio && <div role="alert" className="rounded-lg border border-primary/20 bg-primary-light p-3 text-sm text-primary">{erroRateio}</div>}
          {carregandoRateio ? (
            <output className="flex items-center gap-2 text-sm text-muted"><Loader2 className="h-4 w-4 animate-spin" /> Calculando rateio…</output>
          ) : rateio && (
            <>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
                <div className="rounded-lg border border-border bg-surface-subtle p-3">
                  <p className="text-xs uppercase text-muted">Centro de custo</p>
                  <p className="mt-1 font-semibold text-dark">{rateio.centroCusto ?? '—'}</p>
                </div>
                <div className="rounded-lg border border-border bg-surface-subtle p-3">
                  <p className="text-xs uppercase text-muted">Diárias homologadas</p>
                  <p className="mt-1 font-semibold text-dark">{rateio.diariasHomologadas} · {moeda.format(rateio.diariasCentavos / 100)}</p>
                </div>
                <div className="rounded-lg border border-border bg-surface-subtle p-3">
                  <p className="text-xs uppercase text-muted">Reembolsos aprovados</p>
                  <p className="mt-1 font-semibold text-dark">{rateio.reembolsosAprovados} · {moeda.format(rateio.reembolsosCentavos / 100)}</p>
                </div>
                <div className="rounded-lg border border-border bg-surface-subtle p-3">
                  <p className="text-xs uppercase text-muted">Total apropriado</p>
                  <p className="mt-1 text-base font-bold text-primary">{moeda.format(rateio.totalCentavos / 100)}</p>
                </div>
              </div>

              {rateio.itens.length === 0 ? (
                <p className="text-sm text-muted">Nenhuma diária homologada ou reembolso aprovado no período selecionado.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[600px] text-left text-sm">
                    <thead className="bg-surface-subtle text-xs uppercase text-muted"><tr>
                      <th className="px-4 py-2">Tipo</th><th className="px-4 py-2">Data</th><th className="px-4 py-2">Detalhe</th><th className="px-4 py-2">Valor</th>
                    </tr></thead>
                    <tbody className="divide-y divide-border">
                      {rateio.itens.map((item) => (
                        <tr key={`${item.tipo}-${item.referenciaId}`}>
                          <td className="px-4 py-2 font-semibold">{item.tipo === 'DIARIA' ? 'Diária RVT' : 'Reembolso'}</td>
                          <td className="px-4 py-2">{item.data.slice(0, 10)}</td>
                          <td className="px-4 py-2">{item.tipo === 'DIARIA' ? `${item.horas ?? 0}h` : `${item.codigo ?? ''} · ${item.categoria ?? ''}`}</td>
                          <td className="px-4 py-2 font-medium">{moeda.format(item.valorCentavos / 100)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}
        </section>
      )}
    </div>
  )
}
