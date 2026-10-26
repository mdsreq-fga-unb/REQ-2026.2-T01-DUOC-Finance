
# Módulo 4 (OE4) — Governança, Segurança e Rastreabilidade

Esta seção detalha os requisitos da **DUOC Finance** associados ao **OE4 — Garantir Segurança e Governança de Dados**. O módulo cobre as características **CAR-07 — Controle de Acesso Baseado em Papéis (RBAC)** e **CAR-08 — Trilha de Auditoria e Histórico de Operações Sensíveis**.

## Requisitos Funcionais

Os requisitos abaixo expressam as **ações dos usuários** para autenticação corporativa, gestão de permissões e auditoria probatória de eventos.

| Código | Requisito (Ação do Usuário) | CAR relacionada | Critério de Aceitação |
| :---: | :--- | :---: | :--- |
| <span id="rf13"></span>**RF13** | **Efetuar login no sistema** | CAR-07 | O usuário autentica-se na plataforma informando e-mail e senha corporativos válidos, recebendo token JWT temporário com perfil de acesso RBAC associado (RN15). Credenciais inválidas geram mensagem de erro genérica sem enumeração de contas. |
| <span id="rf14"></span>**RF14** | **Gerenciar perfis de acesso** | CAR-07 | O Administrador do Sistema (`ADMIN_SISTEMA`) atribui a cada usuário um dos 4 papéis canônicos de acesso (`TECNICO_CAMPO`, `GESTOR_OBRAS`, `ADMIN_FINANCEIRO` ou `ADMIN_SISTEMA`), passando as permissões e restrições a vigorar na camada de autenticação/autorização em todas as telas e rotas de API da aplicação (RN16, RNF14). |
| <span id="rf15"></span>**RF15** | **Consultar trilha de auditoria** | CAR-08 | Usuários com perfil de auditoria (`ADMIN_SISTEMA` ou `ADMIN_FINANCEIRO`) consultam a trilha de auditoria filtrando eventos por período, operador, tipo de operação, módulo afetado e faixa de valor financeiro; cada evento exibe autor, ação, estado anterior e posterior serializados e carimbo temporal UTC (RN17, RN18). |
| <span id="rf16"></span>**RF16** | **Exportar relatório de auditoria** | CAR-08 | O Administrador do Sistema (`ADMIN_SISTEMA`) exporta relatórios de auditoria em formatos estruturados (PDF/CSV) contendo o histórico integral e imutável de operações auditadas, para fins de governança corporativa e instrução probatória defensiva em conformidade com o prazo prescricional trabalhista (Artigo 11 da CLT). |
| <span id="rf17"></span>**RF17** | **Recuperar credenciais de acesso** | CAR-07 | O colaborador que esqueceu a senha informa o e-mail corporativo cadastrado e recebe nele um link de redefinição de uso único válido por 30 minutos (RN15); a resposta exibida não revela se o e-mail existe ou não na base, prevenindo a enumeração de usuários. |
| <span id="rf18"></span>**RF18** | **Encerrar sessão manualmente** | CAR-07 | Ao acionar o encerramento voluntário de sessão (*logout*), o token de autenticação ativo é compulsoriamente revogado e invalidado na hora no backend, redirecionando o usuário para a tela de login. |
| <span id="rf23"></span>**RF23** | **Bloquear acesso após tentativas falhas consecutivas** | CAR-07 | Após 5 tentativas de login com credenciais inválidas em até 15 minutos, a conta fica bloqueada preventivamente por 30 minutos, com mensagem informativa padronizada que não revela se a divergência decorreu do e-mail ou da senha (RN20). |
| <span id="rf24"></span>**RF24** | **Impor renovação periódica de senhas** | CAR-07 | Quando a senha atinge 90 dias de vigência desde a última alteração, o acesso só é liberado mediante definição de nova credencial, sendo vedada a repetição de qualquer uma das últimas 5 senhas cadastradas (RN21). |

## Regras de Negócio

1. **RN15 — Autenticação Mandatória com Token Válido:** O sistema exige token temporário válido e não expirado para qualquer requisição a recursos e dados protegidos.

2. **RN16 — Princípio do Menor Privilégio e Matriz Canônica RBAC:** O sistema aplica controle de acesso baseado em papéis (RBAC) estruturado nos 4 papéis canônicos (`TECNICO_CAMPO`, `GESTOR_OBRAS`, `ADMIN_FINANCEIRO` e `ADMIN_SISTEMA`): técnicos de campo acessam apenas seus próprios apontamentos e reembolsos; gestores de obras deliberam apontamentos e despesas de seus contratos; o administrador financeiro consolida e fecha competências; e administradores do sistema gerenciam papéis e infraestrutura.

3. **RN17 — Registro Mandatório e Integridade de Eventos na Trilha de Auditoria:** Toda operação de inclusão, alteração ou exclusão sobre dados cadastrais, apontamentos, fechamentos e despesas gera compulsoriamente um registro de auditoria com autor, endereço IP, carimbo UTC e dados modificados (RNF15).

4. **RN18 — Imutabilidade Estrita da Trilha de Auditoria (*Append-Only*):** Os registros da trilha de auditoria operam sob regime exclusivo de inserção (*append-only*), sendo tecnicamente vedada qualquer operação de edição, atualização ou exclusão lógica ou física por qualquer usuário ou perfil do sistema.

5. **RN19 — Política Corporativa de Retenção Quinquenal de Logs:** Como diretriz de conformidade preventiva e governança defensiva alinhada ao prazo prescricional trabalhista quinquenal (Artigo 11 da CLT), a organização veda o expurgo de registros de auditoria operacional e financeira com tempo de retenção inferior a 5 anos (1.825 dias), resguardada a prerrogativa do Artigo 16, II da LGPD.

6. **RN20 — Limite de Tentativas de Autenticação:** O sistema contabiliza tentativas falhas de login por conta e aplica bloqueio temporário de 30 minutos ao atingir 5 erros consecutivos em 15 minutos, resetando o contador após login bem-sucedido.

7. **RN21 — Política de Expiração e Histórico de Senhas:** O sistema mantém hash das últimas 5 senhas utilizadas por usuário, impedindo sua reutilização, e força redefinição compulsória a cada 90 dias corridos.

## Requisitos Não Funcionais

| Código | Requisito Verificável | URPS+ | Sommerville | Critério Mensurável |
| :---: | :--- | :--- | :--- | :--- |
| **RNF13** | **Expirar token de acesso temporário em no máximo 8 horas** | Security (+) (Segurança) | Requisito do Produto — Confiabilidade/Segurança | Em 100% dos testes de segurança automatizados, requisições submetidas com tokens emitidos há mais de 8 horas (28.800 segundos) devem ser sumariamente rejeitadas com código HTTP 401 Unauthorized. |
| **RNF14** | **Validar perfil de autorização em 100% das rotas de API com dados protegidos** | Security (+) / Legal | Requisito Externo — Legislativo/Regulamentar (LGPD Art. 6º) | Cobertura de 100% dos endpoints de backend que trafegam dados financeiros ou cadastrais confidenciais por filtros/guards de permissão RBAC, com resposta obrigatória HTTP 403 Forbidden em no máximo 15 ms para papéis não autorizados. |
| **RNF15** | **Garantir consistência transacional e atomicidade na gravação de logs de auditoria** | Reliability (Confiabilidade) | Requisito do Produto — Confiabilidade/Dependabilidade | Em 100% das operações de escrita disparadas contra dados de pessoal e financeiros na suíte de testes, a entrada correspondente de auditoria deve ser confirmada na mesma transação atômica ACID do banco de dados (PostgreSQL), com taxa de perda zero e latência de persistência ≤ 50 ms. |
| **RNF16** | **Reter registros de auditoria por no mínimo 5 anos contra expurgo físico indevido** | Reliability / Legal (+) | Requisito Externo — Requisito Legal / Regulatório (Conformidade CLT / LGPD) | Inexistência comprovada por análise estática e testes de vulnerabilidade de comandos ou permissões de banco que permitam a deleção física de registros com tempo de retenção inferior a 5 anos (1.825 dias), assegurando persistência em conformidade defensiva com o Art. 11 da CLT e Art. 16 da LGPD. |
| **RNF17** | **Realizar backup automático diário com restauração verificada** | Reliability (Confiabilidade) | Requisito do Produto — Confiabilidade/Dependabilidade | O sistema deve executar backup automático completo diário do banco de dados e dos comprovantes anexados, reter as cópias por no mínimo 30 dias e verificar a integridade de 100% dos backups gerados; a restauração completa em ambiente de teste deve ser concluída em até 4 horas, com perda máxima de dados de 24 horas. |
| **RNF18** | **Garantir disponibilidade mínima mensal do sistema** | Reliability (Confiabilidade) | Requisito do Produto — Confiabilidade | Disponibilidade mínima de 99,5% ao mês, medida por monitoramento externo automatizado, com janelas de manutenção programada comunicadas com no mínimo 48h de antecedência e em janela fora do horário comercial (22h às 06h UTC). |
| **RNF20** | **Validar integridade de payloads em todas as rotas de escrita da API** | Reliability / Security (+) | Requisito do Produto — Confiabilidade | 100% das requisições POST/PUT/PATCH são validadas contra schema de dados antes da persistência; payload malformado retorna HTTP 400 com mensagem de erro estruturada, sem exceção não tratada. |

## Matriz de Rastreabilidade do Módulo 4

| Requisito | Objetivo Específico | Característica | Fonte de Elicitação / Origem | Regras de Negócio Associadas | Caso de Teste |
| :---: | :---: | :---: | :--- | :--- | :--- |
| **RF13** | OE4 | CAR-07 | Reunião 04 (Sessão de Acesso) | RN15, RN16 | **CT-M4-01:** Submeter credenciais corporativas válidas e verificar autenticação e emissão de token temporário. |
| **RF14** | OE4 | CAR-07 | Reunião 04, LGPD | RN16 | **CT-M4-02:** Atribuir perfil RBAC e verificar aplicação imediata e bloqueio de rotas não autorizadas (HTTP 403). |
| **RF15** | OE4 | CAR-08 | Reunião 05, LGPD | RN17, RN18 | **CT-M4-03:** Consultar log de auditoria com filtros e validar exibição de autor, operação e carimbo temporal UTC. |
| **RF16** | OE4 | CAR-08 | Reunião 05, CLT Art. 11 | RN18, RN19 | **CT-M4-04:** Exportar dossiê de auditoria e confirmar bloqueio estrito contra comandos de edição ou deleção. |
| **RNF13** | OE4 | CAR-07 | Reunião 04, Segurança da Informação | RN15 | **CT-M4-05:** Testar expiração compulsória de tokens de sessão após decorridas 8 horas com retorno HTTP 401. |
| **RNF14** | OE4 | CAR-07 | Reunião 04, LGPD Art. 6º | RN16 | **CT-M4-06:** Validar conformidade regulatória (LGPD) e isolamento horizontal em 100% das rotas de dados protegidos. |
| **RNF15** | OE4 | CAR-08 | Reunião 05, Arquitetura de Banco | RN17 | **CT-M4-07:** Confirmar persistência atômica da entrada de auditoria na mesma transação da base de dados. |
| **RNF16** | OE4 | CAR-08 | CLT Art. 11, Diretrizes Jurídicas | RN19 | **CT-M4-08:** Auditar retenção mínima por 5 anos (1.825 dias) e proteção ativa contra rotinas de expurgo. |
| **RF17** | OE4 | CAR-07 | Feedback FB-04, Reunião 04 | RN15 | **CT-M4-09:** Solicitar recuperação de senha e validar envio do link com validade de 30 minutos e uso único, sem revelar a existência do e-mail. |
| **RF18** | OE4 | CAR-07 | Feedback FB-05, Reunião 04 | RN15 | **CT-M4-10:** Encerrar a sessão manualmente e validar invalidação imediata do token e redirecionamento para a tela de login. |
| **RNF17** | OE4 | CAR-08 | Feedback FB-08, Segurança de Infraestrutura | — | **CT-M4-11:** Executar o backup diário, verificar a integridade e restaurar em ambiente de teste em até 4 horas, confirmando perda máxima de 24 horas de dados e retenção de 30 dias. |
| **RF23** | OE4 | CAR-07 | Reunião 05, Políticas de Segurança | RN20 | **CT-M4-12:** Simular 5 tentativas de login inválidas em 15 minutos e validar bloqueio temporário de 30 minutos da conta. |
| **RF24** | OE4 | CAR-07 | Reunião 05, Políticas de Segurança | RN21 | **CT-M4-13:** Simular senha com 90 dias de uso e validar exigência de redefinição; tentar reutilizar uma das últimas 5 senhas e validar bloqueio. |
| **RNF18** | OE4 | CAR-08 | Diretrizes de SLA, Revisão de Pares | — | **CT-M4-14:** Monitorar uptime mensal da aplicação e validar disponibilidade do sistema ≥ 99,5%, com manutenções comunicadas com antecedência. |
| **RNF20** | OE4 | CAR-07, CAR-08 | Padrões RESTful, Revisão de Pares | RN15 | **CT-M4-15:** Submeter payloads malformados a todas as rotas de escrita da API e validar rejeição HTTP 400 estruturada, sem exceção não tratada. |

<a id="conformidade-juridica-clt-lgpd"></a>

## Conformidade Jurídica, Privacidade e Governança Legal (CLT e LGPD)

Para fundamentar as regras de negócio e os atributos de qualidade relacionados à retenção probatória e à proteção de dados, esta especificação estabelece as seguintes diretrizes normativas:

1. **Prazo Prescricional Trabalhista (Art. 11 da CLT) e Política de Retenção Quinquenal:**

    O Artigo 11 da Consolidação das Leis do Trabalho (CLT) fixa o prazo prescricional de cinco anos para os créditos resultantes das relações de trabalho (até o limite de dois anos após a extinção do contrato). Embora o artigo trate estritamente da prescrição do direito de ação e não constitua comando normativo direto que obrigue sistemas de software a reter logs, a DUOC adota a **retenção imutável de 5 anos (1.825 dias) como decisão de política corporativa de governança defensiva e conformidade preventiva** (RN19, RNF16). Essa retenção assegura a produção de acervo probatório íntegro para instrução e defesa em eventuais demandas trabalhistas, tributárias ou cíveis.

2. **Direito de Eliminação (Art. 18, VI da LGPD) vs. Prerrogativa de Retenção Legal (Art. 16 da LGPD):**

    O direito de eliminação de dados pessoais titularizado pelo colaborador (Art. 18, VI da Lei nº 13.709/2018 — LGPD) não tem caráter absoluto. Em consonância com o **Artigo 16, incisos I e II da LGPD**, a retenção dos registros operacionais, contratos e logs de auditoria pelo prazo de 5 anos é expressamente respaldada pelas hipóteses de conservação para:

    - *(I) cumprimento de obrigação legal ou regulatória pelo controlador;* e
    - *(II) exercício regular de direitos em processo judicial, administrativo ou arbitral.*

    Portanto, solicitações de exclusão de registros de apontamentos, reembolsos e logs de acesso durante o prazo quinquenal prescricional são indeferidas com fundamento na tutela judicial e cumprimento de obrigações legais da DUOC, resguardando a integridade probatória do sistema.

3. **Natureza Jurídica dos Dados Pessoais (Art. 5º, II da LGPD):**

    Em estrita aderência à taxonomia da LGPD (Art. 5º, inciso II), o *DUOC Finance* esclarece que informações cadastrais e financeiras — tais como número de CPF, agência/conta bancária, chave Pix e remuneração/diárias — constituem **dados pessoais comuns sujeitos a sigilo e dever de segurança (Art. 6º, VII)**, e **não "dados pessoais sensíveis"** na acepção da lei (que são restritos a origem racial, convicção religiosa, dados de saúde, biométricos ou genéticos). O tratamento biométrico, quando existente, ocorre exclusivamente no ambiente externo do software parceiro *Shifton*, trafegando no *DUOC Finance* apenas o registro numérico e homologado das presenças (RF20).
