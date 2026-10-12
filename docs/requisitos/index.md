# Capítulo 8: Requisitos de Software

Este documento consolida a especificação de **requisitos funcionais** e **não funcionais** do sistema ***DUOC Finance***, estruturados modularmente em torno dos **quatro  Objetivos Específicos (OE)** do produto e suas respectivas **Características (CAR)**, definidas no [Capítulo 2: Solução Proposta](../visao-produto/capitulo-2/index.md).

---

## Visão Geral e Modelo Metodológico

Para assegurar o rigor analítico, a testabilidade e a rastreabilidade exigidos pela disciplina de Engenharia de Requisitos, a especificação adota os seguintes pilares metodológicos:

- **Requisitos Funcionais (RF):** Representam **ações observáveis e deliberadas do usuário** dentro da aplicação que geram valor de negócio mensurável. Rotinas de cálculo interno, processamentos em segundo plano e validações restritivas não são formulados como RFs isolados, mas sim modelados como regras de negócio condicionantes da ação do usuário. Cada RF traz um **Critério de Aceitação** redigido em texto corrido, que descreve o que o usuário consegue fazer, as regras de negócio que condicionam a ação e o resultado observável que permite verificá-la.
- **Regras de Negócio (RN):** Políticas operacionais, fórmulas de cálculo, automatismos do sistema, restrições e invariantes de domínio da **DUOC Arquitetura e Engenharia** que governam a execução das ações dos usuários. As regras são numeradas sequencialmente em escopo global (RN01 a RN31) e mapeadas bidirecionalmente às fontes de elicitação e requisitos executores.
- **Requisitos Não Funcionais (RNF):** Atributos de qualidade e restrições técnicas do produto, classificados simultaneamente pelo modelo **URPS+** (*Usability*, *Reliability*, *Performance*, *Supportability* e o modificador `+` para *Security* e Legais) e pela taxonomia de **Sommerville** (Requisitos do Produto e Requisitos Externos). Cada RNF conta com um **Critério Mensurável** baseado em parâmetros objetivos de verificação.
- **Rastreabilidade Bidirecional:** Mapeamento integral entre Fontes de Elicitação (atas de reuniões, termos de referência, planilhas), Objetivos Específicos (OE), Características (CAR), Regras de Negócio (RN), Requisitos (RF/RNF) e Casos de Teste (CT-Mx-xx).

### Estrutura Modular dos Requisitos

| Módulo | Objetivo Específico | Características Cobertas (CAR) | Requisitos Funcionais (Ação do Usuário) | Requisitos Não Funcionais | Casos de Teste |
| :---: | :--- | :---: | :---: | :---: | :---: |
| <span class="mod-badge mod-1">Módulo 1</span> | [**OE1 — Padronização e Unificação de Dados**](#oe1-padronizacao-e-unificacao-de-dados) | CAR-01, CAR-02, CAR-09, CAR-10 | RF01 a RF04, RF19, RF20, RF22, RF25, RF26, RF32, RF35 e RF36 | RNF01 a RNF04, RNF19 | CT-M1-01 a CT-M1-17 |
| <span class="mod-badge mod-2">Módulo 2</span> | [**OE2 — Eficiência Administrativo-Financeira**](#oe2-eficiencia-administrativo-financeira) | CAR-03, CAR-04 | RF05 a RF08, RF21, RF27, RF28 e RF29 | RNF05 a RNF08 | CT-M2-01 a CT-M2-12 |
| <span class="mod-badge mod-3">Módulo 3</span> | [**OE3 — Inteligência de Custos por Contrato**](#oe3-inteligencia-de-custos-por-contrato) | CAR-05, CAR-06 | RF09 a RF12, RF30, RF31, RF33 e RF34 | RNF09 a RNF12 | CT-M3-01 a CT-M3-12 |
| <span class="mod-badge mod-4">Módulo 4</span> | [**OE4 — Governança, Segurança e Rastreabilidade**](#oe4-governanca-seguranca-e-rastreabilidade) | CAR-07, CAR-08 | RF13 a RF18, RF23 e RF24 | RNF13 a RNF18, RNF20 | CT-M4-01 a CT-M4-15 |

---

## Rastreabilidade Estratégica e Diagramas Visuais

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
    O grafo estrutural da Pirâmide de Abstração acima formaliza a descendência vertical estrita do escopo observável e das ações do usuário (**Objetivo Geral ➔ Objetivos Específicos ➔ Características ➔ Requisitos Funcionais**). Os **Requisitos Não Funcionais (RNFs)**, por constituírem atributos de qualidade sistêmica e restrições arquiteturais (*cross-cutting concerns*), não figuram como folhas exclusivas de uma única funcionalidade, mas qualificam as características e o produto como um todo (por exemplo, segurança e integridade no RNF03 e RNF14, usabilidade no RNF04 e RNF19, e confiabilidade no RNF06 e RNF18). A amarração individualizada e auditável de cada um dos 20 RNFs às CARs e às metas de negócio é detalhada estruturadamente na **Seção 8.3 (Especificação Modular dos Requisitos)** e na **Seção 8.4 (Matriz-Síntese Geral de Rastreabilidade)**.

---

## Especificação Modular dos Requisitos

Esta seção consolida a especificação detalhada dos requisitos do ***DUOC Finance***, decomposta em **quatro módulos de negócio** que respondem diretamente aos Objetivos Específicos (OE1 a OE4) e suas Características de Produto (CAR), distribuindo os atributos de qualidade e requisitos técnicos diretamente nos módulos operacionais correspondentes.

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
    ### Módulo 1 (OE1) — Padronização e Unificação de Dados

    Esta seção detalha os requisitos da **DUOC Finance** associados ao **OE1 — Padronizar e Unificar os Dados**. O módulo cobre as características **CAR-01 — Gestão Cadastral Unificada de Pessoal**, **CAR-02 — Apontamento de Campo e Registros Técnicos de Obra (RVT)**, **CAR-09 — Integração com Shifton e Presenças Homologadas** e **CAR-10 — Importação e Exportação de Dados com ERPs e Planilhas Legadas**.

    !!! note "Alinhamento de Escopo — Ponto Biométrico e Shifton"
        Conforme estabelecido no alinhamento de escopo técnico com a DUOC (Ata de Reunião 02 e CAR-09), o controle formal de frequência biométrica dos colaboradores é suprido externamente pelo sistema *Shifton*. O escopo operacional do DUOC Finance em campo concentra-se estritamente na coleta de apontamentos técnicos de produção por contrato e no preenchimento de Relatórios de Viagem Técnica (RVT).

    #### Requisitos Funcionais

    Os requisitos abaixo expressam as **ações observáveis dos usuários** para gestão da base cadastral e coleta de dados de produção em campo.

    | Código | Requisito (Ação do Usuário) | CAR relacionada | Critério de Aceitação |
    | :---: | :--- | :---: | :--- |
    | **RF01** | **Cadastrar colaborador** | CAR-01 | O RH cadastra um novo profissional informando seus dados pessoais, bancários e trabalhistas, e o sistema grava o registro com um identificador único. Se for concedido acesso ao sistema, é gerado e despachado um link seguro de primeiro acesso e ativação para o e-mail cadastrado (RF17), permitindo definir senha para autenticação subsequente (RF13). Se o CPF informado já existir na base, o cadastro é recusado e nenhum registro novo é criado (RN01, RN03, RN22). |
    | **RF02** | **Atualizar cadastro de colaborador** | CAR-01 | As alterações nos dados cadastrais ou bancários de um colaborador ativo, salvas pelo gestor de RH, passam a valer imediatamente em todos os módulos que usam esses dados, e a versão anterior da ficha fica guardada no histórico (RN23). |
    | **RF03** | **Registrar movimentação funcional** | CAR-01 | O RH registra afastamentos, férias e rescisões, e o status do colaborador é atualizado conforme a movimentação. Em caso de afastamento ou desligamento, o acesso do colaborador à aplicação web responsiva (Web App / PWA) é revogado automaticamente (RN04). |
    | **RF04** | **Submeter apontamento de campo** | CAR-02 | Ao final da jornada em obra ou visita técnica, o colaborador envia pela aplicação web responsiva (Web App / PWA) as horas trabalhadas e o escopo executado, junto com os anexos do apontamento (RF22). O apontamento fica registrado com status "Pendente de Homologação" e passa a aparecer para a supervisão técnica (RN02). |
    | **RF19** | **Consultar apontamentos registrados** | CAR-02 | O colaborador de campo vê na aplicação web apenas os próprios apontamentos (RN16), cada um com data, contrato e status ("Pendente de Homologação", "Homologado" ou "Rejeitado"), e consegue abrir o histórico de qualquer um deles. |
    | **RF20** | **Importar presenças homologadas** | CAR-09 | O analista financeiro escolhe a competência mensal e os contratos e importa as presenças homologadas disponibilizadas pelo painel (*dashboard*) do *Shifton*. Os registros importados ficam vinculados a cada colaborador e contrato na competência escolhida, prontos para a apropriação financeira das horas, e os dados de origem no *Shifton* não são alterados (RN10). |
    | **RF22** | **Anexar evidências e geolocalização ao apontamento** | CAR-02 | Durante o preenchimento de um apontamento na aplicação web responsiva, o colaborador anexa fotos ou comprovantes da atividade, e o sistema tenta registrar a geolocalização do dispositivo no momento de cada anexo. Arquivos e coordenadas ficam vinculados ao apontamento, a lista de anexos pode ser revisada e qualquer item pode ser removido antes do envio; a falta de localização não impede o anexo (RN24). |
    | **RF25** | **Cadastrar tipo de contratação do colaborador** | CAR-01 | No cadastro ou na atualização de um colaborador, o RH escolhe o tipo de contratação entre Diarista, CLT e Prestador de Serviço, e esse tipo fica vinculado ao perfil, determinando as regras que se aplicam a ele (RN22). |
    | **RF26** | **Consultar histórico de alterações cadastrais e bancárias** | CAR-01 | Usuários com permissão de RH e o próprio colaborador consultam o histórico da ficha, que mostra cada versão anterior dos dados cadastrais e bancários com o campo alterado, o autor e a data/hora da alteração (RN23). |
    | **RF32** | **Deliberar apontamento de campo** | CAR-02 | O gestor ou coordenador técnico analisa os apontamentos com status "Pendente de Homologação" sob sua alçada e aprova ou rejeita cada registro. A aprovação transiciona o status para "Homologado", bloqueia edições pelo autor (RN02) e disponibiliza as horas/diárias para apuração financeira (RN05, RN10). A rejeição exige parecer justificatório obrigatório (mínimo 15 caracteres, RN30), atualiza o status para "Rejeitado" e notifica o colaborador para ciência ou retificação. |
    | **RF35** | **Retificar apontamento de campo pendente** | CAR-02 | O colaborador de campo retifica horas, escopo ou anexos de um apontamento submetido enquanto seu status permanecer como "Pendente de Homologação" e dentro do prazo limite de 5 dias úteis (RN02). Uma vez homologado pela supervisão (RF32) ou expirado o prazo de 5 dias úteis, o registro é bloqueado contra edições arbitrárias. |
    | **RF36** | **Exportar dados consolidados em planilha** | CAR-10 | Usuários autorizados selecionam períodos, contratos e centros de custo e exportam os dados consolidados de apontamentos, presenças e apropriações em arquivos de planilha estruturados (formatos abertos CSV e XLSX) para conciliação contábil externa ou arquivamento. |

    #### Regras de Negócio

    1. **RN01 — Unicidade Cadastral por CPF:** O sistema valida compulsoriamente a unicidade do CPF, bloqueando a criação de cadastros duplicados.
    2. **RN02 — Bloqueio Automático de Edição Retroativa:** Apontamentos de campo homologados pela supervisão ou submetidos há mais de 5 dias úteis tornam-se automaticamente bloqueados para edição por usuários de campo.
    3. **RN03 — Validação Cadastral para Lançamentos Financeiros:** O sistema impede a aprovação de qualquer diária, comissão, reembolso ou adiantamento caso o colaborador não esteja com status "Ativo" e dados bancários validados.
    4. **RN04 — Revogação Automática de Acessos:** A transição do status cadastral para "Desligado" ou "Afastado" dispara o cancelamento automático e imediato de tokens e credenciais ativas do usuário na aplicação web responsiva (Web App / PWA).
    5. **RN22 — Tipos de Contratação Válidos:** O sistema restringe o tipo de contratação às opções Diarista, CLT ou Prestador de Serviço, aplicando regras de cálculo de custo específicas por tipo nas rotinas financeiras.
    6. **RN23 — Versionamento Obrigatório de Dados Cadastrais e Bancários:** O sistema preserva toda versão anterior de campo cadastral ou bancário alterado, com autor e carimbo temporal, nunca sobrescrevendo o valor anterior.
    7. **RN24 — Captura de Geolocalização Não Bloqueante:** O sistema tenta capturar a geolocalização do dispositivo no momento do anexo de evidências; caso a permissão seja negada ou a localização esteja indisponível, o anexo prossegue normalmente, sendo sinalizado como "localização não disponível".

    #### Requisitos Não Funcionais

    | Código | Requisito Verificável | URPS+ | Sommerville | Critério Mensurável |
    | :---: | :--- | :--- | :--- | :--- |
    | **RNF01** | **Operar em modo *offline* para coleta de dados em canteiros sem conectividade** | Reliability (Confiabilidade) | Requisito do Produto — Confiabilidade | A aplicação web responsiva (Web App / PWA) em dispositivo móvel deve armazenar localmente, sem perda de dados, no mínimo 100 apontamentos com fotos compactadas sem sinal de rede; exibir alerta visual quando o armazenamento local atingir 80% da capacidade; e sincronizar automaticamente em até 30 segundos após restabelecida a conexão. |
    | **RNF02** | **Disponibilizar consulta cadastral com tempo de resposta ágil** | Performance (Desempenho) | Requisito do Produto — Desempenho | O tempo de resposta para busca, paginação e renderização da ficha unificada de qualquer colaborador deve ser inferior ou igual a 2,0 segundos em 95% das requisições sob carga nominal. |
    | **RNF03** | **Proteger dados pessoais e cadastrais com criptografia em repouso e em trânsito** | Security (+) (Segurança) | Requisito do Produto — Segurança | 100% dos dados pessoais sensíveis armazenados em banco devem utilizar criptografia AES-256, e 100% das comunicações de rede devem transitar sob protocolo TLS 1.3. |
    | **RNF04** | **Garantir usabilidade e agilidade no preenchimento de apontamentos de campo** | Usability (Usabilidade) | Requisito do Produto — Usabilidade | O preenchimento completo de um apontamento diário de campo deve ser concluído por usuários em primeiro uso, sem suporte externo ou treinamento prévio, em no máximo 5 passos/telas, com taxa de conclusão bem-sucedida ≥ 90% em teste de usabilidade. |
    | **RNF19** | **Garantir acessibilidade digital nas interfaces do sistema** | Usability (Usabilidade) | Requisito do Produto — Usabilidade | 100% dos formulários de cadastro e apontamento devem dispor de navegação completa por teclado e rótulos ARIA; contraste mínimo de 4.5:1 em texto, validado por ferramenta automatizada (ex.: axe-core) sem erros críticos, alinhado a WCAG 2.1 nível AA. |

    #### Matriz de Rastreabilidade do Módulo 1

    | Requisito | Objetivo Específico | Característica | Fonte de Elicitação / Origem | Regras de Negócio Associadas | Caso de Teste |
    | :---: | :---: | :---: | :--- | :--- | :--- |
    | **RF01** | OE1 | CAR-01 | Reunião 01, Planilhas Sanitizadas de Pessoal | RN01, RN03, RN22, RN23 | **CT-M1-01:** Submeter cadastro de colaborador e validar persistência, despacho de link de 1º acesso e bloqueio de CPF duplicado. |
    | **RF02** | OE1 | CAR-01 | Reunião 01, Reunião 04 | RN23 | **CT-M1-02:** Atualizar ficha cadastral e verificar propagação em tempo real e versionamento. |
    | **RF03** | OE1 | CAR-01 | Reunião 01, Reunião 04 | RN04 | **CT-M1-03:** Registrar movimentação funcional de colaborador e validar revogação automática de credenciais na aplicação web. |
    | **RF04** | OE1 | CAR-02 | Reunião 03, Reunião 05, TR-01 | RN02 | **CT-M1-04:** Submeter apontamento de campo na aplicação web responsiva com horas e escopo e validar registro com status "Pendente de Homologação" e anexos vinculados. |
    | **RNF01** | OE1 | CAR-02 | Reunião 03, Ata 05 (D4) | — | **CT-M1-05:** Testar persistência local de, no mínimo, 100 registros em modo desconectado sem perda de dados, exibição do alerta visual ao atingir 80% da capacidade e tempo de sincronização ≤ 30 s. |
    | **RNF02** | OE1 | CAR-01 | Reunião 01, Diretrizes de Performance | — | **CT-M1-06:** Medir tempo de resposta da busca e detalhamento de colaboradores (meta ≤ 2,0 s). |
    | **RNF03** | OE1 | CAR-01 | Reunião 04, LGPD Art. 6º | — | **CT-M1-07:** Validar aplicação de criptografia AES-256 na base de dados e TLS 1.3 nas conexões de rede. |
    | **RNF04** | OE1 | CAR-02 | Reunião 03, Feedback FB-06 | — | **CT-M1-08:** Avaliar, em teste de usabilidade com usuários em primeiro uso e sem treinamento, a conclusão do apontamento em no máximo 5 passos/telas com taxa de conclusão bem-sucedida ≥ 90%. |
    | **RF19** | OE1 | CAR-02 | Feedback FB-03, Reunião 03 | RN16 | **CT-M1-09:** Consultar a listagem de apontamentos próprios e validar exibição de status e histórico, bloqueando o acesso a registros de outros colaboradores. |
    | **RF20** | OE1 | CAR-09 | Reunião 02, Reunião 05 (Shifton) | RN10 | **CT-M1-10:** Importar presenças homologadas do *Shifton* para uma competência e validar vínculo por colaborador e contrato, sem alteração dos dados de origem. |
    | **RF22** | OE1 | CAR-02 | Reunião 03, Feedback FB-11 | RN24 | **CT-M1-11:** Anexar fotos e comprovantes a um apontamento em preenchimento, validar a tentativa de captura da geolocalização, o vínculo dos arquivos e coordenadas ao registro e a possibilidade de remover anexos antes da submissão, inclusive quando a localização estiver indisponível. |
    | **RF25** | OE1 | CAR-01 | Reunião 01, Reunião 04 | RN22 | **CT-M1-12:** Cadastrar e atualizar o tipo de contratação de um colaborador com as opções Diarista, CLT e Prestador de Serviço e validar o vínculo correto ao perfil. |
    | **RF26** | OE1 | CAR-01 | Reunião 04, LGPD | RN23 | **CT-M1-13:** Consultar o histórico de alterações cadastrais e bancárias de um colaborador e validar exibição do valor anterior, autor, data/hora e campo alterado. |
    | **RNF19** | OE1 | CAR-01, CAR-02 | Diretrizes WCAG 2.1 AA, Revisão de Pares | — | **CT-M1-14:** Rodar ferramenta de acessibilidade em formulários de cadastro e campo e validar ausência de erros críticos (WCAG 2.1 AA) e navegação completa por teclado. |
    | **RF32** | OE1 | CAR-02 | Reunião 03, Reunião 05, Revisão de Pares, TR-01 | RN02, RN05, RN10, RN30 | **CT-M1-15:** Deliberar apontamento de campo pendente, validando transição para Homologado, bloqueio de edição pela RN02 e exigência de parecer formal com no mínimo 15 caracteres na rejeição. |
    | **RF35** | OE1 | CAR-02 | Reunião 03, Revisão de Pares, TR-01 | RN02 | **CT-M1-16:** Retificar dados e anexos de apontamento em estado pendente dentro da janela de 5 dias úteis e verificar bloqueio após homologação ou expiração do prazo. |
    | **RF36** | OE1 | CAR-10 | Reunião 01, Reunião 05, Revisão de Pares | — | **CT-M1-17:** Exportar dados consolidados de apontamentos e apropriações em arquivos estruturados de planilha nos formatos CSV e XLSX. |

    </div>

=== "Módulo 2: Eficiência Administrativo-Financeira (OE2)"

    <div class="module-spec-pane" markdown="1">

    <a id="oe2-eficiencia-administrativo-financeira"></a>
    <a id="oe2"></a>
    ### Módulo 2 (OE2) — Eficiência Administrativo-Financeira

    Esta seção detalha os requisitos da **DUOC Finance** associados ao **OE2 — Aumentar a Eficiência Administrativo-Financeira**. O módulo cobre as características **CAR-03 — Motor de Processamento e Fechamento Financeiro** e **CAR-04 — Fluxo Digital de Prestação de Contas e Reembolsos**.

    !!! note "Escopo de Fechamento Financeiro e Rotinas Contábeis"
        O motor financeiro do DUOC Finance apoia estritamente a apuração de diárias técnicas e comissões simplificadas de prestadores de serviços e a gestão ágil de reembolsos. O sistema não substitui as rotinas formais de folha de pagamento CLT nem o cálculo de encargos e provisões legais (INSS, FGTS, IRRF), que permanecem nos softwares contábeis legados da DUOC.

    #### Requisitos Funcionais

    Os requisitos abaixo expressam as **ações dos usuários** na condução e supervisão do fechamento mensal e no ciclo de prestação de contas operacionais.

    | Código | Requisito (Ação do Usuário) | CAR relacionada | Critério de Aceitação |
    | :---: | :--- | :---: | :--- |
    | **RF05** | **Solicitar prévia de fechamento** | CAR-03 | Para a competência mensal e os contratos escolhidos, o analista financeiro gera um extrato preliminar que consolida somente os apontamentos técnicos homologados e mostra as diárias e comissões simplificadas calculadas pelas fórmulas parametrizadas (RN25, RN31), para conferência supervisionada (RN05). |
    | **RF06** | **Homologar fechamento financeiro** | CAR-03 | Depois de conferir o extrato preliminar, o gestor financeiro confirma a homologação do lote da competência, e qualquer ajuste feito antes disso exige justificativa formal. Com a homologação, a competência é fechada, os lançamentos ficam bloqueados para alterações diretas e o extrato final é emitido (RN08, RN17). |
    | **RF07** | **Submeter solicitação de reembolso** | CAR-04 | O colaborador solicita o reembolso de uma despesa operacional autorizada informando valor, categoria e contrato, e a solicitação só é aceita com o comprovante fiscal digitalizado anexado (RN06, RN09). Solicitações aceitas ficam com status "Pendente de Análise". |
    | **RF08** | **Deliberar solicitação de reembolso** | CAR-04 | O coordenador técnico ou financeiro analisa somente as solicitações pendentes dos contratos sob sua alçada e aprova ou reprova cada uma, sendo o parecer obrigatório na reprovação. A decisão fica registrada, o status do reembolso é atualizado e o solicitante é notificado (RN07, RN27). |
    | **RF21** | **Estornar fechamento financeiro** | CAR-03 | Diante de uma inconsistência em uma competência já homologada, o gestor financeiro pode estornar o fechamento desde que informe uma justificativa formal (RN08, RNF08). A competência é reaberta para retificação, o fechamento original continua preservado no histórico e o estorno entra na trilha de auditoria com autor, justificativa e data/hora (RN17). |
    | **RF27** | **Configurar tabela de valores de diárias técnicas** | CAR-03 | O gestor financeiro cadastra e atualiza as categorias de diária técnica com valor e período de vigência, e as rotinas financeiras passam a usar o valor vigente correspondente (RN25, RN31). |
    | **RF28** | **Submeter solicitação de adiantamento operacional** | CAR-04 | O colaborador solicita um adiantamento para uma despesa operacional autorizada de um contrato ativo informando valor, categoria, contrato e justificativa. O adiantamento é registrado com status "Pendente de Análise" e fica disponível para a deliberação do responsável (RN03, RN09, RN26). |
    | **RF29** | **Deliberar solicitação de adiantamento operacional** | CAR-04 | O responsável financeiro aprova ou reprova os adiantamentos pendentes de análise, com justificativa obrigatória na reprovação. O status da solicitação é atualizado, a deliberação é registrada e o solicitante é notificado (RN27). |

    #### Regras de Negócio

    1. **RN05 — Homologação Prévia Mandatória:** O sistema consolida exclusivamente apontamentos de RVT e horas técnicas que possuam status prévio de "Homologado" pelo gestor responsável (RF32), aplicando as fórmulas de cálculo de diárias e comissões simplificadas (RN31).
    2. **RN06 — Obrigatoriedade de Comprovante Fiscal:** Nenhuma solicitação de reembolso pode ser submetida sem um comprovante fiscal digital legível anexado, observados os formatos e o tamanho definidos no RNF07.
    3. **RN07 — Limite do Montante Reembolsável:** O sistema impede que o valor aprovado para reembolso ultrapasse o valor nominal discriminado no documento fiscal comprobatório.
    4. **RN08 — Imutabilidade de Lotes Homologados:** O sistema bloqueia modificações diretas em lotes financeiros homologados, exigindo procedimento formal de estorno com justificativa auditável para qualquer retificação.
    5. **RN09 — Vínculo Contratual Obrigatório:** Todo reembolso, adiantamento ou outra despesa operacional deve estar estritamente vinculado a um contrato ativo e a um centro de custos operacional válido.
    6. **RN25 — Vigência dos Valores de Diárias Técnicas:** O sistema deve manter os valores parametrizados de diárias técnicas associados às respectivas categorias e períodos de vigência, utilizando exclusivamente o valor vigente para o cálculo financeiro da competência correspondente.
    7. **RN26 — Elegibilidade do Adiantamento Operacional:** O sistema permite solicitações de adiantamento somente para colaboradores ativos e despesas vinculadas a contrato ativo, mantendo a solicitação em status "Pendente de Análise" até a deliberação do responsável.
    8. **RN27 — Notificação de Pendências Financeiras:** O sistema deve gerar notificação no painel e por e-mail ao responsável sempre que uma solicitação de reembolso ou adiantamento entrar em estado que exija análise ou deliberação, mantendo a pendência identificável até sua resolução.
    9. **RN30 — Justificativa Obrigatória e Bloqueio na Deliberação de Apontamentos:** O gestor deve registrar compulsoriamente parecer justificatório com no mínimo 15 caracteres ao rejeitar um apontamento de campo. A aprovação transiciona o status para "Homologado" e bloqueia compulsoriamente a edição do registro pelo colaborador (RN02), habilitando-o para as rotinas financeiras (RN05).
    10. **RN31 — Parametrização e Fórmulas de Diárias e Comissões Técnicas de Campo:** O sistema apura os valores financeiros de campo estritamente pelas equações: (a) Total de Diárias Técnicas = $\sum (\text{Quantidade de Diárias Homologadas} \times \text{Valor Vigente da Categoria})$ (RF27, RN25); (b) Comissão Técnica Simplificada = $\text{Percentual Contratual Homologado (\%)} \times \text{Valor da Medição Técnica Aprovada no Contrato}$; sem incidência de encargos tributários ou trabalhistas de folha CLT (INSS, FGTS, IRRF), os quais permanecem sob responsabilidade dos sistemas contábeis externos da DUOC.

    #### Requisitos Não Funcionais

    | Código | Requisito Verificável | URPS+ | Sommerville | Critério Mensurável |
    | :---: | :--- | :--- | :--- | :--- |
    | **RNF05** | **Processar a rotina de fechamento financeiro com alta eficiência** | Performance (Desempenho) | Requisito do Produto — Eficiência/Desempenho | Em 95 de 100 execuções sob base sintética de até 500 apontamentos de campo, o tempo de cálculo, consolidação e renderização do extrato deve ocorrer em no máximo 5,0 segundos. |
    | **RNF06** | **Garantir exatidão aritmética centesimal em cálculos monetários** | Reliability (Confiabilidade) | Requisito do Produto — Confiabilidade/Acurácia | Em 100% dos cálculos comparados com o gabarito contábil formal, a discrepância aritmética monetária deve ser de exatamente R$ 0,00, operando com tipos de ponto fixo centesimal sem perdas por arredondamento flutuante. |
    | **RNF07** | **Validar integridade, tamanho e formatos no upload de comprovantes** | Supportability (Suportabilidade) / Security (+) | Requisito do Produto — Suportabilidade | Em 100% das tentativas de envio de arquivos com tamanho superior a 5 MB ou com extensões diferentes de PDF, PNG e JPEG, o sistema deve bloquear o upload exibindo mensagem amigável de erro. |
    | **RNF08** | **Exigir justificativa textual mandatória e auditoria em estornos de fechamento** | Security (+) (Segurança) | Requisito do Produto — Segurança/Rastreabilidade | Em 100% das operações de estorno de fechamento homologado, a transação deve ser sumariamente abortada caso o campo de justificativa formal não seja preenchido ou contenha menos de 15 caracteres. |

    #### Matriz de Rastreabilidade do Módulo 2

    | Requisito | Objetivo Específico | Característica | Fonte de Elicitação / Origem | Regras de Negócio Associadas | Caso de Teste |
    | :---: | :---: | :---: | :--- | :--- | :--- |
    | **RF05** | OE2 | CAR-03 | Reunião 01, Reunião 05, TR-03 | RN03, RN05, RN25, RN31 | **CT-M2-01:** Solicitar prévia de fechamento e validar consolidação de apontamentos homologados e fórmulas de cálculo de diárias e comissões. |
    | **RF06** | OE2 | CAR-03 | Reunião 05, TR-03 | RN08, RN17 | **CT-M2-02:** Homologar fechamento financeiro e validar bloqueio de edições subsequentes. |
    | **RF07** | OE2 | CAR-04 | Reunião 02, Reunião 04, TR-02 | RN03, RN06, RN09 | **CT-M2-03:** Submeter solicitação de reembolso com vínculo a contrato ativo e validar anexação fiscal obrigatória. |
    | **RF08** | OE2 | CAR-04 | Reunião 02, Reunião 05, TR-02 | RN07, RN27 | **CT-M2-04:** Deliberar solicitação de reembolso com registro de parecer justificatório. |
    | **RNF05** | OE2 | CAR-03 | Reunião 05, Diretrizes de Performance | — | **CT-M2-05:** Medir tempo de processamento do fechamento para 500 lançamentos (meta ≤ 5,0 s). |
    | **RNF06** | OE2 | CAR-03 | Reunião 01, Reunião 05, Gabarito Contábil | — | **CT-M2-06:** Validar exatidão monetária centesimal com tolerância zero (discrepância R$ 0,00). |
    | **RNF07** | OE2 | CAR-04 | Reunião 02, Feedback FB-10 | — | **CT-M2-07:** Testar rejeição automática de arquivos corrompidos, acima de 5 MB ou com extensões não homologadas. |
    | **RNF08** | OE2 | CAR-03 | Feedback FB-09, Reunião 05 | — | **CT-M2-08:** Verificar bloqueio de estorno sem preenchimento de justificativa formal auditável. |
    | **RF21** | OE2 | CAR-03 | Feedback FB-09, Reunião 05 | RN08, RN17 | **CT-M2-09:** Estornar fechamento homologado com justificativa formal e validar reabertura da competência, preservação do fechamento original e registro na trilha de auditoria. |
    | **RF27** | OE2 | CAR-03 | Reunião 05, TR-03 | RN25, RN31 | **CT-M2-10:** Cadastrar ou atualizar uma categoria de diária técnica com valor e período de vigência e validar a utilização do valor vigente correspondente. |
    | **RF28** | OE2 | CAR-04 | Reunião 02, Reunião 05, TR-02 | RN03, RN09, RN26 | **CT-M2-11:** Submeter solicitação de adiantamento operacional informando valor, categoria, contrato e justificativa e validar o registro com status "Pendente de Análise". |
    | **RF29** | OE2 | CAR-04 | Reunião 02, Reunião 05, TR-02 | RN27 | **CT-M2-12:** Aprovar e reprovar solicitações de adiantamento operacional, validando atualização de status, registro da deliberação, justificativa em caso de reprovação e notificação ao solicitante. |

    </div>

=== "Módulo 3: Inteligência de Custos por Contrato (OE3)"

    <div class="module-spec-pane" markdown="1">

    <a id="oe3-inteligencia-de-custos-por-contrato"></a>
    <a id="oe3"></a>
    ### Módulo 3 (OE3) — Inteligência de Custos por Contrato

    Esta seção detalha os requisitos da **DUOC Finance** associados ao **OE3 — Transparecer as informações sobre os Custos por Contrato**. O módulo cobre as características **CAR-05 — Apropriação e Rastreabilidade de Custos por Contrato** e **CAR-06 — Painel Analítico de Custo Apropriado e Desvio Orçamentário por Projeto**.

    #### Requisitos Funcionais

    Os requisitos abaixo expressam as **ações analíticas dos gestores** para apropriação, filtragem dinâmica e monitoramento contínuo da saúde financeira das obras.

    | Código | Requisito (Ação do Usuário) | CAR relacionada | Critério de Aceitação |
    | :---: | :--- | :---: | :--- |
    | **RF09** | **Apropriar custos operacionais** | CAR-05 | O gestor dispara a apropriação de custos da competência, e os valores de apontamentos técnicos e diárias já homologados são alocados aos respectivos contratos ativos, sem duplicar nem sobrepor os relatórios de folha CLT legados (RN09, RN10, RN11). |
    | **RF10** | **Consultar rastreabilidade de custos** | CAR-05 | Para qualquer custo apropriado a um contrato, o gestor consegue ver a origem completa da linha de despesa: o apontamento, o executor, a data/hora da homologação e o gestor responsável (RN12). |
    | **RF11** | **Filtrar indicadores de custos** | CAR-06 | No painel de inteligência de custos, usuários autorizados combinam filtros de período, contrato, colaborador e centro de custo, e os valores acumulados, os indicadores e os gráficos são recalculados conforme a combinação escolhida (RN14). |
    | **RF12** | **Monitorar execução orçamentária** | CAR-06 | Na visão executiva de um contrato com meta orçamentária definida, o gestor acompanha o valor previsto, o realizado, o desvio financeiro e o percentual de execução, com destaque visual quando o orçamento é extrapolado (RN13). |
    | **RF30** | **Consultar comparativo histórico de custos entre contratos** | CAR-05 | O gestor seleciona dois ou mais contratos, ativos ou encerrados, e um período de comparação, e o sistema apresenta os custos apropriados de cada contrato com as variações absolutas e percentuais no período (RN28). |
    | **RF31** | **Configurar alertas de execução orçamentária** | CAR-06 | Para um contrato com meta orçamentária definida, o gestor configura o percentual de execução que deve gerar alerta. Quando a execução atinge ou ultrapassa esse limite, o alerta aparece no painel e é enviado por e-mail (RN29). |
    | **RF33** | **Gerenciar contratos de obras e clientes** | CAR-05 | O gestor administrativo-financeiro cadastra, edita e consulta contratos de obras vinculados a clientes, definindo vigência, valor global, objeto, retenções contratuais e condições comerciais, viabilizando o vínculo exigido em despesas, reembolsos e apropriação de custos (RN09, RN11). |
    | **RF34** | **Gerenciar centros de custo e orçamentos de obra** | CAR-06 | O gestor cadastra e atualiza centros de custo vinculados aos contratos ativos e define os tetos orçamentários por categoria de despesa, viabilizando o cálculo percentual de execução (RN13) e o monitoramento de desvios orçamentários (RN29). |

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

    | Requisito | Objetivo Específico | Característica | Fonte de Elicitação / Origem | Regras de Negócio Associadas | Caso de Teste |
    | :---: | :---: | :---: | :--- | :--- | :--- |
    | **RF09** | OE3 | CAR-05 | Reunião 01, Reunião 05, TR-04 | RN09, RN10, RN11 | **CT-M3-01:** Disparar apropriação financeira e validar alocação correta de horas e diárias aos contratos ativos. |
    | **RF10** | OE3 | CAR-05 | Reunião 05, TR-04 | RN12 | **CT-M3-02:** Consultar linha de custo apropriado e verificar exibição da trilha documental de origem. |
    | **RF11** | OE3 | CAR-06 | Reunião 04, Reunião 05, TR-04 | RN14 | **CT-M3-03:** Aplicar simultaneamente filtros por período, contrato, colaborador e centro de custo e validar o recálculo dinâmico dos indicadores e gráficos correspondentes. |
    | **RF12** | OE3 | CAR-06 | Reunião 05, TR-04 | RN13 | **CT-M3-04:** Monitorar painel orçamentário e validar exibição de alertas de extrapolação e percentuais. |
    | **RNF09** | OE3 | CAR-06 | Reunião 05, Diretrizes de Performance | — | **CT-M3-05:** Medir tempo de renderização do painel analítico sob carga de 10.000 registros (meta ≤ 3,0 s). |
    | **RNF10** | OE3 | CAR-05, CAR-06 | Reunião 04, LGPD Art. 6º | RN14 | **CT-M3-06:** Bloquear requisições analíticas fora da alçada do perfil com HTTP 403 Forbidden. |
    | **RNF11** | OE3 | CAR-05 | Reunião 05, Arquitetura ACID | — | **CT-M3-07:** Validar atomicidade transacional e ausência de inconsistências em apropriações concorrentes. |
    | **RNF12** | OE3 | CAR-06 | Reunião 03, Reunião 04 | — | **CT-M3-08:** Inspecionar responsividade e ausência de *scroll* horizontal em resoluções de *desktop* e *tablet*. |
    | **RF30** | OE3 | CAR-05 | Reunião 05 (Visão Executiva) | RN28 | **CT-M3-09:** Selecionar dois ou mais contratos e um período de comparação e validar a apresentação dos custos apropriados, das variações absolutas e das variações percentuais. |
    | **RF31** | OE3 | CAR-06 | Reunião 05, TR-04 | RN29 | **CT-M3-10:** Configurar um limite de execução orçamentária para um contrato e validar o disparo do alerta no painel e por e-mail quando o percentual atingir ou ultrapassar o valor definido. |
    | **RF33** | OE3 | CAR-05 | Reunião 01, Reunião 05, Revisão de Pares, TR-04 | RN09, RN11 | **CT-M3-11:** Cadastrar e atualizar contratos de obra com clientes, vigência, valor global e retenções, validando persistência e vinculação aos fluxos de apropriação. |
    | **RF34** | OE3 | CAR-06 | Reunião 01, Reunião 05, Revisão de Pares, TR-04 | RN09, RN11, RN13, RN29 | **CT-M3-12:** Cadastrar centros de custo e tetos orçamentários por obra e validar aplicação de travas em despesas e cálculo de desvio percentual. |

    </div>

=== "Módulo 4: Governança, Segurança e Rastreabilidade (OE4)"

    <div class="module-spec-pane" markdown="1">

    <a id="oe4-governanca-seguranca-e-rastreabilidade"></a>
    <a id="oe4"></a>
    ### Módulo 4 (OE4) — Governança, Segurança e Rastreabilidade

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
    | **RNF18** | **Garantir disponibilidade mínima mensal do sistema** | Reliability (Confiabilidade) | Requisito do Produto — Confiabilidade | Disponibilidade mínima de 99,5% ao mês, medida por monitoramento externo automatizado, com janelas de manutenção programada comunicadas com no mínimo 24h de antecedência e fora do horário comercial (8h-18h). |
    | **RNF20** | **Validar integridade de payloads em todas as rotas de escrita da API** | Reliability / Security (+) | Requisito do Produto — Confiabilidade | 100% das requisições POST/PUT/PATCH são validadas contra schema de dados antes da persistência; payload malformado retorna HTTP 400 com mensagem de erro estruturada, sem exceção não tratada. |

    #### Matriz de Rastreabilidade do Módulo 4

    | Requisito | Objetivo Específico | Característica | Fonte de Elicitação / Origem | Regras de Negócio Associadas | Caso de Teste |
    | :---: | :---: | :---: | :--- | :--- | :--- |
    | **RF13** | OE4 | CAR-07 | Reunião 04 (Sessão de Acesso) | RN15, RN16 | **CT-M4-01:** Submeter credenciais corporativas válidas e verificar autenticação e emissão de token temporário. |
    | **RF14** | OE4 | CAR-07 | Reunião 04, LGPD | RN16 | **CT-M4-02:** Atribuir perfil RBAC e verificar aplicação imediata e bloqueio de rotas não autorizadas (HTTP 403). |
    | **RF15** | OE4 | CAR-08 | Reunião 05, LGPD | RN17, RN18 | **CT-M4-03:** Consultar log de auditoria com filtros e validar exibição de autor, operação e carimbo temporal UTC. |
    | **RF16** | OE4 | CAR-08 | Reunião 05, CLT Art. 11 | RN18, RN19 | **CT-M4-04:** Exportar dossiê de auditoria e confirmar bloqueio estrito contra comandos de edição ou deleção. |
    | **RNF13** | OE4 | CAR-07 | Reunião 04, Segurança da Informação | RN15 | **CT-M4-05:** Testar expiração compulsória de tokens de sessão após decorridas 8 horas com retorno HTTP 401. |
    | **RNF14** | OE4 | CAR-07 | Reunião 04, LGPD Art. 6º | RN16 | **CT-M4-06:** Validar conformidade regulatória (LGPD) e isolamento horizontal em 100% das rotas de dados sensíveis. |
    | **RNF15** | OE4 | CAR-08 | Reunião 05, Arquitetura de Banco | RN17 | **CT-M4-07:** Confirmar persistência atômica da entrada de auditoria na mesma transação da base de dados. |
    | **RNF16** | OE4 | CAR-08 | CLT Art. 11, Diretrizes Jurídicas | RN19 | **CT-M4-08:** Auditar retenção mínima por 5 anos (1.825 dias) e proteção ativa contra rotinas de expurgo. |
    | **RF17** | OE4 | CAR-07 | Feedback FB-04, Reunião 04 | RN15 | **CT-M4-09:** Solicitar recuperação de senha e validar envio do link com validade de 30 minutos e uso único, sem revelar a existência do e-mail. |
    | **RF18** | OE4 | CAR-07 | Feedback FB-05, Reunião 04 | RN15 | **CT-M4-10:** Encerrar a sessão manualmente e validar invalidação imediata do token e redirecionamento para a tela de login. |
    | **RNF17** | OE4 | CAR-08 | Feedback FB-08, Segurança de Infraestrutura | — | **CT-M4-11:** Executar o backup diário, verificar a integridade e restaurar em ambiente de teste em até 4 horas, confirmando perda máxima de 24 horas de dados e retenção de 30 dias. |
    | **RF23** | OE4 | CAR-07 | Reunião 05, Políticas de Segurança | RN20 | **CT-M4-12:** Simular 5 tentativas de login inválidas em 15 minutos e validar bloqueio temporário de 30 minutos da conta. |
    | **RF24** | OE4 | CAR-07 | Reunião 05, Políticas de Segurança | RN21 | **CT-M4-13:** Simular senha com 90 dias de uso e validar exigência de redefinição; tentar reutilizar uma das últimas 5 senhas e validar bloqueio. |
    | **RNF18** | OE4 | CAR-08 | Diretrizes de SLA, Revisão de Pares | — | **CT-M4-14:** Monitorar uptime mensal da aplicação e validar disponibilidade do sistema ≥ 99,5%, com manutenções comunicadas com antecedência. |
    | **RNF20** | OE4 | CAR-07, CAR-08 | Padrões RESTful, Revisão de Pares | RN15 | **CT-M4-15:** Submeter payloads malformados a todas as rotas de escrita da API e validar rejeição HTTP 400 estruturada, sem exceção não tratada. |

    </div>

---

<a id="matriz-sintese-geral-de-rastreabilidade"></a>
## Matriz-Síntese Geral de Rastreabilidade

A matriz a seguir consolida a **rastreabilidade bidirecional global** entre os Objetivos Específicos (OE), as Características do Produto (CAR), seus respectivos Valores de Negócio (VN), os Requisitos Funcionais (RF), os Requisitos Não Funcionais (RNF) e a suíte executável de Casos de Teste (CT) do sistema.

Esta estruturação atende plenamente ao modelo oficial da **Seção 8.3 do Template (REQ - 2026.1 - v8 OFICIAL)**, correlacionando a **contribuição principal**, a **contribuição secundária** e o valor entregue ao negócio da **DUOC Arquitetura e Engenharia**:

| Contribuição Principal (OE) | Contribuição Secundária (OE) | Característica do Produto (CAR) | Valor de Negócio (VN) | Requisitos Funcionais (RF) | Requisitos Não Funcionais (RNF) | Casos de Teste (CT) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| <span class="mod-badge mod-1">OE1</span> — Padronizar e Unificar os Dados | OE2 — Eficiência Administrativo-Financeira | [**CAR-01:** Gestão Cadastral Unificada de Pessoal](../visao-produto/capitulo-2/index.md#car-01) | Centraliza dados cadastrais, bancários e trabalhistas com identificador único e validação de CPF, eliminando redundâncias e inconsistências em folha e diárias. | RF01, RF02, RF03, RF25, RF26 | RNF02, RNF03, RNF19 | CT-M1-01, CT-M1-02, CT-M1-03, CT-M1-06, CT-M1-07, CT-M1-12, CT-M1-13, CT-M1-14 |
| <span class="mod-badge mod-1">OE1</span> — Padronizar e Unificar os Dados | OE3 — Transparecer os Custos por Contrato | [**CAR-02:** Apontamento de Campo e Registros Técnicos de Obra (RVT)](../visao-produto/capitulo-2/index.md#car-02) | Habilita coleta ágil e padronizada de horas e atividades em canteiros via Web App/PWA, com anexos, geolocalização, retificação pendente e deliberação supervisionada. | RF04, RF19, RF22, RF32, RF35 | RNF01, RNF04, RNF19 | CT-M1-04, CT-M1-05, CT-M1-08, CT-M1-09, CT-M1-11, CT-M1-14, CT-M1-15, CT-M1-16 |
| <span class="mod-badge mod-1">OE1</span> — Padronizar e Unificar os Dados | OE2 — Eficiência Administrativo-Financeira | [**CAR-09:** Integração com Shifton e Presenças Homologadas](../visao-produto/capitulo-2/index.md#car-09) | Reaproveita a solução biométrica Shifton já utilizada pela DUOC, importando presenças homologadas por competência e contrato sem duplicar registros. | RF20 | RNF02 | CT-M1-10 |
| <span class="mod-badge mod-1">OE1</span> — Padronizar e Unificar os Dados | OE2 — Eficiência Administrativo-Financeira | [**CAR-10:** Importação e Exportação de Dados com ERPs e Planilhas Legadas](../visao-produto/capitulo-2/index.md#car-10) | Viabiliza interoperabilidade com ferramentas contábeis e planilhas legadas através de exportação estruturada em formatos abertos CSV e XLSX. | RF36 | RNF02 | CT-M1-17 |
| <span class="mod-badge mod-2">OE2</span> — Aumentar a Eficiência Administrativo-Financeira | OE4 — Governança, Segurança e Rastreabilidade | [**CAR-03:** Motor de Processamento e Fechamento Financeiro](../visao-produto/capitulo-2/index.md#car-03) | Garante celeridade e precisão matemática centesimal no fechamento mensal de diárias e comissões simplificadas, blindando lotes e permitindo estorno auditável. | RF05, RF06, RF21, RF27 | RNF05, RNF06, RNF08 | CT-M2-01, CT-M2-02, CT-M2-05, CT-M2-06, CT-M2-08, CT-M2-09, CT-M2-10 |
| <span class="mod-badge mod-2">OE2</span> — Aumentar a Eficiência Administrativo-Financeira | OE3 — Transparecer os Custos por Contrato | [**CAR-04:** Fluxo Digital de Prestação de Contas e Reembolsos](../visao-produto/capitulo-2/index.md#car-04) | Digitaliza solicitações e deliberações de adiantamentos e reembolsos operacionais com validação obrigatória de comprovantes fiscais e alçadas vinculadas a contratos. | RF07, RF08, RF28, RF29 | RNF07 | CT-M2-03, CT-M2-04, CT-M2-07, CT-M2-11, CT-M2-12 |
| <span class="mod-badge mod-3">OE3</span> — Transparecer os Custos por Contrato | OE1 — Padronizar e Unificar os Dados | [**CAR-05:** Apropriação e Rastreabilidade de Custos por Contrato](../visao-produto/capitulo-2/index.md#car-05) | Gerencia contratos de obra e aloca custos operacionais diretamente a contratos ativos sem rateios arbitrários, assegurando rastreabilidade da origem do gasto. | RF09, RF10, RF30, RF33 | RNF10, RNF11 | CT-M3-01, CT-M3-02, CT-M3-06, CT-M3-07, CT-M3-09, CT-M3-11 |
| <span class="mod-badge mod-3">OE3</span> — Transparecer os Custos por Contrato | OE2 — Eficiência Administrativo-Financeira | [**CAR-06:** Painel Analítico de Custo Apropriado e Desvio Orçamentário](../visao-produto/capitulo-2/index.md#car-06) | Gerencia centros de custo e orçamentos, fornecendo visibilidade gerencial sobre desvios e custos realizados com filtros dinâmicos e alertas preventivos. | RF11, RF12, RF31, RF34 | RNF09, RNF10, RNF12 | CT-M3-03, CT-M3-04, CT-M3-05, CT-M3-08, CT-M3-10, CT-M3-12 |
| <span class="mod-badge mod-4">OE4</span> — Garantir Segurança e Governança de Dados | OE1 — Padronizar e Unificar os Dados | [**CAR-07:** Controle de Acesso Baseado em Papéis (RBAC)](../visao-produto/capitulo-2/index.md#car-07) | Garante confidencialidade e segregação de privilégios de dados via RBAC, validação de integridade de API, governança de senhas, bloqueio por força bruta e expiração de sessão. | RF13, RF14, RF17, RF18, RF23, RF24 | RNF13, RNF14, RNF20 | CT-M4-01, CT-M4-02, CT-M4-05, CT-M4-06, CT-M4-09, CT-M4-10, CT-M4-12, CT-M4-13, CT-M4-15 |
| <span class="mod-badge mod-4">OE4</span> — Garantir Segurança e Governança de Dados | OE2 — Eficiência Administrativo-Financeira | [**CAR-08:** Trilha de Auditoria e Histórico de Operações Sensíveis](../visao-produto/capitulo-2/index.md#car-08) | Assegura rastreabilidade probatória e governança corporativa com trilha de auditoria imutável (*append-only*), retenção quinquenal (CLT Art. 11), backup diário e SLA de 99,5%. | RF15, RF16 | RNF15, RNF16, RNF17, RNF18, RNF20 | CT-M4-03, CT-M4-04, CT-M4-07, CT-M4-08, CT-M4-11, CT-M4-14, CT-M4-15 |

### Síntese Visual de Rastreabilidade por Módulo

Utilize as abas abaixo para consultar o detalhamento metodológico e a síntese executiva de rastreabilidade de cada módulo do sistema, correlacionando objetivos, características, requisitos e casos de teste:

=== "Módulo 1: Padronização e Unificação de Dados (OE1)"

    <div class="week-card card-mod-1">
      <div class="week-card-header">
        <div class="week-card-header-left">
          <span class="week-card-title">Módulo 1: Padronização e Unificação de Dados</span>
          <span class="week-card-period">OE1 • CAR-01, CAR-02, CAR-09, CAR-10</span>
        </div>
        <span class="status-pill pill-mod-1">12 RFs • 5 RNFs • 7 RNs • 17 CTs</span>
      </div>
      <div class="week-card-meta">
        <div class="week-meta-item">
          <span class="week-meta-label">Objetivo Específico Principal</span>
          <span class="week-meta-value">OE1 — Padronizar e unificar os dados cadastrais, operacionais e de apontamento em canteiro</span>
        </div>
        <div class="week-meta-item">
          <span class="week-meta-label">Contribuições Secundárias</span>
          <span class="week-meta-value">OE2 (Eficiência em conferência de diárias) • OE3 (Base para apropriação de custos por contrato)</span>
        </div>
        <div class="week-meta-item">
          <span class="week-meta-label">Valor de Negócio Entregue</span>
          <span class="week-meta-value">Centraliza o cadastro unificado com validação de CPF; viabiliza apontamento de campo via Web App responsivo com fotos, GPS, retificação pendente e deliberação; consome presenças biométricas via Shifton; e exporta planilhas abertas (CSV/XLSX).</span>
        </div>
      </div>
      <div class="week-card-grid">
        <div>
          <div class="week-section-title">Requisitos Funcionais e Regras de Negócio</div>
          <ul>
            <li><strong>RF01:</strong> Cadastrar colaborador (<a href="../visao-produto/capitulo-2/index.md#car-01">CAR-01</a> | RN01: Unicidade mandatória por CPF e link de 1º acesso);</li>
            <li><strong>RF02:</strong> Atualizar cadastro de colaborador (<a href="../visao-produto/capitulo-2/index.md#car-01">CAR-01</a> | Propagação imediata e versionamento);</li>
            <li><strong>RF03:</strong> Registrar movimentação funcional (<a href="../visao-produto/capitulo-2/index.md#car-01">CAR-01</a> | RN04: Revogação automática de acessos);</li>
            <li><strong>RF04:</strong> Submeter apontamento de campo (<a href="../visao-produto/capitulo-2/index.md#car-02">CAR-02</a> | RN02: Bloqueio pós-homologação);</li>
            <li><strong>RF19:</strong> Consultar apontamentos registrados (<a href="../visao-produto/capitulo-2/index.md#car-02">CAR-02</a> | RN16: Menor privilégio, visão própria);</li>
            <li><strong>RF20:</strong> Importar presenças homologadas (<a href="../visao-produto/capitulo-2/index.md#car-09">CAR-09</a> | Integração sem alteração da origem Shifton);</li>
            <li><strong>RF22:</strong> Anexar evidências e geolocalização (<a href="../visao-produto/capitulo-2/index.md#car-02">CAR-02</a> | RN24: Captura de GPS não bloqueante);</li>
            <li><strong>RF25:</strong> Cadastrar tipo de contratação (<a href="../visao-produto/capitulo-2/index.md#car-01">CAR-01</a> | RN22: Diarista, CLT ou Prestador de Serviço);</li>
            <li><strong>RF26:</strong> Consultar histórico de alterações (<a href="../visao-produto/capitulo-2/index.md#car-01">CAR-01</a> | RN23: Versionamento temporal bancário);</li>
            <li><strong>RF32:</strong> Deliberar apontamento de campo (<a href="../visao-produto/capitulo-2/index.md#car-02">CAR-02</a> | RN30: Homologação e rejeição com parecer obrigatório);</li>
            <li><strong>RF35:</strong> Retificar apontamento pendente (<a href="../visao-produto/capitulo-2/index.md#car-02">CAR-02</a> | RN02: Edição permitida em até 5 dias úteis antes da homologação);</li>
            <li><strong>RF36:</strong> Exportar dados consolidados em planilha (<a href="../visao-produto/capitulo-2/index.md#car-10">CAR-10</a> | Formatos interoperáveis CSV e XLSX).</li>
          </ul>
        </div>
        <div>
          <div class="week-section-title">Requisitos Não Funcionais e Casos de Teste</div>
          <ul>
            <li><strong>RNF01 (Confiabilidade):</strong> Operação offline para ≥ 100 apontamentos com sincronização em ≤ 30 s (CT-M1-05);</li>
            <li><strong>RNF02 (Desempenho):</strong> Tempo de consulta cadastral ≤ 2,0 s em 95% das requisições (CT-M1-06);</li>
            <li><strong>RNF03 (Segurança):</strong> Criptografia de dados sensíveis em repouso AES-256 e trânsito em TLS 1.3 (CT-M1-07);</li>
            <li><strong>RNF04 (Usabilidade):</strong> Apontamento em até 5 telas com taxa de conclusão ≥ 90% em 1º uso sem suporte (CT-M1-08);</li>
            <li><strong>RNF19 (Usabilidade):</strong> Acessibilidade digital WCAG 2.1 AA em formulários com suporte a teclado e ARIA (CT-M1-14);</li>
            <li><strong>Rastreabilidade de Testes:</strong> 17 Casos de Teste (CT-M1-01 a CT-M1-17) cobrindo cadastro, modo offline, deliberação, retificação, Shifton, exportação e acessibilidade.</li>
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
        <span class="status-pill pill-mod-2">8 RFs • 4 RNFs • 10 RNs • 12 CTs</span>
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
          <span class="week-meta-value">Automatiza apuração de diárias e comissões com fórmulas parametrizadas (RN31) e tolerância centesimal zero; digitaliza reembolsos e adiantamentos com comprovante; e blinda fechamentos com estorno formal.</span>
        </div>
      </div>
      <div class="week-card-grid">
        <div>
          <div class="week-section-title">Requisitos Funcionais e Regras de Negócio</div>
          <ul>
            <li><strong>RF05:</strong> Solicitar prévia de fechamento (<a href="../visao-produto/capitulo-2/index.md#car-03">CAR-03</a> | RN05/RN31: Apontamentos homologados e fórmulas de diárias/comissões);</li>
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
        <span class="status-pill pill-mod-3">8 RFs • 4 RNFs • 7 RNs • 12 CTs</span>
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
          <span class="week-meta-value">Gerencia contratos e centros de custo; elimina rateios arbitrários alocando despesas aos contratos reais; entrega painel analítico dinâmico de previsto vs. realizado; e dispara alertas orçamentários preventivos.</span>
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
            <li><strong>RF31:</strong> Configurar alertas orçamentários (<a href="../visao-produto/capitulo-2/index.md#car-06">CAR-06</a> | RN29: Disparo de alertas no painel e por e-mail);</li>
            <li><strong>RF33:</strong> Gerenciar contratos de obras e clientes (<a href="../visao-produto/capitulo-2/index.md#car-05">CAR-05</a> | RN09/RN11: Cadastro e vigência contratual);</li>
            <li><strong>RF34:</strong> Gerenciar centros de custo e orçamentos (<a href="../visao-produto/capitulo-2/index.md#car-06">CAR-06</a> | RN13/RN29: Tetos orçamentários e centros de custo).</li>
          </ul>
        </div>
        <div>
          <div class="week-section-title">Requisitos Não Funcionais e Casos de Teste</div>
          <ul>
            <li><strong>RNF09 (Desempenho):</strong> Carga do painel analítico em tempo ≤ 3,0 s para bases com até 10.000 lançamentos (CT-M3-05);</li>
            <li><strong>RNF10 (Segurança):</strong> Bloqueio compulsório com HTTP 403 Forbidden para acessos analíticos fora de alçada (CT-M3-06);</li>
            <li><strong>RNF11 (Confiabilidade):</strong> Consistência transacional ACID em concorrência de inclusão e apropriação (CT-M3-07);</li>
            <li><strong>RNF12 (Usabilidade):</strong> Responsividade completa em desktop e tablet sem rolagem horizontal (CT-M3-08);</li>
            <li><strong>Rastreabilidade de Testes:</strong> 12 Casos de Teste (CT-M3-01 a CT-M3-12) cobrindo atomicidade transacional, filtros, contratos, centros de custo e métricas orçamentárias.</li>
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
        <span class="status-pill pill-mod-4">8 RFs • 7 RNFs • 7 RNs • 15 CTs</span>
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
          <span class="week-meta-value">Assegura isolamento de alçadas via RBAC; mantém trilha de auditoria imutável (append-only); valida integridade estrutural de payloads de API; garante disponibilidade mensal ≥ 99,5%; atende prazo prescricional trabalhista (Art. 11 CLT); e garante rotina de backup diário com restauração ágil.</span>
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
            <li><strong>RNF18 (Confiabilidade):</strong> Disponibilidade mínima mensal de 99,5% monitorada externamente (CT-M4-14);</li>
            <li><strong>RNF20 (Confiabilidade/Segurança):</strong> Validação de 100% dos payloads das rotas de escrita contra schema (CT-M4-15);</li>
            <li><strong>Rastreabilidade de Testes:</strong> 15 Casos de Teste (CT-M4-01 a CT-M4-15) cobrindo RBAC, persistência de auditoria, backup, disponibilidade e integridade de API.</li>
          </ul>
        </div>
      </div>
    </div>

---

<a id="catalogo-geral-consolidado"></a>

## Catálogo Geral Consolidado de Requisitos

Esta seção consolida os requisitos funcionais e não funcionais do **DUOC Finance** em uma visão única, permitindo a consulta rápida de sua identificação, vínculo estratégico, alocação modular e participação preliminar no MVP. Esta seção atende diretamente ao escopo consolidado das seções **8.1 (Lista de Requisitos Funcionais)** e **8.2 (Lista de Requisitos Não Funcionais)** preconizadas pelo Template Oficial da disciplina.

A indicação de MVP apresentada neste catálogo representa o recorte atual do produto e deverá permanecer sincronizada com a priorização formal apresentada no [Priorização de Requisitos e Definição do MVP](priorizacao.md), em especial a Matriz 4 × 4 (Valor de Negócio × Esforço Técnico) e a Fundamentação Matemática das Coordenadas Cartesianas (Seção 10.4).

### Catálogo de Requisitos Funcionais

| Código | Nome | Módulo / OE | CAR | Fonte de Elicitação / Origem | Regras de Negócio Associadas | Prioridade / MVP | Resumo |
| :---: | :--- | :---: | :---: | :--- | :--- | :---: | :--- |
| **RF01** | Cadastrar colaborador | <span class="mod-badge mod-1">Módulo 1 / OE1</span> | CAR-01 | Reunião 01, Reunião 04, TR-01 | RN01, RN03, RN04, RN22 | MVP | Permite ao RH cadastrar colaboradores com dados pessoais, bancários e trabalhistas, gerando token para primeiro acesso (RF17) e garantindo unicidade por CPF. |
| **RF02** | Atualizar cadastro de colaborador | <span class="mod-badge mod-1">Módulo 1 / OE1</span> | CAR-01 | Reunião 04, TR-01 | RN01, RN23 | MVP | Permite atualizar informações cadastrais e bancárias, propagando as alterações e preservando o histórico. |
| **RF03** | Registrar movimentação funcional | <span class="mod-badge mod-1">Módulo 1 / OE1</span> | CAR-01 | Reunião 04, TR-01 | RN03, RN04 | MVP | Registra afastamentos, férias e desligamentos, atualizando a situação funcional do colaborador e revogando acessos. |
| **RF04** | Submeter apontamento de campo | <span class="mod-badge mod-1">Módulo 1 / OE1</span> | CAR-02 | Reunião 03, Reunião 05, TR-01 | RN02, RN04, RN24 | MVP | Permite registrar horas trabalhadas e atividades executadas em obra ou visita técnica via aplicação web responsiva (Web App / PWA). |
| **RF05** | Solicitar prévia de fechamento | <span class="mod-badge mod-2">Módulo 2 / OE2</span> | CAR-03 | Reunião 01, Reunião 05, TR-03 | RN03, RN05, RN25, RN31 | MVP | Consolida apontamentos homologados e calcula a prévia de diárias e comissões da competência pelas fórmulas parametrizadas (RN31). |
| **RF06** | Homologar fechamento financeiro | <span class="mod-badge mod-2">Módulo 2 / OE2</span> | CAR-03 | Reunião 05, TR-03 | RN08, RN17 | MVP | Permite ao gestor confirmar o fechamento financeiro e bloquear alterações diretas posteriores. |
| **RF07** | Submeter solicitação de reembolso | <span class="mod-badge mod-2">Módulo 2 / OE2</span> | CAR-04 | Reunião 02, Reunião 04, TR-02 | RN03, RN06, RN09 | MVP | Permite ao colaborador solicitar reembolso de despesas operacionais vinculadas a contratos com comprovante fiscal digitalizado. |
| **RF08** | Deliberar solicitação de reembolso | <span class="mod-badge mod-2">Módulo 2 / OE2</span> | CAR-04 | Reunião 02, Reunião 05, TR-02 | RN07, RN27 | MVP | Permite ao responsável aprovar ou rejeitar solicitações de reembolso com parecer obrigatório na recusa. |
| **RF09** | Apropriar custos operacionais | <span class="mod-badge mod-3">Módulo 3 / OE3</span> | CAR-05 | Reunião 01, Reunião 05, TR-04 | RN09, RN10, RN11 | MVP | Aloca custos provenientes de apontamentos e diárias homologadas aos respectivos contratos ativos. |
| **RF10** | Consultar rastreabilidade de custos | <span class="mod-badge mod-3">Módulo 3 / OE3</span> | CAR-05 | Reunião 05, TR-04 | RN12 | MVP | Permite identificar a origem documental e autoria de cada custo apropriado a um contrato. |
| **RF11** | Filtrar indicadores de custos | <span class="mod-badge mod-3">Módulo 3 / OE3</span> | CAR-06 | Reunião 04, Reunião 05, TR-04 | RN14 | MVP | Permite combinar filtros de período, contrato, colaborador e centro de custo nos indicadores financeiros. |
| **RF12** | Monitorar execução orçamentária | <span class="mod-badge mod-3">Módulo 3 / OE3</span> | CAR-06 | Reunião 05, TR-04 | RN13 | Evolutivo | Exibe valores previstos, realizados, desvios e percentual de execução orçamentária dos contratos. |
| **RF13** | Efetuar login no sistema | <span class="mod-badge mod-4">Módulo 4 / OE4</span> | CAR-07 | Reunião 01, Reunião 05, Segurança | RN15, RN16 | MVP | Autentica usuários por credenciais corporativas e cria uma sessão com token temporário e permissões associadas ao perfil. |
| **RF14** | Gerenciar perfis de acesso | <span class="mod-badge mod-4">Módulo 4 / OE4</span> | CAR-07 | Reunião 04, Reunião 05, LGPD | RN16 | MVP | Permite ao administrador atribuir papéis e permissões de acesso RBAC aos usuários. |
| **RF15** | Consultar trilha de auditoria | <span class="mod-badge mod-4">Módulo 4 / OE4</span> | CAR-08 | Reunião 05, Auditoria | RN17, RN19 | Evolutivo | Permite consultar eventos auditáveis por período, usuário, operação, módulo e faixa de valor. |
| **RF16** | Exportar relatório de auditoria | <span class="mod-badge mod-4">Módulo 4 / OE4</span> | CAR-08 | Reunião 05, Legal | RN17, RN19 | Evolutivo | Gera relatórios estruturados em PDF/CSV com o histórico de operações auditadas para fins probatórios. |
| **RF17** | Recuperar credenciais de acesso | <span class="mod-badge mod-4">Módulo 4 / OE4</span> | CAR-07 | Reunião 05, Segurança | RN15 | MVP | Permite redefinir a senha ou ativar primeiro acesso por link temporário enviado ao e-mail cadastrado sem enumeração de contas. |
| **RF18** | Encerrar sessão manualmente | <span class="mod-badge mod-4">Módulo 4 / OE4</span> | CAR-07 | Reunião 05, Segurança | RN15 | MVP | Permite ao usuário efetuar logout e invalidar imediatamente o token de sessão ativo. |
| **RF19** | Consultar apontamentos registrados | <span class="mod-badge mod-1">Módulo 1 / OE1</span> | CAR-02 | Reunião 03, Reunião 05, TR-01 | RN02, RN05, RN30 | MVP | Permite ao colaborador consultar seus próprios apontamentos e respectivos status de homologação ou rejeição. |
| **RF20** | Importar presenças homologadas | <span class="mod-badge mod-1">Módulo 1 / OE1</span> | CAR-09 | Reunião 02, Reunião 05 | RN10 | Evolutivo | Importa registros homologados do sistema externo *Shifton* e os associa a colaboradores e contratos. |
| **RF21** | Estornar fechamento financeiro | <span class="mod-badge mod-2">Módulo 2 / OE2</span> | CAR-03 | Feedback FB-09, Reunião 05 | RN08, RN17 | Evolutivo | Permite reabrir uma competência homologada mediante justificativa formal obrigatória e registro na auditoria. |
| **RF22** | Anexar evidências e geolocalização ao apontamento | <span class="mod-badge mod-1">Módulo 1 / OE1</span> | CAR-02 | Reunião 03, Feedback FB-11 | RN24 | MVP | Permite anexar fotos e comprovantes ao apontamento e associar geolocalização quando disponível no dispositivo. |
| **RF23** | Bloquear acesso após tentativas falhas consecutivas | <span class="mod-badge mod-4">Módulo 4 / OE4</span> | CAR-07 | Reunião 05, Segurança | RN20 | MVP | Bloqueia temporariamente a autenticação por 30 minutos após 5 tentativas inválidas consecutivas. |
| **RF24** | Expirar senha periodicamente e impedir reutilização | <span class="mod-badge mod-4">Módulo 4 / OE4</span> | CAR-07 | Reunião 05, Segurança | RN21 | Evolutivo | Exige renovação periódica da senha a cada 90 dias e impede a reutilização das 5 senhas anteriores. |
| **RF25** | Cadastrar tipo de contratação do colaborador | <span class="mod-badge mod-1">Módulo 1 / OE1</span> | CAR-01 | Reunião 01, Reunião 04 | RN22 | MVP | Classifica o colaborador como Diarista, CLT ou Prestador de Serviço para aplicação das regras correspondentes. |
| **RF26** | Consultar histórico de alterações cadastrais e bancárias | <span class="mod-badge mod-1">Módulo 1 / OE1</span> | CAR-01 | Reunião 04, LGPD | RN23 | MVP | Permite consultar versões anteriores dos dados cadastrais e bancários, registrando autoria, data e valor modificado. |
| **RF27** | Configurar tabela de valores de diárias técnicas | <span class="mod-badge mod-2">Módulo 2 / OE2</span> | CAR-03 | Reunião 05, TR-03 | RN25, RN31 | MVP | Permite parametrizar valores de diárias técnicas, categorias e períodos de vigência utilizados nos cálculos financeiros. |
| **RF28** | Submeter solicitação de adiantamento operacional | <span class="mod-badge mod-2">Módulo 2 / OE2</span> | CAR-04 | Reunião 02, Reunião 05, TR-02 | RN03, RN09, RN26 | MVP | Permite solicitar antecipadamente recursos para despesas operacionais vinculadas a contratos ativos. |
| **RF29** | Deliberar solicitação de adiantamento operacional | <span class="mod-badge mod-2">Módulo 2 / OE2</span> | CAR-04 | Reunião 02, Reunião 05, TR-02 | RN27 | MVP | Permite ao gestor aprovar ou rejeitar adiantamentos, exigindo parecer formal na recusa. |
| **RF30** | Consultar comparativo histórico de custos entre contratos | <span class="mod-badge mod-3">Módulo 3 / OE3</span> | CAR-05 | Reunião 05 (Visão Executiva) | RN28 | Evolutivo | Permite comparar custos consolidados de múltiplos contratos e suas variações absolutas e percentuais. |
| **RF31** | Configurar alertas de execução orçamentária | <span class="mod-badge mod-3">Módulo 3 / OE3</span> | CAR-06 | Reunião 05, TR-04 | RN29 | Evolutivo | Permite definir limites de execução orçamentária e gerar alertas preventivos no painel e por e-mail. |
| **RF32** | Deliberar apontamento de campo | <span class="mod-badge mod-1">Módulo 1 / OE1</span> | CAR-02 | Reunião 03, Reunião 05, TR-01 | RN02, RN05, RN10, RN30 | MVP | Permite ao gestor homologar ou rejeitar apontamentos de campo pendentes, exigindo parecer na rejeição e bloqueando edição após homologação. |
| **RF33** | Gerenciar contratos de obras e clientes | <span class="mod-badge mod-3">Módulo 3 / OE3</span> | CAR-05 | Reunião 01, Reunião 05, TR-04 | RN09, RN11 | MVP | Permite cadastrar, editar e consultar contratos de obras com clientes, vigência, valores e retenções, viabilizando o vínculo exigido em despesas. |
| **RF34** | Gerenciar centros de custo e orçamentos de obra | <span class="mod-badge mod-3">Módulo 3 / OE3</span> | CAR-06 | Reunião 01, Reunião 05, TR-04 | RN09, RN11, RN13, RN29 | MVP | Permite cadastrar centros de custo por contrato e definir tetos orçamentários por categoria de despesa, viabilizando o monitoramento de desvios orçamentários. |
| **RF35** | Retificar apontamento de campo pendente | <span class="mod-badge mod-1">Módulo 1 / OE1</span> | CAR-02 | Reunião 03, TR-01 | RN02 | MVP | Permite ao colaborador editar dados e anexos de apontamentos ainda pendentes de homologação dentro de até 5 dias úteis. |
| **RF36** | Exportar dados consolidados em planilha CSV/XLSX | <span class="mod-badge mod-1">Módulo 1 / OE1</span> | CAR-10 | Reunião 01, Reunião 05 | — | Evolutivo | Permite exportar dados consolidados de apontamentos técnicos e fechamentos em planilhas estruturadas nos formatos CSV e XLSX. |

### Catálogo de Requisitos Não Funcionais

| Código | Requisito | Módulo / OE | URPS+ | Sommerville | Critério Mensurável | Alocação no MVP |
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
| **RNF18** | Garantir disponibilidade mínima mensal do sistema | <span class="mod-badge mod-4">Módulo 4 / OE4</span> | Reliability | Requisito do Produto — Confiabilidade | Disponibilidade mínima mensal de 99,5%, com manutenção programada comunicada com antecedência. | MVP |
| **RNF19** | Garantir acessibilidade digital nas interfaces | <span class="mod-badge mod-1">Módulo 1 / OE1</span> | Usability | Requisito do Produto — Usabilidade | Navegação por teclado, rótulos ARIA e contraste mínimo 4.5:1, conforme WCAG 2.1 AA. | MVP |
| **RNF20** | Validar integridade de payloads nas rotas de escrita da API | <span class="mod-badge mod-4">Módulo 4 / OE4</span> | Reliability / Security (+) | Requisito do Produto — Confiabilidade | 100% das requisições POST, PUT e PATCH validadas por schema; payload inválido retorna HTTP 400. | MVP |

### Catálogo Geral de Regras de Negócio (RN01 a RN31)

A tabela a seguir estabelece a **rastreabilidade bidirecional completa** entre as Regras de Negócio (RN01 a RN31), os Módulos/Características do sistema, os Requisitos Funcionais que as implementam ou são por elas condicionados, e as Fontes de Elicitação originais:

| Código | Regra de Negócio | Módulo / CAR | Requisitos Funcionais Relacionados | Fonte de Elicitação / Origem |
| :---: | :--- | :---: | :--- | :--- |
| **RN01** | Unicidade e Validação Cadastral por CPF | <span class="mod-badge mod-1">Módulo 1 / CAR-01</span> | RF01, RF02 | Reunião 01, Reunião 04 |
| **RN02** | Bloqueio Temporal e Imutabilidade de Apontamentos Homologados | <span class="mod-badge mod-1">Módulo 1 / CAR-02</span> | RF04, RF19, RF32, RF35 | Reunião 03, Reunião 05, TR-01 |
| **RN03** | Inativação de Colaboradores em Rotinas Financeiras Ativas | <span class="mod-badge mod-1">Módulo 1 / CAR-01</span> | RF01, RF03, RF05, RF07, RF28 | Reunião 04, TR-01 |
| **RN04** | Bloqueio de Apontamentos para Colaboradores Desligados | <span class="mod-badge mod-1">Módulo 1 / CAR-01</span> | RF01, RF03, RF04 | Reunião 04, TR-01 |
| **RN05** | Homologação Prévia Mandatória para Fechamento Financeiro | <span class="mod-badge mod-2">Módulo 2 / CAR-03</span> | RF05, RF19, RF32 | Reunião 01, Reunião 05, TR-03 |
| **RN06** | Obrigatoriedade de Comprovante Fiscal em Reembolsos | <span class="mod-badge mod-2">Módulo 2 / CAR-04</span> | RF07 | Reunião 02, Reunião 04, TR-02 |
| **RN07** | Limite do Montante Reembolsável ao Documento Fiscal | <span class="mod-badge mod-2">Módulo 2 / CAR-04</span> | RF08 | Reunião 02, TR-02 |
| **RN08** | Imutabilidade de Lotes Homologados e Exigência de Estorno Auditável | <span class="mod-badge mod-2">Módulo 2 / CAR-03</span> | RF06, RF21 | Reunião 05, Feedback FB-09 |
| **RN09** | Vínculo Contratual Mandatório em Reembolsos e Adiantamentos | <span class="mod-badge mod-2">Módulo 2 / CAR-04</span> | RF07, RF28, RF33, RF34 | Reunião 02, Reunião 05, TR-02 |
| **RN10** | Condição de Homologação para Apropriação Financeira | <span class="mod-badge mod-3">Módulo 3 / CAR-05</span> | RF09, RF20, RF32 | Reunião 01, Reunião 05, TR-04 |
| **RN11** | Vínculo Contratual Mandatório na Apropriação de Custos | <span class="mod-badge mod-3">Módulo 3 / CAR-05</span> | RF09, RF33, RF34 | Reunião 01, Reunião 05, TR-04 |
| **RN12** | Versionamento e Rastreabilidade Documental Integral de Custos | <span class="mod-badge mod-3">Módulo 3 / CAR-05</span> | RF10 | Reunião 05, TR-04 |
| **RN13** | Cálculo Padronizado de Execução Orçamentária | <span class="mod-badge mod-3">Módulo 3 / CAR-06</span> | RF12, RF34 | Reunião 05, TR-04 |
| **RN14** | Segregação de Visualização Salarial e Sigilo de Remunerações | <span class="mod-badge mod-3">Módulo 3 / CAR-06</span> | RF11 | Reunião 04, LGPD Art. 6º |
| **RN15** | Autenticação Mandatória com Token Temporário Válido | <span class="mod-badge mod-4">Módulo 4 / CAR-07</span> | RF13, RF17, RF18 | Reunião 01, Reunião 05 |
| **RN16** | Princípio do Menor Privilégio e Segregação de Alçadas (RBAC) | <span class="mod-badge mod-4">Módulo 4 / CAR-07</span> | RF13, RF14 | Reunião 04, Reunião 05, LGPD |
| **RN17** | Registro Automático e Imutabilidade da Trilha de Auditoria | <span class="mod-badge mod-4">Módulo 4 / CAR-08</span> | RF06, RF15, RF16, RF21 | Reunião 05, Auditoria |
| **RN18** | Prevenção de Desvios Financeiros com Tolerância Zero | <span class="mod-badge mod-2">Módulo 2 / CAR-03</span> | RF05, RF06 | Reunião 01, Reunião 05, RNF06 |
| **RN19** | Retenção Probatória e Tempestividade de Registros Auditáveis | <span class="mod-badge mod-4">Módulo 4 / CAR-08</span> | RF15, RF16 | Reunião 05, CLT Art. 11 |
| **RN20** | Bloqueio Temporal Preventivo por Tentativas Falhas Consecutivas | <span class="mod-badge mod-4">Módulo 4 / CAR-07</span> | RF23 | Reunião 05, Diretrizes de Segurança |
| **RN21** | Renovação Periódica Compulsória e Descarte de Senhas Anteriores | <span class="mod-badge mod-4">Módulo 4 / CAR-07</span> | RF24 | Reunião 05, Diretrizes de Segurança |
| **RN22** | Enquadramento Trabalhista por Tipo de Contratação | <span class="mod-badge mod-1">Módulo 1 / CAR-01</span> | RF01, RF25 | Reunião 01, Reunião 04 |
| **RN23** | Imutabilidade do Histórico de Alterações Cadastrais e Bancárias | <span class="mod-badge mod-1">Módulo 1 / CAR-01</span> | RF02, RF26 | Reunião 04, LGPD |
| **RN24** | Validação de Evidências Fotográficas e Geolocalização de Campo | <span class="mod-badge mod-1">Módulo 1 / CAR-02</span> | RF04, RF22 | Reunião 03, Feedback FB-11 |
| **RN25** | Vigência Parametrizada dos Valores de Diárias Técnicas | <span class="mod-badge mod-2">Módulo 2 / CAR-03</span> | RF05, RF27 | Reunião 05, TR-03 |
| **RN26** | Elegibilidade e Vínculo Contratual de Adiantamentos Operacionais | <span class="mod-badge mod-2">Módulo 2 / CAR-04</span> | RF28 | Reunião 02, Reunião 05, TR-02 |
| **RN27** | Notificação Compulsória de Pendências Financeiras | <span class="mod-badge mod-2">Módulo 2 / CAR-04</span> | RF08, RF29 | Reunião 02, Reunião 05 |
| **RN28** | Apuração de Variações Absolutas e Relativas em Comparativos de Custo | <span class="mod-badge mod-3">Módulo 3 / CAR-05</span> | RF30 | Reunião 05 (Visão Executiva) |
| **RN29** | Disparo de Alertas Preventivos de Extrapolação Orçamentária | <span class="mod-badge mod-3">Módulo 3 / CAR-06</span> | RF31, RF34 | Reunião 05, TR-04 |
| **RN30** | Parecer Obrigatório na Rejeição e Bloqueio na Aprovação de Campo | <span class="mod-badge mod-1">Módulo 1 / CAR-02</span> | RF19, RF32 | Reunião 03, Reunião 05, Revisão de Pares |
| **RN31** | Parametrização e Fórmulas de Diárias e Comissões Técnicas de Campo | <span class="mod-badge mod-2">Módulo 2 / CAR-03</span> | RF05, RF27 | Reunião 01, Reunião 05, Revisão de Pares |

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
| `3.2` | 12/10/2026 | Saneamento e ajustes decorrentes da revisão por pares: inclusão de RF32 (deliberação de campo), RF33 (gestão de contratos), RF34 (centros de custo e orçamentos), RF35 (retificação de apontamento) e RF36 (exportação CSV/XLSX); adição de RN30 e RN31 (fórmulas e parâmetros de diárias e comissões); explicitação de fontes de elicitação e regras de negócio no Catálogo de RFs e CTs; criação do Catálogo Geral de Regras de Negócio (RN01 a RN31) com rastreabilidade bidirecional; redistribuição modular dos RNFs universais (RNF18 a RNF20); eliminação de promessas de folha CLT legadas; e padronização para aplicação web responsiva (Web App / PWA). | Matheus Ribeiro Szervinsk | Eric Araújo e Matheus Saraiva Camargo |
