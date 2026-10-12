# Capítulo 11 — Lições Aprendidas

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
| **Pontos Fortes (O que funcionou bem)** | Bom alinhamento com a cliente parceira (Maria Beatryz) durante a elicitação aprofundada e a priorização do núcleo do MVP. A aplicação da escala de valor de negócio, associada ao conhecimento prévio dos gargalos operacionais da empresa (TR-01 a TR-04), permitiu identificar funcionalidades essenciais. A representante reconheceu que os requisitos e objetivos definidos representam adequadamente as dores organizacionais. Observou-se também forte rastreabilidade bidirecional entre objetivos, características (CAR), regras de negócio (RN) e casos de teste (CT), além da modelagem modular consistente e da especificação rigorosa dos atributos de qualidade (FURPS+ e Sommerville). | Manter a participação ativa da cliente nas etapas de validação, registrando atas formais e revisando periodicamente a matriz de rastreabilidade para garantir consistência contínua entre objetivos estratégicos e requisitos técnicos. | | | |
| **Pontos Fracos (Gargalos e Dificuldades)** | Identificou-se que alguns requisitos funcionais iniciais (como o RF04 original) agrupavam múltiplas ações em uma única especificação, exigindo decomposição modular para garantir testabilidade granular. Na documentação do GitHub Pages, registraram-se oportunidades de aprimoramento na hierarquia de navegação, além de redundâncias editoriais e excesso de elementos visuais que prejudicavam a objetividade. No planejamento do backlog, constatou-se a necessidade de dissociar a complexidade conceitual da estimativa de esforço de desenvolvimento real da equipe, evitando suposições de consenso sem registro documental prévio. | Realizar a decomposição modular dos requisitos funcionais amplos em ações atômicas orientadas a valor. Promover uma revisão editorial rigorosa da documentação no GitHub Pages para eliminar redundâncias, consolidar seções correlatas e otimizar a clareza e a navegação dos artefatos visuais. | | | |
| **Lições Aprendidas (Aprendizado Prático)** | A Unidade 2 evidenciou que a qualidade da especificação depende criticamente de o escopo ser suficientemente delimitado, compreensível e verificável. A modelagem modular atrelada ao FURPS+ demonstrou que requisitos não funcionais exigem critérios mensuráveis objetivos (como latência, acurácia centesimal e retenção legal). Verificou-se que a rastreabilidade estruturada é indispensável para demonstrar o alinhamento entre as necessidades do negócio e a solução especificada. Por fim, a priorização do MVP baseada no cruzamento de valor e esforço técnico confirmou que o corte de escopo deve ser guiado por evidências reais e ratificação formal, e não por pressuposições consensuais informais. | Adotar critérios mais rigorosos de especificação e revisão em pares para assegurar que cada requisito funcional descreva uma ação atômica e verificável. Instituir ciclos periódicos de calibração do backlog e de enxugamento editorial da documentação, garantindo concisão, rastreabilidade e alinhamento contínuo com as validações da cliente. | | | |

---

## Marco Avaliativo 3: Unidade 3 (Design do Usuário RAD, Validação de Interfaces e Construção Rápida)

*(Seção a ser consolidada ao término das entregas e da retrospectiva da Unidade 3).*

| Dimensão de Avaliação | Diagnóstico Previsto | Ação de Melhoria Técnica |
| :--- | :--- | :--- |
| **Pontos Fortes** | *A registrar ao final do ciclo da Unidade 3.* | *A definir.* |
| **Pontos Fracos** | *A registrar ao final do ciclo da Unidade 3.* | *A definir.* |
| **Lições Aprendidas** | *A registrar ao final do ciclo da Unidade 3.* | *A definir.* |

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