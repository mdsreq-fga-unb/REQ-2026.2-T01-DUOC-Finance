# Capítulo 6 — Cronograma e Planejamento de Entregas

## Gestão Ágil e Rastreabilidade no GitHub Projects

O planejamento e o acompanhamento operacional do projeto **DUOC Finance** são geridos de forma contínua e transparente através do ecossistema do **GitHub Projects**. O quadro institucional da disciplina centraliza o *Backlog de Requisitos*, a distribuição de *Issues*, a alocação de responsáveis e o avanço das tarefas por iterações do processo RAD.

<div class="grid cards" markdown>

-   **Quadro Oficial do Projeto no GitHub Projects**

    ---

    Acompanhamento de tarefas e governança do fluxo de trabalho da equipe **Cascata Ágil**:

    *   **Fluxo de Trabalho Oficial (Pipeline):**  
        `Backlog do Produto` ➔ `Refinamento` ➔ `Pronto (DoR)` ➔ `Em Desenvolvimento` ➔ `Em Verificação` ➔ `Em Validação` ➔ `Concluído (DoD)`

    *   **Portão de Entrada (DoR — Definition of Ready):**  
        Nenhum item avança para a implementação da lógica de backend e persistência sem ter cumprido previamente o DoR (história INVEST descrita, critérios de aceitação BDD formalizados, contrato de dados preliminar, base visual no Figma e designs de interface estabelecidos e validados no Frontend com dados *mockados* junto à cliente).

    *   **Portão de Saída (DoD — Definition of Done):**  
        Critério final que atesta a integração da lógica de backend e persistência com a interface, código tipado, cobertura de testes automatizados, revisão por pares (*checklists Fagan*), deploy em homologação (*Staging* na Vercel) e validação funcional.

    *   **Rastreabilidade:**  
        Cada História de Usuário e tarefa técnica está estritamente vinculada a *branches* temáticas, *Pull Requests*, testes e critérios de aceitação.

    ---

    [:material-open-in-new: **Acessar GitHub Projects (Projeto #119)**](https://github.com/orgs/mdsreq-fga-unb/projects/119/){ .md-button .md-button--primary target="_blank" }

</div>

---

## Racional Metodológico do Cronograma

### Desacoplamento entre Período Acadêmico e Ciclos do RAD

Na Engenharia de Requisitos moderna e no modelo **RAD (Rapid Application Development)**, as funcionalidades e regras de negócio do sistema não são impostas prematuramente em cascata, mas emergem e refinam-se através de ciclos iterativos de elicitação, modelagem conceitual, prototipação participativa, construção rápida e validação sociotécnica contínua.

As quatro Unidades letivas da disciplina de Engenharia de Requisitos (Unidades 1, 2, 3 e 4) atuam como **marcos avaliativos externos e restrições de calendário (Pontos de Controle PC1 a PC4)**. O produto DUOC Finance é desenvolvido em **Ciclos RAD Contínuos e Incrementos de Produto**, nos quais cada incremento passa por:

1. **Planejamento do Incremento:** Delimitação de escopo, seleção de Histórias de Usuário e alinhamento de restrições;
2. **Design do Usuário e Prototipagem Evolutiva no Frontend (UI-First):** Estabelecimento da identidade visual, tokens e wireframes estruturais essenciais no Figma como guia; construção e estabelecimento dos designs de telas, formulários e componentes diretamente no Frontend (React SPA / Tailwind CSS) operando com dados mockados; e sessões síncronas de validação sociotécnica invertida com Maria Beatryz para homologação de IHC e atendimento formal ao DoR antes de qualquer esforço de infraestrutura de backend ou banco de dados;
3. **Construção Rápida da Lógica e Persistência:** Uma vez estabilizados e validados os designs de interface no Frontend, implementação da **lógica de negócio por trás** (algoritmos do motor financeiro, regras de apuração de diárias, validações contratuais, DDL/migrations no Supabase/PostgreSQL e endpoints de API), acoplando a interface validada aos serviços definitivos com cobertura de testes unitários;
4. **Verificação e Demonstração:** Deploy contínuo em ambiente de *Staging* na Vercel, inspeções estáticas (Fagan) e demonstrações funcionais com a cliente;
5. **Refinamento do Incremento Seguinte:** Coleta estruturada de feedbacks, identificação de atritos de IHC e repriorização contínua do backlog;
6. **Estabilização e Cutover ao Final:** *Code Freeze*, suíte de testes de regressão, Testes de Aceitação de Usuário (UAT) executados com antecedência, **janela dedicada para correção de defeitos pós-UAT**, assinatura do Termo de Aceite Formal, transição operacional com publicação do Manual do Usuário e capacitação.

#### Diagrama 1: Macrovisão do Desacoplamento entre Marcos Acadêmicos e Ciclos do RAD

O diagrama a seguir sintetiza visualmente o desacoplamento: as quatro Unidades acadêmicas e seus Pontos de Controle (PC1 a PC4) atuam na camada superior como marcos avaliativos externos fixos. O desenvolvimento do DUOC Finance transcorre na camada inferior em Ciclos RAD e Incrementos autônomos de engenharia de software:

<div class="cronograma-diagram-box" markdown="1">

![Diagrama 1: Macrovisão do Desacoplamento entre Marcos Acadêmicos e Ciclos do RAD](../assets/images/cronograma/diagrama_macrovisao_rad_light.png#only-light){ .img-light-mode }
![Diagrama 1: Macrovisão do Desacoplamento entre Marcos Acadêmicos e Ciclos do RAD](../assets/images/cronograma/diagrama_macrovisao_rad_dark.png#only-dark){ .img-dark-mode }

<div class="cronograma-diagram-caption">
  <span><strong>Figura 1:</strong> Macrovisão do Desacoplamento entre Marcos Acadêmicos e Ciclos RAD (Clique na imagem para ampliar em tela cheia).</span>
</div>

</div>

#### Diagrama 2: Microvisão do Ciclo UI-First e Portões de Qualidade (DoR e DoD)

O diagrama a seguir detalha a dinâmica interna de cada Incremento RAD: o design de interface é estabelecido com base no Figma e prototipado diretamente no Frontend com dados mockados; uma vez validado sociotecnicamente pela cliente e atendido o portão DoR, constrói-se a lógica de negócio por trás e a persistência:

<div class="cronograma-diagram-box" markdown="1">

![Diagrama 2: Microvisão do Ciclo UI-First e Portões de Qualidade (DoR e DoD)](../assets/images/cronograma/diagrama_microvisao_dor_dod_light.png#only-light){ .img-light-mode }
![Diagrama 2: Microvisão do Ciclo UI-First e Portões de Qualidade (DoR e DoD)](../assets/images/cronograma/diagrama_microvisao_dor_dod_dark.png#only-dark){ .img-dark-mode }

<div class="cronograma-diagram-caption">
  <span><strong>Figura 2:</strong> Ciclo de Prototipagem UI-First e Portões DoR / DoD (Clique na imagem para ampliar em tela cheia).</span>
</div>

</div>

---

### Mapeamento das Características (CARs) aos Ciclos e Incrementos do Produto

Para assegurar rastreabilidade inequívoca entre os Objetivos Específicos (OEs), as 8 Características centrais do produto ([CAR-01 a CAR-08](../visao-produto/capitulo-2/index.md#car-01)) e as integrações externas ([CAR-09 a CAR-12](../visao-produto/capitulo-2/index.md#car-09)), o escopo do DUOC Finance foi distribuído em incrementos evolutivos gerenciáveis, garantindo que os designs de interface sejam estabelecidos ágilmente via frontend, e o motor financeiro e os módulos críticos tenham sua lógica construída e verificada **muito antes da fase de transição (Cutover)**:

| Ciclo / Incremento RAD | Foco Arquitetural e de Domínio | Características Contempladas (CARs) | Atividades Metodológicas e Validações | Marco Externo Intersectante |
| :--- | :--- | :--- | :--- | :---: |
| **Ciclo 0: Concepção & Fundação**<br>*(Semanas 01 a 03 / Ago-Set)* | Diagnóstico de processos, viabilidade e governança | [CAR-01 a CAR-08](../visao-produto/capitulo-2/index.md) *(Especificação preliminar)*<br>[CAR-09 a CAR-12](../visao-produto/capitulo-2/index.md#car-09) *(Escopo técnico)* | - Contato exploratório inicial com a DUOC (19/08)<br>- Reunião 01 Oficial de Elicitação de Escopo e MVP (05/09)<br>- Reunião 02 Oficial de Alinhamento Metodológico (07/09)<br>- Rich Picture v2, Ishikawa 4M, Stakeholders e Mixer Board<br>- Estruturação do repositório *Docs as Code* no GitHub Pages | **Ponto de Controle 1**<br>*(08/09/2026)* |
| **Incremento 1: Gestão Cadastral e RVT de Campo**<br>*(Semanas 04 a 07 / Set-Out)* | Base cadastral unificada, autenticação e apontamento de viagens em obras | [CAR-01: Gestão Cadastral Unificada](../visao-produto/capitulo-2/index.md#car-01)<br>[CAR-02: Apontamento Móvel / RVT](../visao-produto/capitulo-2/index.md#car-02)<br>[CAR-07: Controle de Acesso RBAC (Base)](../visao-produto/capitulo-2/index.md#car-07) | - Elicitação aprofundada FURPS+ e personas de campo<br>- Base visual e Design System no Figma; estabelecimento dos designs de tela (RVT e Cadastros) diretamente no Frontend (React/Tailwind)<br>- **Reunião 03 (18/09):** Alinhamento conceitual e wireframes de campo<br>- **Reunião 04 (02/10):** Validação Sociotécnica Invertida das telas no Frontend<br>- Atendimento ao DoR do Incr. 1: telas aprovadas liberando a implementação de lógica e banco<br>- Codificação da lógica de regras cadastrais e persistência no Supabase | **Ponto de Controle 2**<br>*(15/10/2026)* |
| **Incremento 2: Motor Financeiro e Reembolsos**<br>*(Semanas 08 a 10 / Out-Nov)* | Apuração de diárias, fechamento de obras, conciliação e prestação de contas | [CAR-03: Motor Financeiro de Fechamento](../visao-produto/capitulo-2/index.md#car-03)<br>[CAR-04: Prestação de Contas e Reembolsos](../visao-produto/capitulo-2/index.md#car-04)<br>[CAR-08: Trilha de Auditoria (Logs)](../visao-produto/capitulo-2/index.md#car-08) | - Desenho dos fluxos e telas de fechamento financeiro e reembolsos diretamente no Frontend (tendo o Figma como base)<br>- **Reunião 05 (23/10):** Validação Sociotécnica Invertida das telas financeiras no Frontend com Maria Beatryz<br>- DoR atendido para as telas e contratos de dados<br>- **Construção da lógica do Motor Financeiro (CAR-03):** codificação das regras de cálculo de diárias, adiantamentos e persistência com folga técnica<br>- Upload de comprovantes simulados e logs de auditoria<br>- Testes aritméticos com planilhas de controle da DUOC | *Transição entre PC2 e PC3* |
| **Incremento 3: Custos por Contrato, Dashboards e Integrações**<br>*(Semanas 10 a 11 / Nov)* | Rateio de despesas por obra, painel gerencial e interoperabilidade | [CAR-05: Apropriação de Custos por Contrato](../visao-produto/capitulo-2/index.md#car-05)<br>[CAR-06: Painel Analítico de Desvio Orçamentário](../visao-produto/capitulo-2/index.md#car-06)<br>[CAR-09: Integração auditor.ia (Presença)](../visao-produto/capitulo-2/index.md#car-09)<br>[CAR-10: Importação/Exportação ERP e CSV](../visao-produto/capitulo-2/index.md#car-10) | - Construção dos módulos de rateio de custos por contrato<br>- Painel analítico de rentabilidade e desvio de orçamento<br>- Conexão preliminar com dados sintéticos de auditor.ia e ERP<br>- Inspeção estática de requisitos e código (Fagan)<br>- Matriz de Rastreabilidade Bidirecional (*Forward/Backward*)<br>- Deploy contínuo e integrado em *Staging* | **Ponto de Controle 3**<br>*(19/11/2026)* |
| **Fase Final: Transição / Cutover, Estabilização e Aceite**<br>*(Semanas 12 e 13 / 20/11 a 02/12)* | Homologação final, UAT com a cliente, saneamento de defeitos e transição operacional | **Todas as CARs Integradas e Homologadas** *(Módulos congelados para qualidade)* | - *Code Freeze* operacional (20 a 23/11)<br>- **Reunião 06 (24/11):** Sessão Formal de UAT com Maria Beatryz<br>- **Janela Dedicada de Correção de Defeitos pós-UAT (25 a 27/11)**<br>- **Termo de Aceite Formal assinado (28/11)**<br>- Transição operacional (*Cutover*), Manual do Usuário e capacitação<br>- Apresentação Final perante a banca e Retrospectiva | **Ponto de Controle 4**<br>*(01/12/2026)* |

---

### Gestão de Folgas Técnicas e Riscos Operacionais (Buffers Explícitos)

Para mitigar incertezas inerentes à engenharia de software e garantir estabilidade nas entregas acadêmicas e operacionais, o cronograma incorpora quatro categorias de folga (*buffers* de contingência):

1. **Folga para Mudanças de Requisitos e Regras Financeiras Complexas:** A apuração de diárias de campo, adiantamentos e fechamento de obras envolve regras matemáticas sensíveis. Por isso, a construção do motor financeiro (CAR-03) foi alocada com semanas de antecedência (Semanas 08 a 10), incluindo um *buffer* técnico de 3 dias úteis para validação de discrepâncias aritméticas em relação às planilhas originais da DUOC.
2. **Folga para Indisponibilidade da Cliente:** A rotina de gestão de obras da cliente parceira pode impor imprevistos de agenda. A equipe instituiu um protocolo de contingência: caso uma sessão síncrona não possa ocorrer na data prevista, disponibiliza-se um vídeo navegável explicativo (Loom) e o link da aplicação web em ambiente de preview/staging (com telas e mocks) para validação assíncrona em até 48 horas, além de janela alternativa de reagendamento síncrono com folga de 5 dias úteis.
3. **Janela Dedicada de Correção de Defeitos pós-UAT (Buffer de 3 Dias):** A sessão formal de Testes de Aceitação de Usuário (UAT) com Maria Beatryz foi programada para **24/11/2026**. Entre o UAT e o Termo de Aceite Formal (28/11), estabeleceu-se uma janela de **três dias úteis exclusivos (25, 26 e 27/11)** para saneamento de eventuais divergências, correção de bugs de interface ou ajustes de fórmulas, garantindo que o aceite formal não seja assinado sobre software com defeitos pendentes.
4. **Margem de Contingência Pré-Banca Final:** Os dias 29 e 30/11 são destinados exclusivamente ao *dry-run* (ensaio da apresentação), consolidação final dos artefatos no MkDocs e gravação do vídeo institucional, blindando a equipe contra imprevistos técnicos na véspera do Ponto de Controle 4 (01/12/2026).

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
          <div class="tooltip-phase">Ciclo 0: Concepção & Diagnóstico (Marco: PC1)</div>
          <div class="tooltip-divider"></div>
          <div class="tooltip-body">
            <p><strong>Período:</strong> 11/08 a 31/08 (21 dias letivos)</p>
            <p><strong>Eventos:</strong> Contato exploratório inicial com a DUOC (19/08)</p>
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
          <div class="tooltip-phase">Ciclo 0 (Finalização PC1) e Início Incremento 1</div>
          <div class="tooltip-divider"></div>
          <div class="tooltip-body">
            <p><strong>Período:</strong> 01/09 a 30/09 (22 dias letivos)</p>
            <p><strong>Marcos:</strong> Ponto de Controle 1 Entregue (08/09)</p>
            <p><strong>Reuniões:</strong> Reunião 01 Oficial (05/09, Ata 01) • Reunião 02 Oficial (07/09, Ata 02) • Reunião 03 (18/09)</p>
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
          <div class="tooltip-phase">Incr. 1 (Designs no Frontend & DoR) e Início Incr. 2 (Motor Financeiro)</div>
          <div class="tooltip-divider"></div>
          <div class="tooltip-body">
            <p><strong>Período:</strong> 01/10 a 31/10 (22 dias letivos)</p>
            <p><strong>Marcos:</strong> Ponto de Controle 2 em 15/10</p>
            <p><strong>Reuniões:</strong> Reunião 04 (02/10 — Validação Frontend Incr. 1) • Reunião 05 (23/10 — Validação Frontend Incr. 2)</p>
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
          <div class="tooltip-phase">Incrementos 2 & 3 (Construção Financeira e Dashboards) e Cutover</div>
          <div class="tooltip-divider"></div>
          <div class="tooltip-body">
            <p><strong>Período:</strong> 01/11 a 30/11 (20 dias letivos)</p>
            <p><strong>Marcos:</strong> Ponto de Controle 3 em 19/11</p>
            <p><strong>Reuniões:</strong> Reunião 06 (24/11 — Sessão UAT) • Janela de Correções (25 a 27/11) • Aceite Formal (28/11)</p>
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
            <p><strong>Período:</strong> 01/12 a 02/12</p>
            <p><strong>Marcos:</strong> Ponto de Controle 4 (Apresentação Final em 01/12)</p>
            <p><strong>Encerramento:</strong> Retrospectiva final da equipe (02/12)</p>
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
              <td class="day-u1 day-meet day-done" title="Reunião 01 Oficial com Maria Beatryz — Elicitação de Escopo e MVP">
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
              <td class="day-u2" title="Início oficial do Incremento 1 — Base no Figma e Prototipagem dos Designs no Frontend">
                <div class="cell-top"><span class="cell-num">15</span></div>
                <span class="event-chip active-phase">Início Incr. 1</span>
              </td>
              <td class="day-u2" title="Entrevistas de detalhamento com Maria Beatryz">
                <div class="cell-top"><span class="cell-num">16</span></div>
              </td>
              <td class="day-u2" title="Análise documental de planilhas e RVT">
                <div class="cell-top"><span class="cell-num">17</span></div>
              </td>
              <td class="day-u2 day-meet" title="Reunião 03 com Maria Beatryz — Entrevista Semiestruturada e Validação Preliminar de Wireframes">
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
              <div class="event-desc">Homologação da exclusão de estoque, proteção de dados via dados sintéticos (LGPD), hospedagem na Vercel e separação entre CLT e diaristas. [Ver Ata 01](../atas/index.md).</div>
            </div>
          </div>
          <span class="status-pill concluido">Realizada</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge done"><span class="ev-d">07</span><span class="ev-m">SET</span></span>
            <div class="event-info">
              <div class="event-name">Reunião 02 Oficial: Alinhamento Metodológico e ESW</div>
              <div class="event-desc">Diagnóstico sociotécnico, integração conceitual com auditor.ia, adoção do framework RAD, definição da stack (React/Supabase) e gravação do vídeo da Entrega 1. [Ver Ata 02](../atas/index.md).</div>
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
              <div class="event-name">Abertura do Incremento 1: Design do Usuário (Elicitação e Modelagem)</div>
              <div class="event-desc">Início da análise documental minuciosa das planilhas sintéticas, mapeamento de personas e elaboração dos primeiros wireframes navegáveis para canteiro de obras e apontamento móvel (CAR-01 e CAR-02).</div>
            </div>
          </div>
          <span class="status-pill andamento">Em Andamento</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge"><span class="ev-d">18</span><span class="ev-m">SET</span></span>
            <div class="event-info">
              <div class="event-name">Reunião 03 com Maria Beatryz: Entrevista Semiestruturada e Validação de Wireframes</div>
              <div class="event-desc">Sessão remota via Google Meet com a cliente para detalhamento das regras de cálculo de adiantamento, prestação de contas do RVT e primeira validação dos wireframes conceituais de telas de campo.</div>
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
          <span class="panel-month-phase">Incr. 1 (Designs no Frontend & DoR) e Início Incr. 2 (Motor Financeiro) — Marco: PC2 em 15/10</span>
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
              <td class="day-u2" title="Critérios BDD/Gherkin e refinamento"><div class="cell-top"><span class="cell-num">1</span></div></td>
              <td class="day-u2 day-meet" title="Reunião 04 com Maria Beatryz — Validação Sociotécnica Invertida no Frontend (Incr. 1: RVT e Cadastros)">
                <div class="cell-top"><span class="cell-num">2</span></div>
                <span class="event-chip meet">Reunião 04</span>
              </td>
              <td class="day-u2"><div class="cell-top"><span class="cell-num">3</span></div></td>
            </tr>
            <tr>
              <td class="day-u2" title="DoR atendido para Incr. 1 e MoSCoW no GitHub Projects">
                <div class="cell-top"><span class="cell-num">4</span></div>
                <span class="event-chip active-phase">DoR Incr. 1</span>
              </td>
              <td class="day-u2"><div class="cell-top"><span class="cell-num">5</span></div></td>
              <td class="day-u2"><div class="cell-top"><span class="cell-num">6</span></div></td>
              <td class="day-u2"><div class="cell-top"><span class="cell-num">7</span></div></td>
              <td class="day-u2" title="Modelagem Conceitual de Dados (DER / Supabase)">
                <div class="cell-top"><span class="cell-num">8</span></div>
                <span class="event-chip active-phase">DER Supabase</span>
              </td>
              <td class="day-u2" title="Designs de tela validados no Frontend"><div class="cell-top"><span class="cell-num">9</span></div><span class="event-chip active-phase">UI Incr 1</span></td>
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
              <td class="day-u3" title="Abertura do Incremento 2 — Motor Financeiro e Reembolsos">
                <div class="cell-top"><span class="cell-num">19</span></div>
                <span class="event-chip active-phase">Início Incr. 2</span>
              </td>
              <td class="day-u3" title="Designs de telas do Motor Financeiro no Frontend"><div class="cell-top"><span class="cell-num">20</span></div></td>
              <td class="day-u3" title="Fluxos de fechamento de diaristas"><div class="cell-top"><span class="cell-num">21</span></div></td>
              <td class="day-u3" title="Telas de prestação de contas"><div class="cell-top"><span class="cell-num">22</span></div></td>
              <td class="day-u3 day-meet" title="Reunião 05 com Maria Beatryz — Validação Sociotécnica Invertida no Frontend (Incr. 2: Motor Financeiro)">
                <div class="cell-top"><span class="cell-num">23</span></div>
                <span class="event-chip meet">Reunião 05</span>
              </td>
              <td class="day-u3"><div class="cell-top"><span class="cell-num">24</span></div></td>
            </tr>
            <tr>
              <td class="day-u3"><div class="cell-top"><span class="cell-num">25</span></div></td>
              <td class="day-u3" title="DoR atendido para lógica do Incr. 2"><div class="cell-top"><span class="cell-num">26</span></div><span class="event-chip active-phase">DoR Incr. 2</span></td>
              <td class="day-u3" title="Construção: Regras de fechamento quinzenal"><div class="cell-top"><span class="cell-num">27</span></div></td>
              <td class="day-u3" title="Construção: Lógica do Motor Financeiro (CAR-03)">
                <div class="cell-top"><span class="cell-num">28</span></div>
                <span class="event-chip active-phase">Motor Financeiro</span>
              </td>
              <td class="day-u3" title="Folga técnica para validação de fórmulas"><div class="cell-top"><span class="cell-num">29</span></div></td>
              <td class="day-u3" title="Módulo de Reembolsos (CAR-04)"><div class="cell-top"><span class="cell-num">30</span></div></td>
              <td class="day-u3" title="Validação aritmética com dados sintéticos"><div class="cell-top"><span class="cell-num">31</span></div><span class="event-chip active-phase">Testes Cálculos</span></td>
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
              <div class="event-name">Reunião 04 com Maria Beatryz: Validação Sociotécnica Invertida (Incr. 1)</div>
              <div class="event-desc">Sessão síncrona via Google Meet onde a cliente assume o controle navegando pelas telas de RVT móvel e Gestão Cadastral estabelecidas no Frontend (com base visual no Figma). Homologação do DoR para implementação da lógica e persistência.</div>
            </div>
          </div>
          <span class="status-pill marcada">Reunião Agendada</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge"><span class="ev-d">08</span><span class="ev-m">OUT</span></span>
            <div class="event-info">
              <div class="event-name">Modelagem Conceitual de Dados (DER / Supabase) e Arquitetura LGPD</div>
              <div class="event-desc">Diagrama Entidade-Relacionamento cobrindo colaboradores, diaristas, contratos de obras e despesas de campo, garantindo conformidade com dados sintéticos.</div>
            </div>
          </div>
          <span class="status-pill planejado">Planejado</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge milestone"><span class="ev-d">15</span><span class="ev-m">OUT</span></span>
            <div class="event-info">
              <div class="event-name">Ponto de Controle 2: Entrega Oficial da Unidade 2</div>
              <div class="event-desc">Apresentação dos requisitos FURPS+, backlog INVEST estruturado no GitHub Projects #119, critérios DoR/DoD, DER e designs de interface validados no Frontend. [Acessar Entrega 2](../entregas/entrega-2.md).</div>
            </div>
          </div>
          <span class="status-pill planejado">Marco de Entrega</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge"><span class="ev-d">23</span><span class="ev-m">OUT</span></span>
            <div class="event-info">
              <div class="event-name">Reunião 05 com Maria Beatryz: Validação Sociotécnica Invertida (Incr. 2)</div>
              <div class="event-desc">Segunda sessão formal de validação: navegação guiada no Frontend focada nas telas e componentes do Motor Financeiro (CAR-03) e Prestação de Contas (CAR-04), com DoR atendido para implementação da lógica de cálculo e persistência.</div>
            </div>
          </div>
          <span class="status-pill marcada">Reunião Agendada</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge"><span class="ev-d">28</span><span class="ev-m">OUT</span></span>
            <div class="event-info">
              <div class="event-name">Construção da Lógica do Motor Financeiro (CAR-03) e Módulo de Reembolsos</div>
              <div class="event-desc">Início da codificação dos algoritmos de fechamento quinzenal de diaristas e prestação de contas conectando as telas já validadas, com folga técnica para fórmulas.</div>
            </div>
          </div>
          <span class="status-pill planejado">Planejado</span>
        </div>
      </div>
    </div>

    <!-- ==================== PAINEL NOVEMBRO 2026 ==================== -->
    <div class="month-view-panel view-nov">
      <div class="panel-month-header">
        <div>
          <h3 class="panel-month-title">Novembro de 2026</h3>
          <span class="panel-month-phase">Incrementos 2 & 3 (Construção Financeira e Dashboards) e Transição/Cutover</span>
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
              <td class="day-u3" title="Construção: Lógica de adiantamentos de campo"><div class="cell-top"><span class="cell-num">3</span></div></td>
              <td class="day-u3" title="Construção: Tabelas de Fechamento Financeiro"><div class="cell-top"><span class="cell-num">4</span></div></td>
              <td class="day-u3" title="Construção: Motor Financeiro (CAR-03) e Reembolsos (CAR-04)">
                <div class="cell-top"><span class="cell-num">5</span></div>
                <span class="event-chip active-phase">Incr. 2 Core</span>
              </td>
              <td class="day-u3" title="Trilha de Auditoria (CAR-08) e Logs sensíveis"><div class="cell-top"><span class="cell-num">6</span></div></td>
              <td class="day-u3" title="Validação aritmética de diárias e adiantamentos"><div class="cell-top"><span class="cell-num">7</span></div></td>
            </tr>
            <tr>
              <td class="day-u3"><div class="cell-top"><span class="cell-num">8</span></div></td>
              <td class="day-u3" title="Apropriação de Custos por Contrato (CAR-05)"><div class="cell-top"><span class="cell-num">9</span></div></td>
              <td class="day-u3" title="Painel Analítico de Desvio Orçamentário (CAR-06)"><div class="cell-top"><span class="cell-num">10</span></div></td>
              <td class="day-u3" title="Integrações externas (CAR-09 auditor.ia e CAR-10 CSV)"><div class="cell-top"><span class="cell-num">11</span></div></td>
              <td class="day-u3" title="Deploy integrado em Staging na Vercel">
                <div class="cell-top"><span class="cell-num">12</span></div>
                <span class="event-chip active-phase">Staging Vercel</span>
              </td>
              <td class="day-u3" title="Inspeção estática Fagan dos módulos integrados"><div class="cell-top"><span class="cell-num">13</span></div></td>
              <td class="day-u3" title="Matriz de Rastreabilidade Bidirecional preliminar">
                <div class="cell-top"><span class="cell-num">14</span></div>
                <span class="event-chip active-phase">Rastreabilidade</span>
              </td>
            </tr>
            <tr>
              <td><div class="cell-top"><span class="cell-num">15</span></div><span class="event-chip">Proclamação</span></td>
              <td class="day-u3" title="Verificação de software e testes automatizados"><div class="cell-top"><span class="cell-num">16</span></div></td>
              <td class="day-u3" title="Consolidação dos artefatos da Unidade 3"><div class="cell-top"><span class="cell-num">17</span></div></td>
              <td class="day-u3" title="Gravação da apresentação U3"><div class="cell-top"><span class="cell-num">18</span></div><span class="event-chip">Gravação U3</span></td>
              <td class="day-milestone" title="PONTO DE CONTROLE 3 — Entrega oficial da Unidade 3">
                <div class="cell-top"><span class="cell-num">19</span></div>
                <span class="event-chip milestone">Entrega 3</span>
              </td>
              <td><div class="cell-top"><span class="cell-num">20</span></div><span class="event-chip">Consciência N.</span></td>
              <td class="day-u4" title="Abertura da Fase de Cutover e Estabilização Final"><div class="cell-top"><span class="cell-num">21</span></div></td>
            </tr>
            <tr>
              <td class="day-u4" title="Code Freeze operacional e suíte de regressão"><div class="cell-top"><span class="cell-num">22</span></div></td>
              <td class="day-u4" title="Carga de dados sintéticos para UAT no Staging">
                <div class="cell-top"><span class="cell-num">23</span></div>
                <span class="event-chip active-phase">Carga Sintética</span>
              </td>
              <td class="day-u4 day-meet" title="Reunião 06 com Maria Beatryz — Sessão Formal de UAT (User Acceptance Testing)">
                <div class="cell-top"><span class="cell-num">24</span></div>
                <span class="event-chip meet">Sessão UAT</span>
              </td>
              <td class="day-u4" title="Janela de Correção de Defeitos pós-UAT (Dia 1)">
                <div class="cell-top"><span class="cell-num">25</span></div>
                <span class="event-chip active-phase">Correção UAT</span>
              </td>
              <td class="day-u4" title="Janela de Correção de Defeitos pós-UAT (Dia 2)">
                <div class="cell-top"><span class="cell-num">26</span></div>
                <span class="event-chip active-phase">Correção UAT</span>
              </td>
              <td class="day-u4" title="Janela de Correção de Defeitos pós-UAT (Dia 3) e Regressão">
                <div class="cell-top"><span class="cell-num">27</span></div>
                <span class="event-chip active-phase">Correção UAT</span>
              </td>
              <td class="day-u4" title="Homologação final e assinatura do Termo de Aceite Formal">
                <div class="cell-top"><span class="cell-num">28</span></div>
                <span class="event-chip active-phase">Aceite Formal</span>
              </td>
            </tr>
            <tr>
              <td class="day-u4" title="Transição Operacional (Cutover): Release final e Manual do Usuário">
                <div class="cell-top"><span class="cell-num">29</span></div>
                <span class="event-chip active-phase">Manual & Cutover</span>
              </td>
              <td class="day-u4" title="Capacitação operacional da cliente e ensaio da apresentação">
                <div class="cell-top"><span class="cell-num">30</span></div>
                <span class="event-chip active-phase">Dry-Run PC4</span>
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
              <div class="event-name">Construção do Núcleo Financeiro (CAR-03 e CAR-04)</div>
              <div class="event-desc">Implementação do motor de fechamento quinzenal de diaristas, cálculo de adiantamentos e fluxo digital de reembolsos com upload de cupons simulados.</div>
            </div>
          </div>
          <span class="status-pill planejado">Planejado</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge"><span class="ev-d">12</span><span class="ev-m">NOV</span></span>
            <div class="event-info">
              <div class="event-name">Incremento 3: Custos por Contrato, Dashboards e Integrações (CAR-05, 06, 08, 09, 10)</div>
              <div class="event-desc">Rateio automático de custos por projeto, painel analítico gerencial de desvio orçamentário, trilha de auditoria e deploy contínuo em ambiente de Staging.</div>
            </div>
          </div>
          <span class="status-pill planejado">Planejado</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge milestone"><span class="ev-d">19</span><span class="ev-m">NOV</span></span>
            <div class="event-info">
              <div class="event-name">Ponto de Controle 3: Entrega Oficial da Unidade 3</div>
              <div class="event-desc">Apresentação dos protótipos de alta fidelidade homologados, módulos funcionais integrados em Staging, suíte de testes automatizados e rastreabilidade preliminar. [Acessar Entrega 3](../entregas/entrega-3.md).</div>
            </div>
          </div>
          <span class="status-pill planejado">Marco de Entrega</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge"><span class="ev-d">24</span><span class="ev-m">NOV</span></span>
            <div class="event-info">
              <div class="event-name">Reunião 06 com Maria Beatryz: Sessão Formal de UAT no Staging</div>
              <div class="event-desc">Execução orientada de testes de aceitação de usuário de ponta a ponta no Google Meet com dados sintéticos anonimizados. (Sessão antecipada para criar janela de correções).</div>
            </div>
          </div>
          <span class="status-pill marcada">Reunião Agendada</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge"><span class="ev-d">25-27</span><span class="ev-m">NOV</span></span>
            <div class="event-info">
              <div class="event-name">Janela Dedicada de Correção de Defeitos pós-UAT e Estabilização</div>
              <div class="event-desc">Período de três dias de buffer técnico exclusivo para correção de discrepâncias de cálculo, refinamentos de usabilidade apontados pela cliente e testes de regressão.</div>
            </div>
          </div>
          <span class="status-pill planejado">Planejado</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge"><span class="ev-d">28</span><span class="ev-m">NOV</span></span>
            <div class="event-info">
              <div class="event-name">Homologação das Correções e Assinatura do Termo de Aceite Formal</div>
              <div class="event-desc">Validação definitiva com a cliente parceira das correções implementadas e assinatura do Termo de Aceite Formal atestando atendimento ao DoD.</div>
            </div>
          </div>
          <span class="status-pill planejado">Planejado</span>
        </div>

        <div class="month-event-item">
          <div class="month-event-left">
            <span class="event-date-badge"><span class="ev-d">30</span><span class="ev-m">NOV</span></span>
            <div class="event-info">
              <div class="event-name">Transição Operacional (Cutover) e Publicação do Manual do Usuário</div>
              <div class="event-desc">Deploy da versão estável final em produção na Vercel, entrega do guia operacional da cliente e fechamento dos preparativos para o Ponto de Controle 4.</div>
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

#### Tabela Estruturada dos 4 Marcos Avaliativos (Unidades 1 a 4)

A tabela-síntese a seguir apresenta o alinhamento executivo entre os quatro marcos avaliativos da disciplina e os incrementos evolutivos do DUOC Finance:

| Marco Avaliativo | Período Oficial | Ciclos RAD Intersectantes | Entregável Principal Homologado | Status |
| :--- | :---: | :--- | :--- | :---: |
| **Unidade 1 (PC1)** | 11/08 a 08/09/2026 | **Ciclo 0:** Concepção & Fundação | Visão de Produto, Rich Picture v2, Ishikawa 4M, Atas 01/02 e Docs as Code | :white_check_mark: **Concluída** |
| **Unidade 2 (PC2)** | 15/09 a 15/10/2026 | **Incremento 1:** Design do Usuário & RVT | Telas no Frontend homologadas pela cliente, DoR atendido, DER e Backlog INVEST | :warning: **Em Desenvolvimento** |
| **Unidade 3 (PC3)** | 20/10 a 19/11/2026 | **Incrementos 2 & 3:** Motor Financeiro & Dashboards | Motor Financeiro e Reembolsos operacionais em Staging, V&V Fagan e Rastreabilidade | :hourglass_flowing_sand: **Planejado** |
| **Unidade 4 (PC4)** | 20/11 a 02/12/2026 | **Fase Cutover:** Transição, UAT e Aceite | Sistema em produção na Vercel, UAT saneado, Termo de Aceite Formal e Manual | :hourglass_flowing_sand: **Planejado** |

#### Detalhamento Metodológico por Marco Avaliativo

Utilize as abas abaixo para consultar as atividades detalhadas, artefatos homologados e mecanismos de validação com a cliente correspondentes a cada Ponto de Controle:

=== "Unidade 1 (Ponto de Controle 1)"

    <div class="week-card status-concluido">
      <div class="week-card-header">
        <div class="week-card-header-left">
          <span class="week-card-title">Marco Avaliativo 1: Unidade 1</span>
          <span class="week-card-period">11/08/2026 a 08/09/2026</span>
        </div>
        <span class="status-pill concluido">Concluída</span>
      </div>
      <div class="week-card-meta">
        <div class="week-meta-item">
          <span class="week-meta-label">Ciclos RAD Intersectantes</span>
          <span class="week-meta-value">Ciclo 0: Concepção, Diagnóstico e Planejamento de Requisitos</span>
        </div>
        <div class="week-meta-item">
          <span class="week-meta-label">Validações com a Cliente</span>
          <span class="week-meta-value">Contato exploratório (19/08) • Reunião 01 Oficial (05/09, Ata 01) • Reunião 02 Oficial (07/09, Ata 02)</span>
        </div>
      </div>
      <div class="week-card-grid">
        <div>
          <div class="week-section-title">Atividades Metodológicas de Engenharia de Requisitos</div>
          <ul>
            <li>Contato exploratório inicial com Maria Beatryz para compreensão das rotinas de campo da DUOC;</li>
            <li>Realização da Reunião 01 Oficial de Elicitação de Escopo e MVP e Reunião 02 Oficial de Alinhamento Metodológico;</li>
            <li>Diagnóstico causal das dores com planilhas e diárias via Ishikawa 4M (Método, Mão de Obra, Máquina e Meio Ambiente);</li>
            <li>Modelagem de processo AS-IS e fronteiras sistêmicas TO-BE no Rich Picture v2;</li>
            <li>Mapeamento de Stakeholders (Matriz Poder x Interesse) e Perfis de Usuários (IHC);</li>
            <li>Calibração da abordagem híbrida (RAD) no <em>Mixer Board</em> e Estratégia de ESW;</li>
            <li>Implantação da infraestrutura <em>Docs as Code</em> (MkDocs Material no GitHub Pages com busca e CI automatizado).</li>
          </ul>
        </div>
        <div>
          <div class="week-section-title">Produtos e Artefatos Homologados</div>
          <ul>
            <li>Portal MkDocs publicado com 13 capítulos estruturados;</li>
            <li>Visão de Produto e Projeto preliminar;</li>
            <li>Matriz de Características preliminar (<a href="../visao-produto/capitulo-2/index.md#car-01">CAR-01 a CAR-08</a>);</li>
            <li>Escopo preliminar de integrações externas (<a href="../visao-produto/capitulo-2/index.md#car-09">CAR-09 a CAR-12</a>);</li>
            <li>Repositório oficial de Atas de Reunião (<a href="../atas/index.md">Ata 01</a> e <a href="../atas/index.md">Ata 02</a>);</li>
            <li>Painel de Entregas e vídeo oficial homologado (<a href="../entregas/entrega-1.md">Acessar Entrega 1</a>).</li>
          </ul>
        </div>
      </div>
    </div>

=== "Unidade 2 (Ponto de Controle 2)"

    <div class="week-card status-andamento">
      <div class="week-card-header">
        <div class="week-card-header-left">
          <span class="week-card-title">Marco Avaliativo 2: Unidade 2</span>
          <span class="week-card-period">15/09/2026 a 15/10/2026</span>
        </div>
        <span class="status-pill andamento">Em Desenvolvimento</span>
      </div>
      <div class="week-card-meta">
        <div class="week-meta-item">
          <span class="week-meta-label">Ciclos RAD Intersectantes</span>
          <span class="week-meta-value">Incremento 1: Design do Usuário, Prototipagem Evolutiva e Modelagem</span>
        </div>
        <div class="week-meta-item">
          <span class="week-meta-label">Validações com a Cliente</span>
          <span class="week-meta-value">Reunião 03 (18/09 — Wireframes de Campo) • Reunião 04 (02/10 — Validação Sociotécnica Invertida no Frontend)</span>
        </div>
      </div>
      <div class="week-card-grid">
        <div>
          <div class="week-section-title">Atividades Metodológicas de Engenharia de Requisitos</div>
          <ul>
            <li>Elicitação aprofundada via entrevista semiestruturada e análise documental minuciosa das planilhas sintéticas;</li>
            <li>Classificação e especificação rigorosa de requisitos sob o framework <strong>FURPS+</strong>;</li>
            <li>Criação de Personas representativas e cenários contextuais de uso para escritório e canteiros;</li>
            <li>Base visual e tokens no Figma; estabelecimento dos designs de tela diretamente no Frontend (React SPA) com dados mockados;</li>
            <li>Sessão de validação sociotécnica invertida com Maria Beatryz assumindo a navegação das telas no Frontend;</li>
            <li>Decomposição em Histórias de Usuário <strong>INVEST</strong> com critérios de aceitação BDD (Gherkin);</li>
            <li>Priorização de Backlog usando <strong>MoSCoW</strong> e <strong>atendimento formal ao DoR do Incr. 1</strong> antes da codificação de lógica e banco;</li>
            <li>Modelagem Conceitual e Física de Dados (DER / Supabase / PostgreSQL) e arquitetura de dados sintéticos LGPD.</li>
          </ul>
        </div>
        <div>
          <div class="week-section-title">Produtos e Artefatos Homologados</div>
          <ul>
            <li>Especificação de Requisitos FURPS+ formalizada;</li>
            <li>Telas de RVT Móvel (<a href="../visao-produto/capitulo-2/index.md#car-02">CAR-02</a>) e Cadastros (<a href="../visao-produto/capitulo-2/index.md#car-01">CAR-01</a>) homologadas no Frontend;</li>
            <li>Product Backlog priorizado e gerido no GitHub Projects #119;</li>
            <li>Histórias de Usuário INVEST com critérios BDD formalizados;</li>
            <li>Critérios formais de DoR e DoD com DoR atendido para implementação da lógica;</li>
            <li>Diagrama Entidade-Relacionamento (DER) e documento oficial da <a href="../entregas/entrega-2.md">Entrega 2</a>.</li>
          </ul>
        </div>
      </div>
    </div>

=== "Unidade 3 (Ponto de Controle 3)"

    <div class="week-card status-planejado">
      <div class="week-card-header">
        <div class="week-card-header-left">
          <span class="week-card-title">Marco Avaliativo 3: Unidade 3</span>
          <span class="week-card-period">20/10/2026 a 19/11/2026</span>
        </div>
        <span class="status-pill planejado">Planejado</span>
      </div>
      <div class="week-card-meta">
        <div class="week-meta-item">
          <span class="week-meta-label">Ciclos RAD Intersectantes</span>
          <span class="week-meta-value">Incrementos 2 & 3: Construção Rápida do Motor Financeiro, Dashboards e Integrações</span>
        </div>
        <div class="week-meta-item">
          <span class="week-meta-label">Validações com a Cliente</span>
          <span class="week-meta-value">Reunião 05 (23/10 — Validação Sociotécnica Invertida das Telas Financeiras no Frontend)</span>
        </div>
      </div>
      <div class="week-card-grid">
        <div>
          <div class="week-section-title">Atividades Metodológicas de Engenharia de Requisitos</div>
          <ul>
            <li>Estabelecimento dos designs das telas financeiras no Frontend com base no Figma;</li>
            <li>Sessão de validação sociotécnica invertida com Maria Beatryz e atendimento ao DoR do Incremento 2;</li>
            <li><strong>Construção da lógica do Motor Financeiro (CAR-03)</strong> e Reembolsos (CAR-04) em timebox com <strong>folga técnica de 3 dias</strong> para fórmulas de cálculo;</li>
            <li>Desenvolvimento do módulo de Apropriação de Custos por Contrato (CAR-05);</li>
            <li>Construção do Painel Analítico de Rentabilidade e Desvio Orçamentário (CAR-06);</li>
            <li>Implementação da Trilha de Auditoria imutável (CAR-08) e segregação RBAC (CAR-07);</li>
            <li>Conectores preliminares de integração: presença via <em>auditor.ia</em> (CAR-09) e importação CSV de ERPs (CAR-10);</li>
            <li>Verificação por inspeções estáticas (Checklists Fagan), testes unitários e CI na Vercel;</li>
            <li>Estruturação e preenchimento da Matriz de Rastreabilidade Bidirecional.</li>
          </ul>
        </div>
        <div>
          <div class="week-section-title">Produtos e Artefatos Homologados</div>
          <ul>
            <li>Sistema DUOC Finance funcional em ambiente de <em>Staging</em> na Vercel;</li>
            <li><strong>Lógica do Motor Financeiro (<a href="../visao-produto/capitulo-2/index.md#car-03">CAR-03</a>) e Reembolsos (<a href="../visao-produto/capitulo-2/index.md#car-04">CAR-04</a>) operacionais e verificados</strong>;</li>
            <li>Painel Analítico de Rentabilidade e Custos (<a href="../visao-produto/capitulo-2/index.md#car-06">CAR-06</a>);</li>
            <li>Relatório de Inspeção Fagan e testes automatizados aprovados no CI;</li>
            <li>Matriz de Rastreabilidade Bidirecional preliminar;</li>
            <li>Documento oficial e vídeo da <a href="../entregas/entrega-3.md">Entrega 3</a>.</li>
          </ul>
        </div>
      </div>
    </div>

=== "Unidade 4 (Ponto de Controle 4)"

    <div class="week-card status-planejado">
      <div class="week-card-header">
        <div class="week-card-header-left">
          <span class="week-card-title">Marco Avaliativo 4: Unidade 4 (Final)</span>
          <span class="week-card-period">20/11/2026 a 02/12/2026</span>
        </div>
        <span class="status-pill planejado">Planejado</span>
      </div>
      <div class="week-card-meta">
        <div class="week-meta-item">
          <span class="week-meta-label">Ciclos RAD Intersectantes</span>
          <span class="week-meta-value">Fase de Transição / Cutover, Estabilização, UAT e Aceite Formal</span>
        </div>
        <div class="week-meta-item">
          <span class="week-meta-label">Validações com a Cliente</span>
          <span class="week-meta-value">Reunião 06 (24/11 — Sessão Formal de UAT) • Assinatura do Termo de Aceite Formal (28/11)</span>
        </div>
      </div>
      <div class="week-card-grid">
        <div>
          <div class="week-section-title">Atividades Metodológicas de Engenharia de Requisitos</div>
          <ul>
            <li><em>Code Freeze</em> operacional e carga de base sintética para simulação realista no Staging (20 a 23/11);</li>
            <li><strong>Sessão Formal de Testes de Aceitação de Usuário — UAT (Reunião 06 em 24/11)</strong> com Maria Beatryz;</li>
            <li><strong>Janela Dedicada de Correção de Defeitos pós-UAT (25 a 27/11 — Buffer de 3 Dias):</strong> saneamento de inconsistências e testes de regressão;</li>
            <li>Homologação conclusiva das correções e assinatura do <strong>Termo de Aceite Formal (28/11)</strong>;</li>
            <li>Transição operacional (Cutover): deploy final de produção na Vercel e publicação do Manual do Usuário;</li>
            <li>Capacitação operacional da equipe DUOC e consolidação da Matriz de Rastreabilidade Bidirecional completa;</li>
            <li>Apresentação Final perante a banca examinadora (01/12) e Retrospectiva da equipe (02/12).</li>
          </ul>
        </div>
        <div>
          <div class="week-section-title">Produtos e Artefatos Homologados</div>
          <ul>
            <li>Sistema DUOC Finance em produção estável na Vercel;</li>
            <li>Relatório Formal de UAT com 100% dos apontamentos saneados;</li>
            <li><strong>Termo de Aceite Formal assinado pela cliente Maria Beatryz</strong>;</li>
            <li>Manual Operacional do Usuário publicado no portal MkDocs;</li>
            <li>Matriz de Rastreabilidade Bidirecional completa (<em>Forward/Backward</em>);</li>
            <li>Documento oficial e vídeo da <a href="../entregas/entrega-4.md">Entrega 4</a>;</li>
            <li>Relatório de Retrospectiva Final e Lições Aprendidas homologado.</li>
          </ul>
        </div>
      </div>
    </div>

---

## Detalhamento Temporal Semana a Semana (Semanas 01 a 13)

Navegue pelas abas abaixo para inspecionar o planejamento operacional estruturado de cada período acadêmico, detalhado semana a semana com escopo RAD, atividades metodológicas, entregáveis, responsáveis e status:

=== "Unidade 1: Ciclo 0 — Concepção & Fundação (Semanas 01 a 03)"

    > **Período:** 11/08/2026 a 08/09/2026 • **Marco:** Ponto de Controle 1 (Concluído)  
    > **Foco:** Imersão no negócio, diagnóstico de processos, delimitação do MVP, especificação das CARs, governança e implantação da plataforma Docs as Code.

    <div class="week-card status-concluido">
      <div class="week-card-header">
        <div class="week-card-header-left">
          <span class="week-card-title status-concluido">Semana 01</span>
          <span class="week-card-period">11/08 a 18/08/2026</span>
        </div>
        <span class="status-pill concluido">Concluído</span>
      </div>
      <div class="week-card-meta">
        <div class="week-meta-item">
          <span class="week-meta-label">Ciclo RAD</span>
          <span class="week-meta-value">Ciclo 0: Concepção & Fundação</span>
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
        <span class="status-pill concluido">Concluído</span>
      </div>
      <div class="week-card-meta">
        <div class="week-meta-item">
          <span class="week-meta-label">Ciclo RAD</span>
          <span class="week-meta-value">Ciclo 0: Concepção & Fundação</span>
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
            <li><strong>Contato exploratório preliminar com Maria Beatryz (19/08):</strong> alinhamento de agenda e contextualização prévia das rotinas da empresa;</li>
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
        <span class="status-pill concluido">Concluído</span>
      </div>
      <div class="week-card-meta">
        <div class="week-meta-item">
          <span class="week-meta-label">Ciclo RAD</span>
          <span class="week-meta-value">Ciclo 0: Concepção & Fundação</span>
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
            <li>Realização da <strong>Reunião 01 Oficial (05/09/2026)</strong> de Elicitação de Escopo e MVP (<a href="../atas/index.md">Ver Ata 01</a>);</li>
            <li>Realização da <strong>Reunião 02 Oficial (07/09/2026)</strong> de Alinhamento Metodológico e ESW (<a href="../atas/index.md">Ver Ata 02</a>);</li>
            <li>Formalização do Rich Picture v2 sistêmico com delimitação das zonas AS-IS e TO-BE;</li>
            <li>Elaboração do Diagrama de Ishikawa 4M (Método, Mão de Obra, Máquina e Meio Ambiente);</li>
            <li>Mapeamento de Stakeholders (Matriz Poder x Interesse) e Perfis de Usuários (IHC);</li>
            <li>Purificação dos Objetivos Específicos e definição preliminar de CAR-01 a CAR-08 e CAR-09 a CAR-12;</li>
            <li>Calibração do <em>Mixer Board</em> (RAD) e formulação da Estratégia de ESW;</li>
            <li>Definição da governança da equipe, Matriz RACI, Matriz de Comunicação e fluxo DoR/DoD;</li>
            <li>Configuração completa do portal <em>Docs as Code</em> (MkDocs Material, busca client-side e automação via GitHub Actions);</li>
            <li>Gravação do vídeo oficial e fechamento do <strong>Ponto de Controle 1 em 08/09/2026</strong>.</li>
          </ul>
        </div>
        <div>
          <div class="week-section-title">Entregáveis e Artefatos Gerados</div>
          <ul>
            <li>Portal MkDocs publicado no GitHub Pages com 13 capítulos estruturados;</li>
            <li>Páginas oficiais das Atas de Reuniões 01 e 02;</li>
            <li>Painel de Entregas (Entrega 1 completa e templates das Entregas 2 a 4);</li>
            <li>Vídeo oficial da Entrega 1 gravado e indexado (<a href="../entregas/entrega-1.md">Ver Entrega 1</a>).</li>
          </ul>
        </div>
      </div>
    </div>

=== "Unidade 2: Incremento 1 — Design do Usuário & Prototipagem (Semanas 04 a 07)"

    > **Período:** 15/09/2026 a 15/10/2026 • **Marco:** Ponto de Controle 2 (Em Desenvolvimento)  
    > **Foco:** Engenharia de Requisitos aprofundada, base visual no Figma, estabelecimento ágil dos designs de interface no Frontend (React SPA), sessões de validação participativa com a cliente, priorização MoSCoW, modelagem de dados (DER) e atendimento estrito ao DoR antes de codificar a lógica por trás.

    <div class="week-card status-andamento">
      <div class="week-card-header">
        <div class="week-card-header-left">
          <span class="week-card-title">Semana 04</span>
          <span class="week-card-period">15/09 a 22/09/2026</span>
        </div>
        <span class="status-pill andamento">Em Andamento</span>
      </div>
      <div class="week-card-meta">
        <div class="week-meta-item">
          <span class="week-meta-label">Ciclo RAD</span>
          <span class="week-meta-value">Incremento 1: Design do Usuário</span>
        </div>
        <div class="week-meta-item">
          <span class="week-meta-label">Responsáveis Principais</span>
          <span class="week-meta-value">Eric Araújo, Carlos Gabriel, Giovana Ferreira</span>
        </div>
      </div>
      <div class="week-card-grid">
        <div>
          <div class="week-section-title">Atividades Planejadas e Técnicas de ER</div>
          <ul>
            <li>Elicitação aprofundada: <strong>Reunião 03 com Maria Beatryz (18/09/2026)</strong> — Entrevista semiestruturada sobre regras de RVT, adiantamentos e fechamento quinzenal de diaristas;</li>
            <li>Validação preliminar dos primeiros wireframes conceituais de telas móveis de campo com a cliente;</li>
            <li>Análise documental minuciosa das planilhas sintéticas de despesas e adiantamentos de campo;</li>
            <li>Construção de Personas representativas e cenários contextuais de uso de campo e escritório;</li>
            <li>Definição do escopo técnico preliminar das integrações com BIM e Slack (CAR-11, CAR-12).</li>
          </ul>
        </div>
        <div>
          <div class="week-section-title">Entregáveis Esperados</div>
          <ul>
            <li>Transcrição e Ata da Reunião 03 registrada;</li>
            <li>Wireframes conceituais de telas móveis de canteiro;</li>
            <li>Matriz de Personas e Cenários contextuais de IHC;</li>
            <li>Glossário de termos de domínio da construção civil;</li>
            <li>Nota técnica preliminar de escopo das integrações BIM/Slack.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="week-card status-planejado">
      <div class="week-card-header">
        <div class="week-card-header-left">
          <span class="week-card-title">Semana 05</span>
          <span class="week-card-period">23/09 a 29/09/2026</span>
        </div>
        <span class="status-pill planejado">Planejado</span>
      </div>
      <div class="week-card-meta">
        <div class="week-meta-item">
          <span class="week-meta-label">Ciclo RAD</span>
          <span class="week-meta-value">Incremento 1: Design do Usuário</span>
        </div>
        <div class="week-meta-item">
          <span class="week-meta-label">Responsáveis Principais</span>
          <span class="week-meta-value">Matheus Ribeiro, Paulo Nery, Matheus Camargo</span>
        </div>
      </div>
      <div class="week-card-grid">
        <div>
          <div class="week-section-title">Atividades Planejadas e Técnicas de ER</div>
          <ul>
            <li>Levantamento e especificação rigorosa de Requisitos Funcionais (RF) e Não-Funcionais (RNF) sob o framework <strong>FURPS+</strong>;</li>
            <li>Formulação formal dos acordos de trabalho: <strong>DoR (Definition of Ready)</strong> como portão de entrada para implementação de lógica e persistência e <strong>DoD (Definition of Done)</strong> como portão de saída;</li>
            <li>Definição dos requisitos arquiteturais de segurança e privacidade (LGPD, papéis RBAC preliminares);</li>
            <li>Início da prototipagem: concepção da base visual no Figma (Design System, paleta de cores e tokens) e estruturação dos componentes base de interface no Frontend (React SPA / Tailwind CSS).</li>
          </ul>
        </div>
        <div>
          <div class="week-section-title">Entregáveis Esperados</div>
          <ul>
            <li>Especificação de Requisitos no padrão FURPS+ formalizada;</li>
            <li>Guia formal de DoR e DoD aprovado e indexado (<a href="../dor-dod/index.md">Ver Capítulo 9</a>);</li>
            <li>Catálogo de Requisitos de Segurança e Conformidade LGPD;</li>
            <li>Design System base no Figma e componentes UI no Frontend.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="week-card status-planejado">
      <div class="week-card-header">
        <div class="week-card-header-left">
          <span class="week-card-title">Semana 06</span>
          <span class="week-card-period">30/09 a 07/10/2026</span>
        </div>
        <span class="status-pill planejado">Planejado</span>
      </div>
      <div class="week-card-meta">
        <div class="week-meta-item">
          <span class="week-meta-label">Ciclo RAD</span>
          <span class="week-meta-value">Incremento 1: Validação & Refinamento</span>
        </div>
        <div class="week-meta-item">
          <span class="week-meta-label">Responsáveis Principais</span>
          <span class="week-meta-value">Gustavo, Gabriel, Eric Araújo, Maria Beatryz</span>
        </div>
      </div>
      <div class="week-card-grid">
        <div>
          <div class="week-section-title">Atividades Planejadas e Técnicas de ER</div>
          <ul>
            <li>Estabelecimento dos designs de tela de Apontamento Móvel (RVT) e Gestão Cadastral (<a href="../visao-produto/capitulo-2/index.md#car-01">CAR-01</a> e <a href="../visao-produto/capitulo-2/index.md#car-02">CAR-02</a>) diretamente no Frontend com dados mockados, guiados pela base do Figma;</li>
            <li><strong>Sessão Formal de Validação Sociotécnica Invertida (Reunião 04 em 02/10/2026):</strong> Maria Beatryz assume o controle navegando pelas telas no Frontend via Google Meet para homologação de usabilidade antes de qualquer código de lógica e persistência;</li>
            <li>Registro imediato de ajustes de IHC e homologação formal das interfaces;</li>
            <li>Decomposição dos requisitos em Histórias de Usuário no padrão <strong>INVEST</strong>;</li>
            <li>Redação de critérios de aceitação no formato BDD/Gherkin (<em>Dado / Quando / Então</em>);</li>
            <li>Priorização do Backlog usando <strong>MoSCoW</strong> (Must, Should, Could, Won't) e matriz Valor vs. Complexidade;</li>
            <li><strong>Atendimento formal ao DoR do Incremento 1</strong> liberando as demandas para implementação da lógica e banco.</li>
          </ul>
        </div>
        <div>
          <div class="week-section-title">Entregáveis Esperados</div>
          <ul>
            <li>Ata da Reunião 04 com métricas de validação sociotécnica registradas;</li>
            <li>Telas do Incremento 1 implementadas no Frontend e homologadas pela cliente;</li>
            <li>Product Backlog priorizado e cadastrado no GitHub Projects #119;</li>
            <li>Histórias de Usuário INVEST com critérios BDD formalizados;</li>
            <li>Relatório de DoR Atendido para o Incremento 1.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="week-card status-planejado">
      <div class="week-card-header">
        <div class="week-card-header-left">
          <span class="week-card-title">Semana 07</span>
          <span class="week-card-period">08/10 a 15/10/2026</span>
        </div>
        <span class="status-pill planejado">Planejado</span>
      </div>
      <div class="week-card-meta">
        <div class="week-meta-item">
          <span class="week-meta-label">Ciclo RAD</span>
          <span class="week-meta-value">Incremento 1: Modelagem & Setup</span>
        </div>
        <div class="week-meta-item">
          <span class="week-meta-label">Responsáveis Principais</span>
          <span class="week-meta-value">Matheus Ribeiro, Paulo Nery, Equipe Cascata Ágil</span>
        </div>
      </div>
      <div class="week-card-grid">
        <div>
          <div class="week-section-title">Atividades Planejadas e Técnicas de ER</div>
          <ul>
            <li>Modelagem Conceitual de Dados (DER / Supabase) cobrindo colaboradores CLT, diaristas, contratos de obras e despesas de campo;</li>
            <li>Setup do repositório da aplicação (Next.js/React + Supabase) e pipeline CI/CD na Vercel com carga de dados sintéticos;</li>
            <li>Início da implementação da lógica de backend por trás das telas validadas: regras de cadastro unificado (<a href="../visao-produto/capitulo-2/index.md#car-01">CAR-01</a>) e autenticação RBAC base (<a href="../visao-produto/capitulo-2/index.md#car-07">CAR-07</a>);</li>
            <li>Consolidação da documentação da Unidade 2 no MkDocs e gravação do vídeo do <strong>Ponto de Controle 2 (fechamento em 15/10/2026)</strong>.</li>
          </ul>
        </div>
        <div>
          <div class="week-section-title">Entregáveis Esperados</div>
          <ul>
            <li>Diagrama Entidade-Relacionamento (DER) homologado;</li>
            <li>Repositório de código configurado com pipeline na Vercel;</li>
            <li>Documento oficial da Entrega 2 e vídeo do Ponto de Controle 2 publicado (<a href="../entregas/entrega-2.md">Ver Entrega 2</a>).</li>
          </ul>
        </div>
      </div>
    </div>

=== "Unidade 3: Incrementos 2 e 3 — Motor Financeiro & Dashboards (Semanas 08 a 11)"

    > **Período:** 20/10/2026 a 19/11/2026 • **Marco:** Ponto de Controle 3 (Planejado)  
    > **Foco:** Estabelecimento dos designs das telas financeiras no Frontend com base no Figma, validação com a cliente, construção antecipada da lógica do motor financeiro (CAR-03) e reembolsos (CAR-04) com folga técnica para regras complexas, apropriação de custos por contrato (CAR-05), dashboards (CAR-06), inspeções Fagan e rastreabilidade bidirecional.

    <div class="week-card status-planejado">
      <div class="week-card-header">
        <div class="week-card-header-left">
          <span class="week-card-title">Semana 08</span>
          <span class="week-card-period">20/10 a 27/10/2026</span>
        </div>
        <span class="status-pill planejado">Planejado</span>
      </div>
      <div class="week-card-meta">
        <div class="week-meta-item">
          <span class="week-meta-label">Ciclo RAD</span>
          <span class="week-meta-value">Incremento 2: Design & Prototipagem</span>
        </div>
        <div class="week-meta-item">
          <span class="week-meta-label">Responsáveis Principais</span>
          <span class="week-meta-value">Giovana Ferreira, Carlos Gabriel, Maria Beatryz</span>
        </div>
      </div>
      <div class="week-card-grid">
        <div>
          <div class="week-section-title">Atividades Planejadas e Técnicas de ER</div>
          <ul>
            <li>Abertura do Incremento 2: Estabelecimento dos designs das telas do <strong>Motor Financeiro (<a href="../visao-produto/capitulo-2/index.md#car-03">CAR-03</a>)</strong> e <strong>Prestação de Contas/Reembolsos (<a href="../visao-produto/capitulo-2/index.md#car-04">CAR-04</a>)</strong> diretamente no Frontend com base de referência no Figma;</li>
            <li>Desenho funcional dos fluxos de aprovação de diárias de campo, cálculo visual de adiantamentos e upload de comprovantes com dados simulados;</li>
            <li><strong>Sessão Formal de Validação Sociotécnica Invertida (Reunião 05 em 23/10/2026):</strong> Maria Beatryz navega pelas telas financeiras no Frontend via Google Meet, validando campos, layouts e regras visuais;</li>
            <li>Registro de apontamentos de IHC e <strong>homologação formal do DoR para o Incremento 2</strong>;</li>
            <li>Início da codificação da lógica de negócio e regras de cálculo do motor financeiro.</li>
          </ul>
        </div>
        <div>
          <div class="week-section-title">Entregáveis Esperados</div>
          <ul>
            <li>Ata da Reunião 05 com deliberações de regras financeiras registradas;</li>
            <li>Telas financeiras funcionais no Frontend homologadas com DoR atendido;</li>
            <li>Especificações de cálculo de diárias e adiantamentos formalizadas;</li>
            <li>Código inicial do módulo de regras financeiras.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="week-card status-planejado">
      <div class="week-card-header">
        <div class="week-card-header-left">
          <span class="week-card-title">Semana 09</span>
          <span class="week-card-period">28/10 a 04/11/2026</span>
        </div>
        <span class="status-pill planejado">Planejado</span>
      </div>
      <div class="week-card-meta">
        <div class="week-meta-item">
          <span class="week-meta-label">Ciclo RAD</span>
          <span class="week-meta-value">Incremento 2: Construção Rápida</span>
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
            <li><strong>Construção da Lógica do Motor Financeiro (<a href="../visao-produto/capitulo-2/index.md#car-03">CAR-03</a>):</strong> Codificação dos algoritmos de cálculo de fechamento quinzenal de diaristas, comissões contratuais simplificadas e apropriação de adiantamentos conectando as telas já validadas no Frontend;</li>
            <li><strong>Aplicação da Folga Técnica (buffer de 3 dias úteis):</strong> Período de reserva para validação aritmética fina e tratamento de exceções de cálculo em relação às planilhas reais da DUOC;</li>
            <li>Desenvolvimento da lógica do módulo de Prestação de Contas e Reembolsos (<a href="../visao-produto/capitulo-2/index.md#car-04">CAR-04</a>) com upload e conferência de cupons fiscais simulados;</li>
            <li>Criação de suíte de testes unitários automatizados para o motor de cálculo financeiro.</li>
          </ul>
        </div>
        <div>
          <div class="week-section-title">Entregáveis Esperados</div>
          <ul>
            <li><strong>Motor Financeiro (CAR-03) codificado e verificado aritmeticamente</strong>;</li>
            <li>Módulo de Reembolsos e Prestação de Contas (CAR-04) funcional;</li>
            <li>Testes unitários do núcleo de cálculo com 100% de aprovação.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="week-card status-planejado">
      <div class="week-card-header">
        <div class="week-card-header-left">
          <span class="week-card-title">Semana 10</span>
          <span class="week-card-period">05/11 a 11/11/2026</span>
        </div>
        <span class="status-pill planejado">Planejado</span>
      </div>
      <div class="week-card-meta">
        <div class="week-meta-item">
          <span class="week-meta-label">Ciclo RAD</span>
          <span class="week-meta-value">Incremento 2 & 3: Integração</span>
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
            <li>Conclusão e integração do motor financeiro e reembolsos à interface web;</li>
            <li>Implementação da <strong>Trilha de Auditoria (<a href="../visao-produto/capitulo-2/index.md#car-08">CAR-08</a>)</strong>: registro cronológico e imutável de todas as operações sensíveis (aprovações de folha, estornos e lançamentos);</li>
            <li>Refinamento dos papéis de acesso <strong>RBAC (<a href="../visao-produto/capitulo-2/index.md#car-07">CAR-07</a>)</strong> para segregação de privilégios (Sócio Administrador vs. Colaborador de Campo);</li>
            <li>Início da construção do módulo de <strong>Apropriação e Rastreabilidade de Custos por Contrato (<a href="../visao-produto/capitulo-2/index.md#car-05">CAR-05</a>)</strong>: rateio automático de despesas e mão de obra por obra.</li>
          </ul>
        </div>
        <div>
          <div class="week-section-title">Entregáveis Esperados</div>
          <ul>
            <li>Trilha de Auditoria (CAR-08) e permissões RBAC ativas;</li>
            <li>Módulo de rateio de despesas por contrato (CAR-05) em desenvolvimento;</li>
            <li>Pipeline de Integração Contínua (CI) atualizado na Vercel com dados sintéticos.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="week-card status-planejado">
      <div class="week-card-header">
        <div class="week-card-header-left">
          <span class="week-card-title">Semana 11</span>
          <span class="week-card-period">12/11 a 19/11/2026</span>
        </div>
        <span class="status-pill planejado">Planejado</span>
      </div>
      <div class="week-card-meta">
        <div class="week-meta-item">
          <span class="week-meta-label">Ciclo RAD</span>
          <span class="week-meta-value">Incremento 3: Dashboards & V&V</span>
        </div>
        <div class="week-meta-item">
          <span class="week-meta-label">Responsáveis Principais</span>
          <span class="week-meta-value">Equipe Cascata Ágil</span>
        </div>
      </div>
      <div class="week-card-grid">
        <div>
          <div class="week-section-title">Atividades Planejadas e Técnicas de ER</div>
          <ul>
            <li>Construção do <strong>Painel Analítico de Custo Apropriado e Desvio Orçamentário por Projeto (<a href="../visao-produto/capitulo-2/index.md#car-06">CAR-06</a>)</strong> com gráficos gerenciais de rentabilidade;</li>
            <li>Desenvolvimento dos conectores preliminares: consumo de presença de <em>auditor.ia</em> (<a href="../visao-produto/capitulo-2/index.md#car-09">CAR-09</a>) e importação/exportação CSV com ERPs legados (<a href="../visao-produto/capitulo-2/index.md#car-10">CAR-10</a>);</li>
            <li>Verificação de Software: Execução de inspeções estáticas de código e documentação por checklists (<strong>Inspeções Fagan</strong>);</li>
            <li>Estruturação e preenchimento da <strong>Matriz de Rastreabilidade Bidirecional</strong> (<em>Forward/Backward</em>);</li>
            <li>Deploy contínuo da solução completa integrada em ambiente de <strong>Staging na Vercel</strong>;</li>
            <li>Fechamento da documentação da Entrega 3 e gravação da apresentação do <strong>Ponto de Controle 3 em 19/11/2026</strong>.</li>
          </ul>
        </div>
        <div>
          <div class="week-section-title">Entregáveis Esperados</div>
          <ul>
            <li>Sistema DUOC Finance completo e funcional operando em Staging na Vercel;</li>
            <li>Painel Analítico de Custos por Contrato (CAR-06) operacional;</li>
            <li>Integrações CAR-09 e CAR-10 em ambiente de homologação;</li>
            <li>Relatório de Inspeção Fagan e testes automatizados aprovados;</li>
            <li>Matriz de Rastreabilidade Bidirecional preliminar;</li>
            <li>Documento e vídeo oficial da <a href="../entregas/entrega-3.md">Entrega 3</a> indexados.</li>
          </ul>
        </div>
      </div>
    </div>

=== "Unidade 4: Cutover, Estabilização, UAT e Aceite Formal (Semanas 12 e 13)"

    > **Período:** 20/11/2026 a 02/12/2026 • **Marco:** Ponto de Controle 4 (Planejado)  
    > **Foco:** Code freeze, sessão formal de UAT antecipada, janela dedicada de 3 dias para correção de defeitos pós-UAT, homologação final, assinatura do Termo de Aceite Formal, transição operacional (Cutover), manual do usuário e apresentação final.

    !!! note "Escopo Blindado da Fase de Cutover"
        A fase de Cutover não realiza construção de novos módulos funcionais. O motor financeiro, os dashboards gerenciais e as integrações foram totalmente construídos e verificados durante as Semanas 08 a 11. O Cutover destina-se exclusivamente a qualidade, testes de aceitação com a cliente, saneamento de defeitos e transição operacional segura.

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
          <span class="week-meta-value">Fase de Cutover: UAT & Correções</span>
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
            <li><strong>Code Freeze Operacional (20 a 23/11):</strong> Congelamento de novas funcionalidades no repositório; carga de massa de dados sintéticos para simulação realista no Staging;</li>
            <li><strong>Sessão Formal de Testes de Aceitação de Usuário — UAT (Reunião 06 em 24/11/2026):</strong> Sessão síncrona via Google Meet com Maria Beatryz executando roteiro de testes ponta a ponta (lançamento de RVT, conferência de diárias, aprovação de despesas e geração de relatórios de custo);</li>
            <li><strong>Janela Dedicada de Correção de Defeitos pós-UAT (25 a 27/11/2026 — Buffer de 3 Dias):</strong> Resolução prioritária de discrepâncias de cálculo, atritos de usabilidade ou defeitos reportados pela cliente na sessão de UAT, com execução de suíte de testes de regressão automatizados.</li>
          </ul>
        </div>
        <div>
          <div class="week-section-title">Entregáveis Esperados</div>
          <ul>
            <li>Relatório Preliminar de UAT com apontamentos registrados;</li>
            <li>Roteiro de testes de aceitação executado com a cliente parceira;</li>
            <li><strong>Correção integral de defeitos e divergências pós-UAT</strong>;</li>
            <li>Suíte de regressão automatizada validada sem falhas.</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="week-card status-planejado">
      <div class="week-card-header">
        <div class="week-card-header-left">
          <span class="week-card-title">Semana 13</span>
          <span class="week-card-period">28/11 a 02/12/2026</span>
        </div>
        <span class="status-pill planejado">Planejado</span>
      </div>
      <div class="week-card-meta">
        <div class="week-meta-item">
          <span class="week-meta-label">Ciclo RAD</span>
          <span class="week-meta-value">Fase de Cutover: Aceite & Transição</span>
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
            <li><strong>Validação Conclusiva e Aceite Formal (28/11/2026):</strong> Homologação definitiva com Maria Beatryz das correções realizadas e assinatura do <strong>Termo de Aceite Formal</strong> atestando atendimento pleno ao DoD;</li>
            <li><strong>Transição Operacional / Cutover (29 e 30/11/2026):</strong> Deploy da versão final de produção na Vercel com apontamento de rotas e publicação do <strong>Manual Operacional do Usuário</strong> no portal MkDocs;</li>
            <li>Sessão remota de capacitação da cliente parceira no uso do sistema;</li>
            <li>Ensaio geral (<em>dry-run</em>) da apresentação final perante a banca examinadora;</li>
            <li><strong>Ponto de Controle 4 — Apresentação Final da Disciplina (01/12/2026):</strong> Apresentação à banca do produto completo, Matriz de Rastreabilidade Bidirecional consolidada e vídeo da Entrega 4;</li>
            <li><strong>Retrospectiva Final e Lições Aprendidas (02/12/2026):</strong> Sessão interna da equipe Cascata Ágil para avaliação sociotécnica e encerramento.</li>
          </ul>
        </div>
        <div>
          <div class="week-section-title">Entregáveis Esperados</div>
          <ul>
            <li><strong>Termo de Aceite Formal assinado por Maria Beatryz</strong>;</li>
            <li>Sistema DUOC Finance em produção estável na Vercel;</li>
            <li>Manual Operacional do Usuário publicado no portal;</li>
            <li>Matriz de Rastreabilidade Bidirecional completa (<em>Forward/Backward</em>);</li>
            <li>Documento oficial e vídeo da <a href="../entregas/entrega-4.md">Entrega 4</a> indexados;</li>
            <li>Relatório de Retrospectiva Final e Lições Aprendidas homologado.</li>
          </ul>
        </div>
      </div>
    </div>

---

## Dinâmica de Atualização e Governança do Cronograma

O cronograma do DUOC Finance é um **artefato vivo** sujeito a refinamento contínuo. Sua governança respeita as seguintes diretrizes:

1. **Sincronização com o GitHub Projects:** O progresso diário de tarefas é monitorado no quadro kanban do GitHub Projects ([Acessar Projeto #119](https://github.com/orgs/mdsreq-fga-unb/projects/119/)), servindo de fonte de verdade para a atualização deste capítulo.
2. **Revisões de Marco Avaliativo:** Ao final de cada um dos 4 Pontos de Controle letivos, o cronograma é revisado e republicado para registrar desvios de esforço, horas incorridas e eventuais recalibrações de escopo negociadas com Maria Beatryz.
3. **Gestão de Riscos Operacionais e Acionamento de Folgas:** Caso ocorram impedimentos técnicos em regras financeiras ou reagendamentos com a cliente, o Product Owner aciona os buffers de contingência pactuados neste capítulo e no [Capítulo 7.3 — Processo de Validação](../interacao-cliente/index.md#73-processo-de-validacao-sociotecnica-e-homologacao-com-a-cliente).

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
| `1.6` | 19/09/2026 | Inclusão de tarefas para as integrações externas (CAR-09 a CAR-12: auditor.ia, ERP/planilhas, BIM, Slack) nas Semanas 04 e 12, lastreando as afirmações de interoperabilidade do Rich Picture no cronograma | Eric Araújo | |
| `1.7` | 19/09/2026 | Correção da referência ao Diagrama de Ishikawa: "6Ms" substituído por "4 categorias causais (adaptação do modelo 6M)", alinhando com as 4 dimensões efetivamente usadas em 1.4 | Paulo Nery | |
| `2.0` | 21/09/2026 | Reestruturação metodológica, arquitetural e visual integral do cronograma: desacoplamento dos marcos acadêmicos (PC1 a PC4) dos ciclos e incrementos RAD; distribuição das 8 CARs e integrações nos incrementos; estratégia de prototipagem evolutiva UI-First com base no Figma e validação de interfaces mockadas no Frontend antes da lógica de persistência (Supabase); antecipação do motor financeiro (CAR-03) e UAT com janela dedicada para correção de defeitos; inclusão de diagramas metodológicos com suporte nativo a temas claro e escuro; eliminação de conflitos de contraste cromático no calendário e reestruturação ergonômica das unidades e semanas em cards padronizados | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |