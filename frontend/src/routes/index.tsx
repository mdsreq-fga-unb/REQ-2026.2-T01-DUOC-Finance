import { Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from '../components/layout/AppLayout'
import DashboardPage from '../pages/DashboardPage'
import ColaboradoresPage from '../pages/ColaboradoresPage'
import ColaboradorFormPage from '../pages/ColaboradorFormPage'
import LoginPage from '../pages/LoginPage'
import RvtFormPage from '../pages/RvtFormPage'
import RvtHistoricoPage from '../pages/RvtHistoricoPage'
import AprovacaoRvtPage from '../pages/AprovacaoRvtPage'
import AcessoNegadoPage from '../pages/AcessoNegadoPage'
import TrocarSenhaPage from '../pages/TrocarSenhaPage'
import PrivateRoute from '../components/auth/PrivateRoute'
import RoleRoute from '../components/auth/RoleRoute'
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

          <Route element={<RoleRoute permitidos={PERMISSOES.historicoRvt} />}>
            <Route path="rvt/historico" element={<RvtHistoricoPage />} />
          </Route>

          <Route element={<RoleRoute permitidos={PERMISSOES.aprovacaoRvt} />}>
            <Route path="rvt/aprovacao" element={<AprovacaoRvtPage />} />
          </Route>

          <Route element={<RoleRoute permitidos={PERMISSOES.fechamento} />}>
            <Route
              path="fechamento"
              element={
                <section className="rounded-xl border border-border bg-surface p-6 shadow-xs">
                  <h2 className="text-xl font-bold text-dark">
                    Fechamento Financeiro
                  </h2>
                  <p className="mt-1 text-muted">
                    Tela em desenvolvimento (RF05)...
                  </p>
                </section>
              }
            />
          </Route>

          <Route
            path="*"
            element={
              <section className="py-12 text-center">
                <h2 className="text-2xl font-bold text-primary">
                  Página não encontrada (404)
                </h2>
                <p className="mt-2 text-muted">
                  A rota que você tentou acessar não existe.
                </p>
              </section>
            }
          />
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  )
}