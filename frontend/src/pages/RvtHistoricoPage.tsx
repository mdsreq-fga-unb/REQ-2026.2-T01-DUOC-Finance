import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Plus,
  ClipboardList,
  Clock,
  CheckCircle2,
  Hourglass,
  Camera,
  Loader2,
  HardHat,
  AlertCircle,
  RotateCcw,
  Lock,
  CalendarClock,
  PencilLine,
  MessageSquareWarning,
} from "lucide-react";
import Button from "../components/ui/Button";
import { useToast } from "../components/ui/useToast";
import { RvtService } from "../services/rvt.service";
import type { Rvt, StatusRvt } from "../types/rvt";
import {
  STATUS_RVT_CONFIG,
  formatarDataJornada,
  formatarHoras,
  formatarPrazo,
  hojeISO,
  motivoTravaEdicao,
  ultimoParecerRejeicao,
} from "../utils/rvt";
import { useAuth } from "../auth/AuthContext";
import { PERMISSOES, possuiPapel } from "../auth/permissoes";
import HistoricoRvt from "../components/rvt/HistoricoRvt";

type FiltroStatus = StatusRvt | "TODOS";

const FILTROS: { valor: FiltroStatus; label: string }[] = [
  { valor: "TODOS", label: "Todos" },
  { valor: "PENDENTE", label: "Pendentes" },
  { valor: "HOMOLOGADO", label: "Homologados" },
  { valor: "REJEITADO", label: "Rejeitados" },
];

export default function RvtHistoricoPage() {
  const toast = useToast();
  const { usuario } = useAuth();
  const podeRetificar = possuiPapel(usuario?.papel, PERMISSOES.retificarRvt);

  const [apontamentos, setApontamentos] = useState<Rvt[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [erroCarga, setErroCarga] = useState<string | null>(null);
  const [filtro, setFiltro] = useState<FiltroStatus>("TODOS");
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const [temRascunho] = useState(() => Boolean(RvtService.carregarRascunho()));

  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      try {
        setIsLoading(true);
        setErroCarga(null);
        const lista = await RvtService.listarMeusApontamentos();
        if (isMounted) setApontamentos(lista);
      } catch (err) {
        const msg = err instanceof Error ? err.message : "Erro ao carregar apontamentos.";
        if (isMounted) {
          setErroCarga(msg);
          toast.error(msg);
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    loadData();
    return () => {
      isMounted = false;
    };
  }, [refreshTrigger, toast]);

  // Métricas do mês corrente
  const mesAtual = hojeISO().slice(0, 7);
  const metricas = useMemo(() => {
    const doMes = apontamentos.filter((r) => r.dataJornada.startsWith(mesAtual));
    return {
      total: apontamentos.length,
      pendentes: apontamentos.filter((r) => r.status === "PENDENTE").length,
      homologados: apontamentos.filter((r) => r.status === "HOMOLOGADO").length,
      horasMes: doMes
        .filter((r) => r.status !== "REJEITADO")
        .reduce((soma, r) => soma + r.horasTrabalhadas, 0),
    };
  }, [apontamentos, mesAtual]);

  const filtrados =
    filtro === "TODOS" ? apontamentos : apontamentos.filter((r) => r.status === filtro);

  return (
    <div className="space-y-5 sm:space-y-6 pb-12">
      {/* 1. Cabeçalho */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-bold text-dark">Meus Apontamentos</h1>
            <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary-light text-primary border border-primary/20">
              RVT · CAR-02
            </span>
          </div>
          <p className="text-xs text-muted mt-1 leading-relaxed">
            Histórico das jornadas enviadas à supervisão e situação de homologação de cada uma.
          </p>
        </div>

        <Link to="/rvt/novo" className="w-full sm:w-auto">
          <Button variant="primary" size="lg" className="w-full sm:w-auto sm:px-5 sm:py-2 sm:text-sm sm:rounded-lg shadow-xs">
            <Plus className="w-5 h-5 sm:w-4 sm:h-4" />
            <span>{temRascunho ? "Continuar Rascunho" : "Novo Apontamento"}</span>
          </Button>
        </Link>
      </div>

      {/* 2. Mini Métricas */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-surface border border-border p-3.5 rounded-xl shadow-2xs flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-surface-subtle text-dark flex items-center justify-center shrink-0">
            <ClipboardList className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[11px] font-semibold text-muted uppercase">Enviados</p>
            <p className="text-lg font-bold text-dark">{metricas.total}</p>
          </div>
        </div>

        <div className="bg-surface border border-border p-3.5 rounded-xl shadow-2xs flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <Hourglass className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[11px] font-semibold text-muted uppercase">Pendentes</p>
            <p className="text-lg font-bold text-amber-600">{metricas.pendentes}</p>
          </div>
        </div>

        <div className="bg-surface border border-border p-3.5 rounded-xl shadow-2xs flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[11px] font-semibold text-muted uppercase">Homologados</p>
            <p className="text-lg font-bold text-emerald-600">{metricas.homologados}</p>
          </div>
        </div>

        <div className="bg-surface border border-border p-3.5 rounded-xl shadow-2xs flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Clock className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[11px] font-semibold text-muted uppercase">Horas no mês</p>
            <p className="text-lg font-bold text-blue-600">{formatarHoras(metricas.horasMes)}</p>
          </div>
        </div>
      </div>

      {/* 3. Filtro por status */}
      <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0" role="tablist" aria-label="Filtrar por status">
        {FILTROS.map(({ valor, label }) => (
          <button
            key={valor}
            type="button"
            role="tab"
            aria-selected={filtro === valor}
            onClick={() => setFiltro(valor)}
            className={`h-10 px-4 rounded-full border text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
              filtro === valor
                ? "bg-primary text-white border-primary shadow-xs"
                : "bg-surface text-dark border-border hover:bg-surface-subtle"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* 4. Lista de cards */}
      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-20 space-y-3">
          <Loader2 className="w-8 h-8 text-primary animate-spin" />
          <p className="text-sm text-muted">Carregando seus apontamentos...</p>
        </div>
      ) : erroCarga ? (
        <div className="bg-surface border border-border rounded-xl p-8 text-center space-y-3 shadow-xs">
          <AlertCircle className="w-8 h-8 text-primary mx-auto" />
          <p className="text-sm text-dark font-semibold">Não foi possível carregar o histórico</p>
          <p className="text-xs text-muted">{erroCarga}</p>
          <Button variant="secondary" size="sm" onClick={() => setRefreshTrigger((n) => n + 1)}>
            <RotateCcw className="w-3.5 h-3.5" />
            Tentar novamente
          </Button>
        </div>
      ) : filtrados.length === 0 ? (
        <div className="bg-surface border border-border rounded-xl p-8 text-center space-y-3 shadow-xs">
          <div className="w-12 h-12 rounded-full bg-surface-subtle text-muted flex items-center justify-center mx-auto">
            <HardHat className="w-6 h-6" />
          </div>
          <p className="text-sm text-dark font-semibold">
            {apontamentos.length === 0
              ? "Você ainda não enviou nenhum apontamento"
              : "Nenhum apontamento com este status"}
          </p>
          {apontamentos.length === 0 && (
            <Link to="/rvt/novo" className="inline-block">
              <Button variant="primary" size="sm">
                <Plus className="w-3.5 h-3.5" />
                Registrar primeira jornada
              </Button>
            </Link>
          )}
        </div>
      ) : (
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {filtrados.map((rvt) => {
            const status = STATUS_RVT_CONFIG[rvt.status];
            const trava = motivoTravaEdicao(rvt);
            const parecer = ultimoParecerRejeicao(rvt);
            return (
              <li
                key={rvt.id}
                className="bg-surface border border-border rounded-xl p-4 shadow-2xs space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-muted uppercase tracking-wider">
                      {formatarDataJornada(rvt.dataJornada)}
                    </p>
                    <h3 className="text-sm font-bold text-dark truncate mt-0.5" title={rvt.contrato.nome}>
                      {rvt.contrato.nome}
                    </h3>
                    <p className="text-[11px] text-muted">{rvt.contrato.codigo}</p>
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border shrink-0 ${status.className}`}
                  >
                    {status.label}
                  </span>
                </div>

                <p className="text-xs text-dark/80 leading-relaxed line-clamp-2">{rvt.escopoExecutado}</p>

                {parecer && (
                  <div className="p-2.5 rounded-lg border border-red-200 bg-red-50 flex items-start gap-2">
                    <MessageSquareWarning className="w-4 h-4 text-red-700 shrink-0 mt-0.5" />
                    <p className="text-xs text-red-900 leading-relaxed">
                      <strong>Motivo da rejeição:</strong> {parecer}
                    </p>
                  </div>
                )}

                <div className="flex items-center gap-4 pt-2 border-t border-border/60 text-xs text-muted">
                  <span className="flex items-center gap-1.5 font-semibold text-dark">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    {formatarHoras(rvt.horasTrabalhadas)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Camera className="w-3.5 h-3.5" />
                    {rvt.evidencias.length === 0
                      ? "Sem fotos"
                      : `${rvt.evidencias.length} ${rvt.evidencias.length === 1 ? "anexo" : "anexos"}`}
                  </span>
                </div>

                {/* RF35 / RN02 — prazo de retificação ou mensagem de trava */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  {trava ? (
                    <p className="text-[11px] text-muted flex items-center gap-1.5">
                      <Lock className="w-3.5 h-3.5 shrink-0" />
                      {trava}
                    </p>
                  ) : (
                    <p className="text-[11px] text-blue-800 flex items-center gap-1.5">
                      <CalendarClock className="w-3.5 h-3.5 shrink-0" />
                      {rvt.status === "REJEITADO" ? "Corrija e reenvie" : "Retificável"} até{" "}
                      {rvt.prazoRetificacao && formatarPrazo(rvt.prazoRetificacao)}
                    </p>
                  )}
                  {!trava && podeRetificar && (
                    <Link to={`/rvt/${rvt.id}/retificar`} className="shrink-0">
                      <Button variant={rvt.status === "REJEITADO" ? "primary" : "secondary"} size="sm" className="w-full sm:w-auto">
                        <PencilLine className="w-3.5 h-3.5" />
                        {rvt.status === "REJEITADO" ? "Corrigir e reenviar" : "Retificar"}
                      </Button>
                    </Link>
                  )}
                </div>

                <HistoricoRvt historico={rvt.historico} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
