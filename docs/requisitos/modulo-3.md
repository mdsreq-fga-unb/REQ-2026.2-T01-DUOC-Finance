
# Módulo 3 - Inteligência de Custos por Contrato (OE3)

Esta seção detalha os requisitos da **DUOC Finance** associados ao **OE3 — Transparecer as informações sobre os Custos por Contrato**. O módulo cobre as características **CAR-05 — Apropriação e Rastreabilidade de Custos por Contrato** e **CAR-06 — Painel Analítico de Custo Apropriado e Desvio Orçamentário por Projeto**.

## Requisitos Funcionais

Os requisitos abaixo expressam as **ações analíticas dos gestores** para apropriação, filtragem dinâmica e monitoramento contínuo da saúde financeira das obras.

| Código | Requisito (Ação do Usuário) | CAR relacionada | Critério de Aceitação |
| :---: | :--- | :---: | :--- |
| <span id="rf09"></span>**RF09** | **Apropriar custos operacionais** | CAR-05 | O Administrador Financeiro (`ADMIN_FINANCEIRO`) dispara a apropriação de custos da competência mensal, e os valores de apontamentos e diárias homologados pelo Gestor Operacional de Obras (RF32, RN05), juntamente com os reembolsos aprovados pelo Administrador Financeiro (RF08) são alocados diretamente aos respectivos contratos ativos e centros de custo cadastrados (RF33, RF34), sem duplicar nem sobrepor os relatórios de folha CLT legados (RN09, RN10, RN11). |
| <span id="rf10"></span>**RF10** | **Consultar rastreabilidade de custos** | CAR-05 | O Gestor Operacional de Obras (`GESTOR_OBRAS`) ou o Administrador Financeiro (`ADMIN_FINANCEIRO`) consultam a rastreabilidade integral de qualquer custo apropriado a um contrato, visualizando o apontamento de origem, o colaborador executor, o carimbo UTC de homologação e a identificação do gestor responsável pela deliberação (RN12). |
| <span id="rf11"></span>**RF11** | **Filtrar indicadores de custos** | CAR-06 | No painel analítico de custos, usuários autorizados (`GESTOR_OBRAS`, `ADMIN_FINANCEIRO` e `ADMIN_SISTEMA`) combinam simultaneamente filtros de período, contrato de obra ativo, colaborador e centro de custo, recalculando dinamicamente os valores acumulados e gráficos com mascaramento automático de remunerações individuais para perfis não autorizados (RN14, RNF10). |
| <span id="rf12"></span>**RF12** | **Monitorar execução orçamentária** | CAR-06 | Na visão executiva de um contrato com metas orçamentárias definidas (RF40), o Gestor Operacional de Obras (`GESTOR_OBRAS`) e o Administrador Financeiro (`ADMIN_FINANCEIRO`) monitoram o orçamento total previsto, calculado pela soma dos tetos orçamentários das categorias de despesa, o custo realizado apropriado, o desvio financeiro e o percentual de execução orçamentária (RN13). O sistema permite consultar esses indicadores tanto de forma consolidada por contrato quanto individualmente por categoria, destacando visualmente as situações de extrapolação dos limites estabelecidos. |
| <span id="rf30"></span>**RF30** | **Consultar comparativo histórico de custos entre contratos** | CAR-05 | O Gestor Operacional de Obras (`GESTOR_OBRAS`) ou o Administrador Financeiro (`ADMIN_FINANCEIRO`) selecionam dois ou mais contratos (ativos ou encerrados) e um período de comparação, e o sistema renderiza os custos apropriados de cada obra com as variações absolutas (em R$) e percentuais consolidadas no período (RN28). |
| <span id="rf31"></span>**RF31** | **Configurar alertas de execução orçamentária** | CAR-06 | Para contratos de obras com teto orçamentário configurado (RF40), o Gestor Operacional de Obras (`GESTOR_OBRAS`) parametriza os limiares percentuais de execução que disparam alertas preventivos (ex.: 80%, 90% ou 100% do orçamento); ao atingir ou superar o limiar definido, o sistema gera notificação em destaque no painel e despacha alerta por e-mail aos responsáveis (RN29). |
| <span id="rf33"></span>**RF33** | **Cadastrar contrato de obra** | CAR-05 | O Administrador Financeiro (`ADMIN_FINANCEIRO`) ou o Gestor Operacional de Obras (`GESTOR_OBRAS`) cadastra contratos de obras vinculados a clientes, informando vigência, valor global, objeto contratual, retenções e alçadas de supervisão. Os contratos ativos cadastrados podem ser utilizados para vincular despesas, reembolsos e apropriações de custos, respeitando as regras de negócio RN09 e RN11. |
| <span id="rf37"></span>**RF37** | **Atualizar contrato de obra** | CAR-05 | O Administrador Financeiro (`ADMIN_FINANCEIRO`) ou o Gestor Operacional de Obras (`GESTOR_OBRAS`) atualiza os dados de um contrato de obra já cadastrado, incluindo vigência, valor global, objeto contratual, retenções e alçadas de supervisão, preservando sua identificação e os vínculos com os registros financeiros associados. |
| <span id="rf38"></span>**RF38** | **Consultar contratos de obra** | CAR-05 | O Administrador Financeiro (`ADMIN_FINANCEIRO`) ou o Gestor Operacional de Obras (`GESTOR_OBRAS`) consulta os contratos de obras cadastrados, visualizando o cliente vinculado, vigência, valor global, objeto contratual, retenções e alçadas de supervisão, sem alterar os registros. |
| <span id="rf34"></span>**RF34** | **Cadastrar centro de custo de obra** | CAR-06 | O Gestor Operacional de Obras (`GESTOR_OBRAS`) cadastra centros de custo vinculados a contratos de obras ativos, permitindo a classificação e a vinculação de despesas operacionais para acompanhamento financeiro (RN09, RN11). |
| <span id="rf39"></span>**RF39** | **Atualizar centro de custo de obra** | CAR-06 | O Gestor Operacional de Obras (`GESTOR_OBRAS`) atualiza os dados de centros de custo previamente cadastrados, preservando seus vínculos com os contratos e as despesas operacionais associadas (RN09, RN11). |
| <span id="rf40"></span>**RF40** | **Definir tetos orçamentários de obra** | CAR-06 | O Gestor Operacional de Obras (`GESTOR_OBRAS`) define tetos orçamentários por categoria de despesa para contratos de obras ativos. O sistema armazena os valores configurados e calcula automaticamente o orçamento total previsto do contrato pela soma dos tetos de suas categorias, disponibilizando esses valores para o monitoramento da execução orçamentária (RF12, RN13) e para a configuração de alertas preventivos (RF31, RN29). |


## Rastreabilidade entre Requisitos Funcionais

A tabela apresenta as dependências e integrações entre os requisitos deste módulo e os demais módulos do DUOC Finance.

| Requisito | Relações com outros requisitos |
| :---: | :--- |
| [RF09](#rf09) | **Dependência:** [RF32](modulo-1.md#rf32) (apontamentos homologados), [RF33](#rf33) (contratos ativos) e [RF34](#rf34) (centros de custo cadastrados). |
| [RF10](#rf10) | **Dependência:** [RF09](#rf09) (custos apropriados). **Integração:** [RF32](modulo-1.md#rf32) (origem e homologação dos apontamentos). |
| [RF11](#rf11) | **Dependência de dados:** [RF09](#rf09) (custos apropriados), [RF33](#rf33) (contratos) e [RF34](#rf34) (centros de custo). |
| [RF12](#rf12) | **Dependência:** [RF09](#rf09) (custos realizados) e [RF40](#rf40) (tetos orçamentários). **Integração:** [RF31](#rf31) (alertas de execução). |
| [RF30](#rf30) | **Dependência de dados:** [RF09](#rf09) (custos apropriados) e [RF33](#rf33) (contratos cadastrados). |
| [RF31](#rf31) | **Dependência:** [RF40](#rf40) (orçamento configurado). **Integração:** [RF12](#rf12) (indicadores de execução). |
| [RF33](#rf33) | **Integração:** [RF34](#rf34) (centros de custo), [RF37](#rf37) (atualização contratual) e [RF38](#rf38) (consulta de contratos). |
| [RF37](#rf37) | **Dependência:** [RF33](#rf33) (contrato previamente cadastrado). |
| [RF38](#rf38) | **Dependência de dados:** [RF33](#rf33) (contratos cadastrados). |
| [RF34](#rf34) | **Dependência:** [RF33](#rf33) (contrato ativo). **Integração:** [RF39](#rf39) (atualização do centro de custo). |
| [RF39](#rf39) | **Dependência:** [RF34](#rf34) (centro de custo previamente cadastrado). |
| [RF40](#rf40) | **Dependência:** [RF33](#rf33) (contrato ativo). **Integração:** [RF34](#rf34) (categorias e centros de custo), [RF12](#rf12) (monitoramento orçamentário) e [RF31](#rf31) (alertas preventivos). |

## Regras de Negócio

1. **RN10 — Condição de Homologação para Apropriação:** O sistema permite a apropriação financeira somente de apontamentos previamente homologados pelo Gestor Operacional de Obras (RF32) e de despesas previamente aprovadas pelo Administrador Financeiro (RF08). Os registros devem estar vinculados a contratos ativos e centros de custo válidos, conforme RN09 e RN11.


2. **RN11 — Vínculo Contratual Mandatório:** O sistema bloqueia a apropriação de despesas sem vínculo estrito a um contrato ativo da DUOC, impedindo a existência de custos órfãos.

3. **RN12 — Versionamento de Apropriações:** Alterações retroativas em apontamentos já apropriados preservam o histórico da versão anterior e exigem nova homologação formal quando alterarem valores monetários.

4. **RN13 — Cálculo Padronizado de Execução Orçamentária:** O orçamento total previsto de um contrato corresponde à soma dos tetos orçamentários definidos para suas categorias de despesa (RF40). O sistema calcula o percentual de execução orçamentária pela equação `(Custo Apropriado Acumulado / Orçamento Previsto) * 100`, tanto no nível consolidado do contrato quanto individualmente por categoria. Caso o orçamento previsto seja igual a zero ou não esteja configurado, o percentual não deve ser calculado, e o sistema deve indicar a ausência de orçamento válido.


5. **RN14 — Segregação de Visualização Salarial e Sigilo de Remunerações:** O sistema oculta compulsoriamente campos de taxas salariais individuais e valores nominais de diárias para usuários que não possuam perfil `ADMIN_FINANCEIRO` ou `ADMIN_SISTEMA`, exibindo apenas totais agregados por obra para a gestão operacional de campo.

6. **RN28 — Comparativo Histórico de Custos:** O sistema deve calcular a variação absoluta e percentual dos custos apropriados entre os contratos e períodos selecionados, utilizando os valores consolidados e homologados disponíveis na base.

7. **RN29 — Disparo de Alertas Preventivos de Extrapolação Orçamentária:** O sistema deve disparar alertas quando o percentual de execução orçamentária de um contrato atingir ou ultrapassar o limiar percentual configurado pelo gestor (RF31) em relação ao teto orçamentário definido (RF40), registrando o evento e mantendo a notificação disponível no painel até sua resolução ou reconhecimento formal.

## Requisitos Não Funcionais

| Código | Requisito Verificável | URPS+ | Sommerville | Critério Mensurável |
| :---: | :--- | :--- | :--- | :--- |
| **RNF09** | **Carregar o painel analítico em tempo inferior a 3 segundos** | Performance (Desempenho) | Requisito do Produto — Eficiência/Desempenho | Em 95 de 100 execuções medidas em ambiente de testes com base sintética de até 10.000 lançamentos de custos e 100 contratos, a renderização completa dos indicadores analíticos deve ocorrer em no máximo 3,0 segundos. |
| **RNF10** | **Sanitizar e mascarar dados financeiros confidenciais em projeções analíticas** | Security (+) (Segurança) | Requisito do Produto — Segurança da Informação | Nas consultas analíticas do Módulo 3, requisições originadas por usuários sem perfil de diretoria ou finanças (`ADMIN_FINANCEIRO` e `ADMIN_SISTEMA`) devem ter 100% dos dados de taxas horárias e remunerações individuais omitidos ou mascarados em nível de projeção de API/banco de dados, retornando estritamente agregados sem vínculo nominal direto, com sobrecarga de processamento de sanitização ≤ 10 ms. |
| **RNF11** | **Garantir consistência transacional ACID na apropriação concorrente de custos** | Reliability (Confiabilidade) | Requisito do Produto — Confiabilidade/Dependabilidade | Em 100 testes de concorrência com acessos simultâneos de inclusão e homologação, não deve haver ocorrência de custos duplicados ou divergências entre a soma dos apontamentos e o total consolidado do contrato. |
| **RNF12** | **Assegurar responsividade do painel em resoluções de *desktop* e *tablet*** | Usability (Usabilidade) | Requisito do Produto — Usabilidade | Nas resoluções de tela (*viewports*) de 1024 × 768 px e 768 × 1024 px, 100% dos gráficos, tabelas e filtros essenciais devem permanecer visíveis e operáveis sem a necessidade de barra de rolagem horizontal. |

## Matriz de Rastreabilidade do Módulo 3

| Requisito | Objetivo Específico | Característica | Fonte de Elicitação / Origem | Regras de Negócio Associadas | Caso de Teste |
| :---: | :---: | :---: | :--- | :--- | :--- |
| **RF09** | OE3 | CAR-05 | Reunião 01, Reunião 05, TR-04 | RN09, RN10, RN11 | **CT-M3-01:** Disparar a apropriação financeira e validar a alocação correta das diárias homologadas e dos reembolsos aprovados aos contratos ativos e centros de custo correspondentes, impedindo apropriações duplicadas ou de registros sem aprovação. |
| **RF10** | OE3 | CAR-05 | Reunião 05, TR-04 | RN12 | **CT-M3-02:** Consultar linha de custo apropriado e verificar exibição da trilha documental de origem. |
| **RF11** | OE3 | CAR-06 | Reunião 04, Reunião 05, TR-04 | RN14 | **CT-M3-03:** Aplicar simultaneamente filtros por período, contrato, colaborador e centro de custo e validar o recálculo dinâmico dos indicadores e mascaramento salarial. |
| **RF12** | OE3 | CAR-06 | Reunião 05, TR-04 | RN13 | **CT-M3-04:** Monitorar o painel orçamentário e verificar o cálculo do orçamento total pela soma dos tetos das categorias, a apresentação dos custos realizados, dos desvios e dos percentuais de execução consolidados e por categoria, incluindo o destaque de extrapolações e o tratamento de orçamento não configurado ou igual a zero. |
| **RNF09** | OE3 | CAR-06 | Reunião 05, Diretrizes de Performance | — | **CT-M3-05:** Medir tempo de renderização do painel analítico sob carga de 10.000 registros (meta ≤ 3,0 s). |
| **RNF10** | OE3 | CAR-05, CAR-06 | Reunião 04, LGPD Art. 6º | RN14 | **CT-M3-06:** Validar sanitização e mascaramento de valores salariais em consultas analíticas fora do perfil financeiro. |
| **RNF11** | OE3 | CAR-05 | Reunião 05, Arquitetura ACID | — | **CT-M3-07:** Validar atomicidade transacional e ausência de inconsistências em apropriações concorrentes. |
| **RNF12** | OE3 | CAR-06 | Reunião 03, Reunião 04 | — | **CT-M3-08:** Inspecionar responsividade e ausência de *scroll* horizontal em resoluções de *desktop* e *tablet*. |
| **RF30** | OE3 | CAR-05 | Reunião 05 (Visão Executiva) | RN28 | **CT-M3-09:** Selecionar dois ou mais contratos e um período de comparação e validar a apresentação dos custos apropriados, das variações absolutas e das variações percentuais. |
| **RF31** | OE3 | CAR-06 | Reunião 05, TR-04 | RN29 | **CT-M3-10:** Configurar um limite de execução orçamentária para um contrato e validar o disparo do alerta no painel e por e-mail quando o percentual atingir ou ultrapassar o valor definido. |
| **RF33** | OE3 | CAR-05 | Reunião 01, Reunião 05, Revisão de Pares, TR-04 | RN09, RN11 | **CT-M3-11:** Cadastrar contrato de obra com cliente vinculado, vigência, valor global e retenções, verificando a persistência do novo registro e sua disponibilidade para vinculação de despesas e apropriação de custos. |
| **RF34** | OE3 | CAR-06 | Reunião 01, Reunião 05, Revisão de Pares, TR-04 | RN09, RN11 | **CT-M3-12:** Cadastrar centro de custo vinculado a um contrato de obra ativo, verificando sua persistência, a vinculação ao contrato e o bloqueio de despesas sem centro de custo válido (RN09, RN11). |
| **RF37** | OE3 | CAR-05 | Reunião 01, Reunião 05, Revisão de Pares, TR-04 | RN09, RN11 | **CT-M3-13:** Atualizar os dados de um contrato de obra existente e verificar a persistência das alterações, preservando sua identificação e os vínculos com os registros financeiros associados. |
| **RF38** | OE3 | CAR-05 | Reunião 01, Reunião 05, Revisão de Pares, TR-04 | — | **CT-M3-14:** Consultar um contrato de obra cadastrado e verificar a exibição dos dados contratuais e do cliente vinculado, sem modificar as informações armazenadas. |
| **RF39** | OE3 | CAR-06 | Reunião 01, Reunião 05, Revisão de Pares, TR-04 | RN09, RN11 | **CT-M3-15:** Atualizar os dados de um centro de custo existente e verificar a persistência das alterações, preservando seus vínculos com os contratos e despesas operacionais associados. |
| **RF40** | OE3 | CAR-06 | Reunião 01, Reunião 05, Revisão de Pares, TR-04 | RN13, RN29 | **CT-M3-16:** Definir tetos orçamentários por categoria de despesa para um contrato ativo, verificar a persistência dos valores e validar o cálculo automático do orçamento total previsto pela soma dos tetos configurados, disponibilizando os resultados para o monitoramento da execução orçamentária (RF12, RN13). |
