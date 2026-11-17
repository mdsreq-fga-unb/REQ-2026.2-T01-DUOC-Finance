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

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `4.1` | 30/10/2026 | Desacoplamento da Pirâmide de Abstração e Matriz-Síntese em documento próprio de Rastreabilidade. | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
| `4.2` | 02/11/2026 | Implementação da Pirâmide de Abstração Interativa nativa (com busca em tempo real, pintura de conexões RF → CAR → OE → OG, zoom automático e paleta de cores dos cards do catálogo), remoção do embed externo do Miro e organização da Matriz-Síntese em abas por Módulo/OE. | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
| `4.3` | 10/11/2026 | Recálculo da coluna de Requisitos Não Funcionais da Matriz-Síntese (visão geral e módulos) a partir dos vínculos reconciliados dos cards de RF, incluindo os RNFs dos requisitos de integração e exportação (CAR-09 e CAR-10) e padronizando um rótulo por RNF (RNF20 passa a "Validação de payload"); vínculos de RNs e RNFs da Pirâmide Interativa sincronizados com o catálogo. | Paulo Nery | — |
