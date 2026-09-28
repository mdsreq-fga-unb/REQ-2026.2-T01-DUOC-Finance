# Capítulo 8: Feedback dos Requisitos — Avaliação em Pares

Este documento formaliza o registro, a deliberação crítica e o rastreamento das decisões tomadas pela equipe **Cascata Ágil** a partir do relatório de avaliação por pares elaborado pela equipe **Guerreiros do Backlog** sobre o lote de Requisitos de Software do sistema **DUOC Finance**.

---

## 8.1 Visão Geral e Critérios Metodológicos

!!! info "Dados da Avaliação por Pares"
    - **Equipe Avaliadora:** Guerreiros do Backlog  
    - **Equipe Avaliada:** Cascata Ágil  
    - **Artefato Avaliado:** [Capítulo 8: Requisitos de Software](index.md) (RFs, RNFs, RNs e Rastreabilidade)  
    - **Entrega / Ciclo:** Unidade 2 — Detalhamento e Backlog  
    - **Abrangência:** Transversal sobre os Objetivos Específicos OE1, OE2, OE3 e OE4  

### 8.1.1 Categorias de Deliberação

Para assegurar governança, transparência e reprodutibilidade, cada feedback catalogado é submetido a análise e recebe uma das quatro deliberações oficiais:

| Classificação | Definição Operacional | Critério de Aceite |
| :--- | :--- | :--- |
| **Aceito** | O apontamento é pertinente e o requisito/artefato é ajustado integralmente conforme a sugestão. | Aplicação direta no documento de requisitos e casos de teste associados. |
| **Parcialmente Aceito** | O apontamento aponta uma melhoria válida, porém a solução adotada foi adaptada às restrições do projeto DUOC. | Justificativa técnica do ajuste adaptado e atualização do documento. |
| **Não Aceito** | O apontamento é recusado e a formulação original é mantida por motivos técnicos, de domínio ou metodológicos. | Apresentação de contra-argumento técnico fundamentado nas regras de negócio da DUOC. |
| **Não Aplicável** | O apontamento não se aplica ao escopo do MVP, confunde responsabilidades ou foge da taxonomia adotada. | Justificativa de descarte por desvio de escopo, nível de abstração ou premissa inválida. |

### 8.1.2 Diretrizes de Refatoração Aplicadas

1. **Requisitos Funcionais (RFs):** Garantia estrita do padrão sintático `[Verbo no Infinitivo] + [Objeto Mensurável]`, eliminando formulações no presente do indicativo ou ambiguidades operacionais.
2. **Requisitos Não Funcionais (RNFs):** Garantia de critérios objetivos e mensuráveis (tempo em segundos/milissegundos, percentual de disponibilidade, taxa de erro, conformidade com normas), aderentes ao modelo **URPS+** e taxonomia de **Sommerville**.
3. **Consistência e Clareza:** Eliminação de sobreposições entre requisitos, resolução de termos vagos e atualização das dependências nas regras de negócio (RN) e critérios BDD.

---

## 8.2 Painel Quantitativo de Deliberações

A tabela a seguir resume a distribuição quantitativa das deliberações sobre os apontamentos catalogados.

| Status da Deliberação | Quantidade | Percentual (%) |
| :--- | :---: | :---: |
| **Aceito** | `[0]` | `[0%]` |
| **Parcialmente Aceito** | `[0]` | `[0%]` |
| **Não Aceito** | `[0]` | `[0%]` |
| **Não Aplicável** | `[0]` | `[0%]` |
| **Total de Feedbacks Catalogados** | **`[0]`** | **`100%`** |

---

## 8.3 Matriz de Registro e Decisões de Feedbacks

### 8.3.1 Apontamentos Gerais e Metodológicos

| ID | Item / Seção Alvo | Apontamento da Equipe Avaliadora | Deliberação | Justificativa & Decisão Técnica | Ação / Impacto no Artefato |
| :---: | :--- | :--- | :---: | :--- | :--- |
| **FB-01** | `[Ex.: Estrutura Geral]` | `[Descrição do apontamento recebido]` | `[Aceito / Parcialmente Aceito / Não Aceito / Não Aplicável]` | `[Racional técnico da equipe Cascata Ágil]` | `[Ação realizada ou Nenhuma]` |

---

### 8.3.2 Requisitos Funcionais (RFs)

| ID | Requisito Alvo | Apontamento da Equipe Avaliadora | Deliberação | Justificativa & Decisão Técnica | Ação / Impacto no Artefato |
| :---: | :--- | :--- | :---: | :--- | :--- |
| **FB-02** | `[Ex.: RF01]` | `[Descrição do apontamento recebido]` | `[Aceito / Parcialmente Aceito / Não Aceito / Não Aplicável]` | `[Racional técnico da equipe Cascata Ágil]` | `[Ação realizada ou Nenhuma]` |

---

### 8.3.3 Requisitos Não Funcionais (RNFs)

| ID | Requisito Alvo | Apontamento da Equipe Avaliadora | Deliberação | Justificativa & Decisão Técnica | Ação / Impacto no Artefato |
| :---: | :--- | :--- | :---: | :--- | :--- |
| **FB-03** | `[Ex.: RNF01]` | `[Descrição do apontamento recebido]` | `[Aceito / Parcialmente Aceito / Não Aceito / Não Aplicável]` | `[Racional técnico da equipe Cascata Ágil]` | `[Ação realizada ou Nenhuma]` |

---

### 8.3.4 Regras de Negócio e Rastreabilidade

| ID | Item Alvo | Apontamento da Equipe Avaliadora | Deliberação | Justificativa & Decisão Técnica | Ação / Impacto no Artefato |
| :---: | :--- | :--- | :---: | :--- | :--- |
| **FB-04** | `[Ex.: RN01 / Pirâmide]` | `[Descrição do apontamento recebido]` | `[Aceito / Parcialmente Aceito / Não Aceito / Não Aplicável]` | `[Racional técnico da equipe Cascata Ágil]` | `[Ação realizada ou Nenhuma]` |

---

## 8.4 Rastreabilidade de Impacto nos Artefatos de Requisitos

Mapeamento consolidado das seções e artefatos modificados em decorrência das deliberações de feedback:

| Artefato / Seção Afetada | Natureza do Ajuste | Requisitos / Itens Impactados | Versão Pós-Ajuste |
| :--- | :--- | :--- | :---: |
| **Tabela de Requisitos Funcionais** | `[Ex.: Padronização sintática / Ajuste de escopo]` | `[Ex.: RF01, RF03]` | `[v2.0]` |
| **Tabela de Requisitos Não Funcionais** | `[Ex.: Ajuste de métricas e critérios de mensuração]` | `[Ex.: RNF02, RNF05]` | `[v2.0]` |
| **Regras de Negócio (RNs)** | `[Ex.: Refinamento de cálculo / Clareza]` | `[Ex.: RN04]` | `[v2.0]` |
| **Matriz de Rastreabilidade** | `[Ex.: Atualização de ligações verticais]` | `[Ex.: CAR-01 → RF01]` | `[v2.0]` |

---

## 8.5 Checklist de Validação e Homologação Interna

- [ ] Todos os comentários enviados no relatório de avaliação por pares foram catalogados com ID único.
- [ ] 100% dos feedbacks receberam uma das quatro deliberações formais com justificativa explícita.
- [ ] 100% dos Requisitos Funcionais (RFs) seguem a sintaxe canônica `[Verbo no Infinitivo] + [Objeto]`.
- [ ] 100% dos Requisitos Não Funcionais (RNFs) possuem métricas verificáveis e critérios objetivos.
- [ ] Regras de Negócio e Casos de Teste afetados foram devidamente sincronizados.
- [ ] Documento revisado e homologado internamente pelos membros da equipe Cascata Ágil.
- [ ] Navegação e renderização validadas no MkDocs.

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 28/09/2026 | Criação da estrutura e matriz deliberativa de feedbacks da avaliação em pares (Issue #77) | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
