import { useEffect, useMemo, useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Eye,
  FileText,
  Hourglass,
  Loader2,
  RotateCcw,
  ThumbsDown,
  UserRound,
  X,
} from "lucide-react";
import Button from "../components/ui/Button";
import HistoricoRvt from "../components/rvt/HistoricoRvt";
import { useToast } from "../components/ui/useToast";
import { RvtService } from "../services/rvt.service";
import type { RvtGestor } from "../types/rvt";
import {
  PARECER_MAX_CARACTERES,
  PARECER_MIN_CARACTERES,
  formatarDataJornada,
  formatarHoras,
  formatarTamanhoArquivo,
} from "../utils/rvt";
import { abrirEvidenciaEmNovaAba } from "../utils/evidencia";

/**
 * RF32 — fila de homologação do Gestor Operacional: apontamentos pendentes
 * dos contratos sob sua responsabilidade, mais antigos primeiro.
 * A rejeição exige parecer (RN30) e devolve o registro ao técnico, que
 * tem cinco dias úteis para corrigir e reenviar (RN02).
 */
export default function RvtHomologacaoPage() {
  const toast = useToast();

  const [pendentes, setPendentes] = useState<RvtGestor[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [erroCarga, setErroCarga] = useState<string | null>(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  /** Apontamento com o formulário de rejeição aberto */
  const [rejeitandoId, setRejeitandoId] = useState<string | null>(null);
  const [parecer, setParecer] = useState("");
  const [erroParecer, setErroParecer] = useState("");
  const [processandoId, setProcessandoId] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function carregar() {
      try {
        setIsLoading(true);
        setErroCarga(null);
        const lista = await RvtService.listarPendentesHomologacao();
        if (isMounted) setPendentes(lista);
      } catch (err) {
        const msg = err instanceof Error ? err.message : "Erro ao carregar apontamentos pendentes.";
        if (isMounted) {
          setErroCarga(msg);
          toast.error(msg);
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    carregar();
    return () => {
      isMounted = false;
    };
  }, [refreshTrigger, toast]);

  const metricas = useMemo(
    () => ({
      total: pendentes.length,
      horas: pendentes.reduce((soma, r) => soma + r.horasTrabalhadas, 0),
      contratos: new Set(pendentes.map((r) => r.contrato.id)).size,
    }),
    [pendentes]
  );

  const abrirRejeicao = (id: string) => {
    setRejeitandoId(id);
    setParecer("");
    setErroParecer("");
  };

  const homologar = async (rvt: RvtGestor) => {
    try {
      setProcessandoId(rvt.id);
      await RvtService.deliberar(rvt.id, { decisao: "HOMOLOGAR" });
      setPendentes((prev) => prev.filter((r) => r.id !== rvt.id));
      toast.success(`Apontamento de ${formatarDataJornada(rvt.dataJornada)} homologado.`);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Erro ao homologar o apontamento.");
      // 409: outro gestor/aba já decidiu; recarrega para refletir o estado real
      setRefreshTrigger((n) => n + 1);
    } finally {
      setProcessandoId(null);
    }
  };

  const rejeitar = async (rvt: RvtGestor) => {
    const texto = parecer.trim();
    if (texto.length < PARECER_MIN_CARACTERES) {
      setErroParecer(`Explique o motivo com pelo menos ${PARECER_MIN_CARACTERES} caracteres (RN30).`);
      return;
    }
    try {
      setProcessandoId(rvt.id);
      await RvtService.deliberar(rvt.id, { decisao: "REJEITAR", parecer: texto });
      setPendentes((prev) => prev.filter((r) => r.id !== rvt.id));
      setRejeitandoId(null);
      toast.success("Apontamento rejeitado. O técnico tem 5 dias úteis para corrigir e reenviar.");
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Erro ao rejeitar o apontamento.");
      setRefreshTrigger((n) => n + 1);
    } finally {
      setProcessandoId(null);
    }
  };

  const abrirEvidencia = async (rvtId: string, evidenciaId: string) => {
    try {
      await abrirEvidenciaEmNovaAba(rvtId, evidenciaId);
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Não foi possível abrir o anexo.");
    }
  };

  return (
    <div className="space-y-5 sm:space-y-6 pb-12">
      {/* 1. Cabeçalho */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-bold text-dark">Homologação de Apontamentos</h1>
            <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary-light text-primary border border-primary/20">
              RF32 · CAR-02
            </span>
          </div>
          <p className="text-xs text-muted mt-1 leading-relaxed">
            Apontamentos pendentes dos contratos sob sua responsabilidade. Só horas homologadas seguem para o fechamento.
          </p>
        </div>
        <Button variant="secondary" size="sm" onClick={() => setRefreshTrigger((n) => n + 1)} disabled={isLoading}>
          <RotateCcw className="w-3.5 h-3.5" />
          Atualizar
        </Button>
      </div>

      {/* 2. Mini métricas */}
      <div className="grid grid-cols-3 gap-3">
        <div className="bg-surface border border-border p-3.5 rounded-xl shadow-2xs flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <Hourglass className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[11px] font-semibold text-muted uppercase">Pendentes</p>
            <p className="text-lg font-bold text-amber-600">{metricas.total}</p>
          </div>
        </div>
        <div className="bg-surface border border-border p-3.5 rounded-xl shadow-2xs flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[11px] font-semibold text-muted uppercase">Horas a validar</p>
            <p className="text-lg font-bold text-blue-600">{formatarHoras(metricas.horas)}</p>
          </div>
        </div>
        <div className="bg-surface border border-border p-3.5 rounded-xl shadow-2xs flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-surface-subtle text-dark flex items-center justify-center shrink-0">
            <ClipboardCheck className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[11px] font-semibold text-muted uppercase">Contratos</p>
            <p className="text-lg font-bold text-dark">{metricas.contratos}</p>
          </div>
        </div>
      </div>

      {/* 3. Fila */}
      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-20 space-y-3">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
          <p className="text-sm text-muted">Carregando apontamentos pendentes...</p>
        </div>
      ) : erroCarga ? (
        <div className="bg-surface border border-border rounded-xl p-8 text-center space-y-3 shadow-xs">
          <AlertCircle className="w-8 h-8 text-primary mx-auto" />
          <p className="text-sm text-dark font-semibold">Não foi possível carregar a fila de homologação</p>
          <p className="text-xs text-muted">{erroCarga}</p>
          <Button variant="secondary" size="sm" onClick={() => setRefreshTrigger((n) => n + 1)}>
            <RotateCcw className="w-3.5 h-3.5" />
            Tentar novamente
          </Button>
        </div>
      ) : pendentes.length === 0 ? (
        <div className="bg-surface border border-border rounded-xl p-8 text-center space-y-3 shadow-xs">
          <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <p className="text-sm text-dark font-semibold">Nenhum apontamento aguardando homologação</p>
          <p className="text-xs text-muted">
            Aparecem aqui os apontamentos dos contratos em que você é o gestor responsável.
          </p>
        </div>
      ) : (
        <ul className="space-y-3">
          {pendentes.map((rvt) => {
            const emRejeicao = rejeitandoId === rvt.id;
            const processando = processandoId === rvt.id;
            return (
              <li key={rvt.id} className="bg-surface border border-border rounded-xl p-4 sm:p-5 shadow-2xs space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-muted uppercase tracking-wider">
                      {formatarDataJornada(rvt.dataJornada)}
                    </p>
                    <h3 className="text-sm font-bold text-dark mt-0.5">
                      {rvt.contrato.codigo} · {rvt.contrato.nome}
                    </h3>
                    <p className="text-[11px] text-muted flex items-center gap-1 mt-0.5" title={rvt.colaboradorId}>
                      <UserRound className="w-3 h-3" />
                      Colaborador {rvt.colaboradorId.slice(0, 8)}
                    </p>
                  </div>
                  <span className="flex items-center gap-1.5 text-sm font-bold text-dark shrink-0">
                    <Clock className="w-4 h-4 text-primary" />
                    {formatarHoras(rvt.horasTrabalhadas)}
                  </span>
                </div>

                <p className="text-xs text-dark/80 leading-relaxed whitespace-pre-line">{rvt.escopoExecutado}</p>

                {rvt.evidencias.length > 0 ? (
                  <ul className="flex flex-wrap gap-2" aria-label="Evidências anexadas">
                    {rvt.evidencias.map((ev) => (
                      <li key={ev.id}>
                        <button
                          type="button"
                          onClick={() => abrirEvidencia(rvt.id, ev.id)}
                          className="h-9 px-3 rounded-lg border border-border bg-surface-subtle text-xs text-dark flex items-center gap-1.5 hover:bg-border/60 cursor-pointer max-w-[16rem]"
                        >
                          <FileText className="w-3.5 h-3.5 shrink-0" />
                          <span className="truncate">{ev.nomeOriginal}</span>
                          <span className="text-muted shrink-0">{formatarTamanhoArquivo(ev.tamanhoBytes)}</span>
                          <Eye className="w-3.5 h-3.5 shrink-0 text-primary" />
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-[11px] text-muted">Sem anexos.</p>
                )}

                <HistoricoRvt historico={rvt.historico} />

                {emRejeicao ? (
                  <div className="pt-3 border-t border-border/60 space-y-2">
                    <label htmlFor={`parecer-${rvt.id}`} className="block text-xs font-semibold text-dark">
                      Parecer da rejeição *
                    </label>
                    <textarea
                      id={`parecer-${rvt.id}`}
                      rows={3}
                      value={parecer}
                      maxLength={PARECER_MAX_CARACTERES}
                      onChange={(e) => {
                        setParecer(e.target.value);
                        setErroParecer("");
                      }}
                      aria-invalid={Boolean(erroParecer)}
                      placeholder="Ex.: As horas não conferem com o registro da portaria; anexe a foto do quadro finalizado."
                      className={`w-full text-base sm:text-sm text-dark bg-surface border rounded-lg p-3 placeholder:text-muted/60 focus:outline-hidden focus:ring-2 focus:ring-primary/20 resize-none ${
                        erroParecer ? "border-primary" : "border-border"
                      }`}
                    />
                    <div className="flex items-start justify-between gap-3">
                      <p className={`text-xs ${erroParecer ? "text-primary font-medium" : "text-muted"}`}>
                        {erroParecer || `Obrigatório, mínimo de ${PARECER_MIN_CARACTERES} caracteres (RN30). O técnico verá este texto.`}
                      </p>
                      <span className={`text-xs shrink-0 ${parecer.trim().length >= PARECER_MIN_CARACTERES ? "text-emerald-600" : "text-muted"}`}>
                        {parecer.trim().length}/{PARECER_MIN_CARACTERES}
                      </span>
                    </div>
                    <div className="flex flex-col-reverse sm:flex-row sm:justify-end gap-2">
                      <Button variant="ghost" size="sm" onClick={() => setRejeitandoId(null)} disabled={processando}>
                        <X className="w-3.5 h-3.5" />
                        Cancelar
                      </Button>
                      <Button variant="primary" size="sm" onClick={() => rejeitar(rvt)} disabled={processando}>
                        {processando ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <ThumbsDown className="w-3.5 h-3.5" />}
                        Confirmar rejeição
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="pt-3 border-t border-border/60 flex flex-col-reverse sm:flex-row sm:justify-end gap-2">
                    <Button variant="outline" size="sm" onClick={() => abrirRejeicao(rvt.id)} disabled={processando}>
                      <ThumbsDown className="w-3.5 h-3.5" />
                      Rejeitar
                    </Button>
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => homologar(rvt)}
                      disabled={processando}
                      className="!bg-emerald-600 hover:!bg-emerald-700"
                    >
                      {processando ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <CheckCircle2 className="w-3.5 h-3.5" />}
                      Homologar
                    </Button>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
