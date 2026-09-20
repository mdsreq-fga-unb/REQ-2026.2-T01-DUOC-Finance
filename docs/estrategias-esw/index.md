# Capítulo 4: Estratégias de Engenharia de Software

## Objetivo do Capítulo

Este capítulo documenta as escolhas de processo de engenharia e metodologia de desenvolvimento adotadas pela equipe Cascata Ágil. Ele detalha a filosofia de trabalho que rege a execução do projeto, harmonizando o rigor necessário para entregas acadêmicas com a flexibilidade operacional exigida por um ambiente corporativo real e dinâmico.

## Conjunto de Artefatos

A fundamentação metodológica está estruturada em:

*   **Estratégia Priorizada:** Detalhamento da abordagem híbrida, modelo de ciclo de vida e processo organizacional adotado.
*   **Quadro Comparativo de Processos:** Tabela analítica comparando o processo escolhido com modelos de desenvolvimento alternativos de mercado.
*   **Justificativa Metodológica:** Definição conceitual baseada no framework de tomada de decisão contextual ("Mixer Board").

---

<a id="41-estrategia-priorizada"></a>
## 4.1 Estratégia Priorizada

A partir das informações sobre o cenário atual da DUOC Arquitetura e Engenharia e da solução proposta para o sistema DUOC Finance, esta seção detalha as estratégias de engenharia de software escolhidas para orientar o desenvolvimento do projeto.

### Definição da Estratégia Metodológica

*   **Abordagem de Desenvolvimento de Software:** Híbrida. Esta abordagem combina elementos das metodologias dirigidas por plano e ágeis, reconhecendo a necessidade de equilibrar planejamento e adaptabilidade. No contexto do DUOC Finance, componentes críticos que exigem governança e conformidade com a LGPD (como cálculos financeiros e dados de DP) demandam um planejamento mais estruturado, enquanto a interface e a experiência do usuário requerem flexibilidade e validação contínua.
*   **Ciclo de vida:** Iterativo e Incremental. O produto de software será construído progressivamente, em ciclos sucessivos, onde cada iteração adiciona novas funcionalidades (incremento) e permite o refinamento do trabalho baseado no aprendizado e feedback do cliente.
*   **Processo de Engenharia de Software:** RAD (Rapid Application Development). O RAD é uma metodologia que enfatiza a prototipagem rápida e iterativa em detrimento do planejamento extensivo, visando acelerar o desenvolvimento e obter feedback precoce dos usuários.

---

<a id="42-quadro-comparativo-de-processos"></a>
## 4.2 Quadro Comparativo de Processos

O quadro a seguir apresenta uma comparação detalhada entre o processo **RAD** e o framework **ScrumXP**, avaliando qual se adequa melhor ao contexto do desenvolvimento do produto DUOC Finance.

| Características | RAD (Rapid Application Development) | ScrumXP |
| :--- | :--- | :--- |
| **Abordagem Geral** | Foco na prototipagem rápida e iterativa para acelerar o desenvolvimento e obter feedback precoce dos usuários. | Foco em entregas incrementais rápidas (sprints), unindo o gerenciamento do Scrum com a excelência técnica do XP. |
| **Estrutura de Processos** | Dividido em 4 fases principais: Planejamento de Requisitos, Design do Usuário, Construção e Cutover (implementação final). | Estruturado em fases de planejamento de release, planejamento da sprint, execução, revisão e retrospectiva. |
| **Envolvimento e Colaboração com Cliente** | Participação intensa e ativa dos usuários, especialmente na fase de Design do Usuário (workshops), para co-criar e validar protótipos funcionais. | Envolvimento constante, porém concentrado em interações formais ao final de cada sprint (revisão) para coleta de feedback. |
| **Flexibilidade de Requisitos** | Requisitos de alto nível são definidos no início, mas os detalhes evoluem dinamicamente durante a interação e avaliação dos protótipos. | Alta flexibilidade, com os requisitos (User Stories) sendo continuamente priorizados, detalhados e ajustados no backlog a cada ciclo. |
| **Práticas de Desenvolvimento / Qualidade Técnica** | Utiliza ciclos curtos de prototipagem-revisão-refinamento. Depende muitas vezes de ferramentas de desenvolvimento rápido para validar conceitos visualmente. | Alta ênfase em práticas técnicas de engenharia de software (TDD, integração contínua, pair programming) para garantir código limpo e qualidade estrutural. |
| **Documentação** | Mínima e focada no essencial. A documentação concentra-se no design de interface, fluxos de dados e regras, servindo o protótipo como a principal especificação. | Mínima, centrada em user stories, critérios de aceitação detalhados (DoR/DoD) e foco prioritário no software funcional. |
| **Adaptação ao Projeto** | Ideal para prazos curtos, onde a usabilidade é crítica e requisitos são mais fáceis de visualizar na prática do que de articular em documentos longos. | Ideal para equipes com alta maturidade técnica que necessitam adaptar o produto frequentemente com base em feedbacks curtos e constantes. |

---

<a id="43-justificativa-metodologica"></a>
## 4.3 Justificativa Metodológica

Com base nas características e desafios do projeto da DUOC Arquitetura e Engenharia, o **RAD (Rapid Application Development)** foi escolhido como o processo mais adequado pelas seguintes razões:

1.  **Prazo Restrito e Foco no MVP:** O projeto possui uma restrição severa de tempo, exigindo a entrega de um Produto Mínimo Viável (MVP) funcional de DP e Gestão Financeira dentro de um único semestre letivo acadêmico. O RAD é reconhecido por ser particularmente eficaz para projetos com prazos curtos onde a velocidade de entrega e a validação do conceito são prioritárias. 
2.  **Validação Visual para Diferentes Níveis de Letramento Tecnológico:** O sistema DUOC Finance precisará ser utilizado por diferentes perfis humanos, abrangendo desde engenheiros focados em análise de dados até operários de obra que realizarão o registro de horas (RVT). O RAD ataca exatamente essa dor ao focar na "Prototipagem Evolutiva", permitindo que interfaces sejam testadas e adaptadas precocemente junto aos usuários, garantindo que a usabilidade atenda a essas diferentes realidades antes da construção final.
3.  **Abordagem Híbrida e Requisitos de Governança:** O projeto exige o cumprimento estrito de normas contratuais e da LGPD, além de cálculos financeiros e previdenciários complexos. A adoção do modelo híbrido aliada ao RAD permite uma fase inicial de "Planejamento de Requisitos" para fixar as bases arquiteturais e de conformidade legal, seguida de uma fase de "Design do Usuário" altamente colaborativa para refinar a usabilidade e a experiência de uso das interfaces.
4.  **Por que não o ScrumXP?** Embora o ScrumXP seja um framework consagrado para desenvolvimento ágil, sua dinâmica padrão depende de uma cadência rígida de cerimônias de sprint e sobrecarga administrativa de gestão de cerimônias que pode dispersar o foco em um projeto com prazo restrito a um semestre letivo. No contexto do DUOC Finance, a prioridade máxima é a validação visual ágil e a convergência imediata com a cliente parceira (Maria Beatryz) por meio de sessões de *User Design* e Prototipagem Evolutiva. O RAD foi priorizado porque direciona a energia da equipe diretamente para a co-criação de telas navegáveis e para a construção acelerada dos módulos de software, proporcionando ciclos de feedback mais curtos e tangíveis entre o desenho das interfaces e a homologação funcional do MVP.

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 05/09/2026 | Definição da abordagem, ciclo de vida, comparativo e justificativa | Eric Araújo | Matheus Ribeiro Szervinsk |
| `1.1` | 07/09/2026 | Padronização metodológica, alinhamento institucional e histórico | Eric Araújo | Matheus Ribeiro Szervinsk |
| `2.0` | 15/09/2026 | Unificação integral dos artefatos 4.1 a 4.3 em página única contínua | Equipe Cascata Ágil | Matheus Ribeiro Szervinsk |