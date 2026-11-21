import { useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'
import { PERMISSOES, possuiPapel } from '../auth/permissoes'
import Button from '../components/ui/Button'

export default function DashboardPage() {
  const navigate = useNavigate()
  const { usuario } = useAuth()
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-dark">
          Visão Geral (Dashboard)
        </h1>
        <p className="text-muted mt-1">
          Bem-vindo ao DUOC Finance. Aqui ficarão os indicadores e métricas
          financeiras.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-surface border border-border p-5 rounded-xl shadow-xs">
          <span className="text-xs font-semibold text-muted uppercase tracking-wider">
            Colaboradores Ativos
          </span>
          <p className="text-3xl font-bold text-primary mt-2">24</p>
        </div>
        <div className="bg-surface border border-border p-5 rounded-xl shadow-xs">
          <span className="text-xs font-semibold text-muted uppercase tracking-wider">
            Apontamentos Pendentes
          </span>
          <p className="text-3xl font-bold text-gold mt-2">12</p>
        </div>
        <div className="bg-surface border border-border p-5 rounded-xl shadow-xs">
          <span className="text-xs font-semibold text-muted uppercase tracking-wider">
            Obras em Andamento
          </span>
          <p className="text-3xl font-bold text-dark mt-2">5</p>
        </div>
      </div>

      {/* Demonstração dos botões com a paleta do sistema */}
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
        </div>
      </div>
    </div>
  )
}
