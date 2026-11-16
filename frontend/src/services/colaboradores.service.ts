/**
 * Serviço de integração HTTP e persistência para Colaboradores (RF01, RF02, RF03)
 */
import type {
  Colaborador,
  CreateColaboradorDTO,
  UpdateColaboradorDTO,
  ColaboradorFilters,
} from "../types/colaborador";
import { unmaskCPF } from "../utils/masks";

const STORAGE_KEY = "duoc_finance_colaboradores_v1";

// Carga inicial (Seed) para demonstração e desenvolvimento do DUOC Finance
const SEED_COLABORADORES: Colaborador[] = [
  {
    id: "colab-001",
    nome: "Maria Beatryz Silveira",
    cpf: "12345678909",
    email: "maria.beatryz@duoc.com.br",
    telefone: "(61) 98765-4321",
    dataNascimento: "1994-05-12",
    dataAdmissao: "2023-01-15",
    cargo: "Auxiliar Administrativo",
    regime: "CLT",
    remuneracao: 3800,
    status: "Ativo",
    dadosBancarios: {
      banco: "001 - Banco do Brasil",
      agencia: "1234-5",
      conta: "98765-4",
      tipoConta: "Corrente",
      tipoChavePix: "E-mail",
      chavePix: "maria.beatryz@duoc.com.br",
    },
    observacoes: "Responsável pelo fluxo de conferência de diárias e apoio à diretoria.",
    createdAt: "2023-01-15T08:00:00.000Z",
    updatedAt: "2023-01-15T08:00:00.000Z",
  },
  {
    id: "colab-002",
    nome: "Carlos Eduardo Nogueira",
    cpf: "98765432100",
    email: "carlos.nogueira@duoc.com.br",
    telefone: "(61) 99123-4567",
    dataNascimento: "1988-11-20",
    dataAdmissao: "2022-06-01",
    cargo: "Engenheiro Civil Residente",
    regime: "PJ",
    remuneracao: 12500,
    status: "Ativo",
    dadosBancarios: {
      banco: "260 - Nu Pagamentos (Nubank)",
      agencia: "0001",
      conta: "1234567-8",
      tipoConta: "Corrente",
      tipoChavePix: "CPF",
      chavePix: "98765432100",
    },
    observacoes: "Gestor técnico das obras dos setores Noroeste e Sudoeste.",
    createdAt: "2022-06-01T08:00:00.000Z",
    updatedAt: "2022-06-01T08:00:00.000Z",
  },
  {
    id: "colab-003",
    nome: "Ana Paula Guimarães",
    cpf: "45678912355",
    email: "ana.paula@duoc.com.br",
    telefone: "(61) 98456-7890",
    dataNascimento: "1992-03-08",
    dataAdmissao: "2023-04-10",
    cargo: "Arquiteta e Coordenadora BIM",
    regime: "CLT",
    remuneracao: 8900,
    status: "Férias",
    dadosBancarios: {
      banco: "341 - Itaú Unibanco",
      agencia: "4321",
      conta: "56789-0",
      tipoConta: "Corrente",
      tipoChavePix: "Telefone",
      chavePix: "61984567890",
    },
    observacoes: "Período de férias programado: 10/11/2026 a 30/11/2026.",
    createdAt: "2023-04-10T08:00:00.000Z",
    updatedAt: "2023-04-10T08:00:00.000Z",
  },
  {
    id: "colab-004",
    nome: "Ricardo Mendes Alencar",
    cpf: "74185296311",
    email: "ricardo.alencar@duoc.com.br",
    telefone: "(61) 99876-5432",
    dataNascimento: "1985-09-14",
    dataAdmissao: "2021-08-15",
    cargo: "Mestre de Obras",
    regime: "CLT",
    remuneracao: 6200,
    status: "Afastado",
    motivoAfastamento: "Licença médica - INSS por procedimento ortopédico.",
    dataAfastamento: "2026-10-15T10:00:00.000Z",
    dadosBancarios: {
      banco: "104 - Caixa Econômica Federal",
      agencia: "0876",
      conta: "00123456-7",
      tipoConta: "Poupança",
      tipoChavePix: "CPF",
      chavePix: "74185296311",
    },
    observacoes: "Credenciais de acesso revogadas temporariamente conforme RN23.",
    createdAt: "2021-08-15T08:00:00.000Z",
    updatedAt: "2026-10-15T10:00:00.000Z",
  },
];

function getStoredColaboradores(): Colaborador[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_COLABORADORES));
      return SEED_COLABORADORES;
    }
    return JSON.parse(data);
  } catch {
    return SEED_COLABORADORES;
  }
}

function saveStoredColaboradores(list: Colaborador[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch (err) {
    console.error("Erro ao salvar colaboradores no localStorage:", err);
  }
}

export const ColaboradoresService = {
  /**
   * Lista colaboradores aplicando busca textual (Nome ou CPF), filtro de status e paginação
   */
  async getColaboradores(filters: ColaboradorFilters = {}): Promise<{
    data: Colaborador[];
    total: number;
    page: number;
    totalPages: number;
  }> {
    // Tenta chamada HTTP real se API estiver disponível
    try {
      const query = new URLSearchParams();
      if (filters.search) query.append("search", filters.search);
      if (filters.status && filters.status !== "Todos") query.append("status", filters.status);
      if (filters.regime && filters.regime !== "Todos") query.append("regime", filters.regime);
      if (filters.page) query.append("page", String(filters.page));
      if (filters.limit) query.append("limit", String(filters.limit));

      const res = await fetch(`/api/colaboradores?${query.toString()}`);
      if (res.ok) {
        return await res.json();
      }
    } catch {
      // Fallback para persistência local
    }

    // Processamento local de filtros
    let list = getStoredColaboradores();

    if (filters.search && filters.search.trim()) {
      const term = filters.search.toLowerCase().trim();
      const termDigits = unmaskCPF(term);

      list = list.filter((c) => {
        const matchName = c.nome.toLowerCase().includes(term);
        const matchEmail = c.email.toLowerCase().includes(term);
        const matchCPF = termDigits ? unmaskCPF(c.cpf).includes(termDigits) : false;
        return matchName || matchEmail || matchCPF;
      });
    }

    if (filters.status && filters.status !== "Todos") {
      list = list.filter((c) => c.status === filters.status);
    }

    if (filters.regime && filters.regime !== "Todos") {
      list = list.filter((c) => c.regime === filters.regime);
    }

    const page = filters.page || 1;
    const limit = filters.limit || 8;
    const total = list.length;
    const totalPages = Math.ceil(total / limit) || 1;
    const startIndex = (page - 1) * limit;
    const paginatedData = list.slice(startIndex, startIndex + limit);

    return {
      data: paginatedData,
      total,
      page,
      totalPages,
    };
  },

  /**
   * Busca um colaborador por ID
   */
  async getColaboradorById(id: string): Promise<Colaborador> {
    try {
      const res = await fetch(`/api/colaboradores/${id}`);
      if (res.ok) {
        return await res.json();
      }
    } catch {
      // Fallback
    }

    const list = getStoredColaboradores();
    const found = list.find((c) => c.id === id);
    if (!found) {
      throw new Error("Colaborador não encontrado.");
    }
    return found;
  },

  /**
   * Cria um novo colaborador com validação de unicidade de CPF (RN22)
   */
  async createColaborador(dto: CreateColaboradorDTO): Promise<Colaborador> {
    try {
      const res = await fetch("/api/colaboradores", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dto),
      });
      if (res.ok) {
        return await res.json();
      }
    } catch {
      // Fallback
    }

    const list = getStoredColaboradores();
    const cleanCPF = unmaskCPF(dto.cpf);

    // Validação de Duplicidade (RN22)
    const exists = list.some((c) => unmaskCPF(c.cpf) === cleanCPF);
    if (exists) {
      throw new Error("Já existe um colaborador cadastrado com este CPF (RN22).");
    }

    const now = new Date().toISOString();
    const newColaborador: Colaborador = {
      ...dto,
      id: `colab-${Date.now().toString(36)}`,
      cpf: cleanCPF,
      createdAt: now,
      updatedAt: now,
    };

    saveStoredColaboradores([newColaborador, ...list]);
    return newColaborador;
  },

  /**
   * Atualiza os dados de um colaborador existente (RF02)
   */
  async updateColaborador(id: string, dto: UpdateColaboradorDTO): Promise<Colaborador> {
    try {
      const res = await fetch(`/api/colaboradores/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dto),
      });
      if (res.ok) {
        return await res.json();
      }
    } catch {
      // Fallback
    }

    const list = getStoredColaboradores();
    const index = list.findIndex((c) => c.id === id);
    if (index === -1) {
      throw new Error("Colaborador não encontrado para edição.");
    }

    // Se estiver alterando CPF, verificar se não colide com outro colaborador (RN22)
    if (dto.cpf) {
      const cleanCPF = unmaskCPF(dto.cpf);
      const duplicate = list.some((c) => c.id !== id && unmaskCPF(c.cpf) === cleanCPF);
      if (duplicate) {
        throw new Error("Já existe outro colaborador cadastrado com este CPF.");
      }
      dto.cpf = cleanCPF;
    }

    const updated: Colaborador = {
      ...list[index],
      ...dto,
      updatedAt: new Date().toISOString(),
    };

    list[index] = updated;
    saveStoredColaboradores(list);
    return updated;
  },

  /**
   * Registra afastamento ou desligamento com justificativa obrigatória (RF03 / RN23)
   */
  async afastarColaborador(
    id: string,
    motivo: string,
    novoStatus: "Afastado" | "Desligado"
  ): Promise<Colaborador> {
    if (!motivo.trim()) {
      throw new Error("O motivo do afastamento/desligamento é obrigatório (RN23).");
    }

    return this.updateColaborador(id, {
      status: novoStatus,
      motivoAfastamento: motivo.trim(),
      dataAfastamento: new Date().toISOString(),
    });
  },
};
