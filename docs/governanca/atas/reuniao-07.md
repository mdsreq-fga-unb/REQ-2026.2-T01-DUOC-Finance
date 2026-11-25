# Ata da Reunião 07 — Gravação da Apresentação do Ponto de Controle 3 (PC3)

* **Data:** 16/11/2026 (22h14 às 22h45)
* **Natureza:** Sessão interna síncrona via Google Meet (com transcrição automática)
* **Participantes:** Equipe Cascata Ágil (Eric Araújo, Giovana Ferreira, Gustavo Bonifácio, Matheus Ribeiro Szervinsk, Matheus Saraiva Camargo e Paulo Nery)
* **Objetivo:** Alinhamento final das atualizações do portal e gravação da apresentação oficial da Entrega 3 (Ponto de Controle 3).

---

## 1. Pauta

1. Revisão da nova organização do portal MkDocs (Fonte Única Canônica e Boas Práticas no GitHub).
2. Demonstração do Catálogo Integrado de Requisitos, Rastreabilidade, Priorização e Escopo do MVP.
3. Apresentação do Cronograma desacoplado e método de atualização de requisitos no ciclo RAD.
4. Síntese das entregas do Incremento 1 (Colaboradores, Auth/RBAC e RVT) e planejamento do Incremento 2.
5. Gravação audiovisual distribuída entre os seis integrantes da equipe.

---

## 2. Resumo Executivo e Discussões

* **Visão Geral e Metodologias (`00:01:13`):** Matheus Ribeiro Szervinsk apresentou a evolução visual do portal (migração de menus laterais para barra superior, cards compactos) e a dinâmica dos ciclos RAD (modelagem, *User Design*, construção e *cutover*).
* **Organização e Boas Práticas no GitHub (`00:03:36`):** Gustavo Bonifácio detalhou a separação entre documentação vigente e histórico de entregas, o catálogo único sem redundâncias, o fluxo de branches (`main` e `develop`), commits convencionais, templates de Issue/PR e deploy automatizado no GitHub Pages.
* **Catálogo de Requisitos e Rastreabilidade (`00:08:35`):** Matheus Saraiva Camargo demonstrou os filtros interativos (módulo, tipo, MVP, quadrante e ciclo), os cards com histórias de usuário, critérios e evidências, além da navegação pela árvore e matriz de rastreabilidade.
* **Priorização e Escopo do MVP (`00:14:03`):** Giovana Ferreira apresentou as cinco etapas do fluxo de produto, as escalas de Valor de Negócio (`VB`) e Esforço Técnico (`EC`), a fórmula corrigida de média consolidada, a Matriz 4×4 e os itens pendentes de validação formal com a cliente.
* **Cronograma e Atualização no RAD (`00:17:21`):** Eric Araújo explicou o desacoplamento do cronograma do projeto em relação ao calendário acadêmico, o encerramento do Ciclo 1 e os gatilhos de atualização contínua de requisitos a cada ciclo.
* **Incremento 1 e Incremento 2 (`00:27:45`):** Paulo Nery apresentou o Incremento 1 integrado na branch `develop` (Gestão de Colaboradores, Autenticação/RBAC e módulo móvel RVT) e o escopo ativo do Incremento 2 (deliberação/retificação de apontamentos, reembolsos e adiantamentos), além dos 12 requisitos já prontos no DoR.

---

## 3. Decisões Tomadas

| ID | Decisão | Impacto nos Artefatos |
| :---: | :--- | :--- |
| **D1** | Consolidar a Entrega 3 na branch `main` via Pull Request de release após integração das evidências visuais e revisão da ata. | Atualização de [Entrega 3](../../entregas/entrega-3.md) e abertura do PR de release. |
| **D2** | Manter explícito o status *Pendente de validação* para o recorte consolidado de 31 RFs do MVP até a próxima sessão formal com a cliente Maria Beatryz. | Consistência com [Priorização & MVP](../../requisitos/priorizacao.md#evidencia-e-registro-da-validacao-do-mvp-com-o-cliente). |
| **D3** | Anexar as capturas de tela reais do ambiente Docker/Staging (`AcessoLogin`, `Colaboradores`, `NovoColaborador`, `EditarColaborador`) diretamente nos cards do Incremento 1. | Atualização do [Catálogo de Requisitos](../../requisitos/index.md). |

---

## 4. Gravação e Links

* **Gravação:** Vídeo oficial da apresentação da Entrega 3 gravado em 16/11/2026; será incorporado na página da [Entrega 3 (Ponto de Controle 3)](../../entregas/entrega-3.md#3-video-da-apresentacao-da-entrega-3) após publicação.
* **Artefatos Relacionados:**
  * [Entrega 3 — Ponto de Controle 3](../../entregas/entrega-3.md)
  * [Organização & Atualização do Backlog](../../metodologia/planejamento.md#organizacao-e-atualizacao-dos-requisitos)
  * [Boas Práticas no GitHub](../../metodologia/organizacao-e-boas-praticas.md)
  * [Catálogo Integrado de Requisitos](../../requisitos/index.md)

---

## 5. Ações Futuras (Action Items)

| Ação | Responsável | Prazo | Status |
| :--- | :--- | :---: | :---: |
| Publicar gravação da Entrega 3 no YouTube e atualizar o embed na página `entrega-3.md` | Matheus Ribeiro Szervinsk | 17/11/2026 | Em andamento |
| Finalizar fluxo de deliberação, retificação e reembolsos do Incremento 2 | Paulo Nery e Equipe | 25/11/2026 | Em andamento |
| Realizar sessão de validação do corte final do MVP e testes UAT com a cliente | Eric Araújo e Maria Beatryz | 27/11/2026 | Planejado |

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 16/11/2026 | Registro formal da Ata da Reunião 07 (gravação da Entrega 3 / PC3 e alinhamento dos incrementos). | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
| `1.1` | 24/11/2026 | Correção do link para Organização e Atualização do Backlog, direcionado à seção correspondente de `planejamento.md`. | Matheus Saraiva Camargo | Matheus Ribeiro Szervinsk |