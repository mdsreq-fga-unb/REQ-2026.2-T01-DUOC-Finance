# Capítulo 5: Engenharia de Requisitos

## Objetivo do Capítulo

Este capítulo apresenta a engenharia de requisitos de forma integrada ao ciclo de desenvolvimento de software adotado. Seu objetivo é estabelecer com precisão como as atividades de elicitação, análise, especificação, verificação, validação e gestão de escopo de software serão executadas ao longo do projeto, detalhando as práticas e técnicas que garantem a rastreabilidade e a qualidade das entregas.

## Conjunto de Elementos da Engenharia de Requisitos

As atividades de Engenharia de Requisitos (ER) a serem empregadas no desenvolvimento do projeto estão estruturadas e classificadas de acordo com a natureza de seus componentes, garantindo a devida distinção entre procedimentos analíticos, suportes tecnológicos e produtos gerados:

*   **Técnicas de ER:** Conjunto de métodos e procedimentos analíticos aplicados ativamente pela equipe ao longo das etapas de elicitação, análise, priorização, negociação e validação dos requisitos.
*   **Práticas:** Abordagens institucionais e dinâmicas de trabalho adotadas no fluxo de desenvolvimento para assegurar a colaboração, o alinhamento contínuo e a qualidade técnica das entregas.
*   **Ferramentas:** Softwares, plataformas e ambientes computacionais utilizados para dar suporte operacional à execução das técnicas, à automação e à gestão da documentação.
*   **Artefatos e Formas de Representação:** Produtos de trabalho, modelos conceituais, diagramas e documentos formais produzidos para registrar, comunicar e rastrear a evolução das necessidades do sistema.
*   **Critérios e Acordos de Trabalho:** Conjuntos de condições pré-estabelecidas e alinhadas entre os envolvidos para orientar a transição das etapas do fluxo de desenvolvimento e assegurar a qualidade dos requisitos antes e depois de sua implementação.

---

> **Observação Metodológica – Critérios de Aceitação:** Para a especificação dos requisitos, os critérios de aceitação serão detalhados na forma de **listas estruturadas (em tópicos)**, simplificando a verificação direta do comportamento esperado para cada funcionalidade. *(Nota: O uso de linguagens estruturadas como BDD/Gherkin só será adotado caso haja a necessidade explícita de automação de testes pela equipe).*

---

<a id="51-elementos-de-engenharia-de-requisitos"></a>
## 5.1 Elementos de Engenharia de Requisitos

Nesta seção é formalizada a vinculação entre as seis atividades clássicas da Engenharia de Requisitos (Kotonya & Sommerville, Wiegers & Beatty) e os elementos concretos (categorizados em técnicas, práticas, ferramentas, artefatos e critérios de trabalho) aplicados pela equipe Cascata Ágil no projeto **DUOC Finance**.

### 1. Elicitação e Descoberta de Requisitos
* **Objetivo Geral:** Descobrir as necessidades operacionais reais, regras de negócio e expectativas sociotécnicas dos atores da DUOC.
*   **Técnicas de ER:**
    *   **Entrevistas Semiestruturadas com Stakeholder Chave:** Condução planejada de reuniões síncronas com a sócia-administradora Maria Beatryz para mapear a rotina de fechamento de folha, gestão de canteiros e cálculo de comissões. | **Status:** Realizado | **Evidência:** [Ata da Reunião 1](../atas/index.md#consulta-unificada-por-abas).
    *   **Análise Documental:** Análise planejada da documentação operacional utilizada na rotina da empresa. | **Status:** Realizado | **Evidência:** [Planilhas Sanitizadas no Drive](https://drive.google.com/drive/folders/1e2wQ6ub4BVfte3mmWVXGUZ4cBI2d73Sd?usp=drive_link).
*   **Práticas:**
    *   **Workshops de Descoberta Operacional:** Sessões colaborativas planejadas para a equipe decompor as dores do cenário atual. | **Status:** Não realizado |
*   **Artefatos e Formas de Representação:**
    *   **Artefatos Legados e Documentos de Negócio:** Planilhas eletrônicas de controle financeiro, modelos impressos de RVT e relatórios de despesas operacionais planejados para análise. | **Status:** Realizado | **Evidência:** [Planilhas Sanitizadas no Drive](https://drive.google.com/drive/folders/1e2wQ6ub4BVfte3mmWVXGUZ4cBI2d73Sd?usp=drive_link).
    *   **Fluxos Transacionais (TR-01 a TR-04):** Mapeamento dos fluxos de trabalho atuais planejados para decomposição a partir das dores identificadas. | **Status:** Realizado | **Evidência:** [Estrutura Detalhada das Transações](../visao-produto/capitulo-1/index.md#estrutura-detalhada-das-transacoes)

---

### 2. Análise e Consenso de Requisitos
* **Objetivo Geral:** Estruturar, desambiguar e delimitar as fronteiras do sistema, resolvendo conflitos de interesse e priorizando o escopo viável.
*   **Técnicas de ER:**
    *   **Rich Picture (Soft Systems Methodology):** Modelagem visual planejada do ecossistema sociotécnico da DUOC para explicitar fluxos informacionais, zonas de atrito e as fronteiras do produto proposto. | **Status:** Realizado | **Evidência:** [Rich Picture do Sistema DUOC Finance](../visao-produto/capitulo-1/index.md#13-rich-picture-fluxo-sociotecnico).
    *   **Diagrama de Causa e Efeito (Ishikawa):** Desdobramento analítico planejado das causas-raiz do problema central em quatro dimensões fundamentais (Métodos, Tecnologia, Pessoas e Medição). | **Status:** Realizado | **Evidência:** [Diagrama de Causa e Efeito](../visao-produto/capitulo-1/index.md#diagrama-de-causa-e-efeito-ishikawa).
    *   **Priorização MoSCoW:** Classificação planejada das necessidades em *Must have*, *Should have*, *Could have* e *Won't have*, garantindo o foco estrito no MVP de Departamento Pessoal e Financeiro. | **Status:** Planejado | **Evidência:** [Backlog do Produto](../backlog/index.md).
*   **Artefatos e Formas de Representação Planejados:**
    *   **Matriz de Stakeholders e Permissões (RBAC):** Mapeamento planejado do grau de influência e interesse das partes afetadas, definindo a matriz de perfis de acesso sob o princípio do menor privilégio. | **Status:** Realizado | **Evidência:** [Mapa de Stakeholders](../visao-produto/capitulo-1/index.md#16-mapa-de-stakeholders).

---

### 3. Declaração e Especificação de Requisitos
* **Objetivo Geral:** Registrar formalmente as necessidades de software de maneira clara, verificável e compreensível para negócio e desenvolvimento.
*   **Técnicas de ER:**
    *   **Modelagem de Dados:** Técnica de abstração planejada para estruturar o domínio da aplicação e garantir a integridade relacional entre usuários, contratos, RVTs e folha. | **Status:** Planejado | **Evidência:** [Detalhamento Metodológico da Unidade 2](../cronograma/index.md#detalhamento-metodologico-por-marco-avaliativo).
*   **Artefatos e Formas de Representação:**
    *   **Matriz de Características de Produto (CARs):** Declaração planejada das grandes capacidades da solução (CAR-01 a CAR-08), ancoradas bidirecionalmente nos Objetivos Específicos (OEs). | **Status:** Realizado | **Evidência:** [Matriz CAR](../visao-produto/capitulo-2/index.md#23-caracteristicas-do-produto-car).
    *   **Histórias de Usuário (*User Stories*):** Especificação funcional ágil planejada no padrão *"Como [papel], eu quero [ação], para que [benefício]"*, contendo critérios de aceitação detalhados em formato de lista em tópicos. | **Status:** Planejado | **Evidência:** [Backlog do Produto](../backlog/index.md).
    *   **Diagrama de Entidade-Relacionamento (DER):** Modelo relacional planejado para o banco de dados PostgreSQL. | **Status:** Planejado | **Evidência:** [Detalhamento Metodológico da Unidade 2](../cronograma/index.md#detalhamento-metodologico-por-marco-avaliativo).

---

### 4. Representação de Requisitos
* **Objetivo Geral:** Traduzir especificações conceituais em modelos visuais tangíveis que facilitem a compreensão e o alinhamento com os usuários.
*   **Técnicas de ER:**
    *   **Prototipação:** Técnica de criação de interfaces navegáveis para validação das estações de trabalho (Desktop) e dispositivos móveis (*mobile-first* para canteiro de obras). | **Status:** Planejado | **Evidência:** [Detalhamento Metodológico da Unidade 2](../cronograma/index.md#detalhamento-metodologico-por-marco-avaliativo).
    *   **Modelagem de Processos:** Elaboração planejada do passo a passo para representação dos fluxos de trabalho do sistema. | **Status:** Planejado | **Evidência:** [Detalhamento Metodológico da Unidade 2](../cronograma/index.md#detalhamento-metodologico-por-marco-avaliativo).
*   **Ferramentas:**
    *   **Figma:** Plataforma planejada para a construção e testes dos protótipos de alta fidelidade. | **Status:** Planejado | **Evidência:** [Lista de Ferramentas Previstas](../visao-produto/capitulo-2/index.md#24-tecnologias-a-serem-utilizadas-e-arquitetura).
*   **Artefatos e Formas de Representação:**
    *   **Protótipos de Alta Fidelidade:** Telas e interfaces navegáveis do sistema planejadas para desktop e mobile. | **Status:** Planejado | **Evidência:** [Detalhamento Metodológico da Unidade 2](../cronograma/index.md#detalhamento-metodologico-por-marco-avaliativo).
    *   **Fluxogramas de Interação e Diagramas de Atividades:** Modelos visuais planejados para detalhar o fluxo de envio e aprovação do RVT e o fechamento da folha. | **Status:** Realizado | **Evidência:** [Fluxo do Ciclo de Validação](../interacao-cliente/index.md#73-processo-de-validacao-sociotecnica-e-homologacao-com-a-cliente).

---

### 5. Verificação e Validação de Requisitos (V&V)
* **Objetivo Geral:** Assegurar a corretude técnica interna dos documentos (Verificação) e confirmar que o software atende às necessidades reais do negócio (Validação).
*   **Técnicas de ER:**
    *   **Inspeção (Fagan Adaptado):** Aplicação planejada de listas de verificação (checklists) de qualidade técnica, completeza e conformidade gramatical na documentação. | **Status:** Planejado | **Evidência:** [Detalhamento Metodológico da Unidade 3](../cronograma/index.md#detalhamento-metodologico-por-marco-avaliativo).
    *   **Sessões Guiadas de Homologação:** Navegação assistida planejada com a cliente Maria Beatryz para validação das telas antes da codificação. **Evidência:** [Detalhamento Metodológico da Unidade 4](../cronograma/index.md#detalhamento-metodologico-por-marco-avaliativo).
    *   **Testes de Aceitação de Usuário (UAT):** Execução planejada de cenários operacionais em ambiente de homologação utilizando dados sintéticos e reais anonimizados da DUOC. | **Status:** Planejado | **Evidência:** [Detalhamento Metodológico da Unidade 4](../cronograma/index.md#detalhamento-metodologico-por-marco-avaliativo).
*   **Ferramentas:**
    *   **GitHub:** Plataforma planejada para a gestão de código e controle do fluxo de aprovação (*Pull Requests* com aprovação de revisor independente para integração na branch `develop`). | **Status:** Realizado | **Evidência:** [GitHub do Projeto](https://mdsreq-fga-unb.github.io/REQ-2026.2-T01-DUOC-Finance/).
    *   **MkDocs:** Ferramenta planejada para publicação e visualização da documentação do projeto. | **Status:** Realizado | **Evidência:** [Lista de Ferramentas Previstas](../visao-produto/capitulo-2/index.md#24-tecnologias-a-serem-utilizadas-e-arquitetura).
    *   **Figma:** Ambiente planejado para a apresentação interativa dos protótipos durante as sessões de homologação. | **Status:** Planejado | **Evidência:** [Lista de Ferramentas Previstas](../visao-produto/capitulo-2/index.md#24-tecnologias-a-serem-utilizadas-e-arquitetura).
*   **Critérios e Acordos de Trabalho Planejados:**
    *   **Definition of Ready (DoR) e Definition of Done (DoD):** Acordos formais estabelecidos para reger a entrada de requisitos em desenvolvimento e a aceitação das entregas finalizadas. | **Status:** Planejado | **Evidência:** [DoR e DoD](../dor-dod/index.md).

---

### 6. Organização e Atualização de Requisitos (Gestão)
* **Objetivo Geral:** Rastrear a evolução dos requisitos ao longo do ciclo de vida, controlar mudanças de escopo e garantir a rastreabilidade bidirecional.
*   **Práticas:**
    *   **Documentação Viva (*Docs as Code*):** Prática planejada de publicação contínua da documentação versionada no Git, garantindo que o portal reflita sempre o estado atual do projeto. | **Status:** Em Execução | **Evidência:** [GitPages do Projeto](https://mdsreq-fga-unb.github.io/REQ-2026.2-T01-DUOC-Finance/).
*   **Ferramentas:**
    *   **GitHub (Issues, Projects e Milestones):** Plataforma planejada para o gerenciamento de configuração e rastreamento de demandas categorizadas por tipo, prioridade e marcos avaliativos de entrega. | **Status:** Realizado | **Evidência:** [GitHub do Projeto](https://mdsreq-fga-unb.github.io/REQ-2026.2-T01-DUOC-Finance/).
    *   **MkDocs:** Ferramenta planejada para gerar e manter a documentação viva da aplicação. | **Status:** Realizado | **Evidência:** [Lista de Ferramentas Previstas](../visao-produto/capitulo-2/index.md#24-tecnologias-a-serem-utilizadas-e-arquitetura).
*   **Artefatos e Formas de Representação:**
    *   **Matriz de Rastreabilidade Bidirecional (*Forward/Backward*):** Artefato planejado que conecta cada Objetivo Específico (OE) às Características (CAR), Requisitos Funcionais (RF), commits e testes. | **Status:** Planejado | **Evidência:** [Detalhamento Metodológico da Unidade 3](../cronograma/index.md#detalhamento-metodologico-por-marco-avaliativo).

---

<a id="52-mapeamento-de-engenharia-de-requisitos-ao-processo"></a>
## 5.2 Mapeamento de Engenharia de Requisitos ao Processo

### Integração entre as Fases do Processo e a Engenharia de Requisitos

Nesta seção, as atividades clássicas de Engenharia de Requisitos (ER), suas práticas e técnicas são mapeadas diretamente sobre as 4 fases do processo **RAD (Rapid Application Development)** e seus ciclos iterativos e incrementais. Essa integração demonstra como a Engenharia de Requisitos ocorre de forma contínua e progressiva ao longo de todo o ciclo de vida do software, onde a modelagem do domínio, a prototipagem de interfaces e as regras de negócio evoluem conjuntamente.

### Tabela Estruturada: Fases do RAD vs. Atividades de ER

| Fase do RAD / Ciclo Iterativo | Atividades de ER Predominantes | Prática Metodológica (RAD / Engenharia) | Elementos de ER Empregados | Status | Evidência | Resultado Esperado / Artefato |
| :--- | :--- | :--- | :--- | :---: | :--- | :--- |
| **Fase 1: Planejamento de Requisitos**<br>*(Iteração 0: Concepção e Diagnóstico)* | Elicitação e Análise de Requisitos | Sessões JAD (*Joint Application Development*), Diagnóstico de Processos, *Docs as Code*. | Entrevistas semiestruturadas com a gestora Maria Beatryz; Análise documental de planilhas legadas; Rich Picture; Ishikawa. | **Realizada** | [Planilhas Sanitizadas no Drive](https://drive.google.com/drive/folders/1e2wQ6ub4BVfte3mmWVXGUZ4cBI2d73Sd?usp=drive_link)<br>[Rich Picture](../visao-produto/capitulo-1/index.md#13-rich-picture-fluxo-sociotecnico)<br>[Ata 1](../atas/index.md#consulta-unificada-por-abas) | Declaração do Problema; Rich Picture; Diagrama de Ishikawa; Matriz de Stakeholders e Permissões (RBAC) preliminar. |
| **Fase 1: Planejamento de Requisitos**<br>*(Iteração 1: Estratégia e Escopo)* | Análise, Especificação e Verificação | Refinamento de Escopo, Esboço Arquitetural, Inspeção de Qualidade. | Priorização MoSCoW; Matriz CAR; Inspeção por checklists (Fagan Adaptado). | **Realizada** | [Matriz CAR](../visao-produto/capitulo-2/index.md#23-caracteristicas-do-produto-car) | Matriz de Características (CAR-01 a CAR-08); Estratégia de Engenharia de Software. |
| **Fase 2: Design do Usuário**<br>*(Iteração 2: Prototipagem e Refinamento de Domínio)* | Especificação, Validação e Gestão de Requisitos | Prototipagem Rápida Evolutiva, Especificação Guiada, Modelagem Incremental. | Prototipagem no Figma (Desktop e Mobile); **Modelo Conceitual/Lógico de Dados**; Sessões Guiadas de Homologação. | **Em Execução** | [Ata da Reunião 3](../atas/index.md#consulta-unificada-por-abas)<br>[Cronograma](../cronograma/index.md#detalhamento-metodologico-por-marco-avaliativo) | Protótipo interativo no Figma; Backlog de Histórias de Usuário (com critérios em lista); Modelo Conceitual/Lógico de Dados ajustado. |
| **Fase 3: Construção**<br>*(Iteração 3: Core e RVT em Campo)* | Especificação Detalhada, Modelagem Física e Verificação | Construção Rápida de Componentes, Integração Contínua (CI), Validação Incremental. | Desenvolvimento NestJS/Supabase; **Schema Físico do Banco de Dados (DER no PostgreSQL)**; Review de Pull Requests no GitHub; Testes de usabilidade móvel. | **Planejada** | [Detalhamento Metodológico da Unidade 3](../cronograma/index.md#detalhamento-metodologico-por-marco-avaliativo) | Schema Físico / DER do PostgreSQL homologado; Módulo funcional de Lançamento de RVT em campo (CAR-01 e CAR-02) em homologação. |
| **Fase 3: Construção**<br>*(Iteração 4: Motor Financeiro)* | Análise de Exceções e Validação Incremental | Desenvolvimento Incremental, Validação Aritmética, *Continuous Delivery*. | Validação de fórmulas de folha e comissões com dados sintéticos e reais anonimizados da DUOC; Testes automatizados de integração. | **Planejada** | [Detalhamento Metodológico da Unidade 4](../cronograma/index.md#detalhamento-metodologico-por-marco-avaliativo) | Motor de Cálculo de Folha e Reembolsos de Despesas (CAR-03 e CAR-04) validado com a cliente. |
| **Fase 3: Construção**<br>*(Iteração 5: Custos e Relatórios)* | Validação de Negócio e Verificação de Segurança | Construção de Dashboards, Testes End-to-End, Auditoria de Conformidade. | Desenvolvimento de dashboards de rentabilidade por contrato; Verificação de regras de controle de acesso (RBAC/LGPD). | **Planejada** | [Detalhamento Metodológico da Unidade 4](../cronograma/index.md#detalhamento-metodologico-por-marco-avaliativo) | Painel de apropriação de custos e rentabilidade funcional (CAR-05 e CAR-06); Controle de acesso e trilha de auditoria ativos (CAR-07 e CAR-08). |
| **Fase 4: Transição / Cutover**<br>*(Iteração 6: Homologação Final e Aceite)* | Validação Final (UAT), Gestão e Transição | Testes Formais de Aceitação, Treinamento Sociotécnico, Implantação do MVP. | Testes Formais de Aceitação de Usuário (UAT); Rastreamento via Matriz Bidirecional (*Forward/Backward*). | **Planejada** | [Detalhamento Metodológico da Unidade 4](../cronograma/index.md#detalhamento-metodologico-por-marco-avaliativo) | Termo de Aceite do MVP assinado pela cliente; Matriz de Rastreabilidade Bidirecional finalizada; Sistema DUOC Finance em produção; Documentação viva (via MkDocs) homologada. |

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 05/09/2026 | Estruturação inicial das atividades e mapeamento ao processo | Carlos Gabriel | Matheus Ribeiro |
| `1.1` | 07/09/2026 | Detalhamento das técnicas de ER e reestruturação da matriz nas fases do RAD | Carlos Gabriel | Matheus Ribeiro Szervinsk |
| `2.0` | 15/09/2026 | Unificação integral dos artefatos 5.1 e 5.2 em página única contínua | Equipe Cascata Ágil | Matheus Ribeiro Szervinsk |
| `2.1` | 20/09/2026 | Padronização taxonômica das seções 5.1 e 5.2 (técnicas, práticas, ferramentas, artefatos e critérios), alinhamento da stack técnica para NestJS/Supabase e especificação do uso de dados sintéticos e reais anonimizados em UAT. | Gustavo Bonifácio | Matheus Ribeiro Szervinsk |
| `2.2` | 21/09/2026 | Ajuste da estratégia de representação e validação de requisitos: UI-First com base no Figma e designs via Frontend, postergando lógica e persistência para após validação do DoR | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
