# Capítulo 8: Priorização e MVP

Este documento registra a classificação dos **Requisitos Não Funcionais (RNF)** do sistema **DUOC Finance** em relação ao escopo do Produto Mínimo Viável (MVP). O objetivo é garantir que os atributos de qualidade indispensáveis (segurança da informação, conformidade com a LGPD, exatidão financeira e desempenho) acompanhem a primeira entrega à **DUOC Arquitetura e Engenharia**, e não fiquem para depois das funcionalidades.

Os RNFs classificados são os especificados no [Capítulo 8: Requisitos de Software](index.md) (RNF01 a RNF16). O recorte do MVP segue a [Delimitação do Escopo do MVP](../visao-produto/capitulo-2/index.md#26-viabilidade-da-proposta-analise-do-mvp) do Capítulo 2.

---

## 8.1 Recorte Funcional de Referência do MVP

Para classificar um RNF como associado ao MVP, é preciso saber quais Requisitos Funcionais (RF) estão no MVP. O recorte abaixo aplica a delimitação do Capítulo 2.6 (cadastro e RBAC, RVT com reembolso, motor de cálculo de diárias e comissões, apropriação de custos por contrato, visualização tabular de custo por contrato e registro básico de auditoria) aos RFs especificados.

| Situação | Requisitos Funcionais | Fundamentação no Escopo do MVP |
| :--- | :--- | :--- |
| **No MVP** | RF01, RF02, RF03, RF04 | Cadastro centralizado de pessoal e apontamento de campo (RVT), base para todos os fluxos financeiros. |
| **No MVP** | RF05, RF06, RF07, RF08 | Motor de apoio ao cálculo de diárias e comissões simplificadas e fluxo de reembolso incluído no RVT. |
| **No MVP** | RF09, RF10 | Apropriação dos custos ao contrato e visualização tabular direta do custo apurado, com a origem de cada lançamento. |
| **No MVP** | RF13, RF14, RF15 | Controle de acesso por perfis fixos (RBAC) e registro básico de auditoria para conformidade com a LGPD. |
| **Fora do MVP** | RF11, RF12 | Filtros dinâmicos e monitoramento orçamentário compõem um painel de *business intelligence*, que o Capítulo 2.6 declara desnecessário no primeiro ciclo. |
| **Fora do MVP** | RF16 | A exportação do dossiê de auditoria vai além do "registro básico de auditoria" previsto para o MVP. |

---

## 8.2 Categorias de Classificação dos RNFs

Cada RNF recebe exatamente uma das quatro categorias oficiais abaixo.

| Categoria | Definição Operacional | Consequência para a Entrega |
| :--- | :--- | :--- |
| **Obrigatório para o MVP** | Atributo transversal de segurança, privacidade ou conformidade legal que vale para o sistema inteiro, independentemente de qual RF está em uso. | Entra no MVP sem negociação. Sem ele, não há publicação em produção com dados reais. |
| **Associado a RF do MVP** | Atributo de qualidade de um RF específico que está no MVP. | Entra no MVP junto com o RF. O RF só é considerado pronto quando o critério mensurável do RNF é atendido. |
| **Evolutivo** | Atributo pertinente ao produto, mas ligado a um RF fora do MVP ou dependente de infraestrutura prevista para ciclos seguintes. | Permanece no backlog e é reavaliado a cada incremento do RAD. |
| **Não Aplicável** | Atributo sem relação com o escopo do produto (por exemplo, módulos excluídos como estoque, cronogramas de obra ou composições SINAPI). | Não é implementado nem testado no projeto. |

---

<a id="tabela-classificacao-rnf-mvp"></a>
## 8.3 Tabela de Classificação e Vinculação dos RNFs do MVP

| Código | Requisito Não Funcional | URPS+ | OE | RFs Vinculados | Categoria | Justificativa |
| :---: | :--- | :--- | :---: | :---: | :--- | :--- |
| **RNF01** | Operar em modo *offline* para coleta de dados em canteiros sem conectividade | Reliability | OE1 | RF04 | **Evolutivo** | O RF04 está no MVP, mas o armazenamento local com sincronização posterior exige *service worker*, fila de sincronização e tratamento de conflitos na SPA web. No MVP, o apontamento é feito com conexão ativa. O modo *offline* é o candidato prioritário para o incremento seguinte, pois responde a uma dor real de campo. |
| **RNF02** | Disponibilizar consulta cadastral com tempo de resposta ágil | Performance | OE1 | RF01, RF02, RF03 | **Associado a RF do MVP** | A ficha unificada é consultada em todas as rotinas de pessoal. A meta de ≤ 2,0 s garante que a centralização não fique mais lenta do que a planilha que ela substitui. |
| **RNF03** | Proteger dados pessoais e cadastrais com criptografia em repouso e em trânsito | Security (+) | OE1 | Transversal (todos os RFs do MVP) | **Obrigatório para o MVP** | Medida técnica de segurança exigida pela LGPD (Art. 46) e condição de aceite do Capítulo 2.6 para qualquer publicação com dados reais. |
| **RNF04** | Garantir usabilidade e agilidade no preenchimento de apontamentos de campo | Usability | OE1 | RF04 | **Associado a RF do MVP** | O apontamento é a porta de entrada dos dados de custo. Se o preenchimento for lento ou confuso para o técnico de campo, os dados não chegam ao fechamento. A interface *mobile-first* do MVP é validada com esse critério. |
| **RNF05** | Processar a rotina de fechamento financeiro com alta eficiência | Performance | OE2 | RF05, RF06 | **Associado a RF do MVP** | O fechamento é o fluxo de maior valor para o financeiro. A meta de ≤ 5,0 s para 500 apontamentos mede o ganho de eficiência prometido no OE2. |
| **RNF06** | Garantir exatidão aritmética centesimal em cálculos monetários | Reliability | OE2 | RF05, RF06, RF08 | **Associado a RF do MVP** | Diárias, comissões e reembolsos envolvem pagamentos reais a pessoas. Uma discrepância de centavos compromete a confiança da cliente no motor financeiro, por isso a tolerância é zero. |
| **RNF07** | Validar integridade, tamanho e formatos no upload de comprovantes | Supportability / Security (+) | OE2 | RF04, RF07 | **Associado a RF do MVP** | O comprovante fiscal é obrigatório no reembolso (RN06) e as fotos acompanham o apontamento. A validação de formato e tamanho protege o armazenamento e a legibilidade da prova documental. |
| **RNF08** | Exigir justificativa textual mandatória e auditoria em estornos de fechamento | Security (+) | OE2 | RF06 | **Associado a RF do MVP** | Garante que a imutabilidade dos lotes homologados (RN08) só seja quebrada com justificativa auditável, o que preserva a rastreabilidade do fechamento. |
| **RNF09** | Carregar o painel analítico em tempo inferior a 3 segundos | Performance | OE3 | RF11, RF12 | **Evolutivo** | O painel analítico com filtros dinâmicos e indicadores orçamentários está fora do MVP. A consulta de custo por contrato no MVP é tabular (RF10). O critério volta a valer quando RF11 e RF12 entrarem no backlog ativo. |
| **RNF10** | Restringir dados financeiros analíticos conforme perfil de acesso | Security (+) | OE3 | RF05, RF06, RF09, RF10 | **Obrigatório para o MVP** | Dados salariais e valores de diárias são pessoais e confidenciais (RN14). Qualquer tela do MVP que exponha valores financeiros deve bloquear perfis sem alçada, o que torna o atributo transversal, e não restrito ao painel. |
| **RNF11** | Garantir consistência transacional ACID na apropriação concorrente de custos | Reliability | OE3 | RF09 | **Associado a RF do MVP** | A apropriação é o elo entre o fechamento e o custo por contrato. Duplicidades ou divergências por concorrência invalidariam a informação entregue à diretoria. |
| **RNF12** | Assegurar responsividade do painel em resoluções de *desktop* e *tablet* | Usability | OE3 | RF11, RF12 | **Evolutivo** | O critério mensurável refere-se ao painel analítico, que está fora do MVP. As telas do MVP seguem o padrão *mobile-first* do Tailwind CSS definido na stack, sem meta formal própria neste ciclo. |
| **RNF13** | Expirar token de acesso temporário em no máximo 8 horas | Security (+) | OE4 | RF13 | **Obrigatório para o MVP** | Limita a janela de uso indevido de sessões, principalmente em dispositivos compartilhados em campo. É requisito mínimo da autenticação do MVP. |
| **RNF14** | Validar perfil de autorização em 100% das rotas de API com dados sensíveis | Security (+) / Legal (LGPD) | OE4 | RF13, RF14 (transversal às rotas do MVP) | **Obrigatório para o MVP** | Implementa o princípio do menor privilégio (RN16) e o isolamento de dados pessoais exigido pela LGPD. Sem ele, o RBAC do MVP ficaria restrito à interface e não protegeria a API. |
| **RNF15** | Garantir atomicidade transacional na gravação de logs de auditoria | Reliability | OE4 | RF15 (transversal às operações de escrita do MVP) | **Obrigatório para o MVP** | O registro básico de auditoria só tem valor probatório se nenhuma operação sobre dados pessoais ou financeiros deixar de ser registrada (RN17). Atende ao princípio de responsabilização e prestação de contas da LGPD. |
| **RNF16** | Reter registros de auditoria por no mínimo 5 anos contra expurgo indevido | Supportability / Legal | OE4 | RF15 | **Obrigatório para o MVP** | Obrigação legal decorrente do prazo prescricional trabalhista (Art. 11 da CLT). Mesmo sem completar 5 anos no semestre, o critério é verificável no MVP por análise estática da ausência de rotinas de expurgo (RN18 e RN19). |

---

## 8.4 Síntese da Classificação

### 8.4.1 Distribuição por Categoria

| Categoria | Quantidade | RNFs |
| :--- | :---: | :--- |
| **Obrigatório para o MVP** | 6 | RNF03, RNF10, RNF13, RNF14, RNF15, RNF16 |
| **Associado a RF do MVP** | 7 | RNF02, RNF04, RNF05, RNF06, RNF07, RNF08, RNF11 |
| **Evolutivo** | 3 | RNF01, RNF09, RNF12 |
| **Não Aplicável** | 0 | — |
| **Total** | **16** | 13 no escopo do MVP (81,25%) e 3 evolutivos (18,75%) |

Nenhum RNF foi classificado como **Não Aplicável**. Todos derivam de características (CAR-01 a CAR-08) que pertencem ao produto, e nenhum se refere aos módulos excluídos na Reunião 01 e no Capítulo 2.6 (estoque, cronogramas de obra e composições SINAPI).

### 8.4.2 Distribuição por Objetivo Específico

| Objetivo Específico | Obrigatório | Associado a RF do MVP | Evolutivo |
| :--- | :---: | :---: | :---: |
| [**OE1 — Padronização e Unificação de Dados**](index.md#oe1) | RNF03 | RNF02, RNF04 | RNF01 |
| [**OE2 — Eficiência Administrativo-Financeira**](index.md#oe2) | — | RNF05, RNF06, RNF07, RNF08 | — |
| [**OE3 — Inteligência de Custos por Contrato**](index.md#oe3) | RNF10 | RNF11 | RNF09, RNF12 |
| [**OE4 — Governança, Segurança e Rastreabilidade**](index.md#oe4) | RNF13, RNF14, RNF15, RNF16 | — | — |

Os quatro OEs têm ao menos um RNF no escopo do MVP. O OE3 concentra os itens evolutivos porque o painel analítico (RF11 e RF12) foi adiado.

### 8.4.3 Cobertura dos Atributos de Qualidade Críticos no MVP

| Atributo de Qualidade | RNFs no MVP | Garantia na Entrega Inicial |
| :--- | :--- | :--- |
| **Segurança da Informação** | RNF03, RNF07, RNF08, RNF10, RNF13, RNF14 | Criptografia em repouso e em trânsito, autenticação com expiração de sessão, autorização por perfil em todas as rotas e validação de uploads. |
| **Conformidade com a LGPD** | RNF03, RNF10, RNF14, RNF15 | Cobre os princípios de segurança, necessidade (acesso restrito por perfil) e responsabilização (auditoria) listados na seção "Conformidade LGPD Aplicável ao MVP" do Capítulo 2.6. |
| **Conformidade Trabalhista e Fiscal** | RNF15, RNF16 | Trilha de auditoria íntegra e retida pelo prazo do Art. 11 da CLT. |
| **Desempenho** | RNF02, RNF05 | Consulta cadastral em ≤ 2,0 s e fechamento financeiro em ≤ 5,0 s. |
| **Confiabilidade e Exatidão** | RNF06, RNF11, RNF15 | Cálculo monetário sem erro de arredondamento e consistência transacional na apropriação e na auditoria. |
| **Usabilidade** | RNF04 | Apontamento de campo concluído em menos de 3 minutos por usuários com treinamento básico. |

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 28/09/2026 | Criação da página de Priorização e MVP: recorte funcional de referência, categorias de classificação e Tabela de Classificação e Vinculação dos RNFs do MVP (RNF01 a RNF16). | Paulo Nery | — |
