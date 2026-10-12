# Feedback dos Requisitos — Avaliação em Pares

Este documento formaliza o registro, a deliberação crítica, o rastreamento das decisões tomadas e o **comparativo rastreável "Antes vs. Depois"** elaborado pela equipe **Cascata Ágil** a partir do relatório de avaliação por pares da equipe **Guerreiros do Backlog** sobre o lote de Requisitos de Software do sistema **DUOC Finance** ([Capítulo 8](index.md)).

---

## Visão Geral e Critérios Metodológicos

!!! info "Dados da Avaliação por Pares"
    - **Equipe Avaliadora:** Guerreiros do Backlog  
    - **Equipe Avaliada:** Cascata Ágil  
    - **Artefato Avaliado:** [Capítulo 8: Requisitos de Software](index.md) (RFs, RNFs, RNs e Rastreabilidade)  
    - **Entrega / Ciclo:** Unidade 2 — Detalhamento e Backlog (Ciclos 1 e 2 de Revisão por Pares)  
    - **Abrangência:** Transversal sobre os Objetivos Específicos OE1, OE2, OE3 e OE4, com ênfase em completude, qualidade de especificação, harmonização de papéis (RBAC) e conformidade legal (CLT e LGPD)  

### Categorias de Deliberação

Para assegurar governança, transparência e reprodutibilidade, cada feedback catalogado é submetido a análise e recebe uma das quatro deliberações oficiais:

| Classificação | Definição Operacional | Critério de Aceite |
| :--- | :--- | :--- |
| **Aceito** | O apontamento é pertinente e o requisito/artefato é ajustado integralmente conforme a sugestão. | Aplicação direta no documento de requisitos e casos de teste associados. |
| **Parcialmente Aceito** | O apontamento aponta uma melhoria válida, porém a solução adotada foi adaptada às restrições do projeto DUOC. | Justificativa técnica do ajuste adaptado e atualização do documento. |
| **Não Aceito** | O apontamento é recusado e a formulação original é mantida por motivos técnicos, de domínio ou metodológicos. | Apresentação de contra-argumento técnico fundamentado nas regras de negócio da DUOC. |
| **Não Aplicável** | O apontamento não se aplica ao escopo do MVP, confunde responsabilidades ou foge da taxonomia adotada. | Justificativa de descarte por desvio de escopo, nível de abstração ou premissa inválida. |

### Diretrizes de Refatoração Aplicadas

1. **Requisitos Funcionais (RFs):** Garantia estrita do padrão sintático `[Verbo no Infinitivo] + [Objeto Mensurável]`, eliminando formulações no presente do indicativo ou ambiguidades operacionais. Cada RF conta com um critério de aceitação em texto corrido, que descreve de forma verificável o que o usuário consegue fazer e o resultado esperado.
2. **Requisitos Não Funcionais (RNFs):** Garantia de critérios objetivos e mensuráveis (tempo em segundos, percentual de disponibilidade, taxa de conclusão, conformidade com normas), aderentes ao modelo **URPS+** e taxonomia de **Sommerville**.
3. **Consistência e Clareza:** Eliminação de sobreposições entre requisitos, resolução de termos vagos e sincronização estrita com as regras de negócio (RN) e suíte de testes (CT).
4. **Harmonização de Papéis (RBAC):** Mapeamento e unificação dos atores do sistema na matriz canônica de 4 perfis (`TECNICO_CAMPO`, `GESTOR_OBRAS`, `ADMIN_FINANCEIRO`, `ADMIN_SISTEMA`), alinhando a especificação à estrutura de governança real da DUOC.
5. **Rigor Jurídico e Conformidade Regulatória:** Distinção precisa entre prescrição trabalhista (Art. 11 da CLT) e obrigação legal de retenção; fundamentação da exceção ao direito de eliminação da LGPD (Art. 16, I e II); e saneamento conceitual entre dados confidenciais comuns (Art. 6º, VII) e dados pessoais sensíveis (Art. 5º, II da LGPD).

---

## Painel Quantitativo de Deliberações

A tabela a seguir resume a distribuição quantitativa das deliberações sobre os apontamentos catalogados nos dois ciclos avaliativos.

| Status da Deliberação | Quantidade | Percentual (%) |
| :--- | :---: | :---: |
| **Aceito** | 12 | 66,7% |
| **Parcialmente Aceito** | 5 | 27,8% |
| **Não Aceito** | 1 | 5,6% |
| **Não Aplicável** | 0 | 0,0% |
| **Total de Feedbacks Catalogados** | **18** | **100%** |

*Percentuais arredondados à primeira casa decimal.*

---

## Matriz de Registro e Decisões de Feedbacks

### Apontamentos Gerais e Metodológicos

| ID | Item / Seção Alvo | Apontamento da Equipe Avaliadora | Deliberação | Justificativa & Decisão Técnica | Ação / Impacto no Artefato |
| :---: | :--- | :--- | :---: | :--- | :--- |
| **FB-01** | Classificação de RNFs (8.1.2, item 2) | Uso simultâneo das classificações URPS+ e Sommerville nos RNFs pode ser redundante e gerar confusão; sugerido adotar apenas um modelo. | Não Aceito | As duas classificações respondem perguntas diferentes: URPS+ descreve o atributo de qualidade (o quê), Sommerville indica a origem/natureza do requisito (produto interno vs. externo/legislativo). Ex.: o RNF de retenção de log de auditoria é "Suportabilidade" em URPS+ e "Requisito Externo — Legislativo" em Sommerville, por decorrer da CLT; manter só uma classificação perderia essa rastreabilidade. | Nenhuma alteração na estrutura das tabelas de RNFs; adicionada a nota explicativa "Por que duas classificações?" na seção 8.1 do [Capítulo 8: Requisitos de Software](index.md), esclarecendo o propósito de cada classificação. |

---

### Requisitos Funcionais (RFs)

| ID | Requisito Alvo | Apontamento da Equipe Avaliadora | Deliberação | Justificativa & Decisão Técnica | Ação / Impacto no Artefato |
| :---: | :--- | :--- | :---: | :--- | :--- |
| **FB-02** | CAR-09 a CAR-12 (Módulo de Integrações Externas, 2.3) | Características sem RF/RNF associado e ausentes da matriz de rastreabilidade. | Parcialmente Aceito | CAR-11 e CAR-12 possuem notas de escopo adiando o desenho de integração para a Fase 2 (Evolutivo). CAR-10 recebe o RF36 (exportação de planilhas). Para a CAR-09, identificou-se a necessidade do requisito de importação de presenças do *Shifton*. | Criado **RF20 — Importar presenças homologadas** (OE1 / CAR-09, consumo de presenças homologadas via *Shifton* com CT-M1-10) e associado o **RF36 — Exportar dados consolidados em planilha** à CAR-10. Adicionadas notas de escopo em CAR-10, CAR-11 e CAR-12 no Capítulo 2. |
| **FB-03** | RF04 / CAR-02 | CAR-02 possui apenas um RF associado; nomes e funções de RF04 e CAR-02 são semelhantes, sugerindo confusão de nível de abstração entre eles. | Parcialmente Aceito | A crítica de nível de abstração não procede: RF04 já é mais concreto que a CAR-02 (define campos, fluxo e status), não é uma repetição da CAR em outra camada. Porém o ponto prático é válido — CAR-02 promete "erradicar a perda de anotações" e centralizar o registro de campo, mas só existia RF para submissão (RF04); não havia RF para o colaborador consultar ou acompanhar o status de um apontamento já enviado. | Criado **RF19 — Consultar apontamentos registrados** (OE1 / CAR-02): permite ao colaborador visualizar status (pendente, homologado, rejeitado) e histórico dos próprios apontamentos de campo, sob a regra RN16. Caso de teste CT-M1-09. |
| **FB-04** | RF13 / CAR-07 (ausência de RF) | Não há requisito funcional que permita ao usuário recuperar suas credenciais em caso de esquecimento de senha. | Aceito | Gap real: RF13 cobre apenas o login com credencial já conhecida; o cenário de esquecimento de senha é inevitável numa base de usuários de campo e não tinha nenhum requisito associado, gerando atrito e chamados manuais de TI. | Criado **RF17 — Recuperar credenciais de acesso** (OE4 / CAR-07) com envio de link temporário de uso único com validade de 30 min (RN17). Caso de teste CT-M4-09. |
| **FB-05** | RF13 / CAR-07 (ausência de RF) | Não há requisito funcional que garanta o logout manual do usuário; existe apenas o encerramento automático por expiração do token. | Aceito | Gap real: RF13 cobre login, mas nenhum requisito cobria o encerramento voluntário da sessão — falha grave em dispositivos móveis compartilhados no canteiro de obras. | Criado **RF18 — Encerrar sessão manualmente** (OE4 / CAR-07) com invalidação atômica de tokens de autenticação. Caso de teste CT-M4-10. |
| **FB-11** | RF04 | RF04 é excessivamente amplo, reunindo várias funcionalidades no mesmo critério de aceitação ("preencher o formulário informando horas trabalhadas, escopo executado, anexar comprovantes/fotos e submeter"); sugerido quebrar em fluxos. | Parcialmente Aceito | Procede quanto à necessidade de critérios mais rigorosos. A anexação de evidências fotográficas e captura de coordenadas em campo foi decomposta e isolada como requisito específico (**RF22** na CAR-02), preservando o RF04 como transação de submissão do apontamento com status "Pendente de Homologação". | Critério do RF04 refatorado com status "Pendente de Homologação" e caso de teste CT-M1-04 atualizado. Criado **RF22 — Anexar evidências e geolocalização ao apontamento** na CAR-02 (CT-M1-11). |

---

### Requisitos Não Funcionais (RNFs)

| ID | Requisito Alvo | Apontamento da Equipe Avaliadora | Deliberação | Justificativa & Decisão Técnica | Ação / Impacto no Artefato |
| :---: | :--- | :--- | :---: | :--- | :--- |
| **FB-06** | RNF04 | Condicionar a métrica de usabilidade a "usuários com treinamento de 15 minutos" dificulta o processo de teste no contexto da disciplina; sugerido medir por taxa de conclusão em primeiro uso ou número de telas/cliques. | Aceito | Procede. Testar a métrica original exigiria treinar cada participante por 15 minutos antes de cada rodada de teste de usabilidade, o que é inviável no tempo da disciplina e introduz variabilidade entre avaliadores. Medir em primeiro uso, sem treinamento, é mais rigoroso e auditável. | Critério do RNF04 reescrito: métrica de treinamento prévio substituída por taxa de conclusão em primeiro uso (≥ 90%) e número máximo de 5 passos/telas. Caso de teste CT-M1-08 atualizado. |
| **FB-07** | RNF01 | O limite de 100 apontamentos/fotos no armazenamento local pode ser insuficiente para canteiros sem conectividade; sugerido averiguar a expansão da capacidade e implementar alerta visual quando o armazenamento estiver perto do limite. | Parcialmente Aceito | Procede em parte. O alerta visual é indispensável para evitar que o encarregado perca registros sem perceber. A expansão indiscriminada da capacidade local, contudo, é desnecessária e arriscada: 100 apontamentos cobrem mais de três meses de trabalho contínuo sem rede para uma equipe de campo, acima de qualquer cenário do DF. | Critério do RNF01 reescrito: 100 registros passa a ser o mínimo garantido sem perda de dados (e não um teto rígido), com alerta visual aos 80% da capacidade e sincronização automática em até 30s após reconexão. Caso de teste CT-M1-05 atualizado. |
| **FB-08** | RNF (novo) / OE4 | Não há requisito não funcional sobre a realização de backups para garantir tolerância a falhas e capacidade de recuperação do sistema; sugerido criar RNF para backups periódicos. | Aceito | Gap crítico. Os RNFs de confiabilidade anteriores (RNF15, atomicidade dos logs; RNF16, retenção contra expurgo) resguardavam a consistência interna, mas não mitigavam a perda de dados por falha física de infraestrutura ou desastres operacionais. O termo vago "periódicos" foi substituído por parâmetros objetivos e mensuráveis (backup diário às 02h00 UTC, teste de restauração em até 4h, RPO de 24h e retenção de 30 dias). | Criado **RNF17 — Realizar backup automático diário com restauração verificada** (OE4 / CAR-08). Caso de teste CT-M4-11. |

---

### Regras de Negócio e Rastreabilidade

| ID | Item Alvo | Apontamento da Equipe Avaliadora | Deliberação | Justificativa & Decisão Técnica | Ação / Impacto no Artefato |
| :---: | :--- | :--- | :---: | :--- | :--- |
| **FB-09** | RNF08 / CAR-03 (ausência de RF) | O RNF08 exige justificativa e auditoria em estornos de fechamento homologado, mas o RF06 trata apenas da homologação e não descreve explicitamente a operação de estorno; sugerido relacionar o RNF08 à CAR-03 e criar/especificar o RF correspondente. | Aceito | Procede. A RN08 já definia o estorno como o caminho para retificar lotes homologados, mas faltava o requisito funcional formalizando a ação do gestor. Sem ele, a RN08 e o RNF08 careciam de uma operação observável associada. | Criado **RF21 — Estornar fechamento financeiro** (OE2 / CAR-03), amarrado à regra RN08 e ao RNF08. Caso de teste CT-M2-09. Adicionada menção ao estorno na descrição da CAR-03 (Capítulo 2). |
| **FB-10** | RN06 e RN10 (redação) | As regras de negócio RN06 e RN10 estão ditando arquitetura e código em vez de especificar o resultado esperado; sugerido reescrever focando no comportamento e na restrição de negócio. | Parcialmente Aceito | Procede quanto à RN06: listava formatos de arquivos (.pdf, .png, .jpeg), que é detalhe técnico próprio do RNF07. Já a RN10 não descrevia tecnologia, apenas a precedência de homologação da coordenação. Identificou-se, contudo, que a RN18 citava comandos SQL (`UPDATE` e `DELETE`), sendo também corrigida para refletir a restrição de negócio de imutabilidade transacional. | RN06 reescrita focada na comprovação fiscal obrigatória (delegando validações técnicas de arquivo ao RNF07). RN18 reescrita em termos de imutabilidade e operação somente-anexação (*append-only*). RN10 mantida sem alteração. |

---

### Qualidade dos Requisitos, Papéis e Conformidade Legal (Ciclo 2 de Refinamento)

| ID | Item / Seção Alvo | Apontamento da Equipe Avaliadora | Deliberação | Justificativa & Decisão Técnica | Ação / Impacto no Artefato |
| :---: | :--- | :--- | :---: | :--- | :--- |
| **FB-12** | Termos Operacionais / Módulos 1 a 4 | Vários termos não têm definição operacional gerando ambiguidade: "dados válidos", "tempo real", "imediatamente", "módulos dependentes", "despesas autorizadas" (por quem?), "contratos sob sua alçada", "gestor" (qual?), "anexo legível" (como verifica?), "mensagem amigável", "carga nominal", "alertas de extrapolação" (qual limiar?). | Aceito | Ambiguidade semântica compromete a testabilidade. Cada termo vago foi substituído por métrica determinística ou processo observável: "dados válidos" -> validação de CPF (módulo 11) e dados bancários (código COMPE); "tempo real" / "imediatamente" -> propagação síncrona < 500 ms; "módulos dependentes" -> módulos de Fechamento de Diárias e Apropriação de Custos; "despesas autorizadas" -> aprovadas pelo Gestor de Obras; "contratos sob alçada" -> contratos vinculados ao gestor no RBAC; "anexo legível" -> inspeção humana na homologação precedida de validação de integridade por magic numbers; "mensagem amigável" -> mensagem com identificação do campo e orientação de correção; "carga nominal" -> 50 usuários concorrentes a 10 req/s com latência p95 ≤ 800 ms; "alerta de extrapolação" -> limiar percentual configurável (padrão 100% com pré-alerta aos 90%). | Atualização sistemática de critérios de aceitação e métricas no Capítulo 8 (OE1 a OE4, Catálogo 8.5) e Priorização. |
| **FB-13** | RF06 / OE2 | O RF06 mistura ajuste e homologação no mesmo requisito funcional, violando a atomicidade funcional. | Aceito | Ajustes prévios ao fechamento e a homologação formal são fases distintas do ciclo financeiro. O RF06 foi refatorado para tratar estritamente do ato de homologação e trancamento irrevogável dos lotes conferidos, delegando ajustes ao fluxo de conciliação da prévia e do estorno (RF21). | RF06 purificado no Capítulo 8, cards executivos e catálogo geral; critérios restritos ao trancamento e bloqueio contra edição. |
| **FB-14** | Atores e Papéis / Seção 8.1.1 e RFs | Inconsistência nos atores: os RFs usavam ~8 papéis esparsos (RH, gestor de RH, analista financeiro, gestor financeiro, coordenador, auditor), enquanto o RF14 definia 4 perfis, o Cap. 2 trazia 3 e a realidade da DUOC concentra operações em uma única Auxiliar-Administrativa (Maria Beatryz). | Aceito | A dispersão de atores criava divergência entre a especificação e a realidade operacional da empresa parceira. Instituiu-se a Matriz Canônica de Papéis RBAC (Seção 8.1.1) com exatamente 4 perfis: `TECNICO_CAMPO`, `GESTOR_OBRAS`, `ADMIN_FINANCEIRO` (unificando DP/RH e finanças sob a figura da auxiliar administrativa) e `ADMIN_SISTEMA`. Todos os 36 RFs foram alinhados a essa matriz. | Criada a Seção 8.1.1 com a Matriz Canônica RBAC; revisão de atores em todos os 36 RFs, no Capítulo 2 e no Catálogo Funcional. |
| **FB-15** | RNF07 e RNF08 / OE2 | RNF07 (validação de comprovantes) e RNF08 (estorno auditado) foram classificados como RNFs, mas suas redações originais expressavam validações funcionais ou regras de negócio, e não atributos de qualidade de software. | Aceito | Validação de presença de anexo e obrigatoriedade de justificativa são regras de negócio (RN06 e RN08). RNF07 e RNF08 foram refatorados como legítimos atributos de qualidade: RNF07 passou a focar na Robustez e Segurança no processamento de anexos (sanitização, verificação de magic numbers MIME, isolamento em bucket de armazenamento); RNF08 passou a focar no Não-Repúdio e Auditabilidade das reversões financeiras (garantia criptográfica/transacional de imutabilidade e rastreamento de autoria). | RNF07 e RNF08 reescritos no Módulo 2, Seção 8.4, 8.5 e Priorização, com ganhos diretos de qualidade e segurança. |
| **FB-16** | RN vs. RNF / Seção 8.1 e 8.5 | Sobreposição e confusão conceitual entre regras de negócio e atributos de qualidade: RNF15 ≈ RN17, RNF16 ≈ RN19, e RNF10 ≈ RNF14 ≈ RN16. | Aceito | Distinção formal estabelecida entre invariantes de negócio (políticas corporativas) e requisitos de arquitetura (atributos de software). RN17/RN19 regem direitos e fluxos de negócio, enquanto RNF15/RNF16 definem atomicidade ACID transacional e imutabilidade de armazenamento. RN16 define a política de privacidade (usuário só vê seus dados), RNF10 define o mecanismo técnico de sanitização e mascaramento de relatórios (< 10 ms), e RNF14 define o tempo de bloqueio de API por guards (< 15 ms). | Refatoração das redações e inclusão de nota de desambiguação estrutural na Seção 8.1 do Capítulo 8. |
| **FB-17** | RNF16 / OE4 (Classificação) | Classificar a retenção de logs por 5 anos (RNF16) como "Supportability" no modelo URPS+ está incorreto, pois não se trata de manutenibilidade ou suporte técnico da aplicação. | Aceito | A retenção probatória de integridade de logs com imutabilidade física e lógica é um atributo de Confiabilidade e Governança Legal. No URPS+, foi reclassificado para `Reliability / Legal (+)` (o "+" abrange conformidade legal/regulamentar). Em Sommerville, ratificado como `Requisito Externo — Requisito Legal / Regulatório`. | Classificação atualizada nas tabelas do Módulo 4, Seção 8.4, Seção 8.5 e Priorização. |
| **FB-18** | Base Legal / Governança (CLT e LGPD) | Imprecisões na fundamentação jurídica: 1) O Art. 11 da CLT trata de prazo prescricional de ações trabalhistas, não de obrigação legal de guardar logs; deve figurar como decisão de política defensiva; 2) A retenção imutável de 5 anos colide com o direito de eliminação da LGPD (Art. 18, VI) se não fundamentada; 3) CPF e dados bancários foram chamados de "dados sensíveis", quando são dados pessoais comuns sob sigilo (Art. 5º, II da LGPD). | Aceito | Adequação terminológica e jurídica rigorosa: 1) A retenção por 5 anos é fundamentada como política defensiva corporativa baseada no prazo prescricional do Art. 11 da CLT; 2) A retenção contra o pedido de eliminação da LGPD é fundamentada expressamente no Art. 16, I e II da LGPD (cumprimento de obrigação legal e exercício regular de direitos em processo judicial/administrativo); 3) Saneamento do conceito de dados: CPF, agência, conta e salários são tratados como "dados pessoais confidenciais sujeitos a sigilo e segurança" (Art. 6º, VII) e não como "dados pessoais sensíveis" (Art. 5º, II da LGPD). | Seção 8.2.4.4 criada no Capítulo 8 detalhando a governança legal; saneamento terminológico em todos os RFs/RNFs dos Capítulos 2 e 8. |

---

<a id="matriz-antes-depois"></a>
## Matriz Rastreável de Transformação dos Requisitos: Comparativo "Antes vs. Depois"

Para atender de forma inequívoca às exigências de **rastreabilidade bidirecional e auditoria de mudanças** da Engenharia de Requisitos, a tabela e os detalhamentos a seguir confrontam o **Estado Anterior (Antes do Feedback / Versão Preliminar)** com o **Estado Refatorado (Depois do Ajuste / Especificação Vigente)** de cada elemento alterado no [Capítulo 8: Requisitos de Software](index.md):

### Quadro Consolidado "Antes vs. Depois"

| ID Feedback | Código / Item | Estado Anterior (Antes do Feedback / Versão Preliminar) | Estado Refatorado (Depois do Ajuste na Especificação Vigente) | Ganho de Engenharia & Testabilidade | Caso de Teste Associado |
| :---: | :---: | :--- | :--- | :--- | :---: |
| **FB-01** | **Classificação RNFs (8.1)** | Tabela de RNFs com colunas URPS+ e Sommerville simultâneas, sem explicação metodológica sobre o uso concomitante dos dois modelos. | Inclusão de nota metodológica formal (*Por que duas classificações nos RNFs?*), esclarecendo que URPS+ afere o atributo técnico (*o quê*) e Sommerville a origem da restrição (*interno vs. regulatório/CLT/LGPD*). | Elimina ambiguidade metodológica e justifica a rastreabilidade legal. | Transversal aos RNFs |
| **FB-02** | **CAR-09 / CAR-10 / RF20 / RF36** | CAR-09 (ponto eletrônico externo) presente no escopo, mas **sem nenhum Requisito Funcional associado** e ausente da Matriz de Rastreabilidade. | Criação do **RF20** (consumo de presenças homologadas do *Shifton*) para a CAR-09 e do **RF36** (exportação de dados consolidados em planilha) para a CAR-10, ambos com critérios de aceitação verificáveis. | Elimina lacuna funcional em integrações externas e viabiliza interoperabilidade de dados. | `CT-M1-10`<br>`CT-M1-17` |
| **FB-03** | **CAR-02 / RF19** | CAR-02 possuía apenas a submissão de apontamentos (RF04); o técnico em obra **não possuía meio de consultar** seus registros ou verificar se haviam sido homologados ou rejeitados. | Criação do **RF19 — Consultar apontamentos registrados**: exibição do histórico de apontamentos próprios com data, contrato e status, assegurada a segregação de visibilidade pela RN16. | Garante transparência ao colaborador de campo e fecha o ciclo de vida do RVT. | `CT-M1-09` |
| **FB-04** | **CAR-07 / RF17** | Módulo de autenticação continha apenas login (RF13); **ausência de mecanismo de autoatendimento** para esquecimento de senha, gerando dependência de reset manual. | Criação do **RF17 — Recuperar credenciais de acesso**: fluxo seguro com token de uso único, validade estrita de 30 minutos (RN17) e proteção contra enumeração de e-mails cadastrados. | Autonomia aos usuários de campo e redução drástica de chamados de suporte técnico. | `CT-M4-09` |
| **FB-05** | **CAR-07 / RF18** | Sistema contava apenas com expiração passiva de sessão por tempo (RNF13); **ausência de encerramento manual deliberado** (*logout*). | Criação do **RF18 — Encerrar sessão manualmente**: ação observável de logout com invalidação compulsória e atômica de tokens de autenticação e redirecionamento para o login. | Mitiga risco de acesso indevido em tablets ou celulares compartilhados no canteiro. | `CT-M4-10` |
| **FB-06** | **RNF04** | Critério condicionado a *"usuários com treinamento prévio de 15 minutos"* (métrica subjetiva e de difícil reprodução em testes). | Critério reescrito: preenchimento completo do RVT em **primeiro uso**, sem suporte ou treinamento prévio, em **no máximo 5 passos/telas** com **taxa de sucesso ≥ 90%**. | Transforma o RNF em parâmetro objetivamente mensurável e auditável em testes de usabilidade. | `CT-M1-08` |
| **FB-07** | **RNF01** | Armazenamento local formulado como teto rígido (*"até 100 apontamentos"*), sem garantia de mínimo nem alerta de proximidade do esgotamento. | Critério reescrito: armazenamento garantido de **no mínimo 100 registros sem perda de dados**, **alerta visual obrigatório ao atingir 80% da capacidade** e sincronização automática em **≤ 30 s**. | Previne perda silenciosa de dados em campo e estabelece limites técnicos claros. | `CT-M1-05` |
| **FB-08** | **CAR-08 / RNF17** | **Inexistência de política de backup**; garantias cobriam apenas logs atômicos (RNF15) e retenção (RNF16), vulnerabilizando o banco contra desastres físicos. | Criação do **RNF17 — Backup diário automático com integridade verificada e teste de restauração em até 4 horas, RPO de 24 horas e retenção por 30 dias**. | Assegura continuidade de negócio, conformidade regulatória e recuperação de desastres. | `CT-M4-11` |
| **FB-09** | **CAR-03 / RF21** | O RNF08 exigia justificativa e auditoria em estornos, mas **nenhum RF descrevia a ação de estorno** do fechamento homologado pelo gestor. | Criação do **RF21 — Estornar fechamento financeiro**: ação explícita com justificativa textual mínima de 15 caracteres (RN08), trilha de auditoria e preservação do extrato histórico. | Fornece a funcionalidade observável necessária para exercitar a RN08 e o RNF08. | `CT-M2-09` |
| **FB-10** | **RN06 / RN18** | **RN06:** ditava extensões de arquivo (`.pdf`, `.png`, `.jpeg`) e limite de 5MB.<br>**RN18:** ditava proibições de comandos SQL diretos (`UPDATE` e `DELETE`). | **RN06:** reformulada como política de negócio (comprovação fiscal obrigatória para repasse), delegando extensões e tamanho ao RNF07.<br>**RN18:** reformulada como princípio de imutabilidade transacional (*append-only*), vinculada aos RNF15 e RNF16. | Desacopla regras de negócio de detalhes de implementação e sintaxe de banco de dados. | `CT-M2-04`<br>`CT-M4-08` |
| **FB-11** | **CAR-02 / RF04 / RF22** | RF04 reunia texto corrido sem estrutura formal de aceitação, acumulando horas, escopo e fotos. | **RF04:** preservado como submissão de apontamento atômica com status "Pendente de Homologação" (CT-M1-04). A anexação multimídia e captura de geolocalização foram decompostas no **RF22 — Anexar evidências e geolocalização ao apontamento** (CAR-02 / CT-M1-11). | Garante critérios de aceitação atômicos e segregação de anexos e coordenadas de campo. | `CT-M1-04`<br>`CT-M1-11` |
| **FB-12** | **Termos Operacionais (Módulos 1-4)** | Termos vagos como "tempo real", "dados válidos", "carga nominal", "alertas de extrapolação" sem limiar. | Substituição por métricas determinísticas: validação de CPF (módulo 11) e COMPE; propagação síncrona < 500 ms; carga nominal de 50 usuários a 10 req/s (p95 ≤ 800 ms); limiar percentual de orçamento configurável (padrão 100% com pré-alerta aos 90%). | Elimina ambiguidade e torna todos os requisitos rigorosamente testáveis e auditáveis. | Transversal a todos os RFs/RNFs |
| **FB-13** | **RF06** | Acumulava ajustes manuais e conferência com o ato de homologação e fechamento. | Refatorado estritamente para homologação, encerramento de lote e bloqueio automático contra edição por perfis operacionais. | Garante atomicidade funcional e segregação de responsabilidades no ciclo financeiro. | `CT-M2-02` |
| **FB-14** | **Atores e Papéis (Seção 8.1.1 / RFs)** | ~8 atores distintos dispersos nos RFs (RH, analista financeiro, gestor financeiro, coordenador etc.), incompatíveis com os 4 perfis do RF14 e a realidade de equipe enxuta da DUOC. | Instituição da Matriz Canônica RBAC com 4 perfis (`TECNICO_CAMPO`, `GESTOR_OBRAS`, `ADMIN_FINANCEIRO`, `ADMIN_SISTEMA`) com harmonização integral nos 36 RFs e reflexo da atuação de Maria Beatryz. | Alinha especificação técnica à governança de acesso e estrutura sociotécnica real da empresa parceira. | Transversal aos RFs / `CT-M4-02` |
| **FB-15** | **RNF07 / RNF08** | Redigidos como validações funcionais (presença de comprovante fiscal e obrigatoriedade de justificativa de estorno). | Redefinidos como atributos de qualidade: RNF07 como Robustez e Segurança no processamento de anexos (magic numbers e isolamento); RNF08 como Não-Repúdio e Auditabilidade em reversões financeiras. | Eleva a maturidade de engenharia de software ao separar regra de negócio de atributo arquitetural. | `CT-M2-07`<br>`CT-M2-08` |
| **FB-16** | **RN vs. RNF (RN17/19/16 vs RNF15/16/10/14)** | Sobreposição conceitual entre regras de negócio e requisitos não funcionais. | Desambiguação formal: RNs expressam políticas de domínio (ex: direitos do colaborador e obrigatoriedade de log); RNFs especificam propriedades de arquitetura (ex: latência de guard < 15 ms, ACID < 50 ms, imutabilidade física). | Clareza taxonômica e eliminação de redundâncias conceituais entre domínio e software. | `CT-M4-07`<br>`CT-M4-08`<br>`CT-M3-05` |
| **FB-17** | **RNF16 (Classificação)** | RNF16 classificado como "Supportability" em URPS+, sugerindo incorretamente esforço de manutenção. | Reclassificado como `Reliability / Legal (+)` em URPS+ e `Requisito Externo — Requisito Legal / Regulatório` em Sommerville. | Correção metodológica estrita alinhada aos modelos internacionais de Engenharia de Software. | `CT-M4-08` |
| **FB-18** | **Fundamentação Legal (CLT e LGPD)** | Art. 11 da CLT citado como imposição de retenção; retenção de 5 anos desamparada perante Art. 18, VI da LGPD; e dados bancários/CPF classificados como "dados sensíveis". | Art. 11 CLT contextualizado como prescrição quinquenal que orienta política defensiva; retenção amparada nas exceções do Art. 16, I e II da LGPD; saneamento terminológico para "dados pessoais confidenciais sob sigilo" (Art. 6º, VII da LGPD). | Segurança jurídica inatacável e conformidade estrita com o arcabouço normativo trabalhista e de proteção de dados. | Transversal / Seção 8.2.4.4 |

---

### Detalhamento de Transformações nos Requisitos Funcionais (RFs)

#### Inclusão do Requisito de Gestão de Presenças na CAR-09 (`FB-02`)

=== "Antes do Ajuste (Versão Preliminar)"
    A CAR-09 figurava na visão de produto, mas não possuía nenhum requisito associado na especificação de requisitos:

    | Módulo | Objetivo Específico | CARs Cobertas | Requisitos Funcionais |
    | :---: | :--- | :---: | :--- |
    | Módulo 1 | OE1 — Padronização de Dados | CAR-01, CAR-02, CAR-09 | RF01, RF02, RF03, RF04 |

    !!! warning "Lacuna identificada"
        Sem RF para CAR-09 e sem critério de integração com ponto eletrônico.

=== "Depois do Ajuste (Especificação Refinada Vigente)"
    | Código | Requisito (Ação do Usuário) | CAR | Critério de Aceitação |
    | :---: | :--- | :---: | :--- |
    | **RF20** | **Importar presenças homologadas** | CAR-09 | O analista financeiro escolhe a competência mensal e os contratos e importa as presenças homologadas registradas no sistema *Shifton*. Os registros ficam disponíveis por colaborador e contrato na competência escolhida, para conferência, e os dados de origem no *Shifton* não são alterados. |

---

#### Inclusão da Consulta de Apontamentos de Campo na CAR-02 (`FB-03`)

=== "Antes do Ajuste (Versão Preliminar)"
    O Módulo 1 possuía apenas o envio do formulário, sem qualquer mecanismo de retorno:

    | Código | Requisito Funcional | CAR | Critério |
    | :---: | :--- | :---: | :--- |
    | RF04 | Submeter apontamento de campo | CAR-02 | Usuário preenche e envia o formulário de campo. |

    !!! warning "Lacuna identificada"
        O colaborador não conseguia consultar o status (pendente, homologado ou rejeitado) nem o histórico.

=== "Depois do Ajuste (Especificação Refinada Vigente)"
    | Código | Requisito (Ação do Usuário) | CAR | Critério de Aceitação |
    | :---: | :--- | :---: | :--- |
    | **RF19** | **Consultar apontamentos registrados** | CAR-02 | O colaborador de campo vê apenas os próprios apontamentos (RN16), cada um com data, contrato e status ("Pendente de Homologação", "Homologado" ou "Rejeitado"), e consegue abrir o histórico de qualquer um deles. |

---

#### Inclusão de Recuperação de Senha e Logout Manual na CAR-07 (`FB-04` e `FB-05`)

=== "Antes do Ajuste (Versão Preliminar)"
    CAR-07 possuía apenas o login com senha e o gerenciamento de perfis:

    | Código | Requisito Funcional | CAR |
    | :---: | :--- | :---: |
    | RF13 | Efetuar login no sistema | CAR-07 |
    | RF14 | Gerenciar perfis de acesso | CAR-07 |

    !!! warning "Lacunas identificadas"
        - Usuário bloqueado por esquecimento dependia de reset manual de banco pela TI.
        - Dispositivo compartilhado em canteiro ficava conectado até a expiração de 8 horas.

=== "Depois do Ajuste (Especificação Refinada Vigente)"
    | Código | Requisito (Ação do Usuário) | CAR | Critério de Aceitação |
    | :---: | :--- | :---: | :--- |
    | **RF17** | **Recuperar credenciais de acesso** | CAR-07 | O colaborador que esqueceu a senha informa o e-mail corporativo cadastrado e recebe nele um link de redefinição de uso único, válido por 30 minutos. A resposta exibida não revela se o e-mail existe ou não na base, evitando a enumeração de usuários. |
    | **RF18** | **Encerrar sessão manualmente** | CAR-07 | Ao encerrar a sessão manualmente (*logout*), o token de acesso atual é invalidado na hora e o usuário volta para a tela de login. |

---

#### Inclusão do Estorno Financeiro na CAR-03 (`FB-09`)

=== "Antes do Ajuste (Versão Preliminar)"
    O fechamento financeiro cobria apenas a prévia e a homologação:

    | Código | Requisito Funcional | CAR |
    | :---: | :--- | :---: |
    | RF05 | Solicitar prévia de fechamento | CAR-03 |
    | RF06 | Homologar fechamento financeiro | CAR-03 |

    !!! warning "Lacuna identificada"
        O RNF08 previa regras para estornos, mas não havia RF que permitisse disparar o estorno.

=== "Depois do Ajuste (Especificação Refinada Vigente)"
    | Código | Requisito (Ação do Usuário) | CAR | Critério de Aceitação |
    | :---: | :--- | :---: | :--- |
    | **RF21** | **Estornar fechamento financeiro** | CAR-03 | O gestor financeiro que identifica erro material em um lote já homologado pode estornar o fechamento desde que informe uma justificativa textual (RN08). Os lançamentos voltam para o estado "Pendente de Homologação", a justificativa e o autor entram na trilha de auditoria e o extrato revertido fica arquivado como histórico contábil imutável. |

---

### Detalhamento de Transformações nos Requisitos Não Funcionais (RNFs)

#### Reformulação do Critério Mensurável do RNF04 (`FB-06`)

=== "Antes do Ajuste (Versão Preliminar)"
    | Código | Requisito Verificável | Critério Mensurável Anterior |
    | :---: | :--- | :--- |
    | RNF04 | Garantir usabilidade no RVT de campo | O aplicativo móvel deve ser fácil de usar por qualquer técnico após treinamento inicial de 15 minutos ministrado pela equipe. |

    !!! warning "Problema identificado"
        Critério difícil de testar com precisão, pois dependia de um tempo de treinamento sujeito à variabilidade do instrutor.

=== "Depois do Ajuste (Especificação Refinada Vigente)"
    | Código | Requisito Verificável | URPS+ | Sommerville | Critério Mensurável Refatorado |
    | :---: | :--- | :--- | :--- | :--- |
    | **RNF04** | **Garantir usabilidade e agilidade no preenchimento de apontamentos de campo** | Usability (Usabilidade) | Requisito do Produto — Usabilidade | O preenchimento completo de um apontamento diário de campo deve ser concluído por usuários em primeiro uso, sem suporte externo ou treinamento prévio, em no máximo 5 passos/telas, com taxa de conclusão bem-sucedida ≥ 90% em teste de usabilidade. |

---

#### Reformulação de Capacidade e Alerta do RNF01 (`FB-07`)

=== "Antes do Ajuste (Versão Preliminar)"
    | Código | Requisito Verificável | Critério Mensurável Anterior |
    | :---: | :--- | :--- |
    | RNF01 | Operação offline no canteiro | O aplicativo móvel deve armazenar localmente até 100 apontamentos e fotos sem sinal de rede. |

    !!! warning "Problema identificado"
        "Até 100" estabelecia um teto, sem garantir um mínimo nem avisar o usuário antes de esgotar o armazenamento.

=== "Depois do Ajuste (Especificação Refinada Vigente)"
    | Código | Requisito Verificável | URPS+ | Sommerville | Critério Mensurável Refatorado |
    | :---: | :--- | :--- | :--- | :--- |
    | **RNF01** | **Operar em modo *offline* para coleta de dados em canteiros sem conectividade** | Reliability (Confiabilidade) | Requisito do Produto — Confiabilidade | A aplicação web responsiva (Web App / PWA) em dispositivo móvel deve armazenar localmente, sem perda de dados, no mínimo 100 apontamentos com fotos compactadas sem sinal de rede; exibir alerta visual quando o armazenamento local atingir 80% da capacidade; e sincronizar automaticamente em até 30 segundos após restabelecida a conexão. |

---

#### Criação do Requisito de Backup Automatizado — RNF17 (`FB-08`)

=== "Antes do Ajuste (Versão Preliminar)"
    A especificação não possuía nenhum requisito de backup ou tolerância a falhas físicas:

    | Código | Requisito | URPS+ | Critério anterior |
    | :---: | :--- | :--- | :--- |
    | RNF15 | Atomicidade na gravação de logs | Reliability | Gravação síncrona na mesma transação. |
    | RNF16 | Retenção de logs por 5 anos | Supportability | Não deletar registros com menos de 1825 dias. |

    !!! warning "Lacuna identificada"
        Não havia política de rotinas de backup, janela de RPO ou tempo de restauração (RTO).

=== "Depois do Ajuste (Especificação Refinada Vigente)"
    | Código | Requisito Verificável | URPS+ | Sommerville | Critério Mensurável Refatorado |
    | :---: | :--- | :--- | :--- | :--- |
    | **RNF17** | **Garantir tolerância a falhas e recuperação de dados via rotinas automatizadas de backup** | Reliability (Confiabilidade) | Requisito do Produto — Confiabilidade | O sistema deve realizar backup diário automático completo de todas as bases de dados e arquivos anexados às 02h00 UTC, com teste periódico automatizado de integridade e capacidade comprovada de restauração em ambiente segregado em até 4 horas, tolerância máxima de perda de dados (RPO) de 24 horas e retenção histórica por 30 dias. |

---

### Detalhamento das Transformações nas Regras de Negócio (`FB-10`)

=== "Antes do Ajuste (Versão Preliminar)"
    !!! warning "Estado anterior"
        As regras misturavam restrição de negócio com implementação tecnológica e código SQL:

        **RN06 — Formatos de Arquivo:** O sistema deve aceitar apenas uploads em formatos `.pdf`, `.png` e `.jpeg`, com tamanho máximo de até 5 MB por comprovante.

        **RN18 — Proibição de Comandos SQL:** O banco de dados deve rejeitar compulsoriamente comandos SQL dos tipos `UPDATE` e `DELETE` executados contra a tabela de trilha de auditoria.

=== "Depois do Ajuste (Especificação Refinada Vigente)"
    !!! success "Estado refinado"
        As regras foram reescritas no nível conceitual e de negócio, delegando os detalhes tecnológicos aos RNFs correspondentes:

        **RN06 — Comprovação Fiscal Obrigatória:** O sistema bloqueia a aprovação e o repasse de qualquer reembolso de despesa de campo que não possua pelo menos um documento comprobatório anexado, validado e legível, conforme parâmetros técnicos estabelecidos no RNF07.

        **RN18 — Imutabilidade da Trilha de Auditoria:** Os registros da trilha de auditoria são estritamente imutáveis (*append-only*), sendo vedada qualquer operação de edição, atualização ou exclusão lógica ou física por qualquer usuário ou perfil do sistema (RNF15, RNF16).

---

### Detalhamento das Transformações do Ciclo 2 (Qualidade, Papéis e Governança Legal)

#### Definições Operacionais e Eliminação de Ambiguidade (`FB-12`)

=== "Antes do Ajuste (Versão Preliminar)"
    !!! warning "Problemas de Ambiguidade Identificados"
        Vários requisitos utilizavam termos sem critério determinístico ou mensuração objetiva:
        - *"Dados válidos"* e *"mensagem amigável"* sem critérios de validação e formato de erro.
        - *"Tempo real"* e *"imediatamente"* sem métrica de latência de rede/banco.
        - *"Módulos dependentes"* sem especificar os módulos destinatários.
        - *"Despesas autorizadas"* e *"contratos sob sua alçada"* sem definir alçada e gestor.
        - *"Carga nominal"* sem parametrização de concorrência ou vazão.
        - *"Alertas de extrapolação orçamentária"* sem definição do limiar percentual de disparo.

=== "Depois do Ajuste (Especificação Refinada Vigente)"
    !!! success "Definições Operacionais Determinísticas"
        Todos os termos ambíguos foram substituídos por especificações rigorosas:
        - **Dados Válidos:** Validação algorítmica de CPF via módulo 11 (Receita Federal) e validação de agência/conta contra código COMPE do Bacen (RF01 / RNF03).
        - **Mensagem Amigável:** Identificação visual do campo incorreto com texto orientador acionável (ex.: *"CPF inválido: informe 11 dígitos numéricos com dígitos verificadores corretos"*).
        - **Tempo Real / Imediatamente:** Propagação síncrona com latência máxima ≤ 500 ms (RF01, RF02) ou persistência transacional ACID ≤ 50 ms (RNF15).
        - **Módulos Dependentes:** Especificados formalmente como Módulo de Fechamento de Diárias e Comissões (OE2) e Módulo de Apropriação de Custos por Contrato (OE3).
        - **Despesas Autorizadas / Alçada:** Despesas submetidas por técnicos e expressamente aprovadas pelo perfil `GESTOR_OBRAS` responsável pelo contrato no RBAC (RF07, RF08).
        - **Carga Nominal:** Suporte a 50 usuários simultâneos a uma taxa de 10 requisições/segundo, mantendo latência no percentil 95 (p95) ≤ 800 ms (RNF02).
        - **Alerta de Extrapolação:** Limiar percentual configurável por contrato com disparo padrão aos 100% e pré-alerta de advertência aos 90% do orçamento contratual (RF31, RN29).

---

#### Refatoração e Atomicidade do RF06 (`FB-13`)

=== "Antes do Ajuste (Versão Preliminar)"
    | Código | Requisito Funcional | Critério Anterior |
    | :---: | :--- | :--- |
    | RF06 | Homologar fechamento financeiro | O gestor financeiro pode ajustar valores de horas ou despesas antes de homologar e em seguida encerra o lote, bloqueando edições. |

    !!! warning "Problema identificado"
        O requisito acumulava duas responsabilidades funcionais distintas: a edição/ajuste de valores e o ato solene de homologação com trancamento irrevogável.

=== "Depois do Ajuste (Especificação Refinada Vigente)"
    | Código | Requisito Funcional | Ator Canônico | Critério de Aceitação Refatorado |
    | :---: | :--- | :---: | :--- |
    | **RF06** | **Homologar fechamento financeiro** | `ADMIN_FINANCEIRO` | O `ADMIN_FINANCEIRO` visualiza a lista de fechamentos com status "Aguardando Homologação", confere os totais apurados e executa a homologação definitiva. O sistema altera o status do lote para "Homologado", registra a data e a identidade do homologador e bloqueia automaticamente qualquer edição de diárias, comissões ou despesas do lote por perfis operacionais (RN02). Qualquer ajuste posterior exige o fluxo formal de estorno (RF21). |

---

#### Harmonização da Matriz Canônica de Papéis RBAC (`FB-14`)

=== "Antes do Ajuste (Versão Preliminar)"
    !!! warning "Inconsistência de Atores Identificada"
        A especificação continha dispersão terminológica com cerca de 8 papéis distintos ("RH", "gestor de RH", "analista financeiro", "gestor financeiro", "coordenador de obras", "auditor", "colaborador", "técnico"), colidindo com a declaração do RF14 (4 perfis) e com a estrutura real da DUOC, onde a auxiliar administrativa Maria Beatryz centraliza DP/RH e financeiro.

=== "Depois do Ajuste (Especificação Refinada Vigente)"
    !!! success "Matriz Canônica de 4 Papéis (Seção 8.1.1)"
        Instituição de 4 papéis canônicos aplicados de forma consistente nos 36 RFs:
        1. **`TECNICO_CAMPO`:** Engenheiros residentes, arquitetos de campo e diaristas. Preenchem RVT, anexam evidências e consultam seus apontamentos.
        2. **`GESTOR_OBRAS`:** Sócios e engenheiros coordenadores. Vinculam colaboradores a contratos/centros de custo e deliberam formalmente RVTs e despesas de sua alçada.
        3. **`ADMIN_FINANCEIRO`:** Perfil operacional centralizado (ocupado na DUOC pela colaboradora focal Maria Beatryz). Unifica cadastro geral, importação do Shifton, fechamento de diárias/comissões, relatórios de custo e apropriação por contrato.
        4. **`ADMIN_SISTEMA`:** Sócios-diretores ou suporte técnico. Gerenciam perfis RBAC (RF14), configuram parâmetros do sistema e inspecionam logs de auditoria e segurança.

---

#### Refatoração dos Atributos de Qualidade RNF07 e RNF08 (`FB-15`)

=== "Antes do Ajuste (Versão Preliminar)"
    | Código | Requisito | Classificação Anterior | Problema Identificado |
    | :---: | :--- | :--- | :--- |
    | RNF07 | Validação de comprovantes | Reliability | Redigido como regra funcional: obrigar envio de comprovante legível com menos de 5 MB. |
    | RNF08 | Auditoria em estornos | Reliability | Redigido como regra funcional: exigir campo de justificativa textual com mais de 15 caracteres. |

=== "Depois do Ajuste (Especificação Refinada Vigente)"
    | Código | Requisito Verificável | URPS+ | Sommerville | Critério Mensurável Refatorado |
    | :---: | :--- | :--- | :--- | :--- |
    | **RNF07** | **Garantir robustez e segurança no processamento e integridade de arquivos de comprovantes fiscais** | Reliability (Confiabilidade) / Security | Requisito do Produto — Confiabilidade / Segurança | O sistema deve validar uploads de comprovantes fiscais através de inspeção binária de *magic numbers* MIME (rejeitando executáveis e arquivos maliciosos mascarados), verificar integridade por hash criptográfico SHA-256 e armazenar arquivos em repositório seguro com isolamento de execução em tempo de processamento ≤ 2 segundos por arquivo de até 5 MB. |
    | **RNF08** | **Garantir não-repúdio, atomicidade e auditabilidade em operações de estorno e retificação financeira** | Reliability (Confiabilidade) / Auditability | Requisito do Produto — Confiabilidade | Toda operação de estorno de fechamento homologado deve ser executada sob transação ACID indivisível, gerando registro de auditoria com garantia de não-repúdio contendo carimbo temporal UTC sincronizado via NTP, identificador imutável do usuário autenticado, IP de origem, justificativa obrigatória e snapshot diferencial (*before/after*) dos saldos afetados em tempo ≤ 100 ms. |

---

#### Desambiguação Estrutural entre Regras de Negócio e RNFs (`FB-16`)

=== "Antes do Ajuste (Versão Preliminar)"
    !!! warning "Sobreposição Conceitual"
        - RNF15 (atomicidade) vs. RN17 (política de expiração de token).
        - RNF16 (retenção de logs) vs. RN19 (obrigatoriedade de auditoria nas ações).
        - RNF10 (desempenho/anonimização) vs. RNF14 (tempo de guard) vs. RN16 (segregação de dados por usuário).

=== "Depois do Ajuste (Especificação Refinada Vigente)"
    !!! success "Desambiguação e Segregação de Camadas"
        - **Regras de Negócio (RNs):** Políticas corporativas, invariantes e direitos de domínio. Ex.: RN16 dita que colaboradores operacionais só podem visualizar seus próprios apontamentos; RN19 dita que nenhuma transação financeira pode ocorrer sem registro de auditoria.
        - **Requisitos Não Funcionais (RNFs):** Propriedades de software, métricas de engenharia e restrições de arquitetura. Ex.: RNF10 afere que a rotina analítica de anonimização e mascaramento de dados executa com overhead < 10 ms; RNF14 afere que a verificação de permissões do RBAC nas rotas de API adiciona latência < 15 ms; RNF15 garante atomicidade transacional ACID com commit ou rollback total em até 50 ms.

---

#### Reclassificação Taxonômica do RNF16 (`FB-17`)

=== "Antes do Ajuste (Versão Preliminar)"
    | Código | Requisito | Classificação Anterior | Inadequação Metodológica |
    | :---: | :--- | :--- | :--- |
    | RNF16 | Retenção de logs por 5 anos | Supportability (URPS+) | Supportability trata de manutenibilidade, testabilidade, configurabilidade e extensibilidade de código, não de guarda de registros legais. |

=== "Depois do Ajuste (Especificação Refinada Vigente)"
    | Código | Requisito | Classificação URPS+ Refatorada | Classificação Sommerville Refatorada | Justificativa |
    | :---: | :--- | :---: | :---: | :--- |
    | **RNF16** | **Assegurar retenção imutável de logs de auditoria por 5 anos** | **Reliability / Legal (+)** | **Requisito Externo — Requisito Legal / Regulatório** | A retenção é um requisito de conformidade jurídica externa com garantia de integridade e confiabilidade física e lógica dos dados (Reliability / Legal). |

---

#### Fundamentação e Rigor Jurídico-Normativo — CLT e LGPD (`FB-18`)

=== "Antes do Ajuste (Versão Preliminar)"
    !!! warning "Fragilidades Jurídicas Apontadas"
        1. O Art. 11 da CLT foi citado como imposição de retenção de logs, quando o artigo apenas disciplina o prazo prescricional para créditos trabalhistas.
        2. A retenção imutável de 5 anos colidia com o direito de eliminação de dados pessoais assegurado pelo Art. 18, inciso VI da LGPD, gerando aparente antinomia jurídica.
        3. CPF, dados bancários e remunerações de colaboradores foram rotulados genericamente como "dados sensíveis".

=== "Depois do Ajuste (Especificação Refinada Vigente)"
    !!! success "Adequação Jurídica Rigorosa (Seção 8.2.4.4)"
        1. **Prescrição Trabalhista como Política Defensiva:** O Art. 11 da CLT estabelece o prazo prescricional de 5 anos (até o limite de 2 anos após extinção contratual) para ações trabalhistas. A retenção de logs por 5 anos é formalizada como decisão interna de governança defensiva e suporte probatório contábil da DUOC.
        2. **Confronto com o Direito de Eliminação da LGPD:** O direito à eliminação dos dados (Art. 18, VI) é expressamente harmonizado com o **Art. 16, incisos I e II da LGPD**, que autoriza a conservação de dados pessoais mesmo após requisição de eliminação para fins de *"cumprimento de obrigação legal ou regulatória"* e *"estudo por órgão de pesquisa ou defesa em processo judicial, administrativo ou arbitral"*.
        3. **Saneamento Terminológico de Dados:** Em obediência estrita ao Art. 5º, inciso II da LGPD (que restringe "dados pessoais sensíveis" a origem racial, convicção religiosa, saúde, biometria etc.), CPF, agência bancária, conta e valores salariais foram reclassificados como **dados pessoais comuns confidenciais sujeitos a sigilo e segurança** (Art. 6º, VII da LGPD), eliminando qualquer vício terminológico.

---

## Rastreabilidade de Impacto nos Artefatos de Requisitos

Mapeamento consolidado das seções e artefatos modificados em decorrência das deliberações de feedback e do comparativo "Antes vs. Depois":

| Artefato / Seção Afetada | Natureza do Ajuste | Requisitos / Itens Impactados | Versão Pós-Ajuste |
| :--- | :--- | :--- | :---: |
| **Seção 8.1 do Capítulo 8 (Modelo Metodológico)** | Inclusão de nota explicativa formal sobre o propósito das classificações complementares URPS+ e Sommerville (FB-01) e nota de desambiguação entre RN e RNF (FB-16). | RNFs (Classificação Metodológica e Desambiguação) | v3.3 |
| **Seção 8.1.1 do Capítulo 8 (Atores e RBAC)** | Instituição formal da Matriz Canônica de Papéis com 4 perfis (`TECNICO_CAMPO`, `GESTOR_OBRAS`, `ADMIN_FINANCEIRO`, `ADMIN_SISTEMA`) alinhada à realidade da DUOC (FB-14). | Atores do Sistema e RBAC | v3.3 |
| **Seção 8.2 do Capítulo 8 (Especificação OE1 a OE4)** | Refatoração atômica do RF06; eliminação de termos ambíguos; refatoração de RNF07 e RNF08 para atributos de qualidade; e inclusão da seção 8.2.4.4 de governança CLT/LGPD (FB-12, FB-13, FB-15, FB-18). | Módulos 1, 2, 3 e 4 | v3.3 |
| **Seção 8.4 e 8.5 do Capítulo 8 (Cards e Catálogos)** | Atualização de 100% dos 36 RFs com atores canônicos; atualização dos 20 RNFs com métricas operacionais; reclassificação do RNF16 para Reliability / Legal (+) e desambiguação RN/RNF (FB-12, FB-14, FB-15, FB-16, FB-17). | Cards Executivos, Catálogo Geral de RFs/RNFs e RNs | v3.3 |
| **Capítulo 2 — Visão do Produto** | Harmonização da arquitetura de backend (4 perfis RBAC); saneamento residual de folha CLT/tempo real e adequação terminológica sobre dados confidenciais (FB-12, FB-14, FB-18). | Seções 2.3, 2.4, 2.5 e 2.6 | v2.5 (Cap. 2) |
| **Priorização de Requisitos (Capítulo 8)** | Harmonização de métricas (RNF02 a 50 usuários/10 req/s), reclassificação do RNF16, saneamento de dados confidenciais (RNF03) e refatoração de RNF07/RNF08 (FB-12, FB-15, FB-17, FB-18). | Tabela Geral de RNFs e Critérios | v2.9 (Priorização) |

---

## Checklist de Validação e Homologação Interna

- [x] Todos os 18 apontamentos enviados pela equipe avaliadora (Ciclos 1 e 2) foram catalogados com ID único e rastreável.
- [x] 100% dos feedbacks receberam uma das quatro deliberações formais com justificativa técnica explícita.
- [x] Inclusão de comparativo rastreável completo **"Antes vs. Depois"** demonstrando textualmente as alterações aplicadas nos dois ciclos.
- [x] 100% dos Requisitos Funcionais (RFs) novos e refinados seguem a sintaxe canônica `[Verbo no Infinitivo] + [Objeto]` e possuem critério de aceitação verificável em texto corrido.
- [x] 100% dos Requisitos Não Funcionais (RNFs) novos e refinados possuem critérios mensuráveis objetivos e verificáveis.
- [x] Regras de Negócio e Casos de Teste afetados foram devidamente sincronizados e numerados.
- [x] Atores de todos os RFs harmonizados conforme a Matriz Canônica de Papéis RBAC (4 perfis).
- [x] Desambiguação formal entre Regras de Negócio (políticas) e Requisitos Não Funcionais (atributos de qualidade).
- [x] Fundamentação jurídica precisa: prescrição defensiva (Art. 11 CLT), retenção probatória ante o Art. 18, VI da LGPD (Art. 16, I e II), e distinção de dados confidenciais comuns (Art. 6º, VII da LGPD).
- [x] Referências a sistemas legados atualizadas de forma harmonizada (sistema *Shifton* para frequência eletrônica).
- [x] Navegação e renderização validadas com sucesso no MkDocs (`mkdocs build --strict`).

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 28/09/2026 | Criação da estrutura e matriz deliberativa de feedbacks da avaliação em pares (Issue #77). | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
| `1.1` | 28/09/2026 | Registro das deliberações FB-01 a FB-11, preenchimento do painel quantitativo, da rastreabilidade de impacto e do checklist de validação. | Matheus Saraiva Camargo | Matheus Szervinsk |
| `2.0` | 30/09/2026 | Implementação da **Matriz Rastreável de Transformação dos Requisitos ("Antes vs. Depois")** atendendo ao feedback docente; atualização do sistema de ponto externo para *Shifton*; expansão da CAR-09 com RF20 e RF22 (`CT-M1-10` e `CT-M1-11`); sincronização com as deliberações da Reunião 05 e especificações refinadas do Capítulo 8. | Matheus Ribeiro Szervinsk | Eric Araújo e Lucas Zanetti |
| `2.1` | 07/10/2026 | Correção da renderização dos comparativos "Antes vs. Depois" nas abas da seção 8.4, com tabelas Markdown nativas e admonitions para as regras de negócio. | Equipe Cascata Ágil | — |
| `2.2` | 08/10/2026 | Consistência terminológica com a remoção do BDD da especificação de requisitos (feedback docente da Unidade 2): diretrizes, deliberação FB-11, comparativo "Antes vs. Depois" e checklist passam a referenciar critérios de aceitação em texto corrido. | Paulo Nery | — |
| `2.3` | 11/10/2026 | Harmonização hierárquica do título do documento com a estrutura do Capítulo 8 (Unidade 2) no menu de navegação e correção de inconsistência na numeração da Seção 8.1 (ajuste de 9.1 para 8.1, alinhando com 8.1.1 e 8.1.2). | Matheus Ribeiro Szervinsk | Matheus Saraiva Camargo |
| `2.4` | 12/10/2026 | Saneamento e harmonização pós-revisão por pares: desambiguação de RF22 (alocado na CAR-02 com CT-M1-11 para anexação/GPS), RF20 único na CAR-09 (Shifton), associação de RF36 na CAR-10, substituição terminológica de "aplicativo móvel" por "aplicação web responsiva (Web App / PWA)" e sincronização de rastreabilidade. | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
| `2.5` | 12/10/2026 | Incorporação das deliberações do Ciclo 2 de avaliação por pares (FB-12 a FB-18): definições operacionais para termos ambíguos, refatoração e isolamento do RF06, Matriz Canônica RBAC de 4 papéis, refatoração de RNF07/RNF08 como atributos de qualidade, desambiguação entre RNs e RNFs, reclassificação do RNF16 (Reliability / Legal +) e adequação jurídica (CLT Art. 11 e LGPD). | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
