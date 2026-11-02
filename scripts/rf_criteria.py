RF_CRITERIA = {   'RF01': 'O Administrador Financeiro (`ADMIN_FINANCEIRO`) cadastra um novo profissional informando seus dados '
            'cadastrais, bancários (código de compensação COMPE de 3 dígitos, agência e conta corrente) e trabalhistas '
            'validados (RN01, RN03, RN22), e o sistema grava o registro com um identificador único. Se for concedido '
            'acesso ao sistema, é gerado e despachado um link seguro de primeiro acesso e ativação para o e-mail '
            'corporativo cadastrado (RF17), permitindo definir senha para autenticação subsequente (RF13). Se o CPF '
            'informado for inválido segundo o algoritmo oficial da Receita Federal (módulo 11) ou já constar na base '
            'de dados, o cadastro é recusado e nenhum registro novo é criado (RN01).',
    'RF02': 'As alterações nos dados cadastrais ou bancários de um colaborador ativo, submetidas pelo Administrador '
            'Financeiro (`ADMIN_FINANCEIRO`), propagam-se de forma síncrona na mesma transação atômica (em latência '
            'inferior a 500 ms) para as rotinas financeiras de fechamento e apropriação de custos, preservando a '
            'versão anterior da ficha no histórico imutável (RN23).',
    'RF03': 'O Administrador Financeiro (`ADMIN_FINANCEIRO`) registra afastamentos, férias e rescisões contratuais, '
            'atualizando a situação funcional do colaborador no sistema. Em caso de afastamento ou desligamento, o '
            'acesso do colaborador à aplicação web responsiva (Web App / PWA) é revogado compulsoriamente na mesma '
            'transação de persistência no banco (RN04).',
    'RF04': 'Ao término da jornada em obra ou visita técnica, o Técnico de Campo (`TECNICO_CAMPO`) envia pela '
            'aplicação web responsiva (Web App / PWA) as horas trabalhadas e o escopo de serviços executado, '
            'juntamente com os anexos do apontamento (RF22). O registro é gravado com status inicial "Pendente de '
            'Homologação" e disponibilizado para análise do Gestor Operacional de Obras (`GESTOR_OBRAS`) responsável '
            'pelo contrato (RN02).',
    'RF05': 'O Administrador Financeiro (`ADMIN_FINANCEIRO`) gera um extrato preliminar consolidado para a competência '
            'mensal e contratos de obra selecionados, computando estritamente os apontamentos de campo previamente '
            'homologados pelo Gestor Operacional de Obras (RF32, RN05) e aplicando as fórmulas de diárias técnicas e '
            'comissões simplificadas parametrizadas (RN25, RN31) para conferência supervisionada antes do fechamento '
            'definitivo.',
    'RF06': 'O Administrador Financeiro (`ADMIN_FINANCEIRO`), após conferir o extrato preliminar consolidado (RF05), '
            'confirma formalmente a homologação do lote da competência mensal dos contratos selecionados. A '
            'confirmação encerra a competência, bloqueia compulsoriamente os apontamentos e despesas contra qualquer '
            'modificação direta (RN08), grava o carimbo de homologação com UTC e autor na trilha de auditoria (RN17) e '
            'emite o extrato financeiro definitivo para conciliação contábil; eventuais retificações posteriores '
            'exigem compulsoriamente o procedimento de estorno formal (RF21).',
    'RF07': 'O Técnico de Campo (`TECNICO_CAMPO`) ou gestor solicita o reembolso de uma despesa operacional autorizada '
            '(hospedagem, combustível, alimentação de canteiro ou materiais emergenciais vinculados ao contrato ativo) '
            'informando valor monetário, categoria de despesa e contrato de obra, anexando compulsoriamente o '
            'comprovante fiscal digitalizado (RN06, RN09). A solicitação aceita é registrada com status "Pendente de '
            'Análise".',
    'RF08': 'O Administrador Financeiro (`ADMIN_FINANCEIRO`) analisa as solicitações pendentes de reembolso vinculadas '
            'a contratos ativos e delibera aprovando ou reprovando cada item, sendo o parecer formal obrigatório na '
            'reprovação. A decisão é registrada, o status do reembolso é atualizado, o valor aprovado é limitado ao '
            'montante do documento fiscal (RN07) e o solicitante é notificado via sistema (RN27).',
    'RF09': 'O Administrador Financeiro (`ADMIN_FINANCEIRO`) dispara a apropriação de custos da competência mensal, e '
            'os valores de apontamentos e diárias homologados pelo Gestor Operacional de Obras (RF32, RN05), '
            'juntamente com os reembolsos aprovados pelo Administrador Financeiro (RF08) são alocados diretamente aos '
            'respectivos contratos ativos e centros de custo cadastrados (RF33, RF34), sem duplicar nem sobrepor os '
            'relatórios de folha CLT legados (RN09, RN10, RN11).',
    'RF10': 'O Gestor Operacional de Obras (`GESTOR_OBRAS`) ou o Administrador Financeiro (`ADMIN_FINANCEIRO`) '
            'consultam a rastreabilidade integral de qualquer custo apropriado a um contrato, visualizando o '
            'apontamento de origem, o colaborador executor, o carimbo UTC de homologação e a identificação do gestor '
            'responsável pela deliberação (RN12).',
    'RF11': 'No painel analítico de custos, usuários autorizados (`GESTOR_OBRAS`, `ADMIN_FINANCEIRO` e '
            '`ADMIN_SISTEMA`) combinam simultaneamente filtros de período, contrato de obra ativo, colaborador e '
            'centro de custo, recalculando dinamicamente os valores acumulados e gráficos com mascaramento automático '
            'de remunerações individuais para perfis não autorizados (RN14, RNF10).',
    'RF12': 'Na visão executiva de um contrato com metas orçamentárias definidas (RF40), o Gestor Operacional de Obras '
            '(`GESTOR_OBRAS`) e o Administrador Financeiro (`ADMIN_FINANCEIRO`) monitoram o orçamento total previsto, '
            'calculado pela soma dos tetos orçamentários das categorias de despesa, o custo realizado apropriado, o '
            'desvio financeiro e o percentual de execução orçamentária (RN13). O sistema permite consultar esses '
            'indicadores tanto de forma consolidada por contrato quanto individualmente por categoria, destacando '
            'visualmente as situações de extrapolação dos limites estabelecidos.',
    'RF13': 'O usuário autentica-se na plataforma informando e-mail e senha corporativos válidos, recebendo token JWT '
            'temporário com perfil de acesso RBAC associado (RN15). Credenciais inválidas geram mensagem de erro '
            'genérica sem enumeração de contas.',
    'RF14': 'O Administrador do Sistema (`ADMIN_SISTEMA`) atribui a cada usuário um dos 4 papéis canônicos de acesso '
            '(`TECNICO_CAMPO`, `GESTOR_OBRAS`, `ADMIN_FINANCEIRO` ou `ADMIN_SISTEMA`), passando as permissões e '
            'restrições a vigorar na camada de autenticação/autorização em todas as telas e rotas de API da aplicação '
            '(RN16, RNF14).',
    'RF15': 'Usuários com perfil de auditoria (`ADMIN_SISTEMA` ou `ADMIN_FINANCEIRO`) consultam a trilha de auditoria '
            'filtrando eventos por período, operador, tipo de operação, módulo afetado e faixa de valor financeiro; '
            'cada evento exibe autor, ação, estado anterior e posterior serializados e carimbo temporal UTC (RN17, '
            'RN18).',
    'RF16': 'O Administrador do Sistema (`ADMIN_SISTEMA`) exporta relatórios de auditoria em formatos estruturados '
            '(PDF/CSV) contendo o histórico integral e imutável de operações auditadas, para fins de governança '
            'corporativa e instrução probatória defensiva em conformidade com o prazo prescricional trabalhista '
            '(Artigo 11 da CLT).',
    'RF17': 'O colaborador autorizado a acessar o sistema recebe, após seu cadastro (RF01), um link seguro de primeiro '
            'acesso enviado ao e-mail corporativo cadastrado, permitindo a ativação da conta e a definição da senha '
            'inicial. Para recuperação de credenciais esquecidas, o colaborador informa seu e-mail corporativo e '
            'recebe um link de redefinição de senha de uso único, válido por 30 minutos (RN15). Ambos os fluxos devem '
            'utilizar links de uso único e prazo de validade de 30 minutos, sem revelar a existência de contas '
            'cadastradas nas respostas públicas do sistema. Após definir a senha, o colaborador poderá autenticar-se '
            'normalmente (RF13).',
    'RF18': 'Ao acionar o encerramento voluntário de sessão (*logout*), o token de autenticação ativo é '
            'compulsoriamente revogado e invalidado na hora no backend, redirecionando o usuário para a tela de login.',
    'RF19': 'O Técnico de Campo (`TECNICO_CAMPO`) consulta na aplicação web exclusivamente os próprios apontamentos '
            'sob o princípio do menor privilégio (RN16), visualizando data, contrato e status ("Pendente de '
            'Homologação", "Homologado" ou "Rejeitado"), com acesso ao histórico completo de pareceres de deliberação.',
    'RF20': 'O Administrador Financeiro (`ADMIN_FINANCEIRO`) seleciona a competência mensal e os contratos de obras e '
            'importa as presenças homologadas disponibilizadas pelo painel (*dashboard*) do sistema externo *Shifton*. '
            'Os registros importados são vinculados a cada colaborador e contrato na competência selecionada, '
            'viabilizando a apuração financeira de horas sem modificar os dados de origem no *Shifton* (RN10).',
    'RF21': 'Diante de divergência material em lote de competência já homologado, o Administrador Financeiro '
            '(`ADMIN_FINANCEIRO`) estorna o fechamento financeiro informando compulsoriamente justificativa formal com '
            'no mínimo 15 caracteres (RN08, RNF08). A competência é reaberta para retificação, o fechamento original '
            'permanece preservado no histórico imutável e o evento de estorno é gravado na trilha de auditoria com '
            'autor, justificativa e carimbo UTC (RN17). Após as correções, o Administrador Financeiro deve solicitar '
            'uma nova prévia de fechamento (RF05) e realizar uma nova homologação (RF06), sendo vedado considerar a '
            'competência novamente encerrada antes da conclusão desse processo.',
    'RF22': 'Durante o preenchimento de um apontamento na aplicação web responsiva, o Técnico de Campo '
            '(`TECNICO_CAMPO`) anexa fotos ou comprovantes da atividade, e o sistema captura a geolocalização do '
            'dispositivo quando a permissão do navegador estiver concedida. Os arquivos e coordenadas são vinculados '
            'ao registro, a lista de anexos pode ser revisada e qualquer item pode ser removido antes da submissão; a '
            'ausência de sinal de GPS ou recusa de permissão não impede o envio das evidências (RN24).',
    'RF23': 'Após 5 tentativas de login com credenciais inválidas em até 15 minutos, a conta fica bloqueada '
            'preventivamente por 30 minutos, com mensagem informativa padronizada que não revela se a divergência '
            'decorreu do e-mail ou da senha (RN20).',
    'RF24': 'Quando a senha atinge 90 dias de vigência desde a última alteração, o acesso só é liberado mediante '
            'definição de nova credencial, sendo vedada a repetição de qualquer uma das últimas 5 senhas cadastradas '
            '(RN21).',
    'RF25': 'No cadastro ou atualização de colaborador, o Administrador Financeiro (`ADMIN_FINANCEIRO`) seleciona o '
            'enquadramento de contratação entre Diarista, CLT ou Prestador de Serviço, determinando as regras de '
            'apuração de diárias e custos aplicáveis (RN22).',
    'RF26': 'O Administrador Financeiro (`ADMIN_FINANCEIRO`) e o próprio colaborador consultam o histórico da ficha '
            'cadastral, visualizando cada versão anterior dos dados pessoais e bancários com indicação do campo '
            'modificado, autor da alteração e carimbo temporal UTC (RN23).',
    'RF27': 'O Administrador Financeiro (`ADMIN_FINANCEIRO`) cadastra e atualiza as categorias de diária técnica com '
            'valor nominal e período de vigência, passando as rotinas financeiras de fechamento a adotar '
            'automaticamente o valor vigente na competência apurada (RN25, RN31).',
    'RF28': 'O Técnico de Campo (`TECNICO_CAMPO`) solicita adiantamento de recursos para despesa operacional '
            'autorizada de um contrato ativo informando valor, categoria, contrato e justificativa formal de '
            'aplicação. O adiantamento é registrado com status "Pendente de Análise" e fica disponível para análise '
            'financeira (RN03, RN09, RN26).',
    'RF29': 'O Administrador Financeiro (`ADMIN_FINANCEIRO`) analisa os adiantamentos pendentes vinculados a contratos '
            'ativos e aprova ou reprova cada solicitação, com justificativa obrigatória na reprovação. O status da '
            'solicitação é atualizado, a deliberação é registrada e o solicitante é notificado via sistema (RN27).',
    'RF30': 'O Gestor Operacional de Obras (`GESTOR_OBRAS`) ou o Administrador Financeiro (`ADMIN_FINANCEIRO`) '
            'selecionam dois ou mais contratos (ativos ou encerrados) e um período de comparação, e o sistema '
            'renderiza os custos apropriados de cada obra com as variações absolutas (em R$) e percentuais '
            'consolidadas no período (RN28).',
    'RF31': 'Para contratos de obras com teto orçamentário configurado (RF40), o Gestor Operacional de Obras '
            '(`GESTOR_OBRAS`) parametriza os limiares percentuais de execução que disparam alertas preventivos (ex.: '
            '80%, 90% ou 100% do orçamento); ao atingir ou superar o limiar definido, o sistema gera notificação em '
            'destaque no painel e despacha alerta por e-mail aos responsáveis (RN29).',
    'RF32': 'O Gestor Operacional de Obras (`GESTOR_OBRAS`) analisa os apontamentos com status "Pendente de '
            'Homologação" vinculados aos contratos sob sua responsabilidade técnica e delibera aprovando ou rejeitando '
            'cada registro. A aprovação transiciona o status para "Homologado", bloqueia edições pelo autor (RN02) e '
            'disponibiliza as horas/diárias para apuração financeira (RN05, RN10). A rejeição exige compulsoriamente '
            'parecer formal justificado com no mínimo 15 caracteres (RN30), transiciona o status para "Rejeitado" e '
            'notifica o colaborador para ciência e retificação (RF35). Após a correção e o reenvio pelo colaborador, o '
            'apontamento retorna ao status "Pendente de Homologação" para nova análise, preservando o histórico de '
            'rejeições, justificativas e alterações.',
    'RF33': 'O Administrador Financeiro (`ADMIN_FINANCEIRO`) ou o Gestor Operacional de Obras (`GESTOR_OBRAS`) '
            'cadastra contratos de obras vinculados a clientes, informando vigência, valor global, objeto contratual, '
            'retenções e alçadas de supervisão. Os contratos ativos cadastrados podem ser utilizados para vincular '
            'despesas, reembolsos e apropriações de custos, respeitando as regras de negócio RN09 e RN11.',
    'RF34': 'O Gestor Operacional de Obras (`GESTOR_OBRAS`) cadastra centros de custo vinculados a contratos de obras '
            'ativos, permitindo a classificação e a vinculação de despesas operacionais para acompanhamento financeiro '
            '(RN09, RN11).',
    'RF35': 'O Técnico de Campo (`TECNICO_CAMPO`) pode retificar horas, escopo ou anexos de um apontamento submetido '
            'enquanto seu status for "Pendente de Homologação", respeitando a janela de até 5 dias úteis contados da '
            'submissão inicial ou do último reenvio após rejeição (RN02). Caso o apontamento seja rejeitado pelo '
            'gestor (RF32), o técnico pode corrigir o registro e reenviá-lo para nova homologação, preservando seu '
            'identificador e o histórico de alterações e pareceres. Cada reenvio após rejeição altera o status para '
            '"Pendente de Homologação" e reinicia integralmente a janela de 5 dias úteis para retificação (RN02). '
            'Apontamentos homologados permanecem bloqueados contra alterações.',
    'RF36': 'O Administrador Financeiro (`ADMIN_FINANCEIRO`) seleciona períodos, contratos e centros de custo e '
            'exporta os dados consolidados de apontamentos, presenças e apropriações em arquivos estruturados de '
            'planilha (formatos abertos CSV e XLSX) para conciliação contábil externa ou arquivamento.',
    'RF37': 'O Administrador Financeiro (`ADMIN_FINANCEIRO`) ou o Gestor Operacional de Obras (`GESTOR_OBRAS`) '
            'atualiza os dados de um contrato de obra já cadastrado, incluindo vigência, valor global, objeto '
            'contratual, retenções e alçadas de supervisão, preservando sua identificação e os vínculos com os '
            'registros financeiros associados.',
    'RF38': 'O Administrador Financeiro (`ADMIN_FINANCEIRO`) ou o Gestor Operacional de Obras (`GESTOR_OBRAS`) '
            'consulta os contratos de obras cadastrados, visualizando o cliente vinculado, vigência, valor global, '
            'objeto contratual, retenções e alçadas de supervisão, sem alterar os registros.',
    'RF39': 'O Gestor Operacional de Obras (`GESTOR_OBRAS`) atualiza os dados de centros de custo previamente '
            'cadastrados, preservando seus vínculos com os contratos e as despesas operacionais associadas (RN09, '
            'RN11).',
    'RF40': 'O Gestor Operacional de Obras (`GESTOR_OBRAS`) define tetos orçamentários por categoria de despesa para '
            'contratos de obras ativos. O sistema armazena os valores configurados e calcula automaticamente o '
            'orçamento total previsto do contrato pela soma dos tetos de suas categorias, disponibilizando esses '
            'valores para o monitoramento da execução orçamentária (RF12, RN13) e para a configuração de alertas '
            'preventivos (RF31, RN29).'}
