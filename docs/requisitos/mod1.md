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