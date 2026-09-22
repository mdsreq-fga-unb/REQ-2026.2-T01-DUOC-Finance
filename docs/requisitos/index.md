# Capítulo 8: Requisitos de Software

Este documento consolida a especificação de requisitos funcionais e não funcionais do sistema **DUOC Finance**, estruturados modularmente em torno dos quatro **Objetivos Específicos (OE)** do produto e suas respectivas **Características (CAR)**, definidas no [Capítulo 2: Solução Proposta](../visao-produto/capitulo-2/index.md).

---

## 8.1 Visão Geral e Modelo Metodológico

Para assegurar o rigor analítico, a testabilidade e a rastreabilidade exigidos pela disciplina de Engenharia de Requisitos, a especificação adota os seguintes pilares metodológicos:

- **Requisitos Funcionais (RF):** Representam **ações observáveis e deliberadas do usuário** dentro da aplicação que geram valor de negócio mensurável. Rotinas de cálculo interno, processamentos em segundo plano e validações restritivas não são formulados como RFs isolados, mas sim modelados como regras de negócio condicionantes da ação do usuário. Cada RF é especificado com um **Critério de Aceitação no padrão formal BDD** (*Dado-Quando-Então* / Gherkin).
- **Regras de Negócio (RN):** Políticas operacionais, cálculos matemáticos, automatismos do sistema, restrições e invariantes de domínio da **DUOC Arquitetura e Engenharia** que governam a execução das ações dos usuários. As regras são numeradas sequencialmente em escopo global (RN01 a RN19).
- **Requisitos Não Funcionais (RNF):** Atributos de qualidade e restrições técnicas do produto, classificados simultaneamente pelo modelo **URPS+** (*Usability*, *Reliability*, *Performance*, *Supportability* e o modificador `+` para *Security* e Legais) e pela taxonomia de **Sommerville** (Requisitos do Produto e Requisitos Externos). Cada RNF conta com um **Critério Mensurável** baseado em parâmetros objetivos de verificação.
- **Rastreabilidade Bidirecional:** Mapeamento integral entre Objetivos Específicos (OE), Características (CAR), Requisitos (RF/RNF) e Casos de Teste (CT-Mx-xx).

### Estrutura Modular dos Requisitos

| Módulo | Objetivo Específico | Características Cobertas (CAR) | Requisitos Funcionais (Ação do Usuário) | Requisitos Não Funcionais | Casos de Teste |
| :---: | :--- | :---: | :---: | :---: | :---: |
| **Módulo 1** | [**OE1 — Padronização e Unificação de Dados**](#oe1-padronizacao-e-unificacao-de-dados) | CAR-01, CAR-02 | RF01 a RF04 | RNF01 a RNF04 | CT-M1-01 a CT-M1-08 |
| **Módulo 2** | [**OE2 — Eficiência Administrativo-Financeira**](#oe2-eficiencia-administrativo-financeira) | CAR-03, CAR-04 | RF05 a RF08 | RNF05 a RNF08 | CT-M2-01 a CT-M2-08 |
| **Módulo 3** | [**OE3 — Inteligência de Custos por Contrato**](#oe3-inteligencia-de-custos-por-contrato) | CAR-05, CAR-06 | RF09 a RF12 | RNF09 a RNF12 | CT-M3-01 a CT-M3-08 |
| **Módulo 4** | [**OE4 — Governança, Segurança e Rastreabilidade**](#oe4-governanca-seguranca-e-rastreabilidade) | CAR-07, CAR-08 | RF13 a RF16 | RNF13 a RNF16 | CT-M4-01 a CT-M4-08 |

---

## 8.2 Rastreabilidade Estratégica e Diagramas Visuais

A rastreabilidade entre a estratégia corporativa da DUOC e a engenharia de software é formalizada pelos diagramas a seguir.

### 8.2.1 Pirâmide de Abstração (Rastreabilidade Vertical)

O diagrama abaixo apresenta o desdobramento hierárquico *top-down* da solução: do Objetivo Geral (OG) às metas táticas (OEs), descendo para as capacidades do sistema (CARs) e derivando nos Requisitos Funcionais e Não Funcionais executáveis.

<div class="cronograma-diagram-box" markdown="1">

![Pirâmide de Abstração — Rastreabilidade Vertical](../assets/images/requisitos/piramide_abstracao_requisitos_light.png#only-light){ .img-light-mode }
![Pirâmide de Abstração — Rastreabilidade Vertical](../assets/images/requisitos/piramide_abstracao_requisitos_dark.png#only-dark){ .img-dark-mode }

<p align="center"><small><em>Figura 8.1: Pirâmide de Abstração e Rastreabilidade Vertical (Clique na imagem para abrir com zoom interativo).</em></small></p>

</div>

---

### 8.2.2 Mapeamento de Necessidades do Cliente (Dores Ishikawa/Rich Picture → Requisitos)

Este diagrama conecta diretamente as dores reais identificadas no **Diagrama de Causa e Efeito (Ishikawa)** e as tensões operacionais do **Rich Picture** (TR-01 a TR-04) aos requisitos projetados para superá-las.

<div class="cronograma-diagram-box" markdown="1">

![Mapeamento de Necessidades do Cliente](../assets/images/requisitos/mapeamento_necessidades_duoc_light.png#only-light){ .img-light-mode }
![Mapeamento de Necessidades do Cliente](../assets/images/requisitos/mapeamento_necessidades_duoc_dark.png#only-dark){ .img-dark-mode }

<p align="center"><small><em>Figura 8.2: Mapeamento de Necessidades do Cliente — Dores do Ishikawa e Rich Picture para Requisitos (Clique na imagem para abrir com zoom interativo).</em></small></p>

</div>

---

### 8.2.3 Grafo de Interdependência e Facilidades dos Requisitos

O grafo abaixo evidencia como os fluxos funcionais se habilitam mutuamente ao longo do ciclo operacional da DUOC: a segurança (RBAC) protege os cadastros e as rotinas financeiras; os apontamentos de campo alimentam a conferência de fechamento; e os dados homologados sustentam a apropriação de custos e a auditoria corporativa.

<div class="cronograma-diagram-box" markdown="1">

![Grafo de Interdependência e Facilidades dos Requisitos](../assets/images/requisitos/grafo_interdependencia_requisitos_light.png#only-light){ .img-light-mode }
![Grafo de Interdependência e Facilidades dos Requisitos](../assets/images/requisitos/grafo_interdependencia_requisitos_dark.png#only-dark){ .img-dark-mode }

<p align="center"><small><em>Figura 8.3: Grafo de Interdependência e Facilidades entre Requisitos (Clique na imagem para abrir com zoom interativo).</em></small></p>

</div>

---

<a id="oe1-padronizacao-e-unificacao-de-dados"></a>
<a id="oe1"></a>
## OE1 — Padronização e Unificação de Dados

Esta seção detalha os requisitos da **DUOC Finance** associados ao **OE1 — Padronizar e Unificar os Dados**. O módulo cobre as características **CAR-01 — Gestão Cadastral Unificada de Pessoal** e **CAR-02 — Apontamento Móvel de Atividades e Registros de Campo**.

!!! note "Alinhamento de Escopo — Ponto Biométrico e auditor.ia"
    Conforme estabelecido no alinhamento de escopo técnico com a DUOC (Ata de Reunião 02 e CAR-09), o controle formal de frequência biométrica dos colaboradores é suprido externamente pelo sistema *auditor.ia*. O escopo operacional do DUOC Finance em campo concentra-se estritamente na coleta de apontamentos técnicos de produção por contrato e no preenchimento de Relatórios de Viagem Técnica (RVT).

### Requisitos Funcionais

Os requisitos abaixo expressam as **ações observáveis dos usuários** para gestão da base cadastral e coleta de dados de produção em campo.

| Código | Requisito (Ação do Usuário) | CAR relacionada | Critério de Aceitação (BDD) |
| :---: | :--- | :---: | :--- |
| **RF01** | **Cadastrar novo colaborador e histórico funcional** | CAR-01 | **Dado** que um usuário do RH preenche os dados cadastrais (pessoais, bancários e trabalhistas) de um novo profissional,<br>**Quando** submeter o formulário de cadastro com dados válidos,<br>**Então** o sistema deve persistir as informações gerando um identificador unificado e bloquear a inclusão caso o CPF já exista na base de dados (RN01). |
| **RF02** | **Atualizar dados cadastrais e histórico de colaboradores** | CAR-01 | **Dado** que o gestor de RH precisa atualizar informações cadastrais ou dados bancários de um colaborador ativo,<br>**Quando** salvar as modificações no perfil do profissional,<br>**Então** o sistema deve propagar os dados atualizados em tempo real para os módulos dependentes e registrar o histórico versionado da ficha. |
| **RF03** | **Registrar movimentação funcional ou desligamento de colaborador** | CAR-01 | **Dado** que um colaborador muda de situação jurídica (afastamento, férias ou rescisão),<br>**Quando** o usuário do RH registrar a alteração funcional no sistema,<br>**Então** o sistema deve atualizar o status do colaborador e revogar automaticamente suas credenciais de acesso ao aplicativo móvel de campo em caso de afastamento ou desligamento (RN04). |
| **RF04** | **Submeter apontamento de atividades de campo e Relatório de Viagem Técnica (RVT)** | CAR-02 | **Dado** que o colaborador concluiu sua jornada em obra ou visita técnica,<br>**Quando** preencher o formulário informando horas trabalhadas, escopo executado, anexar comprovantes/fotos e submeter no aplicativo móvel,<br>**Então** o sistema deve registrar o apontamento e disponibilizá-lo com status "Pendente de Homologação" para a supervisão técnica. |

### Regras de Negócio

1. **RN01 — Unicidade Cadastral por CPF:** O sistema valida compulsoriamente a unicidade do CPF, bloqueando a criação de cadastros duplicados.
2. **RN02 — Bloqueio Automático de Edição Retroativa:** Apontamentos de campo homologados pela supervisão ou submetidos há mais de 5 dias úteis tornam-se automaticamente bloqueados para edição por usuários de campo.
3. **RN03 — Validação Cadastral para Lançamentos Financeiros:** O sistema impede a aprovação de qualquer diária, comissão ou reembolso caso o colaborador não esteja com status "Ativo" e dados bancários validados.
4. **RN04 — Revogação Automática de Acessos:** A transição do status cadastral para "Desligado" ou "Afastado" dispara o cancelamento automático e imediato de tokens e credenciais ativas do usuário no aplicativo móvel.

### Requisitos Não Funcionais

| Código | Requisito Verificável | URPS+ | Sommerville | Critério Mensurável |
| :---: | :--- | :--- | :--- | :--- |
| **RNF01** | **Operar em modo *offline* para coleta de dados em canteiros sem conectividade** | Reliability (Confiabilidade) | Requisito do Produto — Confiabilidade | O aplicativo móvel deve permitir o armazenamento local de até 100 apontamentos e fotos compactadas sem sinal de rede, executando a sincronização automática em até 30 segundos após restabelecida a conexão. |
| **RNF02** | **Disponibilizar consulta cadastral com tempo de resposta ágil** | Performance (Desempenho) | Requisito do Produto — Desempenho | O tempo de resposta para busca, paginação e renderização da ficha unificada de qualquer colaborador deve ser inferior ou igual a 2,0 segundos em 95% das requisições sob carga nominal. |
| **RNF03** | **Proteger dados pessoais e cadastrais com criptografia em repouso e em trânsito** | Security (+) (Segurança) | Requisito do Produto — Segurança | 100% dos dados pessoais sensíveis armazenados em banco devem utilizar criptografia AES-256, e 100% das comunicações de rede devem transitar sob protocolo TLS 1.3. |
| **RNF04** | **Garantir usabilidade e agilidade no preenchimento de apontamentos de campo** | Usability (Usabilidade) | Requisito do Produto — Usabilidade | Usuários de campo com treinamento básico de 15 minutos devem concluir o preenchimento de um apontamento diário completo em menos de 3 minutos, com taxa de erro operacional inferior a 2,0%. |

### Matriz de Rastreabilidade

| Requisito | Objetivo Específico | Característica | Caso de Teste |
| :---: | :---: | :---: | :--- |
| **RF01** | OE1 | CAR-01 | **CT-M1-01:** Submeter cadastro de novo colaborador e validar persistência e bloqueio de CPF duplicado. |
| **RF02** | OE1 | CAR-01 | **CT-M1-02:** Atualizar ficha cadastral e verificar propagação em tempo real e versionamento. |
| **RF03** | OE1 | CAR-01 | **CT-M1-03:** Registrar desligamento de colaborador e validar revogação automática de credenciais no aplicativo. |
| **RF04** | OE1 | CAR-02 | **CT-M1-04:** Submeter apontamento e RVT no aplicativo móvel com upload de fotos e comprovantes. |
| **RNF01** | OE1 | CAR-02 | **CT-M1-05:** Testar persistência local de 100 registros em modo desconectado e tempo de sincronização < 30 s. |
| **RNF02** | OE1 | CAR-01 | **CT-M1-06:** Medir tempo de resposta da busca e detalhamento de colaboradores (meta ≤ 2,0 s). |
| **RNF03** | OE1 | CAR-01 | **CT-M1-07:** Validar aplicação de criptografia AES-256 na base de dados e TLS 1.3 nas conexões de rede. |
| **RNF04** | OE1 | CAR-02 | **CT-M1-08:** Avaliar tempo de conclusão (< 3 min) e taxa de erro (< 2%) em teste de usabilidade em campo. |

---

<a id="oe2-eficiencia-administrativo-financeira"></a>
<a id="oe2"></a>
## OE2 — Eficiência Administrativo-Financeira

Esta seção detalha os requisitos da **DUOC Finance** associados ao **OE2 — Aumentar a Eficiência Administrativo-Financeira**. O módulo cobre as características **CAR-03 — Motor de Processamento e Fechamento Financeiro** e **CAR-04 — Fluxo Digital de Prestação de Contas e Reembolsos**.

!!! note "Escopo de Fechamento Financeiro e Rotinas Contábeis"
    O motor financeiro do DUOC Finance apoia estritamente a apuração de diárias técnicas e comissões simplificadas de prestadores de serviços e a gestão ágil de reembolsos. O sistema não substitui as rotinas formais de folha de pagamento CLT nem o cálculo de encargos e provisões legais (INSS, FGTS, IRRF), que permanecem nos softwares contábeis legados da DUOC.

### Requisitos Funcionais

Os requisitos abaixo expressam as **ações dos usuários** na condução e supervisão do fechamento mensal e no ciclo de prestação de contas operacionais.

| Código | Requisito (Ação do Usuário) | CAR relacionada | Critério de Aceitação (BDD) |
| :---: | :--- | :---: | :--- |
| **RF05** | **Solicitar prévia consolidada de apuração financeira por contrato** | CAR-03 | **Dado** que o analista financeiro seleciona uma competência mensal e os contratos correspondentes,<br>**Quando** solicitar a prévia de fechamento financeiro,<br>**Então** o sistema deve consolidar os apontamentos técnicos homologados e apresentar o extrato preliminar consolidado com diárias e comissões calculadas para conferência supervisionada. |
| **RF06** | **Homologar lote de fechamento financeiro da competência** | CAR-03 | **Dado** que o gestor financeiro conferiu o extrato prévio consolidado,<br>**Quando** registrar eventuais ajustes com justificativa formal e confirmar a homologação do lote de competência,<br>**Então** o sistema deve fechar a competência financeira, bloquear os lançamentos contra alterações diretas e emitir o extrato final de conferência supervisionada. |
| **RF07** | **Submeter solicitação de reembolso** | CAR-04 | **Dado** que o colaborador incorreu em despesas operacionais autorizadas a serviço da DUOC,<br>**Quando** preencher o formulário informando valor, categoria de despesa e contrato,<br>**Então** o sistema deve registrar a solicitação com status "Pendente de Análise", aplicando a obrigatoriedade do comprovante fiscal digitalizado conforme a regra de negócio (RN06). |
| **RF08** | **Aprovar ou rejeitar solicitações de reembolso operacional** | CAR-04 | **Dado** que o coordenador técnico ou financeiro acessa a fila de solicitações pendentes dos contratos sob sua alçada,<br>**Quando** inspecionar a despesa e deferir ("Aprovado") ou indeferir ("Reprovado" com parecer) o pedido,<br>**Então** o sistema deve registrar a deliberação, atualizar o status do reembolso e notificar o solicitante. |

### Regras de Negócio

1. **RN05 — Homologação Prévia Mandatória:** O sistema consolida exclusivamente apontamentos de RVT e horas técnicas que possuam status prévio de "Homologado" pelo gestor responsável.
2. **RN06 — Obrigatoriedade de Comprovante Fiscal:** O sistema bloqueia a submissão de solicitações de reembolso caso não haja anexo digital legível (PDF, PNG ou JPEG).
3. **RN07 — Limite do Montante Reembolsável:** O sistema impede que o valor aprovado para reembolso ultrapasse o valor nominal discriminado no documento fiscal comprobatório.
4. **RN08 — Imutabilidade de Lotes Homologados:** O sistema bloqueia modificações diretas em lotes financeiros homologados, exigindo procedimento formal de estorno com justificativa auditável para qualquer retificação.
5. **RN09 — Vínculo Contratual Obrigatório:** Toda despesa operacional e reembolso deve estar estritamente vinculada a um contrato ativo e a um centro de custos operacional válido.

### Requisitos Não Funcionais

| Código | Requisito Verificável | URPS+ | Sommerville | Critério Mensurável |
| :---: | :--- | :--- | :--- | :--- |
| **RNF05** | **Processar a rotina de fechamento financeiro com alta eficiência** | Performance (Desempenho) | Requisito do Produto — Eficiência/Desempenho | Em 95 de 100 execuções sob base sintética de até 500 apontamentos de campo, o tempo de cálculo, consolidação e renderização do extrato deve ocorrer em no máximo 5,0 segundos. |
| **RNF06** | **Garantir exatidão aritmética centesimal em cálculos monetários** | Reliability (Confiabilidade) | Requisito do Produto — Confiabilidade/Acurácia | Em 100% dos cálculos comparados com o gabarito contábil formal, a discrepância aritmética monetária deve ser de exatamente R$ 0,00, operando com tipos de ponto fixo centesimal sem perdas por arredondamento flutuante. |
| **RNF07** | **Validar integridade, tamanho e formatos no upload de comprovantes** | Supportability (Suportabilidade) / Security (+) | Requisito do Produto — Suportabilidade | Em 100% das tentativas de envio de arquivos com tamanho superior a 5 MB ou com extensões diferentes de PDF, PNG e JPEG, o sistema deve bloquear o upload exibindo mensagem amigável de erro. |
| **RNF08** | **Exigir justificativa textual mandatória e auditoria em estornos de fechamento** | Security (+) (Segurança) | Requisito do Produto — Segurança/Rastreabilidade | Em 100% das operações de estorno de fechamento homologado, a transação deve ser sumariamente abortada caso o campo de justificativa formal não seja preenchido ou contenha menos de 15 caracteres. |

### Matriz de Rastreabilidade

| Requisito | Objetivo Específico | Característica | Caso de Teste |
| :---: | :---: | :---: | :--- |
| **RF05** | OE2 | CAR-03 | **CT-M2-01:** Solicitar geração da prévia de fechamento e validar consolidação de apontamentos homologados. |
| **RF06** | OE2 | CAR-03 | **CT-M2-02:** Homologar lote de fechamento financeiro e validar bloqueio de edições subsequentes. |
| **RF07** | OE2 | CAR-04 | **CT-M2-03:** Submeter solicitação de reembolso com vínculo a contrato ativo e validar anexação fiscal obrigatória. |
| **RF08** | OE2 | CAR-04 | **CT-M2-04:** Deliberar (aprovar ou rejeitar) solicitação de reembolso com parecer justificatório. |
| **RNF05** | OE2 | CAR-03 | **CT-M2-05:** Medir tempo de processamento do fechamento para 500 lançamentos (meta ≤ 5,0 s). |
| **RNF06** | OE2 | CAR-03 | **CT-M2-06:** Validar exatidão monetária centesimal com tolerância zero (discrepância R$ 0,00). |
| **RNF07** | OE2 | CAR-04 | **CT-M2-07:** Testar rejeição automática de arquivos corrompidos, acima de 5 MB ou com extensões não homologadas. |
| **RNF08** | OE2 | CAR-03 | **CT-M2-08:** Verificar bloqueio de estorno sem preenchimento de justificativa formal auditável. |

---

<a id="oe3-inteligencia-de-custos-por-contrato"></a>
<a id="oe3"></a>
## OE3 — Inteligência de Custos por Contrato

Esta seção detalha os requisitos da **DUOC Finance** associados ao **OE3 — Transparecer as informações sobre os Custos por Contrato**. O módulo cobre as características **CAR-05 — Apropriação e Rastreabilidade de Custos por Contrato** e **CAR-06 — Painel Analítico de Custo Apropriado e Desvio Orçamentário por Projeto**.

### Requisitos Funcionais

Os requisitos abaixo expressam as **ações analíticas dos gestores** para apropriação, filtragem dinâmica e monitoramento contínuo da saúde financeira das obras.

| Código | Requisito (Ação do Usuário) | CAR relacionada | Critério de Aceitação (BDD) |
| :---: | :--- | :---: | :--- |
| **RF09** | **Apropriar custos operacionais e diárias aos contratos ativos** | CAR-05 | **Dado** que existem apontamentos técnicos e diárias previamente apurados e homologados vinculados a contratos ativos,<br>**Quando** o gestor acionar a rotina de apropriação de custos da competência,<br>**Então** o sistema deve alocar os montantes financeiros aos respectivos contratos sem duplicar ou sobrepor relatórios de folha CLT legados. |
| **RF10** | **Consultar histórico e rastreabilidade da origem de custos apropriados** | CAR-05 | **Dado** que um custo operacional está apropriado a determinado contrato,<br>**Quando** o gestor consultar o detalhamento daquela linha de despesa,<br>**Então** o sistema deve exibir a rastreabilidade integral da origem (apontamento, executor, data/hora da homologação e gestor responsável). |
| **RF11** | **Filtrar e analisar indicadores de custos acumulados por contrato** | CAR-06 | **Dado** que um usuário autorizado acessa o painel de inteligência de custos,<br>**Quando** aplicar filtros customizados por intervalo de período, contrato, colaborador ou centro de custo,<br>**Então** o sistema deve recalcular dinamicamente os valores acumulados e atualizar os gráficos analíticos correspondentes. |
| **RF12** | **Monitorar execução orçamentária e desvios por contrato** | CAR-06 | **Dado** que um contrato possui meta orçamentária previamente parametrizada,<br>**Quando** o gestor acessar a visão executiva de acompanhamento do projeto,<br>**Então** o sistema deve exibir o montante previsto, o realizado, o valor do desvio financeiro e o percentual de execução orçamentária, destacando visualmente alertas de extrapolação. |

### Regras de Negócio

1. **RN10 — Condição de Homologação para Apropriação:** O sistema permite apropriação financeira em contratos estritamente a partir de registros e despesas previamente homologados pela coordenação.
2. **RN11 — Vínculo Contratual Mandatório:** O sistema bloqueia a apropriação de despesas sem vínculo estrito a um contrato ativo da DUOC, impedindo a existência de custos órfãos.
3. **RN12 — Versionamento de Apropriações:** Alterações retroativas em apontamentos já apropriados preservam o histórico da versão anterior e exigem nova homologação formal quando alterarem valores monetários.
4. **RN13 — Cálculo Padronizado de Execução Orçamentária:** O sistema calcula o percentual de execução orçamentária estritamente pela equação `(Custo Apropriado Acumulado / Orçamento Previsto) * 100`.
5. **RN14 — Segregação de Visualização Salarial:** O sistema oculta automaticamente campos de taxas salariais individuais e valores nominais de diárias para usuários que não possuam perfil de gestão ou diretoria.

### Requisitos Não Funcionais

| Código | Requisito Verificável | URPS+ | Sommerville | Critério Mensurável |
| :---: | :--- | :--- | :--- | :--- |
| **RNF09** | **Carregar o painel analítico em tempo inferior a 3 segundos** | Performance (Desempenho) | Requisito do Produto — Eficiência/Desempenho | Em 95 de 100 execuções medidas em ambiente de testes com base sintética de até 10.000 lançamentos de custos e 100 contratos, a renderização completa dos indicadores analíticos deve ocorrer em no máximo 3,0 segundos. |
| **RNF10** | **Restringir dados financeiros analíticos conforme perfil de acesso** | Security (+) (Segurança) | Requisito do Produto — Segurança da Informação | Em 100% dos testes de autorização, requisições de consulta financeira originadas por usuários sem privilégios compatíveis devem ser bloqueadas com código HTTP 403 Forbidden. |
| **RNF11** | **Garantir consistência transacional ACID na apropriação concorrente de custos** | Reliability (Confiabilidade) | Requisito do Produto — Confiabilidade/Dependabilidade | Em 100 testes de concorrência com acessos simultâneos de inclusão e homologação, não deve haver ocorrência de custos duplicados ou divergências entre a soma dos apontamentos e o total consolidado do contrato. |
| **RNF12** | **Assegurar responsividade do painel em resoluções de *desktop* e *tablet*** | Usability (Usabilidade) | Requisito do Produto — Usabilidade | Nas resoluções de tela (*viewports*) de 1024 × 768 px e 768 × 1024 px, 100% dos gráficos, tabelas e filtros essenciais devem permanecer visíveis e operáveis sem a necessidade de barra de rolagem horizontal. |

### Matriz de Rastreabilidade

| Requisito | Objetivo Específico | Característica | Caso de Teste |
| :---: | :---: | :---: | :--- |
| **RF09** | OE3 | CAR-05 | **CT-M3-01:** Disparar apropriação financeira e validar alocação correta de horas e diárias aos contratos ativos. |
| **RF10** | OE3 | CAR-05 | **CT-M3-02:** Consultar linha de custo apropriado e verificar exibição da trilha documental de origem. |
| **RF11** | OE3 | CAR-06 | **CT-M3-03:** Interagir com filtros analíticos de período e contrato e checar atualização dinâmica dos indicadores. |
| **RF12** | OE3 | CAR-06 | **CT-M3-04:** Monitorar painel orçamentário e validar exibição de alertas de extrapolação e percentuais. |
| **RNF09** | OE3 | CAR-06 | **CT-M3-05:** Medir tempo de renderização do painel analítico sob carga de 10.000 registros (meta ≤ 3,0 s). |
| **RNF10** | OE3 | CAR-05/CAR-06 | **CT-M3-06:** Bloquear requisições analíticas fora da alçada do perfil com HTTP 403 Forbidden. |
| **RNF11** | OE3 | CAR-05 | **CT-M3-07:** Validar atomicidade transacional e ausência de inconsistências em apropriações concorrentes. |
| **RNF12** | OE3 | CAR-06 | **CT-M3-08:** Inspecionar responsividade e ausência de *scroll* horizontal em resoluções de *desktop* e *tablet*. |

---

<a id="oe4-governanca-seguranca-e-rastreabilidade"></a>
<a id="oe4"></a>
## OE4 — Governança, Segurança e Rastreabilidade

Esta seção detalha os requisitos da **DUOC Finance** associados ao **OE4 — Garantir Segurança e Governança de Dados**. O módulo cobre as características **CAR-07 — Controle de Acesso Baseado em Papéis (RBAC)** e **CAR-08 — Trilha de Auditoria e Histórico de Operações Sensíveis**.

### Requisitos Funcionais

Os requisitos abaixo expressam as **ações dos usuários** para autenticação corporativa, gestão de permissões e auditoria probatória de eventos.

| Código | Requisito (Ação do Usuário) | CAR relacionada | Critério de Aceitação (BDD) |
| :---: | :--- | :---: | :--- |
| **RF13** | **Efetuar login no sistema com credenciais corporativas** | CAR-07 | **Dado** que o colaborador informa suas credenciais corporativas cadastradas (e-mail e senha),<br>**Quando** solicitar a autenticação na plataforma,<br>**Então** o sistema deve autenticar a sessão e emitir um token de acesso temporário com permissões do perfil do usuário, retornando mensagem genérica de erro em caso de credenciais inválidas. |
| **RF14** | **Gerenciar perfis e alçadas de permissão de usuários (RBAC)** | CAR-07 | **Dado** que o administrador precisa configurar as permissões de acesso de um usuário,<br>**Quando** atribuir um papel (Diarista/Técnico de Campo, Gestor de Contrato, Analista Financeiro, Administrador) e salvar as permissões,<br>**Então** o sistema deve aplicar as alçadas de restrição imediatamente a todas as telas e rotas de API da aplicação (RN16). |
| **RF15** | **Consultar trilha de auditoria e histórico de operações sensíveis** | CAR-08 | **Dado** que um usuário com perfil de auditoria precisa averiguar alterações cadastrais ou financeiras,<br>**Quando** pesquisar no log de auditoria aplicando filtros por período, usuário ou tipo de operação,<br>**Então** o sistema deve listar os eventos correspondentes exibindo autor (quem), operação executada (o quê) e carimbo temporal UTC (quando). |
| **RF16** | **Exportar relatórios de auditoria e conformidade fiscal/trabalhista** | CAR-08 | **Dado** que o administrador precisa emitir comprovação probatória de alterações no sistema,<br>**Quando** selecionar os eventos auditados e solicitar a exportação do relatório consolidado,<br>**Então** o sistema deve gerar um dossiê em formato estruturado (PDF/CSV) contendo o histórico integral e imutável das operações para fins de conformidade legal e trabalhista (CLT Art. 11). |

### Regras de Negócio

1. **RN15 — Autenticação Mandatória com Token Válido:** O sistema exige token temporário válido e não expirado para qualquer requisição a recursos e dados protegidos.
2. **RN16 — Princípio do Menor Privilégio (RBAC):** O sistema intercepta automaticamente requisições e segrega visualizações: colaboradores de campo acessam somente seus próprios lançamentos; gestores acessam contratos sob sua responsabilidade; e administradores gerenciam parametrizações globais.
3. **RN17 — Atomicidade de Gravação na Auditoria:** O sistema executa a gravação da entrada de log de auditoria na mesma transação atômica da operação de escrita de dados, revertendo a transação se o log falhar.
4. **RN18 — Imutabilidade Estrita (*Append-Only*):** A camada de persistência da trilha de auditoria rejeita compulsoriamente qualquer instrução SQL de alteração (`UPDATE`) ou deleção (`DELETE`).
5. **RN19 — Prazo Prescricional de Retenção de Logs:** O sistema impede o expurgo de registros de auditoria operacional e financeira com tempo de retenção inferior a 5 anos (1.825 dias), atendendo ao prazo prescricional trabalhista (Artigo 11 da CLT).

### Requisitos Não Funcionais

| Código | Requisito Verificável | URPS+ | Sommerville | Critério Mensurável |
| :---: | :--- | :--- | :--- | :--- |
| **RNF13** | **Expirar token de acesso temporário em no máximo 8 horas** | Security (+) (Segurança) | Requisito do Produto — Confiabilidade/Segurança | Em 100% dos testes de segurança automatizados, requisições submetidas com tokens emitidos há mais de 8 horas (28.800 segundos) devem ser sumariamente rejeitadas com código HTTP 401 Unauthorized. |
| **RNF14** | **Validar perfil de autorização em 100% das rotas de API com dados sensíveis** | Security (+) (Segurança) | Requisito Externo — Legislativo/Regulamentar (LGPD) | Cobertura de 100% das rotas de backend que trafegam dados financeiros ou pessoais sensíveis por filtros de permissão RBAC, com resposta obrigatória HTTP 403 Forbidden para papéis não autorizados. |
| **RNF15** | **Garantir atomicidade transacional na gravação de logs de auditoria** | Reliability (Confiabilidade) | Requisito do Produto — Confiabilidade/Dependabilidade | Em 100% das operações de escrita disparadas contra dados de pessoal e financeiros na suíte de testes, uma entrada correspondente de auditoria deve ser confirmada na mesma transação com taxa de perda zero. |
| **RNF16** | **Reter registros de auditoria por no mínimo 5 anos contra expurgo indevido** | Supportability (Suportabilidade) / Legal | Requisito Externo — Legislativo (Art. 11 da CLT / Fiscal) | Inexistência comprovada por análise estática e testes de vulnerabilidade de comandos ou rotinas que permitam a deleção de registros com tempo de retenção inferior a 5 anos (1.825 dias). |

### Matriz de Rastreabilidade

| Requisito | Objetivo Específico | Característica | Caso de Teste |
| :---: | :---: | :---: | :--- |
| **RF13** | OE4 | CAR-07 | **CT-M4-01:** Submeter credenciais corporativas válidas e verificar autenticação e emissão de token temporário. |
| **RF14** | OE4 | CAR-07 | **CT-M4-02:** Atribuir perfil RBAC e verificar aplicação imediata e bloqueio de rotas não autorizadas (HTTP 403). |
| **RF15** | OE4 | CAR-08 | **CT-M4-03:** Consultar log de auditoria com filtros e validar exibição de autor, operação e carimbo temporal UTC. |
| **RF16** | OE4 | CAR-08 | **CT-M4-04:** Exportar dossiê de auditoria e confirmar bloqueio estrito contra comandos de edição ou deleção. |
| **RNF13** | OE4 | CAR-07 | **CT-M4-05:** Testar expiração compulsória de tokens de sessão após decorridas 8 horas com retorno HTTP 401. |
| **RNF14** | OE4 | CAR-07 | **CT-M4-06:** Validar conformidade regulatória (LGPD) e isolamento horizontal em 100% das rotas de dados sensíveis. |
| **RNF15** | OE4 | CAR-08 | **CT-M4-07:** Confirmar persistência atômica da entrada de auditoria na mesma transação da base de dados. |
| **RNF16** | OE4 | CAR-08 | **CT-M4-08:** Auditar retenção mínima por 5 anos (1.825 dias) e proteção ativa contra rotinas de expurgo. |

---

<a id="matriz-sintese-geral-de-rastreabilidade"></a>
## 8.3 Matriz-Síntese Geral de Rastreabilidade

A matriz a seguir consolida a rastreabilidade bidirecional global entre os Objetivos Específicos (OE), as Características do Produto (CAR), os Requisitos Funcionais (RF), os Requisitos Não Funcionais (RNF) e a suíte de Casos de Teste (CT) do sistema:

| Objetivo Específico (OE) | Características Cobertas (CAR) | Requisitos Funcionais (Ação do Usuário) | Requisitos Não Funcionais (RNF) | Casos de Teste (CT) |
| :--- | :--- | :--- | :--- | :--- |
| **OE1 — Padronizar e Unificar os Dados** | CAR-01, CAR-02 | RF01, RF02, RF03, RF04 | RNF01, RNF02, RNF03, RNF04 | CT-M1-01 a CT-M1-08 |
| **OE2 — Aumentar a Eficiência Administrativo-Financeira** | CAR-03, CAR-04 | RF05, RF06, RF07, RF08 | RNF05, RNF06, RNF07, RNF08 | CT-M2-01 a CT-M2-08 |
| **OE3 — Transparecer os Custos por Contrato** | CAR-05, CAR-06 | RF09, RF10, RF11, RF12 | RNF09, RNF10, RNF11, RNF12 | CT-M3-01 a CT-M3-08 |
| **OE4 — Garantir Segurança e Governança de Dados** | CAR-07, CAR-08 | RF13, RF14, RF15, RF16 | RNF13, RNF14, RNF15, RNF16 | CT-M4-01 a CT-M4-08 |

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 07/09/2026 | Criação e estruturação da página preliminar de requisitos de software (Unidade 2). | Matheus Ribeiro Szervinsk | Matheus Ribeiro Szervinsk |
| `2.0` | 22/09/2026 | Elaboração da especificação de requisitos por módulo: Módulo 1 / OE1 (Gustavo Bonifácio), Módulo 2 / OE2 (Eric Araújo), Módulo 3 / OE3 (Giovana Ferreira) e Módulo 4 / OE4 (Matheus Saraiva). | Gustavo Bonifácio, Eric Araújo, Giovana Ferreira, Matheus Saraiva | Matheus Ribeiro Szervinsk |
| `2.1` | 22/09/2026 | Revisão geral e unificação técnica em documento único: ajuste de abstração de escopo em OE1 e OE2, eliminação de duplicidades, formatação dos critérios de aceitação em BDD e sequenciamento de regras de negócio (RN01 a RN19). | Matheus Ribeiro Szervinsk | Matheus Ribeiro Szervinsk |
| `2.2` | 22/09/2026 | Refinamento conceitual: reestruturação dos 16 RFs como ações do usuário com valor de negócio, migração de rotinas e cálculos para regras de negócio (RN), ajuste do RF07 (reembolso), substituição de alertas por admonitions Material (!!! note) e renderização dos diagramas em imagens de alta definição com suporte a zoom interativo (GLightbox). | Matheus Ribeiro Szervinsk | Matheus Ribeiro Szervinsk |