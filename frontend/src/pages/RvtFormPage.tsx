import { useState, useEffect, useRef, useMemo } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  ArrowLeft,
  HardHat,
  ClipboardList,
  Camera,
  FileText,
  Loader2,
  Send,
  Minus,
  Plus,
  X,
  CloudOff,
  Save,
  RotateCcw,
} from "lucide-react";
import Button from "../components/ui/Button";
import { useToast } from "../components/ui/useToast";
import { RvtService } from "../services/rvt.service";
import type { ContratoObra, Rvt } from "../types/rvt";
import {
  LIMITE_HORAS_DIARIAS,
  ESCOPO_MIN_CARACTERES,
  ESCOPO_MAX_CARACTERES,
  TAMANHO_MAXIMO_EVIDENCIA_BYTES,
  MAX_ARQUIVOS_POR_ENVIO,
  TIPOS_EVIDENCIA_ACEITOS,
  hojeISO,
  formatarHoras,
  formatarDataJornada,
  formatarTamanhoArquivo,
  parseHoras,
} from "../utils/rvt";
import { comprimirImagem } from "../utils/imagem";

const ATALHOS_HORAS = [4, 6, 8, 10];
const PASSO_HORAS = 0.5;

// text-base no celular evita o zoom automático do iOS ao focar o campo
const CLASSE_CAMPO_BASE =
  "w-full h-12 bg-surface text-dark rounded-lg border px-3.5 transition-all placeholder:text-muted/60 focus:outline-hidden focus:ring-2 focus:ring-primary/20";
const CLASSE_CAMPO = `${CLASSE_CAMPO_BASE} text-base sm:text-sm`;

function classeBorda(erro?: string) {
  return erro
    ? "border-primary focus:border-primary"
    : "border-border hover:border-dark/30 focus:border-primary";
}

interface FotoSelecionada {
  id: string;
  arquivo: File;
  previewUrl?: string;
}

export default function RvtFormPage() {
  const navigate = useNavigate();
  const toast = useToast();

  // Rascunho lido uma única vez na montagem (RNF04 — tolerância a quedas)
  const [rascunhoInicial] = useState(() => RvtService.carregarRascunho());

  const [contratos, setContratos] = useState<ContratoObra[]>([]);
  const [historico, setHistorico] = useState<Rvt[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOnline, setIsOnline] = useState(() => navigator.onLine);

  const [contratoId, setContratoId] = useState(rascunhoInicial?.contratoId ?? "");
  const [dataJornada, setDataJornada] = useState(rascunhoInicial?.dataJornada || hojeISO());
  const [horasStr, setHorasStr] = useState(rascunhoInicial?.horasTrabalhadas ?? "");
  const [escopo, setEscopo] = useState(rascunhoInicial?.escopoExecutado ?? "");
  const [fotos, setFotos] = useState<FotoSelecionada[]>([]);
  const [isProcessandoFotos, setIsProcessandoFotos] = useState(false);

  const [mostrarAvisoRascunho, setMostrarAvisoRascunho] = useState(Boolean(rascunhoInicial));
  const [errors, setErrors] = useState<Record<string, string>>({});

  const inputFotosRef = useRef<HTMLInputElement>(null);
  const fotosRef = useRef<FotoSelecionada[]>([]);

  useEffect(() => {
    fotosRef.current = fotos;
  }, [fotos]);

  // Carrega contratos ativos e histórico (para o saldo de horas do dia)
  useEffect(() => {
    let isMounted = true;

    async function carregar() {
      try {
        const [listaContratos, listaHistorico] = await Promise.all([
          RvtService.listarContratosAtivos(),
          RvtService.listarMeusApontamentos(),
        ]);
        if (!isMounted) return;
        setContratos(listaContratos);
        setHistorico(listaHistorico);
        setContratoId((atual) => {
          if (atual && listaContratos.some((c) => c.id === atual)) return atual;
          // Agiliza o preenchimento quando o técnico só atua em uma obra
          return listaContratos.length === 1 ? listaContratos[0].id : "";
        });
      } catch (err) {
        if (isMounted) {
          toast.error(err instanceof Error ? err.message : "Erro ao carregar contratos de obra.");
        }
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }

    carregar();
    return () => {
      isMounted = false;
    };
  }, [toast]);

  // Indicador de conectividade
  useEffect(() => {
    const online = () => setIsOnline(true);
    const offline = () => setIsOnline(false);
    window.addEventListener("online", online);
    window.addEventListener("offline", offline);
    return () => {
      window.removeEventListener("online", online);
      window.removeEventListener("offline", offline);
    };
  }, []);

  // Só a seleção de contrato (que pode ser automática) não justifica rascunho
  const temConteudo = Boolean(horasStr.trim() || escopo.trim());

  // Salva o rascunho no aparelho a cada alteração dos campos
  useEffect(() => {
    if (!temConteudo) {
      RvtService.descartarRascunho();
      return;
    }
    RvtService.salvarRascunho({
      contratoId,
      dataJornada,
      horasTrabalhadas: horasStr,
      escopoExecutado: escopo,
    });
  }, [temConteudo, contratoId, dataJornada, horasStr, escopo]);

  // Libera as URLs de pré-visualização ao sair da tela
  useEffect(() => {
    return () => {
      fotosRef.current.forEach((f) => f.previewUrl && URL.revokeObjectURL(f.previewUrl));
    };
  }, []);

  // RN05 — horas já apontadas na data selecionada (rejeitados não contam)
  const horasJaApontadas = useMemo(
    () =>
      historico
        .filter((r) => r.dataJornada === dataJornada && r.status !== "REJEITADO")
        .reduce((soma, r) => soma + r.horasTrabalhadas, 0),
    [historico, dataJornada]
  );
  const horasDisponiveis = Math.max(LIMITE_HORAS_DIARIAS - horasJaApontadas, 0);
  const horasNum = parseHoras(horasStr);
  const escopoLen = escopo.trim().length;

  const ajustarHoras = (delta: number) => {
    const atual = Number.isFinite(horasNum) ? horasNum : 0;
    const proximo = Math.min(Math.max(atual + delta, 0), horasDisponiveis);
    setHorasStr(proximo > 0 ? String(proximo).replace(".", ",") : "");
    setErrors((prev) => ({ ...prev, horas: "" }));
  };

  const handleSelecionarFotos = async (e: ChangeEvent<HTMLInputElement>) => {
    const selecionados = Array.from(e.target.files ?? []);
    e.target.value = ""; // permite selecionar o mesmo arquivo de novo
    if (selecionados.length === 0) return;

    const vagas = MAX_ARQUIVOS_POR_ENVIO - fotos.length;
    if (selecionados.length > vagas) {
      toast.warning(
        `Cada apontamento aceita até ${MAX_ARQUIVOS_POR_ENVIO} arquivos. ${
          vagas > 0 ? `Apenas ${vagas} foram adicionados.` : "Remova algum para incluir outro."
        }`
      );
    }

    setIsProcessandoFotos(true);
    const novas: FotoSelecionada[] = [];
    const recusados: string[] = [];

    for (const original of selecionados.slice(0, Math.max(vagas, 0))) {
      if (!TIPOS_EVIDENCIA_ACEITOS.includes(original.type)) {
        recusados.push(`${original.name} (formato não aceito)`);
        continue;
      }
      const arquivo = await comprimirImagem(original);
      if (arquivo.size > TAMANHO_MAXIMO_EVIDENCIA_BYTES) {
        recusados.push(`${original.name} (acima de 5 MB)`);
        continue;
      }
      novas.push({
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        arquivo,
        previewUrl: arquivo.type.startsWith("image/") ? URL.createObjectURL(arquivo) : undefined,
      });
    }

    setFotos((prev) => [...prev, ...novas]);
    setIsProcessandoFotos(false);

    if (recusados.length > 0) {
      toast.error(`Arquivos recusados: ${recusados.join(", ")}. Use JPEG, PNG ou PDF.`, "Evidências");
    }
  };

  const removerFoto = (id: string) => {
    setFotos((prev) => {
      const alvo = prev.find((f) => f.id === id);
      if (alvo?.previewUrl) URL.revokeObjectURL(alvo.previewUrl);
      return prev.filter((f) => f.id !== id);
    });
  };

  const descartarRascunho = () => {
    setContratoId(contratos.length === 1 ? contratos[0].id : "");
    setDataJornada(hojeISO());
    setHorasStr("");
    setEscopo("");
    setErrors({});
    setMostrarAvisoRascunho(false);
    RvtService.descartarRascunho();
  };

  const validate = (): boolean => {
    const novos: Record<string, string> = {};

    if (!contratoId) {
      novos.contrato = "Selecione o contrato de obra ativo (RN04).";
    }

    if (!dataJornada) {
      novos.data = "Informe a data da jornada.";
    } else if (dataJornada > hojeISO()) {
      novos.data = "A data da jornada não pode estar no futuro.";
    }

    if (!Number.isFinite(horasNum) || horasNum <= 0) {
      novos.horas = "Informe as horas trabalhadas.";
    } else if (Math.abs(horasNum * 100 - Math.round(horasNum * 100)) > 1e-6) {
      novos.horas = "Use no máximo duas casas decimais (ex.: 7,5).";
    } else if (horasNum > horasDisponiveis) {
      novos.horas =
        horasJaApontadas > 0
          ? `Você já apontou ${formatarHoras(horasJaApontadas)} nesta data. Restam ${formatarHoras(horasDisponiveis)} (RN05).`
          : `O limite é de ${LIMITE_HORAS_DIARIAS}h por dia (RN05).`;
    }

    if (escopoLen < ESCOPO_MIN_CARACTERES) {
      novos.escopo = `Descreva o serviço executado com pelo menos ${ESCOPO_MIN_CARACTERES} caracteres (RN06).`;
    } else if (escopoLen > ESCOPO_MAX_CARACTERES) {
      novos.escopo = `O escopo deve ter no máximo ${ESCOPO_MAX_CARACTERES} caracteres.`;
    }

    setErrors(novos);
    return Object.keys(novos).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Corrija os campos destacados antes de enviar.", "Validação pendente");
      return;
    }

    try {
      setIsSubmitting(true);
      const { falhaEvidencias } = await RvtService.enviarApontamento(
        {
          contratoId,
          dataJornada,
          horasTrabalhadas: horasNum,
          escopoExecutado: escopo.trim(),
        },
        fotos.map((f) => f.arquivo)
      );

      RvtService.descartarRascunho();

      if (falhaEvidencias) {
        toast.warning(
          `Apontamento registrado, mas as fotos não foram anexadas: ${falhaEvidencias}`,
          "Envio parcial"
        );
      } else {
        toast.success("Apontamento enviado para homologação da supervisão.");
      }
      navigate("/rvt/historico");
    } catch (err: unknown) {
      // O rascunho continua salvo: nada é perdido se o envio falhar
      toast.error(err instanceof Error ? err.message : "Erro ao enviar o apontamento.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-5 sm:space-y-6 pb-4 sm:pb-12 max-w-3xl mx-auto">
      {/* Cabeçalho */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-border pb-4">
        <div className="flex items-center gap-3">
          <Link
            to="/rvt/historico"
            className="w-10 h-10 rounded-lg border border-border bg-surface hover:bg-surface-subtle flex items-center justify-center text-dark transition-colors shadow-2xs shrink-0"
            title="Voltar para meus apontamentos"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-bold text-dark">Novo Apontamento</h1>
              <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary-light text-primary border border-primary/20">
                RF04 · CAR-02
              </span>
            </div>
            <p className="text-xs text-muted mt-0.5">
              Registro de horas, escopo e fotos da jornada para a supervisão
            </p>
          </div>
        </div>

        <p className="text-xs text-muted flex items-center gap-1.5 sm:justify-end">
          <Save className="w-3.5 h-3.5 shrink-0" />
          {temConteudo ? "Rascunho salvo neste aparelho" : "O rascunho é salvo automaticamente"}
        </p>
      </div>

      {/* Avisos de rascunho restaurado e conexão */}
      {!isOnline && (
        <div className="p-3.5 border border-amber-200 bg-amber-50/60 rounded-xl flex items-start gap-3">
          <CloudOff className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <p className="text-xs text-amber-900 leading-relaxed">
            <strong>Sem sinal de internet.</strong> Continue preenchendo: os campos ficam salvos neste
            aparelho. Envie quando a conexão voltar.
          </p>
        </div>
      )}

      {mostrarAvisoRascunho && (
        <div className="p-3.5 border border-blue-200 bg-blue-50 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-xs text-blue-900 leading-relaxed">
            Restauramos o rascunho que você não chegou a enviar. As fotos precisam ser anexadas novamente.
          </p>
          <div className="flex gap-2 shrink-0">
            <Button type="button" variant="ghost" size="sm" onClick={descartarRascunho} className="text-blue-900 hover:bg-blue-100">
              <RotateCcw className="w-3.5 h-3.5" />
              Começar do zero
            </Button>
            <Button type="button" variant="ghost" size="sm" onClick={() => setMostrarAvisoRascunho(false)} className="text-blue-900 hover:bg-blue-100" aria-label="Fechar aviso">
              <X className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6" noValidate>
        {/* SEÇÃO 1: Obra e Jornada */}
        <div className="bg-surface border border-border rounded-xl p-4 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5 pb-2 border-b border-border/60">
            <div className="w-7 h-7 rounded-lg bg-primary-light text-primary flex items-center justify-center shrink-0">
              <HardHat className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-dark uppercase tracking-wider">1. Obra e Jornada</h2>
              <p className="text-xs text-muted">Contrato ativo, data e horas trabalhadas</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            {/* Contrato (RN04) */}
            <div className="space-y-1.5 sm:col-span-2">
              <label htmlFor="contrato" className="block text-xs font-semibold text-dark tracking-wide">
                Contrato de Obra *
              </label>
              <select
                id="contrato"
                value={contratoId}
                disabled={isLoading}
                onChange={(e) => {
                  setContratoId(e.target.value);
                  setErrors((prev) => ({ ...prev, contrato: "" }));
                }}
                aria-invalid={Boolean(errors.contrato)}
                className={`${CLASSE_CAMPO} ${classeBorda(errors.contrato)} disabled:bg-surface-subtle disabled:opacity-60`}
              >
                <option value="">
                  {isLoading ? "Carregando contratos..." : contratos.length ? "Selecione a obra" : "Nenhum contrato ativo disponível"}
                </option>
                {contratos.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.codigo} · {c.nome}
                  </option>
                ))}
              </select>
              {errors.contrato && <p className="text-xs text-primary font-medium">{errors.contrato}</p>}
            </div>

            {/* Data da jornada */}
            <div className="space-y-1.5">
              <label htmlFor="dataJornada" className="block text-xs font-semibold text-dark tracking-wide">
                Data da Jornada *
              </label>
              <input
                id="dataJornada"
                type="date"
                value={dataJornada}
                max={hojeISO()}
                onChange={(e) => {
                  setDataJornada(e.target.value);
                  setErrors((prev) => ({ ...prev, data: "", horas: "" }));
                }}
                aria-invalid={Boolean(errors.data)}
                className={`${CLASSE_CAMPO} ${classeBorda(errors.data)}`}
              />
              {errors.data && <p className="text-xs text-primary font-medium">{errors.data}</p>}
            </div>

            {/* Horas trabalhadas (RN05) */}
            <div className="space-y-1.5">
              <label htmlFor="horas" className="block text-xs font-semibold text-dark tracking-wide">
                Horas Trabalhadas *
              </label>
              <div className="flex items-stretch gap-2">
                <button
                  type="button"
                  onClick={() => ajustarHoras(-PASSO_HORAS)}
                  className="w-12 h-12 shrink-0 rounded-lg border border-border bg-surface-subtle text-dark flex items-center justify-center hover:bg-border/60 active:scale-[0.97] transition-all cursor-pointer"
                  aria-label="Diminuir meia hora"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input
                  id="horas"
                  type="text"
                  inputMode="decimal"
                  placeholder="0"
                  value={horasStr}
                  onChange={(e) => {
                    setHorasStr(e.target.value.replace(/[^\d.,]/g, ""));
                    setErrors((prev) => ({ ...prev, horas: "" }));
                  }}
                  aria-invalid={Boolean(errors.horas)}
                  aria-describedby="horas-ajuda"
                  className={`${CLASSE_CAMPO_BASE} ${classeBorda(errors.horas)} text-center font-bold text-lg`}
                />
                <button
                  type="button"
                  onClick={() => ajustarHoras(PASSO_HORAS)}
                  className="w-12 h-12 shrink-0 rounded-lg border border-border bg-surface-subtle text-dark flex items-center justify-center hover:bg-border/60 active:scale-[0.97] transition-all cursor-pointer"
                  aria-label="Aumentar meia hora"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Atalhos e saldo do dia */}
            <div className="sm:col-span-2 space-y-2">
              <div className="grid grid-cols-4 gap-2">
                {ATALHOS_HORAS.map((h) => {
                  const ativo = horasNum === h;
                  return (
                    <button
                      key={h}
                      type="button"
                      disabled={h > horasDisponiveis}
                      onClick={() => {
                        setHorasStr(String(h));
                        setErrors((prev) => ({ ...prev, horas: "" }));
                      }}
                      className={`h-11 rounded-lg border text-sm font-bold transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
                        ativo
                          ? "bg-primary text-white border-primary shadow-xs"
                          : "bg-surface text-dark border-border hover:bg-surface-subtle"
                      }`}
                    >
                      {h}h
                    </button>
                  );
                })}
              </div>
              {errors.horas ? (
                <p id="horas-ajuda" className="text-xs text-primary font-medium">{errors.horas}</p>
              ) : (
                <p id="horas-ajuda" className="text-xs text-muted">
                  {horasJaApontadas > 0
                    ? `Já apontado em ${formatarDataJornada(dataJornada)}: ${formatarHoras(horasJaApontadas)} · disponível: ${formatarHoras(horasDisponiveis)}`
                    : `Limite de ${LIMITE_HORAS_DIARIAS}h por dia, somando todos os apontamentos (RN05)`}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* SEÇÃO 2: Escopo Executado */}
        <div className="bg-surface border border-border rounded-xl p-4 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5 pb-2 border-b border-border/60">
            <div className="w-7 h-7 rounded-lg bg-primary-light text-primary flex items-center justify-center shrink-0">
              <ClipboardList className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-dark uppercase tracking-wider">2. Escopo Executado</h2>
              <p className="text-xs text-muted">O que foi feito, onde e em que etapa parou</p>
            </div>
          </div>

          <div className="space-y-1.5">
            <label htmlFor="escopo" className="sr-only">
              Escopo executado
            </label>
            <textarea
              id="escopo"
              rows={4}
              value={escopo}
              maxLength={ESCOPO_MAX_CARACTERES}
              onChange={(e) => {
                setEscopo(e.target.value);
                setErrors((prev) => ({ ...prev, escopo: "" }));
              }}
              aria-invalid={Boolean(errors.escopo)}
              placeholder="Ex.: Passagem de cabos 4mm² nos aptos 201 a 204 e montagem dos quadros de distribuição."
              className={`w-full text-base sm:text-sm text-dark bg-surface border rounded-lg p-3.5 placeholder:text-muted/60 focus:outline-hidden focus:ring-2 focus:ring-primary/20 transition-all resize-none ${classeBorda(errors.escopo)}`}
            />
            <div className="flex items-start justify-between gap-3">
              {errors.escopo ? (
                <p className="text-xs text-primary font-medium">{errors.escopo}</p>
              ) : (
                <p className="text-xs text-muted">Mínimo de {ESCOPO_MIN_CARACTERES} caracteres (RN06)</p>
              )}
              <span
                className={`text-xs font-medium shrink-0 ${
                  escopoLen >= ESCOPO_MIN_CARACTERES ? "text-emerald-600" : "text-muted"
                }`}
              >
                {escopoLen}/{ESCOPO_MAX_CARACTERES}
              </span>
            </div>
          </div>
        </div>

        {/* SEÇÃO 3: Evidências */}
        <div className="bg-surface border border-border rounded-xl p-4 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5 pb-2 border-b border-border/60">
            <div className="w-7 h-7 rounded-lg bg-primary-light text-primary flex items-center justify-center shrink-0">
              <Camera className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-dark uppercase tracking-wider">3. Fotos da Obra</h2>
              <p className="text-xs text-muted">
                Até {MAX_ARQUIVOS_POR_ENVIO} arquivos JPEG, PNG ou PDF de até 5 MB
              </p>
            </div>
          </div>

          <input
            ref={inputFotosRef}
            type="file"
            accept={TIPOS_EVIDENCIA_ACEITOS.join(",")}
            multiple
            onChange={handleSelecionarFotos}
            className="hidden"
          />

          {fotos.length > 0 && (
            <ul className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
              {fotos.map((foto) => (
                <li
                  key={foto.id}
                  className="relative aspect-square rounded-lg border border-border bg-surface-subtle overflow-hidden"
                >
                  {foto.previewUrl ? (
                    <img src={foto.previewUrl} alt={foto.arquivo.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center gap-1 p-2 text-muted">
                      <FileText className="w-6 h-6" />
                      <span className="text-[10px] text-center truncate w-full">{foto.arquivo.name}</span>
                    </div>
                  )}
                  <span className="absolute bottom-1 left-1 text-[10px] font-semibold px-1.5 py-0.5 rounded bg-dark/70 text-white">
                    {formatarTamanhoArquivo(foto.arquivo.size)}
                  </span>
                  <button
                    type="button"
                    onClick={() => removerFoto(foto.id)}
                    className="absolute top-1 right-1 w-7 h-7 rounded-full bg-surface/95 border border-border text-dark flex items-center justify-center shadow-xs hover:text-primary cursor-pointer"
                    aria-label={`Remover ${foto.arquivo.name}`}
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </li>
              ))}
            </ul>
          )}

          <Button
            type="button"
            variant="outline"
            size="lg"
            disabled={fotos.length >= MAX_ARQUIVOS_POR_ENVIO || isProcessandoFotos}
            onClick={() => inputFotosRef.current?.click()}
            className="w-full border-dashed"
          >
            {isProcessandoFotos ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Preparando fotos...
              </>
            ) : (
              <>
                <Camera className="w-5 h-5" />
                {fotos.length > 0
                  ? `Adicionar mais (${fotos.length}/${MAX_ARQUIVOS_POR_ENVIO})`
                  : "Tirar foto ou anexar arquivo"}
              </>
            )}
          </Button>
        </div>

        {/* Barra de ações — fixa no rodapé em telas pequenas */}
        <div className="sticky -bottom-4 -mx-4 px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] bg-canvas/95 backdrop-blur-sm border-t border-border sm:static sm:mx-0 sm:px-0 sm:pt-4 sm:pb-0 sm:bg-transparent sm:backdrop-blur-none flex flex-col-reverse sm:flex-row sm:items-center sm:justify-end gap-2 sm:gap-3">
          <Button
            type="button"
            variant="ghost"
            onClick={() => navigate("/rvt/historico")}
            disabled={isSubmitting}
            className="hidden sm:inline-flex"
          >
            Cancelar
          </Button>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            disabled={isSubmitting || isLoading || isProcessandoFotos}
            className="w-full sm:w-auto sm:px-8"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Enviando...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Enviar Apontamento</span>
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
