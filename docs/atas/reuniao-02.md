# Ata da Reunião 02 — Alinhamento Metodológico e Engenharia de Requisitos

!!! info "Metadados da Sessão"
    * **Projeto:** DUOC Finance (Gestão Financeira e Operacional de Obras)
    * **Equipe:** Cascata Ágil
    * **Data da Sessão:** 07 de Setembro de 2026
    * **Contexto:** Planejamento da Unidade 1 e Definição da Baseline de Escopo
    * **Participantes:** Equipe Cascata Ágil
    * **Objetivo:** Diagnóstico sociotécnico, definição da estratégia metodológica (RAD), consolidação da stack tecnológica, alinhamento dos níveis de abstração de requisitos e governança do repositório.

---

## 1. Pauta 1: Diagnóstico do Cenário Atual e Análise Sociotécnica

### Gargalo Informacional e Operacional
* O principal entrave operacional na DUOC Arquitetura e Engenharia reside na fragmentação e opacidade dos fluxos de dados. Fluxo de caixa, ponto de pessoal, horas técnicas, controle de diaristas e benefícios estão distribuídos em múltiplas planilhas concorrentes e descentralizadas.
* **Vulnerabilidade de Dados:** Inexistência de controle de permissões por perfil ou trilha de auditoria; todos os usuários possuem acesso irrestrito às planilhas, podendo alterar fórmulas e lançamentos sem qualquer rastreabilidade.
* **Sobrecarga Administrativa:** O fechamento mensal da folha e a apuração de custos exigem conferências manuais redundantes provocadas pela duplicação de dados de bonificações e reembolsos.

### Fator de Intervenção Social
* Análise do impacto sociocultural da transição digital na empresa. Constatou-se que o software deve ser concebido para simplificar a rotina de quem opera no canteiro e no escritório, com interface limpa e intuitiva que supere a inércia do hábito das planilhas, engajando os colaboradores no lançamento tempestivo de informações.

### Alinhamento com Ferramentas Existentes
* Identificou-se que a empresa já adota a solução *auditor.ia* para controle de ponto por reconhecimento fotográfico facial.
* **Decisão Arquitetural:** O DUOC Finance não desenvolverá um sistema de marcação de ponto redundante; seu foco será disponibilizar um dashboard integrado que consuma as presenças homologadas e execute a apropriação financeira dessas horas aos contratos de obras.

---

## 2. Pauta 2: Definição do Escopo Técnico do MVP e Arquitetura

### Visão Modular baseada em Perfis (RBAC)
* Unificação da automação de folha de pagamento e cálculo de comissões.
* Implementação de Controle de Acesso Baseado em Papéis (*Role-Based Access Control* — RBAC): a densidade de informações exibida varia dinamicamente segundo a credencial do usuário (ex.: o Sócio Administrador acompanha a rentabilidade consolidada de contratos; o Colaborador de Campo acessa exclusivamente suas próprias horas e solicitações de reembolso).

### Desafios de Engenharia de Dados
* A modelagem do banco relacional representa o ponto de maior complexidade lógica do projeto, devendo suportar:
    1. Cadastro centralizado de funcionários, diaristas e tabela de benefícios.
    2. Correlação direta entre o Relatório de Viagem Técnica (RVT), o deslocamento em campo e o custo real de mão de obra alocada em cada contrato.
    3. Módulo CRUD com regras de apropriação e rateio automático de despesas de transporte e alimentação.
* Para acelerar a Célula Frontend no início da fase de construção rápida, a equipe adotará a estratégia de mockar a API de dados.

---

## 3. Pauta 3: Engenharia de Requisitos (Crítica dos Níveis de Abstração)

### Purificação dos Objetivos Específicos (OEs)
* Constatou-se que alguns OEs continham termos técnicos descritivos do "como" implementar, violando a Pirâmide de Abstração de Requisitos.
* **Diretriz Corretiva:** Os OEs devem permanecer rigorosamente no nível de negócio e necessidades dos stakeholders ("o quê" e "por quê"), sem vincular telas, bibliotecas ou comandos de código.
* A especificação técnica e funcional deve residir exclusivamente nas Características do Produto (CARs).

### Readequação da OE4 (Segurança e LGPD)
* A meta de conformidade plena e exaustiva com a LGPD foi considerada ampla demais para a janela temporal do MVP acadêmico. O escopo foi delimitado para a centralização protegida de dados de pessoal e autenticação com RBAC, mantendo políticas de privacidade extensivas como horizonte futuro.

---

## 4. Pauta 4: Decisões de Processo e Stack Tecnológica

### Estratégia de Engenharia de Software
* **Abordagem Metodológica:** Abordagem Híbrida.
* **Ciclo de Vida:** Iterativo e Incremental.
* **Processo de Desenvolvimento:** *Rapid Application Development* (Framework RAD).
* **Justificativa:** Premência de validações frequentes de protótipos de alta fidelidade no Figma com a cliente Maria Beatryz, otimizando a produtividade do time ao longo do semestre.

### Stack Tecnológica Oficializada
* **Linguagem Base:** :simple-typescript: TypeScript (fortalecimento de tipagem estática e segurança em tempo de compilação).
* **Backend / BaaS & Banco de Dados:** :simple-supabase: Supabase / :simple-postgresql: PostgreSQL (relacional robusto, autenticação nativa, row-level security e geração rápida de endpoints RESTful).
* **Frontend SPA:** :fontawesome-brands-react: React ou :simple-angular: Angular (a ser definido por votação interna da Célula de Construção).
* **Biblioteca de Componentes UI:** :simple-shadcnui: Shadcn UI (aceleração na criação de tabelas ricas, dashboards e interfaces responsivas com design elegante).


---

## 5. Pauta 5: Governança do Repositório e Organização do Trabalho

### Git Flow e Rastreabilidade
* **Gestão de Tarefas (GitHub Issues):** Estrutura orientada a Épicos. Cada capítulo da documentação de requisitos (Capítulos 3 a 7) corresponde a uma Issue principal, acompanhada de sub-issues para cada artefato específico.
* **Padrão de Commits:** Adoção estrita de *Conventional Commits* (ex.: `feat:`, `docs:`, `fix:`, `refactor:`).
* **Gestão de Branches:** Ramificações por funcionalidade/documento, com integração obrigatória via *Pull Request* revisado na branch `develop` antes de qualquer merge na `main`.
* **Planejamento de Entregas:** Cronograma rigorosamente sincronizado com os *milestones* das Unidades Acadêmicas da disciplina na UnB.

---

## 6. Ações Imediatas (Action Items)

| Atividade Determinada | Responsável | Prazo Limite | Status |
| :--- | :--- | :---: | :---: |
| **Redigir introduções modulares (Sobre) nos Capítulos 3 a 7** | Gabriel | 10/Set | Em andamento |
| **Lançar enquete técnica de Frontend no grupo** | Liderança do Projeto | Imediato | Concluído |
| **Ajustar nível de abstração das OEs e CARs no Capítulo 2** | Eric Araújo | 11/Set | Em andamento |
| **Configurar infraestrutura no Supabase e mock de dados** | Gabriel / Matheus Camargo | 14/Set | A iniciar |
| **Prototipagem de média fidelidade de faturamento no Figma** | Paulo Nery | 14/Set | A iniciar |

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 07/09/2026 | Consolidação da ata de alinhamento metodológico e governança de requisitos | Eric Araújo | Matheus Ribeiro |
