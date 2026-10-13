# Capítulo 9: Definition of Ready (DoR) e Definition of Done (DoD)

Este capítulo formaliza os acordos de trabalho da equipe **Cascata Ágil** para selecionar itens aptos à construção e verificar quando um incremento do **DUOC Finance** está concluído. Os critérios consideram o contexto sociotécnico da DUOC, a participação da cliente parceira **Maria Beatryz** e o processo **RAD UI-First**, constituindo o artefato transversal de Governança e Qualidade da **Unidade 2** em atendimento à Seção 9 do Template Oficial da disciplina (**Definition of Ready — DoR** e **Definition of Done — DoD**).

<a id="91-definition-of-ready-dor"></a>
<a id="definition-of-ready-dor"></a>
## Definition of Ready (DoR)

O **DoR** é o portão de entrada para a construção de um item do backlog. Um item só pode avançar para a implementação de lógica de negócio e persistência quando **todos** os critérios abaixo forem atendidos e houver evidência registrada. A preparação e a prototipagem visual fazem parte do próprio ciclo: o DoR não substitui a validação UI-First, nem autoriza antecipar a construção de backend ou banco de dados.

### Checklist operacional de entrada

| Verificação | Pergunta de controle | Evidência esperada |
| :--- | :--- | :--- |
| **Problema e escopo claros** | Está claro quem precisa da funcionalidade, qual problema operacional ela resolve, qual resultado é esperado e o que está fora do escopo? As pessoas envolvidas usam os termos de negócio com o mesmo significado? | História e descrição da Issue revisadas; termos e decisões relevantes registrados. |
| **Sem ambiguidades impeditivas** | Duas pessoas da equipe interpretariam da mesma forma os dados de entrada, as regras e o resultado esperado? Dúvidas que mudariam a solução foram resolvidas com a cliente ou registradas como decisão explícita? | Regras de negócio identificadas e decisões ou dependências documentadas. |
| **Tamanho adequado ao incremento** | O item entrega valor observável e cabe em um ciclo/incremento RAD planejado? Se não, foi dividido em fatias menores, cada uma verificável e priorizável? | Escopo e prioridade do item associados ao incremento no backlog/GitHub Projects. |
| **História canônica e INVEST** | A história segue “Como [papel], quero [ação], para [benefício]”? Ela é **Independente**, **Negociável**, **Valiosa**, **Estimável**, **Pequena** e **Testável**? | História registrada no backlog em formato INVEST, vinculada aos requisitos aplicáveis. |
| **Critérios de aceitação verificáveis** | Cada critério descreve um resultado observável e pode ser aprovado ou reprovado sem interpretação subjetiva? Os cenários relevantes incluem sucesso, rejeição e limites aplicáveis? | Critérios documentados em linguagem clara, vinculados à história e aos casos de teste quando definidos. |
| **Regras de negócio explícitas** | Cálculos, permissões, estados, exceções, dados necessários e restrições estão identificados? Há regra financeira ou de acesso que precise de confirmação? | Regras de negócio referenciadas ou descritas no requisito; dúvidas bloqueadoras resolvidas. |
| **Qualidade e dependências consideradas** | Foram identificados os RNFs aplicáveis, dependências de dados/API, integrações, restrições legais e riscos que afetam o item? Seus critérios mensuráveis estão claros? | RNFs e dependências vinculados; critérios quantitativos referenciados no Capítulo 8, sem criar limites novos para o item. |
| **Base visual preparada** | A interface tem referência visual no Figma (identidade, tokens ou wireframe pertinente) e o fluxo completo foi estabelecido no Frontend, navegável e com dados sintéticos/mockados? | Link para Figma e preview do protótipo no Frontend associados à Issue. |
| **Validação sociotécnica concluída** | Maria Beatryz conseguiu percorrer o fluxo e validar campos, linguagem, sequência e resultado visual antes da implementação da lógica e da persistência? Os ajustes solicitados foram incorporados ou acordados? | Aprovação ou ressalvas registradas em ata/sessão; link, data e pendências associadas ao item. |

**Decisão do portão:** marque o item como **Pronto (DoR)** somente quando todas as respostas forem afirmativas e as evidências estiverem acessíveis à equipe. Se algum critério não for atendido, o item permanece em **Refinamento**; registre a dúvida, dependência ou ação pendente na Issue. A aprovação da tela não equivale à aprovação da lógica de negócio, que será verificada no DoD.

### Perguntas rápidas para refinamento

- Qual papel de usuário executa a ação e qual benefício operacional obtém?
- Que dados entram, que resultado deve ser apresentado e quais regras condicionam o fluxo?
- Como demonstrar objetivamente que cada critério de aceitação foi satisfeito?
- O item é pequeno o bastante para ser construído, verificado e demonstrado dentro do incremento planejado?
- A cliente validou o fluxo real no Frontend com mocks, e ficou registrado o que foi aprovado ou precisa mudar?

<a id="92-definition-of-done-dod"></a>
<a id="definition-of-done-dod"></a>
## Definition of Done (DoD)

O **DoD** é o portão de saída: confirma que a história ou incremento está funcional, integrado, verificado e apto à homologação/entrega. A conclusão não é determinada apenas por código implementado; exige atendimento dos critérios de aceitação, qualidade aplicável, documentação e validação sociotécnica.

### Checklist operacional de conclusão

| Dimensão | Critério de conclusão | Evidência esperada |
| :--- | :--- | :--- |
| **Incremento funcional** | O fluxo da história está operável de ponta a ponta no ambiente definido para demonstração. A interface validada no DoR está integrada à lógica e à persistência previstas para o item; quando aplicável, está disponível em *Staging*. | Demonstração ou link do ambiente; PR/Issue identifica o incremento e seus componentes. |
| **Critérios de aceitação** | **100%** dos critérios aprovados. Nenhum critério permanece sem execução, resultado ou justificativa acordada. | Resultado da verificação de cada critério/caso de teste ligado à Issue ou PR. |
| **Código e revisão** | Código segue os padrões do repositório e a stack vigente documentada no projeto; tipagem estrita e lint/verificações estáticas aplicáveis passam. Alterações foram revisadas por pares e integradas pelo fluxo de PR definido. | Checks do CI, lint e verificação de tipos aprovados; PR aprovado e vinculado. |
| **Testes automatizados** | Testes automatizados pertinentes à alteração foram executados e aprovados. Regras de domínio e cálculos têm cobertura de testes apropriada; integrações e regressões afetadas foram verificadas. | Relatório de execução do CI e links/saídas dos testes. |
| **Requisitos não funcionais** | Todos os RNFs aplicáveis ao escopo foram verificados contra os critérios mensuráveis especificados. Para valores monetários, aplica-se a exatidão exigida pelo requisito pertinente; para acesso, RBAC e autorização são testados nos perfis/rotas abrangidos; desempenho segue os limites definidos para a funcionalidade. | Resultado de testes ou inspeções com referência ao RNF e ao seu critério de aceite no Capítulo 8. |
| **Documentação — Docs as Code** | Documentação afetada foi atualizada no repositório/MkDocs, incluindo orientações operacionais ou técnicas necessárias para compreender e usar o incremento. A compilação local do site termina sem warnings. | Alterações documentais no PR e saída bem-sucedida de `mkdocs build --strict`. |
| **Homologação sociotécnica** | O incremento foi demonstrado à cliente em condições adequadas, com dados sintéticos/anonimizados quando necessário. Maria Beatryz validou o comportamento no contexto de uso; divergências impeditivas foram corrigidas antes da conclusão. | Aceite, resultado da homologação ou ressalvas registrados em ata, Issue ou evidência equivalente. |
| **Rastreabilidade e encerramento** | Requisito, história, critérios de aceitação, testes e PR permanecem vinculados. Pendências não impeditivas, se houver, têm responsável, prioridade e destino acordados; não são declaradas como concluídas por omissão. | Links cruzados no GitHub Projects/Issue/PR e registro explícito de pendências acordadas. |

**Decisão do portão:** marque como **Concluído (DoD)** somente quando todos os critérios aplicáveis forem aprovados e suas evidências estiverem registradas. Falha em critério de aceitação, teste, RNF aplicável, revisão, build documental ou homologação mantém o item em **Verificação** ou **Validação**, conforme o fluxo; registre o defeito e retorne à construção/refinamento necessário. Um RNF não aplicável ao escopo deve ser identificado como tal, não tratado como aprovado sem verificação.

### Registro mínimo de evidências

Para cada item concluído, a Issue ou PR deve permitir localizar:

1. História de usuário e requisitos/RNs/RNFs relacionados;
2. Critérios de aceitação e resultados dos testes correspondentes;
3. Evidência da validação visual do DoR e da homologação do DoD;
4. PR aprovado, verificações automatizadas e estado de integração;
5. Atualização documental pertinente e resultado do build MkDocs.

## Aplicação no processo RAD e rastreabilidade

Os portões se aplicam a cada história/incremento, não apenas aos marcos acadêmicos. No ciclo **UI-First**, primeiro se planeja e refina a história, estabelece-se a interface com base no Figma e prototipa-se no Frontend com mocks; a validação pela cliente satisfaz a etapa visual do DoR. Só então se constrói a lógica e a persistência. Em seguida, o incremento passa por verificação, demonstração/homologação e refinamento do ciclo seguinte.

O acordo complementa as fases e a adaptação do processo **RAD** descritas no [Capítulo 4 — Estratégias de Engenharia de Software](../estrategias-esw/index.md#adaptacao-do-processo-rad-ao-contexto-da-duoc) e o ciclo UI-First, o fluxo `Backlog do Produto → Refinamento → Pronto (DoR) → Em Desenvolvimento → Em Verificação → Em Validação → Concluído (DoD)` e o planejamento por incrementos descritos no [Capítulo 6 — Cronograma](../cronograma/index.md#racional-metodologico-do-cronograma). Os critérios de requisitos, regras de negócio e métricas de qualidade devem ser rastreados à [especificação do Capítulo 8](../requisitos/index.md), e a interação de validação/homologação segue o [processo com a cliente no Capítulo 7](../interacao-cliente/index.md#73-processo-de-validacao-sociotecnica-e-homologacao-com-a-cliente).

Na **Unidade 2 / Incremento 1**, o marco de 15/10/2026 associa telas homologadas pela cliente, DoR, DER e backlog INVEST. O marco acadêmico é um ponto de controle; não substitui o avanço contínuo dos ciclos RAD nem dispensa o DoD de cada incremento.

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 07/09/2026 | Criação e estruturação da página preliminar de acordos DoR e DoD (Unidade 2) | Matheus Ribeiro Szervinsk | Matheus Ribeiro Szervinsk |
| `1.1` | 21/09/2026 | Ajuste do DoR alinhando a estratégia UI-First (base no Figma e designs via Frontend com posterior codificação de lógica) | Matheus Ribeiro Szervinsk | Matheus Ribeiro Szervinsk |
| `1.2` | 11/10/2026 | Consolidação dos checklists DoR/DoD, perguntas de verificação, evidências operacionais e rastreabilidade aos capítulos 4, 6, 7 e 8 | Giovana Ferreira Santos | Pendente de revisão |
| `1.3` | 13/10/2026 | Remoção dos prefixos numéricos das seções (9.1 e 9.2) alinhando a estrutura com os demais capítulos e preservando âncoras para rastreabilidade | Matheus Ribeiro Szervinsk | Eric Araújo |
| `1.4` | 13/10/2026 | Remoção do card de alerta de rastreabilidade acadêmica e integração direta na introdução textual | Matheus Ribeiro Szervinsk | Eric Araújo |

