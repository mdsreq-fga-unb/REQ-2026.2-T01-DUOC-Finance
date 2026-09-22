# OE2 — Aumentar a Eficiência Administrativo-Financeira

Este documento detalha os requisitos da **DUOC Finance**, associado ao **OE2 — Aumentar a Eficiência Administrativo-Financeira**. O módulo cobre as características **CAR-03 — Motor de Processamento e Fechamento Financeiro** e **CAR-04 — Fluxo Digital de Prestação de Contas e Reembolsos**.

## 8.1 Requisitos Funcionais

Os requisitos funcionais abaixo descrevem comportamentos observáveis do sistema.

| Código | Requisito | CAR relacionada | Critério de aceitação |
| :---: | :--- | :---: | :--- |
| **RF01** | **Processar o fechamento financeiro mensal** | CAR-03 | Dado um conjunto de funcionários ativos no mês, o sistema deve consolidar os dados financeiros e processar o fechamento em lote, condicionando a aprovação final ao perfil gerencial. |
| **RF02** | **Calcular as provisões de folha de pagamento** | CAR-03 | O sistema deve multiplicar as horas técnicas apontadas e aprovadas pelo custo/hora do colaborador, compondo o valor de provisão de folha do contrato. |
| **RF03** | **Calcular as comissões variáveis por funcionário** | CAR-03 | O sistema deve aplicar as regras de comissionamento de cada contrato em andamento sobre a base de cálculo de horas e recebíveis homologados. |
| **RF04** | **Emitir relatório de conferência supervisionada** | CAR-03 | O sistema deve gerar um relatório detalhado com o consolidado do fechamento, disponibilizando-o apenas para a revisão e supervisão da diretoria. |
| **RF05** | **Submeter o comprovante fiscal digitalizado** | CAR-04 | O usuário deve conseguir realizar o upload de uma imagem ou PDF de cupom fiscal na plataforma e visualizá-lo atrelado a uma despesa. |
| **RF06** | **Vincular a prestação de contas a um contrato** | CAR-04 | A plataforma deve exigir que toda despesa ou reembolso operacional submetido seja obrigatoriamente associado a um contrato ativo da empresa. |
| **RF07** | **Aprovar ou reprovar fluxos de reembolso** | CAR-04 | Um usuário com perfil de coordenação técnica deve poder visualizar os reembolsos submetidos por sua equipe e definir o status como "Aprovado" ou "Reprovado". |
| **RF08** | **Consultar histórico tempestivo de aprovações** | CAR-04 | O usuário solicitante deve acessar uma lista cronológica contendo suas solicitações de reembolso operacional e o respectivo status de aprovação. |
| **RF09** | **Calcular reembolso de RVTs** | CAR-04 | O sistema deve ser capaz de receber a submissão de comprovantes e valores referentes a translado e viagens técnicas e calcular o valor de reembolso devido.

### Regras de negócio

1. O processamento final do fechamento mensal requer obrigatoriamente a revisão e a supervisão manual de um perfil de acesso gerencial.
2. Apenas horas técnicas, Relatórios de Viagem Técnica (RVT) e despesas que possuam status de "homologado" podem compor a base de cálculo para a provisão da folha e das comissões.
3. O fluxo de prestação de contas digital bloqueia o envio da solicitação caso nenhum anexo ou cupom fiscal comprobatório seja vinculado à despesa informada.
4. Reembolsos associados a viagens técnicas só serão processados se a data do cupom fiscal corresponder ao período de execução do respectivo contrato.

## 8.2 Requisitos Não Funcionais

Os RNFs são classificados simultaneamente pelo modelo **URPS+** e pela taxonomia de **Sommerville**. O modelo URPS+ organiza atributos de qualidade em usabilidade, confiabilidade, desempenho e suportabilidade; o sinal `+` contempla restrições adicionais, como segurança. Nesta OE, os requisitos abaixo pertencem à categoria **Requisitos do Produto**, pois especificam propriedades de qualidade do sistema. Cada critério possui uma condição mensurável para verificação.

| Código | Requisito verificável | URPS+ | Sommerville | Critério mensurável |
| :---: | :--- | :--- | :--- | :--- |
| **RNF01** | **Processar cálculos com precisão e assincronicidade** garantindo consistência em valores monetários sem travamento de tela. | Performance | Requisito do Produto — Eficiência/Desempenho | O processamento do fechamento de contratos deve ocorrer via tarefas assíncronas em segundo plano (respostas _non-blocking_ no frontend) utilizando tipos numéricos de precisão exata para atributos monetários. |
| **RNF02** | **Aplicar a identidade visual da marca rigorosamente** seguindo o manual corporativo. | Usability | Requisito do Produto — Usabilidade | 100% das telas do painel financeiro devem ser desenvolvidas com base no manual de marca estabelecido pela empresa |
| **RNF03** | **Proteger o tráfego dos relatórios financeiros** durante a emissão para a diretoria. | Security (+) | Requisito do Produto — Segurança da Informação | 100% das comunicações e requisições de emissão de relatórios devem trafegar sob protocolo criptografado TLS 1.2 ou superior. |


## 8.3 Matriz de Rastreabilidade

| Requisito | Objetivo específico | Característica | Caso de teste |
| :---: | :---: | :---: | :---: |
| RF01 | OE2 | CAR-03 | CT-M2-01 — Processar fechamento financeiro em lote |
| RF02 | OE2 | CAR-03 | CT-M2-02 — Validar cálculo de provisão de folha |
| RF03 | OE2 | CAR-03 | CT-M2-03 — Validar aplicação de regras de comissionamento |
| RF04 | OE2 | CAR-03 | CT-M2-04 — Emitir e visualizar relatório gerencial |
| RF05 | OE2 | CAR-04 | CT-M2-05 — Fazer upload de comprovante fiscal |
| RF06 | OE2 | CAR-04 | CT-M2-06 — Salvar despesa com vínculo a contrato ativo |
| RF07 | OE2 | CAR-04 | CT-M2-07 — Atualizar status de solicitação (Aprovar/Reprovar) |
| RF08 | OE2 | CAR-04 | CT-M2-08 — Listar histórico cronológico de reembolsos do usuário |
| RNF01 | OE2 | CAR-03 | CT-M2-09 — Avaliar precisão monetária e *feedback* assíncrono |
| RNF02 | OE2 | CAR-03 | CT-M2-10 — Validar cores, tema escuro e tokens de design |
| RNF03 | OE2 | CAR-03 | CT-M2-11 — Analisar segurança do tráfego (TLS/HTTPS) |
| RNF04 | OE2 | CAR-04 | CT-M2-12 — Verificar contraste (AAA) e tamanho de alvos de toque |
| RNF05 | OE2 | CAR-04 | CT-M2-13 — Testar resiliência de upload em rede limitada/oscilante |
| RNF06 | OE2 | CAR-04 | CT-M2-14 — Testar isolamento de dados horizontais via RBAC |
