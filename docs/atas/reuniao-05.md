# Ata da Reunião 05: Priorização de Requisitos, Matriz 4x4 e Alinhamento do MVP

* **Projeto:** DUOC Finance
* **Equipe:** Cascata Ágil
* **Data da Sessão:** 24 de setembro de 2026, às 20h00 (GMT-03:00)
* **Natureza:** Síncrona, online via Google Meet com gravação e transcrição — alinhamento interno da equipe de Engenharia de Requisitos (validação, priorização e definição de escopo)
* **Participantes:** 
    * Matheus Ribeiro Szervinsk (Scrum Master, Co-PO e condução da sessão)
    * Eric Araújo (Product Owner e validação institucional com base na cultura da DUOC)
    * Giovana Ferreira (Engenheira Frontend e Designer UI/UX)
    * Lucas Zanetti (Engenheiro de Revisão e Qualidade)
    * Matheus Saraiva Camargo (Arquiteto de Software e Banco de Dados)
    * Paulo Nery (Engenheiro Backend)
    * Gustavo (Engenheiro de QA e Testes)
* **Objetivo da Sessão:** Realizar a verificação e validação da especificação de requisitos de software (21 Requisitos Funcionais e Requisitos Não Funcionais cobrindo os 4 módulos essenciais), aplicar a estratégia de priorização MoSCoW e a matriz 4x4 baseada em esforço, complexidade e capacidade da equipe para identificar os requisitos essenciais, deliberar sobre ajustes de escopo no Minimum Viable Product (inclusão do RF11, rebaixamento do RF21, exclusão do RF16 e postergação do RNF01), ratificar os requisitos de segurança e infraestrutura na Vercel (`finance.doc.br`), e aprovar formalmente o escopo do MVP com ressalvas para validação e encaminhamento à cliente parceira Maria Beatryz.

---

## 1. Pauta

1. Apresentação da documentação registrada no GitHub Pages e distinção conceitual entre requisitos funcionais e não funcionais.
2. Detalhamento dos 4 módulos essenciais e regras de negócio estruturadas (unicidade de CPF, bloqueio de 5 dias úteis e RBAC).
3. Critérios de priorização pelo método MoSCoW e cálculo de esforço, complexidade e capacidade da equipe (matriz 4x4).
4. Ajustes nos requisitos do MVP: inclusão imediata de filtragem de indicadores de custo por obra (RF11).
5. Ajustes nos requisitos do MVP: rebaixamento de prioridade e remoção da reversão de fechamento financeiro (RF21).
6. Avaliação do requisito de exportação de relatórios de auditoria (RF16) e decisão de permanência fora do MVP.
7. Análise dos Requisitos Não Funcionais: postergação do modo de operação offline (RNF01) e confirmação dos requisitos de segurança (criptografia, tokens de 8h e backup diário).
8. Aprovação do escopo do Minimum Viable Product (MVP) com ressalvas.
9. Infraestrutura e hospedagem do sistema financeiro como subdomínio na Vercel (`finance.doc.br`).
10. Próximas etapas: manual de marca, configuração de acessos no Figma, organização de notas e alinhamento da apresentação para o dia seguinte.

---

## 2. Resumo Executivo

A reunião teve como foco a revisão de requisitos e priorização via método MoSCoW e alinhamento do Minimum Viable Product (MVP) do DUOC Finance.

* **Apresentação e Módulos Iniciais:** Requisitos funcionais e não funcionais foram detalhados cobrindo 4 módulos essenciais atrelados aos objetivos específicos do projeto, totalizando cerca de 21 requisitos funcionais. A documentação registrada no GitHub Pages abrange o cenário atual, a solução proposta, os impactos da intervenção social, as estratégias e o cronograma. Regras de negócio vitais e cadastros foram devidamente estruturados, contemplando a unicidade de cadastro por CPF, a trava de edição retroativa por cinco dias úteis e o gerenciamento de perfis de acesso (RBAC).
* **Priorização e Ajustes:** A estratégia MoSCoW combinada a uma matriz 4x4 (baseada em esforço, complexidade e capacidade da equipe) definiu inicialmente 7 requisitos essenciais. Durante a avaliação visual da matriz, o grupo deliberou pela inclusão imediata do requisito funcional de filtragem de indicadores de custo por obra (RF11) no escopo prioritário do MVP para elevar o valor de negócio da solução. Em contrapartida, concordou-se em rebaixar a prioridade e retirar o requisito funcional de estorno de fechamento financeiro (RF21) do escopo do MVP, visto que a premissa de validação por parte dos sócios não ocorre na prática e a responsabilidade recai internamente.
* **Aprovação do MVP e Infraestrutura:** Minimum Viable Product foi aprovado com ressalvas pelo grupo para posterior leitura detalhada dos participantes. Requisitos de segurança (criptografia em repouso, expiração de tokens em 8 horas e backup diário automático com restauração) foram confirmados como mandatórios. Ficou acordado manter a exportação de relatórios de auditoria (RF16) fora do escopo inicial pela baixa frequência de uso e para evitar complexidade desnecessária. A operação offline (RNF01) foi postergada como requisito evolutivo por se tratar de um web app inicial. A infraestrutura do sistema financeiro foi definida como um subdomínio estruturado como `finance.doc.br` na plataforma Vercel, superando limitações do servidor legado da Locaweb.

---

## 3. Detalhamento das Discussões

### 3.1 Apresentação da Documentação e Metodologia de Requisitos
Matheus Ribeiro Szervinsk abriu a reunião de validação e verificação dos requisitos de software levantados, explicando a distinção entre requisitos funcionais (relacionados ao produto e às ações do usuário) e não funcionais (relacionados ao sistema operacional, qualidade e restrições de infraestrutura) (`00:00:03`). 

A documentação registrada no Git Pages abrange o cenário atual, a solução proposta, os impactos da intervenção social, estratégias e cronograma (`00:01:08`). Os requisitos foram estruturados em quatro módulos atrelados aos objetivos específicos derivados do objetivo geral da intervenção, somando cerca de 21 requisitos funcionais (`00:02:07`).

### 3.2 Detalhamento dos Módulos e Regras de Negócio
A arquitetura modular cobre quatro objetivos específicos centrais: padronização de dados, eficiência administrativa financeira, inteligência de custos e governança (`00:02:07`, `00:07:14`). 

Foram estabelecidas regras de negócio fundamentais para assegurar a consistência contábil e operacional:
* **Unicidade de Cadastro por CPF:** Impedimento de duplicações na base de diaristas e prestadores;
* **Bloqueio Automático de Edição Retroativa por Cinco Dias Úteis:** Mecanismo compulsório que impede alterações arbitrárias após o fechamento de lotes (`00:05:06`);
* **Gerenciamento de Perfis de Acesso (RBAC):** Configuração de níveis de privilégio para solucionar de forma definitiva os problemas decorrentes do compartilhamento generalizado de planilhas (`00:08:23`).

Eric Araújo validou os documentos com base na cultura da empresa e na dinâmica das obras, e outras equipes revisaram as correções implementadas (`00:05:06`, `00:09:27`).

### 3.3 Critérios de Priorização e Definição do Minimum Viable Product
Para gerenciar o volume de requisitos, Matheus Ribeiro Szervinsk apresentou a estratégia de priorização utilizando o método MoSCoW e uma fórmula de cálculo simples baseada em esforço, complexidade e capacidade da equipe (`00:10:34`). 

Os resultados foram mapeados em uma matriz 4x4 para definir o Minimum Viable Product (MVP) e identificar os requisitos obrigatórios, totalizando inicialmente sete requisitos funcionais essenciais para a entrega (`00:12:55`, `00:15:09`).

### 3.4 Ajustes nos Requisitos do MVP com Inclusão de Indicadores de Custos
Durante a revisão visual da matriz 4x4 compartilhada por Eric Araújo, Matheus Ribeiro Szervinsk e a equipe avaliaram os itens priorizados e postergados (`00:16:27`). 

Constatou-se que o requisito funcional **RF11**, referente à filtragem de indicadores de custo por obra, havia sido adiado preliminarmente. O grupo alinhou e decidiu incluí-lo imediatamente no escopo prioritário do MVP para elevar o valor de negócio da solução e atender diretamente à necessidade de visibilidade financeira por canteiro (`00:19:39`).

### 3.5 Ajustes nos Requisitos do MVP com Remoção da Reversão de Fechamento Financeiro
A equipe debateu o requisito funcional **RF21**, que tratava do estorno de fechamento financeiro com justificativa auditável obrigatória (`00:23:02`). 

Eric Araújo explicou que o requisito havia sido criado sob a premissa de validação por parte dos sócios, mas como essa validação não ocorre na prática e a responsabilidade recai internamente sobre a rotina administrativa, o requisito foi considerado desnecessário no momento atual e teve sua prioridade reduzida, sendo retirado do escopo do MVP (`00:24:26`).

### 3.6 Avaliação do Requisito de Exportação de Relatórios de Auditoria
O requisito funcional **RF16**, focado na exportação de relatórios de auditoria, foi analisado para verificar sua inclusão no MVP (`00:28:32`). 

Eric Araújo argumentou que permitir a geração de relatórios e PDFs agora aumentaria a complexidade do sistema, transformando a ferramenta em um gerador de planilhas. Pontuou ainda que o uso de relatórios pela equipe é extremamente raro e restrito a períodos anuais (`00:29:31`). Ficou acordado manter o requisito RF16 fora do escopo inicial do MVP, permanecendo postergado (`00:28:32`).

### 3.7 Análise de Requisitos Não Funcionais e Modo Offline
Os requisitos não funcionais foram examinados, com ênfase no requisito **RNF01**, referente à operação offline em canteiros sem conectividade (`00:06:11`). Eric Araújo indicou que, como a solução será um aplicativo web e não um aplicativo mobile nativo, a operação offline não é estritamente necessária no momento, decidindo-se postergá-la e classificá-la como requisito evolutivo (`00:33:36`). 

Em contrapartida, requisitos mandatórios de segurança e infraestrutura — tais como criptografia de repouso, expiração de token em 8 horas e rotina diária de backup automático com procedimento de restauração — foram confirmados como obrigatórios no MVP (`00:35:11`).

### 3.8 Aprovação do MVP com Ressalvas e Próximos Passos
O Minimum Viable Product foi aprovado com ressalvas pelo grupo, incentivando as pessoas participantes a realizarem uma leitura detalhada da documentação posteriormente para ajustes pontuais (`00:37:50`). 

Como próximos passos, Eric Araújo disponibilizará o manual de marca da empresa para identidade visual e orientará sobre o uso de ferramentas de prototipação como o Figma (`00:38:56`). Além disso, ficou estabelecido que o sistema financeiro será hospedado como um subdomínio estruturado como **`finance.doc.br`** na plataforma Vercel para assegurar melhor desempenho operacional em comparação ao servidor legado da Locaweb (`00:41:47`).

---

## 4. Decisões Tomadas

| # | Decisão | Descrição e Impacto |
| :---: | :--- | :--- |
| **D1** | **Inclusão de indicadores de custo no MVP** | O grupo alinhou adicionar o requisito funcional de filtragem de indicadores de custo (RF11) ao escopo prioritário do MVP para elevar o valor de negócio da entrega inicial. |
| **D2** | **Rebaixamento do requisito de estorno financeiro** | O grupo concordou em reduzir a prioridade e retirar o requisito funcional de estorno de fechamento financeiro (RF21) do escopo do MVP, considerando que a premissa de validação por sócios não ocorre na prática e a responsabilidade recai internamente. |
| **D3** | **Exclusão da exportação de relatórios do MVP** | Ficou acordado manter o requisito de exportação de relatórios de auditoria (RF16) fora do escopo inicial do MVP devido à baixa frequência de uso (rotina anual) e para evitar transformar o sistema em gerador de planilhas. |
| **D4** | **Postergação do modo de operação offline** | Os participantes decidiram postergar o requisito não funcional de operação offline (RNF01), visto que a entrega inicial será um web app e não um aplicativo mobile nativo, classificando-o como funcionalidade evolutiva. |
| **D5** | **Aprovação do escopo do MVP com ressalvas** | O MVP foi aprovado pelo grupo com a ressalva de que os participantes realizarão uma revisão detalhada posterior da documentação para ajustes pontuais e consolidação da lista final. |
| **D6** | **Hospedagem do sistema como subdomínio na Vercel e Segurança** | O sistema financeiro será hospedado como um subdomínio estruturado como `finance.doc.br` utilizando a plataforma Vercel (substituindo a Locaweb), com confirmação obrigatória dos requisitos de criptografia em repouso, expiração de token em 8h e backup diário automático com restauração. |

---

## 5. Gravação e Links

* **Registro:** Gravação interna e transcrição automática da reunião via Google Meet arquivadas para fins de governança e rastreabilidade da equipe.
* **Artefatos Relacionados:**
    * [Capítulo 8 — Especificação de Requisitos de Software](../requisitos/index.md)
    * [Capítulo 8 — Priorização de Requisitos e MVP](../requisitos/priorizacao.md)
    * [Capítulo 6 — Cronograma e Planejamento de Entregas](../cronograma/index.md)
    * [Capítulo 7 — Processo de Validação Sociotécnica e Governança](../interacao-cliente/index.md)

---

## 6. Ações Futuras (Action Items)

| Ação Determinada | Responsável | Objetivo / Descrição | Prazo | Status |
| :--- | :--- | :--- | :---: | :---: |
| **Disponibilizar link Git** | Eric Araújo | Disponibilizar o link do Git page no grupo para que Maria possa compartilhar com a cliente. | Imediato | Concluído |
| **Ajustar requisitos MVP** | Equipe (The group) | Adicionar o requisito funcional 11 ao MVP e remover o requisito funcional 21 da lista atual. | 25/09/2026 | Concluído |
| **Publicar notas ajuste** | Matheus Ribeiro Szervinsk | Enviar no grupo de mensagens as anotações sobre os ajustes realizados nos requisitos durante a reunião. | Imediato | Concluído |
| **Criar lista requisitos** | Equipe (The group) | Elaborar uma lista com os requisitos para revisão e enviar ao Eric para encaminhamento à cliente. | 25/09/2026 | Concluído |
| **Enviar manual marca** | Eric Araújo | Disponibilizar o manual de marca da empresa no grupo de mensagens. | 25/09/2026 | Concluído |
| **Configurar acesso Figma** | Equipe (The group) | Realizar a abertura e configuração do usuário no Figma para todos os integrantes da equipe. | 25/09/2026 | Concluído |
| **Organizar requisitos** | Equipe (O grupo) | Organizar os requisitos levantados durante a reunião na documentação oficial. | 25/09/2026 | Concluído |
| **Definir ordem** | Equipe (O grupo) | Definir a ordem da apresentação para o dia seguinte perante a disciplina. | 25/09/2026 | Concluído |

---

## 7. Rastreabilidade e Minutagem da Reunião (Log de Discussão)

* `00:00:03` — **Apresentação da Metodologia de Requisitos:** Matheus Ribeiro Szervinsk abre a reunião de validação e verificação dos requisitos de software levantados, explicando a distinção entre requisitos funcionais (relacionados ao produto) e não funcionais (relacionados ao sistema operacional).
* `00:01:08` — **Apresentação da Documentação no Git Pages:** Revisão dos documentos registrados cobrindo o cenário atual, a solução proposta, os impactos da intervenção social, estratégias e cronograma.
* `00:02:07` — **Estrutura Modular e Derivação de Requisitos:** Apresentação da estruturação dos requisitos em quatro módulos derivados dos objetivos específicos, somando cerca de 21 requisitos funcionais.
* `00:05:06` — **Regras de Negócio e Unicidade Cadastral:** Estabelecimento de regras como unicidade por CPF, bloqueio automático de edição retroativa por cinco dias úteis e validação das correções implementadas com Eric Araújo.
* `00:06:11` — **Requisitos Não Funcionais em Canteiro:** Levantamento das condições operacionais de conectividade nas obras.
* `00:07:14` — **Detalhamento dos Módulos Funcionais:** Arquitetura cobrindo padronização de dados, eficiência administrativa financeira, inteligência de custos e governança.
* `00:08:23` — **Gerenciamento de Perfis de Acesso (RBAC):** Definição de permissões para sanar gargalos e inseguranças no compartilhamento de planilhas.
* `00:09:27` — **Validação Institucional:** Eric Araújo valida os documentos com base na cultura da empresa DUOC.
* `00:10:34` — **Estratégia de Priorização MoSCoW e Cálculo:** Matheus Ribeiro Szervinsk apresenta os critérios de cálculo simples baseados em esforço, complexidade e capacidade da equipe.
* `00:12:55` — **Mapeamento na Matriz 4x4:** Projeção visual dos requisitos na matriz cartesiana para identificar os obrigatórios do Minimum Viable Product.
* `00:15:09` — **Definição dos Sete Requisitos Essenciais:** Mapeamento inicial dos 7 requisitos funcionais inegociáveis para viabilizar a entrega.
* `00:16:27` — **Revisão Visual da Matriz Compartilhada:** Eric Araújo compartilha a matriz 4x4; Matheus Ribeiro e a equipe avaliam os itens priorizados e postergados.
* `00:19:39` — **Inclusão do RF11 no MVP:** Constatação de que o requisito funcional RF11 (filtragem de indicadores de custo por obra) havia sido adiado; decisão unânime de incluí-lo imediatamente no escopo prioritário do MVP para elevar o valor de negócio.
* `00:23:02` — **Debate sobre Estorno Financeiro (RF21):** Análise do requisito de reversão de fechamento com justificativa auditável obrigatória.
* `00:24:26` — **Rebaixamento e Remoção do RF21:** Eric Araújo esclarece que a premissa de validação por sócios não ocorre na prática e a responsabilidade recai internamente; prioridade reduzida e item retirado do escopo do MVP.
* `00:28:32` — **Avaliação do Requisito de Relatórios (RF16):** Análise de esforço e demanda para a exportação de relatórios de auditoria.
* `00:29:31` — **Manutenção do RF16 Fora do MVP:** Eric Araújo argumenta que relatórios e PDFs aumentariam a complexidade do sistema (transformando-o em gerador de planilhas) e que seu uso é raríssimo/anual; o item permanece postergado.
* `00:33:36` — **Postergação da Operação Offline (RNF01):** Definição de que, como a entrega inicial será um web app e não um aplicativo mobile nativo, a operação offline não é estritamente necessária no momento, sendo classificada como evolutiva.
* `00:35:11` — **Confirmação dos Requisitos de Segurança e Infraestrutura:** Ratificação obrigatória no MVP de criptografia em repouso, expiração de token em 8 horas e backup diário automático com restauração.
* `00:37:50` — **Aprovação do MVP com Ressalvas:** Homologação do escopo do MVP com ressalvas, incentivando leitura e revisão posterior detalhada pela equipe.
* `00:38:56` — **Identidade Visual e Prototipação:** Encaminhamento para Eric Araújo disponibilizar o manual de marca da empresa e orientação sobre abertura de contas e uso do Figma.
* `00:41:47` — **Hospedagem na Vercel e Encerramento:** Estabelecimento de hospedagem como subdomínio (`finance.doc.br`) na Vercel para assegurar melhor desempenho operacional sobre a Locaweb e alinhamento da ordem da apresentação para o dia seguinte.

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 24/09/2026 | Registro preliminar da pauta e estrutura da Reunião 05 de Priorização de Requisitos. | Eric Araújo e Matheus Ribeiro Szervinsk | Lucas Zanetti |
| `2.0` | 24/09/2026 | Ajuste e consolidação integral da ata com transcrição oficial da sessão de priorização: detalhamento dos 4 módulos e 21 RFs, aplicação do MoSCoW e matriz 4x4, inclusão do RF11, rebaixamento do RF21, exclusão do RF16, postergação do RNF01, segurança, hospedagem na Vercel (`finance.doc.br`) e novas ações futuras. | Matheus Ribeiro Szervinsk e Eric Araújo | Lucas Zanetti e Giovana Ferreira |
