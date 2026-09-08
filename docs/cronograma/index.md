# Capítulo 6 — Cronograma e Planejamento de Entregas

## Gestão Ágil e Rastreabilidade no GitHub Projects

O planejamento e o acompanhamento operacional do projeto **DUOC Finance** são geridos de forma contínua e transparente através do ecossistema do **GitHub Projects**. O quadro institucional da disciplina centraliza o *Backlog de Requisitos*, a distribuição de *Issues*, a alocação de responsáveis e o avanço das tarefas por iterações do framework RAD.

<div class="grid cards" markdown>

-   **Quadro Oficial do Projeto no GitHub Projects**

    ---

    Acesse o quadro kanban interativo, sprints e acompanhamento de tarefas da equipe **Cascata Ágil**:

    [:material-open-in-new: **Acessar GitHub Projects (Projeto #119)**](https://github.com/orgs/mdsreq-fga-unb/projects/119/){ .md-button .md-button--primary target="_blank" }

    * **Fluxo de Trabalho:** `Backlog do Produto` → `Em Desenvolvimento` → `Sprint Backlog` → `Em Revisão (DoR)` → `Validado (DoD)`
    * **Rastreabilidade:** Cada História de Usuário e tarefa técnica está vinculada a branches temáticas, *Pull Requests* e critérios de aceitação.

</div>

---

## Racional Metodológico do Cronograma

Na Engenharia de Requisitos moderna e no modelo **RAD (Rapid Application Development)**, o detalhamento das funcionalidades do sistema não é imposto prematuramente de forma arbitrária antes de uma imersão profunda no domínio do cliente. Pelo contrário: as funcionalidades e regras de negócio emergem e refinam-se através de ciclos iterativos de elicitação, modelagem conceitual, prototipação participativa e validação sociotécnica com a cliente parceira.

Por essa razão, o cronograma divide-se em dois horizontes de clareza:

1. **Horizonte Executado (Unidade 1 — Concluído):** Registro minucioso de tudo o que a equipe produziu e homologou na primeira semana de trabalho para a estruturação do ambiente *Docs as Code* e fundação da Engenharia de Requisitos.
2. **Horizonte Planejado e Incremental (Unidades 2, 3 e 4 — Em Aberto e Aprofundado):** Mapeamento sistemático das etapas de elicitação aprofundada (FURPS+), refinamento do backlog (INVEST / MoSCoW), prototipagem de alta fidelidade no Figma, construção rápida iterativa por módulos e etapas de Verificação, Validação (V&V) e homologação com a cliente.

---

## Mapa Temporal de Execução e Calendário Interativo

Utilize os **cards seletores integrados no topo do calendário** para alternar entre os meses do semestre letivo de 2026 (Agosto a Dezembro). Passe o cursor sobre cada seletor para visualizar o *tooltip informativo* com período, reuniões e marcos, ou clique para carregar o mês correspondente em grade ampliada centralizada:

<div class="calendar-unified-widget">

  <!-- Inputs invisíveis para controle de abas -->
  <input type="radio" name="cal-month" id="tab-month-ago" class="month-radio" checked>
  <input type="radio" name="cal-month" id="tab-month-set" class="month-radio">
  <input type="radio" name="cal-month" id="tab-month-out" class="month-radio">
  <input type="radio" name="cal-month" id="tab-month-nov" class="month-radio">
  <input type="radio" name="cal-month" id="tab-month-dez" class="month-radio">

  <!-- DIV UNIFICADA DO CALENDÁRIO COM SELETORES E CONTEÚDO INTEGRADOS -->
  <div class="calendar-unified-card">

    <!-- BARRA SUPERIOR DE SELEÇÃO: BOTÕES/CARDS COM TOOLTIPS -->
    <div class="calendar-nav-bar">

      <!-- Botão Agosto -->
      <label for="tab-month-ago" class="month-tab-btn tab-ago">
        <span class="tab-title">Agosto 2026</span>
        <span class="tab-pill concluido">Concluído</span>
        <div class="month-tooltip">
          <div class="tooltip-header">
            <strong>Agosto de 2026</strong>
            <span class="tooltip-badge concluido">Concluído</span>
          </div>
          <div class="tooltip-phase">Unidade 1: Planejamento de Requisitos (RAD Fase 1)</div>
          <div class="tooltip-divider"></div>
          <div class="tooltip-body">
            <p><strong>Período:</strong> 11/08 a 31/08 (21 dias letivos)</p>
            <p><strong>Reuniões:</strong> Reunião 01 Preliminar com Maria Beatryz (19/08)</p>
            <p><strong>Entregas:</strong> Rich Picture, Ishikawa e Docs as Code</p>
          </div>
          <div class="tooltip-hint">Clique para alternar para Agosto</div>
        </div>
      </label>

      <!-- Botão Setembro -->
      <label for="tab-month-set" class="month-tab-btn tab-set">
        <span class="tab-title">Setembro 2026</span>
        <span class="tab-pill andamento">Em Andamento</span>
        <div class="month-tooltip">
          <div class="tooltip-header">
            <strong>Setembro de 2026</strong>
            <span class="tooltip-badge andamento">Em Andamento</span>
          </div>
          <div class="tooltip-phase">U1 (Final) e Início U2 (Design do Usuário)</div>
          <div class="tooltip-divider"></div>
          <div class="tooltip-body">
            <p><strong>Período:</strong> 01/09 a 30/09 (22 dias letivos)</p>
            <p><strong>Marcos:</strong> Ponto de Controle 1 Entregue (08/09)</p>
            <p><strong>Reuniões:</strong> Reuniões 01 e 02 Realizadas • Reunião 03 Agendada (18/09)</p>
          </div>
          <div class="tooltip-hint">Clique para alternar para Setembro</div>
        </div>
      </label>

      <!-- Botão Outubro -->
      <label for="tab-month-out" class="month-tab-btn tab-out">
        <span class="tab-title">Outubro 2026</span>
        <span class="tab-pill planejado">Planejado</span>
        <div class="month-tooltip">
          <div class="tooltip-header">
            <strong>Outubro de 2026</strong>
            <span class="tooltip-badge planejado">Planejado</span>
          </div>
          <div class="tooltip-phase">U2 (Final) e Início U3 (Construção Rápida / Figma)</div>
          <div class="tooltip-divider"></div>
          <div class="tooltip-body">
            <p><strong>Período:</strong> 01/10 a 31/10 (22 dias letivos)</p>
            <p><strong>Marcos:</strong> Ponto de Controle 2 em 15/10</p>
            <p><strong>Reuniões:</strong> Reunião 04 (Validação Sociotécnica no Figma em 28/10)</p>
          </div>
          <div class="tooltip-hint">Clique para alternar para Outubro</div>
        </div>
      </label>

      <!-- Botão Novembro -->
      <label for="tab-month-nov" class="month-tab-btn tab-nov">
        <span class="tab-title">Novembro 2026</span>
        <span class="tab-pill planejado">Planejado</span>
        <div class="month-tooltip">
          <div class="tooltip-header">
            <strong>Novembro de 2026</strong>
            <span class="tooltip-badge planejado">Planejado</span>
          </div>
          <div class="tooltip-phase">U3 (Core RAD) e Início U4 (Transição / Cutover)</div>
          <div class="tooltip-divider"></div>
          <div class="tooltip-body">
            <p><strong>Período:</strong> 01/11 a 30/11 (20 dias letivos)</p>
            <p><strong>Marcos:</strong> Ponto de Controle 3 em 19/11</p>
            <p><strong>Reuniões:</strong> Sessão de UAT com Maria Beatryz (28/11)</p>
          </div>
          <div class="tooltip-hint">Clique para alternar para Novembro</div>
        </div>
      </label>

      <!-- Botão Dezembro -->
      <label for="tab-month-dez" class="month-tab-btn tab-dez">
        <span class="tab-title">Dezembro 2026</span>
        <span class="tab-pill planejado">Planejado</span>
        <div class="month-tooltip">
          <div class="tooltip-header">
            <strong>Dezembro de 2026</strong>
            <span class="tooltip-badge planejado">Planejado</span>
          </div>
          <div class="tooltip-phase">U4: Apresentação Final, Cutover e Encerramento</div>
          <div class="tooltip-divider"></div>
          <div class="tooltip-body">
            <p><strong>Período:</strong> 01/12 a 02/12</p>
            <p><strong>Marcos:</strong> Ponto de Controle 4 (Apresentação Final em 01/12)</p>
            <p><strong>Encerramento:</strong> Retrospectiva final da disciplina (02/12)</p>
          </div>
          <div class="tooltip-hint">Clique para alternar para Dezembro</div>
        </div>
      </label>

    </div>

    <!-- CONTEÚDO DO CALENDÁRIO: APENAS O MÊS SELECIONADO -->
    <div class="calendar-month-content">

    <!-- ==================== PAINEL AGOSTO 2026 ==================== -->
    <div class="month-view-panel view-ago">
      <div class="panel-month-header">
        <div>
          <h3 class="panel-month-title">Agosto de 2026</h3>
          <span class="panel-month-phase">Unidade 1: Planejamento de Requisitos (RAD Fase 1)</span>
        </div>
        <div class="panel-month-badges">
          <span class="status-pill concluido">Concluído</span>
          <span class="milestone-badge done">Fundação do Projeto</span>
        </div>
      </div>

      <div class="large-calendar-wrapper">
        <table class="large-cal-table">
          <thead>
            <tr>
              <th>Dom</th><th>Seg</th><th>Ter</th><th>Qua</th><th>Qui</th><th>Sex</th><th>Sáb</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="empty-day"></td><td class="empty-day"></td><td class="empty-day"></td><td class="empty-day"></td><td class="empty-day"></td><td class="empty-day"></td>
              <td>
                <div class="cell-top"><span class="cell-num">1</span></div>
                <span class="event-chip">Recesso</span>
              </td>
            </tr>
            <tr>
              <td><div class="cell-top"><span class="cell-num">2</span></div></td>
              <td><div class="cell-top"><span class="cell-num">3</span></div></td>
              <td><div class="cell-top"><span class="cell-num">4</span></div></td>
              <td><div class="cell-top"><span class="cell-num">5</span></div></td>
              <td><div class="cell-top"><span class="cell-num">6</span></div></td>
              <td><div class="cell-top"><span class="cell-num">7</span></div></td>
              <td><div class="cell-top"><span class="cell-num">8</span></div></td>
            </tr>
            <tr>
              <td><div class="cell-top"><span class="cell-num">9</span></div></td>
              <td><div class="cell-top"><span class="cell-num">10</span></div></td>
              <td class="day-u1 day-done" title="Início oficial da Unidade 1">
                <div class="cell-top"><span class="cell-num">11</span></div>
                <span class="event-chip active-phase">Início U1</span>
              </td>
              <td class="day-u1 day-done" title="Definição da DUOC Arquitetura como parceira">
                <div class="cell-top"><span class="cell-num">12</span></div>
                <span class="event-chip active-phase">Cliente DUOC</span>
              </td>
              <td class="day-u1 day-done" title="Configuração de canais de comunicação">
                <div class="cell-top"><span class="cell-num">13</span></div>
              </td>
              <td class="day-u1 day-done" title="Estratégia inicial de elicitação">
                <div class="cell-top"><span class="cell-num">14</span></div>
              </td>
              <td class="day-u1 day-done" title="Estudo bibliográfico do modelo RAD">
                <div class="cell-top"><span class="cell-num">15</span></div>
              </td>
            </tr>
            <tr>
              <td class="day-u1 day-done"><div class="cell-top"><span class="cell-num">16</span></div></td>
              <td class="day-u1 day-done"><div class="cell-top"><span class="cell-num">17</span></div></td>
              <td class="day-u1 day-done"><div class="cell-top"><span class="cell-num">18</span></div></td>
              <td class="day-u1 day-meet day-done" title="Reunião 01 Preliminar com Maria Beatryz">
                <div class="cell-top"><span class="cell-num">19</span></div>
                <span class="event-chip meet-done">Reunião 01</span>
              </td>
              <td class="day-u1 day-done" title="Mapeamento de processos e dores">
                <div class="cell-top"><span class="cell-num">20</span></div>
              </td>
              <td class="day-u1 day-done" title="Rich Picture preliminar">
                <div class="cell-top"><span class="cell-num">21</span></div>
              </td>
              <td class="day-u1 day-done" title="Análise do fluxo de viagens (RVT)">
                <div class="cell-top"><span class="cell-num">22</span></div>
              </td>
            </tr>
            <tr>
              <td class="day-u1 day-done"><div class="cell-top"><span class="cell-num">23</span></div></td>
              <td class="day-u1 day-done" title="Diagrama de Ishikawa">
                <div class="cell-top"><span class="cell-num">24</span></div>
                <span class="event-chip active-phase">Ishikawa</span>
              </td>
              <td class="day-u1 day-done" title="Diagnóstico de causas-raiz">
                <div class="cell-top"><span class="cell-num">25</span></div>
              </td>
              <td class="day-u1 day-done" title="Decisão de privacidade LGPD">
                <div class="cell-top"><span class="cell-num">26</span></div>
                <span class="event-chip active-phase">LGPD Mock</span>
              </td>
              <td class="day-u1 day-done" title="Repositório Docs as Code">
                <div class="cell-top"><span class="cell-num">27</span></div>
                <span class="event-chip active-phase">Docs as Code</span>
              </td>
              <td class="day-u1 day-done"><div class="cell-top"><span class="cell-num">28</span></div></td>
              <td class="day-u1 day-done"><div class="cell-top"><span class="cell-num">29</span></div></td>
            </tr>
            <tr>
              <td class="day-u1 day-done"><div class="cell-top"><span class="cell-num">30</span></div></td>
              <td class="day-u1 day-done" title="Mixer Board e Calibração RAD">
                <div class="cell-top"><span class="cell-num">31</span></div>
                <span class="event-chip active-phase">Mixer Board</span>
              </td>
              <td class="empty-day"></td><td class="empty-day"></td><td class="empty-day"></td><td class="empty-day"></td><td class="empty-day"></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Feed de Reuniões e Pautas de Agosto -->
      <div class="month-events-feed">
        <h4 class="month-events-title">Registro de Eventos e Pautas de Agosto</h4>
        
        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge done"><span class="ev-d">11</span><span class="ev-m">AGO</span></span>
            <div class="event-info">
              <div class="event-name">Início da Unidade 1 e Fundação da Equipe Cascata Ágil</div>
              <div class="event-desc">Alinhamento de papéis, criação do canal de comunicação e escolha da DUOC Arquitetura e Engenharia como organização parceira.</div>
            </div>
          </div>
          <span class="status-pill concluido">Concluído</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge done"><span class="ev-d">19</span><span class="ev-m">AGO</span></span>
            <div class="event-info">
              <div class="event-name">Reunião 01 Preliminar: Elicitação com Maria Beatryz</div>
              <div class="event-desc">Primeiro diagnóstico das dores com planilhas dispersas, sobrecarga no fechamento quinzenal de diaristas e necessidade de conciliação do RVT.</div>
            </div>
          </div>
          <span class="status-pill concluido">Realizada</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge done"><span class="ev-d">24</span><span class="ev-m">AGO</span></span>
            <div class="event-info">
              <div class="event-name">Mapeamento Causal de Processos (Diagrama de Ishikawa)</div>
              <div class="event-desc">Estruturação dos 6Ms identificando causas da ineficiência administrativa e formulação do Rich Picture preliminar.</div>
            </div>
          </div>
          <span class="status-pill concluido">Concluído</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge done"><span class="ev-d">27</span><span class="ev-m">AGO</span></span>
            <div class="event-info">
              <div class="event-name">Implantação da Infraestrutura Docs as Code</div>
              <div class="event-desc">Publicação do portal MkDocs Material no GitHub Pages com busca client-side, automação via GitHub Actions e layout expandido.</div>
            </div>
          </div>
          <span class="status-pill concluido">Concluído</span>
        </div>
      </div>
    </div>

    <!-- ==================== PAINEL SETEMBRO 2026 ==================== -->
    <div class="month-view-panel view-set">
      <div class="panel-month-header">
        <div>
          <h3 class="panel-month-title">Setembro de 2026</h3>
          <span class="panel-month-phase">U1 (Ponto de Controle 1) e Início U2 (Design do Usuário)</span>
        </div>
        <div class="panel-month-badges">
          <span class="status-pill andamento">Mês Vigente</span>
          <span class="milestone-badge done">Ponto de Controle 1 Entregue</span>
        </div>
      </div>

      <div class="large-calendar-wrapper">
        <table class="large-cal-table">
          <thead>
            <tr>
              <th>Dom</th><th>Seg</th><th>Ter</th><th>Qua</th><th>Qui</th><th>Sex</th><th>Sáb</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="empty-day"></td><td class="empty-day"></td>
              <td class="day-u1 day-meet day-done" title="Reunião de Alinhamento Interno">
                <div class="cell-top"><span class="cell-num">1</span></div>
                <span class="event-chip meet-done">Alinhamento</span>
              </td>
              <td class="day-u1 day-done" title="Definição das CARs e OEs">
                <div class="cell-top"><span class="cell-num">2</span></div>
                <span class="event-chip active-phase">CARs & OEs</span>
              </td>
              <td class="day-u1 day-done" title="Stakeholders e IHC">
                <div class="cell-top"><span class="cell-num">3</span></div>
              </td>
              <td class="day-u1 day-done" title="Consolidação no portal MkDocs">
                <div class="cell-top"><span class="cell-num">4</span></div>
              </td>
              <td class="day-u1 day-meet day-done" title="Reunião 01 Oficial com Maria Beatryz">
                <div class="cell-top"><span class="cell-num">5</span></div>
                <span class="event-chip meet-done">Reunião 01</span>
              </td>
            </tr>
            <tr>
              <td class="day-u1 day-done" title="Validação cruzada dos artefatos">
                <div class="cell-top"><span class="cell-num">6</span></div>
              </td>
              <td class="day-u1 day-meet day-done" title="Reunião 02 Oficial e Gravação da Apresentação">
                <div class="cell-top"><span class="cell-num">7</span></div>
                <span class="event-chip meet-done">Reunião 02</span>
              </td>
              <td class="day-milestone day-done" title="PONTO DE CONTROLE 1 — Entrega oficial da Unidade 1">
                <div class="cell-top"><span class="cell-num">8</span></div>
                <span class="event-chip milestone-done">Entrega 1</span>
              </td>
              <td title="Intervalo pós-entrega e retrospectiva"><div class="cell-top"><span class="cell-num">9</span></div><span class="event-chip">Retrospectiva</span></td>
              <td><div class="cell-top"><span class="cell-num">10</span></div></td>
              <td><div class="cell-top"><span class="cell-num">11</span></div></td>
              <td><div class="cell-top"><span class="cell-num">12</span></div></td>
            </tr>
            <tr>
              <td><div class="cell-top"><span class="cell-num">13</span></div></td>
              <td><div class="cell-top"><span class="cell-num">14</span></div></td>
              <td class="day-u2" title="Início oficial da Unidade 2 — Design do Usuário">
                <div class="cell-top"><span class="cell-num">15</span></div>
                <span class="event-chip active-phase">Início U2</span>
              </td>
              <td class="day-u2" title="Entrevistas de detalhamento com Maria Beatryz">
                <div class="cell-top"><span class="cell-num">16</span></div>
              </td>
              <td class="day-u2" title="Análise documental de planilhas e RVT">
                <div class="cell-top"><span class="cell-num">17</span></div>
              </td>
              <td class="day-u2 day-meet" title="Reunião 03 com Maria Beatryz — Entrevista Semiestruturada">
                <div class="cell-top"><span class="cell-num">18</span></div>
                <span class="event-chip meet">Reunião 03</span>
              </td>
              <td class="day-u2" title="Personas e Cenários contextuais">
                <div class="cell-top"><span class="cell-num">19</span></div>
              </td>
            </tr>
            <tr>
              <td class="day-u2"><div class="cell-top"><span class="cell-num">20</span></div></td>
              <td class="day-u2"><div class="cell-top"><span class="cell-num">21</span></div></td>
              <td class="day-u2"><div class="cell-top"><span class="cell-num">22</span></div></td>
              <td class="day-u2" title="Classificação de requisitos FURPS+">
                <div class="cell-top"><span class="cell-num">23</span></div>
                <span class="event-chip active-phase">FURPS+</span>
              </td>
              <td class="day-u2" title="Requisitos Funcionais e RNF">
                <div class="cell-top"><span class="cell-num">24</span></div>
              </td>
              <td class="day-u2" title="Definição formal de DoR e DoD">
                <div class="cell-top"><span class="cell-num">25</span></div>
                <span class="event-chip active-phase">DoR & DoD</span>
              </td>
              <td class="day-u2" title="Requisitos de segurança e RBAC">
                <div class="cell-top"><span class="cell-num">26</span></div>
              </td>
            </tr>
            <tr>
              <td class="day-u2"><div class="cell-top"><span class="cell-num">27</span></div></td>
              <td class="day-u2"><div class="cell-top"><span class="cell-num">28</span></div></td>
              <td class="day-u2"><div class="cell-top"><span class="cell-num">29</span></div></td>
              <td class="day-u2" title="Decomposição em Histórias de Usuário INVEST">
                <div class="cell-top"><span class="cell-num">30</span></div>
                <span class="event-chip active-phase">INVEST Backlog</span>
              </td>
              <td class="empty-day"></td><td class="empty-day"></td><td class="empty-day"></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Feed de Reuniões e Pautas de Setembro -->
      <div class="month-events-feed">
        <h4 class="month-events-title">Registro de Reuniões, Entregas e Pautas de Setembro</h4>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge done"><span class="ev-d">05</span><span class="ev-m">SET</span></span>
            <div class="event-info">
              <div class="event-name">Reunião 01 Oficial: Elicitação de Escopo e MVP com Maria Beatryz</div>
              <div class="event-desc">Homologação da exclusão de estoque, proteção de dados via dados sintéticos (LGPD), hospedagem na Vercel e separação entre CLT e diaristas. [Ver Ata 01](../atas/reuniao-01.md).</div>
            </div>
          </div>
          <span class="status-pill concluido">Realizada</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge done"><span class="ev-d">07</span><span class="ev-m">SET</span></span>
            <div class="event-info">
              <div class="event-name">Reunião 02 Oficial: Alinhamento Metodológico e ESW</div>
              <div class="event-desc">Diagnóstico sociotécnico, integração conceitual com auditor.ia, adoção do framework RAD, definição da stack (React/Supabase) e gravação do vídeo da Entrega 1. [Ver Ata 02](../atas/reuniao-02.md).</div>
            </div>
          </div>
          <span class="status-pill concluido">Realizada</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge milestone done"><span class="ev-d">08</span><span class="ev-m">SET</span></span>
            <div class="event-info">
              <div class="event-name">Ponto de Controle 1: Entrega Oficial da Unidade 1</div>
              <div class="event-desc">Homologação da documentação da Unidade 1: 13 capítulos estruturados no MkDocs, Atas de Reunião, Rich Picture, Ishikawa e vídeo institucional publicado. [Acessar Entrega 1](../entregas/entrega-1.md) • [Assistir no YouTube](https://youtu.be/OZ9LhKuI364).</div>
            </div>
          </div>
          <span class="status-pill concluido">Entregue</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge"><span class="ev-d">15</span><span class="ev-m">SET</span></span>
            <div class="event-info">
              <div class="event-name">Início da Unidade 2: Design do Usuário (Elicitação e Modelagem)</div>
              <div class="event-desc">Abertura da Fase 2 do modelo RAD, início da análise documental minuciosa das planilhas sintéticas e mapeamento de personas.</div>
            </div>
          </div>
          <span class="status-pill andamento">Em Andamento</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge"><span class="ev-d">18</span><span class="ev-m">SET</span></span>
            <div class="event-info">
              <div class="event-name">Reunião 03 com Maria Beatryz: Entrevista Semiestruturada de Domínio</div>
              <div class="event-desc">Sessão remota via Google Meet com a cliente para detalhamento das regras de cálculo de adiantamento, prestação de contas do RVT e regras de bonificação.</div>
            </div>
          </div>
          <span class="status-pill marcada">Reunião Agendada</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge"><span class="ev-d">30</span><span class="ev-m">SET</span></span>
            <div class="event-info">
              <div class="event-name">Decomposição em Histórias de Usuário (INVEST) e BDD</div>
              <div class="event-desc">Transformação das necessidades de negócio em Histórias de Usuário fatiadas com critérios de aceitação no formato Dado/Quando/Então.</div>
            </div>
          </div>
          <span class="status-pill planejado">Planejado</span>
        </div>
      </div>
    </div>

    <!-- ==================== PAINEL OUTUBRO 2026 ==================== -->
    <div class="month-view-panel view-out">
      <div class="panel-month-header">
        <div>
          <h3 class="panel-month-title">Outubro de 2026</h3>
          <span class="panel-month-phase">U2 (Ponto de Controle 2) e Início U3 (Construção Rápida / Figma)</span>
        </div>
        <div class="panel-month-badges">
          <span class="status-pill planejado">Planejado</span>
          <span class="milestone-badge">Ponto de Controle 2 em 15/10</span>
        </div>
      </div>

      <div class="large-calendar-wrapper">
        <table class="large-cal-table">
          <thead>
            <tr>
              <th>Dom</th><th>Seg</th><th>Ter</th><th>Qua</th><th>Qui</th><th>Sex</th><th>Sáb</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="empty-day"></td><td class="empty-day"></td><td class="empty-day"></td><td class="empty-day"></td>
              <td class="day-u2" title="Critérios BDD/Gherkin"><div class="cell-top"><span class="cell-num">1</span></div></td>
              <td class="day-u2" title="Priorização MoSCoW do Backlog">
                <div class="cell-top"><span class="cell-num">2</span></div>
                <span class="event-chip active-phase">MoSCoW</span>
              </td>
              <td class="day-u2"><div class="cell-top"><span class="cell-num">3</span></div></td>
            </tr>
            <tr>
              <td class="day-u2" title="Estruturação no GitHub Projects #119">
                <div class="cell-top"><span class="cell-num">4</span></div>
                <span class="event-chip active-phase">GH Projects</span>
              </td>
              <td class="day-u2"><div class="cell-top"><span class="cell-num">5</span></div></td>
              <td class="day-u2"><div class="cell-top"><span class="cell-num">6</span></div></td>
              <td class="day-u2"><div class="cell-top"><span class="cell-num">7</span></div></td>
              <td class="day-u2" title="Modelagem Conceitual de Dados (DER)">
                <div class="cell-top"><span class="cell-num">8</span></div>
                <span class="event-chip active-phase">DER Supabase</span>
              </td>
              <td class="day-u2" title="Wireframes estruturais de telas"><div class="cell-top"><span class="cell-num">9</span></div><span class="event-chip active-phase">Wireframes</span></td>
              <td class="day-u2"><div class="cell-top"><span class="cell-num">10</span></div></td>
            </tr>
            <tr>
              <td class="day-u2"><div class="cell-top"><span class="cell-num">11</span></div></td>
              <td class="day-u2" title="Feriado N. Sra Aparecida / Gravação do vídeo U2"><div class="cell-top"><span class="cell-num">12</span></div><span class="event-chip">Gravação U2</span></td>
              <td class="day-u2"><div class="cell-top"><span class="cell-num">13</span></div></td>
              <td class="day-u2"><div class="cell-top"><span class="cell-num">14</span></div></td>
              <td class="day-milestone" title="PONTO DE CONTROLE 2 — Entrega oficial da Unidade 2">
                <div class="cell-top"><span class="cell-num">15</span></div>
                <span class="event-chip milestone">Entrega 2</span>
              </td>
              <td><div class="cell-top"><span class="cell-num">16</span></div></td>
              <td><div class="cell-top"><span class="cell-num">17</span></div></td>
            </tr>
            <tr>
              <td><div class="cell-top"><span class="cell-num">18</span></div></td>
              <td><div class="cell-top"><span class="cell-num">19</span></div></td>
              <td class="day-u3" title="Início da Unidade 3 — Construção Rápida (Figma)">
                <div class="cell-top"><span class="cell-num">20</span></div>
                <span class="event-chip active-phase">Início U3</span>
              </td>
              <td class="day-u3" title="Design System no Figma"><div class="cell-top"><span class="cell-num">21</span></div></td>
              <td class="day-u3" title="Componentes Desktop e Mobile"><div class="cell-top"><span class="cell-num">22</span></div></td>
              <td class="day-u3" title="Prototipação do Dashboard de Obras"><div class="cell-top"><span class="cell-num">23</span></div><span class="event-chip active-phase">Protótipo Figma</span></td>
              <td class="day-u3"><div class="cell-top"><span class="cell-num">24</span></div></td>
            </tr>
            <tr>
              <td class="day-u3"><div class="cell-top"><span class="cell-num">25</span></div></td>
              <td class="day-u3"><div class="cell-top"><span class="cell-num">26</span></div></td>
              <td class="day-u3"><div class="cell-top"><span class="cell-num">27</span></div></td>
              <td class="day-u3 day-meet" title="Reunião 04 com Maria Beatryz — Validação Sociotécnica no Figma">
                <div class="cell-top"><span class="cell-num">28</span></div>
                <span class="event-chip meet">Reunião 04</span>
              </td>
              <td class="day-u3" title="Coleta de feedbacks e ajustes de IHC"><div class="cell-top"><span class="cell-num">29</span></div></td>
              <td class="day-u3" title="Ajustes de usabilidade"><div class="cell-top"><span class="cell-num">30</span></div></td>
              <td class="day-u3" title="Homologação com DoR atendido"><div class="cell-top"><span class="cell-num">31</span></div><span class="event-chip active-phase">DoR Atendido</span></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Feed de Reuniões e Pautas de Outubro -->
      <div class="month-events-feed">
        <h4 class="month-events-title">Registro de Reuniões, Entregas e Pautas de Outubro</h4>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge"><span class="ev-d">02</span><span class="ev-m">OUT</span></span>
            <div class="event-info">
              <div class="event-name">Priorização MoSCoW do Backlog e Matriz Valor vs. Complexidade</div>
              <div class="event-desc">Categorização das Histórias de Usuário em Must Have, Should Have, Could Have e Won't Have com ponderação de esforço técnico.</div>
            </div>
          </div>
          <span class="status-pill planejado">Planejado</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge"><span class="ev-d">08</span><span class="ev-m">OUT</span></span>
            <div class="event-info">
              <div class="event-name">Modelagem Conceitual de Dados (DER / PostgreSQL) e Wireframes</div>
              <div class="event-desc">Diagrama Entidade-Relacionamento cobrindo funcionários, diaristas, contratos de obras e despesas de campo rateadas.</div>
            </div>
          </div>
          <span class="status-pill planejado">Planejado</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge milestone"><span class="ev-d">15</span><span class="ev-m">OUT</span></span>
            <div class="event-info">
              <div class="event-name">Ponto de Controle 2: Entrega Oficial da Unidade 2</div>
              <div class="event-desc">Apresentação dos requisitos FURPS+, backlog INVEST estruturado no GitHub Projects #119, critérios DoR/DoD e vídeo gravado. [Acessar Entrega 2](../entregas/entrega-2.md).</div>
            </div>
          </div>
          <span class="status-pill planejado">Marco de Entrega</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge"><span class="ev-d">20</span><span class="ev-m">OUT</span></span>
            <div class="event-info">
              <div class="event-name">Início da Unidade 3: Construção Rápida e Design de Telas</div>
              <div class="event-desc">Desenvolvimento do protótipo de alta fidelidade interativo no Figma para desktop e telas mobile de canteiro de obras.</div>
            </div>
          </div>
          <span class="status-pill planejado">Planejado</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge"><span class="ev-d">28</span><span class="ev-m">OUT</span></span>
            <div class="event-info">
              <div class="event-name">Reunião 04 com Maria Beatryz: Sessão de Validação Sociotécnica Invertida</div>
              <div class="event-desc">Sessão síncrona via Google Meet onde a cliente assume o controle navegando pelo protótipo no Figma para homologação de usabilidade antes do código.</div>
            </div>
          </div>
          <span class="status-pill marcada">Reunião Agendada</span>
        </div>
      </div>
    </div>

    <!-- ==================== PAINEL NOVEMBRO 2026 ==================== -->
    <div class="month-view-panel view-nov">
      <div class="panel-month-header">
        <div>
          <h3 class="panel-month-title">Novembro de 2026</h3>
          <span class="panel-month-phase">U3 (Ponto de Controle 3) e Início U4 (Transição / Cutover)</span>
        </div>
        <div class="panel-month-badges">
          <span class="status-pill planejado">Planejado</span>
          <span class="milestone-badge">Ponto de Controle 3 em 19/11</span>
        </div>
      </div>

      <div class="large-calendar-wrapper">
        <table class="large-cal-table">
          <thead>
            <tr>
              <th>Dom</th><th>Seg</th><th>Ter</th><th>Qua</th><th>Qui</th><th>Sex</th><th>Sáb</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="day-u3"><div class="cell-top"><span class="cell-num">1</span></div></td>
              <td><div class="cell-top"><span class="cell-num">2</span></div><span class="event-chip">Finados</span></td>
              <td class="day-u3"><div class="cell-top"><span class="cell-num">3</span></div></td>
              <td class="day-u3"><div class="cell-top"><span class="cell-num">4</span></div></td>
              <td class="day-u3" title="Iteração RAD 1 — Setup Next.js + Supabase">
                <div class="cell-top"><span class="cell-num">5</span></div>
                <span class="event-chip active-phase">Iteração RAD 1</span>
              </td>
              <td class="day-u3" title="Autenticação com papéis RBAC"><div class="cell-top"><span class="cell-num">6</span></div></td>
              <td class="day-u3" title="Cadastros Base de Pessoal e Obras"><div class="cell-top"><span class="cell-num">7</span></div></td>
            </tr>
            <tr>
              <td class="day-u3"><div class="cell-top"><span class="cell-num">8</span></div></td>
              <td class="day-u3" title="Testes unitários e carga sintética"><div class="cell-top"><span class="cell-num">9</span></div></td>
              <td class="day-u3" title="Pipeline de CI na Vercel"><div class="cell-top"><span class="cell-num">10</span></div></td>
              <td class="day-u3"><div class="cell-top"><span class="cell-num">11</span></div></td>
              <td class="day-u3" title="Iteração RAD 2 — Módulo RVT Mobile">
                <div class="cell-top"><span class="cell-num">12</span></div>
                <span class="event-chip active-phase">Iteração RAD 2</span>
              </td>
              <td class="day-u3" title="Upload de comprovantes simulados"><div class="cell-top"><span class="cell-num">13</span></div></td>
              <td class="day-u3" title="Deploy contínuo em Staging na Vercel">
                <div class="cell-top"><span class="cell-num">14</span></div>
                <span class="event-chip active-phase">Staging Vercel</span>
              </td>
            </tr>
            <tr>
              <td><div class="cell-top"><span class="cell-num">15</span></div><span class="event-chip">Proclamação</span></td>
              <td class="day-u3" title="Testes integrados RVT"><div class="cell-top"><span class="cell-num">16</span></div></td>
              <td class="day-u3" title="Documentação da Entrega 3"><div class="cell-top"><span class="cell-num">17</span></div></td>
              <td class="day-u3" title="Gravação da apresentação U3"><div class="cell-top"><span class="cell-num">18</span></div><span class="event-chip">Gravação U3</span></td>
              <td class="day-milestone" title="PONTO DE CONTROLE 3 — Entrega oficial da Unidade 3">
                <div class="cell-top"><span class="cell-num">19</span></div>
                <span class="event-chip milestone">Entrega 3</span>
              </td>
              <td><div class="cell-top"><span class="cell-num">20</span></div><span class="event-chip">Consciência N.</span></td>
              <td><div class="cell-top"><span class="cell-num">21</span></div></td>
            </tr>
            <tr>
              <td><div class="cell-top"><span class="cell-num">22</span></div></td>
              <td><div class="cell-top"><span class="cell-num">23</span></div></td>
              <td class="day-u4" title="Início da Unidade 4 — Transição / Cutover">
                <div class="cell-top"><span class="cell-num">24</span></div>
                <span class="event-chip active-phase">Início U4</span>
              </td>
              <td class="day-u4" title="Cálculo de folha e apropriação de horas"><div class="cell-top"><span class="cell-num">25</span></div></td>
              <td class="day-u4" title="Rateio de despesas por contrato"><div class="cell-top"><span class="cell-num">26</span></div></td>
              <td class="day-u4" title="Inspeções Fagan e testes unitários"><div class="cell-top"><span class="cell-num">27</span></div></td>
              <td class="day-u4 day-meet" title="Sessão de UAT com Maria Beatryz">
                <div class="cell-top"><span class="cell-num">28</span></div>
                <span class="event-chip meet">Sessão UAT</span>
              </td>
            </tr>
            <tr>
              <td class="day-u4" title="Matriz de Rastreabilidade Bidirecional">
                <div class="cell-top"><span class="cell-num">29</span></div>
                <span class="event-chip active-phase">Rastreabilidade</span>
              </td>
              <td class="day-u4" title="Termo de Aceite Formal assinado">
                <div class="cell-top"><span class="cell-num">30</span></div>
                <span class="event-chip active-phase">Aceite Formal</span>
              </td>
              <td class="empty-day"></td><td class="empty-day"></td><td class="empty-day"></td><td class="empty-day"></td><td class="empty-day"></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Feed de Reuniões e Pautas de Novembro -->
      <div class="month-events-feed">
        <h4 class="month-events-title">Registro de Reuniões, Entregas e Pautas de Novembro</h4>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge"><span class="ev-d">05</span><span class="ev-m">NOV</span></span>
            <div class="event-info">
              <div class="event-name">Iteração RAD 1: Setup React + Supabase e Autenticação RBAC</div>
              <div class="event-desc">Inicialização do repositório, configuração de papéis de acesso e primeiro módulo de cadastro de colaboradores e diaristas.</div>
            </div>
          </div>
          <span class="status-pill planejado">Planejado</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge"><span class="ev-d">12</span><span class="ev-m">NOV</span></span>
            <div class="event-info">
              <div class="event-name">Iteração RAD 2: Lançamento de RVT Mobile e Deploy em Staging</div>
              <div class="event-desc">Implementação da tela móvel para prestação de contas de viagens e pipeline contínuo na Vercel com dados sintéticos.</div>
            </div>
          </div>
          <span class="status-pill planejado">Planejado</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge milestone"><span class="ev-d">19</span><span class="ev-m">NOV</span></span>
            <div class="event-info">
              <div class="event-name">Ponto de Controle 3: Entrega Oficial da Unidade 3</div>
              <div class="event-desc">Homologação dos protótipos de alta fidelidade no Figma, módulos iniciais funcionando em staging e gravação do vídeo da entrega. [Acessar Entrega 3](../entregas/entrega-3.md).</div>
            </div>
          </div>
          <span class="status-pill planejado">Marco de Entrega</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge"><span class="ev-d">28</span><span class="ev-m">NOV</span></span>
            <div class="event-info">
              <div class="event-name">Sessão de Testes de Aceitação de Usuário (UAT) com Maria Beatryz</div>
              <div class="event-desc">Execução orientada de casos de teste em tempo real no Google Meet para validação do cálculo de despesas e aprovação da folha de diaristas.</div>
            </div>
          </div>
          <span class="status-pill marcada">Reunião Agendada</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge"><span class="ev-d">30</span><span class="ev-m">NOV</span></span>
            <div class="event-info">
              <div class="event-name">Formalização do Termo de Aceite Formal e Manual do Usuário</div>
              <div class="event-desc">Homologação da conformidade de escopo, fechamento do DoR/DoD e publicação do guia operacional para a cliente parceira.</div>
            </div>
          </div>
          <span class="status-pill planejado">Planejado</span>
        </div>
      </div>
    </div>

    <!-- ==================== PAINEL DEZEMBRO 2026 ==================== -->
    <div class="month-view-panel view-dez">
      <div class="panel-month-header">
        <div>
          <h3 class="panel-month-title">Dezembro de 2026</h3>
          <span class="panel-month-phase">U4: Apresentação Final, Cutover e Encerramento Semestral</span>
        </div>
        <div class="panel-month-badges">
          <span class="status-pill planejado">Planejado</span>
          <span class="milestone-badge">Ponto de Controle 4 em 01/12</span>
        </div>
      </div>

      <div class="large-calendar-wrapper">
        <table class="large-cal-table">
          <thead>
            <tr>
              <th>Dom</th><th>Seg</th><th>Ter</th><th>Qua</th><th>Qui</th><th>Sex</th><th>Sáb</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="empty-day"></td><td class="empty-day"></td>
              <td class="day-milestone" title="PONTO DE CONTROLE 4 — Apresentação Final e Cutover">
                <div class="cell-top"><span class="cell-num">1</span></div>
                <span class="event-chip milestone">Apresentação Final</span>
              </td>
              <td title="Encerramento oficial da disciplina de Requisitos">
                <div class="cell-top"><span class="cell-num">2</span></div>
                <span class="event-chip">Encerramento</span>
              </td>
              <td><div class="cell-top"><span class="cell-num">3</span></div></td>
              <td><div class="cell-top"><span class="cell-num">4</span></div></td>
              <td><div class="cell-top"><span class="cell-num">5</span></div></td>
            </tr>
            <tr>
              <td><div class="cell-top"><span class="cell-num">6</span></div></td>
              <td><div class="cell-top"><span class="cell-num">7</span></div></td>
              <td><div class="cell-top"><span class="cell-num">8</span></div></td>
              <td><div class="cell-top"><span class="cell-num">9</span></div></td>
              <td><div class="cell-top"><span class="cell-num">10</span></div></td>
              <td><div class="cell-top"><span class="cell-num">11</span></div></td>
              <td><div class="cell-top"><span class="cell-num">12</span></div></td>
            </tr>
            <tr>
              <td><div class="cell-top"><span class="cell-num">13</span></div></td>
              <td><div class="cell-top"><span class="cell-num">14</span></div></td>
              <td><div class="cell-top"><span class="cell-num">15</span></div></td>
              <td><div class="cell-top"><span class="cell-num">16</span></div></td>
              <td><div class="cell-top"><span class="cell-num">17</span></div></td>
              <td><div class="cell-top"><span class="cell-num">18</span></div></td>
              <td><div class="cell-top"><span class="cell-num">19</span></div></td>
            </tr>
            <tr>
              <td><div class="cell-top"><span class="cell-num">20</span></div></td>
              <td><div class="cell-top"><span class="cell-num">21</span></div></td>
              <td><div class="cell-top"><span class="cell-num">22</span></div></td>
              <td><div class="cell-top"><span class="cell-num">23</span></div></td>
              <td><div class="cell-top"><span class="cell-num">24</span></div></td>
              <td><div class="cell-top"><span class="cell-num">25</span></div></td>
              <td><div class="cell-top"><span class="cell-num">26</span></div></td>
            </tr>
            <tr>
              <td><div class="cell-top"><span class="cell-num">27</span></div></td>
              <td><div class="cell-top"><span class="cell-num">28</span></div></td>
              <td><div class="cell-top"><span class="cell-num">29</span></div></td>
              <td><div class="cell-top"><span class="cell-num">30</span></div></td>
              <td><div class="cell-top"><span class="cell-num">31</span></div></td>
              <td class="empty-day"></td><td class="empty-day"></td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Feed de Reuniões e Pautas de Dezembro -->
      <div class="month-events-feed">
        <h4 class="month-events-title">Registro de Eventos e Pautas de Dezembro</h4>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge milestone"><span class="ev-d">01</span><span class="ev-m">DEZ</span></span>
            <div class="event-info">
              <div class="event-name">Ponto de Controle 4: Apresentação Final, Cutover e Transição do DUOC Finance</div>
              <div class="event-desc">Banca de avaliação final: apresentação do sistema integrado e operacional, suíte de testes, matriz de rastreabilidade bidirecional completa e vídeo final. [Acessar Entrega 4](../entregas/entrega-4.md).</div>
            </div>
          </div>
          <span class="status-pill planejado">Marco Final</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge"><span class="ev-d">02</span><span class="ev-m">DEZ</span></span>
            <div class="event-info">
              <div class="event-name">Retrospectiva Final e Consolidação de Lições Aprendidas</div>
              <div class="event-desc">Sessão interna de encerramento da equipe Cascata Ágil, avaliação de impacto sociotécnico na DUOC e fechamento das métricas acadêmicas.</div>
            </div>
          </div>
          <span class="status-pill planejado">Planejado</span>
        </div>
      </div>
    </div>

  </div> <!-- fim .calendar-month-content -->

</div> <!-- fim .calendar-unified-card -->

</div> <!-- fim .calendar-unified-widget -->

---

## Tabela Estruturada dos 4 Marcos Avaliativos (Unidades 1 a 4)

| Marco de Entrega | Período de Execução | Fase do Ciclo RAD | Atividades Metodológicas de Engenharia de Requisitos | Produtos e Artefatos Gerados | Status Atual |
| :--- | :---: | :--- | :--- | :--- | :---: |
| **Unidade 1**<br>*(Ponto de Controle 1)* | 11/08/2026 a 08/09/2026 | **Fase 1:** Planejamento de Requisitos | - Elicitação preliminar com Maria Beatryz (DUOC)<br>- Diagnóstico causal do problema e delimitação do escopo MVP<br>- Calibração da abordagem híbrida (RAD) no *Mixer Board*<br>- Implantação da infraestrutura *Docs as Code* (MkDocs / GH Pages) | - Visão de Produto e Projeto preliminar<br>- Rich Picture sistêmico e Diagrama de Ishikawa<br>- Matriz de Stakeholders e Perfis de IHC<br>- Matriz de Características (CAR-01 a CAR-08)<br>- Repositório de Atas de Reunião e Governança | :white_check_mark: **Concluída** |
| **Unidade 2**<br>*(Ponto de Controle 2)* | 15/09 a 15/10/2026 | **Fase 2:** Design do Usuário *(Elicitação e Modelagem)* | - Elicitação aprofundada (Introspecção, Entrevistas e Análise Documental)<br>- Classificação de requisitos funcionais e não-funcionais (FURPS+)<br>- Decomposição em Histórias de Usuário (INVEST) e BDD<br>- Priorização do Backlog (MoSCoW e Matriz Valor vs. Complexidade)<br>- Modelagem conceitual de dados (DER / PostgreSQL) | - Especificação de Requisitos FURPS+ formalizada<br>- Product Backlog priorizado no GitHub Projects<br>- Histórias de Usuário com critérios de aceitação BDD<br>- Critérios formais de DoR (Definition of Ready) e DoD<br>- Modelo de Dados Relacional e Wireframes iniciais | :warning: **Em Desenvolvimento** |
| **Unidade 3**<br>*(Ponto de Controle 3)* | 20/10 a 19/11/2026 | **Fase 3:** Construção Rápida *(Prototipagem e Core)* | - Prototipação de Alta Fidelidade no Figma (Desktop e Mobile)<br>- Sessão formal de Validação Sociotécnica Invertida com o cliente<br>- Homologação de interfaces e atendimento ao DoR<br>- Iterações de Construção RAD (Cadastros, Autenticação RBAC e RVT)<br>- Deploy contínuo em ambiente de homologação (*Staging* na Vercel) | - Protótipo interativo no Figma homologado por Maria Beatryz<br>- Relatório de Validação Sociotécnica e feedbacks coletados<br>- Módulo de Acesso e Cadastros (Colaboradores e Obras)<br>- Módulo de Lançamento de RVT em campo funcional | :warning: **Planejado** |
| **Unidade 4**<br>*(Ponto de Controle 4 / Final)* | 24/11 a 01/12/2026 | **Fase 4:** Transição / Cutover *(V&V, UAT e Aceite)* | - Construção do motor financeiro (apuração de despesas e contratos)<br>- Verificação de software (Inspeções Fagan, testes unitários e CI)<br>- Matriz de Rastreabilidade Bidirecional (*Forward/Backward*)<br>- Validação de Aceitação de Usuário (UAT) com dados sintéticos<br>- Transição operacional (*Cutover*) e capacitação sociotécnica | - Sistema DUOC Finance funcional e integrado<br>- Relatórios de custos e trilhas de auditoria LGPD ativas<br>- Suíte de testes automatizados e relatório de V&V<br>- Matriz de Rastreabilidade Bidirecional completa<br>- Termo de Aceite Formal assinado pela cliente parceira | :warning: **Planejado** |

---

## Detalhamento Temporal Semana a Semana (Semanas 01 a 13)

### Unidade 1: Fase 1 — Planejamento de Requisitos (11/08/2026 a 08/09/2026)
*Foco: Imersão no negócio, diagnóstico de processos, delimitação do MVP, governança e implantação da plataforma Docs as Code.*

| Semana / Período | Fase RAD | Atividades Executadas e Metodologia | Entregáveis e Artefatos Gerados | Responsáveis Principais | Status |
| :---: | :--- | :--- | :--- | :--- | :---: |
| **Semana 01**<br>11/08 a 18/08/2026 | Fase 1: Planejamento | - Formação oficial da equipe Cascata Ágil<br>- Identificação da organização parceira (DUOC Arquitetura e Engenharia)<br>- Primeiro contato e agendamento da reunião de abertura com Maria Beatryz | - Termo de abertura preliminar<br>- Canal oficial no WhatsApp e Discord configurados | Eric Araújo, Matheus Ribeiro | :white_check_mark: Feito |
| **Semana 02**<br>19/08 a 28/08/2026 | Fase 1: Planejamento | - Realização da **Reunião 01** de elicitação preliminar com Maria Beatryz<br>- Mapeamento das dores com planilhas de Excel e viagens de obras (RVT)<br>- Delimitação de escopo: exclusão de controle de estoque e foco em RH e Finanças (MVP)<br>- Decisão de uso de dados sintéticos para conformidade com a LGPD | - Ata de Reunião 01 documentada<br>- Rascunho inicial do Rich Picture<br>- Rascunho das causas-raiz (Ishikawa) | Equipe Cascata Ágil, Maria Beatryz | :white_check_mark: Feito |
| **Semana 03**<br>29/08 a 08/09/2026 | Fase 1: Planejamento | - **Produção integral e homologação para a Entrega 1:**<br>  * Realização da **Reunião 02** (alinhamento metodológico RAD)<br>  * Formalização do Rich Picture sistêmico com fronteiras e fluxos<br>  * Elaboração do Diagrama de Causa e Efeito (Ishikawa)<br>  * Mapeamento de Stakeholders (Poder x Interesse) e IHC<br>  * Purificação dos Objetivos Específicos e definição de CAR-01 a CAR-08<br>  * Calibração do *Mixer Board* (RAD) e Estratégia de ESW<br>  * Definição da governança, Matriz de Comunicação e fluxo de validação no Figma (DoR/DoD)<br>  * Configuração do portal *Docs as Code* (MkDocs Material, busca interativa, temas e automação via GitHub Actions)<br>  * Gravação do vídeo oficial da Entrega 1 e fechamento do Ponto de Controle 1 em 08/09/2026 | - Portal MkDocs publicado no GitHub Pages com 13 capítulos estruturados<br>- Páginas de Atas de Reuniões 01 e 02<br>- Painel de Entregas (Entrega 1 completa e templates 2 a 4)<br>- Vídeo da Entrega 1 gravado e indexado | Todos os integrantes da equipe | :white_check_mark: Feito |

---

### Unidade 2: Fase 2 — Design do Usuário: Elicitação e Modelagem (15/09 a 15/10/2026)
*Foco: Engenharia de Requisitos aprofundada, classificação funcional e não-funcional (FURPS+), priorização MoSCoW e modelagem conceitual.*

| Semana / Período | Fase RAD | Atividades Planejadas e Técnicas de ER | Entregáveis Esperados | Responsáveis Principais | Status |
| :---: | :--- | :--- | :--- | :--- | :---: |
| **Semana 04**<br>15/09 a 22/09/2026 | Fase 2: Design do Usuário | - Elicitação aprofundada: entrevista semiestruturada com Maria Beatryz sobre fluxos de RVT e fechamento de folha<br>- Análise documental minuciosa das planilhas sintéticas de despesas e adiantamentos de campo<br>- Construção de Personas representativas e cenários contextuais de uso | - Transcrição e Ata da Reunião 03<br>- Matriz de Personas e Cenários de IHC<br>- Glossário de termos de domínio da construção civil | Eric Araújo, Carlos Gabriel, Giovana Ferreira | :hourglass_flowing_sand: A Iniciar |
| **Semana 05**<br>23/09 a 29/09/2026 | Fase 2: Design do Usuário | - Levantamento e especificação de Requisitos Funcionais (RF) e Não-Funcionais (RNF) sob o framework **FURPS+**<br>- Formulação formal dos critérios de aceitação: **DoR (Definition of Ready)** e **DoD (Definition of Done)**<br>- Definição dos requisitos de segurança e privacidade (LGPD, RBAC) | - Especificação de Requisitos no padrão FURPS+<br>- Guia formal de DoR e DoD aprovado<br>- Catálogo de Requisitos de Segurança | Matheus Ribeiro, Paulo Nery, Matheus Camargo | :calendar: Planejado |
| **Semana 06**<br>30/09 a 07/10/2026 | Fase 2: Design do Usuário | - Decomposição dos requisitos em Histórias de Usuário no padrão **INVEST**<br>- Redação de critérios de aceitação no formato BDD/Gherkin (*Dado / Quando / Então*)<br>- Priorização do Backlog usando **MoSCoW** (Must, Should, Could, Won't) e matriz Valor de Negócio vs. Complexidade Técnica<br>- Cadastro de issues e epics no **GitHub Projects** | - Product Backlog estruturado no GitHub Projects #119<br>- Histórias de Usuário BDD indexadas na documentação<br>- Matriz de Priorização MoSCoW homologada | Gustavo, Gabriel, Eric Araújo | :calendar: Planejado |
| **Semana 07**<br>08/10 a 15/10/2026 | Fase 2: Design do Usuário | - Modelagem Conceitual de Dados (DER / Diagrama Entidade-Relacionamento para PostgreSQL/Supabase)<br>- Elaboração de Wireframes de baixa/média fidelidade para validação arquitetural prévia<br>- Consolidação da documentação no MkDocs e gravação da apresentação da Entrega 2 (fechamento em 15/10/2026) | - Diagrama Entidade-Relacionamento (DER)<br>- Wireframes estruturais das telas<br>- Documento da Entrega 2 e vídeo do Ponto de Controle 2 | Matheus Ribeiro, Paulo Nery, Equipe Cascata Ágil | :calendar: Planejado |

---

### Unidade 3: Fase 3 — Construção Rápida e Validação de Interfaces (20/10 a 19/11/2026)
*Foco: Prototipação de alta fidelidade no Figma, sessão de validação sociotécnica invertida e construção rápida incremental dos módulos.*

| Semana / Período | Fase RAD | Atividades Planejadas e Técnicas de ER | Entregáveis Esperados | Responsáveis Principais | Status |
| :---: | :--- | :--- | :--- | :--- | :---: |
| **Semana 08**<br>20/10 a 27/10/2026 | Fase 3: Construção Rápida | - Construção do protótipo de alta fidelidade no Figma (Design System, componentes responsivos Desktop e Mobile)<br>- Prototipação dos fluxos críticos: Dashboard de Obras, Cadastro de Pessoal, Lançamento de RVT e Prestação de Contas | - Protótipo interativo navegável no Figma<br>- Guia de Estilo (Cores, Tipografia e Componentes) | Giovana Ferreira, Carlos Gabriel | :calendar: Planejado |
| **Semana 09**<br>28/10 a 04/11/2026 | Fase 3: Construção Rápida | - **Sessão de Validação Sociotécnica Invertida:** Maria Beatryz assume o controle e navega pelo protótipo no Figma via Google Meet<br>- Registro de atritos de IHC, coleta de sugestões e ajustes imediatos de usabilidade<br>- Homologação formal das telas e verificação do DoR para liberação de desenvolvimento | - Ata da Reunião 04 com métricas de validação sociotécnica<br>- Protótipo no Figma homologado com DoR atendido<br>- Backlog refinado para a fase de construção | Gustavo, Eric Araújo, Maria Beatryz | :calendar: Planejado |
| **Semana 10**<br>05/11 a 11/11/2026 | Fase 3: Construção Rápida | - *Iteração RAD 1 (Setup e Core):* Inicialização do projeto Next.js/React + Supabase<br>- Implementação da camada de autenticação com papéis de acesso (RBAC)<br>- Desenvolvimento do módulo de Cadastros Base (Colaboradores CLT/Diaristas, Obras e Centros de Custo com dados sintéticos) | - Repositório de código configurado com pipeline CI/CD<br>- Módulo de Autenticação e Cadastros funcionais<br>- Testes unitários do núcleo de domínio | Paulo Nery, Matheus Ribeiro, Matheus Camargo | :calendar: Planejado |
| **Semana 11**<br>12/11 a 19/11/2026 | Fase 3: Construção Rápida | - *Iteração RAD 2 (Módulo RVT):* Implementação da tela móvel e desktop de lançamento de Relatório de Viagem Técnica (RVT)<br>- Registro de despesas de alimentação, transporte e comprovantes simulados<br>- Deploy contínuo em ambiente de homologação (*Staging* na Vercel)<br>- Fechamento da Entrega 3 e gravação da apresentação em 19/11/2026 | - Módulo de RVT operando em Staging na Vercel<br>- Documento da Entrega 3 no portal MkDocs<br>- Vídeo de apresentação do Ponto de Controle 3 | Equipe Cascata Ágil | :calendar: Planejado |

---

### Unidade 4: Fase 4 — Transição / Cutover: V&V, UAT e Encerramento (24/11 a 01/12/2026)
*Foco: Motor financeiro, suíte de testes automatizados, rastreabilidade bidirecional, UAT com a cliente, homologação formal e entrega final.*

| Semana / Período | Fase RAD | Atividades Planejadas e Técnicas de ER | Entregáveis Esperados | Responsáveis Principais | Status |
| :---: | :--- | :--- | :--- | :--- | :---: |
| **Semana 12**<br>24/11 a 27/11/2026 | Fase 4: Transição / Cutover | - *Iteração RAD 3 (Motor Financeiro):* Cálculo de fechamento de obras, conciliação de adiantamentos e relatórios de custos por contrato<br>- Verificação de Software: Inspeção estática (Fagan), ampliação de testes unitários e CI<br>- Construção da **Matriz de Rastreabilidade Bidirecional** completa (*Forward/Backward*) | - Módulo financeiro e dashboard gerencial implantados<br>- Relatório de Inspeção e testes automatizados<br>- Matriz de Rastreabilidade Bidirecional formalizada | Paulo Nery, Matheus Ribeiro, Matheus Camargo | :calendar: Planejado |
| **Semana 13**<br>28/11 a 01/12/2026 | Fase 4: Transição / Cutover | - Sessão síncrona de **Testes de Aceitação de Usuário (UAT)** com Maria Beatryz usando carga de dados sintéticos<br>- Emissão e assinatura do **Termo de Aceite Formal** assinado pela cliente<br>- Transição operacional (*Cutover*): publicação da versão estável e Manual do Usuário<br>- Retrospectiva final com Lições Aprendidas e gravação da Apresentação Final (Ponto de Controle 4) em 01/12/2026 | - Sistema DUOC Finance em produção estável<br>- Relatório formal de UAT e Termo de Aceite assinado<br>- Manual Operacional do Usuário publicado<br>- Documento e vídeo da Entrega 4 finalizados | Equipe Cascata Ágil, Maria Beatryz | :calendar: Planejado |

---

## Dinâmica de Atualização e Governança do Cronograma

O cronograma do DUOC Finance é um **artefato vivo** sujeito a refinamento contínuo. Sua governança respeita as seguintes diretrizes:

1. **Sincronização com o GitHub Projects:** O progresso diário de tarefas é monitorado no quadro kanban do GitHub Projects ([Acessar Projeto #119](https://github.com/orgs/mdsreq-fga-unb/projects/119/)), servindo de fonte de verdade para a atualização deste capítulo.
2. **Revisões de Marco Avaliativo:** Ao final de cada uma das 4 Unidades letivas, o cronograma é revisado e republicado para registrar desvios de esforço, horas incorridas e eventuais recalibrações de escopo negociadas com Maria Beatryz.
3. **Gestão de Riscos Operacionais:** Caso ocorram impedimentos técnicos ou atrasos em validações síncronas, o Product Owner aciona as medidas de contingência pactuadas no [Capítulo 7.3 — Processo de Validação](../interacao-cliente/7.3-validacao.md).

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 05/09/2026 | Estruturação inicial do planejamento temporal preliminar | Matheus Ribeiro Szervinsk | Matheus Ribeiro |
| `1.1` | 07/09/2026 | Correção ortográfica, detalhamento das entregas e padronização | Matheus Ribeiro | Matheus Ribeiro |
| `1.2` | 07/09/2026 | Alinhamento das fases e nomenclaturas com o processo RAD | Matheus Ribeiro | Matheus Ribeiro |
| `1.3` | 07/09/2026 | Sincronização rigorosa dos períodos oficiais de cada Unidade (U1: 11/08 a 08/09, U2: 15/09 a 15/10, U3: 20/10 a 19/11, U4: 24/11 a 01/12) com as 4 fases do RAD e semanas correspondentes | Matheus Ribeiro | |
| `1.4` | 08/09/2026 | Implementação do Mapa Temporal de Execução com Grade Calendário Semestral (Agosto a Dezembro) e destaque para marcos avaliativos | Matheus Ribeiro Szervinsk | Equipe DUOC Finance |
| `1.5` | 08/09/2026 | Redesenho unificado: integração dos cards seletores diretamente no contêiner do calendário, tooltips informativos por mês, layout centralizado e remoção integral de emojis | Matheus Ribeiro Szervinsk | Equipe DUOC Finance |