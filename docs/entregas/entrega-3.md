# Entrega 3 — Ponto de Controle 3 (Unidade 3)

!!! info "Ponto de Controle 3 — Consolidação dos Incrementos 1 e 2 e Organização do Backlog"
    * **Disciplina:** Requisitos de Software — Semestre 2026.2 (UnB - FGA)
    * **Equipe:** Cascata Ágil
    * **Projeto:** DUOC Finance (Gestão Financeira, Operacional e RH de Obras)
    * **Cliente Parceira:** Maria Beatryz Vieira de Sousa (Auxiliar Administrativa e Ponto Focal do Cliente na DUOC Arquitetura e Engenharia)
    * **Data de Fechamento do Marco:** 17 de Novembro de 2026 (publicação no GitHub Pages até as 08h; apresentações em 17 e 19/11/2026)
    * **Status da Entrega:** **Em Fechamento para Submissão (PC3)**
    * **Fase do Ciclo RAD:** *Fase 3: Construção Rápida (Rapid Construction) — Incrementos 1 e 2*
    * **Gravação da Apresentação:** *Espaço reservado — gravação técnica realizada em 16/11/2026; link do vídeo será inserido após publicação.*

---

## 1. O Que Foi Solicitado (Requisitos da Entrega 3)

Para o terceiro marco avaliativo (**Ponto de Controle 3 / Unidade 3**), além da evolução incremental do software em ambiente integrado, a entrega consolida as adequações solicitadas nas revisões docentes da Unidade 2 e as práticas de **Organização e Atualização do Backlog** (Capítulo 12):

* **Organização e Atualização Contínua do Escopo (Cap. 12 & DEEP):**
    * Centralização em **Fonte Única Canônica** (Catálogo Integrado sem listas paralelas ou divergentes).
    * Explicitação de refinamento progressivo (*Iceberg Backlog*), critérios DEEP, dependências e rotina de propagação de mudanças.
    * Boas práticas operacionais no GitHub (fluxo de branches `main`/`develop`, templates de Issue/PR, commits semânticos e CI/CD).
* **Rastreabilidade de Execução e Evidências Reais:**
    * Vinculação dos Requisitos Funcionais aos incrementos RAD, Issues e Pull Requests no GitHub, com status atualizado (`Concluído`, `Em Dev`, `Pronto DoR`, `Aguardando Ciclo`, `Pós-MVP`).
    * Evidências visuais das telas e fluxos funcionais executados em ambiente Docker/Staging.
* **Evolução do Produto (Incrementos 1 e 2):**
    * **Incremento 1 (Concluído):** Gestão de Colaboradores (`RF01`–`RF03`), Autenticação e Controle de Acesso RBAC (`RF13`, `RF17`, `RF18`) e Módulo Móvel de RVT em Campo (`RF04`, `RF19`, `RF22`).
    * **Incremento 2 (Em Desenvolvimento):** Deliberação e retificação de apontamentos (`RF32`, `RF35`) e submissão/deliberação de reembolsos e adiantamentos (`RF07`, `RF08`, `RF28`, `RF29`).
* **Apresentação e Vídeo Técnico:** Gravação audiovisual com demonstração do sistema em execução e participação distribuída dos 6 integrantes da equipe.

---

## 2. O Que Foi Desenvolvido e Entregue (Artefatos e Código)

A tabela abaixo consolida os principais artefatos de documentação, governança e engenharia entregues até o Ponto de Controle 3:

| Eixo | Artefato / Módulo | Síntese do Conteúdo Entregue | Link Direto |
| :--- | :--- | :--- | :---: |
| **Organização (Cap. 12)** | Organização & Atualização do Backlog | Fonte Única Canônica, anatomia dos cards, refinamento progressivo (DEEP / Iceberg), tratamento de dependências, propagação de mudanças e checklist de conformidade. | [Acessar Organização](../metodologia/planejamento.md#organizacao-e-atualizacao-dos-requisitos) |
| **Processo GitHub** | Boas Práticas no GitHub | Fluxo oficial de branches (`main`, `develop`, `feat/*`, `gh-pages`), templates em `.github/`, Conventional Commits, revisão de PRs e pipelines CI/CD. | [Acessar Boas Práticas](../metodologia/organizacao-e-boas-praticas.md) |
| **Requisitos** | Catálogo Integrado de Requisitos | 91 itens (`40 RFs`, `31 RNs`, `20 RNFs`) em cards compactos com status real por incremento, links para Issues/PRs, filtro *Execução (Ciclo)* e evidências visuais. | [Acessar Catálogo](../requisitos/index.md) |
| **Rastreabilidade** | Matrizes e Pirâmide Interativa | Rastreabilidade bidirecional (`OG ➔ OE ➔ CAR ➔ RF ➔ RN/RNF`) e matriz-síntese de cobertura do produto. | [Acessar Rastreabilidade](../requisitos/rastreabilidade.md) |
| **Priorização & MVP** | Priorização & Escopo do Produto | Abas metodológicas de Valor (`VB`) e Esforço (`EC`), fórmula corrigida, seletor dinâmico (*Características* vs *Matriz 4×4*), retificação assistida (`RF06 × RF21 × RF35`) e registro de validação. | [Acessar Priorização](../requisitos/priorizacao.md) |
| **Planejamento** | Cronograma e Detalhamento de Ciclos | Calendário semestral interativo desacoplado do calendário acadêmico, marco da gravação em `16/11/2026` e atualização do Ciclo 1 (*Concluído*) e Semana 11 (*Em Andamento*). | [Acessar Cronograma](../metodologia/cronograma.md) |
| **Código (Incr. 1)** | Gestão de Colaboradores, Auth/RBAC e RVT | Backend NestJS + Prisma/PostgreSQL (rotas `/api/auth`, `/api/rvt`, `/api/health`) e Frontend React/Vite com Docker Compose (`PR #167` e `PR #170`). | [Acessar Repositório](https://github.com/mdsreq-fga-unb/REQ-2026.2-T01-DUOC-Finance) |
| **Governança** | Atas e Lições Aprendidas | Registro das decisões da equipe e gravação da apresentação da Entrega 3 na **Reunião 07 (16/11/2026)**. | [Acessar Atas](../governanca/atas/index.md) |

---

## 2.1. Jornada Demonstrável e Dependências da Unidade 3

A versão integrada demonstrável nesta entrega cobre o seguinte encadeamento:

1. **Login e RBAC:** acesso por usuário sintético de teste e autorização das páginas conforme o perfil.
2. **Cadastro de colaboradores:** navegação pelas telas e persistência do backend integrado em Docker/Staging.
3. **RVT em campo:** criação de apontamento com contrato, jornada, horas, escopo e evidências em ambiente com conectividade.
4. **Reembolsos:** submissão, consulta e deliberação das rotas implementadas no Incremento 2, usando dados sintéticos ou registros de homologação e contas sintéticas.

O ambiente de demonstração deve estar disponível com Docker Compose, PostgreSQL, backend e frontend; o servidor precisa ser iniciado antes da apresentação. Os nomes, documentos, contratos, despesas, comprovantes e contas mostrados não são dados reais da DUOC e podem ser usados somente como dados sintéticos de teste. Uma interface que apresente dados fictícios deve ser apresentada como protótipo de interface ou homologação, não como operação já integrada à base real da cliente.

| RF / área | Situação registrada | Tratamento na demonstração |
| :--- | :--- | :--- |
| **RF32** — deliberação de apontamentos | Avançou no Incremento 2 e permanece em desenvolvimento/validação | Somente demonstrar quando a API, a interface e as regras de aprovação/rejeição estiverem integradas. |
| **RF35** — retificação de apontamentos | Avançou no Incremento 2 e permanece em desenvolvimento/validação | Somente demonstrar dentro da janela de retificação e com justificativa/evidências sintéticas. |
| **RF05** e **RF06** — fechamento financeiro | Dependem do Ciclo 3 | Não apresentar prévia ou homologação como concluídas nesta entrega; aguardam motor financeiro e registros fechados. |
| **RF09** — apropriação de custos | Depende do Ciclo 3 | Não apresentar apropriação por contrato como disponível; aguarda fechamento homologado e backend integrado. |
| Backend de colaboradores | Dependência central do encadeamento financeiro | Precisa estar integrado ao ambiente da demonstração e ao ciclo que alimenta RVT, fechamento e apropriação. |

O modo offline completo (**RNF01**) continua postergado pós-MVP; em campo, a demonstração hoje depende de conectividade ou de persistência local limitada a rascunhos. O estorno automático em lote (**RF21**) não integra o recorte demonstrado: a correção pós-fechamento, se aceita pela cliente, seguirá como procedimento assistido com autorização administrativa, reabertura controlada e trilha auditável.

A linha consolidada de **31 RFs** também permanece pendente de homologação formal pela cliente. A equipe deve confirmar, em sessão de validação, o corte consolidado, a postergação do modo offline e o procedimento de estorno assistido. Essas decisões afetam diretamente o uso esperado:

* em campo, a ausência de modo offline completo exige plano de contingência e sincronização após restabelecimento da rede;
* após o fechamento financeiro, ajustes exigirão autorização administrativa e não poderão ser entendidos como edição direta ou estorno automático;
* o aceite do corte não pode considerar como concluídos requisitos do Ciclo 3 ou funcionalidades somente prototipadas.

---

## 3. Vídeo da Apresentação da Entrega 3

A gravação oficial do Ponto de Controle 3 (realizada em **16/11/2026**) apresenta a reorganização documental do portal, o catálogo integrado de requisitos com rastreabilidade ao GitHub, a metodologia de priorização do MVP, o planejamento dos ciclos RAD e a demonstração prática do sistema em execução local via Docker.


### Gravação Oficial da Apresentação

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 8px; border: 1px solid var(--duoc-gold, #DAA520); margin: 1.5rem 0; box-shadow: 0 4px 20px rgba(0,0,0,0.4);">
  <iframe 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
    src="https://www.youtube-nocookie.com/embed/U_35Or_Tm7M?si=qBFOgzxUXoIFzxFE" 
    title="Vídeo de Apresentação — Entrega 3 (Unidade 3) — Equipe Cascata Ágil" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>

> Caso o player incorporado acima apresente restrições de rede ou dispositivo, utilize o acesso direto:
> **[Assistir à Apresentação da Entrega 2 no YouTube (Link Direto: youtu.be/JF_cYRJM7vk)](https://youtu.be/U_35Or_Tm7M?si=qBFOgzxUXoIFzxFE)**


### Distribuição dos Temas por Integrante

| Integrante | Matrícula | Papel no Projeto | Tópico Apresentado no Vídeo (PC3) |
| :--- | :---: | :--- | :--- |
| **Matheus Ribeiro Szervinsk** | 231011749 | Scrum Master (SM), Co-PO e Engenheiro de Requisitos | Visão Geral do Produto, Navegação, Ciclos RAD e Matriz de Rastreabilidade. |
| **Gustavo Bonifácio** | 241025659 | Gestão de Qualidade (QA) e DoR/DoD | Organização do Backlog (Cap. 12) e Boas Práticas no GitHub. |
| **Matheus Saraiva Camargo** | 241011475 | Arquiteto de Software e Banco de Dados | Catálogo Interativo de Requisitos, Filtros, Evidências e Pirâmide/Rastreabilidade. |
| **Giovana Ferreira** | 231034707 | Engenheira Frontend e Designer UI/UX | Escopo do Produto, Avaliação de Valor (`VB`) e Esforço (`EC`), Matriz 4×4 e Validação. |
| **Eric Araújo** | 200064053 | Product Owner (PO) e Engenheiro de Requisitos | Cronograma, Desacoplamento Metodológico e Método de Atualização de Requisitos no RAD. |
| **Paulo Nery** | 221008740 | Engenheiro Backend | Demonstração do Incremento 1 entregue (Colaboradores, Auth/RBAC, RVT) e escopo do Incremento 2. |

### Evidências de Execução e Qualidade (Staging/Docker, Testes e CI/CD)

<div class="req-evidence-media-grid">
  <div class="req-evidence-media-card">
    <img src="../../assets/images/evidencias/containers.png" alt="Containers Docker em execução" loading="lazy">
    <span class="req-evidence-media-caption">Containers Docker ativos (db, backend e frontend)</span>
  </div>
  <div class="req-evidence-media-card">
    <img src="../../assets/images/evidencias/dashboard.png" alt="Dashboard DUOC Finance autenticado" loading="lazy">
    <span class="req-evidence-media-caption">Visão Geral (Dashboard) após login autenticado</span>
  </div>
  <div class="req-evidence-media-card">
    <img src="../../assets/images/evidencias/apontamento.png" alt="Listagem de Apontamentos RVT" loading="lazy">
    <span class="req-evidence-media-caption">Módulo de Apontamentos de Campo (RVT) em execução</span>
  </div>
  <div class="req-evidence-media-card">
    <img src="../../assets/images/evidencias/testes-backend.png" alt="Testes Backend Vitest" loading="lazy">
    <span class="req-evidence-media-caption">107/107 testes backend aprovados</span>
  </div>
  <div class="req-evidence-media-card">
    <img src="../../assets/images/evidencias/testes-frontend.png" alt="Testes Frontend Vitest" loading="lazy">
    <span class="req-evidence-media-caption">18/18 testes frontend aprovados</span>
  </div>
  <div class="req-evidence-media-card">
    <img src="../../assets/images/evidencias/actions2.png" alt="Execuções CI/CD no GitHub Actions" loading="lazy">
    <span class="req-evidence-media-caption">Workflows CI/CD e Deploy aprovados no GitHub Actions</span>
  </div>
</div>

---

## 4. Considerações e Próximos Passos

1. **Consolidação do Incremento 2:** Finalizar a integração e os testes das rotas de deliberação/retificação (`RF32`, `RF35`) e do fluxo de reembolsos e adiantamentos (`RF07`, `RF08`, `RF28`, `RF29`), distinguindo avanço implementado de aceite ainda pendente.
2. **Dependências do Ciclo 3:** Implementar e integrar o backend de colaboradores, o fechamento financeiro (`RF05`, `RF06`, `RF27`) e a apropriação de custos (`RF09`, além dos contratos e centros de custo associados), antes de apresentar o fechamento ponta a ponta.
3. **Validação Formal com a Cliente:** Homologar o corte final de `31 RFs`, confirmar a postergação do modo offline (`RNF01`) e do estorno automático em lote (`RF21`) e registrar os efeitos na UAT e no aceite.
4. **Proteção da capacidade:** Reavaliar a margem nominal de `3,5 horas` (`266,5 h` de demanda para `270 h` de capacidade). Ela não é suficiente para absorver, isoladamente, integração, correções pós-UAT e validação dos itens ainda não concluídos; reservar horas para retrabalho ou reduzir formalmente o escopo quando necessário.

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `0.1` | 07/09/2026 | Criação da página com alerta de documento em desenvolvimento | Matheus Ribeiro | Eric Araújo |
| `1.0` | 16/11/2026 | Estruturação completa da Entrega 3 (PC3) com matriz de artefatos, espaço reservado para o vídeo oficial e distribuição dos temas por integrante. | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
| `1.1` | 27/11/2026 | Esclarecimento da jornada demonstrável, das dependências do Ciclo 3, das validações pendentes com a cliente e da margem insuficiente de 3,5 horas. | Giovana Ferreira | — |
