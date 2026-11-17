import { useState } from 'react'
import type { FormEvent } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'
import { ErroAuth } from '../services/auth.service'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'

export default function TrocarSenhaPage() {
  const navigate = useNavigate()
  const localizacao = useLocation()
  const emailInicial = (localizacao.state as { email?: unknown } | null)?.email
  const { trocarSenha } = useAuth()
  const [email, setEmail] = useState(typeof emailInicial === 'string' ? emailInicial : '')
  const [senhaAtual, setSenhaAtual] = useState('')
  const [senhaNova, setSenhaNova] = useState('')
  const [confirmacao, setConfirmacao] = useState('')
  const [erro, setErro] = useState('')
  const [enviando, setEnviando] = useState(false)

  async function enviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault()
    setErro('')
    if (senhaNova.length < 12 || new TextEncoder().encode(senhaNova).length > 72) {
      setErro('A nova senha deve ter no mínimo 12 caracteres e no máximo 72 bytes.')
      return
    }
    if (senhaNova !== confirmacao) {
      setErro('As senhas novas não coincidem.')
      return
    }
    setEnviando(true)
    try {
      await trocarSenha(email.trim(), senhaAtual, senhaNova)
      navigate('/login', { replace: true, state: { senhaAlterada: true } })
    } catch (falha) {
      setErro(falha instanceof ErroAuth ? falha.message : 'Falha ao trocar a senha. Tente novamente.')
    } finally {
      setEnviando(false)
    }
  }

  return (
    <main className="min-h-screen bg-canvas flex items-center justify-center p-4">
      <section className="w-full max-w-md rounded-xl border border-border bg-surface p-7 shadow-sm">
        <h1 className="text-2xl font-bold text-dark">Atualizar senha</h1>
        <p className="mt-2 mb-6 text-sm text-muted">
          RF24: sua senha deve ser renovada periodicamente. A troca encerrará todas as sessões anteriores.
        </p>
        <form onSubmit={enviar} className="space-y-4">
          <Input label="E-mail corporativo" type="email" autoComplete="username" required value={email}
            onChange={(e) => setEmail(e.target.value)} disabled={enviando} />
          <Input label="Senha atual" type="password" autoComplete="current-password" required value={senhaAtual}
            onChange={(e) => setSenhaAtual(e.target.value)} disabled={enviando} />
          <Input label="Nova senha" type="password" autoComplete="new-password" minLength={12} required value={senhaNova}
            onChange={(e) => setSenhaNova(e.target.value)} disabled={enviando} />
          <Input label="Confirme a nova senha" type="password" autoComplete="new-password" required value={confirmacao}
            onChange={(e) => setConfirmacao(e.target.value)} disabled={enviando} />
          {erro && <p role="alert" className="text-sm text-primary">{erro}</p>}
          <Button className="w-full" type="submit" disabled={enviando}>
            {enviando ? 'Atualizando...' : 'Alterar senha'}
          </Button>
        </form>
        <Link to="/login" className="block mt-5 text-sm text-primary underline">
          Voltar ao login
        </Link>
      </section>
    </main>
  )
}
