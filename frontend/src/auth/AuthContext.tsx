import { createContext, useContext, useEffect, useState, useSyncExternalStore } from 'react'
import type { ReactNode } from 'react'
import { AuthApi, type UsuarioAutenticado } from '../services/auth.service'

interface ContextoAuth {
  usuario: UsuarioAutenticado | null
  autenticado: boolean
  carregando: boolean
  login: (email: string, senha: string) => Promise<void>
  logout: () => Promise<void>
  trocarSenha: (email: string, senhaAtual: string, senhaNova: string) => Promise<void>
}

const AuthContext = createContext<ContextoAuth | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [carregando, setCarregando] = useState(true)
  const sessao = useSyncExternalStore(AuthApi.inscrever, AuthApi.obterEstado)

  useEffect(() => {
    let ativo = true
    void AuthApi.restaurar().finally(() => {
      if (ativo) setCarregando(false)
    })
    return () => { ativo = false }
  }, [])

  return (
    <AuthContext.Provider value={{
      usuario: sessao.usuario,
      autenticado: Boolean(sessao.usuario && sessao.accessToken),
      carregando,
      login: AuthApi.login,
      logout: AuthApi.logout,
      trocarSenha: AuthApi.trocarSenha,
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): ContextoAuth {
  const contexto = useContext(AuthContext)
  if (!contexto) throw new Error('useAuth deve estar dentro de AuthProvider.')
  return contexto
}
