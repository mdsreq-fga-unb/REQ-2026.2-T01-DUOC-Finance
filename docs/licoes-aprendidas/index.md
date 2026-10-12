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

Na Unidade 2, a equipe aprofundou a elicitação e a especificação dos requisitos do DUOC Finance, buscando alinhar a solução às necessidades da DUOC Arquitetura e Engenharia. A aplicação da priorização MoSCoW e a consolidação da rastreabilidade entre objetivos, requisitos e demais elementos do projeto contribuíram para a construção de uma solução coerente com as dores identificadas junto à cliente. Ao longo do ciclo, também foram identificadas oportunidades de melhoria na decomposição dos requisitos funcionais, na organização da documentação no GitHub Pages e na apresentação das informações e dos diagramas.

| Dimensão de Avaliação | Diagnóstico Realizado pela Equipe | Ação de Melhoria Técnica | Responsável | Prazo | Critério de Avaliação |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Pontos Fortes (O que funcionou bem)** | Bom alinhamento com a cliente parceira durante a elicitação e a priorização dos requisitos. A aplicação do método MoSCoW, associada ao conhecimento previamente adquirido sobre as demandas e os gargalos operacionais da empresa, permitiu identificar e priorizar funcionalidades coerentes com suas necessidades. A representante da empresa reconheceu que os requisitos e objetivos definidos representavam adequadamente as dores que a solução busca resolver. Além disso, a equipe estabeleceu uma rastreabilidade consistente entre os requisitos, os objetivos estratégicos e os objetivos específicos, permitindo compreender a relação de cada requisito com as metas do projeto. | Manter a participação da cliente nas etapas de elicitação e validação, documentando os feedbacks recebidos. Preservar e atualizar continuamente a matriz de rastreabilidade, verificando a consistência entre os objetivos, os requisitos funcionais e não funcionais e os demais artefatos do projeto. |  |  |  |
| **Pontos Fracos (Gargalos e Dificuldades)** | Alguns requisitos funcionais foram definidos com escopo excessivamente amplo, agrupando diferentes funcionalidades que deveriam ter sido especificadas em requisitos separados. Também foram identificadas oportunidades de melhoria na organização e na navegação da documentação disponibilizada no GitHub Pages. Adicionalmente, a repetição de informações em diferentes seções e a quantidade de diagramas e elementos visuais dificultaram a objetividade e a consulta aos artefatos, tornando necessária uma revisão da estrutura e da apresentação do conteúdo. | Revisar e decompor os requisitos funcionais excessivamente abrangentes, buscando garantir que cada requisito represente uma funcionalidade clara, específica e verificável. Reorganizar a documentação do GitHub Pages para melhorar a navegação e a hierarquia das informações. Realizar uma revisão editorial dos artefatos, eliminando redundâncias, consolidando informações relacionadas e mantendo apenas os diagramas que agreguem valor à compreensão do projeto. |  |  |  |
| **Lições Aprendidas (Aprendizado Prático)** | A Unidade 2 evidenciou que a qualidade da especificação depende tanto do entendimento das necessidades da cliente quanto da forma como essas necessidades são traduzidas em requisitos. Agrupar diversas funcionalidades em um único requisito pode dificultar sua compreensão, rastreabilidade, validação e implementação. A equipe também identificou que uma documentação completa não é necessariamente uma documentação mais eficiente quando apresenta informações repetidas ou uma organização pouco intuitiva. Por outro lado, a rastreabilidade estruturada demonstrou seu valor ao permitir relacionar as funcionalidades propostas aos objetivos que justificam sua existência, reforçando a coerência entre as necessidades do negócio e a solução especificada. | Adotar critérios mais rigorosos para a decomposição e a revisão dos requisitos, verificando se cada um descreve uma funcionalidade suficientemente específica e verificável. Estabelecer revisões periódicas da documentação com foco em clareza, organização, concisão e rastreabilidade. Antes de incluir novos diagramas ou repetir informações, avaliar se o conteúdo acrescenta uma perspectiva relevante ou se pode ser apresentado de maneira mais simples em um artefato já existente. |  |  |  |

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