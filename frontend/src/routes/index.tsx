import { Routes, Route, Navigate } from 'react-router-dom'
import AppLayout from '../components/layout/AppLayout'
import DashboardPage from '../pages/DashboardPage'
import ColaboradoresPage from '../pages/ColaboradoresPage'
import ColaboradorFormPage from '../pages/ColaboradorFormPage'
import LoginPage from '../pages/LoginPage'
import RvtFormPage from '../pages/RvtFormPage'
import RvtHistoricoPage from '../pages/RvtHistoricoPage'
import RvtHomologacaoPage from '../pages/RvtHomologacaoPage';
import AcessoNegadoPage from '../pages/AcessoNegadoPage'
import GestaoAcessosPage from '../pages/GestaoAcessosPage'
import ReembolsoSolicitacaoPage from '../pages/ReembolsoSolicitacaoPage'
import ReembolsoHistoricoPage from '../pages/ReembolsoHistoricoPage'
import ReembolsosAdminPage from '../pages/ReembolsosAdminPage'
import ReembolsoDeliberacaoPage from '../pages/ReembolsoDeliberacaoPage'
import TrocarSenhaPage from '../pages/TrocarSenhaPage'
import PrivateRoute from '../components/auth/PrivateRoute'
import RoleRoute from '../components/auth/RoleRoute'
import { PERMISSOES } from '../auth/permissoes'

function TelaEmDesenvolvimento({ titulo }: { titulo: string }) {
  return (
    <section className="rounded-xl border border-border bg-surface p-6">
      <h1 className="text-xl font-bold text-dark">{titulo}</h1>
      <p className="mt-2 text-sm text-muted">Tela em desenvolvimento.</p>
    </section>
  )
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/trocar-senha" element={<TrocarSenhaPage />} />

      <Route element={<PrivateRoute />}>
        <Route path="/" element={<AppLayout />}>
          <Route path="acesso-negado" element={<AcessoNegadoPage />} />

          <Route element={<RoleRoute permitidos={PERMISSOES.dashboard} />}>
            <Route index element={<DashboardPage />} />
          </Route>

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

          <Route element={<RoleRoute permitidos={PERMISSOES.aprovacaoDiarias} />}>
            <Route path="diarias/aprovacao" element={<TelaEmDesenvolvimento titulo="Aprovação de Diárias" />} />
          </Route>

          {/* Mantém a rota de entrada definida na develop. */}
          <Route element={<RoleRoute permitidos={PERMISSOES.reembolsos} />}>
            <Route path="reembolsos" element={<Navigate to="/reembolsos/meus" replace />} />
          </Route>

          {/* CAR-04 / RF07 — registro e histórico do próprio solicitante */}
          <Route element={<RoleRoute permitidos={PERMISSOES.solicitarReembolso} />}>
            <Route path="reembolsos/solicitar" element={<ReembolsoSolicitacaoPage />} />
            <Route path="reembolsos/meus" element={<ReembolsoHistoricoPage />} />
          </Route>

          {/* CAR-04 / RF08 — decisão do administrador financeiro */}
          <Route element={<RoleRoute permitidos={PERMISSOES.administrarReembolsos} />}>
            <Route path="reembolsos/administracao" element={<ReembolsosAdminPage />} />
            <Route path="reembolsos/administracao/:id/deliberar" element={<ReembolsoDeliberacaoPage />} />
          </Route>

          <Route element={<RoleRoute permitidos={PERMISSOES.gestaoAcessos} />}>
            <Route path="acessos" element={<GestaoAcessosPage />} />
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