import { Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from '../components/layout/AppLayout'
import DashboardPage from '../pages/DashboardPage'
import ColaboradoresPage from '../pages/ColaboradoresPage'
import ColaboradorFormPage from '../pages/ColaboradorFormPage'
import LoginPage from '../pages/LoginPage'
import RvtFormPage from '../pages/RvtFormPage'
import RvtHistoricoPage from '../pages/RvtHistoricoPage'
import RvtHomologacaoPage from '../pages/RvtHomologacaoPage'
import AcessoNegadoPage from '../pages/AcessoNegadoPage'
import TrocarSenhaPage from '../pages/TrocarSenhaPage'
import PrivateRoute from '../components/auth/PrivateRoute'
import RoleRoute from '../components/auth/RoleRoute'
import ReembolsoSolicitacaoPage from '../pages/ReembolsoSolicitacaoPage'
import ReembolsoHistoricoPage from '../pages/ReembolsoHistoricoPage'
import { PERMISSOES } from '../auth/permissoes'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/trocar-senha" element={<TrocarSenhaPage />} />

      <Route element={<PrivateRoute />}>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<DashboardPage />} />
          <Route path="acesso-negado" element={<AcessoNegadoPage />} />

          <Route element={<RoleRoute permitidos={PERMISSOES.colaboradores} />}>
            <Route path="colaboradores" element={<ColaboradoresPage />} />
            <Route path="colaboradores/novo" element={<ColaboradorFormPage />} />
            <Route path="colaboradores/:id" element={<ColaboradorFormPage />} />
          </Route>

          <Route path="rvt" element={<Navigate to="/rvt/historico" replace />} />
          <Route element={<RoleRoute permitidos={PERMISSOES.novoRvt} />}>
            <Route path="rvt/novo" element={<RvtFormPage />} />
          </Route>
          <Route element={<RoleRoute permitidos={PERMISSOES.retificarRvt} />}>
            <Route path="rvt/:id/retificar" element={<RvtFormPage />} />
          </Route>
          <Route element={<RoleRoute permitidos={PERMISSOES.historicoRvt} />}>
            <Route path="rvt/historico" element={<RvtHistoricoPage />} />
          </Route>
          <Route element={<RoleRoute permitidos={PERMISSOES.homologacaoRvt} />}>
            <Route path="rvt/homologacao" element={<RvtHomologacaoPage />} />
          </Route>

          {/* RF07 — Solicitação de reembolso */}
          <Route element={<RoleRoute permitidos={PERMISSOES.solicitarReembolso} />}>
            <Route
              path="reembolsos/solicitar"
              element={<ReembolsoSolicitacaoPage />}
            />
            <Route
              path="reembolsos/meus"
              element={<ReembolsoHistoricoPage />}
            />
          </Route>

          <Route element={<RoleRoute permitidos={PERMISSOES.fechamento} />}>
            <Route path="fechamento" element={
              <section className="p-6 bg-surface border border-border rounded-xl shadow-xs">
                <h2 className="text-xl font-bold text-dark">Fechamento Financeiro</h2>
                <p className="text-muted mt-1">Tela em desenvolvimento (RF05)...</p>
              </section>
            } />
          </Route>

          <Route path="*" element={
            <section className="text-center py-12">
              <h2 className="text-2xl font-bold text-primary">Página não encontrada (404)</h2>
              <p className="text-muted mt-2">A rota que você tentou acessar não existe.</p>
            </section>
          } />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}
