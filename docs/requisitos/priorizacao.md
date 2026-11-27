# Priorização e Escopo do Produto (Linha de Corte do MVP)

Este documento consolida o **modelo metodológico integrado de priorização e delimitação do escopo** do sistema ***DUOC Finance***. O método fundamenta-se no cruzamento analítico entre o **Valor de Negócio (VB)** e o **Esforço Técnico Consolidado (EC)**, orientando a linha de corte do **Produto Mínimo Viável (MVP)**.

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
    <span class="stat-label">Capacidade Líquida (Demanda: 266,5 h; margem: 3,5 h)</span>
  </div>
  <div class="stat-card stat-warn">
    <span class="stat-num">9 <small>RFs</small></span>
    <span class="stat-label">Backlog Evolutivo Pós-MVP</span>
  </div>
</div>

---

## Jornada demonstrável na Entrega 3

O recorte consolidado de **31 RFs** é o escopo planejado do MVP; ele **não representa, por si só, uma jornada financeira completa já entregue** na Unidade 3. Nesta entrega, a demonstração ponta a ponta disponível hoje começa no login e no controle de acesso por perfil (**RBAC**), passa pelo cadastro e pela operação móvel de RVT e alcança a submissão e a deliberação de reembolsos. A execução deverá ser feita em ambiente Docker local ou Staging, com PostgreSQL ativo, backend e frontend acessíveis e usuários sintéticos de teste previamente cadastrados.

Os dados usados nas demonstrações e nos testes são sintéticos ou de homologação, não representam dados reais de colaboradores da DUOC. Nomes, contratos, despesas e documentos mostrados pela interface devem ser tratados como dados fictícios. Quando uma tela usa dados sintéticos — como a interface administrativa de reembolsos — isso precisa permanecer identificado durante a apresentação e não deve ser interpretado como integração com a operação real.

| Parte da jornada | Situação na Unidade 3 | Evidência / condição de demonstração |
| :--- | :--- | :--- |
| Login, autenticação e RBAC | Disponível no Incremento 1 | Executar com perfis sintéticos; validar a navegação e a autorização das rotas em Docker/Staging. |
| Cadastro de colaboradores | Disponível no Incremento 1 | Demonstrar cadastro e edição com dados fictícios; o backend de colaboradores deve ser mantido integrado ao ambiente de demonstração. |
| Apontamento de campo / RVT | Disponível no Incremento 1 | Criar RVT com contrato, jornada, fotos/evidências e dados sintéticos em rede disponível. |
| Deliberação e retificação de apontamentos (`RF32`, `RF35`) | **Avançados no Incremento 2, ainda em desenvolvimento/validação** | Pode-se demonstrar o fluxo construído somente após confirmar no ambiente integrado que o backend, as regras de janela e a interface estão operacionais. |
| Reembolsos e adiantamentos | Em desenvolvimento no Incremento 2 | Pode-se demonstrar interface e rotas implementadas com dados sintéticos ou registros de homologação; adiantamento só entra na jornada conforme o vínculo do requisito examinado. |
| Fechamento financeiro (`RF05`, `RF06`) | Ainda depende do Ciclo 3 | Não faz parte da jornada demonstrável completa desta entrega. Prévia, homologação e bloqueio não devem ser apresentados como concluídos sem evidência integrada. |
| Apropriação de custos (`RF09`) | Ainda depende do Ciclo 3 | Não deve ser exibida como jornada concluída; aguarda o motor financeiro, fechamento homologado e backend necessário. |

!!! warning "Limite da entrega parcial"
    Deliberação/retificação de apontamentos (`RF32` e `RF35`) já avançaram no Incremento 2, mas precisam ser claramente distinguidas dos requisitos ainda não iniciados ou sem ciclo fechado. Fechamento (`RF05` e `RF06`) e apropriação de custos (`RF09`) ainda aguardam o desenvolvimento do Ciclo 3 e o backend de colaboradores no encadeamento necessário. Por isso, esta entrega não demonstra integralmente o fluxo cadastral, operacional e financeiro do MVP consolidado.

<div class="journey-list">
  <div class="journey-item">
    <div class="journey-dot">1</div>
    <h4 class="journey-title">Cadastro e Identificação</h4>
    <p class="journey-desc">Base cadastral única e validada de colaboradores, dados bancários e funções técnicas de campo.</p>
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
    <p class="journey-desc">Cálculo de diárias técnicas, prévias, deliberação de despesas e homologação bloqueada.</p>
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
    <p class="journey-desc">Vinculação direta de custos e despesas aos contratos vigentes, garantindo rastreabilidade contábil.</p>
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

<a id="8-6-avaliacao-do-valor-de-negocio"></a>
<a id="101-avaliacao-do-valor-de-negocio"></a>
<a id="avaliacao-do-valor-de-negocio"></a>
<a id="criterios-qualitativos-de-negocio"></a>
<a id="criterios-quantitativos-de-negocio"></a>
<a id="rubrica-de-julgamento-do-valor-de-negocio"></a>
## Avaliação do Valor de Negócio

A Engenharia de Requisitos orientada ao valor assegura que os esforços de modelagem, prototipação ágil (*UI-First*) e implementação concentrem-se prioritariamente nas funcionalidades que geram o mais alto retorno operacional e mitigam os maiores riscos institucionais da organização parceira.

Navegue pelas abas abaixo para consultar as diretrizes metodológicas do julgamento de valor:

=== "Escala de Valor (1 a 4)"

    Para tornar a avaliação auditável e comparável, o valor de cada requisito é expresso em uma **escala quantitativa de 1 a 4**. Não há classificação categórica adicional: a priorização decorre exclusivamente do cruzamento **Valor de Negócio × Esforço Técnico** na Matriz 4 × 4.

    | Pontuação | Nível de Valor | Interpretação e Impacto no Negócio | Diretriz Operacional para o MVP |
    | :---: | :---: | :--- | :--- |
    | **4** | **Muito alto**<br>*(Crítico)* | **Indispensável:** sem esta funcionalidade, o sistema torna-se operacionalmente inviável ou juridicamente vulnerável. Sua ausência paralisa o processo central ou impede a substituição das rotinas manuais prioritárias. | **Inclusão obrigatória no MVP.** Bloqueante para a primeira versão operacional. |
    | **3** | **Alto**<br>*(Importante)* | **Muito importante:** resolve atritos operacionais severos ou automatiza etapas de suporte direto ao fluxo principal. O produto ainda pode operar temporariamente sem ela mediante contorno manual assistido a curtíssimo prazo. | **Inclusão prioritária no MVP** para garantir sustentabilidade da rotina de trabalho. |
    | **2** | **Moderado**<br>*(Desejável)* | **Agrega valor e conveniência:** melhora a experiência do usuário ou oferece recursos analíticos avançados, mas sua ausência não degrada a execução dos fluxos financeiros e cadastrais essenciais. | **Inclusão condicionada à capacidade residual** ou postergada para o ciclo seguinte. |
    | **1** | **Baixo**<br>*(Postergável)* | **Não prioritário para a versão atual:** requisito reconhecido como valoroso para a maturidade corporativa futura, mas postergado por não atender às dores imediatas ou possuir melhor alternativa temporária. | **Fora do MVP.** Registrado formalmente no *roadmap* pós-implantação. |

=== "Dimensões da Rubrica (D1 a D4)"

    As notas de 1 a 4 são atribuídas à luz de quatro dimensões de julgamento operacional. As faixas de economia de horas são calculadas sobre a base de referência de **mais de 30 h/mês** de conferência manual da auxiliar-administradora:

    | Dimensão de Julgamento | **Nota 4** — Valor muito alto | **Nota 3** — Valor alto | **Nota 2** — Valor moderado | **Nota 1** — Valor baixo |
    | :--- | :--- | :--- | :--- | :--- |
    | **D1 — Impacto nos gargalos TR-01 a TR-04** | Sem o requisito, ao menos um fluxo TR-01 a TR-04 não se completa ou não pode ser conferido. | Automatiza ou dá visibilidade a etapa de suporte direto a um TR; o TR ainda se completa com contorno assistido. | Oferece análise avançada ou comparativa (histórico, alertas, previsto × realizado) sobre dado de um TR já atendido. | Sem vínculo direto com um TR; contornável pela fase piloto. |
    | **D2 — Economia de horas administrativas** | ≥ 25% da economia mensal estimada (≈ 8 h/mês ou mais). | De 10% a 25% (≈ 3 a 8 h/mês). | Inferior a 10% (< 3 h/mês) ou ganho apenas indireto. | Sem economia mensurável no primeiro ciclo. |
    | **D3 — Risco jurídico-trabalhista, fiscal e LGPD** | Ausência gera exposição direta e imediata: reembolso sem comprovante fiscal (RN06), acesso sem autenticação a dados pessoais e bancários (RN15, RN16) ou lançamento financeiro sem base cadastral válida (RN01, RN03). | Controle preventivo ou de rastreabilidade que reduz a probabilidade ou o impacto do risco (ex.: RN04, RN14, RN23). | Risco indireto ou residual, com controle compensatório existente (ex.: gravação de logs pelo backend, RN19). | Risco tratável por suporte técnico pontual. |
    | **D4 — Frequência de operação** | Contínua: a cada apontamento, transação ou acesso, ou pré-requisito de todos os perfis. | Recorrente: por solicitação, por competência ou por evento de cadastro. | Ocasional: análise gerencial periódica ou política de manutenção. | Eventual ou de exceção. |

=== "Gargalos Operacionais (TR-01 a TR-04)"

    A priorização ancora-se diretamente nos gargalos mapeados no [Cenário Atual](../visao-produto/cenario-atual.md#diagrama-de-causa-e-efeito-ishikawa):

    | Gargalo | Fluxo Operacional na DUOC | Capacidades de Software Vinculadas | Nível de Valor Predominante |
    | :---: | :--- | :--- | :---: |
    | **TR-01** | Envio e homologação do Relatório de Viagem Técnica (RVT) | Coleta móvel, fotos de evidência, deliberação e consulta pelo diarista | **4 / 3** (Crítico) |
    | **TR-02** | Submissão e conferência de comprovantes de despesa | Prestação de contas digital, adiantamentos e validação de cupons fiscais | **4 / 3** (Crítico) |
    | **TR-03** | Consolidação de diárias técnicas e comissões | Prévia automatizada, cálculo centesimal e homologação irrevogável | **4 / 2** (Crítico) |
    | **TR-04** | Apropriação de custo por contrato e centro de custo | Vinculação direta de despesas a obras e painel orçamentário | **3 / 2** (Importante) |
    | **Transversal** | Base cadastral unificada, autenticação e auditoria probatória | Cadastro validado por CPF, perfis RBAC, logs append-only e retenção CLT | **4 a 1** (Fundacional) |

=== "Regras de Consolidação & MVP"

    **Regra de Consolidação:** A nota final é definida pelo **maior grau atingido entre D1 e D3** (fatores bloqueantes de processo ou de exposição de risco). As dimensões **D2 e D4** funcionam como critérios de ajuste: confirmam a nota ou podem deslocá-la em no máximo 1 ponto quando convergirem.
    
    A linha de corte do MVP decorre diretamente do eixo de Valor de Negócio: **requisitos de valor 4 ou 3 integram o MVP** e requisitos de **valor 2 ou 1 integram o backlog de evolução pós-MVP**. O esforço técnico não elimina requisitos de alto valor; orienta a decomposição arquitetural.

    ```mermaid
    flowchart LR
        subgraph NIVEIS["Distribuição dos 40 RFs do Backlog por Valor de Negócio"]
            direction TB
            V4["<b>VALOR 4 — Muito alto (Crítico)</b><br>10 RFs (25,0%) · RF01, RF04, RF05, RF06, RF07, RF08, RF13, RF19, RF27, RF32"]
            V3["<b>VALOR 3 — Alto (Importante)</b><br>21 RFs (52,5%) · RF02, RF03, RF09, RF10, RF11, RF14, RF17, RF18, RF22, RF23, RF25, RF26, RF28, RF29, RF33, RF34, RF35, RF37, RF38, RF39, RF40"]
            V2["<b>VALOR 2 — Moderado (Desejável)</b><br>8 RFs (20,0%) · RF12, RF15, RF20, RF21, RF24, RF30, RF31, RF36"]
            V1["<b>VALOR 1 — Baixo (Postergável)</b><br>1 RF (2,5%) · RF16"]
            V4 ~~~ V3
            V3 ~~~ V2
            V2 ~~~ V1
        end

        subgraph DEST["Linha de Corte e Destinação"]
            direction TB
            MVP["<b>PRODUTO MÍNIMO VIÁVEL (MVP)</b><br>31 RFs selecionados (77,5% do Backlog)<br>Núcleo operacional completo para a DUOC"]
            POST["<b>BACKLOG DE EVOLUÇÃO PÓS-MVP</b><br>9 RFs postergados (22,5% do Backlog)<br>Ciclos posteriores e capacidade residual"]
            MVP ~~~ POST
        end

        V4 ==> MVP
        V3 ==> MVP
        V2 -.-> POST
        V1 -.-> POST

        classDef v4Class fill:#10b981,stroke:#059669,stroke-width:2px,color:#ffffff;
        classDef v3Class fill:#0284c7,stroke:#0369a1,stroke-width:2px,color:#ffffff;
        classDef v2Class fill:#f59e0b,stroke:#d97706,stroke-width:2px,color:#ffffff;
        classDef v1Class fill:#64748b,stroke:#475569,stroke-width:2px,color:#ffffff;
        classDef mvpClass fill:#047857,stroke:#065f46,stroke-width:3px,color:#ffffff;
        classDef postClass fill:#334155,stroke:#1e293b,stroke-width:2px,color:#ffffff;

        class V4 v4Class;
        class V3 v3Class;
        class V2 v2Class;
        class V1 v1Class;
        class MVP mvpClass;
        class POST postClass;
    ```

---

<a id="8-7-avaliacao-do-esforco-tecnico"></a>
<a id="102-avaliacao-do-esforco-tecnico"></a>
<a id="avaliacao-do-esforco-tecnico"></a>
<a id="escalas-tecnicas"></a>
<a id="esforco-de-implementacao-tempo-em-horas"></a>
<a id="complexidade-tecnica"></a>
<a id="lacuna-de-capacidade-da-equipe"></a>
<a id="formula-de-consolidacao-e-regra-de-conversao"></a>
## Avaliação do Esforço Técnico

O esforço técnico consolidado é composto por três dimensões mensuráveis, orientadas no mesmo sentido (onde **1 representa menor barreira e 4 representa maior desafio**):

Navegue pelas abas abaixo para consultar as escalas e a regra de conversão:

=== "Tempo de Implementação (Horas)"

    Mede o volume de trabalho em pessoa-hora para desenvolvimento de backend, frontend, persistência e testes automatizados:

    | Pontuação | Classificação | Faixa de Tempo Estimada | Descrição Operacional |
    | :---: | :--- | :---: | :--- |
    | **1** | Esforço baixo | Até 2 h | Alteração pontual, fluxo direto com tela simples e validação básica. |
    | **2** | Esforço moderado | Mais de 2 h até 8 h | Fluxo de complexidade média, com formulários, validações e persistência relacional padrão. |
    | **3** | Esforço alto | Mais de 8 h até 16 h | Fluxo abrangente, com múltiplas etapas, processamentos condicionais ou manipulação de arquivos/tokens. |
    | **4** | Esforço muito alto | Mais de 16 h | Rotina de alta densidade algorítmica, concorrência crítica, reconciliação em lote ou integração com incertezas. |

=== "Complexidade Arquitetural (CX)"

    Avalia as dependências arquiteturais, regras de validação cruzada e requisitos de integridade transacional:

    | Pontuação | Classificação | Interpretação Técnica |
    | :---: | :--- | :--- |
    | **1** | Baixa | Utiliza padrão CRUD conhecido, com poucas dependências locais e consultas simples. |
    | **2** | Moderada | Exige parametrizações de filtros, validações condicionais simples ou integridade entre tabelas relacionais. |
    | **3** | Alta | Possui regras de negócio estritas (imutabilidade, bloqueio retroativo, validações centesimais ou upload de mídia). |
    | **4** | Muito alta | Apresenta consistência transacional ACID mandatória, segregação RBAC em camadas, auditoria atômica ou integração externa legada. |

=== "Lacuna de Capacidade (LC)"

    Mede a distância entre o domínio tecnológico/conceitual necessário e a experiência prévia dos integrantes:

    | Pontuação | Classificação | Interpretação Técnica |
    | :---: | :--- | :--- |
    | **1** | Domínio pleno | A equipe domina plenamente os conceitos e as tecnologias envolvidas (React/TypeScript, NestJS, PostgreSQL). |
    | **2** | Conhecimento suficiente | A equipe possui conhecimento teórico e prático satisfatório, demandando apenas pesquisa pontual de padrões conhecidos. |
    | **3** | Aprendizagem relevante | A equipe precisa desenvolver conceitos específicos (ponto fixo centesimal, isolamento RBAC rígido e concorrência). |
    | **4** | Lacuna crítica | A equipe ainda não possui experiência prévia com o padrão, demandando investigação aprofundada ou prova de conceito. |

=== "Cálculo & Conversão Ordinal"

    Para consolidar as três dimensões em um indicador único e reprodutível, adota-se a média aritmética simples:

    <div class="formula-clean-card" style="margin: 0.75rem 0 1rem; max-width: 480px;">
      <div class="formula-math-display">
        <span>Média Consolidada = </span>
        <div class="formula-frac-box">
          <span class="frac-num">Horas (ES) + Complexidade (CX) + Lacuna (LC)</span>
          <span class="frac-den">3</span>
        </div>
      </div>
    </div>

    A média decimal resultante é convertida para a escala ordinal inteira de **1 a 4** da Matriz 4 × 4:

    | Intervalo da Média | Esforço Consolidado | Coluna na Matriz 4 × 4 | Interpretação Técnica |
    | :---: | :---: | :---: | :--- |
    | **1,00 a 1,49** | **1 — Baixo** | 1ª Coluna | Demanda técnica muito reduzida, tecnologia dominada e rápida entrega. |
    | **1,50 a 2,49** | **2 — Moderado** | 2ª Coluna | Demanda balanceada, regras claras e execução controlada no ciclo regular. |
    | **2,50 a 3,49** | **3 — Alto** | 3ª Coluna | Demanda substancial, regras de negócio densas e atenção especial a testes. |
    | **3,50 a 4,00** | **4 — Muito alto** | 4ª Coluna | Elevada incerteza, múltiplos componentes acoplados ou risco de retrabalho. |
---

<a id="indicadores-e-formulas-de-calculo"></a>
<a id="indicadores-e-formulas-de-calculo-do-template-oficial"></a>
## Como priorizamos: Fórmulas de Cálculo e Exemplo Demonstrativo

A consolidação analítica e a priorização relativa operam por meio de duas fórmulas diretas:

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
    <p class="formula-clean-desc">Média aritmética das notas técnicas de 1 a 4: Esforço em horas (ES), Complexidade arquitetural (CX) e Lacuna de capacidade (LC).</p>
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
    <p class="formula-clean-desc">Relação direta de custo-benefício entre Valor de Negócio (VB) e Esforço Consolidado (EC). Quanto maior o IP, maior o retorno por hora investida.</p>
  </div>
</div>

<div class="example-clean-box">
  <strong>Exemplo Prático Único Demonstrativo: <a href="../#rf06">RF06 — Homologar Fechamento Financeiro</a></strong>
  <p style="margin: 4px 0 6px 0;">Com Valor de Negócio <strong>VB = 4</strong> (crítico para encerrar a competência financeira), Esforço <strong>ES = 2</strong> (6 horas de desenvolvimento), Complexidade <strong>CX = 3</strong> (bloqueio compulsório de edição e carimbo UTC) e Lacuna <strong>LC = 2</strong> (equipe domina transações relacionais no PostgreSQL/Supabase):</p>
  <div style="font-family: var(--md-code-font-family, monospace); line-height: 1.5;">
    • <strong>EC</strong> = (2 + 3 + 2) ÷ 3 = 7 ÷ 3 = <strong>2,33</strong> ➔ <strong>Classe 2 (Esforço Moderado)</strong><br>
    • <strong>IP</strong> = 4 ÷ 2,33 = <strong>1,71</strong> ➔ Posicionado no <strong>Quadrante Q1 (Alta Prioridade · MVP)</strong>
  </div>
</div>

*(As notas individuais e cálculos detalhados dos 40 requisitos estão disponíveis diretamente nos cards do [Catálogo Integrado de Requisitos](index.md) na aba "Priorização & Score 4×4").*

---

<a id="linha-de-corte-do-mvp"></a>
<a id="8-9-matriz-4-x-4"></a>
<a id="8-9-matriz-4-x-4-valor-de-negocio-x-esforco-tecnico"></a>
<a id="104-matriz-4-x-4"></a>
<a id="matriz-4-x-4"></a>
<a id="matriz-4-x-4-valor-de-negocio-x-esforco-tecnico"></a>
<a id="3-matriz-4-x-4-dinamica-de-priorizacao"></a>
<a id="3-matriz-4-4-dinamica-de-priorizacao"></a>
<a id="definicao-dos-requisitos-funcionais-do-mvp"></a>
<a id="requisitos-de-granularidade-decompostos-rf37-a-rf40"></a>
## Composição Geral do Escopo do MVP

A delimitação do escopo consolida **31 Requisitos Funcionais no MVP (77,5%)** e **9 no Pós-MVP (22,5%)**. Utilize os botões abaixo para alternar entre a visão por **Características de Produto (CAR)** e a visão analítica pela **Matriz 4 × 4**:

<div class="scope-view-toggle-bar">
  <span class="scope-toggle-label">Selecione o formato de visualização:</span>
  <div class="scope-toggle-group">
    <button type="button" class="scope-toggle-btn active" id="btn-view-car" onclick="switchScopeView('car')">
      Por Característica (CAR)
    </button>
    <button type="button" class="scope-toggle-btn" id="btn-view-matrix" onclick="switchScopeView('matrix')">
      Matriz 4 × 4 (Valor × Esforço)
    </button>
  </div>
</div>

<!-- VIEW 1: COBERTURA POR CARACTERÍSTICA (CAR-01 a CAR-10) -->
<div id="scope-view-car">
  <p style="font-size: 0.78rem; color: var(--md-default-fg-color--light); margin: 0 0 8px 0;">
    <strong>Legenda:</strong> Verde preenchido = incluído no MVP; Cinza tracejado = backlog evolutivo pós-MVP. Clique em qualquer requisito para navegar diretamente ao seu card.
  </p>
  <div class="feat-cov-container">
    <div class="feat-cov-row">
      <span class="feat-cov-car">CAR-01</span>
      <span class="feat-cov-name">Gestão Cadastral Unificada</span>
      <div class="feat-cov-waf">
        <a href="../#rf01" class="feat-cov-sq on" title="RF01: Cadastrar colaborador (MVP)">RF01</a>
        <a href="../#rf02" class="feat-cov-sq on" title="RF02: Atualizar cadastro (MVP)">RF02</a>
        <a href="../#rf03" class="feat-cov-sq on" title="RF03: Movimentação funcional (MVP)">RF03</a>
        <a href="../#rf25" class="feat-cov-sq on" title="RF25: Tipo de contratação (MVP)">RF25</a>
        <a href="../#rf26" class="feat-cov-sq on" title="RF26: Histórico cadastral (MVP)">RF26</a>
      </div>
      <span class="feat-cov-ratio">5 / 5</span>
    </div>

    <div class="feat-cov-row">
      <span class="feat-cov-car">CAR-02</span>
      <span class="feat-cov-name">Apontamento de Campo (RVT)</span>
      <div class="feat-cov-waf">
        <a href="../#rf04" class="feat-cov-sq on" title="RF04: Submeter apontamento (MVP)">RF04</a>
        <a href="../#rf19" class="feat-cov-sq on" title="RF19: Consultar apontamentos (MVP)">RF19</a>
        <a href="../#rf22" class="feat-cov-sq on" title="RF22: Anexar evidências e GPS (MVP)">RF22</a>
        <a href="../#rf32" class="feat-cov-sq on" title="RF32: Deliberar apontamento (MVP)">RF32</a>
        <a href="../#rf35" class="feat-cov-sq on" title="RF35: Retificar apontamento (MVP)">RF35</a>
      </div>
      <span class="feat-cov-ratio">5 / 5</span>
    </div>

    <div class="feat-cov-row">
      <span class="feat-cov-car">CAR-03</span>
      <span class="feat-cov-name">Fechamento Financeiro</span>
      <div class="feat-cov-waf">
        <a href="../#rf05" class="feat-cov-sq on" title="RF05: Solicitar prévia (MVP)">RF05</a>
        <a href="../#rf06" class="feat-cov-sq on" title="RF06: Homologar fechamento (MVP)">RF06</a>
        <a href="../#rf27" class="feat-cov-sq on" title="RF27: Configurar diárias (MVP)">RF27</a>
        <a href="../#rf21" class="feat-cov-sq off" title="RF21: Estornar fechamento (Pós-MVP)">RF21</a>
      </div>
      <span class="feat-cov-ratio">3 / 4</span>
    </div>

    <div class="feat-cov-row">
      <span class="feat-cov-car">CAR-04</span>
      <span class="feat-cov-name">Prestação de Contas e Reembolsos</span>
      <div class="feat-cov-waf">
        <a href="../#rf07" class="feat-cov-sq on" title="RF07: Submeter reembolso (MVP)">RF07</a>
        <a href="../#rf08" class="feat-cov-sq on" title="RF08: Deliberar reembolso (MVP)">RF08</a>
        <a href="../#rf28" class="feat-cov-sq on" title="RF28: Submeter adiantamento (MVP)">RF28</a>
        <a href="../#rf29" class="feat-cov-sq on" title="RF29: Deliberar adiantamento (MVP)">RF29</a>
      </div>
      <span class="feat-cov-ratio">4 / 4</span>
    </div>

    <div class="feat-cov-row">
      <span class="feat-cov-car">CAR-05</span>
      <span class="feat-cov-name">Apropriação de Custos por Obra</span>
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
</div>

<!-- VIEW 2: MATRIZ 4x4 (VALOR X ESFORÇO) -->
<div id="scope-view-matrix" style="display: none;">
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
          <a href="../#rf02" class="quad-rf-btn btn-mvp" title="RF02: Atualizar cadastro | VB: 3 · EC: 1,67 (2) · IP: 1,80">RF02</a>
          <a href="../#rf03" class="quad-rf-btn btn-mvp" title="RF03: Movimentação funcional | VB: 3 · EC: 2,00 (2) · IP: 1,50">RF03</a>
          <a href="../#rf06" class="quad-rf-btn btn-mvp" title="RF06: Homologar fechamento | VB: 4 · EC: 2,33 (2) · IP: 1,71">RF06</a>
          <a href="../#rf07" class="quad-rf-btn btn-mvp" title="RF07: Submeter reembolso | VB: 4 · EC: 2,00 (2) · IP: 2,00">RF07</a>
          <a href="../#rf08" class="quad-rf-btn btn-mvp" title="RF08: Deliberar reembolso | VB: 4 · EC: 2,00 (2) · IP: 2,00">RF08</a>
          <a href="../#rf10" class="quad-rf-btn btn-mvp" title="RF10: Rastreabilidade custos | VB: 3 · EC: 2,00 (2) · IP: 1,50">RF10</a>
          <a href="../#rf11" class="quad-rf-btn btn-mvp" title="RF11: Filtrar indicadores | VB: 3 · EC: 2,00 (2) · IP: 1,50">RF11</a>
          <a href="../#rf13" class="quad-rf-btn btn-mvp" title="RF13: Efetuar login | VB: 4 · EC: 1,00 (1) · IP: 4,00">RF13</a>
          <a href="../#rf14" class="quad-rf-btn btn-mvp" title="RF14: Gerenciar perfis | VB: 3 · EC: 2,33 (2) · IP: 1,29">RF14</a>
          <a href="../#rf17" class="quad-rf-btn btn-mvp" title="RF17: Ativar / recuperar credenciais | VB: 3 · EC: 1,67 (2) · IP: 1,80">RF17</a>
          <a href="../#rf18" class="quad-rf-btn btn-mvp" title="RF18: Logout manual | VB: 3 · EC: 1,00 (1) · IP: 3,00">RF18</a>
          <a href="../#rf19" class="quad-rf-btn btn-mvp" title="RF19: Consultar apontamentos | VB: 4 · EC: 1,67 (2) · IP: 2,40">RF19</a>
          <a href="../#rf22" class="quad-rf-btn btn-mvp" title="RF22: Anexar evidências e GPS | VB: 3 · EC: 2,33 (2) · IP: 1,29">RF22</a>
          <a href="../#rf23" class="quad-rf-btn btn-mvp" title="RF23: Bloquear tentativas falhas | VB: 3 · EC: 1,67 (2) · IP: 1,80">RF23</a>
          <a href="../#rf25" class="quad-rf-btn btn-mvp" title="RF25: Tipo de contratação | VB: 3 · EC: 1,67 (2) · IP: 1,80">RF25</a>
          <a href="../#rf26" class="quad-rf-btn btn-mvp" title="RF26: Histórico cadastral | VB: 3 · EC: 2,33 (2) · IP: 1,29">RF26</a>
          <a href="../#rf27" class="quad-rf-btn btn-mvp" title="RF27: Configurar diárias técnicas | VB: 4 · EC: 1,67 (2) · IP: 2,40">RF27</a>
          <a href="../#rf28" class="quad-rf-btn btn-mvp" title="RF28: Submeter adiantamento | VB: 3 · EC: 2,00 (2) · IP: 1,50">RF28</a>
          <a href="../#rf29" class="quad-rf-btn btn-mvp" title="RF29: Deliberar adiantamento | VB: 3 · EC: 2,00 (2) · IP: 1,50">RF29</a>
          <a href="../#rf32" class="quad-rf-btn btn-mvp" title="RF32: Deliberar apontamento | VB: 4 · EC: 1,67 (2) · IP: 2,40">RF32</a>
          <a href="../#rf33" class="quad-rf-btn btn-mvp" title="RF33: Cadastrar contrato de obra | VB: 3 · EC: 1,67 (2) · IP: 1,80">RF33</a>
          <a href="../#rf34" class="quad-rf-btn btn-mvp" title="RF34: Cadastrar centro de custo | VB: 3 · EC: 1,67 (2) · IP: 1,80">RF34</a>
          <a href="../#rf35" class="quad-rf-btn btn-mvp" title="RF35: Retificar apontamento | VB: 3 · EC: 1,67 (2) · IP: 1,80">RF35</a>
          <a href="../#rf37" class="quad-rf-btn btn-mvp" title="RF37: Atualizar contrato de obra | VB: 3 · EC: 1,67 (2) · IP: 1,80">RF37</a>
          <a href="../#rf38" class="quad-rf-btn btn-mvp" title="RF38: Consultar contratos de obra | VB: 3 · EC: 1,00 (1) · IP: 3,00">RF38</a>
          <a href="../#rf39" class="quad-rf-btn btn-mvp" title="RF39: Atualizar centro de custo | VB: 3 · EC: 1,67 (2) · IP: 1,80">RF39</a>
          <a href="../#rf40" class="quad-rf-btn btn-mvp" title="RF40: Definir tetos de obra | VB: 3 · EC: 2,00 (2) · IP: 1,50">RF40</a>
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
          <a href="../#rf04" class="quad-rf-btn btn-mvp" title="RF04: Submeter apontamento | VB: 4 · EC: 3,00 (3) · IP: 1,33">RF04</a>
          <a href="../#rf05" class="quad-rf-btn btn-mvp" title="RF05: Solicitar prévia | VB: 4 · EC: 3,33 (3) · IP: 1,20">RF05</a>
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
</div>

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

<a id="8-12-evidencia-e-registro-da-validacao-do-mvp-com-o-cliente"></a>
<a id="107-evidencia-e-registro-da-validacao-do-mvp-com-o-cliente"></a>
<a id="evidencia-e-registro-da-validacao-do-mvp-com-o-cliente"></a>
<a id="tabela-de-classificacao-e-vinculacao-dos-rnfs-ao-mvp"></a>
## Registro da Priorização e Validação com a Cliente

A [Ata da Reunião 05](../governanca/atas/reuniao-05.md) registra a sessão de alinhamento com a equipe e a cliente realizada em 24/09/2026. Na ocasião, a cliente avaliou a metodologia de priorização apresentada e aprovou com ressalvas o escopo preliminar do MVP. A linha de corte oficial foi subsequentemente consolidada em **31 RFs no MVP (77,5%)** e **9 RFs no backlog evolutivo pós-MVP (22,5%)**, totalizando as 40 histórias de usuário (US01 a US40) após a incorporação de RF32 a RF35 e dos requisitos decompostos RF37 a RF40. O status formal de homologação definitiva dessa composição consolidada consta como **Pendente de validação** perante a cliente parceira, conforme discriminado a seguir:

| Tópico Deliberado | Decisão / Escopo Registrado | Status Perante a Cliente | Evidência Rastreável |
| :--- | :--- | :--- | :--- |
| **Linha de corte do MVP** | Escopo aprovado internamente com ressalvas na Reunião 05 e consolidado posteriormente em 31 RFs (inclusão de RF32 a RF35 e dos decompostos RF37 a RF40). | **Pendente de validação pela cliente** | [Ata 05, Decisão D5](../governanca/atas/reuniao-05.md#decisao-d5-mvp) e [Linha de Corte do MVP](#linha-de-corte-do-mvp). Confirmar se o corte de 31 RFs permanece a base do aceite e quais itens podem seguir no backlog sem alterar a homologação. |
| **Inclusão de indicadores (RF11)** | Incluir a filtragem de custos por obra no escopo prioritário do MVP. | **Pendente de validação** | [Ata 05, Decisão D1](../governanca/atas/reuniao-05.md#decisao-d1-rf11) e [Especificação do RF11](index.md#rf11). |
| **Tratamento do estorno (RF21)** | Retirar o estorno automático em lote do MVP e manter procedimento assistido após homologação. | **Pendente de validação pela cliente** | [Ata 05, Decisão D2](../governanca/atas/reuniao-05.md#decisao-d2-rf21) e [Especificação do RF21](index.md#rf21). Confirmar se correções pós-fechamento poderão exigir reabertura do lote autorizada pelo administrador financeiro, preservando a trilha de auditoria. |
| **Postergação do modo offline (RNF01)** | Postergar o funcionamento completo offline no canteiro para evolução posterior ao MVP. | **Pendente de validação pela cliente** | [Ata 05, Decisão D4](../governanca/atas/reuniao-05.md#decisao-d4-rnf01) e [Classificação dos RNFs](index.md#catalogo-nao-funcionais). Confirmar que o uso em campo, sem conexão, exigirá contorno manual ou operação tolerante até recuperar a rede; a ausência de sincronização automática não pode ser apresentada como concluída. |
| **Exportação de auditoria (RF16)** | Manter relatórios avançados de auditoria fora do escopo inicial do MVP. | **Pendente de validação** | [Ata 05, Decisão D3](../governanca/atas/reuniao-05.md#decisao-d3-rf16) e [Especificação do RF16](index.md#rf16). |
| **Segurança e infraestrutura** | Registrar como mandatórios no MVP os requisitos de login, RBAC e integridade. | **Pendente de validação** | [Ata 05, Decisão D6](../governanca/atas/reuniao-05.md#decisao-d6-seguranca-infraestrutura) e [Classificação dos RNFs](index.md#catalogo-nao-funcionais). |

---

## Revisão da capacidade e da margem do plano

A página registra demanda consolidada de **266,5 horas** sobre capacidade líquida de **270 horas**, resultando em margem nominal de apenas **3,5 horas** (≈ 1,3% da capacidade). Essa reserva é insuficiente para assumir, sem risco, correções pós-UAT, retrabalho de integração, estabilização dos requisitos ainda em desenvolvimento, preparação do ambiente de demonstração e validação formal com a cliente.

Antes da consolidação do Incremento 3, a equipe deve reservar capacidade explícita para:

* integração entre colaboradores, RVT, reembolsos, fechamento e apropriação;
* correções dos fluxos de `RF32` e `RF35` e do backend de colaboradores;
* implementação e testes de `RF05`, `RF06` e `RF09`;
* execução da UAT, correções priorizadas e registro do aceite;
* ajustes documentais derivados das decisões pendentes de corte, modo offline e estorno assistido.

Os itens devem ser reestados pela ordem de risco e, se necessário, o corte do MVP deve ser confirmado pela cliente antes de incorporar trabalho adicional fora da capacidade atual.

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 24/09/2026 | Estruturação inicial do método de priorização por Valor de Negócio (1 a 4) e Esforço Técnico (ES, CX, LC). | Matheus Ribeiro e Eric Araújo | Giovana Ferreira |
| `2.0` | 28/09/2026 | Consolidação da Matriz 4×4 cartesiana e definição do primeiro corte preliminar do MVP alinhado na Reunião 05. | Matheus Ribeiro | Eric Araújo |
| `3.0` | 10/11/2026 | Expansão atômica para 40 RFs (31 no MVP / 9 Pós-MVP) com desmembramento de contratos e centros de custo (RF37 a RF40) em mapeamento 1:1 com Histórias de Usuário. | Paulo Nery | Matheus Ribeiro |
| `4.0` | 16/11/2026 | Reformulação visual compacta: resumo estatístico contido, fluxo ponta a ponta, tabelas metodológicas de avaliação (VB e EC), alternador dinâmico de visualização (Características vs Matriz 4x4), fórmulas limpas e procedimento de retificação assistida. | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
| `4.1` | 27/11/2026 | Atualização da jornada demonstrável da Unidade 3, separação das dependências do Ciclo 3, registro das validações pendentes com a cliente e revisão da margem de 3,5 horas sobre a capacidade planejada. | Equipe Cascata Ágil | — |
