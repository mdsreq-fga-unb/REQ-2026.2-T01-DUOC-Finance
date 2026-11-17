import { useState } from 'react'
import type { FormEvent } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../auth/AuthContext'
import { ErroAuth } from '../services/auth.service'
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Loader2,
  HelpCircle,
  X,
  CheckCircle2,
} from 'lucide-react'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import { useToast } from '../components/ui/useToast'
import { validateEmail, validateCPF } from '../utils/validators'
import { maskCPF } from '../utils/masks'

export default function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { login } = useAuth()
  const toast = useToast()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  // Erros de validação cliente (RNF03)
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  // Modal de Primeiro Acesso / Recuperação (RF17)
  const [isRecoveryModalOpen, setIsRecoveryModalOpen] = useState(false)
  const [recoveryIdentifier, setRecoveryIdentifier] = useState('')
  const [recoveryError, setRecoveryError] = useState('')
  const [recoverySuccess, setRecoverySuccess] = useState(false)
  const [isRecovering] = useState(false) // Recuperação RF17 ainda não integrada

  const handleEmailChange = (val: string) => {
    setEmail(val)
    if (emailError) setEmailError('')
  }

  const handlePasswordChange = (val: string) => {
    setPassword(val)
    if (passwordError) setPasswordError('')
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    let hasError = false

    if (!email.trim()) {
      setEmailError('O e-mail é obrigatório.')
      hasError = true
    } else if (!validateEmail(email)) {
      setEmailError('Informe um e-mail válido (ex: seu.nome@duoc.com.br).')
      hasError = true
    }

    if (!password.trim()) {
      setPasswordError('A senha é obrigatória.')
      hasError = true
    } else if (password.length < 6) {
      setPasswordError('A senha deve ter no mínimo 6 caracteres.')
      hasError = true
    }

    if (hasError) return

    setIsLoading(true)

    try {
      await login(email.trim().toLowerCase(), password)
      toast.success('Autenticado com sucesso!')
      const origem = (location.state as { from?: { pathname?: unknown } } | null)?.from?.pathname
      const destino = typeof origem === 'string' && origem.startsWith('/') && !origem.startsWith('//')
        ? origem : '/'
      navigate(destino, { replace: true })
    } catch (erro) {
      if (erro instanceof ErroAuth && erro.status === 403 && /senha expirada/i.test(erro.message)) {
        navigate('/trocar-senha', { replace: true, state: { email: email.trim().toLowerCase() } })
        return
      }
      const mensagem = erro instanceof ErroAuth ? erro.message : 'Não foi possível acessar o servidor.'
      setPasswordError(mensagem)
    } finally {
      setIsLoading(false)
    }
  }

  const handleRecoverySubmit = (e: FormEvent) => {
    e.preventDefault()
    setRecoveryError('')

    const isEmailValid = validateEmail(recoveryIdentifier)
    const isCPFValid = validateCPF(recoveryIdentifier)

    if (!isEmailValid && !isCPFValid) {
      setRecoveryError(
        'Por favor, informe um CPF válido (11 dígitos) ou e-mail cadastrado.',
      )
      return
    }

    // Ainda não existe backend de recuperação de credenciais (RF17).
    setRecoveryError('Recuperação automática ainda indisponível. Contate o administrador da DUOC.')
  }

  return (
    <div className="min-h-screen w-screen grid grid-cols-1 lg:grid-cols-2 bg-surface">
      {/* 1. Coluna Esquerda: Hero Banner Institucional (apenas em telas grandes) */}
      <div className="hidden lg:flex relative flex-col justify-between p-12 overflow-hidden bg-dark">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1686150360446-ee7eae8026cf?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent" />

        {/* Topo do Banner */}
        <div className="relative z-10">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white/70">
            Arquitetura · Engenharia · Gestão
          </p>
        </div>

        {/* Rodapé do Banner */}
        <div className="relative z-10 max-w-lg space-y-4">
          <div className="w-12 h-1 bg-gold rounded-full" />
          <h2 className="text-3xl xl:text-4xl font-bold text-white leading-tight tracking-tight">
            Solidez em cada projeto.
            <br />
            Clareza em cada decisão.
          </h2>
          <p className="text-sm text-white/80 leading-relaxed font-light">
            O cuidado que transforma espaços também está presente na gestão do
            nosso negócio.
          </p>
        </div>
      </div>

      {/* 2. Coluna Direita: Formulário de Autenticação */}
      <div className="flex items-center justify-center p-6 sm:p-12 lg:p-16 bg-surface overflow-y-auto">
        <div className="w-full max-w-md space-y-8 py-6">
          {/* Cabeçalho do Formulário / Logotipo */}
          <div className="space-y-4">
            <div>
              <img
                src="/duoc-finance-logo.svg"
                alt="DUOC Finance"
                className="h-11 w-auto"
              />
            </div>

            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Bem-vindo à DUOC Finance
              </span>
              <h1 className="text-2xl font-bold text-dark mt-1">
                Uma gestão que conecta.
              </h1>
              <p className="text-sm text-muted mt-1 leading-relaxed">
                Acesse seu espaço de trabalho e acompanhe o que faz nossos
                projetos acontecerem.
              </p>
            </div>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <Input
              label="E-mail"
              type="email"
              placeholder="seu.nome@duoc.com.br"
              leftIcon={Mail}
              value={email}
              error={emailError}
              onChange={(e) => handleEmailChange(e.target.value)}
              disabled={isLoading}
              required
            />

            <Input
              label="Senha"
              type={showPassword ? 'text' : 'password'}
              placeholder="Digite sua senha"
              leftIcon={Lock}
              value={password}
              error={passwordError}
              onChange={(e) => handlePasswordChange(e.target.value)}
              disabled={isLoading}
              required
              rightElement={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-muted hover:text-dark transition-colors cursor-pointer p-1"
                  aria-label={showPassword ? 'Ocultar senha' : 'Ver senha'}
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              }
            />

            {/* RF17: recuperação ainda não integrada ao backend. */}
            <div className="flex items-center justify-end text-xs pt-1">
              <button
                type="button"
                onClick={() => {
                  setIsRecoveryModalOpen(true)
                  setRecoverySuccess(false)
                  setRecoveryIdentifier('')
                  setRecoveryError('')
                }}
                className="text-primary hover:text-primary-dark font-medium transition-colors cursor-pointer"
              >
                Esqueci minha senha
              </button>
            </div>

            {/* Botão de Submissão com Estado de Carregamento */}
            <Button
              type="submit"
              variant="primary"
              disabled={isLoading}
              className="w-full h-11 text-sm font-semibold flex items-center justify-center gap-2 mt-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Validando credenciais...</span>
                </>
              ) : (
                <>
                  <span>Entrar</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </form>

          {/* Acesso requer credenciais reais; não oferecer contas demonstrativas. */}
          <p className="text-center text-xs text-muted pt-2">
            Entre com suas credenciais corporativas autorizadas.
          </p>
        </div>
      </div>

      {/* 3. Modal de Primeiro Acesso ou Recuperação de Credenciais (RF17) */}
      {isRecoveryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-surface w-full max-w-md rounded-2xl border border-border shadow-2xl p-6 space-y-5">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-xl bg-primary-light flex items-center justify-center text-primary">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-dark">
                    Recuperação & Primeiro Acesso
                  </h3>
                  <p className="text-xs text-muted">
                    RF17 · Ativação de credenciais
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsRecoveryModalOpen(false)}
                className="text-muted hover:text-dark p-1 rounded-md"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {recoverySuccess ? (
              <div className="space-y-4 text-center py-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-dark">
                    Instruções enviadas!
                  </h4>
                  <p className="text-xs text-muted leading-relaxed">
                    Se o dado informado constar na base da DUOC Finance, um link
                    seguro com token temporário foi emitido para o seu e-mail
                    cadastrado.
                  </p>
                </div>
                <Button
                  variant="primary"
                  className="w-full mt-4"
                  onClick={() => setIsRecoveryModalOpen(false)}
                >
                  Concluir
                </Button>
              </div>
            ) : (
              <form onSubmit={handleRecoverySubmit} className="space-y-4">
                <p className="text-xs text-muted leading-relaxed">
                  Informe o seu **CPF** ou **e-mail corporativo**. Verificaremos
                  a base unificada cadastral para liberar sua senha de acesso ou
                  redefinição.
                </p>

                <Input
                  label="CPF ou E-mail Cadastrado"
                  placeholder="000.000.000-00 ou nome@duoc.com.br"
                  value={recoveryIdentifier}
                  error={recoveryError}
                  onChange={(e) => {
                    const val = e.target.value
                    // Se estiver digitando números, aplica máscara de CPF
                    if (
                      /^\d+$/.test(val.replace(/\D/g, '')) &&
                      !val.includes('@')
                    ) {
                      setRecoveryIdentifier(maskCPF(val))
                    } else {
                      setRecoveryIdentifier(val)
                    }
                  }}
                  disabled={isRecovering}
                  required
                />

                <div className="flex gap-2.5 pt-2">
                  <Button
                    type="button"
                    variant="ghost"
                    className="flex-1"
                    onClick={() => setIsRecoveryModalOpen(false)}
                    disabled={isRecovering}
                  >
                    Cancelar
                  </Button>
                  <Button
                    type="submit"
                    variant="primary"
                    className="flex-1 flex items-center justify-center gap-1.5"
                    disabled={isRecovering}
                  >
                    {isRecovering ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        <span>Verificando...</span>
                      </>
                    ) : (
                      <span>Enviar Instruções</span>
                    )}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
