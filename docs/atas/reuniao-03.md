# Ata da Reunião 03: Apresentação do Projeto e da Baseline da Unidade 1

* **Projeto:** DUOC Finance
* **Equipe:** Cascata Ágil
* **Data da Sessão:** 07 de setembro de 2026, às 21h34 (GMT-03:00)
* **Natureza:** Síncrona, online, com gravação e transcrição
* **Participantes:** Matheus Ribeiro Szervinsk (condução), Eric Araújo, Matheus Saraiva Camargo, Gustavo, Giovana Ferreira e Paulo Nery
* **Contexto:** Gravação da apresentação formal do Ponto de Controle 1 (disciplina de Requisitos de Software, UnB/FGA, sob supervisão do Prof. George Marsicano)
* **Objetivo da Sessão:** Apresentar o portal de governança e Engenharia de Requisitos desenvolvido para a DUOC Arquitetura e Engenharia e consolidar a baseline de escopo que antecede os ciclos de desenvolvimento da Unidade 2.

---

## 1. Pauta

1. Contexto de negócio e desafios operacionais — *Eric Araújo*.
2. Metodologia de desenvolvimento híbrida — *Matheus Ribeiro Szervinsk*.
3. Solução técnica e arquitetura — *Matheus Saraiva Camargo*.
4. Estratégia de Engenharia de Requisitos — *Gustavo*.
5. Intervenção social e gestão de mudanças — *Giovana Ferreira*.
6. Governança e relacionamento com a cliente — *Paulo Nery*.
7. Requisitos não funcionais, usabilidade e encerramento.

---

## 2. Resumo Executivo

A equipe apresentou o **DUOC Finance** como resposta aos gargalos operacionais da DUOC, detalhando a metodologia híbrida com ciclo de vida iterativo e incremental baseada no Framework RAD, a arquitetura técnica proposta, as quatro fases do processo de Engenharia de Requisitos, a estratégia de gestão de mudanças e o fluxo de governança com a cliente parceira Maria Beatryz Vieira de Sousa. Com a baseline consolidada e homologada, a equipe declarou-se preparada para iniciar os ciclos de desenvolvimento da Unidade 2.

---

## 3. Discussões

* **Contexto de Negócio e Desafios Operacionais:**
    * A DUOC, sediada em Brasília, atua em construção civil e instalações.
    * O uso de métodos descentralizados (planilhas Excel e comunicações informais por WhatsApp e e-mail) gera retrabalho, fragmentação de dados, falta de sigilo sobre informações dos funcionários, dificuldade no fechamento das folhas de ponto e perda de registros financeiros.

* **Metodologia de Desenvolvimento Híbrida:**
    * Ciclo de vida iterativo e incremental com o Framework RAD, compatível com o prazo de um semestre letivo.
    * Projeção dinâmica da solução por meio de protótipos de alta fidelidade e workshops de design com a cliente, conciliando rigor técnico e progresso rápido.

* **Solução Técnica e Arquitetura:**
    * Automação da folha de pagamento e cruzamento dos Relatórios de Viagem Técnica (RVT) com os custos reais, em conformidade com a LGPD.
    * Pilha tecnológica apresentada: **PostgreSQL** (integridade de dados), **Node.js com NestJS** (modularização do backend) e **React** (padronização do frontend).
    * Substituição de estimativas por dados reais, aumentando a confiabilidade financeira da empresa.

* **Estratégia de Engenharia de Requisitos:**
    * Quatro fases: (1) planejamento, com diagnóstico e priorização; (2) criação e validação de protótipos no Figma; (3) desenvolvimento incremental dos módulos; (4) testes de aceitação, finalização da documentação e entrega.

* **Intervenção Social e Gestão de Mudanças:**
    * Centralização dos fluxos de trabalho e melhoria na gestão de horas técnicas e bonificações.
    * Riscos identificados: resistência dos colaboradores à tecnologia e percepção de fiscalização excessiva.

* **Governança e Relacionamento com a Cliente:**
    * Reuniões periódicas e ritos de alinhamento com Maria Beatryz.

* **Requisitos Não Funcionais e Usabilidade:**
    * Classificação baseada na taxonomia URPS+ (Usabilidade, Confiabilidade, Desempenho e Suporte).

---

## 4. Decisões Tomadas

| # | Decisão | Descrição |
| :---: | :--- | :--- |
| D1 | **Técnicas de Engenharia de Requisitos** | Priorização MoSCoW, histórias de usuário com critérios de aceitação em BDD e matrizes de rastreabilidade. |
| D2 | **Validação prévia de mudanças de escopo** | Alterações de escopo passam por validação formal de protótipos no Figma antes da especificação e da codificação, assegurando consenso entre equipe e cliente. |
| D3 | **Posicionamento da ferramenta junto aos colaboradores** | O sistema será comunicado como meio de transparência e garantia de direitos dos trabalhadores, e não como instrumento de fiscalização. |
| D4 | **Interfaces diferenciadas por perfil** | Painéis de alta densidade para a equipe administrativa; alto contraste e suporte offline para a equipe de campo. |
| D5 | **Encerramento da baseline da Unidade 1** | Baseline consolidada e homologada, liberando o início dos ciclos de desenvolvimento da Unidade 2. |

---

## 5. Gravação e Links

* **Gravação:** vídeo oficial da apresentação disponível na página da [Entrega 1 (Ponto de Controle 1)](../entregas/entrega-1.md) ([link direto no YouTube](https://youtu.be/OZ9LhKuI364)).
* **Artefatos relacionados:** [Capítulo 4 — Estratégias de ESW](../estrategias-esw/index.md), [Capítulo 5 — Engenharia de Requisitos](../engenharia-requisitos/index.md) e [Capítulo 7 — Interação com Cliente](../interacao-cliente/index.md).

---

## 6. Ações Futuras (Action Items)

| Ação Determinada | Responsável | Objetivo / Descrição |
| :--- | :--- | :--- |
| **Aprimorar apresentações e documentação** | Equipe (o grupo) | Elevar a qualidade das futuras apresentações e da documentação do projeto. |
| **Planejar treinamento e comunicação da implantação** | Equipe (o grupo) | Realizar treinamentos com os usuários e manter comunicação clara durante a implantação, reduzindo resistências à mudança. |
