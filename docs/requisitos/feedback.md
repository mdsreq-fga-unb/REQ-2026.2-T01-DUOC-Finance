# Capítulo 9: Feedback dos Requisitos — Avaliação em Pares

Este documento formaliza o registro, a deliberação crítica, o rastreamento das decisões tomadas e o **comparativo rastreável "Antes vs. Depois"** elaborado pela equipe **Cascata Ágil** a partir do relatório de avaliação por pares da equipe **Guerreiros do Backlog** sobre o lote de Requisitos de Software do sistema **DUOC Finance**.

---

## 9.1 Visão Geral e Critérios Metodológicos

!!! info "Dados da Avaliação por Pares"
    - **Equipe Avaliadora:** Guerreiros do Backlog  
    - **Equipe Avaliada:** Cascata Ágil  
    - **Artefato Avaliado:** [Capítulo 8: Requisitos de Software](index.md) (RFs, RNFs, RNs e Rastreabilidade)  
    - **Entrega / Ciclo:** Unidade 2 — Detalhamento e Backlog  
    - **Abrangência:** Transversal sobre os Objetivos Específicos OE1, OE2, OE3 e OE4  

### 8.1.1 Categorias de Deliberação

Para assegurar governança, transparência e reprodutibilidade, cada feedback catalogado é submetido a análise e recebe uma das quatro deliberações oficiais:

| Classificação | Definição Operacional | Critério de Aceite |
| :--- | :--- | :--- |
| **Aceito** | O apontamento é pertinente e o requisito/artefato é ajustado integralmente conforme a sugestão. | Aplicação direta no documento de requisitos e casos de teste associados. |
| **Parcialmente Aceito** | O apontamento aponta uma melhoria válida, porém a solução adotada foi adaptada às restrições do projeto DUOC. | Justificativa técnica do ajuste adaptado e atualização do documento. |
| **Não Aceito** | O apontamento é recusado e a formulação original é mantida por motivos técnicos, de domínio ou metodológicos. | Apresentação de contra-argumento técnico fundamentado nas regras de negócio da DUOC. |
| **Não Aplicável** | O apontamento não se aplica ao escopo do MVP, confunde responsabilidades ou foge da taxonomia adotada. | Justificativa de descarte por desvio de escopo, nível de abstração ou premissa inválida. |

### 8.1.2 Diretrizes de Refatoração Aplicadas

1. **Requisitos Funcionais (RFs):** Garantia estrita do padrão sintático `[Verbo no Infinitivo] + [Objeto Mensurável]`, eliminando formulações no presente do indicativo ou ambiguidades operacionais. Cada RF foi formulado no padrão **BDD (*Dado-Quando-Então*)**.
2. **Requisitos Não Funcionais (RNFs):** Garantia de critérios objetivos e mensuráveis (tempo em segundos, percentual de disponibilidade, taxa de conclusão, conformidade com normas), aderentes ao modelo **URPS+** e taxonomia de **Sommerville**.
3. **Consistência e Clareza:** Eliminação de sobreposições entre requisitos, resolução de termos vagos e sincronização estrita com as regras de negócio (RN) e suíte de testes (CT).

---

## 8.2 Painel Quantitativo de Deliberações

A tabela a seguir resume a distribuição quantitativa das deliberações sobre os apontamentos catalogados.

| Status da Deliberação | Quantidade | Percentual (%) |
| :--- | :---: | :---: |
| **Aceito** | 5 | 45,5% |
| **Parcialmente Aceito** | 5 | 45,5% |
| **Não Aceito** | 1 | 9,1% |
| **Não Aplicável** | 0 | 0,0% |
| **Total de Feedbacks Catalogados** | **11** | **100%** |

*Percentuais arredondados à primeira casa decimal.*

---

## 8.3 Matriz de Registro e Decisões de Feedbacks

### 8.3.1 Apontamentos Gerais e Metodológicos

| ID | Item / Seção Alvo | Apontamento da Equipe Avaliadora | Deliberação | Justificativa & Decisão Técnica | Ação / Impacto no Artefato |
| :---: | :--- | :--- | :---: | :--- | :--- |
| **FB-01** | Classificação de RNFs (8.1.2, item 2) | Uso simultâneo das classificações URPS+ e Sommerville nos RNFs pode ser redundante e gerar confusão; sugerido adotar apenas um modelo. | Não Aceito | As duas classificações respondem perguntas diferentes: URPS+ descreve o atributo de qualidade (o quê), Sommerville indica a origem/natureza do requisito (produto interno vs. externo/legislativo). Ex.: o RNF de retenção de log de auditoria é "Suportabilidade" em URPS+ e "Requisito Externo — Legislativo" em Sommerville, por decorrer da CLT; manter só uma classificação perderia essa rastreabilidade. | Nenhuma alteração na estrutura das tabelas de RNFs; adicionada a nota explicativa "Por que duas classificações?" na seção 8.1 do [Capítulo 8: Requisitos de Software](index.md), esclarecendo o propósito de cada classificação. |

---

### 8.3.2 Requisitos Funcionais (RFs)

| ID | Requisito Alvo | Apontamento da Equipe Avaliadora | Deliberação | Justificativa & Decisão Técnica | Ação / Impacto no Artefato |
| :---: | :--- | :--- | :---: | :--- | :--- |
| **FB-02** | CAR-09 a CAR-12 (Módulo de Integrações Externas, 2.3) | Características sem RF/RNF associado e ausentes da matriz de rastreabilidade. | Parcialmente Aceito | CAR-11 e CAR-12 já possuem nota de escopo própria adiando o desenho técnico para a Fase 2, não configurando lacuna. CAR-10 está fora do recorte definido em "Delimitação do Escopo do MVP" (2.6) e por isso também não recebe RF nesta rodada. CAR-09, porém, está dentro do escopo da DUOC e não possuía nenhum RF associado — esse é o gap procedente. | Criado **RF20 — Importar presenças homologadas** (OE1 / CAR-09, consumo de presenças homologadas via *Shifton* com CT-M1-10) e expandida a CAR-09 para cobrir também o **RF22 — Exportar relatório de presenças homologadas** (CT-M1-11). Adicionadas notas de escopo em CAR-10, CAR-11 e CAR-12 no Capítulo 2. |
| **FB-03** | RF04 / CAR-02 | CAR-02 possui apenas um RF associado; nomes e funções de RF04 e CAR-02 são semelhantes, sugerindo confusão de nível de abstração entre eles. | Parcialmente Aceito | A crítica de nível de abstração não procede: RF04 já é mais concreto que a CAR-02 (define campos, fluxo e status), não é uma repetição da CAR em outra camada. Porém o ponto prático é válido — CAR-02 promete "erradicar a perda de anotações" e centralizar o registro de campo, mas só existia RF para submissão (RF04); não havia RF para o colaborador consultar ou acompanhar o status de um apontamento já enviado. | Criado **RF19 — Consultar apontamentos registrados** (OE1 / CAR-02): permite ao colaborador visualizar status (pendente, homologado, rejeitado) e histórico dos próprios apontamentos de campo, sob a regra RN16. Caso de teste CT-M1-09. |
| **FB-04** | RF13 / CAR-07 (ausência de RF) | Não há requisito funcional que permita ao usuário recuperar suas credenciais em caso de esquecimento de senha. | Aceito | Gap real: RF13 cobre apenas o login com credencial já conhecida; o cenário de esquecimento de senha é inevitável numa base de usuários de campo e não tinha nenhum requisito associado, gerando atrito e chamados manuais de TI. | Criado **RF17 — Recuperar credenciais de acesso** (OE4 / CAR-07) com envio de link temporário de uso único com validade de 30 min (RN17). Caso de teste CT-M4-09. |
| **FB-05** | RF13 / CAR-07 (ausência de RF) | Não há requisito funcional que garanta o logout manual do usuário; existe apenas o encerramento automático por expiração do token. | Aceito | Gap real: RF13 cobre login, mas nenhum requisito cobria o encerramento voluntário da sessão — falha grave em dispositivos móveis compartilhados no canteiro de obras. | Criado **RF18 — Encerrar sessão manualmente** (OE4 / CAR-07) com invalidação atômica de tokens de autenticação. Caso de teste CT-M4-10. |
| **FB-11** | RF04 | RF04 é excessivamente amplo, reunindo várias funcionalidades no mesmo critério de aceitação ("preencher o formulário informando horas trabalhadas, escopo executado, anexar comprovantes/fotos e submeter"); sugerido quebrar em fluxos. | Parcialmente Aceito | Procede quanto à necessidade de critérios mais rigorosos, mas não quanto à fragmentação do envio: na rotina de campo da DUOC, horas e escopo de obra são indivisíveis das evidências fotográficas anexadas no Relatório de Viagem Técnica (RVT); quebrar a anexação em RF isolado geraria um requisito órfão sem valor de negócio independente. Em vez disso, o RF04 foi preservado como transação atômica e reescrito em BDD formal (Dado-Quando-Então), vinculando-se aos RNF04 e RNF07. A demanda de exportação e espelhos de presenças foi atendida na CAR-09 (RF22). | Critério do RF04 refatorado em BDD formal com status "Pendente de Homologação" e caso de teste CT-M1-04 atualizado. Criado RF22 na CAR-09 para relatórios/espelhos de presenças (CT-M1-11). |

---

### 8.3.3 Requisitos Não Funcionais (RNFs)

| ID | Requisito Alvo | Apontamento da Equipe Avaliadora | Deliberação | Justificativa & Decisão Técnica | Ação / Impacto no Artefato |
| :---: | :--- | :--- | :---: | :--- | :--- |
| **FB-06** | RNF04 | Condicionar a métrica de usabilidade a "usuários com treinamento de 15 minutos" dificulta o processo de teste no contexto da disciplina; sugerido medir por taxa de conclusão em primeiro uso ou número de telas/cliques. | Aceito | Procede. Testar a métrica original exigiria treinar cada participante por 15 minutos antes de cada rodada de teste de usabilidade, o que é inviável no tempo da disciplina e introduz variabilidade entre avaliadores. Medir em primeiro uso, sem treinamento, é mais rigoroso e auditável. | Critério do RNF04 reescrito: métrica de treinamento prévio substituída por taxa de conclusão em primeiro uso (≥ 90%) e número máximo de 5 passos/telas. Caso de teste CT-M1-08 atualizado. |
| **FB-07** | RNF01 | O limite de 100 apontamentos/fotos no armazenamento local pode ser insuficiente para canteiros sem conectividade; sugerido averiguar a expansão da capacidade e implementar alerta visual quando o armazenamento estiver perto do limite. | Parcialmente Aceito | Procede em parte. O alerta visual é indispensável para evitar que o encarregado perca registros sem perceber. A expansão indiscriminada da capacidade local, contudo, é desnecessária e arriscada: 100 apontamentos cobrem mais de três meses de trabalho contínuo sem rede para uma equipe de campo, acima de qualquer cenário do DF. | Critério do RNF01 reescrito: 100 registros passa a ser o mínimo garantido sem perda de dados (e não um teto rígido), com alerta visual aos 80% da capacidade e sincronização automática em até 30s após reconexão. Caso de teste CT-M1-05 atualizado. |
| **FB-08** | RNF (novo) / OE4 | Não há requisito não funcional sobre a realização de backups para garantir tolerância a falhas e capacidade de recuperação do sistema; sugerido criar RNF para backups periódicos. | Aceito | Gap crítico. Os RNFs de confiabilidade anteriores (RNF15, atomicidade dos logs; RNF16, retenção contra expurgo) resguardavam a consistência interna, mas não mitigavam a perda de dados por falha física de infraestrutura ou desastres operacionais. O termo vago "periódicos" foi substituído por parâmetros objetivos e mensuráveis (backup diário às 02h00 UTC, teste de restauração em até 4h, RPO de 24h e retenção de 30 dias). | Criado **RNF17 — Realizar backup automático diário com restauração verificada** (OE4 / CAR-08). Caso de teste CT-M4-11. |

---

### 8.3.4 Regras de Negócio e Rastreabilidade

| ID | Item Alvo | Apontamento da Equipe Avaliadora | Deliberação | Justificativa & Decisão Técnica | Ação / Impacto no Artefato |
| :---: | :--- | :--- | :---: | :--- | :--- |
| **FB-09** | RNF08 / CAR-03 (ausência de RF) | O RNF08 exige justificativa e auditoria em estornos de fechamento homologado, mas o RF06 trata apenas da homologação e não descreve explicitamente a operação de estorno; sugerido relacionar o RNF08 à CAR-03 e criar/especificar o RF correspondente. | Aceito | Procede. A RN08 já definia o estorno como o caminho para retificar lotes homologados, mas faltava o requisito funcional formalizando a ação do gestor. Sem ele, a RN08 e o RNF08 careciam de uma operação observável associada. | Criado **RF21 — Estornar fechamento financeiro** (OE2 / CAR-03), amarrado à regra RN08 e ao RNF08. Caso de teste CT-M2-09. Adicionada menção ao estorno na descrição da CAR-03 (Capítulo 2). |
| **FB-10** | RN06 e RN10 (redação) | As regras de negócio RN06 e RN10 estão ditando arquitetura e código em vez de especificar o resultado esperado; sugerido reescrever focando no comportamento e na restrição de negócio. | Parcialmente Aceito | Procede quanto à RN06: listava formatos de arquivos (.pdf, .png, .jpeg), que é detalhe técnico próprio do RNF07. Já a RN10 não descrevia tecnologia, apenas a precedência de homologação da coordenação. Identificou-se, contudo, que a RN18 citava comandos SQL (`UPDATE` e `DELETE`), sendo também corrigida para refletir a restrição de negócio de imutabilidade transacional. | RN06 reescrita focada na comprovação fiscal obrigatória (delegando validações técnicas de arquivo ao RNF07). RN18 reescrita em termos de imutabilidade e operação somente-anexação (*append-only*). RN10 mantida sem alteração. |

---

<a id="matriz-antes-depois"></a>
## 8.4 Matriz Rastreável de Transformação dos Requisitos: Comparativo "Antes vs. Depois"

Para atender de forma inequívoca às exigências de **rastreabilidade bidirecional e auditoria de mudanças** da Engenharia de Requisitos, a tabela e os detalhamentos a seguir confrontam o **Estado Anterior (Antes do Feedback / Versão Preliminar)** com o **Estado Refatorado (Depois do Ajuste / Especificação Vigente)** de cada elemento alterado no [Capítulo 8: Requisitos de Software](index.md):

### 8.4.1 Quadro Consolidado "Antes vs. Depois"

| ID Feedback | Código / Item | Estado Anterior (Antes do Feedback / Versão Preliminar) | Estado Refatorado (Depois do Ajuste na Especificação Vigente) | Ganho de Engenharia & Testabilidade | Caso de Teste Associado |
| :---: | :---: | :--- | :--- | :--- | :---: |
| **FB-01** | **Classificação RNFs (8.1)** | Tabela de RNFs com colunas URPS+ e Sommerville simultâneas, sem explicação metodológica sobre o uso concomitante dos dois modelos. | Inclusão de nota metodológica formal (*Por que duas classificações nos RNFs?*), esclarecendo que URPS+ afere o atributo técnico (*o quê*) e Sommerville a origem da restrição (*interno vs. regulatório/CLT/LGPD*). | Elimina ambiguidade metodológica e justifica a rastreabilidade legal. | Transversal aos RNFs |
| **FB-02** | **CAR-09 / RF20 / RF22** | CAR-09 (ponto eletrônico externo) presente no escopo, mas **sem nenhum Requisito Funcional associado** e ausente da Matriz de Rastreabilidade. | Criação do **RF20** (consumo de presenças homologadas do *Shifton*) e do **RF22** (emissão/exportação de espelhos e relatórios individuais de presença para trabalhador e RH), ambos com critérios BDD. | Elimina lacuna funcional em integração externa e fecha a rastreabilidade da CAR-09. | `CT-M1-10`<br>`CT-M1-11` |
| **FB-03** | **CAR-02 / RF19** | CAR-02 possuía apenas a submissão de apontamentos (RF04); o técnico em obra **não possuía meio de consultar** seus registros ou verificar se haviam sido homologados ou rejeitados. | Criação do **RF19 — Consultar apontamentos registrados**: exibição do histórico de apontamentos próprios com data, contrato e status, assegurada a segregação de visibilidade pela RN16. | Garante transparência ao colaborador de campo e fecha o ciclo de vida do RVT. | `CT-M1-09` |
| **FB-04** | **CAR-07 / RF17** | Módulo de autenticação continha apenas login (RF13); **ausência de mecanismo de autoatendimento** para esquecimento de senha, gerando dependência de reset manual. | Criação do **RF17 — Recuperar credenciais de acesso**: fluxo seguro com token de uso único, validade estrita de 30 minutos (RN17) e proteção contra enumeração de e-mails cadastrados. | Autonomia aos usuários de campo e redução drástica de chamados de suporte técnico. | `CT-M4-09` |
| **FB-05** | **CAR-07 / RF18** | Sistema contava apenas com expiração passiva de sessão por tempo (RNF13); **ausência de encerramento manual deliberado** (*logout*). | Criação do **RF18 — Encerrar sessão manualmente**: ação observável de logout com invalidação compulsória e atômica de tokens de autenticação e redirecionamento para o login. | Mitiga risco de acesso indevido em tablets ou celulares compartilhados no canteiro. | `CT-M4-10` |
| **FB-06** | **RNF04** | Critério condicionado a *"usuários com treinamento prévio de 15 minutos"* (métrica subjetiva e de difícil reprodução em testes). | Critério reescrito: preenchimento completo do RVT em **primeiro uso**, sem suporte ou treinamento prévio, em **no máximo 5 passos/telas** com **taxa de sucesso ≥ 90%**. | Transforma o RNF em parâmetro objetivamente mensurável e auditável em testes de usabilidade. | `CT-M1-08` |
| **FB-07** | **RNF01** | Armazenamento local formulado como teto rígido (*"até 100 apontamentos"*), sem garantia de mínimo nem alerta de proximidade do esgotamento. | Critério reescrito: armazenamento garantido de **no mínimo 100 registros sem perda de dados**, **alerta visual obrigatório ao atingir 80% da capacidade** e sincronização automática em **≤ 30 s**. | Previne perda silenciosa de dados em campo e estabelece limites técnicos claros. | `CT-M1-05` |
| **FB-08** | **CAR-08 / RNF17** | **Inexistência de política de backup**; garantias cobriam apenas logs atômicos (RNF15) e retenção (RNF16), vulnerabilizando o banco contra desastres físicos. | Criação do **RNF17 — Backup diário automático com integridade verificada e teste de restauração em até 4 horas, RPO de 24 horas e retenção por 30 dias**. | Assegura continuidade de negócio, conformidade regulatória e recuperação de desastres. | `CT-M4-11` |
| **FB-09** | **CAR-03 / RF21** | O RNF08 exigia justificativa e auditoria em estornos, mas **nenhum RF descrevia a ação de estorno** do fechamento homologado pelo gestor. | Criação do **RF21 — Estornar fechamento financeiro**: ação explícita com justificativa textual mínima de 15 caracteres (RN08), trilha de auditoria e preservação do extrato histórico. | Fornece a funcionalidade observável necessária para exercitar a RN08 e o RNF08. | `CT-M2-09` |
| **FB-10** | **RN06 / RN18** | **RN06:** ditava extensões de arquivo (`.pdf`, `.png`, `.jpeg`) e limite de 5MB.<br>**RN18:** ditava proibições de comandos SQL diretos (`UPDATE` e `DELETE`). | **RN06:** reformulada como política de negócio (comprovação fiscal obrigatória para repasse), delegando extensões e tamanho ao RNF07.<br>**RN18:** reformulada como princípio de imutabilidade transacional (*append-only*), vinculada aos RNF15 e RNF16. | Desacopla regras de negócio de detalhes de implementação e sintaxe de banco de dados. | `CT-M2-04`<br>`CT-M4-08` |
| **FB-11** | **CAR-02 / RF04** | RF04 reunia texto corrido sem estrutura formal de aceitação, gerando dúvida quanto à separação da anexação de fotos e comprovantes. | **RF04:** preservado como operação indivisível e atômica de campo, mas completamente refatorado em **BDD formal (*Dado-Quando-Então*)** com status "Pendente de Homologação". A necessidade de emissão de relatórios/espelhos foi separada e atribuída ao **RF22** na CAR-09. | Garante critério de aceitação formal BDD e mantém a integridade indivisível do RVT. | `CT-M1-04` |

---

### 8.4.2 Detalhamento de Transformações nos Requisitos Funcionais (RFs)

#### 1. Inclusão dos Requisitos de Gestão de Presenças na CAR-09 (`FB-02`)

=== "Antes do Ajuste (Versão Preliminar)"
    A CAR-09 figurava na visão de produto, mas não possuía nenhum requisito associado na especificação de requisitos:

    | Módulo | Objetivo Específico | CARs Cobertas | Requisitos Funcionais |
    | :---: | :--- | :---: | :--- |
    | Módulo 1 | OE1 — Padronização de Dados | CAR-01, CAR-02, CAR-09 | RF01, RF02, RF03, RF04 |

    !!! warning "Lacuna identificada"
        Sem RF para CAR-09 e sem critério de integração com ponto eletrônico.

=== "Depois do Ajuste (Especificação Refinada Vigente)"
    | Código | Requisito (Ação do Usuário) | CAR | Critério de Aceitação (BDD) |
    | :---: | :--- | :---: | :--- |
    | **RF20** | **Importar presenças homologadas** | CAR-09 | **Dado** que o analista financeiro selecionou uma competência mensal e os contratos correspondentes,<br>**Quando** solicitar a importação das presenças homologadas registradas no sistema *Shifton*,<br>**Então** o sistema deve consumir os registros de presença por colaborador e contrato e disponibilizá-los na competência selecionada para conferência, sem alterar os dados de origem no *Shifton*. |
    | **RF22** | **Exportar relatório de presenças homologadas** | CAR-09 | **Dado** que o colaborador ou o analista de RH necessita de comprovação individual ou consolidada de frequência,<br>**Quando** solicitar a geração do espelho ou relatório de presenças homologadas da competência,<br>**Então** o sistema deve compilar os registros importados do *Shifton* cruzados com os contratos do período e disponibilizar o arquivo estruturado (PDF/CSV) com o extrato de horas e diárias para conferência do trabalhador e rotinas do RH. |

---

#### 2. Inclusão da Consulta de Apontamentos de Campo na CAR-02 (`FB-03`)

=== "Antes do Ajuste (Versão Preliminar)"
    O Módulo 1 possuía apenas o envio do formulário, sem qualquer mecanismo de retorno:

    | Código | Requisito Funcional | CAR | Critério |
    | :---: | :--- | :---: | :--- |
    | RF04 | Submeter apontamento de campo | CAR-02 | Usuário preenche e envia o formulário de campo. |

    !!! warning "Lacuna identificada"
        O colaborador não conseguia consultar o status (pendente, homologado ou rejeitado) nem o histórico.

=== "Depois do Ajuste (Especificação Refinada Vigente)"
    | Código | Requisito (Ação do Usuário) | CAR | Critério de Aceitação (BDD) |
    | :---: | :--- | :---: | :--- |
    | **RF19** | **Consultar apontamentos registrados** | CAR-02 | **Dado** que o colaborador de campo já submeteu apontamentos pelo aplicativo móvel,<br>**Quando** acessar a listagem dos seus apontamentos,<br>**Então** o sistema deve exibir somente os apontamentos do próprio colaborador (RN16), com data, contrato e status ("Pendente de Homologação", "Homologado" ou "Rejeitado"), permitindo consultar o histórico de cada registro. |

---

#### 3. Inclusão de Recuperação de Senha e Logout Manual na CAR-07 (`FB-04` e `FB-05`)

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
    | Código | Requisito (Ação do Usuário) | CAR | Critério de Aceitação (BDD) |
    | :---: | :--- | :---: | :--- |
    | **RF17** | **Recuperar credenciais de acesso** | CAR-07 | **Dado** que um usuário cadastrado esqueceu sua senha de acesso,<br>**Quando** solicitar a recuperação informando seu e-mail corporativo,<br>**Então** o sistema deve emitir um link temporário com token de uso único e validade de 30 minutos (RN17), sem revelar explicitamente se o e-mail informado consta ou não na base de dados. |
    | **RF18** | **Encerrar sessão manualmente** | CAR-07 | **Dado** que um usuário autenticado decide encerrar suas atividades no sistema,<br>**Quando** acionar a opção de encerramento de sessão (*logout*),<br>**Então** o sistema deve invalidar imediatamente o token de autenticação e redirecionar o usuário para a tela pública de login. |

---

#### 4. Inclusão do Estorno Financeiro na CAR-03 (`FB-09`)

=== "Antes do Ajuste (Versão Preliminar)"
    O fechamento financeiro cobria apenas a prévia e a homologação:

    | Código | Requisito Funcional | CAR |
    | :---: | :--- | :---: |
    | RF05 | Solicitar prévia de fechamento | CAR-03 |
    | RF06 | Homologar fechamento financeiro | CAR-03 |

    !!! warning "Lacuna identificada"
        O RNF08 previa regras para estornos, mas não havia RF que permitisse disparar o estorno.

=== "Depois do Ajuste (Especificação Refinada Vigente)"
    | Código | Requisito (Ação do Usuário) | CAR | Critério de Aceitação (BDD) |
    | :---: | :--- | :---: | :--- |
    | **RF21** | **Estornar fechamento financeiro** | CAR-03 | **Dado** que um gestor financeiro identifica erro material após a homologação de um lote financeiro,<br>**Quando** solicitar o estorno do fechamento informando justificativa textual obrigatória (RN08),<br>**Então** o sistema deve reverter os lançamentos para o estado "Pendente de Homologação", registrar a justificativa e o autor na trilha de auditoria e manter o extrato revertido arquivado como histórico contábil imutável. |

---

### 8.4.3 Detalhamento de Transformações nos Requisitos Não Funcionais (RNFs)

#### 1. Reformulação do Critério Mensurável do RNF04 (`FB-06`)

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

#### 2. Reformulação de Capacidade e Alerta do RNF01 (`FB-07`)

=== "Antes do Ajuste (Versão Preliminar)"
    | Código | Requisito Verificável | Critério Mensurável Anterior |
    | :---: | :--- | :--- |
    | RNF01 | Operação offline no canteiro | O aplicativo móvel deve armazenar localmente até 100 apontamentos e fotos sem sinal de rede. |

    !!! warning "Problema identificado"
        "Até 100" estabelecia um teto, sem garantir um mínimo nem avisar o usuário antes de esgotar o armazenamento.

=== "Depois do Ajuste (Especificação Refinada Vigente)"
    | Código | Requisito Verificável | URPS+ | Sommerville | Critério Mensurável Refatorado |
    | :---: | :--- | :--- | :--- | :--- |
    | **RNF01** | **Operar em modo *offline* para coleta de dados em canteiros sem conectividade** | Reliability (Confiabilidade) | Requisito do Produto — Confiabilidade | O aplicativo móvel deve armazenar localmente, sem perda de dados, no mínimo 100 apontamentos com fotos compactadas sem sinal de rede; exibir alerta visual quando o armazenamento local atingir 80% da capacidade; e sincronizar automaticamente em até 30 segundos após restabelecida a conexão. |

---

#### 3. Criação do Requisito de Backup Automatizado — RNF17 (`FB-08`)

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

### 8.4.4 Detalhamento de Transformações nas Regras de Negócio (`FB-10`)

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

## 8.5 Rastreabilidade de Impacto nos Artefatos de Requisitos

Mapeamento consolidado das seções e artefatos modificados em decorrência das deliberações de feedback e do comparativo "Antes vs. Depois":

| Artefato / Seção Afetada | Natureza do Ajuste | Requisitos / Itens Impactados | Versão Pós-Ajuste |
| :--- | :--- | :--- | :---: |
| **Seção 8.1 do Capítulo 8 (Modelo Metodológico)** | Inclusão de nota explicativa formal sobre o propósito das classificações complementares URPS+ e Sommerville (FB-01). | RNFs (Classificação Metodológica) | v2.4 |
| **Tabela de Requisitos Funcionais** | Criação de novos RFs para suprir lacunas funcionais de integração com Shifton, acompanhamento em campo, autenticação segura e estorno contábil (FB-02, FB-03, FB-04, FB-05, FB-09, FB-11). | RF17, RF18, RF19, RF20, RF21, RF22, RF04 | v2.7 |
| **Tabela de Requisitos Não Funcionais** | Refinamento rigoroso de critérios mensuráveis em usabilidade e modo offline; criação do requisito de backup e recuperação (FB-06, FB-07, FB-08). | RNF01, RNF04, RNF17 | v2.7 |
| **Regras de Negócio (RNs)** | Reescrita de regras eliminando referências a código SQL ou extensões de arquivos, preservando a pureza de domínio (FB-10). | RN06, RN18 | v2.7 |
| **Matriz de Rastreabilidade e Casos de Teste** | Vinculação estrita dos requisitos criados/ajustados com seus Casos de Teste formais e Características correspondentes. | `CT-M1-04` (RF04), `CT-M1-05` (RNF01), `CT-M1-08` (RNF04), `CT-M1-09` (RF19), `CT-M1-10` (RF20), `CT-M1-11` (RF22), `CT-M2-09` (RF21), `CT-M4-09` (RF17), `CT-M4-10` (RF18), `CT-M4-11` (RNF17) | v2.7 |
| **Capítulo 2 — Características do Produto (CARs)** | Expansão da CAR-09 para cobrir importação de presenças e exportação de relatórios (*Shifton*), notas de escopo em CAR-10/CAR-11/CAR-12 e estorno em CAR-03 (FB-02, FB-09). | CAR-03, CAR-09, CAR-10, CAR-11, CAR-12 | v2.2 (Cap. 2) |
| **Priorização e Matriz 4x4 (Capítulo 8)** | Incorporação de RF17 a RF22 e RNF17 na avaliação de valor e esforço técnico; consolidação da linha de corte do MVP (16 RFs e 14 RNFs). | RFs e RNFs na Matriz 4x4 | v2.2 (Priorização) |

---

## 8.6 Checklist de Validação e Homologação Interna

- [x] Todos os 11 apontamentos enviados pela equipe avaliadora foram catalogados com ID único e rastreável.
- [x] 100% dos feedbacks receberam uma das quatro deliberações formais com justificativa técnica explícita.
- [x] Inclusão de comparativo rastreável completo **"Antes vs. Depois"** demonstrando textualmente as alterações aplicadas.
- [x] 100% dos Requisitos Funcionais (RFs) novos e refinados seguem a sintaxe canônica `[Verbo no Infinitivo] + [Objeto]` e padrão BDD (*Dado-Quando-Então*).
- [x] 100% dos Requisitos Não Funcionais (RNFs) novos e refinados possuem critérios mensuráveis objetivos e verificáveis.
- [x] Regras de Negócio e Casos de Teste afetados foram devidamente sincronizados e numerados.
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