import { useEffect, useState } from 'react'
import { History, Loader2, RefreshCw, ShieldCheck, UserRoundCog } from 'lucide-react'
import { useAuth } from '../auth/AuthContext'
import { PAPEIS, type Papel } from '../auth/permissoes'
import Button from '../components/ui/Button'
import { useToast } from '../components/ui/useToast'
import { AcessosService } from '../services/acessos.service'
import type { EventoAcesso, UsuarioAcesso } from '../services/acessos.service'

const nomesPapeis: Record<Papel, string> = {
  ADMIN_SISTEMA: 'Administrador do Sistema',
  ADMIN_FINANCEIRO: 'Administrador Financeiro',
  GESTOR_OBRAS: 'Gestor de Obras',
  TECNICO_CAMPO: 'Técnico de Campo',
}

function resumoEvento(evento: EventoAcesso): string {
  if (evento.acao === 'PAPEL_ALTERADO') {
    return `Papel: ${evento.papelAnterior ? nomesPapeis[evento.papelAnterior] : '—'} → ${
      evento.papelNovo ? nomesPapeis[evento.papelNovo] : '—'
    }`
  }
  const statusAnterior = evento.ativoAnterior ? 'ativa' : 'desativada'
  const statusNovo = evento.ativoNovo ? 'ativa' : 'desativada'
  return `Conta: ${statusAnterior} → ${statusNovo}`
}

export default function GestaoAcessosPage() {
  const { usuario: usuarioAtual } = useAuth()
  const toast = useToast()
  const [usuarios, setUsuarios] = useState<UsuarioAcesso[]>([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState('')
  const [operacaoId, setOperacaoId] = useState<string | null>(null)
  const [historicoAberto, setHistoricoAberto] = useState<string | null>(null)
  const [eventos, setEventos] = useState<Record<string, EventoAcesso[]>>({})
  const [historicoCarregando, setHistoricoCarregando] = useState<string | null>(null)

  async function carregarUsuarios() {
    try {
      setUsuarios(await AcessosService.listarUsuarios())
    } catch (falha: unknown) {
      const mensagem = falha instanceof Error ? falha.message : 'Não foi possível carregar os usuários.'
      setErro(mensagem)
    } finally {
      setCarregando(false)
    }
  }

  useEffect(() => {
    let montado = true
    AcessosService.listarUsuarios()
      .then((lista) => {
        if (montado) setUsuarios(lista)
      })
      .catch((falha: unknown) => {
        if (!montado) return
        setErro(falha instanceof Error ? falha.message : 'Não foi possível carregar os usuários.')
      })
      .finally(() => {
        if (montado) setCarregando(false)
      })
    return () => {
      montado = false
    }
  }, [])

  async function salvarPapel(usuario: UsuarioAcesso, papel: Papel) {
    if (papel === usuario.papel) return
    setOperacaoId(usuario.id)
    try {
      const atualizado = await AcessosService.alterarPapel(usuario.id, papel)
      setUsuarios((lista) => lista.map((item) => item.id === usuario.id ? atualizado : item))
      invalidarHistorico(usuario.id)
      toast.success(`Papel de ${usuario.email} atualizado.`, 'Acesso atualizado')
    } catch (falha: unknown) {
      toast.error(falha instanceof Error ? falha.message : 'Não foi possível alterar o papel.')
    } finally {
      setOperacaoId(null)
    }
  }

  async function alternarStatus(usuario: UsuarioAcesso) {
    setOperacaoId(usuario.id)
    try {
      const atualizado = await AcessosService.alterarStatus(usuario.id, !usuario.ativo)
      setUsuarios((lista) => lista.map((item) => item.id === usuario.id ? atualizado : item))
      invalidarHistorico(usuario.id)
      toast.success(`Conta de ${usuario.email} ${atualizado.ativo ? 'ativada' : 'desativada'}.`)
    } catch (falha: unknown) {
      toast.error(falha instanceof Error ? falha.message : 'Não foi possível alterar o status da conta.')
    } finally {
      setOperacaoId(null)
    }
  }

  function invalidarHistorico(id: string) {
    setEventos((cache) => {
      const atualizado = { ...cache }
      delete atualizado[id]
      return atualizado
    })
    setHistoricoAberto((aberto) => aberto === id ? null : aberto)
  }

  async function alternarHistorico(id: string) {
    if (historicoAberto === id) {
      setHistoricoAberto(null)
      return
    }
    setHistoricoAberto(id)
    if (eventos[id]) return
    setHistoricoCarregando(id)
    try {
      const historico = await AcessosService.historico(id)
      setEventos((atual) => ({ ...atual, [id]: historico }))
    } catch (falha: unknown) {
      toast.error(falha instanceof Error ? falha.message : 'Não foi possível carregar o histórico.')
      setHistoricoAberto(null)
    } finally {
      setHistoricoCarregando(null)
    }
  }

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-3 border-b border-border pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Segurança · RF14</p>
          <h1 className="mt-1 text-2xl font-bold text-dark">Gestão de acessos</h1>
          <p className="mt-1 text-sm text-muted">Gerencie os quatro papéis e o status das contas do sistema.</p>
        </div>
        <div className="flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-xs text-muted">
          <ShieldCheck className="h-4 w-4 text-primary" />
          Alterações registradas em auditoria
        </div>
      </header>

      <section className="overflow-hidden rounded-xl border border-border bg-surface shadow-xs">
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <div className="flex items-center gap-2">
            <UserRoundCog className="h-5 w-5 text-primary" />
            <h2 className="font-semibold text-dark">Usuários e perfis</h2>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              setCarregando(true)
              setErro('')
              void carregarUsuarios()
            }}
            disabled={carregando}
          >
            <RefreshCw className={`h-4 w-4 ${carregando ? 'animate-spin' : ''}`} />
            Atualizar
          </Button>
        </div>

        {erro && (
          <div role="alert" className="m-4 flex items-center justify-between gap-3 rounded-lg border border-primary/20 bg-primary-light p-4 text-sm text-primary-dark">
            <span>{erro}</span>
            <Button
              size="sm"
              onClick={() => {
                setCarregando(true)
                setErro('')
                void carregarUsuarios()
              }}
            >
              Tentar novamente
            </Button>
          </div>
        )}

        {carregando ? (
          <output className="flex items-center justify-center gap-2 p-12 text-sm text-muted">
            <Loader2 className="h-4 w-4 animate-spin" /> Carregando usuários…
          </output>
        ) : !erro && usuarios.length === 0 ? (
          <p className="p-8 text-center text-sm text-muted">Nenhum usuário cadastrado.</p>
        ) : !erro && (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] text-left text-sm">
              <thead className="bg-surface-subtle text-xs uppercase tracking-wide text-muted">
                <tr>
                  <th scope="col" className="px-5 py-3 font-semibold">Usuário</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Papel</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Status</th>
                  <th scope="col" className="px-5 py-3 font-semibold">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {usuarios.map((usuario) => {
                  const proprioUsuario = usuario.id === usuarioAtual?.id
                  const ocupado = operacaoId === usuario.id
                  const eventosUsuario = eventos[usuario.id] ?? []
                  return (
                    <tr key={usuario.id} className="align-top">
                      <td className="px-5 py-4">
                        <div className="font-medium text-dark">{usuario.email}</div>
                        {proprioUsuario && <div className="mt-1 text-xs text-muted">Sua conta</div>}
                      </td>
                      <td className="px-5 py-4">
                        <select
                          aria-label={`Papel de ${usuario.email}`}
                          className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-dark focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                          value={usuario.papel}
                          disabled={ocupado || proprioUsuario}
                          onChange={(evento) => {
                            const papel = PAPEIS.find((item) => item === evento.target.value)
                            if (papel) void salvarPapel(usuario, papel)
                          }}
                        >
                          {PAPEIS.map((papel) => (
                            <option key={papel} value={papel}>{nomesPapeis[papel]}</option>
                          ))}
                        </select>
                      </td>
                      <td className="px-5 py-4">
                        <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                          usuario.ativo
                            ? 'bg-emerald-50 text-emerald-700'
                            : 'bg-surface-subtle text-muted'
                        }`}>
                          {usuario.ativo ? 'Ativa' : 'Desativada'}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <div className="flex flex-wrap gap-2">
                          <Button
                            size="sm"
                            variant={usuario.ativo ? 'secondary' : 'outline'}
                            disabled={ocupado || proprioUsuario}
                            onClick={() => void alternarStatus(usuario)}
                          >
                            {ocupado ? 'Salvando…' : usuario.ativo ? 'Desativar' : 'Ativar'}
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            aria-expanded={historicoAberto === usuario.id}
                            onClick={() => void alternarHistorico(usuario.id)}
                          >
                            <History className="h-4 w-4" />
                            Histórico
                          </Button>
                        </div>
                        {proprioUsuario && (
                          <p className="mt-2 max-w-48 text-xs text-muted">Sua conta não pode ter o papel alterado ou ser desativada por aqui.</p>
                        )}
                        {historicoAberto === usuario.id && (
                          <div className="mt-3 rounded-lg border border-border bg-surface-subtle p-3">
                            <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted">Histórico de acesso</h3>
                            {historicoCarregando === usuario.id ? (
                              <p className="text-xs text-muted">Carregando histórico…</p>
                            ) : eventosUsuario.length === 0 ? (
                              <p className="text-xs text-muted">Nenhuma alteração registrada.</p>
                            ) : (
                              <ul className="space-y-2">
                                {eventosUsuario.map((evento) => (
                                  <li key={evento.id} className="border-l-2 border-primary/30 pl-2 text-xs">
                                    <p className="font-medium text-dark">{resumoEvento(evento)}</p>
                                    <p className="mt-0.5 text-muted">
                                      {new Date(evento.ocorridoEm).toLocaleString('pt-BR')} · por {evento.operador.email}
                                    </p>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        )}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  )
}
