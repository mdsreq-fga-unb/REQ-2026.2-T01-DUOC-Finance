import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../../auth/AuthContext'
import { possuiPapel, type Papel } from '../../auth/permissoes'

/** RN15 / RNF14 — defesa de interface. O backend continua autoridade (403). */
export default function RoleRoute({ permitidos }: { permitidos: readonly Papel[] }) {
  const { usuario } = useAuth()
  if (!possuiPapel(usuario?.papel, permitidos)) {
    return <Navigate to="/acesso-negado" replace />
  }
  return <Outlet />
}
