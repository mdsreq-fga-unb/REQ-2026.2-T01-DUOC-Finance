# Painel Geral de Atas e Pautas de Reuniões

Em conformidade com o modelo de governança e os ritos de comunicação formalizados no [7.2 Comunicação](../interacao-cliente/index.md#72-comunicacao) (notadamente a diretriz de **Registro de Atas e Decisões**), esta seção constitui o repositório oficial das atas de reunião, pautas prévias, deliberações de escopo e listas de ações imediatas (*Action Items*) acordadas entre a equipe **Cascata Ágil** e a cliente parceira **Maria Beatryz Vieira de Sousa**, bem como alinhamentos internos de engenharia da equipe.

---

## Padrão das Atas

Todas as atas seguem a mesma estrutura, de modo a garantir a rastreabilidade auditável das decisões de escopo, elicitações e validações de requisitos:

1. **Cabeçalho:** data, natureza da sessão (com a cliente ou interna), participantes e objetivo.
2. **Pauta:** assuntos previstos para a sessão.
3. **Resumo Executivo e Discussões:** síntese e detalhamento do que foi tratado.
4. **Decisões Tomadas:** deliberações numeradas (D1, D2, ...) para referência cruzada nos artefatos de requisitos.
5. **Gravação e Links:** registro audiovisual, quando publicado, e artefatos do portal relacionados.
6. **Ações Futuras (Action Items):** responsáveis, prazos e, quando conhecido, status.

---

## Quadro Resumo das Reuniões Realizadas

| Reunião | Data | Natureza da Sessão | Participantes Principais | Principais Decisões e Entregas | Ata Detalhada |
| :---: | :---: | :--- | :--- | :--- | :---: |
| **Reunião 01** | 05/09/2026 | Elicitação Inicial, Escopo e MVP (com a cliente) | Equipe Cascata Ágil e Maria Beatryz | Delimitação do escopo central, exclusão do módulo de estoque, LGPD com dados sintéticos e hospedagem na Vercel | [Acessar Ata](reuniao-01.md) |
| **Reunião 02** | 07/09/2026 | Alinhamento Metodológico e ESW (interna) | Equipe Cascata Ágil | Diagnóstico sociotécnico, integração com Shifton, modelo RBAC, Framework RAD, TypeScript/Supabase e Git Flow | [Acessar Ata](reuniao-02.md) |
| **Reunião 03** | 07/09/2026 | Apresentação da Unidade 1 — Ponto de Controle 1 (interna, gravada) | Equipe Cascata Ágil | Apresentação da baseline homologada: contexto, metodologia RAD, arquitetura, processo de ER, intervenção social, governança e RNFs (URPS+) | [Acessar Ata](reuniao-03.md) |
| **Reunião 04** | 17/09/2026 | Retrospectiva da Unidade 1 e Planejamento da Unidade 2 (interna) | Equipe Cascata Ágil | Distribuição das correções da Unidade 1, ajuste do cronograma ao RAD, divisão das características para os requisitos, prazos (22/09, 24/09 e 29/09) e validação com a cliente | [Acessar Ata](reuniao-04.md) |
| **Reunião 05** | 24/09/2026 | Priorização de Requisitos, Matriz 4x4 e Alinhamento do MVP (interna) | Equipe Cascata Ágil | Revisão dos 21 RFs e RNFs, MoSCoW e matriz 4x4, inclusão do RF11, rebaixamento do RF21, exclusão do RF16, postergação do RNF01, aprovação do MVP com ressalvas e Vercel (`finance.doc.br`) | [Acessar Ata](reuniao-05.md) |

---

## Acesso Rápido às Atas

<div class="grid cards" markdown>

-   :material-clipboard-text-clock-outline: **[Reunião 01 — Elicitação de Escopo e MVP (05/09/2026)](reuniao-01.md)**

    ---
    Primeiro alinhamento oficial com a cliente Maria Beatryz. Definição do escopo financeiro e de pessoal (CLT e diaristas), proteção de dados sensíveis (LGPD), infraestrutura na Vercel e minutagem da discussão.

-   :material-clipboard-check-outline: **[Reunião 02 — Alinhamento Metodológico e ESW (07/09/2026)](reuniao-02.md)**

    ---
    Alinhamento interno de engenharia. Diagnóstico da fragmentação de planilhas, integração do ponto via *Shifton*, adoção do Framework RAD, definição da stack (TypeScript, Supabase, Shadcn UI) e governança Git Flow.

-   :material-presentation: **[Reunião 03 — Apresentação da Unidade 1 (07/09/2026)](reuniao-03.md)**

    ---
    Gravação da apresentação do Ponto de Controle 1. Contexto de negócio, metodologia híbrida com RAD, arquitetura proposta, fases da Engenharia de Requisitos, gestão de mudanças e requisitos não funcionais (URPS+).

-   :material-calendar-sync-outline: **[Reunião 04 — Retrospectiva da Unidade 1 e Planejamento da Unidade 2 (17/09/2026)](reuniao-04.md)**

    ---
    Análise do feedback docente (nota 7), padronização do MkDocs, distribuição das correções da Unidade 1, ajuste do cronograma ao RAD, divisão das características do produto e agendamento das validações com a cliente.

-   :material-format-list-numbered: **[Reunião 05 — Priorização de Requisitos, Matriz 4x4 e MVP (24/09/2026)](reuniao-05.md)**

    ---
    Sessão de alinhamento interno da equipe para verificação dos 21 RFs e RNFs. Aplicação do MoSCoW e matriz 4x4 (7 requisitos essenciais), inclusão do RF11 (indicadores de custos), rebaixamento do RF21 (estorno), exclusão do RF16, postergação do RNF01 (modo offline), aprovação do MVP com ressalvas e definição do subdomínio na Vercel (`finance.doc.br`).

</div>

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 07/09/2026 | Criação do Painel Geral de Atas e migração para seção independente na navegação | Eric Araújo | Matheus Ribeiro |
| `1.1` | 23/09/2026 | Incorporação das atas das Reuniões 03 (Apresentação da Unidade 1) e 04 (Retrospectiva da Unidade 1 e Planejamento da Unidade 2); desmembramento das atas em páginas próprias indexadas na navegação e padronização da estrutura (Pauta, Participantes, Decisões Tomadas, Gravação e Links, Ações Futuras) | Paulo Nery | Equipe Cascata Ágil |
| `1.2` | 25/09/2026 | Adição da Ata da Reunião 05 no quadro resumo e nos cards de acesso rápido | Eric Araújo | Matheus Ribeiro Szervinsk |
| `1.3` | 25/09/2026 | Atualização do registro da Reunião 05 com as deliberações de priorização MoSCoW, matriz 4x4, ajustes de RFs/RNFs e alinhamento do MVP na Vercel | Matheus Ribeiro Szervinsk | Lucas Zanetti |
