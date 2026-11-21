import { Link } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'

export default function AcessoNegadoPage() {
  const { usuario } = useAuth()
  return (
    <section className="rounded-xl border border-border bg-surface p-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">403 · Acesso negado</p>
      <h1 className="mt-2 text-2xl font-bold text-dark">Esta área não está disponível para o seu perfil.</h1>
      <p className="mt-2 text-muted">
        Você está autenticado como <strong>{usuario?.papel.replaceAll('_', ' ')}</strong>.
        Solicite a um administrador do sistema a revisão das suas permissões.
      </p>
      <Link to="/" className="mt-6 inline-block text-primary underline">
        Voltar à visão geral
      </Link>
    </section>
  )
}
