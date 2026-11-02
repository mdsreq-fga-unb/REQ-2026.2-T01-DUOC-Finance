# Rastreabilidade dos Requisitos e Matrizes

Este documento consolida a **rastreabilidade vertical e horizontal** dos requisitos de software do sistema ***DUOC Finance***, formalizando as inter-relações entre os direcionadores estratégicos do negócio, os objetivos táticos, as capacidades do produto e os artefatos de verificação e teste.

<div class="catalog-nav-deck">
  <a href="../" class="catalog-nav-btn">
    <strong>Catálogo Geral de Requisitos</strong>
    <span>40 RFs · 31 RNs · 20 RNFs ↗</span>
  </a>
  <a href="../priorizacao/" class="catalog-nav-btn">
    <strong>Matriz 4 × 4 de Priorização</strong>
    <span>Score Ponderado e MVP ↗</span>
  </a>
</div>

---

<a id="rastreabilidade-estrategica-e-diagramas-visuais"></a>
## Pirâmide de Abstração (Rastreabilidade Vertical)

A **Pirâmide de Abstração** sintetiza o desdobramento hierárquico da solução: parte do Objetivo Geral (OG) da **DUOC Arquitetura e Engenharia**, desdobra-se nos quatro **Objetivos Específicos (OE)** táticos, ramifica-se nas **Características do Produto (CAR)** e deriva diretamente nos **Requisitos Funcionais (RFs)**, **Regras de Negócio (RNs)** e **Requisitos Não Funcionais (RNFs)** executáveis.

<div class="miro-diagram-box">
  <iframe src="https://miro.com/app/live-embed/uXjVEd_ZDOg=/?focusWidget=3458764686279042166&embedMode=view_only_without_ui&embedId=760334862252" title="Pirâmide de Abstração — Rastreabilidade Vertical" frameborder="0" scrolling="no" allow="fullscreen; clipboard-read; clipboard-write" allowfullscreen></iframe>
</div>

<p align="center">
  <a href="https://miro.com/app/board/uXjVEd_ZDOg=/?share_link_id=457510525802" target="_blank" rel="noopener noreferrer">Abrir Pirâmide Completa no Miro (Interativo) ↗</a> &nbsp;|&nbsp; <a href="../../assets/images/requisitos/piramide_abstracao.jpg" target="_blank" rel="noopener noreferrer">Ver Imagem em JPG ↗</a> &nbsp;|&nbsp; <a href="../../assets/images/piramide_abstracao_vetorizada.svg" target="_blank" rel="noopener noreferrer" download="piramide_abstracao_vetorizada.svg">Baixar Vetor (SVG Alta Resolução) ↗</a>
</p>

---

<a id="matriz-sintese-geral-de-rastreabilidade"></a>
## Matriz-Síntese Geral de Rastreabilidade

Esta matriz formaliza as inter-relações completas entre os Objetivos Específicos (OE), Características do Produto (CAR), Requisitos Funcionais (RF), Requisitos Não Funcionais (RNF) e Casos de Teste (CT) do sistema:

| Objetivo Específico | Característica (CAR) | Requisitos Funcionais (RF) | Requisitos Não Funcionais (RNF) | Casos de Teste (CT) |
| :--- | :--- | :--- | :--- | :--- |
| OE1 — Padronizar e Unificar os Dados | CAR-01: Gestão Cadastral Unificada | [RF01](index.md#rf01), [RF02](index.md#rf02), [RF03](index.md#rf03), [RF25](index.md#rf25), [RF26](index.md#rf26) | [RNF02](index.md#rnf02), [RNF03](index.md#rnf03), [RNF19](index.md#rnf19) | CT-M1-01, CT-M1-02, CT-M1-03, CT-M1-12, CT-M1-13 |
| OE1 — Padronizar e Unificar os Dados | CAR-02: Apontamento de Campo (RVT) | [RF04](index.md#rf04), [RF19](index.md#rf19), [RF22](index.md#rf22), [RF32](index.md#rf32), [RF35](index.md#rf35) | [RNF01](index.md#rnf01), [RNF04](index.md#rnf04), [RNF07](index.md#rnf07), [RNF19](index.md#rnf19) | CT-M1-04, CT-M1-09, CT-M1-11, CT-M1-15, CT-M1-16 |
| OE1 — Padronizar e Unificar os Dados | CAR-09: Integração FLIT | [RF20](index.md#rf20) | — | CT-M1-10 |
| OE1 — Padronizar e Unificar os Dados | CAR-10: Exportação de Planilhas | [RF36](index.md#rf36) | — | CT-M1-17 |
| OE2 — Eficiência Administrativo-Financeira | CAR-03: Fechamento Financeiro | [RF05](index.md#rf05), [RF06](index.md#rf06), [RF21](index.md#rf21), [RF27](index.md#rf27) | [RNF05](index.md#rnf05), [RNF06](index.md#rnf06), [RNF08](index.md#rnf08), [RNF10](index.md#rnf10) | CT-M2-01, CT-M2-02, CT-M2-09, CT-M2-10 |
| OE2 — Eficiência Administrativo-Financeira | CAR-04: Prestação de Contas e Reembolsos | [RF07](index.md#rf07), [RF08](index.md#rf08), [RF28](index.md#rf28), [RF29](index.md#rf29) | [RNF06](index.md#rnf06), [RNF07](index.md#rnf07) | CT-M2-03, CT-M2-04, CT-M2-11, CT-M2-12 |
| OE3 — Transparecer Custos por Contrato | CAR-05: Apropriação de Custos | [RF09](index.md#rf09), [RF10](index.md#rf10), [RF30](index.md#rf30), [RF33](index.md#rf33), [RF37](index.md#rf37), [RF38](index.md#rf38) | [RNF09](index.md#rnf09), [RNF10](index.md#rnf10), [RNF11](index.md#rnf11), [RNF12](index.md#rnf12) | CT-M3-01, CT-M3-02, CT-M3-09, CT-M3-11, CT-M3-13, CT-M3-14 |
| OE3 — Transparecer Custos por Contrato | CAR-06: Painel Orçamentário | [RF11](index.md#rf11), [RF12](index.md#rf12), [RF31](index.md#rf31), [RF34](index.md#rf34), [RF39](index.md#rf39), [RF40](index.md#rf40) | [RNF09](index.md#rnf09), [RNF10](index.md#rnf10), [RNF12](index.md#rnf12) | CT-M3-03, CT-M3-04, CT-M3-10, CT-M3-12, CT-M3-15, CT-M3-16 |
| OE4 — Governança e Segurança | CAR-07: Controle de Acesso (RBAC) | [RF13](index.md#rf13), [RF14](index.md#rf14), [RF17](index.md#rf17), [RF18](index.md#rf18), [RF23](index.md#rf23), [RF24](index.md#rf24) | [RNF13](index.md#rnf13), [RNF14](index.md#rnf14), [RNF20](index.md#rnf20) | CT-M4-01, CT-M4-02, CT-M4-09, CT-M4-10, CT-M4-12, CT-M4-13 |
| OE4 — Governança e Segurança | CAR-08: Trilha de Auditoria | [RF15](index.md#rf15), [RF16](index.md#rf16) | [RNF15](index.md#rnf15), [RNF16](index.md#rnf16), [RNF17](index.md#rnf17), [RNF18](index.md#rnf18), [RNF20](index.md#rnf20) | CT-M4-03, CT-M4-04 |

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `4.1` | 30/10/2026 | Desacoplamento da Pirâmide de Abstração e Matriz-Síntese em documento próprio de Rastreabilidade. | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
