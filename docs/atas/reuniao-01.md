# Ata da Reunião 01: Elicitação Inicial, Definição de Escopo e MVP

* **Projeto:** DUOC Finance
* **Equipe:** Cascata Ágil
* **Data da Sessão:** 05 de setembro de 2026
* **Natureza:** Síncrona, com a cliente parceira (elicitação)
* **Participantes:** Equipe Cascata Ágil e cliente parceira Maria Beatryz Vieira de Sousa
* **Objetivo da Sessão:** Elicitação preliminar de necessidades, definição do escopo central do sistema, alinhamento sobre proteção de dados (LGPD) e diretrizes para a entrega do Produto Mínimo Viável (MVP).

---

## 1. Pauta

1. Escopo e objetivo central do sistema.
2. Privacidade de dados e conformidade com a LGPD.
3. Estratégia de MVP e entregas periódicas.
4. Infraestrutura, hospedagem e domínio.
5. Gestão de pessoal e modelos de contratação.
6. Integração financeira e conciliação bancária.
7. Metodologia de planejamento e arquitetura.

---

## 2. Resumo Executivo

A reunião estabeleceu o direcionamento do escopo inicial para o desenvolvimento do **DUOC Finance**, um sistema web integrado de gestão financeira e de departamento pessoal. O principal compromisso é substituir a dependência de planilhas manuais e descentralizadas por uma plataforma estruturada, com metodologia de entregas periódicas. Para viabilizar a entrega no semestre acadêmico, deliberou-se expressamente pela exclusão do módulo de controle de estoque do escopo do MVP.

---

## 3. Discussões

* **Escopo e Objetivo Central:**
    * Transição da gestão descentralizada em planilhas para um sistema web unificado, padronizando os fluxos de dados internos.
    * Foco concentrado na gestão de pessoal (colaboradores CLT e diaristas de campo) e no acompanhamento financeiro de despesas e receitas.

* **Privacidade de Dados e Conformidade com a LGPD:**
    * Devido à sensibilidade de dados pessoais, contratos e salários, os ambientes de desenvolvimento e teste devem operar apenas com dados sintéticos, eliminando o risco de exposição de informações reais de clientes e colaboradores.

* **Estratégia de MVP e Entregas Periódicas:**
    * Incrementos funcionais validados progressivamente pela cliente, mantendo o escopo controlado e flexível para evoluções futuras.

* **Infraestrutura, Hospedagem e Domínio:**
    * A DUOC já possui domínio próprio registrado e licenças de software ativas.
    * A aplicação poderá ser acessada a partir do site institucional já existente da empresa, por meio de redirecionamento.

* **Gestão de Pessoal e Modelos de Contratação:**
    * Necessidade de suporte a dois regimes distintos:
        1. **Colaboradores CLT:** salário mensal, controle de ponto e benefícios.
        2. **Diaristas:** prestadores externos de serviço em campo, com ciclo de apuração e pagamento quinzenal.

* **Integração Financeira e Conciliação Bancária:**
    * Mapeada a alta complexidade do fluxo financeiro atual, que envolve diversas abas de planilhas para o registro de entradas, saídas e pagamentos.

* **Metodologia de Planejamento e Arquitetura:**
    * Condução de uma fase preliminar de planejamento estruturado de requisitos (etapa de Planejamento de Requisitos do RAD), apoiada pela literatura recomendada e por ferramentas de IA para modelagem.
    * Debate sobre conteinerização (Docker) para mitigar divergências entre ambientes de desenvolvimento.

---

## 4. Decisões Tomadas

| # | Decisão | Descrição |
| :---: | :--- | :--- |
| D1 | **Exclusão do módulo de estoque** | Decisão consensual de não incluir o controle de estoque de materiais no MVP, concentrando os esforços no núcleo financeiro e de pessoal. |
| D2 | **Uso exclusivo de dados sintéticos** | Desenvolvimento e testes realizados apenas com dados fictícios (mockados), em conformidade com a LGPD. |
| D3 | **Entregas periódicas (RAD)** | Adoção de entregas incrementais validadas pela cliente ao longo do semestre. |
| D4 | **Hospedagem na Vercel** | A aplicação será hospedada na Vercel, integrada ao site institucional existente da DUOC. |
| D5 | **Documentação como código** | Migração definitiva da documentação de engenharia para o GitHub Pages (MkDocs). |
| D6 | **Conciliação bancária como meta futura** | Integração via Open Banking registrada como evolução futura para automatizar contas a pagar e a receber. |
| D7 | **Postergação da stack tecnológica** | Definição final da stack e da arquitetura detalhada adiada para após a validação do levantamento de requisitos. |

---

## 5. Gravação e Links

* **Gravação:** não publicada no portal.
* **Artefatos relacionados:** [Capítulo 1 — Cenário Atual](../visao-produto/capitulo-1/index.md) e [Capítulo 2 — Solução Proposta](../visao-produto/capitulo-2/index.md).

---

## 6. Ações Futuras (Action Items)

| Ação Determinada | Responsável | Objetivo / Descrição | Status |
| :--- | :--- | :--- | :--- |
| **Gerar dados fictícios (mock)** | Eric Araújo | Gerar planilhas com dados sintéticos simulados para o desenvolvimento do sistema, garantindo conformidade com a LGPD. | Concluído |
| **Revisar e consolidar requisitos** | Eric Araújo | Revisar a lista de necessidades operacionais com a cliente e compartilhar o documento consolidado com a equipe. | Concluído |
| **Migrar objetivos e documentação** | Equipe (o grupo) | Migrar objetivos do projeto e backlog para o GitHub Pages (MkDocs), abandonando documentos externos dispersos. | Concluído |
| **Estudo bibliográfico de requisitos** | Equipe (o grupo) | Leitura dos quatro primeiros capítulos do livro de referência e conversão em requisitos funcionais e não funcionais. | Concluído |

---

## 7. Rastreabilidade e Minutagem da Reunião (Log de Discussão)

* `00:08:08` — **Documentação e Potencial Comercial:** Elaboração estruturada dos requisitos com apoio de IA e discussão sobre a possibilidade futura de comercializar o sistema por meio de contratos de prestação de serviços.
* `00:08:54` — **Problema Central e Domínio Registrado:** Identificação dos gargalos operacionais gerados pelo excesso de planilhas; confirmação de domínio registrado e licenças sob posse da DUOC.
* `00:10:00` — **Hospedagem na Vercel:** Definição da Vercel como infraestrutura de hospedagem, integrando o sistema ao site institucional existente por meio da alteração de rotas de acesso.
* `00:10:40` — **Gestão de Pessoal (CLT e Diaristas):** Levantamento das necessidades de folha de pagamento e separação entre mensalistas CLT e diaristas quinzenais de obras.
* `00:11:44` — **Privacidade e LGPD:** Decisão formal sobre a utilização de base de dados mascarada/sintética durante o desenvolvimento, para proteção de dados sensíveis.
* `00:12:29` — **Complexidade Financeira:** Diagnóstico da fragmentação de entradas, saídas e pagamentos em múltiplas abas de planilhas.
* `00:13:26` — **Automação Bancária:** Prospecção de integrações via Open Banking para automatizar contas a pagar e a receber.
* `00:14:21` — **Exclusão Formal de Estoque:** Deliberação unânime pela retirada do módulo de estoque do escopo, concentrando o foco nas demandas financeiras e de pessoal.
* `00:15:27` — **Processo de Elicitação e GitHub Pages:** Alinhamento contínuo liderado por Eric Araújo junto à cliente e início da migração do backlog para o GitHub Pages.
* `00:16:16` — **Planejamento de Requisitos:** Utilização da base teórica recomendada e de inteligência artificial para estruturação dos requisitos.
* `00:17:10` — **Critério de Estabilidade de Escopo:** Princípio de consolidar e aprovar um planejamento sólido antes de avançar para a implementação técnica.
* `00:17:59` — **Arquitetura e Ambientes:** Debate sobre conteinerização (Docker) para mitigar divergências de ambiente e decisão de postergar a stack final para após a homologação das especificações.
