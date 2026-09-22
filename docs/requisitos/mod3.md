# OE3 — Inteligência de Custos por Contrato

Este documento detalha os requisitos da **DUOC Finance**, associado ao **OE3 — Transparecer as informações sobre os Custos por Contrato**. O módulo cobre as características **CAR-05 — Apropriação e Rastreabilidade de Custos por Contrato** e **CAR-06 — Painel Analítico de Custo Apropriado e Desvio Orçamentário por Projeto**.

## 8.1 Requisitos Funcionais

Os requisitos funcionais abaixo descrevem comportamentos observáveis do sistema.

| Código | Requisito | CAR relacionada | Critério de aceitação |
| :---: | :--- | :---: | :--- |
| **RF09** | **Apropriar custo de mão de obra ao contrato** | CAR-05 | Dado um registro de horas ou RVT homologado e vinculado a um contrato, o sistema deve calcular e registrar o custo correspondente no centro de custo do contrato, preservando o colaborador, o período, a origem e o valor apropriado. |
| **RF10** | **Rastrear origem do custo apropriado** | CAR-05 | Para cada custo apropriado, o sistema deve permitir consultar o registro de origem, o usuário responsável, a data e hora da operação, o contrato e o status de homologação, sem permitir custos órfãos ou desvinculados de contrato válido. |
| **RF11** | **Consultar custo apropriado por contrato** | CAR-06 | Usuário autorizado deve consultar o custo acumulado de um ou mais contratos, aplicando filtros por período, contrato, colaborador e categoria de custo, com atualização dos resultados após a aplicação dos filtros. |
| **RF12** | **Comparar custo apropriado ao orçamento** | CAR-06 | O painel deve apresentar, por contrato, o orçamento previsto, o custo apropriado, o valor do desvio e o percentual de execução orçamentária, destacando contratos cujo custo acumulado ultrapasse o orçamento definido. |

### Regras de negócio

1. Somente registros homologados podem gerar apropriação financeira.
2. Todo custo apropriado deve estar vinculado a um contrato ativo e a uma origem identificável.
3. Alterações em registros já apropriados devem preservar o histórico da versão anterior e exigir nova homologação quando afetarem o valor do custo.
4. O percentual de execução orçamentária deve ser calculado por `custo apropriado / orçamento previsto × 100`.
5. Dados financeiros e salariais devem respeitar o perfil de acesso do usuário autenticado.

