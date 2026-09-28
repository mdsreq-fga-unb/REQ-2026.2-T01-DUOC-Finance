# Capítulo 8: Priorização e MVP

!!! info "Unidade 2 — Priorização e MVP"
    Este capítulo apresenta a priorização dos Requisitos Funcionais (RFs) do DUOC Finance por meio da análise de **Valor de Negócio** e **Esforço Técnico**, servindo como base para a construção da **Matriz 4×4 (Valor × Esforço)** e para a definição do **Produto Mínimo Viável (MVP)**.

A priorização considera os quatro Objetivos Estratégicos (OEs) definidos para a solução:

- **OE1 — Padronização e Unificação de Dados**
- **OE2 — Eficiência Administrativo-Financeira**
- **OE3 — Inteligência de Custos por Contrato**
- **OE4 — Governança, Segurança e Rastreabilidade**

As pontuações de **Valor de Negócio** e **Esforço Técnico** utilizadas na matriz são provenientes das avaliações realizadas nas etapas anteriores de priorização.

## 8.1 Critérios de Priorização

A priorização dos RFs utiliza duas dimensões, ambas avaliadas em uma escala de **1 a 4**: Valor de Negócio e Esforço Técnico.

### 8.1.1 Valor de Negócio

| Pontuação | Classificação | Critério |
| :---: | :--- | :--- |
| **1** | Baixo | Contribuição limitada aos objetivos do produto e baixo impacto no fluxo operacional. |
| **2** | Moderado | Contribui para o produto, mas não é essencial para o funcionamento inicial da solução. |
| **3** | Alto | Possui impacto relevante nos processos de negócio e contribui diretamente para um ou mais objetivos estratégicos. |
| **4** | Muito alto | É essencial para os objetivos estratégicos e/ou para o funcionamento dos principais fluxos da solução. |

### 8.1.2 Esforço Técnico

| Pontuação | Classificação | Critério |
| :---: | :--- | :--- |
| **1** | Muito baixo | Implementação simples, com poucas dependências e baixa complexidade técnica. |
| **2** | Baixo | Implementação de complexidade controlada e com poucas dependências. |
| **3** | Alto | Envolve regras de negócio, integrações, persistência, segurança ou dependências relevantes. |
| **4** | Muito alto | Envolve elevada complexidade técnica, múltiplas dependências ou maior incerteza de implementação. |

## 8.2 Backlog Priorizado dos Requisitos Funcionais

A tabela a seguir consolida os Requisitos Funcionais do DUOC Finance, relacionando cada requisito ao seu respectivo Objetivo Estratégico (OE), Capacidade de Negócio (CAR), Valor de Negócio e Esforço Técnico.

| RF | Requisito Funcional | OE | CAR | Valor | Esforço |
| :---: | :--- | :---: | :---: | :---: | :---: |
| **RF01** | Cadastrar colaborador | OE1 | CAR-01 | **4** | **2** |
| **RF02** | Atualizar cadastro | OE1 | CAR-01 | **3** | **2** |
| **RF03** | Registrar movimentação funcional | OE1 | CAR-01 | **3** | **2** |
| **RF04** | Submeter apontamento de campo | OE1 | CAR-02 | **4** | **3** |
| **RF05** | Solicitar prévia de fechamento | OE2 | CAR-03 | **4** | **3** |
| **RF06** | Homologar fechamento financeiro | OE2 | CAR-03 | **4** | **2** |
| **RF07** | Submeter solicitação de reembolso | OE2 | CAR-04 | **3** | **2** |
| **RF08** | Deliberar solicitação de reembolso | OE2 | CAR-04 | **3** | **2** |
| **RF09** | Apropriar custos operacionais | OE3 | CAR-05 | **4** | **3** |
| **RF10** | Consultar rastreabilidade de custos | OE3 | CAR-05 | **3** | **2** |
| **RF11** | Filtrar indicadores de custos | OE3 | CAR-06 | **2** | **2** |
| **RF12** | Monitorar execução orçamentária | OE3 | CAR-06 | **3** | **3** |
| **RF13** | Efetuar login no sistema | OE4 | CAR-07 | **4** | **1** |
| **RF14** | Gerenciar perfis de acesso (RBAC) | OE4 | CAR-07 | **4** | **2** |
| **RF15** | Consultar trilha de auditoria | OE4 | CAR-08 | **2** | **3** |
| **RF16** | Exportar relatório de auditoria | OE4 | CAR-08 | **1** | **3** |