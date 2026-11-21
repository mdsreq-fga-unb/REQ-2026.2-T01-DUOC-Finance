import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { AlertCircle, ClipboardCheck, FileWarning, Info, ShieldCheck } from 'lucide-react'
import Button from '../components/ui/Button'
import { REGISTROS_DEMONSTRATIVOS } from '../data/reembolsos-demo'
import type { SolicitacaoDemonstrativa } from '../data/reembolsos-demo'

type Decisao = 'APROVAR' | 'REJEITAR'

function reais(centavos: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(centavos / 100)
}

function dataBrasileira(valor: string): string {
  const [ano, mes, dia] = valor.split('-')
  return `${dia}/${mes}/${ano}`
}

function ResumoSolicitacao({ item }: { item: SolicitacaoDemonstrativa }) {
  return (
    <dl className="grid gap-4 text-sm sm:grid-cols-2">
      <div>
        <dt className="text-xs text-muted">Solicitante</dt>
        <dd className="mt-1 font-semibold text-dark">{item.colaborador}</dd>
      </div>
      <div>
        <dt className="text-xs text-muted">Contrato / obra</dt>
        <dd className="mt-1 font-medium text-dark">{item.contrato}</dd>
      </div>
      <div>
        <dt className="text-xs text-muted">Categoria</dt>
        <dd className="mt-1">{item.categoria}</dd>
      </div>
      <div>
        <dt className="text-xs text-muted">Data da despesa</dt>
        <dd className="mt-1">{dataBrasileira(item.dataDespesa)}</dd>
      </div>
      <div>
        <dt className="text-xs text-muted">Valor solicitado</dt>
        <dd className="mt-1 font-semibold">{reais(item.valorCentavos)}</dd>
      </div>
      <div>
        <dt className="text-xs text-muted">Situação</dt>
        <dd className="mt-1">Pendente</dd>
      </div>
      <div className="sm:col-span-2">
        <dt className="text-xs text-muted">Descrição</dt>
        <dd className="mt-1 whitespace-pre-wrap">{item.descricao}</dd>
      </div>
    </dl>
  )
}

/**
 * RF08 · CAR-04 — etapa UI-first da deliberação financeira.
 * Exibe apenas dados sintéticos, SEM consulta a comprovante e SEM aprovação real.
 * O envio será implementado após os endpoints protegidos estarem disponíveis.
 */
export default function ReembolsoDeliberacaoPage() {
  const { id } = useParams<{ id: string }>()
  const item = REGISTROS_DEMONSTRATIVOS.find((solicitacao) => solicitacao.id === id)
  const [parecer, setParecer] = useState('')
  const [erroParecer, setErroParecer] = useState('')
  const [decisaoParaRevisar, setDecisaoParaRevisar] = useState<Decisao | null>(null)

  function revisarDecisao(decisao: Decisao) {
    if (!parecer.trim()) {
      setErroParecer('Informe um parecer formal antes de aprovar ou reprovar.')
      setDecisaoParaRevisar(null)
      return
    }
    setErroParecer('')
    setDecisaoParaRevisar(decisao)
  }

  if (!item || item.status !== 'PENDENTE') {
    return (
      <section className="space-y-4 rounded-xl border border-border bg-surface p-6">
        <h1 className="text-2xl font-bold">Solicitação indisponível para deliberação</h1>
        <p className="text-sm text-muted">
          Não há uma solicitação pendente demonstrativa com esse identificador.
          Nenhum dado real foi consultado.
        </p>
        <Link to="/reembolsos/administracao" className="text-sm font-semibold text-primary hover:underline">
          Voltar aos reembolsos
        </Link>
      </section>
    )
  }

  return (
    <div className="space-y-6 pb-12">
      <header>
        <p className="mb-2 text-xs text-muted">Financeiro / Deliberar reembolso</p>
        <h1 className="text-2xl font-bold tracking-tight text-dark">Deliberar reembolso</h1>
        <p className="mt-1 text-sm text-muted">
          Confira a solicitação e prepare um parecer financeiro.
        </p>
      </header>

      <div role="note" className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-dark">
        <strong>Demonstração:</strong> esta tela utiliza dados fictícios. Não há comprovante real,
        nem aprovação, reprovação ou persistência habilitadas nesta etapa.
      </div>

      <section className="rounded-xl border border-border bg-surface p-5 sm:p-6">
        <h2 className="text-lg font-semibold">Fila de reembolsos · Pendente</h2>
        <p className="mt-3 text-base font-semibold text-primary">
          {item.codigo} <span className="mx-1 text-muted">·</span> {item.colaborador}
          <span className="mx-1 text-muted">·</span> {item.contrato}
          <span className="mx-1 text-muted">·</span> {reais(item.valorCentavos)}
        </p>
      </section>

      <div className="grid gap-5 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.95fr)]">
        <section className="space-y-6 rounded-xl border border-border bg-surface p-5 sm:p-6">
          <h2 className="flex items-center gap-2 text-lg font-semibold">
            <ClipboardCheck className="h-5 w-5 text-primary" aria-hidden="true" />
            Conferência da solicitação
          </h2>
          <ResumoSolicitacao item={item} />

          <div className="rounded-lg border border-border bg-surface-subtle p-5">
            <h3 className="flex items-center gap-2 font-semibold">
              <FileWarning className="h-5 w-5 text-primary" aria-hidden="true" />
              Comprovante fiscal
            </h3>
            <p className="mt-2 text-sm leading-6 text-dark">
              O documento fiscal não está disponível nesta demonstração.
              A conferência real do anexo será obrigatória antes de deliberar
              após a integração com o backend.
            </p>
          </div>
          <Link
            to="/reembolsos/administracao"
            className="inline-flex rounded-lg border border-border px-4 py-2 text-sm font-medium text-dark hover:bg-surface-subtle"
          >
            Voltar à listagem
          </Link>
        </section>

        <section className="space-y-5 rounded-xl border border-border bg-surface p-5 sm:p-6">
          <div>
            <h2 className="text-lg font-semibold">Parecer financeiro</h2>
            <p className="mt-2 text-sm leading-6 text-muted">
              O parecer formal é obrigatório nesta interface tanto para aprovação
              quanto para reprovação. A decisão não será enviada nesta etapa.
            </p>
          </div>

          {decisaoParaRevisar ? (
            <div className="space-y-4">
              <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
                <p className="flex items-center gap-2 font-semibold">
                  <Info className="h-5 w-5 text-primary" aria-hidden="true" />
                  Revisar {decisaoParaRevisar === 'APROVAR' ? 'aprovação' : 'reprovação'}
                </p>
                <p className="mt-2 text-sm">Solicitação: {item.codigo}</p>
                <p className="mt-1 text-sm">Valor: {reais(item.valorCentavos)}</p>
                <p className="mt-3 whitespace-pre-wrap text-sm">Parecer: {parecer.trim()}</p>
              </div>
              <p className="flex items-start gap-2 text-sm text-muted">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                Confirmação final bloqueada até a implementação e validação da API.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button type="button" disabled title="Disponível após integração com a API">
                  Confirmar {decisaoParaRevisar === 'APROVAR' ? 'aprovação' : 'reprovação'} (em integração)
                </Button>
                <Button type="button" variant="secondary" onClick={() => setDecisaoParaRevisar(null)}>
                  Voltar e editar
                </Button>
              </div>
            </div>
          ) : (
            <form
              className="space-y-5"
              onSubmit={(evento) => { evento.preventDefault(); revisarDecisao('APROVAR') }}
              noValidate
            >
              <div>
                <label htmlFor="parecer-reembolso" className="mb-1.5 block text-xs font-semibold text-dark">
                  Parecer obrigatório *
                </label>
                <textarea
                  id="parecer-reembolso"
                  rows={5}
                  maxLength={1500}
                  required
                  value={parecer}
                  aria-invalid={Boolean(erroParecer)}
                  aria-describedby={erroParecer ? 'erro-parecer-reembolso' : undefined}
                  onChange={(evento) => {
                    setParecer(evento.target.value)
                    if (erroParecer) setErroParecer('')
                  }}
                  placeholder="Descreva o motivo da decisão financeira..."
                  className="w-full rounded-lg border border-border bg-surface px-3.5 py-3 text-sm text-dark focus:border-primary focus:outline-hidden focus:ring-2 focus:ring-primary/20"
                />
                {erroParecer && (
                  <p id="erro-parecer-reembolso" role="alert" className="mt-1 flex items-center gap-1 text-xs text-primary">
                    <AlertCircle className="h-4 w-4" aria-hidden="true" />
                    {erroParecer}
                  </p>
                )}
              </div>
              <div className="space-y-2 text-sm">
                <p>Valor solicitado: <strong>{reais(item.valorCentavos)}</strong></p>
                <p>Solicitante: {item.colaborador}</p>
                <p>Perfil decisor exigido: <strong>ADMIN_FINANCEIRO</strong></p>
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button type="submit">Revisar aprovação</Button>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => revisarDecisao('REJEITAR')}
                >
                  Revisar reprovação
                </Button>
              </div>
              <p className="text-xs text-muted">
                A conferência de comprovantes e as regras de valor serão validadas no servidor.
              </p>
            </form>
          )}
        </section>
      </div>
    </div>
  )
}
