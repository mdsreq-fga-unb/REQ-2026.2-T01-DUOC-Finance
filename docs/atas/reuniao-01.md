# Ata da Reunião 01 — Elicitação Inicial, Definição de Escopo e MVP

!!! info "Metadados da Sessão"
    * **Projeto:** DUOC Finance (Gestão Financeira e Operacional de Obras)
    * **Equipe:** Cascata Ágil
    * **Data da Sessão:** 05 de Setembro de 2026
    * **Horário / Formato:** 50 minutos via Google Meet
    * **Participantes:** Equipe Cascata Ágil e Cliente Parceira Maria Beatryz Vieira de Sousa (Sócia-Administradora)
    * **Objetivo:** Elicitação preliminar de necessidades de negócio, alinhamento sobre proteção de dados (LGPD), delimitação do escopo para o Produto Mínimo Viável (MVP) e dinâmicas de entregas periódicas.

---

## 1. Resumo Executivo

A primeira reunião oficial entre a equipe **Cascata Ágil** e a cliente parceira **Maria Beatryz Vieira de Sousa** definiu o direcionamento do escopo inicial para o desenvolvimento do **DUOC Finance**, um sistema web integrado de gestão financeira e de departamento pessoal.

O objetivo primordial acordado é substituir a dependência de planilhas manuais e descentralizadas por uma plataforma estruturada, aplicando entregas periódicas. Para viabilizar uma entrega de alta qualidade dentro do semestre acadêmico, deliberou-se consensualmente pela **exclusão do módulo de controle de estoque** do escopo do MVP.

---

## 2. Pautas e Deliberações Centrais

### 2.1 Escopo e Objetivo Central
* **Transição Digital:** Migração dos processos descentralizados em planilhas para um sistema web unificado, padronizando os fluxos de dados internos.
* **Foco em Pessoal e Finanças:** Foco estrito na gestão de pessoal (colaboradores CLT e diaristas de campo) e no acompanhamento financeiro de despesas e receitas vinculadas a contratos.
* **Exclusão de Escopo:** Decisão consensual de não incluir o controle de estoque de materiais na versão inicial, blindando os esforços no núcleo financeiro e de pessoal.

### 2.2 Privacidade de Dados e Conformidade com a LGPD
* Devido à extrema sensibilidade de dados pessoais, contratos e informações salariais da DUOC, ficou acordado que os ambientes de desenvolvimento e teste utilizarão estritamente **dados sintéticos (mockados/fictícios)**, eliminando quaisquer riscos de exposição de dados reais de clientes e colaboradores.

### 2.3 Estratégia de MVP e Entregas Periódicas
* Adoção de metodologia de entregas periódicas orientadas pelo framework RAD, assegurando que incrementos funcionais sejam validados progressivamente pela cliente, mantendo o escopo controlado e flexível para evoluções futuras.

### 2.4 Infraestrutura, Hospedagem e Domínio
* A DUOC já possui domínio próprio registrado e licenças de software ativas.
* A hospedagem da aplicação será realizada na plataforma :simple-vercel: **Vercel**, utilizando servidor disponível para redirecionamento a partir do site institucional já existente da empresa.
* A documentação de engenharia de software foi planejada para migração definitiva para o :simple-mkdocs: **GitHub Pages (MkDocs)** (*Docs as Code*).


### 2.5 Gestão de Pessoal e Modelos de Contratação
* Necessidade de suporte arquitetural a dois regimes distintos:
    1. **Colaboradores CLT:** Salário mensal, controle de ponto e gestão de benefícios.
    2. **Diaristas:** Prestadores externos de serviço em campo com ciclo de apuração e pagamento quinzenal.

### 2.6 Integração Financeira e Conciliação Bancária
* Mapeada a alta complexidade do fluxo financeiro atual, que envolve diversas abas de planilhas para o registro de entradas, saídas e pagamentos.
* Definiu-se como meta a implementação futura de conciliação bancária via Open Banking para automatizar o controle de contas a pagar e a receber.

### 2.7 Metodologia de Planejamento e Arquitetura
* Condução de uma fase preliminar de planejamento estruturado de requisitos ("Sprint Zero" / Planejamento de Requisitos do RAD), apoiada pela literatura recomendada e auxílio de ferramentas de IA para modelagem.
* A definição final da stack tecnológica e da arquitetura detalhada foi estrategicamente postergada para o término e validação do levantamento de requisitos.

---

## 3. Próximas Etapas e Ações Imediatas (Action Items)

| Ação Determinada | Responsável | Objetivo / Descrição | Status |
| :--- | :--- | :--- | :---: |
| **Gerar dados fictícios (Mock)** | Eric Araújo | Gerar planilhas com dados sintéticos simulados para desenvolvimento do sistema, garantindo conformidade com a LGPD. | Concluído |
| **Revisar e consolidar requisitos** | Eric Araújo | Revisar a lista de necessidades operacionais com a cliente e compartilhar o documento consolidado com a equipe. | Concluído |
| **Migrar objetivos e documentação** | Equipe (O grupo) | Migrar objetivos do projeto e backlog para o GitHub Pages (MkDocs), abandonando documentos externos dispersos. | Concluído |
| **Estudo bibliográfico de Requisitos** | Equipe (O grupo) | Leitura dos 4 primeiros capítulos do livro de referência e conversão em requisitos funcionais e não funcionais. | Concluído |

---

## 4. Rastreabilidade e Minutagem da Reunião (Log de Discussão)

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

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 05/09/2026 | Registro preliminar das anotações da reunião de elicitação | Eric Araújo | Matheus Ribeiro |
| `1.1` | 07/09/2026 | Estruturação formal da ata com pautas, action items e minutagem | Eric Araújo | Matheus Ribeiro |
