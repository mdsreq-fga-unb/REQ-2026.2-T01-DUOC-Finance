# Capítulo 8: Requisitos de Software

Este documento consolida a especificação de **requisitos funcionais** e **não funcionais** do sistema ***DUOC Finance***, estruturados modularmente em torno dos **quatro  Objetivos Específicos (OE)** do produto e suas respectivas **Características (CAR)**, definidas no [Capítulo 2: Solução Proposta](../visao-produto/capitulo-2/index.md).

---

## 8.1 Visão Geral e Modelo Metodológico

Para assegurar o rigor analítico, a testabilidade e a rastreabilidade exigidos pela disciplina de Engenharia de Requisitos, a especificação adota os seguintes pilares metodológicos:

- **Requisitos Funcionais (RF):** Representam **ações observáveis e deliberadas do usuário** dentro da aplicação que geram valor de negócio mensurável. Rotinas de cálculo interno, processamentos em segundo plano e validações restritivas não são formulados como RFs isolados, mas sim modelados como regras de negócio condicionantes da ação do usuário. Cada RF traz um **Critério de Aceitação** redigido em texto corrido, que descreve o que o usuário consegue fazer, as regras de negócio que condicionam a ação e o resultado observável que permite verificá-la.
- **Regras de Negócio (RN):** Políticas operacionais, cálculos matemáticos, automatismos do sistema, restrições e invariantes de domínio da **DUOC Arquitetura e Engenharia** que governam a execução das ações dos usuários. As regras são numeradas sequencialmente em escopo global (RN01 a RN29).
- **Requisitos Não Funcionais (RNF):** Atributos de qualidade e restrições técnicas do produto, classificados simultaneamente pelo modelo **URPS+** (*Usability*, *Reliability*, *Performance*, *Supportability* e o modificador `+` para *Security* e Legais) e pela taxonomia de **Sommerville** (Requisitos do Produto e Requisitos Externos). Cada RNF conta com um **Critério Mensurável** baseado em parâmetros objetivos de verificação.
- **Rastreabilidade Bidirecional:** Mapeamento integral entre Objetivos Específicos (OE), Características (CAR), Requisitos (RF/RNF) e Casos de Teste (CT-Mx-xx).

### Estrutura Modular dos Requisitos

| Módulo | Objetivo Específico | Características Cobertas (CAR) | Requisitos Funcionais (Ação do Usuário) | Requisitos Não Funcionais | Casos de Teste |
| :---: | :--- | :---: | :---: | :---: | :---: |
| <span class="mod-badge mod-1">Módulo 1</span> | [**OE1 — Padronização e Unificação de Dados**](#oe1-padronizacao-e-unificacao-de-dados) | CAR-01, CAR-02, CAR-09 | RF01 a RF04, RF19, RF20, RF22, RF25 e RF26 | RNF01 a RNF04 | CT-M1-01 a CT-M1-13 |
| <span class="mod-badge mod-2">Módulo 2</span> | [**OE2 — Eficiência Administrativo-Financeira**](#oe2-eficiencia-administrativo-financeira) | CAR-03, CAR-04 | RF05 a RF08, RF21, RF27, RF28 e RF29 | RNF05 a RNF08 | CT-M2-01 a CT-M2-12 |
| <span class="mod-badge mod-3">Módulo 3</span> | [**OE3 — Inteligência de Custos por Contrato**](#oe3-inteligencia-de-custos-por-contrato) | CAR-05, CAR-06 | RF09 a RF12, RF30 e RF31 | RNF09 a RNF12 | CT-M3-01 a CT-M3-10 |
| <span class="mod-badge mod-4">Módulo 4</span> | [**OE4 — Governança, Segurança e Rastreabilidade**](#oe4-governanca-seguranca-e-rastreabilidade) | CAR-07, CAR-08 | RF13 a RF18, RF23 e RF24 | RNF13 a RNF17 | CT-M4-01 a CT-M4-13 |
| <span class="mod-badge mod-trans">Universal</span> | [**Requisitos de plataforma não vinculados a um único OE**](#requisitos-nao-funcionais-transversais) | — | — | RNF18 a RNF20 | CT-TRANS-01 a CT-TRANS-03 |

---

## 8.2 Rastreabilidade Estratégica e Diagramas Visuais

A rastreabilidade entre a estratégia corporativa da DUOC e a engenharia de software é formalizada pelos diagramas a seguir.

### Pirâmide de Abstração (Rastreabilidade Vertical)

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
    Abrir Piramide Completo no Miro (Interativo) ↗
  </a>
    &nbsp;|&nbsp;
  <a href="../assets/images/requisitos/piramide_abstracao.jpg"
     target="_blank"
     rel="noopener noreferrer">
    Ver Pirâmide de Abstração em JPG ↗
  </a>
    &nbsp;|&nbsp;
  <a href="../assets/images/piramide_abstracao_vetorizada.svg" 
      target="_blank" 
      rel="noopener noreferrer" 
      download="piramide_abstracao_vetorizada.svg">
    Baixar Piramide em Vetor (SVG Alta Resolução) ↗
</a>
</p>

!!! note "Rastreabilidade dos Requisitos Não Funcionais na Pirâmide de Abstração"
    O grafo estrutural da Pirâmide de Abstração acima formaliza a descendência vertical estrita do escopo observável e das ações do usuário (**Objetivo Geral ➔ Objetivos Específicos ➔ Características ➔ Requisitos Funcionais**). Os **Requisitos Não Funcionais (RNFs)**, por constituírem atributos de qualidade sistêmica e restrições arquiteturais transversais (*cross-cutting concerns*), não figuram como folhas exclusivas de uma única funcionalidade, mas qualificam as características e o produto como um todo (por exemplo, segurança e integridade no RNF03 e RNF14, usabilidade no RNF04 e confiabilidade no RNF06). A amarração individualizada e auditável de cada um dos 20 RNFs (17 vinculados a OEs e 3 transversais de plataforma) às CARs e às metas de negócio é detalhada estruturadamente na **Seção 8.3 (Especificação Modular dos Requisitos)** e na **Seção 8.4 (Matriz-Síntese Geral de Rastreabilidade)**.

---

## 8.3 Especificação Modular dos Requisitos

Esta seção consolida a especificação detalhada dos requisitos do ***DUOC Finance***, decomposta em **quatro módulos de negócio** que respondem diretamente aos Objetivos Específicos (OE1 a OE4) e suas Características de Produto (CAR), além de uma aba dedicada aos **Requisitos Não Funcionais Transversais** da plataforma.

Para cada módulo são apresentados:

- **Requisitos Funcionais (RF):** Ações deliberadas e observáveis do usuário orientadas a valor de negócio, com Critérios de Aceitação em texto corrido e verificável.
- **Regras de Negócio (RN):** Políticas operacionais, restrições e cálculos que governam a execução das ações dos usuários.
- **Requisitos Não Funcionais (RNF):** Atributos de qualidade e restrições técnicas classificados em **URPS+** e **Sommerville**, com Critérios Mensuráveis quantitativos.
- **Matriz de Rastreabilidade do Módulo:** Mapeamento explícito entre Requisito, OE, CAR e o respectivo Caso de Teste (CT) executável.

Utilize as abas interativas abaixo para alternar entre os módulos e consultar a especificação completa de cada domínio operacional:

=== "Módulo 1: Padronização e Unificação de Dados (OE1)"

    <div class="module-spec-pane" markdown="1">

    <a id="oe1-padronizacao-e-unificacao-de-dados"></a>
    <a id="oe1"></a>
    ### 8.3.1 Módulo 1 (OE1) — Padronização e Unificação de Dados

    Esta seção detalha os requisitos da **DUOC Finance** associados ao **OE1 — Padronizar e Unificar os Dados**. O módulo cobre as características **CAR-01 — Gestão Cadastral Unificada de Pessoal** e **CAR-02 — Apontamento Móvel de Atividades e Registros de Campo**, além do requisito de integração associado à **CAR-09** (presenças homologadas do *Shifton*).

    !!! note "Alinhamento de Escopo — Ponto Biométrico e Shifton"
        Conforme estabelecido no alinhamento de escopo técnico com a DUOC (Ata de Reunião 02 e CAR-09), o controle formal de frequência biométrica dos colaboradores é suprido externamente pelo sistema *Shifton*. O escopo operacional do DUOC Finance em campo concentra-se estritamente na coleta de apontamentos técnicos de produção por contrato e no preenchimento de Relatórios de Viagem Técnica (RVT).

    #### Requisitos Funcionais

    Os requisitos abaixo expressam as **ações observáveis dos usuários** para gestão da base cadastral e coleta de dados de produção em campo.

    | Código | Requisito (Ação do Usuário) | CAR relacionada | Critério de Aceitação |
    | :---: | :--- | :---: | :--- |
    | **RF01** | **Cadastrar colaborador** | CAR-01 | O RH cadastra um novo profissional informando seus dados pessoais, bancários e trabalhistas, e o sistema grava o registro com um identificador único. Se o CPF informado já existir na base, o cadastro é recusado e nenhum registro novo é criado (RN01). |
    | **RF02** | **Atualizar cadastro de colaborador** | CAR-01 | As alterações nos dados cadastrais ou bancários de um colaborador ativo, salvas pelo gestor de RH, passam a valer imediatamente em todos os módulos que usam esses dados, e a versão anterior da ficha fica guardada no histórico. |
    | **RF03** | **Registrar movimentação funcional** | CAR-01 | O RH registra afastamentos, férias e rescisões, e o status do colaborador é atualizado conforme a movimentação. Em caso de afastamento ou desligamento, o acesso do colaborador à aplicação web de campo é revogado automaticamente (RN04). |
    | **RF04** | **Submeter apontamento de campo** | CAR-02 | Ao final da jornada em obra ou visita técnica, o colaborador envia pela aplicação web no dispositivo móvel as horas trabalhadas e o escopo executado, junto com os anexos do apontamento (RF22). O apontamento fica registrado com status "Pendente de Homologação" e passa a aparecer para a supervisão técnica. |
    | **RF19** | **Consultar apontamentos registrados** | CAR-02 | O colaborador de campo vê apenas os próprios apontamentos (RN16), cada um com data, contrato e status ("Pendente de Homologação", "Homologado" ou "Rejeitado"), e consegue abrir o histórico de qualquer um deles. |
    | **RF20** | **Importar presenças homologadas** | CAR-09 | O analista financeiro escolhe a competência mensal e os contratos e importa as presenças homologadas disponibilizadas pelo painel (*dashboard*) do *Shifton*. Os registros importados ficam vinculados a cada colaborador e contrato na competência escolhida, prontos para a apropriação financeira das horas, e os dados de origem no *Shifton* não são alterados. |
    | **RF22** | **Anexar evidências e geolocalização ao apontamento** | CAR-02 | Durante o preenchimento de um apontamento na aplicação web, o colaborador anexa fotos ou comprovantes da atividade, e o sistema tenta registrar a geolocalização do dispositivo no momento de cada anexo. Arquivos e coordenadas ficam vinculados ao apontamento, a lista de anexos pode ser revisada e qualquer item pode ser removido antes do envio; a falta de localização não impede o anexo (RN24). |
    | **RF25** | **Cadastrar tipo de contratação do colaborador** | CAR-01 | No cadastro ou na atualização de um colaborador, o RH escolhe o tipo de contratação entre Diarista, CLT e Prestador de Serviço, e esse tipo fica vinculado ao perfil, determinando as regras que se aplicam a ele (RN22). |
    | **RF26** | **Consultar histórico de alterações cadastrais e bancárias** | CAR-01 | Usuários com permissão de RH e o próprio colaborador consultam o histórico da ficha, que mostra cada versão anterior dos dados cadastrais e bancários com o campo alterado, o autor e a data/hora da alteração (RN23). |

    #### Regras de Negócio

    1. **RN01 — Unicidade Cadastral por CPF:** O sistema valida compulsoriamente a unicidade do CPF, bloqueando a criação de cadastros duplicados.
    2. **RN02 — Bloqueio Automático de Edição Retroativa:** Apontamentos de campo homologados pela supervisão ou submetidos há mais de 5 dias úteis tornam-se automaticamente bloqueados para edição por usuários de campo.
    3. **RN03 — Validação Cadastral para Lançamentos Financeiros:** O sistema impede a aprovação de qualquer diária, comissão, reembolso ou adiantamento caso o colaborador não esteja com status "Ativo" e dados bancários validados.
    4. **RN04 — Revogação Automática de Acessos:** A transição do status cadastral para "Desligado" ou "Afastado" dispara o cancelamento automático e imediato de tokens e credenciais ativas do usuário na aplicação web em dispositivo móvel.
    5. **RN22 — Tipos de Contratação Válidos:** O sistema restringe o tipo de contratação às opções Diarista, CLT ou Prestador de Serviço, aplicando regras de cálculo de custo específicas por tipo nas rotinas financeiras.
    6. **RN23 — Versionamento Obrigatório de Dados Cadastrais e Bancários:** O sistema preserva toda versão anterior de campo cadastral ou bancário alterado, com autor e carimbo temporal, nunca sobrescrevendo o valor anterior.
    7. **RN24 — Captura de Geolocalização Não Bloqueante:** O sistema tenta capturar a geolocalização do dispositivo no momento do anexo de evidências; caso a permissão seja negada ou a localização esteja indisponível, o anexo prossegue normalmente, sendo sinalizado como "localização não disponível".

    #### Requisitos Não Funcionais

    | Código | Requisito Verificável | URPS+ | Sommerville | Critério Mensurável |
    | :---: | :--- | :--- | :--- | :--- |
    | **RNF01** | **Operar em modo *offline* para coleta de dados em canteiros sem conectividade** | Reliability (Confiabilidade) | Requisito do Produto — Confiabilidade | A aplicação web em dispositivo móvel deve armazenar localmente, sem perda de dados, no mínimo 100 apontamentos com fotos compactadas sem sinal de rede; exibir alerta visual quando o armazenamento local atingir 80% da capacidade; e sincronizar automaticamente em até 30 segundos após restabelecida a conexão. |
    | **RNF02** | **Disponibilizar consulta cadastral com tempo de resposta ágil** | Performance (Desempenho) | Requisito do Produto — Desempenho | O tempo de resposta para busca, paginação e renderização da ficha unificada de qualquer colaborador deve ser inferior ou igual a 2,0 segundos em 95% das requisições sob carga nominal. |
    | **RNF03** | **Proteger dados pessoais e cadastrais com criptografia em repouso e em trânsito** | Security (+) (Segurança) | Requisito do Produto — Segurança | 100% dos dados pessoais sensíveis armazenados em banco devem utilizar criptografia AES-256, e 100% das comunicações de rede devem transitar sob protocolo TLS 1.3. |
    | **RNF04** | **Garantir usabilidade e agilidade no preenchimento de apontamentos de campo** | Usability (Usabilidade) | Requisito do Produto — Usabilidade | O preenchimento completo de um apontamento diário de campo deve ser concluído por usuários em primeiro uso, sem suporte externo ou treinamento prévio, em no máximo 5 passos/telas, com taxa de conclusão bem-sucedida ≥ 90% em teste de usabilidade. |

    #### Matriz de Rastreabilidade do Módulo 1

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
    | **RF20** | OE1 | CAR-09 | **CT-M1-10:** Importar presenças homologadas do *Shifton* para uma competência e validar vínculo por colaborador e contrato, sem alteração dos dados de origem. |
    | **RF22** | OE1 | CAR-02 | **CT-M1-11:** Anexar fotos e comprovantes a um apontamento em preenchimento, validar a tentativa de captura da geolocalização, o vínculo dos arquivos e coordenadas ao registro e a possibilidade de remover anexos antes da submissão, inclusive quando a localização estiver indisponível. |
    | **RF25** | OE1 | CAR-01 | **CT-M1-12:** Cadastrar e atualizar o tipo de contratação de um colaborador com as opções Diarista, CLT e Prestador de Serviço e validar o vínculo correto ao perfil. |
    | **RF26** | OE1 | CAR-01 | **CT-M1-13:** Consultar o histórico de alterações cadastrais e bancárias de um colaborador e validar exibição do valor anterior, autor, data/hora e campo alterado. |

    </div>

=== "Módulo 2: Eficiência Administrativo-Financeira (OE2)"

    <div class="module-spec-pane" markdown="1">

    <a id="oe2-eficiencia-administrativo-financeira"></a>
    <a id="oe2"></a>
    ### 8.3.2 Módulo 2 (OE2) — Eficiência Administrativo-Financeira

    Esta seção detalha os requisitos da **DUOC Finance** associados ao **OE2 — Aumentar a Eficiência Administrativo-Financeira**. O módulo cobre as características **CAR-03 — Motor de Processamento e Fechamento Financeiro** e **CAR-04 — Fluxo Digital de Prestação de Contas e Reembolsos**.

    !!! note "Escopo de Fechamento Financeiro e Rotinas Contábeis"
        O motor financeiro do DUOC Finance apoia estritamente a apuração de diárias técnicas e comissões simplificadas de prestadores de serviços e a gestão ágil de reembolsos. O sistema não substitui as rotinas formais de folha de pagamento CLT nem o cálculo de encargos e provisões legais (INSS, FGTS, IRRF), que permanecem nos softwares contábeis legados da DUOC.

    #### Requisitos Funcionais

    Os requisitos abaixo expressam as **ações dos usuários** na condução e supervisão do fechamento mensal e no ciclo de prestação de contas operacionais.

    | Código | Requisito (Ação do Usuário) | CAR relacionada | Critério de Aceitação |
    | :---: | :--- | :---: | :--- |
    | **RF05** | **Solicitar prévia de fechamento** | CAR-03 | Para a competência mensal e os contratos escolhidos, o analista financeiro gera um extrato preliminar que consolida somente os apontamentos técnicos homologados e mostra as diárias e comissões já calculadas, para conferência supervisionada. |
    | **RF06** | **Homologar fechamento financeiro** | CAR-03 | Depois de conferir o extrato preliminar, o gestor financeiro confirma a homologação do lote da competência, e qualquer ajuste feito antes disso exige justificativa formal. Com a homologação, a competência é fechada, os lançamentos ficam bloqueados para alterações diretas e o extrato final é emitido. |
    | **RF07** | **Submeter solicitação de reembolso** | CAR-04 | O colaborador solicita o reembolso de uma despesa operacional autorizada informando valor, categoria e contrato, e a solicitação só é aceita com o comprovante fiscal digitalizado anexado (RN06). Solicitações aceitas ficam com status "Pendente de Análise". |
    | **RF08** | **Deliberar solicitação de reembolso** | CAR-04 | O coordenador técnico ou financeiro analisa somente as solicitações pendentes dos contratos sob sua alçada e aprova ou reprova cada uma, sendo o parecer obrigatório na reprovação. A decisão fica registrada, o status do reembolso é atualizado e o solicitante é notificado. |
    | **RF21** | **Estornar fechamento financeiro** | CAR-03 | Diante de uma inconsistência em uma competência já homologada, o gestor financeiro pode estornar o fechamento desde que informe uma justificativa formal (RN08, RNF08). A competência é reaberta para retificação, o fechamento original continua preservado no histórico e o estorno entra na trilha de auditoria com autor, justificativa e data/hora. |
    | **RF27** | **Configurar tabela de valores de diárias técnicas** | CAR-03 | O gestor financeiro cadastra e atualiza as categorias de diária técnica com valor e período de vigência, e as rotinas financeiras passam a usar o valor vigente correspondente (RN25). |
    | **RF28** | **Submeter solicitação de adiantamento operacional** | CAR-04 | O colaborador solicita um adiantamento para uma despesa operacional autorizada de um contrato ativo informando valor, categoria, contrato e justificativa. O adiantamento é registrado com status "Pendente de Análise" e fica disponível para a deliberação do responsável (RN26). |
    | **RF29** | **Deliberar solicitação de adiantamento operacional** | CAR-04 | O responsável financeiro aprova ou reprova os adiantamentos pendentes de análise, com justificativa obrigatória na reprovação. O status da solicitação é atualizado, a deliberação é registrada e o solicitante é notificado (RN27). |

    #### Regras de Negócio

    1. **RN05 — Homologação Prévia Mandatória:** O sistema consolida exclusivamente apontamentos de RVT e horas técnicas que possuam status prévio de "Homologado" pelo gestor responsável.
    2. **RN06 — Obrigatoriedade de Comprovante Fiscal:** Nenhuma solicitação de reembolso pode ser submetida sem um comprovante fiscal digital legível anexado, observados os formatos e o tamanho definidos no RNF07.
    3. **RN07 — Limite do Montante Reembolsável:** O sistema impede que o valor aprovado para reembolso ultrapasse o valor nominal discriminado no documento fiscal comprobatório.
    4. **RN08 — Imutabilidade de Lotes Homologados:** O sistema bloqueia modificações diretas em lotes financeiros homologados, exigindo procedimento formal de estorno com justificativa auditável para qualquer retificação.
    5. **RN09 — Vínculo Contratual Obrigatório:** Todo reembolso, adiantamento ou outra despesa operacional deve estar estritamente vinculado a um contrato ativo e a um centro de custos operacional válido.
    6. **RN25 — Vigência dos Valores de Diárias Técnicas:** O sistema deve manter os valores parametrizados de diárias técnicas associados às respectivas categorias e períodos de vigência, utilizando exclusivamente o valor vigente para o cálculo financeiro da competência correspondente.
    7. **RN26 — Elegibilidade do Adiantamento Operacional:** O sistema permite solicitações de adiantamento somente para colaboradores ativos e despesas vinculadas a contrato ativo, mantendo a solicitação em status "Pendente de Análise" até a deliberação do responsável.
    8. **RN27 — Notificação de Pendências Financeiras:** O sistema deve gerar notificação no painel e por e-mail ao responsável sempre que uma solicitação de reembolso ou adiantamento entrar em estado que exija análise ou deliberação, mantendo a pendência identificável até sua resolução.

    #### Requisitos Não Funcionais

    | Código | Requisito Verificável | URPS+ | Sommerville | Critério Mensurável |
    | :---: | :--- | :--- | :--- | :--- |
    | **RNF05** | **Processar a rotina de fechamento financeiro com alta eficiência** | Performance (Desempenho) | Requisito do Produto — Eficiência/Desempenho | Em 95 de 100 execuções sob base sintética de até 500 apontamentos de campo, o tempo de cálculo, consolidação e renderização do extrato deve ocorrer em no máximo 5,0 segundos. |
    | **RNF06** | **Garantir exatidão aritmética centesimal em cálculos monetários** | Reliability (Confiabilidade) | Requisito do Produto — Confiabilidade/Acurácia | Em 100% dos cálculos comparados com o gabarito contábil formal, a discrepância aritmética monetária deve ser de exatamente R$ 0,00, operando com tipos de ponto fixo centesimal sem perdas por arredondamento flutuante. |
    | **RNF07** | **Validar integridade, tamanho e formatos no upload de comprovantes** | Supportability (Suportabilidade) / Security (+) | Requisito do Produto — Suportabilidade | Em 100% das tentativas de envio de arquivos com tamanho superior a 5 MB ou com extensões diferentes de PDF, PNG e JPEG, o sistema deve bloquear o upload exibindo mensagem amigável de erro. |
    | **RNF08** | **Exigir justificativa textual mandatória e auditoria em estornos de fechamento** | Security (+) (Segurança) | Requisito do Produto — Segurança/Rastreabilidade | Em 100% das operações de estorno de fechamento homologado, a transação deve ser sumariamente abortada caso o campo de justificativa formal não seja preenchido ou contenha menos de 15 caracteres. |

    #### Matriz de Rastreabilidade do Módulo 2

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

    </div>

=== "Módulo 3: Inteligência de Custos por Contrato (OE3)"

    <div class="module-spec-pane" markdown="1">

    <a id="oe3-inteligencia-de-custos-por-contrato"></a>
    <a id="oe3"></a>
    ### 8.3.3 Módulo 3 (OE3) — Inteligência de Custos por Contrato

    Esta seção detalha os requisitos da **DUOC Finance** associados ao **OE3 — Transparecer as informações sobre os Custos por Contrato**. O módulo cobre as características **CAR-05 — Apropriação e Rastreabilidade de Custos por Contrato** e **CAR-06 — Painel Analítico de Custo Apropriado e Desvio Orçamentário por Projeto**.

    #### Requisitos Funcionais

    Os requisitos abaixo expressam as **ações analíticas dos gestores** para apropriação, filtragem dinâmica e monitoramento contínuo da saúde financeira das obras.

    | Código | Requisito (Ação do Usuário) | CAR relacionada | Critério de Aceitação |
    | :---: | :--- | :---: | :--- |
    | **RF09** | **Apropriar custos operacionais** | CAR-05 | O gestor dispara a apropriação de custos da competência, e os valores de apontamentos técnicos e diárias já homologados são alocados aos respectivos contratos ativos, sem duplicar nem sobrepor os relatórios de folha CLT legados. |
    | **RF10** | **Consultar rastreabilidade de custos** | CAR-05 | Para qualquer custo apropriado a um contrato, o gestor consegue ver a origem completa da linha de despesa: o apontamento, o executor, a data/hora da homologação e o gestor responsável. |
    | **RF11** | **Filtrar indicadores de custos** | CAR-06 | No painel de inteligência de custos, usuários autorizados combinam filtros de período, contrato, colaborador e centro de custo, e os valores acumulados, os indicadores e os gráficos são recalculados conforme a combinação escolhida. |
    | **RF12** | **Monitorar execução orçamentária** | CAR-06 | Na visão executiva de um contrato com meta orçamentária definida, o gestor acompanha o valor previsto, o realizado, o desvio financeiro e o percentual de execução, com destaque visual quando o orçamento é extrapolado. |
    | **RF30** | **Consultar comparativo histórico de custos entre contratos** | CAR-05 | O gestor seleciona dois ou mais contratos, ativos ou encerrados, e um período de comparação, e o sistema apresenta os custos apropriados de cada contrato com as variações absolutas e percentuais no período (RN28). |
    | **RF31** | **Configurar alertas de execução orçamentária** | CAR-06 | Para um contrato com meta orçamentária definida, o gestor configura o percentual de execução que deve gerar alerta. Quando a execução atinge ou ultrapassa esse limite, o alerta aparece no painel e é enviado por e-mail (RN29). |

    #### Regras de Negócio

    1. **RN10 — Condição de Homologação para Apropriação:** O sistema permite apropriação financeira em contratos estritamente a partir de registros e despesas previamente homologados pela coordenação.
    2. **RN11 — Vínculo Contratual Mandatório:** O sistema bloqueia a apropriação de despesas sem vínculo estrito a um contrato ativo da DUOC, impedindo a existência de custos órfãos.
    3. **RN12 — Versionamento de Apropriações:** Alterações retroativas em apontamentos já apropriados preservam o histórico da versão anterior e exigem nova homologação formal quando alterarem valores monetários.
    4. **RN13 — Cálculo Padronizado de Execução Orçamentária:** O sistema calcula o percentual de execução orçamentária estritamente pela equação `(Custo Apropriado Acumulado / Orçamento Previsto) * 100`.
    5. **RN14 — Segregação de Visualização Salarial:** O sistema oculta automaticamente campos de taxas salariais individuais e valores nominais de diárias para usuários que não possuam perfil de gestão ou diretoria.
    6. **RN28 — Comparativo Histórico de Custos:** O sistema deve calcular a variação absoluta e percentual dos custos apropriados entre os contratos e períodos selecionados, utilizando os valores consolidados e homologados disponíveis na base.
    7. **RN29 — Disparo de Alertas Orçamentários:** O sistema deve disparar alertas quando o percentual de execução orçamentária de um contrato atingir ou ultrapassar o limite configurado, registrando o evento e mantendo a notificação disponível no painel até sua resolução ou reconhecimento.

    #### Requisitos Não Funcionais

    | Código | Requisito Verificável | URPS+ | Sommerville | Critério Mensurável |
    | :---: | :--- | :--- | :--- | :--- |
    | **RNF09** | **Carregar o painel analítico em tempo inferior a 3 segundos** | Performance (Desempenho) | Requisito do Produto — Eficiência/Desempenho | Em 95 de 100 execuções medidas em ambiente de testes com base sintética de até 10.000 lançamentos de custos e 100 contratos, a renderização completa dos indicadores analíticos deve ocorrer em no máximo 3,0 segundos. |
    | **RNF10** | **Restringir dados financeiros analíticos conforme perfil de acesso** | Security (+) (Segurança) | Requisito do Produto — Segurança da Informação | Em 100% dos testes de autorização, requisições de consulta financeira originadas por usuários sem privilégios compatíveis devem ser bloqueadas com código HTTP 403 Forbidden. |
    | **RNF11** | **Garantir consistência transacional ACID na apropriação concorrente de custos** | Reliability (Confiabilidade) | Requisito do Produto — Confiabilidade/Dependabilidade | Em 100 testes de concorrência com acessos simultâneos de inclusão e homologação, não deve haver ocorrência de custos duplicados ou divergências entre a soma dos apontamentos e o total consolidado do contrato. |
    | **RNF12** | **Assegurar responsividade do painel em resoluções de *desktop* e *tablet*** | Usability (Usabilidade) | Requisito do Produto — Usabilidade | Nas resoluções de tela (*viewports*) de 1024 × 768 px e 768 × 1024 px, 100% dos gráficos, tabelas e filtros essenciais devem permanecer visíveis e operáveis sem a necessidade de barra de rolagem horizontal. |

    #### Matriz de Rastreabilidade do Módulo 3

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

    </div>

=== "Módulo 4: Governança, Segurança e Rastreabilidade (OE4)"

    <div class="module-spec-pane" markdown="1">

    <a id="oe4-governanca-seguranca-e-rastreabilidade"></a>
    <a id="oe4"></a>
    ### 8.3.4 Módulo 4 (OE4) — Governança, Segurança e Rastreabilidade

    Esta seção detalha os requisitos da **DUOC Finance** associados ao **OE4 — Garantir Segurança e Governança de Dados**. O módulo cobre as características **CAR-07 — Controle de Acesso Baseado em Papéis (RBAC)** e **CAR-08 — Trilha de Auditoria e Histórico de Operações Sensíveis**.

    #### Requisitos Funcionais

    Os requisitos abaixo expressam as **ações dos usuários** para autenticação corporativa, gestão de permissões e auditoria probatória de eventos.

    | Código | Requisito (Ação do Usuário) | CAR relacionada | Critério de Aceitação |
    | :---: | :--- | :---: | :--- |
    | **RF13** | **Efetuar login no sistema** | CAR-07 | O colaborador entra na plataforma com e-mail e senha corporativos e recebe uma sessão com token de acesso temporário e as permissões do seu perfil. Credenciais inválidas geram uma mensagem de erro genérica. |
    | **RF14** | **Gerenciar perfis de acesso** | CAR-07 | O administrador atribui a cada usuário um papel (Diarista/Técnico de Campo, Gestor de Contrato, Analista Financeiro ou Administrador), e as restrições desse papel passam a valer imediatamente em todas as telas e rotas de API da aplicação (RN16). |
    | **RF15** | **Consultar trilha de auditoria** | CAR-08 | Usuários com perfil de auditoria pesquisam o log por período, usuário, tipo de operação, módulo/CAR afetado e, quando aplicável, faixa de valor monetário. Cada evento listado mostra quem fez, qual operação foi executada e quando, com carimbo temporal UTC. |
    | **RF16** | **Exportar relatório de auditoria** | CAR-08 | O administrador seleciona eventos auditados e exporta um dossiê em formato estruturado (PDF/CSV) com o histórico integral e imutável dessas operações, para fins de conformidade legal e trabalhista (CLT Art. 11). |
    | **RF17** | **Recuperar credenciais de acesso** | CAR-07 | O colaborador que esqueceu a senha informa o e-mail corporativo cadastrado e recebe nele um link de redefinição de uso único, válido por 30 minutos. A resposta exibida não revela se o e-mail existe ou não na base, evitando a enumeração de usuários. |
    | **RF18** | **Encerrar sessão manualmente** | CAR-07 | Ao encerrar a sessão manualmente (*logout*), o token de acesso atual é invalidado na hora e o usuário volta para a tela de login. |
    | **RF23** | **Bloquear acesso após tentativas falhas consecutivas** | CAR-07 | Após 5 tentativas de login com credenciais inválidas em até 15 minutos, a conta fica bloqueada para autenticação por 30 minutos, com uma mensagem informativa que não revela se o erro estava no e-mail ou na senha (RN20). |
    | **RF24** | **Expirar senha periodicamente e impedir reutilização** | CAR-07 | Quando a senha completa 90 dias desde a última alteração, o acesso só é liberado depois que o usuário define uma nova senha, que não pode repetir nenhuma das últimas 5 já utilizadas (RN21). |

    #### Regras de Negócio

    1. **RN15 — Autenticação Mandatória com Token Válido:** O sistema exige token temporário válido e não expirado para qualquer requisição a recursos e dados protegidos.
    2. **RN16 — Princípio do Menor Privilégio (RBAC):** O sistema intercepta automaticamente requisições e segrega visualizações: colaboradores de campo acessam somente seus próprios lançamentos; gestores acessam contratos sob sua responsabilidade; e administradores gerenciam parametrizações globais.
    3. **RN17 — Atomicidade de Gravação na Auditoria:** O sistema executa a gravação da entrada de log de auditoria na mesma transação atômica da operação de escrita de dados, revertendo a transação se o log falhar.
    4. **RN18 — Imutabilidade Estrita (*Append-Only*):** Os registros da trilha de auditoria são somente de inserção: o sistema não permite, para nenhum perfil de usuário, a alteração ou a exclusão de eventos já registrados.
    5. **RN19 — Prazo Prescricional de Retenção de Logs:** O sistema impede o expurgo de registros de auditoria operacional e financeira com tempo de retenção inferior a 5 anos (1.825 dias), atendendo ao prazo prescricional trabalhista (Artigo 11 da CLT).
    6. **RN20 — Limite de Tentativas de Autenticação:** O sistema contabiliza tentativas falhas de login por conta e aplica bloqueio temporário ao atingir o limite configurado, resetando o contador após login bem-sucedido.
    7. **RN21 — Política de Expiração e Histórico de Senhas:** O sistema mantém hash das últimas 5 senhas utilizadas por usuário, impedindo sua reutilização, e força redefinição a cada 90 dias corridos.

    #### Requisitos Não Funcionais

    | Código | Requisito Verificável | URPS+ | Sommerville | Critério Mensurável |
    | :---: | :--- | :--- | :--- | :--- |
    | **RNF13** | **Expirar token de acesso temporário em no máximo 8 horas** | Security (+) (Segurança) | Requisito do Produto — Confiabilidade/Segurança | Em 100% dos testes de segurança automatizados, requisições submetidas com tokens emitidos há mais de 8 horas (28.800 segundos) devem ser sumariamente rejeitadas com código HTTP 401 Unauthorized. |
    | **RNF14** | **Validar perfil de autorização em 100% das rotas de API com dados sensíveis** | Security (+) (Segurança) | Requisito Externo — Legislativo/Regulamentar (LGPD) | Cobertura de 100% das rotas de backend que trafegam dados financeiros ou pessoais sensíveis por filtros de permissão RBAC, com resposta obrigatória HTTP 403 Forbidden para papéis não autorizados. |
    | **RNF15** | **Garantir atomicidade transacional na gravação de logs de auditoria** | Reliability (Confiabilidade) | Requisito do Produto — Confiabilidade/Dependabilidade | Em 100% das operações de escrita disparadas contra dados de pessoal e financeiros na suíte de testes, uma entrada correspondente de auditoria deve ser confirmada na mesma transação com taxa de perda zero. |
    | **RNF16** | **Reter registros de auditoria por no mínimo 5 anos contra expurgo indevido** | Supportability (Suportabilidade) / Legal | Requisito Externo — Legislativo (Art. 11 da CLT / Fiscal) | Inexistência comprovada por análise estática e testes de vulnerabilidade de comandos ou rotinas que permitam a deleção de registros com tempo de retenção inferior a 5 anos (1.825 dias). |
    | **RNF17** | **Realizar backup automático diário com restauração verificada** | Reliability (Confiabilidade) | Requisito do Produto — Confiabilidade/Dependabilidade | O sistema deve executar backup automático completo diário do banco de dados e dos comprovantes anexados, reter as cópias por no mínimo 30 dias e verificar a integridade de 100% dos backups gerados; a restauração completa em ambiente de teste deve ser concluída em até 4 horas, com perda máxima de dados de 24 horas. |

    #### Matriz de Rastreabilidade do Módulo 4

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

    </div>

=== "Transversal: Plataforma & Qualidade (Universal)"

    <div class="module-spec-pane" markdown="1">

    <a id="requisitos-nao-funcionais-transversais"></a>
    ### 8.3.5 Requisitos Não Funcionais Transversais (Universal)

    Os requisitos abaixo aplicam-se à plataforma como um todo, não estando vinculados a um único Objetivo Específico.

    #### Requisitos Não Funcionais

    | Código | Requisito Verificável | URPS+ | Sommerville | Critério Mensurável |
    | :---: | :--- | :--- | :--- | :--- |
    | **RNF18** | **Garantir disponibilidade mínima mensal do sistema** | Reliability (Confiabilidade) | Requisito do Produto — Confiabilidade | Disponibilidade mínima de 99,5% ao mês, medida por monitoramento externo automatizado, com janelas de manutenção programada comunicadas com no mínimo 24h de antecedência e fora do horário comercial (8h-18h). |
    | **RNF19** | **Garantir acessibilidade digital nas interfaces do sistema** | Usability (Usabilidade) | Requisito do Produto — Usabilidade | 100% dos formulários com navegação completa por teclado e rótulos ARIA; contraste mínimo de 4.5:1 em texto, validado por ferramenta automatizada (ex.: axe-core) sem erros críticos, alinhado a WCAG 2.1 nível AA. |
    | **RNF20** | **Validar integridade de payloads em todas as rotas de escrita da API** | Reliability / Security (+) | Requisito do Produto — Confiabilidade | 100% das requisições POST/PUT/PATCH são validadas contra schema de dados antes da persistência; payload malformado retorna HTTP 400 com mensagem de erro estruturada, sem exceção não tratada. |

    #### Matriz de Rastreabilidade Transversal

    | Requisito | Objetivo Específico | Característica | Caso de Teste |
    | :---: | :---: | :---: | :--- |
    | **RNF18** | Universal | — | **CT-TRANS-01:** Monitorar uptime mensal e validar disponibilidade ≥ 99,5%, com manutenções comunicadas com antecedência. |
    | **RNF19** | Universal | — | **CT-TRANS-02:** Rodar ferramenta automatizada de acessibilidade em todos os formulários e validar ausência de erros críticos (WCAG 2.1 AA) e navegação completa por teclado. |
    | **RNF20** | Universal | — | **CT-TRANS-03:** Submeter payloads malformados a todas as rotas de escrita da API e validar rejeição HTTP 400 estruturada, sem exceção não tratada. |

    </div>

---

<a id="matriz-sintese-geral-de-rastreabilidade"></a>
## 8.4 Matriz-Síntese Geral de Rastreabilidade

A matriz a seguir consolida a **rastreabilidade bidirecional global** entre os Objetivos Específicos (OE), as Características do Produto (CAR), seus respectivos Valores de Negócio (VN), os Requisitos Funcionais (RF), os Requisitos Não Funcionais (RNF) e a suíte executável de Casos de Teste (CT) do sistema.

Esta estruturação atende plenamente ao modelo oficial da **Seção 8.3 do Template (REQ - 2026.1 - v8 OFICIAL)**, correlacionando a **contribuição principal**, a **contribuição secundária** e o valor entregue ao negócio da **DUOC Arquitetura e Engenharia**:

| Contribuição Principal (OE) | Contribuição Secundária (OE) | Característica do Produto (CAR) | Valor de Negócio (VN) | Requisitos Funcionais (RF) | Requisitos Não Funcionais (RNF) | Casos de Teste (CT) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| <span class="mod-badge mod-1">OE1</span> — Padronizar e Unificar os Dados | OE2 — Eficiência Administrativo-Financeira | [**CAR-01:** Gestão Cadastral Unificada de Pessoal](../visao-produto/capitulo-2/index.md#car-01) | Centraliza dados cadastrais, bancários e trabalhistas com identificador único e validação de CPF, eliminando redundâncias e inconsistências em folha e diárias. | RF01, RF02, RF03, RF25, RF26 | RNF02, RNF03 | CT-M1-01, CT-M1-02, CT-M1-03, CT-M1-06, CT-M1-07, CT-M1-12, CT-M1-13 |
| <span class="mod-badge mod-1">OE1</span> — Padronizar e Unificar os Dados | OE3 — Transparecer os Custos por Contrato | [**CAR-02:** Apontamento Móvel de Atividades e Registros de Campo](../visao-produto/capitulo-2/index.md#car-02) | Habilita coleta ágil e padronizada de horas e atividades em canteiros com anexos e geolocalização, operando offline e alimentando a apuração de produção. | RF04, RF19, RF22 | RNF01, RNF04 | CT-M1-04, CT-M1-05, CT-M1-08, CT-M1-09, CT-M1-11 |
| <span class="mod-badge mod-1">OE1</span> — Padronizar e Unificar os Dados | OE2 — Eficiência Administrativo-Financeira | [**CAR-09:** Integração com Shifton e Presenças Homologadas](../visao-produto/capitulo-2/index.md#car-09) | Reaproveita a solução biométrica Shifton já utilizada pela DUOC, importando presenças homologadas por competência e contrato sem duplicar registros. | RF20 | RNF02 | CT-M1-10 |
| <span class="mod-badge mod-2">OE2</span> — Aumentar a Eficiência Administrativo-Financeira | OE4 — Governança, Segurança e Rastreabilidade | [**CAR-03:** Motor de Processamento e Fechamento Financeiro](../visao-produto/capitulo-2/index.md#car-03) | Garante celeridade e precisão matemática centesimal no fechamento mensal de diárias e comissões, blindando lotes fechados e permitindo estorno auditável com justificativa mandatória. | RF05, RF06, RF21, RF27 | RNF05, RNF06, RNF08 | CT-M2-01, CT-M2-02, CT-M2-05, CT-M2-06, CT-M2-08, CT-M2-09, CT-M2-10 |
| <span class="mod-badge mod-2">OE2</span> — Aumentar a Eficiência Administrativo-Financeira | OE3 — Transparecer os Custos por Contrato | [**CAR-04:** Fluxo Digital de Prestação de Contas e Reembolsos](../visao-produto/capitulo-2/index.md#car-04) | Digitaliza solicitações e deliberações de adiantamentos e reembolsos operacionais com validação obrigatória de comprovantes fiscais e alçadas vinculadas a contratos. | RF07, RF08, RF28, RF29 | RNF07 | CT-M2-03, CT-M2-04, CT-M2-07, CT-M2-11, CT-M2-12 |
| <span class="mod-badge mod-3">OE3</span> — Transparecer os Custos por Contrato | OE1 — Padronizar e Unificar os Dados | [**CAR-05:** Apropriação e Rastreabilidade de Custos por Contrato](../visao-produto/capitulo-2/index.md#car-05) | Aloca custos operacionais diretamente a contratos ativos sem rateios arbitrários, assegurando rastreabilidade da origem do gasto e viabilizando comparativos históricos entre obras. | RF09, RF10, RF30 | RNF10, RNF11 | CT-M3-01, CT-M3-02, CT-M3-06, CT-M3-07, CT-M3-09 |
| <span class="mod-badge mod-3">OE3</span> — Transparecer os Custos por Contrato | OE2 — Eficiência Administrativo-Financeira | [**CAR-06:** Painel Analítico de Custo Apropriado e Desvio Orçamentário](../visao-produto/capitulo-2/index.md#car-06) | Fornece visibilidade gerencial em tempo real sobre desvios orçamentários e custos realizados por contrato, com filtros dinâmicos, responsividade e disparo automático de alertas. | RF11, RF12, RF31 | RNF09, RNF10, RNF12 | CT-M3-03, CT-M3-04, CT-M3-05, CT-M3-08, CT-M3-10 |
| <span class="mod-badge mod-4">OE4</span> — Garantir Segurança e Governança de Dados | OE1 — Padronizar e Unificar os Dados | [**CAR-07:** Controle de Acesso Baseado em Papéis (RBAC)](../visao-produto/capitulo-2/index.md#car-07) | Garante confidencialidade e segregação de privilégios de dados sensíveis e financeiros via RBAC em 100% das rotas, governança de senhas, bloqueio por força bruta e expiração de sessão. | RF13, RF14, RF17, RF18, RF23, RF24 | RNF13, RNF14 | CT-M4-01, CT-M4-02, CT-M4-05, CT-M4-06, CT-M4-09, CT-M4-10, CT-M4-12, CT-M4-13 |
| <span class="mod-badge mod-4">OE4</span> — Garantir Segurança e Governança de Dados | OE2 — Eficiência Administrativo-Financeira | [**CAR-08:** Trilha de Auditoria e Histórico de Operações Sensíveis](../visao-produto/capitulo-2/index.md#car-08) | Assegura rastreabilidade probatória e governança corporativa com trilha de auditoria atômica e imutável (*append-only*), retenção quinquenal (CLT Art. 11), relatórios em PDF/CSV e política diária de backup. | RF15, RF16 | RNF15, RNF16, RNF17 | CT-M4-03, CT-M4-04, CT-M4-07, CT-M4-08, CT-M4-11 |
| <span class="mod-badge mod-trans">Universal</span> | — | **Requisitos de Plataforma e Qualidade Sistêmica** | Assegura alta disponibilidade da aplicação (≥ 99,5%), acessibilidade digital universal (WCAG 2.1 AA) e validação robusta de integridade estrutural de payloads na API. | — | RNF18, RNF19, RNF20 | CT-TRANS-01, CT-TRANS-02, CT-TRANS-03 |

### Síntese Visual de Rastreabilidade por Módulo

Utilize as abas abaixo para consultar o detalhamento metodológico e a síntese executiva de rastreabilidade de cada módulo do sistema, correlacionando objetivos, características, requisitos e casos de teste:

=== "Módulo 1: Padronização e Unificação de Dados (OE1)"

    <div class="week-card card-mod-1">
      <div class="week-card-header">
        <div class="week-card-header-left">
          <span class="week-card-title">Módulo 1: Padronização e Unificação de Dados</span>
          <span class="week-card-period">OE1 • CAR-01, CAR-02, CAR-09</span>
        </div>
        <span class="status-pill pill-mod-1">9 RFs • 4 RNFs • 7 RNs • 13 CTs</span>
      </div>
      <div class="week-card-meta">
        <div class="week-meta-item">
          <span class="week-meta-label">Objetivo Específico Principal</span>
          <span class="week-meta-value">OE1 — Padronizar e unificar os dados cadastrais, operacionais e de apontamento em canteiro</span>
        </div>
        <div class="week-meta-item">
          <span class="week-meta-label">Contribuições Secundárias</span>
          <span class="week-meta-value">OE2 (Eficiência em folha e diárias) • OE3 (Base para apropriação de custos por contrato)</span>
        </div>
        <div class="week-meta-item">
          <span class="week-meta-label">Valor de Negócio Entregue</span>
          <span class="week-meta-value">Centraliza o cadastro unificado com validação de CPF; viabiliza apontamento móvel offline com anexos e geolocalização; e consome presenças biométricas via Shifton.</span>
        </div>
      </div>
      <div class="week-card-grid">
        <div>
          <div class="week-section-title">Requisitos Funcionais e Regras de Negócio</div>
          <ul>
            <li><strong>RF01:</strong> Cadastrar colaborador (<a href="../visao-produto/capitulo-2/index.md#car-01">CAR-01</a> | RN01: Unicidade mandatória por CPF);</li>
            <li><strong>RF02:</strong> Atualizar cadastro de colaborador (<a href="../visao-produto/capitulo-2/index.md#car-01">CAR-01</a> | Propagação imediata e versionamento);</li>
            <li><strong>RF03:</strong> Registrar movimentação funcional (<a href="../visao-produto/capitulo-2/index.md#car-01">CAR-01</a> | RN04: Revogação automática de acessos móveis);</li>
            <li><strong>RF04:</strong> Submeter apontamento de campo (<a href="../visao-produto/capitulo-2/index.md#car-02">CAR-02</a> | RN02: Bloqueio pós-homologação);</li>
            <li><strong>RF19:</strong> Consultar apontamentos registrados (<a href="../visao-produto/capitulo-2/index.md#car-02">CAR-02</a> | RN16: Menor privilégio, visão própria);</li>
            <li><strong>RF20:</strong> Importar presenças homologadas (<a href="../visao-produto/capitulo-2/index.md#car-09">CAR-09</a> | Integração sem alteração da origem Shifton);</li>
            <li><strong>RF22:</strong> Anexar evidências e geolocalização (<a href="../visao-produto/capitulo-2/index.md#car-02">CAR-02</a> | RN24: Captura de GPS não bloqueante);</li>
            <li><strong>RF25:</strong> Cadastrar tipo de contratação (<a href="../visao-produto/capitulo-2/index.md#car-01">CAR-01</a> | RN22: Diarista, CLT ou Prestador de Serviço);</li>
            <li><strong>RF26:</strong> Consultar histórico de alterações (<a href="../visao-produto/capitulo-2/index.md#car-01">CAR-01</a> | RN23: Versionamento temporal bancário).</li>
          </ul>
        </div>
        <div>
          <div class="week-section-title">Requisitos Não Funcionais e Casos de Teste</div>
          <ul>
            <li><strong>RNF01 (Confiabilidade):</strong> Operação offline para ≥ 100 apontamentos com sincronização em ≤ 30 s (CT-M1-05);</li>
            <li><strong>RNF02 (Desempenho):</strong> Tempo de consulta cadastral ≤ 2,0 s em 95% das requisições (CT-M1-06);</li>
            <li><strong>RNF03 (Segurança):</strong> Criptografia de dados sensíveis em repouso AES-256 e trânsito em TLS 1.3 (CT-M1-07);</li>
            <li><strong>RNF04 (Usabilidade):</strong> Apontamento em até 5 telas com taxa de conclusão ≥ 90% em 1º uso sem suporte (CT-M1-08);</li>
            <li><strong>Rastreabilidade de Testes:</strong> 13 Casos de Teste (CT-M1-01 a CT-M1-13) cobrindo cadastro, modo offline, Shifton e auditoria cadastral.</li>
          </ul>
        </div>
      </div>
    </div>

=== "Módulo 2: Eficiência Administrativo-Financeira (OE2)"

    <div class="week-card card-mod-2">
      <div class="week-card-header">
        <div class="week-card-header-left">
          <span class="week-card-title">Módulo 2: Eficiência Administrativo-Financeira</span>
          <span class="week-card-period">OE2 • CAR-03, CAR-04</span>
        </div>
        <span class="status-pill pill-mod-2">8 RFs • 4 RNFs • 8 RNs • 12 CTs</span>
      </div>
      <div class="week-card-meta">
        <div class="week-meta-item">
          <span class="week-meta-label">Objetivo Específico Principal</span>
          <span class="week-meta-value">OE2 — Aumentar a eficiência administrativo-financeira em fechamentos e prestação de contas</span>
        </div>
        <div class="week-meta-item">
          <span class="week-meta-label">Contribuições Secundárias</span>
          <span class="week-meta-value">OE3 (Transparência nos custos apropriados) • OE4 (Imutabilidade e auditoria de lotes homologados)</span>
        </div>
        <div class="week-meta-item">
          <span class="week-meta-label">Valor de Negócio Entregue</span>
          <span class="week-meta-value">Automatiza apuração de diárias e comissões com tolerância centesimal zero; digitaliza reembolsos e adiantamentos com comprovante; e blinda fechamentos com estorno formal.</span>
        </div>
      </div>
      <div class="week-card-grid">
        <div>
          <div class="week-section-title">Requisitos Funcionais e Regras de Negócio</div>
          <ul>
            <li><strong>RF05:</strong> Solicitar prévia de fechamento (<a href="../visao-produto/capitulo-2/index.md#car-03">CAR-03</a> | RN05: Apontamentos previamente homologados);</li>
            <li><strong>RF06:</strong> Homologar fechamento financeiro (<a href="../visao-produto/capitulo-2/index.md#car-03">CAR-03</a> | RN08: Imutabilidade de lote fechado);</li>
            <li><strong>RF07:</strong> Submeter solicitação de reembolso (<a href="../visao-produto/capitulo-2/index.md#car-04">CAR-04</a> | RN06/RN09: Comprovante fiscal obrigatório);</li>
            <li><strong>RF08:</strong> Deliberar solicitação de reembolso (<a href="../visao-produto/capitulo-2/index.md#car-04">CAR-04</a> | RN07: Trava do montante fiscal aprovado);</li>
            <li><strong>RF21:</strong> Estornar fechamento financeiro (<a href="../visao-produto/capitulo-2/index.md#car-03">CAR-03</a> | RNF08: Justificativa auditável ≥ 15 caracteres);</li>
            <li><strong>RF27:</strong> Configurar tabela de diárias técnicas (<a href="../visao-produto/capitulo-2/index.md#car-03">CAR-03</a> | RN25: Parametrização por vigência);</li>
            <li><strong>RF28:</strong> Submeter adiantamento operacional (<a href="../visao-produto/capitulo-2/index.md#car-04">CAR-04</a> | RN26: Elegibilidade estrita a contratos ativos);</li>
            <li><strong>RF29:</strong> Deliberar adiantamento operacional (<a href="../visao-produto/capitulo-2/index.md#car-04">CAR-04</a> | RN27: Notificação de pendências e parecer obrigatório).</li>
          </ul>
        </div>
        <div>
          <div class="week-section-title">Requisitos Não Funcionais e Casos de Teste</div>
          <ul>
            <li><strong>RNF05 (Desempenho):</strong> Fechamento financeiro de 500 lançamentos em tempo ≤ 5,0 s (CT-M2-05);</li>
            <li><strong>RNF06 (Confiabilidade):</strong> Exatidão aritmética com tolerância zero (discrepância monetária R$ 0,00) (CT-M2-06);</li>
            <li><strong>RNF07 (Suportabilidade):</strong> Bloqueio de comprovantes > 5 MB e extensões fora de PDF/PNG/JPEG (CT-M2-07);</li>
            <li><strong>RNF08 (Segurança):</strong> Abortamento compulsório de estorno com justificativa menor que 15 caracteres (CT-M2-08);</li>
            <li><strong>Rastreabilidade de Testes:</strong> 12 Casos de Teste (CT-M2-01 a CT-M2-12) validando exatidão monetária, uploads e fluxos de alçada.</li>
          </ul>
        </div>
      </div>
    </div>

=== "Módulo 3: Inteligência de Custos por Contrato (OE3)"

    <div class="week-card card-mod-3">
      <div class="week-card-header">
        <div class="week-card-header-left">
          <span class="week-card-title">Módulo 3: Inteligência de Custos por Contrato</span>
          <span class="week-card-period">OE3 • CAR-05, CAR-06</span>
        </div>
        <span class="status-pill pill-mod-3">6 RFs • 4 RNFs • 7 RNs • 10 CTs</span>
      </div>
      <div class="week-card-meta">
        <div class="week-meta-item">
          <span class="week-meta-label">Objetivo Específico Principal</span>
          <span class="week-meta-value">OE3 — Transparecer as informações sobre custos diretos e desvios orçamentários por contrato</span>
        </div>
        <div class="week-meta-item">
          <span class="week-meta-label">Contribuições Secundárias</span>
          <span class="week-meta-value">OE1 (Unificação de dados de produção) • OE2 (Eficiência em conciliação e fechamento)</span>
        </div>
        <div class="week-meta-item">
          <span class="week-meta-label">Valor de Negócio Entregue</span>
          <span class="week-meta-value">Elimina rateios manuais arbitrários, alocando despesas aos contratos reais; entrega painel analítico dinâmico de previsto vs. realizado; e dispara alertas orçamentários preventivos.</span>
        </div>
      </div>
      <div class="week-card-grid">
        <div>
          <div class="week-section-title">Requisitos Funcionais e Regras de Negócio</div>
          <ul>
            <li><strong>RF09:</strong> Apropriar custos operacionais (<a href="../visao-produto/capitulo-2/index.md#car-05">CAR-05</a> | RN10/RN11: Alocação a contratos ativos homologados);</li>
            <li><strong>RF10:</strong> Consultar rastreabilidade de custos (<a href="../visao-produto/capitulo-2/index.md#car-05">CAR-05</a> | RN12: Origem documental integral do gasto);</li>
            <li><strong>RF11:</strong> Filtrar indicadores de custos (<a href="../visao-produto/capitulo-2/index.md#car-06">CAR-06</a> | RN14: Segregação automática de dados salariais individuais);</li>
            <li><strong>RF12:</strong> Monitorar execução orçamentária (<a href="../visao-produto/capitulo-2/index.md#car-06">CAR-06</a> | RN13: Cálculo padronizado de execução percentual);</li>
            <li><strong>RF30:</strong> Consultar comparativo histórico (<a href="../visao-produto/capitulo-2/index.md#car-05">CAR-05</a> | RN28: Variação absoluta e relativa entre obras);</li>
            <li><strong>RF31:</strong> Configurar alertas orçamentários (<a href="../visao-produto/capitulo-2/index.md#car-06">CAR-06</a> | RN29: Disparo de alertas no painel e por e-mail).</li>
          </ul>
        </div>
        <div>
          <div class="week-section-title">Requisitos Não Funcionais e Casos de Teste</div>
          <ul>
            <li><strong>RNF09 (Desempenho):</strong> Carga do painel analítico em tempo ≤ 3,0 s para bases com até 10.000 lançamentos (CT-M3-05);</li>
            <li><strong>RNF10 (Segurança):</strong> Bloqueio compulsório com HTTP 403 Forbidden para acessos analíticos fora de alçada (CT-M3-06);</li>
            <li><strong>RNF11 (Confiabilidade):</strong> Consistência transacional ACID em concorrência de inclusão e apropriação (CT-M3-07);</li>
            <li><strong>RNF12 (Usabilidade):</strong> Responsividade completa em desktop e tablet sem rolagem horizontal (CT-M3-08);</li>
            <li><strong>Rastreabilidade de Testes:</strong> 10 Casos de Teste (CT-M3-01 a CT-M3-10) cobrindo atomicidade transacional, filtros e métricas orçamentárias.</li>
          </ul>
        </div>
      </div>
    </div>

=== "Módulo 4: Governança, Segurança e Rastreabilidade (OE4)"

    <div class="week-card card-mod-4">
      <div class="week-card-header">
        <div class="week-card-header-left">
          <span class="week-card-title">Módulo 4: Governança, Segurança e Rastreabilidade</span>
          <span class="week-card-period">OE4 • CAR-07, CAR-08</span>
        </div>
        <span class="status-pill pill-mod-4">8 RFs • 5 RNFs • 7 RNs • 13 CTs</span>
      </div>
      <div class="week-card-meta">
        <div class="week-meta-item">
          <span class="week-meta-label">Objetivo Específico Principal</span>
          <span class="week-meta-value">OE4 — Garantir governança corporativa, segurança da informação e rastreabilidade probatória</span>
        </div>
        <div class="week-meta-item">
          <span class="week-meta-label">Contribuições Secundárias</span>
          <span class="week-meta-value">OE1 (Blindagem da base cadastral) • OE2 (Segurança e auditoria de lançamentos financeiros)</span>
        </div>
        <div class="week-meta-item">
          <span class="week-meta-label">Valor de Negócio Entregue</span>
          <span class="week-meta-value">Assegura isolamento de alçadas via RBAC; mantém trilha de auditoria imutável (append-only); atende prazo prescricional trabalhista (Art. 11 CLT); e garante rotina de backup diário com restauração ágil.</span>
        </div>
      </div>
      <div class="week-card-grid">
        <div>
          <div class="week-section-title">Requisitos Funcionais e Regras de Negócio</div>
          <ul>
            <li><strong>RF13:</strong> Efetuar login no sistema (<a href="../visao-produto/capitulo-2/index.md#car-07">CAR-07</a> | RN15: Autenticação mandatória com token temporário);</li>
            <li><strong>RF14:</strong> Gerenciar perfis de acesso (<a href="../visao-produto/capitulo-2/index.md#car-07">CAR-07</a> | RN16: Menor privilégio nos perfis Diarista, Gestor, Financeiro e Admin);</li>
            <li><strong>RF15:</strong> Consultar trilha de auditoria (<a href="../visao-produto/capitulo-2/index.md#car-08">CAR-08</a> | Filtros avançados por período, usuário, módulo e valor);</li>
            <li><strong>RF16:</strong> Exportar relatório de auditoria (<a href="../visao-produto/capitulo-2/index.md#car-08">CAR-08</a> | Dossiê estruturado imutável em PDF/CSV para fins legais);</li>
            <li><strong>RF17:</strong> Recuperar credenciais de acesso (<a href="../visao-produto/capitulo-2/index.md#car-07">CAR-07</a> | Link de uso único válido por 30 min sem enumeração de contas);</li>
            <li><strong>RF18:</strong> Encerrar sessão manualmente (<a href="../visao-produto/capitulo-2/index.md#car-07">CAR-07</a> | Invalidação imediata do token de acesso);</li>
            <li><strong>RF23:</strong> Bloquear acesso após tentativas falhas (<a href="../visao-produto/capitulo-2/index.md#car-07">CAR-07</a> | RN20: Bloqueio de 30 min após 5 falhas);</li>
            <li><strong>RF24:</strong> Expirar senha periodicamente (<a href="../visao-produto/capitulo-2/index.md#car-07">CAR-07</a> | RN21: Renovação a cada 90 dias e bloqueio de 5 senhas anteriores).</li>
          </ul>
        </div>
        <div>
          <div class="week-section-title">Requisitos Não Funcionais e Casos de Teste</div>
          <ul>
            <li><strong>RNF13 (Segurança):</strong> Expiração compulsória de tokens de sessão em no máximo 8 horas (CT-M4-05);</li>
            <li><strong>RNF14 (Segurança/LGPD):</strong> 100% das rotas com dados sensíveis protegidas por filtros RBAC (CT-M4-06);</li>
            <li><strong>RNF15 (Confiabilidade):</strong> Gravação atômica da auditoria na mesma transação de banco com perda zero (CT-M4-07);</li>
            <li><strong>RNF16 (Suportabilidade/Legal):</strong> Retenção de logs por 5 anos (1.825 dias) contra expurgo indevido (CT-M4-08);</li>
            <li><strong>RNF17 (Confiabilidade):</strong> Backup diário completo com retenção de 30 dias e restauração em até 4h (CT-M4-11);</li>
            <li><strong>Rastreabilidade de Testes:</strong> 13 Casos de Teste (CT-M4-01 a CT-M4-13) cobrindo RBAC, persistência de auditoria e tolerância a falhas.</li>
          </ul>
        </div>
      </div>
    </div>

=== "Transversal: Plataforma & Qualidade (Universal)"

    <div class="week-card card-mod-trans">
      <div class="week-card-header">
        <div class="week-card-header-left">
          <span class="week-card-title">Módulo Transversal: Plataforma & Qualidade Sistêmica</span>
          <span class="week-card-period">Universal • Requisitos Arquiteturais</span>
        </div>
        <span class="status-pill pill-mod-trans">3 RNFs Transversais • 3 CTs</span>
      </div>
      <div class="week-card-meta">
        <div class="week-meta-item">
          <span class="week-meta-label">Escopo Arquitetural</span>
          <span class="week-meta-value">Cross-Cutting Concerns aplicáveis a todas as interfaces web e endpoints da API</span>
        </div>
        <div class="week-meta-item">
          <span class="week-meta-label">Contribuições aos OEs</span>
          <span class="week-meta-value">Sustenta os OEs 1 a 4 garantindo base operacional contínua, acessível e blindada contra falhas de contrato</span>
        </div>
        <div class="week-meta-item">
          <span class="week-meta-label">Valor de Negócio Entregue</span>
          <span class="week-meta-value">Assegura alta disponibilidade da aplicação (≥ 99,5%), acessibilidade universal compatível com WCAG 2.1 nível AA e resiliência de contratos de API.</span>
        </div>
      </div>
      <div class="week-card-grid">
        <div>
          <div class="week-section-title">Diretrizes de Qualidade e Arquitetura</div>
          <ul>
            <li><strong>Disponibilidade e SLA:</strong> Operação em alta disponibilidade mensal (99,5%) com janelas noturnas programadas;</li>
            <li><strong>Design Universal:</strong> Aderência a critérios de acessibilidade WCAG 2.1 nível AA em todos os formulários e tabelas;</li>
            <li><strong>Validação de Contratos:</strong> Schemas estritos para payload em rotas RESTful com rejeição padronizada HTTP 400.</li>
          </ul>
        </div>
        <div>
          <div class="week-section-title">Requisitos Não Funcionais e Casos de Teste</div>
          <ul>
            <li><strong>RNF18 (Confiabilidade):</strong> Disponibilidade mínima mensal de 99,5% monitorada externamente (CT-TRANS-01);</li>
            <li><strong>RNF19 (Usabilidade):</strong> Navegação por teclado, rótulos ARIA e contraste mínimo de 4.5:1 (CT-TRANS-02);</li>
            <li><strong>RNF20 (Confiabilidade/Segurança):</strong> Validação de 100% dos payloads das rotas de escrita contra schema (CT-TRANS-03);</li>
            <li><strong>Rastreabilidade de Testes:</strong> 3 Casos de Teste (CT-TRANS-01 a CT-TRANS-03) garantindo validação de uptime, acessibilidade e schemas de API.</li>
          </ul>
        </div>
      </div>
    </div>

---

<a id="catalogo-geral-consolidado"></a>

## 8.5 Catálogo Geral Consolidado de Requisitos

Esta seção consolida os requisitos funcionais e não funcionais do **DUOC Finance** em uma visão única, permitindo a consulta rápida de sua identificação, vínculo estratégico, alocação modular e participação preliminar no MVP. Esta seção atende diretamente ao escopo consolidado das seções **8.1 (Lista de Requisitos Funcionais)** e **8.2 (Lista de Requisitos Não Funcionais)** preconizadas pelo Template Oficial da disciplina.

A indicação de MVP apresentada neste catálogo representa o recorte atual do produto e deverá permanecer sincronizada com a priorização formal apresentada no [Priorização de Requisitos e Definição do MVP](priorizacao.md), em especial a Matriz 4 × 4 (Valor de Negócio × Esforço Técnico) e a Fundamentação Matemática das Coordenadas Cartesianas (Seção 10.4).

### 8.5.1 Catálogo de Requisitos Funcionais

| Código | Nome | Módulo / OE | CAR | Prioridade / MVP | Resumo |
| :---: | :--- | :---: | :---: | :---: | :--- |
| **RF01** | Cadastrar colaborador | <span class="mod-badge mod-1">Módulo 1 / OE1</span> | CAR-01 | MVP (preliminar) | Permite ao RH cadastrar colaboradores com dados pessoais, bancários e trabalhistas, garantindo unicidade por CPF. |
| **RF02** | Atualizar cadastro de colaborador | <span class="mod-badge mod-1">Módulo 1 / OE1</span> | CAR-01 | MVP (preliminar) | Permite atualizar informações cadastrais e bancárias, propagando as alterações e preservando o histórico. |
| **RF03** | Registrar movimentação funcional | <span class="mod-badge mod-1">Módulo 1 / OE1</span> | CAR-01 | MVP (preliminar) | Registra afastamentos, férias e desligamentos, atualizando a situação funcional do colaborador. |
| **RF04** | Submeter apontamento de campo | <span class="mod-badge mod-1">Módulo 1 / OE1</span> | CAR-02 | MVP (preliminar) | Permite registrar horas trabalhadas e atividades executadas em obra ou visita técnica. |
| **RF05** | Solicitar prévia de fechamento | <span class="mod-badge mod-2">Módulo 2 / OE2</span> | CAR-03 | MVP (preliminar) | Consolida apontamentos homologados e apresenta uma prévia das diárias e comissões da competência. |
| **RF06** | Homologar fechamento financeiro | <span class="mod-badge mod-2">Módulo 2 / OE2</span> | CAR-03 | MVP (preliminar) | Permite ao gestor confirmar o fechamento financeiro e bloquear alterações diretas posteriores. |
| **RF07** | Submeter solicitação de reembolso | <span class="mod-badge mod-2">Módulo 2 / OE2</span> | CAR-04 | MVP (preliminar) | Permite ao colaborador solicitar reembolso de despesas operacionais vinculadas a contratos. |
| **RF08** | Deliberar solicitação de reembolso | <span class="mod-badge mod-2">Módulo 2 / OE2</span> | CAR-04 | MVP (preliminar) | Permite ao responsável aprovar ou rejeitar solicitações de reembolso e registrar a decisão. |
| **RF09** | Apropriar custos operacionais | <span class="mod-badge mod-3">Módulo 3 / OE3</span> | CAR-05 | MVP (preliminar) | Aloca custos provenientes de apontamentos e diárias homologadas aos respectivos contratos. |
| **RF10** | Consultar rastreabilidade de custos | <span class="mod-badge mod-3">Módulo 3 / OE3</span> | CAR-05 | MVP (preliminar) | Permite identificar a origem de cada custo apropriado a um contrato. |
| **RF11** | Filtrar indicadores de custos | <span class="mod-badge mod-3">Módulo 3 / OE3</span> | CAR-06 | MVP (preliminar) | Permite combinar filtros de período, contrato, colaborador e centro de custo nos indicadores financeiros. |
| **RF12** | Monitorar execução orçamentária | <span class="mod-badge mod-3">Módulo 3 / OE3</span> | CAR-06 | MVP (preliminar) | Exibe valores previstos, realizados, desvios e percentual de execução orçamentária dos contratos. |
| **RF13** | Efetuar login no sistema | <span class="mod-badge mod-4">Módulo 4 / OE4</span> | CAR-07 | MVP (preliminar) | Autentica usuários por credenciais corporativas e cria uma sessão com permissões associadas ao perfil. |
| **RF14** | Gerenciar perfis de acesso | <span class="mod-badge mod-4">Módulo 4 / OE4</span> | CAR-07 | MVP (preliminar) | Permite ao administrador atribuir papéis e permissões de acesso aos usuários. |
| **RF15** | Consultar trilha de auditoria | <span class="mod-badge mod-4">Módulo 4 / OE4</span> | CAR-08 | MVP (preliminar) | Permite consultar eventos auditáveis por período, usuário, operação, módulo e demais filtros disponíveis. |
| **RF16** | Exportar relatório de auditoria | <span class="mod-badge mod-4">Módulo 4 / OE4</span> | CAR-08 | MVP (preliminar) | Gera relatórios estruturados com o histórico de operações auditadas. |
| **RF17** | Recuperar credenciais de acesso | <span class="mod-badge mod-4">Módulo 4 / OE4</span> | CAR-07 | MVP (preliminar) | Permite redefinir a senha por meio de link temporário enviado ao e-mail cadastrado. |
| **RF18** | Encerrar sessão manualmente | <span class="mod-badge mod-4">Módulo 4 / OE4</span> | CAR-07 | MVP (preliminar) | Permite ao usuário efetuar logout e invalidar sua sessão ativa. |
| **RF19** | Consultar apontamentos registrados | <span class="mod-badge mod-1">Módulo 1 / OE1</span> | CAR-02 | MVP (preliminar) | Permite ao colaborador consultar seus próprios apontamentos e respectivos status. |
| **RF20** | Importar presenças homologadas | <span class="mod-badge mod-1">Módulo 1 / OE1</span> | CAR-09 | MVP (preliminar) | Importa registros homologados do Shifton e os associa a colaboradores, contratos e competências. |
| **RF21** | Estornar fechamento financeiro | <span class="mod-badge mod-2">Módulo 2 / OE2</span> | CAR-03 | MVP (preliminar) | Permite reabrir uma competência homologada mediante justificativa e registro de auditoria. |
| **RF22** | Anexar evidências e geolocalização ao apontamento | <span class="mod-badge mod-1">Módulo 1 / OE1</span> | CAR-02 | MVP (preliminar) | Permite anexar fotos e comprovantes ao apontamento e associar geolocalização quando disponível. |
| **RF23** | Bloquear acesso após tentativas falhas consecutivas | <span class="mod-badge mod-4">Módulo 4 / OE4</span> | CAR-07 | MVP (preliminar) | Bloqueia temporariamente a autenticação após repetidas tentativas inválidas. |
| **RF24** | Expirar senha periodicamente e impedir reutilização | <span class="mod-badge mod-4">Módulo 4 / OE4</span> | CAR-07 | MVP (preliminar) | Exige renovação periódica da senha e impede a reutilização das últimas senhas cadastradas. |
| **RF25** | Cadastrar tipo de contratação do colaborador | <span class="mod-badge mod-1">Módulo 1 / OE1</span> | CAR-01 | MVP (preliminar) | Permite classificar o colaborador como Diarista, CLT ou Prestador de Serviço para aplicação das regras correspondentes. |
| **RF26** | Consultar histórico de alterações cadastrais e bancárias | <span class="mod-badge mod-1">Módulo 1 / OE1</span> | CAR-01 | MVP (preliminar) | Permite consultar versões anteriores dos dados cadastrais e bancários, incluindo autoria e data da alteração. |
| **RF27** | Configurar tabela de valores de diárias técnicas | <span class="mod-badge mod-2">Módulo 2 / OE2</span> | CAR-03 | MVP (preliminar) | Permite cadastrar valores de diárias técnicas, categorias e períodos de vigência utilizados nos cálculos financeiros. |
| **RF28** | Submeter solicitação de adiantamento operacional | <span class="mod-badge mod-2">Módulo 2 / OE2</span> | CAR-04 | MVP (preliminar) | Permite solicitar antecipadamente recursos para despesas operacionais vinculadas a um contrato. |
| **RF29** | Deliberar solicitação de adiantamento operacional | <span class="mod-badge mod-2">Módulo 2 / OE2</span> | CAR-04 | MVP (preliminar) | Permite ao gestor aprovar ou rejeitar adiantamentos e comunicar a decisão ao solicitante. |
| **RF30** | Consultar comparativo histórico de custos entre contratos | <span class="mod-badge mod-3">Módulo 3 / OE3</span> | CAR-05 | Evolutivo | Permite comparar custos consolidados de diferentes contratos e suas variações históricas. |
| **RF31** | Configurar alertas de execução orçamentária | <span class="mod-badge mod-3">Módulo 3 / OE3</span> | CAR-06 | Evolutivo | Permite definir limites de execução orçamentária e gerar alertas quando esses limites forem atingidos. |

### 8.5.2 Catálogo de Requisitos Não Funcionais

| Código | Requisito | Módulo / Universal | URPS+ | Sommerville | Critério Mensurável | Alocação no MVP |
| :---: | :--- | :---: | :--- | :--- | :--- | :---: |
| **RNF01** | Operar em modo offline para coleta de dados em canteiros sem conectividade | <span class="mod-badge mod-1">Módulo 1 / OE1</span> | Reliability | Requisito do Produto — Confiabilidade | Armazenar localmente pelo menos 100 apontamentos e sincronizar em até 30 s após o restabelecimento da conexão. | Evolutivo |
| **RNF02** | Disponibilizar consulta cadastral com tempo de resposta ágil | <span class="mod-badge mod-1">Módulo 1 / OE1</span> | Performance | Requisito do Produto — Desempenho | Busca e renderização da ficha em até 2,0 s em 95% das requisições sob carga nominal. | MVP |
| **RNF03** | Proteger dados pessoais e cadastrais com criptografia em repouso e em trânsito | <span class="mod-badge mod-1">Módulo 1 / OE1</span> | Security (+) | Requisito do Produto — Segurança | Dados sensíveis protegidos com AES-256 e comunicações realizadas com TLS 1.3. | MVP |
| **RNF04** | Garantir usabilidade e agilidade no preenchimento de apontamentos | <span class="mod-badge mod-1">Módulo 1 / OE1</span> | Usability | Requisito do Produto — Usabilidade | Apontamento concluído em até 5 passos/telas e taxa de sucesso ≥ 90% em teste de usabilidade. | MVP |
| **RNF05** | Processar a rotina de fechamento financeiro com alta eficiência | <span class="mod-badge mod-2">Módulo 2 / OE2</span> | Performance | Requisito do Produto — Eficiência/Desempenho | Processar até 500 apontamentos em no máximo 5,0 s em 95 de 100 execuções. | MVP |
| **RNF06** | Garantir exatidão aritmética centesimal em cálculos monetários | <span class="mod-badge mod-2">Módulo 2 / OE2</span> | Reliability | Requisito do Produto — Confiabilidade/Acurácia | Discrepância monetária de exatamente R$ 0,00 em comparação ao gabarito contábil. | MVP |
| **RNF07** | Validar integridade, tamanho e formato de comprovantes | <span class="mod-badge mod-2">Módulo 2 / OE2</span> | Supportability / Security (+) | Requisito do Produto — Suportabilidade | Bloquear arquivos acima de 5 MB ou em formato diferente de PDF, PNG e JPEG. | MVP |
| **RNF08** | Exigir justificativa e auditoria em estornos de fechamento | <span class="mod-badge mod-2">Módulo 2 / OE2</span> | Security (+) | Requisito do Produto — Segurança/Rastreabilidade | Impedir estorno quando a justificativa estiver ausente ou possuir menos de 15 caracteres. | MVP |
| **RNF09** | Carregar painel analítico em tempo inferior a 3 segundos | <span class="mod-badge mod-3">Módulo 3 / OE3</span> | Performance | Requisito do Produto — Eficiência/Desempenho | Renderização completa em até 3,0 s para base de até 10.000 lançamentos e 100 contratos. | MVP |
| **RNF10** | Restringir dados financeiros conforme perfil de acesso | <span class="mod-badge mod-3">Módulo 3 / OE3</span> | Security (+) | Requisito do Produto — Segurança da Informação | 100% das consultas não autorizadas devem ser bloqueadas com HTTP 403. | MVP |
| **RNF11** | Garantir consistência transacional ACID na apropriação de custos | <span class="mod-badge mod-3">Módulo 3 / OE3</span> | Reliability | Requisito do Produto — Confiabilidade/Dependabilidade | Nenhuma duplicidade ou divergência em 100 testes de operações concorrentes. | MVP |
| **RNF12** | Assegurar responsividade do painel em desktop e tablet | <span class="mod-badge mod-3">Módulo 3 / OE3</span> | Usability | Requisito do Produto — Usabilidade | Elementos essenciais devem permanecer utilizáveis em 1024×768 e 768×1024 sem rolagem horizontal. | MVP |
| **RNF13** | Expirar token de acesso temporário em no máximo 8 horas | <span class="mod-badge mod-4">Módulo 4 / OE4</span> | Security (+) | Requisito do Produto — Confiabilidade/Segurança | Tokens com mais de 8 horas devem ser rejeitados com HTTP 401 em 100% dos testes. | MVP |
| **RNF14** | Validar autorização em todas as rotas com dados sensíveis | <span class="mod-badge mod-4">Módulo 4 / OE4</span> | Security (+) | Requisito Externo — Legislativo/Regulamentar (LGPD) | 100% das rotas sensíveis protegidas por RBAC e acesso indevido retornando HTTP 403. | MVP |
| **RNF15** | Garantir atomicidade na gravação dos logs de auditoria | <span class="mod-badge mod-4">Módulo 4 / OE4</span> | Reliability | Requisito do Produto — Confiabilidade/Dependabilidade | Toda escrita em dados sensíveis deve possuir registro de auditoria na mesma transação, com perda zero. | MVP |
| **RNF16** | Reter registros de auditoria por no mínimo 5 anos | <span class="mod-badge mod-4">Módulo 4 / OE4</span> | Supportability / Legal | Requisito Externo — Legislativo (Art. 11 da CLT / Fiscal) | Impedir exclusão de registros com retenção inferior a 1.825 dias. | MVP |
| **RNF17** | Realizar backup automático diário com restauração verificada | <span class="mod-badge mod-4">Módulo 4 / OE4</span> | Reliability | Requisito do Produto — Confiabilidade/Dependabilidade | Backup diário, retenção mínima de 30 dias, restauração em até 4 h e perda máxima de 24 h. | MVP |
| **RNF18** | Garantir disponibilidade mínima mensal do sistema | <span class="mod-badge mod-trans">Universal</span> | Reliability | Requisito do Produto — Confiabilidade | Disponibilidade mínima mensal de 99,5%, com manutenção programada comunicada com antecedência. | MVP |
| **RNF19** | Garantir acessibilidade digital nas interfaces | <span class="mod-badge mod-trans">Universal</span> | Usability | Requisito do Produto — Usabilidade | Navegação por teclado, rótulos ARIA e contraste mínimo 4.5:1, conforme WCAG 2.1 AA. | MVP |
| **RNF20** | Validar integridade de payloads nas rotas de escrita da API | <span class="mod-badge mod-trans">Universal</span> | Reliability / Security (+) | Requisito do Produto — Confiabilidade | 100% das requisições POST, PUT e PATCH validadas por schema; payload inválido retorna HTTP 400. | MVP |

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
| `2.7` | 08/10/2026 | Atualização das referências cruzadas ao capítulo de Priorização e MVP (Seção 8.4) após a refatoração da Matriz 4×4 (Valor × Esforço); nenhum requisito foi alterado. | Eric Araújo | Matheus Ribeiro |
| `3.0` | 08/10/2026 | Atendimento ao feedback docente da apresentação prévia da Unidade 2: remoção do BDD (*Dado-Quando-Então*) da especificação de requisitos, reescrita da seção 8.1 e conversão dos critérios de aceitação dos 31 RFs (OE1 a OE4) para texto corrido, verificável e orientado ao valor de negócio. | Paulo Nery | |
| `3.1` | 11/10/2026 | Consolidação arquitetural e visual do Capítulo 8: reestruturação da especificação modular (8.3) em abas interativas (`pymdownx.tabbed`) em contêiner fluido; alinhamento da Matriz-Síntese (8.4) e Catálogo Geral (8.5) com o Template Oficial (v8); colorização temática por módulo em tabelas e cards; harmonização do sistema externo para *Shifton* e refinamento de links cruzados. | Matheus Ribeiro Szervinsk | Matheus Saraiva Camargo e Eric Araújo |
