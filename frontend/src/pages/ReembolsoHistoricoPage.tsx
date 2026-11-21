import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ClipboardList, FileClock, FilterX, Plus, ReceiptText } from 'lucide-react'
import Button from '../components/ui/Button'

type Status = 'PENDENTE' | 'APROVADO' | 'REJEITADO'
type FiltroStatus = Status | 'TODOS'

interface ReembolsoDemonstrativo {
  id: string
  codigo: string
  categoria: string
  descricao: string
  dataDespesa: string // YYYY-MM-DD
  valorCentavos: number
  status: Status
  contrato: { id: string; codigo: string; nome: string }
  parecer: string | null
}

/** RF07 / CAR-04 — exemplos fictícios, sem relação com o usuário logado. */
const REGISTROS_DEMO: ReembolsoDemonstrativo[] = [
  {
    id: 'demo-0086', codigo: 'DES-0086', categoria: 'Alimentação',
    descricao: 'Alimentação durante inspeção em campo.', dataDespesa: '2026-10-09',
    valorCentavos: 18590, status: 'PENDENTE',
    contrato: { id: 'aurora', codigo: 'CT-2026-001', nome: 'Residencial Aurora' },
    parecer: null,
  },
  {
    id: 'demo-0082', codigo: 'DES-0082', categoria: 'Transporte',
    descricao: 'Deslocamento para atividade técnica.', dataDespesa: '2026-10-05',
    valorCentavos: 8000, status: 'APROVADO',
    contrato: { id: 'aurora', codigo: 'CT-2026-001', nome: 'Residencial Aurora' },
    parecer: 'Despesa compatível com a atividade realizada.',
  },
  {
    id: 'demo-0079', codigo: 'DES-0079', categoria: 'Materiais emergenciais',
    descricao: 'Compra emergencial de materiais para a obra.', dataDespesa: '2026-10-02',
    valorCentavos: 4200, status: 'REJEITADO',
    contrato: { id: 'horizonte', codigo: 'CT-2026-002', nome: 'Edifício Horizonte' },
    parecer: 'Comprovante ilegível.',
  },
]

const STATUS: Record<Status, { nome: string; classe: string }> = {
  PENDENTE: { nome: 'Pendente', classe: 'bg-amber-50 text-amber-700 border-amber-200' },
  APROVADO: { nome: 'Aprovado', classe: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  REJEITADO: { nome: 'Rejeitado', classe: 'bg-red-50 text-red-700 border-red-200' },
}

const classeSelect =
  'w-full h-11 rounded-lg border border-border bg-surface px-3.5 text-sm text-dark ' +
  'focus:outline-hidden focus:border-primary focus:ring-2 focus:ring-primary/20'

function formatarValor(centavos: number): string {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(centavos / 100)
}

function formatarData(iso: string): string {
  const [ano, mes, dia] = iso.split('-')
  return `${dia}/${mes}/${ano}`
}

function formatarPeriodo(periodo: string): string {
  const [ano, mes] = periodo.split('-').map(Number)
  const texto = new Intl.DateTimeFormat('pt-BR', { month: 'long', year: 'numeric', timeZone: 'UTC' })
    .format(new Date(Date.UTC(ano, mes - 1, 1)))
  return texto.charAt(0).toUpperCase() + texto.slice(1)
}

/** UI-first: a consulta real e a restrição por autoria serão implementadas na API. */
export default function ReembolsoHistoricoPage() {
  const [contratoId, setContratoId] = useState('')
  const [periodo, setPeriodo] = useState('')
  const [status, setStatus] = useState<FiltroStatus>('TODOS')
  const [detalheId, setDetalheId] = useState<string | null>(null)

  const contratos = useMemo(() => {
    const mapa = new Map(REGISTROS_DEMO.map((r) => [r.contrato.id, r.contrato]))
    return [...mapa.values()].sort((a, b) => a.nome.localeCompare(b.nome))
  }, [])

  const periodos = useMemo(() =>
    [...new Set(REGISTROS_DEMO.map((r) => r.dataDespesa.slice(0, 7)))].sort().reverse(),
  [])

  const filtrados = useMemo(() => REGISTROS_DEMO
    .filter((r) => !contratoId || r.contrato.id === contratoId)
    .filter((r) => !periodo || r.dataDespesa.startsWith(periodo))
    .filter((r) => status === 'TODOS' || r.status === status)
    .sort((a, b) => b.dataDespesa.localeCompare(a.dataDespesa)),
  [contratoId, periodo, status])

  const detalhe = filtrados.find((r) => r.id === detalheId)

  const limparFiltros = () => {
    setContratoId('')
    setPeriodo('')
    setStatus('TODOS')
    setDetalheId(null)
  }

  return (
    <div className="space-y-6 pb-12">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-xs text-muted">Financeiro / Meus reembolsos</p>
          <h1 className="text-2xl font-bold tracking-tight text-dark">Meus reembolsos</h1>
          <p className="mt-1 text-sm text-muted">Acompanhe solicitações, status e pareceres financeiros.</p>
        </div>
        <Link to="/reembolsos/solicitar" className="w-full sm:w-auto">
          <Button type="button" className="w-full sm:w-auto">
            <Plus className="h-4 w-4" /> Solicitar reembolso
          </Button>
        </Link>
      </header>

      <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-dark">
        <strong>Dados demonstrativos.</strong> Os registros abaixo são fictícios e não correspondem às
        solicitações do usuário autenticado. A consulta ao banco será integrada posteriormente.
      </div>

      <section className="overflow-hidden rounded-xl border border-border bg-surface">
        <div className="border-b border-border px-5 py-5 sm:px-6">
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            <ClipboardList className="h-5 w-5 text-primary" /> Minhas solicitações
          </h2>
          <p className="mt-1 text-xs text-muted">Filtre os exemplos por contrato, período e status.</p>
        </div>

        <div className="grid gap-4 p-5 sm:grid-cols-3 sm:p-6">
          <div className="space-y-1.5">
            <label htmlFor="filtro-reembolso-contrato" className="block text-xs font-semibold">Contrato</label>
            <select id="filtro-reembolso-contrato" className={classeSelect} value={contratoId}
              onChange={(e) => { setContratoId(e.target.value); setDetalheId(null) }}>
              <option value="">Todos os contratos</option>
              {contratos.map((c) => <option key={c.id} value={c.id}>{c.nome}</option>)}
            </select>
          </div>
          <div className="space-y-1.5">
            <label htmlFor="filtro-reembolso-periodo" className="block text-xs font-semibold">Período</label>
            <select id="filtro-reembolso-periodo" className={classeSelect} value={periodo}
              onChange={(e) => { setPeriodo(e.target.value); setDetalheId(null) }}>
              <option value="">Todos os períodos</option>
              {periodos.map((p) => <option key={p} value={p}>{formatarPeriodo(p)}</option>)}
            </select>
          </div>
          <div className="space-y-1.5">
            <label htmlFor="filtro-reembolso-status" className="block text-xs font-semibold">Status</label>
            <select id="filtro-reembolso-status" className={classeSelect} value={status}
              onChange={(e) => { setStatus(e.target.value as FiltroStatus); setDetalheId(null) }}>
              <option value="TODOS">Todos</option>
              <option value="PENDENTE">Pendente</option>
              <option value="APROVADO">Aprovado</option>
              <option value="REJEITADO">Rejeitado</option>
            </select>
          </div>
        </div>

        {filtrados.length > 0 ? (
          <>
            <div className="overflow-x-auto">
              <table className="min-w-[720px] w-full text-left text-sm">
                <thead className="border-y border-border bg-surface-subtle text-xs uppercase tracking-wide text-muted">
                  <tr>
                    <th scope="col" className="px-5 py-3 sm:pl-6">Solicitação</th>
                    <th scope="col" className="px-5 py-3">Despesa / contrato</th>
                    <th scope="col" className="px-5 py-3">Valor</th>
                    <th scope="col" className="px-5 py-3">Status</th>
                    <th scope="col" className="px-5 py-3">Detalhe</th>
                  </tr>
                </thead>
                <tbody>
                  {filtrados.map((r) => (
                    <tr key={r.id} className="border-b border-border last:border-0">
                      <td className="whitespace-nowrap px-5 py-4 font-semibold text-primary sm:pl-6">
                        {r.codigo} · {formatarData(r.dataDespesa)}
                      </td>
                      <td className="px-5 py-4">
                        <span className="font-medium text-dark">{r.categoria}</span>
                        <span className="block text-xs text-muted">{r.contrato.nome}</span>
                      </td>
                      <td className="whitespace-nowrap px-5 py-4 font-medium">{formatarValor(r.valorCentavos)}</td>
                      <td className="px-5 py-4">
                        <span className={`inline-flex rounded-md border px-2 py-1 text-xs font-semibold ${STATUS[r.status].classe}`}>
                          {STATUS[r.status].nome}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <button type="button" className="cursor-pointer text-sm font-semibold text-primary hover:underline"
                          aria-expanded={detalheId === r.id}
                          onClick={() => setDetalheId((atual) => atual === r.id ? null : r.id)}>
                          {detalheId === r.id ? 'Ocultar detalhes' : 'Ver detalhes'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="border-t border-border px-5 py-3 text-xs text-muted sm:px-6">
              {filtrados.length} de {REGISTROS_DEMO.length} registros fictícios exibidos
            </div>
          </>
        ) : (
          <div className="space-y-3 border-t border-border px-5 py-12 text-center sm:px-6">
            <FileClock className="mx-auto h-9 w-9 text-muted" />
            <h3 className="font-semibold">Nenhuma solicitação encontrada</h3>
            <p className="text-sm text-muted">Não há exemplos correspondentes aos filtros selecionados.</p>
            <Button type="button" variant="secondary" onClick={limparFiltros}>
              <FilterX className="h-4 w-4" /> Limpar filtros
            </Button>
          </div>
        )}
      </section>

      {detalhe && (
        <section aria-label={`Detalhes de ${detalhe.codigo}`}
          className="rounded-xl border border-border bg-surface p-5 sm:p-6">
          <h2 className="mb-4 flex items-center gap-2 text-lg font-semibold">
            <ReceiptText className="h-5 w-5 text-primary" /> Detalhes · {detalhe.codigo}
          </h2>
          <dl className="grid gap-4 text-sm sm:grid-cols-2">
            <div>
              <dt className="text-xs text-muted">Contrato</dt>
              <dd className="mt-1 font-medium">{detalhe.contrato.codigo} · {detalhe.contrato.nome}</dd>
            </div>
            <div>
              <dt className="text-xs text-muted">Status</dt>
              <dd className="mt-1">{STATUS[detalhe.status].nome}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-xs text-muted">Descrição</dt>
              <dd className="mt-1">{detalhe.descricao}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-xs text-muted">Parecer financeiro</dt>
              <dd className="mt-1">{detalhe.parecer ?? 'Aguardando análise da administração financeira.'}</dd>
            </div>
          </dl>
          <p className="mt-5 border-t border-border pt-3 text-xs text-muted">
            Exemplo demonstrativo: nenhum comprovante real está disponível para consulta.
          </p>
        </section>
      )}
    </div>
  )
}
