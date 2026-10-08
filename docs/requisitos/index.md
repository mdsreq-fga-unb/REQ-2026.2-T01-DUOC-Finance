# Capítulo 8: Requisitos de Software

Este documento consolida a especificação de requisitos funcionais e não funcionais do sistema **DUOC Finance**, estruturados modularmente em torno dos quatro **Objetivos Específicos (OE)** do produto e suas respectivas **Características (CAR)**, definidas no [Capítulo 2: Solução Proposta](../visao-produto/capitulo-2/index.md).

---

## 8.1 Visão Geral e Modelo Metodológico

Para assegurar o rigor analítico, a testabilidade e a rastreabilidade exigidos pela disciplina de Engenharia de Requisitos, a especificação adota os seguintes pilares metodológicos:

- **Requisitos Funcionais (RF):** Representam **ações observáveis e deliberadas do usuário** dentro da aplicação que geram valor de negócio mensurável. Rotinas de cálculo interno, processamentos em segundo plano e validações restritivas não são formulados como RFs isolados, mas sim modelados como regras de negócio condicionantes da ação do usuário. Cada RF é especificado com um **Critério de Aceitação no padrão formal BDD** (*Dado-Quando-Então* / Gherkin).
- **Regras de Negócio (RN):** Políticas operacionais, cálculos matemáticos, automatismos do sistema, restrições e invariantes de domínio da **DUOC Arquitetura e Engenharia** que governam a execução das ações dos usuários. As regras são numeradas sequencialmente em escopo global (RN01 a RN29).
- **Requisitos Não Funcionais (RNF):** Atributos de qualidade e restrições técnicas do produto, classificados simultaneamente pelo modelo **URPS+** (*Usability*, *Reliability*, *Performance*, *Supportability* e o modificador `+` para *Security* e Legais) e pela taxonomia de **Sommerville** (Requisitos do Produto e Requisitos Externos). Cada RNF conta com um **Critério Mensurável** baseado em parâmetros objetivos de verificação.
- **Rastreabilidade Bidirecional:** Mapeamento integral entre Objetivos Específicos (OE), Características (CAR), Requisitos (RF/RNF) e Casos de Teste (CT-Mx-xx).

!!! note "Por que duas classificações nos RNFs?"
    As duas classificações respondem a perguntas diferentes e são complementares. O **URPS+** indica o **atributo de qualidade** exigido (o quê: usabilidade, confiabilidade, desempenho, suportabilidade, segurança). A taxonomia de **Sommerville** indica a **origem do requisito** (produto interno ou requisito externo, como legislação e regulamentação). Manter as duas preserva a rastreabilidade de restrições legais: por exemplo, o RNF16 (retenção de logs) é *Suportabilidade* em URPS+ e *Requisito Externo — Legislativo* em Sommerville, por decorrer do Art. 11 da CLT.

### Estrutura Modular dos Requisitos

| Módulo | Objetivo Específico | Características Cobertas (CAR) | Requisitos Funcionais (Ação do Usuário) | Requisitos Não Funcionais | Casos de Teste |
| :---: | :--- | :---: | :---: | :---: | :---: |
| **Módulo 1** | [**OE1 — Padronização e Unificação de Dados**](#oe1-padronizacao-e-unificacao-de-dados) | CAR-01, CAR-02, CAR-09 | RF01 a RF04, RF19, RF20, RF22, RF25 e RF26 | RNF01 a RNF04 | CT-M1-01 a CT-M1-13 |
| **Módulo 2** | [**OE2 — Eficiência Administrativo-Financeira**](#oe2-eficiencia-administrativo-financeira) | CAR-03, CAR-04 | RF05 a RF08, RF21, RF27, RF28 e RF29 | RNF05 a RNF08 | CT-M2-01 a CT-M2-12 |
| **Módulo 3** | [**OE3 — Inteligência de Custos por Contrato**](#oe3-inteligencia-de-custos-por-contrato) | CAR-05, CAR-06 | RF09 a RF12, RF30 e RF31 | RNF09 a RNF12 | CT-M3-01 a CT-M3-10 |
| **Módulo 4** | [**OE4 — Governança, Segurança e Rastreabilidade**](#oe4-governanca-seguranca-e-rastreabilidade) | CAR-07, CAR-08 | RF13 a RF18, RF23 e RF24 | RNF13 a RNF17 | CT-M4-01 a CT-M4-13 |
| **Transversal** | [**Requisitos de plataforma não vinculados a um único OE**](#requisitos-nao-funcionais-transversais) | — | — | RNF18 a RNF20 | CT-TRANS-01 a CT-TRANS-03 |
---

## 8.2 Rastreabilidade Estratégica e Diagramas Visuais

A rastreabilidade entre a estratégia corporativa da DUOC e a engenharia de software é formalizada pelos diagramas a seguir.

### 8.2.1 Pirâmide de Abstração (Rastreabilidade Vertical)

O diagrama abaixo apresenta o desdobramento hierárquico *top-down* da solução: do Objetivo Geral (OG) às metas táticas (OEs), descendo para as capacidades do sistema (CARs) e derivando nos Requisitos Funcionais e Não Funcionais executáveis.

<div  class="miro-diagram-box">
  <iframe
    src="https://miro.com/app/live-embed/uXjVEd_ZDOg=/?focusWidget=3458764686279042166&embedMode=view_only_without_ui&embedId=760334862252"
    title="Pirâmide de Abstração — Rastreabilidade Vertical"
    frameborder="0"
    scrolling="no"
    allow="fullscreen; clipboard-read; clipboard-write"
    allowfullscreen>
  </iframe>
</div>

<p align="center">
  <a href="https://miro.com/app/board/uXjVEd_ZDOg=/?share_link_id=457510525802"
     target="_blank"
     rel="noopener noreferrer">
    🔍 Abrir Piramide Completo no Miro (Interativo) ↗
  </a>
    &nbsp;|&nbsp;
  <a href="../assets/images/requisitos/piramide_abstracao.jpg"
     target="_blank"
     rel="noopener noreferrer">
    📃 Ver Pirâmide de Abstração em JPG ↗
  </a>
    &nbsp;|&nbsp;
  <a href="../assets/images/piramide_abstracao_vetorizada.svg" 
      target="_blank" 
      rel="noopener noreferrer" 
      download="piramide_abstracao_vetorizada.svg">
    📥 Baixar Piramide em Vetor (SVG Alta Resolução) ↗
</a>
</p>

!!! note "Rastreabilidade dos Requisitos Não Funcionais na Pirâmide de Abstração"
    A árvore hierárquica da **Figura 8.1** e o grafo estrutural acima formalizam a descendência vertical estrita do escopo observável e das ações do usuário (**Objetivo Geral ➔ Objetivos Específicos ➔ Características ➔ Requisitos Funcionais**). Os **Requisitos Não Funcionais (RNFs)**, por constituírem atributos de qualidade sistêmica e restrições arquiteturais transversais (*cross-cutting concerns*), não figuram como folhas exclusivas de uma única funcionalidade, mas qualificam as características e o produto como um todo (por exemplo, segurança e criptografia no RNF03 e RNF14, usabilidade no RNF04 e confiabilidade no RNF06). A amarração individualizada e auditável de cada um dos 17 RNFs às CARs e às dores operacionais é detalhada estruturadamente na **Tabela 8.2 (Mapeamento de Necessidades do Cliente)** e na **Tabela 8.3 (Matriz-Síntese Geral de Rastreabilidade)**.

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

<div class="miro-diagram-box">
  <iframe
    src="https://miro.com/app/live-embed/uXjVEd_B_Tw=/?focusWidget=3458764686278573389&embedMode=view_only_without_ui&embedId=548153869367"
    title="Grafo de Interdependência — Rastreabilidade"
    frameborder="0"
    scrolling="no"
    allow="fullscreen; clipboard-read; clipboard-write"
    allowfullscreen>
  </iframe>
</div>

<p align="center">
  <a href="https://miro.com/app/board/uXjVEd_B_Tw=/?share_link_id=934134158353"
     target="_blank"
     rel="noopener noreferrer">
    🔍 Abrir Grafo Completo no Miro (Interativo) ↗
  </a>
    &nbsp;|&nbsp;
  <a href="../assets/images/requisitos/grafo_interdependencia.jpg"
     target="_blank"
     rel="noopener noreferrer">
    📃 Ver Grafo de Interdependência em JPG ↗
  </a>
    &nbsp;|&nbsp;
  <a href="../assets/images/grafo_interdependencia_vetorizado.svg" 
     target="_blank" 
     rel="noopener noreferrer" 
     download="grafo_interdependencia_vetorizado.svg">
    📥 Baixar Grafo em Vetor (SVG Alta Resolução) ↗
  </a>
</p>

---

<a id="oe1-padronizacao-e-unificacao-de-dados"></a>
<a id="oe1"></a>
## OE1 — Padronização e Unificação de Dados

Esta seção detalha os requisitos da **DUOC Finance** associados ao **OE1 — Padronizar e Unificar os Dados**. O módulo cobre as características **CAR-01 — Gestão Cadastral Unificada de Pessoal** e **CAR-02 — Apontamento Móvel de Atividades e Registros de Campo**, além do requisito de integração associado à **CAR-09** (presenças homologadas do *auditor.ia*).

!!! note "Alinhamento de Escopo — Ponto Biométrico e auditor.ia"
    Conforme estabelecido no alinhamento de escopo técnico com a DUOC (Ata de Reunião 02 e CAR-09), o controle formal de frequência biométrica dos colaboradores é suprido externamente pelo sistema *auditor.ia*. O escopo operacional do DUOC Finance em campo concentra-se estritamente na coleta de apontamentos técnicos de produção por contrato e no preenchimento de Relatórios de Viagem Técnica (RVT).

### Requisitos Funcionais

Os requisitos abaixo expressam as **ações observáveis dos usuários** para gestão da base cadastral e coleta de dados de produção em campo.

| Código | Requisito (Ação do Usuário) | CAR relacionada | Critério de Aceitação (BDD) |
| :---: | :--- | :---: | :--- |
| **RF01** | **Cadastrar colaborador** | CAR-01 | **Dado** que um usuário do RH preenche os dados cadastrais (pessoais, bancários e trabalhistas) de um novo profissional,<br>**Quando** submeter o formulário de cadastro com dados válidos,<br>**Então** o sistema deve persistir as informações gerando um identificador unificado e bloquear a inclusão caso o CPF já exista na base de dados (RN01). |
| **RF02** | **Atualizar cadastro de colaborador** | CAR-01 | **Dado** que o gestor de RH precisa atualizar informações cadastrais ou dados bancários de um colaborador ativo,<br>**Quando** salvar as modificações no perfil do profissional,<br>**Então** o sistema deve propagar os dados atualizados em tempo real para os módulos dependentes e registrar o histórico versionado da ficha. |
| **RF03** | **Registrar movimentação funcional** | CAR-01 | **Dado** que um colaborador muda de situação jurídica (afastamento, férias ou rescisão),<br>**Quando** o usuário do RH registrar a alteração funcional no sistema,<br>**Então** o sistema deve atualizar o status do colaborador e revogar automaticamente suas credenciais de acesso à aplicação web em dispositivo móvel de campo em caso de afastamento ou desligamento (RN04). |
| **RF04** | **Submeter apontamento de campo** | CAR-02 | **Dado** que o colaborador concluiu sua jornada em obra ou visita técnica,<br>**Quando** preencher o formulário informando horas trabalhadas e escopo executado e submeter o apontamento na aplicação web em dispositivo móvel,<br>**Então** o sistema deve registrar o apontamento com os anexos vinculados (RF22) e disponibilizá-lo com status "Pendente de Homologação" para a supervisão técnica. |
| **RF19** | **Consultar apontamentos registrados** | CAR-02 | **Dado** que o colaborador de campo já submeteu apontamentos pela aplicação web em dispositivo móvel,<br>**Quando** acessar a listagem dos seus apontamentos,<br>**Então** o sistema deve exibir somente os apontamentos do próprio colaborador (RN16), com data, contrato e status ("Pendente de Homologação", "Homologado" ou "Rejeitado"), permitindo consultar o histórico de cada registro. |
| **RF20** | **Importar presenças homologadas** | CAR-09 | **Dado** que o analista financeiro selecionou uma competência mensal e os contratos correspondentes,<br>**Quando** solicitar a importação das presenças homologadas disponibilizadas pelo painel (*dashboard*) do *auditor.ia*,<br>**Então** o sistema deve consumir os registros de presença, vinculá-los por colaborador e contrato na competência selecionada para apropriação financeira das horas e manter inalterados os dados de origem no *auditor.ia*. |
| **RF22** | **Anexar evidências e geolocalização ao apontamento** | CAR-02 | **Dado** que o colaborador está preenchendo um apontamento de campo na aplicação web em dispositivo móvel,<br>**Quando** anexar fotos ou comprovantes da atividade executada,<br>**Então** o sistema deve tentar capturar a geolocalização do dispositivo no momento do anexo, vincular os arquivos e as coordenadas ao apontamento em preenchimento e exibir a lista de anexos, permitindo removê-los antes da submissão, mesmo quando a localização não estiver disponível (RN24). |
| **RF25** | **Cadastrar tipo de contratação do colaborador** | CAR-01 | **Dado** que o usuário do RH está cadastrando ou atualizando um colaborador,<br>**Quando** selecionar o tipo de contratação (Diarista, CLT ou Prestador de Serviço),<br>**Então** o sistema deve vincular o tipo selecionado ao perfil do colaborador, conforme as regras associadas ao tipo de contratação (RN22). |
| **RF26** | **Consultar histórico de alterações cadastrais e bancárias** | CAR-01 | **Dado** que um usuário com permissão de RH ou o próprio colaborador acessa a ficha de um profissional,<br>**Quando** solicitar o histórico de alterações,<br>**Então** o sistema deve exibir cada versão anterior dos dados cadastrais e bancários, com autor, data/hora e o campo alterado (RN23). |

### Regras de Negócio

1. **RN01 — Unicidade Cadastral por CPF:** O sistema valida compulsoriamente a unicidade do CPF, bloqueando a criação de cadastros duplicados.
2. **RN02 — Bloqueio Automático de Edição Retroativa:** Apontamentos de campo homologados pela supervisão ou submetidos há mais de 5 dias úteis tornam-se automaticamente bloqueados para edição por usuários de campo.
3. **RN03 — Validação Cadastral para Lançamentos Financeiros:** O sistema impede a aprovação de qualquer diária, comissão, reembolso ou adiantamento caso o colaborador não esteja com status "Ativo" e dados bancários validados.
4. **RN04 — Revogação Automática de Acessos:** A transição do status cadastral para "Desligado" ou "Afastado" dispara o cancelamento automático e imediato de tokens e credenciais ativas do usuário na aplicação web em dispositivo móvel.
5. **RN22 — Tipos de Contratação Válidos:** O sistema restringe o tipo de contratação às opções Diarista, CLT ou Prestador de Serviço, aplicando regras de cálculo de custo específicas por tipo nas rotinas financeiras.
6. **RN23 — Versionamento Obrigatório de Dados Cadastrais e Bancários:** O sistema preserva toda versão anterior de campo cadastral ou bancário alterado, com autor e carimbo temporal, nunca sobrescrevendo o valor anterior.
7. **RN24 — Captura de Geolocalização Não Bloqueante:** O sistema tenta capturar a geolocalização do dispositivo no momento do anexo de evidências; caso a permissão seja negada ou a localização esteja indisponível, o anexo prossegue normalmente, sendo sinalizado como "localização não disponível".

### Requisitos Não Funcionais

| Código | Requisito Verificável | URPS+ | Sommerville | Critério Mensurável |
| :---: | :--- | :--- | :--- | :--- |
| **RNF01** | **Operar em modo *offline* para coleta de dados em canteiros sem conectividade** | Reliability (Confiabilidade) | Requisito do Produto — Confiabilidade | A aplicação web em dispositivo móvel deve armazenar localmente, sem perda de dados, no mínimo 100 apontamentos com fotos compactadas sem sinal de rede; exibir alerta visual quando o armazenamento local atingir 80% da capacidade; e sincronizar automaticamente em até 30 segundos após restabelecida a conexão. |
| **RNF02** | **Disponibilizar consulta cadastral com tempo de resposta ágil** | Performance (Desempenho) | Requisito do Produto — Desempenho | O tempo de resposta para busca, paginação e renderização da ficha unificada de qualquer colaborador deve ser inferior ou igual a 2,0 segundos em 95% das requisições sob carga nominal. |
| **RNF03** | **Proteger dados pessoais e cadastrais com criptografia em repouso e em trânsito** | Security (+) (Segurança) | Requisito do Produto — Segurança | 100% dos dados pessoais sensíveis armazenados em banco devem utilizar criptografia AES-256, e 100% das comunicações de rede devem transitar sob protocolo TLS 1.3. |
| **RNF04** | **Garantir usabilidade e agilidade no preenchimento de apontamentos de campo** | Usability (Usabilidade) | Requisito do Produto — Usabilidade | O preenchimento completo de um apontamento diário de campo deve ser concluído por usuários em primeiro uso, sem suporte externo ou treinamento prévio, em no máximo 5 passos/telas, com taxa de conclusão bem-sucedida ≥ 90% em teste de usabilidade. |

### Matriz de Rastreabilidade

| Requisito | Objetivo Específico | Característica | Caso de Teste |
| :---: | :---: | :---: | :--- |
| **RF01** | OE1 | CAR-01 | **CT-M1-01:** Submeter cadastro de colaborador e validar persistência e bloqueio de CPF duplicado. |
| **RF02** | OE1 | CAR-01 | **CT-M1-02:** Atualizar ficha cadastral e verificar propagação em tempo real e versionamento. |
| **RF03** | OE1 | CAR-01 | **CT-M1-03:** Registrar movimentação funcional de colaborador e validar revogação automática de credenciais no aplicativo. |
| **RF04** | OE1 | CAR-02 | **CT-M1-04:** Submeter apontamento de campo na aplicação web em dispositivo móvel com horas e escopo e validar registro com status "Pendente de Homologação" e anexos vinculados. |
| **RNF01** | OE1 | CAR-02 | **CT-M1-05:** Testar persistência local de, no mínimo, 100 registros em modo desconectado sem perda de dados, exibição do alerta visual ao atingir 80% da capacidade e tempo de sincronização ≤ 30 s. |
| **RNF02** | OE1 | CAR-01 | **CT-M1-06:** Medir tempo de resposta da busca e detalhamento de colaboradores (meta ≤ 2,0 s). |
| **RNF03** | OE1 | CAR-01 | **CT-M1-07:** Validar aplicação de criptografia AES-256 na base de dados e TLS 1.3 nas conexões de rede. |
| **RNF04** | OE1 | CAR-02 | **CT-M1-08:** Avaliar, em teste de usabilidade com usuários em primeiro uso e sem treinamento, a conclusão do apontamento em no máximo 5 passos/telas com taxa de conclusão bem-sucedida ≥ 90%. |
| **RF19** | OE1 | CAR-02 | **CT-M1-09:** Consultar a listagem de apontamentos próprios e validar exibição de status e histórico, bloqueando o acesso a registros de outros colaboradores. |
| **RF20** | OE1 | CAR-09 | **CT-M1-10:** Importar presenças homologadas do *auditor.ia* para uma competência e validar vínculo por colaborador e contrato, sem alteração dos dados de origem. |
| **RF22** | OE1 | CAR-02 | **CT-M1-11:** Anexar fotos e comprovantes a um apontamento em preenchimento, validar a tentativa de captura da geolocalização, o vínculo dos arquivos e coordenadas ao registro e a possibilidade de remover anexos antes da submissão, inclusive quando a localização estiver indisponível. |
| **RF25** | OE1 | CAR-01 | **CT-M1-12:** Cadastrar e atualizar o tipo de contratação de um colaborador com as opções Diarista, CLT e Prestador de Serviço e validar o vínculo correto ao perfil. |
| **RF26** | OE1 | CAR-01 | **CT-M1-13:** Consultar o histórico de alterações cadastrais e bancárias de um colaborador e validar exibição do valor anterior, autor, data/hora e campo alterado. |

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
| **RF05** | **Solicitar prévia de fechamento** | CAR-03 | **Dado** que o analista financeiro seleciona uma competência mensal e os contratos correspondentes,<br>**Quando** solicitar a prévia de fechamento financeiro,<br>**Então** o sistema deve consolidar os apontamentos técnicos homologados e apresentar o extrato preliminar consolidado com diárias e comissões calculadas para conferência supervisionada. |
| **RF06** | **Homologar fechamento financeiro** | CAR-03 | **Dado** que o gestor financeiro conferiu o extrato prévio consolidado,<br>**Quando** registrar eventuais ajustes com justificativa formal e confirmar a homologação do lote de competência,<br>**Então** o sistema deve fechar a competência financeira, bloquear os lançamentos contra alterações diretas e emitir o extrato final de conferência supervisionada. |
| **RF07** | **Submeter solicitação de reembolso** | CAR-04 | **Dado** que o colaborador incorreu em despesas operacionais autorizadas a serviço da DUOC,<br>**Quando** preencher o formulário informando valor, categoria de despesa e contrato,<br>**Então** o sistema deve registrar a solicitação com status "Pendente de Análise", aplicando a obrigatoriedade do comprovante fiscal digitalizado conforme a regra de negócio (RN06). |
| **RF08** | **Deliberar solicitação de reembolso** | CAR-04 | **Dado** que o coordenador técnico ou financeiro acessa a fila de solicitações pendentes dos contratos sob sua alçada,<br>**Quando** inspecionar a despesa e deferir ("Aprovado") ou indeferir ("Reprovado" com parecer) o pedido,<br>**Então** o sistema deve registrar a deliberação, atualizar o status do reembolso e notificar o solicitante. |
| **RF21** | **Estornar fechamento financeiro** | CAR-03 | **Dado** que o gestor financeiro identificou uma inconsistência em uma competência com fechamento homologado,<br>**Quando** solicitar o estorno do fechamento informando a justificativa formal (RN08, RNF08),<br>**Então** o sistema deve reabrir a competência para retificação, preservar o fechamento original no histórico e registrar o estorno na trilha de auditoria com autor, justificativa e data/hora. |
| **RF27** | **Configurar tabela de valores de diárias técnicas** | CAR-03 | **Dado** que o gestor financeiro precisa parametrizar os valores utilizados no cálculo de diárias técnicas,<br>**Quando** cadastrar ou atualizar uma categoria de diária informando valor e período de vigência,<br>**Então** o sistema deve armazenar a parametrização e utilizar o valor vigente nas rotinas financeiras correspondentes (RN25). |
| **RF28** | **Submeter solicitação de adiantamento operacional** | CAR-04 | **Dado** que o colaborador possui uma despesa operacional autorizada vinculada a um contrato ativo,<br>**Quando** preencher a solicitação informando valor, categoria, contrato e justificativa,<br>**Então** o sistema deve registrar o adiantamento com status "Pendente de Análise" e disponibilizá-lo para deliberação do responsável (RN26). |
| **RF29** | **Deliberar solicitação de adiantamento operacional** | CAR-04 | **Dado** que o responsável financeiro acessa uma solicitação de adiantamento com status "Pendente de Análise",<br>**Quando** aprovar ou reprovar a solicitação, registrando justificativa em caso de reprovação,<br>**Então** o sistema deve atualizar o status da solicitação, registrar a deliberação e notificar o solicitante (RN27). |

### Regras de Negócio

1. **RN05 — Homologação Prévia Mandatória:** O sistema consolida exclusivamente apontamentos de RVT e horas técnicas que possuam status prévio de "Homologado" pelo gestor responsável.
2. **RN06 — Obrigatoriedade de Comprovante Fiscal:** Nenhuma solicitação de reembolso pode ser submetida sem um comprovante fiscal digital legível anexado, observados os formatos e o tamanho definidos no RNF07.
3. **RN07 — Limite do Montante Reembolsável:** O sistema impede que o valor aprovado para reembolso ultrapasse o valor nominal discriminado no documento fiscal comprobatório.
4. **RN08 — Imutabilidade de Lotes Homologados:** O sistema bloqueia modificações diretas em lotes financeiros homologados, exigindo procedimento formal de estorno com justificativa auditável para qualquer retificação.
5. **RN09 — Vínculo Contratual Obrigatório:** Todo reembolso, adiantamento ou outra despesa operacional deve estar estritamente vinculado a um contrato ativo e a um centro de custos operacional válido.
6. **RN25 — Vigência dos Valores de Diárias Técnicas:** O sistema deve manter os valores parametrizados de diárias técnicas associados às respectivas categorias e períodos de vigência, utilizando exclusivamente o valor vigente para o cálculo financeiro da competência correspondente.
7. **RN26 — Elegibilidade do Adiantamento Operacional:** O sistema permite solicitações de adiantamento somente para colaboradores ativos e despesas vinculadas a contrato ativo, mantendo a solicitação em status "Pendente de Análise" até a deliberação do responsável.
8. **RN27 — Notificação de Pendências Financeiras:** O sistema deve gerar notificação no painel e por e-mail ao responsável sempre que uma solicitação de reembolso ou adiantamento entrar em estado que exija análise ou deliberação, mantendo a pendência identificável até sua resolução.

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
| **RF05** | OE2 | CAR-03 | **CT-M2-01:** Solicitar prévia de fechamento e validar consolidação de apontamentos homologados. |
| **RF06** | OE2 | CAR-03 | **CT-M2-02:** Homologar fechamento financeiro e validar bloqueio de edições subsequentes. |
| **RF07** | OE2 | CAR-04 | **CT-M2-03:** Submeter solicitação de reembolso com vínculo a contrato ativo e validar anexação fiscal obrigatória. |
| **RF08** | OE2 | CAR-04 | **CT-M2-04:** Deliberar solicitação de reembolso com registro de parecer justificatório. |
| **RNF05** | OE2 | CAR-03 | **CT-M2-05:** Medir tempo de processamento do fechamento para 500 lançamentos (meta ≤ 5,0 s). |
| **RNF06** | OE2 | CAR-03 | **CT-M2-06:** Validar exatidão monetária centesimal com tolerância zero (discrepância R$ 0,00). |
| **RNF07** | OE2 | CAR-04 | **CT-M2-07:** Testar rejeição automática de arquivos corrompidos, acima de 5 MB ou com extensões não homologadas. |
| **RNF08** | OE2 | CAR-03 | **CT-M2-08:** Verificar bloqueio de estorno sem preenchimento de justificativa formal auditável. |
| **RF21** | OE2 | CAR-03 | **CT-M2-09:** Estornar fechamento homologado com justificativa formal e validar reabertura da competência, preservação do fechamento original e registro na trilha de auditoria. |
| **RF27** | OE2 | CAR-03 | **CT-M2-10:** Cadastrar ou atualizar uma categoria de diária técnica com valor e período de vigência e validar a utilização do valor vigente correspondente. |
| **RF28** | OE2 | CAR-04 | **CT-M2-11:** Submeter solicitação de adiantamento operacional informando valor, categoria, contrato e justificativa e validar o registro com status "Pendente de Análise". |
| **RF29** | OE2 | CAR-04 | **CT-M2-12:** Aprovar e reprovar solicitações de adiantamento operacional, validando atualização de status, registro da deliberação, justificativa em caso de reprovação e notificação ao solicitante. |

---

<a id="oe3-inteligencia-de-custos-por-contrato"></a>
<a id="oe3"></a>
## OE3 — Inteligência de Custos por Contrato

Esta seção detalha os requisitos da **DUOC Finance** associados ao **OE3 — Transparecer as informações sobre os Custos por Contrato**. O módulo cobre as características **CAR-05 — Apropriação e Rastreabilidade de Custos por Contrato** e **CAR-06 — Painel Analítico de Custo Apropriado e Desvio Orçamentário por Projeto**.

### Requisitos Funcionais

Os requisitos abaixo expressam as **ações analíticas dos gestores** para apropriação, filtragem dinâmica e monitoramento contínuo da saúde financeira das obras.

| Código | Requisito (Ação do Usuário) | CAR relacionada | Critério de Aceitação (BDD) |
| :---: | :--- | :---: | :--- |
| **RF09** | **Apropriar custos operacionais** | CAR-05 | **Dado** que existem apontamentos técnicos e diárias previamente apurados e homologados vinculados a contratos ativos,<br>**Quando** o gestor acionar a rotina de apropriação de custos da competência,<br>**Então** o sistema deve alocar os montantes financeiros aos respectivos contratos sem duplicar ou sobrepor relatórios de folha CLT legados. |
| **RF10** | **Consultar rastreabilidade de custos** | CAR-05 | **Dado** que um custo operacional está apropriado a determinado contrato,<br>**Quando** o gestor consultar o detalhamento daquela linha de despesa,<br>**Então** o sistema deve exibir a rastreabilidade integral da origem (apontamento, executor, data/hora da homologação e gestor responsável). |
| **RF11** | **Filtrar indicadores de custos** | CAR-06 | **Dado** que um usuário autorizado acessa o painel de inteligência de custos,<br>**Quando** aplicar simultaneamente filtros por intervalo de período, contrato, colaborador e centro de custo,<br>**Então** o sistema deve recalcular dinamicamente os valores acumulados e atualizar os indicadores e gráficos analíticos correspondentes de acordo com a combinação de filtros selecionada. |
| **RF12** | **Monitorar execução orçamentária** | CAR-06 | **Dado** que um contrato possui meta orçamentária previamente parametrizada,<br>**Quando** o gestor acessar a visão executiva de acompanhamento do projeto,<br>**Então** o sistema deve exibir o montante previsto, o realizado, o valor do desvio financeiro e o percentual de execução orçamentária, destacando visualmente alertas de extrapolação. |
| **RF30** | **Consultar comparativo histórico de custos entre contratos** | CAR-05 | **Dado** que o gestor possui acesso aos dados de custos de contratos ativos ou encerrados,<br>**Quando** selecionar dois ou mais contratos e um período de comparação,<br>**Então** o sistema deve apresentar os custos apropriados de cada contrato e as respectivas variações absolutas e percentuais no período selecionado (RN28). |
| **RF31** | **Configurar alertas de execução orçamentária** | CAR-06 | **Dado** que o gestor possui uma meta orçamentária parametrizada para um contrato,<br>**Quando** definir o percentual de execução que deve disparar um alerta,<br>**Então** o sistema deve registrar a configuração e emitir o alerta correspondente no painel e por e-mail quando o percentual de execução atingir ou ultrapassar o limite definido (RN29). |

### Regras de Negócio

1. **RN10 — Condição de Homologação para Apropriação:** O sistema permite apropriação financeira em contratos estritamente a partir de registros e despesas previamente homologados pela coordenação.
2. **RN11 — Vínculo Contratual Mandatório:** O sistema bloqueia a apropriação de despesas sem vínculo estrito a um contrato ativo da DUOC, impedindo a existência de custos órfãos.
3. **RN12 — Versionamento de Apropriações:** Alterações retroativas em apontamentos já apropriados preservam o histórico da versão anterior e exigem nova homologação formal quando alterarem valores monetários.
4. **RN13 — Cálculo Padronizado de Execução Orçamentária:** O sistema calcula o percentual de execução orçamentária estritamente pela equação `(Custo Apropriado Acumulado / Orçamento Previsto) * 100`.
5. **RN14 — Segregação de Visualização Salarial:** O sistema oculta automaticamente campos de taxas salariais individuais e valores nominais de diárias para usuários que não possuam perfil de gestão ou diretoria.
6. **RN28 — Comparativo Histórico de Custos:** O sistema deve calcular a variação absoluta e percentual dos custos apropriados entre os contratos e períodos selecionados, utilizando os valores consolidados e homologados disponíveis na base.
7. **RN29 — Disparo de Alertas Orçamentários:** O sistema deve disparar alertas quando o percentual de execução orçamentária de um contrato atingir ou ultrapassar o limite configurado, registrando o evento e mantendo a notificação disponível no painel até sua resolução ou reconhecimento.


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
| **RF11** | OE3 | CAR-06 | **CT-M3-03:** Aplicar simultaneamente filtros por período, contrato, colaborador e centro de custo e validar o recálculo dinâmico dos indicadores e gráficos correspondentes. |
| **RF12** | OE3 | CAR-06 | **CT-M3-04:** Monitorar painel orçamentário e validar exibição de alertas de extrapolação e percentuais. |
| **RNF09** | OE3 | CAR-06 | **CT-M3-05:** Medir tempo de renderização do painel analítico sob carga de 10.000 registros (meta ≤ 3,0 s). |
| **RNF10** | OE3 | CAR-05/CAR-06 | **CT-M3-06:** Bloquear requisições analíticas fora da alçada do perfil com HTTP 403 Forbidden. |
| **RNF11** | OE3 | CAR-05 | **CT-M3-07:** Validar atomicidade transacional e ausência de inconsistências em apropriações concorrentes. |
| **RNF12** | OE3 | CAR-06 | **CT-M3-08:** Inspecionar responsividade e ausência de *scroll* horizontal em resoluções de *desktop* e *tablet*. |
| **RF30** | OE3 | CAR-05 | **CT-M3-09:** Selecionar dois ou mais contratos e um período de comparação e validar a apresentação dos custos apropriados, das variações absolutas e das variações percentuais. |
| **RF31** | OE3 | CAR-06 | **CT-M3-10:** Configurar um limite de execução orçamentária para um contrato e validar o disparo do alerta no painel e por e-mail quando o percentual atingir ou ultrapassar o valor definido. |

---

<a id="oe4-governanca-seguranca-e-rastreabilidade"></a>
<a id="oe4"></a>
## OE4 — Governança, Segurança e Rastreabilidade

Esta seção detalha os requisitos da **DUOC Finance** associados ao **OE4 — Garantir Segurança e Governança de Dados**. O módulo cobre as características **CAR-07 — Controle de Acesso Baseado em Papéis (RBAC)** e **CAR-08 — Trilha de Auditoria e Histórico de Operações Sensíveis**.

### Requisitos Funcionais

Os requisitos abaixo expressam as **ações dos usuários** para autenticação corporativa, gestão de permissões e auditoria probatória de eventos.

| Código | Requisito (Ação do Usuário) | CAR relacionada | Critério de Aceitação (BDD) |
| :---: | :--- | :---: | :--- |
| **RF13** | **Efetuar login no sistema** | CAR-07 | **Dado** que o colaborador informa suas credenciais corporativas cadastradas (e-mail e senha),<br>**Quando** solicitar a autenticação na plataforma,<br>**Então** o sistema deve autenticar a sessão e emitir um token de acesso temporário com permissões do perfil do usuário, retornando mensagem genérica de erro em caso de credenciais inválidas. |
| **RF14** | **Gerenciar perfis de acesso** | CAR-07 | **Dado** que o administrador precisa configurar as permissões de acesso de um usuário,<br>**Quando** atribuir um papel (Diarista/Técnico de Campo, Gestor de Contrato, Analista Financeiro, Administrador) e salvar as permissões,<br>**Então** o sistema deve aplicar as alçadas de restrição imediatamente a todas as telas e rotas de API da aplicação (RN16). |
| **RF15** | **Consultar trilha de auditoria** | CAR-08 | **Dado** que um usuário com perfil de auditoria precisa averiguar alterações cadastrais ou financeiras,<br>**Quando** pesquisar no log de auditoria aplicando filtros por período, usuário ou tipo de operação,<br>**Então** o sistema deve listar os eventos correspondentes exibindo autor (quem), operação executada (o quê) e carimbo temporal UTC (quando), permitindo ainda filtrar por módulo/CAR afetado e por faixa de valor monetário da operação, quando aplicável. |
| **RF16** | **Exportar relatório de auditoria** | CAR-08 | **Dado** que o administrador precisa emitir comprovação probatória de alterações no sistema,<br>**Quando** selecionar os eventos auditados e solicitar a exportação do relatório consolidado,<br>**Então** o sistema deve gerar um dossiê em formato estruturado (PDF/CSV) contendo o histórico integral e imutável das operações para fins de conformidade legal e trabalhista (CLT Art. 11). |
| **RF17** | **Recuperar credenciais de acesso** | CAR-07 | **Dado** que o colaborador esqueceu sua senha de acesso e não consegue se autenticar,<br>**Quando** solicitar a recuperação informando o e-mail corporativo cadastrado,<br>**Então** o sistema deve enviar ao e-mail informado um link de redefinição de senha válido por 30 minutos e de uso único, sem revelar se o e-mail existe ou não na base (evitando enumeração de usuários). |
| **RF18** | **Encerrar sessão manualmente** | CAR-07 | **Dado** que o colaborador está autenticado no sistema,<br>**Quando** solicitar o encerramento manual da sessão (logout),<br>**Então** o sistema deve invalidar imediatamente o token de acesso atual e redirecionar o usuário para a tela de login. |
| **RF23** | **Bloquear acesso após tentativas falhas consecutivas** | CAR-07 | **Dado** que um usuário tenta autenticar com credenciais inválidas,<br>**Quando** atingir 5 tentativas falhas consecutivas dentro de 15 minutos,<br>**Então** o sistema deve bloquear temporariamente o login daquela conta por 30 minutos, exibindo mensagem informativa sem revelar se o erro foi de e-mail ou senha (RN20). |
| **RF24** | **Expirar senha periodicamente e impedir reutilização** | CAR-07 | **Dado** que a senha de um usuário atingiu 90 dias desde a última alteração,<br>**Quando** o usuário tentar autenticar,<br>**Então** o sistema deve exigir a definição de uma nova senha antes de liberar o acesso, bloqueando a reutilização de qualquer uma das últimas 5 senhas já utilizadas (RN21). |
### Regras de Negócio

1. **RN15 — Autenticação Mandatória com Token Válido:** O sistema exige token temporário válido e não expirado para qualquer requisição a recursos e dados protegidos.
2. **RN16 — Princípio do Menor Privilégio (RBAC):** O sistema intercepta automaticamente requisições e segrega visualizações: colaboradores de campo acessam somente seus próprios lançamentos; gestores acessam contratos sob sua responsabilidade; e administradores gerenciam parametrizações globais.
3. **RN17 — Atomicidade de Gravação na Auditoria:** O sistema executa a gravação da entrada de log de auditoria na mesma transação atômica da operação de escrita de dados, revertendo a transação se o log falhar.
4. **RN18 — Imutabilidade Estrita (*Append-Only*):** Os registros da trilha de auditoria são somente de inserção: o sistema não permite, para nenhum perfil de usuário, a alteração ou a exclusão de eventos já registrados.
5. **RN19 — Prazo Prescricional de Retenção de Logs:** O sistema impede o expurgo de registros de auditoria operacional e financeira com tempo de retenção inferior a 5 anos (1.825 dias), atendendo ao prazo prescricional trabalhista (Artigo 11 da CLT).
6. **RN20 — Limite de Tentativas de Autenticação:** O sistema contabiliza tentativas falhas de login por conta e aplica bloqueio temporário ao atingir o limite configurado, resetando o contador após login bem-sucedido.
7. **RN21 — Política de Expiração e Histórico de Senhas:** O sistema mantém hash das últimas 5 senhas utilizadas por usuário, impedindo sua reutilização, e força redefinição a cada 90 dias corridos.

### Requisitos Não Funcionais

| Código | Requisito Verificável | URPS+ | Sommerville | Critério Mensurável |
| :---: | :--- | :--- | :--- | :--- |
| **RNF13** | **Expirar token de acesso temporário em no máximo 8 horas** | Security (+) (Segurança) | Requisito do Produto — Confiabilidade/Segurança | Em 100% dos testes de segurança automatizados, requisições submetidas com tokens emitidos há mais de 8 horas (28.800 segundos) devem ser sumariamente rejeitadas com código HTTP 401 Unauthorized. |
| **RNF14** | **Validar perfil de autorização em 100% das rotas de API com dados sensíveis** | Security (+) (Segurança) | Requisito Externo — Legislativo/Regulamentar (LGPD) | Cobertura de 100% das rotas de backend que trafegam dados financeiros ou pessoais sensíveis por filtros de permissão RBAC, com resposta obrigatória HTTP 403 Forbidden para papéis não autorizados. |
| **RNF15** | **Garantir atomicidade transacional na gravação de logs de auditoria** | Reliability (Confiabilidade) | Requisito do Produto — Confiabilidade/Dependabilidade | Em 100% das operações de escrita disparadas contra dados de pessoal e financeiros na suíte de testes, uma entrada correspondente de auditoria deve ser confirmada na mesma transação com taxa de perda zero. |
| **RNF16** | **Reter registros de auditoria por no mínimo 5 anos contra expurgo indevido** | Supportability (Suportabilidade) / Legal | Requisito Externo — Legislativo (Art. 11 da CLT / Fiscal) | Inexistência comprovada por análise estática e testes de vulnerabilidade de comandos ou rotinas que permitam a deleção de registros com tempo de retenção inferior a 5 anos (1.825 dias). |
| **RNF17** | **Realizar backup automático diário com restauração verificada** | Reliability (Confiabilidade) | Requisito do Produto — Confiabilidade/Dependabilidade | O sistema deve executar backup automático completo diário do banco de dados e dos comprovantes anexados, reter as cópias por no mínimo 30 dias e verificar a integridade de 100% dos backups gerados; a restauração completa em ambiente de teste deve ser concluída em até 4 horas, com perda máxima de dados de 24 horas. |

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
| **RF17** | OE4 | CAR-07 | **CT-M4-09:** Solicitar recuperação de senha e validar envio do link com validade de 30 minutos e uso único, sem revelar a existência do e-mail. |
| **RF18** | OE4 | CAR-07 | **CT-M4-10:** Encerrar a sessão manualmente e validar invalidação imediata do token e redirecionamento para a tela de login. |
| **RNF17** | OE4 | CAR-08 | **CT-M4-11:** Executar o backup diário, verificar a integridade e restaurar em ambiente de teste em até 4 horas, confirmando perda máxima de 24 horas de dados e retenção de 30 dias. |
| **RF23** | OE4 | CAR-07 | **CT-M4-12:** Simular 5 tentativas de login inválidas em 15 minutos e validar bloqueio temporário de 30 minutos da conta. |
| **RF24** | OE4 | CAR-07 | **CT-M4-13:** Simular senha com 90 dias de uso e validar exigência de redefinição; tentar reutilizar uma das últimas 5 senhas e validar bloqueio. |

---

<a id="requisitos-nao-funcionais-transversais"></a>
## Requisitos Não Funcionais Transversais

Os requisitos abaixo aplicam-se à plataforma como um todo, não estando vinculados a um único Objetivo Específico.

### Requisitos Não Funcionais

| Código | Requisito Verificável | URPS+ | Sommerville | Critério Mensurável |
| :---: | :--- | :--- | :--- | :--- |
| **RNF18** | **Garantir disponibilidade mínima mensal do sistema** | Reliability (Confiabilidade) | Requisito do Produto — Confiabilidade | Disponibilidade mínima de 99,5% ao mês, medida por monitoramento externo automatizado, com janelas de manutenção programada comunicadas com no mínimo 24h de antecedência e fora do horário comercial (8h-18h). |
| **RNF19** | **Garantir acessibilidade digital nas interfaces do sistema** | Usability (Usabilidade) | Requisito do Produto — Usabilidade | 100% dos formulários com navegação completa por teclado e rótulos ARIA; contraste mínimo de 4.5:1 em texto, validado por ferramenta automatizada (ex.: axe-core) sem erros críticos, alinhado a WCAG 2.1 nível AA. |
| **RNF20** | **Validar integridade de payloads em todas as rotas de escrita da API** | Reliability / Security (+) | Requisito do Produto — Confiabilidade | 100% das requisições POST/PUT/PATCH são validadas contra schema de dados antes da persistência; payload malformado retorna HTTP 400 com mensagem de erro estruturada, sem exceção não tratada. |

### Matriz de Rastreabilidade

| Requisito | Objetivo Específico | Característica | Caso de Teste |
| :---: | :---: | :---: | :--- |
| **RNF18** | Transversal | — | **CT-TRANS-01:** Monitorar uptime mensal e validar disponibilidade ≥ 99,5%, com manutenções comunicadas com antecedência. |
| **RNF19** | Transversal | — | **CT-TRANS-02:** Rodar ferramenta automatizada de acessibilidade em todos os formulários e validar ausência de erros críticos (WCAG 2.1 AA) e navegação completa por teclado. |
| **RNF20** | Transversal | — | **CT-TRANS-03:** Submeter payloads malformados a todas as rotas de escrita da API e validar rejeição HTTP 400 estruturada, sem exceção não tratada. |

---

<a id="matriz-sintese-geral-de-rastreabilidade"></a>
## 8.3 Matriz-Síntese Geral de Rastreabilidade

A matriz a seguir consolida a rastreabilidade bidirecional global entre os Objetivos Específicos (OE), as Características do Produto (CAR), os Requisitos Funcionais (RF), os Requisitos Não Funcionais (RNF) e a suíte de Casos de Teste (CT) do sistema:

| Objetivo Específico (OE) | Características Cobertas (CAR) | Requisitos Funcionais (Ação do Usuário) | Requisitos Não Funcionais (RNF) | Casos de Teste (CT) |
| :--- | :--- | :--- | :--- | :--- |
| **OE1 — Padronizar e Unificar os Dados** | CAR-01, CAR-02, CAR-09 | RF01, RF02, RF03, RF04, RF19, RF20, RF22, RF25, RF26 | RNF01, RNF02, RNF03, RNF04 | CT-M1-01 a CT-M1-13 |
| **OE2 — Aumentar a Eficiência Administrativo-Financeira** | CAR-03, CAR-04 | RF05, RF06, RF07, RF08, RF21, RF27, RF28, RF29 | RNF05, RNF06, RNF07, RNF08 | CT-M2-01 a CT-M2-12 |
| **OE3 — Transparecer os Custos por Contrato** | CAR-05, CAR-06 | RF09, RF10, RF11, RF12, RF30, RF31 | RNF09, RNF10, RNF11, RNF12 | CT-M3-01 a CT-M3-10 |
| **OE4 — Garantir Segurança e Governança de Dados** | CAR-07, CAR-08 | RF13, RF14, RF15, RF16, RF17, RF18, RF23, RF24 | RNF13, RNF14, RNF15, RNF16, RNF17 | CT-M4-01 a CT-M4-13 |
| **Transversal** | — | — | RNF18, RNF19, RNF20 | CT-TRANS-01 a CT-TRANS-03 |

---

<a id="catalogo-geral-consolidado"></a>

## 8.4 Catálogo Geral Consolidado de Requisitos

Esta seção consolida os requisitos funcionais e não funcionais do **DUOC Finance** em uma visão única, permitindo a consulta rápida de sua identificação, vínculo estratégico, alocação modular e participação preliminar no MVP.

A indicação de MVP apresentada neste catálogo representa o recorte atual do produto e deverá permanecer sincronizada com a priorização formal apresentada no Capítulo 10 — Backlog do Produto e MVP.

### 8.4.1 Catálogo de Requisitos Funcionais

| Código | Nome | Módulo / OE | CAR | Prioridade / MVP | Resumo |
| :---: | :--- | :---: | :---: | :---: | :--- |
| **RF01** | Cadastrar colaborador | Módulo 1 / OE1 | CAR-01 | MVP (preliminar) | Permite ao RH cadastrar colaboradores com dados pessoais, bancários e trabalhistas, garantindo unicidade por CPF. |
| **RF02** | Atualizar cadastro de colaborador | Módulo 1 / OE1 | CAR-01 | MVP (preliminar) | Permite atualizar informações cadastrais e bancárias, propagando as alterações e preservando o histórico. |
| **RF03** | Registrar movimentação funcional | Módulo 1 / OE1 | CAR-01 | MVP (preliminar) | Registra afastamentos, férias e desligamentos, atualizando a situação funcional do colaborador. |
| **RF04** | Submeter apontamento de campo | Módulo 1 / OE1 | CAR-02 | MVP (preliminar) | Permite registrar horas trabalhadas e atividades executadas em obra ou visita técnica. |
| **RF05** | Solicitar prévia de fechamento | Módulo 2 / OE2 | CAR-03 | MVP (preliminar) | Consolida apontamentos homologados e apresenta uma prévia das diárias e comissões da competência. |
| **RF06** | Homologar fechamento financeiro | Módulo 2 / OE2 | CAR-03 | MVP (preliminar) | Permite ao gestor confirmar o fechamento financeiro e bloquear alterações diretas posteriores. |
| **RF07** | Submeter solicitação de reembolso | Módulo 2 / OE2 | CAR-04 | MVP (preliminar) | Permite ao colaborador solicitar reembolso de despesas operacionais vinculadas a contratos. |
| **RF08** | Deliberar solicitação de reembolso | Módulo 2 / OE2 | CAR-04 | MVP (preliminar) | Permite ao responsável aprovar ou rejeitar solicitações de reembolso e registrar a decisão. |
| **RF09** | Apropriar custos operacionais | Módulo 3 / OE3 | CAR-05 | MVP (preliminar) | Aloca custos provenientes de apontamentos e diárias homologadas aos respectivos contratos. |
| **RF10** | Consultar rastreabilidade de custos | Módulo 3 / OE3 | CAR-05 | MVP (preliminar) | Permite identificar a origem de cada custo apropriado a um contrato. |
| **RF11** | Filtrar indicadores de custos | Módulo 3 / OE3 | CAR-06 | MVP (preliminar) | Permite combinar filtros de período, contrato, colaborador e centro de custo nos indicadores financeiros. |
| **RF12** | Monitorar execução orçamentária | Módulo 3 / OE3 | CAR-06 | MVP (preliminar) | Exibe valores previstos, realizados, desvios e percentual de execução orçamentária dos contratos. |
| **RF13** | Efetuar login no sistema | Módulo 4 / OE4 | CAR-07 | MVP (preliminar) | Autentica usuários por credenciais corporativas e cria uma sessão com permissões associadas ao perfil. |
| **RF14** | Gerenciar perfis de acesso | Módulo 4 / OE4 | CAR-07 | MVP (preliminar) | Permite ao administrador atribuir papéis e permissões de acesso aos usuários. |
| **RF15** | Consultar trilha de auditoria | Módulo 4 / OE4 | CAR-08 | MVP (preliminar) | Permite consultar eventos auditáveis por período, usuário, operação, módulo e demais filtros disponíveis. |
| **RF16** | Exportar relatório de auditoria | Módulo 4 / OE4 | CAR-08 | MVP (preliminar) | Gera relatórios estruturados com o histórico de operações auditadas. |
| **RF17** | Recuperar credenciais de acesso | Módulo 4 / OE4 | CAR-07 | MVP (preliminar) | Permite redefinir a senha por meio de link temporário enviado ao e-mail cadastrado. |
| **RF18** | Encerrar sessão manualmente | Módulo 4 / OE4 | CAR-07 | MVP (preliminar) | Permite ao usuário efetuar logout e invalidar sua sessão ativa. |
| **RF19** | Consultar apontamentos registrados | Módulo 1 / OE1 | CAR-02 | MVP (preliminar) | Permite ao colaborador consultar seus próprios apontamentos e respectivos status. |
| **RF20** | Importar presenças homologadas | Módulo 1 / OE1 | CAR-09 | MVP (preliminar) | Importa registros homologados do auditor.ia e os associa a colaboradores, contratos e competências. |
| **RF21** | Estornar fechamento financeiro | Módulo 2 / OE2 | CAR-03 | MVP (preliminar) | Permite reabrir uma competência homologada mediante justificativa e registro de auditoria. |
| **RF22** | Anexar evidências e geolocalização ao apontamento | Módulo 1 / OE1 | CAR-02 | MVP (preliminar) | Permite anexar fotos e comprovantes ao apontamento e associar geolocalização quando disponível. |
| **RF23** | Bloquear acesso após tentativas falhas consecutivas | Módulo 4 / OE4 | CAR-07 | MVP (preliminar) | Bloqueia temporariamente a autenticação após repetidas tentativas inválidas. |
| **RF24** | Expirar senha periodicamente e impedir reutilização | Módulo 4 / OE4 | CAR-07 | MVP (preliminar) | Exige renovação periódica da senha e impede a reutilização das últimas senhas cadastradas. |
| **RF25** | Cadastrar tipo de contratação do colaborador | Módulo 1 / OE1 | CAR-01 | MVP (preliminar) | Permite classificar o colaborador como Diarista, CLT ou Prestador de Serviço para aplicação das regras correspondentes. |
| **RF26** | Consultar histórico de alterações cadastrais e bancárias | Módulo 1 / OE1 | CAR-01 | MVP (preliminar) | Permite consultar versões anteriores dos dados cadastrais e bancários, incluindo autoria e data da alteração. |
| **RF27** | Configurar tabela de valores de diárias técnicas | Módulo 2 / OE2 | CAR-03 | MVP (preliminar) | Permite cadastrar valores de diárias técnicas, categorias e períodos de vigência utilizados nos cálculos financeiros. |
| **RF28** | Submeter solicitação de adiantamento operacional | Módulo 2 / OE2 | CAR-04 | MVP (preliminar) | Permite solicitar antecipadamente recursos para despesas operacionais vinculadas a um contrato. |
| **RF29** | Deliberar solicitação de adiantamento operacional | Módulo 2 / OE2 | CAR-04 | MVP (preliminar) | Permite ao gestor aprovar ou rejeitar adiantamentos e comunicar a decisão ao solicitante. |
| **RF30** | Consultar comparativo histórico de custos entre contratos | Módulo 3 / OE3 | CAR-05 | Evolutivo | Permite comparar custos consolidados de diferentes contratos e suas variações históricas. |
| **RF31** | Configurar alertas de execução orçamentária | Módulo 3 / OE3 | CAR-06 | Evolutivo | Permite definir limites de execução orçamentária e gerar alertas quando esses limites forem atingidos. |

### 8.4.2 Catálogo de Requisitos Não Funcionais

| Código | Requisito | Módulo / Transversal | URPS+ | Sommerville | Critério Mensurável | Alocação no MVP |
| :---: | :--- | :---: | :--- | :--- | :--- | :---: |
| **RNF01** | Operar em modo offline para coleta de dados em canteiros sem conectividade | Módulo 1 / OE1 | Reliability | Requisito do Produto — Confiabilidade | Armazenar localmente pelo menos 100 apontamentos e sincronizar em até 30 s após o restabelecimento da conexão. | Evolutivo |
| **RNF02** | Disponibilizar consulta cadastral com tempo de resposta ágil | Módulo 1 / OE1 | Performance | Requisito do Produto — Desempenho | Busca e renderização da ficha em até 2,0 s em 95% das requisições sob carga nominal. | MVP |
| **RNF03** | Proteger dados pessoais e cadastrais com criptografia em repouso e em trânsito | Módulo 1 / OE1 | Security (+) | Requisito do Produto — Segurança | Dados sensíveis protegidos com AES-256 e comunicações realizadas com TLS 1.3. | MVP |
| **RNF04** | Garantir usabilidade e agilidade no preenchimento de apontamentos | Módulo 1 / OE1 | Usability | Requisito do Produto — Usabilidade | Apontamento concluído em até 5 passos/telas e taxa de sucesso ≥ 90% em teste de usabilidade. | MVP |
| **RNF05** | Processar a rotina de fechamento financeiro com alta eficiência | Módulo 2 / OE2 | Performance | Requisito do Produto — Eficiência/Desempenho | Processar até 500 apontamentos em no máximo 5,0 s em 95 de 100 execuções. | MVP |
| **RNF06** | Garantir exatidão aritmética centesimal em cálculos monetários | Módulo 2 / OE2 | Reliability | Requisito do Produto — Confiabilidade/Acurácia | Discrepância monetária de exatamente R$ 0,00 em comparação ao gabarito contábil. | MVP |
| **RNF07** | Validar integridade, tamanho e formato de comprovantes | Módulo 2 / OE2 | Supportability / Security (+) | Requisito do Produto — Suportabilidade | Bloquear arquivos acima de 5 MB ou em formato diferente de PDF, PNG e JPEG. | MVP |
| **RNF08** | Exigir justificativa e auditoria em estornos de fechamento | Módulo 2 / OE2 | Security (+) | Requisito do Produto — Segurança/Rastreabilidade | Impedir estorno quando a justificativa estiver ausente ou possuir menos de 15 caracteres. | MVP |
| **RNF09** | Carregar painel analítico em tempo inferior a 3 segundos | Módulo 3 / OE3 | Performance | Requisito do Produto — Eficiência/Desempenho | Renderização completa em até 3,0 s para base de até 10.000 lançamentos e 100 contratos. | MVP |
| **RNF10** | Restringir dados financeiros conforme perfil de acesso | Módulo 3 / OE3 | Security (+) | Requisito do Produto — Segurança da Informação | 100% das consultas não autorizadas devem ser bloqueadas com HTTP 403. | MVP |
| **RNF11** | Garantir consistência transacional ACID na apropriação de custos | Módulo 3 / OE3 | Reliability | Requisito do Produto — Confiabilidade/Dependabilidade | Nenhuma duplicidade ou divergência em 100 testes de operações concorrentes. | MVP |
| **RNF12** | Assegurar responsividade do painel em desktop e tablet | Módulo 3 / OE3 | Usability | Requisito do Produto — Usabilidade | Elementos essenciais devem permanecer utilizáveis em 1024×768 e 768×1024 sem rolagem horizontal. | MVP |
| **RNF13** | Expirar token de acesso temporário em no máximo 8 horas | Módulo 4 / OE4 | Security (+) | Requisito do Produto — Confiabilidade/Segurança | Tokens com mais de 8 horas devem ser rejeitados com HTTP 401 em 100% dos testes. | MVP |
| **RNF14** | Validar autorização em todas as rotas com dados sensíveis | Módulo 4 / OE4 | Security (+) | Requisito Externo — Legislativo/Regulamentar (LGPD) | 100% das rotas sensíveis protegidas por RBAC e acesso indevido retornando HTTP 403. | MVP |
| **RNF15** | Garantir atomicidade na gravação dos logs de auditoria | Módulo 4 / OE4 | Reliability | Requisito do Produto — Confiabilidade/Dependabilidade | Toda escrita em dados sensíveis deve possuir registro de auditoria na mesma transação, com perda zero. | MVP |
| **RNF16** | Reter registros de auditoria por no mínimo 5 anos | Módulo 4 / OE4 | Supportability / Legal | Requisito Externo — Legislativo (Art. 11 da CLT / Fiscal) | Impedir exclusão de registros com retenção inferior a 1.825 dias. | MVP |
| **RNF17** | Realizar backup automático diário com restauração verificada | Módulo 4 / OE4 | Reliability | Requisito do Produto — Confiabilidade/Dependabilidade | Backup diário, retenção mínima de 30 dias, restauração em até 4 h e perda máxima de 24 h. | MVP |
| **RNF18** | Garantir disponibilidade mínima mensal do sistema | Transversal | Reliability | Requisito do Produto — Confiabilidade | Disponibilidade mínima mensal de 99,5%, com manutenção programada comunicada com antecedência. | MVP |
| **RNF19** | Garantir acessibilidade digital nas interfaces | Transversal | Usability | Requisito do Produto — Usabilidade | Navegação por teclado, rótulos ARIA e contraste mínimo 4.5:1, conforme WCAG 2.1 AA. | MVP |
| **RNF20** | Validar integridade de payloads nas rotas de escrita da API | Transversal | Reliability / Security (+) | Requisito do Produto — Confiabilidade | 100% das requisições POST, PUT e PATCH validadas por schema; payload inválido retorna HTTP 400. | MVP |

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 07/09/2026 | Criação e estruturação da página preliminar de requisitos de software (Unidade 2). | Matheus Ribeiro Szervinsk | Matheus Ribeiro Szervinsk |
| `2.0` | 22/09/2026 | Elaboração da especificação de requisitos por módulo: Módulo 1 / OE1 (Gustavo Bonifácio), Módulo 2 / OE2 (Eric Araújo), Módulo 3 / OE3 (Giovana Ferreira) e Módulo 4 / OE4 (Matheus Saraiva). | Gustavo Bonifácio, Eric Araújo, Giovana Ferreira, Matheus Saraiva | Matheus Ribeiro Szervinsk |
| `2.1` | 22/09/2026 | Revisão geral e unificação técnica em documento único: ajuste de abstração de escopo em OE1 e OE2, eliminação de duplicidades, formatação dos critérios de aceitação em BDD e sequenciamento de regras de negócio (RN01 a RN19). | Matheus Ribeiro Szervinsk | Matheus Ribeiro Szervinsk |
| `2.2` | 22/09/2026 | Refinamento conceitual: reestruturação dos 16 RFs como ações do usuário com valor de negócio, migração de rotinas e cálculos para regras de negócio (RN), ajuste do RF07 (reembolso), substituição de alertas por admonitions Material (!!! note) e renderização dos diagramas em imagens de alta definição com suporte a zoom interativo (GLightbox). | Matheus Ribeiro Szervinsk | Lucas Zanetti |
| `2.4` | 24/09/2026 | Vinculação com o artefato de Priorização e MVP (escala 1 a 4 associada ao MoSCoW) e rastreabilidade com a Ata da Reunião 05. | Matheus Ribeiro Szervinsk | Lucas Zanetti |
| `2.5` | 28/09/2026 | Ajustes decorrentes da avaliação por pares (equipe Guerreiros do Backlog): nota sobre as classificações URPS+ e Sommerville (8.1), novos RF17 a RF21 e RNF17, refinamento de RNF01 e RNF04 e atualização das matrizes de rastreabilidade e casos de teste (ver [Feedback dos Requisitos](feedback.md)). | Matheus Saraiva Camargo | Matheus Ribeiro Szervinsk |
| `2.6` | 29/09/2026 | Atualização e alinhamento dos diagramas visuais (Pirâmide de Abstração, Mapeamento de Necessidades e Grafo de Interdependência) com a totalidade dos 21 RFs e 17 RNFs da especificação refinada. | Matheus Ribeiro Szervinsk | Matheus Ribeiro Szervinsk |
| `2.7` | 30/09/2026 | Inclusão do RF22 (Exportar relatório de presenças homologadas) na CAR-09 e caso de teste CT-M1-11; esclarecimento sobre os RNFs transversais na Pirâmide de Abstração; atualização da matriz-síntese de rastreabilidade. | Matheus Ribeiro Szervinsk | Lucas Zanetti |
| `2.8` | 30/09/2026 | Conversão do Mapeamento de Necessidades do Cliente (8.2.2) em tabela analítica completa correlacionando dores (Ishikawa e Rich Picture) com 22 RFs e 17 RNFs; atualização dos diagramas de rastreabilidade (8.2.1 e 8.2.3) com a integralidade dos 22 Requisitos Funcionais. | Matheus Ribeiro Szervinsk | Eric Araújo |
| `2.9` | 07/10/2026 | Adição de visualizadores interativos do Miro (iframes), links alternativos para arquivos vetoriais (SVG) e imagens em alta definição (JPG), e atualização completa das tabelas e diagramas de rastreabilidade. | Gustavo Bonifácio | Matheus Ribeiro Szervinsk |
| `2.3` | 22/09/2026 | Atomização dos requisitos funcionais: simplificação rigorosa dos títulos dos 16 RFs como ações únicas do usuário (Verbo + Objeto), remoção de detalhes operacionais de escopo e conjunções compostas conforme revisão de pares. | Matheus Ribeiro Szervinsk | Lucas Zanetti |
| `2.4` | 28/09/2026 | Ajustes decorrentes da avaliação por pares (equipe Guerreiros do Backlog): nota sobre as classificações URPS+ e Sommerville (8.1), refinamento do RF04, novos RF17 a RF22 e RNF17, refinamento de RNF01 e RNF04, reescrita das RN06 e RN18 e atualização das matrizes de rastreabilidade e casos de teste (ver [Feedback dos Requisitos](feedback.md)). | Matheus Saraiva Camargo | Matheus Szervinsk |
| `2.5` | 06/10/2026 | Expansão do Módulo 4 (OE4) com RF23 e RF24 (política de senha e bloqueio por tentativas falhas), RN20 e RN21, enriquecimento de filtros do RF15, e inclusão da seção de Requisitos Não Funcionais Transversais (RNF18 a RNF20: disponibilidade, acessibilidade e integridade de API). | Matheus Saraiva Camargo | Matheus Ribeiro |
| `2.6` | 07/10/2026 | Expansão dos requisitos dos Módulos 1, 2 e 3 com RF25 a RF31 e RN22 a RN29; refinamento de RF11 e RF22; inclusão de novos casos de teste; atualização da matriz-síntese e criação do Catálogo Geral Consolidado de Requisitos (Seção 8.4). | Matheus Saraiva Camargo | Matheus Ribeiro |
