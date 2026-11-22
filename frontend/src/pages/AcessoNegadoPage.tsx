import { Link } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'
import Button from '../components/ui/Button'

export default function AcessoNegadoPage() {
  const { usuario } = useAuth()
  return (
    <section className="rounded-xl border border-border bg-surface p-8 shadow-xs">
      <span className="inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-primary-light text-primary border border-primary/20">
        403 · Acesso negado
      </span>
      <h1 className="mt-3 text-xl sm:text-2xl font-bold text-dark">
        Esta área não está disponível para o seu perfil.
      </h1>
      <p className="mt-2 text-sm text-muted">
        Você está autenticado como{' '}
        <strong className="text-dark">{usuario?.papel.replaceAll('_', ' ')}</strong>.
        Solicite a um administrador do sistema a revisão das suas permissões.
      </p>
      <Link to="/" className="mt-6 inline-block">
        <Button variant="primary" size="sm">
          Voltar à visão geral
        </Button>
      </Link>
    </section>
  )
}
