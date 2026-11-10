/**
 * Pirâmide de Abstração Interativa — DUOC Finance
 * Rastreabilidade Vertical & Horizontal com Busca Inteligente, Pintura de Conexões e Auto-Zoom
 */
(function () {
  "use strict";

  const MODULES = {
    OG: {
      id: "OG",
      color: "#DAA520",
      border: "#fbbf24",
      glow: "rgba(218, 165, 32, 0.55)",
      bgDark: "linear-gradient(145deg, rgba(35, 28, 12, 0.96), rgba(18, 15, 8, 0.98))",
      bgLight: "linear-gradient(145deg, #fffbeb, #fef3c7)"
    },
    OE1: {
      id: "OE1",
      name: "Módulo 1 · Padronização e Campo",
      color: "#0284c7",
      border: "#38bdf8",
      glow: "rgba(56, 189, 248, 0.55)",
      bgDark: "linear-gradient(145deg, rgba(12, 34, 54, 0.95), rgba(15, 23, 42, 0.98))",
      bgLight: "linear-gradient(145deg, #f0f9ff, #e0f2fe)"
    },
    OE2: {
      id: "OE2",
      name: "Módulo 2 · Fechamento e Reembolsos",
      color: "#10b981",
      border: "#34d399",
      glow: "rgba(52, 211, 153, 0.55)",
      bgDark: "linear-gradient(145deg, rgba(10, 39, 32, 0.95), rgba(15, 23, 42, 0.98))",
      bgLight: "linear-gradient(145deg, #ecfdf5, #d1fae5)"
    },
    OE3: {
      id: "OE3",
      name: "Módulo 3 · Custos e Orçamento",
      color: "#f59e0b",
      border: "#fbbf24",
      glow: "rgba(251, 191, 36, 0.55)",
      bgDark: "linear-gradient(145deg, rgba(43, 29, 10, 0.95), rgba(15, 23, 42, 0.98))",
      bgLight: "linear-gradient(145deg, #fffbeb, #fef3c7)"
    },
    OE4: {
      id: "OE4",
      name: "Módulo 4 · Governança, RBAC e Auditoria",
      color: "#8b5cf6",
      border: "#a78bfa",
      glow: "rgba(167, 139, 250, 0.55)",
      bgDark: "linear-gradient(145deg, rgba(31, 20, 56, 0.95), rgba(15, 23, 42, 0.98))",
      bgLight: "linear-gradient(145deg, #f5f3ff, #ede9fe)"
    }
  };

  const OG_DATA = {
    id: "OG",
    code: "OBJETIVO GERAL (OG)",
    title: "Centralizar e sistematizar a gestão administrativo-financeira de obras da DUOC",
    subtitle: "Assegurar a integridade de apontamentos técnicos (RVT), automatizar o fechamento de diárias e prestação de contas, e prover visibilidade em tempo real de custos por contrato.",
    href: "../../visao-produto/solucao-proposta/#objetivo-geral"
  };

  const OES_DATA = [
    {
      id: "OE1",
      code: "OE1",
      title: "Padronizar e Unificar os Dados",
      href: "../../visao-produto/solucao-proposta/#oe1"
    },
    {
      id: "OE2",
      code: "OE2",
      title: "Eficiência Administrativo-Financeira",
      href: "../../visao-produto/solucao-proposta/#oe2"
    },
    {
      id: "OE3",
      code: "OE3",
      title: "Transparecer Custos por Contrato",
      href: "../../visao-produto/solucao-proposta/#oe3"
    },
    {
      id: "OE4",
      code: "OE4",
      title: "Governança, Segurança e Conformidade",
      href: "../../visao-produto/solucao-proposta/#oe4"
    }
  ];

  const CARS_DATA = [
    { id: "CAR-01", oe: "OE1", title: "Gestão Cadastral Unificada de Pessoal", desc: "Base única de colaboradores CLT/PJ, histórico funcional e dados bancários.", href: "../../visao-produto/solucao-proposta/#car-01" },
    { id: "CAR-02", oe: "OE1", title: "Apontamento de Campo e Registros (RVT)", desc: "Coleta diária em canteiro, fotos/geolocalização, deliberação e retificação.", href: "../../visao-produto/solucao-proposta/#car-02" },
    { id: "CAR-09", oe: "OE1", title: "Integração FLIT e Presenças", desc: "Importação automatizada de registros de presença homologados em campo.", href: "../../visao-produto/solucao-proposta/#car-09" },
    { id: "CAR-10", oe: "OE1", title: "Exportação de Planilhas", desc: "Extração tabular consolidada em CSV e XLSX para análises externas.", href: "../../visao-produto/solucao-proposta/#car-10" },
    { id: "CAR-03", oe: "OE2", title: "Motor de Fechamento Financeiro", desc: "Cálculo automatizado de prévias, homologação imutável, estornos e diárias.", href: "../../visao-produto/solucao-proposta/#car-03" },
    { id: "CAR-04", oe: "OE2", title: "Prestação de Contas e Reembolsos", desc: "Fluxo digital de reembolsos com comprovante fiscal e adiantamentos.", href: "../../visao-produto/solucao-proposta/#car-04" },
    { id: "CAR-05", oe: "OE3", title: "Apropriação de Custos por Contrato", desc: "Rateio e rastreabilidade ponta a ponta de gastos por obra e contrato.", href: "../../visao-produto/solucao-proposta/#car-05" },
    { id: "CAR-06", oe: "OE3", title: "Painel Analítico e Execução Orçamentária", desc: "Monitoramento de tetos, centros de custo, filtros e alertas de desvio.", href: "../../visao-produto/solucao-proposta/#car-06" },
    { id: "CAR-07", oe: "OE4", title: "Controle de Acesso Baseado em Papéis (RBAC)", desc: "Autenticação segura, gestão de perfis, bloqueio e renovação de credenciais.", href: "../../visao-produto/solucao-proposta/#car-07" },
    { id: "CAR-08", oe: "OE4", title: "Trilha de Auditoria e Operações Sensíveis", desc: "Logs imutáveis append-only e exportação probatória para conformidade.", href: "../../visao-produto/solucao-proposta/#car-08" }
  ];

  const RFS_DATA = [
    // CAR-01 (OE1)
    { id: "RF01", car: "CAR-01", oe: "OE1", title: "Cadastrar colaborador", prio: "Alta Prioridade", prioClass: "high", quad: "Q1", scope: "MVP", rns: ["RN01", "RN03", "RN22", "RN23"], rnfs: ["RNF02", "RNF03", "RNF18", "RNF19", "RNF20"], ct: "CT-M1-01" },
    { id: "RF02", car: "CAR-01", oe: "OE1", title: "Atualizar cadastro de colaborador", prio: "Alta Prioridade", prioClass: "high", quad: "Q1", scope: "MVP", rns: ["RN01", "RN23"], rnfs: ["RNF02", "RNF03", "RNF19"], ct: "CT-M1-02" },
    { id: "RF03", car: "CAR-01", oe: "OE1", title: "Registrar movimentação funcional", prio: "Alta Prioridade", prioClass: "high", quad: "Q1", scope: "MVP", rns: ["RN04"], rnfs: ["RNF02", "RNF03", "RNF19"], ct: "CT-M1-03" },
    { id: "RF25", car: "CAR-01", oe: "OE1", title: "Cadastrar tipo de contratação do colaborador", prio: "Alta Prioridade", prioClass: "high", quad: "Q1", scope: "MVP", rns: ["RN22"], rnfs: ["RNF02"], ct: "CT-M1-12" },
    { id: "RF26", car: "CAR-01", oe: "OE1", title: "Consultar histórico de alterações cadastrais e bancárias", prio: "Alta Prioridade", prioClass: "high", quad: "Q1", scope: "MVP", rns: ["RN23"], rnfs: ["RNF02"], ct: "CT-M1-13" },
    // CAR-02 (OE1)
    { id: "RF04", car: "CAR-02", oe: "OE1", title: "Submeter apontamento de campo", prio: "Planejado", prioClass: "med", quad: "Q2", scope: "MVP", rns: ["RN02"], rnfs: ["RNF01", "RNF04", "RNF07", "RNF18", "RNF19", "RNF20"], ct: "CT-M1-04" },
    { id: "RF19", car: "CAR-02", oe: "OE1", title: "Consultar apontamentos registrados", prio: "Alta Prioridade", prioClass: "high", quad: "Q1", scope: "MVP", rns: ["RN16", "RN30"], rnfs: ["RNF01", "RNF04"], ct: "CT-M1-09" },
    { id: "RF22", car: "CAR-02", oe: "OE1", title: "Anexar evidências e geolocalização ao apontamento", prio: "Alta Prioridade", prioClass: "high", quad: "Q1", scope: "MVP", rns: ["RN24"], rnfs: ["RNF01", "RNF04", "RNF07"], ct: "CT-M1-11" },
    { id: "RF32", car: "CAR-02", oe: "OE1", title: "Deliberar apontamento de campo", prio: "Alta Prioridade", prioClass: "high", quad: "Q1", scope: "MVP", rns: ["RN02", "RN05", "RN30"], rnfs: ["RNF04"], ct: "CT-M1-15" },
    { id: "RF35", car: "CAR-02", oe: "OE1", title: "Retificar apontamento de campo", prio: "Alta Prioridade", prioClass: "high", quad: "Q1", scope: "MVP", rns: ["RN02", "RN30"], rnfs: ["RNF01", "RNF04", "RNF07"], ct: "CT-M1-16" },
    // CAR-09 (OE1)
    { id: "RF20", car: "CAR-09", oe: "OE1", title: "Importar presenças homologadas", prio: "Fora do MVP", prioClass: "out", quad: "Q4", scope: "Pós-MVP", rns: [], rnfs: ["RNF02"], ct: "CT-M1-10" },
    // CAR-10 (OE1)
    { id: "RF36", car: "CAR-10", oe: "OE1", title: "Exportar dados consolidados em planilha", prio: "Evolutivo", prioClass: "low", quad: "Q3", scope: "Pós-MVP", rns: [], rnfs: ["RNF02"], ct: "CT-M1-17" },
    // CAR-03 (OE2)
    { id: "RF05", car: "CAR-03", oe: "OE2", title: "Solicitar prévia de fechamento", prio: "Planejado", prioClass: "med", quad: "Q2", scope: "MVP", rns: ["RN05", "RN25", "RN31"], rnfs: ["RNF05", "RNF06", "RNF10", "RNF18"], ct: "CT-M2-01" },
    { id: "RF06", car: "CAR-03", oe: "OE2", title: "Homologar fechamento financeiro", prio: "Alta Prioridade", prioClass: "high", quad: "Q1", scope: "MVP", rns: ["RN05", "RN08", "RN17"], rnfs: ["RNF05", "RNF06", "RNF10"], ct: "CT-M2-02" },
    { id: "RF21", car: "CAR-03", oe: "OE2", title: "Estornar fechamento financeiro", prio: "Fora do MVP", prioClass: "out", quad: "Q4", scope: "Pós-MVP", rns: ["RN17"], rnfs: ["RNF05", "RNF06", "RNF08"], ct: "CT-M2-09" },
    { id: "RF27", car: "CAR-03", oe: "OE2", title: "Configurar tabela de valores de diárias técnicas", prio: "Alta Prioridade", prioClass: "high", quad: "Q1", scope: "MVP", rns: ["RN25", "RN31"], rnfs: ["RNF06"], ct: "CT-M2-10" },
    // CAR-04 (OE2)
    { id: "RF07", car: "CAR-04", oe: "OE2", title: "Submeter solicitação de reembolso", prio: "Alta Prioridade", prioClass: "high", quad: "Q1", scope: "MVP", rns: ["RN06", "RN08", "RN09"], rnfs: ["RNF06", "RNF07", "RNF20"], ct: "CT-M2-03" },
    { id: "RF08", car: "CAR-04", oe: "OE2", title: "Deliberar solicitação de reembolso", prio: "Alta Prioridade", prioClass: "high", quad: "Q1", scope: "MVP", rns: ["RN07", "RN08", "RN27"], rnfs: ["RNF06", "RNF07"], ct: "CT-M2-04" },
    { id: "RF28", car: "CAR-04", oe: "OE2", title: "Submeter solicitação de adiantamento operacional", prio: "Alta Prioridade", prioClass: "high", quad: "Q1", scope: "MVP", rns: ["RN09", "RN26"], rnfs: ["RNF06", "RNF07"], ct: "CT-M2-11" },
    { id: "RF29", car: "CAR-04", oe: "OE2", title: "Deliberar solicitação de adiantamento operacional", prio: "Alta Prioridade", prioClass: "high", quad: "Q1", scope: "MVP", rns: ["RN07", "RN27"], rnfs: ["RNF06", "RNF07"], ct: "CT-M2-12" },
    // CAR-05 (OE3)
    { id: "RF09", car: "CAR-05", oe: "OE3", title: "Apropriar custos operacionais", prio: "Planejado", prioClass: "med", quad: "Q2", scope: "MVP", rns: ["RN05", "RN09", "RN10", "RN11", "RN12"], rnfs: ["RNF10", "RNF11", "RNF18", "RNF20"], ct: "CT-M3-01" },
    { id: "RF10", car: "CAR-05", oe: "OE3", title: "Consultar rastreabilidade de custos", prio: "Alta Prioridade", prioClass: "high", quad: "Q1", scope: "MVP", rns: ["RN12"], rnfs: ["RNF09", "RNF10"], ct: "CT-M3-02" },
    { id: "RF30", car: "CAR-05", oe: "OE3", title: "Consultar comparativo histórico de custos entre contratos", prio: "Fora do MVP", prioClass: "out", quad: "Q4", scope: "Pós-MVP", rns: ["RN28"], rnfs: ["RNF09", "RNF10", "RNF12"], ct: "CT-M3-09" },
    { id: "RF33", car: "CAR-05", oe: "OE3", title: "Cadastrar contrato de obra", prio: "Alta Prioridade", prioClass: "high", quad: "Q1", scope: "MVP", rns: ["RN09", "RN11"], rnfs: ["RNF10", "RNF11"], ct: "CT-M3-11" },
    { id: "RF37", car: "CAR-05", oe: "OE3", title: "Atualizar contrato de obra", prio: "Alta Prioridade", prioClass: "high", quad: "Q1", scope: "MVP", rns: ["RN09", "RN11"], rnfs: ["RNF10", "RNF11"], ct: "CT-M3-13" },
    { id: "RF38", car: "CAR-05", oe: "OE3", title: "Consultar contratos de obra", prio: "Alta Prioridade", prioClass: "high", quad: "Q1", scope: "MVP", rns: [], rnfs: ["RNF09", "RNF10"], ct: "CT-M3-14" },
    // CAR-06 (OE3)
    { id: "RF11", car: "CAR-06", oe: "OE3", title: "Filtrar indicadores de custos", prio: "Alta Prioridade", prioClass: "high", quad: "Q1", scope: "MVP", rns: ["RN14"], rnfs: ["RNF09", "RNF10", "RNF12", "RNF19"], ct: "CT-M3-03" },
    { id: "RF12", car: "CAR-06", oe: "OE3", title: "Monitorar execução orçamentária", prio: "Fora do MVP", prioClass: "out", quad: "Q4", scope: "Pós-MVP", rns: ["RN13", "RN14"], rnfs: ["RNF09", "RNF10", "RNF12", "RNF19"], ct: "CT-M3-04" },
    { id: "RF31", car: "CAR-06", oe: "OE3", title: "Configurar alertas de execução orçamentária", prio: "Fora do MVP", prioClass: "out", quad: "Q4", scope: "Pós-MVP", rns: ["RN29"], rnfs: ["RNF09", "RNF10", "RNF12"], ct: "CT-M3-10" },
    { id: "RF34", car: "CAR-06", oe: "OE3", title: "Cadastrar centro de custo de obra", prio: "Alta Prioridade", prioClass: "high", quad: "Q1", scope: "MVP", rns: ["RN09", "RN11"], rnfs: ["RNF09", "RNF10"], ct: "CT-M3-12" },
    { id: "RF39", car: "CAR-06", oe: "OE3", title: "Atualizar centro de custo de obra", prio: "Alta Prioridade", prioClass: "high", quad: "Q1", scope: "MVP", rns: ["RN09", "RN11"], rnfs: ["RNF09", "RNF10"], ct: "CT-M3-15" },
    { id: "RF40", car: "CAR-06", oe: "OE3", title: "Definir tetos orçamentários de obra", prio: "Alta Prioridade", prioClass: "high", quad: "Q1", scope: "MVP", rns: ["RN13", "RN29"], rnfs: ["RNF09", "RNF10"], ct: "CT-M3-16" },
    // CAR-07 (OE4)
    { id: "RF13", car: "CAR-07", oe: "OE4", title: "Efetuar login no sistema", prio: "Alta Prioridade", prioClass: "high", quad: "Q1", scope: "MVP", rns: ["RN15"], rnfs: ["RNF03", "RNF13", "RNF14", "RNF18", "RNF20"], ct: "CT-M4-01" },
    { id: "RF14", car: "CAR-07", oe: "OE4", title: "Gerenciar perfis de acesso", prio: "Alta Prioridade", prioClass: "high", quad: "Q1", scope: "MVP", rns: ["RN16"], rnfs: ["RNF14", "RNF20"], ct: "CT-M4-02" },
    { id: "RF17", car: "CAR-07", oe: "OE4", title: "Ativar acesso inicial e recuperar credenciais", prio: "Alta Prioridade", prioClass: "high", quad: "Q1", scope: "MVP", rns: ["RN15"], rnfs: ["RNF14"], ct: "CT-M4-09" },
    { id: "RF18", car: "CAR-07", oe: "OE4", title: "Encerrar sessão manualmente", prio: "Alta Prioridade", prioClass: "high", quad: "Q1", scope: "MVP", rns: ["RN15"], rnfs: ["RNF13", "RNF14"], ct: "CT-M4-10" },
    { id: "RF23", car: "CAR-07", oe: "OE4", title: "Bloquear acesso após tentativas falhas consecutivas", prio: "Alta Prioridade", prioClass: "high", quad: "Q1", scope: "MVP", rns: ["RN20"], rnfs: ["RNF14"], ct: "CT-M4-12" },
    { id: "RF24", car: "CAR-07", oe: "OE4", title: "Impor renovação periódica de senhas", prio: "Evolutivo", prioClass: "low", quad: "Q3", scope: "Pós-MVP", rns: ["RN21"], rnfs: ["RNF14"], ct: "CT-M4-13" },
    // CAR-08 (OE4)
    { id: "RF15", car: "CAR-08", oe: "OE4", title: "Consultar trilha de auditoria", prio: "Fora do MVP", prioClass: "out", quad: "Q4", scope: "Pós-MVP", rns: ["RN17", "RN18", "RN19"], rnfs: ["RNF15", "RNF16", "RNF17"], ct: "CT-M4-03" },
    { id: "RF16", car: "CAR-08", oe: "OE4", title: "Exportar relatório de auditoria", prio: "Fora do MVP", prioClass: "out", quad: "Q4", scope: "Pós-MVP", rns: ["RN17", "RN18", "RN19"], rnfs: ["RNF15", "RNF16", "RNF17"], ct: "CT-M4-04" }
  ];

  function normalizeText(str) {
    return (str || "")
      .toString()
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .trim();
  }

  function injectStyles() {
    if (document.getElementById("duoc-pyramid-styles")) return;
    const style = document.createElement("style");
    style.id = "duoc-pyramid-styles";
    style.textContent = `
      .duoc-pyr-shell {
        margin: 1.4rem 0 2rem 0;
        border-radius: 16px;
        border: 1px solid rgba(148, 163, 184, 0.22);
        background: radial-gradient(circle at 50% 0%, rgba(15, 23, 42, 0.96), rgba(9, 13, 24, 0.99));
        box-shadow: 0 20px 45px -15px rgba(0, 0, 0, 0.55);
        overflow: hidden;
        font-family: inherit;
        position: relative;
      }
      [data-md-color-scheme="default"] .duoc-pyr-shell {
        background: radial-gradient(circle at 50% 0%, #f8fafc, #f1f5f9);
        border-color: rgba(15, 23, 42, 0.14);
        box-shadow: 0 14px 34px -12px rgba(15, 23, 42, 0.12);
      }
      .duoc-pyr-shell.is-fullscreen {
        position: fixed;
        inset: 0;
        z-index: 9999;
        margin: 0;
        border-radius: 0;
        display: flex;
        flex-direction: column;
      }
      .duoc-pyr-toolbar {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        align-items: center;
        justify-content: space-between;
        padding: 14px 18px;
        background: rgba(15, 23, 42, 0.85);
        border-bottom: 1px solid rgba(148, 163, 184, 0.16);
        backdrop-filter: blur(10px);
      }
      [data-md-color-scheme="default"] .duoc-pyr-toolbar {
        background: rgba(255, 255, 255, 0.92);
        border-bottom-color: rgba(15, 23, 42, 0.1);
      }
      .duoc-pyr-search-group {
        position: relative;
        flex: 1 1 320px;
        max-width: 520px;
        display: flex;
        align-items: center;
      }
      .duoc-pyr-search-icon {
        position: absolute;
        left: 12px;
        width: 17px;
        height: 17px;
        opacity: 0.65;
        pointer-events: none;
        color: #94a3b8;
      }
      .duoc-pyr-search-input {
        width: 100%;
        padding: 9px 36px 9px 38px;
        border-radius: 10px;
        border: 1.5px solid rgba(56, 189, 248, 0.35);
        background: rgba(15, 23, 42, 0.9);
        color: #f8fafc;
        font-size: 0.85rem;
        outline: none;
        transition: all 0.2s ease;
      }
      [data-md-color-scheme="default"] .duoc-pyr-search-input {
        background: #ffffff;
        color: #0f172a;
        border-color: rgba(2, 132, 199, 0.35);
      }
      .duoc-pyr-search-input:focus {
        border-color: #38bdf8;
        box-shadow: 0 0 0 3px rgba(56, 189, 248, 0.22);
      }
      .duoc-pyr-search-clear {
        position: absolute;
        right: 8px;
        background: rgba(148, 163, 184, 0.2);
        border: none;
        color: #e2e8f0;
        width: 22px;
        height: 22px;
        border-radius: 50%;
        font-size: 13px;
        line-height: 1;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
      }
      [data-md-color-scheme="default"] .duoc-pyr-search-clear {
        color: #334155;
        background: rgba(15, 23, 42, 0.1);
      }
      .duoc-pyr-search-clear.visible {
        display: inline-flex;
      }
      .duoc-pyr-filters {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        align-items: center;
      }
      .duoc-pyr-pill-btn {
        padding: 6px 11px;
        border-radius: 8px;
        border: 1px solid rgba(148, 163, 184, 0.25);
        background: rgba(30, 41, 59, 0.75);
        color: #cbd5e1;
        font-size: 0.75rem;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.18s ease;
        display: inline-flex;
        align-items: center;
        gap: 6px;
      }
      [data-md-color-scheme="default"] .duoc-pyr-pill-btn {
        background: #ffffff;
        color: #334155;
        border-color: rgba(15, 23, 42, 0.15);
      }
      .duoc-pyr-pill-btn:hover {
        transform: translateY(-1px);
        border-color: #38bdf8;
      }
      .duoc-pyr-pill-btn.active {
        background: rgba(2, 132, 199, 0.28);
        border-color: #38bdf8;
        color: #ffffff;
        box-shadow: 0 0 12px rgba(56, 189, 248, 0.3);
      }
      [data-md-color-scheme="default"] .duoc-pyr-pill-btn.active {
        background: #0284c7;
        color: #ffffff;
        border-color: #0284c7;
      }
      .duoc-pyr-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        display: inline-block;
      }
      .duoc-pyr-zoom-controls {
        display: flex;
        gap: 5px;
        align-items: center;
      }
      .duoc-pyr-icon-btn {
        padding: 6px 10px;
        border-radius: 8px;
        border: 1px solid rgba(148, 163, 184, 0.25);
        background: rgba(30, 41, 59, 0.75);
        color: #e2e8f0;
        font-size: 0.75rem;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.15s ease;
      }
      [data-md-color-scheme="default"] .duoc-pyr-icon-btn {
        background: #ffffff;
        color: #1e293b;
        border-color: rgba(15, 23, 42, 0.15);
      }
      .duoc-pyr-icon-btn:hover {
        border-color: #38bdf8;
        color: #38bdf8;
      }
      .duoc-pyr-inspector {
        padding: 9px 18px;
        background: rgba(15, 23, 42, 0.65);
        border-bottom: 1px solid rgba(148, 163, 184, 0.14);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        font-size: 0.78rem;
        color: #cbd5e1;
        min-height: 42px;
      }
      [data-md-color-scheme="default"] .duoc-pyr-inspector {
        background: rgba(241, 245, 249, 0.9);
        color: #334155;
        border-bottom-color: rgba(15, 23, 42, 0.08);
      }
      .duoc-pyr-breadcrumbs {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 6px;
      }
      .duoc-pyr-crumb {
        padding: 3px 9px;
        border-radius: 6px;
        font-weight: 700;
        font-size: 0.73rem;
        text-decoration: none !important;
        border: 1px solid transparent;
        transition: transform 0.15s ease;
      }
      .duoc-pyr-crumb:hover {
        transform: translateY(-1px);
      }
      .duoc-pyr-crumb-sep {
        opacity: 0.55;
        font-weight: 700;
      }
      .duoc-pyr-chips {
        display: flex;
        flex-wrap: wrap;
        gap: 5px;
        align-items: center;
      }
      .duoc-pyr-match-chip {
        padding: 2px 8px;
        border-radius: 6px;
        font-size: 0.71rem;
        font-weight: 700;
        cursor: pointer;
        border: 1px solid rgba(148, 163, 184, 0.3);
        background: rgba(30, 41, 59, 0.8);
        color: #f8fafc;
        transition: all 0.15s ease;
      }
      [data-md-color-scheme="default"] .duoc-pyr-match-chip {
        background: #ffffff;
        color: #0f172a;
        border-color: rgba(15, 23, 42, 0.2);
      }
      .duoc-pyr-match-chip:hover,
      .duoc-pyr-match-chip.focused {
        border-color: #38bdf8;
        background: rgba(2, 132, 199, 0.32);
        color: #ffffff;
      }
      [data-md-color-scheme="default"] .duoc-pyr-match-chip.focused {
        background: #0284c7;
        color: #ffffff;
      }

      /* Viewport & Canvas */
      .duoc-pyr-viewport {
        position: relative;
        width: 100%;
        height: 670px;
        overflow: hidden;
        cursor: grab;
        user-select: none;
        background-image: radial-gradient(rgba(148, 163, 184, 0.12) 1px, transparent 1px);
        background-size: 24px 24px;
      }
      .duoc-pyr-shell.is-fullscreen .duoc-pyr-viewport {
        flex: 1;
        height: auto;
      }
      .duoc-pyr-viewport.is-dragging {
        cursor: grabbing;
      }
      .duoc-pyr-world {
        position: absolute;
        top: 0;
        left: 0;
        transform-origin: 0 0;
        will-change: transform;
      }
      .duoc-pyr-world.smooth-cam {
        transition: transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
      }
      .duoc-pyr-svg {
        position: absolute;
        top: 0;
        left: 0;
        overflow: visible;
        pointer-events: none;
        z-index: 1;
      }
      .duoc-pyr-nodes {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
      }

      /* Tier Background Bands */
      .duoc-pyr-tier-band {
        position: absolute;
        left: 30px;
        right: 30px;
        border-radius: 18px;
        border: 1px dashed rgba(148, 163, 184, 0.14);
        background: rgba(15, 23, 42, 0.24);
        pointer-events: none;
        z-index: 0;
      }
      [data-md-color-scheme="default"] .duoc-pyr-tier-band {
        background: rgba(255, 255, 255, 0.45);
        border-color: rgba(15, 23, 42, 0.1);
      }
      .duoc-pyr-tier-label {
        position: absolute;
        top: 12px;
        left: 18px;
        font-size: 13px;
        font-weight: 800;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        color: rgba(148, 163, 184, 0.55);
      }
      [data-md-color-scheme="default"] .duoc-pyr-tier-label {
        color: rgba(15, 23, 42, 0.45);
      }

      /* Edges */
      .duoc-pyr-edge {
        fill: none;
        stroke-width: 2.2px;
        opacity: 0.38;
        transition: opacity 0.35s ease, stroke-width 0.35s ease, filter 0.35s ease;
      }
      .duoc-pyr-world.has-highlight .duoc-pyr-edge {
        opacity: 0.07;
      }
      .duoc-pyr-world.has-highlight .duoc-pyr-edge.is-painted {
        opacity: 1;
        stroke-width: 5.5px;
        stroke-dasharray: 12 6;
        animation: duocEdgeFlow 1s linear infinite;
      }
      @keyframes duocEdgeFlow {
        from { stroke-dashoffset: 36; }
        to { stroke-dashoffset: 0; }
      }

      /* Base Node Styling (Matching .req-card) */
      .duoc-pyr-node {
        position: absolute;
        box-sizing: border-box;
        border-radius: 12px;
        padding: 12px 14px;
        cursor: pointer;
        transition: opacity 0.35s ease, transform 0.35s cubic-bezier(0.22, 1, 0.36, 1), box-shadow 0.3s ease, border-color 0.3s ease, left 0.55s cubic-bezier(0.22, 1, 0.36, 1), top 0.55s cubic-bezier(0.22, 1, 0.36, 1);
        color: #f8fafc;
        box-shadow: 0 8px 20px -6px rgba(0, 0, 0, 0.45);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
      }
      [data-md-color-scheme="default"] .duoc-pyr-node {
        color: #0f172a;
        box-shadow: 0 6px 16px -4px rgba(15, 23, 42, 0.12);
      }
      .duoc-pyr-node:hover {
        transform: translateY(-3px) scale(1.015);
        z-index: 10;
      }
      .duoc-pyr-world.has-highlight .duoc-pyr-node {
        opacity: 0.13;
        filter: grayscale(45%);
      }
      .duoc-pyr-world.has-highlight .duoc-pyr-node.is-painted {
        opacity: 1;
        filter: none;
        z-index: 15;
      }
      .duoc-pyr-world.has-highlight .duoc-pyr-node.is-target {
        opacity: 1;
        filter: none;
        z-index: 25;
        transform: scale(1.04);
      }

      /* Node Header & Badges */
      .duoc-pyr-node-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 6px;
        margin-bottom: 6px;
      }
      .duoc-pyr-code {
        font-family: var(--md-code-font-family, monospace);
        font-weight: 800;
        font-size: 0.82rem;
        padding: 2px 8px;
        border-radius: 6px;
        letter-spacing: 0.03em;
        background: rgba(15, 23, 42, 0.65);
        border: 1px solid rgba(255, 255, 255, 0.15);
        color: #ffffff;
      }
      [data-md-color-scheme="default"] .duoc-pyr-code {
        background: rgba(15, 23, 42, 0.85);
        color: #ffffff;
      }
      .duoc-pyr-title {
        font-weight: 700;
        font-size: 0.88rem;
        line-height: 1.28;
        margin-bottom: 6px;
      }
      .duoc-pyr-desc {
        font-size: 0.74rem;
        line-height: 1.32;
        opacity: 0.84;
      }

      /* Priority Pills matching .req-pill-priority */
      .duoc-pyr-prio {
        font-size: 0.65rem;
        font-weight: 700;
        padding: 2px 7px;
        border-radius: 5px;
        text-transform: uppercase;
        letter-spacing: 0.03em;
        white-space: nowrap;
      }
      .duoc-pyr-prio.high {
        background: rgba(234, 88, 12, 0.22);
        border: 1px solid #ea580c;
        color: #fb923c;
      }
      [data-md-color-scheme="default"] .duoc-pyr-prio.high {
        background: rgba(234, 88, 12, 0.14);
        color: #c2410c;
      }
      .duoc-pyr-prio.med {
        background: rgba(37, 99, 235, 0.22);
        border: 1px solid #2563eb;
        color: #60a5fa;
      }
      [data-md-color-scheme="default"] .duoc-pyr-prio.med {
        background: rgba(37, 99, 235, 0.14);
        color: #1d4ed8;
      }
      .duoc-pyr-prio.low {
        background: rgba(100, 116, 139, 0.22);
        border: 1px solid #64748b;
        color: #cbd5e1;
      }
      [data-md-color-scheme="default"] .duoc-pyr-prio.low {
        background: rgba(100, 116, 139, 0.15);
        color: #475569;
      }
      .duoc-pyr-prio.out {
        background: rgba(239, 68, 68, 0.2);
        border: 1px solid #ef4444;
        color: #f87171;
      }
      [data-md-color-scheme="default"] .duoc-pyr-prio.out {
        background: rgba(239, 68, 68, 0.12);
        color: #b91c1c;
      }

      /* RF Meta Footer (RN, RNF, CT) */
      .duoc-pyr-rf-meta {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
        align-items: center;
        justify-content: space-between;
        padding-top: 6px;
        margin-top: auto;
        border-top: 1px solid rgba(148, 163, 184, 0.16);
        font-size: 0.67rem;
        opacity: 0.9;
      }
      .duoc-pyr-rf-tags {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
      }
      .duoc-pyr-mini-tag {
        padding: 1px 5px;
        border-radius: 4px;
        background: rgba(15, 23, 42, 0.55);
        border: 1px solid rgba(148, 163, 184, 0.25);
        font-family: var(--md-code-font-family, monospace);
        font-size: 0.64rem;
      }
      [data-md-color-scheme="default"] .duoc-pyr-mini-tag {
        background: rgba(255, 255, 255, 0.75);
        border-color: rgba(15, 23, 42, 0.18);
      }
      .duoc-pyr-open-link {
        color: inherit !important;
        text-decoration: none !important;
        font-weight: 800;
        font-size: 0.68rem;
        padding: 1px 6px;
        border-radius: 4px;
        background: rgba(255, 255, 255, 0.12);
      }
      [data-md-color-scheme="default"] .duoc-pyr-open-link {
        background: rgba(15, 23, 42, 0.08);
      }
      .duoc-pyr-open-link:hover {
        text-decoration: underline !important;
      }

      /* Footer Hint Bar */
      .duoc-pyr-footer {
        padding: 8px 18px;
        background: rgba(15, 23, 42, 0.85);
        border-top: 1px solid rgba(148, 163, 184, 0.14);
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        gap: 8px;
        font-size: 0.73rem;
        color: #94a3b8;
      }
      [data-md-color-scheme="default"] .duoc-pyr-footer {
        background: #ffffff;
        color: #64748b;
        border-top-color: rgba(15, 23, 42, 0.08);
      }
    `;
    document.head.appendChild(style);
  }

  function buildLayout() {
    const nodes = {};
    const edges = [];

    // RF grid parameters: 2 columns per CAR with central spine gap so lines never cross cards
    const rfW = 240;
    const rfH = 114;
    const rfSpineGap = 30;
    const rfRowGap = 20;
    const carGroupGap = 64;
    const carClusterWidth = rfW * 2 + rfSpineGap; // 510px
    const rfStartY = 670;

    let cursorX = 80;
    const carCenters = {};

    CARS_DATA.forEach((car) => {
      const rfs = RFS_DATA.filter((r) => r.car === car.id);
      const centerX = cursorX + carClusterWidth / 2;
      carCenters[car.id] = centerX;

      const carW = 330;
      const carH = 116;
      nodes[car.id] = {
        id: car.id,
        type: "CAR",
        oe: car.oe,
        data: car,
        x: centerX - carW / 2,
        y: 440,
        w: carW,
        h: carH,
        cx: centerX,
        cy: 440 + carH / 2
      };

      rfs.forEach((rf, idx) => {
        const row = Math.floor(idx / 2);
        const col = idx % 2;
        const isSingleInLastRow = rfs.length % 2 === 1 && idx === rfs.length - 1;
        let x;
        if (rfs.length === 1) {
          x = centerX - rfW / 2;
        } else if (col === 0) {
          x = cursorX;
        } else {
          x = cursorX + rfW + rfSpineGap;
        }

        const y = rfStartY + row * (rfH + rfRowGap);
        nodes[rf.id] = {
          id: rf.id,
          type: "RF",
          oe: rf.oe,
          car: rf.car,
          data: rf,
          col: rfs.length === 1 ? "center" : col === 0 ? "left" : "right",
          isSingleInLastRow: isSingleInLastRow,
          x: x,
          y: y,
          w: rfW,
          h: rfH,
          cx: x + rfW / 2,
          cy: y + rfH / 2
        };

        edges.push({
          id: `edge-${car.id}-${rf.id}`,
          from: car.id,
          to: rf.id,
          oe: rf.oe,
          kind: "CAR-RF"
        });
      });

      cursorX += carClusterWidth + carGroupGap;
    });

    const totalWidth = cursorX - carGroupGap + 80;

    // Position OEs centered over their child CARs
    OES_DATA.forEach((oe) => {
      const childCars = CARS_DATA.filter((c) => c.oe === oe.id);
      const minX = Math.min(...childCars.map((c) => carCenters[c.id]));
      const maxX = Math.max(...childCars.map((c) => carCenters[c.id]));
      const centerX = (minX + maxX) / 2;
      const oeW = 420;
      const oeH = 118;

      nodes[oe.id] = {
        id: oe.id,
        type: "OE",
        oe: oe.id,
        data: oe,
        x: centerX - oeW / 2,
        y: 230,
        w: oeW,
        h: oeH,
        cx: centerX,
        cy: 230 + oeH / 2
      };

      childCars.forEach((car) => {
        edges.push({
          id: `edge-${oe.id}-${car.id}`,
          from: oe.id,
          to: car.id,
          oe: oe.id,
          kind: "OE-CAR"
        });
      });
    });

    // Position OG at top center of the pyramid
    const ogW = 680;
    const ogH = 122;
    const ogCenterX = totalWidth / 2;
    nodes.OG = {
      id: "OG",
      type: "OG",
      oe: "OG",
      data: OG_DATA,
      defaultX: ogCenterX - ogW / 2,
      defaultCx: ogCenterX,
      x: ogCenterX - ogW / 2,
      y: 36,
      w: ogW,
      h: ogH,
      cx: ogCenterX,
      cy: 36 + ogH / 2
    };

    OES_DATA.forEach((oe) => {
      edges.push({
        id: `edge-OG-${oe.id}`,
        from: "OG",
        to: oe.id,
        oe: oe.id,
        kind: "OG-OE"
      });
    });

    const totalHeight = rfStartY + 3 * (rfH + rfRowGap) + 70;
    return { nodes, edges, totalWidth, totalHeight };
  }

  function computeEdgePath(fromNode, toNode, kind) {
    const x1 = fromNode.cx;
    const y1 = fromNode.y + fromNode.h;

    if (kind === "CAR-RF") {
      if (toNode.col === "center") {
        const x2 = toNode.cx;
        const y2 = toNode.y;
        return `M ${x1} ${y1} L ${x2} ${y2}`;
      }
      // Route down the central spine between the 2 columns and branch horizontally into the RF card
      const targetX = toNode.col === "left" ? toNode.x + toNode.w : toNode.x;
      const targetY = toNode.cy;
      const r = 10;
      const dir = toNode.col === "left" ? -1 : 1;
      return `M ${x1} ${y1} L ${x1} ${targetY - r} Q ${x1} ${targetY} ${x1 + dir * r} ${targetY} L ${targetX} ${targetY}`;
    }

    const x2 = toNode.cx;
    const y2 = toNode.y;
    const midY = (y1 + y2) / 2;
    return `M ${x1} ${y1} C ${x1} ${midY}, ${x2} ${midY}, ${x2} ${y2}`;
  }

  function initPyramid() {
    const mount = document.getElementById("duoc-interactive-pyramid");
    if (!mount || mount.dataset.initialized === "true") return;
    mount.dataset.initialized = "true";

    injectStyles();
    const layout = buildLayout();
    const isLight = () => document.body.getAttribute("data-md-color-scheme") === "default";

    mount.innerHTML = `
      <div class="duoc-pyr-shell" id="duoc-pyr-shell">
        <div class="duoc-pyr-toolbar">
          <div class="duoc-pyr-search-group">
            <svg class="duoc-pyr-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              class="duoc-pyr-search-input"
              id="duoc-pyr-search"
              placeholder="Pesquisar requisito por código ou nome (ex: RF04, 07, reembolso, apontamento, CAR-02, RN06)..."
              autocomplete="off"
            />
            <button type="button" class="duoc-pyr-search-clear" id="duoc-pyr-clear" title="Limpar busca">×</button>
          </div>

          <div class="duoc-pyr-filters" id="duoc-pyr-mod-filters">
            <button type="button" class="duoc-pyr-pill-btn active" data-mod="ALL">Visão Geral (40 RFs)</button>
            <button type="button" class="duoc-pyr-pill-btn" data-mod="OE1"><span class="duoc-pyr-dot" style="background:#38bdf8"></span>OE1 · Campo (12)</button>
            <button type="button" class="duoc-pyr-pill-btn" data-mod="OE2"><span class="duoc-pyr-dot" style="background:#34d399"></span>OE2 · Financeiro (8)</button>
            <button type="button" class="duoc-pyr-pill-btn" data-mod="OE3"><span class="duoc-pyr-dot" style="background:#fbbf24"></span>OE3 · Custos (12)</button>
            <button type="button" class="duoc-pyr-pill-btn" data-mod="OE4"><span class="duoc-pyr-dot" style="background:#a78bfa"></span>OE4 · Governança (8)</button>
          </div>

          <div class="duoc-pyr-zoom-controls">
            <button type="button" class="duoc-pyr-icon-btn" id="duoc-pyr-zoom-in" title="Aproximar Zoom">+</button>
            <button type="button" class="duoc-pyr-icon-btn" id="duoc-pyr-zoom-out" title="Afastar Zoom">−</button>
            <button type="button" class="duoc-pyr-icon-btn" id="duoc-pyr-zoom-reset" title="Enquadrar Pirâmide Completa">Ver Tudo</button>
            <button type="button" class="duoc-pyr-icon-btn" id="duoc-pyr-fullscreen" title="Alternar Tela Cheia">Tela Cheia</button>
          </div>
        </div>

        <div class="duoc-pyr-inspector" id="duoc-pyr-inspector">
          <div class="duoc-pyr-breadcrumbs" id="duoc-pyr-breadcrumbs">
            <span><strong>Modo Visão Geral:</strong> Digite um requisito na barra acima ou clique em qualquer card da pirâmide para pintar sua cadeia de derivação (RF → CAR → OE → OG) e aplicar zoom automático.</span>
          </div>
          <div class="duoc-pyr-chips" id="duoc-pyr-chips"></div>
        </div>

        <div class="duoc-pyr-viewport" id="duoc-pyr-viewport">
          <div class="duoc-pyr-world smooth-cam" id="duoc-pyr-world" style="width:${layout.totalWidth}px; height:${layout.totalHeight}px;">
            <div class="duoc-pyr-tier-band" style="top:18px; height:156px;">
              <span class="duoc-pyr-tier-label">Nível 1 · Direcionador Estratégico — Objetivo Geral (OG)</span>
            </div>
            <div class="duoc-pyr-tier-band" style="top:208px; height:162px;">
              <span class="duoc-pyr-tier-label">Nível 2 · Direcionadores Táticos — 4 Objetivos Específicos (OE1 a OE4)</span>
            </div>
            <div class="duoc-pyr-tier-band" style="top:418px; height:162px;">
              <span class="duoc-pyr-tier-label">Nível 3 · Capacidades Arquiteturais — 10 Características do Produto (CAR-01 a CAR-10)</span>
            </div>
            <div class="duoc-pyr-tier-band" style="top:630px; height:${layout.totalHeight - 650}px;">
              <span class="duoc-pyr-tier-label">Nível 4 · Requisitos Executáveis, Regras e Testes — 40 Requisitos Funcionais (RF01 a RF40)</span>
            </div>

            <svg class="duoc-pyr-svg" id="duoc-pyr-svg" width="${layout.totalWidth}" height="${layout.totalHeight}" viewBox="0 0 ${layout.totalWidth} ${layout.totalHeight}"></svg>
            <div class="duoc-pyr-nodes" id="duoc-pyr-nodes"></div>
          </div>
        </div>

        <div class="duoc-pyr-footer">
          <span>Arraste com o mouse para mover o canvas · Use a roda do mouse (scroll) ou os botões para dar zoom · Clique em qualquer card para focar sua trilha</span>
          <span id="duoc-pyr-scale-indicator">Zoom: 100%</span>
        </div>
      </div>
    `;

    const shellEl = document.getElementById("duoc-pyr-shell");
    const viewportEl = document.getElementById("duoc-pyr-viewport");
    const worldEl = document.getElementById("duoc-pyr-world");
    const svgEl = document.getElementById("duoc-pyr-svg");
    const nodesContainer = document.getElementById("duoc-pyr-nodes");
    const searchInput = document.getElementById("duoc-pyr-search");
    const clearBtn = document.getElementById("duoc-pyr-clear");
    const breadcrumbsEl = document.getElementById("duoc-pyr-breadcrumbs");
    const chipsEl = document.getElementById("duoc-pyr-chips");
    const scaleIndicator = document.getElementById("duoc-pyr-scale-indicator");

    const domNodes = {};
    const domEdges = {};

    function applyNodeTheme(el, modKey, isTarget, isPainted) {
      const m = MODULES[modKey] || MODULES.OE1;
      const light = isLight();
      el.style.background = light ? m.bgLight : m.bgDark;
      el.style.borderTop = `4px solid ${m.color}`;
      el.style.borderLeft = `1.5px solid ${isPainted || isTarget ? m.border : "rgba(148, 163, 184, 0.28)"}`;
      el.style.borderRight = `1.5px solid ${isPainted || isTarget ? m.border : "rgba(148, 163, 184, 0.28)"}`;
      el.style.borderBottom = `1.5px solid ${isPainted || isTarget ? m.border : "rgba(148, 163, 184, 0.28)"}`;
      if (isTarget) {
        el.style.boxShadow = `0 0 0 3px ${m.border}, 0 14px 32px ${m.glow}`;
      } else if (isPainted) {
        el.style.boxShadow = `0 0 0 2px ${m.color}, 0 10px 24px ${m.glow}`;
      } else {
        el.style.boxShadow = light
          ? "0 6px 16px -4px rgba(15, 23, 42, 0.12)"
          : "0 8px 20px -6px rgba(0, 0, 0, 0.45)";
      }
    }

    // Render SVG Edges
    function renderEdges() {
      svgEl.innerHTML = "";
      layout.edges.forEach((edge) => {
        const fromNode = layout.nodes[edge.from];
        const toNode = layout.nodes[edge.to];
        const m = MODULES[edge.oe] || MODULES.OE1;
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("id", edge.id);
        path.setAttribute("class", "duoc-pyr-edge");
        path.setAttribute("d", computeEdgePath(fromNode, toNode, edge.kind));
        path.setAttribute("stroke", m.border);
        svgEl.appendChild(path);
        domEdges[edge.id] = path;
      });
    }

    function updateOgEdges() {
      OES_DATA.forEach((oe) => {
        const edgeId = `edge-OG-${oe.id}`;
        const path = domEdges[edgeId];
        if (path) {
          path.setAttribute("d", computeEdgePath(layout.nodes.OG, layout.nodes[oe.id], "OG-OE"));
        }
      });
    }

    // Render HTML Cards for all Nodes
    Object.values(layout.nodes).forEach((node) => {
      const el = document.createElement("div");
      el.className = `duoc-pyr-node duoc-pyr-node-${node.type.toLowerCase()}`;
      el.style.left = `${node.x}px`;
      el.style.top = `${node.y}px`;
      el.style.width = `${node.w}px`;
      el.style.height = `${node.h}px`;
      el.dataset.id = node.id;

      const m = MODULES[node.oe] || MODULES.OG;
      applyNodeTheme(el, node.oe, false, false);

      if (node.type === "OG") {
        el.innerHTML = `
          <div class="duoc-pyr-node-top">
            <span class="duoc-pyr-code" style="background:${m.color}; color:#0f172a;">${node.data.code}</span>
            <a href="${node.data.href}" class="duoc-pyr-open-link" onclick="event.stopPropagation();">Ver na Solução Proposta ↗</a>
          </div>
          <div class="duoc-pyr-title" style="font-size:1.02rem;">${node.data.title}</div>
        `;
      } else if (node.type === "OE") {
        el.innerHTML = `
          <div class="duoc-pyr-node-top">
            <span class="duoc-pyr-code" style="border-color:${m.border};">${node.data.code}</span>
            <a href="${node.data.href}" class="duoc-pyr-open-link" onclick="event.stopPropagation();">Abrir ${node.data.code} ↗</a>
          </div>
          <div class="duoc-pyr-title" style="font-size:0.95rem;">${node.data.title}</div>
        `;
      } else if (node.type === "CAR") {
        const rfCount = RFS_DATA.filter((r) => r.car === node.id).length;
        el.innerHTML = `
          <div class="duoc-pyr-node-top">
            <span class="duoc-pyr-code" style="border-color:${m.border};">${node.id}</span>
            <span class="duoc-pyr-mini-tag">${node.oe} · ${rfCount} ${rfCount === 1 ? "RF" : "RFs"}</span>
          </div>
          <div class="duoc-pyr-title">${node.data.title}</div>
        `;
      } else if (node.type === "RF") {
        const rf = node.data;
        const rnText = rf.rns.length ? rf.rns.slice(0, 2).join(", ") + (rf.rns.length > 2 ? `+${rf.rns.length - 2}` : "") : "s/ RN";
        const rnfText = rf.rnfs.length ? rf.rnfs.slice(0, 2).join(", ") + (rf.rnfs.length > 2 ? `+${rf.rnfs.length - 2}` : "") : "—";
        el.innerHTML = `
          <div class="duoc-pyr-node-top">
            <span class="duoc-pyr-code" style="border-color:${m.border};">${rf.id}</span>
            <span class="duoc-pyr-prio ${rf.prioClass}">${rf.prio}</span>
          </div>
          <div class="duoc-pyr-title" style="font-size:0.8rem; margin-bottom:2px;">${rf.title}</div>
          <div class="duoc-pyr-rf-meta">
            <div class="duoc-pyr-rf-tags">
              <span class="duoc-pyr-mini-tag" title="Regras: ${rf.rns.join(", ") || "Nenhuma"}">${rnText}</span>
              <span class="duoc-pyr-mini-tag" title="RNFs: ${rf.rnfs.join(", ")}">${rnfText}</span>
            </div>
            <a href="../#${rf.id.toLowerCase()}" class="duoc-pyr-open-link" onclick="event.stopPropagation();" title="Abrir card ${rf.id} no Catálogo">Card ↗</a>
          </div>
        `;
      }

      el.addEventListener("click", (e) => {
        e.stopPropagation();
        focusOnNode(node.id);
      });

      nodesContainer.appendChild(el);
      domNodes[node.id] = el;
    });

    renderEdges();

    // Camera state
    let cam = { x: 0, y: 0, scale: 0.25 };
    let isDragging = false;
    let dragStart = { x: 0, y: 0 };

    function applyCamera(smooth = true) {
      if (smooth) {
        worldEl.classList.add("smooth-cam");
      } else {
        worldEl.classList.remove("smooth-cam");
      }
      worldEl.style.transform = `translate(${cam.x}px, ${cam.y}px) scale(${cam.scale})`;
      scaleIndicator.textContent = `Zoom: ${Math.round(cam.scale * 100)}%`;
    }

    function fitBox(minX, minY, maxX, maxY, smooth = true, maxAllowedScale = 1.08) {
      const vw = viewportEl.clientWidth || 1000;
      const vh = viewportEl.clientHeight || 660;
      const padX = 56;
      const padY = 48;
      const boxW = Math.max(320, maxX - minX);
      const boxH = Math.max(260, maxY - minY);

      const scaleX = (vw - padX * 2) / boxW;
      const scaleY = (vh - padY * 2) / boxH;
      const scale = Math.min(Math.max(Math.min(scaleX, scaleY), 0.14), maxAllowedScale);

      const cx = (minX + maxX) / 2;
      const cy = (minY + maxY) / 2;

      cam.scale = scale;
      cam.x = vw / 2 - cx * scale;
      cam.y = vh / 2 - cy * scale;
      applyCamera(smooth);
    }

    function moveOgToX(centerX) {
      const og = layout.nodes.OG;
      const clampedCx = Math.max(og.w / 2 + 40, Math.min(layout.totalWidth - og.w / 2 - 40, centerX));
      og.cx = clampedCx;
      og.x = clampedCx - og.w / 2;
      if (domNodes.OG) {
        domNodes.OG.style.left = `${og.x}px`;
      }
      updateOgEdges();
    }

    function fitAll(smooth = true) {
      moveOgToX(layout.nodes.OG.defaultCx);
      fitBox(0, 0, layout.totalWidth, layout.totalHeight, smooth, 0.95);
    }

    function fitNodes(nodeIds, smooth = true) {
      if (!nodeIds || !nodeIds.length) {
        fitAll(smooth);
        return;
      }
      let minX = Infinity;
      let minY = Infinity;
      let maxX = -Infinity;
      let maxY = -Infinity;

      nodeIds.forEach((id) => {
        const n = layout.nodes[id];
        if (!n) return;
        minX = Math.min(minX, n.x);
        minY = Math.min(minY, n.y);
        maxX = Math.max(maxX, n.x + n.w);
        maxY = Math.max(maxY, n.y + n.h);
      });

      fitBox(minX, minY, maxX, maxY, smooth, 1.05);
    }

    function clearHighlights() {
      worldEl.classList.remove("has-highlight");
      Object.values(layout.nodes).forEach((n) => {
        const el = domNodes[n.id];
        if (!el) return;
        el.classList.remove("is-painted", "is-target");
        applyNodeTheme(el, n.oe, false, false);
      });
      Object.values(domEdges).forEach((path) => {
        path.classList.remove("is-painted");
        path.style.filter = "none";
      });
    }

    function applyHighlightState(paintedNodesSet, targetNodesSet, paintedEdgesSet) {
      worldEl.classList.add("has-highlight");

      Object.values(layout.nodes).forEach((n) => {
        const el = domNodes[n.id];
        if (!el) return;
        const isPainted = paintedNodesSet.has(n.id);
        const isTarget = targetNodesSet.has(n.id);
        el.classList.toggle("is-painted", isPainted);
        el.classList.toggle("is-target", isTarget);
        applyNodeTheme(el, n.oe, isTarget, isPainted);
      });

      layout.edges.forEach((e) => {
        const path = domEdges[e.id];
        if (!path) return;
        const active = paintedEdgesSet.has(e.id);
        path.classList.toggle("is-painted", active);
        const m = MODULES[e.oe] || MODULES.OE1;
        path.style.filter = active ? `drop-shadow(0 0 8px ${m.border})` : "none";
      });
    }

    function renderBreadcrumbsForRF(rf) {
      const m = MODULES[rf.oe];
      const carObj = CARS_DATA.find((c) => c.id === rf.car);
      const oeObj = OES_DATA.find((o) => o.id === rf.oe);
      breadcrumbsEl.innerHTML = `
        <span style="font-weight:700; margin-right:4px;">Trilha Conectada:</span>
        <a href="${OG_DATA.href}" class="duoc-pyr-crumb" style="background:rgba(218,165,32,0.2); border-color:#DAA520; color:#fbbf24;">OG</a>
        <span class="duoc-pyr-crumb-sep">➔</span>
        <a href="${oeObj.href}" class="duoc-pyr-crumb" style="background:rgba(2,132,199,0.18); border-color:${m.border}; color:${m.border};">${oeObj.id} · ${oeObj.title}</a>
        <span class="duoc-pyr-crumb-sep">➔</span>
        <a href="${carObj.href}" class="duoc-pyr-crumb" style="background:rgba(2,132,199,0.18); border-color:${m.border}; color:${m.border};">${carObj.id} · ${carObj.title}</a>
        <span class="duoc-pyr-crumb-sep">➔</span>
        <a href="../#${rf.id.toLowerCase()}" class="duoc-pyr-crumb" style="background:${m.color}; color:#ffffff;">${rf.id}: ${rf.title} (${rf.prio}) ↗</a>
      `;
    }

    function focusOnNode(nodeId) {
      const n = layout.nodes[nodeId];
      if (!n) return;

      const paintedNodes = new Set(["OG"]);
      const targetNodes = new Set([nodeId]);
      const paintedEdges = new Set();

      if (n.type === "RF") {
        const rf = n.data;
        paintedNodes.add(rf.oe);
        paintedNodes.add(rf.car);
        paintedNodes.add(rf.id);
        paintedEdges.add(`edge-OG-${rf.oe}`);
        paintedEdges.add(`edge-${rf.oe}-${rf.car}`);
        paintedEdges.add(`edge-${rf.car}-${rf.id}`);

        // Move OG directly above the CAR/OE column so the zoom is tight and vertical!
        moveOgToX(layout.nodes[rf.car].cx);
        applyHighlightState(paintedNodes, targetNodes, paintedEdges);
        fitNodes(["OG", rf.oe, rf.car, rf.id], true);
        renderBreadcrumbsForRF(rf);
      } else if (n.type === "CAR") {
        const car = n.data;
        const childRfs = RFS_DATA.filter((r) => r.car === car.id);
        paintedNodes.add(car.oe);
        paintedNodes.add(car.id);
        paintedEdges.add(`edge-OG-${car.oe}`);
        paintedEdges.add(`edge-${car.oe}-${car.id}`);
        childRfs.forEach((r) => {
          paintedNodes.add(r.id);
          paintedEdges.add(`edge-${car.id}-${r.id}`);
        });

        moveOgToX(layout.nodes[car.id].cx);
        applyHighlightState(paintedNodes, targetNodes, paintedEdges);
        fitNodes(Array.from(paintedNodes), true);

        const m = MODULES[car.oe];
        breadcrumbsEl.innerHTML = `
          <span style="font-weight:700;">Característica Selecionada:</span>
          <span class="duoc-pyr-crumb" style="border-color:#DAA520; color:#fbbf24;">OG</span>
          <span class="duoc-pyr-crumb-sep">➔</span>
          <span class="duoc-pyr-crumb" style="border-color:${m.border}; color:${m.border};">${car.oe}</span>
          <span class="duoc-pyr-crumb-sep">➔</span>
          <a href="${car.href}" class="duoc-pyr-crumb" style="background:${m.color}; color:#fff;">${car.id} · ${car.title} (${childRfs.length} RFs) ↗</a>
        `;
      } else if (n.type === "OE") {
        const oe = n.data;
        const childCars = CARS_DATA.filter((c) => c.oe === oe.id);
        const childRfs = RFS_DATA.filter((r) => r.oe === oe.id);
        paintedNodes.add(oe.id);
        paintedEdges.add(`edge-OG-${oe.id}`);
        childCars.forEach((c) => {
          paintedNodes.add(c.id);
          paintedEdges.add(`edge-${oe.id}-${c.id}`);
        });
        childRfs.forEach((r) => {
          paintedNodes.add(r.id);
          paintedEdges.add(`edge-${r.car}-${r.id}`);
        });

        moveOgToX(layout.nodes[oe.id].cx);
        applyHighlightState(paintedNodes, targetNodes, paintedEdges);
        fitNodes(Array.from(paintedNodes), true);

        const m = MODULES[oe.id];
        breadcrumbsEl.innerHTML = `
          <span style="font-weight:700;">Objetivo Específico Selecionado:</span>
          <span class="duoc-pyr-crumb" style="border-color:#DAA520; color:#fbbf24;">OG</span>
          <span class="duoc-pyr-crumb-sep">➔</span>
          <a href="${oe.href}" class="duoc-pyr-crumb" style="background:${m.color}; color:#fff;">${oe.id} · ${oe.title} (${childCars.length} CARs · ${childRfs.length} RFs) ↗</a>
        `;
      } else if (n.type === "OG") {
        resetToOverview();
      }
    }

    function resetToOverview() {
      clearHighlights();
      chipsEl.innerHTML = "";
      breadcrumbsEl.innerHTML = `
        <span><strong>Modo Visão Geral:</strong> Digite um requisito na barra acima ou clique em qualquer card da pirâmide para pintar sua cadeia de derivação (RF → CAR → OE → OG) e aplicar zoom automático.</span>
      `;
      document.querySelectorAll("#duoc-pyr-mod-filters .duoc-pyr-pill-btn").forEach((b) => {
        b.classList.toggle("active", b.dataset.mod === "ALL");
      });
      fitAll(true);
    }

    function performSearch(rawQuery) {
      const q = normalizeText(rawQuery);
      clearBtn.classList.toggle("visible", q.length > 0);

      if (!q) {
        resetToOverview();
        return;
      }

      // Check direct OE match (e.g., "oe1", "oe2")
      const exactOe = OES_DATA.find((o) => normalizeText(o.id) === q);
      if (exactOe) {
        chipsEl.innerHTML = "";
        focusOnNode(exactOe.id);
        return;
      }

      // Check direct CAR match (e.g., "car-01", "car01", "car 1")
      const exactCar = CARS_DATA.find(
        (c) => normalizeText(c.id) === q || normalizeText(c.id.replace("-", "")) === q
      );
      if (exactCar) {
        chipsEl.innerHTML = "";
        focusOnNode(exactCar.id);
        return;
      }

      // Match RFs by code, number (e.g. "04" -> RF04), title, CAR title, RN, RNF, CT, priority
      const numMatch = q.match(/^(?:rf[-_\s]?)?0*(\d{1,2})$/);
      const paddedRfCode = numMatch ? `rf${numMatch[1].padStart(2, "0")}` : null;

      let matchedRfs = RFS_DATA.filter((rf) => {
        if (paddedRfCode && normalizeText(rf.id) === paddedRfCode) return true;
        const carObj = CARS_DATA.find((c) => c.id === rf.car);
        const hay = normalizeText(
          `${rf.id} ${rf.title} ${rf.car} ${carObj ? carObj.title : ""} ${rf.oe} ${rf.prio} ${rf.scope} ${rf.rns.join(" ")} ${rf.rnfs.join(" ")} ${rf.ct}`
        );
        return hay.includes(q);
      });

      if (matchedRfs.length === 0) {
        clearHighlights();
        chipsEl.innerHTML = "";
        breadcrumbsEl.innerHTML = `<span style="color:#f87171; font-weight:700;">Nenhum requisito encontrado para "${rawQuery}". Tente buscar por código (ex: RF04, CAR-02, RN06) ou termo (ex: reembolso, apontamento, login).</span>`;
        return;
      }

      if (matchedRfs.length === 1) {
        chipsEl.innerHTML = "";
        focusOnNode(matchedRfs[0].id);
        return;
      }

      // Multiple RFs matched: paint all matched lineages and zoom into their bounding box
      const paintedNodes = new Set(["OG"]);
      const targetNodes = new Set();
      const paintedEdges = new Set();
      const carCxList = [];

      matchedRfs.forEach((rf) => {
        targetNodes.add(rf.id);
        paintedNodes.add(rf.id);
        paintedNodes.add(rf.car);
        paintedNodes.add(rf.oe);
        paintedEdges.add(`edge-OG-${rf.oe}`);
        paintedEdges.add(`edge-${rf.oe}-${rf.car}`);
        paintedEdges.add(`edge-${rf.car}-${rf.id}`);
        carCxList.push(layout.nodes[rf.car].cx);
      });

      const avgCx = carCxList.reduce((a, b) => a + b, 0) / carCxList.length;
      moveOgToX(avgCx);
      applyHighlightState(paintedNodes, targetNodes, paintedEdges);
      fitNodes(Array.from(paintedNodes), true);

      breadcrumbsEl.innerHTML = `
        <span><strong>${matchedRfs.length} requisitos encontrados</strong> para <code>"${rawQuery}"</code> · Clique em uma pílula ao lado para focar em um único requisito:</span>
      `;

      chipsEl.innerHTML = matchedRfs
        .slice(0, 12)
        .map(
          (rf) =>
            `<button type="button" class="duoc-pyr-match-chip" data-rf="${rf.id}" title="${rf.title}">${rf.id}</button>`
        )
        .join("");

      chipsEl.querySelectorAll(".duoc-pyr-match-chip").forEach((btn) => {
        btn.addEventListener("click", () => {
          chipsEl.querySelectorAll(".duoc-pyr-match-chip").forEach((b) => b.classList.remove("focused"));
          btn.classList.add("focused");
          focusOnNode(btn.dataset.rf);
        });
      });
    }

    // Event Listeners
    searchInput.addEventListener("input", (e) => {
      performSearch(e.target.value);
    });

    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        searchInput.value = "";
        performSearch("");
      }
    });

    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      performSearch("");
      searchInput.focus();
    });

    document.querySelectorAll("#duoc-pyr-mod-filters .duoc-pyr-pill-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("#duoc-pyr-mod-filters .duoc-pyr-pill-btn").forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        const mod = btn.dataset.mod;
        searchInput.value = "";
        clearBtn.classList.remove("visible");
        chipsEl.innerHTML = "";
        if (mod === "ALL") {
          resetToOverview();
        } else {
          focusOnNode(mod);
        }
      });
    });

    // Zoom & Fullscreen buttons
    document.getElementById("duoc-pyr-zoom-in").addEventListener("click", () => {
      const vw = viewportEl.clientWidth / 2;
      const vh = viewportEl.clientHeight / 2;
      const newScale = Math.min(cam.scale * 1.28, 1.6);
      cam.x = vw - ((vw - cam.x) / cam.scale) * newScale;
      cam.y = vh - ((vh - cam.y) / cam.scale) * newScale;
      cam.scale = newScale;
      applyCamera(true);
    });

    document.getElementById("duoc-pyr-zoom-out").addEventListener("click", () => {
      const vw = viewportEl.clientWidth / 2;
      const vh = viewportEl.clientHeight / 2;
      const newScale = Math.max(cam.scale / 1.28, 0.14);
      cam.x = vw - ((vw - cam.x) / cam.scale) * newScale;
      cam.y = vh - ((vh - cam.y) / cam.scale) * newScale;
      cam.scale = newScale;
      applyCamera(true);
    });

    document.getElementById("duoc-pyr-zoom-reset").addEventListener("click", () => {
      searchInput.value = "";
      clearBtn.classList.remove("visible");
      resetToOverview();
    });

    const fsBtn = document.getElementById("duoc-pyr-fullscreen");
    fsBtn.addEventListener("click", () => {
      const active = shellEl.classList.toggle("is-fullscreen");
      fsBtn.textContent = active ? "Sair da Tela Cheia" : "Tela Cheia";
      setTimeout(() => {
        if (worldEl.classList.contains("has-highlight")) {
          const activeIds = Array.from(nodesContainer.querySelectorAll(".is-painted")).map((el) => el.dataset.id);
          fitNodes(activeIds, true);
        } else {
          fitAll(true);
        }
      }, 60);
    });

    // Panning & Wheel Zoom on Viewport
    viewportEl.addEventListener("mousedown", (e) => {
      if (e.target.closest("a, button, input")) return;
      isDragging = true;
      viewportEl.classList.add("is-dragging");
      dragStart.x = e.clientX - cam.x;
      dragStart.y = e.clientY - cam.y;
    });

    window.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      cam.x = e.clientX - dragStart.x;
      cam.y = e.clientY - dragStart.y;
      applyCamera(false);
    });

    window.addEventListener("mouseup", () => {
      if (isDragging) {
        isDragging = false;
        viewportEl.classList.remove("is-dragging");
      }
    });

    viewportEl.addEventListener(
      "wheel",
      (e) => {
        e.preventDefault();
        const rect = viewportEl.getBoundingClientRect();
        const mx = e.clientX - rect.left;
        const my = e.clientY - rect.top;
        const factor = e.deltaY < 0 ? 1.12 : 0.89;
        const newScale = Math.min(Math.max(cam.scale * factor, 0.14), 1.65);
        cam.x = mx - ((mx - cam.x) / cam.scale) * newScale;
        cam.y = my - ((my - cam.y) / cam.scale) * newScale;
        cam.scale = newScale;
        applyCamera(false);
      },
      { passive: false }
    );

    // Click empty background to reset if highlighted
    viewportEl.addEventListener("click", (e) => {
      if (e.target === viewportEl || e.target === worldEl || e.target === svgEl) {
        if (worldEl.classList.contains("has-highlight") && !searchInput.value) {
          resetToOverview();
        }
      }
    });

    // Observe light/dark theme switches
    const observer = new MutationObserver(() => {
      Object.values(layout.nodes).forEach((n) => {
        const el = domNodes[n.id];
        if (!el) return;
        applyNodeTheme(
          el,
          n.oe,
          el.classList.contains("is-target"),
          el.classList.contains("is-painted")
        );
      });
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["data-md-color-scheme"] });

    // Initial fit
    setTimeout(() => fitAll(false), 50);
    window.addEventListener("resize", () => {
      if (!worldEl.classList.contains("has-highlight")) {
        fitAll(false);
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPyramid);
  } else {
    initPyramid();
  }
  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(initPyramid);
  }
})();
