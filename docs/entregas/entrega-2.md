# Entrega 2 — Ponto de Controle 2 (Unidade 2)

!!! success "Ponto de Controle 2 — Artefatos Consolidados para Submissão"
    * **Disciplina:** Requisitos de Software — Semestre 2026.2 (UnB - FGA)
    * **Equipe:** Cascata Ágil
    * **Projeto:** DUOC Finance (Gestão Financeira, Operacional e RH de Obras)
    * **Cliente Parceira:** Maria Beatryz Vieira de Sousa (Auxiliar Administrativa e Ponto Focal do Cliente na DUOC Arquitetura e Engenharia)
    * **Data de Fechamento do Marco:** 13 de Outubro de 2026 (publicação no GitHub Pages até as 08h; apresentações em 13 e 15/10/2026)
    * **Status da Entrega:** **Artefatos Concluídos — Gravação da Apresentação Pendente**
    * **Fase do Ciclo RAD:** *Fase 2: Design do Usuário (User Design) — Incremento 1*
    * **Gravação Oficial da Apresentação:** *[Link do vídeo a ser inserido após a gravação](#3-video-da-apresentacao-da-entrega-2)*

---

## 1. O Que Foi Solicitado (Requisitos da Entrega 2)

Para o segundo marco avaliativo (**Ponto de Controle 2 / Unidade 2**), o Template Oficial da disciplina (*REQ - 2026.1 - Visão do Produto e Projeto - v8*) exigiu a transformação da visão de produto construída na Unidade 1 em uma especificação de requisitos completa, priorizada e pronta para orientar a construção. As exigências centrais incluíram:

* **Requisitos de Software (Seção 8 do Template):**
    * **8.1 Lista de Requisitos Funcionais:** Funcionalidades específicas que o sistema deve implementar para atender às necessidades do negócio, incluindo integrações, processos e interações do usuário.
    * **8.2 Lista de Requisitos Não Funcionais:** Qualidades e restrições do sistema (desempenho, segurança, usabilidade etc.), classificadas obrigatoriamente pelo modelo **URPS+**.
    * **8.3 Matriz-Síntese de Rastreabilidade:** Correlação entre Objetivos Específicos (contribuição principal e secundária), Características do Produto, Valor de Negócio e requisitos.
* **DoR e DoD (Seção 9 do Template):**
    * **9.1 Definition of Ready (DoR):** Critérios que uma história, caso de uso ou cenário deve atender para estar pronto para o desenvolvimento.
    * **9.2 Definition of Done (DoD):** Critérios que uma funcionalidade deve cumprir para ser considerada completa (requisitos, desenvolvimento, testes, revisão e validação da qualidade).
* **Backlog do Produto (Seção 10 do Template):**
    * **10.1 Backlog Geral:** Lista detalhada e priorizada de todas as funcionalidades e melhorias planejadas para o software.
    * **10.2 Priorização do Backlog Geral e MVP:** Aplicação de um modelo de priorização (MoSCoW ou pontuação por valor de negócio e complexidade) e delimitação do Produto Mínimo Viável.
* **Lições Aprendidas (Seção 11.2 do Template):** Retrospectiva da Unidade 2 com ações de melhoria e registro das dificuldades enfrentadas e de como foram (ou não) superadas.
* **Correções da Unidade 1:** Incorporação do feedback docente da Unidade 1 (revisão de português, padronização de termos, reestruturação do MkDocs e aderência do cronograma ao processo RAD).
* **Validação com a Cliente:** Elicitação aprofundada e validação do escopo priorizado junto à representante da DUOC, com registro formal em ata.
* **Vídeo de Apresentação:** Gravação audiovisual oficial com participação distribuída de todos os integrantes da equipe.
* **Ambiente Docs as Code:** Atualização da documentação técnica versionada no GitHub Pages, comunicando os requisitos de forma efetiva entre a cliente e a equipe de engenharia.

---

## 2. O Que Foi Desenvolvido e Entregue (Matriz de Rastreabilidade de Artefatos)

A equipe **Cascata Ágil** desenvolveu integralmente o conjunto de artefatos solicitados para a Unidade 2, mantendo o formato *Docs as Code* no portal MkDocs com revisão por pares via *pull requests*. A especificação final consolida **36 Requisitos Funcionais (RF01 a RF36)**, **20 Requisitos Não Funcionais (RNF01 a RNF20)**, **31 Regras de Negócio (RN01 a RN31)** e **56 Casos de Teste (CT-M1 a CT-M4)**, organizados em quatro módulos correspondentes aos Objetivos Específicos OE1 a OE4. A tabela abaixo sintetiza os artefatos entregues com acesso direto aos documentos correspondentes:

| Capítulo / Seção | Artefato Gerado | Síntese do Conteúdo Entregue | Link Direto |
| :--- | :--- | :--- | :---: |
| **Capítulo 8** | Modelo Metodológico e Estrutura Modular | Pilares da especificação (RF como ação observável do usuário, RN, RNF em URPS+ e Sommerville) e distribuição dos requisitos nos 4 módulos (OE1 a OE4). | [Acessar Visão Geral](../requisitos/index.md#visao-geral-e-modelo-metodologico) |
| **Capítulo 8** | Matriz Canônica de Papéis (RBAC) | Unificação dos atores em 4 perfis sistêmicos (`TECNICO_CAMPO`, `GESTOR_OBRAS`, `ADMIN_FINANCEIRO`, `ADMIN_SISTEMA`) alinhados aos stakeholders reais da DUOC. | [Acessar RBAC](../requisitos/index.md#atores-do-sistema-e-matriz-canonica-de-papeis-rbac) |
| **Capítulo 8** | Diagramas de Rastreabilidade | Pirâmide de Abstração, Mapeamento de Necessidades do Cliente (dores do Ishikawa e Rich Picture) e Grafo de Interdependência dos requisitos. | [Acessar Diagramas](../requisitos/index.md#rastreabilidade-estrategica-e-diagramas-visuais) |
| **Capítulo 8 (8.1 e 8.2)** | Especificação Modular dos Requisitos | RFs com critérios de aceitação em texto corrido, RNs, RNFs com critérios mensuráveis e matriz de rastreabilidade por módulo, em abas interativas. | [Acessar Especificação](../requisitos/index.md#especificacao-modular-dos-requisitos) |
| **Capítulo 8** | Conformidade Jurídica (CLT e LGPD) | Fundamentação do Art. 11 da CLT (retenção defensiva), Art. 16, I e II da LGPD (exceção à eliminação) e distinção entre dados confidenciais e sensíveis. | [Acessar Conformidade](../requisitos/index.md#conformidade-juridica-clt-lgpd) |
| **Capítulo 8 (8.3)** | Matriz-Síntese Geral de Rastreabilidade | Correlação OE principal/secundário × CAR × Valor de Negócio × RF × RNF × CT, conforme a Seção 8.3 do Template Oficial. | [Acessar Matriz-Síntese](../requisitos/index.md#matriz-sintese-geral-de-rastreabilidade) |
| **Capítulo 8 (8.1 e 8.2)** | Catálogo Geral Consolidado | Visão única de RF01 a RF36, RNF01 a RNF20 e RN01 a RN31, com fonte de elicitação, regras associadas e alocação no MVP. | [Acessar Catálogo](../requisitos/index.md#catalogo-geral-consolidado) |
| **Capítulo 8** | Avaliação do Valor de Negócio | Escala de valor 1 a 4 com rubrica de julgamento, critérios qualitativos e quantitativos e rastreabilidade dos gargalos (TR-01 a TR-04). | [Acessar Valor](../requisitos/priorizacao.md#avaliacao-do-valor-de-negocio) |
| **Capítulo 8** | Avaliação do Esforço Técnico | Estimativa por horas de implementação, complexidade técnica e lacuna de capacidade da equipe, com fórmula de consolidação. | [Acessar Esforço](../requisitos/priorizacao.md#avaliacao-do-esforco-tecnico) |
| **Capítulo 8** | Matriz 4 × 4 (Valor × Esforço) | Diagrama cartesiano, fundamentação matemática das coordenadas e análise estratégica dos quadrantes Q1 a Q4. | [Acessar Matriz 4 × 4](../requisitos/priorizacao.md#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico) |
| **Capítulo 8** | Definição do MVP | Linha de corte aplicada aos 36 RFs, com 27 no MVP (75,0%) e 9 no backlog evolutivo (25,0%), tratamento de itens de alto valor e alto esforço e 18 de 20 RNFs no MVP. | [Acessar MVP](../requisitos/priorizacao.md#definicao-dos-requisitos-funcionais-do-mvp) |
| **Capítulo 8** | Validação do MVP com a Cliente | Ficha técnica da sessão de 24/09/2026 e quadro de deliberações (inclusão do RF11, rebaixamento do RF21, postergação de RF16, RF20 e RNF01). | [Acessar Validação](../requisitos/priorizacao.md#evidencia-e-registro-da-validacao-do-mvp-com-o-cliente) |
| **Capítulo 8** | Feedback da Avaliação em Pares | Deliberação dos 18 apontamentos da equipe Guerreiros do Backlog (2 ciclos) e matriz rastreável "Antes vs. Depois" dos requisitos. | [Acessar Feedback](../requisitos/feedback.md) |
| **Capítulo 9** | Definition of Ready (DoR) | Checklist operacional de entrada (escopo, INVEST, critérios verificáveis, RNFs, base visual e validação sociotécnica) e perguntas de refinamento. | [Acessar DoR](../dor-dod/index.md#definition-of-ready-dor) |
| **Capítulo 9** | Definition of Done (DoD) | Checklist operacional de conclusão (incremento funcional, testes, RNFs, Docs as Code, homologação) e registro mínimo de evidências. | [Acessar DoD](../dor-dod/index.md#definition-of-done-dod) |
| **Capítulo 10** | Backlog Geral | Hierarquia de 4 Temas (OE1 a OE4), 10 Épicos (CARs) e 36 Histórias de Usuário derivadas 1:1 dos RFs, com vínculo aos RNFs específicos e transversais. | [Acessar Backlog Geral](../backlog/index.md#backlog-geral) |
| **Capítulo 10** | Priorização do Backlog e MVP | Indicadores de valor, complexidade e esforço, quadrantes Q1 a Q4, prioridade sugerida e composição do MVP e do backlog evolutivo. | [Acessar Priorização](../backlog/index.md#priorizacao-do-backlog-e-linha-de-corte-do-mvp) |
| **Atas** | Reuniões da Unidade 2 | **Reunião 04** (Retrospectiva da U1 e Planejamento da U2) e **Reunião 05** (Priorização, Matriz 4 × 4 e Alinhamento do MVP). | [Acessar Atas](../atas/index.md) |
| **Capítulo 11** | Lições Aprendidas (Unidade 2) | Pontos fortes, gargalos e lições práticas da Unidade 2, com ações de melhoria, responsáveis, prazos e critérios de avaliação. | [Acessar Lições](../licoes-aprendidas/index.md#marco-avaliativo-2-unidade-2-elicitacao-aprofundada-furps-e-gestao-de-backlog) |

---

## 3. Vídeo da Apresentação da Entrega 2

A apresentação formal do Ponto de Controle 2 foi gravada em vídeo pela equipe **Cascata Ágil**, com participação distribuída de todos os integrantes, contemplando a especificação modular dos requisitos, a rastreabilidade, a priorização e definição do MVP, os acordos de DoR/DoD, o backlog do produto e a retrospectiva da Unidade 2.

### Gravação Oficial da Apresentação

<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: 8px; border: 1px solid var(--duoc-gold, #DAA520); margin: 1.5rem 0; box-shadow: 0 4px 20px rgba(0,0,0,0.4);">
  <iframe 
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: 0;" 
    src="https://www.youtube-nocookie.com/embed/JF_cYRJM7vk" 
    title="Vídeo de Apresentação — Entrega 2 (Unidade 2) — Equipe Cascata Ágil" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
  </iframe>
</div>

> Caso o player incorporado acima apresente restrições de rede ou dispositivo, utilize o acesso direto:
> **[Assistir à Apresentação da Entrega 2 no YouTube (Link Direto: youtu.be/JF_cYRJM7vk)](https://youtu.be/JF_cYRJM7vk)**

### Distribuição dos Temas e Responsabilidades de Apresentação por Integrante

A distribuição dos tópicos da apresentação audiovisual acompanha as frentes de trabalho assumidas por cada integrante na Unidade 2, conforme registrado nos históricos de versão dos artefatos:

| Integrante | Matrícula | Papel no Projeto | Contribuição Principal na Unidade 2 | Tópico Abordado na Apresentação |
| :--- | :---: | :--- | :--- | :--- |
| **Eric Araújo** | 200064053 | Product Owner (PO) e Engenheiro de Requisitos | Especificação do Módulo 2 (OE2), avaliação de valor de negócio, refatoração da Matriz 4 × 4 e condução da validação do MVP. | Backlog, Priorização e MVP. |
| **Matheus Ribeiro Szervinsk** | 231011749 | Scrum Master (SM), Co-PO e Engenheiro de Requisitos | Unificação e consolidação do Capítulo 8, diagramas de rastreabilidade, matriz RBAC, conformidade jurídica e deliberação do feedback em pares. | Contexto, Problema e Objetivos. |
| **Matheus Saraiva Camargo** | 241011475 | Arquiteto de Software e Banco de Dados | Especificação do Módulo 4 (OE4), expansão dos RFs/RNs dos Módulos 1 a 3, Catálogo Geral Consolidado e registro do feedback em pares. | Requisitos Não Funcionais (RNFs) e Rastreabilidade. |
| **Gustavo Bonifácio** | 241025659 | Gestão de Qualidade (QA) e Testes | Especificação do Módulo 1 (OE1), proposta inicial da Matriz 4 × 4 e visualizadores interativos de rastreabilidade. | Requisitos Funcionais (RFs). |
| **Giovana Ferreira** | 231034707 | Engenheira Frontend e Designer UI/UX | Especificação do Módulo 3 (OE3), metodologia de estimativa de esforço técnico e consolidação dos checklists de DoR e DoD. | Acordos de Qualidade (DoR e DoD). |
| **Paulo Nery** | 221008740 | Engenheiro Backend | Classificação dos RNFs no MVP, conversão dos critérios de aceitação para texto corrido (feedback docente) e estruturação do Backlog do Produto (Capítulo 10). | Lições Aprendidas. |

---

## 4. Considerações, Decisões Estruturantes e Autoavaliação

### Principais Decisões Estruturantes Tomadas na Unidade 2

1. **Especificação Modular Orientada aos Objetivos Específicos:** Os requisitos foram decompostos em quatro módulos de negócio (OE1 a OE4), cada um com RFs, RNs, RNFs e matriz de rastreabilidade própria, garantindo rastreabilidade vertical desde os objetivos até os casos de teste.
2. **RF como Ação Observável do Usuário:** Rotinas de cálculo, automatismos e validações deixaram de ser formuladas como RFs isolados e passaram a ser modeladas como Regras de Negócio (RN01 a RN31) que condicionam a ação do usuário, tornando cada RF atômico e verificável.
3. **Critérios de Aceitação em Texto Corrido e Regras Estruturadas:** Atendendo ao feedback docente da apresentação prévia da Unidade 2, o formato BDD (*Dado-Quando-Então*) foi removido da especificação de requisitos e do Product Backlog, sendo os critérios de aceitação consolidados em listas estruturadas de regras de negócio observáveis, verificáveis e orientadas ao valor de negócio.
4. **Dupla Classificação dos RNFs (URPS+ e Sommerville):** Mantida mesmo após questionamento na avaliação em pares, pois URPS+ descreve o atributo de qualidade e Sommerville indica a origem do requisito (produto ou externo/legislativo), preservando a rastreabilidade das exigências legais da CLT e da LGPD.
5. **Priorização por Valor de Negócio × Esforço Técnico:** A técnica MoSCoW foi substituída por uma escala de valor de 1 a 4 avaliada com a cliente, cruzada com o esforço técnico estimado pela equipe na Matriz 4 × 4. A linha de corte do MVP foi formalizada pelo eixo de valor (valor 3 ou 4 no MVP; 1 ou 2 no backlog evolutivo).
6. **Ajustes de Escopo Validados com a Cliente:** Na Reunião 05, o RF11 (indicadores de custos por obra) foi promovido ao MVP, enquanto o estorno de fechamento (RF21), a exportação de auditoria (RF16), a importação de presenças do *Shifton* (RF20) e o modo *offline* (RNF01) foram postergados para a fase evolutiva.
7. **Matriz Canônica de Papéis (RBAC):** Os atores do sistema foram unificados em quatro perfis canônicos, refletindo a estrutura enxuta da DUOC, em que a cliente parceira concentra as rotinas de DP/RH e Finanças sob o papel de Administrador Financeiro.

### Autoavaliação e Retrospectiva da Equipe

A equipe **Cascata Ágil** consolidou na Unidade 2 uma especificação de requisitos extensa, modular e rastreável, sustentada por dois ciclos de avaliação em pares (18 apontamentos deliberados, dos quais 17 aceitos integral ou parcialmente) e pela incorporação do feedback docente. A cliente reconheceu que os requisitos e objetivos definidos representam adequadamente as dores organizacionais da DUOC. Como pontos de atenção, conforme registrado no [Capítulo 11 — Lições Aprendidas](../licoes-aprendidas/index.md#marco-avaliativo-2-unidade-2-elicitacao-aprofundada-furps-e-gestao-de-backlog), a equipe identificou a necessidade de decompor requisitos amplos em ações atômicas desde a primeira versão, de reduzir redundâncias editoriais no GitHub Pages e de ratificar formalmente com a cliente os requisitos incorporados após a Reunião 05. Para a Unidade 3, o foco será a validação das interfaces no Frontend com a cliente, a verificação do DoR do Incremento 1 e o início da construção rápida no ciclo RAD.

## 5. Checklist de Auditoria e Conformidade da Entrega 2

A tabela a seguir consolida o checklist de conformidade dos artefatos da Entrega 2 frente às diretrizes avaliativas da disciplina de Requisitos de Software:

| Item Avaliado | Requisito Metodológico | Status de Atendimento | Evidência Documental |
| :---: | :--- | :---: | :--- |
| **01** | Lista de Requisitos Funcionais com critérios de aceitação verificáveis | :white_check_mark: Atendido | [Capítulo 8 — Especificação Modular](../requisitos/index.md#especificacao-modular-dos-requisitos) |
| **02** | Lista de Requisitos Não Funcionais classificados em URPS+ com critérios mensuráveis | :white_check_mark: Atendido | [Capítulo 8 — Catálogo de RNFs](../requisitos/index.md#catalogo-de-requisitos-nao-funcionais) |
| **03** | Regras de negócio explícitas e rastreáveis aos requisitos | :white_check_mark: Atendido | [Capítulo 8 — Catálogo de RNs](../requisitos/index.md#catalogo-geral-de-regras-de-negocio-rn01-a-rn31) |
| **04** | Matriz-síntese de rastreabilidade (OE × CAR × VN × RF × RNF) | :white_check_mark: Atendido | [Capítulo 8 — Matriz-Síntese](../requisitos/index.md#matriz-sintese-geral-de-rastreabilidade) |
| **05** | Definição dos papéis de usuário e controle de acesso | :white_check_mark: Atendido | [Capítulo 8 — Matriz RBAC](../requisitos/index.md#atores-do-sistema-e-matriz-canonica-de-papeis-rbac) |
| **06** | Revisão por pares dos requisitos com deliberação registrada | :white_check_mark: Atendido | [Feedback da Avaliação em Pares](../requisitos/feedback.md) |
| **07** | Definition of Ready (DoR) com critérios operacionais | :white_check_mark: Atendido | [Definition of Ready (DoR)](../dor-dod/index.md#definition-of-ready-dor) |
| **08** | Definition of Done (DoD) com critérios operacionais | :white_check_mark: Atendido | [Definition of Done (DoD)](../dor-dod/index.md#definition-of-done-dod) |
| **09** | Backlog Geral detalhado em Temas, Épicos e Histórias de Usuário | :white_check_mark: Atendido | [Backlog Geral](../backlog/index.md#backlog-geral) |
| **10** | Priorização do backlog por valor de negócio e complexidade | :white_check_mark: Atendido | [Matriz 4 × 4](../requisitos/priorizacao.md#matriz-4-x-4-valor-de-negocio-x-esforco-tecnico) e [Priorização e MVP](../backlog/index.md#priorizacao-do-backlog-e-linha-de-corte-do-mvp) |
| **11** | Definição do MVP com justificativa dos itens postergados | :white_check_mark: Atendido | [Definição do MVP](../requisitos/priorizacao.md#definicao-dos-requisitos-funcionais-do-mvp) |
| **12** | Validação do escopo priorizado com a cliente registrada em ata | :white_check_mark: Atendido | [Validação do MVP](../requisitos/priorizacao.md#evidencia-e-registro-da-validacao-do-mvp-com-o-cliente) e [Ata da Reunião 05](../atas/reuniao-05.md) |
| **13** | Incorporação das correções do feedback docente da Unidade 1 | :white_check_mark: Atendido | [Ata da Reunião 04](../atas/reuniao-04.md) |
| **14** | Retrospectiva da Unidade 2 e lições aprendidas registradas | :white_check_mark: Atendido | [Capítulo 11.2](../licoes-aprendidas/index.md#marco-avaliativo-2-unidade-2-elicitacao-aprofundada-furps-e-gestao-de-backlog) |
| **15** | Gravação em vídeo com participação distribuída de todos os integrantes | :white_check_mark: Atendido | [Seção 3 deste Documento](#3-video-da-apresentacao-da-entrega-2) |
| **16** | Portal Docs as Code estruturado, navegável e versionado | :white_check_mark: Atendido | [Repositório GitHub e GH Pages](https://github.com/mdsreq-fga-unb/REQ-2026.2-T01-DUOC-Finance) |

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `0.1` | 07/09/2026 | Criação da página com alerta de documento em desenvolvimento | Matheus Ribeiro | Eric Araújo |
| `1.0` | 12/10/2026 | Estruturação formal do Ponto de Controle 2 com base no Template Oficial (v8): O Que Foi Solicitado (Seções 8, 9, 10 e 11.2), matriz de rastreabilidade dos artefatos entregues, seção de vídeo com espaço reservado para o link da gravação, distribuição por integrante, decisões estruturantes, autoavaliação e checklist de auditoria e conformidade | Paulo Nery | |
| `1.1` | 13/10/2026 | Atualização de âncoras semânticas da Seção 2 e Checklist da Seção 5 (Priorização, DoR/DoD, Backlog), alinhamento métrico com o escopo consolidado do MVP e incorporação da gravação oficial em vídeo da apresentação da Entrega 2 | Matheus Ribeiro | Eric Araújo | |
| `1.2` | 28/10/2026 | Atualização da descrição da Definição do MVP (36 RFs: 27 no MVP e 9 no backlog evolutivo, sem requisitos complementares) e do Backlog Geral (10 épicos e 36 histórias), em sincronia com os Capítulos 8 e 10. | Paulo Nery | — |
