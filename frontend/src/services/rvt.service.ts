/**
 * Serviço do Apontamento de Campo / RVT (RF04 · CAR-02)
 *
 * Mesmo padrão de colaboradores.service.ts: com VITE_USE_REMOTE_API=true usa
 * a API NestJS (/api/rvt); caso contrário persiste no localStorage para
 * desenvolvimento enquanto login e cadastro de contratos não existem.
 * Diferente da listagem de colaboradores, falhas da API remota NÃO caem no
 * modo local: um apontamento nunca deve "sumir" silenciosamente no navegador.
 */
import type { ContratoObra, CriarRvtDTO, RascunhoRvt, Rvt } from "../types/rvt";
import { LIMITE_HORAS_DIARIAS, formatarHoras } from "../utils/rvt";

const USE_REMOTE_API = import.meta.env.VITE_USE_REMOTE_API === "true";

const STORAGE_KEY = "duoc_finance_rvt_v1";
const RASCUNHO_KEY = "duoc_finance_rvt_rascunho_v1";
/** Token emitido pelo futuro fluxo de login (RF17) */
const TOKEN_KEY = "duoc_finance_access_token";

const SEED_CONTRATOS: ContratoObra[] = [
  { id: "contrato-001", codigo: "OBR-2026-014", nome: "Residencial Parque Noroeste — Bloco B", cliente: "Construtora Planalto" },
  { id: "contrato-002", codigo: "OBR-2026-021", nome: "Subestação Sudoeste — Retrofit Elétrico", cliente: "CEB Distribuição" },
  { id: "contrato-003", codigo: "OBR-2026-027", nome: "Centro Comercial Águas Claras", cliente: "Grupo Alvorada" },
];

const SEED_APONTAMENTOS: Rvt[] = [
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
  const headers = new Headers(init.headers);
  const token = localStorage.getItem(TOKEN_KEY);
  if (token) headers.set("Authorization", `Bearer ${token}`);

  let res: Response;
  try {
    res = await fetch(url, { ...init, headers });
  } catch {
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

function lerLocal(): Rvt[] {
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

function salvarLocal(lista: Rvt[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lista));
  } catch (err) {
    console.error("Erro ao salvar apontamentos no localStorage:", err);
    throw new Error("Não foi possível salvar o apontamento neste dispositivo.");
  }
}

function ordenarRecentes(lista: Rvt[]): Rvt[] {
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
    const rvt: Rvt = {
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
      createdAt: agora,
      updatedAt: agora,
    };

    salvarLocal([rvt, ...lista]);
    return { rvt };
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
