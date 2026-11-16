import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../../auth/AuthContext'

/** RF13 — nenhum conteúdo privado enquanto a restauração não terminar. */
export default function PrivateRoute() {
  const { autenticado, carregando } = useAuth()
  const localizacao = useLocation()
  if (carregando) {
    return <output className="block p-8 text-muted">Verificando sessão...</output>
  }
  if (!autenticado) {
    return <Navigate to="/login" state={{ from: localizacao }} replace />
  }
  return <Outlet />
}
