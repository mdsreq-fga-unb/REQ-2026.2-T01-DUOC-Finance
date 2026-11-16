# Priorização e Escopo do Produto (Linha de Corte do MVP)

Este documento consolida o **modelo metodológico integrado de priorização e delimitação do escopo** do sistema ***DUOC Finance***. O método fundamenta-se no cruzamento analítico entre o **Valor de Negócio (VB)** e o **Esforço Técnico Consolidado (EC)**, orientando a linha de corte do **Produto Mínimo Viável (MVP)**.

<div class="catalog-nav-deck">
  <a href="../" class="catalog-nav-btn">
    <span class="nav-btn-badge">91</span>
    <span class="nav-btn-text">Catálogo Geral de Requisitos ↗</span>
  </a>
  <a href="../rastreabilidade/" class="catalog-nav-btn catalog-nav-btn-ext">
    <span class="nav-btn-text">Pirâmide & Rastreabilidade ↗</span>
  </a>
  <a href="../governanca-conformidade/#61-matriz-canonica-de-papeis-rbac" class="catalog-nav-btn catalog-nav-btn-ext">
    <span class="nav-btn-text">Atores & Papéis RBAC ↗</span>
  </a>
  <a href="#linha-de-corte-do-mvp" class="catalog-nav-btn catalog-nav-btn-ext">
    <span class="nav-btn-text">Linha de Corte do MVP ↗</span>
  </a>
</div>

<div class="stats-grid">
  <div class="stat-card stat-accent">
    <span class="stat-num">31 <small>/ 40</small></span>
    <span class="stat-label">Requisitos Funcionais no MVP (77,5%)</span>
  </div>
  <div class="stat-card">
    <span class="stat-num">18 <small>/ 20</small></span>
    <span class="stat-label">Requisitos Não Funcionais no MVP (90,0%)</span>
  </div>
  <div class="stat-card">
    <span class="stat-num">270 <small>horas</small></span>
    <span class="stat-label">Capacidade Líquida (Demanda: 266,5 h)</span>
  </div>
  <div class="stat-card stat-warn">
    <span class="stat-num">9 <small>RFs</small></span>
    <span class="stat-label">Backlog Evolutivo Pós-MVP</span>
  </div>
</div>

---

## O fluxo que precisa funcionar de ponta a ponta

O recorte do MVP foi definido para garantir que o ciclo operacional completo da DUOC Finance funcione de ponta a ponta já na primeira versão em produção:

<div class="journey-list">
  <div class="journey-item">
    <div class="journey-dot">1</div>
    <h4 class="journey-title">Cadastro e Identificação</h4>
    <p class="journey-desc">Cadastro único e validado de colaboradores, dados bancários e funções técnicas de campo.</p>
    <div class="journey-reqs">
      <a href="../#rf01" class="req-tag req-tag-rf"># RF01</a>
      <a href="../#rf02" class="req-tag req-tag-rf"># RF02</a>
      <a href="../#rf03" class="req-tag req-tag-rf"># RF03</a>
      <a href="../#rf25" class="req-tag req-tag-rf"># RF25</a>
      <a href="../#rf26" class="req-tag req-tag-rf"># RF26</a>
    </div>
  </div>

  <div class="journey-item">
    <div class="journey-dot">2</div>
    <h4 class="journey-title">Apontamento em Campo</h4>
    <p class="journey-desc">Registro digital de horas trabalhadas em canteiros com GPS, fotos de evidência e retificações.</p>
    <div class="journey-reqs">
      <a href="../#rf04" class="req-tag req-tag-rf"># RF04</a>
      <a href="../#rf19" class="req-tag req-tag-rf"># RF19</a>
      <a href="../#rf22" class="req-tag req-tag-rf"># RF22</a>
      <a href="../#rf32" class="req-tag req-tag-rf"># RF32</a>
      <a href="../#rf35" class="req-tag req-tag-rf"># RF35</a>
    </div>
  </div>

  <div class="journey-item">
    <div class="journey-dot">3</div>
    <h4 class="journey-title">Fechamento e Reembolsos</h4>
    <p class="journey-desc">Cálculo automático de diárias técnicas, prévias, deliberação de despesas e homologação bloqueada.</p>
    <div class="journey-reqs">
      <a href="../#rf05" class="req-tag req-tag-rf"># RF05</a>
      <a href="../#rf06" class="req-tag req-tag-rf"># RF06</a>
      <a href="../#rf07" class="req-tag req-tag-rf"># RF07</a>
      <a href="../#rf08" class="req-tag req-tag-rf"># RF08</a>
      <a href="../#rf27" class="req-tag req-tag-rf"># RF27</a>
      <a href="../#rf28" class="req-tag req-tag-rf"># RF28</a>
      <a href="../#rf29" class="req-tag req-tag-rf"># RF29</a>
    </div>
  </div>

  <div class="journey-item">
    <div class="journey-dot">4</div>
    <h4 class="journey-title">Apropriação por Obra</h4>
    <p class="journey-desc">Vinculação de cada centavo aos respectivos contratos vigentes, garantindo rastreabilidade contábil.</p>
    <div class="journey-reqs">
      <a href="../#rf09" class="req-tag req-tag-rf"># RF09</a>
      <a href="../#rf10" class="req-tag req-tag-rf"># RF10</a>
      <a href="../#rf33" class="req-tag req-tag-rf"># RF33</a>
      <a href="../#rf37" class="req-tag req-tag-rf"># RF37</a>
      <a href="../#rf38" class="req-tag req-tag-rf"># RF38</a>
    </div>
  </div>

  <div class="journey-item">
    <div class="journey-dot">5</div>
    <h4 class="journey-title">Painel e Governança</h4>
    <p class="journey-desc">Visão de centros de custo, login seguro corporativo, autenticação RBAC e bloqueio de ataques.</p>
    <div class="journey-reqs">
      <a href="../#rf11" class="req-tag req-tag-rf"># RF11</a>
      <a href="../#rf34" class="req-tag req-tag-rf"># RF34</a>
      <a href="../#rf39" class="req-tag req-tag-rf"># RF39</a>
      <a href="../#rf40" class="req-tag req-tag-rf"># RF40</a>
      <a href="../#rf13" class="req-tag req-tag-rf"># RF13</a>
      <a href="../#rf14" class="req-tag req-tag-rf"># RF14</a>
      <a href="../#rf17" class="req-tag req-tag-rf"># RF17</a>
      <a href="../#rf18" class="req-tag req-tag-rf"># RF18</a>
      <a href="../#rf23" class="req-tag req-tag-rf"># RF23</a>
    </div>
  </div>
</div>

---

## O que entrou, por característica

A distribuição dos **40 Requisitos Funcionais** entre as 10 Características do Produto (CAR-01 a CAR-10) evidencia a robustez do corte. **Verde preenchido** indica requisito selecionado para o MVP; **cinza tracejado** indica item alocado no backlog evolutivo pós-MVP. Clique em qualquer requisito para navegar diretamente ao seu card:

<div class="feat-cov-container">
  <div class="feat-cov-row">
    <span class="feat-cov-car">CAR-01</span>
    <span class="feat-cov-name">Gestão Cadastral Unificada</span>
    <div class="feat-cov-waf">
      <a href="../#rf01" class="feat-cov-sq on" title="RF01: Cadastrar colaborador (MVP)">RF01</a>
      <a href="../#rf02" class="feat-cov-sq on" title="RF02: Atualizar cadastro de colaborador (MVP)">RF02</a>
      <a href="../#rf03" class="feat-cov-sq on" title="RF03: Registrar movimentação funcional (MVP)">RF03</a>
      <a href="../#rf25" class="feat-cov-sq on" title="RF25: Cadastrar tipo de contratação (MVP)">RF25</a>
      <a href="../#rf26" class="feat-cov-sq on" title="RF26: Consultar histórico de alterações (MVP)">RF26</a>
    </div>
    <span class="feat-cov-ratio">5 / 5</span>
  </div>

  <div class="feat-cov-row">
    <span class="feat-cov-car">CAR-02</span>
    <span class="feat-cov-name">Apontamento de Campo (RVT)</span>
    <div class="feat-cov-waf">
      <a href="../#rf04" class="feat-cov-sq on" title="RF04: Submeter apontamento de campo (MVP)">RF04</a>
      <a href="../#rf19" class="feat-cov-sq on" title="RF19: Consultar apontamentos registrados (MVP)">RF19</a>
      <a href="../#rf22" class="feat-cov-sq on" title="RF22: Anexar evidências e GPS (MVP)">RF22</a>
      <a href="../#rf32" class="feat-cov-sq on" title="RF32: Deliberar apontamento de campo (MVP)">RF32</a>
      <a href="../#rf35" class="feat-cov-sq on" title="RF35: Retificar apontamento de campo (MVP)">RF35</a>
    </div>
    <span class="feat-cov-ratio">5 / 5</span>
  </div>

  <div class="feat-cov-row">
    <span class="feat-cov-car">CAR-03</span>
    <span class="feat-cov-name">Fechamento Financeiro</span>
    <div class="feat-cov-waf">
      <a href="../#rf05" class="feat-cov-sq on" title="RF05: Solicitar prévia de fechamento (MVP)">RF05</a>
      <a href="../#rf06" class="feat-cov-sq on" title="RF06: Homologar fechamento financeiro (MVP)">RF06</a>
      <a href="../#rf27" class="feat-cov-sq on" title="RF27: Configurar tabela de diárias (MVP)">RF27</a>
      <a href="../#rf21" class="feat-cov-sq off" title="RF21: Estornar fechamento financeiro (Pós-MVP)">RF21</a>
    </div>
    <span class="feat-cov-ratio">3 / 4</span>
  </div>

  <div class="feat-cov-row">
    <span class="feat-cov-car">CAR-04</span>
    <span class="feat-cov-name">Prestação de Contas e Reembolsos</span>
    <div class="feat-cov-waf">
      <a href="../#rf07" class="feat-cov-sq on" title="RF07: Submeter solicitação de reembolso (MVP)">RF07</a>
      <a href="../#rf08" class="feat-cov-sq on" title="RF08: Deliberar solicitação de reembolso (MVP)">RF08</a>
      <a href="../#rf28" class="feat-cov-sq on" title="RF28: Submeter adiantamento operacional (MVP)">RF28</a>
      <a href="../#rf29" class="feat-cov-sq on" title="RF29: Deliberar adiantamento operacional (MVP)">RF29</a>
    </div>
    <span class="feat-cov-ratio">4 / 4</span>
  </div>

  <div class="feat-cov-row">
    <span class="feat-cov-car">CAR-05</span>
    <span class="feat-cov-name">Apropriação de Custos por Contrato</span>
    <div class="feat-cov-waf">
      <a href="../#rf09" class="feat-cov-sq on" title="RF09: Apropriar custos operacionais (MVP)">RF09</a>
      <a href="../#rf10" class="feat-cov-sq on" title="RF10: Consultar rastreabilidade de custos (MVP)">RF10</a>
      <a href="../#rf33" class="feat-cov-sq on" title="RF33: Cadastrar contrato de obra (MVP)">RF33</a>
      <a href="../#rf37" class="feat-cov-sq on" title="RF37: Atualizar contrato de obra (MVP)">RF37</a>
      <a href="../#rf38" class="feat-cov-sq on" title="RF38: Consultar contratos de obra (MVP)">RF38</a>
      <a href="../#rf30" class="feat-cov-sq off" title="RF30: Consultar comparativo de custos (Pós-MVP)">RF30</a>
    </div>
    <span class="feat-cov-ratio">5 / 6</span>
  </div>

  <div class="feat-cov-row">
    <span class="feat-cov-car">CAR-06</span>
    <span class="feat-cov-name">Painel Orçamentário e Centros de Custo</span>
    <div class="feat-cov-waf">
      <a href="../#rf11" class="feat-cov-sq on" title="RF11: Filtrar indicadores de custos (MVP)">RF11</a>
      <a href="../#rf34" class="feat-cov-sq on" title="RF34: Cadastrar centro de custo de obra (MVP)">RF34</a>
      <a href="../#rf39" class="feat-cov-sq on" title="RF39: Atualizar centro de custo de obra (MVP)">RF39</a>
      <a href="../#rf40" class="feat-cov-sq on" title="RF40: Definir tetos orçamentários de obra (MVP)">RF40</a>
      <a href="../#rf12" class="feat-cov-sq off" title="RF12: Monitorar execução orçamentária (Pós-MVP)">RF12</a>
      <a href="../#rf31" class="feat-cov-sq off" title="RF31: Configurar alertas orçamentários (Pós-MVP)">RF31</a>
    </div>
    <span class="feat-cov-ratio">4 / 6</span>
  </div>

  <div class="feat-cov-row">
    <span class="feat-cov-car">CAR-07</span>
    <span class="feat-cov-name">Controle de Acesso (RBAC) e Segurança</span>
    <div class="feat-cov-waf">
      <a href="../#rf13" class="feat-cov-sq on" title="RF13: Efetuar login no sistema (MVP)">RF13</a>
      <a href="../#rf14" class="feat-cov-sq on" title="RF14: Gerenciar perfis de acesso (MVP)">RF14</a>
      <a href="../#rf17" class="feat-cov-sq on" title="RF17: Ativar acesso inicial e recuperar credenciais (MVP)">RF17</a>
      <a href="../#rf18" class="feat-cov-sq on" title="RF18: Encerrar sessão manualmente (MVP)">RF18</a>
      <a href="../#rf23" class="feat-cov-sq on" title="RF23: Bloquear acesso após tentativas falhas (MVP)">RF23</a>
      <a href="../#rf24" class="feat-cov-sq off" title="RF24: Impor renovação periódica de senhas (Pós-MVP)">RF24</a>
    </div>
    <span class="feat-cov-ratio">5 / 6</span>
  </div>

  <div class="feat-cov-row">
    <span class="feat-cov-car">CAR-08</span>
    <span class="feat-cov-name">Trilha de Auditoria</span>
    <div class="feat-cov-waf">
      <a href="../#rf15" class="feat-cov-sq off" title="RF15: Consultar trilha de auditoria (Pós-MVP)">RF15</a>
      <a href="../#rf16" class="feat-cov-sq off" title="RF16: Exportar relatório de auditoria (Pós-MVP)">RF16</a>
    </div>
    <span class="feat-cov-ratio">0 / 2</span>
  </div>

  <div class="feat-cov-row">
    <span class="feat-cov-car">CAR-09</span>
    <span class="feat-cov-name">Integração Externa FLIT</span>
    <div class="feat-cov-waf">
      <a href="../#rf20" class="feat-cov-sq off" title="RF20: Importar presenças homologadas (Pós-MVP)">RF20</a>
    </div>
    <span class="feat-cov-ratio">0 / 1</span>
  </div>

  <div class="feat-cov-row">
    <span class="feat-cov-car">CAR-10</span>
    <span class="feat-cov-name">Exportação de Planilhas</span>
    <div class="feat-cov-waf">
      <a href="../#rf36" class="feat-cov-sq off" title="RF36: Exportar dados em planilha (Pós-MVP)">RF36</a>
    </div>
    <span class="feat-cov-ratio">0 / 1</span>
  </div>
</div>

---

<a id="8-6-avaliacao-do-valor-de-negocio"></a>
<a id="101-avaliacao-do-valor-de-negocio"></a>
<a id="avaliacao-do-valor-de-negocio"></a>
<a id="8-7-avaliacao-do-esforco-tecnico"></a>
<a id="102-avaliacao-do-esforco-tecnico"></a>
<a id="avaliacao-do-esforco-tecnico"></a>
<a id="indicadores-e-formulas-de-calculo"></a>
<a id="indicadores-e-formulas-de-calculo-do-template-oficial"></a>
## Como priorizamos: Critérios e Fórmulas

A priorização opera por duas dimensões analíticas independentes:

1. **Valor de Negócio (VB: 1 a 4):** Avalia o impacto na operação e conformidade legal (4 = Muito Alto / Obrigatório; 3 = Alto / Prioritário; 2 = Moderado / Desejável; 1 = Baixo / Postergável). Requisitos com **VB 3 ou 4 integram o MVP**.
2. **Esforço Técnico Consolidado (EC: 1 a 4):** Média aritmética entre Esforço em horas (**ES**), Complexidade Técnica (**CX**) e Lacuna de Capacidade (**LC**).

<div class="formula-card-grid">
  <div class="formula-clean-card">
    <span class="formula-card-title">Esforço Técnico Consolidado (EC)</span>
    <div class="formula-math-display">
      <span>EC = </span>
      <div class="formula-frac-box">
        <span class="frac-num">ES + CX + LC</span>
        <span class="frac-den">3</span>
      </div>
    </div>
    <p class="formula-clean-desc">Média das notas técnicas de 1 a 4: Esforço em horas (ES), Complexidade arquitetural (CX) e Lacuna de domínio da equipe (LC).</p>
  </div>

  <div class="formula-clean-card">
    <span class="formula-card-title">Índice de Prioridade (IP)</span>
    <div class="formula-math-display">
      <span>IP = </span>
      <div class="formula-frac-box">
        <span class="frac-num">VB</span>
        <span class="frac-den">EC</span>
      </div>
    </div>
    <p class="formula-clean-desc">Razão direta entre Valor de Negócio (VB) e Esforço Consolidado (EC). Quanto maior o IP, maior o retorno por hora investida.</p>
  </div>
</div>

<div class="example-clean-box">
  <strong>Exemplo Prático Único Demonstrativo: <a href="../#rf06">RF06 — Homologar Fechamento Financeiro</a></strong>
  <p style="margin: 6px 0 8px 0; font-size: 0.88rem;">Com Valor de Negócio <strong>VB = 4</strong> (crítico para encerrar competência), Esforço <strong>ES = 2</strong> (6 horas), Complexidade <strong>CX = 3</strong> (bloqueio de edição e carimbo UTC) e Lacuna <strong>LC = 2</strong> (domínio de transações relacionais):</p>
  <div style="font-family: var(--md-code-font-family, monospace); font-size: 0.88rem; line-height: 1.6;">
    • <strong>EC</strong> = (2 + 3 + 2) ÷ 3 = 7 ÷ 3 = <strong>2,33</strong> (Classe 2 · Esforço Moderado)<br>
    • <strong>IP</strong> = 4 ÷ 2,33 = <strong>1,71</strong> ➔ Posicionado no <strong>Quadrante Q1 (Alta Prioridade · MVP)</strong>
  </div>
</div>

*(As notas individuais e cálculos detalhados dos 40 requisitos estão disponíveis diretamente nos cards do [Catálogo Integrado de Requisitos](index.md) na aba "Priorização & Score 4×4").*

---

<a id="8-9-matriz-4-x-4"></a>
<a id="8-9-matriz-4-x-4-valor-de-negocio-x-esforco-tecnico"></a>
<a id="104-matriz-4-x-4"></a>
<a id="matriz-4-x-4"></a>
<a id="matriz-4-x-4-valor-de-negocio-x-esforco-tecnico"></a>
<a id="3-matriz-4-x-4-dinamica-de-priorizacao"></a>
<a id="3-matriz-4-4-dinamica-de-priorizacao"></a>
## Matriz 4 × 4 Dinâmica de Priorização

A matriz cruza o **Valor de Negócio (VB: 1 a 4)** no eixo vertical com o **Esforço Consolidado (EC: 1 a 4)** no eixo horizontal. Cada quadrante organiza a destinação dos requisitos.

**Clique em qualquer requisito para navegar diretamente ao seu card e detalhes de cálculo no catálogo:**

<div class="matrix-quadrant-wrapper">
  <div class="matrix-axis-y-label">
    <span>▲ Valor de Negócio (VB: 1 a 4)</span>
  </div>

  <div class="matrix-grid-layout">
    <!-- QUADRANTE Q1 -->
    <div class="matrix-card quad-q1">
      <div class="matrix-card-header">
        <div class="matrix-card-title-group">
          <span class="quad-badge q1-badge">Q1</span>
          <h4 class="quad-title">Alta Prioridade · MVP</h4>
        </div>
        <span class="quad-count">28 RFs</span>
      </div>
      <p class="quad-desc">Alto Valor (3-4) · Baixo/Médio Esforço (1-2) — Espinha dorsal indispensável</p>
      <div class="quad-chips-grid">
        <a href="../#rf01" class="quad-rf-btn btn-mvp" title="RF01: Cadastrar colaborador | VB: 4 · EC: 1,67 (2) · IP: 2,40">RF01</a>
        <a href="../#rf02" class="quad-rf-btn btn-mvp" title="RF02: Atualizar cadastro de colaborador | VB: 3 · EC: 1,67 (2) · IP: 1,80">RF02</a>
        <a href="../#rf03" class="quad-rf-btn btn-mvp" title="RF03: Registrar movimentação funcional | VB: 3 · EC: 2,00 (2) · IP: 1,50">RF03</a>
        <a href="../#rf06" class="quad-rf-btn btn-mvp" title="RF06: Homologar fechamento financeiro | VB: 4 · EC: 2,33 (2) · IP: 1,71">RF06</a>
        <a href="../#rf07" class="quad-rf-btn btn-mvp" title="RF07: Submeter solicitação de reembolso | VB: 4 · EC: 2,00 (2) · IP: 2,00">RF07</a>
        <a href="../#rf08" class="quad-rf-btn btn-mvp" title="RF08: Deliberar solicitação de reembolso | VB: 4 · EC: 2,00 (2) · IP: 2,00">RF08</a>
        <a href="../#rf10" class="quad-rf-btn btn-mvp" title="RF10: Consultar rastreabilidade de custos | VB: 3 · EC: 2,00 (2) · IP: 1,50">RF10</a>
        <a href="../#rf11" class="quad-rf-btn btn-mvp" title="RF11: Filtrar indicadores de custos | VB: 3 · EC: 2,00 (2) · IP: 1,50">RF11</a>
        <a href="../#rf13" class="quad-rf-btn btn-mvp" title="RF13: Efetuar login no sistema | VB: 4 · EC: 1,00 (1) · IP: 4,00">RF13</a>
        <a href="../#rf14" class="quad-rf-btn btn-mvp" title="RF14: Gerenciar perfis de acesso | VB: 3 · EC: 2,33 (2) · IP: 1,29">RF14</a>
        <a href="../#rf17" class="quad-rf-btn btn-mvp" title="RF17: Ativar acesso inicial e recuperar credenciais | VB: 3 · EC: 1,67 (2) · IP: 1,80">RF17</a>
        <a href="../#rf18" class="quad-rf-btn btn-mvp" title="RF18: Encerrar sessão manualmente | VB: 3 · EC: 1,00 (1) · IP: 3,00">RF18</a>
        <a href="../#rf19" class="quad-rf-btn btn-mvp" title="RF19: Consultar apontamentos registrados | VB: 4 · EC: 1,67 (2) · IP: 2,40">RF19</a>
        <a href="../#rf22" class="quad-rf-btn btn-mvp" title="RF22: Anexar evidências e GPS ao apontamento | VB: 3 · EC: 2,33 (2) · IP: 1,29">RF22</a>
        <a href="../#rf23" class="quad-rf-btn btn-mvp" title="RF23: Bloquear acesso após tentativas falhas | VB: 3 · EC: 1,67 (2) · IP: 1,80">RF23</a>
        <a href="../#rf25" class="quad-rf-btn btn-mvp" title="RF25: Cadastrar tipo de contratação | VB: 3 · EC: 1,67 (2) · IP: 1,80">RF25</a>
        <a href="../#rf26" class="quad-rf-btn btn-mvp" title="RF26: Consultar histórico cadastral e bancário | VB: 3 · EC: 2,33 (2) · IP: 1,29">RF26</a>
        <a href="../#rf27" class="quad-rf-btn btn-mvp" title="RF27: Configurar tabela de diárias técnicas | VB: 4 · EC: 1,67 (2) · IP: 2,40">RF27</a>
        <a href="../#rf28" class="quad-rf-btn btn-mvp" title="RF28: Submeter adiantamento operacional | VB: 3 · EC: 2,00 (2) · IP: 1,50">RF28</a>
        <a href="../#rf29" class="quad-rf-btn btn-mvp" title="RF29: Deliberar adiantamento operacional | VB: 3 · EC: 2,00 (2) · IP: 1,50">RF29</a>
        <a href="../#rf32" class="quad-rf-btn btn-mvp" title="RF32: Deliberar apontamento de campo | VB: 4 · EC: 1,67 (2) · IP: 2,40">RF32</a>
        <a href="../#rf33" class="quad-rf-btn btn-mvp" title="RF33: Cadastrar contrato de obra | VB: 3 · EC: 1,67 (2) · IP: 1,80">RF33</a>
        <a href="../#rf34" class="quad-rf-btn btn-mvp" title="RF34: Cadastrar centro de custo de obra | VB: 3 · EC: 1,67 (2) · IP: 1,80">RF34</a>
        <a href="../#rf35" class="quad-rf-btn btn-mvp" title="RF35: Retificar apontamento de campo | VB: 3 · EC: 1,67 (2) · IP: 1,80">RF35</a>
        <a href="../#rf37" class="quad-rf-btn btn-mvp" title="RF37: Atualizar contrato de obra | VB: 3 · EC: 1,67 (2) · IP: 1,80">RF37</a>
        <a href="../#rf38" class="quad-rf-btn btn-mvp" title="RF38: Consultar contratos de obra | VB: 3 · EC: 1,00 (1) · IP: 3,00">RF38</a>
        <a href="../#rf39" class="quad-rf-btn btn-mvp" title="RF39: Atualizar centro de custo de obra | VB: 3 · EC: 1,67 (2) · IP: 1,80">RF39</a>
        <a href="../#rf40" class="quad-rf-btn btn-mvp" title="RF40: Definir tetos orçamentários de obra | VB: 3 · EC: 2,00 (2) · IP: 1,50">RF40</a>
      </div>
    </div>

    <!-- QUADRANTE Q2 -->
    <div class="matrix-card quad-q2">
      <div class="matrix-card-header">
        <div class="matrix-card-title-group">
          <span class="quad-badge q2-badge">Q2</span>
          <h4 class="quad-title">Escopo Controlado · MVP</h4>
        </div>
        <span class="quad-count">3 RFs</span>
      </div>
      <p class="quad-desc">Alto Valor (3-4) · Alto Esforço (3) — Viabilizados por redução planejada de escopo</p>
      <div class="quad-chips-grid">
        <a href="../#rf04" class="quad-rf-btn btn-mvp" title="RF04: Submeter apontamento de campo | VB: 4 · EC: 3,00 (3) · IP: 1,33">RF04</a>
        <a href="../#rf05" class="quad-rf-btn btn-mvp" title="RF05: Solicitar prévia de fechamento | VB: 4 · EC: 3,33 (3) · IP: 1,20">RF05</a>
        <a href="../#rf09" class="quad-rf-btn btn-mvp" title="RF09: Apropriar custos operacionais | VB: 3 · EC: 3,33 (3) · IP: 0,90">RF09</a>
      </div>
    </div>

    <!-- QUADRANTE Q3 -->
    <div class="matrix-card quad-q3">
      <div class="matrix-card-header">
        <div class="matrix-card-title-group">
          <span class="quad-badge q3-badge">Q3</span>
          <h4 class="quad-title">Oportunidade · Pós-MVP</h4>
        </div>
        <span class="quad-count">2 RFs</span>
      </div>
      <p class="quad-desc">Valor Moderado (2) · Baixo/Médio Esforço (2) — Recursos de conveniência</p>
      <div class="quad-chips-grid">
        <a href="../#rf24" class="quad-rf-btn btn-pos" title="RF24: Impor renovação periódica de senhas | VB: 2 · EC: 2,00 (2) · IP: 1,00">RF24</a>
        <a href="../#rf36" class="quad-rf-btn btn-pos" title="RF36: Exportar dados em planilha | VB: 2 · EC: 1,67 (2) · IP: 1,20">RF36</a>
      </div>
    </div>

    <!-- QUADRANTE Q4 -->
    <div class="matrix-card quad-q4">
      <div class="matrix-card-header">
        <div class="matrix-card-title-group">
          <span class="quad-badge q4-badge">Q4</span>
          <h4 class="quad-title">Evolutivo · Pós-MVP</h4>
        </div>
        <span class="quad-count">7 RFs</span>
      </div>
      <p class="quad-desc">Valor Moderado/Baixo (1-2) · Alto Esforço (3) — Demandam histórico ou integrações</p>
      <div class="quad-chips-grid">
        <a href="../#rf12" class="quad-rf-btn btn-pos" title="RF12: Monitorar execução orçamentária | VB: 2 · EC: 3,00 (3) · IP: 0,67">RF12</a>
        <a href="../#rf15" class="quad-rf-btn btn-pos" title="RF15: Consultar trilha de auditoria | VB: 2 · EC: 3,00 (3) · IP: 0,67">RF15</a>
        <a href="../#rf16" class="quad-rf-btn btn-pos" title="RF16: Exportar relatório de auditoria | VB: 1 · EC: 3,00 (3) · IP: 0,33">RF16</a>
        <a href="../#rf20" class="quad-rf-btn btn-pos" title="RF20: Importar presenças homologadas | VB: 2 · EC: 3,00 (3) · IP: 0,67">RF20</a>
        <a href="../#rf21" class="quad-rf-btn btn-pos" title="RF21: Estornar fechamento financeiro | VB: 2 · EC: 2,67 (3) · IP: 0,75">RF21</a>
        <a href="../#rf30" class="quad-rf-btn btn-pos" title="RF30: Consultar comparativo de custos | VB: 2 · EC: 2,67 (3) · IP: 0,75">RF30</a>
        <a href="../#rf31" class="quad-rf-btn btn-pos" title="RF31: Configurar alertas orçamentários | VB: 2 · EC: 2,67 (3) · IP: 0,75">RF31</a>
      </div>
    </div>
  </div>

  <div class="matrix-axis-x-label">
    <span>Esforço Técnico Consolidado (EC: 1 a 4) ►</span>
  </div>
</div>

---

<a id="8-10-definicao-dos-requisitos-funcionais-do-mvp"></a>
<a id="105-definicao-dos-requisitos-funcionais-do-mvp"></a>
<a id="definicao-dos-requisitos-funcionais-do-mvp"></a>
<a id="linha-de-corte-do-mvp"></a>
<a id="requisitos-de-granularidade-decompostos-rf37-a-rf40"></a>
<a id="analise-de-viabilidade-do-corte"></a>
## Como o recorte foi fechado (Viabilidade do MVP)

A linha de corte oficial consolida **31 Requisitos Funcionais no MVP** e **9 no Pós-MVP**, com viabilidade técnica e temporal estritamente comprovada:

<div class="timeline-track">
  <div class="timeline-row">
    <div><b>Semana 08 · Módulo 1</b><span>Cadastro e Campo</span></div>
    <div class="timeline-progress"><div class="timeline-fill" style="width: 100%;"></div></div>
    <span class="feat-cov-ratio">68 h</span>
  </div>
  <div class="timeline-row">
    <div><b>Semana 09 · Módulo 2</b><span>Fechamento e Reembolsos</span></div>
    <div class="timeline-progress"><div class="timeline-fill" style="width: 100%;"></div></div>
    <span class="feat-cov-ratio">54 h</span>
  </div>
  <div class="timeline-row">
    <div><b>Semana 10 · Módulo 3</b><span>Custos e Contratos</span></div>
    <div class="timeline-progress"><div class="timeline-fill" style="width: 100%;"></div></div>
    <span class="feat-cov-ratio">64 h</span>
  </div>
  <div class="timeline-row">
    <div><b>Semana 11 · Módulo 4</b><span>Governança e RBAC</span></div>
    <div class="timeline-progress"><div class="timeline-fill" style="width: 100%;"></div></div>
    <span class="feat-cov-ratio">19 h</span>
  </div>
  <div class="timeline-row">
    <div><b>Semana 12 · Reserva 30%</b><span>Testes, CI/CD e UAT</span></div>
    <div class="timeline-progress"><div class="timeline-fill" style="width: 100%; background: var(--duoc-gold);"></div></div>
    <span class="feat-cov-ratio">61,5 h</span>
  </div>
</div>

*   **Balanço de Capacidade:** A demanda total de **266,5 horas** (205 h de codificação direta + 61,5 h de reserva técnica compulsória de 30%) cabe integralmente na **capacidade líquida de 270 horas** da equipe (6 desenvolvedores × 10 h/sem × 5 semanas úteis com 90% de foco), garantindo folga positiva.
*   **Granularidade Atômica (RF37 a RF40):** Os requisitos de contratos e centros de custo foram desmembrados em ações atômicas independentes ([RF33](index.md#rf33) cadastro, [RF37](index.md#rf37) atualização, [RF38](index.md#rf38) consulta; [RF34](index.md#rf34) cadastro, [RF39](index.md#rf39) atualização, [RF40](index.md#rf40) tetos), garantindo que cada um possua sua própria História de Usuário (US01 a US40) em mapeamento 1:1.
*   **Tratamento dos RNFs no MVP:** Dos 20 Requisitos Não Funcionais, **18 integram o primeiro ciclo** (10 obrigatórios e 8 associados), assegurando integridade transacional, retenção probatória (Art. 11 da CLT) e conformidade LGPD. Apenas [RNF01](index.md#rnf01) (modo offline) e [RNF08](index.md#rnf08) (auditoria de estornos) ficaram para o pós-MVP.

---

<a id="procedimento-operacional-de-retificacao-e-estorno-assistido-no-mvp"></a>
## Procedimento Operacional de Retificação e Estorno Assistido no MVP

Com a postergação do estorno automático em lote ([RF21](index.md#rf21)), instituiu-se o fluxo assistido de retificação para correções pós-fechamento no MVP sem ferir a imutabilidade dos lançamentos:

```mermaid
sequenceDiagram
    autonumber
    actor G as Gestor Operacional
    actor A as Administrador Financeiro
    participant S as DUOC Finance (Sistema)
    participant B as Banco / Auditoria (RNF15/16)

    G->>A: 1. Submete pedido de retificação justificado com evidência
    A->>S: 2. Autoriza administrativamente reabertura do lote
    S->>B: 3. Grava snapshot imutável e status RETIFICADO_EM_ABERTO (RN17)
    G->>S: 4. Executa ajuste pontual via RF35 (justificativa obrigatória RN24)
    S->>B: 5. Registra mutação pontual na trilha de auditoria
    A->>S: 6. Gera nova prévia consolidada via RF05
    A->>S: 7. Re-homologa lote corrigido via RF06
    S->>B: 8. Grava carimbo v2, bloqueia registros e emite extrato v2
```

1. O `GESTOR_OPERACIONAL` solicita o ajuste com justificativa e comprovação; o `ADMIN_FINANCEIRO` analisa e autoriza a reabertura do lote.
2. O lote original é preservado imutável (*append-only*); o ajuste pontual é efetuado via **[RF35](index.md#rf35)** com justificativa obrigatória registrada em banco.
3. O lote é recalculado via **[RF05](index.md#rf05)** e re-homologado via **[RF06](index.md#rf06)**, gerando nova versão do extrato sem violar o histórico probatório.

---

## Por que algo ficou de fora (Pós-MVP)

Nenhum requisito foi descartado por falta de valor. Os **9 Requisitos Funcionais alocados no pós-MVP** foram postergados por motivos operacionais e técnicos objetivos:

*   **[RF21](index.md#rf21) · Estornar fechamento financeiro:** Operação excepcional de reversão em lote; contornada de forma segura pelo fluxo assistido de retificação ([RF35](index.md#rf35) + [RF06](index.md#rf06)).
*   **[RF24](index.md#rf24) · Impor renovação periódica de senhas:** Política de expiração forçada gera atrito no piloto inicial; as salvaguardas de bloqueio ([RF23](index.md#rf23)) e requisitos de complexidade suprem plenamente a segurança da v1.
*   **[RF36](index.md#rf36) · Exportar dados consolidados em planilha:** Os relatórios nativos em tela no frontend cobrem a validação operacional imediata sem dependência de gerador XLSX/CSV no backend.
*   **[RF12](index.md#rf12) · Monitorar execução orçamentária preditiva:** Projeções orçamentárias demandam histórico acumulado de meses de execução para produzir indicadores estatísticos válidos.
*   **[RF15](index.md#rf15) e [RF16](index.md#rf16) · Consultar e exportar trilha de auditoria:** Os logs estruturados do banco de dados (PostgreSQL/Supabase) já gravam todas as mutações (*append-only* via [RNF15](index.md#rnf15)), dispensando tela administrativa própria no primeiro ciclo.
*   **[RF20](index.md#rf20) · Importar presenças da FLIT:** Integração externa via API de terceiro cuja especificação de endpoints e chaves de acesso depende de liberação pelo parceiro externo.
*   **[RF30](index.md#rf30) · Consultar comparativo de custos entre contratos:** Análise comparativa entre obras requer banco consolidado com massa de dados de múltiplos projetos encerrados.
*   **[RF31](index.md#rf31) · Configurar alertas de execução orçamentária:** Disparo automatizado de notificações assíncronas planejado para a segunda fase de evolução.

---

<a id="8-12-evidencia-e-registro-da-validacao-do-mvp-com-o-cliente"></a>
<a id="107-evidencia-e-registro-da-validacao-do-mvp-com-o-cliente"></a>
<a id="evidencia-e-registro-da-validacao-do-mvp-com-o-cliente"></a>
## Registro da Priorização e Validação com a Cliente

A priorização do escopo foi construída em estreita colaboração com a cliente parceira **Maria Beatryz** (DUOC Engenharia):

1. **Alinhamento Inicial de Prioridades (Reunião 05 — 24/09/2026):** A cliente participou da calibração das dores centrais do negócio, aprovando com ressalvas o escopo preliminar e determinando a priorização máxima para os fluxos de campo e fechamento ([Ata da Reunião 05 — Decisão D5](../governanca/atas/reuniao-05.md#decisao-d5-mvp)).
2. **Validação Operacional e de Interfaces (Reunião 06 — 03/11/2026):** Em reunião presencial com a equipe, a cliente Maria Beatryz validou as telas, fluxos de apontamento, deliberação de despesas e cálculos de diárias apresentados no protótipo de alta fidelidade ([Ata da Reunião 06](../governanca/atas/reuniao-06.md)).
3. **Próximo Passo (Homologação Formal do Corte Final):** A composição canônica de **31 RFs no MVP e 9 no Pós-MVP** (incorporando a granularidade atômica dos RF37 a RF40) está formalizada para assinatura e ratificação definitiva no início do Ciclo RAD.

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 24/09/2026 | Estruturação inicial do método de priorização por Valor de Negócio (1 a 4) e Esforço Técnico (ES, CX, LC). | Matheus Ribeiro e Eric Araújo | Giovana Ferreira |
| `2.0` | 28/09/2026 | Consolidação da Matriz 4×4 cartesiana e definição do primeiro corte preliminar do MVP alinhado na Reunião 05. | Matheus Ribeiro | Eric Araújo |
| `3.0` | 10/11/2026 | Expansão atômica para 40 RFs (31 no MVP / 9 Pós-MVP) com desmembramento de contratos e centros de custo (RF37 a RF40) em mapeamento 1:1 com Histórias de Usuário. | Paulo Nery | Matheus Ribeiro |
| `4.0` | 16/11/2026 | Reformulação visual inspirada no padrão MindCycle: resumo por cards estatísticos, fluxo ponta a ponta, cobertura visual por CAR (CAR-01 a CAR-10), fórmulas limpas em HTML sem LaTeX, eliminação de bordas pesadas na Matriz 4x4, comprovação de capacidade e procedimento de retificação assistida. | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
