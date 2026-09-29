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

## 8.3 Matriz 4×4 — Valor × Esforço

A Matriz 4×4 cruza o **Valor de Negócio** e o **Esforço Técnico** atribuídos a cada Requisito Funcional. Essa análise permite visualizar a concentração dos requisitos de maior valor e identificar aqueles que apresentam maior esforço relativo para implementação.

| **Valor \ Esforço** | **1 — Muito baixo** | **2 — Baixo** | **3 — Alto** | **4 — Muito alto** |
| :---: | :--- | :--- | :--- | :--- |
| **4 — Muito alto** | **RF13** | **RF01, RF06, RF14** | **RF04, RF05, RF09** | — |
| **3 — Alto** | — | **RF02, RF03, RF07, RF08, RF10** | **RF12** | — |
| **2 — Moderado** | — | **RF11** | **RF15** | — |
| **1 — Baixo** | — | — | **RF16** | — |

### 8.3.1 Análise da Matriz

A distribuição dos requisitos na matriz evidencia diferentes níveis de prioridade para a composição do MVP.

**Alto valor e baixo esforço:** RF13, RF01, RF06 e RF14 apresentam Valor de Negócio 4 e Esforço Técnico entre 1 e 2. São requisitos de elevada relevância e esforço relativamente reduzido.

**Alto valor e alto esforço:** RF04, RF05 e RF09 apresentam Valor de Negócio 4 e Esforço Técnico 3. Apesar do maior esforço, esses requisitos estão relacionados aos principais processos operacionais da solução e devem ser considerados na definição do MVP.

**Alto valor e esforço moderado:** RF02, RF03, RF07, RF08 e RF10 apresentam Valor de Negócio 3 e Esforço Técnico 2. Esses requisitos complementam os fluxos principais e possuem relação equilibrada entre valor e esforço.

**Valor moderado:** RF11 apresenta Valor de Negócio 2 e Esforço Técnico 2, enquanto RF15 apresenta Valor 2 e Esforço 3. Ambos possuem contribuição relevante, mas não são suficientes, isoladamente, para determinar a composição do fluxo mínimo.

**Baixo valor relativo:** RF16 apresenta Valor de Negócio 1 e Esforço Técnico 3. Sua posição indica menor prioridade relativa quando comparada aos demais requisitos.

## 8.4 Definição do MVP

A definição do MVP considera, além da posição dos requisitos na Matriz 4×4, as dependências entre funcionalidades e a necessidade de garantir um fluxo funcional contínuo para os principais processos da solução.

### 8.4.1 Dependências e fluxo funcional

O fluxo principal considerado para o MVP inicia-se pela autenticação e controle de acesso e segue pela gestão cadastral, apontamento de campo, fechamento financeiro e apropriação dos custos.

```text
RF13 — Efetuar login
        ↓
RF14 — Gerenciar perfis de acesso
        ↓
RF01 — Cadastrar colaborador
        ↓
RF02 — Atualizar cadastro
        ↓
RF03 — Registrar movimentação funcional
        ↓
RF04 — Submeter apontamento de campo
        ↓
RF05 — Solicitar prévia de fechamento
        ↓
RF06 — Homologar fechamento financeiro
        ↓
RF09 — Apropriar custos operacionais
        ↓
RF10 — Consultar rastreabilidade de custos

O fluxo de reembolsos complementa o processo financeiro:

RF07 — Submeter solicitação de reembolso
        ↓
RF08 — Deliberar solicitação de reembolso

A seleção desses requisitos busca evitar um MVP formado apenas por funcionalidades isoladas. O fluxo permite que o sistema tenha autenticação e controle de acesso, mantenha os dados dos colaboradores, registre os apontamentos de campo, processe o fechamento financeiro e aproprie os custos aos contratos.

---

### 8.4.2 Requisitos selecionados para o MVP

Considerando Valor de Negócio, Esforço Técnico, dependências e continuidade do fluxo funcional, os seguintes requisitos compõem o MVP:

| RF | Requisito Funcional | Justificativa |
| :--- | :--- | :--- |
| **RF13** | Efetuar login no sistema | Permite a autenticação necessária para acesso às funcionalidades protegidas. |
| **RF14** | Gerenciar perfis de acesso (RBAC) | Estabelece o controle de acesso conforme os diferentes perfis de usuário. |
| **RF01** | Cadastrar colaborador | Cria a base cadastral necessária para os processos posteriores. |
| **RF02** | Atualizar cadastro | Mantém os dados cadastrais atualizados durante o ciclo funcional. |
| **RF03** | Registrar movimentação funcional | Permite registrar alterações no estado funcional dos colaboradores. |
| **RF04** | Submeter apontamento de campo | Inicia o fluxo operacional de registros técnicos de campo. |
| **RF05** | Solicitar prévia de fechamento | Consolida os registros necessários para o processo de fechamento financeiro. |
| **RF06** | Homologar fechamento financeiro | Formaliza o fechamento financeiro e conclui sua etapa de homologação. |
| **RF07** | Submeter solicitação de reembolso | Permite iniciar o fluxo de prestação de contas e reembolsos. |
| **RF08** | Deliberar solicitação de reembolso | Completa o fluxo de análise e decisão das solicitações de reembolso. |
| **RF09** | Apropriar custos operacionais | Relaciona os custos operacionais aos respectivos contratos. |
| **RF10** | Consultar rastreabilidade de custos | Permite consultar a origem e os dados relacionados aos custos apropriados. |

## 8.5 Requisitos Pós-MVP

Os requisitos abaixo não fazem parte da primeira delimitação do MVP. A postergação considera sua posição na Matriz 4×4, o esforço de implementação e o fato de que não são necessários para estabelecer o fluxo operacional mínimo definido anteriormente.

| RF | Requisito Funcional | Tratamento |
| :---: | :--- | :--- |
| **RF11** | Filtrar indicadores de custos | **Fase posterior** — amplia a capacidade analítica após a consolidação dos processos operacionais. |
| **RF12** | Monitorar execução orçamentária | **Fase posterior** — possui maior esforço técnico e depende da existência de uma base consolidada de custos apropriados. |
| **RF15** | Consultar trilha de auditoria | **Fase posterior** — a consulta pela interface pode ser evoluída após a estabilização dos processos principais. |
| **RF16** | Exportar relatório de auditoria | **Fase posterior** — apresenta menor valor relativo e maior esforço, não sendo necessária para completar o fluxo operacional inicial. |

!!! warning "Auditoria no MVP"
    A postergação de **RF15** e **RF16** não significa eliminar os mecanismos de auditoria da solução. As regras relacionadas ao registro, atomicidade, imutabilidade e retenção das informações de auditoria permanecem aplicáveis. O que é postergado é a disponibilização das funcionalidades de **consulta e exportação** da trilha de auditoria.

## 8.6 Tratamento dos Requisitos de Alto Valor e Alto Esforço

Os requisitos **RF04, RF05 e RF09** apresentam simultaneamente **Valor de Negócio 4** e **Esforço Técnico 3**.

Apesar do esforço técnico mais elevado, esses requisitos estão diretamente relacionados aos principais processos operacionais da solução. Por esse motivo, eles permanecem no MVP, adotando-se uma estratégia de **redução e controle de escopo** para a primeira versão.

| RF | Estratégia para o MVP |
| :---: | :--- |
| **RF04** | Implementar o registro essencial dos apontamentos de campo, contemplando as informações e evidências necessárias ao fluxo operacional. |
| **RF05** | Implementar a consolidação dos registros homologados necessários para a prévia de fechamento, mantendo o escopo concentrado no processo financeiro principal. |
| **RF09** | Implementar a apropriação básica dos custos aos contratos, preservando as regras de validação e rastreabilidade necessárias. |

Funcionalidades complementares ou evoluções desses processos poderão ser incorporadas em fases posteriores, sem comprometer o fluxo fundamental definido para o MVP.

## 8.7 Classificação MoSCoW

Como complemento à Matriz 4×4, os requisitos funcionais foram agrupados segundo o método **MoSCoW**, formalizando o nível de compromisso de entrega para cada funcionalidade:

- **Must Have (Obrigatório):** Requisitos indispensáveis que compõem o fluxo ponta a ponta do MVP. Sem eles, o sistema não opera de forma viável.
- **Should Have (Deveria ter):** Requisitos de alto valor que agregam importante capacidade analítica ou operacional, mas cuja ausência imediata não paralisa a operação mínima.
- **Could Have (Poderia ter):** Requisitos desejáveis de refinamento operacional e visual.
- **Won't Have (Não terá por enquanto):** Requisitos de menor prioridade ou alto esforço sem impacto direto no fluxo principal, postergados para ciclos evolutivos futuros.

| Categoria MoSCoW | Requisitos Incluídos | Justificativa e Impacto |
| :--- | :--- | :--- |
| **Must Have** | **RF01**, **RF02**, **RF03**, **RF04**, **RF05**, **RF06**, **RF07**, **RF08**, **RF09**, **RF10**, **RF13**, **RF14** | Formam a espinha dorsal da aplicação (segurança, cadastro, lançamento, fechamento e apropriação de custos). São essenciais para o MVP. |
| **Should Have** | **RF12** | Permite o acompanhamento orçamentário. Embora relevante para o OE3, foi postergado para a fase pós-MVP por depender de uma base estável de custos já apropriados. |
| **Could Have** | **RF11**, **RF15** | O **RF11** melhora a experiência de filtragem nos painéis. O **RF15** disponibiliza a interface visual de auditoria (cuja gravação no banco já ocorre nativamente). |
| **Won't Have** (nesta release) | **RF16** | Funcionalidade de exportação de relatórios de auditoria em PDF/CSV. Apresenta baixo valor de uso diário e maior esforço de formatação, sendo postergada. |

---

## 8.8 Rastreabilidade dos Requisitos com os Objetivos Estratégicos (OEs)

Para garantir que todas as entregas do MVP e das fases futuras estejam estritamente alinhadas com as dores de negócio da DUOC Finance, a tabela abaixo mapeia a cobertura de cada **Objetivo Estratégico (OE)** pelos Requisitos Funcionais e sua respectiva presença no MVP:

| Objetivo Estratégico (OE) | Requisitos Associados | Cobertura no MVP | Análise de Cobertura do Objetivo |
| :--- | :--- | :---: | :--- |
| **OE1 — Padronização e Unificação de Dados** | RF01, RF02, RF03, RF04 | **100%** | Todos os RFs do OE1 estão no MVP, garantindo a eliminação de cadastros duplicados e a unificação da coleta de dados em campo. |
| **OE2 — Eficiência Administrativo-Financeira** | RF05, RF06, RF07, RF08 | **100%** | Todos os RFs do OE2 estão no MVP, cobrindo integralmente o ciclo de apuração de diárias/comissões e a prestação de contas por reembolso. |
| **OE3 — Inteligência de Custos por Contrato** | RF09, RF10, RF11, RF12 | **50%** (2 de 4 no MVP) | O MVP atende à alocação de custos e à rastreabilidade de origem (RF09, RF10). O monitoramento e as filtragens avançadas (RF11, RF12) evoluem na Fase 2. |
| **OE4 — Governança, Segurança e Rastreabilidade** | RF13, RF14, RF15, RF16 | **50%** (2 de 4 no MVP) | A segurança de acesso e RBAC (RF13, RF14) estão no MVP. A auditoria é garantida no backend, ficando a visualização e exportação (RF15, RF16) para a Fase 2. |

## 8.9 Conclusão

A estratégia de priorização adotada neste capítulo permitiu estruturar o escopo do **DUOC Finance** de maneira objetiva, transparente e rigorosamente alinhada às necessidades estratégicas da organização. Através da combinação entre a **Matriz 4×4 (Valor vs. Esforço)** e a metodologia **MoSCoW**, foi possível delimitar o **Produto Mínimo Viável (MVP)** garantindo a máxima entrega de valor com um nível de risco técnico controlado.

A seleção final do MVP abrange **12 Requisitos Funcionais (RF01 a RF10, RF13 e RF14)** que formam um fluxo funcional contínuo e integrado:

1. **Autenticação e Segurança (OE4):** Garantidos via login seguro (`RF13`) e controle de acesso baseado em papéis (`RF14`).
2. **Gestão Cadastral Unificada (OE1):** Estabelecida pelo cadastro, atualização e controle de status funcional de colaboradores (`RF01`, `RF02`, `RF03`).
3. **Operação e Coleta de Campo (OE1 & OE2):** Viabilizados pela submissão de apontamentos técnicos (`RF04`) e solicitações de reembolso com comprovante (`RF07`, `RF08`).
4. **Fechamento e Inteligência Financeira (OE2 & OE3):** Assegurados pela prévia e homologação de fechamentos (`RF05`, `RF06`), juntamente com a apropriação e rastreabilidade de custos por contrato (`RF09`, `RF10`).

Adicionalmente, o mapeamento de rastreabilidade comprovou a eficácia do escopo definido, cobrindo **100% dos requisitos de unificação de dados (OE1) e eficiência financeira (OE2)** já no MVP, além de garantir a base transacional necessária para a inteligência de custos (OE3) e a governança (OE4).

Os requisitos postergados (**RF11, RF12, RF15 e RF16**) constituem o backlog evolutivo planejado para a **Fase 2 (Pós-MVP)**. Essa divisão clara de escopo protege o cronograma da Unidade 2, elimina dependências críticas e assegura a entrega de uma solução viável, robusta e imediatamente operacional para a DUOC Arquitetura e Engenharia.

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| 1.0 | 28/09/2026 | Construção da Matriz 4×4 (Valor × Esforço) e definição dos RFs do MVP | Gustavo Bonifácio | - |