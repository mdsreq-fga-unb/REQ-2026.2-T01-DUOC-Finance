# OE3 — Inteligência de Custos por Contrato

Este documento detalha os requisitos da **DUOC Finance**, associado ao **OE3 — Transparecer as informações sobre os Custos por Contrato**. O módulo cobre as características **CAR-05 — Apropriação e Rastreabilidade de Custos por Contrato** e **CAR-06 — Painel Analítico de Custo Apropriado e Desvio Orçamentário por Projeto**.

## 8.1 Requisitos Funcionais

Os requisitos funcionais abaixo descrevem comportamentos observáveis do sistema.

| Código | Requisito | CAR relacionada | Critério de aceitação |
| :---: | :--- | :---: | :--- |
| **RF09** | **Consolidar custo de folha por contrato** | CAR-05 | Dado um conjunto de registros de funcionários vinculados a um contrato ativo, o sistema deve consolidar o montante dos custos de folha de pagamento atribuídos ao contrato, considerando os valores previamente apurados e homologados, sem substituir ou duplicar o relatório individual de folha de pagamento. |
| **RF10** | **Rastrear origem do custo apropriado** | CAR-05 | Para cada custo apropriado, o sistema deve permitir consultar o registro de origem, o usuário responsável, a data e hora da operação, o contrato e o status de homologação, sem permitir custos órfãos ou desvinculados de contrato válido. |
| **RF11** | **Consultar custo apropriado por contrato** | CAR-06 | Usuário autorizado deve consultar o custo acumulado de um ou mais contratos, aplicando filtros por período, contrato, colaborador e categoria de custo, com atualização dos resultados após a aplicação dos filtros. |
| **RF12** | **Comparar custo apropriado ao orçamento** | CAR-06 | O painel deve apresentar, por contrato, o orçamento previsto, o custo apropriado, o valor do desvio e o percentual de execução orçamentária, destacando contratos cujo custo acumulado ultrapasse o orçamento definido. |

### Regras de negócio

1. Somente registros homologados podem gerar apropriação financeira.
2. Todo custo apropriado deve estar vinculado a um contrato ativo e a uma origem identificável.
3. Alterações em registros já apropriados devem preservar o histórico da versão anterior e exigir nova homologação quando afetarem o valor do custo.
4. O percentual de execução orçamentária deve ser calculado por `custo apropriado / orçamento previsto × 100`.
5. Dados financeiros e salariais devem respeitar o perfil de acesso do usuário autenticado.

## 8.2 Requisitos Não Funcionais

Os RNFs são classificados simultaneamente pelo modelo **URPS+** e pela taxonomia de **Sommerville**. O modelo URPS+ organiza atributos de qualidade em usabilidade, confiabilidade, desempenho e suportabilidade; o sinal `+` contempla restrições adicionais, como segurança. Nesta OE, os quatro requisitos abaixo pertencem à categoria **Requisitos do Produto**, pois especificam propriedades de qualidade do sistema. Cada critério possui uma condição mensurável para verificação.

| Código | Requisito verificável | URPS+ | Sommerville | Critério mensurável |
| :---: | :--- | :--- | :--- | :--- |
| **RNF09** | **Carregar o painel analítico em até 3 segundos** em consultas com até 10.000 registros de custos e até 100 contratos. | Performance | Requisito do Produto — Eficiência/Desempenho | Em 95 de 100 execuções, medidas no ambiente de homologação com dados sintéticos, a primeira visualização dos indicadores deve ocorrer em no máximo 3 s. |
| **RNF10** | **Restringir dados financeiros por perfil de acesso** conforme as permissões definidas para cada papel. | Security (+) | Requisito do Produto — Segurança da Informação | Em 100% dos casos de teste de autorização, um usuário sem permissão deve receber resposta HTTP 403 e não deve visualizar registros financeiros de contratos não autorizados. |
| **RNF11** | **Manter a consistência transacional da apropriação de custos** durante inclusões, alterações e homologações concorrentes. | Reliability | Requisito do Produto — Confiabilidade/Dependabilidade | Em 100 execuções concorrentes do cenário de teste, não deve haver custo duplicado, registro órfão ou divergência entre o total dos lançamentos e o total do contrato; todas as operações devem ser confirmadas ou revertidas integralmente. |
| **RNF12** | **Permitir uso do painel em telas de computador e tablet** sem perda de informação essencial. | Usability | Requisito do Produto — Usabilidade | Nos viewports de 1024 × 768 px e 768 × 1024 px, 100% dos indicadores, filtros e rótulos obrigatórios devem permanecer acessíveis sem rolagem horizontal. |

## 8.3 Matriz de Rastreabilidade

| Requisito | Objetivo específico | Característica | Caso de teste |
| :---: | :---: | :---: | :---: |
| RF09 | OE3 | CAR-05 | CT-M3-01 — Apropriar horas homologadas ao contrato |
| RF10 | OE3 | CAR-05 | CT-M3-02 — Consultar a origem de um custo apropriado |
| RF11 | OE3 | CAR-06 | CT-M3-03 — Filtrar custo por contrato e período |
| RF12 | OE3 | CAR-06 | CT-M3-04 — Exibir desvio orçamentário e alerta de extrapolação |
| RNF09 | OE3 | CAR-06 | CT-M3-05 — Medir tempo de carregamento do painel |
| RNF10 | OE3 | CAR-05/CAR-06 | CT-M3-06 — Bloquear consulta fora do escopo do perfil |
| RNF11 | OE3 | CAR-05 | CT-M3-07 — Verificar consistência em operações concorrentes |
| RNF12 | OE3 | CAR-06 | CT-M3-08 — Verificar responsividade do painel |

### Relação com regras de negócio

As regras de negócio definem políticas e condições do domínio, enquanto os RFs descrevem o comportamento que o sistema deve oferecer e os RNFs estabelecem propriedades de qualidade. No Módulo 3, as regras de homologação, vínculo obrigatório ao contrato e cálculo do percentual de execução orçamentária condicionam a implementação dos RF09 a RF12 e contribuem para os RNFs de segurança, confiabilidade e desempenho.

