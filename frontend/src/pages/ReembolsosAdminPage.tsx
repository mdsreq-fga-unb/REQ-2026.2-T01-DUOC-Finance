import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { REGISTROS_DEMONSTRATIVOS } from '../data/reembolsos-demo'
import type { StatusReembolso } from '../data/reembolsos-demo'
import {
  CheckCircle2,
  Clock3,
  Eye,
  FileText,
  Plus,
  ReceiptText,
  Search,
  Wallet,
  X,
} from 'lucide-react'

type FiltroStatus = StatusReembolso | 'TODOS'

const ABAS: { valor: FiltroStatus; titulo: string }[] = [
  { valor: 'PENDENTE', titulo: 'Pendente' },
  { valor: 'APROVADO', titulo: 'Aprovado' },
  { valor: 'REJEITADO', titulo: 'Rejeitado' },
  { valor: 'TODOS', titulo: 'Todos' },
]

const STATUS_VISUAL: Record<StatusReembolso, { nome: string; classes: string }> = {
  PENDENTE: {
    nome: 'Pendente',
    classes: 'border-amber-200 bg-amber-50 text-amber-700',
  },
  APROVADO: {
    nome: 'Aprovado',
    classes: 'border-emerald-200 bg-emerald-50 text-emerald-700',
  },
  REJEITADO: {
    nome: 'Rejeitado',
    classes: 'border-red-200 bg-red-50 text-red-700',
  },
}

function formatarValor(centavos: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(centavos / 100)
}

function formatarData(dataISO: string): string {
  const [ano, mes, dia] = dataISO.split('-')
  return `${dia}/${mes}/${ano}`
}

function buscarTexto(texto: string): string {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
}

function CartaoResumo({
  titulo,
  valor,
  Icone,
}: {
  titulo: string
  valor: string
  Icone: typeof Clock3
}) {
  return (
    <div className="rounded-xl border border-border bg-surface px-4 py-5 shadow-2xs">
      <div className="flex items-center justify-between gap-2">
        <p className="text-xs text-muted">{titulo}</p>
        <Icone aria-hidden="true" className="h-4 w-4 text-primary" />
      </div>
      <p className="mt-4 text-xl font-bold text-dark sm:text-2xl">{valor}</p>
    </div>
  )
}

/** RF08 — primeira etapa: painel administrativo somente de consulta demonstrativa. */
export default function ReembolsosAdminPage() {
  const [status, setStatus] = useState<FiltroStatus>('PENDENTE')
  const [busca, setBusca] = useState('')
  const [detalheId, setDetalheId] = useState<string | null>(null)

  const pendentes = REGISTROS_DEMONSTRATIVOS.filter((item) => item.status === 'PENDENTE')
  const aprovados = REGISTROS_DEMONSTRATIVOS.filter((item) => item.status === 'APROVADO')
  const totalPendente = pendentes.reduce((total, item) => total + item.valorCentavos, 0)
  const totalAprovado = aprovados.reduce((total, item) => total + item.valorCentavos, 0)

  const registrosFiltrados = useMemo(() => {
    const termo = buscarTexto(busca.trim())
    return REGISTROS_DEMONSTRATIVOS.filter((item) => {
      if (status !== 'TODOS' && item.status !== status) return false
      if (!termo) return true
      return buscarTexto([
        item.codigo,
        item.colaborador,
        item.contrato,
        item.categoria,
      ].join(' ')).includes(termo)
    })
  }, [status, busca])

  const detalhe = registrosFiltrados.find((item) => item.id === detalheId) ?? null

  return (
    <div className="space-y-6 pb-12">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="mb-2 text-xs text-muted">Financeiro / Reembolsos</p>
          <h1 className="text-2xl font-bold tracking-tight text-dark">
            Reembolsos e adiantamentos
          </h1>
          <p className="mt-1 text-sm text-muted">
            Organize as despesas operacionais e acompanhe cada solicitação.
          </p>
        </div>
        <Link
          to="/reembolsos/solicitar"
          className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-semibold text-white hover:bg-primary-dark"
        >
          <Plus aria-hidden="true" className="h-4 w-4" />
          Nova solicitação
        </Link>
      </header>

      <div className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-dark">
        <strong>Dados demonstrativos:</strong> os valores e nomes abaixo são fictícios.
        Nenhuma solicitação ou decisão está sendo consultada ou gravada no banco.
        O fluxo de adiantamentos será tratado separadamente.
      </div>

      <section aria-label="Resumo demonstrativo dos reembolsos" className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <CartaoResumo titulo="Aguardando aprovação" valor={formatarValor(totalPendente)} Icone={Clock3} />
        <CartaoResumo titulo="Total aprovado" valor={formatarValor(totalAprovado)} Icone={CheckCircle2} />
        <CartaoResumo titulo="Reembolsos" valor={String(REGISTROS_DEMONSTRATIVOS.length).padStart(2, '0')} Icone={ReceiptText} />
        <CartaoResumo titulo="Adiantamentos" valor="—" Icone={Wallet} />
      </section>

      <section className="overflow-hidden rounded-xl border border-border bg-surface">
        <div className="flex gap-2 overflow-x-auto border-b border-border px-4" role="tablist" aria-label="Filtrar reembolsos por situação">
          {ABAS.map((aba) => (
            <button
              key={aba.valor}
              type="button"
              role="tab"
              aria-selected={status === aba.valor}
              className={`shrink-0 border-b-2 px-3 py-4 text-sm transition-colors ${
                status === aba.valor
                  ? 'border-primary font-semibold text-primary'
                  : 'border-transparent text-muted hover:text-dark'
              }`}
              onClick={() => {
                setStatus(aba.valor)
                setDetalheId(null)
              }}
            >
              {aba.titulo}
            </button>
          ))}
        </div>

        <div className="border-b border-border p-4">
          <label htmlFor="buscar-reembolsos-admin" className="sr-only">
            Buscar solicitação
          </label>
          <div className="relative max-w-sm">
            <Search aria-hidden="true" className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-muted" />
            <input
              id="buscar-reembolsos-admin"
              type="search"
              value={busca}
              onChange={(evento) => {
                setBusca(evento.target.value)
                setDetalheId(null)
              }}
              placeholder="Buscar código, colaborador ou contrato..."
              className="h-10 w-full rounded-lg border border-border bg-surface pl-9 pr-3 text-sm text-dark outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </div>
        </div>

        {registrosFiltrados.length === 0 ? (
          <div className="flex flex-col items-center gap-3 px-5 py-12 text-center">
            <FileText aria-hidden="true" className="h-9 w-9 text-muted" />
            <h2 className="font-semibold text-dark">Nenhum reembolso encontrado</h2>
            <p className="max-w-md text-sm text-muted">
              Não há solicitações demonstrativas correspondentes aos filtros atuais.
            </p>
            <button
              type="button"
              onClick={() => { setBusca(''); setStatus('PENDENTE'); setDetalheId(null) }}
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium hover:bg-surface-subtle"
            >
              <X aria-hidden="true" className="h-4 w-4" />
              Limpar filtros
            </button>
          </div>
        ) : (
          <>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] text-left text-sm">
                <thead className="bg-surface-subtle text-xs font-medium text-muted">
                  <tr>
                    <th scope="col" className="px-4 py-3">Solicitação</th>
                    <th scope="col" className="px-4 py-3">Colaborador</th>
                    <th scope="col" className="px-4 py-3">Contrato / obra</th>
                    <th scope="col" className="px-4 py-3">Tipo</th>
                    <th scope="col" className="px-4 py-3">Valor</th>
                    <th scope="col" className="px-4 py-3">Status</th>
                    <th scope="col" className="px-4 py-3">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {registrosFiltrados.map((item) => (
                    <tr key={item.id} className="border-t border-border">
                      <td className="whitespace-nowrap px-4 py-4 font-medium">{item.codigo}</td>
                      <td className="px-4 py-4">{item.colaborador}</td>
                      <td className="px-4 py-4">{item.contrato}</td>
                      <td className="px-4 py-4">Reembolso</td>
                      <td className="whitespace-nowrap px-4 py-4">{formatarValor(item.valorCentavos)}</td>
                      <td className="px-4 py-4">
                        <span className={`inline-block rounded-md border px-2 py-1 text-xs ${STATUS_VISUAL[item.status].classes}`}>
                          {STATUS_VISUAL[item.status].nome}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <button
                          type="button"
                          aria-label={`Consultar detalhes de ${item.codigo}`}
                          aria-expanded={detalheId === item.id}
                          onClick={() => setDetalheId((atual) => atual === item.id ? null : item.id)}
                          className="inline-flex items-center gap-1 text-primary hover:underline"
                        >
                          <Eye aria-hidden="true" className="h-4 w-4" />
                          Detalhes
                        </button>
                        {item.status === 'PENDENTE' && (
                          <Link
                            to={`/reembolsos/administracao/${item.id}/deliberar`}
                            className="ml-3 inline-flex items-center text-sm font-semibold text-primary hover:underline"
                          >
                            Deliberar
                          </Link>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="border-t border-border px-4 py-3 text-xs text-muted">
              {registrosFiltrados.length} registro(s) demonstrativo(s)
            </p>
          </>
        )}
      </section>

      {detalhe && (
        <section aria-label={`Detalhes de ${detalhe.codigo}`} className="rounded-xl border border-border bg-surface p-5 sm:p-6">
          <div className="mb-4 flex items-center gap-2">
            <FileText aria-hidden="true" className="h-5 w-5 text-primary" />
            <h2 className="text-lg font-semibold">Conferência · {detalhe.codigo}</h2>
          </div>
          <dl className="grid gap-4 text-sm sm:grid-cols-2">
            <div><dt className="text-xs text-muted">Solicitante</dt><dd className="mt-1 font-medium">{detalhe.colaborador}</dd></div>
            <div><dt className="text-xs text-muted">Contrato</dt><dd className="mt-1 font-medium">{detalhe.contrato}</dd></div>
            <div><dt className="text-xs text-muted">Categoria</dt><dd className="mt-1">{detalhe.categoria}</dd></div>
            <div><dt className="text-xs text-muted">Data da despesa</dt><dd className="mt-1">{formatarData(detalhe.dataDespesa)}</dd></div>
            <div><dt className="text-xs text-muted">Valor</dt><dd className="mt-1">{formatarValor(detalhe.valorCentavos)}</dd></div>
            <div><dt className="text-xs text-muted">Situação</dt><dd className="mt-1">{STATUS_VISUAL[detalhe.status].nome}</dd></div>
            <div className="sm:col-span-2"><dt className="text-xs text-muted">Descrição</dt><dd className="mt-1">{detalhe.descricao}</dd></div>
            <div className="sm:col-span-2">
              <dt className="text-xs text-muted">Parecer financeiro</dt>
              <dd className="mt-1">{detalhe.parecer ?? 'Aguardando análise.'}</dd>
            </div>
          </dl>
          <p className="mt-5 border-t border-border pt-4 text-xs text-muted">
            Prévia ilustrativa: não há comprovante real para abrir nem decisão financeira disponível nesta etapa.
          </p>
        </section>
      )}
    </div>
  )
}
