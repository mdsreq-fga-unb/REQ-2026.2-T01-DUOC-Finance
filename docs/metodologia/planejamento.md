# Planejamento

Este capítulo reúne o racional metodológico, as folgas técnicas, a governança e as fontes de atualização do planejamento do **DUOC Finance**. A execução semana a semana e o calendário estão no capítulo [Cronograma](cronograma.md).

---

## Racional Metodológico do Cronograma

### Desacoplamento entre Período Acadêmico e Ciclos do RAD

Na Engenharia de Requisitos moderna e no modelo **RAD (Rapid Application Development)**, as funcionalidades e regras de negócio do sistema não são impostas prematuramente em cascata, mas emergem e refinam-se através de ciclos iterativos de elicitação, modelagem conceitual, prototipação participativa, construção rápida e validação sociotécnica contínua.

As quatro Unidades letivas da disciplina de Engenharia de Requisitos (Unidades 1, 2, 3 e 4) atuam como **marcos avaliativos externos e restrições de calendário (Pontos de Controle PC1 a PC4)**. O produto DUOC Finance é desenvolvido em **Ciclos RAD Contínuos e Incrementos de Produto**, nos quais cada incremento passa por:

!!! info "Datas oficiais dos Pontos de Controle — Plano de Ensino REQ 2026.2, Turma 01"

    O Plano de Ensino assinado (seção 11, versão de 10/08/2026) apresenta **PC1 em 08 e 10/09; PC2 em 13 e 15/10; PC3 em 17 e 19/11; e PC4 em 01 e 03/12**. Conforme a seção 9.1 do Plano, o conteúdo no GitHub Pages precisa estar finalizado **até o início da aula (08h) do primeiro dia de apresentações**: respectivamente, **08/09, 13/10, 17/11 e 01/12/2026**. O segundo dia é continuação das apresentações, **não uma extensão do prazo de publicação**. O calendário pode ser alterado por comunicação posterior do docente; até confirmação de eventual retificação, este capítulo segue o Plano de Ensino assinado.

    **Datas das unidades acadêmicas não se confundem com os ciclos RAD:** as atividades acadêmicas da Unidade 4 prosseguem até 10/12, embora o corte de entrega do PC4 seja 01/12. Acompanhamento de tarefas, implementação e validações com a cliente mantêm seu próprio calendário e devem ter o estado de execução confirmado no [GitHub Projects](https://github.com/orgs/mdsreq-fga-unb/projects/119/) e nas atas.

1. **Planejamento do Incremento:** Delimitação de escopo, seleção de Histórias de Usuário e alinhamento de restrições;
2. **Design do Usuário e Prototipagem Evolutiva no Frontend (UI-First):** Estabelecimento da identidade visual, tokens e wireframes estruturais essenciais no Figma como guia; construção e estabelecimento dos designs de telas, formulários e componentes diretamente no Frontend (React SPA / Tailwind CSS) operando com dados mockados; e sessões síncronas de validação sociotécnica invertida com Maria Beatryz para homologação de IHC e atendimento formal ao DoR antes de qualquer esforço de infraestrutura de backend ou banco de dados;
3. **Construção Rápida da Lógica e Persistência:** Uma vez estabilizados e validados os designs de interface no Frontend, implementação da **lógica de negócio por trás** (algoritmos do motor financeiro, regras de apuração de diárias, validações contratuais, DDL/migrations no Supabase/PostgreSQL e endpoints de API), acoplando a interface validada aos serviços definitivos com cobertura de testes unitários;
4. **Verificação e Demonstração:** Deploy contínuo em ambiente de *Staging* na Vercel, inspeções estáticas (Fagan) e demonstrações funcionais com a cliente;
5. **Refinamento do Incremento Seguinte:** Coleta estruturada de feedbacks, identificação de atritos de IHC e repriorização contínua do backlog;
6. **Estabilização e Cutover ao Final:** *Code Freeze*, suíte de testes de regressão, Testes de Aceitação de Usuário (UAT) executados com antecedência, **janela dedicada para correção de defeitos pós-UAT**, assinatura do Termo de Aceite Formal, transição operacional com publicação do Manual do Usuário e capacitação.

### Diagrama 1: Macrovisão do Desacoplamento entre Marcos Acadêmicos e Ciclos do RAD

O diagrama a seguir sintetiza visualmente o desacoplamento: as quatro Unidades acadêmicas e seus Pontos de Controle (PC1 a PC4) atuam na camada superior como marcos avaliativos externos fixos. O desenvolvimento do DUOC Finance transcorre na camada inferior em Ciclos RAD e Incrementos autônomos de engenharia de software:

<div class="cronograma-diagram-box" markdown="1">

![Diagrama 1: Macrovisão do Desacoplamento entre Marcos Acadêmicos e Ciclos do RAD](../assets/images/cronograma/diagrama_macrovisao_rad_light.png#only-light){ .img-light-mode }
![Diagrama 1: Macrovisão do Desacoplamento entre Marcos Acadêmicos e Ciclos do RAD](../assets/images/cronograma/diagrama_macrovisao_rad_dark.png#only-dark){ .img-dark-mode }

<div class="cronograma-diagram-caption">
  <span><strong>Figura 1:</strong> Macrovisão do Desacoplamento entre Marcos Acadêmicos e Ciclos RAD (Clique na imagem para ampliar em tela cheia).</span>
</div>

</div>

### Diagrama 2: Microvisão do Ciclo UI-First e Portões de Qualidade (DoR e DoD)

O diagrama a seguir detalha a dinâmica interna de cada Incremento RAD: o design de interface é estabelecido com base no Figma e prototipado diretamente no Frontend com dados mockados; uma vez validado sociotecnicamente pela cliente e atendido o portão DoR, constrói-se a lógica de negócio por trás e a persistência:

<div class="cronograma-diagram-box" markdown="1">

![Diagrama 2: Microvisão do Ciclo UI-First e Portões de Qualidade (DoR e DoD)](../assets/images/cronograma/diagrama_microvisao_dor_dod_light.png#only-light){ .img-light-mode }
![Diagrama 2: Microvisão do Ciclo UI-First e Portões de Qualidade (DoR e DoD)](../assets/images/cronograma/diagrama_microvisao_dor_dod_dark.png#only-dark){ .img-dark-mode }

<div class="cronograma-diagram-caption">
  <span><strong>Figura 2:</strong> Ciclo de Prototipagem UI-First e Portões DoR / DoD (Clique na imagem para ampliar em tela cheia).</span>
</div>

</div>

---

## Gestão de Folgas Técnicas e Riscos Operacionais (Buffers Explícitos)

Para mitigar incertezas inerentes à engenharia de software e garantir estabilidade nas entregas acadêmicas e operacionais, o cronograma incorpora quatro categorias de folga (*buffers* de contingência). Após o replanejamento de 10/11/2026, as folgas foram reajustadas à realidade do Incremento 1, que se estendeu até a Semana 10:

1. **Folga para Mudanças de Requisitos e Regras Financeiras Complexas:** A apuração de diárias de campo, adiantamentos e fechamento de obras envolve regras matemáticas sensíveis. A construção do motor financeiro (CAR-03) ocupa a Semana 12 (20 a 24/11) e conta com uma folga técnica de **1 dia útil (24/11)** para validação de discrepâncias aritméticas em relação às planilhas originais da DUOC. A folga original de 3 dias úteis foi absorvida pelo atraso do Incremento 1 e este é o principal risco do cronograma vigente.
2. **Folga para Indisponibilidade da Cliente:** A rotina de gestão de obras da cliente parceira pode impor imprevistos de agenda. A equipe instituiu um protocolo de contingência: caso uma sessão síncrona não possa ocorrer na data prevista, disponibiliza-se um vídeo navegável explicativo (Loom) e o link da aplicação web em ambiente de preview/staging (com telas e mocks) para validação assíncrona em até 48 horas, além de janela alternativa de reagendamento síncrono, sempre que a data do marco permitir.
3. **Janela Dedicada de Correção de Defeitos pós-UAT (Buffer de 3 Dias):** A sessão formal de Testes de Aceitação de Usuário (UAT) com Maria Beatryz está prevista para **27/11/2026** (a confirmar). Entre o UAT e o Termo de Aceite Formal (30/11), mantém-se uma janela de **três dias corridos (28, 29 e 30/11)** para saneamento de divergências, correção de bugs de interface ou ajustes de fórmulas, garantindo que o aceite formal não seja assinado sobre software com defeitos pendentes.
4. **Margem de Contingência Pré-Banca Final:** O ensaio da apresentação (*dry-run*), a consolidação final dos artefatos no MkDocs e a gravação do vídeo institucional concentram-se em **30/11**, véspera do Ponto de Controle 4 (publicação até 01/12/2026, às 08h). A margem original de dois dias foi reduzida; qualquer atraso no aceite impacta diretamente esta janela.

---

## Dinâmica de Atualização e Governança do Cronograma

O cronograma do DUOC Finance é um **artefato vivo** sujeito a refinamento contínuo. Sua governança respeita as seguintes diretrizes:

1. **Sincronização com o GitHub Projects:** O progresso diário de tarefas é monitorado no quadro kanban do GitHub Projects ([Acessar Projeto #119](https://github.com/orgs/mdsreq-fga-unb/projects/119/)), servindo de fonte de verdade para a atualização deste capítulo.
2. **Revisões de Marco Avaliativo:** Ao final de cada Ponto de Controle, o cronograma é revisado para registrar desvios e propostas de recalibração. **A revisão do planejamento não autoriza alterar retroativamente o material do GitHub Pages após o prazo oficial de avaliação**, sob risco de atraso conforme a seção 9.1 do Plano de Ensino; correções posteriores devem ser identificadas como revisões subsequentes.
3. **Gestão de Riscos Operacionais e Acionamento de Folgas:** Caso ocorram impedimentos técnicos em regras financeiras ou reagendamentos com a cliente, o Product Owner aciona os buffers de contingência pactuados neste capítulo e no [Capítulo 7.3 — Processo de Validação](../metodologia/interacao-cliente.md#73-processo-de-validacao-sociotecnica-e-homologacao-com-a-cliente).
4. **Replanejamento pela Realidade Executada:** Marcos fixados no tempo e já ocorridos são marcados como concluídos; atividades atrasadas são reposicionadas nos incrementos seguintes, preservando os marcos externos (PC1 a PC4). O replanejamento de 10/11/2026 (versão 3.0) registra o atraso do Incremento 1 e condensa os Incrementos 2 e 3.

---

## Fontes e Critérios de Atualização

- **Calendário acadêmico:** Plano de Ensino assinado de Requisitos de Software (REQ), turma 01, semestre 2026.2, versão de 10/08/2026, especialmente seções 3, 9.1 e 11. Eventuais atualizações posteriores publicadas pelo professor prevalecem sobre o calendário aqui reproduzido.
- **Registro de acontecimentos efetivos:** [Atas de Reunião](../governanca/atas/index.md). Reuniões internas não são descritas como validações com a cliente. Compromissos previstos sem ata/evidência permanecem classificados como planejados ou pendentes de confirmação.
- **Escopo atual de requisitos:** [Capítulo 8 — Especificação](../requisitos/index.md) (**40 RFs e 20 RNFs**) e [Capítulo 8 — Priorização e MVP](../requisitos/priorizacao.md#linha-de-corte-do-mvp), que mantém a correspondência atual entre RFs e histórias de usuário. Quantitativos históricos de atas não são reescritos retroativamente.
- **Marco de referência desta revisão:** 09/11/2026; marcos fixados antes dessa data foram marcados como concluídos. Status futuros e entregas efetivamente concluídas devem ser conferidos no [GitHub Projects](https://github.com/orgs/mdsreq-fga-unb/projects/119/) antes da publicação.

### Método de Atualização dos Requisitos no RAD

O [catálogo de requisitos](../requisitos/index.md) não é um artefato congelado: seguindo o modelo **RAD**, ele evolui junto com os incrementos, em três pontos de revisão por ciclo, cada um ancorado em uma fase do RAD:

1. **Início do incremento: fase de Planejamento (*Plan*).** A equipe revisita o catálogo URPS+ e o backlog, confirma quais requisitos entram no incremento (por meio da priorização pela Matriz 4×4) e registra as inclusões, alterações e exclusões. O resultado é o *baseline* de requisitos do incremento, que alimenta o DoR.
2. **Após cada ciclo de validação: fase de *User Design*.** A cada sessão de validação sociotécnica com a cliente (ou validação assíncrona, quando acionada a folga de indisponibilidade), os requisitos afetados são revisados e validados. Novos requisitos, ajustes de regra e rejeições registrados em ata retornam ao catálogo e ao backlog antes de seguir para a construção.
3. **Após a construção e o Cutover: revisão final.** Depois da construção e dos testes de aceitação (UAT), o catálogo é reconciliado com o que foi efetivamente construído, aceito e adiado para o backlog evolutivo, e a matriz de rastreabilidade é atualizada. É a última revisão do ciclo de vida do projeto.

Toda alteração é registrada no GitHub Projects e na ata correspondente, e o capítulo de requisitos informa a versão e os totais vigentes.


## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 10/11/2026 | Criação do capítulo a partir da separação do antigo "Cronograma e Planejamento de Entregas": racional metodológico, folgas técnicas, governança e fontes; atualização do catálogo para 40 RFs e 20 RNFs e inclusão do método de atualização de requisitos no RAD com diagrama. | Eric Araújo | — |
| `1.1` | 11/11/2026 | Revisão da referência à linha de corte canônica e eliminação da repetição de quantitativos na seção metodológica, preservando a natureza histórica dos marcos. | Gustavo Bonifácio | — |
