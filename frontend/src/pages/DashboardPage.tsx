import { useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'
import { PERMISSOES, possuiPapel } from '../auth/permissoes'
import Button from '../components/ui/Button'
import { useEffect, useState } from 'react'
import { ContratosApi, type Indicadores, type StatusContrato } from '../services/contratos.service'

const moeda = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' })

export default function DashboardPage() {
  const navigate = useNavigate()
  const { usuario } = useAuth()
  const [indicadores, setIndicadores] = useState<Indicadores | null>(null)
  const [erro, setErro] = useState('')
  const [inicio, setInicio] = useState('')
  const [fim, setFim] = useState('')
  const [statusFiltro, setStatusFiltro] = useState<StatusContrato | ''>('')
  const [carregando, setCarregando] = useState(false)

  useEffect(() => {
    let ativo = true
    ContratosApi.indicadores()
      .then((dados) => { if (ativo) setIndicadores(dados) })
      .catch((falha) => { if (ativo) setErro(falha instanceof Error ? falha.message : 'Não foi possível carregar os indicadores.') })
    return () => { ativo = false }
  }, [])

  async function filtrarIndicadores(novoInicio = inicio, novoFim = fim, novoStatus = statusFiltro) {
    setCarregando(true)
    setErro('')
    try {
      setIndicadores(await ContratosApi.indicadores(
        novoInicio || undefined,
        novoFim || undefined,
        novoStatus || undefined,
      ))
    } catch (falha) {
      setErro(falha instanceof Error ? falha.message : 'Não foi possível carregar os indicadores.')
    } finally {
      setCarregando(false)
    }
  }

  return (
    <div className="space-y-6 pb-12">
      <header className="border-b border-border pb-4">
        <div className="flex flex-wrap items-center gap-2">
          <h1 className="text-xl sm:text-2xl font-bold text-dark">
            Visão Geral
          </h1>
          <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary-light text-primary border border-primary/20">
            Dashboard
          </span>
        </div>
        <p className="text-xs text-muted mt-1 leading-relaxed">
          Indicadores reais de contratos, colaboradores ativos, pendências e apropriação de custos.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-surface border border-border p-5 rounded-xl shadow-xs">
          <span className="text-xs font-semibold text-muted uppercase tracking-wider">
            Colaboradores Ativos
          </span>
          <p className="text-3xl font-bold text-primary mt-2">{indicadores?.colaboradoresAtivos ?? '—'}</p>
        </div>
        <div className="bg-surface border border-border p-5 rounded-xl shadow-xs">
          <span className="text-xs font-semibold text-muted uppercase tracking-wider">
            Apontamentos e Reembolsos Pendentes
          </span>
          <p className="text-3xl font-bold text-gold mt-2">{indicadores ? indicadores.apontamentosPendentes + indicadores.reembolsosPendentes : '—'}</p>
        </div>
        <div className="bg-surface border border-border p-5 rounded-xl shadow-xs">
          <span className="text-xs font-semibold text-muted uppercase tracking-wider">
            Obras em Andamento
          </span>
          <p className="text-3xl font-bold text-dark mt-2">{indicadores?.obrasEmAndamento ?? '—'}</p>
        </div>
      </div>

      {erro && <div role="alert" className="rounded-lg border border-primary/20 bg-primary-light p-4 text-sm text-primary">{erro}</div>}

      {indicadores && (
        <section className="rounded-xl border border-border bg-surface shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border px-5 py-4">
            <div>
              <h2 className="font-semibold text-dark">Custos por contrato</h2>
              <p className="mt-1 text-xs text-muted">Diárias homologadas e reembolsos aprovados</p>
            </div>
            <div className="text-right">
              <p className="text-xs uppercase text-muted">Custo total</p>
              <p className="text-lg font-bold text-primary">{moeda.format(indicadores.custosTotalCentavos / 100)}</p>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); void filtrarIndicadores() }}
            className="flex flex-wrap items-end gap-3 border-b border-border bg-surface-subtle/50 px-5 py-3"
          >
            <label className="text-xs font-medium text-dark">Início
              <input type="date" value={inicio} onChange={(e) => setInicio(e.target.value)} className="mt-1 block rounded-lg border border-border bg-surface px-3 py-1.5 text-sm" />
            </label>
            <label className="text-xs font-medium text-dark">Fim
              <input type="date" value={fim} onChange={(e) => setFim(e.target.value)} className="mt-1 block rounded-lg border border-border bg-surface px-3 py-1.5 text-sm" />
            </label>
            <label className="text-xs font-medium text-dark">Status
              <select value={statusFiltro} onChange={(e) => setStatusFiltro(e.target.value as StatusContrato | '')} className="mt-1 block rounded-lg border border-border bg-surface px-3 py-1.5 text-sm">
                <option value="">Todos</option>
                <option value="ATIVO">Ativo</option>
                <option value="SUSPENSO">Suspenso</option>
                <option value="ENCERRADO">Encerrado</option>
              </select>
            </label>
            <Button size="sm" type="submit" disabled={carregando}>{carregando ? 'Filtrando…' : 'Aplicar'}</Button>
            {(inicio || fim || statusFiltro) && (
              <Button size="sm" type="button" variant="outline" onClick={() => { setInicio(''); setFim(''); setStatusFiltro(''); void filtrarIndicadores('', '', '') }}>
                Limpar
              </Button>
            )}
          </form>

          {indicadores.contratos.length === 0 ? (
            <p className="p-8 text-center text-sm text-muted">Nenhum contrato encontrado para os filtros aplicados.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[680px] text-left text-sm">
                <thead className="bg-surface-subtle text-xs uppercase text-muted"><tr>
                  <th className="px-5 py-3">Contrato</th><th className="px-5 py-3">Centro de custo</th><th className="px-5 py-3">Status</th><th className="px-5 py-3">Diárias</th><th className="px-5 py-3">Reembolsos</th><th className="px-5 py-3">Total</th>
                </tr></thead>
                <tbody className="divide-y divide-border">
                  {indicadores.contratos.map((item) => (
                    <tr key={item.contratoId}>
                      <td className="px-5 py-4"><p className="font-semibold text-dark">{item.codigo}</p><p className="text-xs text-muted">{item.nome}</p></td>
                      <td className="px-5 py-4">{item.centroCusto ?? '—'}</td>
                      <td className="px-5 py-4"><span className="rounded-full bg-surface-subtle px-2.5 py-1 text-xs font-semibold">{item.status}</span></td>
                      <td className="px-5 py-4">{item.diariasHomologadas} · {moeda.format(item.diariasCentavos / 100)}</td>
                      <td className="px-5 py-4">{item.reembolsosAprovados} · {moeda.format(item.reembolsosCentavos / 100)}</td>
                      <td className="px-5 py-4 font-bold text-dark">{moeda.format(item.totalCentavos / 100)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      )}

      <div className="p-5 bg-surface border border-border rounded-xl space-y-3 shadow-xs">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-dark">
          Ações rápidas
        </h2>
        <div className="flex flex-wrap gap-3">
          {possuiPapel(usuario?.papel, PERMISSOES.colaboradores) && (
            <Button variant="primary" onClick={() => navigate('/colaboradores/novo')}>
              Novo Colaborador
            </Button>
          )}
          {possuiPapel(usuario?.papel, PERMISSOES.novoRvt) && (
            <Button variant="gold" onClick={() => navigate('/rvt/novo')}>
              Novo Apontamento (RVT)
            </Button>
          )}
          {possuiPapel(usuario?.papel, PERMISSOES.historicoRvt) && (
            <Button variant="secondary" onClick={() => navigate('/rvt/historico')}>
              Histórico RVT
            </Button>
          )}
          {possuiPapel(usuario?.papel, PERMISSOES.colaboradores) && (
            <Button variant="outline" onClick={() => navigate('/colaboradores')}>
              Colaboradores
            </Button>
          )}
          {possuiPapel(usuario?.papel, PERMISSOES.homologacaoRvt) && (
            <Button variant="primary" onClick={() => navigate('/rvt/homologacao')}>
              Homologar Apontamentos
            </Button>
          )}
          {possuiPapel(usuario?.papel, PERMISSOES.aprovacaoRvt) && (
            <Button variant="secondary" onClick={() => navigate('/rvt/aprovacao')}>
              Aprovação RVT
            </Button>
          )}
          {possuiPapel(usuario?.papel, PERMISSOES.solicitarReembolso) && (
            <Button variant="outline" onClick={() => navigate('/reembolsos/solicitar')}>
              Solicitar Reembolso
            </Button>
          )}
          {possuiPapel(usuario?.papel, PERMISSOES.administrarReembolsos) && (
            <Button variant="secondary" onClick={() => navigate('/reembolsos/administracao')}>
              Administração de Reembolsos
            </Button>
          )}
          {possuiPapel(usuario?.papel, PERMISSOES.contratos) && (
            <Button variant="outline" onClick={() => navigate('/contratos')}>
              Contratos de Obra
            </Button>
          )}
          {possuiPapel(usuario?.papel, PERMISSOES.gestaoAcessos) && (
            <Button variant="primary" onClick={() => navigate('/acessos')}>
              Gestão de Acessos
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
