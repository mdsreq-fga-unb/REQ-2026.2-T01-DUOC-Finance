# Ata da Reunião 04: Retrospectiva da Unidade 1 e Planejamento da Unidade 2

* **Projeto:** DUOC Finance
* **Equipe:** Cascata Ágil
* **Data da Sessão:** 17 de setembro de 2026, às 21h41 (GMT-03:00)
* **Natureza:** Síncrona, online, com transcrição — alinhamento interno da equipe
* **Participantes:** Matheus Ribeiro Szervinsk (condução), Eric Araújo, Lucas Zanetti, Giovana Ferreira, Matheus Saraiva Camargo, Gustavo e Paulo Nery
* **Objetivo da Sessão:** Analisar o feedback docente da Unidade 1, distribuir as correções pendentes e planejar a elaboração, validação e priorização dos requisitos da Unidade 2.

---

## 1. Pauta

1. Avaliação da Unidade 1 e feedback do professor.
2. Reestruturação do MkDocs e fluxo de revisão.
3. Cronograma e aderência ao processo RAD.
4. Prazos e entregas da Unidade 2.
5. Distribuição das correções da Unidade 1.
6. Divisão das características do produto e rastreabilidade dos requisitos.
7. Dados mockados e validação com a cliente.

---

## 2. Resumo Executivo
A equipe avaliou a nota 7 obtida na Unidade 1 como resultado positivo e mapeou os ajustes solicitados pelo professor (revisão de português, padronização de termos e reestruturação do MkDocs). As correções foram distribuídas individualmente, o cronograma será ajustado para refletir fielmente o processo RAD e as características do produto foram divididas entre os integrantes para a elaboração dos requisitos funcionais e não funcionais, com validação prévia junto à cliente.

---

## 3. Discussões

* **Avaliação da Unidade 1 e Feedback do Professor:**
    * Ajustes gerais de português e padronização da forma de referência à cliente Maria Beatryz, que alternava entre "administrativa", "representante legal", "cliente focal" e "sócia administradora".
    * Modificações estruturais em imagens e seções do site.

* **Reestruturação do MkDocs e Fluxo de Revisão:**
    * Conteúdo unificado em arquivos `index.md` únicos por capítulo; o Pull Request correspondente foi validado por Lucas Zanetti.
    * As próximas modificações devem ser realizadas em branches criadas a partir da `develop`.

* **Cronograma e Aderência ao Processo RAD:**
    * Correção de erro em um gráfico do cronograma.
    * Constatou-se que o cronograma se afastou do modelo contínuo do RAD, mesclando-o indevidamente com modelos sequenciais ou Scrum.
    * Conforme orientação do professor, a prototipação no RAD corresponde ao **frontend funcional** do sistema, e não apenas a protótipos estáticos no Figma; a etapa de prototipação e testes deve ser estendida no cronograma.
    * Correção de inconsistências terminológicas (ex.: citação de React onde o correto é Next.js).

* **Rastreabilidade Visual dos Requisitos:**
    * Lucas Zanetti recomendou a criação de um diagrama visual de rastreabilidade (Miro, Draw.io ou FigJam) que demonstre a árvore de descendência desde o objetivo principal até os requisitos.

* **Dados Mockados e Importação:**
    * Eric Araújo preparou dados sintéticos baseados nas planilhas reais da DUOC, com nomes, CPFs e valores sensíveis alterados (ex.: vale-transporte por localidade, como Águas Lindas), preservando a lógica de negócio.
    * A importação dos dados para o banco relacional será feita via arquivos CSV, evitando sobrecarga para a empresa.

* **Logística da Reunião Presencial:**
    * Participação estimada de três a quatro integrantes, em razão da limitação de espaço físico.

---

## 4. Distribuição das Correções da Unidade 1

| Seção / Issue | Responsável |
| :--- | :--- |
| Cenário Atual e Cliente de Negócio | Paulo Nery |
| Estratégias de Engenharia de Software | Eric Araújo |
| Solução Proposta | Matheus Saraiva Camargo |
| Processo de Engenharia de Requisitos | Gustavo |
| Cronograma | Matheus Ribeiro Szervinsk |

---

## 5. Decisões Tomadas

| # | Decisão | Descrição |
| :---: | :--- | :--- |
| D1 | **Estrutura padrão do MkDocs** | Adoção de um arquivo `index.md` único por capítulo, com múltiplas seções internas, conforme solicitado pelo professor (substituindo a divisão excessiva de subpáginas). |
| D2 | **Distribuição das correções da Unidade 1** | Cada integrante assume individualmente as issues de correção: site, cenário atual, solução proposta, estratégia, processo e cronograma. |
| D3 | **Validação com a cliente** | Reunião online prévia com a cliente até segunda-feira (21/09) e reunião presencial na quinta-feira (24/09) para validação dos requisitos. |
| D4 | **Divisão das características do produto** | As oito características do escopo são distribuídas entre os integrantes (em duplas ou individualmente) para a elaboração dos requisitos funcionais e não funcionais, evitando retrabalho. |
| D5 | **Prazos da Unidade 2** | Primeira entrega da lista de requisitos em 22/09 (até 12h), avaliação por pares em 24/09 e entrega final dos requisitos validados e priorizados em 29/09. |

---

## 6. Gravação e Links

* **Registro:** transcrição automática da sessão (sem gravação publicada no portal).
* **Artefatos relacionados:** [Capítulo 6 — Cronograma](../cronograma/index.md), [Capítulo 8 — Requisitos](../requisitos/index.md) e [Entrega 2 (Ponto de Controle 2)](../entregas/entrega-2.md).

---

## 7. Ações Futuras (Action Items)

| Ação Determinada | Responsável | Objetivo / Descrição | Prazo |
| :--- | :--- | :--- | :---: |
| **Ajustar issues da Unidade 1** | Equipe (O grupo) | Corrigir português e conformidade nas seções atribuídas a cada integrante. | 21/09 |
| **Submeter Pull Requests das correções** | Equipe (O grupo) | Encaminhar as correções via Pull Request para validação de Lucas Zanetti. | 21/09 |
| **Elaborar requisitos** | Equipe (O grupo) | Documentar os requisitos funcionais e não funcionais por módulo e característica do produto, conforme a divisão estabelecida. | 22/09 |
| **Criar diagrama de rastreabilidade** | Equipe (O grupo) | Produzir diagrama visual da descendência dos requisitos a partir do objetivo principal. | 22/09 |
| **Compartilhar planilhas mockadas** | Eric Araújo | Enviar as planilhas de dados sintéticos ao grupo de WhatsApp para apoiar o entendimento das regras de negócio. | Imediato |
| **Agendar reunião online com a cliente** | Eric Araújo | Validar requisitos e esclarecer dúvidas antes da entrega formal. | 21/09 |
| **Organizar reunião presencial com a cliente** | Eric Araújo | Confirmação e validação final dos requisitos. | 24/09 |
| **Ajustar cronograma** | Matheus Ribeiro Szervinsk | Refletir o processo RAD e os ciclos reais de prototipação e testes de frontend. | 21/09 |

---

## 8. Rastreabilidade e Minutagem da Reunião (Log de Discussão)

* `00:00:02` — **Avaliação da Unidade 1:** Apresentação da nota 7 e dos ajustes solicitados pelo professor.
* `00:01:12` — **Reestruturação do MkDocs:** Unificação dos capítulos em arquivos `index.md` únicos.
* `00:02:24` — **Fluxo de branches:** PR validado por Lucas Zanetti; novas alterações a partir da `develop`.
* `00:03:27` — **Transição para a Unidade 2:** Proposta de divisão dos ajustes até segunda-feira e início dos requisitos.
* `00:05:55` — **Cronograma e processo RAD:** Correção de gráfico e identificação do desvio para modelos sequenciais/Scrum.
* `00:07:06` — **Terminologia técnica:** Correção de React para Next.js.
* `00:08:23` — **Reunião com a cliente:** Proposta de reunião online preliminar e encontro presencial na quinta-feira.
* `00:09:53` — **Prazos da Unidade 2:** Entregas em 22/09, 24/09 e 29/09.
* `00:15:30` — **Distribuição das correções:** Atribuição das seções da Unidade 1 por integrante.
* `00:18:24` — **Divisão das características:** Oito características do produto distribuídas entre os integrantes.
* `00:19:30` — **Diagrama de rastreabilidade:** Recomendação de representação visual da árvore de requisitos.
* `00:26:59` — **Logística presencial:** Estimativa de três a quatro participantes.
* `00:29:04` — **Dados mockados:** Anonimização das planilhas reais preservando a lógica de negócio.
* `00:30:44` — **Importação via CSV:** Estratégia de carga dos dados no banco relacional.
* `00:32:16` — **Prototipação no RAD:** Frontend funcional como protótipo e extensão da etapa no cronograma.
* `00:34:57` — **Encerramento:** Recapitulação dos prazos e validação coletiva na segunda-feira à tarde.
