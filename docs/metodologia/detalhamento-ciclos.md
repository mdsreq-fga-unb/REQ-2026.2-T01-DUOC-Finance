# Detalhamento de Ciclos & Semanas

O planejamento metodológico, as folgas e o método de atualização de requisitos estão no capítulo [Planejamento](planejamento.md). Para visualizar o calendário mensal e os marcos executivos, consulte o [Cronograma](cronograma.md).

<div class="quick-nav-links">
  <a href="../cronograma/" class="crono-callout-btn" style="display:inline-flex;">
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:6px;"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
    <span>Voltar ao Calendário e Linha do Tempo (Cronograma)</span>
  </a>
</div>

---

<div class="iteration-roadmap">
  <div class="roadmap-header">
    <div class="roadmap-title-group">
      <span class="roadmap-badge">Roadmap de Ciclos RAD</span>
      <h3 class="roadmap-title">Selecionar Ciclo / Incremento</h3>
    </div>
    <span class="roadmap-meta">Clique em um ciclo para filtrar</span>
  </div>

  <div class="roadmap-tracks compact-tracks" id="roadmap-filter-tracks">
    <a href="#pre-ciclo" class="roadmap-track status-done" data-filter="pre-ciclo" title="Filtrar Pré-Ciclo">
      <div class="track-header">
        <span class="track-status-pill done">Concluído</span>
      </div>
      <h4 class="track-name">Pré-Ciclo</h4>
      <span class="track-subtitle">Concepção, Requisitos &amp; Lumio UI</span>
      <div class="track-footer">
        <span class="track-dates">11/08 — 02/11 • Sem 01–09</span>
      </div>
    </a>

    <a href="#ciclo-0" class="roadmap-track status-done" data-filter="ciclo-0" title="Filtrar Ciclo 0">
      <div class="track-header">
        <span class="track-status-pill done">Concluído</span>
      </div>
      <h4 class="track-name">Ciclo 0</h4>
      <span class="track-subtitle">Organização &amp; Prep. Incr. 1</span>
      <div class="track-footer">
        <span class="track-dates">03/11 — 09/11 • 7 dias</span>
      </div>
    </a>

    <a href="#ciclo-1" class="roadmap-track status-done" data-filter="ciclo-1" title="Filtrar Ciclo 1">
      <div class="track-header">
        <span class="track-status-pill done">Concluído</span>
      </div>
      <h4 class="track-name">Ciclo 1 / Incr. 1</h4>
      <span class="track-subtitle">Cadastro, Auth JWT &amp; RBAC</span>
      <div class="track-footer">
        <span class="track-dates">10/11 — 16/11 • 7 dias</span>
      </div>
    </a>

    <a href="#ciclo-2" class="roadmap-track status-active is-selected" data-filter="ciclo-2" title="Filtrar Ciclo 2">
      <div class="track-header">
        <span class="track-status-pill active">Em Andamento</span>
      </div>
      <h4 class="track-name">Ciclo 2 / Incr. 2</h4>
      <span class="track-subtitle">Lançamentos, RVT &amp; Diárias</span>
      <div class="track-footer">
        <span class="track-dates">16/11 — 22/11 • 7 dias</span>
      </div>
    </a>

    <a href="#ciclo-3" class="roadmap-track status-planned" data-filter="ciclo-3" title="Filtrar Ciclo 3">
      <div class="track-header">
        <span class="track-status-pill planned">A Fazer</span>
      </div>
      <h4 class="track-name">Ciclo 3 / Incr. 3</h4>
      <span class="track-subtitle">Motor Financeiro, Folha &amp; UAT</span>
      <div class="track-footer">
        <span class="track-dates">22/11 — 26/11 • 5 dias</span>
      </div>
    </a>

    <a href="#ciclo-4" class="roadmap-track status-planned" data-filter="ciclo-4" title="Filtrar Ciclo 4">
      <div class="track-header">
        <span class="track-status-pill planned">A Fazer</span>
      </div>
      <h4 class="track-name">Ciclo 4 / Cutover</h4>
      <span class="track-subtitle">Transição, Aceite &amp; PC4</span>
      <div class="track-footer">
        <span class="track-dates">26/11 — 03/12 • 8 dias</span>
      </div>
    </a>
  </div>

  <div class="roadmap-search-bar">
    <div class="ciclos-search-wrap">
      <svg class="ciclos-search-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      <input type="search" id="cycle-search-input" class="ciclos-search-input" placeholder="Pesquisar por dia (ex: 19/11), semana, ciclo RAD ou entregável...">
    </div>
    <span class="ciclos-results-count" id="ciclos-results-count">Exibindo todos os ciclos e semanas</span>
  </div>
</div>

<div class="ciclos-empty-state" id="ciclos-empty-state">
  Nenhum ciclo ou semana encontrado para o filtro informado. Limpe a pesquisa ou clique em <strong>Mostrar Todos</strong>.
</div>

<div id="ciclos-cards-container">
<a id="pre-ciclo"></a>
    <div class="ciclo-detail-card status-concluido" data-cycle="pre-ciclo" data-days="11/08 12/08 13/08 14/08 15/08 16/08 17/08 18/08">
      <div class="ciclo-card-head">
        <div class="ciclo-card-head-left">
          <a id="semana-01"></a>
          <span class="ciclo-rad-badge">Pré-Ciclo RAD</span>
          <span class="ciclo-card-title">Semana 01</span>
        </div>
        <span class="status-pill concluido">Concluído / Entregue</span>
      </div>
      <div class="ciclo-metrics-strip">
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Ciclo RAD</span>
          <span class="ciclo-metric-value">Ciclo 0: Concepção &amp; Fundação</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Início</span>
          <span class="ciclo-metric-value">11/08/2026</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Fim</span>
          <span class="ciclo-metric-value">18/08/2026</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Duração</span>
          <span class="ciclo-metric-value">8 dias</span>
        </div>
      </div>
      <div class="ciclo-body-grid">
        <div class="ciclo-col-box is-work">
          <div class="ciclo-col-title">O que foi feito / Escopo</div>
          <ul>
        <li>Formação oficial da equipe Cascata Ágil;</li>
        <li>Identificação da organização parceira (DUOC Arquitetura e Engenharia);</li>
        <li>Primeiro contato e agendamento de conversa exploratória com Maria Beatryz.</li>
      </ul>
        </div>
        <div class="ciclo-col-box is-done">
          <div class="ciclo-col-title">Entregues</div>
          <ul>
        <li>Termo de abertura preliminar do projeto;</li>
        <li>Canais oficiais no WhatsApp e servidor Discord configurados.</li>
      </ul>
        </div>
      </div>
      <div class="ciclo-trace-strip">
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">DoR:</span> Pré-formalização (Concepção)</span>
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">DoD:</span> Validado na Entrega 1 (PC1)</span>
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">Requisitos / Evidências:</span> <a href="../../visao-produto/cenario-atual/">Cenário Atual</a> • <a href="../../visao-produto/solucao-proposta/">Solução Proposta</a></span>
      </div>
    </div>

    <div class="ciclo-detail-card status-concluido" data-cycle="pre-ciclo" data-days="19/08 20/08 21/08 22/08 23/08 24/08 25/08 26/08 27/08 28/08">
      <div class="ciclo-card-head">
        <div class="ciclo-card-head-left">
          <a id="semana-02"></a>
          <span class="ciclo-rad-badge">Pré-Ciclo RAD</span>
          <span class="ciclo-card-title">Semana 02</span>
        </div>
        <span class="status-pill concluido">Concluído / Entregue</span>
      </div>
      <div class="ciclo-metrics-strip">
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Ciclo RAD</span>
          <span class="ciclo-metric-value">Ciclo 0: Concepção &amp; Fundação</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Início</span>
          <span class="ciclo-metric-value">19/08/2026</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Fim</span>
          <span class="ciclo-metric-value">28/08/2026</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Duração</span>
          <span class="ciclo-metric-value">10 dias</span>
        </div>
      </div>
      <div class="ciclo-body-grid">
        <div class="ciclo-col-box is-work">
          <div class="ciclo-col-title">O que foi feito / Escopo</div>
          <ul>
        <li>Contato exploratório preliminar com Maria Beatryz (19/08): alinhamento de agenda e contextualização prévia das rotinas da empresa;</li>
        <li>Diagnóstico das dores operacionais com planilhas de Excel e viagens de obras (RVT);</li>
        <li>Delimitação preliminar de escopo: exclusão de controle de estoque e foco em RH e Finanças (MVP);</li>
        <li>Decisão sobre uso de dados sintéticos para estrita conformidade com a LGPD;</li>
        <li>Setup do repositório de documentação <em>Docs as Code</em>.</li>
      </ul>
        </div>
        <div class="ciclo-col-box is-done">
          <div class="ciclo-col-title">Entregues</div>
          <ul>
        <li>Registro de contato preliminar documentado;</li>
        <li>Rascunho inicial do Rich Picture sistêmico;</li>
        <li>Rascunho das causas-raiz no Diagrama de Ishikawa 4M;</li>
        <li>Repositório Git inicial configurado com automação.</li>
      </ul>
        </div>
      </div>
      <div class="ciclo-trace-strip">
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">DoR:</span> Pré-formalização (Concepção)</span>
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">DoD:</span> Validado na Entrega 1 (PC1)</span>
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">Requisitos / Evidências:</span> <a href="../../visao-produto/cenario-atual/">Cenário Atual</a> • <a href="../../visao-produto/intervencao-social/">Intervenção Social</a></span>
      </div>
    </div>

    <div class="ciclo-detail-card status-concluido" data-cycle="pre-ciclo" data-days="29/08 30/08 31/08 01/09 02/09 03/09 04/09 05/09 06/09 07/09 08/09 09/09 10/09">
      <div class="ciclo-card-head">
        <div class="ciclo-card-head-left">
          <a id="semana-03"></a>
          <span class="ciclo-rad-badge">Pré-Ciclo RAD</span>
          <span class="ciclo-card-title">Semana 03</span>
        </div>
        <span class="status-pill concluido">Concluído / Entregue</span>
      </div>
      <div class="ciclo-metrics-strip">
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Ciclo RAD</span>
          <span class="ciclo-metric-value">Ciclo 0: Concepção &amp; Fundação</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Início</span>
          <span class="ciclo-metric-value">29/08/2026</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Fim</span>
          <span class="ciclo-metric-value">10/09/2026</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Duração</span>
          <span class="ciclo-metric-value">13 dias</span>
        </div>
      </div>
      <div class="ciclo-body-grid">
        <div class="ciclo-col-box is-work">
          <div class="ciclo-col-title">O que foi feito / Escopo</div>
          <ul>
        <li>Realização da Reunião 01 Oficial (05/09/2026) de Elicitação de Escopo e MVP (<a href="../../governanca/atas/">Ver Ata 01</a>);</li>
        <li>Realização da Reunião 02 interna (07/09/2026) de Alinhamento Metodológico e ESW (<a href="../../governanca/atas/">Ver Ata 02</a>);</li>
        <li>Realização da Reunião 03 interna (07/09/2026, às 21h34) para gravação da apresentação do PC1 (<a href="../../governanca/atas/">Ver Ata 03</a>);</li>
        <li>Formalização do Rich Picture v2 sistêmico com delimitação das zonas AS-IS e TO-BE;</li>
        <li>Elaboração do Diagrama de Ishikawa 4M (Método, Mão de Obra, Máquina e Meio Ambiente);</li>
        <li>Mapeamento de Stakeholders (Matriz Poder x Interesse) e Perfis de Usuários (IHC);</li>
        <li>Purificação dos Objetivos Específicos e definição preliminar de <a href="../../visao-produto/solucao-proposta/#car-01">CAR-01</a> a <a href="../../visao-produto/solucao-proposta/#car-08">CAR-08</a> e <a href="../../visao-produto/solucao-proposta/#car-09">CAR-09</a> a <a href="../../visao-produto/solucao-proposta/#car-12">CAR-12</a>;</li>
        <li>Calibração do <em>Mixer Board</em> (RAD) e formulação da Estratégia de ESW;</li>
        <li>Definição da governança da equipe, Matriz RACI, Matriz de Comunicação e fluxo DoR/DoD;</li>
        <li>Configuração completa do portal <em>Docs as Code</em> (MkDocs Material, busca client-side e automação via GitHub Actions);</li>
        <li>Gravação do vídeo oficial e fechamento do Ponto de Controle 1 em 08/09/2026.</li>
      </ul>
        </div>
        <div class="ciclo-col-box is-done">
          <div class="ciclo-col-title">Entregues</div>
          <ul>
        <li>Portal MkDocs publicado no GitHub Pages com 13 capítulos estruturados;</li>
        <li>Páginas oficiais das Atas de Reuniões 01 e 02;</li>
        <li>Painel de Entregas (Entrega 1 completa e templates das Entregas 2 a 4);</li>
        <li>Vídeo oficial da Entrega 1 gravado e indexado (<a href="../../entregas/entrega-1/">Ver Entrega 1</a>).</li>
      </ul>
        </div>
      </div>
      <div class="ciclo-trace-strip">
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">DoR:</span> Pré-formalização (Concepção)</span>
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">DoD:</span> <a href="../../entregas/entrega-1/">Entrega 1 (PC1) Concluída</a></span>
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">Requisitos / Evidências:</span> <a href="../../visao-produto/solucao-proposta/">OEs e CARs</a> • <a href="../../entregas/entrega-1/">Checklist Entrega 1</a></span>
      </div>
    </div>

    <div class="ciclo-detail-card status-concluido" data-cycle="pre-ciclo" data-days="11/09 12/09 13/09 14/09 15/09 16/09 17/09 18/09 19/09 20/09 21/09 22/09">
      <div class="ciclo-card-head">
        <div class="ciclo-card-head-left">
          <a id="semana-04"></a>
          <span class="ciclo-rad-badge">Pré-Ciclo RAD</span>
          <span class="ciclo-card-title">Semana 04</span>
        </div>
        <span class="status-pill concluido">Concluído / Entregue</span>
      </div>
      <div class="ciclo-metrics-strip">
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Ciclo RAD</span>
          <span class="ciclo-metric-value">Ciclo 0: Requisitos &amp; Prototipagem</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Início</span>
          <span class="ciclo-metric-value">11/09/2026</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Fim</span>
          <span class="ciclo-metric-value">22/09/2026</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Duração</span>
          <span class="ciclo-metric-value">12 dias</span>
        </div>
      </div>
      <div class="ciclo-body-grid">
        <div class="ciclo-col-box is-work">
          <div class="ciclo-col-title">O que foi feito / Escopo</div>
          <ul>
        <li>Reunião 04 interna (17/09/2026): retrospectiva da Unidade 1, feedback docente, correção do cronograma RAD e planejamento de RFs/RNFs;</li>
        <li>Elicitação complementar e análise documental; entrevistas com a cliente e validação de wireframes;</li>
        <li>Análise documental minuciosa das planilhas sintéticas de despesas e adiantamentos de campo.</li>
      </ul>
        </div>
        <div class="ciclo-col-box is-done">
          <div class="ciclo-col-title">Entregues</div>
          <ul>
        <li>Ata da Reunião 04 (retrospectiva e planejamento) registrada;</li>
        <li>Wireframes conceituais;</li>
        <li>Matriz de Personas e Cenários contextuais de IHC.</li>
      </ul>
        </div>
      </div>
      <div class="ciclo-trace-strip">
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">DoR:</span> <a href="../../mvp/dor/#1-checklist-operacional-de-entrada-criterios-oficiais">Critérios DoR em Definição</a></span>
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">DoD:</span> Validado na Entrega 2 (PC2)</span>
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">Requisitos / Evidências:</span> <a href="../../requisitos/">Catálogo de Requisitos</a> • <a href="../../requisitos/rastreabilidade/">Rastreabilidade</a></span>
      </div>
    </div>

    <div class="ciclo-detail-card status-concluido" data-cycle="pre-ciclo" data-days="23/09 24/09 25/09 26/09 27/09 28/09 29/09">
      <div class="ciclo-card-head">
        <div class="ciclo-card-head-left">
          <a id="semana-05"></a>
          <span class="ciclo-rad-badge">Pré-Ciclo RAD</span>
          <span class="ciclo-card-title">Semana 05</span>
        </div>
        <span class="status-pill concluido">Concluído / Entregue</span>
      </div>
      <div class="ciclo-metrics-strip">
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Ciclo RAD</span>
          <span class="ciclo-metric-value">Ciclo 0: Requisitos &amp; Prototipagem</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Início</span>
          <span class="ciclo-metric-value">23/09/2026</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Fim</span>
          <span class="ciclo-metric-value">29/09/2026</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Duração</span>
          <span class="ciclo-metric-value">7 dias</span>
        </div>
      </div>
      <div class="ciclo-body-grid">
        <div class="ciclo-col-box is-work">
          <div class="ciclo-col-title">O que foi feito / Escopo</div>
          <ul>
        <li>Levantamento e especificação rigorosa de Requisitos Funcionais (RF) e Não-Funcionais (RNF) sob o framework <strong>URPS+</strong>;</li>
        <li>Reunião 05 (24/09/2026): verificação e priorização de requisitos via matriz Valor × Esforço, alinhamento do escopo do MVP (<a href="../../governanca/atas/reuniao-05/">Ver Ata 05</a>);</li>
        <li>Formulação formal dos acordos de trabalho: DoR (<em>Definition of Ready</em>) como portão de entrada para implementação de lógica e persistência e DoD (<em>Definition of Done</em>) como portão de saída;</li>
        <li>Definição dos requisitos arquiteturais de segurança e privacidade (LGPD, papéis RBAC preliminares);</li>
        <li>Início da prototipagem: concepção da base visual no Figma (Design System, paleta de cores e tokens) e estruturação dos componentes base de interface no Frontend (React SPA / Tailwind CSS).</li>
      </ul>
        </div>
        <div class="ciclo-col-box is-done">
          <div class="ciclo-col-title">Entregues</div>
          <ul>
        <li>Especificação de Requisitos no padrão URPS+ formalizada;</li>
        <li>Ata da Reunião 05 (Ata 05) com deliberações de escopo e matriz de priorização;</li>
        <li>Guia formal de DoR e DoD aprovado e indexado (Ver Capítulo 9);</li>
        <li>Catálogo de Requisitos de Segurança e Conformidade LGPD;</li>
        <li>Design System base no Figma e componentes UI no Frontend.</li>
      </ul>
        </div>
      </div>
      <div class="ciclo-trace-strip">
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">DoR:</span> <a href="../../mvp/dor/">Formalizado (25/09)</a></span>
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">DoD:</span> <a href="../../mvp/dod/">Formalizado (25/09)</a></span>
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">Requisitos / Evidências:</span> <a href="../../requisitos/priorizacao/">Priorização &amp; Matriz 4x4</a> • <a href="../../governanca/atas/reuniao-05/">Ata 05</a></span>
      </div>
    </div>

    <div class="ciclo-detail-card status-concluido" data-cycle="pre-ciclo" data-days="30/09 01/10 02/10 03/10 04/10 05/10 06/10 07/10">
      <div class="ciclo-card-head">
        <div class="ciclo-card-head-left">
          <a id="semana-06"></a>
          <span class="ciclo-rad-badge">Pré-Ciclo RAD</span>
          <span class="ciclo-card-title">Semana 06</span>
        </div>
        <span class="status-pill concluido">Concluído / Entregue</span>
      </div>
      <div class="ciclo-metrics-strip">
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Ciclo RAD</span>
          <span class="ciclo-metric-value">Ciclo 0: Requisitos, Validação &amp; Refinamento</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Início</span>
          <span class="ciclo-metric-value">30/09/2026</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Fim</span>
          <span class="ciclo-metric-value">07/10/2026</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Duração</span>
          <span class="ciclo-metric-value">8 dias</span>
        </div>
      </div>
      <div class="ciclo-body-grid">
        <div class="ciclo-col-box is-work">
          <div class="ciclo-col-title">O que foi feito / Escopo</div>
          <ul>
        <li>Decomposição dos requisitos em Histórias de Usuário no padrão <strong>INVEST</strong>;</li>
        <li>Redação de critérios de aceitação objetivos em listas estruturadas de regras de negócio;</li>
        <li>Priorização do Backlog usando matriz Valor vs. Esforço;</li>
        <li>Reunião 06 com a cliente (02/10/2026): validação presencial do protótipo de alta fidelidade no Figma, aprovado sem alterações (<a href="../../governanca/atas/reuniao-06/">Ver Ata 06</a>);</li>
        <li>Verificação do DoR do Incremento 1 antes da liberação de demandas de lógica e persistência, mediante critérios e aceite registrados.</li>
      </ul>
        </div>
        <div class="ciclo-col-box is-done">
          <div class="ciclo-col-title">Entregues</div>
          <ul>
        <li>Ata da Reunião 04 de 17/09 (retrospectiva interna);</li>
        <li>Escopo de requisitos priorizado e cadastrado no GitHub Projects;</li>
        <li>Histórias de Usuário INVEST com critérios de aceitação formalizados;</li>
        <li>Ata 06 da validação do protótipo no Figma;</li>
        <li>Registro de verificação do DoR do Incremento 1, condicionando avanço ao aceite.</li>
      </ul>
        </div>
      </div>
      <div class="ciclo-trace-strip">
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">DoR:</span> <a href="../../mvp/dor/">Revisado para Entrega 2</a></span>
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">DoD:</span> <a href="../../mvp/dod/">Checklist Entrega 2</a></span>
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">Requisitos / Evidências:</span> <a href="../../requisitos/backlog/">Backlog INVEST</a> • <a href="../../governanca/atas/reuniao-06/">Validação Figma (Ata 06)</a></span>
      </div>
    </div>

    <div class="ciclo-detail-card status-concluido" data-cycle="pre-ciclo" data-days="08/10 09/10 10/10 11/10 12/10 13/10 14/10 15/10">
      <div class="ciclo-card-head">
        <div class="ciclo-card-head-left">
          <a id="semana-07"></a>
          <span class="ciclo-rad-badge">Pré-Ciclo RAD</span>
          <span class="ciclo-card-title">Semana 07</span>
        </div>
        <span class="status-pill concluido">Concluído / Entregue</span>
      </div>
      <div class="ciclo-metrics-strip">
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Ciclo RAD</span>
          <span class="ciclo-metric-value">Ciclo 0: Consolidação &amp; Entrega 2</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Início</span>
          <span class="ciclo-metric-value">08/10/2026</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Fim</span>
          <span class="ciclo-metric-value">15/10/2026</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Duração</span>
          <span class="ciclo-metric-value">8 dias</span>
        </div>
      </div>
      <div class="ciclo-body-grid">
        <div class="ciclo-col-box is-work">
          <div class="ciclo-col-title">O que foi feito / Escopo</div>
          <ul>
        <li>Consolidação da documentação do ciclo no MkDocs e revisão final do catálogo de requisitos (40 RFs e 20 RNFs);</li>
        <li>Gravação do vídeo do PC2 (12/10);</li>
        <li><strong>PC2: publicação no GitHub Pages até 13/10/2026 às 08h</strong>, com apresentações em 13 e 15/10.</li>
      </ul>
        </div>
        <div class="ciclo-col-box is-done">
          <div class="ciclo-col-title">Entregues</div>
          <ul>
        <li>Documento oficial da Entrega 2 publicado (<a href="../../entregas/entrega-2/">Ver Entrega 2</a>);</li>
        <li>Vídeo do Ponto de Controle 2;</li>
        <li>Catálogo URPS+ atualizado (40 RFs e 20 RNFs), backlog INVEST e critérios DoR/DoD indexados.</li>
      </ul>
        </div>
      </div>
      <div class="ciclo-trace-strip">
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">DoR:</span> <a href="../../mvp/dor/">Aprovado para Prototipagem</a></span>
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">DoD:</span> <a href="../../entregas/entrega-2/">Entrega 2 (PC2) Concluída</a></span>
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">Requisitos / Evidências:</span> <a href="../../requisitos/">RFs/RNFs URPS+</a> • <a href="../../requisitos/feedback/">Feedback Pares</a></span>
      </div>
    </div>



    <div class="ciclo-detail-card status-concluido" data-cycle="pre-ciclo" data-days="19/10 20/10 21/10 22/10 23/10 24/10 25/10">
      <div class="ciclo-card-head">
        <div class="ciclo-card-head-left">
          <a id="semana-08"></a>
          <span class="ciclo-rad-badge">Pré-Ciclo RAD</span>
          <span class="ciclo-card-title">Semana 08</span>
        </div>
        <span class="status-pill concluido">Concluído</span>
      </div>
      <div class="ciclo-metrics-strip">
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Ciclo RAD</span>
          <span class="ciclo-metric-value">Pré-Ciclo: Retrospectiva PC2 &amp; Refinamento</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Início</span>
          <span class="ciclo-metric-value">19/10/2026</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Fim</span>
          <span class="ciclo-metric-value">25/10/2026</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Duração</span>
          <span class="ciclo-metric-value">7 dias</span>
        </div>
      </div>
      <div class="ciclo-body-grid">
        <div class="ciclo-col-box is-work">
          <div class="ciclo-col-title">O que foi feito / Escopo</div>
          <ul>
            <li>Catálogo de requisitos decomposto (RF33/RF34) e rastreabilidade atualizada;</li>
            <li>Backlog de correções pós-PC2 organizado no <a href="https://github.com/orgs/mdsreq-fga-unb/projects/119">GitHub Projects</a>;</li>
            <li>Diagrama Entidade-Relacionamento (DER) revisado (<a href="../../mvp/modelagem_bd/">modelagem_bd.md</a>).</li>
          </ul>
        </div>
        <div class="ciclo-col-box is-done">
          <div class="ciclo-col-title">Entregues</div>
          <ul>
            <li>Catálogo de requisitos decomposto (RF33/RF34) e rastreabilidade atualizada;</li>
            <li>Backlog de correções pós-PC2 organizado no <a href="https://github.com/orgs/mdsreq-fga-unb/projects/119">GitHub Projects</a>;</li>
            <li>Diagrama Entidade-Relacionamento (DER) revisado (<a href="../../mvp/modelagem_bd/">modelagem_bd.md</a>).</li>
          </ul>
        </div>
      </div>
      <div class="ciclo-debt-note"><strong>Débito Técnico (Transferido ao Ciclo 1):</strong> atraso no setup do ORM/banco e telas navegáveis postergou o início da codificação do Incremento 1 para 10/11.</div>
      <div class="ciclo-trace-strip">
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">DoR:</span> <a href="../../mvp/dor/">Refinamento Pós-PC2</a></span>
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">DoD:</span> Consolidado no Pré-Ciclo</span>
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">Requisitos / Evidências:</span> <a href="../../requisitos/#rf33">RF33</a>, <a href="../../requisitos/#rf34">RF34</a> • <a href="../../mvp/modelagem_bd/">DER / Modelagem BD</a></span>
      </div>
    </div>

    <div class="ciclo-detail-card status-concluido" data-cycle="pre-ciclo" data-days="26/10 27/10 28/10 29/10 30/10 31/10 01/11 02/11">
      <div class="ciclo-card-head">
        <div class="ciclo-card-head-left">
          <a id="semana-09"></a>
          <span class="ciclo-rad-badge">Pré-Ciclo RAD</span>
          <span class="ciclo-card-title">Semana 09</span>
        </div>
        <span class="status-pill concluido">Concluído</span>
      </div>
      <div class="ciclo-metrics-strip">
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Ciclo RAD</span>
          <span class="ciclo-metric-value">Pré-Ciclo: Reorganização Modular &amp; Lumio UI</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Início</span>
          <span class="ciclo-metric-value">26/10/2026</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Fim</span>
          <span class="ciclo-metric-value">02/11/2026</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Duração</span>
          <span class="ciclo-metric-value">8 dias</span>
        </div>
      </div>
      <div class="ciclo-body-grid">
        <div class="ciclo-col-box is-work">
          <div class="ciclo-col-title">O que foi feito / Escopo</div>
          <ul>
            <li>Especificação modularizada com cards Lumio UI e pirâmide interativa;</li>
            <li>Issues #122–#133 saneadas e rotas relativas corrigidas;</li>
            <li>Matriz RBAC e rastreabilidade consolidadas antes do Ciclo 0.</li>
          </ul>
        </div>
        <div class="ciclo-col-box is-done">
          <div class="ciclo-col-title">Entregues</div>
          <ul>
            <li>Especificação modularizada com cards Lumio UI e pirâmide interativa;</li>
            <li>Issues #122–#133 saneadas e rotas relativas corrigidas;</li>
            <li>Matriz RBAC e rastreabilidade consolidadas antes do Ciclo 0.</li>
          </ul>
        </div>
      </div>
      <div class="ciclo-debt-note"><strong>Débito Técnico (Transferido ao Ciclo 0/1):</strong> reorganização documental e saneamento de issues (#122–#133) concluídos em 02/11 antes da abertura do Ciclo 0.</div>
      <div class="ciclo-trace-strip">
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">DoR:</span> <a href="../../mvp/dor/">Padronizado e Auditado</a></span>
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">DoD:</span> <a href="../../mvp/dod/#procedimento-de-inspecao-por-pares-pull-request">Inspeção por Pares Formalizada</a></span>
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">Requisitos / Evidências:</span> <a href="../../requisitos/#rf32">RF32</a>–<a href="../../requisitos/#rf36">RF36</a> • <a href="../../requisitos/">Cards Lumio UI</a></span>
      </div>
    </div>

    <div class="ciclo-detail-card status-concluido" data-cycle="ciclo-0" data-days="03/11 04/11 05/11 06/11 07/11 08/11 09/11">
      <div class="ciclo-card-head">
        <div class="ciclo-card-head-left">
          <a id="ciclo-0"></a>
          <span class="ciclo-rad-badge">Ciclo 0</span>
          <span class="ciclo-card-title">Ciclo 0 — Organização &amp; Estrutura</span>
        </div>
        <span class="status-pill concluido">Concluído</span>
      </div>
      <div class="ciclo-metrics-strip">
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Ciclo RAD</span>
          <span class="ciclo-metric-value">Ciclo 0: Organização do Repositório &amp; Prep. Incr. 1</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Início</span>
          <span class="ciclo-metric-value">03/11/2026</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Fim</span>
          <span class="ciclo-metric-value">09/11/2026</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Duração</span>
          <span class="ciclo-metric-value">7 dias</span>
        </div>
      </div>
      <div class="ciclo-body-grid">
        <div class="ciclo-col-box is-work">
          <div class="ciclo-col-title">O que foi feito / Escopo</div>
          <ul>
            <li>Ambiente Docker funcional e padronizado (<a href="https://github.com/mdsreq-fga-unb/REQ-2026.2-T01-DUOC-Finance/pull/160">PR #160</a>);</li>
            <li>Documentação de organização, estrutura de pastas e templates de governança;</li>
            <li>Base do frontend navegável e rotas iniciais configuradas (<a href="https://github.com/mdsreq-fga-unb/REQ-2026.2-T01-DUOC-Finance/pull/154">PR #154</a> / <a href="https://github.com/mdsreq-fga-unb/REQ-2026.2-T01-DUOC-Finance/pull/166">PR #166</a>).</li>
          </ul>
        </div>
        <div class="ciclo-col-box is-done">
          <div class="ciclo-col-title">Entregues</div>
          <ul>
            <li>Ambiente Docker funcional e padronizado (<a href="https://github.com/mdsreq-fga-unb/REQ-2026.2-T01-DUOC-Finance/pull/160">PR #160</a>);</li>
            <li>Documentação de organização, estrutura de pastas e templates de governança;</li>
            <li>Base do frontend navegável e rotas iniciais configuradas (<a href="https://github.com/mdsreq-fga-unb/REQ-2026.2-T01-DUOC-Finance/pull/154">PR #154</a> / <a href="https://github.com/mdsreq-fga-unb/REQ-2026.2-T01-DUOC-Finance/pull/166">PR #166</a>).</li>
          </ul>
        </div>
      </div>
      <div class="ciclo-trace-strip">
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">DoR:</span> <a href="../../mvp/dor/#2-resultados-do-dor-incremento-1-concluido">DoR Incr. 1 Preparado</a></span>
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">DoD:</span> Estrutura &amp; Docker Validados</span>
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">Requisitos / Evidências:</span> <a href="../../mvp/modelagem_bd/">Modelagem BD</a> • Infra Docker (<a href="https://github.com/mdsreq-fga-unb/REQ-2026.2-T01-DUOC-Finance/pull/160">PR #160</a>)</span>
      </div>
    </div>

    <div class="ciclo-detail-card status-concluido" data-cycle="ciclo-1" data-days="10/11 11/11 12/11 13/11 14/11 15/11 16/11">
      <div class="ciclo-card-head">
        <div class="ciclo-card-head-left">
          <a id="ciclo-1"></a><a id="semana-10"></a>
          <span class="ciclo-rad-badge">Ciclo 1 • Incr. 1</span>
          <span class="ciclo-card-title">Semana 10 — Ciclo 1 / Incremento 1</span>
        </div>
        <span class="status-pill concluido">Concluído</span>
      </div>
      <div class="ciclo-metrics-strip">
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Ciclo RAD</span>
          <span class="ciclo-metric-value">Incremento 1: Cadastro, Auth JWT, RBAC &amp; Postgres</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Início</span>
          <span class="ciclo-metric-value">10/11/2026</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Fim</span>
          <span class="ciclo-metric-value">16/11/2026</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Duração</span>
          <span class="ciclo-metric-value">7 dias</span>
        </div>
      </div>
      <div class="ciclo-body-grid">
        <div class="ciclo-col-box is-work">
          <div class="ciclo-col-title">O que foi feito / Escopo</div>
          <ul>
            <li>Cadastro unificado, tela de login e autenticação JWT (<a href="https://github.com/mdsreq-fga-unb/REQ-2026.2-T01-DUOC-Finance/pull/167">PR #167</a>);</li>
            <li>RBAC de 4 papéis completo e testado (<a href="https://github.com/mdsreq-fga-unb/REQ-2026.2-T01-DUOC-Finance/pull/172">PR #172</a>);</li>
            <li>Testes unitários de cadastro/autenticação (<a href="https://github.com/mdsreq-fga-unb/REQ-2026.2-T01-DUOC-Finance/pull/168">PR #168</a>) e integração Postgres/Prisma;</li>
            <li>DoD do Incremento 1 verificado e gravação da Entrega 3 (<a href="../../governanca/atas/reuniao-07/">Ata 07</a>).</li>
          </ul>
        </div>
        <div class="ciclo-col-box is-done">
          <div class="ciclo-col-title">Entregues</div>
          <ul>
            <li>Cadastro unificado, tela de login e autenticação JWT (<a href="https://github.com/mdsreq-fga-unb/REQ-2026.2-T01-DUOC-Finance/pull/167">PR #167</a>);</li>
            <li>RBAC de 4 papéis completo e testado (<a href="https://github.com/mdsreq-fga-unb/REQ-2026.2-T01-DUOC-Finance/pull/172">PR #172</a>);</li>
            <li>Testes unitários de cadastro/autenticação (<a href="https://github.com/mdsreq-fga-unb/REQ-2026.2-T01-DUOC-Finance/pull/168">PR #168</a>) e integração Postgres/Prisma;</li>
            <li>DoD do Incremento 1 verificado e gravação da Entrega 3 (<a href="../../governanca/atas/reuniao-07/">Ata 07</a>).</li>
          </ul>
        </div>
      </div>
      <div class="ciclo-debt-note"><strong>Débito Técnico / Pendência de Aceite:</strong> entrega técnica e evidências concluídas em 16/11; homologação formal com a cliente alocada na sessão pós-entrega em 17/11.</div>
      <div class="ciclo-trace-strip">
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">DoR:</span> <a href="../../mvp/dor/#2-resultados-do-dor-incremento-1-concluido">DoR Incr. 1 Aprovado</a></span>
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">DoD:</span> <a href="../../mvp/dod/#evidencias-visuais-comprobatorias-dod-incremento-1">DoD Incr. 1 Concluído + Evidências</a></span>
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">Requisitos / Evidências:</span> <a href="../../requisitos/#rf01">RF01</a>, <a href="../../requisitos/#rf04">RF04</a>, <a href="../../requisitos/#rf05">RF05</a>, <a href="../../requisitos/#rf22">RF22</a>, <a href="../../requisitos/#rf23">RF23</a>, <a href="../../requisitos/#rf25">RF25</a>, <a href="../../requisitos/#rnf07">RNF07</a></span>
      </div>
    </div>

    <div class="ciclo-detail-card status-andamento" data-cycle="ciclo-2" data-days="16/11 17/11 18/11 19/11 20/11 21/11 22/11">
      <div class="ciclo-card-head">
        <div class="ciclo-card-head-left">
          <a id="ciclo-2"></a><a id="semana-11"></a>
          <span class="ciclo-rad-badge">Ciclo 2 • Incr. 2</span>
          <span class="ciclo-card-title">Semana 11 — Ciclo 2 / Incremento 2</span>
        </div>
        <span class="status-pill andamento">Em Andamento</span>
      </div>
      <div class="ciclo-metrics-strip">
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Ciclo RAD</span>
          <span class="ciclo-metric-value">Incremento 2: Lançamentos, RVT &amp; Diárias</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Início</span>
          <span class="ciclo-metric-value">16/11/2026</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Fim</span>
          <span class="ciclo-metric-value">22/11/2026</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Duração</span>
          <span class="ciclo-metric-value">7 dias</span>
        </div>
      </div>
      <div class="ciclo-body-grid">
        <div class="ciclo-col-box is-work">
          <div class="ciclo-col-title">O que foi feito / Escopo</div>
          <ul>
            <li>Documento e vídeo técnico da <a href="../../entregas/entrega-3/">Entrega 3 (PC3)</a> publicados;</li>
            <li>Módulo RVT e apontamento de campo (<a href="../../visao-produto/solucao-proposta/#car-02">CAR-02</a>) integrados (<a href="https://github.com/mdsreq-fga-unb/REQ-2026.2-T01-DUOC-Finance/pull/170">PR #170</a>);</li>
            <li>Testes unitários do Incremento 2 e checklist DoR verificados;</li>
            <li>Ata da Sessão de Homologação Incr. 2 e registro do DoD do Incremento 2.</li>
          </ul>
        </div>
        <div class="ciclo-col-box is-done">
          <div class="ciclo-col-title">Entregues</div>
          <ul><li>Documento e vídeo técnico da <a href="../../entregas/entrega-3/">Entrega 3 (PC3)</a> publicados (17/11);</li><li>Base de RVT e apontamento inicial (<a href="https://github.com/mdsreq-fga-unb/REQ-2026.2-T01-DUOC-Finance/pull/170">PR #170</a>).</li></ul>
        </div>
        <div class="ciclo-col-box is-pending">
          <div class="ciclo-col-title">Pendentes</div>
          <ul><li>Execução dos testes unitários do Incremento 2 (19/11);</li><li>Sessão de Homologação Incr. 2 com a cliente (20/11);</li><li>Ajustes pós-homologação (21/11) e Fecho Incr. 2 / DoD (22/11).</li></ul>
        </div>
      </div>
      <div class="ciclo-debt-note"><strong>Débito Técnico / Risco:</strong> folga técnica comprimida pelo atraso do Incr. 1; verificação aritmética fina do motor financeiro alocada para 23/11 no Incremento 3.</div>
      <div class="ciclo-trace-strip">
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">DoR:</span> <a href="../../mvp/dor/#3-resultados-do-dor-incrementos-2-e-3-em-andamento">DoR Incr. 2 Aprovado</a></span>
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">DoD:</span> <a href="../../mvp/dod/#3-resultados-do-dod-incrementos-2-3-e-pos-mvp-nao-concluidos">DoD Incr. 2 Em Execução (Fecho 22/11)</a></span>
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">Requisitos / Evidências:</span> <a href="../../requisitos/#rf07">RF07</a>, <a href="../../requisitos/#rf08">RF08</a>, <a href="../../requisitos/#rf28">RF28</a>, <a href="../../requisitos/#rf29">RF29</a>, <a href="../../requisitos/#rf32">RF32</a>, <a href="../../requisitos/#rf35">RF35</a></span>
      </div>
    </div>

    <div class="ciclo-detail-card status-planejado" data-cycle="ciclo-3" data-days="22/11 23/11 24/11 25/11 26/11">
      <div class="ciclo-card-head">
        <div class="ciclo-card-head-left">
          <a id="ciclo-3"></a><a id="semana-12"></a>
          <span class="ciclo-rad-badge">Ciclo 3 • Incr. 3</span>
          <span class="ciclo-card-title">Semana 12 — Ciclo 3 / Incremento 3</span>
        </div>
        <span class="status-pill planejado">A Fazer</span>
      </div>
      <div class="ciclo-metrics-strip">
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Ciclo RAD</span>
          <span class="ciclo-metric-value">Incremento 3: Motor Financeiro, Folha, Auditoria &amp; UAT</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Início</span>
          <span class="ciclo-metric-value">22/11/2026</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Fim</span>
          <span class="ciclo-metric-value">26/11/2026</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Duração</span>
          <span class="ciclo-metric-value">5 dias</span>
        </div>
      </div>
      <div class="ciclo-body-grid">
        <div class="ciclo-col-box is-work">
          <div class="ciclo-col-title">O que foi feito / Escopo</div>
          <ul>
            <li><strong>22/11:</strong> Início antecipado no domingo: codificação do Motor Financeiro (<a href="../../visao-produto/solucao-proposta/#car-03">CAR-03</a>) e Reembolsos (<a href="../../visao-produto/solucao-proposta/#car-04">CAR-04</a>);</li>
            <li><strong>23/11:</strong> Verificação aritmética frente às planilhas da DUOC e implementação do Rateio por Contrato (<a href="../../visao-produto/solucao-proposta/#car-05">CAR-05</a>);</li>
            <li><strong>24/11:</strong> Publicação dos indicadores de custos em Staging (<a href="../../visao-produto/solucao-proposta/#car-05">CAR-05</a>) e implementação da Trilha de Auditoria (<a href="../../visao-produto/solucao-proposta/#car-08">CAR-08</a>);</li>
            <li><strong>25/11:</strong> Verificação do DoR Incr. 3 e aprovação dos testes unitários, carga e regressão (RNF01 e RNF02);</li>
            <li><strong>26/11:</strong> Sessão de Homologação Incr. 3 (UAT DUOC), Fecho Incr. 3 (DoD) e início do Cutover.</li>
          </ul>
        </div>
        <div class="ciclo-col-box is-pending">
          <div class="ciclo-col-title">Pendentes</div>
          <ul><li>Codificação do Motor Financeiro (CAR-03) e Reembolsos (CAR-04) — 22/11;</li><li>Verificação aritmética e Rateio por Contrato (CAR-05) — 23/11;</li><li>Indicadores em Staging e Trilha de Auditoria (CAR-08) — 24/11;</li><li>DoR Incr. 3, Testes Unitários/Carga/Regressão (25/11), UAT e Fecho DoD (26/11).</li></ul>
        </div>
      </div>
      <div class="ciclo-debt-note"><strong>Débito Técnico / Escopo Pós-MVP:</strong> conectores externos <a href="../../visao-produto/solucao-proposta/#car-09">CAR-09</a> (Shifton) e <a href="../../visao-produto/solucao-proposta/#car-10">CAR-10</a> (contábil) mantidos fora do MVP conforme recorte aprovado.</div>
      <div class="ciclo-trace-strip">
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">DoR:</span> <a href="../../mvp/dor/#3-resultados-do-dor-incrementos-2-e-3-em-andamento">DoR Incr. 3 em Refinamento (25/11)</a></span>
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">DoD:</span> <a href="../../mvp/dod/#3-resultados-do-dod-incrementos-2-3-e-pos-mvp-nao-concluidos">DoD Incr. 3 Previsto (26/11)</a></span>
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">Requisitos / Evidências:</span> <a href="../../visao-produto/solucao-proposta/#car-03">CAR-03</a>, <a href="../../visao-produto/solucao-proposta/#car-04">CAR-04</a>, <a href="../../visao-produto/solucao-proposta/#car-05">CAR-05</a>, <a href="../../visao-produto/solucao-proposta/#car-08">CAR-08</a> • <a href="../../requisitos/#rnf01">RNF01</a>, <a href="../../requisitos/#rnf02">RNF02</a></span>
      </div>
    </div>

    <div class="ciclo-detail-card status-planejado" data-cycle="ciclo-4" data-days="26/11 27/11 28/11 29/11 30/11 01/12 02/12 03/12">
      <div class="ciclo-card-head">
        <div class="ciclo-card-head-left">
          <a id="ciclo-4"></a><a id="semana-13"></a>
          <span class="ciclo-rad-badge">Ciclo 4 • Cutover</span>
          <span class="ciclo-card-title">Semana 13 — Ciclo 4 / Cutover &amp; Entrega Final</span>
        </div>
        <span class="status-pill planejado">A Fazer</span>
      </div>
      <div class="ciclo-metrics-strip">
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Ciclo RAD</span>
          <span class="ciclo-metric-value">Incremento 4: Cutover, Aceite &amp; Transição</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Início</span>
          <span class="ciclo-metric-value">26/11/2026</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Fim</span>
          <span class="ciclo-metric-value">03/12/2026</span>
        </div>
        <div class="ciclo-metric-box">
          <span class="ciclo-metric-label">Duração</span>
          <span class="ciclo-metric-value">8 dias</span>
        </div>
      </div>
      <div class="ciclo-body-grid">
        <div class="ciclo-col-box is-work">
          <div class="ciclo-col-title">O que foi feito / Escopo</div>
          <ul>
            <li><strong>26/11 e 27/11:</strong> Início do Cutover após o DoD do Incr. 3, abertura da janela de correção pós-UAT e estabilização de produção;</li>
            <li><strong>28/11 e 29/11:</strong> Saneamento de apontamentos do UAT, testes de regressão finais e consolidação do Manual Operacional do Usuário;</li>
            <li><strong>30/11:</strong> Sessão de Homologação Incr. 4 / Final &amp; Termo de Aceite com a cliente, Cutover e deploy final em produção;</li>
            <li><strong>01/12 e 03/12:</strong> Fecho Cutover &amp; DoD Final, publicação do Ponto de Controle 4 (PC4), Apresentação Final do MVP e Encerramento da Disciplina.</li>
          </ul>
        </div>
        <div class="ciclo-col-box is-pending">
          <div class="ciclo-col-title">Pendentes</div>
          <ul><li>Janela de correção pós-UAT e estabilização (27–28/11);</li><li>Testes de regressão e Manual Operacional do Usuário (29/11);</li><li>Sessão de Homologação Final, Termo de Aceite e Deploy em Produção (30/11);</li><li>Fecho Cutover/DoD Final, PC4 (01/12) e Encerramento da Disciplina (03/12).</li></ul>
        </div>
      </div>
      <div class="ciclo-trace-strip">
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">DoR:</span> <a href="../../mvp/dor/">Critérios de Entrada Cutover (UAT)</a></span>
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">DoD:</span> <a href="../../mvp/dod/">DoD Final &amp; Termo de Aceite (01/12)</a></span>
        <span class="ciclo-trace-item"><span class="ciclo-trace-label">Requisitos / Evidências:</span> <a href="../../entregas/entrega-4/">Entrega 4 (PC4)</a> • <a href="../../requisitos/rastreabilidade/">Matriz Bidirecional</a></span>
      </div>
    </div>
</div>

<script>
(function() {
  var activeFilter = 'ciclo-2';
  var cards = Array.prototype.slice.call(document.querySelectorAll('#ciclos-cards-container .ciclo-detail-card'));
  var tracks = Array.prototype.slice.call(document.querySelectorAll('#roadmap-filter-tracks .roadmap-track'));
  var searchInput = document.getElementById('cycle-search-input');
  var countEl = document.getElementById('ciclos-results-count');
  var emptyEl = document.getElementById('ciclos-empty-state');

  function applyFilters() {
    var query = (searchInput ? searchInput.value : '').trim().toLowerCase();
    var visible = 0;

    cards.forEach(function(card) {
      var cycle = card.getAttribute('data-cycle') || '';
      var days = (card.getAttribute('data-days') || '').toLowerCase();
      var text = (card.textContent || '').toLowerCase();
      // Se houver pesquisa digitada, busca em todos os ciclos; caso contrário, filtra pelo ciclo selecionado
      var matchCycle = query ? true : (cycle === activeFilter);
      var matchQuery = (!query || days.indexOf(query) !== -1 || text.indexOf(query) !== -1);

      if (matchCycle && matchQuery) {
        card.style.display = '';
        visible++;
      } else {
        card.style.display = 'none';
      }
    });

    if (emptyEl) {
      emptyEl.style.display = visible === 0 ? 'block' : 'none';
    }
    if (countEl) {
      countEl.textContent = query
        ? 'Encontrados ' + visible + ' registros para "' + searchInput.value.trim() + '"'
        : 'Exibindo ' + visible + ' card(s) do ciclo selecionado';
    }
  }

  function setFilter(filter) {
    activeFilter = filter;
    tracks.forEach(function(tr) {
      tr.classList.toggle('is-selected', tr.getAttribute('data-filter') === filter);
    });
    applyFilters();
  }

  tracks.forEach(function(tr) {
    tr.addEventListener('click', function(e) {
      e.preventDefault();
      if (searchInput && searchInput.value) searchInput.value = '';
      setFilter(tr.getAttribute('data-filter'));
    });
  });

  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }

  function getFilterForHash(hash) {
    if (!hash) return null;
    hash = hash.toLowerCase();
    if (hash === '#pre-ciclo' || /^#semana-0[1-9]$/.test(hash)) return 'pre-ciclo';
    if (hash === '#ciclo-0') return 'ciclo-0';
    if (hash === '#ciclo-1' || hash === '#semana-10') return 'ciclo-1';
    if (hash === '#ciclo-2' || hash === '#semana-11') return 'ciclo-2';
    if (hash === '#ciclo-3' || hash === '#semana-12') return 'ciclo-3';
    if (hash === '#ciclo-4' || hash === '#semana-13') return 'ciclo-4';
    return null;
  }

  function handleHash() {
    var hash = window.location.hash;
    var f = getFilterForHash(hash);
    if (f) {
      setFilter(f);
      var target = document.querySelector(hash);
      if (target) {
        setTimeout(function() {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 80);
      }
    }
  }

  window.addEventListener('DOMContentLoaded', handleHash);
  window.addEventListener('hashchange', handleHash);
  setFilter(activeFilter);
})();
</script>

---

## Histórico de Versão

??? note "Ver Histórico de Versões e Alterações"

    | Versão | Data | Descrição | Autor(es) | Revisor(es) |
    | :---: | :---: | :--- | :--- | :--- |
    | `1.0` | 16/11/2026 | Criação do capítulo de detalhamento operacional dos Ciclos RAD e Semanas 01 a 13 com navegação profunda e rastreabilidade direta do Cronograma | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
    | `1.1` | 16/11/2026 | Atualização do status das Semanas 08 a 10 para Pendente (prorrogação para a Semana 11) e inclusão da sessão de validação em 16/11 | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
    | `1.2` | 17/11/2026 | Atualização das Semanas 08, 09 e 10 para o status "Concluído" com base nas entregas registradas; remoção das tabelas de pendências das semanas concluídas. | Eric Araújo | - |
    | `2.0` | 17/11/2026 | Alinhamento completo das datas, ciclos e status ao Cronograma (Pré-Ciclo, Ciclos 0 a 4), adição de campos estruturados (O que foi feito, Entregáveis, Status), botões de filtro por ciclo e barra de pesquisa por dia/incremento. | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
    | `2.1` | 17/11/2026 | Unificação da Linha Temporal de Iterações como botões de filtro, refatoração dos cards no padrão Lumio UI com Início, Fim, Duração, Ciclo RAD, Entregues e Pendentes. | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
