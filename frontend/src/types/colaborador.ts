/**
 * Tipagens de domínio para a Gestão de Colaboradores (RF01, RF02, RF03)
 */

export type RegimeTrabalho = "CLT" | "PJ";

export type StatusOperacional = "Ativo" | "Férias" | "Afastado" | "Desligado";

export type TipoChavePix = "CPF" | "E-mail" | "Telefone" | "Aleatória";

export type TipoContaBancaria = "Corrente" | "Poupança" | "Pagamento";

export interface DadosBancarios {
  banco: string;
  agencia: string;
  conta: string;
  tipoConta: TipoContaBancaria;
  tipoChavePix?: TipoChavePix;
  chavePix?: string;
}

export interface Colaborador {
  id: string;
  // Dados Pessoais (RF01)
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  dataNascimento?: string;
  dataAdmissao: string;
  // Regime & Cargo
  cargo: string;
  regime: RegimeTrabalho;
  remuneracao: number; // Salário (CLT) ou Diária/Valor Hora (PJ)
  status: StatusOperacional;
  motivoAfastamento?: string;
  dataAfastamento?: string;
  // Dados Bancários (RN02)
  dadosBancarios: DadosBancarios;
  observacoes?: string;
  createdAt: string;
  updatedAt: string;
}

export type CreateColaboradorDTO = Omit<Colaborador, "id" | "createdAt" | "updatedAt">;

export type UpdateColaboradorDTO = Partial<CreateColaboradorDTO>;

export interface ColaboradorFilters {
  search?: string;
  status?: StatusOperacional | "Todos";
  regime?: RegimeTrabalho | "Todos";
  page?: number;
  limit?: number;
}
