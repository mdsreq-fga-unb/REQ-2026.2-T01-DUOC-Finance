import { Link } from 'react-router-dom'

export default function AcessoNegadoPage() {
  return (
    <section className="rounded-xl border border-border bg-surface p-8">
      <h1 className="text-2xl font-bold text-dark">Acesso não autorizado (403)</h1>
      <p className="mt-2 text-muted">
        Seu papel não permite acessar esta área. Solicite acesso a um administrador.
      </p>
      <Link to="/" className="mt-6 inline-block text-primary underline">
        Voltar à visão geral
      </Link>
    </section>
  )
}
