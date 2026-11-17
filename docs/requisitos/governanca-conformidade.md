# Conformidade Jurídica e Controle de Acesso (CLT, LGPD e RBAC)

Este documento sintetiza as diretrizes legais e de controle de acesso que condicionam as [Regras de Negócio](index.md#catalogo-geral-de-regras-de-negocio-rn01-a-rn31) e os [Requisitos Não Funcionais](index.md#catalogo-de-requisitos-nao-funcionais-rnf01-a-rnf20) do ***DUOC Finance***.

---

## 1. Diretrizes Legais (CLT, LGPD e Fronteira FLIT)

| Norma / Fronteira | Regra Aplicada no DUOC Finance | Requisitos Vinculados |
| :--- | :--- | :---: |
| **CLT — Art. 11** *(Prescrição Quinquenal)* | Política preventiva de **retenção mínima de 5 anos (1.825 dias)** para apontamentos, fechamentos e logs financeiros. | <a href="../#rn19" class="req-tag req-tag-rn"># RN19 ↗</a> <a href="../#rnf16" class="req-tag req-tag-rnf"># RNF16 ↗</a> <a href="../#rf16" class="req-tag req-tag-rf"># RF16 ↗</a> |
| **LGPD — Art. 16, I e II vs. Art. 18, VI** | Conservação obrigatória de registros probatórios e fiscais durante o prazo prescricional, prevalecendo sobre pedidos de eliminação enquanto houver dever legal ou defesa trabalhista. | <a href="../#rn18" class="req-tag req-tag-rn"># RN18 ↗</a> <a href="../#rn23" class="req-tag req-tag-rn"># RN23 ↗</a> <a href="../#rf06" class="req-tag req-tag-rf"># RF06 ↗</a> |
| **LGPD — Art. 5º e Art. 6º, VII** *(Sigilo)* | Dados cadastrais (CPF, e-mail) e bancários (COMPE, agência, conta, Pix) são tratados como **dados comuns sob sigilo qualificado**, com hash/criptografia e sem exposição horizontal de diárias. **Não há coleta de biometria.** | <a href="../#rn01" class="req-tag req-tag-rn"># RN01 ↗</a> <a href="../#rn22" class="req-tag req-tag-rn"># RN22 ↗</a> <a href="../#rnf03" class="req-tag req-tag-rnf"># RNF03 ↗</a> <a href="../#rnf10" class="req-tag req-tag-rnf"># RNF10 ↗</a> |
| **Sistema Externo *FLIT*** *(Ponto Biométrico)* | O registro de ponto biométrico permanece isolado no software *FLIT*; o DUOC Finance apenas importa contagens consolidadas de presença para apuração de diárias. | <a href="../../visao-produto/solucao-proposta/#car-09" class="req-tag req-tag-car"># CAR-09 ↗</a> <a href="../#rf20" class="req-tag req-tag-rf"># RF20 ↗</a> |

---

<a id="atores-do-sistema-e-matriz-canonica-de-papeis-rbac"></a>
## 2. Matriz Canônica de Papéis (RBAC) e Auditoria

<a id="61-matriz-canonica-de-papeis-rbac"></a>
### 6.1 Matriz Canônica de Papéis (RBAC)

O controle de acesso segue o **Princípio do Menor Privilégio** (<a href="../#rn16" class="req-tag req-tag-rn"># RN16 ↗</a>, <a href="../#rnf14" class="req-tag req-tag-rnf"># RNF14 ↗</a>) com **quatro papéis canônicos**, além dos fluxos comuns de autenticação (`RF13`, `RF17`, `RF18`):

| Papel | Código RBAC | Responsabilidades Principais | Perfil na DUOC |
| :--- | :---: | :--- | :--- |
| **Técnico de Campo / Diarista** | `TECNICO_CAMPO` | Registra e retifica RVTs (`RF04`, `RF35`), anexa evidências (`RF22`), consulta próprios registros (`RF19`) e solicita reembolsos/adiantamentos (`RF07`, `RF28`). | Eletricistas, técnicos residentes, diaristas e arquitetos em campo. |
| **Gestor Operacional de Obras** | `GESTOR_OBRAS` | Gerencia contratos, centros de custo e tetos (`RF33`, `RF34`, `RF37`–`RF40`), delibera apontamentos (`RF32`) e acompanha custos (`RF10`–`RF12`, `RF30`). | Engenheiros residentes e coordenadores de contrato. |
| **Administrador Financeiro** | `ADMIN_FINANCEIRO` | Gerencia colaboradores (`RF01`–`RF03`, `RF25`, `RF26`), diárias e fechamentos (`RF27`, `RF05`, `RF06`), reembolsos (`RF08`, `RF29`), contratos/custos (`RF09`–`RF11`) e auditoria (`RF15`). | Auxiliar-Administradora (**Maria Beatryz**), unificando DP/RH e Finanças. |
| **Administrador do Sistema** | `ADMIN_SISTEMA` | Atribui perfis RBAC (`RF14`), monitora bloqueios e senhas (`RF23`, `RF24`) e audita eventos (`RF15`, `RF16`). | Diretoria e sustentação técnica. |

* **Trilha de Auditoria (*Append-Only*):** Toda mutação relevante grava evento imutável com timestamp UTC, operador e estados anterior/posterior (<a href="../#rn17" class="req-tag req-tag-rn"># RN17 ↗</a>, <a href="../#rn18" class="req-tag req-tag-rn"># RN18 ↗</a>, <a href="../#rnf15" class="req-tag req-tag-rnf"># RNF15 ↗</a>).

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 02/11/2026 | Consolidação inicial das diretrizes CLT, LGPD, fronteira FLIT e Matriz RBAC. | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
| `1.2` | 10/11/2026 | Sincronização da Matriz Canônica de Papéis com os 40 RFs do catálogo. | Paulo Nery | — |
| `1.3` | 17/11/2026 | Condensação editorial removendo textos jurídicos extensos e preservando a matriz normativa e RBAC. | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
