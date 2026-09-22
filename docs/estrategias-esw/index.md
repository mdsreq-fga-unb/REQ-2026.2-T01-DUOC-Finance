# Capítulo 4: Estratégias de Engenharia de Software

## Objetivo do Capítulo

Este capítulo documenta as escolhas de processo de engenharia e metodologia de desenvolvimento adotadas pela equipe Cascata Ágil. Ele detalha a filosofia de trabalho que rege a execução do projeto, harmonizando o rigor necessário para entregas acadêmicas com a flexibilidade operacional exigida por um ambiente corporativo real e dinâmico.

## Conjunto de Artefatos

A fundamentação metodológica está estruturada em:

*   **Estratégia Priorizada:** Detalhamento da abordagem híbrida, modelo de ciclo de vida e processo de desenvolvimento adotado.
*   **Quadro Comparativo de Processos:** Tabela analítica comparando o processo escolhido com processos de desenvolvimento alternativos.
*   **Justificativa Metodológica:** Definição conceitual baseada na natureza do produto, características dos usuários e contexto do projeto.

---

<a id="41-estrategia-priorizada"></a>
## 4.1 Estratégia Priorizada

A partir das informações sobre o cenário atual da DUOC Arquitetura e Engenharia e da solução proposta para o sistema DUOC Finance, esta seção detalha as estratégias de engenharia de software escolhidas para orientar o desenvolvimento do projeto.

### Definição da Estratégia Metodológica

*   **Abordagem de Desenvolvimento de Software:** Híbrida. Esta abordagem combina elementos das metodologias dirigidas por plano e ágeis. No contexto do DUOC Finance, a base arquitetural e as regras matemáticas do domínio financeiro (cálculos de folha, retenção de impostos) exigem estabilidade e previsibilidade (dirigido por plano). Em contrapartida, as interfaces de lançamento de horas de campo (RVT) e relatórios gerenciais demandam experimentação e refinamento empírico de usabilidade (ágil).
*   **Ciclo de vida:** Iterativo e Incremental. O produto de software será construído em ciclos de evolução progressiva. Cada incremento adicionará fatias verticais funcionais, permitindo que a solução integre as regras financeiras complexas de forma modular e gradual.
*   **Processo de Engenharia de Software:** RAD (Rapid Application Development). O RAD é um processo de desenvolvimento que enfatiza o ciclo curto de planejamento de requisitos seguido de intensa modelagem de dados e prototipagem contínua de interfaces.

#### Adaptação do Processo RAD ao Contexto da DUOC

Para atender à necessidade de integração sistêmica e consistência técnica, o processo RAD será estruturado nas seguintes fases, integrando as definições arquiteturais da equipe (Next.js no frontend, FastAPI no backend e PostgreSQL gerenciado via Supabase):

1.  **Modelagem de Negócio e Planejamento de Requisitos:** Levantamento inicial com a cliente (Maria Beatryz) para estabelecer a taxonomia de dados (o que é uma obra, o que é RVT, quais são as verbas da folha). O foco inicial é estabelecer o *schema* do banco de dados (PostgreSQL/Supabase) para garantir a integridade das informações desde o primeiro dia.
2.  **Design do Usuário (Prototipagem e Dados):** Sessões conjuntas e frequentes com os usuários finais. Esta fase ocorre em duas frentes: visual (usabilidade das telas no Next.js para os operários/engenheiros) e funcional/matemática (prototipagem das APIs em FastAPI para validar os algoritmos de cálculo de folha e comissões antes da integração visual).
3.  **Construção Iterativa:** Implementação das funcionalidades em fatias. Em vez de entregar o backend inteiro e depois o frontend, a equipe foca em entregar fluxos completos (ex: de ponta a ponta, salvar um registro de RVT no banco e visualizar no relatório).
4.  **Cutover e Refinamento:** Liberação do módulo funcional para uso e homologação da cliente, iterando com base nos resultados práticos de cálculo.

---

<a id="42-quadro-comparativo-de-processos"></a>
## 4.2 Quadro Comparativo de Processos

O quadro a seguir apresenta uma comparação analítica entre o processo **RAD** e o processo **XP (Extreme Programming)**, avaliando qual se adequa melhor à natureza do produto DUOC Finance.

| Características | RAD (Rapid Application Development) | XP (Extreme Programming) |
| :--- | :--- | :--- |
| **Foco Principal** | Aceleração do ciclo de entrega por meio de modelagem de dados antecipada, prototipagem visual e envolvimento do usuário no design das soluções. | Excelência técnica do código-fonte através de práticas rigorosas de engenharia e mudanças frequentes e incrementais baseadas em histórias de usuário. |
| **Natureza do Produto Ideal** | Sistemas de informação e gestão (como o DUOC Finance) com escopo que pode ser particionado (decomponível) em módulos de interface bem definidos e regras de banco de dados claras. | Sistemas com lógicas de negócio altamente complexas, voláteis ou desconhecidas, onde o maior risco reside na arquitetura de software em constante mutação. |
| **Envolvimento do Usuário** | Exige participação intensa e colaborativa durante a modelagem e o design de interfaces (JAD - *Joint Application Design*), focando em validar o fluxo operacional e relatórios. | Exige um cliente "on-site" em tempo integral, participando da escrita de testes de aceitação e guiando o direcionamento em níveis micro de desenvolvimento. |
| **Validação Funcional e Técnica** | A validação ocorre pela homologação das regras de dados e experimentação funcional dos protótipos em ciclos curtos de revisão. | A validação é centrada em Testes Automatizados (TDD), Desenvolvimento Orientado a Comportamento (BDD) e revisões contínuas de código (*Pair Programming*). |
| **Arquitetura de Software** | Estabelece um alicerce arquitetural (Modelo de Dados/Supabase e base de APIs em FastAPI) cedo no processo, evoluindo a interface de forma rápida sobre essa fundação. | Considera que a arquitetura ideal "emerge" organicamente durante o desenvolvimento contínuo (Design Simples e Refatoração Constante). |

---

<a id="43-justificativa-metodologica"></a>
## 4.3 Justificativa Metodológica

Com base nas características intrínsecas do produto DUOC Finance, na decomposição do escopo e no perfil dos usuários, o **RAD (Rapid Application Development)** foi selecionado como o processo de desenvolvimento ideal pelas seguintes razões:

1.  **Natureza Decomponível do Produto:** O DUOC Finance não é uma plataforma experimental de algoritmo obscuro, mas um sistema de gestão financeira e de departamento pessoal com um fluxo linear e claro (Lançamento de Ponto/RVT -> Apuração de Regras -> Fechamento de Folha/Comissões -> Relatórios). O RAD se adequa em projetos dessa natureza, pois permite particionar esses módulos verticais claramente. A equipe pode, por exemplo, prototipar e validar exaustivamente a interface de lançamento de RVT para os operários da obra, enquanto consolida, em paralelo, a modelagem de dados do motor de cálculos.
2.  **Alta Disponibilidade e Perfil dos Usuários:** O RAD exige e pressupõe um envolvimento intenso e direto do usuário final. A realidade do projeto da DUOC atende plenamente a este requisito, contando com a alta disponibilidade da representante da empresa (Maria Beatryz) para sessões frequentes de validação e refinamento de design. A interação constante elimina a necessidade de documentos prescritivos longos, reduzindo ambiguidades antes da construção das APIs no FastAPI ou telas no Next.js.
3.  **Prototipagem em Duas Vias (Usabilidade e Regras de Negócio):** O gargalo administrativo da DUOC envolve não apenas a experiência do usuário de campo ao lançar horas no sistema, mas, crucialmente, a validade dos cálculos por trás da interface. No RAD, a "prototipagem" será aplicada de forma abrangente: a equipe validará a usabilidade fluida no cliente web (Next.js) para garantir adesão, e criará testes práticos no motor de cálculo (FastAPI backend) para homologar a aderência matemática da apropriação de custos da obra e das regras de folha com a cliente.
4.  **Evolução sobre Arquitetura Consistente:** Embora a solução exija evolução contínua, uma ferramenta financeira exige forte integridade relacional. Diferente do XP, que encoraja uma arquitetura estritamente emergente e evolutiva de baixo para cima, o RAD permite à equipe estabelecer antecipadamente a espinha dorsal dos dados (utilizando banco relacional PostgreSQL no Supabase) para suportar a LGPD e regras financeiras com firmeza, enquanto utiliza ciclos rápidos para adaptar interfaces e fluxos de trabalho gerenciais.

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 05/09/2026 | Definição da abordagem, ciclo de vida, comparativo e justificativa | Eric Araújo | Matheus Ribeiro Szervinsk |
| `1.1` | 07/09/2026 | Padronização metodológica, alinhamento institucional e histórico | Eric Araújo | Matheus Ribeiro Szervinsk |
| `2.0` | 15/09/2026 | Unificação integral dos artefatos 4.1 a 4.3 em página única contínua | Equipe Cascata Ágil | Matheus Ribeiro Szervinsk |
| `2.1` | 20/09/2026 | Refatoração profunda para aderência ao Processo RAD, eliminação de nomenclaturas ágeis de gestão e alinhamento de stack tecnológica | Eric Araújo | |
