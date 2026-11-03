# DUOC Finance

## Portal de Governança, Requisitos e Engenharia de Software

Este portal hospeda a documentação técnica e os artefatos de engenharia de requisitos desenvolvidos para a plataforma **DUOC Finance**. O projeto é conduzido pela equipe **Cascata Ágil** no âmbito da disciplina de **Requisitos de Software** da **Universidade de Brasília (UnB - Campus Gama)** durante o semestre letivo de 2026.2.

!!! info "Documentação em Desenvolvimento"
    Este repositório e seu respectivo portal de documentação encontram-se em fase ativa de construção, evolução e refinamento sistemático. Os conteúdos aqui apresentados são atualizados incrementalmente em conformidade com o cronograma das Unidades Acadêmicas (Unidades 1, 2 e 3) e as interações contínuas de validação com o cliente parceiro.

---

## Escopo do Repositório e Frentes de Trabalho

O projeto adota uma abordagem híbrida de engenharia de software e está estruturado em duas frentes complementares:

*   **Hub de Engenharia de Requisitos:** Centralização de todas as atividades do ciclo de vida de requisitos (elicitação, análise sociotécnica, especificação, verificação por pares, validação com o cliente e matrizes de rastreabilidade bidirecional).
*   **Base de Desenvolvimento de Software:** Repositório que comporta o código-fonte da aplicação, arquitetura de banco de dados, fluxos de integração e implantação contínua (CI/CD) e a codificação progressiva do MVP funcional.

---

## Parceria Institucional e Contexto Real

A solução de software foi concebida a partir de um diagnóstico de dores reais vivenciadas no cotidiano operacional da empresa parceira, buscando viabilizar uma transformação organizacional positiva e sustentável.

| Dimensão Organizacional | Detalhamento Institucional |
| :--- | :--- |
| **Cliente Parceiro** | DUOC Arquitetura e Engenharia LTDA (CNPJ: `53.616.784/0001-43`) |
| **Representante Focal** | Maria Beatryz Vieira de Sousa |
| **Atividade Principal** | Serviços multidisciplinares de arquitetura, engenharia estrutural, instalações prediais e gestão de obras. |
| **Escopo do MVP** | Plataforma digital integrada de controle de departamento pessoal e custos de mão de obra. O sistema apoia o cálculo de custo de mão de obra de diaristas, correlaciona relatórios de viagem técnica (RVT) com custos reais de projetos e assegura a conformidade legal com a Lei Geral de Proteção de Dados (LGPD). |
| **Endereço Eletrônico** | [https://www.duoc.eng.br/](https://www.duoc.eng.br/) |

---

## Estrutura de Navegação da Documentação

A documentação do ***DUOC Finance*** está organizada em eixos temáticos integrados, facilitando a consulta contínua, a rastreabilidade bidirecional e a auditoria técnica:

*   **Visão do Produto:**
    *   [Cenário Atual & Diagnóstico](visao-produto/cenario-atual.md): Mapeamento sociotécnico, dores operacionais, Rich Picture, Ishikawa e personas.
    *   [Solução Proposta, OEs & CARs](visao-produto/solucao-proposta.md): Visão de produto, Objetivos Específicos (OE1 a OE4) e Características (CAR-01 a CAR-12).
    *   [Intervenção Social & Cultural](visao-produto/intervencao-social.md): Análise de impacto organizacional e contingenciamento comportamental.
*   **Metodologia & Processo:**
    *   [Estratégias de Engenharia](metodologia/estrategias-esw.md): Escolhas de processo de software, ciclo de vida iterativo e incremental e quadro comparativo.
    *   [Processo de Requisitos](metodologia/engenharia-requisitos.md): Práticas nas seis atividades de ER alinhadas às 4 fases do modelo RAD UI-First.
    *   [Cronograma & Planejamento](metodologia/cronograma.md): Planejamento temporal, linha de eventos e marcos avaliativos.
    *   [Interação com o Cliente](metodologia/interacao-cliente.md): Ritos de validação, alçadas e canais formais com a cliente parceira.
*   **Requisitos de Software (Núcleo do Escopo):**
    *   [Catálogo Integrado de Requisitos](requisitos/index.md): Centralização oficial dos 40 Requisitos Funcionais (RF), 31 Regras de Negócio (RN) e 20 Requisitos Não Funcionais (RNF) com busca instantânea e filtros.
    *   [Priorização & Matriz 4×4](requisitos/priorizacao.md): Metodologia quantitativa Valor × Esforço e delimitação analítica do MVP.
    *   [Rastreabilidade & Matrizes](requisitos/rastreabilidade.md): Pirâmide de Abstração, diagramas visuais e matriz-síntese de rastreabilidade.
    *   [Conformidade Jurídica & Governança](requisitos/governanca-conformidade.md): Fundamentação do Art. 11 da CLT, Arts. 16 e 18 da LGPD, modelo RBAC e trilha imutável.
    *   [Avaliação por Pares & Feedback](requisitos/feedback.md): Registros de inspeções e melhorias incorporadas.
*   **Planejamento da Entrega & MVP:**
    *   [Critérios de Aceitação (DoR & DoD)](mvp/dor-dod.md): Acordos de trabalho para definição de pronto para desenvolvimento e pronto para entrega.
    *   [Backlog do Produto & Linha de Corte](mvp/backlog.md): Decomposição em Épicos, Histórias de Usuário e alocação das entregas.
*   **Histórico & Governança:**
    *   [Painel Geral de Atas](governanca/atas/index.md): Registro das reuniões formais de alinhamento e validação.
    *   [Painel Geral de Entregas](entregas/index.md): Acompanhamento dos Pontos de Controle (PC1 a PC4).
    *   [Lições Aprendidas](governanca/licoes-aprendidas.md): Retrospectivas consolidadas e planos de melhoria contínua.
    *   [Referências Bibliográficas](governanca/referencias.md): Normas ABNT e IEEE e bibliografia acadêmica.

---

## Equipe de Engenharia (Cascata Ágil)

Os integrantes da equipe dividem suas responsabilidades operacionais e de governança para assegurar a consistência técnica dos artefatos e o cumprimento das entregas do MVP:

| Integrante | Matrícula | Atribuição Principal no Projeto | Canal de Contato |
| :--- | :---: | :--- | :---: |
| **Eric Araújo** | 200064053 | Product Owner (PO) e Engenheiro de Requisitos, Interface Estratégica e Visão de Produto | [@EricAraujoBsB](https://github.com/EricAraujoBsB) |
| **Matheus Ribeiro Szervinsk** | 231011749 | Scrum Master (SM), Co-PO e Engenheiro de Requisitos, Facilitação e Modelagem | [@szervinsk](https://github.com/szervinsk) |
| **Matheus Saraiva Camargo** | 241011475 | Arquiteto de Software, Modelagem de Banco de Dados Relacional e Infraestrutura | [@Matheus-S-Camargo](https://github.com/Matheus-S-Camargo) |
| **Gustavo** | 241025659 | Gestão de Qualidade (QA), Automação de Testes e Governança DoR/DoD | [@Gustavo2703](https://github.com/Gustavo2703) |
| **Giovana Ferreira** | 231034707 | Interface Humano-Computador (IHC), Design UI/UX e Frontend React | [@gih7915](https://github.com/gih7915) |
| **Paulo Nery** | 221008740 | Engenheiro Backend, APIs RESTful e Motor de Regras Financeiras | [@Pnery2004](https://github.com/Pnery2004) |


---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 05/09/2026 | Criação da página inicial do portal de governança e documentação | Matheus Ribeiro Szervinsk | Matheus Ribeiro Szervinsk |
| `1.1` | 07/09/2026 | Atualização da estrutura com capítulos 8 a 10 e padronização dos integrantes | Matheus Ribeiro Szervinsk | Matheus Ribeiro Szervinsk |
| `1.2` | 07/09/2026 | Alinhamento do portal com a estratégia metodológica RAD | Matheus Ribeiro Szervinsk | Matheus Ribeiro Szervinsk |
| `1.3` | 07/09/2026 | Inclusão do papel de Engenheiro de Requisitos para Eric e Matheus | Matheus Ribeiro Szervinsk | Matheus Ribeiro Szervinsk |