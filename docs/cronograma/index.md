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

## Tabela Estruturada dos 4 Marcos Avaliativos (Unidades 1 a 4)

| Marco de Entrega | Período de Execução | Fase do Ciclo RAD | Atividades Metodológicas de Engenharia de Requisitos | Produtos e Artefatos Gerados | Status Atual |
| :--- | :---: | :--- | :--- | :--- | :---: |
| **Unidade 1**<br>*(Ponto de Controle 1)* | 11/08/2026 a 08/09/2026 | **Fase 1:** Planejamento de Requisitos | - Elicitação preliminar com Maria Beatryz (DUOC)<br>- Diagnóstico causal do problema e delimitação do escopo MVP<br>- Calibração da abordagem híbrida (RAD) no *Mixer Board*<br>- Implantação da infraestrutura *Docs as Code* (MkDocs / GH Pages) | - Visão de Produto e Projeto preliminar<br>- Rich Picture sistêmico e Diagrama de Ishikawa<br>- Matriz de Stakeholders e Perfis de IHC<br>- Matriz de Características (CAR-01 a CAR-04)<br>- Repositório de Atas de Reunião e Governança | :white_check_mark: **Concluída** |
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
| **Semana 03**<br>29/08 a 08/09/2026 | Fase 1: Planejamento | - **Produção integral e homologação para a Entrega 1:**<br>  * Realização da **Reunião 02** (alinhamento metodológico RAD)<br>  * Formalização do Rich Picture sistêmico com fronteiras e fluxos<br>  * Elaboração do Diagrama de Causa e Efeito (Ishikawa)<br>  * Mapeamento de Stakeholders (Poder x Interesse) e IHC<br>  * Purificação dos Objetivos Específicos e definição de CAR-01 a CAR-04<br>  * Calibração do *Mixer Board* (RAD) e Estratégia de ESW<br>  * Definição da governança, Matriz de Comunicação e fluxo de validação no Figma (DoR/DoD)<br>  * Configuração do portal *Docs as Code* (MkDocs Material, busca interativa, temas e automação via GitHub Actions)<br>  * Gravação do vídeo oficial da Entrega 1 e fechamento do Ponto de Controle 1 em 08/09/2026 | - Portal MkDocs publicado no GitHub Pages com 13 capítulos estruturados<br>- Páginas de Atas de Reuniões 01 e 02<br>- Painel de Entregas (Entrega 1 completa e templates 2 a 4)<br>- Vídeo da Entrega 1 gravado e indexado | Todos os integrantes da equipe | :white_check_mark: Feito |

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