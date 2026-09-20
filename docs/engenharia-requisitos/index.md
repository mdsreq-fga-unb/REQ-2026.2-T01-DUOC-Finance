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
*   **Técnicas de ER Planejadas:**
    *   **Entrevistas Semiestruturadas com Stakeholder Chave:** Condução planejada de reuniões síncronas com a sócia-administradora Maria Beatryz para mapear a rotina de fechamento de folha, gestão de canteiros e cálculo de comissões.
    *   **Análise Documental:** Análise planejada da documentação operacional utilizada na rotina da empresa.
*   **Práticas Planejadas:**
    *   **Workshops de Descoberta Operacional:** Sessões colaborativas planejadas para a equipe decompor as dores do cenário atual.
*   **Artefatos e Formas de Representação Planejados:**
    *   **Artefatos Legados e Documentos de Negócio:** Planilhas eletrônicas de controle financeiro, modelos impressos de RVT e relatórios de despesas operacionais planejados para análise.
    *   **Fluxos Transacionais (TR-01 a TR-04):** Mapeamento dos fluxos de trabalho atuais planejados para decomposição a partir das dores identificadas.

---

### 2. Análise e Consenso de Requisitos
* **Objetivo Geral:** Estruturar, desambiguar e delimitar as fronteiras do sistema, resolvendo conflitos de interesse e priorizando o escopo viável.
*   **Técnicas de ER Planejadas:**
    *   **Rich Picture (Soft Systems Methodology):** Modelagem visual planejada do ecossistema sociotécnico da DUOC para explicitar fluxos informacionais, zonas de atrito e as fronteiras do produto proposto.
    *   **Diagrama de Causa e Efeito (Ishikawa):** Desdobramento analítico planejado das causas-raiz do problema central em quatro dimensões fundamentais (Métodos, Tecnologia, Pessoas e Medição).
    *   **Priorização MoSCoW:** Classificação planejada das necessidades em *Must have*, *Should have*, *Could have* e *Won't have*, garantindo o foco estrito no MVP de Departamento Pessoal e Financeiro.
*   **Artefatos e Formas de Representação Planejados:**
    *   **Matriz de Stakeholders e Permissões (RBAC):** Mapeamento planejado do grau de influência e interesse das partes afetadas, definindo a matriz de perfis de acesso sob o princípio do menor privilégio.

---

### 3. Declaração e Especificação de Requisitos
* **Objetivo Geral:** Registrar formalmente as necessidades de software de maneira clara, verificável e compreensível para negócio e desenvolvimento.
*   **Técnicas de ER Planejadas:**
    *   **Modelagem de Dados:** Técnica de abstração planejada para estruturar o domínio da aplicação e garantir a integridade relacional entre usuários, contratos, RVTs e folha.
*   **Artefatos e Formas de Representação Planejados:**
    *   **Matriz de Características de Produto (CARs):** Declaração planejada das grandes capacidades da solução (CAR-01 a CAR-08), ancoradas bidirecionalmente nos Objetivos Específicos (OEs).
    *   **Histórias de Usuário (*User Stories*):** Especificação funcional ágil planejada no padrão *"Como [papel], eu quero [ação], para que [benefício]"*, contendo critérios de aceitação detalhados em formato de lista em tópicos.
    *   **Diagrama de Entidade-Relacionamento (DER):** Modelo relacional planejado para o banco de dados PostgreSQL.

---

### 4. Representação de Requisitos
* **Objetivo Geral:** Traduzir especificações conceituais em modelos visuais tangíveis que facilitem a compreensão e o alinhamento com os usuários.
*   **Técnicas de ER Planejadas:**
    *   **Prototipação:** Técnica de criação de interfaces navegáveis para validação das estações de trabalho (Desktop) e dispositivos móveis (*mobile-first* para canteiro de obras).
    *   **Modelagem de Processos:** Elaboração planejada do passo a passo para representação dos fluxos de trabalho do sistema.
*   **Ferramentas Planejadas:**
    *   **Figma:** Plataforma planejada para a construção e testes dos protótipos de alta fidelidade.
*   **Artefatos e Formas de Representação Planejados:**
    *   **Protótipos de Alta Fidelidade:** Telas e interfaces navegáveis do sistema planejadas para desktop e mobile.
    *   **Fluxogramas de Interação e Diagramas de Atividades:** Modelos visuais planejados para detalhar o fluxo de envio e aprovação do RVT e o fechamento da folha.

---

### 5. Verificação e Validação de Requisitos (V&V)
* **Objetivo Geral:** Assegurar a corretude técnica interna dos documentos (Verificação) e confirmar que o software atende às necessidades reais do negócio (Validação).
*   **Técnicas de ER Planejadas:**
    *   **Inspeção (Fagan Adaptado):** Aplicação planejada de listas de verificação (checklists) de qualidade técnica, completeza e conformidade gramatical na documentação.
    *   **Sessões Guiadas de Homologação:** Navegação assistida planejada com a cliente Maria Beatryz para validação das telas antes da codificação.
    *   **Testes de Aceitação de Usuário (UAT):** Execução planejada de cenários operacionais em ambiente de homologação utilizando dados sintéticos e reais anonimizados da DUOC.
*   **Práticas Planejadas:**
    *   **Revisão por Pares (*Peer Review*):** Fluxo planejado de revisão colaborativa para liberação de artefatos.
*   **Ferramentas Planejadas:**
    *   **GitHub:** Plataforma planejada para a gestão de código e controle do fluxo de aprovação (*Pull Requests* com aprovação de revisor independente para integração na branch `develop`).
    *   **MkDocs:** Ferramenta planejada para publicação e visualização da documentação do projeto.
    *   **Figma:** Ambiente planejado para a apresentação interativa dos protótipos durante as sessões de homologação.
*   **Critérios e Acordos de Trabalho Planejados:**
    *   **Definition of Ready (DoR) e Definition of Done (DoD):** Acordos formais estabelecidos para reger a entrada de requisitos em desenvolvimento e a aceitação das entregas finalizadas.

---

### 6. Organização e Atualização de Requisitos (Gestão)
* **Objetivo Geral:** Rastrear a evolução dos requisitos ao longo do ciclo de vida, controlar mudanças de escopo e garantir a rastreabilidade bidirecional.
*   **Práticas Planejadas:**
    *   **Documentação Viva (*Docs as Code*):** Prática planejada de publicação contínua da documentação versionada no Git, garantindo que o portal reflita sempre o estado atual do projeto.
*   **Ferramentas Planejadas:**
    *   **GitHub (Issues, Projects e Milestones):** Plataforma planejada para o gerenciamento de configuração e rastreamento de demandas categorizadas por tipo, prioridade e marcos avaliativos de entrega.
    *   **MkDocs:** Ferramenta planejada para gerar e manter a documentação viva da aplicação.
*   **Artefatos e Formas de Representação Planejados:**
    *   **Matriz de Rastreabilidade Bidirecional (*Forward/Backward*):** Artefato planejado que conecta cada Objetivo Específico (OE) às Características (CAR), Requisitos Funcionais (RF), commits e testes.

---

<a id="52-mapeamento-de-engenharia-de-requisitos-ao-processo"></a>
## 5.2 Mapeamento de Engenharia de Requisitos ao Processo

### Integração entre as Fases do Processo e a Engenharia de Requisitos

Nesta seção, as atividades clássicas de Engenharia de Requisitos (ER), suas práticas e técnicas são mapeadas diretamente sobre as 4 fases do processo **RAD (Rapid Application Development)** e seus ciclos iterativos e incrementais. Essa integração demonstra como a Engenharia de Requisitos ocorre de forma contínua e progressiva ao longo de todo o ciclo de vida do software, onde a modelagem do domínio, a prototipagem de interfaces e as regras de negócio evoluem conjuntamente.

### Tabela Estruturada: Fases do RAD vs. Atividades de ER

| Fase do RAD / Ciclo Iterativo | Atividades de ER Predominantes | Prática Metodológica (RAD / Engenharia) | Técnica Empregada | Resultado Esperado / Artefato |
| :--- | :--- | :--- | :--- | :--- |
| **Fase 1: Planejamento de Requisitos**<br>*(Iteração 0: Concepção e Diagnóstico)* | Elicitação e Análise de Requisitos | Sessões JAD (*Joint Application Development*), Diagnóstico de Processos, *Docs as Code*. | Entrevistas semiestruturadas com a gestora Maria Beatryz; Análise documental de planilhas; Rich Picture; Ishikawa. | Declaração do Problema; Rich Picture; Diagrama de Ishikawa; Matriz de Stakeholders e Permissões (RBAC) preliminar. |
| **Fase 1: Planejamento de Requisitos**<br>*(Iteração 1: Estratégia e Escopo)* | Análise, Especificação e Verificação | Refinamento de Escopo, Esboço Arquitetural, Revisão por Pares (*Peer Review*). | Priorização MoSCoW; Modelagem conceitual de dados; Inspeção por checklists (Fagan Adaptado). | Matriz de Características (CAR-01 a CAR-08); Estratégia de ESW; Modelo Conceitual de Dados preliminar. |
| **Fase 2: Design do Usuário**<br>*(Iteração 2: Prototipagem e Refinamento de Domínio)* | Especificação, Validação e Gestão de Requisitos | Prototipagem Rápida Evolutiva, Sessão JAD de Aceite de Telas, Especificação Guiada. | Prototipagem no Figma (Desktop e Mobile); Modelagem lógica do domínio (evolução conjunta com as telas); Sessões Guiadas de Homologação. | Protótipo interativo de alta fidelidade no Figma homologado; Backlog de Histórias de Usuário (com critérios em lista); Modelo Lógico de Dados ajustado. |
| **Fase 3: Construção**<br>*(Iteração 3: Core e RVT em Campo)* | Especificação Detalhada, Modelagem Física e Verificação | Construção Rápida de Componentes, Integração Contínua (CI), Testes Automatizados. | Desenvolvimento NestJS/Supabase; Consolidação do DER no PostgreSQL; Code Review via Pull Requests no GitHub; Testes de usabilidade móvel. | Diagrama de Entidade-Relacionamento (DER) do PostgreSQL homologado; Módulo funcional de Lançamento de RVT em campo (CAR-01 e CAR-02) em homologação. |
| **Fase 3: Construção**<br>*(Iteração 4: Motor Financeiro)* | Análise de Exceções e Validação Incremental | Desenvolvimento Incremental, Validação Aritmética, *Continuous Delivery*. | Validação de fórmulas de folha e comissões com dados sintéticos e reais anonimizados da DUOC; Testes automatizados de integração. | Motor de Cálculo de Folha e Reembolsos de Despesas (CAR-03 e CAR-04) validado com a cliente. |
| **Fase 3: Construção**<br>*(Iteração 5: Custos e Relatórios)* | Validação de Negócio e Verificação de Segurança | Construção de Dashboards, Testes End-to-End, Auditoria de Conformidade. | Desenvolvimento de dashboards de rentabilidade por contrato; Verificação de regras de controle de acesso (RBAC/LGPD). | Painel de apropriação de custos e rentabilidade funcional (CAR-05 e CAR-06); Controle de acesso e trilha de auditoria ativos (CAR-07 e CAR-08). |
| **Fase 4: Transição / Cutover**<br>*(Iteração 6: Homologação Final e Aceite)* | Validação Final (UAT), Gestão e Transição | Testes Formais de Aceitação, Treinamento Sociotécnico, Implantação do MVP. | Testes Formais de Aceitação de Usuário (UAT); Rastreamento via Matriz Bidirecional (*Forward/Backward*). | Termo de Aceite do MVP assinado pela cliente; Matriz de Rastreabilidade Bidirecional finalizada; Sistema DUOC Finance em produção; Documentação viva (via MkDocs) homologada. |

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 05/09/2026 | Estruturação inicial das atividades e mapeamento ao processo | Carlos Gabriel | Matheus Ribeiro |
| `1.1` | 07/09/2026 | Detalhamento das técnicas de ER e reestruturação da matriz nas fases do RAD | Carlos Gabriel | Matheus Ribeiro Szervinsk |
| `2.0` | 15/09/2026 | Unificação integral dos artefatos 5.1 e 5.2 em página única contínua | Equipe Cascata Ágil | Matheus Ribeiro Szervinsk |
| `2.1` | 20/09/2026 | Padronização taxonômica das seções 5.1 e 5.2 (técnicas, práticas, ferramentas, artefatos e critérios), alinhamento da stack técnica para NestJS/Supabase e especificação do uso de dados sintéticos e reais anonimizados em UAT. | Gustavo Bonifácio | Matheus Ribeiro Szervinsk |