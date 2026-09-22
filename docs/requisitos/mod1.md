## OE1 — Padronização e Unificação de Dados

Esta seção detalha os requisitos da **DUOC Finance** associados ao **OE1 — Padronizar e Unificar os Dados**. O módulo cobre as características **CAR-01 — Gestão Cadastral Unificada de Pessoal** e **CAR-02 — Apontamento Móvel de Atividades e Registros de Campo**.

### Requisitos Funcionais

Os requisitos funcionais abaixo descrevem comportamentos observáveis do sistema voltados à unicidade de cadastros e coleta de dados operacionais em campo.

| Código | Requisito | CAR relacionada | Critério de aceitação |
| :---: | :--- | :---: | :--- |
| **RF01** | Cadastrar colaborador e histórico contratual | CAR-01 | O sistema deve permitir o registro completo de colaboradores (dados pessoais, bancários e trabalhistas) impedindo cadastros duplicados através da validação única do CPF. |
| **RF02** | Consultar e atualizar perfil cadastral unificado | CAR-01 | As alterações cadastrais feitas pelo perfil autorizado do RH devem ser refletidas em tempo real para os módulos financeiro e operacional, mantendo o histórico de versões. |
| **RF03** | Registrar movimentações e desligamento de pessoal | CAR-01 | O sistema deve permitir alterar o status do colaborador (ativo, afastado, de férias, desligado) e inativar seu acesso ao aplicativo móvel de campo imediatamente após a confirmação do desligamento. |
| **RF04** | Registrar ponto e relatório de viagem técnica | CAR-02 | O usuário deve conseguir registrar a jornada diária e detalhar a viagem técnica diretamente pelo aplicativo móvel. |
| **RF05** | Anexar comprovantes e evidências fotográficas em campo | CAR-02 | O sistema deve permitir o upload e a vinculação de fotos, recibos e imagens aos registros de campo e relatórios de viagem, comprimindo os arquivos para envio rápido. |
| **RF06** | Sincronizar apontamentos de atividades offline | CAR-02 | O sistema deve armazenar localmente os dados registrados em campo sem conexão e realizar a sincronização automática assim que houver conectividade com a rede. |

### Regras de negócio

1. Não é permitido o cadastro de mais de um colaborador com o mesmo número de CPF no sistema.
2. Apontamentos de campo já aprovados pela supervisão ou com mais de 5 dias úteis de registro não podem ser alterados pelo usuário comum.
3. Nenhum pagamento ou reembolso pode ser processado sem que o colaborador esteja ativo e com dados bancários validados no cadastro unificado.
4. Colaboradores com status "Desligado" ou "Afastado" ficam automaticamente impedidos de realizar novos registros no aplicativo móvel.

### Requisitos Não Funcionais

Os RNFs são classificados simultaneamente pelo modelo **URPS+** e pela taxonomia de **Sommerville**. O modelo URPS+ organiza atributos de qualidade em usabilidade, confiabilidade, desempenho e suportabilidade; o sinal `+` contempla restrições adicionais, como segurança. Nesta OE, os requisitos especificam propriedades essenciais de usabilidade em canteiro, confiabilidade e portabilidade. Cada critério possui uma condição mensurável para verificação.

| Código | Requisito verificável | URPS+ | Sommerville | Critério mensurável |
| :---: | :--- | :--- | :--- | :--- |
| **RNF01** | O aplicativo móvel deve operar em modo offline para coleta de dados em canteiros sem conectividade. | Confiabilidade / Usabilidade | Requisito de Produto (Confiabilidade) | Permite registrar até 100 apontamentos sem sinal de internet e sincronizar tudo em até 30 segundos após restabelecimento da conexão. |
| **RNF02** | A consulta e carregamento dos dados cadastrais unificados de pessoal devem ocorrer de forma ágil. | Desempenho | Requisito de Produto (Desempenho) | Tempo de resposta para busca e exibição da ficha do colaborador menor ou igual a 2 segundos em 95% das requisições. |
| **RNF03** | Os dados pessoais e sensíveis dos colaboradores devem ser armazenados e trafegados com criptografia. | Segurabilidade (+) | Requisito Organizacional (Segurança/LGPD) | Uso de criptografia AES-256 para dados armazenados e protocolo TLS 1.3 em trânsito com 100% dos dados em conformidade. |
| **RNF04** | A interface do aplicativo de apontamento deve ser intuitiva para uso rápido em campo. | Usabilidade | Requisito de Produto (Usabilidade) | Usuários treinados devem conseguir concluir o registro diário de apontamento em menos de 3 minutos e com taxa de erro de operação inferior a 2%. |

### Matriz de Rastreabilidade

| Requisito | Objetivo específico | Característica | Caso de teste |
| :---: | :---: | :---: | :--- |
| **RF01** | OE1 | CAR-01 | **CT-M1-01:** Validar cadastro de novo colaborador com dados válidos.<br>**CT-M1-02:** Impedir cadastro duplicado utilizando CPF já existente. |
| **RF02** | OE1 | CAR-01 | **CT-M1-03:** Verificar atualização cadastral refletida em tempo real no sistema. |
| **RF03** | OE1 | CAR-01 | **CT-M1-04:** Alterar status para "Desligado" e validar bloqueio imediato no app. |
| **RF04** | OE1 | CAR-02 | **CT-M1-05:** Registrar ponto diário e detalhes de viagem no app móvel. |
| **RF05** | OE1 | CAR-02 | **CT-M1-06:** Anexar fotos/comprovantes e validar compressão e upload.<br>**CT-M1-07:** Testar limite e formato de arquivos de imagem anexados. |
| **RF06** | OE1 | CAR-02 | **CT-M1-08:** Simular registros offline e verificar sincronização automática ao reconectar. |
| **RNF01** | OE1 | CAR-02 | **CT-M1-09:** Testar limite de 100 registros offline e tempo de sync < 30s. |
| **RNF02** | OE1 | CAR-01 | **CT-M1-10:** Medir tempo de resposta da busca de colaboradores (meta < 2s). |
| **RNF03** | OE1 | CAR-01 | **CT-M1-11:** Validar criptografia AES-256 em banco e TLS 1.3 em trânsito. |
| **RNF04** | OE1 | CAR-02 | **CT-M1-12:** Avaliar tempo de preenchimento (< 3min) e taxa de erro em uso do app. |