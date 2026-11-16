import { useState, useEffect } from "react";
import type { FormEvent } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  User,
  CreditCard,
  Briefcase,
  FileText,
  AlertTriangle,
  Loader2,
  Save,
  CheckCircle,
} from "lucide-react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import ModalAfastamento from "../components/colaboradores/ModalAfastamento";
import { useToast } from "../components/ui/useToast";
import { ColaboradoresService } from "../services/colaboradores.service";
import type {
  Colaborador,
  RegimeTrabalho,
  StatusOperacional,
  TipoContaBancaria,
  TipoChavePix,
} from "../types/colaborador";
import {
  maskCPF,
  unmaskCPF,
  maskPhone,
  maskCurrencyInput,
  parseCurrency,
  formatCurrency,
} from "../utils/masks";
import { validateCPF, validateEmail } from "../utils/validators";

const BANCOS_POPULARES = [
  "001 - Banco do Brasil",
  "104 - Caixa Econômica Federal",
  "341 - Itaú Unibanco",
  "237 - Bradesco",
  "033 - Santander Brasil",
  "260 - Nu Pagamentos (Nubank)",
  "077 - Banco Inter",
  "Outro",
];

const CARGOS_SUGERIDOS = [
  "Auxiliar Administrativo",
  "Engenheiro Civil Residente",
  "Engenheiro Calculista",
  "Mestre de Obras",
  "Arquiteta e Coordenadora BIM",
  "Eletricista de Obras",
  "Encarregado de Obras",
  "Gestor Financeiro",
];

export default function ColaboradorFormPage() {
  const { id } = useParams<{ id: string }>();
  const isEditing = Boolean(id);
  const navigate = useNavigate();
  const toast = useToast();

  const [isLoadingInitial, setIsLoadingInitial] = useState(isEditing);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAfastamentoModalOpen, setIsAfastamentoModalOpen] = useState(false);
  const [existingColaborador, setExistingColaborador] = useState<Colaborador | null>(null);

  // 1. Dados Pessoais
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [dataAdmissao, setDataAdmissao] = useState(
    () => new Date().toISOString().split("T")[0]
  );

  // 2. Regime Trabalhista
  const [regime, setRegime] = useState<RegimeTrabalho>("CLT");
  const [cargo, setCargo] = useState("");
  const [remuneracaoStr, setRemuneracaoStr] = useState("");
  const [status, setStatus] = useState<StatusOperacional>("Ativo");

  // 3. Dados Bancários
  const [banco, setBanco] = useState(BANCOS_POPULARES[0]);
  const [agencia, setAgencia] = useState("");
  const [conta, setConta] = useState("");
  const [tipoConta, setTipoConta] = useState<TipoContaBancaria>("Corrente");
  const [tipoChavePix, setTipoChavePix] = useState<TipoChavePix>("CPF");
  const [chavePix, setChavePix] = useState("");

  // 4. Observações
  const [observacoes, setObservacoes] = useState("");

  // Erros de Validação
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (!id) return;

    async function loadColaborador() {
      try {
        setIsLoadingInitial(true);
        const data = await ColaboradoresService.getColaboradorById(id!);
        setExistingColaborador(data);

        // Preenche campos
        setNome(data.nome);
        setCpf(maskCPF(data.cpf));
        setEmail(data.email);
        setTelefone(maskPhone(data.telefone));
        setDataNascimento(data.dataNascimento || "");
        setDataAdmissao(data.dataAdmissao || "");
        setRegime(data.regime);
        setCargo(data.cargo);
        setRemuneracaoStr(formatCurrency(data.remuneracao));
        setStatus(data.status);

        if (data.dadosBancarios) {
          setBanco(data.dadosBancarios.banco || BANCOS_POPULARES[0]);
          setAgencia(data.dadosBancarios.agencia || "");
          setConta(data.dadosBancarios.conta || "");
          setTipoConta(data.dadosBancarios.tipoConta || "Corrente");
          setTipoChavePix(data.dadosBancarios.tipoChavePix || "CPF");
          setChavePix(data.dadosBancarios.chavePix || "");
        }

        setObservacoes(data.observacoes || "");
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : "Erro ao carregar colaborador.";
        toast.error(msg);
        navigate("/colaboradores");
      } finally {
        setIsLoadingInitial(false);
      }
    }

    loadColaborador();
  }, [id, navigate, toast]);

  // Se o tipo de chave pix for CPF, preenche automaticamente se vazio
  const handleTipoChavePixChange = (tipo: TipoChavePix) => {
    setTipoChavePix(tipo);
    if (tipo === "CPF" && cpf && !chavePix) {
      setChavePix(unmaskCPF(cpf));
    } else if (tipo === "E-mail" && email && !chavePix) {
      setChavePix(email);
    }
  };

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!nome.trim()) newErrors.nome = "O nome completo é obrigatório.";

    const cleanCPF = unmaskCPF(cpf);
    if (!cleanCPF) {
      newErrors.cpf = "O CPF é obrigatório (RN01).";
    } else if (!validateCPF(cleanCPF)) {
      newErrors.cpf = "CPF inválido conforme algoritmo da Receita Federal (RN01).";
    }

    if (!email.trim()) {
      newErrors.email = "O e-mail é obrigatório.";
    } else if (!validateEmail(email)) {
      newErrors.email = "E-mail com formato inválido.";
    }

    if (!telefone.trim()) newErrors.telefone = "O telefone é obrigatório.";
    if (!cargo.trim()) newErrors.cargo = "O cargo é obrigatório.";

    const remNum = parseCurrency(remuneracaoStr);
    if (remNum <= 0) {
      newErrors.remuneracao = "A remuneração deve ser maior que zero.";
    }

    // Validações bancárias (RN02)
    if (!banco.trim()) newErrors.banco = "Selecione a instituição bancária.";
    if (!agencia.trim()) newErrors.agencia = "A agência é obrigatória.";
    if (!conta.trim()) newErrors.conta = "A conta com dígito é obrigatória.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Corrija os campos com inconsistências no formulário.", "Validação pendente");
      return;
    }

    try {
      setIsSubmitting(true);

      const dto = {
        nome: nome.trim(),
        cpf: unmaskCPF(cpf),
        email: email.trim().toLowerCase(),
        telefone: telefone.trim(),
        dataNascimento: dataNascimento || undefined,
        dataAdmissao,
        cargo: cargo.trim(),
        regime,
        remuneracao: parseCurrency(remuneracaoStr),
        status,
        dadosBancarios: {
          banco,
          agencia: agencia.trim(),
          conta: conta.trim(),
          tipoConta,
          tipoChavePix,
          chavePix: chavePix.trim() || undefined,
        },
        observacoes: observacoes.trim() || undefined,
      };

      if (isEditing && id) {
        await ColaboradoresService.updateColaborador(id, dto);
        toast.success(`Colaborador "${dto.nome}" atualizado com sucesso!`);
      } else {
        await ColaboradoresService.createColaborador(dto);
        toast.success(`Colaborador "${dto.nome}" cadastrado com sucesso!`);
      }

      navigate("/colaboradores");
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Erro ao salvar colaborador.";
      toast.error(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoadingInitial) {
    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-3">
        <Loader2 className="w-8 h-8 text-primary animate-spin" />
        <p className="text-sm text-muted">Carregando dados do colaborador...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-12">
      {/* Cabeçalho */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
        <div className="flex items-center gap-3">
          <Link
            to="/colaboradores"
            className="w-9 h-9 rounded-lg border border-border bg-surface hover:bg-surface-subtle flex items-center justify-center text-dark transition-colors shadow-2xs"
            title="Voltar para a listagem"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-dark">
              {isEditing ? "Editar Colaborador" : "Novo Colaborador"}
            </h1>
            <p className="text-xs text-muted mt-0.5">
              {isEditing
                ? `Editando matrícula de ${existingColaborador?.nome} (RF02)`
                : "Cadastro unificado de dados pessoais, bancários e regime trabalhista (RF01)"}
            </p>
          </div>
        </div>

        {isEditing && existingColaborador && (
          <div className="flex items-center gap-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${
                existingColaborador.status === "Ativo"
                  ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                  : existingColaborador.status === "Férias"
                  ? "bg-blue-50 text-blue-700 border-blue-200"
                  : existingColaborador.status === "Afastado"
                  ? "bg-amber-50 text-amber-700 border-amber-200"
                  : "bg-red-50 text-red-700 border-red-200"
              }`}
            >
              Status: {existingColaborador.status}
            </span>
          </div>
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
        {/* SEÇÃO 1: Dados Pessoais */}
        <div className="bg-surface border border-border rounded-xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5 pb-2 border-b border-border/60">
            <div className="w-7 h-7 rounded-lg bg-primary-light text-primary flex items-center justify-center">
              <User className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-dark uppercase tracking-wider">
                1. Dados Pessoais
              </h2>
              <p className="text-xs text-muted">
                Identificação única do colaborador com validação de CPF (RN01)
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
            <div className="md:col-span-2">
              <Input
                label="Nome Completo *"
                placeholder="Ex: Carlos Eduardo de Oliveira"
                value={nome}
                error={errors.nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>

            <div>
              <Input
                label="CPF (apenas números) *"
                placeholder="000.000.000-00"
                value={cpf}
                error={errors.cpf}
                onChange={(e) => setCpf(maskCPF(e.target.value))}
                helperText={
                  !errors.cpf && cpf.replace(/\D/g, "").length === 11 && validateCPF(cpf) ? (
                    <span className="text-emerald-600 flex items-center gap-1 font-medium">
                      <CheckCircle className="w-3 h-3" /> CPF válido na Receita Federal
                    </span>
                  ) : undefined
                }
                required
              />
            </div>

            <div>
              <Input
                label="E-mail Corporativo ou Pessoal *"
                type="email"
                placeholder="nome@duoc.com.br"
                value={email}
                error={errors.email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <Input
                label="Telefone / WhatsApp *"
                placeholder="(61) 90000-0000"
                value={telefone}
                error={errors.telefone}
                onChange={(e) => setTelefone(maskPhone(e.target.value))}
                required
              />
            </div>

            <div>
              <Input
                label="Data de Nascimento"
                type="date"
                value={dataNascimento}
                onChange={(e) => setDataNascimento(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* SEÇÃO 2: Regime Trabalhista & Cargo */}
        <div className="bg-surface border border-border rounded-xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5 pb-2 border-b border-border/60">
            <div className="w-7 h-7 rounded-lg bg-primary-light text-primary flex items-center justify-center">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-dark uppercase tracking-wider">
                2. Regime Trabalhista & Enquadramento
              </h2>
              <p className="text-xs text-muted">
                Contratação (CLT ou PJ) e atribuição de funções no DUOC Finance
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
            {/* Seletor de Regime */}
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-dark">
                Regime Contratual *
              </label>
              <div className="grid grid-cols-2 gap-2 h-11">
                {(["CLT", "PJ"] as RegimeTrabalho[]).map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setRegime(r)}
                    className={`rounded-lg border text-xs font-bold uppercase transition-all cursor-pointer ${
                      regime === r
                        ? "bg-primary text-white border-primary shadow-xs"
                        : "bg-surface text-dark border-border hover:bg-surface-subtle"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            {/* Cargo */}
            <div className="space-y-1.5 lg:col-span-2">
              <label htmlFor="cargo" className="block text-xs font-semibold text-dark">
                Cargo / Atribuição *
              </label>
              <input
                id="cargo"
                list="cargos-sugeridos"
                placeholder="Selecione ou digite o cargo..."
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}
                className={`w-full h-11 bg-surface text-dark text-sm rounded-lg border px-3.5 transition-all focus:outline-hidden focus:ring-2 ${
                  errors.cargo
                    ? "border-primary focus:ring-primary/20"
                    : "border-border hover:border-dark/30 focus:border-primary focus:ring-primary/20"
                }`}
                required
              />
              <datalist id="cargos-sugeridos">
                {CARGOS_SUGERIDOS.map((c) => (
                  <option key={c} value={c} />
                ))}
              </datalist>
              {errors.cargo && (
                <p className="text-xs text-primary font-medium">{errors.cargo}</p>
              )}
            </div>

            {/* Remuneração */}
            <div>
              <Input
                label={regime === "CLT" ? "Salário Base (R$) *" : "Diária / Valor Hora (R$) *"}
                placeholder="R$ 0,00"
                value={remuneracaoStr}
                error={errors.remuneracao}
                onChange={(e) => setRemuneracaoStr(maskCurrencyInput(e.target.value))}
                required
              />
            </div>

            <div>
              <Input
                label="Data de Admissão *"
                type="date"
                value={dataAdmissao}
                onChange={(e) => setDataAdmissao(e.target.value)}
                required
              />
            </div>

            {/* Status Operacional */}
            <div className="space-y-1.5">
              <label htmlFor="status" className="block text-xs font-semibold text-dark">
                Status Operacional
              </label>
              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value as StatusOperacional)}
                className="w-full h-11 bg-surface text-dark text-sm rounded-lg border border-border px-3.5 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-hidden"
              >
                <option value="Ativo">Ativo</option>
                <option value="Férias">Férias</option>
                <option value="Afastado">Afastado</option>
                <option value="Desligado">Desligado</option>
              </select>
            </div>
          </div>
        </div>

        {/* SEÇÃO 3: Dados Bancários (RN02) */}
        <div className="bg-surface border border-border rounded-xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5 pb-2 border-b border-border/60">
            <div className="w-7 h-7 rounded-lg bg-primary-light text-primary flex items-center justify-center">
              <CreditCard className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-dark uppercase tracking-wider">
                3. Dados Bancários & Pagamentos (RN02)
              </h2>
              <p className="text-xs text-muted">
                Contas bancárias validadas para emissão de fechamentos e diárias
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="space-y-1.5">
              <label htmlFor="banco" className="block text-xs font-semibold text-dark">
                Instituição Bancária *
              </label>
              <select
                id="banco"
                value={banco}
                onChange={(e) => setBanco(e.target.value)}
                className="w-full h-11 bg-surface text-dark text-sm rounded-lg border border-border px-3.5 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-hidden"
              >
                {BANCOS_POPULARES.map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <Input
                label="Agência (com dígito) *"
                placeholder="Ex: 1234-5"
                value={agencia}
                error={errors.agencia}
                onChange={(e) => setAgencia(e.target.value)}
                required
              />
            </div>

            <div>
              <Input
                label="Conta Bancária (com dígito) *"
                placeholder="Ex: 98765-4"
                value={conta}
                error={errors.conta}
                onChange={(e) => setConta(e.target.value)}
                required
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="tipoConta" className="block text-xs font-semibold text-dark">
                Tipo de Conta
              </label>
              <select
                id="tipoConta"
                value={tipoConta}
                onChange={(e) => setTipoConta(e.target.value as TipoContaBancaria)}
                className="w-full h-11 bg-surface text-dark text-sm rounded-lg border border-border px-3.5 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-hidden"
              >
                <option value="Corrente">Conta Corrente</option>
                <option value="Poupança">Conta Poupança</option>
                <option value="Pagamento">Conta de Pagamento</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="tipoChavePix" className="block text-xs font-semibold text-dark">
                Tipo de Chave PIX
              </label>
              <select
                id="tipoChavePix"
                value={tipoChavePix}
                onChange={(e) =>
                  handleTipoChavePixChange(e.target.value as TipoChavePix)
                }
                className="w-full h-11 bg-surface text-dark text-sm rounded-lg border border-border px-3.5 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-hidden"
              >
                <option value="CPF">CPF</option>
                <option value="E-mail">E-mail</option>
                <option value="Telefone">Telefone</option>
                <option value="Aleatória">Chave Aleatória</option>
              </select>
            </div>

            <div>
              <Input
                label="Chave PIX (opcional)"
                placeholder="Informe a chave PIX"
                value={chavePix}
                onChange={(e) => setChavePix(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* SEÇÃO 4: Observações Gerais */}
        <div className="bg-surface border border-border rounded-xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5 pb-2 border-b border-border/60">
            <div className="w-7 h-7 rounded-lg bg-surface-subtle text-dark flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-sm font-bold text-dark uppercase tracking-wider">
                4. Observações Internas
              </h2>
              <p className="text-xs text-muted">
                Histórico operacional, restrições ou observações contratuais
              </p>
            </div>
          </div>

          <div>
            <textarea
              rows={3}
              value={observacoes}
              onChange={(e) => setObservacoes(e.target.value)}
              placeholder="Anotações internas sobre o colaborador, alocação em obras, restrições de escala..."
              className="w-full text-sm text-dark bg-surface border border-border rounded-lg p-3.5 placeholder:text-muted/60 focus:outline-hidden focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
            />
          </div>
        </div>

        {/* ZONA DE OCORRÊNCIA / AFASTAMENTO (Apenas no Modo Edição) */}
        {isEditing && existingColaborador && (
          <div className="p-5 border border-amber-200 bg-amber-50/60 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-amber-100 text-amber-700 mt-0.5">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-dark">
                  Gestão de Afastamentos & Desligamento (RF03 / RN23)
                </h4>
                <p className="text-xs text-muted mt-0.5 max-w-xl">
                  Registra ocorrências médicas, afastamentos ou encerramento formal do vínculo trabalhista, suspendendo o acesso ao sistema imediatamente.
                </p>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setIsAfastamentoModalOpen(true)}
              className="border-amber-600 text-amber-700 hover:bg-amber-100 shrink-0 font-semibold"
            >
              Afastar ou Desligar
            </Button>
          </div>
        )}

        {/* Barra de Ações Inferior */}
        <div className="flex items-center justify-end gap-3 pt-4 border-t border-border">
          <Button
            type="button"
            variant="ghost"
            onClick={() => navigate("/colaboradores")}
            disabled={isSubmitting}
          >
            Cancelar
          </Button>

          <Button
            type="submit"
            variant="primary"
            disabled={isSubmitting}
            className="flex items-center gap-2 px-6"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Gravando dados...</span>
              </>
            ) : (
              <>
                <Save className="w-4 h-4" />
                <span>{isEditing ? "Atualizar Colaborador" : "Cadastrar Colaborador"}</span>
              </>
            )}
          </Button>
        </div>
      </form>

      {/* Modal de Afastamento Conectado */}
      {isEditing && existingColaborador && (
        <ModalAfastamento
          colaborador={existingColaborador}
          isOpen={isAfastamentoModalOpen}
          onClose={() => setIsAfastamentoModalOpen(false)}
          onSuccess={() => {
            navigate("/colaboradores");
          }}
        />
      )}
    </div>
  );
}
