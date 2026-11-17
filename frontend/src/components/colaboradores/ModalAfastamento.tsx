import { useState } from 'react'
import type { FormEvent } from 'react'
import { AlertTriangle, X, ShieldAlert, Loader2 } from 'lucide-react'
import Button from '../ui/Button'
import type { Colaborador } from '../../types/colaborador'
import { ColaboradoresService } from '../../services/colaboradores.service'
import { useToast } from '../ui/useToast'

interface ModalAfastamentoProps {
  colaborador: Colaborador
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

export default function ModalAfastamento({
  colaborador,
  isOpen,
  onClose,
  onSuccess,
}: ModalAfastamentoProps) {
  const toast = useToast()

  const [novoStatus, setNovoStatus] = useState<'Afastado' | 'Desligado'>(
    'Afastado',
  )
  const [motivo, setMotivo] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    if (!motivo.trim()) {
      setError('O motivo ou justificativa é obrigatório conforme a regra RN23.')
      return
    }

    try {
      setIsLoading(true)
      setError('')

      await ColaboradoresService.afastarColaborador(
        colaborador.id,
        motivo,
        novoStatus,
      )

      toast.success(
        `Colaborador marcado como "${novoStatus}". Credenciais suspensas com sucesso (RN23).`,
        'Operação Concluída',
      )

      onSuccess()
      onClose()
    } catch (err: unknown) {
      const msg =
        err instanceof Error ? err.message : 'Erro ao processar afastamento.'
      setError(msg)
      toast.error(msg)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-dark/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-surface w-full max-w-lg rounded-2xl border border-border shadow-2xl overflow-hidden">
        {/* Cabeçalho de Alerta */}
        <div className="p-6 border-b border-border flex items-start justify-between bg-primary-light/40">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0 shadow-xs">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-dark">
                Afastar ou Desligar Colaborador
              </h3>
              <p className="text-xs text-muted">
                RF03 / RN23 · Revogação imediata de credenciais
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="text-muted hover:text-dark p-1 rounded-md"
            aria-label="Fechar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Formulário do Modal */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {/* Dados do Colaborador */}
          <div className="p-3.5 bg-surface-subtle border border-border rounded-xl flex items-center justify-between">
            <div>
              <p className="text-xs text-muted">Colaborador selecionado:</p>
              <h4 className="text-sm font-bold text-dark">
                {colaborador.nome}
              </h4>
              <p className="text-xs text-muted">
                {colaborador.cargo} · {colaborador.email}
              </p>
            </div>
            <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-surface border border-border text-dark">
              Status atual: {colaborador.status}
            </span>
          </div>

          {/* Aviso da Regra de Negócio RN23 */}
          <div className="flex items-start gap-2.5 p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs">
            <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Regra de Negócio RN23:</strong> Ao confirmar o afastamento
              ou desligamento, todas as credenciais de acesso corporativo serão
              suspensas de forma imediata no sistema.
            </p>
          </div>

          {/* Seleção do Tipo de Operação */}
          <fieldset className="min-w-0 space-y-1.5 border-0 p-0">
            <legend className="block text-xs font-semibold text-dark">
              Tipo de Ocorrência Operacional
            </legend>
            <div className="grid grid-cols-2 gap-3">
              <div
                className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all ${
                  novoStatus === 'Afastado'
                    ? 'border-primary bg-primary-light text-primary font-semibold'
                    : 'border-border bg-surface text-dark hover:bg-surface-subtle'
                }`}
              >
                <input
                  id="status-afastado"
                  type="radio"
                  name="novoStatus"
                  value="Afastado"
                  checked={novoStatus === 'Afastado'}
                  onChange={() => setNovoStatus('Afastado')}
                  className="accent-primary"
                />
                <label htmlFor="status-afastado" className="flex-1 text-xs">
                  <span className="block font-bold">Afastamento</span>
                  <span className="block text-[11px] opacity-80">
                    Licença médica / INSS / temporário
                  </span>
                </label>
              </div>

              <div
                className={`flex items-center gap-2.5 p-3 rounded-xl border cursor-pointer transition-all ${
                  novoStatus === 'Desligado'
                    ? 'border-primary bg-primary-light text-primary font-semibold'
                    : 'border-border bg-surface text-dark hover:bg-surface-subtle'
                }`}
              >
                <input
                  id="status-desligado"
                  type="radio"
                  name="novoStatus"
                  value="Desligado"
                  checked={novoStatus === 'Desligado'}
                  onChange={() => setNovoStatus('Desligado')}
                  className="accent-primary"
                />
                <label htmlFor="status-desligado" className="flex-1 text-xs">
                  <span className="block font-bold">Desligamento</span>
                  <span className="block text-[11px] opacity-80">
                    Rescisão de contrato permanente
                  </span>
                </label>
              </div>
            </div>
          </fieldset>

          {/* Justificativa / Motivo Obrigatório */}
          <div className="space-y-1.5">
            <label
              htmlFor="motivo"
              className="block text-xs font-semibold text-dark"
            >
              Motivo e Justificativa da Ação{' '}
              <span className="text-primary">*</span>
            </label>
            <textarea
              id="motivo"
              rows={3}
              value={motivo}
              onChange={(e) => {
                setMotivo(e.target.value)
                if (error) setError('')
              }}
              placeholder="Descreva a razão do afastamento ou os termos da rescisão contratual..."
              className="w-full text-xs text-dark bg-surface border border-border rounded-xl p-3 placeholder:text-muted/60 focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
              disabled={isLoading}
            />
            {error && (
              <p className="text-xs text-primary font-medium">{error}</p>
            )}
          </div>

          {/* Botões de Ação */}
          <div className="flex items-center justify-end gap-3 pt-2">
            <Button
              type="button"
              variant="ghost"
              onClick={onClose}
              disabled={isLoading}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              variant="primary"
              disabled={isLoading}
              className="flex items-center gap-1.5"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Registrando...</span>
                </>
              ) : (
                <span>Confirmar e Revogar Acesso</span>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
