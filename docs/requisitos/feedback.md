# Capítulo 8: Feedback dos Requisitos — Avaliação em Pares

Este documento formaliza o registro, a deliberação crítica e o rastreamento das decisões tomadas pela equipe **Cascata Ágil** a partir do relatório de avaliação por pares elaborado pela equipe **Guerreiros do Backlog** sobre o lote de Requisitos de Software do sistema **DUOC Finance**.

---

## 8.1 Visão Geral e Critérios Metodológicos

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

1. **Requisitos Funcionais (RFs):** Garantia estrita do padrão sintático `[Verbo no Infinitivo] + [Objeto Mensurável]`, eliminando formulações no presente do indicativo ou ambiguidades operacionais.
2. **Requisitos Não Funcionais (RNFs):** Garantia de critérios objetivos e mensuráveis (tempo em segundos/milissegundos, percentual de disponibilidade, taxa de erro, conformidade com normas), aderentes ao modelo **URPS+** e taxonomia de **Sommerville**.
3. **Consistência e Clareza:** Eliminação de sobreposições entre requisitos, resolução de termos vagos e atualização das dependências nas regras de negócio (RN) e critérios BDD.

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
| **FB-02** | CAR-09 a CAR-12 (Módulo de Integrações Externas, 2.3) | Características sem RF/RNF associado e ausentes da matriz de rastreabilidade. | Parcialmente Aceito | CAR-11 e CAR-12 já possuem nota de escopo própria adiando o desenho técnico para a Fase 2, não configurando lacuna. CAR-10 está fora do recorte definido em "Delimitação do Escopo do MVP" (2.6) e por isso também não recebe RF nesta rodada. CAR-09, porém, está dentro do escopo delimitado do MVP e não possui nenhum RF associado — esse é o gap procedente. | Criado **RF20 — Importar presenças homologadas** (OE1 / CAR-09, consumo de presenças homologadas via auditor.ia), com caso de teste CT-M1-10. Adicionada nota de escopo em CAR-10 no Capítulo 2, equivalente à de CAR-11/CAR-12. CAR-11 e CAR-12 mantidas sem alteração. |
| **FB-03** | RF04 / CAR-02 | CAR-02 possui apenas um RF associado; nomes e funções de RF04 e CAR-02 são semelhantes, sugerindo confusão de nível de abstração entre eles. | Parcialmente Aceito | A crítica de nível de abstração não procede: RF04 já é mais concreto que a CAR-02 (define campos, fluxo e status), não é uma repetição da CAR em outra camada. Porém o ponto prático é válido — CAR-02 promete "erradicar a perda de anotações" e centralizar o registro de campo, mas só existe RF para submissão (RF04); não há RF para o colaborador consultar ou acompanhar o status de um apontamento já enviado. | Criado **RF19 — Consultar apontamentos registrados** (OE1 / CAR-02): permite ao colaborador visualizar status (pendente, homologado, rejeitado) e histórico dos próprios apontamentos de campo. Caso de teste CT-M1-09. RF04 refinado posteriormente conforme FB-11. |
| **FB-04** | RF13 / CAR-07 (ausência de RF) | Não há requisito funcional que permita ao usuário recuperar suas credenciais em caso de esquecimento de senha. | Aceito | Gap real: RF13 cobre apenas o login com credencial já conhecida; o cenário de esquecimento de senha é inevitável numa base de usuários de campo e não tem nenhum requisito associado. | Criado **RF17 — Recuperar credenciais de acesso** (OE4 / CAR-07). Caso de teste CT-M4-09. |
| **FB-05** | RF13 / CAR-07 (ausência de RF) | Não há requisito funcional que garanta o logout manual do usuário; existe apenas o encerramento automático por expiração do token. | Aceito | Gap real: RF13 cobre login, mas nenhum requisito cobre o colaborador encerrar a sessão por vontade própria — relevante em cenário de dispositivo compartilhado/celular emprestado em campo. | Criado **RF18 — Encerrar sessão manualmente** (OE4 / CAR-07). Caso de teste CT-M4-10. |
| **FB-11** | RF04 | RF04 é excessivamente amplo, reunindo várias funcionalidades no mesmo critério de aceitação ("preencher o formulário informando horas trabalhadas, escopo executado, anexar comprovantes/fotos e submeter"); sugerido quebrar em fluxos. | Parcialmente Aceito | Procede em parte. O RF04 reunia duas funcionalidades distintas: o preenchimento e a submissão dos dados do apontamento e a anexação de fotos e comprovantes, que tem comportamento próprio (seleção, vínculo ao apontamento e remoção antes do envio). Separar a anexação deixa cada RF com uma ação única e testável. Não foi feita divisão adicional (horas e escopo executado em RFs distintos) porque são campos do mesmo formulário, submetidos como uma operação indivisível do domínio; dividir geraria RFs sem valor de negócio isolado. | RF04 refinado (critério sem a anexação, com remissão ao RF22). Criado **RF22 — Anexar evidências ao apontamento** (OE1 / CAR-02). Caso de teste CT-M1-11; CT-M1-04 atualizado. |

---

### 8.3.3 Requisitos Não Funcionais (RNFs)

| ID | Requisito Alvo | Apontamento da Equipe Avaliadora | Deliberação | Justificativa & Decisão Técnica | Ação / Impacto no Artefato |
| :---: | :--- | :--- | :---: | :--- | :--- |
| **FB-06** | RNF04 | Condicionar a métrica de usabilidade a "usuários com treinamento de 15 minutos" dificulta o processo de teste no contexto da disciplina; sugerido medir por taxa de conclusão em primeiro uso ou número de telas/cliques. | Aceito | Procede. Testar a métrica original exigiria treinar cada participante por 15 minutos antes de cada rodada de teste de usabilidade, o que é inviável no tempo da disciplina e introduz variabilidade entre avaliadores. Medir em primeiro uso, sem treinamento, é mais rigoroso e mais fácil de executar. | Critério do RNF04 reescrito: métrica de treinamento prévio substituída por taxa de conclusão em primeiro uso e número máximo de passos/telas. Caso de teste CT-M1-08 atualizado. |
| **FB-07** | RNF01 | O limite de 100 apontamentos/fotos no armazenamento local pode ser insuficiente para canteiros sem conectividade; sugerido averiguar a expansão da capacidade e implementar alerta visual quando o armazenamento estiver perto do limite. | Parcialmente Aceito | Procede em parte. O alerta visual é pertinente, pois evita que o colaborador de campo perca o registro ao atingir o limite sem perceber. Já a expansão do limite não foi adotada: o apontamento é diário por colaborador (RNF04), então 100 apontamentos equivalem a mais de três meses de operação contínua sem sinal, muito acima do cenário realista de canteiros. Além disso, a capacidade real do aparelho depende do tamanho das fotos, e não só da quantidade. | Critério do RNF01 reescrito: 100 passa a ser o mínimo garantido (e não um teto rígido), foi incluído alerta visual ao atingir 80% da capacidade e foi explicitado que não pode haver perda de dados. Caso de teste CT-M1-05 atualizado. |
| **FB-08** | RNF (novo) / OE4 | Não há requisito não funcional sobre a realização de backups para garantir tolerância a falhas e capacidade de recuperação do sistema; sugerido criar RNF para backups periódicos. | Aceito | Gap real. Os RNFs de confiabilidade existentes (RNF15, atomicidade dos logs; RNF16, retenção contra expurgo) protegem contra inconsistência e exclusão indevida, mas não contra perda de dados por falha de infraestrutura, corrupção ou erro operacional. Como o sistema concentra dados financeiros e trabalhistas, a recuperação precisa ser verificável. O termo "periódicos" foi convertido em parâmetros mensuráveis (frequência diária, retenção, perda máxima de dados e tempo de restauração). | Criado **RNF17 — Realizar backup automático diário com restauração verificada** (OE4 / CAR-08). Caso de teste CT-M4-11. |

---

### 8.3.4 Regras de Negócio e Rastreabilidade

| ID | Item Alvo | Apontamento da Equipe Avaliadora | Deliberação | Justificativa & Decisão Técnica | Ação / Impacto no Artefato |
| :---: | :--- | :--- | :---: | :--- | :--- |
| **FB-09** | RNF08 / CAR-03 (ausência de RF) | O RNF08 exige justificativa e auditoria em estornos de fechamento homologado, mas o RF06 trata apenas da homologação e não descreve explicitamente a operação de estorno; sugerido relacionar o RNF08 à CAR-03 e criar/especificar o RF correspondente. | Aceito | Procede. A RN08 já estabelece o estorno como o único caminho formal para retificar lotes homologados, e o RNF08 já está associado à CAR-03 na matriz de rastreabilidade do OE2, mas nenhum RF descrevia a ação do gestor que dispara esse procedimento. Sem o RF, o RNF08 ficava sem funcionalidade que o exercitasse e a RN08 sem operação observável. | Criado **RF21 — Estornar fechamento financeiro** (OE2 / CAR-03), com referência à RN08 e ao RNF08. Caso de teste CT-M2-09. Adicionada menção ao estorno de fechamentos na descrição da CAR-03 (Capítulo 2). |
| **FB-10** | RN06 e RN10 (redação) | As regras de negócio RN06 e RN10 estão ditando arquitetura e código em vez de especificar o resultado esperado; sugerido reescrever focando no comportamento e na restrição de negócio. | Parcialmente Aceito | Procede em parte. A RN06 listava os formatos de arquivo aceitos (PDF, PNG, JPEG), que é detalhe técnico já coberto e verificável no RNF07; mantê-los na regra duplicava a informação e misturava política de negócio com implementação. Já a RN10 não procede: ela expressa apenas a condição de negócio (só se apropria o que foi previamente homologado pela coordenação), sem citar tecnologia, arquitetura ou código. Na revisão do mesmo critério, a RN18 foi identificada como a regra que de fato descrevia implementação (instruções SQL `UPDATE` e `DELETE`) e foi ajustada junto. | RN06 reescrita como restrição de negócio, com remissão ao RNF07 para formatos e tamanho. RN18 reescrita sem referência a SQL, mantendo a restrição de imutabilidade. RN10 mantida sem alteração. |

---

## 8.4 Rastreabilidade de Impacto nos Artefatos de Requisitos

Mapeamento consolidado das seções e artefatos modificados em decorrência das deliberações de feedback:

| Artefato / Seção Afetada | Natureza do Ajuste | Requisitos / Itens Impactados | Versão Pós-Ajuste |
| :--- | :--- | :--- | :---: |
| **Seção 8.1 do Capítulo 8 (Modelo Metodológico)** | Nota explicativa sobre o propósito das classificações URPS+ e Sommerville (FB-01) | RNFs (classificação) | v2.4 |
| **Tabela de Requisitos Funcionais** | Criação de novos RFs para lacunas de cobertura, autenticação e estorno de fechamento; refinamento do RF04 (FB-02, FB-03, FB-04, FB-05, FB-09, FB-11) | RF04, RF17, RF18, RF19, RF20, RF21, RF22 | v2.4 |
| **Tabela de Requisitos Não Funcionais** | Ajuste de métricas e critérios de mensuração; criação de novo RNF (FB-06, FB-07, FB-08) | RNF01, RNF04, RNF17 | v2.4 |
| **Regras de Negócio (RNs)** | Reescrita focada em comportamento e restrição de negócio, sem detalhes de implementação (FB-10) | RN06, RN18 | v2.4 |
| **Matriz de Rastreabilidade e Casos de Teste** | Inclusão dos novos requisitos e atualização dos casos de teste dos RFs e RNFs ajustados | RF17 → CAR-07 (CT-M4-09), RF18 → CAR-07 (CT-M4-10), RF19 → CAR-02 (CT-M1-09), RF20 → CAR-09 (CT-M1-10), RF21 → CAR-03 (CT-M2-09), RF22 → CAR-02 (CT-M1-11), RNF17 → CAR-08 (CT-M4-11), CT-M1-04 (RF04), CT-M1-05 (RNF01), CT-M1-08 (RNF04) | v2.4 |
| **Capítulo 2 — Características do Produto (CAR-03 e CAR-10)** | Nota de escopo em CAR-10 (FB-02) e menção ao estorno de fechamentos em CAR-03 (FB-09) | CAR-03, CAR-10 | v2.3 (Capítulo 2) |

---

## 8.5 Checklist de Validação e Homologação Interna

- [x] Todos os comentários enviados no relatório de avaliação por pares foram catalogados com ID único.
- [x] 100% dos feedbacks receberam uma das quatro deliberações formais com justificativa explícita.
- [x] 100% dos Requisitos Funcionais (RFs) seguem a sintaxe canônica `[Verbo no Infinitivo] + [Objeto]`.
- [x] 100% dos Requisitos Não Funcionais (RNFs) possuem métricas verificáveis e critérios objetivos.
- [x] Regras de Negócio e Casos de Teste afetados foram devidamente sincronizados.
- [ ] Documento revisado e homologado internamente pelos membros da equipe Cascata Ágil.
- [x] Navegação e renderização validadas no MkDocs.

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 28/09/2026 | Criação da estrutura e matriz deliberativa de feedbacks da avaliação em pares (Issue #77) | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
| `1.1` | 28/09/2026 | Registro das deliberações FB-01 a FB-11, preenchimento do painel quantitativo, da rastreabilidade de impacto e do checklist de validação | Matheus Saraiva Camargo | Matheus Szervinsk |