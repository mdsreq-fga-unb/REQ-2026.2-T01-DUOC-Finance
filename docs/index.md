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
| **Escopo do MVP** | Plataforma digital integrada de controle de departamento pessoal e custos de mão de obra. O sistema automatiza a folha de pagamento, correlaciona relatórios de viagem técnica (RVT) com custos reais de projetos e assegura a conformidade legal com a Lei Geral de Proteção de Dados (LGPD). |
| **Endereço Eletrônico** | [https://www.duoc.eng.br/](https://www.duoc.eng.br/) |

---

## Estrutura de Navegação da Documentação

Para facilitar a auditoria e leitura dos artefatos pelo corpo docente e pelas partes interessadas, a documentação está organizada de forma modular de acordo com as seguintes seções estruturadas:

*   **Capítulo 1 - Cenário Atual:** Diagnóstico das dores operacionais, identificação institucional, diagramas analíticos (Rich Picture e Ishikawa), mapeamento de stakeholders e análise de perfis de usabilidade.
*   **Capítulo 2 - Solução Proposta:** Visão do produto, objetivos de negócio, tabela de características (CARs), justificativa de tecnologias e arquitetura, pesquisa de concorrentes, viabilidade e benefícios esperados.
*   **Capítulo 3 - Intervenção Social:** Análise sociotécnica das transformações corporativas planejadas e contingenciamento de efeitos colaterais comportamentais no ambiente de trabalho.
*   **Capítulo 4 - Estratégias de ESW:** Decisões metodológicas de processo de software, ciclo de vida iterativo e incremental e quadro comparativo de processos.
*   **Capítulo 5 - Engenharia de Requisitos:** Práticas e técnicas adotadas nas seis atividades de ER e mapeamento cronológico integrado às 4 fases do processo RAD.
*   **Capítulo 6 - Cronograma:** Planejamento temporal preliminar e divisão dos marcos de entregas da disciplina.
*   **Capítulo 7 - Interação com Cliente:** Atribuição de papéis da equipe de engenharia, planos e canais de comunicação interna/externa e ritos de validação sociotécnica.
*   **Capítulo 8 - Requisitos de Software:** Especificação de requisitos funcionais (RF) e não funcionais (RNF) sob o modelo FURPS+ *(a ser entregue na Unidade 2)*.
*   **Capítulo 9 - DoR e DoD:** Acordos de trabalho para definição de pronto para desenvolvimento e pronto para entrega *(a ser entregue na Unidade 2)*.
*   **Capítulo 10 - Backlog do Produto:** Backlog geral de histórias de usuário e priorização de MVP via MoSCoW *(a ser entregue na Unidade 2)*.
*   **Capítulo 11 - Lições Aprendidas:** Retrospectivas consolidadas de processo e aprendizados práticos adquiridos pela equipe ao fim de cada ciclo avaliativo.
*   **Capítulo 12 - Referências:** Base teórica e bibliografia de suporte técnico e metodológico sob as normas da ABNT e IEEE.

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
| **Carlos Gabriel** | 242015450 | Interface Humano-Computador (IHC), Design UI/UX e Frontend React (Mobile-First) | [@cgbriel28](https://github.com/cgbriel28) |
| **Paulo Nery** | 221008740 | Engenheiro Backend, APIs RESTful e Motor de Regras Financeiras | [@Pnery2004](https://github.com/Pnery2004) |


---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 05/09/2026 | Criação da página inicial do portal de governança e documentação | Matheus Ribeiro Szervinsk | Matheus Ribeiro Szervinsk |
| `1.1` | 07/09/2026 | Atualização da estrutura com capítulos 8 a 10 e padronização dos integrantes | Matheus Ribeiro Szervinsk | Matheus Ribeiro Szervinsk |
| `1.2` | 07/09/2026 | Alinhamento do portal com a estratégia metodológica RAD | Matheus Ribeiro Szervinsk | Matheus Ribeiro Szervinsk |
| `1.3` | 07/09/2026 | Inclusão do papel de Engenheiro de Requisitos para Eric e Matheus | Matheus Ribeiro Szervinsk | Matheus Ribeiro Szervinsk |