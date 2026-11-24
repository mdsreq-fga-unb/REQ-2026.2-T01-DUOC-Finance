# Lições Aprendidas e Retrospectivas

## Registro Corporativo de Retrospectivas e Melhoria Contínua

Nesta seção, a equipe **Cascata Ágil** registra de forma transparente as lições aprendidas e retrospectivas conduzidas ao longo do ciclo de vida do projeto **DUOC Finance**. O objetivo é documentar os pontos fortes observados, as vulnerabilidades ou gargalos identificados e os planos de ação corretiva implementados em cada marco avaliativo da disciplina de Requisitos de Software.

---

## Marco Avaliativo 1: Unidade 1 (Planejamento, Visão de Produto e Elicitação Preliminar)

Na Unidade 1, a equipe realizou a imersão inicial no ecossistema da DUOC Arquitetura e Engenharia, diagnosticando dores operacionais e estabelecendo as fundações metodológicas e de arquitetura do sistema.

| Dimensão de Avaliação | Diagnóstico Realizado pela Equipe | Ação de Melhoria Técnica Implementada | Responsável | Prazo | Critério de Avaliação |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Pontos Fortes (O que funcionou bem)** | Excelente receptividade e engajamento da cliente parceira Maria Beatryz; rápida convergência na modelagem do Rich Picture e Ishikawa; estruturação eficiente do ambiente *Docs as Code* via MkDocs com automação no GitHub Actions. | Manter a cadência quinzenal de reuniões síncronas e estruturar pautas objetivas com 24h de antecedência para as sessões de validação. | Eric Araújo | Antes de cada reunião de validação da Unidade 2 | Ata com pauta enviada com pelo menos 24h de antecedência e registro da presença dos participantes. |
| **Pontos Fracos (Gargalos e Dificuldades)** | Dificuldade inicial para calibrar as fronteiras de escopo do MVP (risco de incorporar módulos de engenharia civil em detrimento do núcleo financeiro); divergências preliminares na padronização de formatação e escrita entre os integrantes. | Adotar um checklist editorial objetivo e uma revisão por pares (*Peer Review*) antes de cada merge, com foco nos padrões de formatação e escrita identificados. | Autor da alteração | Em cada merge da Unidade 2 | Checklist editorial preenchido e aprovação de um revisor independente no pull request. |
| **Lições Aprendidas (Aprendizado Prático)** | Durante a definição do MVP, a equipe considerou inicialmente módulos de engenharia civil e precisou retornar o foco ao núcleo financeiro. Na revisão do Rich Picture, também surgiram ambiguidades sobre os fluxos e as fronteiras do sistema. Esses acontecimentos mostraram que o escopo e os fluxos financeiros precisam ser discutidos e validados antes da consolidação das telas e dos dados. | Conduzir prototipação e modelagem de dados de forma iterativa na Unidade 2, validando primeiro os fluxos financeiros críticos e os riscos de domínio antes de consolidar as telas. | Matheus Camargo e Giovana Ferreira | Até o encerramento da Unidade 2, em 15/10/2026 | Fluxos financeiros críticos homologados e consistentes entre protótipo, requisitos e DER. |

---

## Marco Avaliativo 2: Unidade 2 (Elicitação Aprofundada, FURPS+ e Gestão de Backlog)

Na Unidade 2, a equipe aprofundou a elicitação, a modelagem e a gestão de requisitos do *DUOC Finance*, estruturando o sistema em torno dos quatro Objetivos Específicos e incorporando os atributos de qualidade via modelo FURPS+. A aplicação da priorização baseada em valor de negócio, o cruzamento com o esforço técnico estimado e a consolidação da rastreabilidade bidirecional permitiram delimitar o MVP e o backlog evolutivo de forma coerente com as necessidades da *DUOC Arquitetura e Engenharia*. Ao longo do ciclo, a análise crítica interna e o feedback da avaliação em pares evidenciaram oportunidades de melhoria na decomposição de requisitos funcionais amplos, na organização estrutural da documentação no GitHub Pages, na concisão editorial e na representação visual por diagramas.

| Dimensão de Avaliação | Diagnóstico Realizado pela Equipe | Ação de Melhoria Técnica | Responsável | Prazo | Critério de Avaliação |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Pontos Fortes (O que funcionou bem)** | Bom alinhamento com a cliente parceira (Maria Beatryz) durante a elicitação aprofundada e a priorização do núcleo do MVP. A aplicação da escala de valor de negócio, associada ao conhecimento prévio dos gargalos operacionais da empresa (TR-01 a TR-04), permitiu identificar funcionalidades essenciais. A representante reconheceu que os requisitos e objetivos definidos representam adequadamente as dores organizacionais. Observou-se também forte rastreabilidade bidirecional entre objetivos, características (CAR), regras de negócio (RN) e casos de teste (CT), além da modelagem modular consistente e da especificação rigorosa dos atributos de qualidade (FURPS+ e Sommerville). | Manter a participação ativa da cliente nas etapas de validação, registrando atas formais e revisando periodicamente a matriz de rastreabilidade para garantir consistência contínua entre objetivos estratégicos e requisitos técnicos. | Eric Araújo | Reunião de alinhamento Pós entrega Unidade 2 | Ata de reunião de alinhamento com a responsável da empresa |
| **Pontos Fracos (Gargalos e Dificuldades)** | Identificou-se que alguns requisitos funcionais iniciais (como o RF04 original) agrupavam múltiplas ações em uma única especificação, exigindo decomposição modular para garantir testabilidade granular. Na documentação do GitHub Pages, registraram-se oportunidades de aprimoramento na hierarquia de navegação, além de redundâncias editoriais e excesso de elementos visuais que prejudicavam a objetividade. No planejamento do backlog, constatou-se a necessidade de dissociar a complexidade conceitual da estimativa de esforço de desenvolvimento real da equipe, evitando suposições de consenso sem registro documental prévio. | Realizar a decomposição modular dos requisitos funcionais amplos em ações atômicas orientadas a valor. Promover uma revisão editorial rigorosa da documentação no GitHub Pages para eliminar redundâncias, consolidar seções correlatas e otimizar a clareza e a navegação dos artefatos visuais. | Equipe DUOC Finance | Entrega Unidade 2 | Checklist de validação presente em Pull Request |
| **Lições Aprendidas (Aprendizado Prático)** | A Unidade 2 evidenciou que a qualidade da especificação depende criticamente de o escopo ser suficientemente delimitado, compreensível e verificável. A modelagem modular atrelada ao FURPS+ demonstrou que requisitos não funcionais exigem critérios mensuráveis objetivos (como latência, acurácia centesimal e retenção legal). Verificou-se que a rastreabilidade estruturada é indispensável para demonstrar o alinhamento entre as necessidades do negócio e a solução especificada. Por fim, a priorização do MVP baseada no cruzamento de valor e esforço técnico confirmou que o corte de escopo deve ser guiado por evidências reais e ratificação formal, e não por pressuposições consensuais informais. | Adotar critérios mais rigorosos de especificação e revisão em pares para assegurar que cada requisito funcional descreva uma ação atômica e verificável. Instituir ciclos periódicos de calibração do backlog e de enxugamento editorial da documentação, garantindo concisão, rastreabilidade e alinhamento contínuo com as validações da cliente. | Equipe DUOC Finance | Entrega Unidade 2 | Checklist de validação presente em Pull Request |
---

## Marco Avaliativo 3: Unidade 3 (Design do Usuário RAD, Validação de Interfaces e Construção Rápida)

Na Unidade 3 (Entrega 3 / PC3), a equipe consolidou a arquitetura de desenvolvimento (Docker, React SPA, NestJS, Prisma ORM e PostgreSQL), reorganizou a documentação de requisitos no padrão Lumio UI e executou o Ciclo 0 (organização e estrutura) e o Incremento 1 (Cadastro unificado, Autenticação JWT, RBAC de 4 papéis e base RVT), além de estruturar as evidências objetivas de DoR e DoD. A transição entre modelagem e codificação trouxe aprendizados importantes sobre gestão de folgas, rastreabilidade de critérios por evidências e sincronização entre planejamento e execução.

| Dimensão de Avaliação | Diagnóstico Realizado pela Equipe | Ação de Melhoria Técnica | Responsável | Prazo | Critério de Avaliação |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Pontos Fortes (O que funcionou bem)** | Padronização efetiva do ambiente containerizado via Docker (`PR #160`) e entrega técnica completa do Incremento 1 (`PR #167`, `PR #168`, `PR #170`, `PR #172`), com testes unitários e de acesso passando. A separação de DoR e DoD com evidências visuais (testes, containers, endpoints) e o alinhamento interativo entre o cronograma e o detalhamento de ciclos deram transparência total ao andamento real dos incrementos e débitos técnicos. | Manter a exigência de evidências técnicas verificáveis no fechamento de cada incremento (Incrementos 2 e 3) e preservar o vínculo direto entre cronograma, detalhamento de ciclos e matrizes de requisitos. | Equipe Cascata Ágil | Durante os Incrementos 2 e 3 (até 26/11/2026) | DoR e DoD dos Incrementos 2 e 3 registrados com links para PRs, testes unitários/regressão e atas de homologação. |
| **Pontos Fracos (Gargalos e Dificuldades)** | O atraso na integração inicial do banco/ORM e o saneamento de issues documentais (`#122`–`#133`) deslocaram o início da codificação do Incremento 1 para 10/11, comprimindo a folga técnica dos Incrementos 2 e 3. Além disso, identificou-se inicialmente ausência de evidências explícitas vinculadas a cada critério de DoR/DoD e descompasso entre o calendário do cronograma e o detalhamento semanal, exigindo refatoração conjunta. | Antecipar o início do Incremento 3 para domingo (22/11), concentrar fechos e inícios de incrementos em marcos únicos de transição e alocar janela dedicada de correção pós-UAT (27 a 29/11) antes do Cutover. | Equipe Cascata Ágil | Até o início do Cutover (26/11/2026) | Incremento 2 encerrado até 22/11 e Incremento 3 com motor financeiro e auditoria verificados até 26/11. |
| **Lições Aprendidas (Aprendizado Prático)** | A Unidade 3 mostrou que critérios de aceitação, DoR e DoD não podem ser tratados apenas como listas declarativas: cada item precisa estar amarrado a uma evidência concreta (teste automatizado, log de execução ou PR revisado). Também ficou evidente que separar a fase de organização estrutural (Ciclo 0) dos incrementos de código evita mascarar atrasos de infraestrutura e protege a janela crítica de UAT e Cutover na Unidade 4. | Aplicar verificação contínua de DoR/DoD com evidências desde o desenvolvimento de cada módulo e realizar sessões de homologação por incremento (Incr. 1, 2, 3 e Final) integradas ao fluxo de entrega contínua. | Matheus Ribeiro Szervinsk e Equipe Cascata Ágil | Entrega 4 / PC4 (01/12/2026) | 100% dos critérios de DoR/DoD do MVP comprovados com evidências e Termo de Aceite homologado com a cliente. |

---

## Marco Avaliativo 4: Unidade 4 (Construção Final, V&V, UAT e Transição / Cutover)

*(Seção a ser consolidada ao término das entregas e da retrospectiva da Unidade 4).*

| Dimensão de Avaliação | Diagnóstico Previsto | Ação de Melhoria Técnica |
| :--- | :--- | :--- |
| **Pontos Fortes** | *A registrar ao final do ciclo da Unidade 4.* | *A definir.* |
| **Pontos Fracos** | *A registrar ao final do ciclo da Unidade 4.* | *A definir.* |
| **Lições Aprendidas** | *A registrar ao final do ciclo da Unidade 4.* | *A definir.* |

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 05/09/2026 | Estruturação inicial do template de retrospectivas e melhoria contínua | Matheus Ribeiro Szervinsk | Matheus Ribeiro Szervinsk |
| `1.1` | 07/09/2026 | Registro formal das lições aprendidas da Unidade 1 e padronização | Matheus Ribeiro Szervinsk | Matheus Ribeiro Szervinsk |
| `1.2` | 07/09/2026 | Reestruturação dos marcos de retrospectiva para contemplar as 4 Unidades letivas | Matheus Ribeiro | Eric Araújo |
| `1.3` | 12/10/2026 | Adição da versão preliminar do Marco Avaliativo 2 (Unidade 2) com estruturação de pontos fortes, fracos e lições aprendidas baseada nas experiências do ciclo. | Gustavo Bonifácio | Eric Araújo |
| `1.4` | 12/10/2026 | Refatoração e aprimoramento do Marco Avaliativo 2: alinhamento com os requisitos da issue (elicitação, FURPS+, modelagem modular, backlog e rastreabilidade), substituição de MoSCoW por valor de negócio vs. esforço técnico, refinamento dos diagnósticos e preenchimento das colunas de responsável, prazo e critério de avaliação. | Gustavo Bonifácio | Eric Araújo |
| `1.5` | 17/11/2026 | Consolidação do Marco Avaliativo 3 (Unidade 3 / PC3) com pontos fortes, gargalos de transição e lições aprendidas sobre evidências de DoR/DoD, Docker/Incremento 1 e sincronização do cronograma. | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |