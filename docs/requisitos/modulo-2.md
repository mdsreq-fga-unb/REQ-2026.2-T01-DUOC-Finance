
# Módulo 2 (OE2) — Eficiência Administrativo-Financeira

Esta seção detalha os requisitos da **DUOC Finance** associados ao **OE2 — Aumentar a Eficiência Administrativo-Financeira**. O módulo cobre as características **CAR-03 — Motor de Processamento e Fechamento Financeiro** e **CAR-04 — Fluxo Digital de Prestação de Contas e Reembolsos**.

!!! note "Escopo de Fechamento Financeiro e Rotinas Contábeis"

    O motor financeiro do DUOC Finance apoia estritamente a apuração de diárias técnicas e comissões simplificadas de prestadores de serviços e a gestão ágil de reembolsos. O sistema não substitui as rotinas formais de folha de pagamento CLT nem o cálculo de encargos e provisões legais (INSS, FGTS, IRRF), que permanecem nos softwares contábeis legados da DUOC.

## Requisitos Funcionais

Os requisitos abaixo expressam as **ações dos usuários** na condução e supervisão do fechamento mensal e no ciclo de prestação de contas operacionais.

| Código | Requisito (Ação do Usuário) | CAR relacionada | Critério de Aceitação |
| :---: | :--- | :---: | :--- |
| <span id="rf05"></span>**RF05** | **Solicitar prévia de fechamento** | CAR-03 | O Administrador Financeiro (`ADMIN_FINANCEIRO`) gera um extrato preliminar consolidado para a competência mensal e contratos de obra selecionados, computando estritamente os apontamentos de campo previamente homologados pelo Gestor Operacional de Obras (RF32, RN05) e aplicando as fórmulas de diárias técnicas e comissões simplificadas parametrizadas (RN25, RN31) para conferência supervisionada antes do fechamento definitivo. |
| <span id="rf06"></span>**RF06** | **Homologar fechamento financeiro** | CAR-03 | O Administrador Financeiro (`ADMIN_FINANCEIRO`), após conferir o extrato preliminar consolidado (RF05), confirma formalmente a homologação do lote da competência mensal dos contratos selecionados. A confirmação encerra a competência, bloqueia compulsoriamente os apontamentos e despesas contra qualquer modificação direta (RN08), grava o carimbo de homologação com UTC e autor na trilha de auditoria (RN17) e emite o extrato financeiro definitivo para conciliação contábil; eventuais retificações posteriores exigem compulsoriamente o procedimento de estorno formal (RF21). |
| <span id="rf07"></span>**RF07** | **Submeter solicitação de reembolso** | CAR-04 | O Técnico de Campo (`TECNICO_CAMPO`) ou gestor solicita o reembolso de uma despesa operacional autorizada (hospedagem, combustível, alimentação de canteiro ou materiais emergenciais vinculados ao contrato ativo) informando valor monetário, categoria de despesa e contrato de obra, anexando compulsoriamente o comprovante fiscal digitalizado (RN06, RN09). A solicitação aceita é registrada com status "Pendente de Análise". |
| <span id="rf08"></span>**RF08** | **Deliberar solicitação de reembolso** | CAR-04 | O Administrador Financeiro (`ADMIN_FINANCEIRO`) analisa as solicitações pendentes de reembolso vinculadas a contratos ativos e delibera aprovando ou reprovando cada item, sendo o parecer formal obrigatório na reprovação. A decisão é registrada, o status do reembolso é atualizado, o valor aprovado é limitado ao montante do documento fiscal (RN07) e o solicitante é notificado via sistema (RN27). |
| <span id="rf21"></span>**RF21** | **Estornar fechamento financeiro** | CAR-03 | Diante de divergência material em lote de competência já homologado, o Administrador Financeiro (`ADMIN_FINANCEIRO`) estorna o fechamento financeiro informando compulsoriamente justificativa formal com no mínimo 15 caracteres (RN08, RNF08). A competência é reaberta para retificação, o fechamento original permanece preservado no histórico imutável e o evento de estorno é gravado na trilha de auditoria com autor, justificativa e carimbo UTC (RN17). |
| <span id="rf27"></span>**RF27** | **Configurar tabela de valores de diárias técnicas** | CAR-03 | O Administrador Financeiro (`ADMIN_FINANCEIRO`) cadastra e atualiza as categorias de diária técnica com valor nominal e período de vigência, passando as rotinas financeiras de fechamento a adotar automaticamente o valor vigente na competência apurada (RN25, RN31). |
| <span id="rf28"></span>**RF28** | **Submeter solicitação de adiantamento operacional** | CAR-04 | O Técnico de Campo (`TECNICO_CAMPO`) solicita adiantamento de recursos para despesa operacional autorizada de um contrato ativo informando valor, categoria, contrato e justificativa formal de aplicação. O adiantamento é registrado com status "Pendente de Análise" e fica disponível para análise financeira (RN03, RN09, RN26). |
| <span id="rf29"></span>**RF29** | **Deliberar solicitação de adiantamento operacional** | CAR-04 | O Administrador Financeiro (`ADMIN_FINANCEIRO`) analisa os adiantamentos pendentes vinculados a contratos ativos e aprova ou reprova cada solicitação, com justificativa obrigatória na reprovação. O status da solicitação é atualizado, a deliberação é registrada e o solicitante é notificado via sistema (RN27). |

## Regras de Negócio

1. **RN05 — Homologação Prévia Mandatória:** O sistema consolida exclusivamente apontamentos de RVT e horas técnicas que possuam status prévio de "Homologado" pelo Gestor Operacional de Obras (RF32), aplicando as fórmulas de cálculo de diárias e comissões simplificadas (RN31).

2. **RN06 — Obrigatoriedade de Comprovante Fiscal e Integridade:** Nenhuma solicitação de reembolso pode ser submetida sem um comprovante fiscal digital anexado (DANFE, NFC-e ou recibo formal), cuja integridade estrutural e formato são validados pelo subsistema de armazenamento conforme RNF07, ficando a verificação visual de conteúdo sob encargo do Administrador Financeiro na deliberação (RF08).

3. **RN07 — Limite do Montante Reembolsável:** O sistema impede que o valor aprovado para reembolso ultrapasse o valor nominal discriminado no documento fiscal comprobatório.

4. **RN08 — Imutabilidade de Lotes Homologados:** O sistema bloqueia modificações diretas em lotes financeiros homologados, exigindo procedimento formal de estorno com justificativa auditável para qualquer retificação.

5. **RN09 — Vínculo Contratual Obrigatório:** Todo reembolso, adiantamento ou despesa operacional deve estar estritamente vinculado a um contrato de obra ativo e a um centro de custos operacional válido cadastrados no sistema (RF33, RF34).

6. **RN25 — Vigência dos Valores de Diárias Técnicas:** O sistema deve manter os valores parametrizados de diárias técnicas associados às respectivas categorias e períodos de vigência, utilizando exclusivamente o valor vigente para o cálculo financeiro da competência correspondente.

7. **RN26 — Elegibilidade do Adiantamento Operacional:** O sistema permite solicitações de adiantamento somente para colaboradores ativos e despesas vinculadas a contrato ativo, mantendo a solicitação em status "Pendente de Análise" até a deliberação do responsável.

8. **RN27 — Notificação de Pendências Financeiras:** O sistema deve gerar notificação no painel e por e-mail ao responsável sempre que uma solicitação de reembolso ou adiantamento entrar em estado que exija análise ou deliberação, mantendo a pendência identificável até sua resolução.

9. **RN31 — Parametrização e Fórmulas de Diárias e Comissões Técnicas de Campo:** O sistema apura os valores financeiros de campo estritamente pelas equações: (a) Total de Diárias Técnicas = $\sum (\text{Quantidade de Diárias Homologadas} \times \text{Valor Vigente da Categoria})$ (RF27, RN25); (b) Comissão Técnica Simplificada = $\text{Percentual Contratual Homologado (\%)} \times \text{Valor da Medição Técnica Aprovada no Contrato}$; sem incidência de encargos tributários ou trabalhistas de folha CLT (INSS, FGTS, IRRF), os quais permanecem sob responsabilidade dos sistemas contábeis externos da DUOC.

## Requisitos Não Funcionais

| Código | Requisito Verificável | URPS+ | Sommerville | Critério Mensurável |
| :---: | :--- | :--- | :--- | :--- |
| **RNF05** | **Processar rotina de fechamento financeiro em até 5,0 segundos** | Performance (Desempenho) | Requisito do Produto — Eficiência/Desempenho | Em 95 de 100 execuções sob base sintética de até 500 apontamentos de campo, o tempo de cálculo, consolidação e renderização do extrato deve ocorrer em no máximo 5,0 segundos. |
| **RNF06** | **Garantir exatidão aritmética centesimal em cálculos monetários** | Reliability (Confiabilidade) | Requisito do Produto — Confiabilidade/Acurácia | Em 100% dos cálculos comparados com o gabarito contábil formal, a discrepância aritmética monetária deve ser de exatamente R$ 0,00, operando com tipos de ponto fixo centesimal sem perdas por arredondamento flutuante. |
| **RNF07** | **Garantir robustez e segurança no processamento e armazenamento de comprovantes** | Security (+) / Reliability | Requisito do Produto — Confiabilidade e Robustez | Em 100% dos uploads de comprovantes e evidências, o subsistema de armazenamento deve validar a integridade estrutural do arquivo e cabeçalhos binários (*magic numbers*) no backend; rejeitar arquivos malformados ou corrompidos; bloquear uploads com tamanho superior a 5,0 MB em tempo inferior a 500 ms retornando código HTTP 400 Bad Request com payload JSON padronizado (`FILE_SIZE_EXCEEDED` ou `INVALID_FILE_FORMAT`); e assegurar persistência segura apenas dos formatos homologados (PDF, PNG e JPEG) com hash SHA-256 e tempo de upload ≤ 3,0 segundos. |
| **RNF08** | **Garantir rastreabilidade probatória e não-repúdio em operações de estorno** | Security (+) / Reliability | Requisito do Produto — Segurança da Informação e Auditoria | Em 100% das operações de estorno de fechamento homologado, o motor transacional de auditoria deve coletar compulsoriamente os metadados de não-repúdio (identificador único do operador, endereço IP de origem, *user-agent*, carimbo UTC em microssegundos, cópia serializada em JSON do estado financeiro anterior e justificativa formal com no mínimo 15 caracteres não-vazios), abortando atômica e sumariamente qualquer requisição com metadados faltantes sob isolamento serializável com taxa de perda de logs de 0,00%. |

## Matriz de Rastreabilidade do Módulo 2

| Requisito | Objetivo Específico | Característica | Fonte de Elicitação / Origem | Regras de Negócio Associadas | Caso de Teste |
| :---: | :---: | :---: | :--- | :--- | :--- |
| **RF05** | OE2 | CAR-03 | Reunião 01, Reunião 05, TR-03 | RN03, RN05, RN25, RN31 | **CT-M2-01:** Solicitar prévia de fechamento e validar consolidação de apontamentos homologados e fórmulas de cálculo de diárias e comissões. |
| **RF06** | OE2 | CAR-03 | Reunião 05, TR-03 | RN08, RN17 | **CT-M2-02:** Homologar fechamento financeiro e validar bloqueio de edições subsequentes e emissão de extrato final. |
| **RF07** | OE2 | CAR-04 | Reunião 02, Reunião 04, TR-02 | RN03, RN06, RN09 | **CT-M2-03:** Submeter solicitação de reembolso com vínculo a contrato ativo e validar anexação fiscal obrigatória. |
| **RF08** | OE2 | CAR-04 | Reunião 02, Reunião 05, TR-02 | RN07, RN27 | **CT-M2-04:** Deliberar solicitação de reembolso com registro de parecer justificatório. |
| **RNF05** | OE2 | CAR-03 | Reunião 05, Diretrizes de Performance | — | **CT-M2-05:** Medir tempo de processamento do fechamento para 500 lançamentos (meta ≤ 5,0 s). |
| **RNF06** | OE2 | CAR-03 | Reunião 01, Reunião 05, Gabarito Contábil | — | **CT-M2-06:** Validar exatidão monetária centesimal com tolerância zero (discrepância R$ 0,00). |
| **RNF07** | OE2 | CAR-04 | Reunião 02, Feedback FB-10 | — | **CT-M2-07:** Testar validação de cabeçalhos binários (magic numbers), persistência segura de arquivos homologados e rejeição automática de payloads acima de 5 MB em tempo inferior a 500 ms com HTTP 400. |
| **RNF08** | OE2 | CAR-03 | Feedback FB-09, Reunião 05 | — | **CT-M2-08:** Verificar coleta de metadados de não-repúdio (IP, UTC, autor, JSON do estado anterior) e abortamento de estorno sem justificativa mínima de 15 caracteres. |
| **RF21** | OE2 | CAR-03 | Feedback FB-09, Reunião 05 | RN08, RN17 | **CT-M2-09:** Estornar fechamento homologado com justificativa formal e validar reabertura da competência, preservação do fechamento original e registro na trilha de auditoria. |
| **RF27** | OE2 | CAR-03 | Reunião 05, TR-03 | RN25, RN31 | **CT-M2-10:** Cadastrar ou atualizar uma categoria de diária técnica com valor e período de vigência e validar a utilização do valor vigente correspondente. |
| **RF28** | OE2 | CAR-04 | Reunião 02, Reunião 05, TR-02 | RN03, RN09, RN26 | **CT-M2-11:** Submeter solicitação de adiantamento operacional informando valor, categoria, contrato e justificativa e validar o registro com status "Pendente de Análise". |
| **RF29** | OE2 | CAR-04 | Reunião 02, Reunião 05, TR-02 | RN27 | **CT-M2-12:** Aprovar e reprovar solicitações de adiantamento operacional, validando atualização de status, registro da deliberação, justificativa em caso de reprovação e notificação ao solicitante. |
