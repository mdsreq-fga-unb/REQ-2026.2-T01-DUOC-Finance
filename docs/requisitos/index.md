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
| <span class="mod-badge mod-1">Módulo 1</span> | [**OE1 — Padronização e Unificação de Dados**](modulo-1.md) | CAR-01, CAR-02, CAR-09, CAR-10 | RF01 a RF04, RF19, RF20, RF22, RF25, RF26, RF32, RF35 e RF36 | RNF01 a RNF04, RNF19 | CT-M1-01 a CT-M1-17 |
| <span class="mod-badge mod-2">Módulo 2</span> | [**OE2 — Eficiência Administrativo-Financeira**](modulo-2.md) | CAR-03, CAR-04 | RF05 a RF08, RF21, RF27, RF28 e RF29 | RNF05 a RNF08 | CT-M2-01 a CT-M2-12 |
| <span class="mod-badge mod-3">Módulo 3</span> | [**OE3 — Inteligência de Custos por Contrato**](modulo-3.md) | CAR-05, CAR-06 | RF09 a RF12, RF30, RF31, RF33, RF34 e RF37 a RF40 | RNF09 a RNF12 | CT-M3-01 a CT-M3-16 |
| <span class="mod-badge mod-4">Módulo 4</span> | [**OE4 — Governança, Segurança e Rastreabilidade**](modulo-4.md) | CAR-07, CAR-08 | RF13 a RF18, RF23 e RF24 | RNF13 a RNF18, RNF20 | CT-M4-01 a CT-M4-15 |

### Atores do Sistema e Matriz Canônica de Papéis (RBAC)

Para sanar ambiguidades de papéis decorrentes da multiplicidade de funções operacionais da engenharia civil e alinhar os requisitos à realidade sociotécnica da **DUOC Arquitetura e Engenharia** (conforme mapeado no [Mapa de Stakeholders](../visao-produto/capitulo-1/index.md#16-mapa-de-stakeholders) e na [Segmentação IHC](../visao-produto/capitulo-1/index.md#17-segmentacao-de-usuarios-e-perfis-de-ihc)), a especificação estabelece **quatro papéis sistêmicos de acesso (*roles*) canônicos**, aplicados rigorosamente em todas as telas, regras de negócio e rotinas de API da aplicação (RF14, RN16):

| Papel Sistêmico (RBAC) | Código no Sistema | Descrição Operacional das Atribuições | Mapeamento com Stakeholders da DUOC |
| :--- | :---: | :--- | :--- |
| **Técnico de Campo / Diarista** | `TECNICO_CAMPO` | Preenche e retifica apontamentos de produção e horas de campo (RVT) via aplicação web responsiva (RF04, RF35), anexa fotos e evidências da atividade (RF22), consulta exclusivamente os próprios registros (RF19) e submete solicitações de reembolso e adiantamento operacional (RF07, RF28). | Operários, diaristas, técnicos residentes, arquitetos em visita técnica e estagiários. |
| **Gestor Operacional de Obras** | `GESTOR_OBRAS` | Cadastra, atualiza e consulta contratos de obras (RF33, RF37, RF38), cadastra e atualiza centros de custo (RF34, RF39), define tetos orçamentários por obra (RF40) e delibera apontamentos de campo de sua alçada com homologação ou rejeição justificada (RF32). | Mapeamento a confirmar com a equipe e a cliente. |
| **Administrador Financeiro** | `ADMIN_FINANCEIRO` | Gerencia o cadastro de colaboradores (RF01, RF02, RF03, RF25, RF26), configura a tabela vigente de diárias (RF27), emite prévias (RF05), homologa fechamentos mensais (RF06), delibera despesas e reembolsos (RF08, RF29), dispara apropriações de custos (RF09) e exporta dados consolidados (RF36). | **Auxiliar-Administradora (Maria Beatryz)**, que na estrutura corporativa enxuta da DUOC centraliza rotinas de DP/RH, contas a pagar e finanças. |
| **Administrador do Sistema** | `ADMIN_SISTEMA` | Gerencia perfis e atribuição de papéis de usuários (RF14), monitora a segurança global da plataforma, expiração de senhas e bloqueios por tentativas falhas (RF23, RF24), e audita eventos probatórios (RF15, RF16). | Sócios-diretores e equipe técnica responsável pela sustentação de TI e governança da segurança da informação. |

**Alinhamento Sociotécnico e Centralização Operacional:** Na estrutura organizacional enxuta da DUOC Arquitetura e Engenharia, a colaboradora parceira Maria Beatryz (Auxiliar-Administradora) concentra na rotina real tanto as atribuições de Recursos Humanos/Departamento Pessoal quanto de Contas a Pagar e Finanças. Por essa razão, a especificação técnica do *DUOC Finance* unifica essas operações sob o papel sistêmico de **Administrador Financeiro**, garantindo aderência rigorosa à realidade da empresa e eliminando referências fragmentadas a cargos inexistentes na organização parceira.

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

> **Nota de atualização (22/10/2026):** As representações gráficas de rastreabilidade ainda refletem a estrutura anterior à decomposição dos RF33 e RF34. Os requisitos RF37 a RF40 já estão documentados nas tabelas e matrizes de rastreabilidade atualizadas. A atualização das imagens e do diagrama original no Miro permanece pendente.
**Rastreabilidade dos Requisitos Não Funcionais na Pirâmide de Abstração:** O grafo estrutural da Pirâmide de Abstração acima formaliza a descendência vertical estrita do escopo observável e das ações do usuário (**Objetivo Geral ➔ Objetivos Específicos ➔ Características ➔ Requisitos Funcionais**). Os **Requisitos Não Funcionais (RNFs)**, por constituírem atributos de qualidade sistêmica e restrições arquiteturais (*cross-cutting concerns*), não figuram como folhas exclusivas de uma única funcionalidade, mas qualificam as características e o produto como um todo (por exemplo, segurança e integridade no RNF03 e RNF14, usabilidade no RNF04 e RNF19, e confiabilidade no RNF06 e RNF18). A amarração individualizada e auditável de cada um dos 20 RNFs às CARs e às metas de negócio é detalhada na [Especificação Modular dos Requisitos](#especificacao-modular-dos-requisitos) e na [Matriz-Síntese Geral de Rastreabilidade](#matriz-sintese-geral-de-rastreabilidade).

---

### Mapeamento de Necessidades do Cliente (Dores do Ishikawa e Rich Picture ➔ Requisitos)

A rastreabilidade horizontal do **DUOC Finance** conecta diretamente as causas-raiz identificadas no [Diagrama de Causa e Efeito (Ishikawa)](../visao-produto/capitulo-1/index.md#diagrama-de-causa-e-efeito-ishikawa) (estruturado nas 4 categorias adaptadas: *Métodos*, *Medição*, *Tecnologia* e *Pessoas*) e as tensões operacionais do [Rich Picture](../visao-produto/capitulo-1/index.md#rich-picture-fluxo-sociotecnico) (TR-01 a TR-04) às respostas arquiteturais e funcionais da solução, cobrindo o catálogo atual de **40 Requisitos Funcionais** e **20 Requisitos Não Funcionais** projetados para mitigar as dores operacionais da organização parceira.

<div class="cronograma-diagram-box" markdown="1">

![Mapeamento de Necessidades do Cliente](../assets/images/requisitos/mapeamento_necessidades_duoc_light.png#only-light){ .img-light-mode }
![Mapeamento de Necessidades do Cliente](../assets/images/requisitos/mapeamento_necessidades_duoc_dark.png#only-dark){ .img-dark-mode }

<p align="center"><small><em>Figura 8.2: Mapeamento de Necessidades do Cliente — Correlação entre Dores Operacionais e Respostas Sistêmicas (Clique na imagem para zoom interativo via glightbox).</em></small></p>

</div>

| Dimensão da Causa-Raiz | Tensão Operacional (Rich Picture) | Problema / Fricção no Cenário Atual | Resposta Sistêmica (DUOC Finance) | Requisitos Funcionais Associados (RF) | Requisitos Não Funcionais Críticos (RNF) | Módulo / CAR |
| :--- | :--- | :--- | :--- | :--- | :--- | :---: |
| **Métodos & Medição**<br><br>*(Ishikawa)* | **Tensão TR-02**<br><br>Conferência manual de horas e fechamento em planilhas fragmentadas | **Fechamento mensal de diárias moroso e vulnerável a erros aritméticos:** A Auxiliar-Administradora gasta dias compilando anotações físicas de canteiro e mensagens para calcular diárias técnicas e comissões, gerando divergências com prestadores e atrasos na emissão de prévias. | **Motor de apuração automatizado e conferência supervisionada:** Centralização dos apontamentos homologados em prévia de fechamento financeiro, cálculo automático com fórmulas parametrizadas (RN31), bloqueio compulsório de lotes aprovados e estorno auditável com histórico preservado. | • **RF05:** Solicitar prévia de fechamento<br>• **RF06:** Homologar fechamento financeiro<br>• **RF21:** Estornar fechamento financeiro<br>• **RF27:** Configurar tabela de valores de diárias técnicas | • **RNF05:** Fechamento em ≤ 5,0 s sob 500 registros<br>• **RNF06:** Exatidão monetária centesimal (tolerância R$ 0,00)<br>• **RNF08:** Não-repúdio e justificativa formal (≥ 15 caracteres) | **Módulo 2 (OE2)**<br><br>[CAR-03](../visao-produto/capitulo-2/index.md#car-03) |
| **Materiais & Processos**<br><br>*(Ishikawa)* | **Tensões TR-01 e TR-02**<br><br>Envio de recibos térmicos por WhatsApp e notas perdidas | **Extravio de notas fiscais físicas e anotações informais de campo:** Colaboradores em obras remotas enviam comprovantes em papel térmico que apaga ou mensagens informais de WhatsApp, provocando perda de cupons fiscais, atrasos em reembolsos e falta de comprovação perante clientes. | **Coleta web móvel padronizada e fluxo digital de prestação de contas:** Aplicação web responsiva para envio de apontamentos de campo (RVT) com upload seguro de evidências, captura de coordenadas, retificação de itens pendentes e fluxo deliberativo com parecer obrigatório. | • **RF04:** Submeter apontamento de campo<br>• **RF07:** Submeter solicitação de reembolso<br>• **RF08:** Deliberar solicitação de reembolso<br>• **RF19:** Consultar apontamentos registrados<br>• **RF22:** Anexar evidências e geolocalização ao apontamento<br>• **RF28:** Submeter solicitação de adiantamento operacional<br>• **RF29:** Deliberar solicitação de adiantamento operacional<br>• **RF32:** Deliberar apontamento de campo<br>• **RF35:** Retificar apontamento de campo | • **RNF01:** Modo offline com fila mínima de 100 registros<br>• **RNF04:** Usabilidade em até 5 passos/telas (taxa ≥ 90%)<br>• **RNF07:** Validação de anexos (≤ 5 MB, magic numbers MIME)<br>• **RNF19:** Acessibilidade WCAG 2.1 AA | **Módulo 1 (OE1)**<br>[CAR-02](../visao-produto/capitulo-2/index.md#car-02)<br><br>**Módulo 2 (OE2)**<br>[CAR-04](../visao-produto/capitulo-2/index.md#car-04) |
| **Pessoas & Tecnologia**<br><br>*(Ishikawa)* | **Tensão TR-01**<br><br>Cadastros descentralizados e divergência com o ponto externo | **Descentralização cadastral e inconsistência em dados bancários:** Ausência de base única de pessoal e diaristas, com dados de pagamento desatualizados que acarretam transferências errôneas e falta de sincronia com a ferramenta externa de ponto eletrônico (*Shifton*). | **Gestão cadastral unificada e integração interoperável:** Ficha cadastral com identificador único e validação compulsória de CPF (módulo 11), atualização com versionamento histórico, enquadramento de contratação, consumo de presenças do *Shifton* e exportação em CSV/XLSX. | • **RF01:** Cadastrar colaborador<br>• **RF02:** Atualizar cadastro de colaborador<br>• **RF03:** Registrar movimentação funcional<br>• **RF20:** Importar presenças homologadas<br>• **RF25:** Cadastrar tipo de contratação do colaborador<br>• **RF26:** Consultar histórico de alterações cadastrais e bancárias<br>• **RF36:** Exportar dados consolidados em planilha CSV/XLSX | • **RNF02:** Tempo de resposta da consulta em ≤ 2,0 s (p95)<br>• **RNF03:** Criptografia AES-256 em repouso e TLS 1.3 em trânsito | **Módulo 1 (OE1)**<br><br>[CAR-01](../visao-produto/capitulo-2/index.md#car-01), [CAR-09](../visao-produto/capitulo-2/index.md#car-09) e [CAR-10](../visao-produto/capitulo-2/index.md#car-10) |
| **Medição & Gerência**<br><br>*(Ishikawa)* | **Tensão TR-03**<br><br>Rateios arbitrários e falta de visibilidade da margem real | **Opacidade do custo operacional por obra e detecção tardia de estouro orçamentário:** A diretoria desconhece a margem real de cada contrato durante a execução, trabalhando com precificação empírica e rateios globais arbitrários sem rastreabilidade documental do gasto. | **Apropriação analítica direta e governança de contratos de obra:** Alocação de custos diretamente a contratos ativos e centros de custo, rastreabilidade documental integral até a comprovação de origem, parametrização de orçamentos e painel com filtros e alertas preventivos. | • **RF09:** Apropriar custos operacionais<br>• **RF10:** Consultar rastreabilidade de custos<br>• **RF11:** Filtrar indicadores de custos<br>• **RF12:** Monitorar execução orçamentária<br>• **RF30:** Consultar comparativo histórico de custos entre contratos<br>• **RF31:** Configurar alertas de execução orçamentária<br>• **RF33:** Cadastrar contrato de obra<br>• **RF34:** Cadastrar centro de custo de obra<br>• **RF37:** Atualizar contrato de obra<br>• **RF38:** Consultar contratos de obra<br>• **RF39:** Atualizar centro de custo de obra<br>• **RF40:** Definir tetos orçamentários de obra | • **RNF09:** Carga do painel analítico em ≤ 3,0 s sob 10.000 lançamentos<br>• **RNF10:** Mascaramento salarial para perfis de obra (≤ 10 ms)<br>• **RNF11:** Atomicidade ACID em apropriações concorrentes<br>• **RNF12:** Responsividade em desktop e tablet | **Módulo 3 (OE3)**<br><br>[CAR-05](../visao-produto/capitulo-2/index.md#car-05) e [CAR-06](../visao-produto/capitulo-2/index.md#car-06) |
| **Tecnologia & Governança**<br><br>*(Ishikawa)* | **Tensão TR-04**<br><br>Planilhas salariais compartilhadas sem trilha probatória | **Compartilhamento inseguro de remunerações e vulnerabilidade jurídica:** Circulação desprotegida de dados financeiros confidenciais por mensageria e ausência de trilha probatória para comprovar pagamentos e conciliações perante auditorias e fiscalizações trabalhistas. | **Controle estrito de acesso RBAC e trilha de auditoria imutável:** Governança com 4 perfis canônicos, bloqueio de força bruta, imposição de renovação de senhas, sessão com token de 8h, logs *append-only* gravados atomicamente e retidos por 5 anos (CLT Art. 11 e LGPD Art. 16) e rotina diária de backup. | • **RF13:** Efetuar login no sistema<br>• **RF14:** Gerenciar perfis de acesso<br>• **RF15:** Consultar trilha de auditoria<br>• **RF16:** Exportar relatório de auditoria<br>• **RF17:** Ativar acesso inicial e recuperar credenciais<br>• **RF18:** Encerrar sessão manualmente<br>• **RF23:** Bloquear acesso após tentativas falhas consecutivas<br>• **RF24:** Impor renovação periódica de senhas | • **RNF13:** Expiração de token temporário em ≤ 8 h<br>• **RNF14:** 100% dos endpoints sensíveis com RBAC e resposta HTTP 403 ≤ 15 ms<br>• **RNF15:** Gravação atômica ACID de auditoria (latência ≤ 50 ms)<br>• **RNF16:** Retenção imutável por 1.825 dias (5 anos)<br>• **RNF17:** Backup diário com restauração verificada em ≤ 4 h<br>• **RNF18:** Disponibilidade mensal ≥ 99,5%<br>• **RNF20:** Validação de schemas em 100% das requisições de escrita | **Módulo 4 (OE4)**<br><br>[CAR-07](../visao-produto/capitulo-2/index.md#car-07) e [CAR-08](../visao-produto/capitulo-2/index.md#car-08) |

---

### Grafo de Interdependência e Facilidades dos Requisitos

O grafo visual abaixo explicita a **rede de relacionamentos, dependências e facilidades** entre os requisitos do sistema: a camada de segurança e governança (RBAC / Módulo 4) protege e habilita o acesso à base cadastral unificada (Módulo 1); os apontamentos de campo coletados e homologados alimentam diretamente o motor de fechamento de diárias (Módulo 2); os lotes conferidos sustentam a apropriação de custos diretos aos contratos de obra (Módulo 3); e todas as transações de escrita alimentam a trilha imutável de auditoria corporativa.

<div class="cronograma-diagram-box" markdown="1">

![Grafo de Interdependência e Facilidades dos Requisitos](../assets/images/requisitos/grafo_interdependencia_requisitos_light.png#only-light){ .img-light-mode }
![Grafo de Interdependência e Facilidades dos Requisitos](../assets/images/requisitos/grafo_interdependencia_requisitos_dark.png#only-dark){ .img-dark-mode }

<p align="center"><small><em>Figura 8.3: Grafo de Interdependência e Facilidades entre os Requisitos do DUOC Finance (Clique na imagem para zoom interativo via glightbox).</em></small></p>

</div>

---

## Especificação Modular dos Requisitos

Os requisitos estão divididos em quatro módulos, cada um com sua própria página. Nelas estão as definições completas dos requisitos funcionais, regras de negócio, requisitos não funcionais e casos de teste.

Para consultar um módulo, utilize os links da [Estrutura Modular dos Requisitos](#estrutura-modular-dos-requisitos), apresentada no início deste capítulo.

---


<a id="matriz-sintese-geral-de-rastreabilidade"></a>

## Matriz-Síntese Geral de Rastreabilidade

Esta matriz relaciona os objetivos específicos (OE), as características do produto (CAR), os valores de negócio (VN), os requisitos funcionais (RF), os requisitos não funcionais (RNF) e os casos de teste (CT) do DUOC Finance.

Ela permite identificar quais requisitos atendem a cada característica e quais testes verificam seu funcionamento. As definições completas estão disponíveis nas páginas dos módulos:

- [Módulo 1 — Padronização e Unificação de Dados](modulo-1.md)
- [Módulo 2 — Eficiência Administrativo-Financeira](modulo-2.md)
- [Módulo 3 — Inteligência de Custos por Contrato](modulo-3.md)
- [Módulo 4 — Governança, Segurança e Rastreabilidade](modulo-4.md)

Os códigos dos RFs na tabela são links para suas definições oficiais. Os casos de teste estão detalhados nas matrizes de rastreabilidade de cada módulo.

| Contribuição Principal (OE) | Contribuição Secundária (OE) | Característica do Produto (CAR) | Valor de Negócio (VN) | Requisitos Funcionais (RF) | Requisitos Não Funcionais (RNF) | Casos de Teste (CT) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **OE1** — Padronizar e Unificar os Dados | OE2 — Eficiência Administrativo-Financeira | [**CAR-01:** Gestão Cadastral Unificada de Pessoal](../visao-produto/capitulo-2/index.md#car-01) | Centraliza dados cadastrais, bancários e trabalhistas, evitando registros duplicados e inconsistências. | [RF01](modulo-1.md#rf01), [RF02](modulo-1.md#rf02), [RF03](modulo-1.md#rf03), [RF25](modulo-1.md#rf25), [RF26](modulo-1.md#rf26) | RNF02, RNF03, RNF19 | CT-M1-01, CT-M1-02, CT-M1-03, CT-M1-06, CT-M1-07, CT-M1-12, CT-M1-13, CT-M1-14 |
| **OE1** — Padronizar e Unificar os Dados | OE3 — Custos por Contrato | [**CAR-02:** Apontamento de Campo e Registros Técnicos de Obra (RVT)](../visao-produto/capitulo-2/index.md#car-02) | Padroniza os apontamentos de campo e permite registrar evidências, corrigir registros pendentes e realizar a homologação supervisionada. | [RF04](modulo-1.md#rf04), [RF19](modulo-1.md#rf19), [RF22](modulo-1.md#rf22), [RF32](modulo-1.md#rf32), [RF35](modulo-1.md#rf35) | RNF01, RNF04, RNF19 | CT-M1-04, CT-M1-05, CT-M1-08, CT-M1-09, CT-M1-11, CT-M1-14, CT-M1-15, CT-M1-16 |
| **OE1** — Padronizar e Unificar os Dados | OE2 — Eficiência Administrativo-Financeira | [**CAR-09:** Integração com Shifton e Presenças Homologadas](../visao-produto/capitulo-2/index.md#car-09) | Aproveita os registros de presença homologados pelo Shifton, sem substituir o sistema externo de controle de frequência. | [RF20](modulo-1.md#rf20) | RNF02 | CT-M1-10 |
| **OE1** — Padronizar e Unificar os Dados | OE2 — Eficiência Administrativo-Financeira | [**CAR-10:** Importação e Exportação de Dados com ERPs e Planilhas Legadas](../visao-produto/capitulo-2/index.md#car-10) | Facilita o compartilhamento de informações com sistemas contábeis e planilhas externas. | [RF36](modulo-1.md#rf36) | RNF02 | CT-M1-17 |
| **OE2** — Aumentar a Eficiência Administrativo-Financeira | OE4 — Governança e Segurança | [**CAR-03:** Motor de Processamento e Fechamento Financeiro](../visao-produto/capitulo-2/index.md#car-03) | Automatiza a apuração de diárias e comissões, com conferência prévia, homologação e possibilidade de estorno auditável. | [RF05](modulo-2.md#rf05), [RF06](modulo-2.md#rf06), [RF21](modulo-2.md#rf21), [RF27](modulo-2.md#rf27) | RNF05, RNF06, RNF08 | CT-M2-01, CT-M2-02, CT-M2-05, CT-M2-06, CT-M2-08, CT-M2-09, CT-M2-10 |
| **OE2** — Aumentar a Eficiência Administrativo-Financeira | OE3 — Custos por Contrato | [**CAR-04:** Fluxo Digital de Prestação de Contas e Reembolsos](../visao-produto/capitulo-2/index.md#car-04) | Organiza solicitações e decisões sobre reembolsos e adiantamentos operacionais vinculados a contratos. | [RF07](modulo-2.md#rf07), [RF08](modulo-2.md#rf08), [RF28](modulo-2.md#rf28), [RF29](modulo-2.md#rf29) | RNF07 | CT-M2-03, CT-M2-04, CT-M2-07, CT-M2-11, CT-M2-12 |
| **OE3** — Transparecer os Custos por Contrato | OE1 — Padronizar e Unificar os Dados | [**CAR-05:** Apropriação e Rastreabilidade de Custos por Contrato](../visao-produto/capitulo-2/index.md#car-05) | Permite cadastrar, consultar e atualizar contratos, além de apropriar custos e acompanhar sua origem. | [RF09](modulo-3.md#rf09), [RF10](modulo-3.md#rf10), [RF30](modulo-3.md#rf30), [RF33](modulo-3.md#rf33), [RF37](modulo-3.md#rf37), [RF38](modulo-3.md#rf38) | RNF10, RNF11 | CT-M3-01, CT-M3-02, CT-M3-06, CT-M3-07, CT-M3-09, CT-M3-11, CT-M3-13, CT-M3-14 |
| **OE3** — Transparecer os Custos por Contrato | OE2 — Eficiência Administrativo-Financeira | [**CAR-06:** Painel Analítico de Custo Apropriado e Desvio Orçamentário](../visao-produto/capitulo-2/index.md#car-06) | Permite gerenciar centros de custo e tetos orçamentários, acompanhar desvios e configurar alertas preventivos. | [RF11](modulo-3.md#rf11), [RF12](modulo-3.md#rf12), [RF31](modulo-3.md#rf31), [RF34](modulo-3.md#rf34), [RF39](modulo-3.md#rf39), [RF40](modulo-3.md#rf40) | RNF09, RNF10, RNF12 | CT-M3-03, CT-M3-04, CT-M3-05, CT-M3-08, CT-M3-10, CT-M3-12, CT-M3-15, CT-M3-16 |
| **OE4** — Garantir Segurança e Governança de Dados | OE1 — Padronizar e Unificar os Dados | [**CAR-07:** Controle de Acesso Baseado em Papéis (RBAC)](../visao-produto/capitulo-2/index.md#car-07) | Controla autenticação, sessões e permissões dos usuários, restringindo o acesso a informações protegidas. | [RF13](modulo-4.md#rf13), [RF14](modulo-4.md#rf14), [RF17](modulo-4.md#rf17), [RF18](modulo-4.md#rf18), [RF23](modulo-4.md#rf23), [RF24](modulo-4.md#rf24) | RNF13, RNF14, RNF20 | CT-M4-01, CT-M4-02, CT-M4-05, CT-M4-06, CT-M4-09, CT-M4-10, CT-M4-12, CT-M4-13, CT-M4-15 |
| **OE4** — Garantir Segurança e Governança de Dados | OE2 — Eficiência Administrativo-Financeira | [**CAR-08:** Trilha de Auditoria e Histórico de Operações Sensíveis](../visao-produto/capitulo-2/index.md#car-08) | Mantém registros auditáveis das operações, com mecanismos de integridade, retenção e recuperação de dados. | [RF15](modulo-4.md#rf15), [RF16](modulo-4.md#rf16) | RNF15, RNF16, RNF17, RNF18, RNF20 | CT-M4-03, CT-M4-04, CT-M4-07, CT-M4-08, CT-M4-11, CT-M4-14, CT-M4-15 |

---

<a id="catalogo-geral-consolidado"></a>

## Catálogo Geral Consolidado de Requisitos

Este catálogo reúne os requisitos do **DUOC Finance** e permite localizar suas especificações completas. Cada requisito funcional possui uma definição oficial na página do módulo correspondente.

As relações entre requisitos funcionais, regras de negócio, fontes de elicitação e casos de teste estão documentadas nas páginas de cada módulo e em suas matrizes de rastreabilidade.

A avaliação do valor de negócio, do esforço técnico e a definição do escopo do MVP estão disponíveis em [Priorização de Requisitos e Definição do MVP](priorizacao.md). A linha de corte original contempla RF01 a RF31; os requisitos RF32 a RF40 possuem tratamento complementar, com avaliações históricas ou pendentes de revisão, conforme detalhado na [seção de requisitos complementares](priorizacao.md#requisitos-complementares-rf32-a-rf36-fora-da-linha-de-corte).


### Catálogo de Requisitos Funcionais

Clique no código de um requisito para acessar sua definição completa.

| Código | Requisito | Módulo / OE | Característica |
| :---: | :--- | :---: | :---: |
| [**RF01**](modulo-1.md#rf01) | Cadastrar colaborador | Módulo 1 / OE1 | CAR-01 |
| [**RF02**](modulo-1.md#rf02) | Atualizar cadastro de colaborador | Módulo 1 / OE1 | CAR-01 |
| [**RF03**](modulo-1.md#rf03) | Registrar movimentação funcional | Módulo 1 / OE1 | CAR-01 |
| [**RF04**](modulo-1.md#rf04) | Submeter apontamento de campo | Módulo 1 / OE1 | CAR-02 |
| [**RF05**](modulo-2.md#rf05) | Solicitar prévia de fechamento | Módulo 2 / OE2 | CAR-03 |
| [**RF06**](modulo-2.md#rf06) | Homologar fechamento financeiro | Módulo 2 / OE2 | CAR-03 |
| [**RF07**](modulo-2.md#rf07) | Submeter solicitação de reembolso | Módulo 2 / OE2 | CAR-04 |
| [**RF08**](modulo-2.md#rf08) | Deliberar solicitação de reembolso | Módulo 2 / OE2 | CAR-04 |
| [**RF09**](modulo-3.md#rf09) | Apropriar custos operacionais | Módulo 3 / OE3 | CAR-05 |
| [**RF10**](modulo-3.md#rf10) | Consultar rastreabilidade de custos | Módulo 3 / OE3 | CAR-05 |
| [**RF11**](modulo-3.md#rf11) | Filtrar indicadores de custos | Módulo 3 / OE3 | CAR-06 |
| [**RF12**](modulo-3.md#rf12) | Monitorar execução orçamentária | Módulo 3 / OE3 | CAR-06 |
| [**RF13**](modulo-4.md#rf13) | Efetuar login no sistema | Módulo 4 / OE4 | CAR-07 |
| [**RF14**](modulo-4.md#rf14) | Gerenciar perfis de acesso | Módulo 4 / OE4 | CAR-07 |
| [**RF15**](modulo-4.md#rf15) | Consultar trilha de auditoria | Módulo 4 / OE4 | CAR-08 |
| [**RF16**](modulo-4.md#rf16) | Exportar relatório de auditoria | Módulo 4 / OE4 | CAR-08 |
| [**RF17**](modulo-4.md#rf17) | Ativar acesso inicial e recuperar credenciais | Módulo 4 / OE4 | CAR-07 |
| [**RF18**](modulo-4.md#rf18) | Encerrar sessão manualmente | Módulo 4 / OE4 | CAR-07 |
| [**RF19**](modulo-1.md#rf19) | Consultar apontamentos registrados | Módulo 1 / OE1 | CAR-02 |
| [**RF20**](modulo-1.md#rf20) | Importar presenças homologadas | Módulo 1 / OE1 | CAR-09 |
| [**RF21**](modulo-2.md#rf21) | Estornar fechamento financeiro | Módulo 2 / OE2 | CAR-03 |
| [**RF22**](modulo-1.md#rf22) | Anexar evidências e geolocalização ao apontamento | Módulo 1 / OE1 | CAR-02 |
| [**RF23**](modulo-4.md#rf23) | Bloquear acesso após tentativas falhas consecutivas | Módulo 4 / OE4 | CAR-07 |
| [**RF24**](modulo-4.md#rf24) | Impor renovação periódica de senhas | Módulo 4 / OE4 | CAR-07 |
| [**RF25**](modulo-1.md#rf25) | Cadastrar tipo de contratação do colaborador | Módulo 1 / OE1 | CAR-01 |
| [**RF26**](modulo-1.md#rf26) | Consultar histórico de alterações cadastrais e bancárias | Módulo 1 / OE1 | CAR-01 |
| [**RF27**](modulo-2.md#rf27) | Configurar tabela de valores de diárias técnicas | Módulo 2 / OE2 | CAR-03 |
| [**RF28**](modulo-2.md#rf28) | Submeter solicitação de adiantamento operacional | Módulo 2 / OE2 | CAR-04 |
| [**RF29**](modulo-2.md#rf29) | Deliberar solicitação de adiantamento operacional | Módulo 2 / OE2 | CAR-04 |
| [**RF30**](modulo-3.md#rf30) | Consultar comparativo histórico de custos entre contratos | Módulo 3 / OE3 | CAR-05 |
| [**RF31**](modulo-3.md#rf31) | Configurar alertas de execução orçamentária | Módulo 3 / OE3 | CAR-06 |
| [**RF32**](modulo-1.md#rf32) | Deliberar apontamento de campo | Módulo 1 / OE1 | CAR-02 |
| [**RF33**](modulo-3.md#rf33) | Cadastrar contrato de obra | Módulo 3 / OE3 | CAR-05 |
| [**RF34**](modulo-3.md#rf34) | Cadastrar centro de custo de obra | Módulo 3 / OE3 | CAR-06 |
| [**RF35**](modulo-1.md#rf35) | Retificar apontamento de campo | Módulo 1 / OE1 | CAR-02 |
| [**RF36**](modulo-1.md#rf36) | Exportar dados consolidados em planilha | Módulo 1 / OE1 | CAR-10 |
| [**RF37**](modulo-3.md#rf37) | Atualizar contrato de obra | Módulo 3 / OE3 | CAR-05 |
| [**RF38**](modulo-3.md#rf38) | Consultar contratos de obra | Módulo 3 / OE3 | CAR-05 |
| [**RF39**](modulo-3.md#rf39) | Atualizar centro de custo de obra | Módulo 3 / OE3 | CAR-06 |
| [**RF40**](modulo-3.md#rf40) | Definir tetos orçamentários de obra | Módulo 3 / OE3 | CAR-06 |




### Catálogo de Requisitos Não Funcionais

Os requisitos não funcionais (RNFs) definem as condições de qualidade, desempenho, segurança e confiabilidade do **DUOC Finance**.

A tabela abaixo apresenta os 20 RNFs e seus módulos. Os critérios mensuráveis e as classificações URPS+ e Sommerville estão disponíveis nas especificações completas.

| Código | Requisito Não Funcional | Módulo / OE |
| :---: | :--- | :---: |
| [**RNF01**](modulo-1.md#requisitos-nao-funcionais) | Operar em modo offline para coleta de dados em canteiros sem conectividade | Módulo 1 / OE1 |
| [**RNF02**](modulo-1.md#requisitos-nao-funcionais) | Garantir tempo de resposta para consulta cadastral inferior a 2,0 segundos | Módulo 1 / OE1 |
| [**RNF03**](modulo-1.md#requisitos-nao-funcionais) | Proteger dados pessoais e cadastrais com criptografia em repouso e em trânsito | Módulo 1 / OE1 |
| [**RNF04**](modulo-1.md#requisitos-nao-funcionais) | Garantir usabilidade e agilidade no preenchimento de apontamentos de campo | Módulo 1 / OE1 |
| [**RNF05**](modulo-2.md#requisitos-nao-funcionais) | Processar rotina de fechamento financeiro em até 5,0 segundos | Módulo 2 / OE2 |
| [**RNF06**](modulo-2.md#requisitos-nao-funcionais) | Garantir exatidão aritmética centesimal em cálculos monetários | Módulo 2 / OE2 |
| [**RNF07**](modulo-2.md#requisitos-nao-funcionais) | Garantir robustez e segurança no processamento e armazenamento de comprovantes | Módulo 2 / OE2 |
| [**RNF08**](modulo-2.md#requisitos-nao-funcionais) | Garantir rastreabilidade probatória e não-repúdio em operações de estorno | Módulo 2 / OE2 |
| [**RNF09**](modulo-3.md#requisitos-nao-funcionais) | Carregar o painel analítico em tempo inferior a 3 segundos | Módulo 3 / OE3 |
| [**RNF10**](modulo-3.md#requisitos-nao-funcionais) | Sanitizar e mascarar dados financeiros confidenciais em projeções analíticas | Módulo 3 / OE3 |
| [**RNF11**](modulo-3.md#requisitos-nao-funcionais) | Garantir consistência transacional ACID na apropriação concorrente de custos | Módulo 3 / OE3 |
| [**RNF12**](modulo-3.md#requisitos-nao-funcionais) | Assegurar responsividade do painel em resoluções de desktop e tablet | Módulo 3 / OE3 |
| [**RNF13**](modulo-4.md#requisitos-nao-funcionais) | Expirar token de acesso temporário em no máximo 8 horas | Módulo 4 / OE4 |
| [**RNF14**](modulo-4.md#requisitos-nao-funcionais) | Validar perfil de autorização em 100% das rotas de API com dados protegidos | Módulo 4 / OE4 |
| [**RNF15**](modulo-4.md#requisitos-nao-funcionais) | Garantir consistência transacional e atomicidade na gravação de logs de auditoria | Módulo 4 / OE4 |
| [**RNF16**](modulo-4.md#requisitos-nao-funcionais) | Reter registros de auditoria por no mínimo 5 anos contra expurgo físico indevido | Módulo 4 / OE4 |
| [**RNF17**](modulo-4.md#requisitos-nao-funcionais) | Realizar backup automático diário com restauração verificada | Módulo 4 / OE4 |
| [**RNF18**](modulo-4.md#requisitos-nao-funcionais) | Garantir disponibilidade mínima mensal do sistema | Módulo 4 / OE4 |
| [**RNF19**](modulo-1.md#requisitos-nao-funcionais) | Garantir acessibilidade digital nas interfaces do sistema | Módulo 1 / OE1 |
| [**RNF20**](modulo-4.md#requisitos-nao-funcionais) | Validar integridade de payloads em todas as rotas de escrita da API | Módulo 4 / OE4 |




### Catálogo Geral de Regras de Negócio (RN01 a RN31)

O catálogo relaciona as regras de negócio aos requisitos funcionais e às fontes de elicitação. A definição completa de cada regra está disponível no módulo correspondente.

Os códigos das regras direcionam à seção de regras de negócio de cada módulo. Os requisitos funcionais relacionados podem ser consultados no [Catálogo de Requisitos Funcionais](#catalogo-de-requisitos-funcionais).

| Código | Regra de Negócio | Módulo / CAR | RFs Relacionados | Fonte de Elicitação / Origem |
| :---: | :--- | :---: | :--- | :--- |
| [**RN01**](modulo-1.md#regras-de-negocio) | Unicidade e Validação Cadastral por CPF | Módulo 1 / CAR-01 | RF01, RF02 | Reunião 01, Reunião 04 |
| [**RN02**](modulo-1.md#regras-de-negocio) | Bloqueio Automático de Edição Retroativa | Módulo 1 / CAR-02 | RF04, RF19, RF32, RF35 | Reunião 03, Reunião 05, TR-01 |
| [**RN03**](modulo-1.md#regras-de-negocio) | Validação Cadastral para Lançamentos Financeiros | Módulo 1 / CAR-01 | RF01, RF03, RF05, RF07, RF28 | Reunião 04, TR-01 |
| [**RN04**](modulo-1.md#regras-de-negocio) | Revogação Automática de Acessos | Módulo 1 / CAR-01 | RF03 | Reunião 04, TR-01 |
| [**RN05**](modulo-2.md#regras-de-negocio) | Homologação Prévia Mandatória | Módulo 2 / CAR-03 | RF05, RF09, RF32 | Reunião 01, Reunião 05, TR-03 |
| [**RN06**](modulo-2.md#regras-de-negocio) | Obrigatoriedade de Comprovante Fiscal e Integridade | Módulo 2 / CAR-04 | RF07 | Reunião 02, Reunião 04, TR-02 |
| [**RN07**](modulo-2.md#regras-de-negocio) | Limite do Montante Reembolsável | Módulo 2 / CAR-04 | RF08 | Reunião 02, TR-02 |
| [**RN08**](modulo-2.md#regras-de-negocio) | Imutabilidade de Lotes Homologados | Módulo 2 / CAR-03 | RF06, RF21 | Reunião 05, Feedback FB-09 |
| [**RN09**](modulo-2.md#regras-de-negocio) | Vínculo Contratual Obrigatório | Módulo 2 / CAR-04 | RF07, RF09, RF28, RF33, RF34 | Reunião 02, Reunião 05, TR-02 |
| [**RN10**](modulo-3.md#regras-de-negocio) | Condição de Homologação para Apropriação | Módulo 3 / CAR-05 | RF09, RF20, RF32 | Reunião 01, Reunião 05, TR-04 |
| [**RN11**](modulo-3.md#regras-de-negocio) | Vínculo Contratual Mandatório | Módulo 3 / CAR-05 | RF09, RF33, RF34 | Reunião 01, Reunião 05, TR-04 |
| [**RN12**](modulo-3.md#regras-de-negocio) | Versionamento de Apropriações | Módulo 3 / CAR-05 | RF10 | Reunião 05, TR-04 |
| [**RN13**](modulo-3.md#regras-de-negocio) | Cálculo Padronizado de Execução Orçamentária | Módulo 3 / CAR-06 | RF12, RF40 | Reunião 05, TR-04 |
| [**RN14**](modulo-3.md#regras-de-negocio) | Segregação de Visualização Salarial e Sigilo de Remunerações | Módulo 3 / CAR-06 | RF11 | Reunião 04, LGPD Art. 6º |
| [**RN15**](modulo-4.md#regras-de-negocio) | Autenticação Mandatória com Token Válido | Módulo 4 / CAR-07 | RF13, RF17, RF18 | Reunião 01, Reunião 05 |
| [**RN16**](modulo-4.md#regras-de-negocio) | Princípio do Menor Privilégio e Matriz Canônica RBAC | Módulo 4 / CAR-07 | RF13, RF14, RF19 | Reunião 04, Reunião 05, LGPD |
| [**RN17**](modulo-4.md#regras-de-negocio) | Registro Mandatório e Integridade de Eventos na Trilha de Auditoria | Módulo 4 / CAR-08 | RF06, RF15, RF16, RF21 | Reunião 05, Auditoria |
| [**RN18**](modulo-4.md#regras-de-negocio) | Imutabilidade Estrita da Trilha de Auditoria (*Append-Only*) | Módulo 4 / CAR-08 | RF15, RF16 | Reunião 05, LGPD |
| [**RN19**](modulo-4.md#regras-de-negocio) | Política Corporativa de Retenção Quinquenal de Logs | Módulo 4 / CAR-08 | RF15, RF16 | Reunião 05, CLT Art. 11, LGPD Art. 16 |
| [**RN20**](modulo-4.md#regras-de-negocio) | Limite de Tentativas de Autenticação | Módulo 4 / CAR-07 | RF23 | Reunião 05, Diretrizes de Segurança |
| [**RN21**](modulo-4.md#regras-de-negocio) | Política de Expiração e Histórico de Senhas | Módulo 4 / CAR-07 | RF24 | Reunião 05, Diretrizes de Segurança |
| [**RN22**](modulo-1.md#regras-de-negocio) | Tipos de Contratação Válidos | Módulo 1 / CAR-01 | RF01, RF25 | Reunião 01, Reunião 04 |
| [**RN23**](modulo-1.md#regras-de-negocio) | Versionamento Obrigatório de Dados Cadastrais e Bancários | Módulo 1 / CAR-01 | RF02, RF26 | Reunião 04, LGPD |
| [**RN24**](modulo-1.md#regras-de-negocio) | Captura de Geolocalização Não Bloqueante | Módulo 1 / CAR-02 | RF04, RF22 | Reunião 03, Feedback FB-11 |
| [**RN25**](modulo-2.md#regras-de-negocio) | Vigência dos Valores de Diárias Técnicas | Módulo 2 / CAR-03 | RF05, RF27 | Reunião 05, TR-03 |
| [**RN26**](modulo-2.md#regras-de-negocio) | Elegibilidade do Adiantamento Operacional | Módulo 2 / CAR-04 | RF28 | Reunião 02, Reunião 05, TR-02 |
| [**RN27**](modulo-2.md#regras-de-negocio) | Notificação de Pendências Financeiras | Módulo 2 / CAR-04 | RF08, RF29 | Reunião 02, Reunião 05 |
| [**RN28**](modulo-3.md#regras-de-negocio) | Comparativo Histórico de Custos | Módulo 3 / CAR-05 | RF30 | Reunião 05 (Visão Executiva) |
| [**RN29**](modulo-3.md#regras-de-negocio) | Disparo de Alertas Preventivos de Extrapolação Orçamentária | Módulo 3 / CAR-06 | RF31, RF40 | Reunião 05, TR-04 |
| [**RN30**](modulo-1.md#regras-de-negocio) | Justificativa Obrigatória e Bloqueio na Deliberação de Apontamentos | Módulo 1 / CAR-02 | RF19, RF32, RF35 | Reunião 03, Reunião 05, Revisão de Pares |
| [**RN31**](modulo-2.md#regras-de-negocio) | Parametrização e Fórmulas de Diárias e Comissões Técnicas de Campo | Módulo 2 / CAR-03 | RF05, RF27 | Reunião 01, Reunião 05, Revisão de Pares |



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
| `2.10` | 22/09/2026 | Atomização dos requisitos funcionais: simplificação rigorosa dos títulos dos 16 RFs como ações únicas do usuário (Verbo + Objeto), remoção de detalhes operacionais de escopo e conjunções compostas conforme revisão de pares. | Matheus Ribeiro Szervinsk | Lucas Zanetti |
| `2.11` | 28/09/2026 | Ajustes decorrentes da avaliação por pares (equipe Guerreiros do Backlog): nota sobre as classificações URPS+ e Sommerville (8.1), refinamento do RF04, novos RF17 a RF22 e RNF17, refinamento de RNF01 e RNF04, reescrita das RN06 e RN18 e atualização das matrizes de rastreabilidade e casos de teste (ver [Feedback dos Requisitos](feedback.md)). | Matheus Saraiva Camargo | Matheus Szervinsk |
| `2.12` | 06/10/2026 | Expansão do Módulo 4 (OE4) com RF23 e RF24 (política de senha e bloqueio por tentativas falhas), RN20 e RN21, enriquecimento de filtros do RF15, e inclusão da seção de Requisitos Não Funcionais Transversais (RNF18 a RNF20: disponibilidade, acessibilidade e integridade de API). | Matheus Saraiva Camargo | Matheus Ribeiro |
| `2.13` | 07/10/2026 | Expansão dos requisitos dos Módulos 1, 2 e 3 com RF25 a RF31 e RN22 a RN29; refinamento de RF11 e RF22; inclusão de novos casos de teste; atualização da matriz-síntese e criação do Catálogo Geral Consolidado de Requisitos (Seção 8.4). | Matheus Saraiva Camargo | Matheus Ribeiro |
| `2.14` | 08/10/2026 | Atualização das referências cruzadas ao capítulo de Priorização e MVP (Seção 8.4) após a refatoração da Matriz 4×4 (Valor × Esforço); nenhum requisito foi alterado. | Eric Araújo | Matheus Ribeiro |
| `3.0` | 08/10/2026 | Atendimento ao feedback docente da apresentação prévia da Unidade 2: remoção do BDD (*Dado-Quando-Então*) da especificação de requisitos, reescrita da seção 8.1 e conversão dos critérios de aceitação dos 31 RFs (OE1 a OE4) para texto corrido, verificável e orientado ao valor de negócio. | Paulo Nery | |
| `3.1` | 11/10/2026 | Consolidação arquitetural e visual do Capítulo 8: reestruturação da especificação modular (8.3) em abas interativas (`pymdownx.tabbed`) em contêiner fluido; alinhamento da Matriz-Síntese (8.4) e Catálogo Geral (8.5) com o Template Oficial (v8); colorização temática por módulo em tabelas e cards; harmonização do sistema externo para *Shifton* e refinamento de links cruzados. | Matheus Ribeiro Szervinsk | Matheus Saraiva Camargo e Eric Araújo |
| `3.2` | 12/10/2026 | Saneamento e ajustes decorrentes da revisão por pares: inclusão de RF32 (deliberação de campo), RF33 (gestão de contratos), RF34 (centros de custo e orçamentos), RF35 (retificação de apontamento) e RF36 (exportação CSV/XLSX); adição de RN30 e RN31 (fórmulas e parâmetros de diárias e comissões); explicitação de fontes de elicitação e regras de negócio no Catálogo de RFs e CTs; criação do Catálogo Geral de Regras de Negócio (RN01 a RN31) com rastreabilidade bidirecional; redistribuição modular dos RNFs universais (RNF18 a RNF20); eliminação de promessas de folha CLT legadas; e padronização para aplicação web responsiva (Web App / PWA). | Matheus Ribeiro Szervinsk | Eric Araújo e Matheus Saraiva Camargo |
| `3.3` | 12/10/2026 | Aprimoramento da qualidade dos requisitos, desambiguação e conformidade jurídica (CLT e LGPD): unificação dos atores na Matriz Canônica de Papéis RBAC (4 perfis canônicos); definição operacional de termos ambíguos (dados válidos, tempo de propagação síncrono, carga nominal de 50 usuários a 10 req/s, limiares de alerta); desacoplamento de pré-fechamento e homologação no RF06; redefinição de RNF07 e RNF08 como atributos de qualidade de software (robustez de arquivos e não-repúdio); desambiguação entre regras de negócio (RN16, RN17, RN19) e requisitos não funcionais (RNF10, RNF14, RNF15, RNF16); reclassificação do RNF16 para Reliability / Legal (+); e inclusão de seção de conformidade jurídica fundamentando o Art. 11 da CLT (política corporativa defensiva), o Art. 16, I e II da LGPD (exceção ao direito de eliminação) e o Art. 5º, II da LGPD (distinção entre dados pessoais confidenciais e dados sensíveis). | Matheus Ribeiro Szervinsk | Eric Araújo e Matheus Saraiva Camargo |
| `3.4` | 12/10/2026 | Atualização da imagens jpg e svg da pirâmide conforme novos requisitos e nomenclaturas; Ajuste do histórico de versão. | Gustavo Bonifácio | Matheus Ribeiro Szervinsk |
| `3.5` | 13/10/2026 | Remoção de cards de alerta de centralização operacional e rastreabilidade na pirâmide, integrando as justificativas diretamente à narrativa do texto e atualizando âncoras internas. | Matheus Ribeiro Szervinsk | Eric Araújo |
| `3.6` | 13/10/2026 | Auditoria de integridade e qualidade metodológica: restauração do Mapeamento de Necessidades do Cliente (Ishikawa 4M e Tensões TR-01 a TR-04 do Rich Picture correlacionados aos 36 RFs e 20 RNFs) e do Grafo de Interdependência dos Requisitos; padronização estrita de RF24 para "Impor renovação periódica de senhas"; remoção de adjetivos subjetivos em RNF02 e RNF05 com métricas explícitas; e detalhamento da janela de manutenção programada no RNF18. | Matheus Ribeiro Szervinsk | Eric Araújo |
| `3.7` | 22/10/2026 | Decomposição dos RF33 e RF34 em seis requisitos funcionais (RF33, RF34 e RF37 a RF40); atualização dos casos de teste CT-M3-11 a CT-M3-16, das regras de negócio relacionadas, da Matriz-Síntese Geral e dos resumos do Módulo 3. | Matheus Saraiva Camargo | Matheus Ribeiro |
| `3.8` | 29/10/2026 | Atendimento à issue #126: consolidação das especificações nos módulos, atualização da rastreabilidade e das referências do catálogo; alinhamento de RN02, RF32, RF35 e casos de teste para correção de apontamentos rejeitados e reinício do prazo de 5 dias úteis após cada reenvio. | Matheus Saraiva Camargo | Matheus Ribeiro Szervinsk (revisão pendente) |