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
| **Escopo do MVP** | Plataforma digital para os apontamentos de campo (RVT), despesas e reembolsos, fechamento quinzenal de diárias técnicas e comissões contratuais simplificadas e apropriação desses custos a cada contrato de obra, com proteção de dados conforme a LGPD. A folha CLT e os encargos (INSS, FGTS, IRRF, 13º e férias) permanecem no escritório contábil externo da DUOC. O corte consolidado de 31 RFs aguarda validação formal da cliente ([Priorização](requisitos/priorizacao.md#evidencia-e-registro-da-validacao-do-mvp-com-o-cliente)). |
| **Endereço Eletrônico** | [https://www.duoc.eng.br/](https://www.duoc.eng.br/) |

---

## Estrutura de Navegação da Documentação

A documentação está organizada em 7 eixos temáticos correspondentes às seções do portal:

| Seção | Foco e Conteúdo Principal |
| :--- | :--- |
| **[Visão do Produto](visao-produto/cenario-atual.md)** | Diagnóstico do cenário operacional, dores levantadas, rich picture, objetivos (OEs), características (CARs) e análise sociotécnica. |
| **[Metodologia](metodologia/estrategias-esw.md)** | Estratégias de engenharia de software, modelo de processo RAD UI-First, práticas de elicitação e ritos de interação com o cliente. |
| **[Planejamento](metodologia/cronograma.md)** | Cronograma detalhado executado e planejado, marcos de entregas e planejamento metodológico das fases. |
| **[Requisitos](requisitos/index.md)** | Catálogo integrado interativo com 40 RFs, 31 RNs e 20 RNFs, matriz de rastreabilidade bidirecional e governança legal (CLT e LGPD). |
| **[Escopo do MVP](requisitos/priorizacao.md)** | Matriz de priorização Valor × Esforço, delimitação do MVP, critérios de aceitação (DoR & DoD) e avaliações por pares. |
| **[Entregas](entregas/index.md)** | Painel de controle e consolidação dos artefatos entregues nos Pontos de Controle (PC1 a PC4). |
| **[Governança](governanca/atas/index.md)** | Atas formais de reuniões com a cliente parceira, lições aprendidas e referências bibliográficas. |

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
| `1.4` | 15/11/2026 | Reorganização sintética da estrutura de navegação e integração do eixo de Planejamento | Matheus Ribeiro Szervinsk | Matheus Ribeiro Szervinsk |
| `1.5` | 25/11/2026 | Escopo do MVP reescrito sem "controle de departamento pessoal": fechamento quinzenal de diárias técnicas e comissões contratuais simplificadas, folha CLT e encargos no escritório contábil externo (FB-19) e corte de 31 RFs pendente de validação. | Paulo Nery | — |