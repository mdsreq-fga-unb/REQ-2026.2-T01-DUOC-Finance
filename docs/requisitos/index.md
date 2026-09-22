# Capítulo 8: Requisitos de Software

Este documento consolida a especificação de requisitos funcionais e não funcionais do sistema **DUOC Finance**, estruturados modularmente em torno dos quatro **Objetivos Específicos (OE)** do produto e suas respectivas **Características (CAR)**, definidas no [Capítulo 2: Solução Proposta](../visao-produto/capitulo-2/index.md).

---

## 8.1 Visão Geral e Modelo Metodológico

Para assegurar o rigor analítico, a testabilidade e a rastreabilidade exigidos pela disciplina, os requisitos deste capítulo foram formulados e classificados de acordo com os seguintes padrões metodológicos:

- **Requisitos Funcionais (RF):** Descrevem comportamentos, regras de processamento e recursos observáveis do software. Cada requisito é acompanhado de um **Critério de Aceitação** redigido sob a ótica de cenários verificáveis no formato BDD (*Dado-Quando-Então* / Gherkin).
- **Regras de Negócio (RN):** Políticas operacionais, cálculos, restrições e premissas de domínio da **DUOC Arquitetura e Engenharia** que orientam e condicionam a execução das funcionalidades. As regras são numeradas sequencialmente ao longo dos módulos (RN01 a RN19).
- **Requisitos Não Funcionais (RNF):** Classificados simultaneamente pelo modelo **URPS+** (*Usability*, *Reliability*, *Performance*, *Supportability* e o modificador `+` contemplando restrições de *Security* e Legais) e pela taxonomia de **Sommerville** (Requisitos do Produto e Requisitos Externos). Cada RNF possui um **Critério Mensurável** com parâmetros numéricos objetivos para verificação em testes.
- **Matrizes de Rastreabilidade:** Mapeamento bidirecional conectando cada requisito (RF e RNF) ao seu respectivo Objetivo Específico (OE), Característica (CAR) e identificador de Caso de Teste (CT-Mx-xx).

### Estrutura Modular dos Requisitos

| Módulo | Objetivo Específico | Características Cobertas (CAR) | Requisitos Funcionais | Requisitos Não Funcionais | Casos de Teste |
| :---: | :--- | :---: | :---: | :---: | :---: |
| **Módulo 1** | [**OE1 — Padronização e Unificação de Dados**](#oe1-padronizacao-e-unificacao-de-dados) | CAR-01, CAR-02 | RF01 a RF04 | RNF01 a RNF04 | CT-M1-01 a CT-M1-08 |
| **Módulo 2** | [**OE2 — Eficiência Administrativo-Financeira**](#oe2-eficiencia-administrativo-financeira) | CAR-03, CAR-04 | RF05 a RF08 | RNF05 a RNF08 | CT-M2-01 a CT-M2-08 |
| **Módulo 3** | [**OE3 — Inteligência de Custos por Contrato**](#oe3-inteligencia-de-custos-por-contrato) | CAR-05, CAR-06 | RF09 a RF12 | RNF09 a RNF12 | CT-M3-01 a CT-M3-08 |
| **Módulo 4** | [**OE4 — Governança, Segurança e Rastreabilidade**](#oe4-governanca-seguranca-e-rastreabilidade) | CAR-07, CAR-08 | RF13 a RF16 | RNF13 a RNF16 | CT-M4-01 a CT-M4-08 |

---

<a id="oe1-padronizacao-e-unificacao-de-dados"></a>
<a id="oe1"></a>
## OE1 — Padronização e Unificação de Dados

Esta seção detalha os requisitos da **DUOC Finance** associados ao **OE1 — Padronizar e Unificar os Dados**. O módulo cobre as características **CAR-01 — Gestão Cadastral Unificada de Pessoal** e **CAR-02 — Apontamento Móvel de Atividades e Registros de Campo**.

!!! note
    Conforme estabelecido no alinhamento de escopo técnico com a DUOC (Ata de Reunião 02 e CAR-09), o controle formal de frequência biométrica dos colaboradores é suprido externamente pelo sistema *auditor.ia*. O escopo operacional do DUOC Finance em campo concentra-se estritamente na coleta de apontamentos técnicos de produção por contrato e no preenchimento de Relatórios de Viagem Técnica (RVT).

### Requisitos Funcionais

Os requisitos funcionais abaixo descrevem os comportamentos do sistema voltados à unicidade cadastral de pessoal e à captação de dados operacionais em campo.

| Código | Requisito | CAR relacionada | Critério de Aceitação (BDD) |
| :---: | :--- | :---: | :--- |
| **RF01** | **Cadastrar colaborador e histórico contratual** | CAR-01 | **Dado** que um usuário autorizado do RH preenche os dados cadastrais (pessoais, bancários e trabalhistas) de um colaborador,<br>**Quando** submeter o formulário de cadastro com dados válidos,<br>**Então** o sistema deve persistir as informações gerando um identificador unificado e impedir a inclusão caso o CPF já exista na base de dados. |
| **RF02** | **Consultar e atualizar perfil cadastral unificado** | CAR-01 | **Dado** que um gestor de RH precisa atualizar informações funcionais ou financeiras de um colaborador ativo,<br>**Quando** registrar e salvar as modificações cadastrais pertinentes,<br>**Então** o sistema deve propagar os dados atualizados em tempo real para os módulos dependentes e registrar o histórico de versionamento da ficha. |
| **RF03** | **Registrar movimentações e desligamento de pessoal** | CAR-01 | **Dado** que um colaborador muda de situação contratual (afastamento, férias ou desligamento formal),<br>**Quando** o usuário do RH atualizar o status funcional do profissional,<br>**Então** o sistema deve registrar a data e motivo da alteração e revogar automaticamente as credenciais de acesso do usuário ao aplicativo móvel de campo em caso de afastamento ou desligamento. |
| **RF04** | **Registrar apontamentos de campo e RVT com evidências** | CAR-02 | **Dado** que um colaborador em campo ou em deslocamento técnico preenche sua jornada, atividades executadas e anexa fotos ou comprovantes comprobatórios no aplicativo móvel,<br>**Quando** submeter o apontamento ou Relatório de Viagem Técnica (RVT),<br>**Então** o sistema deve armazenar os dados e mídias compactadas localmente ou na nuvem e disponibilizá-los com status "Pendente de Homologação" para a supervisão. |

### Regras de Negócio

1. **RN01 — Unicidade Cadastral por CPF:** É terminantemente vedado o cadastro de mais de um colaborador com o mesmo número de inscrição no Cadastro de Pessoas Físicas (CPF).
2. **RN02 — Bloqueio de Edição Retroativa:** Apontamentos operacionais de campo homologados pela supervisão técnica ou submetidos há mais de 5 dias úteis tornam-se somente-leitura para usuários de campo, exigindo solicitação formal de retificação ao gestor.
3. **RN03 — Validação Cadastral para Lançamentos Financeiros:** Nenhum repasse de diária, pagamento de remuneração ou reembolso operacional pode ser deferido sem que o colaborador esteja com status "Ativo" e com dados bancários validados no cadastro unificado.
4. **RN04 — Revogação Automática de Acesso:** A transição do status cadastral do colaborador para "Desligado" ou "Afastado" inativa imediata e preventivamente suas permissões de autenticação em todas as interfaces móveis e web da organização.

### Requisitos Não Funcionais

Os RNFs são classificados segundo o modelo **URPS+** e a taxonomia de **Sommerville**. No Módulo 1, os requisitos enfatizam a confiabilidade da operação desconectada em canteiros, agilidade na recuperação de perfis, segurança no tráfego de dados e facilidade de operação em campo.

| Código | Requisito Verificável | URPS+ | Sommerville | Critério Mensurável |
| :---: | :--- | :--- | :--- | :--- |
| **RNF01** | **Operar em modo *offline* para coleta de dados em canteiros sem conectividade** | Reliability (Confiabilidade) | Requisito do Produto — Confiabilidade | O aplicativo móvel deve suportar o armazenamento local de até 100 apontamentos e fotos compactadas sem sinal de rede, executando a sincronização automática em até 30 segundos após restabelecida a conexão. |
| **RNF02** | **Disponibilizar consulta cadastral com tempo de resposta ágil** | Performance (Desempenho) | Requisito do Produto — Desempenho | O tempo de resposta para busca, paginação e renderização da ficha unificada de qualquer colaborador deve ser inferior ou igual a 2,0 segundos em 95% das requisições sob carga nominal. |
| **RNF03** | **Proteger dados pessoais e cadastrais com criptografia em repouso e em trânsito** | Security (+) (Segurança) | Requisito do Produto — Segurança | 100% dos dados pessoais sensíveis armazenados em banco devem utilizar criptografia de chave simétrica AES-256, e 100% das comunicações de rede devem transitar sob protocolo TLS 1.3. |
| **RNF04** | **Garantir usabilidade e agilidade no preenchimento de apontamentos de campo** | Usability (Usabilidade) | Requisito do Produto — Usabilidade | Usuários de campo com treinamento básico de 15 minutos devem concluir o preenchimento de um apontamento diário completo em menos de 3 minutos, com taxa de erro operacional inferior a 2,0%. |

### Matriz de Rastreabilidade

| Requisito | Objetivo Específico | Característica | Caso de Teste |
| :---: | :---: | :---: | :--- |
| **RF01** | OE1 | CAR-01 | **CT-M1-01:** Validar cadastro de novo colaborador com dados válidos e bloqueio de CPF duplicado. |
| **RF02** | OE1 | CAR-01 | **CT-M1-02:** Verificar atualização cadastral refletida em tempo real e geração de histórico versionado. |
| **RF03** | OE1 | CAR-01 | **CT-M1-03:** Alterar status para "Desligado" e validar revogação imediata de credenciais no aplicativo. |
| **RF04** | OE1 | CAR-02 | **CT-M1-04:** Registrar apontamento diário e RVT no aplicativo móvel com upload de fotos e comprovantes. |
| **RNF01** | OE1 | CAR-02 | **CT-M1-05:** Testar persistência local de 100 registros em modo desconectado e tempo de sincronização < 30 s. |
| **RNF02** | OE1 | CAR-01 | **CT-M1-06:** Medir tempo de resposta da busca e detalhamento de colaboradores (meta ≤ 2,0 s). |
| **RNF03** | OE1 | CAR-01 | **CT-M1-07:** Validar aplicação de criptografia AES-256 na base de dados e TLS 1.3 nas conexões de rede. |
| **RNF04** | OE1 | CAR-02 | **CT-M1-08:** Avaliar tempo de conclusão (< 3 min) e taxa de erro (< 2%) em teste de usabilidade com usuários de campo. |

### Relação com Regras de Negócio

As regras de negócio do Módulo 1 condicionam diretamente a consistência do modelo de domínio cadastral e a confiabilidade dos registros de campo. A regra de unicidade de CPF (RN01) e a validação cadastral obrigatória para remunerações (RN03) estabelecem as restrições de integridade estrutural para RF01 e RF02, garantindo que o módulo financeiro jamais opere sobre dados inconsistentes. Simultaneamente, a regra de revogação de acessos por desligamento (RN04) materializa a salvaguarda de segurança que apoia RNF03 e governa RF03. Por fim, a restrição de edição retroativa de apontamentos (RN02) assegura a fidedignidade dos lançamentos coletados por RF04, integrando-se aos atributos de confiabilidade *offline* de RNF01 e à usabilidade em campo de RNF04.

---

<a id="oe2-eficiencia-administrativo-financeira"></a>
<a id="oe2"></a>
## OE2 — Eficiência Administrativo-Financeira

Esta seção detalha os requisitos da **DUOC Finance** associados ao **OE2 — Aumentar a Eficiência Administrativo-Financeira**. O módulo cobre as características **CAR-03 — Motor de Processamento e Fechamento Financeiro** e **CAR-04 — Fluxo Digital de Prestação de Contas e Reembolsos**.

!!! note
    O motor de fechamento financeiro do DUOC Finance concentra-se na apuração de diárias técnicas e comissões simplificadas de prestadores e na gestão tempestiva de reembolsos. Ele opera de maneira complementar e integrada, sem substituir os sistemas contábeis legados da DUOC responsáveis pelo processamento da folha formal CLT e pela retenção de tributos e encargos trabalhistas (INSS, FGTS, IRRF).

### Requisitos Funcionais

Os requisitos funcionais abaixo descrevem comportamentos voltados à automatização das rotinas de conferência de competência financeira e digitalização do ciclo de prestação de contas operacionais.

| Código | Requisito | CAR relacionada | Critério de Aceitação (BDD) |
| :---: | :--- | :---: | :--- |
| **RF05** | **Apurar valores de diárias e remunerações por contrato** | CAR-03 | **Dado** que o gestor seleciona a competência mensal e os contratos sob sua gestão,<br>**Quando** solicitar a prévia de fechamento financeiro,<br>**Então** o sistema deve consolidar os apontamentos técnicos e horas homologadas no período, aplicar as tabelas de diárias e comissões contratadas e emitir o extrato preliminar consolidado de apuração. |
| **RF06** | **Realizar fechamento financeiro periódico supervisionado** | CAR-03 | **Dado** que o extrato prévio consolidado foi emitido e conferido pelo analista financeiro,<br>**Quando** o usuário com perfil de gestão registrar eventuais ajustes justificados e homologar formalmente a competência,<br>**Então** o sistema deve fechar o lote financeiro, bloquear todos os lançamentos apurados contra edições diretas e emitir o extrato final de conferência. |
| **RF07** | **Registrar solicitação de reembolso com comprovante digital** | CAR-04 | **Dado** que um colaborador incorreu em despesas operacionais em obra ou deslocamento técnico autorizado,<br>**Quando** cadastrar a despesa informando valor, data, centro de custo/contrato e anexar imagem legível do cupom ou nota fiscal,<br>**Então** o sistema deve armazenar os metadados e o anexo e registrar a solicitação com status "Pendente de Análise". |
| **RF08** | **Avaliar e deliberar sobre solicitações de reembolso** | CAR-04 | **Dado** que um coordenador técnico acessa a fila de reembolsos pendentes dos contratos sob sua alçada,<br>**Quando** inspecionar o comprovante fiscal e registrar o parecer de deferimento ("Aprovado") ou indeferimento ("Reprovado" com justificativa),<br>**Então** o sistema deve atualizar o status da solicitação, notificar o solicitante e registrar a operação na trilha temporal do contrato. |

### Regras de Negócio

1. **RN05 — Homologação Prévia Mandatória:** O motor de apuração financeira processa exclusivamente apontamentos de RVT e horas técnicas que possuam parecer prévio de "Homologado" pelo gestor responsável do contrato.
2. **RN06 — Obrigatoriedade de Comprovação Fiscal:** Toda solicitação de reembolso operacional exige a anexação de ao menos um comprovante digital legível em formato PDF, PNG ou JPEG, sendo bloqueada a submissão de despesas sem anexo.
3. **RN07 — Limite do Montante Reembolsável:** O valor autorizado para reembolso não pode, sob hipótese alguma, exceder o montante nominal explicitado no respectivo documento fiscal anexado.
4. **RN08 — Imutabilidade de Lotes Homologados:** Lotes de fechamento financeiro com homologação concluída tornam-se imutáveis; quaisquer retificações de competências encerradas exigem rotina formal de estorno acompanhada de justificativa auditável.
5. **RN09 — Vínculo Contratual Obrigatório de Despesas:** Toda despesa de campo submetida a reembolso deve ser vinculada obrigatoriamente a um contrato ativo da organização e a um centro de custos operacional válido.

### Requisitos Não Funcionais

Os RNFs são classificados simultaneamente pelo modelo **URPS+** e pela taxonomia de **Sommerville**. No Módulo 2, os requisitos enfatizam a velocidade de processamento do fechamento financeiro, exatidão centesimal dos cálculos monetários, integridade dos uploads de comprovantes e rastreabilidade estrita de estornos.

| Código | Requisito Verificável | URPS+ | Sommerville | Critério Mensurável |
| :---: | :--- | :--- | :--- | :--- |
| **RNF05** | **Processar a rotina de fechamento financeiro com alta eficiência** | Performance (Desempenho) | Requisito do Produto — Eficiência/Desempenho | Em 95 de 100 execuções sob base sintética de até 500 apontamentos de campo, o tempo de cálculo, consolidação e renderização do extrato deve ocorrer em no máximo 5,0 segundos. |
| **RNF06** | **Garantir exatidão aritmética centesimal em cálculos monetários** | Reliability (Confiabilidade) | Requisito do Produto — Confiabilidade/Acurácia | Em 100% dos cálculos comparados com o gabarito contábil formal, a discrepância aritmética monetária deve ser de exatamente R$ 0,00, operando com tipos de ponto fixo centesimal sem perdas por arredondamento flutuante. |
| **RNF07** | **Validar integridade, tamanho e formatos no upload de comprovantes** | Supportability (Suportabilidade) / Security (+) | Requisito do Produto — Suportabilidade | Em 100% das tentativas de envio de arquivos com tamanho superior a 5 MB ou com extensões diferentes de PDF, PNG e JPEG, o sistema deve bloquear o upload exibindo mensagem amigável de erro. |
| **RNF08** | **Exigir justificativa textual mandatória e auditoria em estornos de fechamento** | Security (+) (Segurança) | Requisito do Produto — Segurança/Rastreabilidade | Em 100% das operações de estorno de fechamento homologado, a transação deve ser sumariamente abortada caso o campo de justificativa formal não seja preenchido ou contenha menos de 15 caracteres. |

### Matriz de Rastreabilidade

| Requisito | Objetivo Específico | Característica | Caso de Teste |
| :---: | :---: | :---: | :--- |
| **RF05** | OE2 | CAR-03 | **CT-M2-01:** Calcular prévia de fechamento a partir de apontamentos e diárias homologadas. |
| **RF06** | OE2 | CAR-03 | **CT-M2-02:** Homologar fechamento financeiro supervisionado e validar bloqueio de edições no lote. |
| **RF07** | OE2 | CAR-04 | **CT-M2-03:** Cadastrar despesa operacional e anexar comprovante fiscal com vínculo a contrato ativo. |
| **RF08** | OE2 | CAR-04 | **CT-M2-04:** Avaliar e registrar deliberação de reembolso (Aprovar/Reprovar) com parecer formal. |
| **RNF05** | OE2 | CAR-03 | **CT-M2-05:** Medir tempo de processamento do fechamento para 500 lançamentos (meta ≤ 5,0 s). |
| **RNF06** | OE2 | CAR-03 | **CT-M2-06:** Validar exatidão monetária centesimal com tolerância zero (discrepância R$ 0,00). |
| **RNF07** | OE2 | CAR-04 | **CT-M2-07:** Testar rejeição automática de arquivos corrompidos, acima de 5 MB ou com extensões não homologadas. |
| **RNF08** | OE2 | CAR-03 | **CT-M2-08:** Verificar bloqueio de estorno sem preenchimento de justificativa formal auditável. |

### Relação com Regras de Negócio

As diretrizes operacionais de OE2 condicionam diretamente a higidez do ciclo de liquidação de diárias e reembolsos. A regra de homologação prévia (RN05) assegura que o cálculo financeiro em RF05 utilize dados estritamente validados pela liderança técnica, viabilizando o desempenho assíncrono estipulado em RNF05 e a acurácia centesimal de RNF06. Em contrapartida, as políticas de comprovação fiscal compulsória (RN06) e conformidade de valores (RN07) sustentam o processo de reembolso em RF07 e RF08, garantindo que o módulo de validação de anexos (RNF07) atue preventivamente contra fraudes ou extravios de comprovantes. Por fim, a imutabilidade do fechamento (RN08) alinha-se ao requisito de auditoria de estornos (RNF08), salvaguardando os registros contábeis da organização.

---

<a id="oe3-inteligencia-de-custos-por-contrato"></a>
<a id="oe3"></a>
## OE3 — Inteligência de Custos por Contrato

Esta seção detalha os requisitos da **DUOC Finance** associados ao **OE3 — Transparecer as informações sobre os Custos por Contrato**. O módulo cobre as características **CAR-05 — Apropriação e Rastreabilidade de Custos por Contrato** e **CAR-06 — Painel Analítico de Custo Apropriado e Desvio Orçamentário por Projeto**.

### Requisitos Funcionais

Os requisitos funcionais abaixo descrevem comportamentos voltados à apropriação analítica de despesas e à disponibilização de indicadores de rentabilidade e desvio orçamentário por contrato.

| Código | Requisito | CAR relacionada | Critério de Aceitação (BDD) |
| :---: | :--- | :---: | :--- |
| **RF09** | **Consolidar custo de mão de obra por contrato** | CAR-05 | **Dado** que existem registros de horas e diárias previamente apurados e homologados vinculados a um contrato ativo,<br>**Quando** o sistema executar a apropriação de custos da competência,<br>**Então** deve consolidar o montante financeiro alocado ao contrato sem sobrepor nem duplicar relatórios individuais de folha de pagamento. |
| **RF10** | **Rastrear origem do custo apropriado** | CAR-05 | **Dado** que um custo operacional ou diária está apropriado a determinado contrato,<br>**Quando** o gestor consultar o detalhamento da linha de custo,<br>**Então** o sistema deve exibir a rastreabilidade completa contendo o apontamento de origem, o colaborador executor, o responsável pela homologação, a data/hora da operação e a identificação do contrato. |
| **RF11** | **Consultar custo apropriado por contrato** | CAR-06 | **Dado** que um usuário com perfil autorizado acessa o painel de inteligência de custos,<br>**Quando** aplicar filtros por período, contrato, colaborador ou centro de custo,<br>**Então** o sistema deve atualizar dinamicamente os valores acumulados e os gráficos de apropriação correspondentes aos filtros selecionados. |
| **RF12** | **Comparar custo apropriado ao orçamento** | CAR-06 | **Dado** que um contrato possui orçamento previsto previamente cadastrado na plataforma,<br>**Quando** o painel analítico consolidar as despesas realizadas no projeto,<br>**Então** deve apresentar o orçamento previsto, o custo acumulado apropriado, o desvio monetário e o percentual de execução orçamentária, sinalizando contratos com extrapolação orçamentária. |

### Regras de Negócio

1. **RN10 — Condição de Homologação para Custeio:** Somente apontamentos e despesas com status de "Homologado" podem gerar lançamentos de apropriação financeira em contratos de projetos.
2. **RN11 — Vínculo Contratual Mandatório:** Todo e qualquer custo apropriado deve estar estritamente associado a um contrato ativo da DUOC e a uma origem documental identificável, sendo vedada a existência de lançamentos órfãos.
3. **RN12 — Versionamento de Apropriações:** Modificações efetuadas sobre registros operacionais já apropriados financeiramente devem preservar o histórico da versão anterior e exigir nova homologação formal da gestão técnica quando afetarem valores monetários.
4. **RN13 — Cálculo Padronizado de Execução Orçamentária:** O percentual de execução orçamentária de cada contrato é calculado estritamente pela equação `(Custo Apropriado Acumulado / Orçamento Previsto) * 100`.
5. **RN14 — Segregação de Visualização Salarial:** A visualização de custos de mão de obra individualizados e taxas salariais no painel analítico é restrita aos usuários autenticados com perfil gerencial ou diretivo.

### Requisitos Não Funcionais

Os RNFs são classificados pelo modelo **URPS+** e pela taxonomia de **Sommerville**. No Módulo 3, os requisitos garantem o alto desempenho em consultas analíticas volumosas, a confidencialidade de dados estratégicos, a integridade transacional na concorrência de lançamentos e a responsividade em múltiplas plataformas.

| Código | Requisito Verificável | URPS+ | Sommerville | Critério Mensurável |
| :---: | :--- | :--- | :--- | :--- |
| **RNF09** | **Carregar o painel analítico em tempo inferior a 3 segundos** | Performance (Desempenho) | Requisito do Produto — Eficiência/Desempenho | Em 95 de 100 execuções medidas em ambiente de testes com base sintética de até 10.000 lançamentos de custos e 100 contratos, a renderização completa dos indicadores analíticos deve ocorrer em no máximo 3,0 segundos. |
| **RNF10** | **Restringir dados financeiros analíticos conforme perfil de acesso** | Security (+) (Segurança) | Requisito do Produto — Segurança da Informação | Em 100% dos testes de autorização, requisições de consulta financeira originadas por usuários sem privilégios compatíveis devem ser bloqueadas com código HTTP 403 Forbidden. |
| **RNF11** | **Garantir consistência transacional ACID na apropriação concorrente de custos** | Reliability (Confiabilidade) | Requisito do Produto — Confiabilidade/Dependabilidade | Em 100 testes de concorrência com acessos simultâneos de inclusão e homologação, não deve haver ocorrência de custos duplicados ou divergências entre a soma dos apontamentos e o total consolidado do contrato. |
| **RNF12** | **Assegurar responsividade do painel em resoluções de *desktop* e *tablet*** | Usability (Usabilidade) | Requisito do Produto — Usabilidade | Nas resoluções de tela (*viewports*) de 1024 × 768 px e 768 × 1024 px, 100% dos gráficos, tabelas e filtros essenciais devem permanecer visíveis e operáveis sem a necessidade de barra de rolagem horizontal. |

### Matriz de Rastreabilidade

| Requisito | Objetivo Específico | Característica | Caso de Teste |
| :---: | :---: | :---: | :--- |
| **RF09** | OE3 | CAR-05 | **CT-M3-01:** Consolidar horas e diárias técnicas homologadas aos custos do contrato ativo. |
| **RF10** | OE3 | CAR-05 | **CT-M3-02:** Rastrear origem documental e autoria de lançamento de custo apropriado. |
| **RF11** | OE3 | CAR-06 | **CT-M3-03:** Consultar painel analítico aplicando filtros por contrato, colaborador e período. |
| **RF12** | OE3 | CAR-06 | **CT-M3-04:** Exibir cálculo de desvio orçamentário e alertas visuais de extrapolação de meta. |
| **RNF09** | OE3 | CAR-06 | **CT-M3-05:** Medir tempo de renderização do painel analítico sob carga de 10.000 registros (meta ≤ 3,0 s). |
| **RNF10** | OE3 | CAR-05/CAR-06 | **CT-M3-06:** Bloquear requisições analíticas fora da alçada do perfil com HTTP 403 Forbidden. |
| **RNF11** | OE3 | CAR-05 | **CT-M3-07:** Validar atomicidade transacional e ausência de inconsistências em apropriações concorrentes. |
| **RNF12** | OE3 | CAR-06 | **CT-M3-08:** Inspecionar responsividade e ausência de *scroll* horizontal em resoluções de *desktop* e *tablet*. |

### Relação com Regras de Negócio

As diretrizes de OE3 articulam as bases da gestão orçamentária dos projetos de engenharia. A regra de homologação prévia (RN10) e a garantia de vínculo a contratos válidos (RN11) fornecem o lastro de consistência contábil exigido por RF09 e RF10, assegurando a confiabilidade transacional definida em RNF11. Além disso, a fórmula oficial de execução orçamentária (RN13) padroniza a exibição de desvios em RF12, enquanto a política de segregação de dados salariais (RN14) fornece sustentação regulatória ao isolamento de permissões de RNF10. Em conjunto, essas definições viabilizam uma visualização executiva performática (RNF09) e adaptável a diferentes estações de trabalho (RNF12).

---

<a id="oe4-governanca-seguranca-e-rastreabilidade"></a>
<a id="oe4"></a>
## OE4 — Governança, Segurança e Rastreabilidade

Esta seção detalha os requisitos da **DUOC Finance** associados ao **OE4 — Garantir Segurança e Governança de Dados**. O módulo cobre as características **CAR-07 — Controle de Acesso Baseado em Papéis (RBAC)** e **CAR-08 — Trilha de Auditoria e Histórico de Operações Sensíveis**.

### Requisitos Funcionais

Os requisitos funcionais abaixo descrevem mecanismos estruturantes voltados à autenticação corporativa segura, controle granular de privilégios de acesso e rastreamento imutável de eventos operacionais.

| Código | Requisito | CAR relacionada | Critério de Aceitação (BDD) |
| :---: | :--- | :---: | :--- |
| **RF13** | **Autenticar usuário e emitir token de acesso** | CAR-07 | **Dado** que um usuário cadastrado informa credenciais corporativas válidas (e-mail e senha cadastrados),<br>**Quando** submeter a requisição de login,<br>**Então** o sistema deve autenticar a sessão e emitir um token de acesso temporário associado ao seu perfil de privilégios, retornando mensagem genérica de erro sem expor detalhes internos em caso de credenciais inválidas. |
| **RF14** | **Restringir acesso a dados e ações por perfil (RBAC)** | CAR-07 | **Dado** que uma requisição a rota de API ou tela restrita é recebida com token ativo,<br>**Quando** o sistema inspecionar os privilégios do papel autenticado (Diarista, Gestor ou Administrador),<br>**Então** deve conceder a execução estritamente dentro da alçada autorizada e barrar requisições não autorizadas com resposta HTTP 403 Forbidden. |
| **RF15** | **Registrar autoria e carimbo temporal de operações sensíveis** | CAR-08 | **Dado** que uma transação de inserção, modificação ou exclusão é executada sobre registros cadastrais, financeiros, de apontamento ou parametrizações,<br>**Quando** a alteração for gravada na camada de persistência,<br>**Então** o sistema deve gravar de forma síncrona uma entrada de auditoria contendo autor (quem), operação executada (o quê) e carimbo de data e hora UTC (quando). |
| **RF16** | **Impedir alteração e exclusão de registros de auditoria** | CAR-08 | **Dado** que um usuário autenticado (inclusive detentores de perfil com privilégios de Administrador) submete comando de alteração (*UPDATE*) ou exclusão (*DELETE*) sobre a base de logs de auditoria,<br>**Quando** a instrução for recebida pelo mecanismo de persistência,<br>**Então** o sistema deve rejeitar categoricamente o comando, mantendo a arquitetura estritamente *append-only* (somente acréscimo). |

### Regras de Negócio

1. **RN15 — Autenticação Mandatória com Token Válido:** Todas as requisições direcionadas a rotas ou recursos internos protegidos devem apresentar token temporário válido e não expirado emitido pelo serviço de autenticação.
2. **RN16 — Princípio do Menor Privilégio (RBAC):** Os papéis de acesso devem respeitar a segregação estrita de dados: colaboradores de campo possuem visibilidade exclusiva sobre seus próprios registros; coordenadores e gestores acessam exclusivamente os contratos e equipes sob sua supervisão; administradores possuem alçada para parametrização global da plataforma.
3. **RN17 — Atomicidade de Gravação na Trilha de Auditoria:** Toda operação de escrita (*create*, *update*, *delete*) sobre dados cadastrais, financeiros e de contratos só é efetivada se a inclusão do respectivo log de auditoria for gravada com êxito na mesma transação atômica.
4. **RN18 — Imutabilidade Estrita da Trilha de Auditoria:** Os registros da trilha de auditoria são invioláveis e somente-acréscimo (*append-only*), sendo tecnicamente bloqueada qualquer alteração textual ou exclusão física/lógica de eventos.
5. **RN19 — Prazo Mínimo Obrigatório de Retenção de Logs:** Os registros de auditoria operacional e financeira devem ser retidos por período mínimo ininterrupto de 5 anos (1.825 dias) antes de qualquer rotina de expurgo, em estrito cumprimento ao prazo prescricional trabalhista (Artigo 11 da CLT) e à legislação fiscal vigente.

### Requisitos Não Funcionais

Os RNFs são classificados pelo modelo **URPS+** e pela taxonomia de **Sommerville**, abrangendo tanto Requisitos do Produto (Segurança e Confiabilidade) quanto Requisitos Externos (Regulamentações da LGPD e CLT).

| Código | Requisito Verificável | URPS+ | Sommerville | Critério Mensurável |
| :---: | :--- | :--- | :--- | :--- |
| **RNF13** | **Expirar token de acesso temporário em no máximo 8 horas** | Security (+) (Segurança) | Requisito do Produto — Confiabilidade/Segurança | Em 100% dos testes de segurança automatizados, requisições submetidas com tokens emitidos há mais de 8 horas (28.800 segundos) devem ser sumariamente rejeitadas com código HTTP 401 Unauthorized. |
| **RNF14** | **Validar perfil de autorização em 100% das rotas de API com dados sensíveis** | Security (+) (Segurança) | Requisito Externo — Legislativo/Regulamentar (LGPD) | Cobertura de 100% das rotas de backend que trafegam dados financeiros ou pessoais sensíveis por filtros de permissão RBAC, com resposta obrigatória HTTP 403 Forbidden para papéis não autorizados. |
| **RNF15** | **Garantir atomicidade transacional na gravação de logs de auditoria** | Reliability (Confiabilidade) | Requisito do Produto — Confiabilidade/Dependabilidade | Em 100% das operações de escrita disparadas contra dados de pessoal e financeiros na suíte de testes, uma entrada correspondente de auditoria deve ser confirmada na mesma transação com taxa de perda zero. |
| **RNF16** | **Reter registros de auditoria por no mínimo 5 anos contra expurgo indevido** | Supportability (Suportabilidade) / Legal | Requisito Externo — Legislativo (Art. 11 da CLT / Fiscal) | Inexistência comprovada por análise estática e testes de vulnerabilidade de comandos ou rotinas que permitam a deleção de registros com tempo de retenção inferior a 5 anos (1.825 dias). |

### Matriz de Rastreabilidade

| Requisito | Objetivo Específico | Característica | Caso de Teste |
| :---: | :---: | :---: | :--- |
| **RF13** | OE4 | CAR-07 | **CT-M4-01:** Autenticar usuário com credenciais válidas e verificar emissão de token de sessão temporário. |
| **RF14** | OE4 | CAR-07 | **CT-M4-02:** Bloquear requisições a telas e rotas de API financeiras efetuadas por perfil sem privilégio (HTTP 403). |
| **RF15** | OE4 | CAR-08 | **CT-M4-03:** Validar gravação de autoria, operação executada e carimbo temporal UTC em operações de escrita. |
| **RF16** | OE4 | CAR-08 | **CT-M4-04:** Submeter comandos de edição e deleção em registros de auditoria e confirmar bloqueio estrito (*append-only*). |
| **RNF13** | OE4 | CAR-07 | **CT-M4-05:** Testar expiração compulsória de tokens de sessão após decorridas 8 horas com retorno HTTP 401. |
| **RNF14** | OE4 | CAR-07 | **CT-M4-06:** Validar conformidade regulatória (LGPD) e isolamento horizontal em 100% das rotas de dados sensíveis. |
| **RNF15** | OE4 | CAR-08 | **CT-M4-07:** Confirmar persistência atômica da entrada de auditoria na mesma transação da base de dados. |
| **RNF16** | OE4 | CAR-08 | **CT-M4-08:** Auditar retenção mínima por 5 anos (1.825 dias) e proteção ativa contra rotinas de expurgo. |

### Relação com Regras de Negócio

As diretrizes do Módulo 4 consolidam o ecossistema de conformidade jurídica, integridade e governança corporativa do DUOC Finance. A regra de autenticação compulsória com token (RN15) e o princípio do menor privilégio (RN16) determinam o comportamento operacional de RF13 e RF14, fornecendo conformidade às exigências da LGPD respaldadas por RNF13 e RNF14. Em perfeita consonância, a atomicidade transacional de auditoria (RN17), a arquitetura *append-only* (RN18) e a retenção legal quinquenal (RN19) regem a especificação de RF15 e RF16, assegurando o cumprimento dos atributos de confiabilidade de RNF15 e a blindagem jurídica e fiscal da organização garantida por RNF16 nos termos do Artigo 11 da Consolidação das Leis do Trabalho.

---

<a id="matriz-sintese-geral-de-rastreabilidade"></a>
## Matriz-Síntese Geral de Rastreabilidade

A matriz a seguir consolida a rastreabilidade bidirecional global entre os Objetivos Específicos (OE), as Características do Produto (CAR), os Requisitos Funcionais (RF), os Requisitos Não Funcionais (RNF) e a suíte de Casos de Teste (CT) do sistema:

| Objetivo Específico (OE) | Características Cobertas (CAR) | Requisitos Funcionais (RF) | Requisitos Não Funcionais (RNF) | Casos de Teste (CT) |
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
| `2.1` | 22/09/2026 | Revisão geral e unificação técnica em documento único: ajuste de abstração de escopo em OE1 e OE2, eliminação de duplicidades, formatação rigorosa dos critérios de aceitação em BDD (*Dado-Quando-Então*), sequenciamento unificado de regras de negócio (RN01 a RN19), correção gramatical e alinhamento simétrico da rastreabilidade com 32 Casos de Teste. | Matheus Ribeiro Szervinsk | Matheus Ribeiro Szervinsk |