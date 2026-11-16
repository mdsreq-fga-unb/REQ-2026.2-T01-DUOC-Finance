import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  UserPlus,
  Search,
  Filter,
  Eye,
  EyeOff,
  Edit2,
  UserX,
  ChevronLeft,
  ChevronRight,
  Users,
  CheckCircle2,
  Palmtree,
  AlertCircle,
  Loader2,
  RotateCcw,
} from "lucide-react";
import Button from "../components/ui/Button";
import ModalAfastamento from "../components/colaboradores/ModalAfastamento";
import { ColaboradoresService } from "../services/colaboradores.service";
import type {
  Colaborador,
  StatusOperacional,
  RegimeTrabalho,
} from "../types/colaborador";
import { formatCPFMasked, maskCPF, formatCurrency } from "../utils/masks";

export default function ColaboradoresPage() {
  const navigate = useNavigate();

  const [colaboradores, setColaboradores] = useState<Colaborador[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  // Filtros
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusOperacional | "Todos">("Todos");
  const [regimeFilter, setRegimeFilter] = useState<RegimeTrabalho | "Todos">("Todos");

  // Estado para revelar CPFs completos na tabela
  const [revealedCPFs, setRevealedCPFs] = useState<Record<string, boolean>>({});

  // Modal de Afastamento rápido a partir da tabela (RF03)
  const [selectedColabAfastamento, setSelectedColabAfastamento] = useState<Colaborador | null>(null);

  const [refreshTrigger, setRefreshTrigger] = useState(0);

  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      try {
        setIsLoading(true);
        const res = await ColaboradoresService.getColaboradores({
          search: searchTerm,
          status: statusFilter,
          regime: regimeFilter,
          page: currentPage,
          limit: 8,
        });

        if (isMounted) {
          setColaboradores(res.data);
          setTotalCount(res.total);
          setTotalPages(res.totalPages);
        }
      } catch (err) {
        console.error("Erro ao listar colaboradores:", err);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadData();

    return () => {
      isMounted = false;
    };
  }, [searchTerm, statusFilter, regimeFilter, currentPage, refreshTrigger]);

  // Contadores para métricas no topo
  const countAtivos = colaboradores.filter((c) => c.status === "Ativo").length;
  const countFerias = colaboradores.filter((c) => c.status === "Férias").length;
  const countAfastados = colaboradores.filter(
    (c) => c.status === "Afastado" || c.status === "Desligado"
  ).length;

  const toggleCPFReveal = (id: string) => {
    setRevealedCPFs((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setStatusFilter("Todos");
    setRegimeFilter("Todos");
    setCurrentPage(1);
  };

  const hasActiveFilters =
    searchTerm !== "" || statusFilter !== "Todos" || regimeFilter !== "Todos";

  return (
    <div className="space-y-6 pb-12">
      {/* 1. Cabeçalho da Página */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-dark">
              Gestão de Colaboradores
            </h1>
            <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary-light text-primary border border-primary/20">
              RF01 · CAR-01
            </span>
          </div>
          <p className="text-xs text-muted mt-1 leading-relaxed">
            Base cadastral unificada com validação síncrona de CPF, dados bancários e controle de enquadramento funcional.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link to="/colaboradores/novo">
            <Button variant="primary" className="flex items-center gap-2 shadow-xs">
              <UserPlus className="w-4 h-4" />
              <span>Novo Colaborador</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* 2. Mini Métricas Rápidas */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-surface border border-border p-3.5 rounded-xl shadow-2xs flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-surface-subtle text-dark flex items-center justify-center shrink-0">
            <Users className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[11px] font-semibold text-muted uppercase">Cadastrados</p>
            <p className="text-lg font-bold text-dark">{totalCount}</p>
          </div>
        </div>

        <div className="bg-surface border border-border p-3.5 rounded-xl shadow-2xs flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[11px] font-semibold text-muted uppercase">Ativos</p>
            <p className="text-lg font-bold text-emerald-600">{countAtivos}</p>
          </div>
        </div>

        <div className="bg-surface border border-border p-3.5 rounded-xl shadow-2xs flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
            <Palmtree className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[11px] font-semibold text-muted uppercase">Em Férias</p>
            <p className="text-lg font-bold text-blue-600">{countFerias}</p>
          </div>
        </div>

        <div className="bg-surface border border-border p-3.5 rounded-xl shadow-2xs flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
            <AlertCircle className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[11px] font-semibold text-muted uppercase">Afastados/Rescisão</p>
            <p className="text-lg font-bold text-amber-600">{countAfastados}</p>
          </div>
        </div>
      </div>

      {/* 3. Barra de Busca e Filtros */}
      <div className="bg-surface border border-border rounded-xl p-4 shadow-xs space-y-3">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Busca textual por Nome ou CPF */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
            <input
              type="text"
              placeholder="Buscar instantaneamente por nome ou CPF..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full h-10 pl-10 pr-3.5 text-xs bg-surface-subtle/50 text-dark rounded-lg border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-hidden transition-all"
            />
          </div>

          {/* Filtro de Status */}
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-muted hidden sm:block" />
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value as StatusOperacional | "Todos");
                setCurrentPage(1);
              }}
              className="h-10 text-xs bg-surface text-dark rounded-lg border border-border px-3 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-hidden"
            >
              <option value="Todos">Todos os Status</option>
              <option value="Ativo">Ativo</option>
              <option value="Férias">Férias</option>
              <option value="Afastado">Afastado</option>
              <option value="Desligado">Desligado</option>
            </select>

            {/* Filtro de Regime */}
            <select
              value={regimeFilter}
              onChange={(e) => {
                setRegimeFilter(e.target.value as RegimeTrabalho | "Todos");
                setCurrentPage(1);
              }}
              className="h-10 text-xs bg-surface text-dark rounded-lg border border-border px-3 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-hidden"
            >
              <option value="Todos">Todos os Regimes</option>
              <option value="CLT">CLT</option>
              <option value="PJ">PJ</option>
            </select>

            {hasActiveFilters && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClearFilters}
                className="h-10 text-xs text-muted hover:text-dark flex items-center gap-1.5"
                title="Limpar filtros"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Limpar</span>
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* 4. Tabela de Colaboradores */}
      <div className="bg-surface border border-border rounded-xl shadow-xs overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-subtle/80 border-b border-border text-[11px] font-bold text-muted uppercase tracking-wider">
                <th className="py-3 px-4">Colaborador</th>
                <th className="py-3 px-4">CPF</th>
                <th className="py-3 px-4">Cargo / Função</th>
                <th className="py-3 px-4">Regime</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Remuneração</th>
                <th className="py-3 px-4 text-right">Ações Rápidas</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-xs">
              {isLoading ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-muted">
                    <div className="flex flex-col items-center justify-center gap-2">
                      <Loader2 className="w-6 h-6 animate-spin text-primary" />
                      <span>Carregando base de colaboradores...</span>
                    </div>
                  </td>
                </tr>
              ) : colaboradores.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-muted">
                    <p className="font-semibold text-dark">Nenhum colaborador encontrado.</p>
                    <p className="text-xs text-muted mt-1">
                      {hasActiveFilters
                        ? "Tente ajustar os filtros ou os termos da busca."
                        : "Cadastre o primeiro colaborador para iniciar a base."}
                    </p>
                    {hasActiveFilters && (
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={handleClearFilters}
                        className="mt-3 text-xs"
                      >
                        Limpar Filtros
                      </Button>
                    )}
                  </td>
                </tr>
              ) : (
                colaboradores.map((colab) => {
                  const isCPFRevealed = Boolean(revealedCPFs[colab.id]);

                  return (
                    <tr
                      key={colab.id}
                      className="hover:bg-surface-subtle/50 transition-colors"
                    >
                      {/* Nome e E-mail */}
                      <td className="py-3.5 px-4">
                        <div className="font-semibold text-dark">{colab.nome}</div>
                        <div className="text-[11px] text-muted">{colab.email}</div>
                      </td>

                      {/* CPF com Máscara e Privacidade ***.456.789-** */}
                      <td className="py-3.5 px-4 font-mono text-[11px]">
                        <div className="flex items-center gap-1.5">
                          <span>
                            {isCPFRevealed
                              ? maskCPF(colab.cpf)
                              : formatCPFMasked(colab.cpf)}
                          </span>
                          <button
                            type="button"
                            onClick={() => toggleCPFReveal(colab.id)}
                            className="p-1 text-muted hover:text-dark transition-colors cursor-pointer"
                            title={isCPFRevealed ? "Ocultar CPF" : "Visualizar CPF completo"}
                          >
                            {isCPFRevealed ? (
                              <EyeOff className="w-3.5 h-3.5" />
                            ) : (
                              <Eye className="w-3.5 h-3.5" />
                            )}
                          </button>
                        </div>
                      </td>

                      {/* Cargo */}
                      <td className="py-3.5 px-4 text-dark font-medium">
                        {colab.cargo}
                      </td>

                      {/* Regime */}
                      <td className="py-3.5 px-4">
                        <span
                          className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${
                            colab.regime === "CLT"
                              ? "bg-slate-100 text-slate-700 border-slate-300"
                              : "bg-indigo-50 text-indigo-700 border-indigo-200"
                          }`}
                        >
                          {colab.regime}
                        </span>
                      </td>

                      {/* Status Operacional */}
                      <td className="py-3.5 px-4">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold border ${
                            colab.status === "Ativo"
                              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                              : colab.status === "Férias"
                              ? "bg-blue-50 text-blue-700 border-blue-200"
                              : colab.status === "Afastado"
                              ? "bg-amber-50 text-amber-700 border-amber-200"
                              : "bg-red-50 text-red-700 border-red-200"
                          }`}
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              colab.status === "Ativo"
                                ? "bg-emerald-500"
                                : colab.status === "Férias"
                                ? "bg-blue-500"
                                : colab.status === "Afastado"
                                ? "bg-amber-500"
                                : "bg-red-500"
                            }`}
                          />
                          {colab.status}
                        </span>
                      </td>

                      {/* Remuneração */}
                      <td className="py-3.5 px-4 text-dark font-semibold text-[11px]">
                        {formatCurrency(colab.remuneracao)}
                      </td>

                      {/* Ações Rápidas */}
                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            type="button"
                            onClick={() => navigate(`/colaboradores/${colab.id}`)}
                            className="p-1.5 rounded-lg border border-border bg-surface hover:bg-surface-subtle text-dark transition-colors cursor-pointer"
                            title="Editar colaborador (RF02)"
                          >
                            <Edit2 className="w-3.5 h-3.5 text-muted hover:text-dark" />
                          </button>

                          <button
                            type="button"
                            onClick={() => setSelectedColabAfastamento(colab)}
                            className="p-1.5 rounded-lg border border-border bg-surface hover:bg-amber-50 hover:border-amber-200 text-amber-700 transition-colors cursor-pointer"
                            title="Afastar ou desligar (RF03 / RN23)"
                          >
                            <UserX className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* 5. Paginação */}
        <div className="p-4 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted">
          <div>
            Mostrando{" "}
            <span className="font-semibold text-dark">
              {colaboradores.length > 0 ? (currentPage - 1) * 8 + 1 : 0}
            </span>{" "}
            a{" "}
            <span className="font-semibold text-dark">
              {Math.min(currentPage * 8, totalCount)}
            </span>{" "}
            de <span className="font-semibold text-dark">{totalCount}</span>{" "}
            colaboradores
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage <= 1 || isLoading}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              className="flex items-center gap-1 text-xs"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Anterior</span>
            </Button>

            <span className="px-2 text-xs font-semibold text-dark">
              {currentPage} / {totalPages}
            </span>

            <Button
              variant="outline"
              size="sm"
              disabled={currentPage >= totalPages || isLoading}
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              className="flex items-center gap-1 text-xs"
            >
              <span>Próxima</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Modal de Afastamento Conectado na Tabela */}
      {selectedColabAfastamento && (
        <ModalAfastamento
          colaborador={selectedColabAfastamento}
          isOpen={Boolean(selectedColabAfastamento)}
          onClose={() => setSelectedColabAfastamento(null)}
          onSuccess={() => {
            setRefreshTrigger((prev) => prev + 1);
          }}
        />
      )}
    </div>
  );
}
