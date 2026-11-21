/**
 * Serviço do Apontamento de Campo / RVT (RF04 · CAR-02)
 *
 * Mesmo padrão de colaboradores.service.ts: com VITE_USE_REMOTE_API=true usa
 * a API NestJS (/api/rvt); caso contrário persiste no localStorage para
 * desenvolvimento enquanto login e cadastro de contratos não existem.
 * Diferente da listagem de colaboradores, falhas da API remota NÃO caem no
 * modo local: um apontamento nunca deve "sumir" silenciosamente no navegador.
 */
import type {
  ContratoObra,
  CriarRvtDTO,
  DeliberarRvtDTO,
  EventoHistoricoRvt,
  RascunhoRvt,
  RetificarRvtDTO,
  Rvt,
  RvtGestor,
  TipoEventoRvt,
} from "../types/rvt";
import {
  LIMITE_HORAS_DIARIAS,
  calcularPrazoRetificacao,
  formatarHoras,
  formatarPrazo,
} from "../utils/rvt";
import { AuthApi, ErroAuth } from "./auth.service";

const USE_REMOTE_API = import.meta.env.VITE_USE_REMOTE_API === "true";

const STORAGE_KEY = "duoc_finance_rvt_v1";
const RASCUNHO_KEY = "duoc_finance_rvt_rascunho_v1";

const SEED_CONTRATOS: ContratoObra[] = [
  { id: "contrato-001", codigo: "OBR-2026-014", nome: "Residencial Parque Noroeste — Bloco B", cliente: "Construtora Planalto" },
  { id: "contrato-002", codigo: "OBR-2026-021", nome: "Subestação Sudoeste — Retrofit Elétrico", cliente: "CEB Distribuição" },
  { id: "contrato-003", codigo: "OBR-2026-027", nome: "Centro Comercial Águas Claras", cliente: "Grupo Alvorada" },
];

/** Formato persistido no modo local: prazo e trava são derivados na leitura */
type RvtLocal = Omit<Rvt, "prazoRetificacao" | "podeRetificar" | "historico"> & {
  historico?: EventoHistoricoRvt[];
  colaboradorId?: string;
};

const SEED_APONTAMENTOS: RvtLocal[] = [
  {
    id: "rvt-seed-002",
    contrato: { id: "contrato-002", codigo: "OBR-2026-021", nome: "Subestação Sudoeste — Retrofit Elétrico" },
    dataJornada: "2026-11-13",
    horasTrabalhadas: 9,
    escopoExecutado: "Substituição de disjuntores do QGBT e reaperto de barramentos. Testes de isolação concluídos.",
    status: "PENDENTE",
    evidencias: [
      { id: "ev-seed-1", nomeOriginal: "qgbt-antes.jpg", mimeType: "image/jpeg", tamanhoBytes: 1_480_000, createdAt: "2026-11-13T21:10:00.000Z" },
      { id: "ev-seed-2", nomeOriginal: "qgbt-depois.jpg", mimeType: "image/jpeg", tamanhoBytes: 1_320_000, createdAt: "2026-11-13T21:10:00.000Z" },
    ],
    createdAt: "2026-11-13T21:10:00.000Z",
    updatedAt: "2026-11-13T21:10:00.000Z",
  },
  {
    id: "rvt-seed-001",
    contrato: { id: "contrato-001", codigo: "OBR-2026-014", nome: "Residencial Parque Noroeste — Bloco B" },
    dataJornada: "2026-11-12",
    horasTrabalhadas: 8,
    escopoExecutado: "Passagem de cabos 4mm² nos apartamentos 201 a 204 e montagem de quadros de distribuição.",
    status: "HOMOLOGADO",
    evidencias: [
      { id: "ev-seed-3", nomeOriginal: "quadros-201-204.jpg", mimeType: "image/jpeg", tamanhoBytes: 980_000, createdAt: "2026-11-12T20:40:00.000Z" },
    ],
    createdAt: "2026-11-12T20:40:00.000Z",
    updatedAt: "2026-11-13T14:00:00.000Z",
  },
];

// ---------------------------------------------------------------------------
// Infra HTTP
// ---------------------------------------------------------------------------

async function requisicao<T>(url: string, init: RequestInit = {}): Promise<T> {
  let res: Response;
  try {
    res = await AuthApi.requisicaoAutenticada(url, init);
  } catch (erro) {
    if (erro instanceof ErroAuth && erro.status === 401) {
      throw new Error("Sua sessão expirou. Entre novamente para enviar o apontamento.");
    }
    throw new Error("Sem conexão com o servidor. Seu rascunho foi mantido; tente novamente quando o sinal voltar.");
  }

  if (!res.ok) {
    const corpo = await res.json().catch(() => null);
    const mensagem = Array.isArray(corpo?.message) ? corpo.message.join(" ") : corpo?.message;
    if (res.status === 401) throw new Error("Sua sessão expirou. Entre novamente para enviar o apontamento.");
    throw new Error(mensagem || `Erro ${res.status} ao comunicar com o servidor.`);
  }
  return res.json() as Promise<T>;
}

// ---------------------------------------------------------------------------
// Persistência local (modo desenvolvimento)
// ---------------------------------------------------------------------------

function evento(tipo: TipoEventoRvt, extras: Partial<EventoHistoricoRvt> = {}): EventoHistoricoRvt {
  return { id: gerarId("ev"), tipo, parecer: null, alteracoes: null, createdAt: new Date().toISOString(), ...extras };
}

/** RN02 — a janela começa na submissão, no último reenvio ou na última rejeição */
function inicioJanela(rvt: RvtLocal): Date {
  const marcos = (rvt.historico ?? []).filter((e) =>
    e.tipo === "SUBMISSAO" || e.tipo === "REENVIO" || e.tipo === "REJEICAO"
  );
  return new Date(marcos.length ? marcos[marcos.length - 1].createdAt : rvt.createdAt);
}

/** Completa registros locais (inclusive os gravados antes desta versão) */
function derivar(rvt: RvtLocal, agora = new Date()): Rvt {
  const historico = rvt.historico ?? [
    { id: `${rvt.id}-sub`, tipo: "SUBMISSAO" as const, parecer: null, alteracoes: null, createdAt: rvt.createdAt },
  ];
  const prazo = rvt.status === "HOMOLOGADO" ? null : calcularPrazoRetificacao(inicioJanela({ ...rvt, historico }));
  return {
    ...rvt,
    historico,
    prazoRetificacao: prazo?.toISOString() ?? null,
    podeRetificar: prazo !== null && agora.getTime() <= prazo.getTime(),
  };
}

/** Mesma trava aplicada pelo backend antes de qualquer alteração do autor */
function garantirRetificavelLocal(rvt: Rvt | undefined): Rvt {
  if (!rvt) throw new Error("Apontamento não encontrado.");
  if (rvt.status === "HOMOLOGADO") throw new Error("Apontamento homologado não pode ser alterado (RN02).");
  if (!rvt.podeRetificar) {
    throw new Error(
      `O prazo de retificação terminou em ${rvt.prazoRetificacao ? formatarPrazo(rvt.prazoRetificacao) : "data anterior"} (RN02).`
    );
  }
  return rvt;
}

function lerLocal(): Rvt[] {
  return lerLocalBruto().map((r) => derivar(r));
}

function lerLocalBruto(): RvtLocal[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_APONTAMENTOS));
      return SEED_APONTAMENTOS;
    }
    return JSON.parse(data);
  } catch {
    return SEED_APONTAMENTOS;
  }
}

function salvarLocal(lista: RvtLocal[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
  } catch (err) {
    console.error("Erro ao salvar apontamentos no localStorage:", err);
    throw new Error("Não foi possível salvar o apontamento neste dispositivo.");
  }
}

function ordenarRecentes<T extends Rvt>(lista: T[]): T[] {
  return [...lista].sort(
    (a, b) => b.dataJornada.localeCompare(a.dataJornada) || b.createdAt.localeCompare(a.createdAt)
  );
}

function gerarId(prefixo: string): string {
  return `${prefixo}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`;
}

// ---------------------------------------------------------------------------
// API pública
// ---------------------------------------------------------------------------

export interface ResultadoEnvioRvt {
  rvt: Rvt;
  /** Preenchido quando o apontamento foi gravado mas as fotos não */
  falhaEvidencias?: string;
}

export const RvtService = {
  async listarContratosAtivos(): Promise<ContratoObra[]> {
    if (USE_REMOTE_API) {
      return requisicao<ContratoObra[]>("/api/rvt/contratos-ativos");
    }
    return SEED_CONTRATOS;
  },

  async listarMeusApontamentos(): Promise<Rvt[]> {
    if (USE_REMOTE_API) {
      return requisicao<Rvt[]>("/api/rvt/meus-apontamentos");
    }
    return ordenarRecentes(lerLocal());
  },

  /**
   * RF04 — envia o apontamento e, em seguida, as evidências.
   * São duas requisições: se só a segunda falhar, o apontamento já existe
   * e o chamador é avisado por `falhaEvidencias`.
   */
  async enviarApontamento(dto: CriarRvtDTO, arquivos: File[]): Promise<ResultadoEnvioRvt> {
    if (USE_REMOTE_API) {
      const rvt = await requisicao<Rvt>("/api/rvt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dto),
      });

      if (arquivos.length === 0) return { rvt };

      const form = new FormData();
      arquivos.forEach((arquivo) => form.append("arquivos", arquivo));
      try {
        const atualizado = await requisicao<Rvt>(`/api/rvt/${rvt.id}/evidencias`, {
          method: "POST",
          body: form,
        });
        return { rvt: atualizado };
      } catch (err) {
        return {
          rvt,
          falhaEvidencias: err instanceof Error ? err.message : "Falha ao enviar as fotos.",
        };
      }
    }

    // Modo local: aplica as mesmas regras do backend
    const contrato = SEED_CONTRATOS.find((c) => c.id === dto.contratoId);
    if (!contrato) {
      throw new Error("Selecione um contrato de obra ativo para registrar o apontamento (RN04).");
    }

    const lista = lerLocal();
    const jaApontadas = lista
      .filter((r) => r.dataJornada === dto.dataJornada && r.status !== "REJEITADO")
      .reduce((soma, r) => soma + r.horasTrabalhadas, 0);
    if (jaApontadas + dto.horasTrabalhadas > LIMITE_HORAS_DIARIAS) {
      const restantes = Math.max(LIMITE_HORAS_DIARIAS - jaApontadas, 0);
      throw new Error(
        `Limite de ${LIMITE_HORAS_DIARIAS}h diárias excedido (RN05): já existem ${formatarHoras(jaApontadas)} apontadas nesta data; restam ${formatarHoras(restantes)}.`
      );
    }

    const agora = new Date().toISOString();
    const rvt: RvtLocal = {
      id: gerarId("rvt"),
      contrato: { id: contrato.id, codigo: contrato.codigo, nome: contrato.nome },
      dataJornada: dto.dataJornada,
      horasTrabalhadas: dto.horasTrabalhadas,
      escopoExecutado: dto.escopoExecutado,
      status: "PENDENTE",
      // No modo local só os metadados das fotos são guardados (limite do localStorage)
      evidencias: arquivos.map((arquivo) => ({
        id: gerarId("ev"),
        nomeOriginal: arquivo.name,
        mimeType: arquivo.type,
        tamanhoBytes: arquivo.size,
        createdAt: agora,
      })),
      historico: [evento("SUBMISSAO", { createdAt: agora })],
      createdAt: agora,
      updatedAt: agora,
    };

    salvarLocal([rvt, ...lerLocalBruto()]);
    return { rvt: derivar(rvt) };
  },

  /**
   * RF35 — retifica horas/escopo e anexos, ou corrige e reenvia um rejeitado.
   * Ordem: PATCH (que também reenvia), remoções e, por fim, novos anexos.
   * Se só os anexos falharem, os campos já foram gravados e o chamador
   * recebe `falhaEvidencias`.
   */
  async retificarApontamento(
    original: Rvt,
    dto: RetificarRvtDTO,
    removerEvidenciaIds: string[],
    novosArquivos: File[]
  ): Promise<ResultadoEnvioRvt> {
    const precisaPatch = Object.keys(dto).length > 0 || original.status === "REJEITADO";

    if (USE_REMOTE_API) {
      let rvt = original;
      if (precisaPatch) {
        rvt = await requisicao<Rvt>(`/api/rvt/${original.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dto),
        });
      }
      try {
        for (const evidenciaId of removerEvidenciaIds) {
          rvt = await requisicao<Rvt>(`/api/rvt/${original.id}/evidencias/${evidenciaId}`, { method: "DELETE" });
        }
        if (novosArquivos.length > 0) {
          const form = new FormData();
          novosArquivos.forEach((arquivo) => form.append("arquivos", arquivo));
          rvt = await requisicao<Rvt>(`/api/rvt/${original.id}/evidencias`, { method: "POST", body: form });
        }
      } catch (err) {
        if (!precisaPatch && rvt === original) throw err;
        return { rvt, falhaEvidencias: err instanceof Error ? err.message : "Falha ao atualizar os anexos." };
      }
      return { rvt };
    }

    // Modo local: mesmas regras do backend
    const brutos = lerLocalBruto();
    const indice = brutos.findIndex((r) => r.id === original.id);
    const atual = garantirRetificavelLocal(indice >= 0 ? derivar(brutos[indice]) : undefined);
    const reenvio = atual.status === "REJEITADO";

    const alteracoes: Record<string, { de: unknown; para: unknown }> = {};
    if (dto.horasTrabalhadas !== undefined && dto.horasTrabalhadas !== atual.horasTrabalhadas) {
      alteracoes.horasTrabalhadas = { de: atual.horasTrabalhadas, para: dto.horasTrabalhadas };
    }
    if (dto.escopoExecutado !== undefined && dto.escopoExecutado !== atual.escopoExecutado) {
      alteracoes.escopoExecutado = { de: atual.escopoExecutado, para: dto.escopoExecutado };
    }
    if (!reenvio && Object.keys(alteracoes).length === 0 && removerEvidenciaIds.length === 0 && novosArquivos.length === 0) {
      throw new Error("Nenhuma alteração informada para retificar.");
    }

    const novasHoras = dto.horasTrabalhadas ?? atual.horasTrabalhadas;
    const jaApontadas = brutos
      .filter((r) => r.id !== atual.id && r.dataJornada === atual.dataJornada && r.status !== "REJEITADO")
      .reduce((soma, r) => soma + r.horasTrabalhadas, 0);
    if (jaApontadas + novasHoras > LIMITE_HORAS_DIARIAS) {
      const restantes = Math.max(LIMITE_HORAS_DIARIAS - jaApontadas, 0);
      throw new Error(
        `Limite de ${LIMITE_HORAS_DIARIAS}h diárias excedido (RN05): já existem ${formatarHoras(jaApontadas)} apontadas nesta data; restam ${formatarHoras(restantes)}.`
      );
    }

    const agora = new Date().toISOString();
    const historico = [...atual.historico];
    if (reenvio || Object.keys(alteracoes).length > 0) {
      historico.push(
        evento(reenvio ? "REENVIO" : "RETIFICACAO", {
          createdAt: agora,
          alteracoes: Object.keys(alteracoes).length ? alteracoes : null,
        })
      );
    }
    for (const id of removerEvidenciaIds) {
      const removida = atual.evidencias.find((e) => e.id === id);
      if (removida) {
        historico.push(evento("RETIFICACAO", { createdAt: agora, alteracoes: { evidenciaRemovida: { nomeOriginal: removida.nomeOriginal } } }));
      }
    }

    const atualizado: RvtLocal = {
      ...brutos[indice],
      horasTrabalhadas: novasHoras,
      escopoExecutado: dto.escopoExecutado ?? atual.escopoExecutado,
      status: "PENDENTE",
      evidencias: [
        ...atual.evidencias.filter((e) => !removerEvidenciaIds.includes(e.id)),
        ...novosArquivos.map((arquivo) => ({
          id: gerarId("ev"),
          nomeOriginal: arquivo.name,
          mimeType: arquivo.type,
          tamanhoBytes: arquivo.size,
          createdAt: agora,
        })),
      ],
      historico,
      updatedAt: agora,
    };
    brutos[indice] = atualizado;
    salvarLocal(brutos);
    return { rvt: derivar(atualizado) };
  },

  /** Abre o arquivo de uma evidência (autor ou gestor do contrato) */
  async baixarEvidencia(rvtId: string, evidenciaId: string): Promise<Blob> {
    if (!USE_REMOTE_API) {
      throw new Error("No modo local só os dados do anexo ficam salvos; a visualização exige a API.");
    }
    let res: Response;
    try {
      res = await AuthApi.requisicaoAutenticada(`/api/rvt/${rvtId}/evidencias/${evidenciaId}`);
    } catch {
      throw new Error("Sem conexão com o servidor para abrir o anexo.");
    }
    if (!res.ok) {
      throw new Error(res.status === 404 ? "Anexo não encontrado ou sem permissão de acesso." : `Erro ${res.status} ao abrir o anexo.`);
    }
    return res.blob();
  },

  // -------------------------------------------------------------------------
  // RF32 — Homologação pelo gestor operacional
  // -------------------------------------------------------------------------

  async listarPendentesHomologacao(): Promise<RvtGestor[]> {
    if (USE_REMOTE_API) {
      return requisicao<RvtGestor[]>("/api/rvt/pendentes-homologacao");
    }
    return lerLocalBruto()
      .map((r) => ({ ...derivar(r), colaboradorId: r.colaboradorId ?? "colaborador-local" }))
      .filter((r) => r.status === "PENDENTE")
      .sort((a, b) => a.dataJornada.localeCompare(b.dataJornada) || a.createdAt.localeCompare(b.createdAt));
  },

  async deliberar(id: string, dto: DeliberarRvtDTO): Promise<RvtGestor> {
    if (USE_REMOTE_API) {
      return requisicao<RvtGestor>(`/api/rvt/${id}/deliberacao`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dto),
      });
    }

    const brutos = lerLocalBruto();
    const indice = brutos.findIndex((r) => r.id === id);
    if (indice < 0) throw new Error("Apontamento não encontrado.");
    if (brutos[indice].status !== "PENDENTE") {
      throw new Error("Somente apontamentos pendentes de homologação podem ser deliberados.");
    }
    const rejeitar = dto.decisao === "REJEITAR";
    const agora = new Date().toISOString();
    const atualizado: RvtLocal = {
      ...brutos[indice],
      status: rejeitar ? "REJEITADO" : "HOMOLOGADO",
      historico: [
        ...derivar(brutos[indice]).historico,
        evento(rejeitar ? "REJEICAO" : "HOMOLOGACAO", { createdAt: agora, parecer: dto.parecer ?? null }),
      ],
      updatedAt: agora,
    };
    brutos[indice] = atualizado;
    salvarLocal(brutos);
    return { ...derivar(atualizado), colaboradorId: atualizado.colaboradorId ?? "colaborador-local" };
  },

  // -------------------------------------------------------------------------
  // Rascunho (tolerância a queda de sinal / recarga da página)
  // -------------------------------------------------------------------------

  carregarRascunho(): RascunhoRvt | null {
    try {
      const data = localStorage.getItem(RASCUNHO_KEY);
      return data ? (JSON.parse(data) as RascunhoRvt) : null;
    } catch {
      return null;
    }
  },

  salvarRascunho(campos: Omit<RascunhoRvt, "salvoEm">): RascunhoRvt | null {
    try {
      const rascunho: RascunhoRvt = { ...campos, salvoEm: new Date().toISOString() };
      localStorage.setItem(RASCUNHO_KEY, JSON.stringify(rascunho));
      return rascunho;
    } catch {
      return null;
    }
  },

  descartarRascunho(): void {
    try {
      localStorage.removeItem(RASCUNHO_KEY);
    } catch {
      // localStorage indisponível (aba anônima/bloqueada): nada a limpar
    }
  },
};
