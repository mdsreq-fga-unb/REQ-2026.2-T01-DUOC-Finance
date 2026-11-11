<a id="visao-geral-e-modelo-metodologico"></a>
# Catálogo Geral de Requisitos de Software

Este capítulo consolida o **Catálogo Geral de Requisitos de Software** do sistema ***DUOC Finance***, unificando a especificação detalhada dos **Requisitos Funcionais (RF01 a RF40)**, das **Regras de Negócio (RN01 a RN31)** e dos **Requisitos Não Funcionais (RNF01 a RNF20)** em torno dos quatro **Objetivos Específicos (OE)** e suas respectivas **Características (CAR)**, definidas na [Solução Proposta](../visao-produto/solucao-proposta.md#oe1-padronizar-e-unificar-os-dados).

Todos os elementos estão interligados por **vínculos bidirecionais navegáveis**: ao consultar um Requisito Funcional, é possível transicionar diretamente para suas Regras de Negócio e Requisitos Não Funcionais condicionantes e, a partir de qualquer regra ou métrica, retornar imediatamente aos requisitos que a executam.

<div class="catalog-nav-deck">
  <a href="#catalogo-funcionais" class="catalog-nav-btn">
    <span class="nav-btn-badge">40</span>
    <span class="nav-btn-text">Requisitos Funcionais</span>
  </a>
  <a href="#catalogo-regras-de-negocio" class="catalog-nav-btn">
    <span class="nav-btn-badge">31</span>
    <span class="nav-btn-text">Regras de Negócio</span>
  </a>
  <a href="#catalogo-nao-funcionais" class="catalog-nav-btn">
    <span class="nav-btn-badge">20</span>
    <span class="nav-btn-text">Requisitos Não Funcionais</span>
  </a>
  <a href="rastreabilidade/" class="catalog-nav-btn catalog-nav-btn-ext">
    <span class="nav-btn-text">Pirâmide & Rastreabilidade ↗</span>
  </a>
  <a href="priorizacao/" class="catalog-nav-btn catalog-nav-btn-ext">
    <span class="nav-btn-text">Matriz 4 × 4 de Priorização ↗</span>
  </a>
  <a href="governanca-conformidade/#61-matriz-canonica-de-papeis-rbac" class="catalog-nav-btn catalog-nav-btn-ext">
    <span class="nav-btn-text">Atores & Papéis RBAC ↗</span>
  </a>
</div>

<a id="atores-do-sistema-e-matriz-canonica-de-papeis-rbac"></a>

---

<a id="catalogo-funcionais"></a>
<a id="especificacao-modular-dos-requisitos"></a>
<a id="catalogo-geral-consolidado"></a>
## Catálogo Geral de Requisitos Funcionais (Cards Interativos)

Utilize a barra de pesquisa e os filtros rápidos abaixo para navegar dinamicamente entre os **91 Itens Estruturantes** do catálogo (**40 Requisitos Funcionais**, **31 Regras de Negócio** e **20 Requisitos Não Funcionais**). Cada card consolida a especificação oficial, critérios de aceitação DoR/DoD e rastreabilidade direta com os **elementos estruturantes do projeto** como <a href="../visao-produto/solucao-proposta/#oe1-padronizar-e-unificar-os-dados" class="req-tag req-tag-oe"># OEs ↗</a>, <a href="../visao-produto/solucao-proposta/#23-caracteristicas-do-produto-car" class="req-tag req-tag-car"># CARs ↗</a>, <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix"># Matriz 4 × 4 ↗</a>, <a href="governanca-conformidade/" class="req-tag req-tag-law"># Governança & CLT/LGPD ↗</a>, <a href="#catalogo-regras-de-negocio" class="req-tag req-tag-rn"># RNs ↗</a> e <a href="#catalogo-nao-funcionais" class="req-tag req-tag-rnf"># RNFs ↗</a>.

<div class="req-toolbar">
  <div class="req-search-row">
    <div class="req-search-wrapper">
      <span class="req-search-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></span>
      <input type="text" id="req-search-input" class="req-search-input" placeholder="Buscar por código (ex: RF04, RN15, RNF03), termo (ex: apontamento, LGPD, token), ator ou CAR..." autocomplete="off">
      <button id="req-search-clear" class="req-search-clear" title="Limpar busca">×</button>
    </div>
    <button type="button" id="req-toggle-filters-btn" class="req-toggle-filters-btn" aria-expanded="false">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon></svg>
      <span>Filtros</span>
      <span class="req-filter-indicator"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg></span>
    </button>
  </div>
  <div id="req-filters-drawer" class="req-filters-drawer" style="display: none;">
    <div class="req-filter-tabs-header">
      <button type="button" class="req-filter-tab-btn active" data-filter-tab="tipo">Tipo de Item</button>
      <button type="button" class="req-filter-tab-btn" data-filter-tab="modulos">Módulos & OEs</button>
      <button type="button" class="req-filter-tab-btn" data-filter-tab="mvp">Escopo (MVP)</button>
      <button type="button" class="req-filter-tab-btn" data-filter-tab="prioridade">Prioridade (Matriz)</button>
    </div>
    <div class="req-filter-tabs-body">
      <div class="req-filter-tab-pane active" data-filter-pane="tipo">
        <button class="req-filter-pill active" data-filter-type="type" data-filter="all">Todos os Tipos (91)</button>
        <button class="req-filter-pill" data-filter-type="type" data-filter="rf">Requisitos Funcionais · RF (40)</button>
        <button class="req-filter-pill" data-filter-type="type" data-filter="rn">Regras de Negócio · RN (31)</button>
        <button class="req-filter-pill" data-filter-type="type" data-filter="rnf">Requisitos Não Funcionais · RNF (20)</button>
      </div>
      <div class="req-filter-tab-pane" data-filter-pane="modulos">
        <button class="req-filter-pill active" data-filter-type="oe" data-filter="all">Todos os Módulos (91)</button>
        <button class="req-filter-pill" data-filter-type="oe" data-filter="oe1">Módulo 1: OE1 (Dados e Pessoal)</button>
        <button class="req-filter-pill" data-filter-type="oe" data-filter="oe2">Módulo 2: OE2 (Fechamento e Reembolsos)</button>
        <button class="req-filter-pill" data-filter-type="oe" data-filter="oe3">Módulo 3: OE3 (Custos e Orçamento)</button>
        <button class="req-filter-pill" data-filter-type="oe" data-filter="oe4">Módulo 4: OE4 (Segurança e Auditoria)</button>
        <button class="req-filter-pill" data-filter-type="oe" data-filter="transversal">Transversais (T)</button>
      </div>
      <div class="req-filter-tab-pane" data-filter-pane="mvp">
        <button class="req-filter-pill active" data-filter-type="mvp" data-filter="all">Todo o Escopo (91)</button>
        <button class="req-filter-pill" data-filter-type="mvp" data-filter="mvp">Escopo MVP (80 itens)</button>
        <button class="req-filter-pill" data-filter-type="mvp" data-filter="pos-mvp">Evolutivo Pós-MVP (11 itens)</button>
      </div>
      <div class="req-filter-tab-pane" data-filter-pane="prioridade">
        <button class="req-filter-pill active" data-filter-type="quad" data-filter="all">Todas as Prioridades (91)</button>
        <button class="req-filter-pill" data-filter-type="quad" data-filter="q1">Q1 — MVP / Alta Prioridade / Mandatório</button>
        <button class="req-filter-pill" data-filter-type="quad" data-filter="q2">Q2 — Planejado / Complexo</button>
        <button class="req-filter-pill" data-filter-type="quad" data-filter="q3">Q3 — Secundário / Evolutivo</button>
        <button class="req-filter-pill" data-filter-type="quad" data-filter="q4">Q4 — Fora de Escopo</button>
      </div>
    </div>
  </div>
  <div class="req-toolbar-footer">
    <div class="req-count-wrapper">
      <span class="req-count-label">Itens Exibidos:</span>
      <span id="req-count-badge" class="req-count-badge">40 RFs, 31 RNs e 20 RNFs</span>
    </div>
    <div class="req-actions-wrapper">
      <button type="button" id="req-expand-all" class="req-action-btn" title="Expandir todos os cards visíveis"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline></svg> Expandir Todos</button>
      <button type="button" id="req-collapse-all" class="req-action-btn" title="Recolher todos os cards visíveis"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline></svg> Recolher Todos</button>
    </div>
  </div>
</div>

<div id="req-no-results" class="req-no-results" style="display: none;">
  <p><strong>Nenhum item encontrado</strong> para a busca e filtros aplicados.</p>
  <p class="req-no-results-hint">Tente limpar os filtros ou buscar por outro termo ou código (ex: RF01, RN15, RNF03).</p>
</div>


<details class="req-card req-card-rf req-card-oe1" id="rf01" data-type="rf" data-rf="RF01" data-oe="oe1" data-car="car-01" data-mvp="mvp" data-quad="q1" data-role="ADMIN_FINANCEIRO" data-text="rf01 cadastrar colaborador oe1 car-01 admin_financeiro mvp q1 ct-m1-01 us01 como **administrador financeiro**, quero cadastrar um novo colaborador com seus dados pessoais, bancários e trabalhistas, para que exista uma base única e validada por cpf que sustente os apontamentos e os pagamentos de diárias. rn01 rn03 rn22 rn23 rnf02 rnf03 rnf19" data-search-text="rf01 cadastrar colaborador oe1 car-01 admin_financeiro mvp q1 ct-m1-01 us01 como **administrador financeiro**, quero cadastrar um novo colaborador com seus dados pessoais, bancários e trabalhistas, para que exista uma base única e validada por cpf que sustente os apontamentos e os pagamentos de diárias. rn01 rn03 rn22 rn23 rnf02 rnf03 rnf19">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q1"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Alta Prioridade</span></span>
      <span class="req-pill req-tag-mvp req-pill-mvp">Candidato ao MVP</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF01 - Cadastrar colaborador</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-dev"><span class="req-status-dot"></span>Em Desenvolvimento (Sprint Backlog)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe1-padronizar-e-unificar-os-dados" class="req-lumio-tag req-tag-oe"># OE1 · Padronizar e Unificar os Dados ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-01" class="req-lumio-tag req-tag-car"># CAR-01 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># ADMIN_FINANCEIRO</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">História de Usuário (US01)</span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>Administrador Financeiro</strong>, quero cadastrar um novo colaborador com seus dados pessoais, bancários e trabalhistas, para que exista uma base única e validada por CPF que sustente os apontamentos e os pagamentos de diárias.</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">O Administrador Financeiro (`ADMIN_FINANCEIRO`) cadastra um novo profissional informando seus dados cadastrais, bancários (código de compensação COMPE de 3 dígitos, agência e conta corrente) e trabalhistas validados (RN01, RN03, RN22), e o sistema grava o registro com um identificador único. Se for concedido acesso ao sistema, é gerado e despachado um link seguro de primeiro acesso e ativação para o e-mail corporativo cadastrado (RF17), permitindo definir senha para autenticação subsequente (RF13). Se o CPF informado for inválido segundo o algoritmo oficial da Receita Federal (módulo 11) ou já constar na base de dados, o cadastro é recusado e nenhum registro novo é criado (RN01).</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<a href="#rn01" class="req-tag req-tag-rn"># RN01 · Unicidade e Validação Cadastral por CPF ↗</a> <a href="#rn03" class="req-tag req-tag-rn"># RN03 · Validação Prévia de Dados Bancários e Chave Pix ↗</a> <a href="#rn22" class="req-tag req-tag-rn"># RN22 · Tipos de Contratação Válidos ↗</a> <a href="#rn23" class="req-tag req-tag-rn"># RN23 · Versionamento Obrigatório de Dados Cadastrais e Bancários ↗</a>) e perfil canônico de acesso <code>ADMIN_FINANCEIRO</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf02" class="req-tag req-tag-rnf"># RNF02 · Garantir tempo de resposta para consulta cadastral inferior a 2,0 segundos ↗</a> <a href="#rnf03" class="req-tag req-tag-rnf"># RNF03 · Proteger dados pessoais e cadastrais com criptografia em repouso e em trânsito ↗</a> <a href="#rnf19" class="req-tag req-tag-rnf"># RNF19 · Garantir acessibilidade digital nas interfaces do sistema ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe1-padronizar-e-unificar-os-dados" class="req-tag req-tag-oe"># OE1 · Padronizar e Unificar os Dados ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-01" class="req-tag req-tag-car"># CAR-01 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># ADMIN_FINANCEIRO</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><a href="#rn01" class="req-tag req-tag-rn"># RN01 · Unicidade e Validação Cadastral por CPF ↗</a> <a href="#rn03" class="req-tag req-tag-rn"># RN03 · Validação Prévia de Dados Bancários e Chave Pix ↗</a> <a href="#rn22" class="req-tag req-tag-rn"># RN22 · Tipos de Contratação Válidos ↗</a> <a href="#rn23" class="req-tag req-tag-rn"># RN23 · Versionamento Obrigatório de Dados Cadastrais e Bancários ↗</a></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf02" class="req-tag req-tag-rnf"># RNF02 · Garantir tempo de resposta para consulta cadastral inferior a 2,0 segundos ↗</a> <a href="#rnf03" class="req-tag req-tag-rnf"># RNF03 · Proteger dados pessoais e cadastrais com criptografia em repouso e em trânsito ↗</a> <a href="#rnf19" class="req-tag req-tag-rnf"># RNF19 · Garantir acessibilidade digital nas interfaces do sistema ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q1">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q1">Q1 — Candidatos ao MVP (Alta Prioridade)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">4 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">6h (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">1 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">1,67 (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">2,40</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>2,40</strong>). Destinação: <strong>MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q1">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe1" id="rf02" data-type="rf" data-rf="RF02" data-oe="oe1" data-car="car-01" data-mvp="mvp" data-quad="q1" data-role="ADMIN_FINANCEIRO" data-text="rf02 atualizar cadastro de colaborador oe1 car-01 admin_financeiro mvp q1 ct-m1-02 us02 como **administrador financeiro**, quero atualizar os dados cadastrais e bancários de um colaborador ativo, para que todos os módulos passem a usar imediatamente as informações corretas, sem perder a versão anterior da ficha. rn23 rnf02 rnf03 rnf19" data-search-text="rf02 atualizar cadastro de colaborador oe1 car-01 admin_financeiro mvp q1 ct-m1-02 us02 como **administrador financeiro**, quero atualizar os dados cadastrais e bancários de um colaborador ativo, para que todos os módulos passem a usar imediatamente as informações corretas, sem perder a versão anterior da ficha. rn23 rnf02 rnf03 rnf19">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q1"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Alta Prioridade</span></span>
      <span class="req-pill req-tag-mvp req-pill-mvp">Candidato ao MVP</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF02 - Atualizar cadastro de colaborador</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-dev"><span class="req-status-dot"></span>Em Desenvolvimento (Sprint Backlog)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe1-padronizar-e-unificar-os-dados" class="req-lumio-tag req-tag-oe"># OE1 · Padronizar e Unificar os Dados ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-01" class="req-lumio-tag req-tag-car"># CAR-01 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># ADMIN_FINANCEIRO</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">História de Usuário (US02)</span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>Administrador Financeiro</strong>, quero atualizar os dados cadastrais e bancários de um colaborador ativo, para que todos os módulos passem a usar imediatamente as informações corretas, sem perder a versão anterior da ficha.</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">As alterações nos dados cadastrais ou bancários de um colaborador ativo, submetidas pelo Administrador Financeiro (`ADMIN_FINANCEIRO`), propagam-se de forma síncrona na mesma transação atômica (em latência inferior a 500 ms) para as rotinas financeiras de fechamento e apropriação de custos, preservando a versão anterior da ficha no histórico imutável (RN23).</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<a href="#rn23" class="req-tag req-tag-rn"># RN23 · Versionamento Obrigatório de Dados Cadastrais e Bancários ↗</a>) e perfil canônico de acesso <code>ADMIN_FINANCEIRO</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf02" class="req-tag req-tag-rnf"># RNF02 · Garantir tempo de resposta para consulta cadastral inferior a 2,0 segundos ↗</a> <a href="#rnf03" class="req-tag req-tag-rnf"># RNF03 · Proteger dados pessoais e cadastrais com criptografia em repouso e em trânsito ↗</a> <a href="#rnf19" class="req-tag req-tag-rnf"># RNF19 · Garantir acessibilidade digital nas interfaces do sistema ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe1-padronizar-e-unificar-os-dados" class="req-tag req-tag-oe"># OE1 · Padronizar e Unificar os Dados ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-01" class="req-tag req-tag-car"># CAR-01 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># ADMIN_FINANCEIRO</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><a href="#rn23" class="req-tag req-tag-rn"># RN23 · Versionamento Obrigatório de Dados Cadastrais e Bancários ↗</a></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf02" class="req-tag req-tag-rnf"># RNF02 · Garantir tempo de resposta para consulta cadastral inferior a 2,0 segundos ↗</a> <a href="#rnf03" class="req-tag req-tag-rnf"># RNF03 · Proteger dados pessoais e cadastrais com criptografia em repouso e em trânsito ↗</a> <a href="#rnf19" class="req-tag req-tag-rnf"># RNF19 · Garantir acessibilidade digital nas interfaces do sistema ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q1">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q1">Q1 — Candidatos ao MVP (Alta Prioridade)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">6h (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">1 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">1,67 (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">1,80</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>1,80</strong>). Destinação: <strong>MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q1">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe1" id="rf03" data-type="rf" data-rf="RF03" data-oe="oe1" data-car="car-01" data-mvp="mvp" data-quad="q1" data-role="ADMIN_FINANCEIRO" data-text="rf03 registrar movimentação funcional oe1 car-01 admin_financeiro mvp q1 ct-m1-03 us03 como **administrador financeiro**, quero registrar afastamentos, férias e desligamentos de um colaborador, para que sua situação funcional fique atualizada e o acesso de campo seja revogado, evitando pagamentos indevidos. rn04 rnf02 rnf03 rnf19" data-search-text="rf03 registrar movimentação funcional oe1 car-01 admin_financeiro mvp q1 ct-m1-03 us03 como **administrador financeiro**, quero registrar afastamentos, férias e desligamentos de um colaborador, para que sua situação funcional fique atualizada e o acesso de campo seja revogado, evitando pagamentos indevidos. rn04 rnf02 rnf03 rnf19">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q1"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Alta Prioridade</span></span>
      <span class="req-pill req-tag-mvp req-pill-mvp">Candidato ao MVP</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF03 - Registrar movimentação funcional</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-dev"><span class="req-status-dot"></span>Em Desenvolvimento (Sprint Backlog)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe1-padronizar-e-unificar-os-dados" class="req-lumio-tag req-tag-oe"># OE1 · Padronizar e Unificar os Dados ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-01" class="req-lumio-tag req-tag-car"># CAR-01 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># ADMIN_FINANCEIRO</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">História de Usuário (US03)</span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>Administrador Financeiro</strong>, quero registrar afastamentos, férias e desligamentos de um colaborador, para que sua situação funcional fique atualizada e o acesso de campo seja revogado, evitando pagamentos indevidos.</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">O Administrador Financeiro (`ADMIN_FINANCEIRO`) registra afastamentos, férias e rescisões contratuais, atualizando a situação funcional do colaborador no sistema. Em caso de afastamento ou desligamento, o acesso do colaborador à aplicação web responsiva (Web App / PWA) é revogado compulsoriamente na mesma transação de persistência no banco (RN04).</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<a href="#rn04" class="req-tag req-tag-rn"># RN04 · Revogação Automática de Credenciais em Afastamento ou Rescisão ↗</a>) e perfil canônico de acesso <code>ADMIN_FINANCEIRO</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf02" class="req-tag req-tag-rnf"># RNF02 · Garantir tempo de resposta para consulta cadastral inferior a 2,0 segundos ↗</a> <a href="#rnf03" class="req-tag req-tag-rnf"># RNF03 · Proteger dados pessoais e cadastrais com criptografia em repouso e em trânsito ↗</a> <a href="#rnf19" class="req-tag req-tag-rnf"># RNF19 · Garantir acessibilidade digital nas interfaces do sistema ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe1-padronizar-e-unificar-os-dados" class="req-tag req-tag-oe"># OE1 · Padronizar e Unificar os Dados ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-01" class="req-tag req-tag-car"># CAR-01 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># ADMIN_FINANCEIRO</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><a href="#rn04" class="req-tag req-tag-rn"># RN04 · Revogação Automática de Credenciais em Afastamento ou Rescisão ↗</a></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf02" class="req-tag req-tag-rnf"># RNF02 · Garantir tempo de resposta para consulta cadastral inferior a 2,0 segundos ↗</a> <a href="#rnf03" class="req-tag req-tag-rnf"># RNF03 · Proteger dados pessoais e cadastrais com criptografia em repouso e em trânsito ↗</a> <a href="#rnf19" class="req-tag req-tag-rnf"># RNF19 · Garantir acessibilidade digital nas interfaces do sistema ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q1">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q1">Q1 — Candidatos ao MVP (Alta Prioridade)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">6h (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">2,00 (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">1,50</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>1,50</strong>). Destinação: <strong>MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q1">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe1" id="rf04" data-type="rf" data-rf="RF04" data-oe="oe1" data-car="car-02" data-mvp="mvp" data-quad="q2" data-role="TECNICO_CAMPO" data-text="rf04 submeter apontamento de campo oe1 car-02 tecnico_campo mvp q2 ct-m1-04 us04 como **técnico de campo**, quero enviar pelo dispositivo móvel as horas trabalhadas e o escopo executado ao final da jornada, para que meu apontamento chegue à supervisão sem depender de planilhas ou mensagens de whatsapp. rn02 rnf01 rnf04" data-search-text="rf04 submeter apontamento de campo oe1 car-02 tecnico_campo mvp q2 ct-m1-04 us04 como **técnico de campo**, quero enviar pelo dispositivo móvel as horas trabalhadas e o escopo executado ao final da jornada, para que meu apontamento chegue à supervisão sem depender de planilhas ou mensagens de whatsapp. rn02 rnf01 rnf04">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q2"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Planejado</span></span>
      <span class="req-pill req-tag-mvp req-pill-mvp">Candidato ao MVP</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF04 - Submeter apontamento de campo</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-dev"><span class="req-status-dot"></span>Em Desenvolvimento (Sprint Backlog)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe1-padronizar-e-unificar-os-dados" class="req-lumio-tag req-tag-oe"># OE1 · Padronizar e Unificar os Dados ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-02" class="req-lumio-tag req-tag-car"># CAR-02 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># TECNICO_CAMPO</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">História de Usuário (US04)</span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>Técnico de Campo</strong>, quero enviar pelo dispositivo móvel as horas trabalhadas e o escopo executado ao final da jornada, para que meu apontamento chegue à supervisão sem depender de planilhas ou mensagens de WhatsApp.</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">Ao término da jornada em obra ou visita técnica, o Técnico de Campo (`TECNICO_CAMPO`) envia pela aplicação web responsiva (Web App / PWA) as horas trabalhadas e o escopo de serviços executado, juntamente com os anexos do apontamento (RF22). O registro é gravado com status inicial "Pendente de Homologação" e disponibilizado para análise do Gestor Operacional de Obras (`GESTOR_OBRAS`) responsável pelo contrato (RN02).</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<a href="#rn02" class="req-tag req-tag-rn"># RN02 · Janela Temporal para Submissão e Edição de Apontamento ↗</a>) e perfil canônico de acesso <code>TECNICO_CAMPO</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf01" class="req-tag req-tag-rnf"># RNF01 · Operar em modo offline para coleta de dados em canteiros sem conectividade ↗</a> <a href="#rnf04" class="req-tag req-tag-rnf"># RNF04 · Garantir usabilidade e agilidade no preenchimento de apontamentos de campo ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe1-padronizar-e-unificar-os-dados" class="req-tag req-tag-oe"># OE1 · Padronizar e Unificar os Dados ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-02" class="req-tag req-tag-car"># CAR-02 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># TECNICO_CAMPO</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><a href="#rn02" class="req-tag req-tag-rn"># RN02 · Janela Temporal para Submissão e Edição de Apontamento ↗</a></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf01" class="req-tag req-tag-rnf"># RNF01 · Operar em modo offline para coleta de dados em canteiros sem conectividade ↗</a> <a href="#rnf04" class="req-tag req-tag-rnf"># RNF04 · Garantir usabilidade e agilidade no preenchimento de apontamentos de campo ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q2">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q2">Q2 — Planejamento / Complexo</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">4 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">16h (3)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">3,00 (3)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">1,33</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>1,33</strong>). Destinação: <strong>MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q2">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe2" id="rf05" data-type="rf" data-rf="RF05" data-oe="oe2" data-car="car-03" data-mvp="mvp" data-quad="q2" data-role="ADMIN_FINANCEIRO" data-text="rf05 solicitar prévia de fechamento oe2 car-03 admin_financeiro mvp q2 ct-m2-01 us05 como **administrador financeiro**, quero gerar a prévia de fechamento da competência com diárias e comissões já calculadas, para que eu confira os valores sem consolidar planilhas manualmente. rn25 rn31 rnf05 rnf06 rnf10" data-search-text="rf05 solicitar prévia de fechamento oe2 car-03 admin_financeiro mvp q2 ct-m2-01 us05 como **administrador financeiro**, quero gerar a prévia de fechamento da competência com diárias e comissões já calculadas, para que eu confira os valores sem consolidar planilhas manualmente. rn25 rn31 rnf05 rnf06 rnf10">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q2"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Planejado</span></span>
      <span class="req-pill req-tag-mvp req-pill-mvp">Candidato ao MVP</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF05 - Solicitar prévia de fechamento</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-dev"><span class="req-status-dot"></span>Em Desenvolvimento (Sprint Backlog)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe2-aumentar-a-eficiencia-administrativo-financeira" class="req-lumio-tag req-tag-oe"># OE2 · Acelerar Fechamento e Eficiência Administrativa ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-03" class="req-lumio-tag req-tag-car"># CAR-03 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># ADMIN_FINANCEIRO</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">História de Usuário (US05)</span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>Administrador Financeiro</strong>, quero gerar a prévia de fechamento da competência com diárias e comissões já calculadas, para que eu confira os valores sem consolidar planilhas manualmente.</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">O Administrador Financeiro (`ADMIN_FINANCEIRO`) gera um extrato preliminar consolidado para a competência mensal e contratos de obra selecionados, computando estritamente os apontamentos de campo previamente homologados pelo Gestor Operacional de Obras (RF32, RN05) e aplicando as fórmulas de diárias técnicas e comissões simplificadas parametrizadas (RN25, RN31) para conferência supervisionada antes do fechamento definitivo.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<a href="#rn25" class="req-tag req-tag-rn"># RN25 · Vigência dos Valores de Diárias Técnicas ↗</a> <a href="#rn31" class="req-tag req-tag-rn"># RN31 · Parametrização e Fórmulas de Diárias e Comissões Técnicas de Campo ↗</a>) e perfil canônico de acesso <code>ADMIN_FINANCEIRO</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf05" class="req-tag req-tag-rnf"># RNF05 · Processar rotina de fechamento financeiro em até 5,0 segundos ↗</a> <a href="#rnf06" class="req-tag req-tag-rnf"># RNF06 · Garantir exatidão aritmética centesimal em cálculos monetários ↗</a> <a href="#rnf10" class="req-tag req-tag-rnf"># RNF10 · Garantir sigilo e não-exposição de remunerações individuais em relatórios operacionais ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe2-aumentar-a-eficiencia-administrativo-financeira" class="req-tag req-tag-oe"># OE2 · Acelerar Fechamento e Eficiência Administrativa ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-03" class="req-tag req-tag-car"># CAR-03 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># ADMIN_FINANCEIRO</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><a href="#rn25" class="req-tag req-tag-rn"># RN25 · Vigência dos Valores de Diárias Técnicas ↗</a> <a href="#rn31" class="req-tag req-tag-rn"># RN31 · Parametrização e Fórmulas de Diárias e Comissões Técnicas de Campo ↗</a></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf05" class="req-tag req-tag-rnf"># RNF05 · Processar rotina de fechamento financeiro em até 5,0 segundos ↗</a> <a href="#rnf06" class="req-tag req-tag-rnf"># RNF06 · Garantir exatidão aritmética centesimal em cálculos monetários ↗</a> <a href="#rnf10" class="req-tag req-tag-rnf"># RNF10 · Garantir sigilo e não-exposição de remunerações individuais em relatórios operacionais ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q2">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q2">Q2 — Planejamento / Complexo</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">4 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">4 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">16h (3)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">3,33 (3)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">1,20</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>1,20</strong>). Destinação: <strong>MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q2">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe2" id="rf06" data-type="rf" data-rf="RF06" data-oe="oe2" data-car="car-03" data-mvp="mvp" data-quad="q1" data-role="ADMIN_FINANCEIRO" data-text="rf06 homologar fechamento financeiro oe2 car-03 admin_financeiro mvp q1 ct-m2-02 us06 como **administrador financeiro**, quero homologar o lote de fechamento após a conferência, para que os lançamentos fiquem bloqueados contra alterações diretas e o extrato final seja emitido com segurança. rn08 rn17 rnf05 rnf06 rnf10" data-search-text="rf06 homologar fechamento financeiro oe2 car-03 admin_financeiro mvp q1 ct-m2-02 us06 como **administrador financeiro**, quero homologar o lote de fechamento após a conferência, para que os lançamentos fiquem bloqueados contra alterações diretas e o extrato final seja emitido com segurança. rn08 rn17 rnf05 rnf06 rnf10">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q1"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Alta Prioridade</span></span>
      <span class="req-pill req-tag-mvp req-pill-mvp">Candidato ao MVP</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF06 - Homologar fechamento financeiro</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-dev"><span class="req-status-dot"></span>Em Desenvolvimento (Sprint Backlog)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe2-aumentar-a-eficiencia-administrativo-financeira" class="req-lumio-tag req-tag-oe"># OE2 · Acelerar Fechamento e Eficiência Administrativa ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-03" class="req-lumio-tag req-tag-car"># CAR-03 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># ADMIN_FINANCEIRO</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">História de Usuário (US06)</span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>Administrador Financeiro</strong>, quero homologar o lote de fechamento após a conferência, para que os lançamentos fiquem bloqueados contra alterações diretas e o extrato final seja emitido com segurança.</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">O Administrador Financeiro (`ADMIN_FINANCEIRO`), após conferir o extrato preliminar consolidado (RF05), confirma formalmente a homologação do lote da competência mensal dos contratos selecionados. A confirmação encerra a competência, bloqueia compulsoriamente os apontamentos e despesas contra qualquer modificação direta (RN08), grava o carimbo de homologação com UTC e autor na trilha de auditoria (RN17) e emite o extrato financeiro definitivo para conciliação contábil; eventuais retificações posteriores exigem compulsoriamente o procedimento de estorno formal (RF21).</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<a href="#rn08" class="req-tag req-tag-rn"># RN08 · Comprovante Fiscal Obrigatório para Homologação de Reembolso ↗</a> <a href="#rn17" class="req-tag req-tag-rn"># RN17 · Registro Atômico de Mutações em Trilha de Auditoria ↗</a>) e perfil canônico de acesso <code>ADMIN_FINANCEIRO</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf05" class="req-tag req-tag-rnf"># RNF05 · Processar rotina de fechamento financeiro em até 5,0 segundos ↗</a> <a href="#rnf06" class="req-tag req-tag-rnf"># RNF06 · Garantir exatidão aritmética centesimal em cálculos monetários ↗</a> <a href="#rnf10" class="req-tag req-tag-rnf"># RNF10 · Garantir sigilo e não-exposição de remunerações individuais em relatórios operacionais ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe2-aumentar-a-eficiencia-administrativo-financeira" class="req-tag req-tag-oe"># OE2 · Acelerar Fechamento e Eficiência Administrativa ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-03" class="req-tag req-tag-car"># CAR-03 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># ADMIN_FINANCEIRO</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><a href="#rn08" class="req-tag req-tag-rn"># RN08 · Comprovante Fiscal Obrigatório para Homologação de Reembolso ↗</a> <a href="#rn17" class="req-tag req-tag-rn"># RN17 · Registro Atômico de Mutações em Trilha de Auditoria ↗</a></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf05" class="req-tag req-tag-rnf"># RNF05 · Processar rotina de fechamento financeiro em até 5,0 segundos ↗</a> <a href="#rnf06" class="req-tag req-tag-rnf"># RNF06 · Garantir exatidão aritmética centesimal em cálculos monetários ↗</a> <a href="#rnf10" class="req-tag req-tag-rnf"># RNF10 · Garantir sigilo e não-exposição de remunerações individuais em relatórios operacionais ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q1">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q1">Q1 — Candidatos ao MVP (Alta Prioridade)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">4 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">6h (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">2,33 (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">1,71</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>1,71</strong>). Destinação: <strong>MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q1">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe2" id="rf07" data-type="rf" data-rf="RF07" data-oe="oe2" data-car="car-04" data-mvp="mvp" data-quad="q1" data-role="TECNICO_CAMPO / GESTOR_OBRAS" data-text="rf07 submeter solicitação de reembolso oe2 car-04 tecnico_campo / gestor_obras mvp q1 ct-m2-03 us07 como **técnico de campo ou gestor operacional de obras**, quero solicitar o reembolso de uma despesa operacional anexando o comprovante fiscal, para que eu seja ressarcido sem entregar recibos físicos ou enviar fotos avulsas. rn06 rn09 rnf07" data-search-text="rf07 submeter solicitação de reembolso oe2 car-04 tecnico_campo / gestor_obras mvp q1 ct-m2-03 us07 como **técnico de campo ou gestor operacional de obras**, quero solicitar o reembolso de uma despesa operacional anexando o comprovante fiscal, para que eu seja ressarcido sem entregar recibos físicos ou enviar fotos avulsas. rn06 rn09 rnf07">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q1"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Alta Prioridade</span></span>
      <span class="req-pill req-tag-mvp req-pill-mvp">Candidato ao MVP</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF07 - Submeter solicitação de reembolso</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-dev"><span class="req-status-dot"></span>Em Desenvolvimento (Sprint Backlog)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe2-aumentar-a-eficiencia-administrativo-financeira" class="req-lumio-tag req-tag-oe"># OE2 · Acelerar Fechamento e Eficiência Administrativa ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-04" class="req-lumio-tag req-tag-car"># CAR-04 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># TECNICO_CAMPO / GESTOR_OBRAS</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">História de Usuário (US07)</span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>Técnico de Campo ou Gestor Operacional de Obras</strong>, quero solicitar o reembolso de uma despesa operacional anexando o comprovante fiscal, para que eu seja ressarcido sem entregar recibos físicos ou enviar fotos avulsas.</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">O Técnico de Campo (`TECNICO_CAMPO`) ou gestor solicita o reembolso de uma despesa operacional autorizada (hospedagem, combustível, alimentação de canteiro ou materiais emergenciais vinculados ao contrato ativo) informando valor monetário, categoria de despesa e contrato de obra, anexando compulsoriamente o comprovante fiscal digitalizado (RN06, RN09). A solicitação aceita é registrada com status "Pendente de Análise".</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<a href="#rn06" class="req-tag req-tag-rn"># RN06 · Janela Temporal para Prestação de Contas de Reembolso ↗</a> <a href="#rn09" class="req-tag req-tag-rn"># RN09 · Rateio Proporcional de Custos Indiretos por Contrato ↗</a>) e perfil canônico de acesso <code>TECNICO_CAMPO / GESTOR_OBRAS</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf07" class="req-tag req-tag-rnf"># RNF07 · Garantir robustez e segurança no processamento e armazenamento de comprovantes ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe2-aumentar-a-eficiencia-administrativo-financeira" class="req-tag req-tag-oe"># OE2 · Acelerar Fechamento e Eficiência Administrativa ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-04" class="req-tag req-tag-car"># CAR-04 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># TECNICO_CAMPO / GESTOR_OBRAS</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><a href="#rn06" class="req-tag req-tag-rn"># RN06 · Janela Temporal para Prestação de Contas de Reembolso ↗</a> <a href="#rn09" class="req-tag req-tag-rn"># RN09 · Rateio Proporcional de Custos Indiretos por Contrato ↗</a></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf07" class="req-tag req-tag-rnf"># RNF07 · Garantir robustez e segurança no processamento e armazenamento de comprovantes ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q1">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q1">Q1 — Candidatos ao MVP (Alta Prioridade)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">4 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">6h (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">2,00 (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">2,00</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>2,00</strong>). Destinação: <strong>MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q1">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe2" id="rf08" data-type="rf" data-rf="RF08" data-oe="oe2" data-car="car-04" data-mvp="mvp" data-quad="q1" data-role="ADMIN_FINANCEIRO" data-text="rf08 deliberar solicitação de reembolso oe2 car-04 admin_financeiro mvp q1 ct-m2-04 us08 como **administrador financeiro**, quero aprovar ou reprovar as solicitações de reembolso com parecer obrigatório na reprovação, para que apenas despesas comprovadas sejam repassadas e o solicitante seja informado da decisão. rn07 rn27 rnf06" data-search-text="rf08 deliberar solicitação de reembolso oe2 car-04 admin_financeiro mvp q1 ct-m2-04 us08 como **administrador financeiro**, quero aprovar ou reprovar as solicitações de reembolso com parecer obrigatório na reprovação, para que apenas despesas comprovadas sejam repassadas e o solicitante seja informado da decisão. rn07 rn27 rnf06">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q1"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Alta Prioridade</span></span>
      <span class="req-pill req-tag-mvp req-pill-mvp">Candidato ao MVP</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF08 - Deliberar solicitação de reembolso</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-dev"><span class="req-status-dot"></span>Em Desenvolvimento (Sprint Backlog)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe2-aumentar-a-eficiencia-administrativo-financeira" class="req-lumio-tag req-tag-oe"># OE2 · Acelerar Fechamento e Eficiência Administrativa ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-04" class="req-lumio-tag req-tag-car"># CAR-04 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># ADMIN_FINANCEIRO</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">História de Usuário (US08)</span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>Administrador Financeiro</strong>, quero aprovar ou reprovar as solicitações de reembolso com parecer obrigatório na reprovação, para que apenas despesas comprovadas sejam repassadas e o solicitante seja informado da decisão.</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">O Administrador Financeiro (`ADMIN_FINANCEIRO`) analisa as solicitações pendentes de reembolso vinculadas a contratos ativos e delibera aprovando ou reprovando cada item, sendo o parecer formal obrigatório na reprovação. A decisão é registrada, o status do reembolso é atualizado, o valor aprovado é limitado ao montante do documento fiscal (RN07) e o solicitante é notificado via sistema (RN27).</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<a href="#rn07" class="req-tag req-tag-rn"># RN07 · Bloqueio e Justificativa Obrigatória em Recusa de Despesa ↗</a> <a href="#rn27" class="req-tag req-tag-rn"># RN27 · Notificação de Pendências Financeiras ↗</a>) e perfil canônico de acesso <code>ADMIN_FINANCEIRO</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf06" class="req-tag req-tag-rnf"># RNF06 · Garantir exatidão aritmética centesimal em cálculos monetários ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe2-aumentar-a-eficiencia-administrativo-financeira" class="req-tag req-tag-oe"># OE2 · Acelerar Fechamento e Eficiência Administrativa ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-04" class="req-tag req-tag-car"># CAR-04 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># ADMIN_FINANCEIRO</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><a href="#rn07" class="req-tag req-tag-rn"># RN07 · Bloqueio e Justificativa Obrigatória em Recusa de Despesa ↗</a> <a href="#rn27" class="req-tag req-tag-rn"># RN27 · Notificação de Pendências Financeiras ↗</a></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf06" class="req-tag req-tag-rnf"># RNF06 · Garantir exatidão aritmética centesimal em cálculos monetários ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q1">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q1">Q1 — Candidatos ao MVP (Alta Prioridade)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">4 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">6h (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">2,00 (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">2,00</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>2,00</strong>). Destinação: <strong>MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q1">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe3" id="rf09" data-type="rf" data-rf="RF09" data-oe="oe3" data-car="car-05" data-mvp="mvp" data-quad="q2" data-role="ADMIN_FINANCEIRO" data-text="rf09 apropriar custos operacionais oe3 car-05 admin_financeiro mvp q2 ct-m3-01 us09 como **administrador financeiro**, quero disparar a apropriação dos custos homologados da competência aos respectivos contratos, para que eu conheça o custo real de cada obra sem duplicidade com a folha clt. rn05 rn09 rn10 rn11 rnf10 rnf11" data-search-text="rf09 apropriar custos operacionais oe3 car-05 admin_financeiro mvp q2 ct-m3-01 us09 como **administrador financeiro**, quero disparar a apropriação dos custos homologados da competência aos respectivos contratos, para que eu conheça o custo real de cada obra sem duplicidade com a folha clt. rn05 rn09 rn10 rn11 rnf10 rnf11">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q2"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Planejado</span></span>
      <span class="req-pill req-tag-mvp req-pill-mvp">Candidato ao MVP</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF09 - Apropriar custos operacionais</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-dev"><span class="req-status-dot"></span>Em Desenvolvimento (Sprint Backlog)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato" class="req-lumio-tag req-tag-oe"># OE3 · Transparência de Custos por Contrato de Obra ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-05" class="req-lumio-tag req-tag-car"># CAR-05 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># ADMIN_FINANCEIRO</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">História de Usuário (US09)</span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>Administrador Financeiro</strong>, quero disparar a apropriação dos custos homologados da competência aos respectivos contratos, para que eu conheça o custo real de cada obra sem duplicidade com a folha CLT.</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">O Administrador Financeiro (`ADMIN_FINANCEIRO`) dispara a apropriação de custos da competência mensal, e os valores de apontamentos e diárias homologados pelo Gestor Operacional de Obras (RF32, RN05), juntamente com os reembolsos aprovados pelo Administrador Financeiro (RF08) são alocados diretamente aos respectivos contratos ativos e centros de custo cadastrados (RF33, RF34), sem duplicar nem sobrepor os relatórios de folha CLT legados (RN09, RN10, RN11).</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<a href="#rn05" class="req-tag req-tag-rn"># RN05 · Pré-requisito de Homologação de Apontamentos para Fechamento ↗</a> <a href="#rn09" class="req-tag req-tag-rn"># RN09 · Rateio Proporcional de Custos Indiretos por Contrato ↗</a> <a href="#rn10" class="req-tag req-tag-rn"># RN10 · Garantia de Consistência Transacional no Rateio de Custos ↗</a> <a href="#rn11" class="req-tag req-tag-rn"># RN11 · Parametrização Obrigatória de Centros de Custo por Contrato ↗</a>) e perfil canônico de acesso <code>ADMIN_FINANCEIRO</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf10" class="req-tag req-tag-rnf"># RNF10 · Garantir sigilo e não-exposição de remunerações individuais em relatórios operacionais ↗</a> <a href="#rnf11" class="req-tag req-tag-rnf"># RNF11 · Garantir consistência transacional ACID na apropriação concorrente de custos ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato" class="req-tag req-tag-oe"># OE3 · Transparência de Custos por Contrato de Obra ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-05" class="req-tag req-tag-car"># CAR-05 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># ADMIN_FINANCEIRO</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><a href="#rn05" class="req-tag req-tag-rn"># RN05 · Pré-requisito de Homologação de Apontamentos para Fechamento ↗</a> <a href="#rn09" class="req-tag req-tag-rn"># RN09 · Rateio Proporcional de Custos Indiretos por Contrato ↗</a> <a href="#rn10" class="req-tag req-tag-rn"># RN10 · Garantia de Consistência Transacional no Rateio de Custos ↗</a> <a href="#rn11" class="req-tag req-tag-rn"># RN11 · Parametrização Obrigatória de Centros de Custo por Contrato ↗</a></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf10" class="req-tag req-tag-rnf"># RNF10 · Garantir sigilo e não-exposição de remunerações individuais em relatórios operacionais ↗</a> <a href="#rnf11" class="req-tag req-tag-rnf"># RNF11 · Garantir consistência transacional ACID na apropriação concorrente de custos ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q2">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q2">Q2 — Planejamento / Complexo</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">4 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">16h (3)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">3,33 (3)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">0,90</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>0,90</strong>). Destinação: <strong>MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q2">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe3" id="rf10" data-type="rf" data-rf="RF10" data-oe="oe3" data-car="car-05" data-mvp="mvp" data-quad="q1" data-role="GESTOR_OBRAS / ADMIN_FINANCEIRO" data-text="rf10 consultar rastreabilidade de custos oe3 car-05 gestor_obras / admin_financeiro mvp q1 ct-m3-02 us10 como **gestor operacional de obras ou administrador financeiro**, quero visualizar a origem completa de cada custo apropriado, para que eu possa justificar e auditar qualquer linha de despesa do contrato. rn12 rnf10" data-search-text="rf10 consultar rastreabilidade de custos oe3 car-05 gestor_obras / admin_financeiro mvp q1 ct-m3-02 us10 como **gestor operacional de obras ou administrador financeiro**, quero visualizar a origem completa de cada custo apropriado, para que eu possa justificar e auditar qualquer linha de despesa do contrato. rn12 rnf10">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q1"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Alta Prioridade</span></span>
      <span class="req-pill req-tag-mvp req-pill-mvp">Candidato ao MVP</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF10 - Consultar rastreabilidade de custos</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-dev"><span class="req-status-dot"></span>Em Desenvolvimento (Sprint Backlog)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato" class="req-lumio-tag req-tag-oe"># OE3 · Transparência de Custos por Contrato de Obra ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-05" class="req-lumio-tag req-tag-car"># CAR-05 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># GESTOR_OBRAS / ADMIN_FINANCEIRO</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">História de Usuário (US10)</span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>Gestor Operacional de Obras ou Administrador Financeiro</strong>, quero visualizar a origem completa de cada custo apropriado, para que eu possa justificar e auditar qualquer linha de despesa do contrato.</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">O Gestor Operacional de Obras (`GESTOR_OBRAS`) ou o Administrador Financeiro (`ADMIN_FINANCEIRO`) consultam a rastreabilidade integral de qualquer custo apropriado a um contrato, visualizando o apontamento de origem, o colaborador executor, o carimbo UTC de homologação e a identificação do gestor responsável pela deliberação (RN12).</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<a href="#rn12" class="req-tag req-tag-rn"># RN12 · Segregação de Despesas Administrativas e Operacionais ↗</a>) e perfil canônico de acesso <code>GESTOR_OBRAS / ADMIN_FINANCEIRO</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf10" class="req-tag req-tag-rnf"># RNF10 · Garantir sigilo e não-exposição de remunerações individuais em relatórios operacionais ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato" class="req-tag req-tag-oe"># OE3 · Transparência de Custos por Contrato de Obra ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-05" class="req-tag req-tag-car"># CAR-05 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># GESTOR_OBRAS / ADMIN_FINANCEIRO</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><a href="#rn12" class="req-tag req-tag-rn"># RN12 · Segregação de Despesas Administrativas e Operacionais ↗</a></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf10" class="req-tag req-tag-rnf"># RNF10 · Garantir sigilo e não-exposição de remunerações individuais em relatórios operacionais ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q1">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q1">Q1 — Candidatos ao MVP (Alta Prioridade)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">6h (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">2,00 (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">1,50</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>1,50</strong>). Destinação: <strong>MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q1">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe3" id="rf11" data-type="rf" data-rf="RF11" data-oe="oe3" data-car="car-06" data-mvp="mvp" data-quad="q1" data-role="GESTOR_OBRAS / ADMIN_FINANCEIRO / ADMIN_SISTEMA" data-text="rf11 filtrar indicadores de custos oe3 car-06 gestor_obras / admin_financeiro / admin_sistema mvp q1 ct-m3-03 us11 como **gestor operacional de obras, administrador financeiro ou administrador do sistema**, quero combinar filtros de período, contrato, colaborador e centro de custo no painel de custos, para que eu analise os custos diretos de cada obra no fechamento. rn14 rnf09 rnf10 rnf12" data-search-text="rf11 filtrar indicadores de custos oe3 car-06 gestor_obras / admin_financeiro / admin_sistema mvp q1 ct-m3-03 us11 como **gestor operacional de obras, administrador financeiro ou administrador do sistema**, quero combinar filtros de período, contrato, colaborador e centro de custo no painel de custos, para que eu analise os custos diretos de cada obra no fechamento. rn14 rnf09 rnf10 rnf12">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q1"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Alta Prioridade</span></span>
      <span class="req-pill req-tag-mvp req-pill-mvp">Candidato ao MVP</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF11 - Filtrar indicadores de custos</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-dev"><span class="req-status-dot"></span>Em Desenvolvimento (Sprint Backlog)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato" class="req-lumio-tag req-tag-oe"># OE3 · Transparência de Custos por Contrato de Obra ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-06" class="req-lumio-tag req-tag-car"># CAR-06 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># GESTOR_OBRAS / ADMIN_FINANCEIRO / ADMIN_SISTEMA</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">História de Usuário (US11)</span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>Gestor Operacional de Obras, Administrador Financeiro ou Administrador do Sistema</strong>, quero combinar filtros de período, contrato, colaborador e centro de custo no painel de custos, para que eu analise os custos diretos de cada obra no fechamento.</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">No painel analítico de custos, usuários autorizados (`GESTOR_OBRAS`, `ADMIN_FINANCEIRO` e `ADMIN_SISTEMA`) combinam simultaneamente filtros de período, contrato de obra ativo, colaborador e centro de custo, recalculando dinamicamente os valores acumulados e gráficos com mascaramento automático de remunerações individuais para perfis não autorizados (RN14, RNF10).</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<a href="#rn14" class="req-tag req-tag-rn"># RN14 · Sigilo e Não-Exposição de Remunerações Individuais em Painéis ↗</a>) e perfil canônico de acesso <code>GESTOR_OBRAS / ADMIN_FINANCEIRO / ADMIN_SISTEMA</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf09" class="req-tag req-tag-rnf"># RNF09 · Garantir tempo de resposta para filtros e consultas do painel de custos inferior a 3,0 segundos ↗</a> <a href="#rnf10" class="req-tag req-tag-rnf"># RNF10 · Garantir sigilo e não-exposição de remunerações individuais em relatórios operacionais ↗</a> <a href="#rnf12" class="req-tag req-tag-rnf"># RNF12 · Assegurar responsividade do painel em resoluções de desktop e tablet ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato" class="req-tag req-tag-oe"># OE3 · Transparência de Custos por Contrato de Obra ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-06" class="req-tag req-tag-car"># CAR-06 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># GESTOR_OBRAS / ADMIN_FINANCEIRO / ADMIN_SISTEMA</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><a href="#rn14" class="req-tag req-tag-rn"># RN14 · Sigilo e Não-Exposição de Remunerações Individuais em Painéis ↗</a></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf09" class="req-tag req-tag-rnf"># RNF09 · Garantir tempo de resposta para filtros e consultas do painel de custos inferior a 3,0 segundos ↗</a> <a href="#rnf10" class="req-tag req-tag-rnf"># RNF10 · Garantir sigilo e não-exposição de remunerações individuais em relatórios operacionais ↗</a> <a href="#rnf12" class="req-tag req-tag-rnf"># RNF12 · Assegurar responsividade do painel em resoluções de desktop e tablet ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q1">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q1">Q1 — Candidatos ao MVP (Alta Prioridade)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">6h (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">2,00 (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">1,50</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>1,50</strong>). Destinação: <strong>MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q1">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe3" id="rf12" data-type="rf" data-rf="RF12" data-oe="oe3" data-car="car-06" data-mvp="pos-mvp" data-quad="q4" data-role="GESTOR_OBRAS / ADMIN_FINANCEIRO" data-text="rf12 monitorar execução orçamentária oe3 car-06 gestor_obras / admin_financeiro pós-mvp q4 ct-m3-04 us12 como **gestor operacional de obras ou administrador financeiro**, quero acompanhar o previsto, o realizado, o desvio e o percentual de execução orçamentária, para que eu identifique extrapolações do orçamento a tempo de agir. rn13 rnf09 rnf10 rnf12" data-search-text="rf12 monitorar execução orçamentária oe3 car-06 gestor_obras / admin_financeiro pós-mvp q4 ct-m3-04 us12 como **gestor operacional de obras ou administrador financeiro**, quero acompanhar o previsto, o realizado, o desvio e o percentual de execução orçamentária, para que eu identifique extrapolações do orçamento a tempo de agir. rn13 rnf09 rnf10 rnf12">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q4"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Fora do MVP</span></span>
      <span class="req-pill req-tag-mvp req-pill-posmvp">Backlog Evolutivo (Pós-MVP)</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF12 - Monitorar execução orçamentária</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-plan"><span class="req-status-dot"></span>Planejado (Release 2)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato" class="req-lumio-tag req-tag-oe"># OE3 · Transparência de Custos por Contrato de Obra ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-06" class="req-lumio-tag req-tag-car"># CAR-06 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># GESTOR_OBRAS / ADMIN_FINANCEIRO</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">História de Usuário (US12)</span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>Gestor Operacional de Obras ou Administrador Financeiro</strong>, quero acompanhar o previsto, o realizado, o desvio e o percentual de execução orçamentária, para que eu identifique extrapolações do orçamento a tempo de agir.</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">Na visão executiva de um contrato com metas orçamentárias definidas (RF40), o Gestor Operacional de Obras (`GESTOR_OBRAS`) e o Administrador Financeiro (`ADMIN_FINANCEIRO`) monitoram o orçamento total previsto, calculado pela soma dos tetos orçamentários das categorias de despesa, o custo realizado apropriado, o desvio financeiro e o percentual de execução orçamentária (RN13). O sistema permite consultar esses indicadores tanto de forma consolidada por contrato quanto individualmente por categoria, destacando visualmente as situações de extrapolação dos limites estabelecidos.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<a href="#rn13" class="req-tag req-tag-rn"># RN13 · Bloqueio Preventivo por Extrapolação de Teto Orçamentário ↗</a>) e perfil canônico de acesso <code>GESTOR_OBRAS / ADMIN_FINANCEIRO</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf09" class="req-tag req-tag-rnf"># RNF09 · Garantir tempo de resposta para filtros e consultas do painel de custos inferior a 3,0 segundos ↗</a> <a href="#rnf10" class="req-tag req-tag-rnf"># RNF10 · Garantir sigilo e não-exposição de remunerações individuais em relatórios operacionais ↗</a> <a href="#rnf12" class="req-tag req-tag-rnf"># RNF12 · Assegurar responsividade do painel em resoluções de desktop e tablet ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato" class="req-tag req-tag-oe"># OE3 · Transparência de Custos por Contrato de Obra ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-06" class="req-tag req-tag-car"># CAR-06 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># GESTOR_OBRAS / ADMIN_FINANCEIRO</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><a href="#rn13" class="req-tag req-tag-rn"># RN13 · Bloqueio Preventivo por Extrapolação de Teto Orçamentário ↗</a></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf09" class="req-tag req-tag-rnf"># RNF09 · Garantir tempo de resposta para filtros e consultas do painel de custos inferior a 3,0 segundos ↗</a> <a href="#rnf10" class="req-tag req-tag-rnf"># RNF10 · Garantir sigilo e não-exposição de remunerações individuais em relatórios operacionais ↗</a> <a href="#rnf12" class="req-tag req-tag-rnf"># RNF12 · Assegurar responsividade do painel em resoluções de desktop e tablet ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q4">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q4">Q4 — Fora de Escopo</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">12h (3)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">3,00 (3)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">0,67</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>0,67</strong>). Destinação: <strong>Pós-MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q4">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe4" id="rf13" data-type="rf" data-rf="RF13" data-oe="oe4" data-car="car-07" data-mvp="mvp" data-quad="q1" data-role="TODOS OS USUÁRIOS" data-text="rf13 efetuar login no sistema oe4 car-07 todos os usuários mvp q1 ct-m4-01 us13 como **usuário da plataforma**, quero entrar na plataforma com e-mail e senha corporativos, para que eu acesse somente as funcionalidades e os dados permitidos ao meu perfil. rn15 rnf13 rnf14" data-search-text="rf13 efetuar login no sistema oe4 car-07 todos os usuários mvp q1 ct-m4-01 us13 como **usuário da plataforma**, quero entrar na plataforma com e-mail e senha corporativos, para que eu acesse somente as funcionalidades e os dados permitidos ao meu perfil. rn15 rnf13 rnf14">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q1"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Alta Prioridade</span></span>
      <span class="req-pill req-tag-mvp req-pill-mvp">Candidato ao MVP</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF13 - Efetuar login no sistema</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-dev"><span class="req-status-dot"></span>Em Desenvolvimento (Sprint Backlog)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe4-garantir-seguranca-e-governanca-de-dados" class="req-lumio-tag req-tag-oe"># OE4 · Segurança, Governança e Conformidade Legal ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-07" class="req-lumio-tag req-tag-car"># CAR-07 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># TODOS OS USUÁRIOS</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">História de Usuário (US13)</span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>usuário da plataforma</strong>, quero entrar na plataforma com e-mail e senha corporativos, para que eu acesse somente as funcionalidades e os dados permitidos ao meu perfil.</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">O usuário autentica-se na plataforma informando e-mail e senha corporativos válidos, recebendo token JWT temporário com perfil de acesso RBAC associado (RN15). Credenciais inválidas geram mensagem de erro genérica sem enumeração de contas.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<a href="#rn15" class="req-tag req-tag-rn"># RN15 · Autenticação por JWT com Sessão Temporal Limitada ↗</a>) e perfil canônico de acesso <code>TODOS OS USUÁRIOS</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf13" class="req-tag req-tag-rnf"># RNF13 · Expirar token de acesso temporário em no máximo 8 horas ↗</a> <a href="#rnf14" class="req-tag req-tag-rnf"># RNF14 · Validar perfil de autorização em 100% das rotas de API com dados protegidos ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe4-garantir-seguranca-e-governanca-de-dados" class="req-tag req-tag-oe"># OE4 · Segurança, Governança e Conformidade Legal ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-07" class="req-tag req-tag-car"># CAR-07 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># TODOS OS USUÁRIOS</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><a href="#rn15" class="req-tag req-tag-rn"># RN15 · Autenticação por JWT com Sessão Temporal Limitada ↗</a></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf13" class="req-tag req-tag-rnf"># RNF13 · Expirar token de acesso temporário em no máximo 8 horas ↗</a> <a href="#rnf14" class="req-tag req-tag-rnf"># RNF14 · Validar perfil de autorização em 100% das rotas de API com dados protegidos ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q1">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q1">Q1 — Candidatos ao MVP (Alta Prioridade)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">4 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">1 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">2h (1)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">1 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">1,00 (1)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">4,00</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>4,00</strong>). Destinação: <strong>MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q1">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe4" id="rf14" data-type="rf" data-rf="RF14" data-oe="oe4" data-car="car-07" data-mvp="mvp" data-quad="q1" data-role="ADMIN_SISTEMA" data-text="rf14 gerenciar perfis de acesso oe4 car-07 admin_sistema mvp q1 ct-m4-02 us14 como **administrador do sistema**, quero atribuir a cada usuário um papel de acesso, para que campo, gestão e financeiro visualizem apenas os dados da sua alçada (princípio do menor privilégio). rn16 rnf14" data-search-text="rf14 gerenciar perfis de acesso oe4 car-07 admin_sistema mvp q1 ct-m4-02 us14 como **administrador do sistema**, quero atribuir a cada usuário um papel de acesso, para que campo, gestão e financeiro visualizem apenas os dados da sua alçada (princípio do menor privilégio). rn16 rnf14">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q1"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Alta Prioridade</span></span>
      <span class="req-pill req-tag-mvp req-pill-mvp">Candidato ao MVP</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF14 - Gerenciar perfis de acesso</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-dev"><span class="req-status-dot"></span>Em Desenvolvimento (Sprint Backlog)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe4-garantir-seguranca-e-governanca-de-dados" class="req-lumio-tag req-tag-oe"># OE4 · Segurança, Governança e Conformidade Legal ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-07" class="req-lumio-tag req-tag-car"># CAR-07 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># ADMIN_SISTEMA</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">História de Usuário (US14)</span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>Administrador do Sistema</strong>, quero atribuir a cada usuário um papel de acesso, para que campo, gestão e financeiro visualizem apenas os dados da sua alçada (princípio do menor privilégio).</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">O Administrador do Sistema (`ADMIN_SISTEMA`) atribui a cada usuário um dos 4 papéis canônicos de acesso (`TECNICO_CAMPO`, `GESTOR_OBRAS`, `ADMIN_FINANCEIRO` ou `ADMIN_SISTEMA`), passando as permissões e restrições a vigorar na camada de autenticação/autorização em todas as telas e rotas de API da aplicação (RN16, RNF14).</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<a href="#rn16" class="req-tag req-tag-rn"># RN16 · Princípio do Menor Privilégio e Segregação de Funções (SoD) ↗</a>) e perfil canônico de acesso <code>ADMIN_SISTEMA</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf14" class="req-tag req-tag-rnf"># RNF14 · Validar perfil de autorização em 100% das rotas de API com dados protegidos ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe4-garantir-seguranca-e-governanca-de-dados" class="req-tag req-tag-oe"># OE4 · Segurança, Governança e Conformidade Legal ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-07" class="req-tag req-tag-car"># CAR-07 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># ADMIN_SISTEMA</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><a href="#rn16" class="req-tag req-tag-rn"># RN16 · Princípio do Menor Privilégio e Segregação de Funções (SoD) ↗</a></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf14" class="req-tag req-tag-rnf"># RNF14 · Validar perfil de autorização em 100% das rotas de API com dados protegidos ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q1">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q1">Q1 — Candidatos ao MVP (Alta Prioridade)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">6h (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">2,33 (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">1,29</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>1,29</strong>). Destinação: <strong>MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q1">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe4" id="rf15" data-type="rf" data-rf="RF15" data-oe="oe4" data-car="car-08" data-mvp="pos-mvp" data-quad="q4" data-role="ADMIN_SISTEMA / ADMIN_FINANCEIRO" data-text="rf15 consultar trilha de auditoria oe4 car-08 admin_sistema / admin_financeiro pós-mvp q4 ct-m4-03 us15 como **administrador do sistema ou administrador financeiro**, quero pesquisar a trilha de auditoria por período, usuário, operação e módulo, para que eu identifique quem executou cada operação sensível e quando. rn17 rn18 rn19 rnf15 rnf16 rnf17" data-search-text="rf15 consultar trilha de auditoria oe4 car-08 admin_sistema / admin_financeiro pós-mvp q4 ct-m4-03 us15 como **administrador do sistema ou administrador financeiro**, quero pesquisar a trilha de auditoria por período, usuário, operação e módulo, para que eu identifique quem executou cada operação sensível e quando. rn17 rn18 rn19 rnf15 rnf16 rnf17">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q4"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Fora do MVP</span></span>
      <span class="req-pill req-tag-mvp req-pill-posmvp">Backlog Evolutivo (Pós-MVP)</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF15 - Consultar trilha de auditoria</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-plan"><span class="req-status-dot"></span>Planejado (Release 2)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe4-garantir-seguranca-e-governanca-de-dados" class="req-lumio-tag req-tag-oe"># OE4 · Segurança, Governança e Conformidade Legal ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-08" class="req-lumio-tag req-tag-car"># CAR-08 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># ADMIN_SISTEMA / ADMIN_FINANCEIRO</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">História de Usuário (US15)</span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>Administrador do Sistema ou Administrador Financeiro</strong>, quero pesquisar a trilha de auditoria por período, usuário, operação e módulo, para que eu identifique quem executou cada operação sensível e quando.</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">Usuários com perfil de auditoria (`ADMIN_SISTEMA` ou `ADMIN_FINANCEIRO`) consultam a trilha de auditoria filtrando eventos por período, operador, tipo de operação, módulo afetado e faixa de valor financeiro; cada evento exibe autor, ação, estado anterior e posterior serializados e carimbo temporal UTC (RN17, RN18).</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<a href="#rn17" class="req-tag req-tag-rn"># RN17 · Registro Atômico de Mutações em Trilha de Auditoria ↗</a> <a href="#rn18" class="req-tag req-tag-rn"># RN18 · Composição Mínima Obrigatória do Registro de Log de Auditoria ↗</a> <a href="#rn19" class="req-tag req-tag-rn"># RN19 · Política de Retenção Quinquenal de Logs ↗</a>) e perfil canônico de acesso <code>ADMIN_SISTEMA / ADMIN_FINANCEIRO</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf15" class="req-tag req-tag-rnf"># RNF15 · Garantir consistência transacional e atomicidade na gravação de logs de auditoria ↗</a> <a href="#rnf16" class="req-tag req-tag-rnf"># RNF16 · Reter registros de auditoria por no mínimo 5 anos contra expurgo físico indevido ↗</a> <a href="#rnf17" class="req-tag req-tag-rnf"># RNF17 · Realizar backup automático diário com restauração verificada ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe4-garantir-seguranca-e-governanca-de-dados" class="req-tag req-tag-oe"># OE4 · Segurança, Governança e Conformidade Legal ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-08" class="req-tag req-tag-car"># CAR-08 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># ADMIN_SISTEMA / ADMIN_FINANCEIRO</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><a href="#rn17" class="req-tag req-tag-rn"># RN17 · Registro Atômico de Mutações em Trilha de Auditoria ↗</a> <a href="#rn18" class="req-tag req-tag-rn"># RN18 · Composição Mínima Obrigatória do Registro de Log de Auditoria ↗</a> <a href="#rn19" class="req-tag req-tag-rn"># RN19 · Política de Retenção Quinquenal de Logs ↗</a></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf15" class="req-tag req-tag-rnf"># RNF15 · Garantir consistência transacional e atomicidade na gravação de logs de auditoria ↗</a> <a href="#rnf16" class="req-tag req-tag-rnf"># RNF16 · Reter registros de auditoria por no mínimo 5 anos contra expurgo físico indevido ↗</a> <a href="#rnf17" class="req-tag req-tag-rnf"># RNF17 · Realizar backup automático diário com restauração verificada ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q4">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q4">Q4 — Fora de Escopo</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">10h (3)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">3,00 (3)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">0,67</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>0,67</strong>). Destinação: <strong>Pós-MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q4">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe4" id="rf16" data-type="rf" data-rf="RF16" data-oe="oe4" data-car="car-08" data-mvp="pos-mvp" data-quad="q4" data-role="ADMIN_SISTEMA" data-text="rf16 exportar relatório de auditoria oe4 car-08 admin_sistema pós-mvp q4 ct-m4-04 us16 como **administrador do sistema**, quero exportar um dossiê em pdf/csv com o histórico imutável das operações auditadas, para que a duoc comprove conformidade legal e trabalhista (clt art. 11). rn18 rn19 rnf15 rnf16 rnf17" data-search-text="rf16 exportar relatório de auditoria oe4 car-08 admin_sistema pós-mvp q4 ct-m4-04 us16 como **administrador do sistema**, quero exportar um dossiê em pdf/csv com o histórico imutável das operações auditadas, para que a duoc comprove conformidade legal e trabalhista (clt art. 11). rn18 rn19 rnf15 rnf16 rnf17">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q4"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Fora do MVP</span></span>
      <span class="req-pill req-tag-mvp req-pill-posmvp">Backlog Evolutivo (Pós-MVP)</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF16 - Exportar relatório de auditoria</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-plan"><span class="req-status-dot"></span>Planejado (Release 2)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe4-garantir-seguranca-e-governanca-de-dados" class="req-lumio-tag req-tag-oe"># OE4 · Segurança, Governança e Conformidade Legal ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-08" class="req-lumio-tag req-tag-car"># CAR-08 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># ADMIN_SISTEMA</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">História de Usuário (US16)</span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>Administrador do Sistema</strong>, quero exportar um dossiê em PDF/CSV com o histórico imutável das operações auditadas, para que a DUOC comprove conformidade legal e trabalhista (CLT Art. 11).</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">O Administrador do Sistema (`ADMIN_SISTEMA`) exporta relatórios de auditoria em formatos estruturados (PDF/CSV) contendo o histórico integral e imutável de operações auditadas, para fins de governança corporativa e instrução probatória defensiva em conformidade com o prazo prescricional trabalhista (Artigo 11 da CLT).</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<a href="#rn18" class="req-tag req-tag-rn"># RN18 · Composição Mínima Obrigatória do Registro de Log de Auditoria ↗</a> <a href="#rn19" class="req-tag req-tag-rn"># RN19 · Política de Retenção Quinquenal de Logs ↗</a>) e perfil canônico de acesso <code>ADMIN_SISTEMA</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf15" class="req-tag req-tag-rnf"># RNF15 · Garantir consistência transacional e atomicidade na gravação de logs de auditoria ↗</a> <a href="#rnf16" class="req-tag req-tag-rnf"># RNF16 · Reter registros de auditoria por no mínimo 5 anos contra expurgo físico indevido ↗</a> <a href="#rnf17" class="req-tag req-tag-rnf"># RNF17 · Realizar backup automático diário com restauração verificada ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe4-garantir-seguranca-e-governanca-de-dados" class="req-tag req-tag-oe"># OE4 · Segurança, Governança e Conformidade Legal ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-08" class="req-tag req-tag-car"># CAR-08 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># ADMIN_SISTEMA</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><a href="#rn18" class="req-tag req-tag-rn"># RN18 · Composição Mínima Obrigatória do Registro de Log de Auditoria ↗</a> <a href="#rn19" class="req-tag req-tag-rn"># RN19 · Política de Retenção Quinquenal de Logs ↗</a></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf15" class="req-tag req-tag-rnf"># RNF15 · Garantir consistência transacional e atomicidade na gravação de logs de auditoria ↗</a> <a href="#rnf16" class="req-tag req-tag-rnf"># RNF16 · Reter registros de auditoria por no mínimo 5 anos contra expurgo físico indevido ↗</a> <a href="#rnf17" class="req-tag req-tag-rnf"># RNF17 · Realizar backup automático diário com restauração verificada ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q4">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q4">Q4 — Fora de Escopo</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">1 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">12h (3)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">3,00 (3)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">0,33</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>0,33</strong>). Destinação: <strong>Pós-MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q4">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe4" id="rf17" data-type="rf" data-rf="RF17" data-oe="oe4" data-car="car-07" data-mvp="mvp" data-quad="q1" data-role="TODOS OS USUÁRIOS" data-text="rf17 ativar acesso inicial e recuperar credenciais oe4 car-07 todos os usuários mvp q1 ct-m4-09 us17 como **colaborador que esqueceu a senha**, quero receber no e-mail corporativo um link de redefinição de uso único, para que eu recupere o acesso sem depender de *reset* manual pela gestão. rn15 rnf14" data-search-text="rf17 ativar acesso inicial e recuperar credenciais oe4 car-07 todos os usuários mvp q1 ct-m4-09 us17 como **colaborador que esqueceu a senha**, quero receber no e-mail corporativo um link de redefinição de uso único, para que eu recupere o acesso sem depender de *reset* manual pela gestão. rn15 rnf14">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q1"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Alta Prioridade</span></span>
      <span class="req-pill req-tag-mvp req-pill-mvp">Candidato ao MVP</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF17 - Ativar acesso inicial e recuperar credenciais</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-dev"><span class="req-status-dot"></span>Em Desenvolvimento (Sprint Backlog)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe4-garantir-seguranca-e-governanca-de-dados" class="req-lumio-tag req-tag-oe"># OE4 · Segurança, Governança e Conformidade Legal ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-07" class="req-lumio-tag req-tag-car"># CAR-07 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># TODOS OS USUÁRIOS</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">História de Usuário (US17)</span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>colaborador que esqueceu a senha</strong>, quero receber no e-mail corporativo um link de redefinição de uso único, para que eu recupere o acesso sem depender de *reset* manual pela gestão.</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">O colaborador autorizado a acessar o sistema recebe, após seu cadastro (RF01), um link seguro de primeiro acesso enviado ao e-mail corporativo cadastrado, permitindo a ativação da conta e a definição da senha inicial. Para recuperação de credenciais esquecidas, o colaborador informa seu e-mail corporativo e recebe um link de redefinição de senha de uso único, válido por 30 minutos (RN15). Ambos os fluxos devem utilizar links de uso único e prazo de validade de 30 minutos, sem revelar a existência de contas cadastradas nas respostas públicas do sistema. Após definir a senha, o colaborador poderá autenticar-se normalmente (RF13).</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<a href="#rn15" class="req-tag req-tag-rn"># RN15 · Autenticação por JWT com Sessão Temporal Limitada ↗</a>) e perfil canônico de acesso <code>TODOS OS USUÁRIOS</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf14" class="req-tag req-tag-rnf"># RNF14 · Validar perfil de autorização em 100% das rotas de API com dados protegidos ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe4-garantir-seguranca-e-governanca-de-dados" class="req-tag req-tag-oe"># OE4 · Segurança, Governança e Conformidade Legal ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-07" class="req-tag req-tag-car"># CAR-07 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># TODOS OS USUÁRIOS</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><a href="#rn15" class="req-tag req-tag-rn"># RN15 · Autenticação por JWT com Sessão Temporal Limitada ↗</a></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf14" class="req-tag req-tag-rnf"># RNF14 · Validar perfil de autorização em 100% das rotas de API com dados protegidos ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q1">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q1">Q1 — Candidatos ao MVP (Alta Prioridade)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">4h (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">1 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">1,67 (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">1,80</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>1,80</strong>). Destinação: <strong>MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q1">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe4" id="rf18" data-type="rf" data-rf="RF18" data-oe="oe4" data-car="car-07" data-mvp="mvp" data-quad="q1" data-role="TODOS OS USUÁRIOS" data-text="rf18 encerrar sessão manualmente oe4 car-07 todos os usuários mvp q1 ct-m4-10 us18 como **usuário autenticado**, quero encerrar minha sessão manualmente, para que ninguém utilize meu acesso em um dispositivo compartilhado. rn15 rnf13" data-search-text="rf18 encerrar sessão manualmente oe4 car-07 todos os usuários mvp q1 ct-m4-10 us18 como **usuário autenticado**, quero encerrar minha sessão manualmente, para que ninguém utilize meu acesso em um dispositivo compartilhado. rn15 rnf13">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q1"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Alta Prioridade</span></span>
      <span class="req-pill req-tag-mvp req-pill-mvp">Candidato ao MVP</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF18 - Encerrar sessão manualmente</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-dev"><span class="req-status-dot"></span>Em Desenvolvimento (Sprint Backlog)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe4-garantir-seguranca-e-governanca-de-dados" class="req-lumio-tag req-tag-oe"># OE4 · Segurança, Governança e Conformidade Legal ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-07" class="req-lumio-tag req-tag-car"># CAR-07 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># TODOS OS USUÁRIOS</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">História de Usuário (US18)</span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>usuário autenticado</strong>, quero encerrar minha sessão manualmente, para que ninguém utilize meu acesso em um dispositivo compartilhado.</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">Ao acionar o encerramento voluntário de sessão (*logout*), o token de autenticação ativo é compulsoriamente revogado e invalidado na hora no backend, redirecionando o usuário para a tela de login.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<a href="#rn15" class="req-tag req-tag-rn"># RN15 · Autenticação por JWT com Sessão Temporal Limitada ↗</a>) e perfil canônico de acesso <code>TODOS OS USUÁRIOS</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf13" class="req-tag req-tag-rnf"># RNF13 · Expirar token de acesso temporário em no máximo 8 horas ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe4-garantir-seguranca-e-governanca-de-dados" class="req-tag req-tag-oe"># OE4 · Segurança, Governança e Conformidade Legal ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-07" class="req-tag req-tag-car"># CAR-07 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># TODOS OS USUÁRIOS</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><a href="#rn15" class="req-tag req-tag-rn"># RN15 · Autenticação por JWT com Sessão Temporal Limitada ↗</a></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf13" class="req-tag req-tag-rnf"># RNF13 · Expirar token de acesso temporário em no máximo 8 horas ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q1">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q1">Q1 — Candidatos ao MVP (Alta Prioridade)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">1 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">1h (1)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">1 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">1,00 (1)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">3,00</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>3,00</strong>). Destinação: <strong>MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q1">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe1" id="rf19" data-type="rf" data-rf="RF19" data-oe="oe1" data-car="car-02" data-mvp="mvp" data-quad="q1" data-role="TECNICO_CAMPO" data-text="rf19 consultar apontamentos registrados oe1 car-02 tecnico_campo mvp q1 ct-m1-09 us19 como **técnico de campo**, quero consultar meus apontamentos e o status de cada um, para que eu acompanhe homologações e rejeições e identifique quais registros ainda posso retificar antes do fechamento. rn16 rn30 rnf04" data-search-text="rf19 consultar apontamentos registrados oe1 car-02 tecnico_campo mvp q1 ct-m1-09 us19 como **técnico de campo**, quero consultar meus apontamentos e o status de cada um, para que eu acompanhe homologações e rejeições e identifique quais registros ainda posso retificar antes do fechamento. rn16 rn30 rnf04">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q1"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Alta Prioridade</span></span>
      <span class="req-pill req-tag-mvp req-pill-mvp">Candidato ao MVP</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF19 - Consultar apontamentos registrados</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-dev"><span class="req-status-dot"></span>Em Desenvolvimento (Sprint Backlog)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe1-padronizar-e-unificar-os-dados" class="req-lumio-tag req-tag-oe"># OE1 · Padronizar e Unificar os Dados ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-02" class="req-lumio-tag req-tag-car"># CAR-02 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># TECNICO_CAMPO</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">História de Usuário (US19)</span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>Técnico de Campo</strong>, quero consultar meus apontamentos e o status de cada um, para que eu acompanhe homologações e rejeições e identifique quais registros ainda posso retificar antes do fechamento.</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">O Técnico de Campo (`TECNICO_CAMPO`) consulta na aplicação web exclusivamente os próprios apontamentos sob o princípio do menor privilégio (RN16), visualizando data, contrato e status ("Pendente de Homologação", "Homologado" ou "Rejeitado"), com acesso ao histórico completo de pareceres de deliberação.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<a href="#rn16" class="req-tag req-tag-rn"># RN16 · Princípio do Menor Privilégio e Segregação de Funções (SoD) ↗</a> <a href="#rn30" class="req-tag req-tag-rn"># RN30 · Justificativa Obrigatória e Bloqueio na Deliberação de Apontamentos ↗</a>) e perfil canônico de acesso <code>TECNICO_CAMPO</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf04" class="req-tag req-tag-rnf"># RNF04 · Garantir usabilidade e agilidade no preenchimento de apontamentos de campo ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe1-padronizar-e-unificar-os-dados" class="req-tag req-tag-oe"># OE1 · Padronizar e Unificar os Dados ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-02" class="req-tag req-tag-car"># CAR-02 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># TECNICO_CAMPO</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><a href="#rn16" class="req-tag req-tag-rn"># RN16 · Princípio do Menor Privilégio e Segregação de Funções (SoD) ↗</a> <a href="#rn30" class="req-tag req-tag-rn"># RN30 · Justificativa Obrigatória e Bloqueio na Deliberação de Apontamentos ↗</a></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf04" class="req-tag req-tag-rnf"># RNF04 · Garantir usabilidade e agilidade no preenchimento de apontamentos de campo ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q1">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q1">Q1 — Candidatos ao MVP (Alta Prioridade)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">4 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">4h (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">1 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">1,67 (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">2,40</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>2,40</strong>). Destinação: <strong>MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q1">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe1" id="rf20" data-type="rf" data-rf="RF20" data-oe="oe1" data-car="car-09" data-mvp="pos-mvp" data-quad="q4" data-role="ADMIN_FINANCEIRO" data-text="rf20 importar presenças homologadas oe1 car-09 admin_financeiro pós-mvp q4 ct-m1-10 us20 como **administrador financeiro**, quero importar as presenças homologadas do *flit* por competência e contrato, para que as horas registradas no ponto biométrico sejam aproveitadas sem redigitação. rn10 rnf02" data-search-text="rf20 importar presenças homologadas oe1 car-09 admin_financeiro pós-mvp q4 ct-m1-10 us20 como **administrador financeiro**, quero importar as presenças homologadas do *flit* por competência e contrato, para que as horas registradas no ponto biométrico sejam aproveitadas sem redigitação. rn10 rnf02">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q4"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Fora do MVP</span></span>
      <span class="req-pill req-tag-mvp req-pill-posmvp">Backlog Evolutivo (Pós-MVP)</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF20 - Importar presenças homologadas</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-plan"><span class="req-status-dot"></span>Planejado (Release 2)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe1-padronizar-e-unificar-os-dados" class="req-lumio-tag req-tag-oe"># OE1 · Padronizar e Unificar os Dados ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-09" class="req-lumio-tag req-tag-car"># CAR-09 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># ADMIN_FINANCEIRO</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">História de Usuário (US20)</span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>Administrador Financeiro</strong>, quero importar as presenças homologadas do *FLIT* por competência e contrato, para que as horas registradas no ponto biométrico sejam aproveitadas sem redigitação.</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">O Administrador Financeiro (`ADMIN_FINANCEIRO`) seleciona a competência mensal e os contratos de obras e importa as presenças homologadas disponibilizadas pelo painel (*dashboard*) do sistema externo *FLIT*. Os registros importados são vinculados a cada colaborador e contrato na competência selecionada, viabilizando a apuração financeira de horas sem modificar os dados de origem no *FLIT* (RN10).</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<a href="#rn10" class="req-tag req-tag-rn"># RN10 · Garantia de Consistência Transacional no Rateio de Custos ↗</a>) e perfil canônico de acesso <code>ADMIN_FINANCEIRO</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf02" class="req-tag req-tag-rnf"># RNF02 · Garantir tempo de resposta para consulta cadastral inferior a 2,0 segundos ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe1-padronizar-e-unificar-os-dados" class="req-tag req-tag-oe"># OE1 · Padronizar e Unificar os Dados ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-09" class="req-tag req-tag-car"># CAR-09 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># ADMIN_FINANCEIRO</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><a href="#rn10" class="req-tag req-tag-rn"># RN10 · Garantia de Consistência Transacional no Rateio de Custos ↗</a></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf02" class="req-tag req-tag-rnf"># RNF02 · Garantir tempo de resposta para consulta cadastral inferior a 2,0 segundos ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q4">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q4">Q4 — Fora de Escopo</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">12h (3)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">3,00 (3)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">0,67</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>0,67</strong>). Destinação: <strong>Pós-MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q4">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe2" id="rf21" data-type="rf" data-rf="RF21" data-oe="oe2" data-car="car-03" data-mvp="pos-mvp" data-quad="q4" data-role="ADMIN_FINANCEIRO" data-text="rf21 estornar fechamento financeiro oe2 car-03 admin_financeiro pós-mvp q4 ct-m2-09 us21 como **administrador financeiro**, quero estornar um fechamento já homologado mediante justificativa formal, para que inconsistências sejam corrigidas sem apagar o histórico do fechamento original. rn08 rn17 rnf08" data-search-text="rf21 estornar fechamento financeiro oe2 car-03 admin_financeiro pós-mvp q4 ct-m2-09 us21 como **administrador financeiro**, quero estornar um fechamento já homologado mediante justificativa formal, para que inconsistências sejam corrigidas sem apagar o histórico do fechamento original. rn08 rn17 rnf08">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q4"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Fora do MVP</span></span>
      <span class="req-pill req-tag-mvp req-pill-posmvp">Backlog Evolutivo (Pós-MVP)</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF21 - Estornar fechamento financeiro</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-plan"><span class="req-status-dot"></span>Planejado (Release 2)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe2-aumentar-a-eficiencia-administrativo-financeira" class="req-lumio-tag req-tag-oe"># OE2 · Acelerar Fechamento e Eficiência Administrativa ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-03" class="req-lumio-tag req-tag-car"># CAR-03 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># ADMIN_FINANCEIRO</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">História de Usuário (US21)</span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>Administrador Financeiro</strong>, quero estornar um fechamento já homologado mediante justificativa formal, para que inconsistências sejam corrigidas sem apagar o histórico do fechamento original.</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">Diante de divergência material em lote de competência já homologado, o Administrador Financeiro (`ADMIN_FINANCEIRO`) estorna o fechamento financeiro informando compulsoriamente justificativa formal com no mínimo 15 caracteres (RN08, RNF08). A competência é reaberta para retificação, o fechamento original permanece preservado no histórico imutável e o evento de estorno é gravado na trilha de auditoria com autor, justificativa e carimbo UTC (RN17). Após as correções, o Administrador Financeiro deve solicitar uma nova prévia de fechamento (RF05) e realizar uma nova homologação (RF06), sendo vedado considerar a competência novamente encerrada antes da conclusão desse processo.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<a href="#rn08" class="req-tag req-tag-rn"># RN08 · Comprovante Fiscal Obrigatório para Homologação de Reembolso ↗</a> <a href="#rn17" class="req-tag req-tag-rn"># RN17 · Registro Atômico de Mutações em Trilha de Auditoria ↗</a>) e perfil canônico de acesso <code>ADMIN_FINANCEIRO</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf08" class="req-tag req-tag-rnf"># RNF08 · Garantir rastreabilidade probatória e não-repúdio em operações de estorno ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe2-aumentar-a-eficiencia-administrativo-financeira" class="req-tag req-tag-oe"># OE2 · Acelerar Fechamento e Eficiência Administrativa ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-03" class="req-tag req-tag-car"># CAR-03 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># ADMIN_FINANCEIRO</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><a href="#rn08" class="req-tag req-tag-rn"># RN08 · Comprovante Fiscal Obrigatório para Homologação de Reembolso ↗</a> <a href="#rn17" class="req-tag req-tag-rn"># RN17 · Registro Atômico de Mutações em Trilha de Auditoria ↗</a></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf08" class="req-tag req-tag-rnf"># RNF08 · Garantir rastreabilidade probatória e não-repúdio em operações de estorno ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q4">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q4">Q4 — Fora de Escopo</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">10h (3)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">2,67 (3)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">0,75</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>0,75</strong>). Destinação: <strong>Pós-MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q4">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe1" id="rf22" data-type="rf" data-rf="RF22" data-oe="oe1" data-car="car-02" data-mvp="mvp" data-quad="q1" data-role="TECNICO_CAMPO" data-text="rf22 anexar evidências e geolocalização ao apontamento oe1 car-02 tecnico_campo mvp q1 ct-m1-11 us22 como **técnico de campo**, quero anexar fotos e comprovantes com geolocalização ao meu apontamento, para que a execução da atividade fique comprovada no rvt. rn24 rnf04 rnf07" data-search-text="rf22 anexar evidências e geolocalização ao apontamento oe1 car-02 tecnico_campo mvp q1 ct-m1-11 us22 como **técnico de campo**, quero anexar fotos e comprovantes com geolocalização ao meu apontamento, para que a execução da atividade fique comprovada no rvt. rn24 rnf04 rnf07">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q1"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Alta Prioridade</span></span>
      <span class="req-pill req-tag-mvp req-pill-mvp">Candidato ao MVP</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF22 - Anexar evidências e geolocalização ao apontamento</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-dev"><span class="req-status-dot"></span>Em Desenvolvimento (Sprint Backlog)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe1-padronizar-e-unificar-os-dados" class="req-lumio-tag req-tag-oe"># OE1 · Padronizar e Unificar os Dados ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-02" class="req-lumio-tag req-tag-car"># CAR-02 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># TECNICO_CAMPO</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">História de Usuário (US22)</span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>Técnico de Campo</strong>, quero anexar fotos e comprovantes com geolocalização ao meu apontamento, para que a execução da atividade fique comprovada no RVT.</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">Durante o preenchimento de um apontamento na aplicação web responsiva, o Técnico de Campo (`TECNICO_CAMPO`) anexa fotos ou comprovantes da atividade, e o sistema captura a geolocalização do dispositivo quando a permissão do navegador estiver concedida. Os arquivos e coordenadas são vinculados ao registro, a lista de anexos pode ser revisada e qualquer item pode ser removido antes da submissão; a ausência de sinal de GPS ou recusa de permissão não impede o envio das evidências (RN24).</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<a href="#rn24" class="req-tag req-tag-rn"># RN24 · Captura de Geolocalização Não Bloqueante ↗</a>) e perfil canônico de acesso <code>TECNICO_CAMPO</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf04" class="req-tag req-tag-rnf"># RNF04 · Garantir usabilidade e agilidade no preenchimento de apontamentos de campo ↗</a> <a href="#rnf07" class="req-tag req-tag-rnf"># RNF07 · Garantir robustez e segurança no processamento e armazenamento de comprovantes ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe1-padronizar-e-unificar-os-dados" class="req-tag req-tag-oe"># OE1 · Padronizar e Unificar os Dados ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-02" class="req-tag req-tag-car"># CAR-02 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># TECNICO_CAMPO</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><a href="#rn24" class="req-tag req-tag-rn"># RN24 · Captura de Geolocalização Não Bloqueante ↗</a></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf04" class="req-tag req-tag-rnf"># RNF04 · Garantir usabilidade e agilidade no preenchimento de apontamentos de campo ↗</a> <a href="#rnf07" class="req-tag req-tag-rnf"># RNF07 · Garantir robustez e segurança no processamento e armazenamento de comprovantes ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q1">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q1">Q1 — Candidatos ao MVP (Alta Prioridade)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">8h (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">2,33 (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">1,29</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>1,29</strong>). Destinação: <strong>MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q1">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe4" id="rf23" data-type="rf" data-rf="RF23" data-oe="oe4" data-car="car-07" data-mvp="mvp" data-quad="q1" data-role="ADMIN_SISTEMA" data-text="rf23 bloquear acesso após tentativas falhas consecutivas oe4 car-07 admin_sistema mvp q1 ct-m4-12 us23 como **administrador do sistema**, quero que a conta seja bloqueada temporariamente após tentativas de login inválidas consecutivas, para que contas com acesso a dados sensíveis fiquem protegidas contra ataques de força bruta. rn20 rnf14" data-search-text="rf23 bloquear acesso após tentativas falhas consecutivas oe4 car-07 admin_sistema mvp q1 ct-m4-12 us23 como **administrador do sistema**, quero que a conta seja bloqueada temporariamente após tentativas de login inválidas consecutivas, para que contas com acesso a dados sensíveis fiquem protegidas contra ataques de força bruta. rn20 rnf14">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q1"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Alta Prioridade</span></span>
      <span class="req-pill req-tag-mvp req-pill-mvp">Candidato ao MVP</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF23 - Bloquear acesso após tentativas falhas consecutivas</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-dev"><span class="req-status-dot"></span>Em Desenvolvimento (Sprint Backlog)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe4-garantir-seguranca-e-governanca-de-dados" class="req-lumio-tag req-tag-oe"># OE4 · Segurança, Governança e Conformidade Legal ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-07" class="req-lumio-tag req-tag-car"># CAR-07 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># ADMIN_SISTEMA</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">História de Usuário (US23)</span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>Administrador do Sistema</strong>, quero que a conta seja bloqueada temporariamente após tentativas de login inválidas consecutivas, para que contas com acesso a dados sensíveis fiquem protegidas contra ataques de força bruta.</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">Após 5 tentativas de login com credenciais inválidas em até 15 minutos, a conta fica bloqueada preventivamente por 30 minutos, com mensagem informativa padronizada que não revela se a divergência decorreu do e-mail ou da senha (RN20).</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<a href="#rn20" class="req-tag req-tag-rn"># RN20 · Limite de Tentativas de Autenticação ↗</a>) e perfil canônico de acesso <code>ADMIN_SISTEMA</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf14" class="req-tag req-tag-rnf"># RNF14 · Validar perfil de autorização em 100% das rotas de API com dados protegidos ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe4-garantir-seguranca-e-governanca-de-dados" class="req-tag req-tag-oe"># OE4 · Segurança, Governança e Conformidade Legal ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-07" class="req-tag req-tag-car"># CAR-07 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># ADMIN_SISTEMA</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><a href="#rn20" class="req-tag req-tag-rn"># RN20 · Limite de Tentativas de Autenticação ↗</a></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf14" class="req-tag req-tag-rnf"># RNF14 · Validar perfil de autorização em 100% das rotas de API com dados protegidos ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q1">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q1">Q1 — Candidatos ao MVP (Alta Prioridade)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">6h (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">1 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">1,67 (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">1,80</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>1,80</strong>). Destinação: <strong>MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q1">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe4" id="rf24" data-type="rf" data-rf="RF24" data-oe="oe4" data-car="car-07" data-mvp="pos-mvp" data-quad="q3" data-role="ADMIN_SISTEMA" data-text="rf24 impor renovação periódica de senhas oe4 car-07 admin_sistema pós-mvp q3 ct-m4-13 us24 como **administrador do sistema**, quero impor a renovação periódica de senhas e impedir a reutilização das últimas credenciais, para que senhas antigas ou vazadas deixem de dar acesso ao sistema. rn21 rnf14" data-search-text="rf24 impor renovação periódica de senhas oe4 car-07 admin_sistema pós-mvp q3 ct-m4-13 us24 como **administrador do sistema**, quero impor a renovação periódica de senhas e impedir a reutilização das últimas credenciais, para que senhas antigas ou vazadas deixem de dar acesso ao sistema. rn21 rnf14">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q3"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Evolutivo</span></span>
      <span class="req-pill req-tag-mvp req-pill-posmvp">Backlog Evolutivo (Pós-MVP)</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF24 - Impor renovação periódica de senhas</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-plan"><span class="req-status-dot"></span>Planejado (Release 2)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe4-garantir-seguranca-e-governanca-de-dados" class="req-lumio-tag req-tag-oe"># OE4 · Segurança, Governança e Conformidade Legal ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-07" class="req-lumio-tag req-tag-car"># CAR-07 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># ADMIN_SISTEMA</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">História de Usuário (US24)</span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>Administrador do Sistema</strong>, quero impor a renovação periódica de senhas e impedir a reutilização das últimas credenciais, para que senhas antigas ou vazadas deixem de dar acesso ao sistema.</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">Quando a senha atinge 90 dias de vigência desde a última alteração, o acesso só é liberado mediante definição de nova credencial, sendo vedada a repetição de qualquer uma das últimas 5 senhas cadastradas (RN21).</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<a href="#rn21" class="req-tag req-tag-rn"># RN21 · Política de Expiração e Histórico de Senhas ↗</a>) e perfil canônico de acesso <code>ADMIN_SISTEMA</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf14" class="req-tag req-tag-rnf"># RNF14 · Validar perfil de autorização em 100% das rotas de API com dados protegidos ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe4-garantir-seguranca-e-governanca-de-dados" class="req-tag req-tag-oe"># OE4 · Segurança, Governança e Conformidade Legal ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-07" class="req-tag req-tag-car"># CAR-07 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># ADMIN_SISTEMA</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><a href="#rn21" class="req-tag req-tag-rn"># RN21 · Política de Expiração e Histórico de Senhas ↗</a></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf14" class="req-tag req-tag-rnf"># RNF14 · Validar perfil de autorização em 100% das rotas de API com dados protegidos ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q3">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q3">Q3 — Baixa Prioridade / Evolutivo</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">6h (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">2,00 (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">1,00</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>1,00</strong>). Destinação: <strong>Pós-MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q3">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe1" id="rf25" data-type="rf" data-rf="RF25" data-oe="oe1" data-car="car-01" data-mvp="mvp" data-quad="q1" data-role="ADMIN_FINANCEIRO" data-text="rf25 cadastrar tipo de contratação do colaborador oe1 car-01 admin_financeiro mvp q1 ct-m1-12 us25 como **administrador financeiro**, quero classificar o colaborador como diarista, clt ou prestador de serviço, para que o sistema aplique as regras administrativas e financeiras do vínculo correto. rn22 rnf02" data-search-text="rf25 cadastrar tipo de contratação do colaborador oe1 car-01 admin_financeiro mvp q1 ct-m1-12 us25 como **administrador financeiro**, quero classificar o colaborador como diarista, clt ou prestador de serviço, para que o sistema aplique as regras administrativas e financeiras do vínculo correto. rn22 rnf02">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q1"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Alta Prioridade</span></span>
      <span class="req-pill req-tag-mvp req-pill-mvp">Candidato ao MVP</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF25 - Cadastrar tipo de contratação do colaborador</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-dev"><span class="req-status-dot"></span>Em Desenvolvimento (Sprint Backlog)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe1-padronizar-e-unificar-os-dados" class="req-lumio-tag req-tag-oe"># OE1 · Padronizar e Unificar os Dados ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-01" class="req-lumio-tag req-tag-car"># CAR-01 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># ADMIN_FINANCEIRO</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">História de Usuário (US25)</span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>Administrador Financeiro</strong>, quero classificar o colaborador como Diarista, CLT ou Prestador de Serviço, para que o sistema aplique as regras administrativas e financeiras do vínculo correto.</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">No cadastro ou atualização de colaborador, o Administrador Financeiro (`ADMIN_FINANCEIRO`) seleciona o enquadramento de contratação entre Diarista, CLT ou Prestador de Serviço, determinando as regras de apuração de diárias e custos aplicáveis (RN22).</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<a href="#rn22" class="req-tag req-tag-rn"># RN22 · Tipos de Contratação Válidos ↗</a>) e perfil canônico de acesso <code>ADMIN_FINANCEIRO</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf02" class="req-tag req-tag-rnf"># RNF02 · Garantir tempo de resposta para consulta cadastral inferior a 2,0 segundos ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe1-padronizar-e-unificar-os-dados" class="req-tag req-tag-oe"># OE1 · Padronizar e Unificar os Dados ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-01" class="req-tag req-tag-car"># CAR-01 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># ADMIN_FINANCEIRO</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><a href="#rn22" class="req-tag req-tag-rn"># RN22 · Tipos de Contratação Válidos ↗</a></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf02" class="req-tag req-tag-rnf"># RNF02 · Garantir tempo de resposta para consulta cadastral inferior a 2,0 segundos ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q1">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q1">Q1 — Candidatos ao MVP (Alta Prioridade)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">4h (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">1 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">1,67 (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">1,80</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>1,80</strong>). Destinação: <strong>MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q1">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe1" id="rf26" data-type="rf" data-rf="RF26" data-oe="oe1" data-car="car-01" data-mvp="mvp" data-quad="q1" data-role="ADMIN_FINANCEIRO" data-text="rf26 consultar histórico de alterações cadastrais e bancárias oe1 car-01 admin_financeiro mvp q1 ct-m1-13 us26 como **administrador financeiro**, quero consultar o histórico de alterações cadastrais e bancárias de um colaborador, com autor e data de cada mudança, para que divergências administrativas possam ser rastreadas e esclarecidas. rn23 rnf02" data-search-text="rf26 consultar histórico de alterações cadastrais e bancárias oe1 car-01 admin_financeiro mvp q1 ct-m1-13 us26 como **administrador financeiro**, quero consultar o histórico de alterações cadastrais e bancárias de um colaborador, com autor e data de cada mudança, para que divergências administrativas possam ser rastreadas e esclarecidas. rn23 rnf02">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q1"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Alta Prioridade</span></span>
      <span class="req-pill req-tag-mvp req-pill-mvp">Candidato ao MVP</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF26 - Consultar histórico de alterações cadastrais e bancárias</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-dev"><span class="req-status-dot"></span>Em Desenvolvimento (Sprint Backlog)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe1-padronizar-e-unificar-os-dados" class="req-lumio-tag req-tag-oe"># OE1 · Padronizar e Unificar os Dados ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-01" class="req-lumio-tag req-tag-car"># CAR-01 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># ADMIN_FINANCEIRO</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">História de Usuário (US26)</span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>Administrador Financeiro</strong>, quero consultar o histórico de alterações cadastrais e bancárias de um colaborador, com autor e data de cada mudança, para que divergências administrativas possam ser rastreadas e esclarecidas.</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">O Administrador Financeiro (`ADMIN_FINANCEIRO`) e o próprio colaborador consultam o histórico da ficha cadastral, visualizando cada versão anterior dos dados pessoais e bancários com indicação do campo modificado, autor da alteração e carimbo temporal UTC (RN23).</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<a href="#rn23" class="req-tag req-tag-rn"># RN23 · Versionamento Obrigatório de Dados Cadastrais e Bancários ↗</a>) e perfil canônico de acesso <code>ADMIN_FINANCEIRO</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf02" class="req-tag req-tag-rnf"># RNF02 · Garantir tempo de resposta para consulta cadastral inferior a 2,0 segundos ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe1-padronizar-e-unificar-os-dados" class="req-tag req-tag-oe"># OE1 · Padronizar e Unificar os Dados ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-01" class="req-tag req-tag-car"># CAR-01 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># ADMIN_FINANCEIRO</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><a href="#rn23" class="req-tag req-tag-rn"># RN23 · Versionamento Obrigatório de Dados Cadastrais e Bancários ↗</a></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf02" class="req-tag req-tag-rnf"># RNF02 · Garantir tempo de resposta para consulta cadastral inferior a 2,0 segundos ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q1">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q1">Q1 — Candidatos ao MVP (Alta Prioridade)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">8h (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">2,33 (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">1,29</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>1,29</strong>). Destinação: <strong>MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q1">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe2" id="rf27" data-type="rf" data-rf="RF27" data-oe="oe2" data-car="car-03" data-mvp="mvp" data-quad="q1" data-role="ADMIN_FINANCEIRO" data-text="rf27 configurar tabela de valores de diárias técnicas oe2 car-03 admin_financeiro mvp q1 ct-m2-10 us27 como **administrador financeiro**, quero cadastrar as categorias de diária técnica com valor e período de vigência, para que prévias e fechamentos usem sempre o valor vigente da competência. rn25 rn31 rnf06" data-search-text="rf27 configurar tabela de valores de diárias técnicas oe2 car-03 admin_financeiro mvp q1 ct-m2-10 us27 como **administrador financeiro**, quero cadastrar as categorias de diária técnica com valor e período de vigência, para que prévias e fechamentos usem sempre o valor vigente da competência. rn25 rn31 rnf06">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q1"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Alta Prioridade</span></span>
      <span class="req-pill req-tag-mvp req-pill-mvp">Candidato ao MVP</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF27 - Configurar tabela de valores de diárias técnicas</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-dev"><span class="req-status-dot"></span>Em Desenvolvimento (Sprint Backlog)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe2-aumentar-a-eficiencia-administrativo-financeira" class="req-lumio-tag req-tag-oe"># OE2 · Acelerar Fechamento e Eficiência Administrativa ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-03" class="req-lumio-tag req-tag-car"># CAR-03 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># ADMIN_FINANCEIRO</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">História de Usuário (US27)</span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>Administrador Financeiro</strong>, quero cadastrar as categorias de diária técnica com valor e período de vigência, para que prévias e fechamentos usem sempre o valor vigente da competência.</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">O Administrador Financeiro (`ADMIN_FINANCEIRO`) cadastra e atualiza as categorias de diária técnica com valor nominal e período de vigência, passando as rotinas financeiras de fechamento a adotar automaticamente o valor vigente na competência apurada (RN25, RN31).</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<a href="#rn25" class="req-tag req-tag-rn"># RN25 · Vigência dos Valores de Diárias Técnicas ↗</a> <a href="#rn31" class="req-tag req-tag-rn"># RN31 · Parametrização e Fórmulas de Diárias e Comissões Técnicas de Campo ↗</a>) e perfil canônico de acesso <code>ADMIN_FINANCEIRO</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf06" class="req-tag req-tag-rnf"># RNF06 · Garantir exatidão aritmética centesimal em cálculos monetários ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe2-aumentar-a-eficiencia-administrativo-financeira" class="req-tag req-tag-oe"># OE2 · Acelerar Fechamento e Eficiência Administrativa ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-03" class="req-tag req-tag-car"># CAR-03 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># ADMIN_FINANCEIRO</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><a href="#rn25" class="req-tag req-tag-rn"># RN25 · Vigência dos Valores de Diárias Técnicas ↗</a> <a href="#rn31" class="req-tag req-tag-rn"># RN31 · Parametrização e Fórmulas de Diárias e Comissões Técnicas de Campo ↗</a></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf06" class="req-tag req-tag-rnf"># RNF06 · Garantir exatidão aritmética centesimal em cálculos monetários ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q1">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q1">Q1 — Candidatos ao MVP (Alta Prioridade)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">4 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">6h (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">1 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">1,67 (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">2,40</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>2,40</strong>). Destinação: <strong>MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q1">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe2" id="rf28" data-type="rf" data-rf="RF28" data-oe="oe2" data-car="car-04" data-mvp="mvp" data-quad="q1" data-role="TECNICO_CAMPO" data-text="rf28 submeter solicitação de adiantamento operacional oe2 car-04 tecnico_campo mvp q1 ct-m2-11 us28 como **técnico de campo**, quero solicitar um adiantamento para uma despesa operacional de um contrato ativo, para que eu disponha dos recursos antes de executar a atividade. rn26 rnf07" data-search-text="rf28 submeter solicitação de adiantamento operacional oe2 car-04 tecnico_campo mvp q1 ct-m2-11 us28 como **técnico de campo**, quero solicitar um adiantamento para uma despesa operacional de um contrato ativo, para que eu disponha dos recursos antes de executar a atividade. rn26 rnf07">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q1"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Alta Prioridade</span></span>
      <span class="req-pill req-tag-mvp req-pill-mvp">Candidato ao MVP</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF28 - Submeter solicitação de adiantamento operacional</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-dev"><span class="req-status-dot"></span>Em Desenvolvimento (Sprint Backlog)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe2-aumentar-a-eficiencia-administrativo-financeira" class="req-lumio-tag req-tag-oe"># OE2 · Acelerar Fechamento e Eficiência Administrativa ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-04" class="req-lumio-tag req-tag-car"># CAR-04 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># TECNICO_CAMPO</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">História de Usuário (US28)</span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>Técnico de Campo</strong>, quero solicitar um adiantamento para uma despesa operacional de um contrato ativo, para que eu disponha dos recursos antes de executar a atividade.</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">O Técnico de Campo (`TECNICO_CAMPO`) solicita adiantamento de recursos para despesa operacional autorizada de um contrato ativo informando valor, categoria, contrato e justificativa formal de aplicação. O adiantamento é registrado com status "Pendente de Análise" e fica disponível para análise financeira (RN03, RN09, RN26).</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<a href="#rn26" class="req-tag req-tag-rn"># RN26 · Elegibilidade do Adiantamento Operacional ↗</a>) e perfil canônico de acesso <code>TECNICO_CAMPO</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf07" class="req-tag req-tag-rnf"># RNF07 · Garantir robustez e segurança no processamento e armazenamento de comprovantes ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe2-aumentar-a-eficiencia-administrativo-financeira" class="req-tag req-tag-oe"># OE2 · Acelerar Fechamento e Eficiência Administrativa ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-04" class="req-tag req-tag-car"># CAR-04 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># TECNICO_CAMPO</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><a href="#rn26" class="req-tag req-tag-rn"># RN26 · Elegibilidade do Adiantamento Operacional ↗</a></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf07" class="req-tag req-tag-rnf"># RNF07 · Garantir robustez e segurança no processamento e armazenamento de comprovantes ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q1">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q1">Q1 — Candidatos ao MVP (Alta Prioridade)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">6h (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">2,00 (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">1,50</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>1,50</strong>). Destinação: <strong>MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q1">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe2" id="rf29" data-type="rf" data-rf="RF29" data-oe="oe2" data-car="car-04" data-mvp="mvp" data-quad="q1" data-role="ADMIN_FINANCEIRO" data-text="rf29 deliberar solicitação de adiantamento operacional oe2 car-04 admin_financeiro mvp q1 ct-m2-12 us29 como **administrador financeiro**, quero aprovar ou reprovar os adiantamentos pendentes de análise, para que a liberação de recursos seja formal, rastreável e comunicada ao solicitante. rn27 rnf06" data-search-text="rf29 deliberar solicitação de adiantamento operacional oe2 car-04 admin_financeiro mvp q1 ct-m2-12 us29 como **administrador financeiro**, quero aprovar ou reprovar os adiantamentos pendentes de análise, para que a liberação de recursos seja formal, rastreável e comunicada ao solicitante. rn27 rnf06">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q1"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Alta Prioridade</span></span>
      <span class="req-pill req-tag-mvp req-pill-mvp">Candidato ao MVP</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF29 - Deliberar solicitação de adiantamento operacional</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-dev"><span class="req-status-dot"></span>Em Desenvolvimento (Sprint Backlog)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe2-aumentar-a-eficiencia-administrativo-financeira" class="req-lumio-tag req-tag-oe"># OE2 · Acelerar Fechamento e Eficiência Administrativa ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-04" class="req-lumio-tag req-tag-car"># CAR-04 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># ADMIN_FINANCEIRO</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">História de Usuário (US29)</span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>Administrador Financeiro</strong>, quero aprovar ou reprovar os adiantamentos pendentes de análise, para que a liberação de recursos seja formal, rastreável e comunicada ao solicitante.</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">O Administrador Financeiro (`ADMIN_FINANCEIRO`) analisa os adiantamentos pendentes vinculados a contratos ativos e aprova ou reprova cada solicitação, com justificativa obrigatória na reprovação. O status da solicitação é atualizado, a deliberação é registrada e o solicitante é notificado via sistema (RN27).</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<a href="#rn27" class="req-tag req-tag-rn"># RN27 · Notificação de Pendências Financeiras ↗</a>) e perfil canônico de acesso <code>ADMIN_FINANCEIRO</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf06" class="req-tag req-tag-rnf"># RNF06 · Garantir exatidão aritmética centesimal em cálculos monetários ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe2-aumentar-a-eficiencia-administrativo-financeira" class="req-tag req-tag-oe"># OE2 · Acelerar Fechamento e Eficiência Administrativa ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-04" class="req-tag req-tag-car"># CAR-04 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># ADMIN_FINANCEIRO</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><a href="#rn27" class="req-tag req-tag-rn"># RN27 · Notificação de Pendências Financeiras ↗</a></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf06" class="req-tag req-tag-rnf"># RNF06 · Garantir exatidão aritmética centesimal em cálculos monetários ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q1">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q1">Q1 — Candidatos ao MVP (Alta Prioridade)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">8h (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">2,00 (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">1,50</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>1,50</strong>). Destinação: <strong>MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q1">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe3" id="rf30" data-type="rf" data-rf="RF30" data-oe="oe3" data-car="car-05" data-mvp="pos-mvp" data-quad="q4" data-role="GESTOR_OBRAS / ADMIN_FINANCEIRO" data-text="rf30 consultar comparativo histórico de custos entre contratos oe3 car-05 gestor_obras / admin_financeiro pós-mvp q4 ct-m3-09 us30 como **gestor operacional de obras ou administrador financeiro**, quero comparar os custos apropriados de dois ou mais contratos em um período, para que eu utilize o histórico de obras anteriores em orçamentos e decisões futuras. rn28 rnf09 rnf10 rnf12" data-search-text="rf30 consultar comparativo histórico de custos entre contratos oe3 car-05 gestor_obras / admin_financeiro pós-mvp q4 ct-m3-09 us30 como **gestor operacional de obras ou administrador financeiro**, quero comparar os custos apropriados de dois ou mais contratos em um período, para que eu utilize o histórico de obras anteriores em orçamentos e decisões futuras. rn28 rnf09 rnf10 rnf12">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q4"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Fora do MVP</span></span>
      <span class="req-pill req-tag-mvp req-pill-posmvp">Backlog Evolutivo (Pós-MVP)</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF30 - Consultar comparativo histórico de custos entre contratos</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-plan"><span class="req-status-dot"></span>Planejado (Release 2)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato" class="req-lumio-tag req-tag-oe"># OE3 · Transparência de Custos por Contrato de Obra ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-05" class="req-lumio-tag req-tag-car"># CAR-05 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># GESTOR_OBRAS / ADMIN_FINANCEIRO</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">História de Usuário (US30)</span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>Gestor Operacional de Obras ou Administrador Financeiro</strong>, quero comparar os custos apropriados de dois ou mais contratos em um período, para que eu utilize o histórico de obras anteriores em orçamentos e decisões futuras.</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">O Gestor Operacional de Obras (`GESTOR_OBRAS`) ou o Administrador Financeiro (`ADMIN_FINANCEIRO`) selecionam dois ou mais contratos (ativos ou encerrados) e um período de comparação, e o sistema renderiza os custos apropriados de cada obra com as variações absolutas (em R$) e percentuais consolidadas no período (RN28).</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<a href="#rn28" class="req-tag req-tag-rn"># RN28 · Comparativo Histórico de Custos ↗</a>) e perfil canônico de acesso <code>GESTOR_OBRAS / ADMIN_FINANCEIRO</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf09" class="req-tag req-tag-rnf"># RNF09 · Garantir tempo de resposta para filtros e consultas do painel de custos inferior a 3,0 segundos ↗</a> <a href="#rnf10" class="req-tag req-tag-rnf"># RNF10 · Garantir sigilo e não-exposição de remunerações individuais em relatórios operacionais ↗</a> <a href="#rnf12" class="req-tag req-tag-rnf"># RNF12 · Assegurar responsividade do painel em resoluções de desktop e tablet ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato" class="req-tag req-tag-oe"># OE3 · Transparência de Custos por Contrato de Obra ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-05" class="req-tag req-tag-car"># CAR-05 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># GESTOR_OBRAS / ADMIN_FINANCEIRO</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><a href="#rn28" class="req-tag req-tag-rn"># RN28 · Comparativo Histórico de Custos ↗</a></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf09" class="req-tag req-tag-rnf"># RNF09 · Garantir tempo de resposta para filtros e consultas do painel de custos inferior a 3,0 segundos ↗</a> <a href="#rnf10" class="req-tag req-tag-rnf"># RNF10 · Garantir sigilo e não-exposição de remunerações individuais em relatórios operacionais ↗</a> <a href="#rnf12" class="req-tag req-tag-rnf"># RNF12 · Assegurar responsividade do painel em resoluções de desktop e tablet ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q4">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q4">Q4 — Fora de Escopo</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">10h (3)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">2,67 (3)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">0,75</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>0,75</strong>). Destinação: <strong>Pós-MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q4">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe3" id="rf31" data-type="rf" data-rf="RF31" data-oe="oe3" data-car="car-06" data-mvp="pos-mvp" data-quad="q4" data-role="GESTOR_OBRAS" data-text="rf31 configurar alertas de execução orçamentária oe3 car-06 gestor_obras pós-mvp q4 ct-m3-10 us31 como **gestor operacional de obras**, quero configurar o percentual de execução orçamentária que dispara alertas no painel e por e-mail, para que eu seja avisado antes que o orçamento seja ultrapassado. rn29 rnf09 rnf10 rnf12" data-search-text="rf31 configurar alertas de execução orçamentária oe3 car-06 gestor_obras pós-mvp q4 ct-m3-10 us31 como **gestor operacional de obras**, quero configurar o percentual de execução orçamentária que dispara alertas no painel e por e-mail, para que eu seja avisado antes que o orçamento seja ultrapassado. rn29 rnf09 rnf10 rnf12">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q4"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Fora do MVP</span></span>
      <span class="req-pill req-tag-mvp req-pill-posmvp">Backlog Evolutivo (Pós-MVP)</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF31 - Configurar alertas de execução orçamentária</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-plan"><span class="req-status-dot"></span>Planejado (Release 2)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato" class="req-lumio-tag req-tag-oe"># OE3 · Transparência de Custos por Contrato de Obra ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-06" class="req-lumio-tag req-tag-car"># CAR-06 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># GESTOR_OBRAS</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">História de Usuário (US31)</span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>Gestor Operacional de Obras</strong>, quero configurar o percentual de execução orçamentária que dispara alertas no painel e por e-mail, para que eu seja avisado antes que o orçamento seja ultrapassado.</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">Para contratos de obras com teto orçamentário configurado (RF40), o Gestor Operacional de Obras (`GESTOR_OBRAS`) parametriza os limiares percentuais de execução que disparam alertas preventivos (ex.: 80%, 90% ou 100% do orçamento); ao atingir ou superar o limiar definido, o sistema gera notificação em destaque no painel e despacha alerta por e-mail aos responsáveis (RN29).</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<a href="#rn29" class="req-tag req-tag-rn"># RN29 · Disparo de Alertas Preventivos de Extrapolação Orçamentária ↗</a>) e perfil canônico de acesso <code>GESTOR_OBRAS</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf09" class="req-tag req-tag-rnf"># RNF09 · Garantir tempo de resposta para filtros e consultas do painel de custos inferior a 3,0 segundos ↗</a> <a href="#rnf10" class="req-tag req-tag-rnf"># RNF10 · Garantir sigilo e não-exposição de remunerações individuais em relatórios operacionais ↗</a> <a href="#rnf12" class="req-tag req-tag-rnf"># RNF12 · Assegurar responsividade do painel em resoluções de desktop e tablet ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato" class="req-tag req-tag-oe"># OE3 · Transparência de Custos por Contrato de Obra ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-06" class="req-tag req-tag-car"># CAR-06 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># GESTOR_OBRAS</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><a href="#rn29" class="req-tag req-tag-rn"># RN29 · Disparo de Alertas Preventivos de Extrapolação Orçamentária ↗</a></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf09" class="req-tag req-tag-rnf"># RNF09 · Garantir tempo de resposta para filtros e consultas do painel de custos inferior a 3,0 segundos ↗</a> <a href="#rnf10" class="req-tag req-tag-rnf"># RNF10 · Garantir sigilo e não-exposição de remunerações individuais em relatórios operacionais ↗</a> <a href="#rnf12" class="req-tag req-tag-rnf"># RNF12 · Assegurar responsividade do painel em resoluções de desktop e tablet ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q4">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q4">Q4 — Fora de Escopo</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">10h (3)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">2,67 (3)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">0,75</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>0,75</strong>). Destinação: <strong>Pós-MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q4">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe1" id="rf32" data-type="rf" data-rf="RF32" data-oe="oe1" data-car="car-02" data-mvp="mvp" data-quad="q1" data-role="GESTOR_OBRAS" data-text="rf32 deliberar apontamento de campo oe1 car-02 gestor_obras mvp q1 ct-m1-15 us32 como **gestor operacional de obras**, quero homologar ou rejeitar os apontamentos de campo pendentes dos contratos sob minha responsabilidade, com parecer obrigatório na rejeição, para que apenas horas validadas sigam para o fechamento financeiro e o autor seja informado da decisão. rn02 rn05 rn10 rn30 rnf04" data-search-text="rf32 deliberar apontamento de campo oe1 car-02 gestor_obras mvp q1 ct-m1-15 us32 como **gestor operacional de obras**, quero homologar ou rejeitar os apontamentos de campo pendentes dos contratos sob minha responsabilidade, com parecer obrigatório na rejeição, para que apenas horas validadas sigam para o fechamento financeiro e o autor seja informado da decisão. rn02 rn05 rn10 rn30 rnf04">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q1"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Alta Prioridade</span></span>
      <span class="req-pill req-tag-mvp req-pill-mvp">Candidato ao MVP</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF32 - Deliberar apontamento de campo</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-dev"><span class="req-status-dot"></span>Em Desenvolvimento (Sprint Backlog)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe1-padronizar-e-unificar-os-dados" class="req-lumio-tag req-tag-oe"># OE1 · Padronizar e Unificar os Dados ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-02" class="req-lumio-tag req-tag-car"># CAR-02 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># GESTOR_OBRAS</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">História de Usuário (US32)</span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>Gestor Operacional de Obras</strong>, quero homologar ou rejeitar os apontamentos de campo pendentes dos contratos sob minha responsabilidade, com parecer obrigatório na rejeição, para que apenas horas validadas sigam para o fechamento financeiro e o autor seja informado da decisão.</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">O Gestor Operacional de Obras (`GESTOR_OBRAS`) analisa os apontamentos com status "Pendente de Homologação" vinculados aos contratos sob sua responsabilidade técnica e delibera aprovando ou rejeitando cada registro. A aprovação transiciona o status para "Homologado", bloqueia edições pelo autor (RN02) e disponibiliza as horas/diárias para apuração financeira (RN05, RN10). A rejeição exige compulsoriamente parecer formal justificado com no mínimo 15 caracteres (RN30), transiciona o status para "Rejeitado" e notifica o colaborador para ciência e retificação (RF35). Após a correção e o reenvio pelo colaborador, o apontamento retorna ao status "Pendente de Homologação" para nova análise, preservando o histórico de rejeições, justificativas e alterações.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<a href="#rn02" class="req-tag req-tag-rn"># RN02 · Janela Temporal para Submissão e Edição de Apontamento ↗</a> <a href="#rn05" class="req-tag req-tag-rn"># RN05 · Pré-requisito de Homologação de Apontamentos para Fechamento ↗</a> <a href="#rn10" class="req-tag req-tag-rn"># RN10 · Garantia de Consistência Transacional no Rateio de Custos ↗</a> <a href="#rn30" class="req-tag req-tag-rn"># RN30 · Justificativa Obrigatória e Bloqueio na Deliberação de Apontamentos ↗</a>) e perfil canônico de acesso <code>GESTOR_OBRAS</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf04" class="req-tag req-tag-rnf"># RNF04 · Garantir usabilidade e agilidade no preenchimento de apontamentos de campo ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe1-padronizar-e-unificar-os-dados" class="req-tag req-tag-oe"># OE1 · Padronizar e Unificar os Dados ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-02" class="req-tag req-tag-car"># CAR-02 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># GESTOR_OBRAS</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><a href="#rn02" class="req-tag req-tag-rn"># RN02 · Janela Temporal para Submissão e Edição de Apontamento ↗</a> <a href="#rn05" class="req-tag req-tag-rn"># RN05 · Pré-requisito de Homologação de Apontamentos para Fechamento ↗</a> <a href="#rn10" class="req-tag req-tag-rn"># RN10 · Garantia de Consistência Transacional no Rateio de Custos ↗</a> <a href="#rn30" class="req-tag req-tag-rn"># RN30 · Justificativa Obrigatória e Bloqueio na Deliberação de Apontamentos ↗</a></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf04" class="req-tag req-tag-rnf"># RNF04 · Garantir usabilidade e agilidade no preenchimento de apontamentos de campo ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q1">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q1">Q1 — Candidatos ao MVP (Alta Prioridade)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">4 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">6h (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">1 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">1,67 (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">2,40</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>2,40</strong>). Destinação: <strong>MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q1">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe3" id="rf33" data-type="rf" data-rf="RF33" data-oe="oe3" data-car="car-05" data-mvp="mvp" data-quad="q1" data-role="GESTOR_OBRAS / ADMIN_FINANCEIRO" data-text="rf33 cadastrar contrato de obra oe3 car-05 gestor_obras / admin_financeiro mvp q1 ct-m3-11 us33 como **administrador financeiro ou gestor operacional de obras**, quero cadastrar, editar e consultar contratos de obras com vigência, valor global e retenções, para que despesas, reembolsos e apropriações de custo sejam sempre vinculados a um contrato válido. rn09 rn11 rnf10 rnf11" data-search-text="rf33 cadastrar contrato de obra oe3 car-05 gestor_obras / admin_financeiro mvp q1 ct-m3-11 us33 como **administrador financeiro ou gestor operacional de obras**, quero cadastrar, editar e consultar contratos de obras com vigência, valor global e retenções, para que despesas, reembolsos e apropriações de custo sejam sempre vinculados a um contrato válido. rn09 rn11 rnf10 rnf11">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q1"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Alta Prioridade</span></span>
      <span class="req-pill req-tag-mvp req-pill-mvp">Candidato ao MVP</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF33 - Cadastrar contrato de obra</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-dev"><span class="req-status-dot"></span>Em Desenvolvimento (Sprint Backlog)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato" class="req-lumio-tag req-tag-oe"># OE3 · Transparência de Custos por Contrato de Obra ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-05" class="req-lumio-tag req-tag-car"># CAR-05 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># GESTOR_OBRAS / ADMIN_FINANCEIRO</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Recorte da <a href="priorizacao/#mapeamento-us-rf">US33 · ver mapeamento RF↔US</a></span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>Administrador Financeiro ou Gestor Operacional de Obras</strong>, quero cadastrar, editar e consultar contratos de obras com vigência, valor global e retenções, para que despesas, reembolsos e apropriações de custo sejam sempre vinculados a um contrato válido.</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">O Administrador Financeiro (`ADMIN_FINANCEIRO`) ou o Gestor Operacional de Obras (`GESTOR_OBRAS`) cadastra contratos de obras vinculados a clientes, informando vigência, valor global, objeto contratual, retenções e alçadas de supervisão. Os contratos ativos cadastrados podem ser utilizados para vincular despesas, reembolsos e apropriações de custos, respeitando as regras de negócio RN09 e RN11.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<a href="#rn09" class="req-tag req-tag-rn"># RN09 · Rateio Proporcional de Custos Indiretos por Contrato ↗</a> <a href="#rn11" class="req-tag req-tag-rn"># RN11 · Parametrização Obrigatória de Centros de Custo por Contrato ↗</a>) e perfil canônico de acesso <code>GESTOR_OBRAS / ADMIN_FINANCEIRO</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf10" class="req-tag req-tag-rnf"># RNF10 · Garantir sigilo e não-exposição de remunerações individuais em relatórios operacionais ↗</a> <a href="#rnf11" class="req-tag req-tag-rnf"># RNF11 · Garantir consistência transacional ACID na apropriação concorrente de custos ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato" class="req-tag req-tag-oe"># OE3 · Transparência de Custos por Contrato de Obra ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-05" class="req-tag req-tag-car"># CAR-05 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># GESTOR_OBRAS / ADMIN_FINANCEIRO</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><a href="#rn09" class="req-tag req-tag-rn"># RN09 · Rateio Proporcional de Custos Indiretos por Contrato ↗</a> <a href="#rn11" class="req-tag req-tag-rn"># RN11 · Parametrização Obrigatória de Centros de Custo por Contrato ↗</a></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf10" class="req-tag req-tag-rnf"># RNF10 · Garantir sigilo e não-exposição de remunerações individuais em relatórios operacionais ↗</a> <a href="#rnf11" class="req-tag req-tag-rnf"># RNF11 · Garantir consistência transacional ACID na apropriação concorrente de custos ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q1">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q1">Q1 — Candidatos ao MVP (Alta Prioridade)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">8h (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">1 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">1,67 (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">1,80</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>1,80</strong>). Destinação: <strong>MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q1">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe3" id="rf34" data-type="rf" data-rf="RF34" data-oe="oe3" data-car="car-06" data-mvp="mvp" data-quad="q1" data-role="GESTOR_OBRAS" data-text="rf34 cadastrar centro de custo de obra oe3 car-06 gestor_obras mvp q1 ct-m3-12 us34 como **gestor operacional de obras**, quero cadastrar centros de custo e definir tetos orçamentários por categoria de despesa em cada contrato, para que o painel calcule a execução orçamentária e os desvios. rn09 rn11 rnf09 rnf10" data-search-text="rf34 cadastrar centro de custo de obra oe3 car-06 gestor_obras mvp q1 ct-m3-12 us34 como **gestor operacional de obras**, quero cadastrar centros de custo e definir tetos orçamentários por categoria de despesa em cada contrato, para que o painel calcule a execução orçamentária e os desvios. rn09 rn11 rnf09 rnf10">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q1"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Alta Prioridade</span></span>
      <span class="req-pill req-tag-mvp req-pill-mvp">Candidato ao MVP</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF34 - Cadastrar centro de custo de obra</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-dev"><span class="req-status-dot"></span>Em Desenvolvimento (Sprint Backlog)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato" class="req-lumio-tag req-tag-oe"># OE3 · Transparência de Custos por Contrato de Obra ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-06" class="req-lumio-tag req-tag-car"># CAR-06 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># GESTOR_OBRAS</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Recorte da <a href="priorizacao/#mapeamento-us-rf">US34 · ver mapeamento RF↔US</a></span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>Gestor Operacional de Obras</strong>, quero cadastrar centros de custo e definir tetos orçamentários por categoria de despesa em cada contrato, para que o painel calcule a execução orçamentária e os desvios.</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">O Gestor Operacional de Obras (`GESTOR_OBRAS`) cadastra centros de custo vinculados a contratos de obras ativos, permitindo a classificação e a vinculação de despesas operacionais para acompanhamento financeiro (RN09, RN11).</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<a href="#rn09" class="req-tag req-tag-rn"># RN09 · Rateio Proporcional de Custos Indiretos por Contrato ↗</a> <a href="#rn11" class="req-tag req-tag-rn"># RN11 · Parametrização Obrigatória de Centros de Custo por Contrato ↗</a>) e perfil canônico de acesso <code>GESTOR_OBRAS</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf09" class="req-tag req-tag-rnf"># RNF09 · Garantir tempo de resposta para filtros e consultas do painel de custos inferior a 3,0 segundos ↗</a> <a href="#rnf10" class="req-tag req-tag-rnf"># RNF10 · Garantir sigilo e não-exposição de remunerações individuais em relatórios operacionais ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato" class="req-tag req-tag-oe"># OE3 · Transparência de Custos por Contrato de Obra ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-06" class="req-tag req-tag-car"># CAR-06 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># GESTOR_OBRAS</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><a href="#rn09" class="req-tag req-tag-rn"># RN09 · Rateio Proporcional de Custos Indiretos por Contrato ↗</a> <a href="#rn11" class="req-tag req-tag-rn"># RN11 · Parametrização Obrigatória de Centros de Custo por Contrato ↗</a></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf09" class="req-tag req-tag-rnf"># RNF09 · Garantir tempo de resposta para filtros e consultas do painel de custos inferior a 3,0 segundos ↗</a> <a href="#rnf10" class="req-tag req-tag-rnf"># RNF10 · Garantir sigilo e não-exposição de remunerações individuais em relatórios operacionais ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q1">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q1">Q1 — Candidatos ao MVP (Alta Prioridade)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">8h (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">1 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">1,67 (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">1,80</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>1,80</strong>). Destinação: <strong>MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q1">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe1" id="rf35" data-type="rf" data-rf="RF35" data-oe="oe1" data-car="car-02" data-mvp="mvp" data-quad="q1" data-role="TECNICO_CAMPO" data-text="rf35 retificar apontamento de campo oe1 car-02 tecnico_campo mvp q1 ct-m1-16 us35 como **técnico de campo**, quero retificar horas, escopo e anexos de um apontamento ainda pendente de homologação dentro de 5 dias úteis, para que eu corrija erros sem depender de reabertura pela gestão. rn02 rnf04 rnf07" data-search-text="rf35 retificar apontamento de campo oe1 car-02 tecnico_campo mvp q1 ct-m1-16 us35 como **técnico de campo**, quero retificar horas, escopo e anexos de um apontamento ainda pendente de homologação dentro de 5 dias úteis, para que eu corrija erros sem depender de reabertura pela gestão. rn02 rnf04 rnf07">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q1"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Alta Prioridade</span></span>
      <span class="req-pill req-tag-mvp req-pill-mvp">Candidato ao MVP</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF35 - Retificar apontamento de campo</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-dev"><span class="req-status-dot"></span>Em Desenvolvimento (Sprint Backlog)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe1-padronizar-e-unificar-os-dados" class="req-lumio-tag req-tag-oe"># OE1 · Padronizar e Unificar os Dados ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-02" class="req-lumio-tag req-tag-car"># CAR-02 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># TECNICO_CAMPO</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">História de Usuário (US35)</span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>Técnico de Campo</strong>, quero retificar horas, escopo e anexos de um apontamento ainda pendente de homologação dentro de 5 dias úteis, para que eu corrija erros sem depender de reabertura pela gestão.</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">O Técnico de Campo (`TECNICO_CAMPO`) pode retificar horas, escopo ou anexos de um apontamento submetido enquanto seu status for "Pendente de Homologação", respeitando a janela de até 5 dias úteis contados da submissão inicial ou do último reenvio após rejeição (RN02). Caso o apontamento seja rejeitado pelo gestor (RF32), o técnico pode corrigir o registro e reenviá-lo para nova homologação, preservando seu identificador e o histórico de alterações e pareceres. Cada reenvio após rejeição altera o status para "Pendente de Homologação" e reinicia integralmente a janela de 5 dias úteis para retificação (RN02). Apontamentos homologados permanecem bloqueados contra alterações.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<a href="#rn02" class="req-tag req-tag-rn"># RN02 · Janela Temporal para Submissão e Edição de Apontamento ↗</a>) e perfil canônico de acesso <code>TECNICO_CAMPO</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf04" class="req-tag req-tag-rnf"># RNF04 · Garantir usabilidade e agilidade no preenchimento de apontamentos de campo ↗</a> <a href="#rnf07" class="req-tag req-tag-rnf"># RNF07 · Garantir robustez e segurança no processamento e armazenamento de comprovantes ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe1-padronizar-e-unificar-os-dados" class="req-tag req-tag-oe"># OE1 · Padronizar e Unificar os Dados ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-02" class="req-tag req-tag-car"># CAR-02 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># TECNICO_CAMPO</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><a href="#rn02" class="req-tag req-tag-rn"># RN02 · Janela Temporal para Submissão e Edição de Apontamento ↗</a></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf04" class="req-tag req-tag-rnf"># RNF04 · Garantir usabilidade e agilidade no preenchimento de apontamentos de campo ↗</a> <a href="#rnf07" class="req-tag req-tag-rnf"># RNF07 · Garantir robustez e segurança no processamento e armazenamento de comprovantes ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q1">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q1">Q1 — Candidatos ao MVP (Alta Prioridade)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">4h (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">1 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">1,67 (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">1,80</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>1,80</strong>). Destinação: <strong>MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q1">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe1" id="rf36" data-type="rf" data-rf="RF36" data-oe="oe1" data-car="car-10" data-mvp="pos-mvp" data-quad="q3" data-role="ADMIN_FINANCEIRO" data-text="rf36 exportar dados consolidados em planilha oe1 car-10 admin_financeiro pós-mvp q3 ct-m1-17 us36 como **administrador financeiro**, quero exportar dados consolidados de apontamentos, presenças e apropriações em planilhas csv e xlsx, para que eu faça a conciliação contábil externa sem redigitação.  rnf02" data-search-text="rf36 exportar dados consolidados em planilha oe1 car-10 admin_financeiro pós-mvp q3 ct-m1-17 us36 como **administrador financeiro**, quero exportar dados consolidados de apontamentos, presenças e apropriações em planilhas csv e xlsx, para que eu faça a conciliação contábil externa sem redigitação.  rnf02">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q3"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Evolutivo</span></span>
      <span class="req-pill req-tag-mvp req-pill-posmvp">Backlog Evolutivo (Pós-MVP)</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF36 - Exportar dados consolidados em planilha</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-plan"><span class="req-status-dot"></span>Planejado (Release 2)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe1-padronizar-e-unificar-os-dados" class="req-lumio-tag req-tag-oe"># OE1 · Padronizar e Unificar os Dados ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-10" class="req-lumio-tag req-tag-car"># CAR-10 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># ADMIN_FINANCEIRO</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">História de Usuário (US36)</span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>Administrador Financeiro</strong>, quero exportar dados consolidados de apontamentos, presenças e apropriações em planilhas CSV e XLSX, para que eu faça a conciliação contábil externa sem redigitação.</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">O Administrador Financeiro (`ADMIN_FINANCEIRO`) seleciona períodos, contratos e centros de custo e exporta os dados consolidados de apontamentos, presenças e apropriações em arquivos estruturados de planilha (formatos abertos CSV e XLSX) para conciliação contábil externa ou arquivamento.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<span class="req-tag-none">—</span>) e perfil canônico de acesso <code>ADMIN_FINANCEIRO</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf02" class="req-tag req-tag-rnf"># RNF02 · Garantir tempo de resposta para consulta cadastral inferior a 2,0 segundos ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe1-padronizar-e-unificar-os-dados" class="req-tag req-tag-oe"># OE1 · Padronizar e Unificar os Dados ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-10" class="req-tag req-tag-car"># CAR-10 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># ADMIN_FINANCEIRO</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><span class="req-tag-none">—</span></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf02" class="req-tag req-tag-rnf"># RNF02 · Garantir tempo de resposta para consulta cadastral inferior a 2,0 segundos ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q3">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q3">Q3 — Baixa Prioridade / Evolutivo</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">6h (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">1 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">1,67 (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">1,20</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>1,20</strong>). Destinação: <strong>Pós-MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q3">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe3" id="rf37" data-type="rf" data-rf="RF37" data-oe="oe3" data-car="car-05" data-mvp="mvp" data-quad="q1" data-role="GESTOR_OBRAS / ADMIN_FINANCEIRO" data-text="rf37 atualizar contrato de obra oe3 car-05 gestor_obras / admin_financeiro mvp q1 ct-m3-13 us33 como **gestor operacional de obras ou administrador financeiro**, quero atualizar aditivos, prazos e valores de contratos de obras vigentes, para que as apropriações reflitam as repactuações contratuais. rn09 rn11 rnf10 rnf11" data-search-text="rf37 atualizar contrato de obra oe3 car-05 gestor_obras / admin_financeiro mvp q1 ct-m3-13 us33 como **gestor operacional de obras ou administrador financeiro**, quero atualizar aditivos, prazos e valores de contratos de obras vigentes, para que as apropriações reflitam as repactuações contratuais. rn09 rn11 rnf10 rnf11">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q1"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Alta Prioridade</span></span>
      <span class="req-pill req-tag-mvp req-pill-mvp">Candidato ao MVP</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF37 - Atualizar contrato de obra</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-dev"><span class="req-status-dot"></span>Em Desenvolvimento (Sprint Backlog)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato" class="req-lumio-tag req-tag-oe"># OE3 · Transparência de Custos por Contrato de Obra ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-05" class="req-lumio-tag req-tag-car"># CAR-05 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># GESTOR_OBRAS / ADMIN_FINANCEIRO</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Recorte da <a href="priorizacao/#mapeamento-us-rf">US33 · ver mapeamento RF↔US</a></span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>Gestor Operacional de Obras ou Administrador Financeiro</strong>, quero atualizar aditivos, prazos e valores de contratos de obras vigentes, para que as apropriações reflitam as repactuações contratuais.</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">O Administrador Financeiro (`ADMIN_FINANCEIRO`) ou o Gestor Operacional de Obras (`GESTOR_OBRAS`) atualiza os dados de um contrato de obra já cadastrado, incluindo vigência, valor global, objeto contratual, retenções e alçadas de supervisão, preservando sua identificação e os vínculos com os registros financeiros associados.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<a href="#rn09" class="req-tag req-tag-rn"># RN09 · Rateio Proporcional de Custos Indiretos por Contrato ↗</a> <a href="#rn11" class="req-tag req-tag-rn"># RN11 · Parametrização Obrigatória de Centros de Custo por Contrato ↗</a>) e perfil canônico de acesso <code>GESTOR_OBRAS / ADMIN_FINANCEIRO</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf10" class="req-tag req-tag-rnf"># RNF10 · Garantir sigilo e não-exposição de remunerações individuais em relatórios operacionais ↗</a> <a href="#rnf11" class="req-tag req-tag-rnf"># RNF11 · Garantir consistência transacional ACID na apropriação concorrente de custos ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato" class="req-tag req-tag-oe"># OE3 · Transparência de Custos por Contrato de Obra ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-05" class="req-tag req-tag-car"># CAR-05 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># GESTOR_OBRAS / ADMIN_FINANCEIRO</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><a href="#rn09" class="req-tag req-tag-rn"># RN09 · Rateio Proporcional de Custos Indiretos por Contrato ↗</a> <a href="#rn11" class="req-tag req-tag-rn"># RN11 · Parametrização Obrigatória de Centros de Custo por Contrato ↗</a></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf10" class="req-tag req-tag-rnf"># RNF10 · Garantir sigilo e não-exposição de remunerações individuais em relatórios operacionais ↗</a> <a href="#rnf11" class="req-tag req-tag-rnf"># RNF11 · Garantir consistência transacional ACID na apropriação concorrente de custos ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q1">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q1">Q1 — Candidatos ao MVP (Alta Prioridade)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">6h (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">1 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">1,67 (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">1,80</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>1,80</strong>). Destinação: <strong>MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q1">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe3" id="rf38" data-type="rf" data-rf="RF38" data-oe="oe3" data-car="car-05" data-mvp="mvp" data-quad="q1" data-role="GESTOR_OBRAS / ADMIN_FINANCEIRO" data-text="rf38 consultar contratos de obra oe3 car-05 gestor_obras / admin_financeiro mvp q1 ct-m3-14 us33 como **gestor operacional de obras ou administrador financeiro**, quero consultar a relação e o detalhamento de contratos ativos e concluídos, para que eu visualize rapidamente as condições pactuadas de cada obra.  rnf10" data-search-text="rf38 consultar contratos de obra oe3 car-05 gestor_obras / admin_financeiro mvp q1 ct-m3-14 us33 como **gestor operacional de obras ou administrador financeiro**, quero consultar a relação e o detalhamento de contratos ativos e concluídos, para que eu visualize rapidamente as condições pactuadas de cada obra.  rnf10">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q1"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Alta Prioridade</span></span>
      <span class="req-pill req-tag-mvp req-pill-mvp">Candidato ao MVP</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF38 - Consultar contratos de obra</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-dev"><span class="req-status-dot"></span>Em Desenvolvimento (Sprint Backlog)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato" class="req-lumio-tag req-tag-oe"># OE3 · Transparência de Custos por Contrato de Obra ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-05" class="req-lumio-tag req-tag-car"># CAR-05 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># GESTOR_OBRAS / ADMIN_FINANCEIRO</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Recorte da <a href="priorizacao/#mapeamento-us-rf">US33 · ver mapeamento RF↔US</a></span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>Gestor Operacional de Obras ou Administrador Financeiro</strong>, quero consultar a relação e o detalhamento de contratos ativos e concluídos, para que eu visualize rapidamente as condições pactuadas de cada obra.</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">O Administrador Financeiro (`ADMIN_FINANCEIRO`) ou o Gestor Operacional de Obras (`GESTOR_OBRAS`) consulta os contratos de obras cadastrados, visualizando o cliente vinculado, vigência, valor global, objeto contratual, retenções e alçadas de supervisão, sem alterar os registros.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<span class="req-tag-none">—</span>) e perfil canônico de acesso <code>GESTOR_OBRAS / ADMIN_FINANCEIRO</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf10" class="req-tag req-tag-rnf"># RNF10 · Garantir sigilo e não-exposição de remunerações individuais em relatórios operacionais ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato" class="req-tag req-tag-oe"># OE3 · Transparência de Custos por Contrato de Obra ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-05" class="req-tag req-tag-car"># CAR-05 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># GESTOR_OBRAS / ADMIN_FINANCEIRO</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><span class="req-tag-none">—</span></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf10" class="req-tag req-tag-rnf"># RNF10 · Garantir sigilo e não-exposição de remunerações individuais em relatórios operacionais ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q1">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q1">Q1 — Candidatos ao MVP (Alta Prioridade)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">1 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">2h (1)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">1 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">1,00 (1)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">3,00</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>3,00</strong>). Destinação: <strong>MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q1">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe3" id="rf39" data-type="rf" data-rf="RF39" data-oe="oe3" data-car="car-06" data-mvp="mvp" data-quad="q1" data-role="GESTOR_OBRAS" data-text="rf39 atualizar centro de custo de obra oe3 car-06 gestor_obras mvp q1 ct-m3-15 us34 como **gestor operacional de obras**, quero atualizar nomenclaturas e parâmetros de centros de custo ativos, para que a estrutura de custos permaneça alinhada à evolução do canteiro sem quebrar vínculos históricos. rn09 rn11 rnf09 rnf10" data-search-text="rf39 atualizar centro de custo de obra oe3 car-06 gestor_obras mvp q1 ct-m3-15 us34 como **gestor operacional de obras**, quero atualizar nomenclaturas e parâmetros de centros de custo ativos, para que a estrutura de custos permaneça alinhada à evolução do canteiro sem quebrar vínculos históricos. rn09 rn11 rnf09 rnf10">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q1"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Alta Prioridade</span></span>
      <span class="req-pill req-tag-mvp req-pill-mvp">Candidato ao MVP</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF39 - Atualizar centro de custo de obra</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-dev"><span class="req-status-dot"></span>Em Desenvolvimento (Sprint Backlog)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato" class="req-lumio-tag req-tag-oe"># OE3 · Transparência de Custos por Contrato de Obra ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-06" class="req-lumio-tag req-tag-car"># CAR-06 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># GESTOR_OBRAS</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Recorte da <a href="priorizacao/#mapeamento-us-rf">US34 · ver mapeamento RF↔US</a></span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>Gestor Operacional de Obras</strong>, quero atualizar nomenclaturas e parâmetros de centros de custo ativos, para que a estrutura de custos permaneça alinhada à evolução do canteiro sem quebrar vínculos históricos.</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">O Gestor Operacional de Obras (`GESTOR_OBRAS`) atualiza os dados de centros de custo previamente cadastrados, preservando seus vínculos com os contratos e as despesas operacionais associadas (RN09, RN11).</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<a href="#rn09" class="req-tag req-tag-rn"># RN09 · Rateio Proporcional de Custos Indiretos por Contrato ↗</a> <a href="#rn11" class="req-tag req-tag-rn"># RN11 · Parametrização Obrigatória de Centros de Custo por Contrato ↗</a>) e perfil canônico de acesso <code>GESTOR_OBRAS</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf09" class="req-tag req-tag-rnf"># RNF09 · Garantir tempo de resposta para filtros e consultas do painel de custos inferior a 3,0 segundos ↗</a> <a href="#rnf10" class="req-tag req-tag-rnf"># RNF10 · Garantir sigilo e não-exposição de remunerações individuais em relatórios operacionais ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato" class="req-tag req-tag-oe"># OE3 · Transparência de Custos por Contrato de Obra ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-06" class="req-tag req-tag-car"># CAR-06 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># GESTOR_OBRAS</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><a href="#rn09" class="req-tag req-tag-rn"># RN09 · Rateio Proporcional de Custos Indiretos por Contrato ↗</a> <a href="#rn11" class="req-tag req-tag-rn"># RN11 · Parametrização Obrigatória de Centros de Custo por Contrato ↗</a></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf09" class="req-tag req-tag-rnf"># RNF09 · Garantir tempo de resposta para filtros e consultas do painel de custos inferior a 3,0 segundos ↗</a> <a href="#rnf10" class="req-tag req-tag-rnf"># RNF10 · Garantir sigilo e não-exposição de remunerações individuais em relatórios operacionais ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q1">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q1">Q1 — Candidatos ao MVP (Alta Prioridade)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">6h (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">1 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">1,67 (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">1,80</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>1,80</strong>). Destinação: <strong>MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q1">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<details class="req-card req-card-rf req-card-oe3" id="rf40" data-type="rf" data-rf="RF40" data-oe="oe3" data-car="car-06" data-mvp="mvp" data-quad="q1" data-role="GESTOR_OBRAS" data-text="rf40 definir tetos orçamentários de obra oe3 car-06 gestor_obras mvp q1 ct-m3-16 us34 como **gestor operacional de obras**, quero estipular tetos monetários orçados por categoria de despesa em cada contrato, para que o sistema monitore limites e acione alertas preventivos de estouro orçamentário. rn13 rn29 rnf09 rnf10" data-search-text="rf40 definir tetos orçamentários de obra oe3 car-06 gestor_obras mvp q1 ct-m3-16 us34 como **gestor operacional de obras**, quero estipular tetos monetários orçados por categoria de despesa em cada contrato, para que o sistema monitore limites e acione alertas preventivos de estouro orçamentário. rn13 rn29 rnf09 rnf10">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-quad-q1"><svg class="req-priority-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg><span>Alta Prioridade</span></span>
      <span class="req-pill req-tag-mvp req-pill-mvp">Candidato ao MVP</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RF40 - Definir tetos orçamentários de obra</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags da Foto 3) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12"></path></svg>
          <span>Status</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-status req-status-dev"><span class="req-status-dot"></span>Em Desenvolvimento (Sprint Backlog)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Objetivo Específico</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato" class="req-lumio-tag req-tag-oe"># OE3 · Transparência de Custos por Contrato de Obra ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Características (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-06" class="req-lumio-tag req-tag-car"># CAR-06 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
          <span>Responsável (Ator)</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-role"># GESTOR_OBRAS</span>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Recorte da <a href="priorizacao/#mapeamento-us-rf">US34 · ver mapeamento RF↔US</a></span>
      </div>
      <div class="req-desc-box" style="border-left: 3px solid var(--duoc-gold, #DAA520);">
        <p class="req-desc-text"><strong>História de Usuário:</strong> Como <strong>Gestor Operacional de Obras</strong>, quero estipular tetos monetários orçados por categoria de despesa em cada contrato, para que o sistema monitore limites e acione alertas preventivos de estouro orçamentário.</p>
      </div>
    </div>

    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="criterios">Critérios de Aceitação</button>
      <button type="button" class="req-tab-btn" data-target="rastreabilidade">Rastreabilidade & Tags</button>
      <button type="button" class="req-tab-btn" data-target="priorizacao">Priorização & Score 4×4</button>
    </div>

    <!-- ABA 1: Critérios de Aceitação com Checklist DoR / DoD (Lumio Style) -->
    <div class="req-tab-pane active" data-pane="criterios">
      <div class="req-checklist-container">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Critérios Oficiais e Processo de Verificação (DoR / DoD)</span>
          <span class="req-checklist-badge">3 de 3 Verificados</span>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">Critério Funcional Oficial (Verificável)</span>
            <p class="req-check-text">O Gestor Operacional de Obras (`GESTOR_OBRAS`) define tetos orçamentários por categoria de despesa para contratos de obras ativos. O sistema armazena os valores configurados e calcula automaticamente o orçamento total previsto do contrato pela soma dos tetos de suas categorias, disponibilizando esses valores para o monitoramento da execução orçamentária (RF12, RN13) e para a configuração de alertas preventivos (RF31, RN29).</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoR — Pré-condições & Regras de Domínio</span>
            <p class="req-check-text">Requisito pronto para implementação sob validação obrigatória das Regras de Negócio condicionantes (<a href="#rn13" class="req-tag req-tag-rn"># RN13 · Bloqueio Preventivo por Extrapolação de Teto Orçamentário ↗</a> <a href="#rn29" class="req-tag req-tag-rn"># RN29 · Disparo de Alertas Preventivos de Extrapolação Orçamentária ↗</a>) e perfil canônico de acesso <code>GESTOR_OBRAS</code> autenticado.</p>
          </div>
        </div>
        <div class="req-checklist-item">
          <div class="req-check-box">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <div class="req-check-body">
            <span class="req-check-tag">DoD — Qualidade Técnica & Não Funcionais</span>
            <p class="req-check-text">Transação atômica ACID assegurada, gravação em trilha de auditoria UTC e conformidade estrita aos atributos de qualidade (<a href="#rnf09" class="req-tag req-tag-rnf"># RNF09 · Garantir tempo de resposta para filtros e consultas do painel de custos inferior a 3,0 segundos ↗</a> <a href="#rnf10" class="req-tag req-tag-rnf"># RNF10 · Garantir sigilo e não-exposição de remunerações individuais em relatórios operacionais ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a>).</p>
          </div>
        </div>
      </div>
    </div>

    <!-- ABA 2: Rastreabilidade Total & Tags Lumio Style -->
    <div class="req-tab-pane" data-pane="rastreabilidade">
      <div class="req-trace-grid">
        <div class="req-trace-item">
          <span class="req-trace-title">Objetivo Estratégico (OE)</span>
          <a href="../visao-produto/solucao-proposta/#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato" class="req-tag req-tag-oe"># OE3 · Transparência de Custos por Contrato de Obra ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Característica de Produto (CAR)</span>
          <a href="../visao-produto/solucao-proposta/#car-06" class="req-tag req-tag-car"># CAR-06 ↗</a>
        </div>
        <div class="req-trace-item">
          <span class="req-trace-title">Perfil de Acesso Canônico (RBAC)</span>
          <span class="req-tag req-tag-role"># GESTOR_OBRAS</span>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Regras de Negócio (RNs) Condicionantes</span>
          <div class="req-tags-wrap"><a href="#rn13" class="req-tag req-tag-rn"># RN13 · Bloqueio Preventivo por Extrapolação de Teto Orçamentário ↗</a> <a href="#rn29" class="req-tag req-tag-rn"># RN29 · Disparo de Alertas Preventivos de Extrapolação Orçamentária ↗</a></div>
        </div>
        <div class="req-trace-item req-trace-full">
          <span class="req-trace-title">Requisitos Não Funcionais (RNFs) e Restrições</span>
          <div class="req-tags-wrap"><a href="#rnf09" class="req-tag req-tag-rnf"># RNF09 · Garantir tempo de resposta para filtros e consultas do painel de custos inferior a 3,0 segundos ↗</a> <a href="#rnf10" class="req-tag req-tag-rnf"># RNF10 · Garantir sigilo e não-exposição de remunerações individuais em relatórios operacionais ↗</a> <a href="#rnfs-transversais" class="req-tag req-tag-rnf"># Transversais (T) ↗</a></div>
        </div>
      </div>
    </div>

    <!-- ABA 3: Priorização, Métricas e Linha de Corte 4x4 -->
    <div class="req-tab-pane" data-pane="priorizacao">
      <div class="req-metrics-grid">
        <div class="req-metric-card req-quad-card req-quad-q1">
          <span class="metric-label">Quadrante na Matriz 4×4</span>
          <span class="metric-val-quad req-quad-q1">Q1 — Candidatos ao MVP (Alta Prioridade)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Valor de Negócio (VB)</span>
          <span class="metric-val">3 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Complexidade Técnica (CX)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço de Implementação (ES)</span>
          <span class="metric-val">6h (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Lacuna de Capacidade (LC)</span>
          <span class="metric-val">2 <small>/ 4</small></span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Esforço Consolidado (EC)</span>
          <span class="metric-val">2,00 (2)</span>
        </div>
        <div class="req-metric-card">
          <span class="metric-label">Índice de Prioridade (IP)</span>
          <span class="metric-val">1,50</span>
        </div>
      </div>
      <div class="req-metrics-footer">
        <span>Cálculo formal: <code>EC = (ES + CX + LC) / 3</code> e <code>IP = VB / EC</code> (Score: <strong>1,50</strong>). Destinação: <strong>MVP</strong>.</span>
        <a href="priorizacao/#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico" class="req-tag req-tag-matrix req-tag-matrix-q1">Ver Posição no Mapa da Matriz 4×4 ↗</a>
      </div>
    </div>

  </div>
</details>

<div id="req-no-results" class="req-no-results" style="display:none;">
  <div class="req-no-results-icon"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></div>
  <h3>Nenhum requisito encontrado para os filtros selecionados</h3>
  <p>Tente ajustar os termos da pesquisa ou selecione o filtro "Todos (40)".</p>
</div>

---

<a id="catalogo-regras-de-negocio"></a>
<a id="catalogo-geral-de-regras-de-negocio-rn01-a-rn31"></a>
## Catálogo Geral de Regras de Negócio (RN01 a RN31)

As **31 Regras de Negócio (RN01 a RN31)** governam a lógica de domínio, integridade contábil, controles temporais e políticas de segurança da informação do ***DUOC Finance***. Cada card abaixo detalha a regra oficial e lista os **Requisitos Funcionais Executores** correspondentes em links bidirecionais navegáveis:

<details class="req-card req-card-rn" id="rn01" data-type="rn" data-rn="RN01" data-oe="oe1" data-car="car-01" data-mvp="mvp" data-quad="q1" data-text="rn01 unicidade e validação cadastral por cpf oe1 módulo 1 car-01 integridade cadastral os dados cadastrais de colaboradores utilizam o cpf como identificador unívoco no sistema, validando os dígitos verificadores pelo algoritmo oficial e impedindo registros duplicados. rf01 rf02 regra negocio dominio" data-search-text="rn01 unicidade e validação cadastral por cpf oe1 módulo 1 car-01 integridade cadastral os dados cadastrais de colaboradores utilizam o cpf como identificador unívoco no sistema, validando os dígitos verificadores pelo algoritmo oficial e impedindo registros duplicados. rf01 rf02 regra negocio dominio">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-pill-rn">
        <svg class="req-priority-flag req-rn-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        <span>Regra de Domínio</span>
      </span>
      <span class="req-pill req-pill-cat-rn">Integridade Cadastral</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RN01 — Unicidade e Validação Cadastral por CPF</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Módulo & OE</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe1-padronizar-e-unificar-os-dados" class="req-lumio-tag req-tag-oe"># OE1 · Módulo 1 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Característica (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-01" class="req-lumio-tag req-tag-car"># CAR-01 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Executores (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf01" class="req-tag req-tag-rf"># RF01 · Cadastrar colaborador ↗</a> <a href="#rf02" class="req-tag req-tag-rf"># RF02 · Atualizar cadastro de colaborador ↗</a>
        </div>
      </div>
    </div>

    <!-- Enunciado Oficial da Regra -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Enunciado Oficial e Condicionantes de Negócio</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Regra de Negócio:</strong> Os dados cadastrais de colaboradores utilizam o CPF como identificador unívoco no sistema, validando os dígitos verificadores pelo algoritmo oficial e impedindo registros duplicados.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rn" id="rn02" data-type="rn" data-rn="RN02" data-oe="oe1" data-car="car-02" data-mvp="mvp" data-quad="q1" data-text="rn02 janela temporal para submissão e edição de apontamento oe1 módulo 1 car-02 controle de apontamentos o apontamento diário de campo (rvt) deve ser submetido até as 23h59 do dia subsequente à prestação do serviço; após submissão e homologação, a edição é bloqueada, permitindo retificação apenas após deliberação de recusa com justificativa obrigatória. rf04 rf19 rf32 rf35 regra negocio dominio" data-search-text="rn02 janela temporal para submissão e edição de apontamento oe1 módulo 1 car-02 controle de apontamentos o apontamento diário de campo (rvt) deve ser submetido até as 23h59 do dia subsequente à prestação do serviço; após submissão e homologação, a edição é bloqueada, permitindo retificação apenas após deliberação de recusa com justificativa obrigatória. rf04 rf19 rf32 rf35 regra negocio dominio">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-pill-rn">
        <svg class="req-priority-flag req-rn-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        <span>Regra de Domínio</span>
      </span>
      <span class="req-pill req-pill-cat-rn">Controle de Apontamentos</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RN02 — Janela Temporal para Submissão e Edição de Apontamento</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Módulo & OE</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe1-padronizar-e-unificar-os-dados" class="req-lumio-tag req-tag-oe"># OE1 · Módulo 1 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Característica (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-02" class="req-lumio-tag req-tag-car"># CAR-02 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Executores (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf04" class="req-tag req-tag-rf"># RF04 · Submeter apontamento de campo ↗</a> <a href="#rf19" class="req-tag req-tag-rf"># RF19 · Consultar apontamentos registrados ↗</a> <a href="#rf32" class="req-tag req-tag-rf"># RF32 · Deliberar apontamento de campo ↗</a> <a href="#rf35" class="req-tag req-tag-rf"># RF35 · Retificar apontamento de campo ↗</a>
        </div>
      </div>
    </div>

    <!-- Enunciado Oficial da Regra -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Enunciado Oficial e Condicionantes de Negócio</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Regra de Negócio:</strong> O apontamento diário de campo (RVT) deve ser submetido até as 23h59 do dia subsequente à prestação do serviço; após submissão e homologação, a edição é bloqueada, permitindo retificação apenas após deliberação de recusa com justificativa obrigatória.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rn" id="rn03" data-type="rn" data-rn="RN03" data-oe="oe1" data-car="car-01" data-mvp="mvp" data-quad="q1" data-text="rn03 validação prévia de dados bancários e chave pix oe1 módulo 1 car-01 validação financeira contas bancárias cadastradas devem passar por validação de formato de agência e conta conforme padrão febraban, além de verificação de sintaxe para chaves pix. rf01 regra negocio dominio" data-search-text="rn03 validação prévia de dados bancários e chave pix oe1 módulo 1 car-01 validação financeira contas bancárias cadastradas devem passar por validação de formato de agência e conta conforme padrão febraban, além de verificação de sintaxe para chaves pix. rf01 regra negocio dominio">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-pill-rn">
        <svg class="req-priority-flag req-rn-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        <span>Regra de Domínio</span>
      </span>
      <span class="req-pill req-pill-cat-rn">Validação Financeira</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RN03 — Validação Prévia de Dados Bancários e Chave Pix</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Módulo & OE</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe1-padronizar-e-unificar-os-dados" class="req-lumio-tag req-tag-oe"># OE1 · Módulo 1 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Característica (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-01" class="req-lumio-tag req-tag-car"># CAR-01 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Executores (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf01" class="req-tag req-tag-rf"># RF01 · Cadastrar colaborador ↗</a>
        </div>
      </div>
    </div>

    <!-- Enunciado Oficial da Regra -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Enunciado Oficial e Condicionantes de Negócio</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Regra de Negócio:</strong> Contas bancárias cadastradas devem passar por validação de formato de agência e conta conforme padrão Febraban, além de verificação de sintaxe para chaves Pix.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rn" id="rn04" data-type="rn" data-rn="RN04" data-oe="oe1" data-car="car-01" data-mvp="mvp" data-quad="q1" data-text="rn04 revogação automática de credenciais em afastamento ou rescisão oe1 módulo 1 car-01 ciclo de vida & acesso o registro de rescisão ou afastamento funcional com status inativo revoga de forma imediata e compulsória todas as credenciais ativas e encerra as sessões abertas do colaborador. rf03 regra negocio dominio" data-search-text="rn04 revogação automática de credenciais em afastamento ou rescisão oe1 módulo 1 car-01 ciclo de vida & acesso o registro de rescisão ou afastamento funcional com status inativo revoga de forma imediata e compulsória todas as credenciais ativas e encerra as sessões abertas do colaborador. rf03 regra negocio dominio">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-pill-rn">
        <svg class="req-priority-flag req-rn-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        <span>Regra de Domínio</span>
      </span>
      <span class="req-pill req-pill-cat-rn">Ciclo de Vida & Acesso</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RN04 — Revogação Automática de Credenciais em Afastamento ou Rescisão</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Módulo & OE</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe1-padronizar-e-unificar-os-dados" class="req-lumio-tag req-tag-oe"># OE1 · Módulo 1 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Característica (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-01" class="req-lumio-tag req-tag-car"># CAR-01 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Executores (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf03" class="req-tag req-tag-rf"># RF03 · Registrar movimentação funcional ↗</a>
        </div>
      </div>
    </div>

    <!-- Enunciado Oficial da Regra -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Enunciado Oficial e Condicionantes de Negócio</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Regra de Negócio:</strong> O registro de rescisão ou afastamento funcional com status inativo revoga de forma imediata e compulsória todas as credenciais ativas e encerra as sessões abertas do colaborador.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rn" id="rn05" data-type="rn" data-rn="RN05" data-oe="oe2" data-car="car-03" data-mvp="mvp" data-quad="q1" data-text="rn05 pré-requisito de homologação de apontamentos para fechamento oe2 módulo 2 car-03 fluxo de aprovação a rotina de consolidação e homologação financeira processa exclusivamente apontamentos de campo que tenham sido formalmente homologados pelo gestor operacional de obras. rf05 rf06 regra negocio dominio" data-search-text="rn05 pré-requisito de homologação de apontamentos para fechamento oe2 módulo 2 car-03 fluxo de aprovação a rotina de consolidação e homologação financeira processa exclusivamente apontamentos de campo que tenham sido formalmente homologados pelo gestor operacional de obras. rf05 rf06 regra negocio dominio">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-pill-rn">
        <svg class="req-priority-flag req-rn-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        <span>Regra de Domínio</span>
      </span>
      <span class="req-pill req-pill-cat-rn">Fluxo de Aprovação</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RN05 — Pré-requisito de Homologação de Apontamentos para Fechamento</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Módulo & OE</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe2-aumentar-a-eficiencia-administrativo-financeira" class="req-lumio-tag req-tag-oe"># OE2 · Módulo 2 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Característica (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-03" class="req-lumio-tag req-tag-car"># CAR-03 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Executores (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf05" class="req-tag req-tag-rf"># RF05 · Solicitar prévia de fechamento ↗</a> <a href="#rf06" class="req-tag req-tag-rf"># RF06 · Homologar fechamento financeiro ↗</a>
        </div>
      </div>
    </div>

    <!-- Enunciado Oficial da Regra -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Enunciado Oficial e Condicionantes de Negócio</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Regra de Negócio:</strong> A rotina de consolidação e homologação financeira processa exclusivamente apontamentos de campo que tenham sido formalmente homologados pelo Gestor Operacional de Obras.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rn" id="rn06" data-type="rn" data-rn="RN06" data-oe="oe2" data-car="car-04" data-mvp="mvp" data-quad="q1" data-text="rn06 janela temporal para prestação de contas de reembolso oe2 módulo 2 car-04 controle temporal despesas operacionais elegíveis a reembolso devem ser submetidas em até 5 dias úteis após a realização do gasto, acompanhadas obrigatoriamente de comprovante fiscal. rf07 rf28 regra negocio dominio" data-search-text="rn06 janela temporal para prestação de contas de reembolso oe2 módulo 2 car-04 controle temporal despesas operacionais elegíveis a reembolso devem ser submetidas em até 5 dias úteis após a realização do gasto, acompanhadas obrigatoriamente de comprovante fiscal. rf07 rf28 regra negocio dominio">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-pill-rn">
        <svg class="req-priority-flag req-rn-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        <span>Regra de Domínio</span>
      </span>
      <span class="req-pill req-pill-cat-rn">Controle Temporal</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RN06 — Janela Temporal para Prestação de Contas de Reembolso</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Módulo & OE</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe2-aumentar-a-eficiencia-administrativo-financeira" class="req-lumio-tag req-tag-oe"># OE2 · Módulo 2 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Característica (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-04" class="req-lumio-tag req-tag-car"># CAR-04 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Executores (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf07" class="req-tag req-tag-rf"># RF07 · Submeter solicitação de reembolso ↗</a> <a href="#rf28" class="req-tag req-tag-rf"># RF28 · Submeter solicitação de adiantamento operacional ↗</a>
        </div>
      </div>
    </div>

    <!-- Enunciado Oficial da Regra -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Enunciado Oficial e Condicionantes de Negócio</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Regra de Negócio:</strong> Despesas operacionais elegíveis a reembolso devem ser submetidas em até 5 dias úteis após a realização do gasto, acompanhadas obrigatoriamente de comprovante fiscal.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rn" id="rn07" data-type="rn" data-rn="RN07" data-oe="oe2" data-car="car-04" data-mvp="mvp" data-quad="q1" data-text="rn07 bloqueio e justificativa obrigatória em recusa de despesa oe2 módulo 2 car-04 imutabilidade contábil a recusa de despesa pelo administrador financeiro exige parecer com no mínimo 20 caracteres; despesas homologadas não podem sofrer exclusão lógica. rf08 rf29 regra negocio dominio" data-search-text="rn07 bloqueio e justificativa obrigatória em recusa de despesa oe2 módulo 2 car-04 imutabilidade contábil a recusa de despesa pelo administrador financeiro exige parecer com no mínimo 20 caracteres; despesas homologadas não podem sofrer exclusão lógica. rf08 rf29 regra negocio dominio">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-pill-rn">
        <svg class="req-priority-flag req-rn-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        <span>Regra de Domínio</span>
      </span>
      <span class="req-pill req-pill-cat-rn">Imutabilidade Contábil</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RN07 — Bloqueio e Justificativa Obrigatória em Recusa de Despesa</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Módulo & OE</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe2-aumentar-a-eficiencia-administrativo-financeira" class="req-lumio-tag req-tag-oe"># OE2 · Módulo 2 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Característica (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-04" class="req-lumio-tag req-tag-car"># CAR-04 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Executores (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf08" class="req-tag req-tag-rf"># RF08 · Deliberar solicitação de reembolso ↗</a> <a href="#rf29" class="req-tag req-tag-rf"># RF29 · Deliberar solicitação de adiantamento operacional ↗</a>
        </div>
      </div>
    </div>

    <!-- Enunciado Oficial da Regra -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Enunciado Oficial e Condicionantes de Negócio</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Regra de Negócio:</strong> A recusa de despesa pelo Administrador Financeiro exige parecer com no mínimo 20 caracteres; despesas homologadas não podem sofrer exclusão lógica.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rn" id="rn08" data-type="rn" data-rn="RN08" data-oe="oe2" data-car="car-04" data-mvp="mvp" data-quad="q1" data-text="rn08 comprovante fiscal obrigatório para homologação de reembolso oe2 módulo 2 car-04 comprovação fiscal nenhuma despesa ou prestação de contas de adiantamento pode ser homologada para pagamento sem ao menos um comprovante fiscal legível anexado e validado. rf07 rf08 rf28 rf29 regra negocio dominio" data-search-text="rn08 comprovante fiscal obrigatório para homologação de reembolso oe2 módulo 2 car-04 comprovação fiscal nenhuma despesa ou prestação de contas de adiantamento pode ser homologada para pagamento sem ao menos um comprovante fiscal legível anexado e validado. rf07 rf08 rf28 rf29 regra negocio dominio">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-pill-rn">
        <svg class="req-priority-flag req-rn-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        <span>Regra de Domínio</span>
      </span>
      <span class="req-pill req-pill-cat-rn">Comprovação Fiscal</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RN08 — Comprovante Fiscal Obrigatório para Homologação de Reembolso</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Módulo & OE</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe2-aumentar-a-eficiencia-administrativo-financeira" class="req-lumio-tag req-tag-oe"># OE2 · Módulo 2 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Característica (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-04" class="req-lumio-tag req-tag-car"># CAR-04 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Executores (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf07" class="req-tag req-tag-rf"># RF07 · Submeter solicitação de reembolso ↗</a> <a href="#rf08" class="req-tag req-tag-rf"># RF08 · Deliberar solicitação de reembolso ↗</a> <a href="#rf28" class="req-tag req-tag-rf"># RF28 · Submeter solicitação de adiantamento operacional ↗</a> <a href="#rf29" class="req-tag req-tag-rf"># RF29 · Deliberar solicitação de adiantamento operacional ↗</a>
        </div>
      </div>
    </div>

    <!-- Enunciado Oficial da Regra -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Enunciado Oficial e Condicionantes de Negócio</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Regra de Negócio:</strong> Nenhuma despesa ou prestação de contas de adiantamento pode ser homologada para pagamento sem ao menos um comprovante fiscal legível anexado e validado.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rn" id="rn09" data-type="rn" data-rn="RN09" data-oe="oe3" data-car="car-05" data-mvp="mvp" data-quad="q1" data-text="rn09 rateio proporcional de custos indiretos por contrato oe3 módulo 3 car-05 apropriação & rateio custos de equipes que atuam simultaneamente em mais de um contrato ativo devem ser rateados proporcionalmente às horas trabalhadas registradas em cada obra. rf07 rf09 rf28 rf33 rf34 rf37 rf39 regra negocio dominio" data-search-text="rn09 rateio proporcional de custos indiretos por contrato oe3 módulo 3 car-05 apropriação & rateio custos de equipes que atuam simultaneamente em mais de um contrato ativo devem ser rateados proporcionalmente às horas trabalhadas registradas em cada obra. rf07 rf09 rf28 rf33 rf34 rf37 rf39 regra negocio dominio">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-pill-rn">
        <svg class="req-priority-flag req-rn-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        <span>Regra de Domínio</span>
      </span>
      <span class="req-pill req-pill-cat-rn">Apropriação & Rateio</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RN09 — Rateio Proporcional de Custos Indiretos por Contrato</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Módulo & OE</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato" class="req-lumio-tag req-tag-oe"># OE3 · Módulo 3 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Característica (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-05" class="req-lumio-tag req-tag-car"># CAR-05 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Executores (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf07" class="req-tag req-tag-rf"># RF07 · Submeter solicitação de reembolso ↗</a> <a href="#rf09" class="req-tag req-tag-rf"># RF09 · Apropriar custos operacionais ↗</a> <a href="#rf28" class="req-tag req-tag-rf"># RF28 · Submeter solicitação de adiantamento operacional ↗</a> <a href="#rf33" class="req-tag req-tag-rf"># RF33 · Cadastrar contrato de obra ↗</a> <a href="#rf34" class="req-tag req-tag-rf"># RF34 · Cadastrar centro de custo de obra ↗</a> <a href="#rf37" class="req-tag req-tag-rf"># RF37 · Atualizar contrato de obra ↗</a> <a href="#rf39" class="req-tag req-tag-rf"># RF39 · Atualizar centro de custo de obra ↗</a>
        </div>
      </div>
    </div>

    <!-- Enunciado Oficial da Regra -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Enunciado Oficial e Condicionantes de Negócio</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Regra de Negócio:</strong> Custos de equipes que atuam simultaneamente em mais de um contrato ativo devem ser rateados proporcionalmente às horas trabalhadas registradas em cada obra.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rn" id="rn10" data-type="rn" data-rn="RN10" data-oe="oe3" data-car="car-05" data-mvp="mvp" data-quad="q1" data-text="rn10 garantia de consistência transacional no rateio de custos oe3 módulo 3 car-05 consistência transacional a gravação do rateio financeiro entre centros de custo deve ser atômica (acid); qualquer falha em uma das parcelas reverte a operação integralmente. rf09 rf37 regra negocio dominio" data-search-text="rn10 garantia de consistência transacional no rateio de custos oe3 módulo 3 car-05 consistência transacional a gravação do rateio financeiro entre centros de custo deve ser atômica (acid); qualquer falha em uma das parcelas reverte a operação integralmente. rf09 rf37 regra negocio dominio">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-pill-rn">
        <svg class="req-priority-flag req-rn-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        <span>Regra de Domínio</span>
      </span>
      <span class="req-pill req-pill-cat-rn">Consistência Transacional</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RN10 — Garantia de Consistência Transacional no Rateio de Custos</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Módulo & OE</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato" class="req-lumio-tag req-tag-oe"># OE3 · Módulo 3 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Característica (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-05" class="req-lumio-tag req-tag-car"># CAR-05 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Executores (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf09" class="req-tag req-tag-rf"># RF09 · Apropriar custos operacionais ↗</a> <a href="#rf37" class="req-tag req-tag-rf"># RF37 · Atualizar contrato de obra ↗</a>
        </div>
      </div>
    </div>

    <!-- Enunciado Oficial da Regra -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Enunciado Oficial e Condicionantes de Negócio</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Regra de Negócio:</strong> A gravação do rateio financeiro entre centros de custo deve ser atômica (ACID); qualquer falha em uma das parcelas reverte a operação integralmente.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rn" id="rn11" data-type="rn" data-rn="RN11" data-oe="oe3" data-car="car-05" data-mvp="mvp" data-quad="q1" data-text="rn11 parametrização obrigatória de centros de custo por contrato oe3 módulo 3 car-05 parametrização orçamentária todo contrato cadastrado deve possuir ao menos um centro de custo vinculado antes de receber qualquer apropriação de despesa ou diária técnica. rf10 rf30 rf38 regra negocio dominio" data-search-text="rn11 parametrização obrigatória de centros de custo por contrato oe3 módulo 3 car-05 parametrização orçamentária todo contrato cadastrado deve possuir ao menos um centro de custo vinculado antes de receber qualquer apropriação de despesa ou diária técnica. rf10 rf30 rf38 regra negocio dominio">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-pill-rn">
        <svg class="req-priority-flag req-rn-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        <span>Regra de Domínio</span>
      </span>
      <span class="req-pill req-pill-cat-rn">Parametrização Orçamentária</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RN11 — Parametrização Obrigatória de Centros de Custo por Contrato</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Módulo & OE</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato" class="req-lumio-tag req-tag-oe"># OE3 · Módulo 3 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Característica (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-05" class="req-lumio-tag req-tag-car"># CAR-05 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Executores (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf10" class="req-tag req-tag-rf"># RF10 · Consultar rastreabilidade de custos ↗</a> <a href="#rf30" class="req-tag req-tag-rf"># RF30 · Consultar comparativo histórico de custos entre contratos ↗</a> <a href="#rf38" class="req-tag req-tag-rf"># RF38 · Consultar contratos de obra ↗</a>
        </div>
      </div>
    </div>

    <!-- Enunciado Oficial da Regra -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Enunciado Oficial e Condicionantes de Negócio</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Regra de Negócio:</strong> Todo contrato cadastrado deve possuir ao menos um centro de custo vinculado antes de receber qualquer apropriação de despesa ou diária técnica.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rn" id="rn12" data-type="rn" data-rn="RN12" data-oe="oe3" data-car="car-05" data-mvp="mvp" data-quad="q1" data-text="rn12 segregação de despesas administrativas e operacionais oe3 módulo 3 car-05 segregação de despesas custos de deslocamento e hospedagem são alocados separadamente das despesas de materiais operacionais, viabilizando relatórios segregados por natureza de gasto. rf09 rf10 regra negocio dominio" data-search-text="rn12 segregação de despesas administrativas e operacionais oe3 módulo 3 car-05 segregação de despesas custos de deslocamento e hospedagem são alocados separadamente das despesas de materiais operacionais, viabilizando relatórios segregados por natureza de gasto. rf09 rf10 regra negocio dominio">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-pill-rn">
        <svg class="req-priority-flag req-rn-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        <span>Regra de Domínio</span>
      </span>
      <span class="req-pill req-pill-cat-rn">Segregação de Despesas</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RN12 — Segregação de Despesas Administrativas e Operacionais</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Módulo & OE</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato" class="req-lumio-tag req-tag-oe"># OE3 · Módulo 3 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Característica (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-05" class="req-lumio-tag req-tag-car"># CAR-05 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Executores (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf09" class="req-tag req-tag-rf"># RF09 · Apropriar custos operacionais ↗</a> <a href="#rf10" class="req-tag req-tag-rf"># RF10 · Consultar rastreabilidade de custos ↗</a>
        </div>
      </div>
    </div>

    <!-- Enunciado Oficial da Regra -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Enunciado Oficial e Condicionantes de Negócio</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Regra de Negócio:</strong> Custos de deslocamento e hospedagem são alocados separadamente das despesas de materiais operacionais, viabilizando relatórios segregados por natureza de gasto.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rn" id="rn13" data-type="rn" data-rn="RN13" data-oe="oe3" data-car="car-06" data-mvp="mvp" data-quad="q1" data-text="rn13 bloqueio preventivo por extrapolação de teto orçamentário oe3 módulo 3 car-06 controle de teto orçamentário lançamentos de despesas operacionais que ultrapassem 100% do teto orçamentário parametrizado para o contrato demandam autorização formal com justificativa registrada. rf11 rf12 rf31 rf40 regra negocio dominio" data-search-text="rn13 bloqueio preventivo por extrapolação de teto orçamentário oe3 módulo 3 car-06 controle de teto orçamentário lançamentos de despesas operacionais que ultrapassem 100% do teto orçamentário parametrizado para o contrato demandam autorização formal com justificativa registrada. rf11 rf12 rf31 rf40 regra negocio dominio">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-pill-rn">
        <svg class="req-priority-flag req-rn-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        <span>Regra de Domínio</span>
      </span>
      <span class="req-pill req-pill-cat-rn">Controle de Teto Orçamentário</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RN13 — Bloqueio Preventivo por Extrapolação de Teto Orçamentário</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Módulo & OE</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato" class="req-lumio-tag req-tag-oe"># OE3 · Módulo 3 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Característica (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-06" class="req-lumio-tag req-tag-car"># CAR-06 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Executores (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf11" class="req-tag req-tag-rf"># RF11 · Filtrar indicadores de custos ↗</a> <a href="#rf12" class="req-tag req-tag-rf"># RF12 · Monitorar execução orçamentária ↗</a> <a href="#rf31" class="req-tag req-tag-rf"># RF31 · Configurar alertas de execução orçamentária ↗</a> <a href="#rf40" class="req-tag req-tag-rf"># RF40 · Definir tetos orçamentários de obra ↗</a>
        </div>
      </div>
    </div>

    <!-- Enunciado Oficial da Regra -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Enunciado Oficial e Condicionantes de Negócio</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Regra de Negócio:</strong> Lançamentos de despesas operacionais que ultrapassem 100% do teto orçamentário parametrizado para o contrato demandam autorização formal com justificativa registrada.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rn" id="rn14" data-type="rn" data-rn="RN14" data-oe="oe3" data-car="car-06" data-mvp="mvp" data-quad="q1" data-text="rn14 sigilo e não-exposição de remunerações individuais em painéis oe3 módulo 3 car-06 sigilo & privacidade salarial painéis analíticos acessíveis por gestores operacionais exibem montantes agregados de custos por contrato, ocultando remunerações e dados bancários individuais dos colaboradores. rf11 rf12 rf34 rf39 regra negocio dominio" data-search-text="rn14 sigilo e não-exposição de remunerações individuais em painéis oe3 módulo 3 car-06 sigilo & privacidade salarial painéis analíticos acessíveis por gestores operacionais exibem montantes agregados de custos por contrato, ocultando remunerações e dados bancários individuais dos colaboradores. rf11 rf12 rf34 rf39 regra negocio dominio">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-pill-rn">
        <svg class="req-priority-flag req-rn-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        <span>Regra de Domínio</span>
      </span>
      <span class="req-pill req-pill-cat-rn">Sigilo & Privacidade Salarial</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RN14 — Sigilo e Não-Exposição de Remunerações Individuais em Painéis</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Módulo & OE</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato" class="req-lumio-tag req-tag-oe"># OE3 · Módulo 3 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Característica (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-06" class="req-lumio-tag req-tag-car"># CAR-06 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Executores (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf11" class="req-tag req-tag-rf"># RF11 · Filtrar indicadores de custos ↗</a> <a href="#rf12" class="req-tag req-tag-rf"># RF12 · Monitorar execução orçamentária ↗</a> <a href="#rf34" class="req-tag req-tag-rf"># RF34 · Cadastrar centro de custo de obra ↗</a> <a href="#rf39" class="req-tag req-tag-rf"># RF39 · Atualizar centro de custo de obra ↗</a>
        </div>
      </div>
    </div>

    <!-- Enunciado Oficial da Regra -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Enunciado Oficial e Condicionantes de Negócio</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Regra de Negócio:</strong> Painéis analíticos acessíveis por gestores operacionais exibem montantes agregados de custos por contrato, ocultando remunerações e dados bancários individuais dos colaboradores.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rn" id="rn15" data-type="rn" data-rn="RN15" data-oe="oe4" data-car="car-07" data-mvp="mvp" data-quad="q1" data-text="rn15 autenticação por jwt com sessão temporal limitada oe4 módulo 4 car-07 segurança de autenticação tokens de autenticação jwt possuem validade máxima estrita de 8 horas, exigindo nova autenticação após expiração; links de ativação ou recuperação expiram em 30 minutos. rf13 rf17 rf18 regra negocio dominio" data-search-text="rn15 autenticação por jwt com sessão temporal limitada oe4 módulo 4 car-07 segurança de autenticação tokens de autenticação jwt possuem validade máxima estrita de 8 horas, exigindo nova autenticação após expiração; links de ativação ou recuperação expiram em 30 minutos. rf13 rf17 rf18 regra negocio dominio">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-pill-rn">
        <svg class="req-priority-flag req-rn-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        <span>Regra de Domínio</span>
      </span>
      <span class="req-pill req-pill-cat-rn">Segurança de Autenticação</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RN15 — Autenticação por JWT com Sessão Temporal Limitada</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Módulo & OE</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe4-garantir-seguranca-e-governanca-de-dados" class="req-lumio-tag req-tag-oe"># OE4 · Módulo 4 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Característica (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-07" class="req-lumio-tag req-tag-car"># CAR-07 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Executores (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf13" class="req-tag req-tag-rf"># RF13 · Efetuar login no sistema ↗</a> <a href="#rf17" class="req-tag req-tag-rf"># RF17 · Ativar acesso inicial e recuperar credenciais ↗</a> <a href="#rf18" class="req-tag req-tag-rf"># RF18 · Encerrar sessão manualmente ↗</a>
        </div>
      </div>
    </div>

    <!-- Enunciado Oficial da Regra -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Enunciado Oficial e Condicionantes de Negócio</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Regra de Negócio:</strong> Tokens de autenticação JWT possuem validade máxima estrita de 8 horas, exigindo nova autenticação após expiração; links de ativação ou recuperação expiram em 30 minutos.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rn" id="rn16" data-type="rn" data-rn="RN16" data-oe="oe4" data-car="car-07" data-mvp="mvp" data-quad="q1" data-text="rn16 princípio do menor privilégio e segregação de funções (sod) oe4 módulo 4 car-07 autorização rbac estrita cada perfil de usuário acessa estritamente os recursos indispensáveis à sua função; perfis operacionais de campo não possuem acesso a rotinas financeiras de homologação. rf14 regra negocio dominio" data-search-text="rn16 princípio do menor privilégio e segregação de funções (sod) oe4 módulo 4 car-07 autorização rbac estrita cada perfil de usuário acessa estritamente os recursos indispensáveis à sua função; perfis operacionais de campo não possuem acesso a rotinas financeiras de homologação. rf14 regra negocio dominio">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-pill-rn">
        <svg class="req-priority-flag req-rn-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        <span>Regra de Domínio</span>
      </span>
      <span class="req-pill req-pill-cat-rn">Autorização RBAC Estrita</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RN16 — Princípio do Menor Privilégio e Segregação de Funções (SoD)</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Módulo & OE</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe4-garantir-seguranca-e-governanca-de-dados" class="req-lumio-tag req-tag-oe"># OE4 · Módulo 4 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Característica (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-07" class="req-lumio-tag req-tag-car"># CAR-07 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Executores (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf14" class="req-tag req-tag-rf"># RF14 · Gerenciar perfis de acesso ↗</a>
        </div>
      </div>
    </div>

    <!-- Enunciado Oficial da Regra -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Enunciado Oficial e Condicionantes de Negócio</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Regra de Negócio:</strong> Cada perfil de usuário acessa estritamente os recursos indispensáveis à sua função; perfis operacionais de campo não possuem acesso a rotinas financeiras de homologação.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rn" id="rn17" data-type="rn" data-rn="RN17" data-oe="oe4" data-car="car-08" data-mvp="mvp" data-quad="q1" data-text="rn17 registro atômico de mutações em trilha de auditoria oe4 módulo 4 car-08 imutabilidade de trilha de auditoria toda mutação cadastral, financeira ou de aprovação gera registro síncrono e obrigatório em trilha de auditoria na mesma transação atômica do banco de dados. rf15 rf16 regra negocio dominio" data-search-text="rn17 registro atômico de mutações em trilha de auditoria oe4 módulo 4 car-08 imutabilidade de trilha de auditoria toda mutação cadastral, financeira ou de aprovação gera registro síncrono e obrigatório em trilha de auditoria na mesma transação atômica do banco de dados. rf15 rf16 regra negocio dominio">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-pill-rn">
        <svg class="req-priority-flag req-rn-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        <span>Regra de Domínio</span>
      </span>
      <span class="req-pill req-pill-cat-rn">Imutabilidade de Trilha de Auditoria</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RN17 — Registro Atômico de Mutações em Trilha de Auditoria</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Módulo & OE</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe4-garantir-seguranca-e-governanca-de-dados" class="req-lumio-tag req-tag-oe"># OE4 · Módulo 4 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Característica (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-08" class="req-lumio-tag req-tag-car"># CAR-08 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Executores (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf15" class="req-tag req-tag-rf"># RF15 · Consultar trilha de auditoria ↗</a> <a href="#rf16" class="req-tag req-tag-rf"># RF16 · Exportar relatório de auditoria ↗</a>
        </div>
      </div>
    </div>

    <!-- Enunciado Oficial da Regra -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Enunciado Oficial e Condicionantes de Negócio</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Regra de Negócio:</strong> Toda mutação cadastral, financeira ou de aprovação gera registro síncrono e obrigatório em trilha de auditoria na mesma transação atômica do banco de dados.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rn" id="rn18" data-type="rn" data-rn="RN18" data-oe="oe4" data-car="car-08" data-mvp="mvp" data-quad="q1" data-text="rn18 composição mínima obrigatória do registro de log de auditoria oe4 módulo 4 car-08 composição atômica de log utc cada log registra compulsoriamente: carimbo de data/hora em utc, identificador do usuário autor, endereço ip, entidade afetada, ação executada e snapshot de antes/depois dos dados. rf15 rf16 regra negocio dominio" data-search-text="rn18 composição mínima obrigatória do registro de log de auditoria oe4 módulo 4 car-08 composição atômica de log utc cada log registra compulsoriamente: carimbo de data/hora em utc, identificador do usuário autor, endereço ip, entidade afetada, ação executada e snapshot de antes/depois dos dados. rf15 rf16 regra negocio dominio">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-pill-rn">
        <svg class="req-priority-flag req-rn-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        <span>Regra de Domínio</span>
      </span>
      <span class="req-pill req-pill-cat-rn">Composição Atômica de Log UTC</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RN18 — Composição Mínima Obrigatória do Registro de Log de Auditoria</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Módulo & OE</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe4-garantir-seguranca-e-governanca-de-dados" class="req-lumio-tag req-tag-oe"># OE4 · Módulo 4 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Característica (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-08" class="req-lumio-tag req-tag-car"># CAR-08 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Executores (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf15" class="req-tag req-tag-rf"># RF15 · Consultar trilha de auditoria ↗</a> <a href="#rf16" class="req-tag req-tag-rf"># RF16 · Exportar relatório de auditoria ↗</a>
        </div>
      </div>
    </div>

    <!-- Enunciado Oficial da Regra -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Enunciado Oficial e Condicionantes de Negócio</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Regra de Negócio:</strong> Cada log registra compulsoriamente: carimbo de data/hora em UTC, identificador do usuário autor, endereço IP, entidade afetada, ação executada e snapshot de antes/depois dos dados.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rn" id="rn19" data-type="rn" data-rn="RN19" data-oe="oe4" data-car="car-08" data-mvp="mvp" data-quad="q1" data-text="rn19 política de retenção quinquenal de logs oe4 módulo 4 car-08 retenção quinquenal clt/lgpd os registros da trilha de auditoria são mantidos de forma íntegra por no mínimo 5 anos fiscais (1.825 dias), assegurando conformidade defensiva com o artigo 11 da clt e artigo 16 da lgpd. rf15 rf16 regra negocio dominio" data-search-text="rn19 política de retenção quinquenal de logs oe4 módulo 4 car-08 retenção quinquenal clt/lgpd os registros da trilha de auditoria são mantidos de forma íntegra por no mínimo 5 anos fiscais (1.825 dias), assegurando conformidade defensiva com o artigo 11 da clt e artigo 16 da lgpd. rf15 rf16 regra negocio dominio">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-pill-rn">
        <svg class="req-priority-flag req-rn-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        <span>Regra de Domínio</span>
      </span>
      <span class="req-pill req-pill-cat-rn">Retenção Quinquenal CLT/LGPD</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RN19 — Política de Retenção Quinquenal de Logs</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Módulo & OE</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe4-garantir-seguranca-e-governanca-de-dados" class="req-lumio-tag req-tag-oe"># OE4 · Módulo 4 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Característica (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-08" class="req-lumio-tag req-tag-car"># CAR-08 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Executores (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf15" class="req-tag req-tag-rf"># RF15 · Consultar trilha de auditoria ↗</a> <a href="#rf16" class="req-tag req-tag-rf"># RF16 · Exportar relatório de auditoria ↗</a>
        </div>
      </div>
    </div>

    <!-- Enunciado Oficial da Regra -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Enunciado Oficial e Condicionantes de Negócio</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Regra de Negócio:</strong> Os registros da trilha de auditoria são mantidos de forma íntegra por no mínimo 5 anos fiscais (1.825 dias), assegurando conformidade defensiva com o Artigo 11 da CLT e Artigo 16 da LGPD.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rn" id="rn20" data-type="rn" data-rn="RN20" data-oe="oe4" data-car="car-07" data-mvp="mvp" data-quad="q1" data-text="rn20 limite de tentativas de autenticação oe4 módulo 4 car-07 proteção anti-brute force o acúmulo de 5 tentativas consecutivas de login incorretas em uma janela de 15 minutos bloqueia temporariamente a conta corporativa por 30 minutos. rf23 regra negocio dominio" data-search-text="rn20 limite de tentativas de autenticação oe4 módulo 4 car-07 proteção anti-brute force o acúmulo de 5 tentativas consecutivas de login incorretas em uma janela de 15 minutos bloqueia temporariamente a conta corporativa por 30 minutos. rf23 regra negocio dominio">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-pill-rn">
        <svg class="req-priority-flag req-rn-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        <span>Regra de Domínio</span>
      </span>
      <span class="req-pill req-pill-cat-rn">Proteção Anti-Brute Force</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RN20 — Limite de Tentativas de Autenticação</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Módulo & OE</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe4-garantir-seguranca-e-governanca-de-dados" class="req-lumio-tag req-tag-oe"># OE4 · Módulo 4 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Característica (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-07" class="req-lumio-tag req-tag-car"># CAR-07 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Executores (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf23" class="req-tag req-tag-rf"># RF23 · Bloquear acesso após tentativas falhas consecutivas ↗</a>
        </div>
      </div>
    </div>

    <!-- Enunciado Oficial da Regra -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Enunciado Oficial e Condicionantes de Negócio</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Regra de Negócio:</strong> O acúmulo de 5 tentativas consecutivas de login incorretas em uma janela de 15 minutos bloqueia temporariamente a conta corporativa por 30 minutos.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rn" id="rn21" data-type="rn" data-rn="RN21" data-oe="oe4" data-car="car-07" data-mvp="mvp" data-quad="q1" data-text="rn21 política de expiração e histórico de senhas oe4 módulo 4 car-07 política de senhas & histórico credenciais de acesso possuem validade máxima de 90 dias, exigindo redefinição mandatória e impedindo a reutilização de qualquer uma das últimas 5 senhas adotadas. rf24 regra negocio dominio" data-search-text="rn21 política de expiração e histórico de senhas oe4 módulo 4 car-07 política de senhas & histórico credenciais de acesso possuem validade máxima de 90 dias, exigindo redefinição mandatória e impedindo a reutilização de qualquer uma das últimas 5 senhas adotadas. rf24 regra negocio dominio">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-pill-rn">
        <svg class="req-priority-flag req-rn-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        <span>Regra de Domínio</span>
      </span>
      <span class="req-pill req-pill-cat-rn">Política de Senhas & Histórico</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RN21 — Política de Expiração e Histórico de Senhas</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Módulo & OE</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe4-garantir-seguranca-e-governanca-de-dados" class="req-lumio-tag req-tag-oe"># OE4 · Módulo 4 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Característica (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-07" class="req-lumio-tag req-tag-car"># CAR-07 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Executores (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf24" class="req-tag req-tag-rf"># RF24 · Impor renovação periódica de senhas ↗</a>
        </div>
      </div>
    </div>

    <!-- Enunciado Oficial da Regra -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Enunciado Oficial e Condicionantes de Negócio</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Regra de Negócio:</strong> Credenciais de acesso possuem validade máxima de 90 dias, exigindo redefinição mandatória e impedindo a reutilização de qualquer uma das últimas 5 senhas adotadas.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rn" id="rn22" data-type="rn" data-rn="RN22" data-oe="oe1" data-car="car-01" data-mvp="mvp" data-quad="q1" data-text="rn22 tipos de contratação válidos oe1 módulo 1 car-01 enquadramento contratual o sistema restringe o vínculo de contratação às opções diarista, clt ou prestador de serviço (pj), aplicando regras específicas de apuração de diárias e rateio para cada categoria. rf01 rf25 regra negocio dominio" data-search-text="rn22 tipos de contratação válidos oe1 módulo 1 car-01 enquadramento contratual o sistema restringe o vínculo de contratação às opções diarista, clt ou prestador de serviço (pj), aplicando regras específicas de apuração de diárias e rateio para cada categoria. rf01 rf25 regra negocio dominio">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-pill-rn">
        <svg class="req-priority-flag req-rn-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        <span>Regra de Domínio</span>
      </span>
      <span class="req-pill req-pill-cat-rn">Enquadramento Contratual</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RN22 — Tipos de Contratação Válidos</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Módulo & OE</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe1-padronizar-e-unificar-os-dados" class="req-lumio-tag req-tag-oe"># OE1 · Módulo 1 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Característica (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-01" class="req-lumio-tag req-tag-car"># CAR-01 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Executores (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf01" class="req-tag req-tag-rf"># RF01 · Cadastrar colaborador ↗</a> <a href="#rf25" class="req-tag req-tag-rf"># RF25 · Cadastrar tipo de contratação do colaborador ↗</a>
        </div>
      </div>
    </div>

    <!-- Enunciado Oficial da Regra -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Enunciado Oficial e Condicionantes de Negócio</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Regra de Negócio:</strong> O sistema restringe o vínculo de contratação às opções Diarista, CLT ou Prestador de Serviço (PJ), aplicando regras específicas de apuração de diárias e rateio para cada categoria.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rn" id="rn23" data-type="rn" data-rn="RN23" data-oe="oe1" data-car="car-01" data-mvp="mvp" data-quad="q1" data-text="rn23 versionamento obrigatório de dados cadastrais e bancários oe1 módulo 1 car-01 versionamento cadastral alterações em campos de dados pessoais, bancários ou funcionais geram novo snapshot na tabela histórica com carimbo temporal utc e identificador do autor, sem sobrescrever valores anteriores. rf02 rf26 regra negocio dominio" data-search-text="rn23 versionamento obrigatório de dados cadastrais e bancários oe1 módulo 1 car-01 versionamento cadastral alterações em campos de dados pessoais, bancários ou funcionais geram novo snapshot na tabela histórica com carimbo temporal utc e identificador do autor, sem sobrescrever valores anteriores. rf02 rf26 regra negocio dominio">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-pill-rn">
        <svg class="req-priority-flag req-rn-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        <span>Regra de Domínio</span>
      </span>
      <span class="req-pill req-pill-cat-rn">Versionamento Cadastral</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RN23 — Versionamento Obrigatório de Dados Cadastrais e Bancários</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Módulo & OE</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe1-padronizar-e-unificar-os-dados" class="req-lumio-tag req-tag-oe"># OE1 · Módulo 1 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Característica (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-01" class="req-lumio-tag req-tag-car"># CAR-01 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Executores (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf02" class="req-tag req-tag-rf"># RF02 · Atualizar cadastro de colaborador ↗</a> <a href="#rf26" class="req-tag req-tag-rf"># RF26 · Consultar histórico de alterações cadastrais e bancárias ↗</a>
        </div>
      </div>
    </div>

    <!-- Enunciado Oficial da Regra -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Enunciado Oficial e Condicionantes de Negócio</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Regra de Negócio:</strong> Alterações em campos de dados pessoais, bancários ou funcionais geram novo snapshot na tabela histórica com carimbo temporal UTC e identificador do autor, sem sobrescrever valores anteriores.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rn" id="rn24" data-type="rn" data-rn="RN24" data-oe="oe1" data-car="car-02" data-mvp="mvp" data-quad="q1" data-text="rn24 captura de geolocalização não bloqueante oe1 módulo 1 car-02 geolocalização resiliente o sistema tenta capturar coordenadas geográficas no momento do anexo de evidências; caso a permissão seja negada ou o sinal gps indisponível, o anexo prossegue normalmente com a sinalização correspondente. rf04 rf22 regra negocio dominio" data-search-text="rn24 captura de geolocalização não bloqueante oe1 módulo 1 car-02 geolocalização resiliente o sistema tenta capturar coordenadas geográficas no momento do anexo de evidências; caso a permissão seja negada ou o sinal gps indisponível, o anexo prossegue normalmente com a sinalização correspondente. rf04 rf22 regra negocio dominio">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-pill-rn">
        <svg class="req-priority-flag req-rn-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        <span>Regra de Domínio</span>
      </span>
      <span class="req-pill req-pill-cat-rn">Geolocalização Resiliente</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RN24 — Captura de Geolocalização Não Bloqueante</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Módulo & OE</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe1-padronizar-e-unificar-os-dados" class="req-lumio-tag req-tag-oe"># OE1 · Módulo 1 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Característica (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-02" class="req-lumio-tag req-tag-car"># CAR-02 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Executores (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf04" class="req-tag req-tag-rf"># RF04 · Submeter apontamento de campo ↗</a> <a href="#rf22" class="req-tag req-tag-rf"># RF22 · Anexar evidências e geolocalização ao apontamento ↗</a>
        </div>
      </div>
    </div>

    <!-- Enunciado Oficial da Regra -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Enunciado Oficial e Condicionantes de Negócio</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Regra de Negócio:</strong> O sistema tenta capturar coordenadas geográficas no momento do anexo de evidências; caso a permissão seja negada ou o sinal GPS indisponível, o anexo prossegue normalmente com a sinalização correspondente.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rn" id="rn25" data-type="rn" data-rn="RN25" data-oe="oe2" data-car="car-03" data-mvp="mvp" data-quad="q1" data-text="rn25 vigência dos valores de diárias técnicas oe2 módulo 2 car-03 tabela de diárias vigente o cálculo de prévia e fechamento utiliza estritamente os valores nominais de diárias técnicas vigentes na competência de realização da atividade de campo. rf05 rf27 regra negocio dominio" data-search-text="rn25 vigência dos valores de diárias técnicas oe2 módulo 2 car-03 tabela de diárias vigente o cálculo de prévia e fechamento utiliza estritamente os valores nominais de diárias técnicas vigentes na competência de realização da atividade de campo. rf05 rf27 regra negocio dominio">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-pill-rn">
        <svg class="req-priority-flag req-rn-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        <span>Regra de Domínio</span>
      </span>
      <span class="req-pill req-pill-cat-rn">Tabela de Diárias Vigente</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RN25 — Vigência dos Valores de Diárias Técnicas</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Módulo & OE</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe2-aumentar-a-eficiencia-administrativo-financeira" class="req-lumio-tag req-tag-oe"># OE2 · Módulo 2 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Característica (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-03" class="req-lumio-tag req-tag-car"># CAR-03 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Executores (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf05" class="req-tag req-tag-rf"># RF05 · Solicitar prévia de fechamento ↗</a> <a href="#rf27" class="req-tag req-tag-rf"># RF27 · Configurar tabela de valores de diárias técnicas ↗</a>
        </div>
      </div>
    </div>

    <!-- Enunciado Oficial da Regra -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Enunciado Oficial e Condicionantes de Negócio</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Regra de Negócio:</strong> O cálculo de prévia e fechamento utiliza estritamente os valores nominais de diárias técnicas vigentes na competência de realização da atividade de campo.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rn" id="rn26" data-type="rn" data-rn="RN26" data-oe="oe2" data-car="car-04" data-mvp="mvp" data-quad="q1" data-text="rn26 elegibilidade do adiantamento operacional oe2 módulo 2 car-04 elegibilidade de adiantamento a solicitação de adiantamento operacional é restrita a colaboradores alocados em contratos ativos e demanda justificativa de aplicação dos recursos. rf28 regra negocio dominio" data-search-text="rn26 elegibilidade do adiantamento operacional oe2 módulo 2 car-04 elegibilidade de adiantamento a solicitação de adiantamento operacional é restrita a colaboradores alocados em contratos ativos e demanda justificativa de aplicação dos recursos. rf28 regra negocio dominio">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-pill-rn">
        <svg class="req-priority-flag req-rn-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        <span>Regra de Domínio</span>
      </span>
      <span class="req-pill req-pill-cat-rn">Elegibilidade de Adiantamento</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RN26 — Elegibilidade do Adiantamento Operacional</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Módulo & OE</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe2-aumentar-a-eficiencia-administrativo-financeira" class="req-lumio-tag req-tag-oe"># OE2 · Módulo 2 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Característica (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-04" class="req-lumio-tag req-tag-car"># CAR-04 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Executores (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf28" class="req-tag req-tag-rf"># RF28 · Submeter solicitação de adiantamento operacional ↗</a>
        </div>
      </div>
    </div>

    <!-- Enunciado Oficial da Regra -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Enunciado Oficial e Condicionantes de Negócio</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Regra de Negócio:</strong> A solicitação de adiantamento operacional é restrita a colaboradores alocados em contratos ativos e demanda justificativa de aplicação dos recursos.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rn" id="rn27" data-type="rn" data-rn="RN27" data-oe="oe2" data-car="car-04" data-mvp="mvp" data-quad="q1" data-text="rn27 notificação de pendências financeiras oe2 módulo 2 car-04 mensageria & notificação a decisão de homologação ou recusa em solicitações de reembolso e adiantamento dispara notificação automática de status para o colaborador solicitante. rf08 rf29 regra negocio dominio" data-search-text="rn27 notificação de pendências financeiras oe2 módulo 2 car-04 mensageria & notificação a decisão de homologação ou recusa em solicitações de reembolso e adiantamento dispara notificação automática de status para o colaborador solicitante. rf08 rf29 regra negocio dominio">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-pill-rn">
        <svg class="req-priority-flag req-rn-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        <span>Regra de Domínio</span>
      </span>
      <span class="req-pill req-pill-cat-rn">Mensageria & Notificação</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RN27 — Notificação de Pendências Financeiras</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Módulo & OE</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe2-aumentar-a-eficiencia-administrativo-financeira" class="req-lumio-tag req-tag-oe"># OE2 · Módulo 2 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Característica (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-04" class="req-lumio-tag req-tag-car"># CAR-04 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Executores (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf08" class="req-tag req-tag-rf"># RF08 · Deliberar solicitação de reembolso ↗</a> <a href="#rf29" class="req-tag req-tag-rf"># RF29 · Deliberar solicitação de adiantamento operacional ↗</a>
        </div>
      </div>
    </div>

    <!-- Enunciado Oficial da Regra -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Enunciado Oficial e Condicionantes de Negócio</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Regra de Negócio:</strong> A decisão de homologação ou recusa em solicitações de reembolso e adiantamento dispara notificação automática de status para o colaborador solicitante.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rn" id="rn28" data-type="rn" data-rn="RN28" data-oe="oe3" data-car="car-05" data-mvp="mvp" data-quad="q1" data-text="rn28 comparativo histórico de custos oe3 módulo 3 car-05 base histórica de custos análises comparativas de despesas históricas consolidam dados de contratos com ao menos um fechamento financeiro previamente homologado. rf30 regra negocio dominio" data-search-text="rn28 comparativo histórico de custos oe3 módulo 3 car-05 base histórica de custos análises comparativas de despesas históricas consolidam dados de contratos com ao menos um fechamento financeiro previamente homologado. rf30 regra negocio dominio">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-pill-rn">
        <svg class="req-priority-flag req-rn-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        <span>Regra de Domínio</span>
      </span>
      <span class="req-pill req-pill-cat-rn">Base Histórica de Custos</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RN28 — Comparativo Histórico de Custos</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Módulo & OE</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato" class="req-lumio-tag req-tag-oe"># OE3 · Módulo 3 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Característica (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-05" class="req-lumio-tag req-tag-car"># CAR-05 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Executores (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf30" class="req-tag req-tag-rf"># RF30 · Consultar comparativo histórico de custos entre contratos ↗</a>
        </div>
      </div>
    </div>

    <!-- Enunciado Oficial da Regra -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Enunciado Oficial e Condicionantes de Negócio</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Regra de Negócio:</strong> Análises comparativas de despesas históricas consolidam dados de contratos com ao menos um fechamento financeiro previamente homologado.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rn" id="rn29" data-type="rn" data-rn="RN29" data-oe="oe3" data-car="car-06" data-mvp="mvp" data-quad="q1" data-text="rn29 disparo de alertas preventivos de extrapolação orçamentária oe3 módulo 3 car-06 alertas preventivos de desvio quando o montante de custos apropriados a uma categoria atinge o limiar percentual parametrizado pelo gestor, o sistema emite avisos visuais no painel e alertas por e-mail. rf31 rf40 regra negocio dominio" data-search-text="rn29 disparo de alertas preventivos de extrapolação orçamentária oe3 módulo 3 car-06 alertas preventivos de desvio quando o montante de custos apropriados a uma categoria atinge o limiar percentual parametrizado pelo gestor, o sistema emite avisos visuais no painel e alertas por e-mail. rf31 rf40 regra negocio dominio">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-pill-rn">
        <svg class="req-priority-flag req-rn-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        <span>Regra de Domínio</span>
      </span>
      <span class="req-pill req-pill-cat-rn">Alertas Preventivos de Desvio</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RN29 — Disparo de Alertas Preventivos de Extrapolação Orçamentária</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Módulo & OE</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato" class="req-lumio-tag req-tag-oe"># OE3 · Módulo 3 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Característica (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-06" class="req-lumio-tag req-tag-car"># CAR-06 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Executores (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf31" class="req-tag req-tag-rf"># RF31 · Configurar alertas de execução orçamentária ↗</a> <a href="#rf40" class="req-tag req-tag-rf"># RF40 · Definir tetos orçamentários de obra ↗</a>
        </div>
      </div>
    </div>

    <!-- Enunciado Oficial da Regra -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Enunciado Oficial e Condicionantes de Negócio</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Regra de Negócio:</strong> Quando o montante de custos apropriados a uma categoria atinge o limiar percentual parametrizado pelo gestor, o sistema emite avisos visuais no painel e alertas por e-mail.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rn" id="rn30" data-type="rn" data-rn="RN30" data-oe="oe1" data-car="car-02" data-mvp="mvp" data-quad="q1" data-text="rn30 justificativa obrigatória e bloqueio na deliberação de apontamentos oe1 módulo 1 car-02 justificativa obrigatória & bloqueio o gestor operacional de obras deve registrar compulsoriamente parecer justificatório com no mínimo 15 caracteres ao rejeitar um apontamento de campo. a aprovação transiciona o status para 'homologado' e bloqueia compulsoriamente a edição do registro pelo colaborador (rn02), habilitando-o para as rotinas financeiras (rn05). rf19 rf32 rf35 regra negocio dominio" data-search-text="rn30 justificativa obrigatória e bloqueio na deliberação de apontamentos oe1 módulo 1 car-02 justificativa obrigatória & bloqueio o gestor operacional de obras deve registrar compulsoriamente parecer justificatório com no mínimo 15 caracteres ao rejeitar um apontamento de campo. a aprovação transiciona o status para 'homologado' e bloqueia compulsoriamente a edição do registro pelo colaborador (rn02), habilitando-o para as rotinas financeiras (rn05). rf19 rf32 rf35 regra negocio dominio">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-pill-rn">
        <svg class="req-priority-flag req-rn-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        <span>Regra de Domínio</span>
      </span>
      <span class="req-pill req-pill-cat-rn">Justificativa Obrigatória & Bloqueio</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RN30 — Justificativa Obrigatória e Bloqueio na Deliberação de Apontamentos</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Módulo & OE</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe1-padronizar-e-unificar-os-dados" class="req-lumio-tag req-tag-oe"># OE1 · Módulo 1 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Característica (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-02" class="req-lumio-tag req-tag-car"># CAR-02 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Executores (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf19" class="req-tag req-tag-rf"># RF19 · Consultar apontamentos registrados ↗</a> <a href="#rf32" class="req-tag req-tag-rf"># RF32 · Deliberar apontamento de campo ↗</a> <a href="#rf35" class="req-tag req-tag-rf"># RF35 · Retificar apontamento de campo ↗</a>
        </div>
      </div>
    </div>

    <!-- Enunciado Oficial da Regra -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Enunciado Oficial e Condicionantes de Negócio</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Regra de Negócio:</strong> O Gestor Operacional de Obras deve registrar compulsoriamente parecer justificatório com no mínimo 15 caracteres ao rejeitar um apontamento de campo. A aprovação transiciona o status para 'Homologado' e bloqueia compulsoriamente a edição do registro pelo colaborador (RN02), habilitando-o para as rotinas financeiras (RN05).</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rn" id="rn31" data-type="rn" data-rn="RN31" data-oe="oe2" data-car="car-03" data-mvp="mvp" data-quad="q1" data-text="rn31 parametrização e fórmulas de diárias e comissões técnicas de campo oe2 módulo 2 car-03 fórmula paramétrica de remuneração a apuração de remuneração variável de campo combina a quantidade de diárias homologadas multiplicadas pelo valor vigente com os percentuais de comissão pactuados por contrato. rf05 rf27 regra negocio dominio" data-search-text="rn31 parametrização e fórmulas de diárias e comissões técnicas de campo oe2 módulo 2 car-03 fórmula paramétrica de remuneração a apuração de remuneração variável de campo combina a quantidade de diárias homologadas multiplicadas pelo valor vigente com os percentuais de comissão pactuados por contrato. rf05 rf27 regra negocio dominio">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-priority req-pill-rn">
        <svg class="req-priority-flag req-rn-flag" viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
        <span>Regra de Domínio</span>
      </span>
      <span class="req-pill req-pill-cat-rn">Fórmula Paramétrica de Remuneração</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RN31 — Parametrização e Fórmulas de Diárias e Comissões Técnicas de Campo</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>Módulo & OE</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#oe2-aumentar-a-eficiencia-administrativo-financeira" class="req-lumio-tag req-tag-oe"># OE2 · Módulo 2 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>
          <span>Característica (CAR)</span>
        </span>
        <div class="req-lumio-val">
          <a href="../visao-produto/solucao-proposta/#car-03" class="req-lumio-tag req-tag-car"># CAR-03 ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Executores (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf05" class="req-tag req-tag-rf"># RF05 · Solicitar prévia de fechamento ↗</a> <a href="#rf27" class="req-tag req-tag-rf"># RF27 · Configurar tabela de valores de diárias técnicas ↗</a>
        </div>
      </div>
    </div>

    <!-- Enunciado Oficial da Regra -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Enunciado Oficial e Condicionantes de Negócio</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Regra de Negócio:</strong> A apuração de remuneração variável de campo combina a quantidade de diárias homologadas multiplicadas pelo valor vigente com os percentuais de comissão pactuados por contrato.</p>
      </div>
    </div>
  </div>
</details>

---

<a id="catalogo-nao-funcionais"></a>
<a id="catalogo-de-requisitos-nao-funcionais"></a>
## Catálogo de Requisitos Não Funcionais (RNF01 a RNF20)

Os **20 Requisitos Não Funcionais (RNF01 a RNF20)** especificam os atributos de qualidade sistêmica e restrições de arquitetura do ***DUOC Finance***, classificados simultaneamente pelo modelo **URPS+** e pela taxonomia de **Sommerville**:

<a id="rnfs-transversais"></a>
!!! info "Pacote Transversal de Atributos de Qualidade (T)"
    Os requisitos **RNF03** (Criptografia AES-256 / TLS 1.3), **RNF14** (Autorização RBAC em 100% dos endpoints), **RNF15** (Consistência e Atomicidade de Logs), **RNF16** (Retenção Quinquenal CLT Art. 11), **RNF17** (Rotina de Backup Diário), **RNF18** (Disponibilidade ≥ 99,5%), **RNF19** (Acessibilidade WCAG 2.1 AA) e **RNF20** (Validação de Schema em Escritas) compõem o **Pacote Transversal (T)** obrigatório, aplicando-se de forma pervasiva a todas as telas, rotinas e histórias de usuário do produto.

<details class="req-card req-card-rnf" id="rnf01" data-type="rnf" data-rnf="RNF01" data-oe="oe1" data-mvp="pos-mvp" data-quad="q3" data-text="rnf01 operar em modo offline para coleta de dados em canteiros sem conectividade urps+ confiabilidade produto — confiabilidade módulo 1 / oe1 a aplicação web responsiva (web app / pwa) em dispositivo móvel deve armazenar localmente, sem perda de dados, no mínimo 100 apontamentos com fotos compactadas sem sinal de rede; exibir alerta visual quando o armazenamento local atingir 80% da capacidade; e sincronizar automaticamente em até 30 segundos após restabelecida a conexão. rf04 rf19 rf22 rf32 rf35 requisito nao funcional atributo qualidade dod" data-search-text="rnf01 operar em modo offline para coleta de dados em canteiros sem conectividade urps+ confiabilidade produto — confiabilidade módulo 1 / oe1 a aplicação web responsiva (web app / pwa) em dispositivo móvel deve armazenar localmente, sem perda de dados, no mínimo 100 apontamentos com fotos compactadas sem sinal de rede; exibir alerta visual quando o armazenamento local atingir 80% da capacidade; e sincronizar automaticamente em até 30 segundos após restabelecida a conexão. rf04 rf19 rf22 rf32 rf35 requisito nao funcional atributo qualidade dod">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-scope">Módulo 1 / OE1</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RNF01 — Operar em modo offline para coleta de dados em canteiros sem conectividade</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          <span>Classificação URPS+</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-urps">URPS+ Confiabilidade</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          <span>Taxonomia Sommerville</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-sommerville">Produto — Confiabilidade</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Cobertos (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf04" class="req-tag req-tag-rf"># RF04 · Submeter apontamento de campo ↗</a> <a href="#rf19" class="req-tag req-tag-rf"># RF19 · Consultar apontamentos registrados ↗</a> <a href="#rf22" class="req-tag req-tag-rf"># RF22 · Anexar evidências e geolocalização ao apontamento ↗</a> <a href="#rf32" class="req-tag req-tag-rf"># RF32 · Deliberar apontamento de campo ↗</a> <a href="#rf35" class="req-tag req-tag-rf"># RF35 · Retificar apontamento de campo ↗</a>
        </div>
      </div>
    </div>

    <!-- Métrica Técnica -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Critério Mensurável Objetivo e Métrica de Aceitação (DoD)</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Métrica Técnica:</strong> A aplicação web responsiva (Web App / PWA) em dispositivo móvel deve armazenar localmente, sem perda de dados, no mínimo 100 apontamentos com fotos compactadas sem sinal de rede; exibir alerta visual quando o armazenamento local atingir 80% da capacidade; e sincronizar automaticamente em até 30 segundos após restabelecida a conexão.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rnf" id="rnf02" data-type="rnf" data-rnf="RNF02" data-oe="oe1" data-mvp="mvp" data-quad="q1" data-text="rnf02 garantir tempo de resposta para consulta cadastral inferior a 2,0 segundos urps+ desempenho produto — desempenho módulo 1 / oe1 o tempo de resposta para busca, paginação e renderização da ficha unificada de qualquer colaborador deve ser inferior ou igual a 2,0 segundos em 95% das requisições sob carga nominal (concorrência típica de até 50 usuários simultâneos autenticados a 10 req/s). rf01 rf02 rf03 rf20 rf25 rf26 rf36 requisito nao funcional atributo qualidade dod" data-search-text="rnf02 garantir tempo de resposta para consulta cadastral inferior a 2,0 segundos urps+ desempenho produto — desempenho módulo 1 / oe1 o tempo de resposta para busca, paginação e renderização da ficha unificada de qualquer colaborador deve ser inferior ou igual a 2,0 segundos em 95% das requisições sob carga nominal (concorrência típica de até 50 usuários simultâneos autenticados a 10 req/s). rf01 rf02 rf03 rf20 rf25 rf26 rf36 requisito nao funcional atributo qualidade dod">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-scope">Módulo 1 / OE1</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RNF02 — Garantir tempo de resposta para consulta cadastral inferior a 2,0 segundos</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          <span>Classificação URPS+</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-urps">URPS+ Desempenho</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          <span>Taxonomia Sommerville</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-sommerville">Produto — Desempenho</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Cobertos (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf01" class="req-tag req-tag-rf"># RF01 · Cadastrar colaborador ↗</a> <a href="#rf02" class="req-tag req-tag-rf"># RF02 · Atualizar cadastro de colaborador ↗</a> <a href="#rf03" class="req-tag req-tag-rf"># RF03 · Registrar movimentação funcional ↗</a> <a href="#rf20" class="req-tag req-tag-rf"># RF20 · Importar presenças homologadas ↗</a> <a href="#rf25" class="req-tag req-tag-rf"># RF25 · Cadastrar tipo de contratação do colaborador ↗</a> <a href="#rf26" class="req-tag req-tag-rf"># RF26 · Consultar histórico de alterações cadastrais e bancárias ↗</a> <a href="#rf36" class="req-tag req-tag-rf"># RF36 · Exportar dados consolidados em planilha ↗</a>
        </div>
      </div>
    </div>

    <!-- Métrica Técnica -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Critério Mensurável Objetivo e Métrica de Aceitação (DoD)</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Métrica Técnica:</strong> O tempo de resposta para busca, paginação e renderização da ficha unificada de qualquer colaborador deve ser inferior ou igual a 2,0 segundos em 95% das requisições sob carga nominal (concorrência típica de até 50 usuários simultâneos autenticados a 10 req/s).</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rnf" id="rnf03" data-type="rnf" data-rnf="RNF03" data-oe="transversal" data-mvp="mvp" data-quad="q1" data-text="rnf03 proteger dados pessoais e cadastrais com criptografia em repouso e em trânsito urps+ segurança (+) produto — segurança transversal (t) / oe1 100% dos dados pessoais e cadastrais confidenciais (cpf, dados de conta bancária, chave pix e remuneração) armazenados em banco devem utilizar criptografia aes-256 em repouso, e 100% das comunicações de rede devem transitar sob protocolo tls 1.3 (em conformidade com o princípio de segurança do art. 6º, vii da lgpd). rf01 rf02 rf03 rf13 rf23 requisito nao funcional atributo qualidade dod" data-search-text="rnf03 proteger dados pessoais e cadastrais com criptografia em repouso e em trânsito urps+ segurança (+) produto — segurança transversal (t) / oe1 100% dos dados pessoais e cadastrais confidenciais (cpf, dados de conta bancária, chave pix e remuneração) armazenados em banco devem utilizar criptografia aes-256 em repouso, e 100% das comunicações de rede devem transitar sob protocolo tls 1.3 (em conformidade com o princípio de segurança do art. 6º, vii da lgpd). rf01 rf02 rf03 rf13 rf23 requisito nao funcional atributo qualidade dod">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-transversal">Pacote Transversal (T)</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RNF03 — Proteger dados pessoais e cadastrais com criptografia em repouso e em trânsito</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          <span>Classificação URPS+</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-urps">URPS+ Segurança (+)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          <span>Taxonomia Sommerville</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-sommerville">Produto — Segurança</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Cobertos (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf01" class="req-tag req-tag-rf"># RF01 · Cadastrar colaborador ↗</a> <a href="#rf02" class="req-tag req-tag-rf"># RF02 · Atualizar cadastro de colaborador ↗</a> <a href="#rf03" class="req-tag req-tag-rf"># RF03 · Registrar movimentação funcional ↗</a> <a href="#rf13" class="req-tag req-tag-rf"># RF13 · Efetuar login no sistema ↗</a> <a href="#rf23" class="req-tag req-tag-rf"># RF23 · Bloquear acesso após tentativas falhas consecutivas ↗</a>
        </div>
      </div>
    </div>

    <!-- Métrica Técnica -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Critério Mensurável Objetivo e Métrica de Aceitação (DoD)</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Métrica Técnica:</strong> 100% dos dados pessoais e cadastrais confidenciais (CPF, dados de conta bancária, chave Pix e remuneração) armazenados em banco devem utilizar criptografia AES-256 em repouso, e 100% das comunicações de rede devem transitar sob protocolo TLS 1.3 (em conformidade com o princípio de segurança do Art. 6º, VII da LGPD).</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rnf" id="rnf04" data-type="rnf" data-rnf="RNF04" data-oe="oe1" data-mvp="mvp" data-quad="q1" data-text="rnf04 garantir usabilidade e agilidade no preenchimento de apontamentos de campo urps+ usabilidade produto — usabilidade módulo 1 / oe1 o preenchimento completo de um apontamento diário de campo deve ser concluído por usuários em primeiro uso, sem suporte externo ou treinamento prévio, em no máximo 5 passos/telas, com taxa de conclusão bem-sucedida ≥ 90% em teste de usabilidade. rf04 rf19 rf22 rf32 rf35 requisito nao funcional atributo qualidade dod" data-search-text="rnf04 garantir usabilidade e agilidade no preenchimento de apontamentos de campo urps+ usabilidade produto — usabilidade módulo 1 / oe1 o preenchimento completo de um apontamento diário de campo deve ser concluído por usuários em primeiro uso, sem suporte externo ou treinamento prévio, em no máximo 5 passos/telas, com taxa de conclusão bem-sucedida ≥ 90% em teste de usabilidade. rf04 rf19 rf22 rf32 rf35 requisito nao funcional atributo qualidade dod">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-scope">Módulo 1 / OE1</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RNF04 — Garantir usabilidade e agilidade no preenchimento de apontamentos de campo</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          <span>Classificação URPS+</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-urps">URPS+ Usabilidade</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          <span>Taxonomia Sommerville</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-sommerville">Produto — Usabilidade</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Cobertos (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf04" class="req-tag req-tag-rf"># RF04 · Submeter apontamento de campo ↗</a> <a href="#rf19" class="req-tag req-tag-rf"># RF19 · Consultar apontamentos registrados ↗</a> <a href="#rf22" class="req-tag req-tag-rf"># RF22 · Anexar evidências e geolocalização ao apontamento ↗</a> <a href="#rf32" class="req-tag req-tag-rf"># RF32 · Deliberar apontamento de campo ↗</a> <a href="#rf35" class="req-tag req-tag-rf"># RF35 · Retificar apontamento de campo ↗</a>
        </div>
      </div>
    </div>

    <!-- Métrica Técnica -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Critério Mensurável Objetivo e Métrica de Aceitação (DoD)</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Métrica Técnica:</strong> O preenchimento completo de um apontamento diário de campo deve ser concluído por usuários em primeiro uso, sem suporte externo ou treinamento prévio, em no máximo 5 passos/telas, com taxa de conclusão bem-sucedida ≥ 90% em teste de usabilidade.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rnf" id="rnf05" data-type="rnf" data-rnf="RNF05" data-oe="oe2" data-mvp="mvp" data-quad="q1" data-text="rnf05 processar rotina de fechamento financeiro em até 5,0 segundos urps+ desempenho produto — desempenho módulo 2 / oe2 o cálculo consolidado da prévia ou homologação da competência de fechamento contendo até 500 apontamentos e 200 despesas deve ser concluído pelo backend em tempo inferior ou igual a 5,0 segundos em 95% das execuções sob carga nominal. rf05 rf06 rf21 rf27 requisito nao funcional atributo qualidade dod" data-search-text="rnf05 processar rotina de fechamento financeiro em até 5,0 segundos urps+ desempenho produto — desempenho módulo 2 / oe2 o cálculo consolidado da prévia ou homologação da competência de fechamento contendo até 500 apontamentos e 200 despesas deve ser concluído pelo backend em tempo inferior ou igual a 5,0 segundos em 95% das execuções sob carga nominal. rf05 rf06 rf21 rf27 requisito nao funcional atributo qualidade dod">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-scope">Módulo 2 / OE2</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RNF05 — Processar rotina de fechamento financeiro em até 5,0 segundos</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          <span>Classificação URPS+</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-urps">URPS+ Desempenho</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          <span>Taxonomia Sommerville</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-sommerville">Produto — Desempenho</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Cobertos (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf05" class="req-tag req-tag-rf"># RF05 · Solicitar prévia de fechamento ↗</a> <a href="#rf06" class="req-tag req-tag-rf"># RF06 · Homologar fechamento financeiro ↗</a> <a href="#rf21" class="req-tag req-tag-rf"># RF21 · Estornar fechamento financeiro ↗</a> <a href="#rf27" class="req-tag req-tag-rf"># RF27 · Configurar tabela de valores de diárias técnicas ↗</a>
        </div>
      </div>
    </div>

    <!-- Métrica Técnica -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Critério Mensurável Objetivo e Métrica de Aceitação (DoD)</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Métrica Técnica:</strong> O cálculo consolidado da prévia ou homologação da competência de fechamento contendo até 500 apontamentos e 200 despesas deve ser concluído pelo backend em tempo inferior ou igual a 5,0 segundos em 95% das execuções sob carga nominal.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rnf" id="rnf06" data-type="rnf" data-rnf="RNF06" data-oe="oe2" data-mvp="mvp" data-quad="q1" data-text="rnf06 garantir exatidão aritmética centesimal em cálculos monetários urps+ confiabilidade produto — confiabilidade módulo 2 / oe2 todas as rotinas de cálculo de diárias, comissões, reembolsos e rateios devem operar com representação decimal exata (tipo decimal/numeric com no mínimo 4 casas de precisão interna e arredondamento padrão bancário para 2 casas), garantindo divergência zero em auditoria centesimal. rf05 rf06 rf07 rf08 rf21 rf27 rf28 rf29 requisito nao funcional atributo qualidade dod" data-search-text="rnf06 garantir exatidão aritmética centesimal em cálculos monetários urps+ confiabilidade produto — confiabilidade módulo 2 / oe2 todas as rotinas de cálculo de diárias, comissões, reembolsos e rateios devem operar com representação decimal exata (tipo decimal/numeric com no mínimo 4 casas de precisão interna e arredondamento padrão bancário para 2 casas), garantindo divergência zero em auditoria centesimal. rf05 rf06 rf07 rf08 rf21 rf27 rf28 rf29 requisito nao funcional atributo qualidade dod">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-scope">Módulo 2 / OE2</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RNF06 — Garantir exatidão aritmética centesimal em cálculos monetários</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          <span>Classificação URPS+</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-urps">URPS+ Confiabilidade</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          <span>Taxonomia Sommerville</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-sommerville">Produto — Confiabilidade</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Cobertos (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf05" class="req-tag req-tag-rf"># RF05 · Solicitar prévia de fechamento ↗</a> <a href="#rf06" class="req-tag req-tag-rf"># RF06 · Homologar fechamento financeiro ↗</a> <a href="#rf07" class="req-tag req-tag-rf"># RF07 · Submeter solicitação de reembolso ↗</a> <a href="#rf08" class="req-tag req-tag-rf"># RF08 · Deliberar solicitação de reembolso ↗</a> <a href="#rf21" class="req-tag req-tag-rf"># RF21 · Estornar fechamento financeiro ↗</a> <a href="#rf27" class="req-tag req-tag-rf"># RF27 · Configurar tabela de valores de diárias técnicas ↗</a> <a href="#rf28" class="req-tag req-tag-rf"># RF28 · Submeter solicitação de adiantamento operacional ↗</a> <a href="#rf29" class="req-tag req-tag-rf"># RF29 · Deliberar solicitação de adiantamento operacional ↗</a>
        </div>
      </div>
    </div>

    <!-- Métrica Técnica -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Critério Mensurável Objetivo e Métrica de Aceitação (DoD)</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Métrica Técnica:</strong> Todas as rotinas de cálculo de diárias, comissões, reembolsos e rateios devem operar com representação decimal exata (tipo Decimal/Numeric com no mínimo 4 casas de precisão interna e arredondamento padrão bancário para 2 casas), garantindo divergência zero em auditoria centesimal.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rnf" id="rnf07" data-type="rnf" data-rnf="RNF07" data-oe="oe2" data-mvp="mvp" data-quad="q1" data-text="rnf07 garantir robustez e segurança no processamento e armazenamento de comprovantes urps+ segurança / usabilidade produto — segurança módulo 2 / oe2 arquivos de comprovantes devem aceitar formatos pdf, jpeg e png com validação estrita de magic bytes no backend, tamanho máximo de 10 mb por arquivo e escaneamento preventivo contra ameaças, com compressão automática sem perda de legibilidade fiscal. rf04 rf07 rf08 rf22 rf28 rf29 rf35 requisito nao funcional atributo qualidade dod" data-search-text="rnf07 garantir robustez e segurança no processamento e armazenamento de comprovantes urps+ segurança / usabilidade produto — segurança módulo 2 / oe2 arquivos de comprovantes devem aceitar formatos pdf, jpeg e png com validação estrita de magic bytes no backend, tamanho máximo de 10 mb por arquivo e escaneamento preventivo contra ameaças, com compressão automática sem perda de legibilidade fiscal. rf04 rf07 rf08 rf22 rf28 rf29 rf35 requisito nao funcional atributo qualidade dod">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-scope">Módulo 2 / OE2</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RNF07 — Garantir robustez e segurança no processamento e armazenamento de comprovantes</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          <span>Classificação URPS+</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-urps">URPS+ Segurança / Usabilidade</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          <span>Taxonomia Sommerville</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-sommerville">Produto — Segurança</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Cobertos (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf04" class="req-tag req-tag-rf"># RF04 · Submeter apontamento de campo ↗</a> <a href="#rf07" class="req-tag req-tag-rf"># RF07 · Submeter solicitação de reembolso ↗</a> <a href="#rf08" class="req-tag req-tag-rf"># RF08 · Deliberar solicitação de reembolso ↗</a> <a href="#rf22" class="req-tag req-tag-rf"># RF22 · Anexar evidências e geolocalização ao apontamento ↗</a> <a href="#rf28" class="req-tag req-tag-rf"># RF28 · Submeter solicitação de adiantamento operacional ↗</a> <a href="#rf29" class="req-tag req-tag-rf"># RF29 · Deliberar solicitação de adiantamento operacional ↗</a> <a href="#rf35" class="req-tag req-tag-rf"># RF35 · Retificar apontamento de campo ↗</a>
        </div>
      </div>
    </div>

    <!-- Métrica Técnica -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Critério Mensurável Objetivo e Métrica de Aceitação (DoD)</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Métrica Técnica:</strong> Arquivos de comprovantes devem aceitar formatos PDF, JPEG e PNG com validação estrita de magic bytes no backend, tamanho máximo de 10 MB por arquivo e escaneamento preventivo contra ameaças, com compressão automática sem perda de legibilidade fiscal.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rnf" id="rnf08" data-type="rnf" data-rnf="RNF08" data-oe="oe2" data-mvp="pos-mvp" data-quad="q3" data-text="rnf08 garantir rastreabilidade probatória e não-repúdio em operações de estorno urps+ segurança (+) produto — segurança módulo 2 / oe2 operações de estorno, cancelamento ou retificação financeira exigem registro síncrono de justificativa textual com no mínimo 20 caracteres, gerando log de auditoria append-only associado ao identificador do usuário e ip de origem antes da confirmação da mutação. rf06 rf08 rf21 rf29 requisito nao funcional atributo qualidade dod" data-search-text="rnf08 garantir rastreabilidade probatória e não-repúdio em operações de estorno urps+ segurança (+) produto — segurança módulo 2 / oe2 operações de estorno, cancelamento ou retificação financeira exigem registro síncrono de justificativa textual com no mínimo 20 caracteres, gerando log de auditoria append-only associado ao identificador do usuário e ip de origem antes da confirmação da mutação. rf06 rf08 rf21 rf29 requisito nao funcional atributo qualidade dod">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-scope">Módulo 2 / OE2</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RNF08 — Garantir rastreabilidade probatória e não-repúdio em operações de estorno</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          <span>Classificação URPS+</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-urps">URPS+ Segurança (+)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          <span>Taxonomia Sommerville</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-sommerville">Produto — Segurança</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Cobertos (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf06" class="req-tag req-tag-rf"># RF06 · Homologar fechamento financeiro ↗</a> <a href="#rf08" class="req-tag req-tag-rf"># RF08 · Deliberar solicitação de reembolso ↗</a> <a href="#rf21" class="req-tag req-tag-rf"># RF21 · Estornar fechamento financeiro ↗</a> <a href="#rf29" class="req-tag req-tag-rf"># RF29 · Deliberar solicitação de adiantamento operacional ↗</a>
        </div>
      </div>
    </div>

    <!-- Métrica Técnica -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Critério Mensurável Objetivo e Métrica de Aceitação (DoD)</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Métrica Técnica:</strong> Operações de estorno, cancelamento ou retificação financeira exigem registro síncrono de justificativa textual com no mínimo 20 caracteres, gerando log de auditoria append-only associado ao identificador do usuário e IP de origem antes da confirmação da mutação.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rnf" id="rnf09" data-type="rnf" data-rnf="RNF09" data-oe="oe3" data-mvp="mvp" data-quad="q1" data-text="rnf09 garantir tempo de resposta para filtros e consultas do painel de custos inferior a 3,0 segundos urps+ desempenho produto — desempenho módulo 3 / oe3 a aplicação de filtros por período, contrato e centro de custo no painel analítico deve carregar e renderizar os gráficos e tabelas agregadas em tempo inferior ou igual a 3,0 segundos em 95% das consultas para bases históricas de até 10.000 lançamentos. rf09 rf10 rf11 rf12 rf30 rf31 rf33 rf34 rf37 rf38 rf39 rf40 requisito nao funcional atributo qualidade dod" data-search-text="rnf09 garantir tempo de resposta para filtros e consultas do painel de custos inferior a 3,0 segundos urps+ desempenho produto — desempenho módulo 3 / oe3 a aplicação de filtros por período, contrato e centro de custo no painel analítico deve carregar e renderizar os gráficos e tabelas agregadas em tempo inferior ou igual a 3,0 segundos em 95% das consultas para bases históricas de até 10.000 lançamentos. rf09 rf10 rf11 rf12 rf30 rf31 rf33 rf34 rf37 rf38 rf39 rf40 requisito nao funcional atributo qualidade dod">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-scope">Módulo 3 / OE3</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RNF09 — Garantir tempo de resposta para filtros e consultas do painel de custos inferior a 3,0 segundos</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          <span>Classificação URPS+</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-urps">URPS+ Desempenho</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          <span>Taxonomia Sommerville</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-sommerville">Produto — Desempenho</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Cobertos (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf09" class="req-tag req-tag-rf"># RF09 · Apropriar custos operacionais ↗</a> <a href="#rf10" class="req-tag req-tag-rf"># RF10 · Consultar rastreabilidade de custos ↗</a> <a href="#rf11" class="req-tag req-tag-rf"># RF11 · Filtrar indicadores de custos ↗</a> <a href="#rf12" class="req-tag req-tag-rf"># RF12 · Monitorar execução orçamentária ↗</a> <a href="#rf30" class="req-tag req-tag-rf"># RF30 · Consultar comparativo histórico de custos entre contratos ↗</a> <a href="#rf31" class="req-tag req-tag-rf"># RF31 · Configurar alertas de execução orçamentária ↗</a> <a href="#rf33" class="req-tag req-tag-rf"># RF33 · Cadastrar contrato de obra ↗</a> <a href="#rf34" class="req-tag req-tag-rf"># RF34 · Cadastrar centro de custo de obra ↗</a> <a href="#rf37" class="req-tag req-tag-rf"># RF37 · Atualizar contrato de obra ↗</a> <a href="#rf38" class="req-tag req-tag-rf"># RF38 · Consultar contratos de obra ↗</a> <a href="#rf39" class="req-tag req-tag-rf"># RF39 · Atualizar centro de custo de obra ↗</a> <a href="#rf40" class="req-tag req-tag-rf"># RF40 · Definir tetos orçamentários de obra ↗</a>
        </div>
      </div>
    </div>

    <!-- Métrica Técnica -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Critério Mensurável Objetivo e Métrica de Aceitação (DoD)</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Métrica Técnica:</strong> A aplicação de filtros por período, contrato e centro de custo no painel analítico deve carregar e renderizar os gráficos e tabelas agregadas em tempo inferior ou igual a 3,0 segundos em 95% das consultas para bases históricas de até 10.000 lançamentos.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rnf" id="rnf10" data-type="rnf" data-rnf="RNF10" data-oe="oe3" data-mvp="mvp" data-quad="q1" data-text="rnf10 garantir sigilo e não-exposição de remunerações individuais em relatórios operacionais urps+ segurança / legal externo — legislativo (lgpd) módulo 3 / oe3 consultas analíticas executadas por perfis operacionais ou de gestão de obra não devem expor valores salariais individuais ou dados bancários de colaboradores, exibindo unicamente montantes agregados de mão de obra. rf05 rf06 rf09 rf10 rf11 rf12 rf30 rf31 rf33 rf34 rf37 rf38 rf39 rf40 requisito nao funcional atributo qualidade dod" data-search-text="rnf10 garantir sigilo e não-exposição de remunerações individuais em relatórios operacionais urps+ segurança / legal externo — legislativo (lgpd) módulo 3 / oe3 consultas analíticas executadas por perfis operacionais ou de gestão de obra não devem expor valores salariais individuais ou dados bancários de colaboradores, exibindo unicamente montantes agregados de mão de obra. rf05 rf06 rf09 rf10 rf11 rf12 rf30 rf31 rf33 rf34 rf37 rf38 rf39 rf40 requisito nao funcional atributo qualidade dod">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-scope">Módulo 3 / OE3</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RNF10 — Garantir sigilo e não-exposição de remunerações individuais em relatórios operacionais</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          <span>Classificação URPS+</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-urps">URPS+ Segurança / Legal</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          <span>Taxonomia Sommerville</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-sommerville">Externo — Legislativo (LGPD)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Cobertos (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf05" class="req-tag req-tag-rf"># RF05 · Solicitar prévia de fechamento ↗</a> <a href="#rf06" class="req-tag req-tag-rf"># RF06 · Homologar fechamento financeiro ↗</a> <a href="#rf09" class="req-tag req-tag-rf"># RF09 · Apropriar custos operacionais ↗</a> <a href="#rf10" class="req-tag req-tag-rf"># RF10 · Consultar rastreabilidade de custos ↗</a> <a href="#rf11" class="req-tag req-tag-rf"># RF11 · Filtrar indicadores de custos ↗</a> <a href="#rf12" class="req-tag req-tag-rf"># RF12 · Monitorar execução orçamentária ↗</a> <a href="#rf30" class="req-tag req-tag-rf"># RF30 · Consultar comparativo histórico de custos entre contratos ↗</a> <a href="#rf31" class="req-tag req-tag-rf"># RF31 · Configurar alertas de execução orçamentária ↗</a> <a href="#rf33" class="req-tag req-tag-rf"># RF33 · Cadastrar contrato de obra ↗</a> <a href="#rf34" class="req-tag req-tag-rf"># RF34 · Cadastrar centro de custo de obra ↗</a> <a href="#rf37" class="req-tag req-tag-rf"># RF37 · Atualizar contrato de obra ↗</a> <a href="#rf38" class="req-tag req-tag-rf"># RF38 · Consultar contratos de obra ↗</a> <a href="#rf39" class="req-tag req-tag-rf"># RF39 · Atualizar centro de custo de obra ↗</a> <a href="#rf40" class="req-tag req-tag-rf"># RF40 · Definir tetos orçamentários de obra ↗</a>
        </div>
      </div>
    </div>

    <!-- Métrica Técnica -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Critério Mensurável Objetivo e Métrica de Aceitação (DoD)</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Métrica Técnica:</strong> Consultas analíticas executadas por perfis operacionais ou de gestão de obra não devem expor valores salariais individuais ou dados bancários de colaboradores, exibindo unicamente montantes agregados de mão de obra.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rnf" id="rnf11" data-type="rnf" data-rnf="RNF11" data-oe="oe3" data-mvp="mvp" data-quad="q1" data-text="rnf11 garantir consistência transacional acid na apropriação concorrente de custos urps+ confiabilidade produto — confiabilidade módulo 3 / oe3 a rotina de rateio e apropriação de custos diretos deve ser executada sob nível de isolamento serializable/repeatable read no banco de dados postgresql, impedindo lançamentos duplicados ou rateios parciais em concorrência. rf09 rf10 rf30 rf33 rf37 rf38 requisito nao funcional atributo qualidade dod" data-search-text="rnf11 garantir consistência transacional acid na apropriação concorrente de custos urps+ confiabilidade produto — confiabilidade módulo 3 / oe3 a rotina de rateio e apropriação de custos diretos deve ser executada sob nível de isolamento serializable/repeatable read no banco de dados postgresql, impedindo lançamentos duplicados ou rateios parciais em concorrência. rf09 rf10 rf30 rf33 rf37 rf38 requisito nao funcional atributo qualidade dod">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-scope">Módulo 3 / OE3</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RNF11 — Garantir consistência transacional ACID na apropriação concorrente de custos</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          <span>Classificação URPS+</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-urps">URPS+ Confiabilidade</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          <span>Taxonomia Sommerville</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-sommerville">Produto — Confiabilidade</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Cobertos (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf09" class="req-tag req-tag-rf"># RF09 · Apropriar custos operacionais ↗</a> <a href="#rf10" class="req-tag req-tag-rf"># RF10 · Consultar rastreabilidade de custos ↗</a> <a href="#rf30" class="req-tag req-tag-rf"># RF30 · Consultar comparativo histórico de custos entre contratos ↗</a> <a href="#rf33" class="req-tag req-tag-rf"># RF33 · Cadastrar contrato de obra ↗</a> <a href="#rf37" class="req-tag req-tag-rf"># RF37 · Atualizar contrato de obra ↗</a> <a href="#rf38" class="req-tag req-tag-rf"># RF38 · Consultar contratos de obra ↗</a>
        </div>
      </div>
    </div>

    <!-- Métrica Técnica -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Critério Mensurável Objetivo e Métrica de Aceitação (DoD)</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Métrica Técnica:</strong> A rotina de rateio e apropriação de custos diretos deve ser executada sob nível de isolamento Serializable/Repeatable Read no banco de dados PostgreSQL, impedindo lançamentos duplicados ou rateios parciais em concorrência.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rnf" id="rnf12" data-type="rnf" data-rnf="RNF12" data-oe="oe3" data-mvp="mvp" data-quad="q1" data-text="rnf12 assegurar responsividade do painel em resoluções de desktop e tablet urps+ usabilidade produto — usabilidade módulo 3 / oe3 o painel analítico e telas de consulta de custos devem ser totalmente navegáveis e visualmente consistentes em larguras de tela a partir de 768 px (tablets verticais) e 1024 px (tablets horizontais e desktops). rf11 rf12 rf30 rf31 rf34 rf39 rf40 requisito nao funcional atributo qualidade dod" data-search-text="rnf12 assegurar responsividade do painel em resoluções de desktop e tablet urps+ usabilidade produto — usabilidade módulo 3 / oe3 o painel analítico e telas de consulta de custos devem ser totalmente navegáveis e visualmente consistentes em larguras de tela a partir de 768 px (tablets verticais) e 1024 px (tablets horizontais e desktops). rf11 rf12 rf30 rf31 rf34 rf39 rf40 requisito nao funcional atributo qualidade dod">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-scope">Módulo 3 / OE3</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RNF12 — Assegurar responsividade do painel em resoluções de desktop e tablet</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          <span>Classificação URPS+</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-urps">URPS+ Usabilidade</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          <span>Taxonomia Sommerville</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-sommerville">Produto — Usabilidade</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Cobertos (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf11" class="req-tag req-tag-rf"># RF11 · Filtrar indicadores de custos ↗</a> <a href="#rf12" class="req-tag req-tag-rf"># RF12 · Monitorar execução orçamentária ↗</a> <a href="#rf30" class="req-tag req-tag-rf"># RF30 · Consultar comparativo histórico de custos entre contratos ↗</a> <a href="#rf31" class="req-tag req-tag-rf"># RF31 · Configurar alertas de execução orçamentária ↗</a> <a href="#rf34" class="req-tag req-tag-rf"># RF34 · Cadastrar centro de custo de obra ↗</a> <a href="#rf39" class="req-tag req-tag-rf"># RF39 · Atualizar centro de custo de obra ↗</a> <a href="#rf40" class="req-tag req-tag-rf"># RF40 · Definir tetos orçamentários de obra ↗</a>
        </div>
      </div>
    </div>

    <!-- Métrica Técnica -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Critério Mensurável Objetivo e Métrica de Aceitação (DoD)</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Métrica Técnica:</strong> O painel analítico e telas de consulta de custos devem ser totalmente navegáveis e visualmente consistentes em larguras de tela a partir de 768 px (tablets verticais) e 1024 px (tablets horizontais e desktops).</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rnf" id="rnf13" data-type="rnf" data-rnf="RNF13" data-oe="oe4" data-mvp="mvp" data-quad="q1" data-text="rnf13 expirar token de acesso temporário em no máximo 8 horas urps+ segurança (+) produto — segurança módulo 4 / oe4 tokens de autenticação jwt possuem expiração máxima estrita de 8 horas (28.800 segundos), exigindo nova autenticação após o término do período; requisições com token expirado retornam http 401 unauthorized. rf13 rf17 rf18 rf23 requisito nao funcional atributo qualidade dod" data-search-text="rnf13 expirar token de acesso temporário em no máximo 8 horas urps+ segurança (+) produto — segurança módulo 4 / oe4 tokens de autenticação jwt possuem expiração máxima estrita de 8 horas (28.800 segundos), exigindo nova autenticação após o término do período; requisições com token expirado retornam http 401 unauthorized. rf13 rf17 rf18 rf23 requisito nao funcional atributo qualidade dod">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-scope">Módulo 4 / OE4</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RNF13 — Expirar token de acesso temporário em no máximo 8 horas</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          <span>Classificação URPS+</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-urps">URPS+ Segurança (+)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          <span>Taxonomia Sommerville</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-sommerville">Produto — Segurança</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Cobertos (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf13" class="req-tag req-tag-rf"># RF13 · Efetuar login no sistema ↗</a> <a href="#rf17" class="req-tag req-tag-rf"># RF17 · Ativar acesso inicial e recuperar credenciais ↗</a> <a href="#rf18" class="req-tag req-tag-rf"># RF18 · Encerrar sessão manualmente ↗</a> <a href="#rf23" class="req-tag req-tag-rf"># RF23 · Bloquear acesso após tentativas falhas consecutivas ↗</a>
        </div>
      </div>
    </div>

    <!-- Métrica Técnica -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Critério Mensurável Objetivo e Métrica de Aceitação (DoD)</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Métrica Técnica:</strong> Tokens de autenticação JWT possuem expiração máxima estrita de 8 horas (28.800 segundos), exigindo nova autenticação após o término do período; requisições com token expirado retornam HTTP 401 Unauthorized.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rnf" id="rnf14" data-type="rnf" data-rnf="RNF14" data-oe="transversal" data-mvp="mvp" data-quad="q1" data-text="rnf14 validar perfil de autorização em 100% das rotas de api com dados protegidos urps+ segurança / legal externo — legislativo (lgpd) transversal (t) / oe4 100% dos endpoints de backend que manipulam dados corporativos passam por guard/filtro rbac que valida papel e competência do usuário, rejeitando tentativas não autorizadas com http 403 forbidden em menos de 15 ms. rf13 rf14 rf17 rf18 rf23 rf24 requisito nao funcional atributo qualidade dod" data-search-text="rnf14 validar perfil de autorização em 100% das rotas de api com dados protegidos urps+ segurança / legal externo — legislativo (lgpd) transversal (t) / oe4 100% dos endpoints de backend que manipulam dados corporativos passam por guard/filtro rbac que valida papel e competência do usuário, rejeitando tentativas não autorizadas com http 403 forbidden em menos de 15 ms. rf13 rf14 rf17 rf18 rf23 rf24 requisito nao funcional atributo qualidade dod">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-transversal">Pacote Transversal (T)</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RNF14 — Validar perfil de autorização em 100% das rotas de API com dados protegidos</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          <span>Classificação URPS+</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-urps">URPS+ Segurança / Legal</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          <span>Taxonomia Sommerville</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-sommerville">Externo — Legislativo (LGPD)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Cobertos (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf13" class="req-tag req-tag-rf"># RF13 · Efetuar login no sistema ↗</a> <a href="#rf14" class="req-tag req-tag-rf"># RF14 · Gerenciar perfis de acesso ↗</a> <a href="#rf17" class="req-tag req-tag-rf"># RF17 · Ativar acesso inicial e recuperar credenciais ↗</a> <a href="#rf18" class="req-tag req-tag-rf"># RF18 · Encerrar sessão manualmente ↗</a> <a href="#rf23" class="req-tag req-tag-rf"># RF23 · Bloquear acesso após tentativas falhas consecutivas ↗</a> <a href="#rf24" class="req-tag req-tag-rf"># RF24 · Impor renovação periódica de senhas ↗</a>
        </div>
      </div>
    </div>

    <!-- Métrica Técnica -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Critério Mensurável Objetivo e Métrica de Aceitação (DoD)</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Métrica Técnica:</strong> 100% dos endpoints de backend que manipulam dados corporativos passam por guard/filtro RBAC que valida papel e competência do usuário, rejeitando tentativas não autorizadas com HTTP 403 Forbidden em menos de 15 ms.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rnf" id="rnf15" data-type="rnf" data-rnf="RNF15" data-oe="transversal" data-mvp="mvp" data-quad="q1" data-text="rnf15 garantir consistência transacional e atomicidade na gravação de logs de auditoria urps+ confiabilidade produto — confiabilidade transversal (t) / oe4 em 100% das mutações cadastrais e financeiras, o registro correspondente de auditoria é confirmado na mesma transação atômica acid do banco de dados, com perda zero e latência de persistência ≤ 50 ms. rf15 rf16 requisito nao funcional atributo qualidade dod" data-search-text="rnf15 garantir consistência transacional e atomicidade na gravação de logs de auditoria urps+ confiabilidade produto — confiabilidade transversal (t) / oe4 em 100% das mutações cadastrais e financeiras, o registro correspondente de auditoria é confirmado na mesma transação atômica acid do banco de dados, com perda zero e latência de persistência ≤ 50 ms. rf15 rf16 requisito nao funcional atributo qualidade dod">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-transversal">Pacote Transversal (T)</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RNF15 — Garantir consistência transacional e atomicidade na gravação de logs de auditoria</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          <span>Classificação URPS+</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-urps">URPS+ Confiabilidade</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          <span>Taxonomia Sommerville</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-sommerville">Produto — Confiabilidade</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Cobertos (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf15" class="req-tag req-tag-rf"># RF15 · Consultar trilha de auditoria ↗</a> <a href="#rf16" class="req-tag req-tag-rf"># RF16 · Exportar relatório de auditoria ↗</a>
        </div>
      </div>
    </div>

    <!-- Métrica Técnica -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Critério Mensurável Objetivo e Métrica de Aceitação (DoD)</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Métrica Técnica:</strong> Em 100% das mutações cadastrais e financeiras, o registro correspondente de auditoria é confirmado na mesma transação atômica ACID do banco de dados, com perda zero e latência de persistência ≤ 50 ms.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rnf" id="rnf16" data-type="rnf" data-rnf="RNF16" data-oe="transversal" data-mvp="mvp" data-quad="q1" data-text="rnf16 reter registros de auditoria por no mínimo 5 anos contra expurgo físico indevido urps+ confiabilidade / legal externo — legal (clt art. 11 / lgpd) transversal (t) / oe4 inexistência comprovada de rotinas ou permissões de exclusão de registros com tempo de retenção inferior a 5 anos fiscais (1.825 dias), garantindo substrato defensivo em conformidade com o artigo 11 da clt. rf15 rf16 requisito nao funcional atributo qualidade dod" data-search-text="rnf16 reter registros de auditoria por no mínimo 5 anos contra expurgo físico indevido urps+ confiabilidade / legal externo — legal (clt art. 11 / lgpd) transversal (t) / oe4 inexistência comprovada de rotinas ou permissões de exclusão de registros com tempo de retenção inferior a 5 anos fiscais (1.825 dias), garantindo substrato defensivo em conformidade com o artigo 11 da clt. rf15 rf16 requisito nao funcional atributo qualidade dod">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-transversal">Pacote Transversal (T)</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RNF16 — Reter registros de auditoria por no mínimo 5 anos contra expurgo físico indevido</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          <span>Classificação URPS+</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-urps">URPS+ Confiabilidade / Legal</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          <span>Taxonomia Sommerville</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-sommerville">Externo — Legal (CLT Art. 11 / LGPD)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Cobertos (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf15" class="req-tag req-tag-rf"># RF15 · Consultar trilha de auditoria ↗</a> <a href="#rf16" class="req-tag req-tag-rf"># RF16 · Exportar relatório de auditoria ↗</a>
        </div>
      </div>
    </div>

    <!-- Métrica Técnica -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Critério Mensurável Objetivo e Métrica de Aceitação (DoD)</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Métrica Técnica:</strong> Inexistência comprovada de rotinas ou permissões de exclusão de registros com tempo de retenção inferior a 5 anos fiscais (1.825 dias), garantindo substrato defensivo em conformidade com o Artigo 11 da CLT.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rnf" id="rnf17" data-type="rnf" data-rnf="RNF17" data-oe="transversal" data-mvp="mvp" data-quad="q1" data-text="rnf17 realizar backup automático diário com restauração verificada urps+ confiabilidade produto — confiabilidade transversal (t) / oe4 rotina automatizada de backup completo diário do banco de dados e arquivos de mídia, com retenção de 30 dias e testes automatizados periódicos de restauração em até 4 horas com perda máxima (rpo) de 24 horas. rf15 rf16 requisito nao funcional atributo qualidade dod" data-search-text="rnf17 realizar backup automático diário com restauração verificada urps+ confiabilidade produto — confiabilidade transversal (t) / oe4 rotina automatizada de backup completo diário do banco de dados e arquivos de mídia, com retenção de 30 dias e testes automatizados periódicos de restauração em até 4 horas com perda máxima (rpo) de 24 horas. rf15 rf16 requisito nao funcional atributo qualidade dod">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-transversal">Pacote Transversal (T)</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RNF17 — Realizar backup automático diário com restauração verificada</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          <span>Classificação URPS+</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-urps">URPS+ Confiabilidade</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          <span>Taxonomia Sommerville</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-sommerville">Produto — Confiabilidade</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Cobertos (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf15" class="req-tag req-tag-rf"># RF15 · Consultar trilha de auditoria ↗</a> <a href="#rf16" class="req-tag req-tag-rf"># RF16 · Exportar relatório de auditoria ↗</a>
        </div>
      </div>
    </div>

    <!-- Métrica Técnica -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Critério Mensurável Objetivo e Métrica de Aceitação (DoD)</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Métrica Técnica:</strong> Rotina automatizada de backup completo diário do banco de dados e arquivos de mídia, com retenção de 30 dias e testes automatizados periódicos de restauração em até 4 horas com perda máxima (RPO) de 24 horas.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rnf" id="rnf18" data-type="rnf" data-rnf="RNF18" data-oe="transversal" data-mvp="mvp" data-quad="q1" data-text="rnf18 garantir disponibilidade mínima mensal do sistema urps+ confiabilidade produto — confiabilidade transversal (t) / oe4 disponibilidade mínima mensal de 99,5%, medida por monitoramento sintético contínuo, com avisos de janelas de manutenção com antecedência mínima de 48 horas e execução restrita à madrugada (22h às 06h). rf01 rf04 rf05 rf09 rf13 requisito nao funcional atributo qualidade dod" data-search-text="rnf18 garantir disponibilidade mínima mensal do sistema urps+ confiabilidade produto — confiabilidade transversal (t) / oe4 disponibilidade mínima mensal de 99,5%, medida por monitoramento sintético contínuo, com avisos de janelas de manutenção com antecedência mínima de 48 horas e execução restrita à madrugada (22h às 06h). rf01 rf04 rf05 rf09 rf13 requisito nao funcional atributo qualidade dod">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-transversal">Pacote Transversal (T)</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RNF18 — Garantir disponibilidade mínima mensal do sistema</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          <span>Classificação URPS+</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-urps">URPS+ Confiabilidade</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          <span>Taxonomia Sommerville</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-sommerville">Produto — Confiabilidade</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Cobertos (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf01" class="req-tag req-tag-rf"># RF01 · Cadastrar colaborador ↗</a> <a href="#rf04" class="req-tag req-tag-rf"># RF04 · Submeter apontamento de campo ↗</a> <a href="#rf05" class="req-tag req-tag-rf"># RF05 · Solicitar prévia de fechamento ↗</a> <a href="#rf09" class="req-tag req-tag-rf"># RF09 · Apropriar custos operacionais ↗</a> <a href="#rf13" class="req-tag req-tag-rf"># RF13 · Efetuar login no sistema ↗</a>
        </div>
      </div>
    </div>

    <!-- Métrica Técnica -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Critério Mensurável Objetivo e Métrica de Aceitação (DoD)</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Métrica Técnica:</strong> Disponibilidade mínima mensal de 99,5%, medida por monitoramento sintético contínuo, com avisos de janelas de manutenção com antecedência mínima de 48 horas e execução restrita à madrugada (22h às 06h).</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rnf" id="rnf19" data-type="rnf" data-rnf="RNF19" data-oe="transversal" data-mvp="mvp" data-quad="q1" data-text="rnf19 garantir acessibilidade digital nas interfaces do sistema urps+ usabilidade produto — usabilidade (wcag) transversal (t) / oe1 formulários e telas de apontamento e consulta devem atender aos critérios de conformidade wcag 2.1 nível aa, incluindo navegação integral por teclado, contraste mínimo de 4.5:1 e rotulagem acessível aria sem erros críticos. rf01 rf02 rf03 rf04 rf11 rf12 requisito nao funcional atributo qualidade dod" data-search-text="rnf19 garantir acessibilidade digital nas interfaces do sistema urps+ usabilidade produto — usabilidade (wcag) transversal (t) / oe1 formulários e telas de apontamento e consulta devem atender aos critérios de conformidade wcag 2.1 nível aa, incluindo navegação integral por teclado, contraste mínimo de 4.5:1 e rotulagem acessível aria sem erros críticos. rf01 rf02 rf03 rf04 rf11 rf12 requisito nao funcional atributo qualidade dod">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-transversal">Pacote Transversal (T)</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RNF19 — Garantir acessibilidade digital nas interfaces do sistema</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          <span>Classificação URPS+</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-urps">URPS+ Usabilidade</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          <span>Taxonomia Sommerville</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-sommerville">Produto — Usabilidade (WCAG)</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Cobertos (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf01" class="req-tag req-tag-rf"># RF01 · Cadastrar colaborador ↗</a> <a href="#rf02" class="req-tag req-tag-rf"># RF02 · Atualizar cadastro de colaborador ↗</a> <a href="#rf03" class="req-tag req-tag-rf"># RF03 · Registrar movimentação funcional ↗</a> <a href="#rf04" class="req-tag req-tag-rf"># RF04 · Submeter apontamento de campo ↗</a> <a href="#rf11" class="req-tag req-tag-rf"># RF11 · Filtrar indicadores de custos ↗</a> <a href="#rf12" class="req-tag req-tag-rf"># RF12 · Monitorar execução orçamentária ↗</a>
        </div>
      </div>
    </div>

    <!-- Métrica Técnica -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Critério Mensurável Objetivo e Métrica de Aceitação (DoD)</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Métrica Técnica:</strong> Formulários e telas de apontamento e consulta devem atender aos critérios de conformidade WCAG 2.1 nível AA, incluindo navegação integral por teclado, contraste mínimo de 4.5:1 e rotulagem acessível ARIA sem erros críticos.</p>
      </div>
    </div>
  </div>
</details>

<details class="req-card req-card-rnf" id="rnf20" data-type="rnf" data-rnf="RNF20" data-oe="transversal" data-mvp="mvp" data-quad="q1" data-text="rnf20 validar integridade de payloads em todas as rotas de escrita da api urps+ confiabilidade / segurança produto — confiabilidade transversal (t) / oe4 100% das requisições post/put/patch são submetidas a validação formal de schema e sanitização contra injection antes do processamento, respondendo http 400 bad request com detalhes estruturados em caso de inconsistência. rf01 rf04 rf07 rf09 rf13 rf14 requisito nao funcional atributo qualidade dod" data-search-text="rnf20 validar integridade de payloads em todas as rotas de escrita da api urps+ confiabilidade / segurança produto — confiabilidade transversal (t) / oe4 100% das requisições post/put/patch são submetidas a validação formal de schema e sanitização contra injection antes do processamento, respondendo http 400 bad request com detalhes estruturados em caso de inconsistência. rf01 rf04 rf07 rf09 rf13 rf14 requisito nao funcional atributo qualidade dod">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-transversal">Pacote Transversal (T)</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">RNF20 — Validar integridade de payloads em todas as rotas de escrita da API</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados no Padrão Lumio UI (com Ícones e Tags) -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
          <span>Classificação URPS+</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-urps">URPS+ Confiabilidade / Segurança</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
          <span>Taxonomia Sommerville</span>
        </span>
        <div class="req-lumio-val">
          <span class="req-lumio-tag req-tag-sommerville">Produto — Confiabilidade</span>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          <span>RFs Cobertos (Bidirecional)</span>
        </span>
        <div class="req-lumio-val">
          <a href="#rf01" class="req-tag req-tag-rf"># RF01 · Cadastrar colaborador ↗</a> <a href="#rf04" class="req-tag req-tag-rf"># RF04 · Submeter apontamento de campo ↗</a> <a href="#rf07" class="req-tag req-tag-rf"># RF07 · Submeter solicitação de reembolso ↗</a> <a href="#rf09" class="req-tag req-tag-rf"># RF09 · Apropriar custos operacionais ↗</a> <a href="#rf13" class="req-tag req-tag-rf"># RF13 · Efetuar login no sistema ↗</a> <a href="#rf14" class="req-tag req-tag-rf"># RF14 · Gerenciar perfis de acesso ↗</a>
        </div>
      </div>
    </div>

    <!-- Métrica Técnica -->
    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Critério Mensurável Objetivo e Métrica de Aceitação (DoD)</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><strong>Métrica Técnica:</strong> 100% das requisições POST/PUT/PATCH são submetidas a validação formal de schema e sanitização contra injection antes do processamento, respondendo HTTP 400 Bad Request com detalhes estruturados em caso de inconsistência.</p>
      </div>
    </div>
  </div>
</details>

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `4.4` | 11/11/2026 | Correção das contagens dos filtros (80 itens no MVP, 11 pós-MVP); padronização do atributo de escopo dos 9 RFs evolutivos e links do mapeamento 1:N US33/US34 nos cards RF33, RF34 e RF37–RF40. | Gustavo Bonifácio | — |
| `4.3` | 02/11/2026 | **Revisão Cruzada & FLIT:** ferramenta de presença padronizada como FLIT (anteriormente registrada como Shifton) em RF20, CAR-09, critérios DoR/DoD e catálogo; refinamento dos perfis dos atores RBAC e inclusão de nota de alinhamento sociotécnico de Maria Beatryz. | Gustavo Bonifácio e Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
| `4.2` | 02/11/2026 | **Padronização Expandida & Links Bidirecionais:** migração das Regras de Negócio (cards vermelhos) e Requisitos Não Funcionais (cards azuis) para a arquitetura expansível padronizada dos RFs; estabelecimento da linkagem bidirecional recíproca entre Características de Produto (CAR-01 a CAR-10) e Requisitos Funcionais; saneamento de rotas e âncoras relativas do MkDocs. | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
| `4.1` | 30/10/2026 | **Desacoplamento e Interconexão Bidirecional Total:** separação da Pirâmide de Abstração e Matriz-Síntese no documento exclusivo `rastreabilidade.md`; remoção da seção preliminar de Casos de Uso do Catálogo; reestruturação completa das 31 Regras de Negócio e 20 Requisitos Não Funcionais em cards visuais interativos com links bidirecionais diretos para os Requisitos Funcionais executores; integração com deck de navegação rápida. | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
| `4.0` | 29/10/2026 | Consolidação do Catálogo Unificado de Requisitos: centralização dos 40 RFs em Cards de Rastreabilidade Total interativos com links para OEs, CARs, USs, Matriz 4×4 e RNFs; introdução de barra de pesquisa instantânea e filtros rápidos por Módulo e MVP. | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
| `3.8` | 29/10/2026 | Atendimento à issue #126: consolidação das especificações nos módulos, atualização da rastreabilidade e das referências do catálogo; alinhamento de RN02, RF32, RF35 e casos de teste para correção de apontamentos rejeitados. | Matheus Saraiva Camargo | Matheus Ribeiro Szervinsk |
| `3.7` | 28/10/2026 | Sincronização com a Priorização e o Backlog: confirmação da alocação no MVP de RF32 a RF35 e de RF36 no backlog evolutivo, refletida nas histórias US32 a US36. | Paulo Nery | Matheus Ribeiro Szervinsk |
| `3.6` | 13/10/2026 | Auditoria de integridade e qualidade metodológica: restauração do Mapeamento de Necessidades do Cliente e Grafo de Interdependência; padronização estrita de RF24 e métricas de RNF02 e RNF05. | Matheus Ribeiro Szervinsk | Eric Araújo |
| `3.0` | 08/10/2026 | Atendimento ao feedback docente: conversão dos critérios de aceitação para texto corrido verificável orientado a valor. | Paulo Nery | Matheus Ribeiro Szervinsk |
| `1.0` | 07/09/2026 | Criação e estruturação da especificação inicial de requisitos de software (Unidade 2). | Matheus Ribeiro Szervinsk | Matheus Ribeiro Szervinsk |
