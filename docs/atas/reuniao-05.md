# Ata da Reunião 05: Priorização de Requisitos e Avaliação de Valor de Negócio

* **Projeto:** DUOC Finance
* **Equipe:** Cascata Ágil
* **Data da Sessão:** 24 de setembro de 2026, às 19h30 (GMT-03:00)
* **Natureza:** Síncrona, via Google Meet — reunião com a cliente parceira (avaliação e priorização de requisitos)
* **Participantes:** 
    * **Cliente Parceira:** Maria Beatryz Vieira de Sousa (Sócia-Administradora da DUOC Arquitetura e Engenharia)
    * **Equipe Cascata Ágil:** Eric Araújo (Product Owner e condução da sessão), Matheus Ribeiro Szervinsk (Scrum Master e Co-PO), Giovana Ferreira (Engenheira Frontend e Designer UI/UX), Paulo Nery (Engenheiro Backend), Matheus Saraiva Camargo (Arquiteto de Software e Banco de Dados), Gustavo (QA e Testes) e Lucas Zanetti (Revisão e Qualidade)
* **Objetivo da Sessão:** Apresentar a especificação consolidada dos 16 Requisitos Funcionais (RF01 a RF16) derivados dos quatro Objetivos Específicos (OE1 a OE4), definir os critérios qualitativos e quantitativos de valor de negócio (escala ordinal de 1 a 4 associada ao MoSCoW) e conduzir a atribuição consensual de notas, classificações e justificativas operacionais com a cliente para formalizar a delimitação do Produto Mínimo Viável (MVP).

---

## 1. Pauta

1. Apresentação da metodologia de avaliação por Valor de Negócio (escala 1 a 4 e correlação direta com MoSCoW).
2. Avaliação e pontuação dos requisitos do **Módulo 1 — OE1: Padronização e Unificação de Dados** (RF01 a RF04).
3. Avaliação e pontuação dos requisitos do **Módulo 2 — OE2: Eficiência Administrativo-Financeira** (RF05 a RF08).
4. Avaliação e pontuação dos requisitos do **Módulo 3 — OE3: Inteligência de Custos por Contrato** (RF09 a RF12).
5. Avaliação e pontuação dos requisitos do **Módulo 4 — OE4: Governança, Segurança e Rastreabilidade** (RF13 a RF16).
6. Delimitação formal da Linha de Corte (*Cut-line*) do Produto Mínimo Viável (MVP).
7. Alinhamento sobre a prototipação UI-First no Frontend e próximas validações da Unidade 2.

---

## 2. Resumo Executivo

A reunião consolidou o alinhamento de escopo prioritário entre a equipe Cascata Ágil e a sócia-administradora Maria Beatryz. A cliente expressou com ênfase que as maiores dores operacionais da DUOC residem atualmente na dependência de planilhas manuais para apuração de diárias de prestadores e na perda contínua de notas fiscais de despesas de viagem de canteiro. 

A equipe apresentou a taxonomia de Requisitos Funcionais como ações observáveis do usuário com valor mensurável, acompanhada da escala de 1 a 4 associada ao MoSCoW (Must have = 4, Should have = 3, Could have = 2, Won't have = 1). Em dinâmica participativa, cada um dos 16 RFs foi apreciado criticamente. Estabeleceu-se que 7 requisitos constituem os *Must have* (4), 5 requisitos configuram *Should have* (3), 3 requisitos foram classificados como *Could have* (2) e 1 requisito foi enquadrado como *Won't have* (1) para o escopo do MVP. A cliente aprovou integralmente a linha de corte do MVP (12 RFs que contemplam ponta a ponta o fluxo cadastral, apontamento em campo, fechamento financeiro, reembolsos e controle de acesso).

---

## 3. Discussões

### 3.1 Apresentação Metodológica: Escala de 1 a 4 e MoSCoW
* **Condução por Eric Araújo (PO) e Matheus Ribeiro (SM):**
    * Explicou-se que a Engenharia de Requisitos adotada na disciplina requer priorização justificada pelo valor de negócio para guiar as entregas do modelo RAD.
    * A escala de 1 a 4 foi detalhada:
        * **Nota 4 (Must have):** Obrigatório no MVP; sem ele não há operação viável do DUOC Finance.
        * **Nota 3 (Should have):** Alta prioridade; essencial para sustentabilidade da rotina sem retrabalho da equipe de TI.
        * **Nota 2 (Could have):** Conveniência analítica; será implementado se houver folga técnica no ciclo.
        * **Nota 1 (Won't have):** Postergado para pós-MVP; valor corporativo futuro, mas fora da entrega inicial.
    * Maria Beatryz expressou total concordância com a regra de que no máximo 60% do escopo deve ser *Must have*, elogiando a objetividade da escala.

### 3.2 Módulo 1 (OE1 — Padronização Cadastral e RVT de Campo)
* **RF01 (Cadastrar colaborador):** Maria Beatryz enfatizou que sem a base de colaboradores organizada por CPF e com dados bancários validados, nenhum pagamento de diarista pode ser disparado. **Classificação acordada: Nota 4 (Must have)**.
* **RF02 (Atualizar cadastro):** A cliente ressaltou que alterações de chaves Pix e dados de contato são diárias e que o administrativo da DUOC não pode depender de programadores para atualizar cadastros simples. **Classificação acordada: Nota 3 (Should have)**.
* **RF03 (Registrar movimentação funcional):** A transição de afastamento e desligamento é vital para travar o acesso ao app e evitar o pagamento de diárias indevidas a ex-colaboradores. **Classificação acordada: Nota 3 (Should have)**.
* **RF04 (Submeter apontamento de campo):** Maria Beatryz destacou que a coleta do Relatório de Viagem Técnica (RVT) via aplicativo é o coração da operação externa, substituindo papéis que se perdiam nas obras. **Classificação acordada: Nota 4 (Must have)**.

### 3.3 Módulo 2 (OE2 — Motor Financeiro e Reembolsos)
* **RF05 (Solicitar prévia de fechamento):** Apontado como a solução para a maior dor da sócia-administradora: hoje são necessárias mais de 30 horas mensais para cruzar mensagens de WhatsApp e abas de Excel para apurar quem trabalhou e quanto deve receber. A prévia consolidada automática foi considerada inegociável. **Classificação acordada: Nota 4 (Must have)**.
* **RF06 (Homologar fechamento financeiro):** Mandatório para fechar o lote de pagamentos com bloqueio contra alterações retroativas, garantindo segurança contábil e paz jurídica na empresa. **Classificação acordada: Nota 4 (Must have)**.
* **RF07 (Submeter solicitação de reembolso):** Despesas com alimentação, combustível e insumos emergenciais geravam atritos constantes por notas fiscais amassadas ou perdidas. O upload digital obrigatório vinculado à obra elimina esse problema. **Classificação acordada: Nota 4 (Must have)**.
* **RF08 (Deliberar solicitação de reembolso):** Fluxo de aprovação indispensável para que o coordenador autorize apenas despesas legítimas antes do repasse financeiro. **Classificação acordada: Nota 4 (Must have)**.

### 3.4 Módulo 3 (OE3 — Inteligência de Custos por Contrato)
* **RF09 (Apropriar custos operacionais):** Permite alocar o valor de cada diária e despesa ao contrato da respectiva obra. Maria Beatryz pontuou que hoje a DUOC tem dificuldade de saber a margem real de lucro por obra. **Classificação acordada: Nota 3 (Should have)**.
* **RF10 (Consultar rastreabilidade de custos):** Capacidade de detalhar de onde veio cada centavo cobrado de uma obra. Essencial para prestar contas aos clientes corporativos da DUOC. **Classificação acordada: Nota 3 (Should have)**.
* **RF11 (Filtrar indicadores de custos):** Filtros dinâmicos combinados em dashboards. A cliente avaliou que, na largada, listagens e relatórios básicos consolidados por contrato já suprem a rotina, tornando filtros analíticos avançados um diferencial desejável. **Classificação acordada: Nota 2 (Could have)**.
* **RF12 (Monitorar execução orçamentária):** Gráficos de previsto versus realizado e alertas de estouro orçamentário. Considerado muito interessante estrategicamente, porém a cliente concordou que a apuração correta do custo real tem precedência sobre os alertas visuais de orçamento na primeira entrega. **Classificação acordada: Nota 2 (Could have)**.

### 3.5 Módulo 4 (OE4 — Governança, Segurança e Rastreabilidade)
* **RF13 (Efetuar login no sistema):** Requisito inegociável de segurança da informação e conformidade com a LGPD para proteger salários e dados bancários. **Classificação acordada: Nota 4 (Must have)**.
* **RF14 (Gerenciar perfis de acesso - RBAC):** Fundamental para segregar o acesso dos diaristas e técnicos de campo, impedindo que enxerguem dados financeiros globais ou salários de outros profissionais. **Classificação acordada: Nota 3 (Should have)**.
* **RF15 (Consultar trilha de auditoria):** O registro dos logs no banco de dados ocorre de forma atômica desde o primeiro dia, mas a interface gráfica web com filtros para consulta pode ser entregue em etapa posterior de refinamento, pois qualquer dúvida preliminar pode ser checada diretamente no banco pela equipe de engenharia. **Classificação acordada: Nota 2 (Could have)**.
* **RF16 (Exportar relatório de auditoria):** A emissão de dossiês formais para fiscalizações trabalhistas (CLT Art. 11) é uma exigência de longo prazo. Maria Beatryz acordou que relatórios dessa natureza podem ser gerados manualmente sob demanda na fase inicial, dispensando a implementação de rotinas automáticas de exportação no MVP. **Classificação acordada: Nota 1 (Won't have no MVP)**.

### 3.6 Delimitação do MVP e Próximos Passos
* A cliente formalizou seu aceite na composição do MVP abrangendo os 12 requisitos classificados como *Must have* (4) e *Should have* (3).
* Giovana Ferreira demonstrou a estratégia de prototipação UI-First: os designs das telas de RVT e fechamento financeiro estão sendo construídos no Frontend para navegação com dados mockados na próxima sessão com a cliente.
* Eric Araújo e Matheus Ribeiro reforçaram que o atendimento aos critérios DoR de cada módulo antecederá qualquer escrita de backend complexo.

---

## 4. Decisões Tomadas

| # | Decisão | Descrição e Impacto |
| :---: | :--- | :--- |
| **D1** | **Adoção Oficial da Escala 1 a 4 (MoSCoW)** | Formalizada a metodologia de priorização de requisitos associando as notas de 1 a 4 aos quatro quadrantes do MoSCoW para guiar o backlog do projeto. |
| **D2** | **Fixação do Núcleo Crítico (Must Have = 4)** | Deliberados 7 requisitos como obrigatórios no MVP: RF01, RF04, RF05, RF06, RF07, RF08 e RF13, correspondendo a 43,75% do total. |
| **D3** | **Inclusão dos Requisitos Estruturantes (Should Have = 3)** | Aprovada a inclusão dos requisitos RF02, RF03, RF09, RF10 e RF14 no MVP para garantir autonomia administrativa da DUOC. |
| **D4** | **Condicionamento de Recursos Analíticos (Could Have = 2)** | Os requisitos RF11, RF12 e RF15 foram classificados como extensões desejáveis, a serem implementados no Incremento 3 caso haja folga técnica no cronograma. |
| **D5** | **Exclusão Formal do RF16 do MVP (Won't Have = 1)** | O requisito RF16 (Exportar relatório de auditoria) fica formalmente postergado para a Release 2.0 pós-implantação. |
| **D6** | **Homologação da Linha de Corte do MVP** | Maria Beatryz homologou formalmente a composição de 12 Requisitos Funcionais como a baseline oficial do MVP do DUOC Finance. |

---

## 5. Gravação e Links

* **Gravação:** Sessão gravada internamente para fins de auditoria de requisitos; arquivada no Google Drive da equipe.
* **Artefatos Relacionados:**
    * [Capítulo 8 — Especificação de Requisitos de Software](../requisitos/index.md)
    * [Capítulo 8 — Priorização de Requisitos e MVP](../requisitos/priorizacao.md)
    * [Capítulo 6 — Cronograma e Incrementos do RAD](../cronograma/index.md)
    * [Capítulo 7 — Processo de Validação Sociotécnica](../interacao-cliente/index.md#73-processo-de-validacao-sociotecnica-e-homologacao-com-a-cliente)

---

## 6. Ações Futuras (Action Items)

| Ação Determinada | Responsável | Objetivo / Descrição | Prazo | Status |
| :--- | :--- | :--- | :---: | :---: |
| **Publicar Capítulo de Priorização e MVP** | Matheus Ribeiro | Estruturar o documento formal `priorizacao.md` no MkDocs com a tabela de notas de 1 a 4 e justificativas acordadas. | 25/09/2026 | Concluído |
| **Atualizar Backlog e GitHub Projects** | Eric Araújo | Atualizar as tags de prioridade (MoSCoW) e marcos de MVP no quadro institucional de Issues do GitHub Projects. | 26/09/2026 | Em andamento |
| **Desenvolver Telas de RVT no Frontend** | Giovana Ferreira | Finalizar componentes de UI-First com dados mockados para o apontamento de campo e visualização prévia de fechamento. | 28/09/2026 | Em andamento |
| **Modelar Tabelas e Regras de Validação** | Matheus Saraiva e Paulo Nery | Preparar migrations e validações das regras RN01 a RN09 no Supabase para quando o DoR for homologado. | 29/09/2026 | Planejado |

---

## 7. Rastreabilidade e Minutagem da Reunião (Log de Discussão)

* `00:00:00` — **Abertura e Boas-Vindas:** Eric Araújo agradece a presença de Maria Beatryz e introduz a pauta da reunião focada em valor de negócio e priorização.
* `00:04:15` — **Apresentação da Metodologia:** Matheus Ribeiro detalha os critérios de avaliação (escala 1 a 4 e correlação MoSCoW) e a meta de equilibrar o escopo do MVP.
* `00:11:30` — **Discussão do Módulo 1 (OE1):** Análise dos requisitos RF01 a RF04. Maria Beatryz corrobora a gravidade da falta de dados unificados e relata como as anotações de campo se perdem em obras simultâneas.
* `00:23:45` — **Discussão do Módulo 2 (OE2):** Debate aprofundado sobre o motor financeiro (RF05 e RF06) e fluxo de reembolsos (RF07 e RF08). A cliente destaca que a conferência de diárias consome dias de trabalho e que notas em papel representam prejuízo direto.
* `00:39:10` — **Discussão do Módulo 3 (OE3):** Avaliação de apropriação e inteligência de custos (RF09 a RF12). Acordo sobre a prioridade do vínculo direto por obra e postergação de filtros dinâmicos secundários.
* `00:51:20` — **Discussão do Módulo 4 (OE4):** Avaliação de segurança e governança (RF13 a RF16). Confirmação do login e RBAC como essenciais e pactuação do adiamento da exportação massiva de dossiês de auditoria (RF16).
* `01:03:00` — **Consolidação do MVP e Linha de Corte:** Validação da tabela final de notas e ratificação unânime dos 12 requisitos que integram o MVP.
* `01:12:40` — **Encerramento e Próximos Passos:** Alinhamento de agenda para a demonstração das primeiras interfaces navegáveis no Frontend.

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 24/09/2026 | Elaboração e publicação da ata oficial da Reunião 05 de Priorização de Requisitos e Avaliação de Valor de Negócio junto à cliente parceira Maria Beatryz. | Eric Araújo e Matheus Ribeiro Szervinsk | Lucas Zanetti e Giovana Ferreira |
