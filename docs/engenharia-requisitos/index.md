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

Nesta seção é formalizada a vinculação entre as seis atividades clássicas da Engenharia de Requisitos (Kotonya & Sommerville, Wiegers & Beatty) e as técnicas e ferramentas concretas aplicadas pela equipe Cascata Ágil no projeto **DUOC Finance**.

### 1. Elicitação e Descoberta de Requisitos
* **Objetivo Geral:** Descobrir as necessidades operacionais reais, regras de negócio e expectativas sociotécnicas dos atores da DUOC.
* **Técnicas e Práticas Empregadas:**
    * **Entrevistas Semiestruturadas com Stakeholder Chave:** Condução de reuniões síncronas com a sócia-administradora Maria Beatryz para mapear a rotina de fechamento de folha, gestão de canteiros e cálculo de comissões.
    * **Análise Documental e Engenharia Reversa de Artefatos Legados:** Análise minuciosa de planilhas eletrônicas de controle financeiro, modelos impressos de RVT e relatórios de despesas operacionais utilizados na rotina da empresa.
    * **Workshops de Descoberta Operacional:** Sessões colaborativas da equipe para decompor as dores do cenário atual em fluxos transacionais (TR-01 a TR-04).

---

### 2. Análise e Consenso de Requisitos
* **Objetivo Geral:** Estruturar, desambiguar e delimitar as fronteiras do sistema, resolvendo conflitos de interesse e priorizando o escopo viável.
* **Técnicas e Práticas Empregadas:**
    * **Rich Picture (Soft Systems Methodology):** Modelagem visual do ecossistema sociotécnico da DUOC para explicitar fluxos informacionais, zonas de atrito e as fronteiras do produto proposto.
    * **Diagrama de Causa e Efeito (Ishikawa):** Desdobramento analítico das causas-raiz do problema central em quatro dimensões fundamentais (Métodos, Tecnologia, Pessoas e Medição).
    * **Matriz de Stakeholders e Permissões (RBAC):** Mapeamento do grau de influência e interesse das partes afetadas, definindo perfis de acesso sob o princípio do menor privilégio.
    * **Priorização MoSCoW:** Classificação das necessidades em *Must have*, *Should have*, *Could have* e *Won't have*, garantindo o foco estrito no MVP de Departamento Pessoal e Financeiro.

---

### 3. Declaração e Especificação de Requisitos
* **Objetivo Geral:** Registrar formalmente as necessidades de software de maneira clara, verificável e compreensível para negócio e desenvolvimento.
* **Técnicas e Práticas Empregadas:**
    * **Matriz de Características de Produto (CARs):** Declaração preliminar das grandes capacidades da solução (CAR-01 a CAR-08), ancoradas bidirecionalmente nos Objetivos Específicos (OEs).
    * **Histórias de Usuário (*User Stories*):** Especificação funcional ágil no padrão *"Como [papel], eu quero [ação], para que [benefício]"*.
    * **Cenários BDD (*Behavior-Driven Development*):** Escrita de critérios formais de aceite na sintaxe *Dado-Quando-Então* (Gherkin), servindo de base direta para testes automatizados.
    * **Modelagem de Domínio / DER:** Elaboração do Diagrama Entidade-Relacionamento no PostgreSQL para assegurar a integridade relacional entre usuários, contratos, RVTs e folha.

---

### 4. Representação de Requisitos
* **Objetivo Geral:** Traduzir especificações conceituais em modelos visuais tangíveis que facilitem a compreensão e o alinhamento com os usuários.
* **Técnicas e Práticas Empregadas:**
    * **Prototipação de Alta Fidelidade no Figma:** Construção de interfaces navegáveis para estações de trabalho (Desktop) e dispositivos móveis (*mobile-first* para canteiro de obras).
    * **Fluxogramas de Interação e Diagramas de Atividades:** Modelagem do passo a passo do fluxo de envio e aprovação do RVT e fechamento da folha.

---

### 5. Verificação e Validação de Requisitos (V&V)
* **Objetivo Geral:** Assegurar a corretude técnica interna dos documentos (Verificação) e confirmar que o software atende às necessidades reais do negócio (Validação).
* **Técnicas e Práticas Empregadas:**
    * **Inspeção por Checklists (Fagan Adaptado):** Aplicação sistemática de listas de verificação de qualidade técnica, completeza e conformidade gramatical nas páginas do portal MkDocs.
    * **Revisão por Pares (*Peer Review*):** Fluxo obrigatório no GitHub no qual nenhum artefato ou código é integrado à branch `develop` sem aprovação prévia de pelo menos um revisor independente.
    * **Sessões Guiadas de Homologação de Protótipo:** Navegação assistida com a cliente Maria Beatryz no protótipo interativo do Figma para coleta formal de aceite antes da codificação de persistência.
    * **Testes de Aceitação de Usuário (UAT):** Execução de cenários operacionais em ambiente de homologação utilizando dados reais anonimizados da DUOC.

---

### 6. Organização e Atualização de Requisitos (Gestão)
* **Objetivo Geral:** Rastrear a evolução dos requisitos ao longo do ciclo de vida, controlar mudanças de escopo e garantir a rastreabilidade bidirecional.
* **Técnicas e Práticas Empregadas:**
    * **Matriz de Rastreabilidade Bidirecional (*Forward/Backward*):** Mapeamento que conecta cada Objetivo Específico (OE) às Características (CAR), Requisitos Funcionais (RF), commits e testes.
    * **Gerenciamento de Configuração via GitHub (Issues, Projects e Milestones):** Rastreamento de demandas categorizadas por tipo, prioridade e marcos avaliativos de entrega.
    * **Documentação Viva (*Docs as Code* via MkDocs):** Publicação contínua da documentação versionada no Git, garantindo que o portal reflita sempre o estado atual do projeto.

---

<a id="52-mapeamento-de-engenharia-de-requisitos-ao-processo"></a>
## 5.2 Mapeamento de Engenharia de Requisitos ao Processo

### Integração entre as Fases do Processo e a Engenharia de Requisitos

Nesta seção, as atividades clássicas de Engenharia de Requisitos (ER), suas práticas e técnicas são mapeadas diretamente sobre as 4 fases do processo **RAD (Rapid Application Development)** e seus ciclos iterativos e incrementais. Essa integração demonstra como a Engenharia de Requisitos ocorre de forma contínua e progressiva ao longo de todo o ciclo de vida do software, combinando o rigor analítico do planejamento com a agilidade da prototipagem e construção.

### Tabela Estruturada: Fases do RAD vs. Atividades de ER

| Fase do RAD / Ciclo Iterativo | Atividades de ER Predominantes | Prática Metodológica (RAD / Engenharia) | Técnica Empregada | Resultado Esperado / Artefato |
| :--- | :--- | :--- | :--- | :--- |
| **Fase 1: Planejamento de Requisitos**<br>*(Iteração 0: Concepção e Diagnóstico)* | Elicitação e Análise de Requisitos | Sessões JAD (*Joint Application Development*), Diagnóstico de Processos, *Docs as Code*. | Entrevistas estruturadas com a gestora Maria Beatryz; Análise documental de planilhas de Excel; Rich Picture; Ishikawa. | Declaração do Problema; Rich Picture; Diagrama de Ishikawa; Matriz de Stakeholders preliminar. |
| **Fase 1: Planejamento de Requisitos**<br>*(Iteração 1: Estratégia e Modelagem)* | Análise, Especificação e Verificação | Refinamento de Escopo, Modelagem Arquitetural, Inspeção por Pares (*Peer Review*). | Matriz MoSCoW; Calibração no *Mixer Board*; Modelagem de Domínio Relacional (DER); Checklists de inspeção Fagan. | Matriz de Características (CAR-01 a CAR-08); Estratégia de ESW; DER do PostgreSQL homologado. |
| **Fase 2: Design do Usuário**<br>*(Iteração 2: Prototipagem e Validação)* | Especificação, Validação e Gestão de Requisitos | Prototipagem Rápida Evolutiva, Sessão JAD de Aceite de Telas, Especificação Guiada. | Prototipagem de Alta Fidelidade no Figma (Desktop e Mobile); Histórias de Usuário com critérios BDD; Validação assistida. | Protótipo interativo completo no Figma homologado por Maria Beatryz; Backlog de Histórias de Usuário BDD. |
| **Fase 3: Construção**<br>*(Iteração 3: Core e RVT em Campo)* | Especificação Detalhada e Verificação | Construção Rápida de Componentes, Integração Contínua (CI), Testes Automatizados. | Desenvolvimento React/FastAPI; Testes unitários automatizados; Code Review via Pull Requests; Testes de usabilidade móvel. | Módulo funcional de Cadastro e Lançamento de RVT em campo (CAR-01 e CAR-02) publicado em homologação. |
| **Fase 3: Construção**<br>*(Iteração 4: Motor Financeiro)* | Análise de Exceções e Validação Incremental | Desenvolvimento Incremental, Validação Aritmética, *Continuous Delivery*. | Validação de fórmulas de folha e comissões com dados reais da DUOC; Testes automatizados de integração financeira. | Motor de Cálculo de Folha e Reembolsos de Despesas (CAR-03 e CAR-04) validado com a cliente. |
| **Fase 3: Construção**<br>*(Iteração 5: Custos e Relatórios)* | Validação de Negócio e Verificação de Segurança | Construção de Dashboards, Testes End-to-End, Auditoria de Conformidade. | Desenvolvimento de dashboards de rentabilidade por contrato; Verificação de regras de controle de acesso (RBAC/LGPD). | Painel de apropriação de custos e rentabilidade funcional (CAR-05 e CAR-06); Controle de acesso e trilha de auditoria ativos (CAR-07 e CAR-08). |
| **Fase 4: Transição / Cutover**<br>*(Iteração 6: Homologação Final e Aceite)* | Validação Final (UAT), Gestão e Transição | Testes Formais de Aceitação, Treinamento Sociotécnico, Implantação do MVP. | Testes Formais de Aceitação de Usuário (UAT); Matriz de Rastreabilidade Bidirecional (*Forward/Backward*); Manual operacional. | Termo de Aceite do MVP assinado pela cliente; Sistema DUOC Finance em produção; Documentação final homologada. |

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 05/09/2026 | Estruturação inicial das atividades e mapeamento ao processo | Carlos Gabriel | Matheus Ribeiro |
| `1.1` | 07/09/2026 | Detalhamento das técnicas de ER e reestruturação da matriz nas fases do RAD | Carlos Gabriel | Matheus Ribeiro Szervinsk |
| `2.0` | 15/09/2026 | Unificação integral dos artefatos 5.1 e 5.2 em página única contínua | Equipe Cascata Ágil | Matheus Ribeiro Szervinsk |