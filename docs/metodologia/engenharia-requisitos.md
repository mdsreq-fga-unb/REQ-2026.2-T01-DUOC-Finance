# Processo de Engenharia de Requisitos

Este capítulo sintetiza como as atividades de **Engenharia de Requisitos (ER)** são executadas pela equipe **Cascata Ágil** no projeto ***DUOC Finance***, conectando técnicas, ferramentas, artefatos e critérios de qualidade.

<a id="52-mapeamento-de-engenharia-de-requisitos-ao-processo"></a>
*(Nota: Os critérios de aceitação adotam listas estruturadas de regras de negócio verificáveis, e o mapeamento completo das fases do ciclo RAD está consolidado em [Estratégias de Engenharia](estrategias-esw.md) e [Organização & Atualização do Backlog](organizacao-atualizacao.md)).*

---

<a id="51-elementos-de-engenharia-de-requisitos"></a>
## Etapas do Processo de Engenharia de Requisitos

<div class="grid cards" markdown>

-   :material-compass-outline: **1. Elicitação e Descoberta**

    ---
    **Objetivo:** Descobrir necessidades operacionais reais, regras de negócio e gargalos da DUOC.

    * **Técnicas:** Entrevistas semiestruturadas com a gestora Maria Beatryz e análise documental de planilhas legadas.
    * **Artefatos:** Planilhas sanitizadas e fluxos transacionais (`TR-01` a `TR-04`).
    * **Evidências:** [Ata da Reunião 01](../governanca/atas/reuniao-01.md) · [Transações no Cenário Atual](../visao-produto/cenario-atual.md#estrutura-detalhada-das-transacoes)

-   :material-scale-balance: **2. Análise e Consenso**

    ---
    **Objetivo:** Estruturar o domínio, desambiguar conflitos e priorizar o escopo do MVP.

    * **Técnicas:** *Rich Picture*, Diagrama de Ishikawa e Matriz 4 × 4 (Valor de Negócio × Esforço Técnico).
    * **Artefatos:** Mapa de Stakeholders, papéis RBAC e recorte de **31 RFs no MVP / 9 Pós-MVP**.
    * **Evidências:** [Cenário Atual](../visao-produto/cenario-atual.md) · [Priorização & MVP](../requisitos/priorizacao.md) · [Ata 05](../governanca/atas/reuniao-05.md)

-   :material-file-document-edit-outline: **3. Declaração e Especificação**

    ---
    **Objetivo:** Registrar os requisitos de forma atômica, clara e testável para negócio e engenharia.

    * **Técnicas:** Modelagem de dados relacional (DER / Prisma) e decomposição modular por `OE`/`CAR`.
    * **Artefatos:** `40 RFs` + `40 USs` (1:1), `31 RNs`, `20 RNFs` (URPS+) e DER PostgreSQL.
    * **Evidências:** [Solução Proposta](../visao-produto/solucao-proposta.md) · [Catálogo Integrado](../requisitos/index.md) · [Modelagem BD](../mvp/modelagem_bd.md)

-   :material-palette-outline: **4. Representação e Prototipação**

    ---
    **Objetivo:** Traduzir especificações em interfaces visuais e fluxos navegáveis (*UI-First*).

    * **Técnicas & Ferramenta:** Prototipação de alta fidelidade no **Figma** (Desktop e Mobile) e Frontend React.
    * **Artefatos:** Telas validadas sem alterações no Figma e fluxo sociotécnico documentado.
    * **Evidências:** [Protótipo no Figma](https://www.figma.com/design/jJ5lOX1FJ52vpFGk8cimoM/DUOC-FINANCE?node-id=1-3&t=CHCrS3jVWsoutYCM-1) · [Ata 06](../governanca/atas/reuniao-06.md) · [Interação Cliente](interacao-cliente.md)

-   :material-check-decagram-outline: **5. Verificação e Validação (V&V)**

    ---
    **Objetivo:** Garantir corretude técnica (Verificação) e aderência ao negócio (Validação).

    * **Técnicas:** Avaliação por pares, inspeção em PRs, suítes Vitest (`107` backend / `18` frontend), CI/CD e sessões UAT.
    * **Critérios:** Portões formais de entrada ([DoR](../mvp/dor.md)) e saída ([DoD](../mvp/dod.md)).
    * **Evidências:** [Feedback em Pares](../requisitos/feedback.md) · [DoR](../mvp/dor.md) · [DoD](../mvp/dod.md)

-   :material-source-branch: **6. Organização e Atualização**

    ---
    **Objetivo:** Controlar mudanças sem listas paralelas e manter rastreabilidade bidirecional.

    * **Práticas & Ferramentas:** *Docs as Code* (MkDocs), GitHub Issues/Projects, Pull Requests e Fonte Única Canônica.
    * **Artefatos:** Cards unificados, matrizes de rastreabilidade e registro histórico por unidade.
    * **Evidências:** [Organização do Backlog](organizacao-atualizacao.md) · [Boas Práticas GitHub](organizacao-e-boas-praticas.md) · [Rastreabilidade](../requisitos/rastreabilidade.md)

</div>

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 05/09/2026 | Estruturação inicial das atividades de Engenharia de Requisitos. | Carlos Gabriel | Matheus Ribeiro |
| `2.0` | 15/09/2026 | Unificação dos artefatos e alinhamento à stack NestJS/Supabase. | Equipe Cascata Ágil | Matheus Ribeiro Szervinsk |
| `2.8` | 17/11/2026 | Conversão das etapas para layout em cards e remoção do mapeamento redundante com as fases do RAD. | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
