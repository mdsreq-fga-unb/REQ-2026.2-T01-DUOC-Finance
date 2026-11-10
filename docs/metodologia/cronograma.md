# Cronograma

O planejamento metodológico, as folgas e o método de atualização de requisitos estão no capítulo [Planejamento](planejamento.md).

---

## Mapa Temporal de Execução e Calendário Interativo

Utilize os **cards seletores integrados no topo do calendário** para alternar entre os meses do semestre letivo de 2026 (Agosto a Dezembro). Passe o cursor sobre cada seletor para visualizar o *tooltip informativo* com período, reuniões e marcos, ou clique para carregar o mês correspondente em grade ampliada centralizada:

<div class="calendar-unified-widget">

  <!-- Inputs invisíveis para controle de abas -->
  <input type="radio" name="cal-month" id="tab-month-ago" class="month-radio">
  <input type="radio" name="cal-month" id="tab-month-set" class="month-radio">
  <input type="radio" name="cal-month" id="tab-month-out" class="month-radio">
  <input type="radio" name="cal-month" id="tab-month-nov" class="month-radio" checked>
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
          <div class="tooltip-phase">Ciclo 0: Concepção & Diagnóstico (Marco: PC1)</div>
          <div class="tooltip-divider"></div>
          <div class="tooltip-body">
            <p><strong>Período:</strong> 11/08 a 31/08 (período do planejamento de agosto)</p>
            <p><strong>Eventos:</strong> Contato exploratório inicial com a DUOC (19/08)</p>
            <p><strong>Entregas:</strong> Rich Picture, Ishikawa e Docs as Code</p>
          </div>
          <div class="tooltip-hint">Clique para alternar para Agosto</div>
        </div>
      </label>

      <!-- Botão Setembro -->
      <label for="tab-month-set" class="month-tab-btn tab-set">
        <span class="tab-title">Setembro 2026</span>
        <span class="tab-pill concluido">Período encerrado</span>
        <div class="month-tooltip">
          <div class="tooltip-header">
            <strong>Setembro de 2026</strong>
            <span class="tooltip-badge concluido">Período encerrado</span>
          </div>
          <div class="tooltip-phase">Ciclo 0 (Finalização PC1 e Requisitos)</div>
          <div class="tooltip-divider"></div>
          <div class="tooltip-body">
            <p><strong>Período:</strong> 01/09 a 30/09</p>
            <p><strong>Marcos:</strong> Ponto de Controle 1 Entregue (08/09)</p>
            <p><strong>Reuniões:</strong> Reunião 01 com a cliente (05/09) • Reuniões internas 02 e 03 (07/09) • Reunião 04 interna (17/09) • Reunião 05 interna (24/09)</p>
          </div>
          <div class="tooltip-hint">Clique para alternar para Setembro</div>
        </div>
      </label>

      <!-- Botão Outubro -->
      <label for="tab-month-out" class="month-tab-btn tab-out">
        <span class="tab-title">Outubro 2026</span>
        <span class="tab-pill concluido">Período encerrado</span>
        <div class="month-tooltip">
          <div class="tooltip-header">
            <strong>Outubro de 2026</strong>
            <span class="tooltip-badge concluido">Período encerrado</span>
          </div>
          <div class="tooltip-phase">Fim do Ciclo 0 (PC2) e Incr. 1 (Construção: Cadastro, Autenticação e RVT)</div>
          <div class="tooltip-divider"></div>
          <div class="tooltip-body">
            <p><strong>Período:</strong> 01/10 a 31/10</p>
            <p><strong>Marcos:</strong> PC2 concluído (publicação 13/10; apresentações 13 e 15/10)</p>
            <p><strong>Validações:</strong> validação presencial do protótipo no Figma realizada em 02/10 (Ata 06) • início do Incremento 1 em 20/10 (Semana 08 em atraso)</p>
          </div>
          <div class="tooltip-hint">Clique para alternar para Outubro</div>
        </div>
      </label>

      <!-- Botão Novembro -->
      <label for="tab-month-nov" class="month-tab-btn tab-nov">
        <span class="tab-title">Novembro 2026</span>
        <span class="tab-pill andamento">Em andamento</span>
        <div class="month-tooltip">
          <div class="tooltip-header">
            <strong>Novembro de 2026</strong>
            <span class="tooltip-badge andamento">Em andamento</span>
          </div>
          <div class="tooltip-phase">Fecho do Incr. 1, Incrementos 2 e 3 e Incremento 4 (Cutover)</div>
          <div class="tooltip-divider"></div>
          <div class="tooltip-body">
            <p><strong>Período:</strong> 01/11 a 30/11</p>
            <p><strong>Marcos:</strong> PC3: publicação 17/11; apresentações 17 e 19/11</p>
            <p><strong>Reuniões:</strong> validação do Incr. 2 (13/11; a confirmar) • UAT prevista (27/11; a confirmar) • Correções (28 a 30/11) • Aceite Formal (30/11)</p>
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
          <div class="tooltip-phase">Transição Operacional, Apresentação Final e Encerramento</div>
          <div class="tooltip-divider"></div>
          <div class="tooltip-body">
            <p><strong>Período:</strong> 01/12 a 10/12 (continuidade acadêmica da Unidade 4)</p>
            <p><strong>Marcos:</strong> publicação PC4 em 01/12 antes das 08h; apresentações 01 e 03/12</p>
            <p><strong>Encerramento:</strong> retrospectiva da equipe após as apresentações (data a confirmar)</p>
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
          <span class="panel-month-phase">Ciclo 0: Concepção & Diagnóstico (Marco: Ponto de Controle 1)</span>
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
              <td class="day-u1 day-done" title="Contato exploratório preliminar com Maria Beatryz (DUOC)">
                <div class="cell-top"><span class="cell-num">19</span></div>
                <span class="event-chip active-phase">Contato DUOC</span>
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
        <h4 class="month-events-title">Registro de Reuniões, Entregas e Pautas de Agosto</h4>
        
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
              <div class="event-name">Contato Exploratório Preliminar com Maria Beatryz (DUOC)</div>
              <div class="event-desc">Primeiro alinhamento institucional para contextualização de dores com planilhas de obras e fechamento de diaristas (a Reunião 01 oficial de escopo e MVP foi realizada em 05/09).</div>
            </div>
          </div>
          <span class="status-pill concluido">Realizado</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge done"><span class="ev-d">24</span><span class="ev-m">AGO</span></span>
            <div class="event-info">
              <div class="event-name">Mapeamento Causal de Processos (Diagrama de Ishikawa)</div>
              <div class="event-desc">Estruturação das 4 categorias causais (adaptação do modelo 6M) identificando causas da ineficiência administrativa e formulação do Rich Picture preliminar.</div>
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
          <span class="panel-month-phase">Ciclo 0 (Finalização PC1) e Abertura do Incremento 1: Design do Usuário & Prototipagem</span>
        </div>
        <div class="panel-month-badges">
          <span class="status-pill concluido">Período encerrado</span>
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
              <td class="day-u1 day-meet day-done" title="Reunião 01 Oficial com Maria Beatryz — Elicitação de Escopo e MVP">
                <div class="cell-top"><span class="cell-num">5</span></div>
                <span class="event-chip meet-done">Reunião 01</span>
              </td>
            </tr>
            <tr>
              <td class="day-u1 day-done" title="Validação cruzada dos artefatos">
                <div class="cell-top"><span class="cell-num">6</span></div>
              </td>
              <td class="day-u1 day-meet day-done" title="Reunião 02: alinhamento interno; Reunião 03: gravação interna da apresentação do PC1">
                <div class="cell-top"><span class="cell-num">7</span></div>
                <span class="event-chip meet-done">Reuniões 02 e 03</span>
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
              <td class="day-u2 day-done" title="Início da elicitação aprofundada, base no Figma e prototipagem">
                <div class="cell-top"><span class="cell-num">15</span></div>
                <span class="event-chip active-phase">Início ER</span>
              </td>
              <td class="day-u2 day-done" title="Entrevistas de detalhamento com Maria Beatryz">
                <div class="cell-top"><span class="cell-num">16</span></div>
              </td>
              <td class="day-u2 day-meet day-done" title="Reunião 04 — retrospectiva interna da Unidade 1 e planejamento da Unidade 2">
                <div class="cell-top"><span class="cell-num">17</span></div>
                <span class="event-chip meet-done">Reunião 04</span>
              </td>
              <td class="day-u2 day-done" title="Continuidade planejada da análise de requisitos; nenhuma Reunião 03 com a cliente documentada neste dia">
                <div class="cell-top"><span class="cell-num">18</span></div>
              </td>
              <td class="day-u2 day-done" title="Personas e Cenários contextuais">
                <div class="cell-top"><span class="cell-num">19</span></div>
              </td>
            </tr>
            <tr>
              <td class="day-u2 day-done"><div class="cell-top"><span class="cell-num">20</span></div></td>
              <td class="day-u2 day-done"><div class="cell-top"><span class="cell-num">21</span></div></td>
              <td class="day-u2 day-done"><div class="cell-top"><span class="cell-num">22</span></div></td>
              <td class="day-u2 day-done" title="Classificação de requisitos URPS+">
                <div class="cell-top"><span class="cell-num">23</span></div>
                <span class="event-chip active-phase">URPS+</span>
              </td>
              <td class="day-u2 day-meet day-done" title="Reunião 05 — Priorização de Requisitos (Matriz 4x4) e Alinhamento do MVP">
                <div class="cell-top"><span class="cell-num">24</span></div>
                <span class="event-chip meet-done">Reunião 05</span>
              </td>
              <td class="day-u2 day-done" title="Definição formal de DoR e DoD">
                <div class="cell-top"><span class="cell-num">25</span></div>
                <span class="event-chip active-phase">DoR & DoD</span>
              </td>
              <td class="day-u2 day-done" title="Requisitos de segurança e RBAC">
                <div class="cell-top"><span class="cell-num">26</span></div>
              </td>
            </tr>
            <tr>
              <td class="day-u2 day-done"><div class="cell-top"><span class="cell-num">27</span></div></td>
              <td class="day-u2 day-done"><div class="cell-top"><span class="cell-num">28</span></div></td>
              <td class="day-u2 day-done"><div class="cell-top"><span class="cell-num">29</span></div></td>
              <td class="day-u2 day-done" title="Decomposição em Histórias de Usuário INVEST">
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
              <div class="event-desc">Homologação da exclusão de estoque, proteção de dados via dados sintéticos (LGPD), hospedagem na Vercel e separação entre CLT e diaristas. [Ver Ata 01](../governanca/atas/index.md).</div>
            </div>
          </div>
          <span class="status-pill concluido">Realizada</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge done"><span class="ev-d">07</span><span class="ev-m">SET</span></span>
            <div class="event-info">
              <div class="event-name">Reunião 02: Alinhamento Metodológico Interno e ESW</div>
              <div class="event-desc">Diagnóstico sociotécnico, discussão histórica da ferramenta de ponto então registrada como Shifton, adoção do RAD e governança do projeto. A gravação de apresentação do PC1 corresponde à Reunião 03, também realizada em 07/09. [Ver Atas 02 e 03](../governanca/atas/index.md).</div>
            </div>
          </div>
          <span class="status-pill concluido">Realizada</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge done"><span class="ev-d">07</span><span class="ev-m">SET</span></span>
            <div class="event-info">
              <div class="event-name">Reunião 03: Apresentação Interna e Gravação da Baseline da Unidade 1</div>
              <div class="event-desc">Registro interno às 21h34 da apresentação formal do PC1, com síntese de escopo, RAD, arquitetura e Engenharia de Requisitos. Não foi uma entrevista com a cliente. [Ver Ata 03](../governanca/atas/index.md).</div>
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
            <span class="event-date-badge done"><span class="ev-d">15</span><span class="ev-m">SET</span></span>
            <div class="event-info">
              <div class="event-name">Abertura da Elicitação Aprofundada e Especificação de Requisitos</div>
              <div class="event-desc">Início da análise documental minuciosa das planilhas sintéticas, mapeamento de personas e elaboração dos primeiros wireframes navegáveis para canteiro de obras e apontamento móvel (CAR-01 e CAR-02).</div>
            </div>
          </div>
          <span class="status-pill concluido">Concluído</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge done"><span class="ev-d">17</span><span class="ev-m">SET</span></span>
            <div class="event-info">
              <div class="event-name">Reunião 04: Retrospectiva Interna da Unidade 1 e Planejamento da Unidade 2</div>
              <div class="event-desc">Avaliação do feedback docente, distribuição de correções, revisão do cronograma RAD e definição dos prazos internos de requisitos (22, 24 e 29/09). [Ver Ata 04](../governanca/atas/index.md).</div>
            </div>
          </div>
          <span class="status-pill concluido">Realizada</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge done"><span class="ev-d">24</span><span class="ev-m">SET</span></span>
            <div class="event-info">
              <div class="event-name">Reunião 05 Interna: Priorização por Matriz 4×4 e Alinhamento do MVP</div>
              <div class="event-desc">Revisão e priorização de requisitos com a Matriz 4×4 (Valor × Esforço). Inclusão de RF11 (indicadores de custo), rebaixamento de RF21 (estorno financeiro), exclusão de RF16 e postergação de RNF01 (modo offline). Aprovação interna do MVP com ressalvas e definição do subdomínio finance.doc.br na Vercel; o aceite direto da cliente não foi registrado nessa reunião. [Ver Ata 05](../governanca/atas/reuniao-05.md).</div>
            </div>
          </div>
          <span class="status-pill concluido">Realizada</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge done"><span class="ev-d">30</span><span class="ev-m">SET</span></span>
            <div class="event-info">
              <div class="event-name">Decomposição em Histórias de Usuário (INVEST) e Critérios de Aceitação</div>
              <div class="event-desc">Requisitos decompostos em Histórias de Usuário INVEST com critérios de aceitação formalizados e backlog priorizado e cadastrado no GitHub Projects (Semana 06).</div>
            </div>
          </div>
          <span class="status-pill concluido">Concluído</span>
        </div>
      </div>
    </div>

    <!-- ==================== PAINEL OUTUBRO 2026 ==================== -->
    <div class="month-view-panel view-out">
      <div class="panel-month-header">
        <div>
          <h3 class="panel-month-title">Outubro de 2026</h3>
          <span class="panel-month-phase">Fim do Ciclo 0 (PC2 concluído) e abertura do Incremento 1 — Cadastro, Autenticação e RVT</span>
        </div>
        <div class="panel-month-badges">
          <span class="status-pill concluido">Período encerrado</span>
          <span class="milestone-badge done">PC2 concluído: publicação 13/10; apresentações 13 e 15/10</span>
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
              <td class="empty-day"></td>
              <td class="empty-day"></td>
              <td class="empty-day"></td>
              <td class="empty-day"></td>
              <td class="day-u2 day-done" title="Critérios BDD/Gherkin e refinamento">
                <div class="cell-top"><span class="cell-num">1</span></div>
              </td>
              <td class="day-u2 day-meet day-done" title="Reunião 06 com Maria Beatryz — Validação presencial do protótipo de alta fidelidade no Figma (Incremento 1)">
                <div class="cell-top"><span class="cell-num">2</span></div>
                <span class="event-chip meet-done">Validação Figma</span>
              </td>
              <td class="day-u2 day-done">
                <div class="cell-top"><span class="cell-num">3</span></div>
              </td>
            </tr>
            <tr>
              <td class="day-u2 day-done" title="Verificação do DoR do Incremento 1">
                <div class="cell-top"><span class="cell-num">4</span></div>
                <span class="event-chip active-phase">Revisão DoR</span>
              </td>
              <td class="day-u2 day-done">
                <div class="cell-top"><span class="cell-num">5</span></div>
              </td>
              <td class="day-u2 day-done">
                <div class="cell-top"><span class="cell-num">6</span></div>
              </td>
              <td class="day-u2 day-done">
                <div class="cell-top"><span class="cell-num">7</span></div>
              </td>
              <td class="day-u2 day-done">
                <div class="cell-top"><span class="cell-num">8</span></div>
              </td>
              <td class="day-u2 day-done" title="Fechamento da documentação da Entrega 2 no MkDocs">
                <div class="cell-top"><span class="cell-num">9</span></div>
                <span class="event-chip active-phase">Fecho Entrega 2</span>
              </td>
              <td class="day-u2 day-done">
                <div class="cell-top"><span class="cell-num">10</span></div>
              </td>
            </tr>
            <tr>
              <td class="day-u2 day-done">
                <div class="cell-top"><span class="cell-num">11</span></div>
              </td>
              <td class="day-u2 day-done" title="Feriado N. Sra Aparecida / Gravação do vídeo do PC2">
                <div class="cell-top"><span class="cell-num">12</span></div>
                <span class="event-chip">Gravação PC2</span>
              </td>
              <td class="day-milestone day-done" title="PC2 — publicado no GitHub Pages antes das 08h; primeiro dia de apresentações (concluído)">
                <div class="cell-top"><span class="cell-num">13</span></div>
                <span class="event-chip milestone-done">Entrega 2</span>
              </td>
              <td class="day-u2 day-done">
                <div class="cell-top"><span class="cell-num">14</span></div>
              </td>
              <td class="day-u2 day-done" title="PC2 — segundo dia de apresentações (concluído)">
                <div class="cell-top"><span class="cell-num">15</span></div>
                <span class="event-chip">Apresentações PC2</span>
              </td>
              <td>
                <div class="cell-top"><span class="cell-num">16</span></div>
              </td>
              <td>
                <div class="cell-top"><span class="cell-num">17</span></div>
              </td>
            </tr>
            <tr>
              <td>
                <div class="cell-top"><span class="cell-num">18</span></div>
              </td>
              <td class="day-u3 day-done">
                <div class="cell-top"><span class="cell-num">19</span></div>
              </td>
              <td class="day-u3 day-done" title="Abertura do Incremento 1 — Plan: atualização de requisitos e início do Frontend de cadastro/login e RVT">
                <div class="cell-top"><span class="cell-num">20</span></div>
                <span class="event-chip active-phase">Início Incr. 1</span>
              </td>
              <td class="day-u3 day-done">
                <div class="cell-top"><span class="cell-num">21</span></div>
              </td>
              <td class="day-u3 day-done" title="Modelagem Conceitual de Dados (DER / Supabase)">
                <div class="cell-top"><span class="cell-num">22</span></div>
                <span class="event-chip active-phase">DER Supabase</span>
              </td>
              <td class="day-u3 day-done" title="Setup do repositório da aplicação e pipeline CI/CD na Vercel com dados sintéticos">
                <div class="cell-top"><span class="cell-num">23</span></div>
                <span class="event-chip active-phase">CI/CD Vercel</span>
              </td>
              <td class="day-u3 day-done">
                <div class="cell-top"><span class="cell-num">24</span></div>
              </td>
            </tr>
            <tr>
              <td class="day-u3 day-done">
                <div class="cell-top"><span class="cell-num">25</span></div>
              </td>
              <td class="day-u3 day-done" title="Início da lógica de backend: cadastro unificado (CAR-01) e RBAC base (CAR-07)">
                <div class="cell-top"><span class="cell-num">26</span></div>
                <span class="event-chip active-phase">CAR-01 / CAR-07</span>
              </td>
              <td class="day-u3 day-done" title="Encerramento da Semana 08 com pendências registradas (em atraso)">
                <div class="cell-top"><span class="cell-num">27</span></div>
                <span class="event-chip">S08 em atraso</span>
              </td>
              <td class="day-u3 day-done" title="Criação do banco Supabase e conexão com a aplicação via ORM">
                <div class="cell-top"><span class="cell-num">28</span></div>
                <span class="event-chip active-phase">Supabase + ORM</span>
              </td>
              <td class="day-u3 day-done">
                <div class="cell-top"><span class="cell-num">29</span></div>
              </td>
              <td class="day-u3 day-done" title="Refino de papéis e acessos (RBAC)">
                <div class="cell-top"><span class="cell-num">30</span></div>
                <span class="event-chip">Refino RBAC</span>
              </td>
              <td class="day-u3 day-done">
                <div class="cell-top"><span class="cell-num">31</span></div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Feed de Reuniões e Pautas de Outubro -->
      <div class="month-events-feed">
        <h4 class="month-events-title">Registro de Reuniões, Entregas e Pautas de Outubro</h4>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge done"><span class="ev-d">02</span><span class="ev-m">OUT</span></span>
            <div class="event-info">
              <div class="event-name">Reunião 06: Validação do Protótipo no Figma com Maria Beatryz (Incremento 1)</div>
              <div class="event-desc">Sessão presencial conduzida por Eric Araújo sobre o protótipo de alta fidelidade no Figma (Colaboradores, Visão Geral, Análise de Custos e Perfis e Permissões). Telas aprovadas sem alterações; a validação no frontend navegável segue como próximo passo antes do DoR. <a href="../../governanca/atas/reuniao-06/">Ver Ata 06</a> • <a href="https://www.figma.com/design/jJ5lOX1FJ52vpFGk8cimoM/DUOC-FINANCE?node-id=1-39" target="_blank" rel="noopener noreferrer">Abrir protótipo no Figma</a>.</div>
            </div>
          </div>
          <span class="status-pill concluido">Realizada</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge milestone done"><span class="ev-d">13</span><span class="ev-m">OUT</span></span>
            <div class="event-info">
              <div class="event-name">Ponto de Controle 2: Publicação e Primeiro Dia de Apresentações</div>
              <div class="event-desc">Publicação no GitHub Pages até as 08h de 13/10 e apresentações em 13 e 15/10 concluídas. Entrega: especificação URPS+ do catálogo vigente (40 RFs e 31 RNFs), backlog INVEST, priorização pela Matriz 4×4 e critérios DoR/DoD. <a href="../../entregas/entrega-2/">Acessar Entrega 2</a>.</div>
            </div>
          </div>
          <span class="status-pill concluido">Concluído / Entregue</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge"><span class="ev-d">20</span><span class="ev-m">OUT</span></span>
            <div class="event-info">
              <div class="event-name">Abertura do Incremento 1: Construção do Cadastro, Autenticação e RVT (Semana 08)</div>
              <div class="event-desc">Atualização dos requisitos do incremento (Plan), desenvolvimento Frontend de cadastro/login e módulo móvel de RVT, modelagem conceitual (DER / Supabase), setup do repositório com pipeline na Vercel e início da lógica de CAR-01 e CAR-07. A semana foi encerrada com pendências.</div>
            </div>
          </div>
          <span class="status-pill andamento">Em Desenvolvimento / Em Atraso</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge"><span class="ev-d">28</span><span class="ev-m">OUT</span></span>
            <div class="event-info">
              <div class="event-name">Criação do Banco Supabase, Camada ORM e Refino de RBAC (Semana 09)</div>
              <div class="event-desc">Provisionamento do banco Supabase a partir do DER, conexão com a aplicação via ORM, refino das telas de login e RVT e dos papéis de acesso (RBAC).</div>
            </div>
          </div>
          <span class="status-pill andamento">Em Desenvolvimento</span>
        </div>
      </div>
    </div>

    <!-- ==================== PAINEL NOVEMBRO 2026 ==================== -->
    <div class="month-view-panel view-nov">
      <div class="panel-month-header">
        <div>
          <h3 class="panel-month-title">Novembro de 2026</h3>
          <span class="panel-month-phase">Fecho do Incremento 1, Incrementos 2 e 3 (Construção Financeira e Custos) e Incremento 4 (Cutover)</span>
        </div>
        <div class="panel-month-badges">
          <span class="status-pill andamento">Em andamento</span>
          <span class="milestone-badge">PC3: publicação 17/11; apresentações 17 e 19/11</span>
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
              <td class="day-u3 day-done">
                <div class="cell-top"><span class="cell-num">1</span></div>
              </td>
              <td class="day-done" title="Feriado">
                <div class="cell-top"><span class="cell-num">2</span></div>
                <span class="event-chip">Finados</span>
              </td>
              <td class="day-u3 day-done" title="Refino das telas de login e RVT">
                <div class="cell-top"><span class="cell-num">3</span></div>
              </td>
              <td class="day-u3 day-done">
                <div class="cell-top"><span class="cell-num">4</span></div>
              </td>
              <td class="day-u3 day-done" title="Início da Semana 10 — conclusão das pendências do Incremento 1">
                <div class="cell-top"><span class="cell-num">5</span></div>
                <span class="event-chip active-phase">Fecho Incr. 1</span>
              </td>
              <td class="day-u3 day-done">
                <div class="cell-top"><span class="cell-num">6</span></div>
              </td>
              <td class="day-u3 day-done">
                <div class="cell-top"><span class="cell-num">7</span></div>
              </td>
            </tr>
            <tr>
              <td class="day-u3 day-done">
                <div class="cell-top"><span class="cell-num">8</span></div>
              </td>
              <td class="day-u3 day-done" title="Marco de referência da revisão do cronograma (09/11/2026)">
                <div class="cell-top"><span class="cell-num">9</span></div>
              </td>
              <td class="day-u3">
                <div class="cell-top"><span class="cell-num">10</span></div>
              </td>
              <td class="day-u3" title="Fim previsto do Incremento 1 — revisão e validação dos requisitos pós-construção">
                <div class="cell-top"><span class="cell-num">11</span></div>
                <span class="event-chip active-phase">Revisão ER</span>
              </td>
              <td class="day-u3" title="Abertura do Incremento 2 — Plan: atualização de requisitos e design das telas financeiras no Frontend">
                <div class="cell-top"><span class="cell-num">12</span></div>
                <span class="event-chip active-phase">Início Incr. 2</span>
              </td>
              <td class="day-u3 day-meet" title="Validação sociotécnica do Incremento 2 com Maria Beatryz (a confirmar)">
                <div class="cell-top"><span class="cell-num">13</span></div>
                <span class="event-chip meet">Validação Incr. 2</span>
              </td>
              <td class="day-u3">
                <div class="cell-top"><span class="cell-num">14</span></div>
              </td>
            </tr>
            <tr>
              <td title="Feriado">
                <div class="cell-top"><span class="cell-num">15</span></div>
                <span class="event-chip">Proclamação</span>
              </td>
              <td class="day-u3" title="DoR atendido para a lógica do Incremento 2">
                <div class="cell-top"><span class="cell-num">16</span></div>
                <span class="event-chip active-phase">DoR Incr. 2</span>
              </td>
              <td class="day-milestone" title="PC3 — prazo de publicação antes das 08h e primeiro dia de apresentações">
                <div class="cell-top"><span class="cell-num">17</span></div>
                <span class="event-chip milestone">Entrega 3</span>
              </td>
              <td class="day-u3" title="Gravação da apresentação do PC3">
                <div class="cell-top"><span class="cell-num">18</span></div>
                <span class="event-chip">Gravação PC3</span>
              </td>
              <td class="day-u3" title="PC3 — segundo dia de apresentações">
                <div class="cell-top"><span class="cell-num">19</span></div>
                <span class="event-chip">Apresentações PC3</span>
              </td>
              <td title="Feriado">
                <div class="cell-top"><span class="cell-num">20</span></div>
                <span class="event-chip">Consciência N.</span>
              </td>
              <td class="day-u4" title="Construção: Motor Financeiro (CAR-03) e Reembolsos (CAR-04)">
                <div class="cell-top"><span class="cell-num">21</span></div>
                <span class="event-chip active-phase">Motor Financeiro</span>
              </td>
            </tr>
            <tr>
              <td class="day-u4">
                <div class="cell-top"><span class="cell-num">22</span></div>
              </td>
              <td class="day-u4" title="Custos por contrato (CAR-05) e indicadores de custos (RF11 / CAR-06)">
                <div class="cell-top"><span class="cell-num">23</span></div>
                <span class="event-chip active-phase">CAR-05 / CAR-06</span>
              </td>
              <td class="day-u4" title="Folga técnica para validação aritmética das fórmulas">
                <div class="cell-top"><span class="cell-num">24</span></div>
              </td>
              <td class="day-u4" title="Code Freeze, inspeção Fagan e deploy em Staging">
                <div class="cell-top"><span class="cell-num">25</span></div>
                <span class="event-chip active-phase">Code Freeze</span>
              </td>
              <td class="day-u4" title="Carga de dados sintéticos para UAT e suíte de regressão">
                <div class="cell-top"><span class="cell-num">26</span></div>
                <span class="event-chip active-phase">Regressão</span>
              </td>
              <td class="day-u4 day-meet" title="Sessão de UAT com Maria Beatryz (a confirmar)">
                <div class="cell-top"><span class="cell-num">27</span></div>
                <span class="event-chip meet">Sessão UAT</span>
              </td>
              <td class="day-u4" title="Janela de correção pós-UAT (Dia 1)">
                <div class="cell-top"><span class="cell-num">28</span></div>
                <span class="event-chip active-phase">Correção UAT</span>
              </td>
            </tr>
            <tr>
              <td class="day-u4" title="Janela de correção pós-UAT (Dia 2)">
                <div class="cell-top"><span class="cell-num">29</span></div>
                <span class="event-chip active-phase">Correção UAT</span>
              </td>
              <td class="day-u4" title="Janela de correção (Dia 3), Aceite Formal, Cutover, Manual do Usuário e dry-run do PC4">
                <div class="cell-top"><span class="cell-num">30</span></div>
                <span class="event-chip active-phase">Aceite &amp; Cutover</span>
              </td>
              <td class="empty-day"></td>
              <td class="empty-day"></td>
              <td class="empty-day"></td>
              <td class="empty-day"></td>
              <td class="empty-day"></td>
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
              <div class="event-name">Conclusão do Incremento 1 (Semana 10)</div>
              <div class="event-desc">Fechamento das pendências de cadastro, autenticação, RBAC e RVT integrados ao banco Supabase, validação das telas no frontend navegável, verificação em Staging e revisão dos requisitos do incremento.</div>
            </div>
          </div>
          <span class="status-pill andamento">Em Desenvolvimento</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge"><span class="ev-d">12</span><span class="ev-m">NOV</span></span>
            <div class="event-info">
              <div class="event-name">Incremento 2: Motor Financeiro e Reembolsos — Plan e Design (Semana 11)</div>
              <div class="event-desc">Atualização dos requisitos no início do incremento, design das telas do Motor Financeiro (CAR-03) e de Prestação de Contas (CAR-04) diretamente no Frontend, validação sociotécnica com a cliente e DoR.</div>
            </div>
          </div>
          <span class="status-pill planejado">Planejado</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge"><span class="ev-d">13</span><span class="ev-m">NOV</span></span>
            <div class="event-info">
              <div class="event-name">Validação Sociotécnica do Incremento 2 com Maria Beatryz</div>
              <div class="event-desc">Navegação guiada no Frontend com foco nas telas financeiras; revisão e validação dos requisitos afetados após a sessão. Sujeita a confirmação de agenda e registro em ata.</div>
            </div>
          </div>
          <span class="status-pill marcada">Sessão prevista (a confirmar)</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge milestone"><span class="ev-d">17</span><span class="ev-m">NOV</span></span>
            <div class="event-info">
              <div class="event-name">Ponto de Controle 3: Publicação e Primeiro Dia de Apresentações</div>
              <div class="event-desc">Prazo para publicar os artefatos no GitHub Pages até as 08h de 17/11; segundo dia de apresentações em 19/11. Entrega conforme funcionalidades efetivamente verificadas, testes e rastreabilidade. <a href="../../entregas/entrega-3/">Acessar Entrega 3</a>.</div>
            </div>
          </div>
          <span class="status-pill planejado">Marco de Entrega</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge"><span class="ev-d">20</span><span class="ev-m">NOV</span></span>
            <div class="event-info">
              <div class="event-name">Incrementos 2 e 3: Construção do Motor Financeiro, Custos e Indicadores (Semana 12)</div>
              <div class="event-desc">Construção da lógica do Motor Financeiro (CAR-03), Reembolsos (CAR-04), Apropriação de Custos por Contrato (CAR-05) e indicadores (RF11), com folga técnica em 24/11, inspeção Fagan, Code Freeze e deploy em Staging (25 a 26/11).</div>
            </div>
          </div>
          <span class="status-pill planejado">Planejado</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge"><span class="ev-d">27</span><span class="ev-m">NOV</span></span>
            <div class="event-info">
              <div class="event-name">Sessão de UAT prevista com Maria Beatryz (numeração de ata a confirmar)</div>
              <div class="event-desc">Testes de aceitação de ponta a ponta no Google Meet com dados sintéticos anonimizados. Depende de confirmação de agenda e de registro em ata.</div>
            </div>
          </div>
          <span class="status-pill marcada">Sessão prevista (a confirmar)</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge"><span class="ev-d">28-30</span><span class="ev-m">NOV</span></span>
            <div class="event-info">
              <div class="event-name">Janela de Correção pós-UAT, Aceite Formal e Transição Operacional (Incremento 4)</div>
              <div class="event-desc">Três dias para saneamento de defeitos e regressão (28 a 30/11); Termo de Aceite Formal condicionado ao UAT e à assinatura da cliente (30/11); Cutover na Vercel, Manual do Usuário e dry-run do PC4.</div>
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
          <span class="panel-month-phase">Transição Operacional (Cutover), Apresentação Final (PC4) e Retrospectiva</span>
        </div>
        <div class="panel-month-badges">
          <span class="status-pill planejado">Planejado</span>
          <span class="milestone-badge">PC4: publicação 01/12; apresentações 01 e 03/12</span>
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
              <td class="day-milestone" title="PC4 — publicação até 08h e primeiro dia de apresentações; segundo dia em 03/12">
                <div class="cell-top"><span class="cell-num">1</span></div>
                <span class="event-chip milestone">Apresentação Final</span>
              </td>
              <td title="Preparação interna e ajustes de apresentação, se cabíveis, sem alterar a entrega oficial após o prazo">
                <div class="cell-top"><span class="cell-num">2</span></div>
              </td>
              <td class="day-u4" title="PC4 — segundo dia de apresentações da Unidade 4">
                <div class="cell-top"><span class="cell-num">3</span></div>
                <span class="event-chip">Apresentações PC4</span>
              </td>
              <td><div class="cell-top"><span class="cell-num">4</span></div></td>
              <td><div class="cell-top"><span class="cell-num">5</span></div></td>
            </tr>
            <tr>
              <td><div class="cell-top"><span class="cell-num">6</span></div></td>
              <td><div class="cell-top"><span class="cell-num">7</span></div></td>
              <td><div class="cell-top"><span class="cell-num">8</span></div></td>
              <td><div class="cell-top"><span class="cell-num">9</span></div></td>
              <td title="Último dia de atividades previsto no Plano de Ensino e revisão de menções"><div class="cell-top"><span class="cell-num">10</span></div><span class="event-chip">Revisão de notas</span></td>
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
        <h4 class="month-events-title">Registro de Reuniões, Entregas e Pautas de Dezembro</h4>

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
            <span class="event-date-badge"><span class="ev-d">03</span><span class="ev-m">DEZ</span></span>
            <div class="event-info">
              <div class="event-name">Segundo Dia de Apresentações do PC4</div>
              <div class="event-desc">Continuidade oficial das apresentações da Unidade 4, conforme o Plano de Ensino. A retrospectiva final interna deverá ser agendada após as apresentações, sem data comprovada neste cronograma.</div>
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

## Detalhamento Temporal Semana a Semana (Semanas 01 a 13)

Navegue pelas abas abaixo para inspecionar o planejamento operacional de cada ciclo e incremento do RAD, detalhado semana a semana com atividades metodológicas, entregáveis, responsáveis e status:

=== "Ciclo 0 — Concepção, Requisitos & Fundação (Semanas 01 a 07)"

    > **Período:** 11/08 a 15/10/2026 • **Marcos:** PC1 (08/09) e PC2 (13/10), ambos entregues • **Status:** Concluído<br>
    > **Foco:** Imersão no negócio, diagnóstico de processos, delimitação do MVP, especificação de requisitos (URPS+), governança, base visual no Figma e implantação da plataforma Docs as Code.

    <div class="week-card status-concluido">
      <div class="week-card-header">
        <div class="week-card-header-left">
          <span class="week-card-title">Semana 01</span>
          <span class="week-card-period">11/08 a 18/08/2026</span>
        </div>
        <span class="status-pill concluido">Concluído / Entregue</span>
      </div>
      <div class="week-card-meta">
        <div class="week-meta-item">
          <span class="week-meta-label">Ciclo RAD</span>
          <span class="week-meta-value">Ciclo 0: Concepção &amp; Fundação</span>
        </div>
        <div class="week-meta-item">
          <span class="week-meta-label">Responsáveis Principais</span>
          <span class="week-meta-value">Eric Araújo, Matheus Ribeiro</span>
        </div>
      </div>
      <div class="week-card-grid">
        <div>
          <div class="week-section-title">Atividades Executadas e Metodologia</div>
          <ul>
            <li>Formação oficial da equipe Cascata Ágil;</li>
            <li>Identificação da organização parceira (DUOC Arquitetura e Engenharia);</li>
            <li>Primeiro contato e agendamento de conversa exploratória com Maria Beatryz.</li>
          </ul>
        </div>
        <div>
          <div class="week-section-title">Entregáveis e Artefatos Gerados</div>
          <ul>
            <li>Termo de abertura preliminar do projeto;</li>
            <li>Canais oficiais no WhatsApp e servidor Discord configurados.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="week-card status-concluido">
      <div class="week-card-header">
        <div class="week-card-header-left">
          <span class="week-card-title">Semana 02</span>
          <span class="week-card-period">19/08 a 28/08/2026</span>
        </div>
        <span class="status-pill concluido">Concluído / Entregue</span>
      </div>
      <div class="week-card-meta">
        <div class="week-meta-item">
          <span class="week-meta-label">Ciclo RAD</span>
          <span class="week-meta-value">Ciclo 0: Concepção &amp; Fundação</span>
        </div>
        <div class="week-meta-item">
          <span class="week-meta-label">Responsáveis Principais</span>
          <span class="week-meta-value">Equipe Cascata Ágil, Maria Beatryz</span>
        </div>
      </div>
      <div class="week-card-grid">
        <div>
          <div class="week-section-title">Atividades Executadas e Metodologia</div>
          <ul>
            <li>Contato exploratório preliminar com Maria Beatryz (19/08): alinhamento de agenda e contextualização prévia das rotinas da empresa;</li>
            <li>Diagnóstico das dores operacionais com planilhas de Excel e viagens de obras (RVT);</li>
            <li>Delimitação preliminar de escopo: exclusão de controle de estoque e foco em RH e Finanças (MVP);</li>
            <li>Decisão sobre uso de dados sintéticos para estrita conformidade com a LGPD;</li>
            <li>Setup do repositório de documentação <em>Docs as Code</em>.</li>
          </ul>
        </div>
        <div>
          <div class="week-section-title">Entregáveis e Artefatos Gerados</div>
          <ul>
            <li>Registro de contato preliminar documentado;</li>
            <li>Rascunho inicial do Rich Picture sistêmico;</li>
            <li>Rascunho das causas-raiz no Diagrama de Ishikawa 4M;</li>
            <li>Repositório Git inicial configurado com automação.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="week-card status-concluido">
      <div class="week-card-header">
        <div class="week-card-header-left">
          <span class="week-card-title">Semana 03</span>
          <span class="week-card-period">29/08 a 08/09/2026</span>
        </div>
        <span class="status-pill concluido">Concluído / Entregue</span>
      </div>
      <div class="week-card-meta">
        <div class="week-meta-item">
          <span class="week-meta-label">Ciclo RAD</span>
          <span class="week-meta-value">Ciclo 0: Concepção &amp; Fundação</span>
        </div>
        <div class="week-meta-item">
          <span class="week-meta-label">Responsáveis Principais</span>
          <span class="week-meta-value">Todos os integrantes da equipe Cascata Ágil</span>
        </div>
      </div>
      <div class="week-card-grid">
        <div>
          <div class="week-section-title">Atividades Executadas e Metodologia</div>
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
        <div>
          <div class="week-section-title">Entregáveis e Artefatos Gerados</div>
          <ul>
            <li>Portal MkDocs publicado no GitHub Pages com 13 capítulos estruturados;</li>
            <li>Páginas oficiais das Atas de Reuniões 01 e 02;</li>
            <li>Painel de Entregas (Entrega 1 completa e templates das Entregas 2 a 4);</li>
            <li>Vídeo oficial da Entrega 1 gravado e indexado (<a href="../../entregas/entrega-1/">Ver Entrega 1</a>).</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="week-card status-concluido">
      <div class="week-card-header">
        <div class="week-card-header-left">
          <span class="week-card-title">Semana 04</span>
          <span class="week-card-period">15/09 a 22/09/2026</span>
        </div>
        <span class="status-pill concluido">Concluído / Entregue</span>
      </div>
      <div class="week-card-meta">
        <div class="week-meta-item">
          <span class="week-meta-label">Ciclo RAD</span>
          <span class="week-meta-value">Ciclo 0: Requisitos &amp; Prototipagem</span>
        </div>
        <div class="week-meta-item">
          <span class="week-meta-label">Responsáveis Principais</span>
          <span class="week-meta-value">Eric Araújo, Giovana Ferreira</span>
        </div>
      </div>
      <div class="week-card-grid">
        <div>
          <div class="week-section-title">Atividades Executadas e Técnicas de ER</div>
          <ul>
            <li>Reunião 04 interna (17/09/2026): retrospectiva da Unidade 1, feedback docente, correção do cronograma RAD e planejamento de RFs/RNFs;</li>
            <li>Elicitação complementar e análise documental; entrevistas com a cliente e validação de wireframes;</li>
            <li>Análise documental minuciosa das planilhas sintéticas de despesas e adiantamentos de campo.</li>
          </ul>
        </div>
        <div>
          <div class="week-section-title">Entregáveis e Artefatos Gerados</div>
          <ul>
            <li>Ata da Reunião 04 (retrospectiva e planejamento) registrada;</li>
            <li>Wireframes conceituais;</li>
            <li>Matriz de Personas e Cenários contextuais de IHC.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="week-card status-concluido">
      <div class="week-card-header">
        <div class="week-card-header-left">
          <span class="week-card-title">Semana 05</span>
          <span class="week-card-period">23/09 a 29/09/2026</span>
        </div>
        <span class="status-pill concluido">Concluído / Entregue</span>
      </div>
      <div class="week-card-meta">
        <div class="week-meta-item">
          <span class="week-meta-label">Ciclo RAD</span>
          <span class="week-meta-value">Ciclo 0: Requisitos &amp; Prototipagem</span>
        </div>
        <div class="week-meta-item">
          <span class="week-meta-label">Responsáveis Principais</span>
          <span class="week-meta-value">Matheus Ribeiro, Paulo Nery, Matheus Camargo, Eric Araújo</span>
        </div>
      </div>
      <div class="week-card-grid">
        <div>
          <div class="week-section-title">Atividades Executadas e Técnicas de ER</div>
          <ul>
            <li>Levantamento e especificação rigorosa de Requisitos Funcionais (RF) e Não-Funcionais (RNF) sob o framework <strong>URPS+</strong>;</li>
            <li>Reunião 05 (24/09/2026): verificação e priorização de requisitos via matriz Valor × Esforço, alinhamento do escopo do MVP (<a href="../../governanca/atas/reuniao-05/">Ver Ata 05</a>);</li>
            <li>Formulação formal dos acordos de trabalho: DoR (<em>Definition of Ready</em>) como portão de entrada para implementação de lógica e persistência e DoD (<em>Definition of Done</em>) como portão de saída;</li>
            <li>Definição dos requisitos arquiteturais de segurança e privacidade (LGPD, papéis RBAC preliminares);</li>
            <li>Início da prototipagem: concepção da base visual no Figma (Design System, paleta de cores e tokens) e estruturação dos componentes base de interface no Frontend (React SPA / Tailwind CSS).</li>
          </ul>
        </div>
        <div>
          <div class="week-section-title">Entregáveis e Artefatos Gerados</div>
          <ul>
            <li>Especificação de Requisitos no padrão URPS+ formalizada;</li>
            <li>Ata da Reunião 05 (Ata 05) com deliberações de escopo e matriz de priorização;</li>
            <li>Guia formal de DoR e DoD aprovado e indexado (Ver Capítulo 9);</li>
            <li>Catálogo de Requisitos de Segurança e Conformidade LGPD;</li>
            <li>Design System base no Figma e componentes UI no Frontend.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="week-card status-concluido">
      <div class="week-card-header">
        <div class="week-card-header-left">
          <span class="week-card-title">Semana 06</span>
          <span class="week-card-period">30/09 a 07/10/2026</span>
        </div>
        <span class="status-pill concluido">Concluído / Entregue</span>
      </div>
      <div class="week-card-meta">
        <div class="week-meta-item">
          <span class="week-meta-label">Ciclo RAD</span>
          <span class="week-meta-value">Ciclo 0: Requisitos, Validação &amp; Refinamento</span>
        </div>
        <div class="week-meta-item">
          <span class="week-meta-label">Responsáveis Principais</span>
          <span class="week-meta-value">Gustavo, Eric Araújo e equipe; Maria Beatryz em validações confirmadas</span>
        </div>
      </div>
      <div class="week-card-grid">
        <div>
          <div class="week-section-title">Atividades Executadas e Técnicas de ER</div>
          <ul>
            <li>Decomposição dos requisitos em Histórias de Usuário no padrão <strong>INVEST</strong>;</li>
            <li>Redação de critérios de aceitação objetivos em listas estruturadas de regras de negócio;</li>
            <li>Priorização do Backlog usando matriz Valor vs. Esforço;</li>
            <li>Reunião 06 com a cliente (02/10/2026): validação presencial do protótipo de alta fidelidade no Figma, aprovado sem alterações (<a href="../../governanca/atas/reuniao-06/">Ver Ata 06</a>);</li>
            <li>Verificação do DoR do Incremento 1 antes da liberação de demandas de lógica e persistência, mediante critérios e aceite registrados.</li>
          </ul>
        </div>
        <div>
          <div class="week-section-title">Entregáveis e Artefatos Gerados</div>
          <ul>
            <li>Ata da Reunião 04 de 17/09 (retrospectiva interna);</li>
            <li>Escopo de requisitos priorizado e cadastrado no GitHub Projects;</li>
            <li>Histórias de Usuário INVEST com critérios de aceitação formalizados;</li>
            <li>Ata 06 da validação do protótipo no Figma;</li>
            <li>Registro de verificação do DoR do Incremento 1, condicionando avanço ao aceite.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="week-card status-concluido">
      <div class="week-card-header">
        <div class="week-card-header-left">
          <span class="week-card-title">Semana 07</span>
          <span class="week-card-period">08/10 a 15/10/2026 (PC2 publicado até 13/10, 08h)</span>
        </div>
        <span class="status-pill concluido">Concluído / Entregue</span>
      </div>
      <div class="week-card-meta">
        <div class="week-meta-item">
          <span class="week-meta-label">Ciclo RAD</span>
          <span class="week-meta-value">Ciclo 0: Consolidação &amp; Entrega 2</span>
        </div>
        <div class="week-meta-item">
          <span class="week-meta-label">Responsáveis Principais</span>
          <span class="week-meta-value">Matheus Ribeiro, Paulo Nery, Equipe Cascata Ágil</span>
        </div>
      </div>
      <div class="week-card-grid">
        <div>
          <div class="week-section-title">Atividades Executadas e Técnicas de ER</div>
          <ul>
            <li>Consolidação da documentação do ciclo no MkDocs e revisão final do catálogo de requisitos (40 RFs e 31 RNFs);</li>
            <li>Gravação do vídeo do PC2 (12/10);</li>
            <li><strong>PC2: publicação no GitHub Pages até 13/10/2026 às 08h</strong>, com apresentações em 13 e 15/10.</li>
          </ul>
        </div>
        <div>
          <div class="week-section-title">Entregáveis e Artefatos Gerados</div>
          <ul>
            <li>Documento oficial da Entrega 2 publicado (<a href="../../entregas/entrega-2/">Ver Entrega 2</a>);</li>
            <li>Vídeo do Ponto de Controle 2;</li>
            <li>Catálogo URPS+ atualizado (40 RFs e 31 RNFs), backlog INVEST e critérios DoR/DoD indexados.</li>
          </ul>
        </div>
      </div>
    </div>

=== "Incremento 1 — Cadastro, Autenticação & RVT (Semanas 08 a 10)"

    > **Período:** 20/10 a 11/11/2026 • **Status:** Em Desenvolvimento, com atraso registrado na Semana 08<br>
    > **Foco:** Construção da lógica e persistência por trás das telas já validadas: cadastro unificado (CAR-01), RVT (CAR-02), RBAC (CAR-07), modelagem de dados (DER / Supabase), conexão via ORM e verificação em Staging.

    <div class="week-card status-andamento">
      <div class="week-card-header">
        <div class="week-card-header-left">
          <span class="week-card-title">Semana 08</span>
          <span class="week-card-period">20/10 a 27/10/2026</span>
        </div>
        <span class="status-pill andamento">Em Desenvolvimento / Em Atraso</span>
      </div>
      <div class="week-card-meta">
        <div class="week-meta-item">
          <span class="week-meta-label">Ciclo RAD</span>
          <span class="week-meta-value">Incremento 1: Cadastro, Autenticação &amp; RVT</span>
        </div>
        <div class="week-meta-item">
          <span class="week-meta-label">Responsáveis Principais</span>
          <span class="week-meta-value">Eric Araújo, Equipe Cascata Ágil</span>
        </div>
      </div>
      <div class="week-card-grid">
        <div>
          <div class="week-section-title">Atividades Planejadas e Técnicas de ER</div>
          <ul>
            <li><strong>Plan do Incremento 1:</strong> atualização dos requisitos do incremento (<a href="../../visao-produto/solucao-proposta/#car-01">CAR-01</a>, <a href="../../visao-produto/solucao-proposta/#car-02">CAR-02</a> e <a href="../../visao-produto/solucao-proposta/#car-07">CAR-07</a>) sobre o catálogo vigente de 40 RFs e 31 RNFs;</li>
            <li>Retrospectiva do ciclo anterior e incorporação do feedback docente;</li>
            <li>Desenvolvimento Frontend das páginas de cadastro / login e do Módulo móvel de registro de viagens (RVT);</li>
            <li>Modelagem Conceitual de Dados (DER / Supabase) cobrindo colaboradores CLT, diaristas, contratos de obras e despesas de campo;</li>
            <li>Setup do repositório da aplicação (React SPA/NestJS + Supabase) e pipeline CI/CD na Vercel com carga de dados sintéticos;</li>
            <li>Início da implementação da lógica de backend por trás das telas validadas: regras de cadastro unificado (<a href="../../visao-produto/solucao-proposta/#car-01">CAR-01</a>) e autenticação RBAC base (<a href="../../visao-produto/solucao-proposta/#car-07">CAR-07</a>).</li>
          </ul>
        </div>
        <div>
          <div class="week-section-title">Entregáveis Esperados</div>
          <ul>
            <li>Diagrama Entidade-Relacionamento (DER) revisado, com homologação sujeita a registro;</li>
            <li>Repositório de código configurado com pipeline na Vercel;</li>
            <li>Telas de cadastro e autenticação de usuário;</li>
            <li>Controle de acesso baseado em papéis (RBAC) em versão base;</li>
            <li>Módulo móvel de registro de viagens (RVT) em versão inicial;</li>
            <li>Dados sintéticos carregados para o ambiente de desenvolvimento;</li>
            <li>Backlog atualizado no GitHub Projects, com as pendências da semana registradas para replanejamento.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="week-card status-andamento">
      <div class="week-card-header">
        <div class="week-card-header-left">
          <span class="week-card-title">Semana 09</span>
          <span class="week-card-period">28/10 a 04/11/2026</span>
        </div>
        <span class="status-pill andamento">Em Desenvolvimento</span>
      </div>
      <div class="week-card-meta">
        <div class="week-meta-item">
          <span class="week-meta-label">Ciclo RAD</span>
          <span class="week-meta-value">Incremento 1: Cadastro, Autenticação &amp; RVT</span>
        </div>
        <div class="week-meta-item">
          <span class="week-meta-label">Responsáveis Principais</span>
          <span class="week-meta-value">Paulo Nery, Matheus Ribeiro, Matheus Camargo</span>
        </div>
      </div>
      <div class="week-card-grid">
        <div>
          <div class="week-section-title">Atividades Planejadas e Técnicas de ER</div>
          <ul>
            <li>Criação do banco de dados no Supabase (PostgreSQL), com DDL e <em>migrations</em> versionadas a partir do DER revisado;</li>
            <li>Conexão da aplicação com a infraestrutura de dados por meio de ORM, substituindo os dados <em>mockados</em> por persistência real nos cadastros unificados (<a href="../../visao-produto/solucao-proposta/#car-01">CAR-01</a>);</li>
            <li>Finalização e refino das telas de login e do módulo RVT, incorporando os apontamentos de IHC;</li>
            <li>Refino dos papéis e acessos (RBAC), com segregação de privilégios entre Sócio Administrador e Colaborador de Campo (<a href="../../visao-produto/solucao-proposta/#car-07">CAR-07</a>);</li>
            <li>Testes unitários iniciais das regras de cadastro e autenticação.</li>
          </ul>
        </div>
        <div>
          <div class="week-section-title">Entregáveis Esperados</div>
          <ul>
            <li>Banco de dados Supabase provisionado, com <em>migrations</em> versionadas;</li>
            <li>Camada ORM conectada à aplicação e às entidades do DER;</li>
            <li>Telas de login e RVT refinadas e integradas à persistência;</li>
            <li>Matriz de papéis × permissões (RBAC) refinada e documentada;</li>
            <li>Testes unitários das regras de cadastro e autenticação.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="week-card status-andamento">
      <div class="week-card-header">
        <div class="week-card-header-left">
          <span class="week-card-title">Semana 10</span>
          <span class="week-card-period">05/11 a 11/11/2026</span>
        </div>
        <span class="status-pill andamento">Em Desenvolvimento</span>
      </div>
      <div class="week-card-meta">
        <div class="week-meta-item">
          <span class="week-meta-label">Ciclo RAD</span>
          <span class="week-meta-value">Incremento 1: Cadastro, Autenticação &amp; RVT</span>
        </div>
        <div class="week-meta-item">
          <span class="week-meta-label">Responsáveis Principais</span>
          <span class="week-meta-value">Paulo Nery, Matheus Ribeiro, Gustavo</span>
        </div>
      </div>
      <div class="week-card-grid">
        <div>
          <div class="week-section-title">Atividades Planejadas e Técnicas de ER</div>
          <ul>
            <li>Conclusão das pendências do Incremento 1: integração ponta a ponta entre Frontend, API e banco para cadastro, autenticação e RVT;</li>
            <li>Conclusão do RBAC (<a href="../../visao-produto/solucao-proposta/#car-07">CAR-07</a>) com testes de acesso por perfil;</li>
            <li>Validação das telas do incremento no frontend navegável e registro de aceite, condicionando o atendimento ao DoR/DoD;</li>
            <li>Inspeção estática (checklists Fagan) e deploy do incremento em <em>Staging</em> na Vercel;</li>
            <li><strong>Revisão e validação dos requisitos</strong> do incremento após o ciclo de validação, com atualização do catálogo e da rastreabilidade;</li>
            <li>Replanejamento do Incremento 2 com base no estado real do Incremento 1.</li>
          </ul>
        </div>
        <div>
          <div class="week-section-title">Entregáveis Esperados</div>
          <ul>
            <li>Cadastro unificado (<a href="../../visao-produto/solucao-proposta/#car-01">CAR-01</a>) e autenticação com persistência funcionando em <em>Staging</em>;</li>
            <li>Módulo RVT (<a href="../../visao-produto/solucao-proposta/#car-02">CAR-02</a>) integrado ao banco de dados;</li>
            <li>RBAC (<a href="../../visao-produto/solucao-proposta/#car-07">CAR-07</a>) completo e testado;</li>
            <li>Relatório de verificação (Fagan) e testes automatizados do incremento;</li>
            <li>Catálogo de requisitos revisado e matriz de rastreabilidade atualizada;</li>
            <li>Registro de DoD do Incremento 1 e backlog replanejado no GitHub Projects.</li>
          </ul>
        </div>
      </div>
    </div>

=== "Incrementos 2 e 3 — Motor Financeiro, Custos & Dashboards (Semanas 11 e 12)"

    > **Período:** 12/11 a 27/11/2026 • **Marco:** PC3 (publicação 17/11; apresentações 17 e 19/11) • **Status:** Planejado<br>
    > **Foco:** Design das telas financeiras e validação com a cliente, construção antecipada da lógica do motor financeiro (CAR-03) e reembolsos (CAR-04), apropriação de custos por contrato (CAR-05), indicadores (CAR-06), inspeções Fagan, rastreabilidade bidirecional e UAT.

    !!! warning "Replanejamento e risco"
        O replanejamento de 10/11/2026 condensa o que originalmente ocupava as Semanas 08 a 11 em duas semanas (11 e 12). A folga técnica do motor financeiro foi reduzida a um dia útil (24/11). Entregas que dependam de integrações externas (CAR-09 e CAR-10) permanecem no backlog pós-MVP.

    <div class="week-card status-planejado">
      <div class="week-card-header">
        <div class="week-card-header-left">
          <span class="week-card-title">Semana 11</span>
          <span class="week-card-period">12/11 a 19/11/2026 (PC3: publicação até 17/11, 08h)</span>
        </div>
        <span class="status-pill planejado">Planejado</span>
      </div>
      <div class="week-card-meta">
        <div class="week-meta-item">
          <span class="week-meta-label">Ciclo RAD</span>
          <span class="week-meta-value">Incremento 2: Plan, Design &amp; Prototipagem</span>
        </div>
        <div class="week-meta-item">
          <span class="week-meta-label">Responsáveis Principais</span>
          <span class="week-meta-value">Giovana Ferreira, Maria Beatryz</span>
        </div>
      </div>
      <div class="week-card-grid">
        <div>
          <div class="week-section-title">Atividades Planejadas e Técnicas de ER</div>
          <ul>
            <li><strong>Plan do Incremento 2:</strong> atualização dos requisitos do incremento (<a href="../../visao-produto/solucao-proposta/#car-03">CAR-03</a>, <a href="../../visao-produto/solucao-proposta/#car-04">CAR-04</a> e <a href="../../visao-produto/solucao-proposta/#car-08">CAR-08</a>) sobre o catálogo vigente;</li>
            <li>Estabelecimento dos designs das telas do <strong>Motor Financeiro (<a href="../../visao-produto/solucao-proposta/#car-03">CAR-03</a>)</strong> e da <strong>Prestação de Contas / Reembolsos (<a href="../../visao-produto/solucao-proposta/#car-04">CAR-04</a>)</strong> diretamente no Frontend, com o Figma como referência;</li>
            <li>Desenho funcional dos fluxos de aprovação de diárias de campo, cálculo visual de adiantamentos e upload de comprovantes com dados simulados;</li>
            <li><strong>Sessão de Validação Sociotécnica Invertida (13/11/2026, a confirmar)</strong>: Maria Beatryz navega pelas telas financeiras no Frontend via Google Meet, validando campos, layouts e regras visuais;</li>
            <li>Revisão e validação dos requisitos afetados após a sessão, registro dos apontamentos de IHC e verificação do DoR do Incremento 2;</li>
            <li><strong>PC3:</strong> publicação da Entrega 3 até 17/11/2026 às 08h, com gravação em 18/11 e apresentações em 17 e 19/11.</li>
          </ul>
        </div>
        <div>
          <div class="week-section-title">Entregáveis Esperados</div>
          <ul>
            <li>Ata da sessão de validação com deliberações de regras financeiras registradas;</li>
            <li>Telas financeiras funcionais no frontend, com homologação e DoR sujeitos aos registros de aceite;</li>
            <li>Especificações de cálculo de diárias e adiantamentos formalizadas;</li>
            <li>Catálogo de requisitos atualizado após a validação;</li>
            <li>Documento e vídeo oficial da <a href="../../entregas/entrega-3/">Entrega 3</a> indexados.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="week-card status-planejado">
      <div class="week-card-header">
        <div class="week-card-header-left">
          <span class="week-card-title">Semana 12</span>
          <span class="week-card-period">20/11 a 27/11/2026</span>
        </div>
        <span class="status-pill planejado">Planejado</span>
      </div>
      <div class="week-card-meta">
        <div class="week-meta-item">
          <span class="week-meta-label">Ciclo RAD</span>
          <span class="week-meta-value">Incrementos 2 e 3: Construção, Custos &amp; Verificação</span>
        </div>
        <div class="week-meta-item">
          <span class="week-meta-label">Responsáveis Principais</span>
          <span class="week-meta-value">Paulo Nery, Matheus Ribeiro, Matheus Camargo, Gustavo</span>
        </div>
      </div>
      <div class="week-card-grid">
        <div>
          <div class="week-section-title">Atividades Planejadas e Técnicas de ER</div>
          <ul>
            <li><strong>Construção da Lógica do Motor Financeiro (<a href="../../visao-produto/solucao-proposta/#car-03">CAR-03</a>) e do módulo de Reembolsos (<a href="../../visao-produto/solucao-proposta/#car-04">CAR-04</a>)</strong>: algoritmos de fechamento quinzenal de diaristas, apropriação de adiantamentos e conferência de cupons fiscais simulados;</li>
            <li><strong>Folga técnica (24/11):</strong> validação aritmética fina e tratamento de exceções em relação às planilhas da DUOC;</li>
            <li>Trilha de Auditoria (<a href="../../visao-produto/solucao-proposta/#car-08">CAR-08</a>), Apropriação de Custos por Contrato (<a href="../../visao-produto/solucao-proposta/#car-05">CAR-05</a>) e indicadores e filtros de custos do MVP (RF11 / <a href="../../visao-produto/solucao-proposta/#car-06">CAR-06</a>); conectores <a href="../../visao-produto/solucao-proposta/#car-09">CAR-09</a> e <a href="../../visao-produto/solucao-proposta/#car-10">CAR-10</a> condicionados ao backlog pós-MVP;</li>
            <li><strong>Code Freeze, inspeção estática (Fagan) e deploy integrado em <em>Staging</em> (25 e 26/11)</strong>, com carga de dados sintéticos e suíte de regressão;</li>
            <li><strong>Sessão de UAT com Maria Beatryz (27/11/2026, a confirmar)</strong>, executando roteiro de ponta a ponta;</li>
            <li>Revisão e validação dos requisitos após a construção e atualização da Matriz de Rastreabilidade Bidirecional.</li>
          </ul>
        </div>
        <div>
          <div class="week-section-title">Entregáveis Esperados</div>
          <ul>
            <li>Motor Financeiro (<a href="../../visao-produto/solucao-proposta/#car-03">CAR-03</a>) e Reembolsos (<a href="../../visao-produto/solucao-proposta/#car-04">CAR-04</a>) codificados e verificados aritmeticamente;</li>
            <li>Módulo de rateio por contrato (<a href="../../visao-produto/solucao-proposta/#car-05">CAR-05</a>) e indicadores de custos do MVP em <em>Staging</em>;</li>
            <li>Trilha de Auditoria (<a href="../../visao-produto/solucao-proposta/#car-08">CAR-08</a>) e testes unitários e de regressão aprovados;</li>
            <li>Relatório de Inspeção Fagan;</li>
            <li>Roteiro de UAT executado e relatório preliminar com apontamentos;</li>
            <li>Matriz de Rastreabilidade Bidirecional atualizada e catálogo de requisitos revisado.</li>
          </ul>
        </div>
      </div>
    </div>

=== "Incremento 4 — Cutover, UAT & Aceite Formal (Semana 13)"

    > **Período:** 28/11 a 02/12/2026 • **Marco:** PC4 (publicação 01/12 antes das 08h; apresentações 01 e 03/12) • **Status:** Planejado<br>
    > **Foco:** Janela de correção pós-UAT, homologação final, assinatura do Termo de Aceite Formal, transição operacional (Cutover), manual do usuário, revisão final dos requisitos e apresentação final.

    !!! note "Escopo Blindado da Fase de Cutover"
        O Incremento 4 não realiza construção de novos módulos funcionais. O motor financeiro e os custos por contrato devem estar construídos e verificados até 26/11 (Semanas 11 e 12). O Cutover destina-se exclusivamente a qualidade, aceite com a cliente, saneamento de defeitos e transição operacional segura.

    <div class="week-card status-planejado">
      <div class="week-card-header">
        <div class="week-card-header-left">
          <span class="week-card-title">Semana 13</span>
          <span class="week-card-period">28/11 a 02/12/2026 (PC4: publicação até 01/12, 08h)</span>
        </div>
        <span class="status-pill planejado">Planejado</span>
      </div>
      <div class="week-card-meta">
        <div class="week-meta-item">
          <span class="week-meta-label">Ciclo RAD</span>
          <span class="week-meta-value">Incremento 4: Cutover, Aceite &amp; Transição</span>
        </div>
        <div class="week-meta-item">
          <span class="week-meta-label">Responsáveis Principais</span>
          <span class="week-meta-value">Equipe Cascata Ágil, Maria Beatryz</span>
        </div>
      </div>
      <div class="week-card-grid">
        <div>
          <div class="week-section-title">Atividades Planejadas e Técnicas de ER</div>
          <ul>
            <li><strong>Janela Dedicada de Correção pós-UAT (28 a 30/11/2026, buffer de 3 dias):</strong> resolução de discrepâncias de cálculo, atritos de usabilidade e defeitos reportados no UAT, com regressão automatizada;</li>
            <li><strong>Validação Conclusiva e Termo de Aceite Formal (30/11/2026):</strong> homologação das correções com Maria Beatryz e assinatura do Termo de Aceite, condicionada ao UAT e à assinatura efetiva da cliente;</li>
            <li><strong>Transição Operacional / Cutover (30/11/2026):</strong> deploy da versão final na Vercel e publicação do <strong>Manual Operacional do Usuário</strong> no portal MkDocs; capacitação remota da cliente;</li>
            <li><strong>Revisão final dos requisitos:</strong> reconciliação do catálogo URPS+ com o que foi efetivamente construído, aceito e adiado para o backlog evolutivo;</li>
            <li>Ensaio geral (<em>dry-run</em>) da apresentação final (30/11);</li>
            <li><strong>PC4 — publicação até 01/12/2026 às 08h:</strong> apresentações em 01 e 03/12, com MVP demonstrável, matriz de rastreabilidade e vídeo da Entrega 4;</li>
            <li><strong>Retrospectiva Final e Lições Aprendidas:</strong> reunião interna a programar após as apresentações.</li>
          </ul>
        </div>
        <div>
          <div class="week-section-title">Entregáveis Esperados</div>
          <ul>
            <li><strong>Termo de Aceite Formal assinado por Maria Beatryz</strong> (previsto);</li>
            <li>Sistema DUOC Finance em produção estável na Vercel;</li>
            <li>Manual Operacional do Usuário publicado no portal;</li>
            <li>Catálogo de requisitos com revisão final e Matriz de Rastreabilidade Bidirecional completa (<em>Forward/Backward</em>);</li>
            <li>Documento oficial e vídeo da <a href="../../entregas/entrega-4/">Entrega 4</a> indexados;</li>
            <li>Relatório de Retrospectiva Final e Lições Aprendidas, sujeito à reunião interna de encerramento.</li>
          </ul>
        </div>
      </div>
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
| `3.0` | 10/11/2026 | Refatoração integral do capítulo em duas seções (Planejamento e Cronograma): movimentação do racional metodológico, folgas, governança e fontes para o Planejamento; atualização do catálogo para 40 RFs e 31 RNFs e inclusão do método de atualização de requisitos no RAD com diagrama; remoção dos vínculos com as Unidades do plano de ensino e das tabelas de marcos avaliativos; marcação dos marcos já ocorridos (base 09/11/2026) como concluídos; replanejamento das Semanas 01 a 13 conforme a realidade executada (Incremento 1 estendido até a Semana 10; Incrementos 2 e 3 condensados; Cutover na Semana 13). | Eric Araújo | — |
