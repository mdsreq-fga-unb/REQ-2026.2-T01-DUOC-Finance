# Estratégias de Organização e Boas Práticas no GitHub

Este documento consolida as **estratégias de organização da documentação** adotadas pela equipe **Cascata Ágil** a partir da Unidade 2 e formaliza as **boas práticas de utilização do GitHub**, fluxo de branches, revisão de código e rastreabilidade operacional aplicadas no desenvolvimento do ***DUOC Finance***.

---

## 1. Estratégias de Organização da Documentação (Unidade 2 em diante)

A partir dos feedbacks recebidos na transição da Unidade 1 para a Unidade 2, a equipe reestruturou a arquitetura informacional do portal MkDocs para eliminar redundâncias, evitar divergências entre páginas e tornar o processo de Engenharia de Requisitos navegável de ponta a ponta.

### 1.1. Separação entre Referência Vigente e Histórico de Entregas

O menu principal do portal separa de forma explícita a **documentação viva (vigente)** — atualizada continuamente conforme o avanço dos Ciclos RAD — dos **marcos consolidados por unidade**:

| Área do Portal | Pasta / Arquivo | Natureza da Informação |
| :--- | :--- | :--- |
| **Visão do Produto** | `visao-produto/` | Diagnóstico do cenário atual, Objetivo Geral (OG), Objetivos Específicos (OEs), Características (CARs) e intervenção social (**vigente**). |
| **Metodologia & Planejamento** | `metodologia/` | Estratégias de ESW, processo de Engenharia de Requisitos, interação com a cliente, cronograma, detalhamento de ciclos e boas práticas (**vigente**). |
| **Requisitos** | `requisitos/index.md`, `rastreabilidade.md`, `governanca-conformidade.md` | Catálogo unificado de 91 itens (40 RFs, 31 RNs, 20 RNFs), matrizes de cobertura e conformidade CLT/LGPD (**fonte única canônica**). |
| **Escopo do MVP** | `requisitos/priorizacao.md`, `mvp/dor-dod.md`, `mvp/modelagem_bd.md` | Regras de priorização (VB × EC), linha de corte, DoR/DoD oficiais e modelagem de dados (**vigente**). |
| **Entregas & Governança** | `entregas/`, `governanca/atas/` | Sínteses executivas submetidas nos Pontos de Controle (PC1–PC4), atas de reunião e lições aprendidas (**registro histórico**). |

### 1.2. Catálogo Unificado por Cards Interativos

Em vez de espalhar especificações em dezenas de tabelas extensas e páginas duplicadas de Histórias de Usuário, os **91 elementos estruturantes** do sistema foram centralizados no [Catálogo Integrado de Requisitos](../requisitos/index.md) sob o padrão de **cards expansíveis (`<details class="req-card">`)**:

1. **Resumo Executivo no Cabeçalho:** Cada card exibe imediatamente sua prioridade na Matriz 4×4, seu **status real de execução e incremento** (`Concluído`, `Em Desenvolvimento`, `Pronto para Dev`, `Aguardando Ciclo` ou `Pós-MVP`), o vínculo direto com sua **Issue/PR no GitHub** e o título canônico.
2. **Metadados Compactos:** Ao expandir, o leitor visualiza em grade compacta o Objetivo Específico (`OE`), a Característica (`CAR`), o ator responsável (`RBAC`) e o vínculo de execução.
3. **Abas Internas Especializadas:** O conteúdo técnico é dividido em quatro abas sem poluição visual: *Critérios de Aceitação (DoR/DoD)*, *Evidências & Validação*, *Rastreabilidade em Árvore* e *Priorização & Score 4×4*.
4. **Filtro Dinâmico Multi-critério:** Barra de pesquisa instantânea e filtros por tipo (`RF`, `RN`, `RNF`), módulo (`OE1`–`OE4`), escopo (`MVP`/`Pós-MVP`), quadrante (`Q1`–`Q4`) e status de execução.

### 1.3. Rastreabilidade Bidirecional por Links e Âncoras Universais

Todo requisito, regra de negócio e atributo de qualidade possui um identificador estável e único no formato `#rf01`–`#rf40`, `#rn01`–`#rn31` e `#rnf01`–`#rnf20`:

- **Navegação Top-Down:** A partir da [Solução Proposta](../visao-produto/solucao-proposta.md) ou da [Priorização e Escopo](../requisitos/priorizacao.md), qualquer clique em um chip de requisito navega até o catálogo, abre automaticamente o card correspondente (mesmo que esteja recolhido ou filtrado) e destaca o item na tela por meio do script [requisitos-filter.js](../assets/javascripts/requisitos-filter.js).
- **Navegação Bottom-Up:** Dentro de cada card, tags compactas (`# RN01 ↗`, `# RNF02 ↗`, `# OE1 ↗`, `# CAR-01 ↗`) permitem saltar diretamente para as regras condicionantes, atributos de qualidade ou quadrantes da Matriz 4×4 sem perder o contexto.

### 1.4. Transparência do Processo e Desduplicação

Para atender às diretrizes de qualidade documental, informações voláteis (como critérios completos de DoR/DoD, cálculos de esforço e lista de cortes do MVP) residem em **uma única página canônica**. Páginas de entrega e interação com a cliente apenas explicam a dinâmica operacional e apontam para a fonte oficial via links relativos, evitando divergências de números ou estados entre documentos.

---

## 2. Boas Práticas de Utilização do GitHub e Fluxo de Trabalho

O projeto utiliza o processo híbrido **Cascata Ágil** com **Ciclos RAD** e prototipação **UI-First**. Para manter a rastreabilidade entre requisitos, protótipos, código e documentação, toda a equipe segue o fluxo operacional descrito abaixo no repositório oficial [`REQ-2026.2-T01-DUOC-Finance`](https://github.com/mdsreq-fga-unb/REQ-2026.2-T01-DUOC-Finance).

### 2.1. Estratégia de Branches e Proteção

O repositório adota separação estrita entre integração contínua e versão estável:

| Branch | Finalidade | Regra de Uso |
| :--- | :--- | :--- |
| **`main`** | Linha estável de produção e marcos oficiais entregues nos Pontos de Controle (PC1–PC4). | Recebe alterações **exclusivamente** via Pull Request revisado a partir de `develop` (ou *hotfix* aprovado). Proibido *commit* direto. |
| **`develop`** | Branch de integração contínua (Staging / validação do incremento em curso). | Concentra os Pull Requests de *features*, correções e documentação já validados em revisão por pares. |
| **`feat/...`**, **`fix/...`**, **`docs/...`**, **`chore/...`** | Branches temporárias de trabalho criadas a partir de `develop` para cada Issue. | Devem possuir escopo pequeno, atômico e vinculado a uma Issue aberta; após o *merge*, são removidas. |
| **`gh-pages`** | Branch automatizada de publicação do portal MkDocs no GitHub Pages. | Gerada exclusivamente pelo workflow de deploy (`.github/workflows/deploy.yml`). **Nunca** editar ou realizar *push* manual. |

### 2.2. Padronização de Issues e Rastreamento por Incremento

Nenhuma alteração relevante é iniciada sem uma Issue estruturada utilizando os templates oficiais de `.github/ISSUE_TEMPLATE/`:

- **`feature_request.md`:** Especificação de novas funcionalidades ou telas vinculadas aos RFs e ao incremento RAD vigente.
- **`task_request.md`:** Tarefas técnicas de infraestrutura, CI/CD, banco de dados ou refatoração.
- **`doc_update.md`:** Atualizações de documentação, atas, rastreabilidade e ajustes decorrentes de revisão docente.
- **`bug_report.md`:** Registro de defeitos identificados em testes ou homologação com a cliente.
- **`epic_request.md`:** Agrupamento macro de entregas de uma unidade ou módulo arquitetural.

Nos cards do [Catálogo Integrado de Requisitos](../requisitos/index.md), cada Requisito Funcional expõe diretamente a **Issue/PR associada** e seu **estágio atual** no ciclo:

- **Concluído:** Funcionalidade implementada, testada e integrada via PR aprovado.
- **Em Desenvolvimento:** Funcionalidade com implementação ou refinamento ativo no ciclo RAD corrente.
- **Pronto para Dev (DoR):** Requisito com história, regras, DoR e protótipo validados, liberado para codificação.
- **Aguardando Ciclo:** Requisito do MVP programado para incremento subsequente.
- **Pós-MVP (Release 2):** Funcionalidade postergada pela linha de corte para evolução futura.

### 2.3. Convenção de Commits e Pull Requests

1. **Commits Semânticos (*Conventional Commits*):** Mensagens claras e objetivas indicando o tipo da mudança e o contexto:
   - `feat(escopo): descrição` — nova funcionalidade ou componente de produto;
   - `fix(escopo): descrição` — correção de defeito em código, rotas ou documentação;
   - `docs(escopo): descrição` — atualização de especificações, atas, regras ou portal MkDocs;
   - `chore(escopo): descrição` — ajustes de automação, templates ou dependências;
   - `release: descrição` — consolidação de marco ou entrega oficial.
2. **Pull Requests (PRs):** Todo PR utiliza o template `.github/PULL_REQUEST_TEMPLATE.md`, devendo:
   - Referenciar explicitamente a Issue relacionada (ex.: `Closes #154` ou `Refs #131`);
   - Descrever o escopo alterado e as evidências de verificação;
   - Passar pelas verificações automatizadas de CI (`.github/workflows/ci.yml`), incluindo build estrito da documentação (`mkdocs build --strict`);
   - Receber aprovação de pelo menos um revisor da equipe antes do *merge* em `develop` ou `main`.

### 2.4. Automação de Qualidade (CI/CD)

O repositório conta com pipelines automatizados em `.github/workflows/`:

- **Integração Contínua (`ci.yml`):** Valida a integridade do build da aplicação e da documentação em Pull Requests, impedindo que links quebrados ou erros de sintaxe cheguem à branch de integração.
- **Publicação Contínua (`deploy.yml`):** Gera e publica automaticamente o site estático do MkDocs na branch `gh-pages` após a consolidação das atualizações na branch principal.

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 16/11/2026 | Criação do documento consolidando estratégias de organização documental (cards, rastreabilidade, desduplicação) e boas práticas de GitHub da equipe Cascata Ágil. | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
