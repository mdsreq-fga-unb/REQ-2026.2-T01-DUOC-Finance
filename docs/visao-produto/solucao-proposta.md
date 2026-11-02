# Solução Proposta e Alinhamento Técnico

## Objetivo do Capítulo

Este capítulo formaliza a visão de produto do DUOC Finance. Ele descreve como a solução de software proposta atuará de forma ativa na mitigação das dores identificadas no cenário atual, delimitando de forma estrita o escopo do Produto Mínimo Viável (MVP) e mapeando o alinhamento das decisões de arquitetura e tecnologia com o valor de negócio esperado pelo cliente.

## Conjunto de Artefatos

A definição da proposta de solução apoia-se nas seguintes especificações estruturadas:

*   **Declaração de Posição e Objetivos do Produto:** Síntese estratégica no padrão canônico (Para/Que/Diferente de/Nosso produto) e metas operacionais desdobradas na Pirâmide de Abstração.
*   **Características do Produto (CARs):** Mapeamento e rastreabilidade modular em cards (CAR-01 a CAR-12) subordinados aos objetivos de negócio e vinculados ao MVP.
*   **Tecnologias a Serem Utilizadas e Arquitetura:** Definição fundamentada da stack tecnológica, banco de dados e arquitetura de implantação.
*   **Pesquisa de Mercado e Análise Competitiva:** Mapeamento de soluções similares de prateleira e posicionamento do diferencial da solução.
*   **Viabilidade da Proposta (Análise do MVP):** Avaliação pragmática do cronograma, competências técnicas e mitigação de riscos de projeto.
*   **Benefícios Esperados:** Detalhamento do valor agregado tangível para a organização e para os colaboradores finais.

---

<a id="21-e-22-objetivos-do-produto"></a>
## Objetivos do Produto

### Objetivo Geral do Produto

> **Centralizar o fluxo de informações sobre gestão administrativa da DUOC Arquitetura e Engenharia em um único sistema, assegurando a sustentabilidade de seus projetos sob contrato.**

---

### Objetivos Específicos (OE) do Produto

Os **Objetivos Específicos (OE1 a OE4)** decompõem o Objetivo Geral do produto em frentes operacionais e táticas. Cada card abaixo conta com visualização estruturada em abas alternáveis, consolidando visão geral, características associadas e rastreabilidade direta aos **Requisitos Funcionais Executores**:

<a id="oe1-padronizar-e-unificar-os-dados"></a>
<a id="oe1-padronizacao-e-unificacao-de-dados-operacionais"></a>
<details class="req-card oe-card oe-card-oe1" id="oe1-padronizar-e-unificar-os-dados" data-oe="OE1">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-oe req-pill-oe1">OE1 · Módulo 1 · Dados e Pessoal</span>
      <span class="req-pill req-pill-natureza">Operacional e Cadastral</span>
      <span class="req-pill req-pill-stats">12 RFs · 6 CARs</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">OE1 — Padronizar e Unificar os Dados</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="oe1-visao">Visão Geral &amp; Valor</button>
      <button type="button" class="req-tab-btn" data-target="oe1-cars">Características do Produto</button>
      <button type="button" class="req-tab-btn" data-target="oe1-rfs">Requisitos Funcionais</button>
    </div>

    <div class="req-tab-pane active" data-pane="oe1-visao">
      <div class="req-expanded-desc">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Definição Estratégica &amp; Valor de Negócio</span>
        </div>
        <div class="req-desc-box">
          <p class="req-desc-text"><strong>Natureza Estratégica:</strong> Operacional e Cadastral</p>
          <p class="req-desc-text"><strong>Valor de Negócio:</strong> Assegura unicidade e integridade aos dados corporativos da DUOC, eliminando redundâncias e retrabalho gerados por planilhas paralelas e envios em canais informais de comunicação.</p>
        </div>
      </div>
    </div>

    <div class="req-tab-pane" data-pane="oe1-cars">
      <div class="oe-rel-group">
        <span class="oe-rel-group-title">Características Principais (Módulo Nativo)</span>
        <div class="oe-rel-cluster">
          <a href="#car-01" class="req-tag req-tag-car"># CAR-01 · Gestão Cadastral Unificada de Pessoal ↗</a>
          <a href="#car-02" class="req-tag req-tag-car"># CAR-02 · Apontamento de Campo e Registros Técnicos de Obra (RVT) ↗</a>
        </div>
      </div>
      <div class="oe-rel-group">
        <span class="oe-rel-group-title">Características de Apoio Estruturante</span>
        <div class="oe-rel-cluster">
          <a href="#car-03" class="req-tag req-tag-car"># CAR-03 · Motor de Processamento e Fechamento Financeiro ↗</a>
          <a href="#car-05" class="req-tag req-tag-car"># CAR-05 · Apropriação e Rastreabilidade de Custos por Contrato ↗</a>
          <a href="#car-07" class="req-tag req-tag-car"># CAR-07 · Controle de Acesso Baseado em Papéis (RBAC) ↗</a>
        </div>
      </div>
      <div class="oe-rel-group">
        <span class="oe-rel-group-title">Integrações Externas do Módulo</span>
        <div class="oe-rel-cluster">
          <a href="#car-09" class="req-tag req-tag-car"># CAR-09 · Integração com FLIT e Presenças ↗</a>
          <a href="#car-10" class="req-tag req-tag-car"># CAR-10 · Interoperabilidade com ERPs e Planilhas Legadas ↗</a>
          <a href="#car-11" class="req-tag req-tag-car"># CAR-11 · Integração com Sistemas BIM ↗</a>
          <a href="#car-12" class="req-tag req-tag-car"># CAR-12 · Integração com Slack e E-mail ↗</a>
        </div>
      </div>
    </div>

    <div class="req-tab-pane" data-pane="oe1-rfs">
      <div class="oe-rel-group">
        <span class="oe-rel-group-title">12 Requisitos Funcionais Executores (Catálogo de Requisitos)</span>
        <div class="oe-rel-cluster">
          <a href="../requisitos/#rf01" class="req-tag req-tag-rf"># RF01 · Cadastrar colaborador ↗</a>
          <a href="../requisitos/#rf02" class="req-tag req-tag-rf"># RF02 · Atualizar cadastro de colaborador ↗</a>
          <a href="../requisitos/#rf03" class="req-tag req-tag-rf"># RF03 · Registrar movimentação funcional ↗</a>
          <a href="../requisitos/#rf04" class="req-tag req-tag-rf"># RF04 · Submeter apontamento de campo ↗</a>
          <a href="../requisitos/#rf19" class="req-tag req-tag-rf"># RF19 · Consultar apontamentos registrados ↗</a>
          <a href="../requisitos/#rf20" class="req-tag req-tag-rf"># RF20 · Importar presenças homologadas ↗</a>
          <a href="../requisitos/#rf22" class="req-tag req-tag-rf"># RF22 · Anexar evidências e geolocalização ao apontamento ↗</a>
          <a href="../requisitos/#rf25" class="req-tag req-tag-rf"># RF25 · Cadastrar tipo de contratação do colaborador ↗</a>
          <a href="../requisitos/#rf26" class="req-tag req-tag-rf"># RF26 · Consultar histórico de alterações cadastrais e bancárias ↗</a>
          <a href="../requisitos/#rf32" class="req-tag req-tag-rf"># RF32 · Deliberar apontamento de campo ↗</a>
          <a href="../requisitos/#rf35" class="req-tag req-tag-rf"># RF35 · Retificar apontamento de campo ↗</a>
          <a href="../requisitos/#rf36" class="req-tag req-tag-rf"># RF36 · Exportar dados consolidados em planilha ↗</a>
        </div>
      </div>
    </div>
  </div>
</details>

<a id="oe2-aumentar-a-eficiencia-administrativo-financeira"></a>
<a id="oe2"></a>
<details class="req-card oe-card oe-card-oe2" id="oe2-aumentar-a-eficiencia-administrativo-financeira" data-oe="OE2">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-oe req-pill-oe2">OE2 · Módulo 2 · Eficiência Administrativa</span>
      <span class="req-pill req-pill-natureza">Tática e Operacional</span>
      <span class="req-pill req-pill-stats">8 RFs · 5 CARs</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">OE2 — Aumentar a Eficiência Administrativo-Financeira</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="oe2-visao">Visão Geral &amp; Valor</button>
      <button type="button" class="req-tab-btn" data-target="oe2-cars">Características do Produto</button>
      <button type="button" class="req-tab-btn" data-target="oe2-rfs">Requisitos Funcionais</button>
    </div>

    <div class="req-tab-pane active" data-pane="oe2-visao">
      <div class="req-expanded-desc">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Definição Estratégica &amp; Valor de Negócio</span>
        </div>
        <div class="req-desc-box">
          <p class="req-desc-text"><strong>Natureza Estratégica:</strong> Tática e Operacional</p>
          <p class="req-desc-text"><strong>Valor de Negócio:</strong> Reduz o tempo de processamento e consolida rotinas financeiras e reembolsos com rapidez e exatidão, mitigando erros manuais e eliminando custos operacionais invisíveis.</p>
        </div>
      </div>
    </div>

    <div class="req-tab-pane" data-pane="oe2-cars">
      <div class="oe-rel-group">
        <span class="oe-rel-group-title">Características Principais (Módulo Nativo)</span>
        <div class="oe-rel-cluster">
          <a href="#car-03" class="req-tag req-tag-car"># CAR-03 · Motor de Processamento e Fechamento Financeiro ↗</a>
          <a href="#car-04" class="req-tag req-tag-car"># CAR-04 · Fluxo Digital de Prestação de Contas e Reembolsos ↗</a>
        </div>
      </div>
      <div class="oe-rel-group">
        <span class="oe-rel-group-title">Características de Apoio Estruturante</span>
        <div class="oe-rel-cluster">
          <a href="#car-01" class="req-tag req-tag-car"># CAR-01 · Gestão Cadastral Unificada de Pessoal ↗</a>
          <a href="#car-06" class="req-tag req-tag-car"># CAR-06 · Painel Analítico de Custo Apropriado e Desvio Orçamentário ↗</a>
          <a href="#car-08" class="req-tag req-tag-car"># CAR-08 · Trilha de Auditoria e Histórico de Operações Sensíveis ↗</a>
        </div>
      </div>
    </div>

    <div class="req-tab-pane" data-pane="oe2-rfs">
      <div class="oe-rel-group">
        <span class="oe-rel-group-title">8 Requisitos Funcionais Executores (Catálogo de Requisitos)</span>
        <div class="oe-rel-cluster">
          <a href="../requisitos/#rf05" class="req-tag req-tag-rf"># RF05 · Solicitar prévia de fechamento ↗</a>
          <a href="../requisitos/#rf06" class="req-tag req-tag-rf"># RF06 · Homologar fechamento financeiro ↗</a>
          <a href="../requisitos/#rf07" class="req-tag req-tag-rf"># RF07 · Submeter solicitação de reembolso ↗</a>
          <a href="../requisitos/#rf08" class="req-tag req-tag-rf"># RF08 · Deliberar solicitação de reembolso ↗</a>
          <a href="../requisitos/#rf21" class="req-tag req-tag-rf"># RF21 · Estornar fechamento financeiro ↗</a>
          <a href="../requisitos/#rf27" class="req-tag req-tag-rf"># RF27 · Configurar tabela de valores de diárias técnicas ↗</a>
          <a href="../requisitos/#rf28" class="req-tag req-tag-rf"># RF28 · Submeter solicitação de adiantamento operacional ↗</a>
          <a href="../requisitos/#rf29" class="req-tag req-tag-rf"># RF29 · Deliberar solicitação de adiantamento operacional ↗</a>
        </div>
      </div>
    </div>
  </div>
</details>

<a id="oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato"></a>
<a id="oe3"></a>
<details class="req-card oe-card oe-card-oe3" id="oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato" data-oe="OE3">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-oe req-pill-oe3">OE3 · Módulo 3 · Custos por Contrato</span>
      <span class="req-pill req-pill-natureza">Estratégica e Analítica</span>
      <span class="req-pill req-pill-stats">12 RFs · 4 CARs</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">OE3 — Transparecer as informações sobre os Custos por Contrato</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="oe3-visao">Visão Geral &amp; Valor</button>
      <button type="button" class="req-tab-btn" data-target="oe3-cars">Características do Produto</button>
      <button type="button" class="req-tab-btn" data-target="oe3-rfs">Requisitos Funcionais</button>
    </div>

    <div class="req-tab-pane active" data-pane="oe3-visao">
      <div class="req-expanded-desc">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Definição Estratégica &amp; Valor de Negócio</span>
        </div>
        <div class="req-desc-box">
          <p class="req-desc-text"><strong>Natureza Estratégica:</strong> Estratégica e Analítica</p>
          <p class="req-desc-text"><strong>Valor de Negócio:</strong> Prover inteligência analítica e visibilidade contínua sobre o custo de mão de obra apropriado e sua aderência ao orçamento previsto por obra, assegurando a sustentabilidade financeira de cada projeto sob contrato.</p>
        </div>
      </div>
    </div>

    <div class="req-tab-pane" data-pane="oe3-cars">
      <div class="oe-rel-group">
        <span class="oe-rel-group-title">Características Principais (Módulo Nativo)</span>
        <div class="oe-rel-cluster">
          <a href="#car-05" class="req-tag req-tag-car"># CAR-05 · Apropriação e Rastreabilidade de Custos por Contrato ↗</a>
          <a href="#car-06" class="req-tag req-tag-car"># CAR-06 · Painel Analítico de Custo Apropriado e Desvio Orçamentário por Projeto ↗</a>
        </div>
      </div>
      <div class="oe-rel-group">
        <span class="oe-rel-group-title">Características de Apoio Estruturante</span>
        <div class="oe-rel-cluster">
          <a href="#car-02" class="req-tag req-tag-car"># CAR-02 · Apontamento de Campo e Registros Técnicos de Obra (RVT) ↗</a>
          <a href="#car-04" class="req-tag req-tag-car"># CAR-04 · Fluxo Digital de Prestação de Contas e Reembolsos ↗</a>
        </div>
      </div>
    </div>

    <div class="req-tab-pane" data-pane="oe3-rfs">
      <div class="oe-rel-group">
        <span class="oe-rel-group-title">12 Requisitos Funcionais Executores (Catálogo de Requisitos)</span>
        <div class="oe-rel-cluster">
          <a href="../requisitos/#rf09" class="req-tag req-tag-rf"># RF09 · Apropriar custos operacionais ↗</a>
          <a href="../requisitos/#rf10" class="req-tag req-tag-rf"># RF10 · Consultar rastreabilidade de custos ↗</a>
          <a href="../requisitos/#rf11" class="req-tag req-tag-rf"># RF11 · Filtrar indicadores de custos ↗</a>
          <a href="../requisitos/#rf12" class="req-tag req-tag-rf"># RF12 · Monitorar execução orçamentária ↗</a>
          <a href="../requisitos/#rf30" class="req-tag req-tag-rf"># RF30 · Consultar comparativo histórico de custos entre contratos ↗</a>
          <a href="../requisitos/#rf31" class="req-tag req-tag-rf"># RF31 · Configurar alertas de execução orçamentária ↗</a>
          <a href="../requisitos/#rf33" class="req-tag req-tag-rf"># RF33 · Cadastrar contrato de obra ↗</a>
          <a href="../requisitos/#rf34" class="req-tag req-tag-rf"># RF34 · Cadastrar centro de custo de obra ↗</a>
          <a href="../requisitos/#rf37" class="req-tag req-tag-rf"># RF37 · Atualizar contrato de obra ↗</a>
          <a href="../requisitos/#rf38" class="req-tag req-tag-rf"># RF38 · Consultar contratos de obra ↗</a>
          <a href="../requisitos/#rf39" class="req-tag req-tag-rf"># RF39 · Atualizar centro de custo de obra ↗</a>
          <a href="../requisitos/#rf40" class="req-tag req-tag-rf"># RF40 · Definir tetos orçamentários de obra ↗</a>
        </div>
      </div>
    </div>
  </div>
</details>

<a id="oe4-garantir-seguranca-e-governanca-de-dados"></a>
<a id="oe4"></a>
<details class="req-card oe-card oe-card-oe4" id="oe4-garantir-seguranca-e-governanca-de-dados" data-oe="OE4">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-oe req-pill-oe4">OE4 · Módulo 4 · Governança e Segurança</span>
      <span class="req-pill req-pill-natureza">Governança Corporativa e Conformidade</span>
      <span class="req-pill req-pill-stats">8 RFs · 4 CARs</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">OE4 — Garantir Segurança e Governança de Dados</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <div class="req-tabs-nav" role="tablist">
      <button type="button" class="req-tab-btn active" data-target="oe4-visao">Visão Geral &amp; Valor</button>
      <button type="button" class="req-tab-btn" data-target="oe4-cars">Características do Produto</button>
      <button type="button" class="req-tab-btn" data-target="oe4-rfs">Requisitos Funcionais</button>
    </div>

    <div class="req-tab-pane active" data-pane="oe4-visao">
      <div class="req-expanded-desc">
        <div class="req-checklist-header">
          <span class="req-checklist-title">Definição Estratégica &amp; Valor de Negócio</span>
        </div>
        <div class="req-desc-box">
          <p class="req-desc-text"><strong>Natureza Estratégica:</strong> Governança Corporativa e Conformidade</p>
          <p class="req-desc-text"><strong>Valor de Negócio:</strong> Garante a integridade, confidencialidade e segregação de acesso sobre registros de pessoal e dados financeiros confidenciais, resguardando a privacidade e blindando a organização contra acessos não autorizados e inconformidades com a LGPD.</p>
        </div>
      </div>
    </div>

    <div class="req-tab-pane" data-pane="oe4-cars">
      <div class="oe-rel-group">
        <span class="oe-rel-group-title">Características Principais (Módulo Nativo)</span>
        <div class="oe-rel-cluster">
          <a href="#car-07" class="req-tag req-tag-car"># CAR-07 · Controle de Acesso Baseado em Papéis (RBAC) ↗</a>
          <a href="#car-08" class="req-tag req-tag-car"># CAR-08 · Trilha de Auditoria e Histórico de Operações Sensíveis ↗</a>
        </div>
      </div>
      <div class="oe-rel-group">
        <span class="oe-rel-group-title">Características de Apoio Estruturante</span>
        <div class="oe-rel-cluster">
          <a href="#car-01" class="req-tag req-tag-car"># CAR-01 · Gestão Cadastral Unificada de Pessoal ↗</a>
          <a href="#car-03" class="req-tag req-tag-car"># CAR-03 · Motor de Processamento e Fechamento Financeiro ↗</a>
        </div>
      </div>
    </div>

    <div class="req-tab-pane" data-pane="oe4-rfs">
      <div class="oe-rel-group">
        <span class="oe-rel-group-title">8 Requisitos Funcionais Executores (Catálogo de Requisitos)</span>
        <div class="oe-rel-cluster">
          <a href="../requisitos/#rf13" class="req-tag req-tag-rf"># RF13 · Efetuar login no sistema ↗</a>
          <a href="../requisitos/#rf14" class="req-tag req-tag-rf"># RF14 · Gerenciar perfis de acesso ↗</a>
          <a href="../requisitos/#rf15" class="req-tag req-tag-rf"># RF15 · Consultar trilha de auditoria ↗</a>
          <a href="../requisitos/#rf16" class="req-tag req-tag-rf"># RF16 · Exportar relatório de auditoria ↗</a>
          <a href="../requisitos/#rf17" class="req-tag req-tag-rf"># RF17 · Ativar acesso inicial e recuperar credenciais ↗</a>
          <a href="../requisitos/#rf18" class="req-tag req-tag-rf"># RF18 · Encerrar sessão manualmente ↗</a>
          <a href="../requisitos/#rf23" class="req-tag req-tag-rf"># RF23 · Bloquear acesso após tentativas falhas consecutivas ↗</a>
          <a href="../requisitos/#rf24" class="req-tag req-tag-rf"># RF24 · Impor renovação periódica de senhas ↗</a>
        </div>
      </div>
    </div>
  </div>
</details>

---

<a id="23-caracteristicas-do-produto-car"></a>
## Características do Produto (CAR)

As características do produto descrevem as capacidades funcionais do **DUOC Finance**, mapeadas diretamente aos Objetivos Específicos do negócio. Nem todas pertencem à primeira release: cada característica é classificada por fase de entrega conforme o catálogo de requisitos do [Catálogo de Requisitos](../requisitos/index.md).

| CAR | Fase | Base da classificação |
| :---: | :--- | :--- |
| CAR-01 | MVP | RF01, RF02, RF03, RF25 e RF26 no MVP |
| CAR-02 | MVP | RF04, RF19, RF22, RF32 e RF35 no MVP |
| CAR-03 | MVP (parcial) | RF05, RF06 e RF27 no MVP; RF21 na Fase 2 |
| CAR-04 | MVP | RF07, RF08, RF28 e RF29 no MVP |
| CAR-05 | MVP (parcial) | RF09, RF10 e RF33 no MVP; RF30 na Fase 2 |
| CAR-06 | MVP (parcial) | RF11 e RF34 no MVP; RF12 e RF31 na Fase 2 |
| CAR-07 | MVP (parcial) | RF13, RF14, RF17, RF18 e RF23 no MVP; RF24 na Fase 2 |
| CAR-08 | Fase 2 | RF15 e RF16 na Fase 2 (logs de auditoria persistidos no MVP via RNF15/RNF16) |
| CAR-09 | Fase 2 | RF20 na Fase 2 |
| CAR-10 | Fase 2 | RF36 na Fase 2 |
| CAR-11 | Fase 2 | Integração BIM/Orçamento adiada |
| CAR-12 | Fase 2 | Integração de mensageria corporativa adiada |

Cada card abaixo conta com identidade cromática por módulo, metadados Lumio UI e rastreabilidade bidirecional total com os Requisitos Funcionais:

### Módulo de Padronização e Unificação de Dados (Suporte a OE1)

<a id="car-01"></a>
<details class="req-card car-card car-card-oe1" id="car-01" data-car="CAR-01">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-car req-pill-car-oe1">Módulo 1 · Dados e Pessoal</span>
      <span class="req-pill req-pill-scope">MVP — Release 1</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">CAR-01 — Gestão Cadastral Unificada de Pessoal</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados Lumio UI -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>OE Principal</span>
        </span>
        <div class="req-lumio-val">
          <a href="#oe1-padronizar-e-unificar-os-dados" class="req-lumio-tag req-tag-oe"># OE1 · Padronizar e Unificar os Dados ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 15h-2v-6h2zm0-8h-2V7h2z"></path></svg>
          <span>Contribuição Secundária</span>
        </span>
        <div class="req-lumio-val">
          <a href="#oe2-aumentar-a-eficiencia-administrativo-financeira" class="req-lumio-tag req-tag-oe"># OE2 · Aumentar a Eficiência Administrativo-Financeira ↗</a>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Valor de Negócio &amp; Impacto Operacional</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text">Consolida uma base cadastral única e fidedigna para a DUOC, eliminando redundâncias cadastrais, divergências de informações e retrabalho decorrente de planilhas paralelas de RH e financeiro.</p>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Requisitos Funcionais Executores (Catálogo de Requisitos)</span>
      </div>
      <div class="car-rfs-cluster">
        <a href="../requisitos/#rf01" class="req-tag req-tag-rf"># RF01 · Cadastrar colaborador ↗</a>
        <a href="../requisitos/#rf02" class="req-tag req-tag-rf"># RF02 · Atualizar cadastro de colaborador ↗</a>
        <a href="../requisitos/#rf03" class="req-tag req-tag-rf"># RF03 · Registrar movimentação funcional ↗</a>
        <a href="../requisitos/#rf25" class="req-tag req-tag-rf"># RF25 · Cadastrar tipo de contratação do colaborador ↗</a>
        <a href="../requisitos/#rf26" class="req-tag req-tag-rf"># RF26 · Consultar histórico de alterações cadastrais e bancárias ↗</a>
      </div>
    </div>
  </div>
</details>

<a id="car-02"></a>
<details class="req-card car-card car-card-oe1" id="car-02" data-car="CAR-02">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-car req-pill-car-oe1">Módulo 1 · Dados e Pessoal</span>
      <span class="req-pill req-pill-scope">MVP — Release 1</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">CAR-02 — Apontamento de Campo e Registros Técnicos de Obra (RVT)</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados Lumio UI -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>OE Principal</span>
        </span>
        <div class="req-lumio-val">
          <a href="#oe1-padronizar-e-unificar-os-dados" class="req-lumio-tag req-tag-oe"># OE1 · Padronizar e Unificar os Dados ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 15h-2v-6h2zm0-8h-2V7h2z"></path></svg>
          <span>Contribuição Secundária</span>
        </span>
        <div class="req-lumio-val">
          <a href="#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato" class="req-lumio-tag req-tag-oe"># OE3 · Transparecer as informações sobre os Custos por Contrato ↗</a>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Valor de Negócio &amp; Impacto Operacional</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text">Padroniza e agiliza a captação de dados diretamente no canteiro de obras e em viagens técnicas através da aplicação web responsiva (Web App / PWA), erradicando a perda de anotações físicas em papel e mensagens dispersas no WhatsApp.</p>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Requisitos Funcionais Executores (Catálogo de Requisitos)</span>
      </div>
      <div class="car-rfs-cluster">
        <a href="../requisitos/#rf04" class="req-tag req-tag-rf"># RF04 · Submeter apontamento de campo ↗</a>
        <a href="../requisitos/#rf19" class="req-tag req-tag-rf"># RF19 · Consultar apontamentos registrados ↗</a>
        <a href="../requisitos/#rf22" class="req-tag req-tag-rf"># RF22 · Anexar evidências e geolocalização ao apontamento ↗</a>
        <a href="../requisitos/#rf32" class="req-tag req-tag-rf"># RF32 · Deliberar apontamento de campo ↗</a>
        <a href="../requisitos/#rf35" class="req-tag req-tag-rf"># RF35 · Retificar apontamento de campo ↗</a>
      </div>
    </div>
  </div>
</details>

### Módulo de Eficiência Administrativo-Financeira (Suporte a OE2)

<a id="car-03"></a>
<details class="req-card car-card car-card-oe2" id="car-03" data-car="CAR-03">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-car req-pill-car-oe2">Módulo 2 · Eficiência Administrativa</span>
      <span class="req-pill req-pill-scope">MVP — Release 1</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">CAR-03 — Motor de Processamento e Fechamento Financeiro</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados Lumio UI -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>OE Principal</span>
        </span>
        <div class="req-lumio-val">
          <a href="#oe2-aumentar-a-eficiencia-administrativo-financeira" class="req-lumio-tag req-tag-oe"># OE2 · Aumentar a Eficiência Administrativo-Financeira ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 15h-2v-6h2zm0-8h-2V7h2z"></path></svg>
          <span>Contribuição Secundária</span>
        </span>
        <div class="req-lumio-val">
          <a href="#oe4-garantir-seguranca-e-governanca-de-dados" class="req-lumio-tag req-tag-oe"># OE4 · Garantir Segurança e Governança de Dados ↗</a>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Valor de Negócio &amp; Impacto Operacional</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text">Reduz a conferência financeira mensal de dias para horas supervisionadas, apoiando o cálculo de custo de diaristas e de comissões contratuais simplificadas — sem substituir a folha de colaboradores CLT nem o cálculo de encargos (INSS, FGTS, IRRF) e provisões (13º, férias), que seguem nos sistemas contábeis já usados pela DUOC.</p>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Requisitos Funcionais Executores (Catálogo de Requisitos)</span>
      </div>
      <div class="car-rfs-cluster">
        <a href="../requisitos/#rf05" class="req-tag req-tag-rf"># RF05 · Solicitar prévia de fechamento ↗</a>
        <a href="../requisitos/#rf06" class="req-tag req-tag-rf"># RF06 · Homologar fechamento financeiro ↗</a>
        <a href="../requisitos/#rf21" class="req-tag req-tag-rf"># RF21 · Estornar fechamento financeiro ↗</a>
        <a href="../requisitos/#rf27" class="req-tag req-tag-rf"># RF27 · Configurar tabela de valores de diárias técnicas ↗</a>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Nota de Escopo</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text">A característica contempla também o estorno formal de fechamentos já homologados, mediante justificativa auditável, como único caminho para retificar lotes fechados (ver RF21 e RN08 no <a href="../requisitos/#rf21">Capítulo 8</a>).</p>
      </div>
    </div>
  </div>
</details>

<a id="car-04"></a>
<details class="req-card car-card car-card-oe2" id="car-04" data-car="CAR-04">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-car req-pill-car-oe2">Módulo 2 · Eficiência Administrativa</span>
      <span class="req-pill req-pill-scope">MVP — Release 1</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">CAR-04 — Fluxo Digital de Prestação de Contas e Reembolsos</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados Lumio UI -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>OE Principal</span>
        </span>
        <div class="req-lumio-val">
          <a href="#oe2-aumentar-a-eficiencia-administrativo-financeira" class="req-lumio-tag req-tag-oe"># OE2 · Aumentar a Eficiência Administrativo-Financeira ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 15h-2v-6h2zm0-8h-2V7h2z"></path></svg>
          <span>Contribuição Secundária</span>
        </span>
        <div class="req-lumio-val">
          <a href="#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato" class="req-lumio-tag req-tag-oe"># OE3 · Transparecer as informações sobre os Custos por Contrato ↗</a>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Valor de Negócio &amp; Impacto Operacional</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text">Confere celeridade e transparência ao fluxo de reembolsos operacionais, eliminando atritos com a equipe técnica, despesas sem comprovação e o extravio de cupons fiscais físicos.</p>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Requisitos Funcionais Executores (Catálogo de Requisitos)</span>
      </div>
      <div class="car-rfs-cluster">
        <a href="../requisitos/#rf07" class="req-tag req-tag-rf"># RF07 · Submeter solicitação de reembolso ↗</a>
        <a href="../requisitos/#rf08" class="req-tag req-tag-rf"># RF08 · Deliberar solicitação de reembolso ↗</a>
        <a href="../requisitos/#rf28" class="req-tag req-tag-rf"># RF28 · Submeter solicitação de adiantamento operacional ↗</a>
        <a href="../requisitos/#rf29" class="req-tag req-tag-rf"># RF29 · Deliberar solicitação de adiantamento operacional ↗</a>
      </div>
    </div>
  </div>
</details>

### Módulo de Inteligência de Custos por Contrato (Suporte a OE3)

<a id="car-05"></a>
<details class="req-card car-card car-card-oe3" id="car-05" data-car="CAR-05">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-car req-pill-car-oe3">Módulo 3 · Custos por Contrato</span>
      <span class="req-pill req-pill-scope">MVP — Release 1</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">CAR-05 — Apropriação e Rastreabilidade de Custos por Contrato</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados Lumio UI -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>OE Principal</span>
        </span>
        <div class="req-lumio-val">
          <a href="#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato" class="req-lumio-tag req-tag-oe"># OE3 · Transparecer as informações sobre os Custos por Contrato ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 15h-2v-6h2zm0-8h-2V7h2z"></path></svg>
          <span>Contribuição Secundária</span>
        </span>
        <div class="req-lumio-val">
          <a href="#oe1-padronizar-e-unificar-os-dados" class="req-lumio-tag req-tag-oe"># OE1 · Padronizar e Unificar os Dados ↗</a>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Valor de Negócio &amp; Impacto Operacional</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text">Elimina o rateio manual e arbitrário de custos, proporcionando rastreabilidade contábil exata de quanto cada projeto despendeu em mão de obra e despesas de campo diretas.</p>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Requisitos Funcionais Executores (Catálogo de Requisitos)</span>
      </div>
      <div class="car-rfs-cluster">
        <a href="../requisitos/#rf09" class="req-tag req-tag-rf"># RF09 · Apropriar custos operacionais ↗</a>
        <a href="../requisitos/#rf10" class="req-tag req-tag-rf"># RF10 · Consultar rastreabilidade de custos ↗</a>
        <a href="../requisitos/#rf30" class="req-tag req-tag-rf"># RF30 · Consultar comparativo histórico de custos entre contratos ↗</a>
        <a href="../requisitos/#rf33" class="req-tag req-tag-rf"># RF33 · Cadastrar contrato de obra ↗</a>
        <a href="../requisitos/#rf37" class="req-tag req-tag-rf"># RF37 · Atualizar contrato de obra ↗</a>
        <a href="../requisitos/#rf38" class="req-tag req-tag-rf"># RF38 · Consultar contratos de obra ↗</a>
      </div>
    </div>
  </div>
</details>

<a id="car-06"></a>
<details class="req-card car-card car-card-oe3" id="car-06" data-car="CAR-06">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-car req-pill-car-oe3">Módulo 3 · Custos por Contrato</span>
      <span class="req-pill req-pill-scope">MVP — Release 1</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">CAR-06 — Painel Analítico de Custo Apropriado e Desvio Orçamentário por Projeto</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados Lumio UI -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>OE Principal</span>
        </span>
        <div class="req-lumio-val">
          <a href="#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato" class="req-lumio-tag req-tag-oe"># OE3 · Transparecer as informações sobre os Custos por Contrato ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 15h-2v-6h2zm0-8h-2V7h2z"></path></svg>
          <span>Contribuição Secundária</span>
        </span>
        <div class="req-lumio-val">
          <a href="#oe2-aumentar-a-eficiencia-administrativo-financeira" class="req-lumio-tag req-tag-oe"># OE2 · Aumentar a Eficiência Administrativo-Financeira ↗</a>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Valor de Negócio &amp; Impacto Operacional</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text">Empodera os sócios e a diretoria com visibilidade executiva em tempo real sobre o custo real apurado de cada contrato, prevenindo estouros de orçamento e embasando a precificação de propostas futuras.</p>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Requisitos Funcionais Executores (Catálogo de Requisitos)</span>
      </div>
      <div class="car-rfs-cluster">
        <a href="../requisitos/#rf11" class="req-tag req-tag-rf"># RF11 · Filtrar indicadores de custos ↗</a>
        <a href="../requisitos/#rf12" class="req-tag req-tag-rf"># RF12 · Monitorar execução orçamentária ↗</a>
        <a href="../requisitos/#rf31" class="req-tag req-tag-rf"># RF31 · Configurar alertas de execução orçamentária ↗</a>
        <a href="../requisitos/#rf34" class="req-tag req-tag-rf"># RF34 · Cadastrar centro de custo de obra ↗</a>
        <a href="../requisitos/#rf39" class="req-tag req-tag-rf"># RF39 · Atualizar centro de custo de obra ↗</a>
        <a href="../requisitos/#rf40" class="req-tag req-tag-rf"># RF40 · Definir tetos orçamentários de obra ↗</a>
      </div>
    </div>
  </div>
</details>

### Módulo de Governança, Segurança e Rastreabilidade (Suporte a OE4)

<a id="car-07"></a>
<details class="req-card car-card car-card-oe4" id="car-07" data-car="CAR-07">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-car req-pill-car-oe4">Módulo 4 · Governança e Segurança</span>
      <span class="req-pill req-pill-scope">MVP — Release 1</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">CAR-07 — Controle de Acesso Baseado em Papéis (RBAC)</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados Lumio UI -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>OE Principal</span>
        </span>
        <div class="req-lumio-val">
          <a href="#oe4-garantir-seguranca-e-governanca-de-dados" class="req-lumio-tag req-tag-oe"># OE4 · Garantir Segurança e Governança de Dados ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 15h-2v-6h2zm0-8h-2V7h2z"></path></svg>
          <span>Contribuição Secundária</span>
        </span>
        <div class="req-lumio-val">
          <a href="#oe1-padronizar-e-unificar-os-dados" class="req-lumio-tag req-tag-oe"># OE1 · Padronizar e Unificar os Dados ↗</a>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Valor de Negócio &amp; Impacto Operacional</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text">Assegura a confidencialidade de dados financeiros e salariais estratégicos, resguardando a privacidade da equipe, fortalecendo a governança e blindando a organização contra acessos não autorizados.</p>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Requisitos Funcionais Executores (Catálogo de Requisitos)</span>
      </div>
      <div class="car-rfs-cluster">
        <a href="../requisitos/#rf13" class="req-tag req-tag-rf"># RF13 · Efetuar login no sistema ↗</a>
        <a href="../requisitos/#rf14" class="req-tag req-tag-rf"># RF14 · Gerenciar perfis de acesso ↗</a>
        <a href="../requisitos/#rf17" class="req-tag req-tag-rf"># RF17 · Ativar acesso inicial e recuperar credenciais ↗</a>
        <a href="../requisitos/#rf18" class="req-tag req-tag-rf"># RF18 · Encerrar sessão manualmente ↗</a>
        <a href="../requisitos/#rf23" class="req-tag req-tag-rf"># RF23 · Bloquear acesso após tentativas falhas consecutivas ↗</a>
        <a href="../requisitos/#rf24" class="req-tag req-tag-rf"># RF24 · Impor renovação periódica de senhas ↗</a>
      </div>
    </div>
  </div>
</details>

<a id="car-08"></a>
<details class="req-card car-card car-card-oe4" id="car-08" data-car="CAR-08">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-car req-pill-car-oe4">Módulo 4 · Governança e Segurança</span>
      <span class="req-pill req-pill-scope">MVP — Release 1</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">CAR-08 — Trilha de Auditoria e Histórico de Operações Sensíveis</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados Lumio UI -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>OE Principal</span>
        </span>
        <div class="req-lumio-val">
          <a href="#oe4-garantir-seguranca-e-governanca-de-dados" class="req-lumio-tag req-tag-oe"># OE4 · Garantir Segurança e Governança de Dados ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 15h-2v-6h2zm0-8h-2V7h2z"></path></svg>
          <span>Contribuição Secundária</span>
        </span>
        <div class="req-lumio-val">
          <a href="#oe2-aumentar-a-eficiencia-administrativo-financeira" class="req-lumio-tag req-tag-oe"># OE2 · Aumentar a Eficiência Administrativo-Financeira ↗</a>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Valor de Negócio &amp; Impacto Operacional</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text">Garante governança corporativa, conformidade e transparência organizacional contínua, assegurando que todas as ações financeiras e cadastrais relevantes possuam autoria e carimbo temporal inequívocos.</p>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Requisitos Funcionais Executores (Catálogo de Requisitos)</span>
      </div>
      <div class="car-rfs-cluster">
        <a href="../requisitos/#rf15" class="req-tag req-tag-rf"># RF15 · Consultar trilha de auditoria ↗</a>
        <a href="../requisitos/#rf16" class="req-tag req-tag-rf"># RF16 · Exportar relatório de auditoria ↗</a>
      </div>
    </div>
  </div>
</details>

### Módulo de Integrações Externas (Suporte a OE1)

<a id="car-09"></a>
<details class="req-card car-card car-card-oe1" id="car-09" data-car="CAR-09">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-car req-pill-car-oe1">Módulo 1 · Integrações Externas</span>
      <span class="req-pill req-pill-scope">Backlog Evolutivo (Pós-MVP)</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">CAR-09 — Integração com FLIT e Gestão de Presenças Homologadas</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados Lumio UI -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>OE Principal</span>
        </span>
        <div class="req-lumio-val">
          <a href="#oe1-padronizar-e-unificar-os-dados" class="req-lumio-tag req-tag-oe"># OE1 · Padronizar e Unificar os Dados ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 15h-2v-6h2zm0-8h-2V7h2z"></path></svg>
          <span>Contribuição Secundária</span>
        </span>
        <div class="req-lumio-val">
          <a href="#oe2-aumentar-a-eficiencia-administrativo-financeira" class="req-lumio-tag req-tag-oe"># OE2 · Aumentar a Eficiência Administrativo-Financeira ↗</a>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Valor de Negócio &amp; Impacto Operacional</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text">Evita a duplicação de um sistema de marcação de ponto já resolvido pela DUOC, consumindo os registros de presença homologados pelo FLIT (reconhecimento facial e ponto eletrônico) para apropriação financeira direta das horas aos contratos de obras (RF20).</p>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Requisitos Funcionais Executores (Catálogo de Requisitos)</span>
      </div>
      <div class="car-rfs-cluster">
        <a href="../requisitos/#rf20" class="req-tag req-tag-rf"># RF20 · Importar presenças homologadas ↗</a>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Decisão Arquitetural de Origem</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text">Ata da Reunião 02 e alinhamento de escopo na Ata da Reunião 05.</p>
      </div>
    </div>
  </div>
</details>

<a id="car-10"></a>
<details class="req-card car-card car-card-oe1" id="car-10" data-car="CAR-10">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-car req-pill-car-oe1">Módulo 1 · Integrações Externas</span>
      <span class="req-pill req-pill-scope">Backlog Evolutivo (Pós-MVP)</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">CAR-10 — Importação e Exportação de Dados com ERPs e Planilhas Legadas</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados Lumio UI -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>OE Principal</span>
        </span>
        <div class="req-lumio-val">
          <a href="#oe1-padronizar-e-unificar-os-dados" class="req-lumio-tag req-tag-oe"># OE1 · Padronizar e Unificar os Dados ↗</a>
        </div>
      </div>
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 15h-2v-6h2zm0-8h-2V7h2z"></path></svg>
          <span>Contribuição Secundária</span>
        </span>
        <div class="req-lumio-val">
          <a href="#oe2-aumentar-a-eficiencia-administrativo-financeira" class="req-lumio-tag req-tag-oe"># OE2 · Aumentar a Eficiência Administrativo-Financeira ↗</a>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Valor de Negócio &amp; Impacto Operacional</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text">Permite migrar dados históricos de planilhas de Excel e exportar relatórios em formato compatível (CSV/Excel) para os ERPs e ferramentas contábeis já usados pela DUOC, evitando redigitação manual e retrabalho na transição.</p>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Requisitos Funcionais Executores (Catálogo de Requisitos)</span>
      </div>
      <div class="car-rfs-cluster">
        <a href="../requisitos/#rf36" class="req-tag req-tag-rf"># RF36 · Exportar dados consolidados em planilha ↗</a>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Nota de Escopo</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text">Esta característica contempla a exportação operacional de dados consolidados em planilha (CSV/XLSX), especificada formalmente no Capítulo 8 como RF36. A funcionalidade foi alocada no backlog de evolução (Fase 2 / pós-MVP), preservando o compromisso de interoperabilidade com os sistemas contábeis da DUOC.</p>
      </div>
    </div>
  </div>
</details>

<a id="car-11"></a>
<details class="req-card car-card car-card-oe1" id="car-11" data-car="CAR-11">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-car req-pill-car-oe1">Módulo 1 · Integrações Externas</span>
      <span class="req-pill req-pill-scope">Fase 2 / Backlog Evolutivo</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">CAR-11 — Integração com Sistemas BIM (Revit/ArchiCAD)</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados Lumio UI -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>OE Principal</span>
        </span>
        <div class="req-lumio-val">
          <a href="#oe1-padronizar-e-unificar-os-dados" class="req-lumio-tag req-tag-oe"># OE1 · Padronizar e Unificar os Dados ↗</a>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Valor de Negócio &amp; Impacto Operacional</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text">Conecta o DUOC Finance à infraestrutura de modelagem BIM já em uso pela equipe de Arquitetura/Estrutural, evitando retrabalho de dados entre a coordenação técnica e a gestão administrativo-financeira.</p>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Requisitos Funcionais Executores (Catálogo de Requisitos)</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><em>Característica arquitetural planejada para a Fase 2 / Backlog Evolutivo (sem Requisitos Funcionais na release inicial do MVP).</em></p>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Nota de Escopo</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text">Característica arquitetural planejada para a Fase 2 (Design do Usuário / Evolutivo). Registra o compromisso de integração com modelos BIM para fases futuras, permanecendo sem requisito funcional (RF) ativo na primeira release do MVP.</p>
      </div>
    </div>
  </div>
</details>

<a id="car-12"></a>
<details class="req-card car-card car-card-oe1" id="car-12" data-car="CAR-12">
  <summary class="req-card-summary">
    <div class="req-summary-chips">
      <span class="req-pill req-pill-car req-pill-car-oe1">Módulo 1 · Integrações Externas</span>
      <span class="req-pill req-pill-scope">Fase 2 / Backlog Evolutivo</span>
    </div>
    <div class="req-title-row">
      <h3 class="req-card-title">CAR-12 — Integração com Slack e E-mail</h3>
      <span class="req-expand-icon" aria-hidden="true">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
      </span>
    </div>
  </summary>

  <div class="req-card-expansion">
    <!-- Metadados Lumio UI -->
    <div class="req-lumio-meta">
      <div class="req-lumio-row">
        <span class="req-lumio-label">
          <svg class="req-lumio-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
          <span>OE Principal</span>
        </span>
        <div class="req-lumio-val">
          <a href="#oe1-padronizar-e-unificar-os-dados" class="req-lumio-tag req-tag-oe"># OE1 · Padronizar e Unificar os Dados ↗</a>
        </div>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Valor de Negócio &amp; Impacto Operacional</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text">Conecta o DUOC Finance aos canais de comunicação já usados pela equipe (Slack e e-mail), evitando que decisões e alertas relevantes fiquem isolados de fluxos informais dispersos.</p>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Requisitos Funcionais Executores (Catálogo de Requisitos)</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text"><em>Característica arquitetural planejada para a Fase 2 / Backlog Evolutivo (sem Requisitos Funcionais na release inicial do MVP).</em></p>
      </div>
    </div>

    <div class="req-expanded-desc">
      <div class="req-checklist-header">
        <span class="req-checklist-title">Nota de Escopo</span>
      </div>
      <div class="req-desc-box">
        <p class="req-desc-text">Característica arquitetural planejada para a Fase 2 (Design do Usuário / Evolutivo). Registra o compromisso de integração com canais externos de comunicação (Slack e e-mail), permanecendo sem requisito funcional (RF) ativo na primeira release do MVP.</p>
      </div>
    </div>
  </div>
</details>

---
<a id="24-tecnologias-a-serem-utilizadas-e-arquitetura"></a>
## Tecnologias a Serem Utilizadas e Arquitetura

Nesta seção são formalizadas as decisões de arquitetura e a composição da stack tecnológica selecionada para a construção do **DUOC Finance**. Cada escolha técnica foi fundamentada em critérios objetivos de engenharia de software: integridade transacional de dados financeiros, segurança da informação (LGPD), ergonomia de uso em campo (*mobile-first*), domínio técnico prévio da equipe e viabilidade de manutenção no semestre letivo.

### Matriz Geral da Stack Tecnológica

| Camada / Função | Tecnologia | Ícone | Justificativa Sintética no DUOC Finance |
| :--- | :--- | :---: | :--- |
| **Banco de Dados Relacional** | PostgreSQL | :simple-postgresql: | Conformidade ACID rigorosa, integridade referencial financeira e suporte nativo a RLS |
| **Linguagem Base** | TypeScript | :simple-typescript: | Tipagem estática unificada no Frontend e Backend, reduzindo bugs de execução |
| **Plataforma Backend** | Node.js | :fontawesome-brands-node-js: | Ambiente assíncrono orientado a eventos de alto throughput para APIs RESTful |
| **Framework Backend** | NestJS | :simple-nestjs: | Arquitetura modular corporativa, injeção de dependências e controle granular RBAC |
| **BaaS & Nuvem** | Supabase | :simple-supabase: | PostgreSQL gerenciado, autenticação nativa, Row-Level Security e geração rápida de APIs |
| **Framework Frontend** | React SPA | :fontawesome-brands-react: | Aplicação SPA componentizada, reativa e de alta performance |
| **Ferramenta de Build** | Vite | :simple-vite: | Empacotamento moderno com Hot Module Replacement (HMR) ultrarrápido |
| **Framework CSS** | Tailwind CSS | :simple-tailwindcss: | Utility-first CSS com tokens de design e responsividade *mobile-first* |
| **Componentes de UI** | Shadcn UI | :simple-shadcnui: | Componentes acessíveis, consistentes e otimizados para dashboards financeiros densos |
| **Design & Prototipagem** | Figma e React SPA | :simple-figma: | Criação da base visual no Figma e estabelecimento ágil dos designs via frontend para homologação sociotécnica |
| **Conteinerização** | Docker | :fontawesome-brands-docker: | Padronização dos ambientes locais de desenvolvimento, homologação e CI |
| **Hospedagem Frontend** | Vercel | :simple-vercel: | CDN global de baixa latência integrada ao domínio institucional da DUOC |
| **Integração Contínua (CI/CD)** | GitHub Actions | :simple-githubactions: | Pipelines automatizadas para linting, validações de tipagem (`tsc`) e testes |
| **Documentação Viva** | MkDocs Material | | Abordagem *Docs as Code* versionada com suporte a Markdown, tabelas e Mermaid |

### Banco de Dados Relacional

<div class="tech-tags" markdown="1">
<span class="tech-tag">:simple-postgresql: PostgreSQL</span>
<span class="tech-tag">:simple-supabase: supabase</span>
</div>

* **Tipo:** Sistema de Gerenciamento de Banco de Dados Relacional (SGBD-R) de código aberto.
* **Justificativa Técnica e Integridade Financeira:** Aplicações de departamento pessoal e gestão financeira exigem estrita conformidade com as propriedades ACID (Atomicidade, Consistência, Isolamento e Durabilidade). A integridade referencial provida por chaves estrangeiras e *constraints* impede o registro de horas órfãs ou despesas desvinculadas de contratos válidos. 
  * Para o manuseio de valores monetários e cálculos de precisão, utiliza-se nativamente o tipo `NUMERIC`/`DECIMAL`, evitando problemas de arredondamento inerentes ao ponto flutuante.
* **Gerenciamento de Schema via Scripts de Migration:** O versionamento do banco de dados é automatizado por scripts de *migration* executados no pipeline de inicialização da aplicação, garantindo que todos os ambientes (desenvolvimento e produção) mantenham schemas idênticos.
* **Segurança e LGPD:** O PostgreSQL oferece suporte maduro a criptografia em repouso e em trânsito (SSL/TLS), além de mecanismos de controle de privilégios em nível de linha (*Row Level Security - RLS*), resguardando informações salariais e dados bancários confidenciais.

### Backend e Arquitetura Física

<div class="tech-tags" markdown="1">
<span class="tech-tag">:fontawesome-brands-node-js: Node.js</span>
<span class="tech-tag">:simple-typescript: TypeScript</span>
<span class="tech-tag">:simple-nestjs: NestJS</span>
</div>

* **Tipo:** API RESTful com plataforma de execução assíncrona orientada a serviços, tipagem estática e arquitetura modular.
* **Justificativa Técnica:** A tipagem estática do TypeScript elimina classes comuns de erros em tempo de compilação, protegendo apurações financeiras de diárias e fórmulas de comissionamento contra coerções de tipos inesperadas. A estrutura modular do NestJS facilita a injeção de dependências e a segregação limpa de responsabilidades entre controladores, serviços e repositórios.
* **Mecanismo de Autenticação e Perfis de Acesso (RBAC):** 
  * **Autenticação:** Implementação stateless via *JSON Web Tokens* (JWT) assinados com algoritmos de chave assimétrica e tempo de expiração curto.
  * **Autorização Baseada em Papéis (RBAC — Role-Based Access Control):** Controle granular de acesso baseado em *Guards* e *Decorators* na API, validando permissões pelos 4 papéis canônicos de acesso estabelecidos no Capítulo 8 (`ADMIN_SISTEMA`, `ADMIN_FINANCEIRO`, `GESTOR_OBRAS` e `TECNICO_CAMPO`).
* **Automação via Scripts CLI:** A base de código conta com scripts automatizados via `package.json` para tarefas recorrentes de *seed* de dados sintéticos para testes, execução de suítes de teste de integração e geração de build de produção.

### Frontend

<div class="tech-tags" markdown="1">
<span class="tech-tag">:fontawesome-brands-react: React</span>
<span class="tech-tag">:simple-typescript: TypeScript</span>
<span class="tech-tag">:simple-vite: Vite</span>
<span class="tech-tag">:simple-tailwindcss: Tailwind CSS</span>
<span class="tech-tag">:simple-shadcnui: Shadcn UI</span>
</div>

* **Tipo:** Aplicação de Página Única (*Single Page Application — SPA*) baseada em arquitetura desacoplada consumindo a API REST do Backend.
* **Justificativa Técnica:** O ecossistema React suporta a criação de interfaces reativas e modulares. O utilitário de build *Vite* proporciona recarregamento rápido em desenvolvimento e empacotamento otimizado de ativos estáticos, garantindo alto desempenho e baixo consumo de dados tanto em estações de trabalho quanto em dispositivos móveis conectados via redes 4G/5G nos canteiros de obra.
* **Ergonomia e Usabilidade (IHC):** O uso do Tailwind CSS aliado ao Shadcn UI viabiliza o desenvolvimento guiado por utilitários com suporte nativo a *design tokens*. Permite a rápida prototipação de componentes com paleta de cores de alto contraste, otimizados para leitura sob incidência de luz solar direta e com áreas de toque ampliadas para operação em smartphones nos canteiros.

### Domínio da Equipe e Capacidade Operacional

<div class="tech-tags" markdown="1">
<span class="tech-tag">:simple-typescript: TypeScript</span>
<span class="tech-tag">:simple-postgresql: PostgreSQL</span>
<span class="tech-tag">:fontawesome-brands-node-js: Node.js</span>
<span class="tech-tag">:fontawesome-brands-react: React</span>
</div>

As escolhas do ecossistema **TypeScript/JavaScript (Node.js + React)** e do banco **PostgreSQL** levaram em consideração a maturidade e o domínio prévio de código dos membros da equipe de desenvolvimento. A padronização de uma única linguagem (TypeScript) tanto no Frontend quanto no Backend minimiza o contexto cognitivo de transição, acelera o reaproveitamento de interfaces/DTOs entre as camadas e garante entregas rápidas e previsíveis no ciclo de vida das Unidades de entrega do projeto.

### Infraestrutura, Hospedagem e CI/CD

<div class="tech-tags" markdown="1">
<span class="tech-tag">:fontawesome-brands-docker: Docker</span>
<span class="tech-tag">:simple-vercel: Vercel</span>
<span class="tech-tag">:simple-githubactions: GitHub Actions</span>
<span class="tech-tag">:simple-supabase: Supabase</span>
</div>

* **Conteinerização com Docker e Docker Compose:** Todo o ambiente (PostgreSQL, Backend API e Frontend SPA) é orquestrado via scripts `docker-compose.yml`. Isso assegura paridade idêntica entre os ambientes locais de desenvolvimento e o ambiente de homologação.
* **Hospedagem (Host):**
  * **Backend & Banco de Dados:** Instância em nuvem gerenciada via Supabase / PostgreSQL em contêineres com backups automatizados.
  * **Frontend:** Distribuição e entrega de arquivos estáticos via CDN na **Vercel** para alta disponibilidade e baixa latência, redirecionada a partir do domínio próprio registrado da DUOC.
* **Integração e Entrega Contínua (CI/CD via GitHub Actions):** Pipelines automatizadas por scripts YAML no repositório executam verificação de qualidade (linters), validações de tipagem (`tsc`), testes unitários e o build do MkDocs a cada *Pull Request*, garantindo integração contínua sem quebras de ambiente.

---

<a id="25-pesquisa-de-mercado-e-analise-competitiva"></a>
## Pesquisa de Mercado e Análise Competitiva

### Cenário de Mercado: Softwares de Prateleira (COTS) vs. Demanda Real

O mercado corporativo disponibiliza ferramentas consolidadas em nichos isolados, predominantemente no modelo SaaS de prateleira (*Commercial Off-The-Shelf - COTS*). De um lado, softwares tradicionais de Recursos Humanos e Departamento Pessoal priorizam rotinas genéricas de escritório (admissão digital, controle de férias e geração de holerites padronizados). De outro, sistemas de gestão de engenharia e arquitetura focam exclusivamente no ciclo físico das obras (cronogramas de Gantt, compras de insumos e orçamentações complexas).

O problema crítico da **DUOC Arquitetura e Engenharia** situa-se exatamente na fronteira entre esses dois domínios: a necessidade de correlacionar horas técnicas, relatórios de deslocamento (RVT) e despesas de canteiro diretamente ao custo real de pessoal por contrato. Sistemas comerciais genéricos forçam a organização a adaptar seus processos e sua cultura à rigidez pré-programada de plataformas externas, impondo fluxos burocráticos que geram atritos com as equipes de campo e mantêm a dependência de planilhas paralelas de conciliação.

### Comparação das Soluções de Mercado

| Solução de Mercado | Foco Principal | Recursos Atendidos | Lacuna Crítica para a DUOC | Diferencial do DUOC Finance |
| :--- | :--- | :--- | :--- | :--- |
| **Convenia** | Gestão de DP e RH corporativo | Admissão digital, gestão de benefícios e controle de férias. | Processos engessados de RH corporativo tradicional; não se integra a centros de custo de obras nem a relatórios de campo (RVT). | Conecta a rotina de pessoal diretamente aos contratos de engenharia e horas técnicas apropriadas a cada projeto. |
| **Tangerino** | Registro eletrônico de ponto (REP-P) | Ponto móvel por aplicativo, biometria facial e controle de jornada. | Registro estático de horários; não estabelece nexo entre o deslocamento técnico de visita de obra, despesas de viagem e contrato. | Integra ponto operacional, RVT e prestação de contas de despesas no mesmo fluxo tempestivo de homologação. |
| **Vobi** | Gestão de projetos e obras | Orçamentação, cronograma físico, compras e acompanhamento de obras. | Trata a mão de obra como custo estimado genérico, sem processar a folha real, comissões variáveis e encargos trabalhistas. | Apropria o custo real e individualizado da folha aos centros de custos de cada contrato em andamento. |
| **ArqProject** | Gestão financeira de escritórios de arquitetura | Fluxo de caixa de projetos, briefing e propostas comerciais. | Foco restrito à gestão comercial de projetos; não atende ao fluxo operacional dos técnicos em canteiro nem ao DP. | Solução sob medida (*tailor-made*), adaptada à linguagem, rotina e dinâmica de campo específica da DUOC. |

As soluções acima representam o estado da arte em seus respectivos segmentos de atuação. Contudo, nenhuma delas, de forma isolada, resolve o fluxo contínuo e integrado exigido pela DUOC, além de cobrarem licenças recorrentes por usuário (*headcount*) com dezenas de funcionalidades que a empresa jamais utilizaria (*bloatware*).

### O Gargalo da Reconciliação Manual

Quando ferramentas comerciais fragmentadas são adotadas em conjunto, o gestor administrativo da DUOC é transformado em um integrador manual de sistemas: precisa exportar relatórios do software de ponto, tabular dados do RVT a partir de canais de mensagens, recalcular comissões em planilhas Excel e, finalmente, transferir os custos consolidados para o controle financeiro de obras. 

Esse processo gera consequências danosas:
1. **Elevada taxa de erro humano:** Fórmulas manuais em planilhas sujeitas a inconsistências de cálculo e digitação.
2. **Retrabalho crônico e perda de histórico:** Dados dispersos em pastas locais sem trilha auditável de alterações.
3. **Opacidade gerencial:** A diretoria só descobre o custo real da mão de obra dias após o fechamento mensal, inviabilizando ajustes de precificação e correções de desvio orçamentário em tempo hábil.

O MVP do DUOC Finance elimina esse gargalo ao instituir um fluxo contínuo onde colaborador, contrato, horas de RVT, despesas e encargos compartilham a mesma base de dados confiável.

### Pilares Diferenciais do DUOC Finance

O DUOC Finance não pretende atuar como um ERP genérico e massivo de engenharia civil, mas sim consolidar-se em torno de **três pilares de diferenciação estratégica**:

```text
                                PILARES DIFERENCIAIS
               ┌─────────────────────────┼─────────────────────────┐
               ▼                         ▼                         ▼
      [1. Hub Orquestrador]     [2. Solução Sob Medida]   [3. Segurança e LGPD]
      Nexo direto entre horas   Desenvolvido para a       Perfis estritos (RBAC),
      técnicas de campo e       rotina e cultura real     proteção de salários e
      custo por contrato.       da DUOC (Anti-Bloatware). conformidade legal.
```

#### Hub Centralizador e Orquestrador do Fluxo Administrativo
* **Captura no Campo:** A equipe técnica registra ponto e RVT em interface ágil, no próprio canteiro de serviço.
* **Homologação Administrativa:** O setor financeiro/DP confere horas e despesas de forma contínua, apoiando a apuração de diárias e comissões.
* **Inteligência de Custos:** Os sócios visualizam o custo de mão de obra apurado de cada obra contratada.

#### Desenvolvimento Sob Medida e Personalização Cultural (*Tailor-Made*)
O principal diferencial competitivo da solução frente a qualquer software de mercado é a **personalização sociotécnica total**:
* **O Software se Adapta à DUOC (e não o contrário):** Softwares de prateleira exigem que a empresa mude seu modo de trabalhar para se adequar ao sistema. O DUOC Finance foi concebido a partir da observação direta dos fluxos reais da DUOC, preservando suas práticas bem-sucedidas e digitalizando os pontos de atrito.
* **Identidade Visual e Cultura da Empresa ("A Cara da DUOC"):** A interface é construída seguindo rigorosamente o manual de identidade visual da DUOC Arquitetura e Engenharia (paleta institucional com destaque em Dourado Ocre `#DAA520`, tipografia limpa e modo escuro sofisticado). Essa estética gera sentimento de pertencimento, profissionalismo e engajamento imediato da equipe.
* **Ergonomia *Anti-Bloatware* (Design Enxuto):** Sistemas genéricos de mercado sobrecarregam os usuários com centenas de botões, abas e configurações irrelevantes. O DUOC Finance implementa fluxos rápidos (*mobile-first*) focados estritamente na rotina do técnico de campo e do auxiliar administrativo.
* **Terminologia Nativa do Negócio:** A interface adota o vocabulário real utilizado no cotidiano da DUOC (Relatório de Viagem Técnica - RVT, centros de custos vinculados a contratos multidisciplinares de arquitetura e engenharia), reduzindo drasticamente a curva de aprendizado e eliminando a resistência à adoção.

#### Governança, Privacidade e Conformidade com a LGPD
Diferente do compartilhamento indiscriminado de arquivos em nuvem e planilhas de rede, o DUOC Finance implementa controle de acesso por papéis (RBAC). Dados salariais e remunerações de sócios são blindados contra acessos indevidos, garantindo conformidade rigorosa com a Lei nº 13.709/2018.

### Fontes de Referência

* [Convenia](https://www.convenia.com.br/)
* [Tangerino](https://tangerino.com.br/)
* [Vobi](https://vobi.com.br/)
* [ArqProject](https://arqproject.com.br/)

---

<a id="26-viabilidade-da-proposta-analise-do-mvp"></a>
## Viabilidade da Proposta (Análise do MVP)

### Parecer de Viabilidade

O Produto Mínimo Viável (MVP) do DUOC Finance é viável no ciclo acadêmico e técnico da disciplina porque foi estritamente delimitado ao problema de maior valor para a cliente parceira: integrar o Departamento Pessoal, o Relatório de Viagem Técnica (RVT) e a apuração financeira de custos por contrato. A equipe declara **prontidão metodológica e técnica para especificar, prototipar, implementar e homologar esse recorte**, sem a pretensão de substituir integralmente sistemas de modelagem de engenharia ou softwares contábeis legados.

### Evidências Estruturadas de Viabilidade

| Dimensão | Declaração Formal | Evidência e Mecanismo de Controle |
| :--- | :--- | :--- |
| **Técnica** | A equipe possui competência técnica compatível com a complexidade do MVP. | Os papéis do time distribuem responsabilidades claras de elicitação de requisitos, arquitetura de software, modelagem de dados relacional, desenvolvimento backend, frontend e engenharia de qualidade (QA). |
| **Operacional** | Existe canal contínuo de acesso à representante focal Maria Beatryz para esclarecer regras e homologar entregas. | O plano de comunicação prevê interação via WhatsApp para dúvidas rotineiras e reuniões quinzenais síncronas via Google Meet. O processo de validação exige homologação de protótipos de alta fidelidade antes da codificação de persistência. |
| **Temporal** | O escopo delimitado do MVP é compatível com a janela real de construção do cronograma, executado de forma incremental por Unidade. | A construção de código concentra-se nas Unidades 3 e 4 (aprox. 3 semanas úteis): Semana 10, cadastro e RBAC; Semana 11, RVT (depende do cadastro); Semana 12, motor de custo e apropriação por contrato (depende dos dados de RVT). A equipe tem 6 integrantes, a maioria em primeiro projeto real, o que motivou o recorte de escopo descrito em "Delimitação do Escopo do MVP". Ainda não há prova de conceito das regras de cálculo de custo. |
| **Econômica** | O desenvolvimento e a implantação ocorrem sem custos proibitivos de licenciamento. | A proposta adota exclusivamente tecnologias de código aberto (PostgreSQL, Node.js/NestJS, React) e plataformas de hospedagem em nuvem gratuitas ou de baixo custo para o ambiente acadêmico. |

### Delimitação do Escopo do MVP

O MVP abrange o controle de acesso baseado em papéis (RBAC - CAR-07), o preenchimento, retificação e deliberação formal de Relatórios de Viagem Técnica (RVT de campo - CAR-02, abrangendo envio, anexos de evidências, retificação pendente, deliberação da supervisão com bloqueio e consulta própria), a gestão cadastral de colaboradores, contratos de obras e centros de custo (CAR-01, CAR-05 e CAR-06), o fluxo digital de despesas operacionais, adiantamentos e reembolsos (CAR-04), e o motor de fechamento de diárias técnicas e comissões simplificadas de campo com apropriação direta aos contratos de obra (CAR-03 e CAR-05), sem substituir a folha de pagamento CLT oficial nem rotinas contábeis de encargos e provisões.

A integração direta automatizada via API com o sistema *FLIT* (CAR-09 / RF20) e as interfaces visuais analíticas dedicadas de auditoria (CAR-08 / RF15 e RF16) foram alocadas no backlog de evolução (Fase 2 / pós-MVP) conforme a priorização formal da Reunião 05. No MVP, a integridade e a governança de auditoria para fins da LGPD e trabalhistas são asseguradas a nível de infraestrutura e persistência de banco por meio de logs de eventos atômicos e imutáveis (*append-only*), garantidos pelos requisitos não funcionais RNF15 e RNF16.

Permanecem fora deste primeiro ciclo os módulos de engenharia civil pesada (como cronogramas de Gantt de obra, composições orçamentárias SINAPI e controle físico de estoque de canteiro). Essas capacidades poderão ser integradas futuramente através de APIs abertas.

### Riscos Mapeados e Condições de Aceite

Os principais riscos identificados consistem em: restrições de agenda da cliente parceira para sessões síncronas, complexidade de fórmulas trabalhistas, expansão não autorizada do escopo (scope creep) e a proteção de dados pessoais ficar restrita apenas ao ambiente de desenvolvimento. Tais riscos são mitigados por validações quinzenais estruturadas, estabelecimento dos designs diretamente no frontend com base no Figma antes da codificação da lógica e persistência, blindagem estrita do escopo por marcos avaliativos e, para a proteção de dados, pela aplicação em produção de RLS, criptografia em trânsito/repouso e RBAC (detalhadas na seção 2.4),  o uso de dados sintéticos citado na 2.4 cobre apenas o ambiente de desenvolvimento e testes, não substituindo essas medidas em produção.

O MVP será considerado concluído e apto para homologação quando todos os fluxos essenciais estiverem implementados, cobertos por testes automatizados, documentados no portal e formalmente aceitos pela cliente através de Termo de Homologação. O cronograma completo encontra-se registrado no [Capítulo 6 — Cronograma](../metodologia/cronograma.md), e o fluxo de aceite está detalhado no [Capítulo 7 — Interação com Cliente](../metodologia/interacao-cliente.md#73-processo-de-validacao-sociotecnica-e-homologacao-com-a-cliente).

### Conformidade LGPD Aplicável ao MVP

Os seguintes princípios da LGPD (Lei 13.709/2018, Art. 6º) orientam o MVP e sua verificação antes de qualquer publicação em produção com dados reais:

- **Finalidade e necessidade:** dados restritos ao propósito de gestão de pessoal e apuração de custo por contrato, sem uso secundário.
- **Base legal:** execução de contrato de trabalho e cumprimento de obrigação legal (Art. 7º, incisos II e V).
- **Segurança:** criptografia em trânsito/repouso e Row Level Security (detalhadas na 2.4).
- **Livre acesso:** cada colaborador consulta suas próprias informações (CAR-01/CAR-02).
- **Responsabilização e prestação de contas:** trilha de auditoria atômica no banco de dados e controle de acesso (RNF15/RNF16, CAR-07/CAR-08).

**Condição de Aceite:** nenhuma publicação em produção com dados reais ocorre sem aprovação formal de um checklist de conformidade LGPD cobrindo os itens acima, validado com a representante da DUOC antes do Termo de Aceite Formal (Unidade 4).

---

<a id="27-beneficios-esperados"></a>
## Benefícios Esperados

O DUOC Finance deverá gerar benefícios tangíveis para a organização e para as pessoas que utilizarão continuamente o portal. A centralização dos registros de campo (RVT), controle de diárias técnicas e prestação digital de contas de despesas e adiantamentos reduz a fragmentação atual e melhora a confiabilidade das informações financeiras e de custos de obra.

### Benefícios para a DUOC

- **Visibilidade de custo por contrato:** a correlação entre horas registradas, custos de pessoal e contratos permite acompanhar o custo real da mão de obra por projeto, apoiando decisões comerciais e de precificação.
- **Redução de erros e retrabalho:** a centralização dos apontamentos de RVT, conferência de diárias e prestação de contas em um único ambiente reduz divergências, duplicidade de lançamentos e falhas manuais na conciliação de despesas e apropriação de custos de obra.
- **Agilidade no fechamento financeiro:** informações padronizadas e disponíveis em tempo hábil tornam mais rápida a conferência das rotinas de Departamento Pessoal e Financeiro.
- **Conformidade jurídica e proteção de dados:** o registro formal das informações apoia a conformidade trabalhista e fiscal, enquanto o controle de acesso por perfis e a proteção dos dados pessoais contribuem para o atendimento à LGPD.
- **Base histórica para gestão:** o histórico consolidado de horas e custos oferece dados para avaliar contratos, identificar desvios e aperfeiçoar futuras propostas de serviço.

### Benefícios para os Usuários

- **Registro prático no canteiro de obras:** colaboradores poderão registrar suas atividades e despesas de campo de forma ágil via aplicação web responsiva (Web App / PWA), inclusive por dispositivos móveis, sem repetir o preenchimento em diferentes planilhas.
- **Consulta facilitada de reembolsos:** o acompanhamento digital dos recibos e da situação das solicitações reduz a perda de documentos e torna mais previsível o processo de reembolso.
- **Clareza sobre remunerações e apontamentos:** cada colaborador poderá consultar com transparência seus próprios apontamentos técnicos homologados, o status de deliberação das atividades e o andamento de solicitações de reembolso e adiantamento.
- **Confidencialidade das informações:** dados salariais e funcionais serão acessíveis somente aos perfis autorizados, preservando a privacidade entre os colaboradores.
- **Maior transparência no trabalho:** o histórico dos registros e o acompanhamento das aprovações tornam mais claro como as horas informadas são conferidas e utilizadas no processamento financeiro.

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 05/09/2026 | Estruturação inicial dos objetivos, características, stack e análise de mercado | Equipe Cascata Ágil | Matheus Ribeiro Szervinsk |
| `1.1` | 07/09/2026 | Refinamento dos artefatos, inclusão do histórico e alinhamento com OEs | Equipe Cascata Ágil | Matheus Ribeiro Szervinsk |
| `1.2` | 08/09/2026 | Expansão de CAR-01 a CAR-08, purificação de abstração e tags de tecnologias | Matheus Ribeiro Szervinsk | Equipe DUOC Finance |
| `2.0` | 15/09/2026 | Unificação integral de todos os artefatos 2.1 a 2.7 em página única contínua | Equipe Cascata Ágil | Matheus Ribeiro Szervinsk |
| `2.1` | 19/09/2026 | Reconciliação pós-merge com `develop`: adição de CAR-09 a CAR-12 (integrações externas) vinculadas a OE1; correção de terminologia financeira em OE3 e CAR-06 ("margem líquida"/"lucro real" → "custo de mão de obra apropriado"/"desvio orçamentário"), com nota de escopo explicitando ausência de receita e custos totais no MVP | Paulo Nery | |
| `2.2` | 21/09/2026 | Ajuste da estratégia de mitigação de riscos: adoção de UI-First com base no Figma e designs via Frontend, garantindo validação de interface antes da codificação de lógica e persistência | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
| `2.3` | 28/09/2026 | Inclusão de nota de escopo em CAR-10 e de menção ao estorno de fechamentos em CAR-03, decorrentes da avaliação por pares dos requisitos (ver [Feedback dos Requisitos](../requisitos/feedback.md)) | Matheus Saraiva Camargo | Matheus Szervinsk |
| `2.4` | 12/10/2026 | Harmonização do escopo do MVP (seção 2.6) com deliberações da Ata 05 e Capítulo 8 (postergação de Shifton e telas analíticas de auditoria para Fase 2, mantendo logs atômicos no MVP); inclusão do RF36 na CAR-10 e notas em CAR-11/CAR-12; saneamento de benefícios e explicitação de Web App / PWA. | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
| `2.5` | 12/10/2026 | Harmonização da Matriz Canônica de Papéis RBAC (4 perfis na arquitetura backend), eliminação de menções residuais a folha CLT/tempo real e adequação terminológica sobre dados pessoais confidenciais (LGPD Art. 6º, VII). | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
| `2.6` | 29/10/2026 | Classificação das características (CAR) por fase de entrega (MVP ou Fase 2), esclarecendo o escopo das CAR-08 a CAR-12, conforme issue docente; harmonização das contribuições secundárias das CAR-03 e CAR-10 e das listas de apoio das OEs com a matriz-síntese do Capítulo 8. | Gustavo Bonifácio |  |
| `2.7` | 02/11/2026 | Revisão cruzada com os Capítulos 2, 4 e 6 após feedback do professor: ferramenta de presença padronizada como FLIT (nome anteriormente registrado como Shifton); perfil do Administrador Financeiro e visão gerencial dos sócios sem referência a folha de pagamento. | Gustavo Bonifácio |  |
| `2.8` | 02/11/2026 | Padronização das relações de OEs e CARs com cards interativos; diferenciação cromática de headers de cards pais por módulo; abertura dinâmica por ancoragem e recolhimento padrão de CARs. | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |