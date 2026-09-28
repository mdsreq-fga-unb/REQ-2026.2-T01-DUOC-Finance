# Ata da Reunião 02: Alinhamento Metodológico e Engenharia de Requisitos

* **Projeto:** DUOC Finance
* **Equipe:** Cascata Ágil
* **Data da Sessão:** 07 de setembro de 2026
* **Natureza:** Síncrona, alinhamento interno da equipe
* **Participantes:** Equipe Cascata Ágil
* **Contexto:** Planejamento da Unidade 1 e definição da baseline de escopo
* **Objetivo da Sessão:** Diagnóstico sociotécnico, definição da estratégia metodológica (RAD), consolidação da stack tecnológica, alinhamento dos níveis de abstração dos requisitos e governança do repositório.

---

## 1. Pauta

1. Diagnóstico do cenário atual e análise sociotécnica.
2. Definição do escopo técnico do MVP e da arquitetura.
3. Engenharia de Requisitos: crítica dos níveis de abstração.
4. Decisões de processo e stack tecnológica.
5. Governança do repositório e organização do trabalho.

---

## 2. Resumo Executivo

A equipe consolidou o diagnóstico sociotécnico da DUOC, marcado pela fragmentação dos dados em planilhas sem controle de acesso, e definiu os pilares metodológicos e técnicos da Unidade 1: abordagem híbrida com o Framework RAD, integração com a ferramenta de ponto já utilizada pela empresa, controle de acesso por perfil (RBAC), revisão dos níveis de abstração dos objetivos e governança do repositório via Git Flow.

---

## 3. Discussões

### 3.1 Diagnóstico do Cenário Atual e Análise Sociotécnica

* **Gargalo Informacional e Operacional:**
    * O principal entrave operacional na DUOC Arquitetura e Engenharia reside na fragmentação e na opacidade dos fluxos de dados. Fluxo de caixa, ponto de pessoal, horas técnicas, controle de diaristas e benefícios estão distribuídos em múltiplas planilhas concorrentes e descentralizadas.
    * **Vulnerabilidade de Dados:** inexistência de controle de permissões por perfil ou de trilha de auditoria; todos os usuários possuem acesso irrestrito às planilhas, podendo alterar fórmulas e lançamentos sem qualquer rastreabilidade.
    * **Sobrecarga Administrativa:** o fechamento mensal da folha e a apuração de custos exigem conferências manuais redundantes, provocadas pela duplicação de dados de bonificações e reembolsos.
* **Fator de Intervenção Social:**
    * O software deve simplificar a rotina de quem atua no canteiro e no escritório, com interface limpa e intuitiva que supere a inércia do hábito das planilhas e engaje os colaboradores no lançamento tempestivo das informações.
* **Ferramentas Existentes:**
    * A empresa já adota a solução *auditor.ia* para controle de ponto por reconhecimento facial.

### 3.2 Escopo Técnico do MVP e Arquitetura

* **Visão Modular baseada em Perfis (RBAC):**
    * Unificação da automação da folha de pagamento e do cálculo de comissões.
    * A densidade de informações exibida varia conforme o perfil do usuário (ex.: a sócia administradora acompanha a rentabilidade consolidada dos contratos; o colaborador de campo acessa exclusivamente suas próprias horas e solicitações de reembolso).
* **Desafios de Engenharia de Dados:**
    * A modelagem do banco relacional representa o ponto de maior complexidade lógica do projeto, devendo suportar:
        1. Cadastro centralizado de funcionários, diaristas e tabela de benefícios.
        2. Correlação direta entre o Relatório de Viagem Técnica (RVT), o deslocamento em campo e o custo real da mão de obra alocada em cada contrato.
        3. Regras de apropriação e rateio automático de despesas de transporte e alimentação.

### 3.3 Engenharia de Requisitos: Níveis de Abstração

* Constatou-se que alguns Objetivos Específicos (OEs) continham termos técnicos que descreviam "como" implementar, violando a Pirâmide de Abstração de Requisitos.
* A meta de conformidade plena e exaustiva com a LGPD (OE4) foi considerada ampla demais para a janela temporal do MVP acadêmico.

### 3.4 Processo e Stack Tecnológica

* A justificativa para o RAD é a necessidade de validações frequentes de protótipos de alta fidelidade com a cliente Maria Beatryz, otimizando a produtividade da equipe ao longo do semestre.

### 3.5 Governança do Repositório

* O cronograma deve permanecer sincronizado com os marcos (*milestones*) das Unidades Acadêmicas da disciplina na UnB.

---

## 4. Decisões Tomadas

| # | Decisão | Descrição |
| :---: | :--- | :--- |
| D1 | **Integração com o ponto existente** | O DUOC Finance não desenvolverá marcação de ponto própria; consumirá as presenças homologadas pelo *auditor.ia* e fará a apropriação financeira das horas aos contratos de obras. |
| D2 | **Controle de acesso por perfil (RBAC)** | Informações exibidas conforme o papel de cada usuário. |
| D3 | **API de dados mockada** | Para acelerar o frontend no início da construção rápida, a API de dados será inicialmente simulada. |
| D4 | **OEs no nível de negócio** | Os OEs descrevem apenas "o quê" e "por quê"; a especificação técnica e funcional reside exclusivamente nas Características do Produto (CARs). |
| D5 | **Readequação da OE4** | Escopo delimitado à centralização protegida de dados de pessoal e à autenticação com RBAC, mantendo políticas de privacidade extensivas como horizonte futuro. |
| D6 | **Estratégia de ESW** | Abordagem híbrida, ciclo de vida iterativo e incremental e processo *Rapid Application Development* (RAD). |
| D7 | **Stack tecnológica** | TypeScript; Supabase (PostgreSQL, autenticação nativa, *row-level security* e endpoints RESTful); frontend SPA em React ou Angular, a definir por votação interna; biblioteca de componentes Shadcn UI. |
| D8 | **Git Flow** | Issues organizadas por épicos (um por capítulo, com sub-issues por artefato), *Conventional Commits* (`feat:`, `docs:`, `fix:`, `refactor:`), branches por funcionalidade/documento e integração obrigatória via Pull Request revisado na `develop` antes de qualquer merge na `main`. |

---

## 5. Gravação e Links

* **Gravação:** não publicada no portal.
* **Artefatos relacionados:** [Capítulo 3 — Intervenção Social](../intervencao-social/index.md), [Capítulo 4 — Estratégias de ESW](../estrategias-esw/index.md) e [Capítulo 7 — Interação com Cliente](../interacao-cliente/index.md).

---

## 6. Ações Futuras (Action Items)

| Atividade Determinada | Responsável | Prazo Limite | Status |
| :--- | :--- | :--- | :--- |
| **Redigir introduções modulares (Sobre) nos Capítulos 3 a 7** | Gabriel | 10/09 | Em andamento |
| **Lançar enquete técnica de frontend no grupo** | Liderança do projeto | Imediato | Concluído |
| **Ajustar o nível de abstração das OEs e CARs no Capítulo 2** | Eric Araújo | 11/09 | Em andamento |
| **Configurar infraestrutura no Supabase e mock de dados** | Gabriel / Matheus Saraiva Camargo | 14/09 | A iniciar |
| **Prototipagem de média fidelidade do faturamento no Figma** | Paulo Nery | 14/09 | A iniciar |

!!! note "Alteração na composição da equipe"
    O integrante Gabriel, responsável por parte das ações acima, deixou a equipe após esta reunião. Os registros foram mantidos para preservar a fidelidade histórica da ata; a composição vigente da equipe está em [7.1 Composição da Equipe](../interacao-cliente/index.md#71-composicao-da-equipe).
