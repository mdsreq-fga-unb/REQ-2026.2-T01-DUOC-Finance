# Rastreabilidade dos Requisitos e Matrizes

Este documento consolida a **rastreabilidade vertical e horizontal** dos requisitos de software do sistema ***DUOC Finance***, formalizando as inter-relações entre os direcionadores estratégicos do negócio, os objetivos táticos, as capacidades do produto e os artefatos de verificação e teste.

<a id="matriz-sintese-geral-de-rastreabilidade"></a>
## Métricas de Cobertura e Rastreabilidade

<div class="grid cards" markdown>

-   :material-bullseye-arrow: **Objetivos Específicos (OE)**

    ---
    **4 OEs Estratégicos** (100% de cobertura)  
    Direcionadores táticos da parceria DUOC plenamente desdobrados.

-   :material-view-grid-plus-outline: **Características do Produto (CAR)**

    ---
    **10 CARs Arquiteturais** (100% mapeadas)  
    Capacidades de software estruturadas nos 4 módulos de domínio.

-   :material-format-list-checks: **Requisitos Funcionais (RF)**

    ---
    **40 Requisitos Funcionais** (31 no MVP; 9 no pós-MVP) — [Linha de corte e mapeamento 1:1 entre 40 RFs e 40 USs](priorizacao.md#linha-de-corte-do-mvp).

-   :material-shield-check-outline: **Requisitos Não Funcionais (RNF)**

    ---
    **20 Requisitos de Qualidade**  
    Atributos de segurança, desempenho, disponibilidade e conformidade CLT/LGPD.

</div>

---

<a id="rastreabilidade-estrategica-e-diagramas-visuais"></a>
## Pirâmide de Abstração Interativa (Rastreabilidade Vertical e Horizontal)

A **Pirâmide de Abstração** sintetiza o desdobramento hierárquico completo da solução: parte do **Objetivo Geral (OG)** da DUOC Arquitetura e Engenharia, desdobra-se nos quatro **Objetivos Específicos (OE1 a OE4)** táticos, ramifica-se nas **10 Características do Produto (CAR-01 a CAR-10)** e deriva diretamente nos **40 Requisitos Funcionais (RF01 a RF40)**, indexando suas respectivas **Regras de Negócio (RNs)**, **Requisitos Não Funcionais (RNFs)** e **Casos de Teste (CTs)**.

Utilize a **barra de pesquisa interativa** abaixo para informar o código ou nome de qualquer requisito (ex.: `RF04`, `07`, `CAR-02`, `RN06`, `apontamento`, `reembolso`, `login`) ou clique diretamente sobre qualquer card da pirâmide: o painel **pintará automaticamente as linhas de conexão** da Característica, do Objetivo Específico e do Objetivo Geral correspondentes e **aplicará zoom automático** na cadeia selecionada.

<div id="duoc-interactive-pyramid"></div>

<p align="center" style="margin-top: 10px;">
  <a href="../../assets/images/requisitos/piramide_abstracao.jpg" target="_blank" rel="noopener noreferrer" class="md-button">Ver Versão Estática em JPG ↗</a> &nbsp;
  <a href="../../assets/images/piramide_abstracao_vetorizada.svg" target="_blank" rel="noopener noreferrer" download="piramide_abstracao_vetorizada.svg" class="md-button">Baixar Vetor SVG ↗</a>
</p>

---

## Reconciliação entre Catálogo e Evidências de Implementação

Em atendimento à [Issue #193](https://github.com/mdsreq-fga-unb/REQ-2026.2-T01-DUOC-Finance/issues/193), esta seção esclarece as divergências entre os identificadores registrados historicamente no [PR #172](https://github.com/mdsreq-fga-unb/REQ-2026.2-T01-DUOC-Finance/pull/172) e o catálogo vigente de requisitos.

### Correspondência dos Identificadores

| Referência histórica no PR #172 | Funcionalidade ou atributo descrito | Correspondência no catálogo vigente |
| :--- | :--- | :--- |
| RN15 | Segregação de funções e matriz de autorização | [RN16](index.md#rn16) e [RNF14](index.md#rnf14). |
| RN16 | Revogação de sessões ativas | [RF18](index.md#rf18), no contexto de encerramento manual e invalidação imediata da sessão. |
| RNF01 | Arquitetura REST com JWT | [RN15](index.md#rn15) e [RNF13](index.md#rnf13), quanto à autenticação e à expiração dos tokens. Não corresponde ao [RNF01](index.md#rnf01) vigente, referente à operação offline. |
| RNF13 | Criptografia forte com bcrypt e HTTPS | Evidência complementar de segurança relacionada ao [RNF03](index.md#rnf03), sem comprovação integral de seus critérios de criptografia em repouso e em trânsito. |
| RNF14 | Princípio do menor privilégio | [RN16](index.md#rn16) e [RNF14](index.md#rnf14), quanto à segregação de funções e à autorização de acesso. |

As correspondências acima são estabelecidas pelo conteúdo das funcionalidades e das evidências, e não pela simples igualdade dos identificadores. A existência de uma evidência de implementação não implica, isoladamente, o atendimento integral de todos os critérios de aceitação ou métricas de qualidade do requisito associado.

### Consolidação dos Papéis Canônicos de Acesso

A implementação inicial registrada no PR #172 apresentava os papéis `ADMIN_FINANCEIRO`, `GESTOR_OPERACIONAL`, `TECNICO_CAMPO` e `AUDITOR_EXTERNO`.

Posteriormente, a [Issue #181](https://github.com/mdsreq-fga-unb/REQ-2026.2-T01-DUOC-Finance/issues/181), implementada pelo [PR #185](https://github.com/mdsreq-fga-unb/REQ-2026.2-T01-DUOC-Finance/pull/185), consolidou os quatro papéis canônicos definidos na [Governança e Conformidade](governanca-conformidade.md):

- `ADMIN_SISTEMA`;
- `ADMIN_FINANCEIRO`;
- `GESTOR_OBRAS`;
- `TECNICO_CAMPO`.

A correspondência com o catálogo vigente foi verificada nos seguintes artefatos da implementação:

- [`backend/src/auth/role.enum.ts`](https://github.com/mdsreq-fga-unb/REQ-2026.2-T01-DUOC-Finance/blob/develop/backend/src/auth/role.enum.ts);
- [`backend/prisma/schema.prisma`](https://github.com/mdsreq-fga-unb/REQ-2026.2-T01-DUOC-Finance/blob/develop/backend/prisma/schema.prisma);
- [`frontend/src/auth/permissoes.ts`](https://github.com/mdsreq-fga-unb/REQ-2026.2-T01-DUOC-Finance/blob/develop/frontend/src/auth/permissoes.ts).

O papel `GESTOR_OPERACIONAL` foi migrado para `GESTOR_OBRAS`. O papel `AUDITOR_EXTERNO` não integra o conjunto canônico vigente e permanece apenas como referência histórica da implementação anterior, sem equivalência automática com `ADMIN_SISTEMA`.

Os registros históricos dos PRs são preservados, enquanto o catálogo vigente permanece como fonte canônica para a interpretação dos requisitos e de seus identificadores.

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `4.1` | 30/10/2026 | Desacoplamento da Pirâmide de Abstração e Matriz-Síntese em documento próprio de Rastreabilidade. | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
| `4.2` | 02/11/2026 | Implementação da Pirâmide de Abstração Interativa nativa (com busca em tempo real, pintura de conexões RF → CAR → OE → OG, zoom automático e paleta de cores dos cards do catálogo), remoção do embed externo do Miro e organização da Matriz-Síntese em abas por Módulo/OE. | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
| `4.3` | 10/11/2026 | Recálculo da coluna de Requisitos Não Funcionais da Matriz-Síntese (visão geral e módulos) a partir dos vínculos reconciliados dos cards de RF, incluindo os RNFs dos requisitos de integração e exportação (CAR-09 e CAR-10) e padronizando um rótulo por RNF (RNF20 passa a "Validação de payload"); vínculos de RNs e RNFs da Pirâmide Interativa sincronizados com o catálogo. | Paulo Nery | — |
| `4.4` | 27/11/2026 | Atendimento à Issue #193: reconciliação dos identificadores históricos do PR #172 com o catálogo vigente e registro da consolidação dos papéis canônicos de acesso pelo PR #185. | Gustavo Bonifácio | — |
