# Conformidade Jurídica, Privacidade e Governança Legal (CLT e LGPD)

Esta seção consolida as diretrizes normativas, os fundamentos jurídicos e os controles técnicos de segurança da informação adotados pelo ***DUOC Finance***. O documento estabelece as bases legais e regulatórias que norteiam as [Regras de Negócio](index.md#catalogo-geral-de-regras-de-negocio-rn01-a-rn31) e os [Requisitos Não Funcionais](index.md#catalogo-de-requisitos-nao-funcionais-rnf01-a-rnf20) da plataforma, assegurando rastreabilidade probatória, proteção de dados e governança corporativa contínua.

---

## 1. Contexto e Enquadramento Regulatório

O ecossistema operacional do ***DUOC Finance*** processa informações cadastrais de colaboradores técnicos, apontamentos diários de produção em canteiros de obra (Relatórios de Viagem Técnica — RVT), apurações de diárias, solicitações de reembolso de despesas de campo e alocações de custos por contrato de engenharia.

Por operar na intersecção entre a **Consolidação das Leis do Trabalho (CLT)** e a **Lei Geral de Proteção de Dados Pessoais (LGPD — Lei nº 13.709/2018)**, o sistema adota diretrizes arquiteturais estritas para harmonizar a proteção dos direitos fundamentais de privacidade com o resguardo patrimonial e a segurança jurídica da organização.

---

## 2. Prazo Prescricional Trabalhista (Art. 11 da CLT) e Retenção Quinquenal

### 2.1 Fundamentação Dogmática e Diretriz Corporativa

O **Artigo 11 da Consolidação das Leis do Trabalho (CLT)** estabelece que a pretensão quanto a créditos resultantes das relações de trabalho prescreve em:

*   **Cinco anos** para os trabalhadores urbanos e rurais, até o limite de **dois anos** após a extinção do contrato de trabalho.

Embora o Artigo 11 da CLT discipline a prescrição do direito material de ação do trabalhador e não imponha formalmente obrigação expressa de retenção sistêmica de arquivos digitais, a **DUOC adota a retenção imutável de 5 anos (1.825 dias) como política corporativa compulsória de governança defensiva e conformidade preventiva**.

Essa retenção garante a integridade e a disponibilidade imediata de um acervo probatório robusto e auditável para instrução técnica e defesa jurídica em eventuais demandas trabalhistas, fiscalizações fazendárias ou auditorias contábeis.

### 2.2 Requisitos Vinculados e Controles Técnicos

*   <a href="../#rn19" class="req-tag req-tag-rn"># RN19 · Política Corporativa de Retenção Quinquenal de Logs ↗</a>: Veda compulsoriamente rotinas de expurgo ou expiração física ou lógica de eventos de auditoria operacional e financeira com tempo de retenção inferior a 1.825 dias.
*   <a href="../#rnf16" class="req-tag req-tag-rnf"># RNF16 · Preservar trilha de auditoria por no mínimo 5 anos ↗</a>: Estabelece o requisito de confiabilidade e guarda do histórico integral de alterações.
*   <a href="../#rf16" class="req-tag req-tag-rf"># RF16 · Exportar trilha probatória de auditoria (PDF/CSV) ↗</a>: Disponibiliza mecanismo de extração em lote dos registros probatórios para instrução processual com assinatura digital e carimbo temporal.

---

## 3. Direito de Eliminação (Art. 18, VI da LGPD) vs. Prerrogativa de Retenção Legal (Art. 16 da LGPD)

### 3.1 Conflito Aparente e Supremacia da Guarda Probatória

O direito conferido ao titular de dados de requerer a anonimização, bloqueio ou eliminação de seus dados pessoais (previsto no **Artigo 18, inciso VI da LGPD**) não possui caráter absoluto nem irrestrito.

Em conformidade estrita com o **Artigo 16 da LGPD**, a retenção dos registros operacionais, contratos de trabalho, relatórios de serviços executados, comprovantes fiscais e logs de auditoria durante o prazo de 5 anos é legitimada e expressamente respaldada pelas seguintes hipóteses de conservação autorizada:

1.  **Artigo 16, inciso I (Cumprimento de Obrigação Legal ou Regulatória):** Guarda de documentos fiscais, tributários e societários exigidos pelos órgãos de fiscalização federal e previdenciária.
2.  **Artigo 16, inciso II (Exercício Regular de Direitos em Processo Judicial, Administrativo ou Arbitral):** Manutenção do acervo probatório do empregador/contratante para comprovação de jornadas, pagamentos efetuados, despesas ressarcidas e ordens de serviço executadas durante todo o período de risco prescricional trabalhista e cível.

### 3.2 Protocolo de Resposta a Solicitações de Titulares

Eventuais solicitações submetidas por colaboradores ativos ou desligados pleiteando o expurgo de registros de apontamentos (RVT), deliberações de reembolso ou logs de acesso serão respondidas formalmente com o indeferimento fundamentado no **Artigo 16, incisos I e II da LGPD**, informando a manutenção sob custódia segura até o término definitivo do prazo prescricional aplicável.

---

## 4. Natureza Jurídica dos Dados Pessoais (Art. 5º, II da LGPD) e Sigilo

### 4.1 Classificação Taxonômica dos Ativos de Informação

Em estrita aderência à taxonomia estabelecida pela LGPD em seu **Artigo 5º**, o ***DUOC Finance*** define expressamente a natureza dos dados tratados:

| Tipo de Dado | Exemplos no DUOC Finance | Classificação LGPD | Tratamento de Segurança Aplicado |
| :--- | :--- | :---: | :--- |
| **Identificação Cadastral** | Nome completo, CPF, RG, número de telefone e e-mail corporativo | **Dado Pessoal Comum** (Art. 5º, I) | Acesso restrito via RBAC (`ADMIN_FINANCEIRO`), validação de CPF por módulo 11 (RN01), criptografia em repouso AES-256 e trânsito TLS 1.3 (RNF03). |
| **Dados Bancários e Financeiros** | Código COMPE bancário de 3 dígitos, agência, conta corrente e chave Pix | **Dado Pessoal Comum sujeito a Sigilo Qualificado** | Segregação estrita na camada de banco de dados, restrição de visualização em relatórios operacionais públicos e auditoria atômica de visualizações (RN22, RNF03, RNF10). |
| **Remunerações e Diárias** | Tabela de valores vigentes de diárias técnicas, apurações mensais e reembolsos | **Informação Financeira / Segredo de Negócio** | Visualização individualizada apenas pelo próprio titular (`TECNICO_CAMPO`) e pelo setor financeiro (`ADMIN_FINANCEIRO`), proibindo consulta horizontal por pares (RN16, RNF10). |
| **Dados Biométricos** | Impressão digital, biometria facial | **Dado Pessoal Sensível** (Art. 5º, II) | **Fora de Escopo do DUOC Finance.** O DUOC Finance não coleta, não transita e não armazena biometria em nenhum módulo ou banco de dados. |

### 4.2 Distinção entre Dados Comuns e Dados Sensíveis

Ressalta-se que números de CPF, informações de domicílio bancário e valores de diárias configuram **dados pessoais comuns sujeitos a dever estrito de segurança e sigilo (Art. 6º, VII da LGPD)**, e **não constituem "dados pessoais sensíveis"** sob a ótica da lei (que é restrita a dados biométricos, de saúde, genéticos, origem racial ou convicção religiosa).

---

## 5. Alinhamento de Escopo Arquitetural: Ponto Biométrico e Sistema FLIT

Conforme deliberado na Reunião Técnica de Alinhamento com a diretoria da DUOC (Ata de Reunião 02, Característica <a href="../../visao-produto/solucao-proposta/#car-09" class="req-tag req-tag-car"># CAR-09 ↗</a>):

1.  **Fronteira de Responsabilidade de Ponto:** O registro formal de frequência e marcação de ponto eletrônico biométrico dos colaboradores é executado de forma independente pelo software externo parceiro *FLIT*.
2.  **Escopo do DUOC Finance em Campo:** O módulo móvel do DUOC Finance destina-se estritamente à coleta de **apontamentos técnicos de produção por contrato de obra** e ao preenchimento de **Relatórios de Viagem Técnica (RVT)** pelos eletricistas e técnicos de campo (<a href="../#rf04" class="req-tag req-tag-rf"># RF04 ↗</a>, <a href="../../visao-produto/solucao-proposta/#car-02" class="req-tag req-tag-car"># CAR-02 ↗</a>).
3.  **Interface de Integração de Presenças:** O DUOC Finance apenas importa e referencia as presenças consolidadas geradas no painel do *FLIT* (<a href="../#rf20" class="req-tag req-tag-rf"># RF20 ↗</a>, <a href="../#rn10" class="req-tag req-tag-rn"># RN10 ↗</a>), consumindo contagens numéricas homologadas para fins de apuração de diárias, sem qualquer contato com o repositório biométrico original.

---

## 6. Controle de Acesso Baseado em Papéis (RBAC) e Trilha de Auditoria

A governança corporativa e a segurança jurídica do *DUOC Finance* operam sustentadas por dois pilares arquiteturais inegociáveis:

<a id="atores-do-sistema-e-matriz-canonica-de-papeis-rbac"></a>
### 6.1 Matriz Canônica de Papéis (RBAC)

O ecossistema operacional do ***DUOC Finance*** é estruturado em torno do **Princípio do Menor Privilégio** (<a href="../#rn16" class="req-tag req-tag-rn"># RN16 ↗</a>, <a href="../#rnf14" class="req-tag req-tag-rnf"># RNF14 ↗</a>), operando sob **quatro papéis canônicos de autorização (RBAC)**:

| Papel (Ator) | Código RBAC | Escopo Operacional e Responsabilidades Funcionais | Perfil Organizacional na DUOC |
| :--- | :---: | :--- | :--- |
| **Técnico de Campo / Diarista** | `TECNICO_CAMPO` | Preenche e retifica apontamentos de produção e horas de campo (RVT) via aplicação web responsiva (RF04, RF35), anexa fotos e evidências da atividade (RF22), consulta exclusivamente os próprios registros (RF19) e submete solicitações de reembolso e adiantamento operacional (RF07, RF28). | Operários, diaristas, técnicos residentes, arquitetos em visita técnica e estagiários. |
| **Gestor Operacional de Obras** | `GESTOR_OBRAS` | Cadastra, atualiza e consulta contratos de obras (RF33, RF37, RF38), cadastra e atualiza centros de custo (RF34, RF39), define tetos orçamentários por obra (RF40) e delibera apontamentos de campo de sua alçada com homologação ou rejeição justificada (RF32). | Engenheiros residentes, coordenadores de contratos e diretores de engenharia. |
| **Administrador Financeiro** | `ADMIN_FINANCEIRO` | Gerencia o cadastro de colaboradores (RF01, RF02, RF03, RF25, RF26), configura a tabela vigente de diárias (RF27), emite prévias (RF05), homologa fechamentos mensais (RF06), delibera despesas e reembolsos (RF08, RF29), dispara apropriações de custos (RF09) e exporta dados consolidados (RF36). | **Auxiliar-Administradora (Maria Beatryz)**, que na estrutura corporativa enxuta da DUOC centraliza rotinas de DP/RH, contas a pagar e finanças. |
| **Administrador do Sistema** | `ADMIN_SISTEMA` | Gerencia perfis e atribuição de papéis de usuários (RF14), monitora a segurança global da plataforma, expiração de senhas e bloqueios por tentativas falhas (RF23, RF24), e audita eventos probatórios (RF15, RF16). | Sócios-diretores e equipe técnica responsável pela sustentação de TI e governança da segurança da informação. |

**Alinhamento Sociotécnico e Centralização Operacional:** Na estrutura organizacional enxuta da DUOC Arquitetura e Engenharia, a colaboradora parceira Maria Beatryz (Auxiliar-Administradora) concentra na rotina real tanto as atribuições de Recursos Humanos/Departamento Pessoal quanto de Contas a Pagar e Finanças. Por essa razão, a especificação técnica do *DUOC Finance* unifica essas operações sob o papel sistêmico de **Administrador Financeiro**, garantindo aderência rigorosa à realidade da empresa e eliminando referências fragmentadas a cargos inexistentes na organização parceira.

### 6.2 Trilha de Auditoria Imutável (*Append-Only*)

*   **Persistência Atômica:** Cada inserção, modificação ou exclusão de dados operacionais gera de forma síncrona um evento de auditoria com carimbo temporal UTC, IP de origem, identidade do operador e estados anterior e posterior serializados (<a href="../#rn17" class="req-tag req-tag-rn"># RN17 ↗</a>, <a href="../#rnf15" class="req-tag req-tag-rnf"># RNF15 ↗</a>).
*   **Imutabilidade Estrita (*Append-Only*):** A tabela de auditoria opera sob regime exclusivo de inserção, sendo vedada qualquer operação de alteração ou exclusão física ou lógica por qualquer perfil, inclusive administradores do sistema (<a href="../#rn18" class="req-tag req-tag-rn"># RN18 ↗</a>).

---

## 7. Matriz de Rastreabilidade Normativa

A tabela a seguir consolida a correlação entre as exigências legais e os requisitos de software implementados no ***DUOC Finance***:

| Dispositivo Legal / Diretriz | Tema de Governança | Requisitos Funcionais | Regras de Negócio | Requisitos Não Funcionais |
| :--- | :--- | :---: | :---: | :---: |
| **CLT — Artigo 11** | Prescrição quinquenal de créditos e instrução defensiva | <a href="../#rf15" class="req-tag req-tag-rf"># RF15 ↗</a>, <a href="../#rf16" class="req-tag req-tag-rf"># RF16 ↗</a> | <a href="../#rn19" class="req-tag req-tag-rn"># RN19 ↗</a> | <a href="../#rnf16" class="req-tag req-tag-rnf"># RNF16 ↗</a> |
| **LGPD — Artigo 16, I e II** | Conservação legal de dados operacionais e defesa judicial | <a href="../#rf06" class="req-tag req-tag-rf"># RF06 ↗</a>, <a href="../#rf16" class="req-tag req-tag-rf"># RF16 ↗</a> | <a href="../#rn18" class="req-tag req-tag-rn"># RN18 ↗</a>, <a href="../#rn19" class="req-tag req-tag-rn"># RN19 ↗</a> | <a href="../#rnf16" class="req-tag req-tag-rnf"># RNF16 ↗</a> |
| **LGPD — Artigo 18, VI** | Limitação ao direito de eliminação perante dever legal | <a href="../#rf02" class="req-tag req-tag-rf"># RF02 ↗</a>, <a href="../#rf03" class="req-tag req-tag-rf"># RF03 ↗</a> | <a href="../#rn04" class="req-tag req-tag-rn"># RN04 ↗</a>, <a href="../#rn23" class="req-tag req-tag-rn"># RN23 ↗</a> | <a href="../#rnf16" class="req-tag req-tag-rnf"># RNF16 ↗</a> |
| **LGPD — Artigo 5º, II e Art. 6º, VII** | Classificação de dados pessoais comuns e dever de segurança | <a href="../#rf01" class="req-tag req-tag-rf"># RF01 ↗</a>, <a href="../#rf25" class="req-tag req-tag-rf"># RF25 ↗</a> | <a href="../#rn01" class="req-tag req-tag-rn"># RN01 ↗</a>, <a href="../#rn22" class="req-tag req-tag-rn"># RN22 ↗</a> | <a href="../#rnf03" class="req-tag req-tag-rnf"># RNF03 ↗</a>, <a href="../#rnf10" class="req-tag req-tag-rnf"># RNF10 ↗</a> |
| **Princípio do Menor Privilégio** | Controle de acesso e segregação de funções | <a href="../#rf13" class="req-tag req-tag-rf"># RF13 ↗</a>, <a href="../#rf14" class="req-tag req-tag-rf"># RF14 ↗</a> | <a href="../#rn15" class="req-tag req-tag-rn"># RN15 ↗</a>, <a href="../#rn16" class="req-tag req-tag-rn"># RN16 ↗</a> | <a href="../#rnf13" class="req-tag req-tag-rnf"># RNF13 ↗</a>, <a href="../#rnf14" class="req-tag req-tag-rnf"># RNF14 ↗</a> |
| **Auditoria e Não Repúdio** | Trilha probatória imutável e carimbo UTC | <a href="../#rf15" class="req-tag req-tag-rf"># RF15 ↗</a>, <a href="../#rf16" class="req-tag req-tag-rf"># RF16 ↗</a> | <a href="../#rn17" class="req-tag req-tag-rn"># RN17 ↗</a>, <a href="../#rn18" class="req-tag req-tag-rn"># RN18 ↗</a> | <a href="../#rnf15" class="req-tag req-tag-rnf"># RNF15 ↗</a> |

---

## 8. Histórico de Versão

| Versão | Data | Descrição da Modificação | Autor | Revisor |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 02/11/2026 | Consolidação da documentação de Governança e Conformidade Legal: fundamentação da retenção quinquenal com fulcro no Art. 11 da CLT, harmonização com o Art. 16 da LGPD, delimitação dogmática de dados pessoais e fronteira técnica com FLIT. | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
| `1.1` | 02/11/2026 | Acolhimento da Matriz Canônica de Papéis (RBAC) e alinhamento sociotécnico de Maria Beatryz na Seção 6.1, desacoplando a definição estrutural do catálogo geral. | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
