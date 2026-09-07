# Painel Geral de Atas e Pautas de Reuniões

Em conformidade com o modelo de governança e os ritos de comunicação formalizados no [7.2 Comunicação](../interacao-cliente/7.2-comunicacao.md) (notadamente a diretriz de **Registro de Atas e Decisões**), esta seção constitui o repositório oficial das atas de reunião, pautas prévias, deliberações de escopo e listas de ações imediatas (*Action Items*) acordadas entre a equipe **Cascata Ágil** e a cliente parceira **Maria Beatryz Vieira de Sousa**, bem como alinhamentos internos de engenharia da equipe.

---

## Quadro Resumo das Reuniões Realizadas

| Reunião | Data | Natureza da Sessão | Participantes Principais | Principais Decisões e Entregas | Ata Detalhada |
| :---: | :---: | :--- | :--- | :--- | :---: |
| **Reunião 01** | 05/09/2026 | Elicitação Inicial, Escopo e MVP | Equipe Cascata Ágil e Maria Beatryz | Delimitação do escopo central, exclusão do módulo de estoque, LGPD com dados sintéticos e hospedagem na Vercel | [Acessar Ata 01](reuniao-01.md) |
| **Reunião 02** | 07/09/2026 | Alinhamento Metodológico e ESW | Equipe Cascata Ágil | Diagnóstico sociotécnico, integração com auditor.ia, modelo RBAC, Framework RAD, TypeScript/Supabase e Git Flow | [Acessar Ata 02](reuniao-02.md) |

---

## Acesso Rápido às Atas

<div class="grid cards" markdown>

-   :material-clipboard-text-clock-outline: **[Reunião 01 — Elicitação de Escopo e MVP (05/09/2026)](reuniao-01.md)**
    
    ---
    Primeiro alinhamento oficial com a cliente Maria Beatryz. Definição do escopo financeiro e de pessoal (CLT e diaristas), proteção de dados sensíveis (LGPD), infraestrutura na Vercel e log de minutagem da discussão.

-   :material-clipboard-check-outline: **[Reunião 02 — Alinhamento Metodológico e ESW (07/09/2026)](reuniao-02.md)**
    
    ---
    Alinhamento interno de engenharia. Diagnóstico de fragmentação de planilhas, integração do ponto via *auditor.ia*, adoção do Framework RAD, definição da stack (TypeScript, Supabase, Shadcn UI) e governança Git Flow.

</div>

---

## Consulta Unificada por Abas

Selecione a aba desejada para consultar a ata completa diretamente nesta página:

=== "Reunião 01 (05/09/2026) — Elicitação de Escopo e MVP"

    ### Ata da Reunião 01: Elicitação Inicial, Definição de Escopo e MVP

    * **Projeto:** DUOC Finance
    * **Equipe:** Cascata Ágil
    * **Data da Sessão:** 05 de Setembro de 2026
    * **Participantes:** Equipe Cascata Ágil e Cliente Parceira Maria Beatryz Vieira de Sousa
    * **Objetivo da Sessão:** Elicitação preliminar de necessidades, definição do escopo central do sistema, alinhamento sobre proteção de dados (LGPD) e diretrizes para entrega de Produto Mínimo Viável (MVP).

    ---

    #### 1. Resumo Executivo
    A reunião estabeleceu o direcionamento do escopo inicial para o desenvolvimento do **DUOC Finance**, um sistema web integrado de gestão financeira e de departamento pessoal. O principal compromisso é substituir a dependência de planilhas manuais e descentralizadas por uma plataforma estruturada com metodologia de entregas periódicas. Para viabilizar a entrega no semestre acadêmico, deliberou-se expressamente pela exclusão do módulo de controle de estoque do escopo do MVP.

    ---

    #### 2. Pautas e Deliberações Centrais

    * **Escopo e Objetivo Central:**
        * Transição da gestão descentralizada em planilhas para um sistema web unificado, padronizando os fluxos de dados internos.
        * Foco concentrado na gestão de pessoal (colaboradores CLT e diaristas de campo) e acompanhamento financeiro de despesas e receitas.
        * **Exclusão de Escopo:** Decisão consensual de não incluir o controle de estoque de materiais na versão inicial, blindando os esforços no núcleo financeiro e de pessoal.

    * **Privacidade de Dados e Conformidade com a LGPD:**
        * Devido à sensibilidade de dados pessoais, contratos e salários, ficou acordado que os ambientes de desenvolvimento e teste utilizarão estritamente dados sintéticos (mockados/fictícios), eliminando riscos de exposição de informações reais de clientes e colaboradores.

    * **Estratégia de MVP e Entregas Periódicas:**
        * Adoção de metodologia de entregas periódicas (RAD), assegurando que incrementos funcionais sejam validados progressivamente pela cliente, mantendo o escopo controlado e flexível para evoluções futuras.

    * **Infraestrutura, Hospedagem e Domínio:**
        * A DUOC já possui domínio próprio registrado e licenças de software ativas.
        * A hospedagem da aplicação será realizada na plataforma **Vercel**, utilizando servidor disponível para redirecionamento a partir do site institucional já existente da empresa.
        * A documentação de engenharia de software foi planejada para migração definitiva para o **GitHub Pages (MkDocs)** (*Docs as Code*).

    * **Gestão de Pessoal e Modelos de Contratação:**
        * Necessidade de suporte arquitetural a dois regimes distintos:
            1. **Colaboradores CLT:** Salário mensal, controle de ponto e benefícios.
            2. **Diaristas:** Prestadores externos de serviço em campo com ciclo de apuração e pagamento quinzenal.

    * **Integração Financeira e Conciliação Bancária:**
        * Mapeada a alta complexidade do fluxo financeiro atual, que envolve diversas abas de planilhas para o registro de entradas, saídas e pagamentos.
        * Definiu-se como meta a implementação futura de conciliação bancária via Open Banking para automatizar o controle de contas a pagar e a receber.

    * **Metodologia de Planejamento e Arquitetura:**
        * Condução de uma fase preliminar de planejamento estruturado de requisitos ("Sprint Zero" / Planejamento de Requisitos do RAD), apoiada pela literatura recomendada e auxílio de ferramentas de IA para modelagem.
        * A definição final da stack tecnológica e da arquitetura detalhada foi estrategicamente postergada para o término e validação do levantamento de requisitos.

    ---

    #### 3. Próximas Etapas e Ações Imediatas (Action Items)

    | Ação Determinada | Responsável | Objetivo / Descrição | Status |
    | :--- | :--- | :--- | :--- |
    | **Gerar dados fictícios (Mock)** | Eric Araújo | Gerar planilhas com dados sintéticos simulados para desenvolvimento do sistema, garantindo conformidade com a LGPD. | Concluído |
    | **Revisar e consolidar requisitos** | Eric Araújo | Revisar a lista de necessidades operacionais com a cliente e compartilhar o documento consolidado com a equipe. | Concluído |
    | **Migrar objetivos e documentação** | Equipe (O grupo) | Migrar objetivos do projeto e backlog para o GitHub Pages (MkDocs), abandonando documentos externos dispersos. | Concluído |
    | **Estudo bibliográfico de Requisitos** | Equipe (O grupo) | Leitura dos 4 primeiros capítulos do livro de referência e conversão em requisitos funcionais e não funcionais. | Concluído |

    ---

    #### 4. Rastreabilidade e Minutagem da Reunião (Log de Discussão)

    * `00:08:08` — **Documentação e Potencial Comercial:** Elaboração estruturada dos requisitos via IA e discussão sobre a possibilidade futura de comercializar o sistema por meio de contratos de prestação de serviços.
    * `00:08:54` — **Problema Central e Domínio Registrado:** Identificação dos gargalos operacionais gerados pelo excesso de planilhas; confirmação de domínio registrado e licenças sob posse da DUOC.
    * `00:10:00` — **Hospedagem na Vercel:** Definição da Vercel como infraestrutura de hospedagem, integrando o sistema ao site institucional existente via alteração de rotas de acesso.
    * `00:10:40` — **Gestão de Pessoal (CLT e Diaristas):** Levantamento das necessidades de folha de pagamento e separação entre mensalistas CLT e diaristas quinzenais de obras.
    * `00:11:44` — **Privacidade e LGPD:** Decisão formal sobre a utilização de base de dados mascarada/sintética durante o desenvolvimento para blindagem de dados sensíveis.
    * `00:12:29` — **Complexidade Financeira:** Diagnóstico da fragmentação de entradas, saídas e pagamentos em múltiplas abas de planilhas.
    * `00:13:26` — **Automação Bancária:** Prospecção de integrações via Open Banking para automatizar contas a pagar e receber.
    * `00:14:21` — **Exclusão Formal de Estoque:** Deliberação unânime de corte do módulo de estoque do escopo do projeto, concentrando o foco nas demandas financeiras e de pessoal.
    * `00:15:27` — **Processo de Elicitação e Git Pages:** Alinhamento contínuo liderado por Eric Araújo junto à cliente e início da migração do backlog para o Git Pages.
    * `00:16:16` — **Sprint Zero e Planejamento:** Utilização da base teórica recomendada e suporte de inteligência artificial para estruturação dos requisitos.
    * `00:17:10` — **Critério de Estabilidade de Escopo:** Princípio de consolidar e aprovar um planejamento sólido antes de avançar para a implementação técnica.
    * `00:17:59` — **Arquitetura e Ambientes:** Debate sobre conteinerização (Docker) para mitigar divergências de ambiente e decisão de postergar a stack final para após a homologação das especificações.

=== "Reunião 02 (07/09/2026) — Alinhamento Metodológico e Engenharia de Requisitos"

    ### Ata da Reunião 02: Alinhamento Metodológico e Engenharia de Requisitos

    * **Projeto:** DUOC Finance
    * **Equipe:** Cascata Ágil
    * **Data da Sessão:** 07 de Setembro de 2026
    * **Contexto:** Planejamento da Unidade 1 e Definição da Baseline de Escopo
    * **Objetivo da Sessão:** Diagnóstico sociotécnico, definição da estratégia metodológica (RAD), consolidação da stack tecnológica, alinhamento dos níveis de abstração de requisitos e governança do repositório.

    ---

    #### 1. Pauta 1: Diagnóstico do Cenário Atual e Análise Sociotécnica

    * **Gargalo Informacional e Operacional:**
        * O principal entrave operacional na DUOC Arquitetura e Engenharia reside na fragmentação e opacidade dos fluxos de dados. Fluxo de caixa, ponto de pessoal, horas técnicas, controle de diaristas e benefícios estão distribuídos em múltiplas planilhas concorrentes e descentralizadas.
        * **Vulnerabilidade de Dados:** Inexistência de controle de permissões por perfil ou trilha de auditoria; todos os usuários possuem acesso irrestrito às planilhas, podendo alterar fórmulas e lançamentos sem qualquer rastreabilidade.
        * **Sobrecarga Administrativa:** O fechamento mensal da folha e a apuração de custos exigem conferências manuais redundantes provocadas pela duplicação de dados de bonificações e reembolsos.
    * **Fator de Intervenção Social:**
        * Análise do impacto sociocultural da transição digital na empresa. Constatou-se que o software deve ser concebido para simplificar a rotina de quem opera no canteiro e no escritório, com interface limpa e intuitiva que supere a inércia do hábito das planilhas, engajando os colaboradores no lançamento tempestivo de informações.
    * **Alinhamento com Ferramentas Existentes:**
        * Identificou-se que a empresa já adota a solução *auditor.ia* para controle de ponto por reconhecimento fotográfico facial.
        * **Decisão Arquitetural:** O DUOC Finance não desenvolverá um sistema de marcação de ponto redundante; seu foco será disponibilizar um dashboard integrado que consuma as presenças homologadas e execute a apropriação financeira dessas horas aos contratos de obras.

    ---

    #### 2. Pauta 2: Definição do Escopo Técnico do MVP e Arquitetura

    * **Visão Modular baseada em Perfis (RBAC):**
        * Unificação da automação de folha de pagamento e cálculo de comissões.
        * Implementação de Controle de Acesso Baseado em Papéis (*Role-Based Access Control* — RBAC): a densidade de informações exibida varia dinamicamente segundo a credencial do usuário (ex.: o Sócio Administrador acompanha a rentabilidade consolidada de contratos; o Colaborador de Campo acessa exclusivamente suas próprias horas e solicitações de reembolso).
    * **Desafios de Engenharia de Dados:**
        * A modelagem do banco relacional representa o ponto de maior complexidade lógica do projeto, devendo suportar:
            1. Cadastro centralizado de funcionários, diaristas e tabela de benefícios.
            2. Correlação direta entre o Relatório de Viagem Técnica (RVT), o deslocamento em campo e o custo real de mão de obra alocada em cada contrato.
            3. Módulo CRUD com regras de apropriação e rateio automático de despesas de transporte e alimentação.
        * Para acelerar a Célula Frontend no início da fase de construção rápida, a equipe adotará a estratégia de mockar a API de dados.

    ---

    #### 3. Pauta 3: Engenharia de Requisitos (Crítica dos Níveis de Abstração)

    * **Purificação dos Objetivos Específicos (OEs):**
        * Constatou-se que alguns OEs continham termos técnicos descritivos do "como" implementar, violando a Pirâmide de Abstração de Requisitos.
        * **Diretriz Corretiva:** Os OEs devem permanecer rigorosamente no nível de negócio e necessidades dos stakeholders ("o quê" e "por quê"), sem vincular telas, bibliotecas ou comandos de código.
        * A especificação técnica e funcional deve residir exclusivamente nas Características do Produto (CARs).
    * **Readequação da OE4 (Segurança e LGPD):**
        * A meta de conformidade plena e exaustiva com a LGPD foi considerada ampla demais para a janela temporal do MVP acadêmico. O escopo foi delimitado para a centralização protegida de dados de pessoal e autenticação com RBAC, mantendo políticas de privacidade extensivas como horizonte futuro.

    ---

    #### 4. Pauta 4: Decisões de Processo e Stack Tecnológica

    * **Estratégia de Engenharia de Software:**
        * **Abordagem Metodológica:** Abordagem Híbrida.
        * **Ciclo de Vida:** Iterativo e Incremental.
        * **Processo de Desenvolvimento:** *Rapid Application Development* (Framework RAD).
        * **Justificativa:** Premência de validações frequentes de protótipos de alta fidelidade no Figma com a cliente Maria Beatryz, otimizando a produtividade do time ao longo do semestre.
    * **Stack Tecnológica Oficializada:**
        * **Linguagem Base:** TypeScript (fortalecimento de tipagem estática e segurança em tempo de compilação).
        * **Backend / BaaS & Banco de Dados:** Supabase (PostgreSQL relacional robusto, autenticação nativa, row-level security e geração rápida de endpoints RESTful).
        * **Frontend SPA:** React ou Angular (a ser definido por votação interna da Célula de Construção).
        * **Biblioteca de Componentes UI:** Shadcn UI (aceleração na criação de tabelas ricas, dashboards e interfaces responsivas com design elegante).

    ---

    #### 5. Pauta 5: Governança do Repositório e Organização do Trabalho

    * **Git Flow e Rastreabilidade:**
        * **Gestão de Tarefas (GitHub Issues):** Estrutura orientada a Épicos. Cada capítulo da documentação de requisitos (Capítulos 3 a 7) corresponde a uma Issue principal, acompanhada de sub-issues para cada artefato específico.
        * **Padrão de Commits:** Adoção estrita de *Conventional Commits* (ex.: `feat:`, `docs:`, `fix:`, `refactor:`).
        * **Gestão de Branches:** Ramificações por funcionalidade/documento, com integração obrigatória via *Pull Request* revisado na branch `develop` antes de qualquer merge na `main`.
        * **Planejamento de Entregas:** Cronograma rigorosamente sincronizado com os *milestones* das Unidades Acadêmicas da disciplina na UnB.

    ---

    #### 6. Ações Imediatas (Action Items)

    | Atividade Determinada | Responsável | Prazo Limite | Status |
    | :--- | :--- | :--- | :--- |
    | **Redigir introduções modulares (Sobre) nos Capítulos 3 a 7** | Gabriel | 10/Set | Em andamento |
    | **Lançar enquete técnica de Frontend no grupo** | Liderança do Projeto | Imediato | Concluído |
    | **Ajustar nível de abstração das OEs e CARs no Capítulo 2** | Eric Araújo | 11/Set | Em andamento |
    | **Configurar infraestrutura no Supabase e mock de dados** | Gabriel / Matheus Camargo | 14/Set | A iniciar |
    | **Prototipagem de média fidelidade de faturamento no Figma** | Paulo Nery | 14/Set | A iniciar |

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 07/09/2026 | Criação do Painel Geral de Atas e migração para seção independente na navegação | Eric Araújo | Matheus Ribeiro |
