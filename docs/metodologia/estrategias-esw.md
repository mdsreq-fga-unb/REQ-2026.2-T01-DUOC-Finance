# Estratégias de Engenharia de Software

## Objetivo do Capítulo

Este capítulo documenta as escolhas de processo de engenharia e metodologia de desenvolvimento adotadas pela equipe Cascata Ágil. Ele detalha a filosofia de trabalho que rege a execução do projeto, harmonizando o rigor necessário para entregas acadêmicas com a flexibilidade operacional exigida por um ambiente corporativo real e dinâmico.

## Conjunto de Artefatos

A fundamentação metodológica está estruturada em:

*   **Estratégia Priorizada:** Detalhamento da abordagem híbrida, modelo de ciclo de vida e processo de desenvolvimento adotado.
*   **Quadro Comparativo de Processos:** Tabela analítica comparando o processo escolhido com processos de desenvolvimento alternativos.
*   **Justificativa Metodológica:** Definição conceitual baseada na natureza do produto, características dos usuários e contexto do projeto.

---

<a id="41-estrategia-priorizada"></a>
## Estratégia Priorizada

A partir das informações sobre o cenário atual da DUOC Arquitetura e Engenharia e da solução proposta para o sistema DUOC Finance, esta seção detalha as estratégias de engenharia de software escolhidas para orientar o desenvolvimento do projeto.

### O que Escolhemos

<div class="stats">
  <div class="stat">
    <span class="label">Abordagem</span>
    <div class="val">Híbrida</div>
  </div>
  <div class="stat">
    <span class="label">Ciclo de Vida</span>
    <div class="val">Iterativo e Incremental</div>
  </div>
  <div class="stat">
    <span class="label">Processo de Software</span>
    <div class="val">RAD (UI-First)</div>
  </div>
</div>

### Por Que Essa Combinação?

<div class="cards">
  <div class="card">
    <span class="dot">1</span>
    <h3>Estabilidade e Flexibilidade (Abordagem Híbrida)</h3>
    <p>O fechamento quinzenal de diárias técnicas e comissões contratuais simplificadas exige regras estáveis e homologadas com a cliente antes da codificação (dirigido por plano). A folha CLT e os encargos (INSS, FGTS, IRRF, 13º e férias) não são calculados pelo DUOC Finance: permanecem no escritório contábil externo (<a href="../../requisitos/feedback/#qualidade-dos-requisitos-papeis-e-conformidade-legal-ciclo-2-de-refinamento">FB-19</a>). Em contrapartida, as interfaces de lançamento de horas de campo (RVT) e relatórios operacionais demandam validação ágil e experimentação visual contínua.</p>
  </div>
  <div class="card">
    <span class="dot">2</span>
    <h3>Fatias Verticais Funcionais (Ciclo Iterativo & Incremental)</h3>
    <p>O produto é construído em ciclos progressivos de evolução. Cada incremento adiciona fatias funcionais completas de ponta a ponta (interface, regras de negócio e banco de dados), permitindo que o sistema integre regras complexas de forma modular e homologada.</p>
  </div>
  <div class="card">
    <span class="dot">3</span>
    <h3>Prototipagem Ativa e Dados Sólidos (Processo RAD)</h3>
    <p>O processo RAD enfatiza o planejamento conciso de requisitos seguido por modelagem de dados consistente (PostgreSQL/Supabase) e intensa prototipagem de interfaces (Figma e React SPA), alinhando a solução com a cliente parceira antes da codificação extensiva.</p>
  </div>
</div>

!!! note "Fronteira dos cálculos do DUOC Finance"
    **O DUOC Finance calcula:** o fechamento quinzenal de diárias técnicas e comissões contratuais simplificadas, a partir de apontamentos de campo (RVT) homologados, e a apropriação desses valores e dos reembolsos aos contratos de obra ([RF05](../requisitos/index.md#rf05), [RF06](../requisitos/index.md#rf06) e [RF09](../requisitos/index.md#rf09)).

    **O DUOC Finance não calcula:** folha de pagamento CLT, encargos (INSS, FGTS, IRRF), 13º salário, férias e holerites. Essas rotinas permanecem no escritório contábil externo contratado pela DUOC, conforme a deliberação [FB-19](../requisitos/feedback.md#qualidade-dos-requisitos-papeis-e-conformidade-legal-ciclo-2-de-refinamento).

#### Adaptação do Processo RAD ao Contexto da DUOC

Para atender à necessidade de integração sistêmica e consistência técnica, o processo RAD foi customizado nas quatro fases a seguir, integrando a arquitetura da equipe (React SPA/Vite no frontend, NestJS no backend e PostgreSQL gerenciado via Supabase):

<div class="rad-flow">
  <div class="rad-step">
    <div class="rad-step-header">
      <span class="rad-step-num">Fase 1</span>
      <span class="rad-arrow">→</span>
    </div>
    <h4>Modelagem & Requisitos</h4>
    <p>Taxonomia de dados (obras, RVTs e diárias) e modelagem relacional inicial do banco.</p>
    <span class="rad-tag">PostgreSQL / Schema</span>
  </div>
  <div class="rad-step">
    <div class="rad-step-header">
      <span class="rad-step-num">Fase 2</span>
      <span class="rad-arrow">→</span>
    </div>
    <h4>Design do Usuário</h4>
    <p>Sessões conjuntas no Figma e validação das regras de fechamento quinzenal de diárias técnicas e comissões contratuais simplificadas.</p>
    <span class="rad-tag">Figma + Regras</span>
  </div>
  <div class="rad-step">
    <div class="rad-step-header">
      <span class="rad-step-num">Fase 3</span>
      <span class="rad-arrow">→</span>
    </div>
    <h4>Construção Iterativa</h4>
    <p>Implementação em fatias funcionais verticais de ponta a ponta (React SPA + NestJS).</p>
    <span class="rad-tag">Full-Stack Slices</span>
  </div>
  <div class="rad-step">
    <div class="rad-step-header">
      <span class="rad-step-num">Fase 4</span>
    </div>
    <h4>Cutover & Homologação</h4>
    <p>Transposição assistida para operação real com a cliente e refinamento de fechamentos.</p>
    <span class="rad-tag">Produção / Validação</span>
  </div>
</div>

#### Execução do Design do Usuário no Incremento 1

O primeiro ciclo de Design do Usuário do DUOC Finance foi executado sobre um protótipo de alta fidelidade no Figma e avaliado pela cliente em 02/10/2026. A tabela resume o ciclo, da prototipação ao próximo passo:

| Etapa do ciclo | O que aconteceu | Evidência |
| :--- | :--- | :--- |
| **Fluxos prototipados** | Telas de Colaboradores, Visão Geral, Análise de Custos e Perfis e Permissões, entre outras, em protótipo de alta fidelidade. | [Protótipo no Figma](https://www.figma.com/design/jJ5lOX1FJ52vpFGk8cimoM/DUOC-FINANCE?node-id=1-3&t=CHCrS3jVWsoutYCM-1) |
| **Quem prototipou** | Eric Araújo (Product Owner), após a configuração dos acessos da equipe ao Figma em 25/09/2026. | [Ata 05](../governanca/atas/reuniao-05.md#6-acoes-futuras-action-items) |
| **Quem avaliou e quando** | Maria Beatryz, cliente parceira, em sessão presencial conduzida por Eric Araújo em 02/10/2026. | [Ata 06](../governanca/atas/reuniao-06.md) |
| **Mudanças resultantes** | Nenhuma: a cliente aprovou as telas, os campos e os fluxos sem solicitar ajustes. | [Ata 06, decisão D1](../governanca/atas/reuniao-06.md#4-decisoes-tomadas) |
| **Próximo passo** | Transpor as telas aprovadas para o frontend navegável com dados mockados e repetir a validação com a cliente no frontend, condição do DoR para iniciar a lógica e a persistência. | [Ata 06, ações futuras](../governanca/atas/reuniao-06.md#6-acoes-futuras-action-items) e [DoR](../mvp/dor-dod.md#definition-of-ready-dor) |

**Desvio em relação ao processo planejado:** o [Processo de Validação Sociotécnica](../metodologia/interacao-cliente.md#73-processo-de-validacao-sociotecnica-e-homologacao-com-a-cliente) prevê sessões por Google Meet em que a cliente navega no frontend. Como o frontend navegável ainda não estava pronto, o primeiro ciclo foi feito presencialmente sobre o protótipo no Figma e não foi gravado. Por isso, as telas aprovadas ainda não cumprem o DoR: falta a validação no frontend, que é o próximo passo do ciclo.

---

<a id="42-quadro-comparativo-de-processos"></a>
## Quadro Comparativo de Processos

O quadro a seguir apresenta uma comparação analítica entre o processo **RAD** e o processo **XP (Extreme Programming)**, avaliando qual se adequa melhor à natureza do produto DUOC Finance.

| Características | RAD (Rapid Application Development) | XP (Extreme Programming) |
| :--- | :--- | :--- |
| **Foco Principal** | Aceleração do ciclo de entrega por meio de modelagem de dados antecipada, prototipagem visual e envolvimento do usuário no design das soluções. | Excelência técnica do código-fonte através de práticas rigorosas de engenharia e mudanças frequentes e incrementais baseadas em histórias de usuário. |
| **Natureza do Produto Ideal** | Sistemas de informação e gestão (como o DUOC Finance) com escopo que pode ser particionado (decomponível) em módulos de interface bem definidos e regras de banco de dados claras. | Sistemas com lógicas de negócio altamente complexas, voláteis ou desconhecidas, onde o maior risco reside na arquitetura de software em constante mutação. |
| **Envolvimento do Usuário** | Exige participação intensa e colaborativa durante a modelagem e o design de interfaces (JAD - *Joint Application Design*), focando em validar o fluxo operacional e relatórios. | Exige um cliente "on-site" em tempo integral, participando da escrita de testes de aceitação e guiando o direcionamento em níveis micro de desenvolvimento. |
| **Validação Funcional e Técnica** | A validação ocorre pela homologação das regras de dados e experimentação funcional dos protótipos em ciclos curtos de revisão. | A validação é centrada em Testes Automatizados (TDD), Desenvolvimento Orientado a Comportamento (BDD) e revisões contínuas de código (*Pair Programming*). |
| **Arquitetura de Software** | Estabelece um alicerce arquitetural (Modelo de Dados/Supabase e base de APIs em NestJS) cedo no processo, evoluindo a interface de forma rápida sobre essa fundação. | Considera que a arquitetura ideal "emerge" organicamente durante o desenvolvimento contínuo (Design Simples e Refatoração Constante). |

---

<a id="43-justificativa-metodologica"></a>
## Justificativa Metodológica

Com base nas características intrínsecas do produto DUOC Finance, na decomposição do escopo e no perfil dos usuários, o **RAD (Rapid Application Development)** foi selecionado como o processo de desenvolvimento ideal pelas seguintes razões:

1.  **Natureza Decomponível do Produto:** O DUOC Finance não é uma plataforma experimental de algoritmo obscuro, mas um sistema de gestão operacional e financeira de obras com um fluxo linear e claro (Apontamento de campo/RVT -> Homologação pela gestão -> Fechamento quinzenal de diárias técnicas e comissões contratuais simplificadas -> Apropriação de custos por contrato e relatórios). Esse fluxo não inclui o processamento da folha CLT nem o cálculo de encargos (INSS, FGTS, IRRF, 13º e férias), que permanecem no escritório contábil externo da DUOC, e não substitui o registro oficial de frequência, que segue no *FLIT* (FB-19). O RAD se adequa em projetos dessa natureza, pois permite particionar esses módulos verticais claramente. A equipe pode, por exemplo, prototipar e validar exaustivamente a interface de lançamento de RVT para os operários da obra, enquanto consolida, em paralelo, a modelagem de dados do motor de cálculos.
2.  **Alta Disponibilidade e Perfil dos Usuários:** O RAD exige e pressupõe um envolvimento intenso e direto do usuário final. A realidade do projeto da DUOC atende plenamente a este requisito, contando com a alta disponibilidade da representante da empresa (Maria Beatryz) para sessões frequentes de validação e refinamento de design. A interação constante elimina a necessidade de documentos prescritivos longos, reduzindo ambiguidades antes da construção das APIs no NestJS ou telas no React SPA.
3.  **Prototipagem em Duas Vias (Usabilidade e Regras de Negócio):** O gargalo administrativo da DUOC envolve não apenas a experiência do usuário de campo ao lançar horas no sistema, mas, crucialmente, a validade dos cálculos por trás da interface. No RAD, a "prototipagem" será aplicada de forma abrangente: a equipe validará a usabilidade fluida no cliente web (React SPA) para garantir adesão, e criará testes práticos no motor de cálculo (NestJS backend) para homologar a aderência matemática da apropriação de custos da obra e das regras de diárias e comissões com a cliente.
4.  **Evolução sobre Arquitetura Consistente:** Embora a solução exija evolução contínua, uma ferramenta financeira exige forte integridade relacional. Diferente do XP, que encoraja uma arquitetura estritamente emergente e evolutiva de baixo para cima, o RAD permite à equipe estabelecer antecipadamente a espinha dorsal dos dados (utilizando banco relacional PostgreSQL no Supabase) para suportar a LGPD e regras financeiras com firmeza, enquanto utiliza ciclos rápidos para adaptar interfaces e fluxos de trabalho gerenciais.

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 05/09/2026 | Definição da abordagem de ciclo de vida RAD, comparativo e justificativa de engenharia. | Eric Araújo | Matheus Ribeiro Szervinsk |
| `2.0` | 15/09/2026 | Unificação integral dos artefatos metodológicos em página contínua e alinhamento de stack. | Equipe Cascata Ágil | Matheus Ribeiro Szervinsk |
| `2.3` | 15/11/2026 | Registro da execução do Design do Usuário (Ata 06) e modernização com cards inteligentes das fases RAD. | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
| `2.4` | 25/11/2026 | Substituição de "cálculos de folha" e "fechamento de folha/comissões" por "fechamento quinzenal de diárias técnicas e comissões contratuais simplificadas"; inclusão da fronteira dos cálculos, explicitando que folha CLT e encargos (INSS, FGTS, IRRF, 13º e férias) permanecem no escritório contábil externo (FB-19). | Paulo Nery | — |
