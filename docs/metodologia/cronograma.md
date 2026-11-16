# Cronograma

O planejamento metodológico, as folgas e o método de atualização de requisitos estão no capítulo [Planejamento](planejamento.md). Para a inspeção minuciosa das atividades e entregáveis de cada semana, consulte o [Detalhamento de Ciclos [Detalhamento de Ciclos & Semanas](../detalhamento-ciclos/) Semanas](detalhamento-ciclos.md).

---

<div class="crono-view-switcher">
  <!-- Inputs invisíveis para alternância de visualização -->
  <input type="radio" name="crono-view-mode" id="view-mode-calendar" class="crono-view-radio" checked>
  <input type="radio" name="crono-view-mode" id="view-mode-gantt" class="crono-view-radio">

  <!-- BARRA DE SELEÇÃO ENTRE CALENDÁRIO E GANTT -->
  <div class="crono-view-nav">
    <div class="crono-view-tabs">
      <label for="view-mode-calendar" class="crono-view-tab tab-calendar">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
        <span>Calendário Mensal</span>
      </label>
      <label for="view-mode-gantt" class="crono-view-tab tab-gantt">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
        <span>Linha do Tempo Gantt (Semanas 01 a 13)</span>
      </label>
    </div>
    <span class="crono-view-hint">Selecione para alternar entre o calendário mensal de eventos e o gráfico de Gantt executivo</span>
  </div>

  <!-- PAINEL 1: CALENDÁRIO MENSAL UNTITLED UI -->
  <div class="crono-view-panel panel-calendar-view">
<div class="uui-calendar-widget">
  <input type="radio" name="uui-active-month" id="uui-month-tab-ago" class="uui-month-radio">
  <input type="radio" name="uui-active-month" id="uui-month-tab-set" class="uui-month-radio">
  <input type="radio" name="uui-active-month" id="uui-month-tab-out" class="uui-month-radio">
  <input type="radio" name="uui-active-month" id="uui-month-tab-nov" class="uui-month-radio" checked>
  <input type="radio" name="uui-active-month" id="uui-month-tab-dez" class="uui-month-radio">
  <input type="radio" name="uui-event-filter" id="uui-filter-all" class="uui-filter-radio" checked>
  <input type="radio" name="uui-event-filter" id="uui-filter-ritos" class="uui-filter-radio">
  <input type="radio" name="uui-event-filter" id="uui-filter-marcos" class="uui-filter-radio">
  <input type="radio" name="uui-event-filter" id="uui-filter-rad" class="uui-filter-radio">
  <div class="uui-top-header">
    <div class="uui-breadcrumb-area">
      <div class="uui-breadcrumbs">
        <span class="uui-crumb-home"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></span>
        <span class="uui-crumb-sep">›</span>
        <span class="uui-crumb-parent">DUOC Finance</span>
        <span class="uui-crumb-sep">›</span>
        <span class="uui-crumb-current">Calendário</span>
      </div>
      <h3 class="uui-main-title">Calendário Mensal de Eventos</h3>
    </div>
    <div class="uui-header-info-tag">
      <span>Passe o mouse nos eventos para ver detalhes ou clique para navegar ao detalhamento</span>
    </div>
  </div>
  <div class="uui-filter-tabs-bar">
    <div class="uui-filter-tabs">
      <label for="uui-filter-all" class="uui-filter-tab filter-all">Todos os eventos</label>
      <label for="uui-filter-ritos" class="uui-filter-tab filter-ritos">Ritos &amp; Reuniões</label>
      <label for="uui-filter-marcos" class="uui-filter-tab filter-marcos">Marcos &amp; Entregas (PC)</label>
      <label for="uui-filter-rad" class="uui-filter-tab filter-rad">Ciclos RAD</label>
    </div>
    <span class="uui-filter-hint">Filtro em tempo real por categoria</span>
  </div>
  <div class="uui-month-toolbar">
    <div class="uui-month-heading-group">
      <div class="uui-month-meta meta-ago">
        <div class="uui-badge-box">
          <span class="uui-badge-m">AGO</span>
          <span class="uui-badge-d">11</span>
        </div>
        <div class="uui-month-texts">
          <h4 class="uui-month-title">Agosto 2026</h4>
          <span class="uui-month-range">01 Ago 2026 – 31 Ago 2026</span>
        </div>
      </div>
      <div class="uui-month-meta meta-set">
        <div class="uui-badge-box">
          <span class="uui-badge-m">SET</span>
          <span class="uui-badge-d">08</span>
        </div>
        <div class="uui-month-texts">
          <h4 class="uui-month-title">Setembro 2026</h4>
          <span class="uui-month-range">01 Set 2026 – 30 Set 2026</span>
        </div>
      </div>
      <div class="uui-month-meta meta-out">
        <div class="uui-badge-box">
          <span class="uui-badge-m">OUT</span>
          <span class="uui-badge-d">13</span>
        </div>
        <div class="uui-month-texts">
          <h4 class="uui-month-title">Outubro 2026</h4>
          <span class="uui-month-range">01 Out 2026 – 31 Out 2026</span>
        </div>
      </div>
      <div class="uui-month-meta meta-nov">
        <div class="uui-badge-box">
          <span class="uui-badge-m">NOV</span>
          <span class="uui-badge-d">16</span>
        </div>
        <div class="uui-month-texts">
          <h4 class="uui-month-title">Novembro 2026</h4>
          <span class="uui-month-range">01 Nov 2026 – 30 Nov 2026</span>
        </div>
      </div>
      <div class="uui-month-meta meta-dez">
        <div class="uui-badge-box">
          <span class="uui-badge-m">DEZ</span>
          <span class="uui-badge-d">01</span>
        </div>
        <div class="uui-month-texts">
          <h4 class="uui-month-title">Dezembro 2026</h4>
          <span class="uui-month-range">01 Dez 2026 – 31 Dez 2026</span>
        </div>
      </div>
    </div>
    <div class="uui-toolbar-actions">
      <div class="uui-segmented-nav">
        <label for="uui-month-tab-out" class="uui-nav-arrow" title="Mês anterior">‹</label>
        <label for="uui-month-tab-nov" class="uui-nav-today">Hoje</label>
        <label for="uui-month-tab-dez" class="uui-nav-arrow" title="Próximo mês">›</label>
      </div>
      <div class="uui-month-picker-pills">
        <label for="uui-month-tab-ago" class="uui-picker-pill pill-ago">Agosto</label>
        <label for="uui-month-tab-set" class="uui-picker-pill pill-set">Setembro</label>
        <label for="uui-month-tab-out" class="uui-picker-pill pill-out">Outubro</label>
        <label for="uui-month-tab-nov" class="uui-picker-pill pill-nov">Novembro</label>
        <label for="uui-month-tab-dez" class="uui-picker-pill pill-dez">Dezembro</label>
      </div>
    </div>
  </div>
  <div class="uui-calendar-body">
<div class="uui-month-table-wrapper month-ago">
  <table class="uui-cal-table">
    <thead>
      <tr>
        <th>Seg</th><th>Ter</th><th>Qua</th><th>Qui</th><th>Sex</th><th>Sab</th><th>Dom</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="uui-cal-cell other-month">
          <div class="uui-cell-top"><span class="uui-cell-num muted">27</span></div>
        </td>
        <td class="uui-cal-cell other-month">
          <div class="uui-cell-top"><span class="uui-cell-num muted">28</span></div>
        </td>
        <td class="uui-cal-cell other-month">
          <div class="uui-cell-top"><span class="uui-cell-num muted">29</span></div>
        </td>
        <td class="uui-cal-cell other-month">
          <div class="uui-cell-top"><span class="uui-cell-num muted">30</span></div>
        </td>
        <td class="uui-cal-cell other-month">
          <div class="uui-cell-top"><span class="uui-cell-num muted">31</span></div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">1</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-01" class="uui-event-chip orange" data-category="marcos">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Recesso Acadêmico</span>
              </span>
              <span class="uui-chip-time">Dia todo</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Recesso Acadêmico</span>
                <span class="tooltip-chip-meta">Dia todo • Marco Avaliativo</span>
                <span class="tooltip-chip-desc">Recesso letivo do calendário acadêmico da UnB.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">2</span>
          </div>
        </td>
      </tr>
      <tr>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">3</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">4</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">5</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">6</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">7</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">8</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">9</span>
          </div>
        </td>
      </tr>
      <tr>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">10</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">11</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-01" class="uui-event-chip purple" data-category="ritos">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Início Semestre 2026.2 (U1)</span>
              </span>
              <span class="uui-chip-time">08:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Início Semestre 2026.2 (U1)</span>
                <span class="tooltip-chip-meta">08:00 • Rito / Reunião</span>
                <span class="tooltip-chip-desc">Primeiro dia letivo da disciplina Requisitos de Software.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">12</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-01" class="uui-event-chip blue" data-category="rad">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Definição Parceira: DUOC</span>
              </span>
              <span class="uui-chip-time">14:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Definição Parceira: DUOC</span>
                <span class="tooltip-chip-meta">14:00 • Ciclo RAD</span>
                <span class="tooltip-chip-desc">Escolha oficial da DUOC Arquitetura e Engenharia como parceira.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">13</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">14</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">15</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">16</span>
          </div>
        </td>
      </tr>
      <tr>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">17</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">18</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">19</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-02" class="uui-event-chip purple" data-category="ritos">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Contato Exploratório DUOC</span>
              </span>
              <span class="uui-chip-time">15:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Contato Exploratório DUOC</span>
                <span class="tooltip-chip-meta">15:00 • Rito / Reunião</span>
                <span class="tooltip-chip-desc">Reunião de alinhamento preliminar com Maria Beatryz.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">20</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">21</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">22</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">23</span>
          </div>
        </td>
      </tr>
      <tr>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">24</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-02" class="uui-event-chip purple" data-category="ritos">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Diagrama Ishikawa (4 Causas)</span>
              </span>
              <span class="uui-chip-time">19:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Diagrama Ishikawa (4 Causas)</span>
                <span class="tooltip-chip-meta">19:00 • Rito / Reunião</span>
                <span class="tooltip-chip-desc">Mapeamento das causas-raiz de dores em gestão financeira e RVT.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">25</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">26</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-02" class="uui-event-chip orange" data-category="rad">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Matriz de Riscos & LGPD</span>
              </span>
              <span class="uui-chip-time">20:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Matriz de Riscos & LGPD</span>
                <span class="tooltip-chip-meta">20:00 • Ciclo RAD</span>
                <span class="tooltip-chip-desc">Estruturação das salvaguardas de privacidade e controle de acesso.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">27</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-02" class="uui-event-chip blue" data-category="rad">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Setup Docs as Code (Pages)</span>
              </span>
              <span class="uui-chip-time">18:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Setup Docs as Code (Pages)</span>
                <span class="tooltip-chip-meta">18:00 • Ciclo RAD</span>
                <span class="tooltip-chip-desc">Configuração do MkDocs Material e pipeline no GitHub Pages.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">28</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">29</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">30</span>
          </div>
        </td>
      </tr>
      <tr>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">31</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-03" class="uui-event-chip purple" data-category="ritos">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Mixer Board & Alinhamento</span>
              </span>
              <span class="uui-chip-time">20:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Mixer Board & Alinhamento</span>
                <span class="tooltip-chip-meta">20:00 • Rito / Reunião</span>
                <span class="tooltip-chip-desc">Equalização metodológica e escopo macro do projeto.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell other-month">
          <div class="uui-cell-top"><span class="uui-cell-num muted">1</span></div>
        </td>
        <td class="uui-cal-cell other-month">
          <div class="uui-cell-top"><span class="uui-cell-num muted">2</span></div>
        </td>
        <td class="uui-cal-cell other-month">
          <div class="uui-cell-top"><span class="uui-cell-num muted">3</span></div>
        </td>
        <td class="uui-cal-cell other-month">
          <div class="uui-cell-top"><span class="uui-cell-num muted">4</span></div>
        </td>
        <td class="uui-cal-cell other-month">
          <div class="uui-cell-top"><span class="uui-cell-num muted">5</span></div>
        </td>
        <td class="uui-cal-cell other-month">
          <div class="uui-cell-top"><span class="uui-cell-num muted">6</span></div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div class="uui-month-table-wrapper month-set">
  <table class="uui-cal-table">
    <thead>
      <tr>
        <th>Seg</th><th>Ter</th><th>Qua</th><th>Qui</th><th>Sex</th><th>Sab</th><th>Dom</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="uui-cal-cell other-month">
          <div class="uui-cell-top"><span class="uui-cell-num muted">31</span></div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">1</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-03" class="uui-event-chip purple" data-category="ritos">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Alinhamento de Escopo</span>
              </span>
              <span class="uui-chip-time">19:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Alinhamento de Escopo</span>
                <span class="tooltip-chip-meta">19:00 • Rito / Reunião</span>
                <span class="tooltip-chip-desc">Refinamento das fronteiras do sistema DUOC Finance.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">2</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-03" class="uui-event-chip purple" data-category="rad">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Especificação CARs & OEs</span>
              </span>
              <span class="uui-chip-time">20:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Especificação CARs & OEs</span>
                <span class="tooltip-chip-meta">20:00 • Ciclo RAD</span>
                <span class="tooltip-chip-desc">Mapeamento das 12 Características e 4 Objetivos Específicos.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">3</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">4</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">5</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-04" class="uui-event-chip green" data-category="ritos">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Reunião 01 (Cliente DUOC)</span>
              </span>
              <span class="uui-chip-time">14:30</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Reunião 01 (Cliente DUOC)</span>
                <span class="tooltip-chip-meta">14:30 • Rito / Reunião</span>
                <span class="tooltip-chip-desc">Entrevista semiestruturada e elicitação inicial de requisitos.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">6</span>
          </div>
        </td>
      </tr>
      <tr>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">7</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-04" class="uui-event-chip purple" data-category="ritos">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Reuniões 02 e 03 (Internas)</span>
              </span>
              <span class="uui-chip-time">10:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Reuniões 02 e 03 (Internas)</span>
                <span class="tooltip-chip-meta">10:00 • Rito / Reunião</span>
                <span class="tooltip-chip-desc">Refinamento técnico de dados e sincronização de entregáveis.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">8</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-04" class="uui-event-chip red" data-category="marcos">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Ponto de Controle 1 (PC1)</span>
              </span>
              <span class="uui-chip-time">08:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Ponto de Controle 1 (PC1)</span>
                <span class="tooltip-chip-meta">08:00 • Marco Avaliativo</span>
                <span class="tooltip-chip-desc">Marco avaliativo: Entrega 1 - Documento de Visão e Planejamento.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">9</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-04" class="uui-event-chip purple" data-category="ritos">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Retrospectiva Ciclo 0</span>
              </span>
              <span class="uui-chip-time">19:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Retrospectiva Ciclo 0</span>
                <span class="tooltip-chip-meta">19:00 • Rito / Reunião</span>
                <span class="tooltip-chip-desc">Avaliação do processo de concepção e diagnóstico inicial.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">10</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">11</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">12</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">13</span>
          </div>
        </td>
      </tr>
      <tr>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">14</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">15</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-05" class="uui-event-chip blue" data-category="rad">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Início Elicitação Detalhada</span>
              </span>
              <span class="uui-chip-time">14:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Início Elicitação Detalhada</span>
                <span class="tooltip-chip-meta">14:00 • Ciclo RAD</span>
                <span class="tooltip-chip-desc">Início das atividades formais de Engenharia de Requisitos.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">16</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">17</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-05" class="uui-event-chip purple" data-category="ritos">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Reunião 04 (Alinhamento)</span>
              </span>
              <span class="uui-chip-time">19:30</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Reunião 04 (Alinhamento)</span>
                <span class="tooltip-chip-meta">19:30 • Rito / Reunião</span>
                <span class="tooltip-chip-desc">Validação das regras de apontamento de campo e despesas.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">18</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">19</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">20</span>
          </div>
        </td>
      </tr>
      <tr>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">21</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">22</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">23</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-06" class="uui-event-chip blue" data-category="rad">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Modelagem Catálogo URPS+</span>
              </span>
              <span class="uui-chip-time">20:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Modelagem Catálogo URPS+</span>
                <span class="tooltip-chip-meta">20:00 • Ciclo RAD</span>
                <span class="tooltip-chip-desc">Estruturação taxonômica dos 40 RFs e 20 RNFs do catálogo.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">24</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-06" class="uui-event-chip green" data-category="ritos">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Reunião 05 (Prioriz. 4x4)</span>
              </span>
              <span class="uui-chip-time">19:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Reunião 05 (Prioriz. 4x4)</span>
                <span class="tooltip-chip-meta">19:00 • Rito / Reunião</span>
                <span class="tooltip-chip-desc">Sessão interna de priorização pela Matriz 4x4 e delimitação do MVP.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">25</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-06" class="uui-event-chip purple" data-category="rad">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Formalização DoR & DoD</span>
              </span>
              <span class="uui-chip-time">18:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Formalização DoR & DoD</span>
                <span class="tooltip-chip-meta">18:00 • Ciclo RAD</span>
                <span class="tooltip-chip-desc">Critérios de prontidão e conclusão para os incrementos RAD.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">26</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">27</span>
          </div>
        </td>
      </tr>
      <tr>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">28</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">29</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">30</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-07" class="uui-event-chip blue" data-category="rad">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Refinamento Backlog INVEST</span>
              </span>
              <span class="uui-chip-time">20:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Refinamento Backlog INVEST</span>
                <span class="tooltip-chip-meta">20:00 • Ciclo RAD</span>
                <span class="tooltip-chip-desc">Decomposição das histórias de usuário e casos de teste.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell other-month">
          <div class="uui-cell-top"><span class="uui-cell-num muted">1</span></div>
        </td>
        <td class="uui-cal-cell other-month">
          <div class="uui-cell-top"><span class="uui-cell-num muted">2</span></div>
        </td>
        <td class="uui-cal-cell other-month">
          <div class="uui-cell-top"><span class="uui-cell-num muted">3</span></div>
        </td>
        <td class="uui-cal-cell other-month">
          <div class="uui-cell-top"><span class="uui-cell-num muted">4</span></div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div class="uui-month-table-wrapper month-out">
  <table class="uui-cal-table">
    <thead>
      <tr>
        <th>Seg</th><th>Ter</th><th>Qua</th><th>Qui</th><th>Sex</th><th>Sab</th><th>Dom</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="uui-cal-cell other-month">
          <div class="uui-cell-top"><span class="uui-cell-num muted">28</span></div>
        </td>
        <td class="uui-cal-cell other-month">
          <div class="uui-cell-top"><span class="uui-cell-num muted">29</span></div>
        </td>
        <td class="uui-cal-cell other-month">
          <div class="uui-cell-top"><span class="uui-cell-num muted">30</span></div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">1</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">2</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-07" class="uui-event-chip green" data-category="ritos">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Validação Figma (Ata 06)</span>
              </span>
              <span class="uui-chip-time">15:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Validação Figma (Ata 06)</span>
                <span class="tooltip-chip-meta">15:00 • Rito / Reunião</span>
                <span class="tooltip-chip-desc">Aprovação presencial dos fluxos no Figma com Maria Beatryz.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">3</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">4</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-08" class="uui-event-chip purple" data-category="rad">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Revisão de DoR e Matrizes</span>
              </span>
              <span class="uui-chip-time">19:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Revisão de DoR e Matrizes</span>
                <span class="tooltip-chip-meta">19:00 • Ciclo RAD</span>
                <span class="tooltip-chip-desc">Consolidação da matriz de rastreabilidade para a Entrega 2.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
      </tr>
      <tr>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">5</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">6</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">7</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">8</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">9</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-08" class="uui-event-chip orange" data-category="marcos">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Fecho Entrega 2</span>
              </span>
              <span class="uui-chip-time">23:59</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Fecho Entrega 2</span>
                <span class="tooltip-chip-meta">23:59 • Marco Avaliativo</span>
                <span class="tooltip-chip-desc">Congelamento dos artefatos da Entrega 2 de Requisitos.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">10</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">11</span>
          </div>
        </td>
      </tr>
      <tr>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">12</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-09" class="uui-event-chip purple" data-category="ritos">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Feriado / Gravação PC2</span>
              </span>
              <span class="uui-chip-time">14:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Feriado / Gravação PC2</span>
                <span class="tooltip-chip-meta">14:00 • Rito / Reunião</span>
                <span class="tooltip-chip-desc">Gravação do vídeo de apresentação do Ponto de Controle 2.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">13</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-09" class="uui-event-chip red" data-category="marcos">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Ponto de Controle 2 (PC2)</span>
              </span>
              <span class="uui-chip-time">08:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Ponto de Controle 2 (PC2)</span>
                <span class="tooltip-chip-meta">08:00 • Marco Avaliativo</span>
                <span class="tooltip-chip-desc">Marco avaliativo: Entrega 2 - Requisitos, MVP e Rastreabilidade.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">14</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">15</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-09" class="uui-event-chip red" data-category="marcos">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Apresentações PC2</span>
              </span>
              <span class="uui-chip-time">10:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Apresentações PC2</span>
                <span class="tooltip-chip-meta">10:00 • Marco Avaliativo</span>
                <span class="tooltip-chip-desc">Sessão síncrona de avaliação e arguição técnica da Entrega 2.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">16</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">17</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">18</span>
          </div>
        </td>
      </tr>
      <tr>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">19</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">20</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-10" class="uui-event-chip blue" data-category="rad">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Início Incremento 1 (RAD)</span>
              </span>
              <span class="uui-chip-time">14:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Início Incremento 1 (RAD)</span>
                <span class="tooltip-chip-meta">14:00 • Ciclo RAD</span>
                <span class="tooltip-chip-desc">Arranque da Construção: Módulo Colaboradores e Autenticação.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">21</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">22</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-10" class="uui-event-chip blue" data-category="rad">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Modelagem DER Supabase</span>
              </span>
              <span class="uui-chip-time">19:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Modelagem DER Supabase</span>
                <span class="tooltip-chip-meta">19:00 • Ciclo RAD</span>
                <span class="tooltip-chip-desc">Estruturação relacional de tabelas de colaboradores e permissões.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">23</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-10" class="uui-event-chip blue" data-category="rad">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">CI/CD Vercel & Actions</span>
              </span>
              <span class="uui-chip-time">18:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">CI/CD Vercel & Actions</span>
                <span class="tooltip-chip-meta">18:00 • Ciclo RAD</span>
                <span class="tooltip-chip-desc">Automatização de build, testes e deploy contínuo.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">24</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">25</span>
          </div>
        </td>
      </tr>
      <tr>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">26</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-10" class="uui-event-chip green" data-category="rad">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Implementação CAR-01 / LGPD</span>
              </span>
              <span class="uui-chip-time">19:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Implementação CAR-01 / LGPD</span>
                <span class="tooltip-chip-meta">19:00 • Ciclo RAD</span>
                <span class="tooltip-chip-desc">Endpoints de cadastro seguro e anonimização de dados pessoais.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">27</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-10" class="uui-event-chip orange" data-category="marcos">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Ajuste Folga Técnica (S08)</span>
              </span>
              <span class="uui-chip-time">20:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Ajuste Folga Técnica (S08)</span>
                <span class="tooltip-chip-meta">20:00 • Marco Avaliativo</span>
                <span class="tooltip-chip-desc">Realocação da folga para absorver refinamento das regras de diárias.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">28</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-10" class="uui-event-chip blue" data-category="rad">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Setup ORM / Supabase</span>
              </span>
              <span class="uui-chip-time">19:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Setup ORM / Supabase</span>
                <span class="tooltip-chip-meta">19:00 • Ciclo RAD</span>
                <span class="tooltip-chip-desc">Configuração de clientes de banco e migrações estruturadas.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">29</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">30</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-10" class="uui-event-chip blue" data-category="rad">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Refino RBAC & Auth JWT</span>
              </span>
              <span class="uui-chip-time">20:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Refino RBAC & Auth JWT</span>
                <span class="tooltip-chip-meta">20:00 • Ciclo RAD</span>
                <span class="tooltip-chip-desc">Proteção de rotas e perfis de Administrador vs Técnico de Campo.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">31</span>
          </div>
        </td>
        <td class="uui-cal-cell other-month">
          <div class="uui-cell-top"><span class="uui-cell-num muted">1</span></div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div class="uui-month-table-wrapper month-nov">
  <table class="uui-cal-table">
    <thead>
      <tr>
        <th>Seg</th><th>Ter</th><th>Qua</th><th>Qui</th><th>Sex</th><th>Sab</th><th>Dom</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="uui-cal-cell other-month">
          <div class="uui-cell-top"><span class="uui-cell-num muted">26</span></div>
        </td>
        <td class="uui-cal-cell other-month">
          <div class="uui-cell-top"><span class="uui-cell-num muted">27</span></div>
        </td>
        <td class="uui-cal-cell other-month">
          <div class="uui-cell-top"><span class="uui-cell-num muted">28</span></div>
        </td>
        <td class="uui-cal-cell other-month">
          <div class="uui-cell-top"><span class="uui-cell-num muted">29</span></div>
        </td>
        <td class="uui-cal-cell other-month">
          <div class="uui-cell-top"><span class="uui-cell-num muted">30</span></div>
        </td>
        <td class="uui-cal-cell other-month">
          <div class="uui-cell-top"><span class="uui-cell-num muted">31</span></div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">1</span>
          </div>
        </td>
      </tr>
      <tr>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">2</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-10" class="uui-event-chip orange" data-category="marcos">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Feriado Finados</span>
              </span>
              <span class="uui-chip-time">Dia todo</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Feriado Finados</span>
                <span class="tooltip-chip-meta">Dia todo • Marco Avaliativo</span>
                <span class="tooltip-chip-desc">Feriado nacional - pausa programada sem impacto em entregas.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">3</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">4</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">5</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-10" class="uui-event-chip green" data-category="rad">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Fecho Incr. 1 (DoD)</span>
              </span>
              <span class="uui-chip-time">18:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Fecho Incr. 1 (DoD)</span>
                <span class="tooltip-chip-meta">18:00 • Ciclo RAD</span>
                <span class="tooltip-chip-desc">Incremento 1 concluído com DoR e DoD 100% verificados.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">6</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">7</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">8</span>
          </div>
        </td>
      </tr>
      <tr>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">9</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">10</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">11</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-11" class="uui-event-chip purple" data-category="rad">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Revisão Requisitos (40 RFs)</span>
              </span>
              <span class="uui-chip-time">19:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Revisão Requisitos (40 RFs)</span>
                <span class="tooltip-chip-meta">19:00 • Ciclo RAD</span>
                <span class="tooltip-chip-desc">Auditoria do catálogo e matrizes de rastreabilidade frente ao código.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">12</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-11" class="uui-event-chip blue" data-category="rad">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Início Incremento 2 (RVT)</span>
              </span>
              <span class="uui-chip-time">14:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Início Incremento 2 (RVT)</span>
                <span class="tooltip-chip-meta">14:00 • Ciclo RAD</span>
                <span class="tooltip-chip-desc">Construção do apontamento móvel de horas e registro de despesas.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">13</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-11" class="uui-event-chip blue" data-category="rad">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Validação Telas de Campo</span>
              </span>
              <span class="uui-chip-time">20:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Validação Telas de Campo</span>
                <span class="tooltip-chip-meta">20:00 • Ciclo RAD</span>
                <span class="tooltip-chip-desc">Teste ergonômico da interface de apontamento móvel no React SPA.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">14</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">15</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-11" class="uui-event-chip orange" data-category="marcos">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Feriado Proclamação</span>
              </span>
              <span class="uui-chip-time">Dia todo</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Feriado Proclamação</span>
                <span class="tooltip-chip-meta">Dia todo • Marco Avaliativo</span>
                <span class="tooltip-chip-desc">Feriado nacional.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
      </tr>
      <tr>
        <td class="uui-cal-cell uui-today-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num today-badge">16</span>
            <span class="uui-today-text">Hoje</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-11" class="uui-event-chip green" data-category="rad">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">DoR Incr. 2 & Apontamento</span>
              </span>
              <span class="uui-chip-time">10:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">DoR Incr. 2 & Apontamento</span>
                <span class="tooltip-chip-meta">10:00 • Ciclo RAD</span>
                <span class="tooltip-chip-desc">Ativação das rotas de apontamento e validação de regras de jornada.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
            <a href="../detalhamento-ciclos/#semana-11" class="uui-event-chip purple" data-category="ritos">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Planejamento Semanal</span>
              </span>
              <span class="uui-chip-time">19:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Planejamento Semanal</span>
                <span class="tooltip-chip-meta">19:00 • Rito / Reunião</span>
                <span class="tooltip-chip-desc">Sincronização da equipe para finalização do marco PC3.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">17</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-11" class="uui-event-chip red" data-category="marcos">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Ponto de Controle 3 (PC3)</span>
              </span>
              <span class="uui-chip-time">08:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Ponto de Controle 3 (PC3)</span>
                <span class="tooltip-chip-meta">08:00 • Marco Avaliativo</span>
                <span class="tooltip-chip-desc">Marco avaliativo: Entrega 3 - Incrementos 1 e 2 funcionais.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">18</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-12" class="uui-event-chip purple" data-category="ritos">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Gravação Vídeo Técnico PC3</span>
              </span>
              <span class="uui-chip-time">14:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Gravação Vídeo Técnico PC3</span>
                <span class="tooltip-chip-meta">14:00 • Rito / Reunião</span>
                <span class="tooltip-chip-desc">Gravação da demonstração do software em execução.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">19</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-12" class="uui-event-chip red" data-category="marcos">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Apresentações PC3</span>
              </span>
              <span class="uui-chip-time">10:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Apresentações PC3</span>
                <span class="tooltip-chip-meta">10:00 • Marco Avaliativo</span>
                <span class="tooltip-chip-desc">Sessão síncrona de apresentação e arguição dos incrementos.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">20</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-12" class="uui-event-chip orange" data-category="marcos">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Feriado Consciência Negra</span>
              </span>
              <span class="uui-chip-time">Dia todo</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Feriado Consciência Negra</span>
                <span class="tooltip-chip-meta">Dia todo • Marco Avaliativo</span>
                <span class="tooltip-chip-desc">Feriado nacional.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">21</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-12" class="uui-event-chip blue" data-category="rad">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Motor Financeiro (CAR-03)</span>
              </span>
              <span class="uui-chip-time">14:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Motor Financeiro (CAR-03)</span>
                <span class="tooltip-chip-meta">14:00 • Ciclo RAD</span>
                <span class="tooltip-chip-desc">Implementação dos algoritmos de apuração de diárias e comissões.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">22</span>
          </div>
        </td>
      </tr>
      <tr>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">23</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-12" class="uui-event-chip blue" data-category="rad">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Fechamento & Folha (CAR-05)</span>
              </span>
              <span class="uui-chip-time">19:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Fechamento & Folha (CAR-05)</span>
                <span class="tooltip-chip-meta">19:00 • Ciclo RAD</span>
                <span class="tooltip-chip-desc">Geração de espelho de pagamentos e relatórios por contrato.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">24</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">25</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-12" class="uui-event-chip orange" data-category="marcos">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Code Freeze Incr. 3</span>
              </span>
              <span class="uui-chip-time">22:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Code Freeze Incr. 3</span>
                <span class="tooltip-chip-meta">22:00 • Marco Avaliativo</span>
                <span class="tooltip-chip-desc">Congelamento de código para execução dos testes de regressão.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">26</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-12" class="uui-event-chip purple" data-category="rad">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Testes de Carga & Regressão</span>
              </span>
              <span class="uui-chip-time">19:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Testes de Carga & Regressão</span>
                <span class="tooltip-chip-meta">19:00 • Ciclo RAD</span>
                <span class="tooltip-chip-desc">Aferição de RNF01 (tempo de resposta) e RNF02 (estabilidade).</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">27</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-12" class="uui-event-chip green" data-category="ritos">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Sessão Homologação UAT DUOC</span>
              </span>
              <span class="uui-chip-time">14:30</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Sessão Homologação UAT DUOC</span>
                <span class="tooltip-chip-meta">14:30 • Rito / Reunião</span>
                <span class="tooltip-chip-desc">Validação sociotécnica final do sistema com Maria Beatryz.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">28</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-13" class="uui-event-chip orange" data-category="marcos">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Janela Correção Pós-UAT</span>
              </span>
              <span class="uui-chip-time">Dia todo</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Janela Correção Pós-UAT</span>
                <span class="tooltip-chip-meta">Dia todo • Marco Avaliativo</span>
                <span class="tooltip-chip-desc">Folga técnica dedicada para correção de apontamentos do UAT.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">29</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-13" class="uui-event-chip green" data-category="ritos">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Validação Final Pós-UAT</span>
              </span>
              <span class="uui-chip-time">18:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Validação Final Pós-UAT</span>
                <span class="tooltip-chip-meta">18:00 • Rito / Reunião</span>
                <span class="tooltip-chip-desc">Homologação dos ajustes finos com a cliente.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
      </tr>
      <tr>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">30</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-13" class="uui-event-chip blue" data-category="rad">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Aceite & Início Cutover</span>
              </span>
              <span class="uui-chip-time">19:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Aceite & Início Cutover</span>
                <span class="tooltip-chip-meta">19:00 • Ciclo RAD</span>
                <span class="tooltip-chip-desc">Termo de aceite do MVP e início da transição para produção.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell other-month">
          <div class="uui-cell-top"><span class="uui-cell-num muted">1</span></div>
        </td>
        <td class="uui-cal-cell other-month">
          <div class="uui-cell-top"><span class="uui-cell-num muted">2</span></div>
        </td>
        <td class="uui-cal-cell other-month">
          <div class="uui-cell-top"><span class="uui-cell-num muted">3</span></div>
        </td>
        <td class="uui-cal-cell other-month">
          <div class="uui-cell-top"><span class="uui-cell-num muted">4</span></div>
        </td>
        <td class="uui-cal-cell other-month">
          <div class="uui-cell-top"><span class="uui-cell-num muted">5</span></div>
        </td>
        <td class="uui-cal-cell other-month">
          <div class="uui-cell-top"><span class="uui-cell-num muted">6</span></div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
<div class="uui-month-table-wrapper month-dez">
  <table class="uui-cal-table">
    <thead>
      <tr>
        <th>Seg</th><th>Ter</th><th>Qua</th><th>Qui</th><th>Sex</th><th>Sab</th><th>Dom</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="uui-cal-cell other-month">
          <div class="uui-cell-top"><span class="uui-cell-num muted">30</span></div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">1</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-13" class="uui-event-chip red" data-category="marcos">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Ponto de Controle 4 (PC4)</span>
              </span>
              <span class="uui-chip-time">08:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Ponto de Controle 4 (PC4)</span>
                <span class="tooltip-chip-meta">08:00 • Marco Avaliativo</span>
                <span class="tooltip-chip-desc">Marco avaliativo final: Entrega do MVP completo e Visão consolidada.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
            <a href="../detalhamento-ciclos/#semana-13" class="uui-event-chip red" data-category="marcos">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Apresentação Final MVP</span>
              </span>
              <span class="uui-chip-time">10:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Apresentação Final MVP</span>
                <span class="tooltip-chip-meta">10:00 • Marco Avaliativo</span>
                <span class="tooltip-chip-desc">Banca avaliativa de encerramento do semestre.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">2</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">3</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-13" class="uui-event-chip purple" data-category="ritos">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Encerramento da Disciplina</span>
              </span>
              <span class="uui-chip-time">10:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Encerramento da Disciplina</span>
                <span class="tooltip-chip-meta">10:00 • Rito / Reunião</span>
                <span class="tooltip-chip-desc">Consolidação das avaliações e feedback dos docentes.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">4</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">5</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">6</span>
          </div>
        </td>
      </tr>
      <tr>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">7</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">8</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">9</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">10</span>
          </div>
          <div class="uui-events-stack">
            <a href="../detalhamento-ciclos/#semana-13" class="uui-event-chip green" data-category="marcos">
              <span class="uui-chip-content">
                <span class="uui-chip-dot"></span>
                <span class="uui-chip-title">Publicação Oficial de Notas</span>
              </span>
              <span class="uui-chip-time">18:00</span>
              <span class="uui-chip-tooltip">
                <span class="tooltip-chip-title">Publicação Oficial de Notas</span>
                <span class="tooltip-chip-meta">18:00 • Marco Avaliativo</span>
                <span class="tooltip-chip-desc">Fechamento do diário de classe no SIGAA UnB.</span>
                <span class="tooltip-chip-action">Clique para ver o detalhamento da semana ↗</span>
              </span>
            </a>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">11</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">12</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">13</span>
          </div>
        </td>
      </tr>
      <tr>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">14</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">15</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">16</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">17</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">18</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">19</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">20</span>
          </div>
        </td>
      </tr>
      <tr>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">21</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">22</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">23</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">24</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">25</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">26</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">27</span>
          </div>
        </td>
      </tr>
      <tr>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">28</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">29</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">30</span>
          </div>
        </td>
        <td class="uui-cal-cell">
          <div class="uui-cell-top">
            <span class="uui-cell-num">31</span>
          </div>
        </td>
        <td class="uui-cal-cell other-month">
          <div class="uui-cell-top"><span class="uui-cell-num muted">1</span></div>
        </td>
        <td class="uui-cal-cell other-month">
          <div class="uui-cell-top"><span class="uui-cell-num muted">2</span></div>
        </td>
        <td class="uui-cal-cell other-month">
          <div class="uui-cell-top"><span class="uui-cell-num muted">3</span></div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
  </div>
</div>
  </div>

  <!-- PAINEL 2: GANTT TIMELINE SEMANAL -->
  <div class="crono-view-panel panel-gantt-view">
<div class="gantt-widget">
  <div class="gantt-top-header">
    <div class="gantt-title-area">
      <h3 class="gantt-main-title">Linha do Tempo (Gantt Executivo)</h3>
      <span class="gantt-header-sub">Distribuição Semanal das Fases do RAD • Semestre 2026.2</span>
    </div>
    <div class="gantt-header-badge-group">
      <span class="gantt-today-indicator-badge">
        <span class="today-pulse-dot"></span>
        <span>Hoje: 16 de Novembro (Semana 11)</span>
      </span>
    </div>
  </div>

  <div class="gantt-table-wrapper">
    <table class="gantt-table">
      <thead>
        <tr>
          <th class="task-col">Fases &amp; Atividades (RAD)</th>
          <th class="gantt-cycle-col cycle-c0">
            <span class="cycle-col-badge c0">Ciclo 0: Concepção</span>
            <div class="cycle-col-title">Sem 01 - 03</div>
            <span class="gantt-col-sub">11 Ago - 31 Ago</span>
          </th>
          <th class="gantt-cycle-col cycle-c0">
            <span class="cycle-col-badge c0">Ciclo 0: Requisitos (PC1)</span>
            <div class="cycle-col-title">Sem 04 - 06</div>
            <span class="gantt-col-sub">01 Set - 21 Set</span>
          </th>
          <th class="gantt-cycle-col cycle-c0">
            <span class="cycle-col-badge c0">Ciclo 0: Figma &amp; PC2</span>
            <div class="cycle-col-title">Sem 07 - 09</div>
            <span class="gantt-col-sub">22 Set - 19 Out</span>
          </th>
          <th class="gantt-cycle-col cycle-c1-c2 gantt-today-col">
            <div class="gantt-today-badge">16</div>
            <span class="cycle-col-badge c1-c2">Incr. 1 &amp; 2 (Hoje)</span>
            <div class="cycle-col-title">Sem 10 - 11</div>
            <span class="gantt-col-sub">20 Out - 16 Nov</span>
          </th>
          <th class="gantt-cycle-col cycle-c3">
            <span class="cycle-col-badge c3">Ciclo 3: Folha &amp; UAT</span>
            <div class="cycle-col-title">Sem 12</div>
            <span class="gantt-col-sub">17 Nov - 23 Nov</span>
          </th>
          <th class="gantt-cycle-col cycle-c4">
            <span class="cycle-col-badge c4">Ciclo 4: Cutover (PC4)</span>
            <div class="cycle-col-title">Sem 13</div>
            <span class="gantt-col-sub">24 Nov - 01 Dez</span>
          </th>
        </tr>
      </thead>
      <tbody>
        <!-- CATEGORIA: PLANNING (PURPLE) -->
        <tr class="gantt-cat-row">
          <td colspan="7">
            <div class="gantt-cat-title">
              <span class="gantt-cat-dot purple"></span>
              <span class="gantt-cat-text">Planning &amp; Elicitação (RAD Plan)</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="gantt-task-name">
              <span class="gantt-check-icon checked">✓</span>
              <span>Project kickoff &amp; Alinhamento DUOC</span>
            </div>
          </td>
          <td class="gantt-bar-cell"><a href="../detalhamento-ciclos/#semana-01" class="gantt-bar purple" style="width: 85%; margin-left: 8%;">Kickoff (19/08)</a></td>
          <td></td><td></td><td class="gantt-today-col"></td><td></td><td></td>
        </tr>
        <tr>
          <td>
            <div class="gantt-task-name">
              <span class="gantt-check-icon checked">✓</span>
              <span>Definição de escopo &amp; Ishikawa</span>
            </div>
          </td>
          <td class="gantt-bar-cell"><a href="../detalhamento-ciclos/#semana-02" class="gantt-bar purple" style="width: 90%; margin-left: 5%;">Ishikawa 4M</a></td>
          <td></td><td></td><td class="gantt-today-col"></td><td></td><td></td>
        </tr>
        <tr>
          <td>
            <div class="gantt-task-name">
              <span class="gantt-check-icon checked">✓</span>
              <span>Catálogo URPS+ &amp; Matriz 4x4</span>
            </div>
          </td>
          <td></td>
          <td class="gantt-bar-cell"><a href="../detalhamento-ciclos/#semana-06" class="gantt-bar purple" style="width: 90%; margin-left: 5%;">40 RFs / 20 RNFs</a></td>
          <td></td><td class="gantt-today-col"></td><td></td><td></td>
        </tr>

        <!-- CATEGORIA: DESIGN (ORANGE) -->
        <tr class="gantt-cat-row">
          <td colspan="7">
            <div class="gantt-cat-title">
              <span class="gantt-cat-dot orange"></span>
              <span class="gantt-cat-text">Design do Usuário (RAD User Design)</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="gantt-task-name">
              <span class="gantt-check-icon checked">✓</span>
              <span>Moodboard &amp; Design System Base</span>
            </div>
          </td>
          <td class="gantt-bar-cell"><a href="../detalhamento-ciclos/#semana-02" class="gantt-bar orange" style="width: 75%; margin-left: 20%;">Mocks UI</a></td>
          <td></td><td></td><td class="gantt-today-col"></td><td></td><td></td>
        </tr>
        <tr>
          <td>
            <div class="gantt-task-name">
              <span class="gantt-check-icon checked">✓</span>
              <span>Protótipo Navegável no Figma</span>
            </div>
          </td>
          <td></td>
          <td class="gantt-bar-cell" colspan="2"><a href="../detalhamento-ciclos/#semana-07" class="gantt-bar orange" style="width: 92%; margin-left: 4%;">Figma 1:3 • Fluxos Críticos</a></td>
          <td class="gantt-today-col"></td><td></td><td></td>
        </tr>
        <tr>
          <td>
            <div class="gantt-task-name">
              <span class="gantt-check-icon checked">✓</span>
              <span>Validação presencial com Cliente (Ata 06)</span>
            </div>
          </td>
          <td></td><td></td>
          <td class="gantt-bar-cell"><a href="../detalhamento-ciclos/#semana-07" class="gantt-bar orange" style="width: 85%; margin-left: 8%;">Ata 06 (02/10)</a></td>
          <td class="gantt-today-col"></td><td></td><td></td>
        </tr>
        <tr>
          <td>
            <div class="gantt-task-name">
              <span class="gantt-check-icon hollow">○</span>
              <span>Revisão de componentes UI &amp; Fichas RVT</span>
            </div>
          </td>
          <td></td><td></td><td></td>
          <td class="gantt-bar-cell gantt-today-col"><a href="../detalhamento-ciclos/#semana-11" class="gantt-bar orange" style="width: 80%; margin-left: 10%;">Telas Campo</a></td>
          <td></td><td></td>
        </tr>

        <!-- CATEGORIA: DEVELOPMENT (GREEN) -->
        <tr class="gantt-cat-row">
          <td colspan="7">
            <div class="gantt-cat-title">
              <span class="gantt-cat-dot green"></span>
              <span class="gantt-cat-text">Development &amp; APIs (RAD Construction)</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="gantt-task-name">
              <span class="gantt-check-icon checked">✓</span>
              <span>Setup Stack: React + NestJS + Supabase</span>
            </div>
          </td>
          <td></td><td></td>
          <td class="gantt-bar-cell"><a href="../detalhamento-ciclos/#semana-10" class="gantt-bar green" style="width: 85%; margin-left: 8%;">Stack Base</a></td>
          <td class="gantt-today-col"></td><td></td><td></td>
        </tr>
        <tr>
          <td>
            <div class="gantt-task-name">
              <span class="gantt-check-icon checked">✓</span>
              <span>Incremento 1: Gestão de Colaboradores (RF01-03)</span>
            </div>
          </td>
          <td></td><td></td>
          <td class="gantt-bar-cell" colspan="2"><a href="../detalhamento-ciclos/#semana-10" class="gantt-bar green" style="width: 90%; margin-left: 5%;">Incr. 1 Validado (20/10 - 05/11)</a></td>
          <td></td><td></td>
        </tr>
        <tr>
          <td>
            <div class="gantt-task-name">
              <span class="gantt-check-icon hollow">○</span>
              <span>Incremento 2: Apontamentos RVT &amp; Diárias (RF04-08)</span>
            </div>
          </td>
          <td></td><td></td><td></td>
          <td class="gantt-bar-cell gantt-today-col"><a href="../detalhamento-ciclos/#semana-11" class="gantt-bar green" style="width: 85%; margin-left: 5%;">Incr. 2 (Ativo)</a></td>
          <td class="gantt-bar-cell"><a href="../detalhamento-ciclos/#semana-11" class="gantt-bar green" style="width: 40%;">Entrega 3</a></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <div class="gantt-task-name">
              <span class="gantt-check-icon hollow">○</span>
              <span>Incremento 3: Motor Financeiro &amp; Folha (RF05, RF06)</span>
            </div>
          </td>
          <td></td><td></td><td></td><td class="gantt-today-col"></td>
          <td class="gantt-bar-cell"><a href="../detalhamento-ciclos/#semana-12" class="gantt-bar green" style="width: 90%; margin-left: 5%;">Cálculo Folha</a></td>
          <td></td>
        </tr>

        <!-- CATEGORIA: TESTING (PINK) -->
        <tr class="gantt-cat-row">
          <td colspan="7">
            <div class="gantt-cat-title">
              <span class="gantt-cat-dot pink"></span>
              <span class="gantt-cat-text">Testing &amp; Homologação UAT</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="gantt-task-name">
              <span class="gantt-check-icon checked">✓</span>
              <span>Testes Unitários &amp; Integração Incr. 1</span>
            </div>
          </td>
          <td></td><td></td><td></td>
          <td class="gantt-bar-cell gantt-today-col"><a href="../detalhamento-ciclos/#semana-10" class="gantt-bar pink" style="width: 80%; margin-left: 10%;">Jest / Supertest</a></td>
          <td></td><td></td>
        </tr>
        <tr>
          <td>
            <div class="gantt-task-name">
              <span class="gantt-check-icon hollow">○</span>
              <span>Homologação UAT com Usuário Final DUOC</span>
            </div>
          </td>
          <td></td><td></td><td></td><td class="gantt-today-col"></td>
          <td class="gantt-bar-cell"><a href="../detalhamento-ciclos/#semana-12" class="gantt-bar pink" style="width: 85%; margin-left: 10%;">Sessão UAT (27/11)</a></td>
          <td></td>
        </tr>

        <!-- CATEGORIA: LAUNCH (BLUE) -->
        <tr class="gantt-cat-row">
          <td colspan="7">
            <div class="gantt-cat-title">
              <span class="gantt-cat-dot blue"></span>
              <span class="gantt-cat-text">Launch &amp; Transição (RAD Cutover)</span>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="gantt-task-name">
              <span class="gantt-check-icon hollow">○</span>
              <span>Deploy Produção &amp; Cutover Assistido</span>
            </div>
          </td>
          <td></td><td></td><td></td><td class="gantt-today-col"></td><td></td>
          <td class="gantt-bar-cell"><a href="../detalhamento-ciclos/#semana-13" class="gantt-bar blue" style="width: 85%; margin-left: 5%;">Cutover DUOC</a></td>
        </tr>
        <tr>
          <td>
            <div class="gantt-task-name">
              <span class="gantt-check-icon hollow">○</span>
              <span>Avaliação Final: Ponto de Controle 4 (PC4)</span>
            </div>
          </td>
          <td></td><td></td><td></td><td class="gantt-today-col"></td><td></td>
          <td class="gantt-bar-cell"><a href="../detalhamento-ciclos/#semana-13" class="gantt-bar blue" style="width: 90%; margin-left: 5%;">Marco PC4 (01/12)</a></td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- 5 KPI METRICS CARDS -->
  <div class="gantt-kpi-grid">
    <div class="gantt-kpi-card">
      <div class="gantt-kpi-main">
        <span class="gantt-kpi-label">Total Tasks</span>
        <span class="gantt-kpi-val">17</span>
        <span class="gantt-kpi-sub">+2 this week</span>
      </div>
      <div class="gantt-kpi-icon-box orange">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
      </div>
    </div>

    <div class="gantt-kpi-card">
      <div class="gantt-kpi-main">
        <span class="gantt-kpi-label">In Progress</span>
        <span class="gantt-kpi-val">3</span>
        <span class="gantt-kpi-sub">18% of total</span>
      </div>
      <div class="gantt-kpi-icon-box orange">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
      </div>
    </div>

    <div class="gantt-kpi-card">
      <div class="gantt-kpi-main">
        <span class="gantt-kpi-label">Completed</span>
        <span class="gantt-kpi-val">10</span>
        <span class="gantt-kpi-sub">59% of total</span>
      </div>
      <div class="gantt-kpi-icon-box green">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
      </div>
    </div>

    <div class="gantt-kpi-card">
      <div class="gantt-kpi-main">
        <span class="gantt-kpi-label">Overdue</span>
        <span class="gantt-kpi-val">0</span>
        <span class="gantt-kpi-sub">0% of total</span>
      </div>
      <div class="gantt-kpi-icon-box red">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
      </div>
    </div>

    <div class="gantt-kpi-card">
      <div class="gantt-kpi-main">
        <span class="gantt-kpi-label">Progress</span>
        <span class="gantt-kpi-val">65%</span>
        <span class="gantt-kpi-sub">+12% this week</span>
      </div>
      <div class="gantt-kpi-icon-box blue">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path></svg>
      </div>
    </div>
  </div>
</div>

  </div>
</div>

---

## Visão Consolidada: Incremento 1 e Validação do Incremento 2

Situação em **16/11/2026**: as semanas 08 a 10 já se encerraram e seguem **pendentes** (entrega prorrogada para a Semana 11 por decisão da equipe). A tabela relaciona cada atividade ao prazo previsto, ao estado real, ao resultado e à evidência. Onde não há evidência, a pendência é registrada como `pendente: motivo`.

| Atividade / Incremento | Prazo previsto | Estado real | Resultado | Evidência |
| :--- | :---: | :---: | :--- | :--- |
| **Incremento 1 — Semana 08:** DER, telas de cadastro/autenticação, repositório com pipeline na Vercel e escopo no GitHub Projects | 20/10 a 27/10 | <span class="status-pill pendente">Pendente</span> | Entregues: DER revisado, telas de cadastro e autenticação, repositório com pipeline na Vercel e escopo atualizado. Pendentes (entrega prorrogada para a Semana 11 por decisão da equipe): RBAC base, RVT inicial e dados sintéticos | [DER (modelagem_bd.md)](../mvp/modelagem_bd.md) • [PR #167](https://github.com/mdsreq-fga-unb/REQ-2026.2-T01-DUOC-Finance/pull/167) • [PR #160](https://github.com/mdsreq-fga-unb/REQ-2026.2-T01-DUOC-Finance/pull/160) • [GitHub Projects #119](https://github.com/orgs/mdsreq-fga-unb/projects/119) |
| **Incremento 1 — Semana 09:** banco Supabase, camada ORM, telas de login/RVT refinadas, RBAC refinado e testes | 28/10 a 04/11 | <span class="status-pill pendente">Pendente</span> | Nenhum entregável concluído | pendente: entrega prorrogada para a Semana 11 por decisão da equipe |
| **Incremento 1 — Semana 10:** cadastro e autenticação com persistência em Staging, RVT integrado, RBAC completo, Fagan, catálogo/rastreabilidade revisados e DoD | 05/11 a 11/11 | <span class="status-pill pendente">Pendente</span> | Nenhum entregável concluído | pendente: entrega prorrogada para a Semana 11 por decisão da equipe |
| **Validação sociotécnica do Incremento 2** com Maria Beatryz | 13/11 (remarcada para 16/11) | <span class="status-pill marcada">Remarcada</span> | Remarcada pela cliente de 13/11 para 16/11; realização a registrar em ata | pendente: ata da sessão de 16/11 ainda não registrada |

<a id="detalhamento-temporal-semana-a-semana-semanas-01-a-13"></a>
<div class="crono-detail-callout">
  <div class="crono-detail-callout-text">
    <span class="crono-callout-badge">Planejamento Operacional</span>
    <h3 class="crono-callout-title">Detalhamento Temporal por Ciclos &amp; Semanas (01 a 13)</h3>
    <p class="crono-callout-desc">Todas as 13 semanas do semestre estão descritas em profundidade com objetivos, atividades executadas, responsáveis e entregáveis, estruturadas sob os 5 Ciclos do RAD.</p>
  </div>
  <a href="../detalhamento-ciclos/" class="crono-callout-btn">
    <span>Acessar Detalhamento das Semanas</span>
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
  </a>
</div>

---

## Histórico de Versão
| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 05/09/2026 | Estruturação inicial do planejamento temporal preliminar | Matheus Ribeiro Szervinsk | Matheus Ribeiro |
| `1.1` | 07/09/2026 | Correção ortográfica, detalhamento das entregas e padronização | Matheus Ribeiro | Matheus Ribeiro |
| `1.2` | 07/09/2026 | Alinhamento das fases e nomenclaturas com o processo RAD | Matheus Ribeiro | Matheus Ribeiro |
| `1.3` | 07/09/2026 | Sincronização rigorosa dos períodos oficiais de cada Unidade com as fases do RAD | Matheus Ribeiro | |
| `1.4` | 08/09/2026 | Implementação do Mapa Temporal de Execução com Grade Calendário Semestral (Agosto a Dezembro) e destaque para marcos avaliativos | Matheus Ribeiro Szervinsk | Equipe DUOC Finance |
| `1.5` | 08/09/2026 | Redesenho unificado: integração dos cards seletores diretamente no contêiner do calendário, tooltips informativos por mês, layout centralizado e remoção integral de emojis | Matheus Ribeiro Szervinsk | Equipe DUOC Finance |
| `1.6` | 19/09/2026 | Inclusão de tarefas para as integrações externas (CAR-09 a CAR-12: Shifton, ERP/planilhas, BIM, Slack) nas Semanas 04 e 12, lastreando as afirmações de interoperabilidade do Rich Picture no cronograma | Eric Araújo | |
| `1.7` | 19/09/2026 | Correção da referência ao Diagrama de Ishikawa: "6Ms" substituído por "4 categorias causais (adaptação do modelo 6M)", alinhando com as 4 dimensões efetivamente usadas em 1.4 | Paulo Nery | |
| `2.0` | 21/09/2026 | Reestruturação metodológica, arquitetural e visual integral do cronograma: desacoplamento dos marcos acadêmicos (PC1 a PC4) dos ciclos e incrementos RAD; distribuição das 8 CARs e integrações nos incrementos; estratégia de prototipagem evolutiva UI-First com base no Figma e validação de interfaces mockadas no Frontend antes da lógica de persistência (Supabase); antecipação do motor financeiro (CAR-03) e UAT com janela dedicada para correção de defeitos; inclusão de diagramas metodológicos com suporte nativo a temas claro e escuro; eliminação de conflitos de contraste cromático no calendário e reestruturação ergonômica das unidades e semanas em cards padronizados | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
| `2.1` | 24/09/2026 | Inclusão da Reunião 05 (Priorização MoSCoW, Matriz 4x4 e alinhamento do MVP) realizada em 24/09 no calendário de Setembro, feed de eventos, tabela de incrementos e detalhamento da Semana 05. | Matheus Ribeiro Szervinsk | Eric Araújo e Lucas Zanetti |
| `2.2` | 11/10/2026 | Auditoria cronológica do Capítulo 6 conforme Plano de Ensino oficial: identificação dos primeiros e segundos dias de apresentações dos PCs 1–4 e corte de publicação às 08h; correção das Reuniões 03 (07/09), 04 (17/09) e natureza interna da 05; atualização dos calendários e semanas; padronização URPS+ e auditor.ia no planejamento vigente; registro de 31 RFs/20 RNFs e ressalvas de validação não comprovada; distinção entre marcos RAD e períodos acadêmicos. | Matheus Saraiva Camargo | Matheus Ribeiro Szervinsk |
| `2.3` | 28/10/2026 | Registro da validação presencial do protótipo do Incremento 1 no Figma em 02/10/2026 (Ata 06) no calendário, no feed de eventos e no detalhamento semanal, substituindo as marcações de realização não comprovada. | Paulo Nery | — |
| `2.3` | 28/10/2026 | Atualização do quantitativo do catálogo vigente de requisitos para 36 RFs e 20 RNFs, em sincronia com o Capítulo 8. | Paulo Nery | — |
| `2.4` | 02/11/2026 | Alinhamento do encerramento da Unidade 2 e Semana 07 (concluídos); substituição de termos legados (auditor.ia por FLIT, Next.js por React/NestJS, MoSCoW por Matriz 4x4) e atualização da especificação vigente para 40 RFs. | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
| `3.0` | 10/11/2026 | Refatoração integral do capítulo em duas seções (Planejamento e Cronograma): movimentação do racional metodológico, folgas, governança e fontes para o Planejamento; atualização do catálogo para 40 RFs e 20 RNFs e inclusão do método de atualização de requisitos no RAD com diagrama; remoção dos vínculos com as Unidades do plano de ensino e das tabelas de marcos avaliativos; marcação dos marcos já ocorridos (base 09/11/2026) como concluídos; replanejamento das Semanas 01 a 13 conforme a realidade executada (Incremento 1 estendido até a Semana 10; Incrementos 2 e 3 condensados; Cutover na Semana 13). | Eric Araújo | — |
| `3.1` | 16/11/2026 | Auditoria de prazos do Incremento 1 e inclusão da Visão Consolidada de pendências das Semanas 08 a 10 com prorrogação para a Semana 11 | Eric Araújo | — |
| `3.2` | 16/11/2026 | Otimização da experiência: links funcionais para o detalhamento, suporte aprimorado a temas claro e escuro, cards compactos de ciclos e navegação profunda | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
