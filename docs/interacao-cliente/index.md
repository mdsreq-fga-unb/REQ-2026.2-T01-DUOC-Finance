# Capítulo 7: Interação entre Equipe e Cliente

## Objetivo do Capítulo

Este capítulo formaliza o modelo de governança, cooperação e canais de comunicação estabelecidos para o projeto **DUOC Finance**. Ele descreve a estrutura organizacional interna da equipe Cascata Ágil, a definição clara de responsabilidades de cada papel e os ritos formais de contato e homologação que garantem a validação contínua dos artefatos junto à cliente parceira.

## Conjunto de Artefatos

A governança sociotécnica do projeto apoia-se em:

*   **Composição da Equipe:** Divisão clara de atribuições e papéis da equipe sob o modelo RAD adaptado (abordagem híbrida).
*   **Plano de Comunicação:** Estrutura matricial contendo os canais de interação interna e externa, acompanhados de sua finalidade e frequência.
*   **Processo de Validação:** Definição do fluxo regulatório com base inicial no Figma, estabelecimento ágil dos designs via Frontend (UI-First) e posterior implementação da lógica de backend e persistência, culminando na homologação de incrementos (UAT).

!!! note "Painel Geral de Atas de Reuniões"
    O registro histórico completo de atas, pautas prévias e listas de ações (*Action Items*) foi centralizado no **[Painel Geral de Atas de Reuniões](../atas/index.md)**.

---

<a id="71-composicao-da-equipe"></a>
## 7.1 Composição da Equipe

Para assegurar a governança técnica e a entrega com excelência dos artefatos de requisitos e do software funcional, os integrantes da equipe **Cascata Ágil** organizam-se sob uma divisão equilibrada de papéis, harmonizando responsabilidades de Engenharia de Requisitos, liderança de produto, facilitação de processos, prototipagem evolutiva e excelência técnica no modelo RAD adaptado.

### Tabela de Papéis e Responsabilidades

| Membro | Matrícula | Papel no Projeto (RAD / Híbrido) | Responsabilidades Principais |
| :--- | :---: | :--- | :--- |
| **Eric Araújo** | 200064053 | Product Owner (PO) e Engenheiro de Requisitos | Interface direta com o cliente parceiro, alinhamento estratégico com Maria Beatryz, elicitação e especificação de requisitos de negócio, priorização e refinamento do Backlog do Produto, condução das sessões de *User Design* e validação contínua de escopo. |
| **Matheus Ribeiro Szervinsk** | 231011749 | Scrum Master (SM), Co-PO e Engenheiro de Requisitos | Facilitação dos ciclos de trabalho e governança do processo RAD, remoção de impedimentos, elicitação e modelagem sociotécnica de requisitos, apoio à gestão do backlog e condução de revisões por pares. |
| **Matheus Saraiva Camargo** | 241011475 | Arquiteto de Software e Banco de Dados | Definição da arquitetura de software, modelagem relacional do banco de dados no PostgreSQL (DER), infraestrutura conteinerizada com Docker e garantia de integridade transacional. |
| **Gustavo** | 241025659 | Gestão de Qualidade (QA) e Testes | Planejamento e execução de testes automatizados (unitários e de integração), inspeções de qualidade por checklists (Fagan), garantia dos critérios DoR e DoD e suporte aos testes de aceitação (UAT). |
| **Giovana Ferreira** | 231034707 | Engenheira Frontend e Designer UI/UX | Concepção da base de design no Figma (Design System e wireframes estruturais), desenvolvimento ágil de interfaces e componentes responsivos em React SPA, condução de testes de usabilidade e prototipagem evolutiva dos designs via frontend. |
| **Paulo Nery** | 221008740 | Engenheiro Backend | Desenvolvimento de APIs RESTful e serviços de backend, implementação da lógica de domínio e motor financeiro (apuração de diárias, horas de RVT, comissões e reembolsos) após validação das telas no frontend, além de controle de acesso (RBAC/LGPD). |

---

<a id="72-comunicacao"></a>
## 7.2 Comunicação

Nesta seção são detalhados os canais oficiais de comunicação, a frequência das interações e os ritos formais estabelecidos tanto para o alinhamento contínuo com a cliente parceira Maria Beatryz quanto para a coordenação interna da equipe Cascata Ágil.

### Matriz de Canais e Rituais de Comunicação

| Canal / Plataforma | Público Participante | Finalidade e Objetivo da Interação | Frequência Esperada |
| :--- | :--- | :--- | :--- |
| :fontawesome-brands-whatsapp: **WhatsApp (Grupo Oficial)** | Equipe Cascata Ágil e Maria Beatryz | Comunicação ágil para esclarecimento de dúvidas pontuais sobre regras de negócio, alinhamento de pautas e agendamento de reuniões. | Sob demanda (contínuo / diário) |
| :material-video-account: **Google Meet (Videoconferência)** | Equipe completa e Maria Beatryz | Condução das sessões de *User Design*, validação assistida de interfaces no Frontend/Figma e sessões guiadas de homologação incremental de software (RAD). | Quinzenal / Fechamento de iterações |
| :simple-figma: **Figma / Preview Frontend** | Designers UI/UX, Equipe e Cliente | Concepção da base visual no Figma e navegação interativa pelo Frontend em preview para homologação de usabilidade antes da implementação da lógica backend. | Contínuo nas fases de *User Design* |
| :fontawesome-brands-discord: **Discord (Servidor Interno)** | Integrantes da equipe Cascata Ágil | Alinhamentos diários rápidos (*Daily Stand-ups*), sessões de pareamento (*pair programming*), alinhamentos de arquitetura e resolução de bloqueios técnicos. | Diário / Múltiplas vezes na semana |
| :fontawesome-brands-github: **GitHub (Projects e Issues)** | Equipe de desenvolvimento | Gestão visual do Backlog de Produto, atribuição de tarefas por Milestone, rastreabilidade de requisitos e revisão de código por pares (*Code Review*). | Contínuo e assíncrono |
| **Portal MkDocs (GitHub Pages)** | Equipe, Cliente, Docente e Avaliadores | Centralização e publicação da documentação viva do projeto (*Docs as Code*), contendo todos os artefatos de requisitos, arquitetura e processos. | Atualização contínua a cada merge na branch principal |
| :fontawesome-brands-google-drive: **Google Drive (Repositório em Nuvem)** | Equipe Cascata Ágil | Armazenamento de gravações audiovisuais das reuniões, planilhas originais de elicitação e backups de dados sintéticos anonimizados. | Sob demanda após cada reunião |

### Dinâmica das Reuniões de Alinhamento com o Cliente

1. **Preparação Prévia da Pauta:** Toda reunião com a cliente parceira conta com pauta objetiva enviada com antecedência mínima de 24 horas via WhatsApp.
2. **Registro de Atas e Decisões:** As deliberações e novos acordos de requisitos tomados durante as reuniões são formalmente transcritos em atas detalhadas com pautas, discussões e listas de ações imediatas (*Action Items*), centralizadas no repositório dedicado de [Atas de Reuniões](../atas/index.md) e vinculadas às respectivas Issues do GitHub.
3. **Respeito à Disponibilidade do Cliente:** Os horários de reunião são combinados com antecedência, priorizando a rotina executiva da gestora para assegurar encontros focados e altamente produtivos.

---

<a id="73-processo-de-validacao-sociotecnica-e-homologacao-com-a-cliente"></a>
## 7.3 Processo de Validação Sociotécnica e Homologação com a Cliente

<h3>Diretrizes Metodológicas e Acordo de Trabalho</h3>

<p>
  A equipe <i>Cascata Ágil</i> formaliza nesta seção o compromisso metodológico de governança e rastreabilidade que rege a criação do <b>DUOC Finance</b>. Fica estabelecido o princípio de que <b>nenhuma linha de lógica de negócio complexa ou de persistência de banco de dados (scripts DDL, migrations, entidades do ORM ou tabelas físicas) é codificada antes do estabelecimento e validação dos designs de interface diretamente no Frontend (tendo o Figma como base de referência) junto à cliente parceira Maria Beatryz Vieira de Sousa</b>.
</p>

<p>
  Por razões de otimização de tempo e aderência aos princípios do <b>RAD (Rapid Application Development)</b>, a equipe adota uma abordagem <b>UI-First (Frontend Prototyping)</b>: concebe-se a base visual no Figma (Design System, paleta de cores, tipografia, tokens e wireframes estruturais essenciais), mas os designs detalhados das telas, componentes, formulários e fluxos de navegação são estabelecidos diretamente no código <b>Frontend (React SPA / Tailwind CSS)</b> com dados sintéticos e mockados. Dessa forma, elimina-se o retrabalho de desenhar exaustivamente cada tela no Figma para depois recodificá-la do zero, permitindo que a cliente valide uma aplicação web real e navegável no próprio navegador, para só então implementarmos a lógica por trás e a persistência definitiva.
</p>

<hr />

<div class="split-layout">
<div class="split-layout-left">

<h4>1. Regra de Estabelecimento dos Designs via Frontend com Base no Figma</h4>

<p>
  Prototipar e navegar pelas telas no Frontend antes de codificar regras de negócio complexas ou modelagem física de banco de dados é um mecanismo vital de economia de tempo e segurança sociotécnica. Em ecossistemas como o da DUOC, onde coexistem diferentes perfis de usuários (desde engenheiros e operários em campo lançando o Relatório de Viagem Técnica — RVT, até sócios acompanhando o custo real por contrato), ambiguidades no layout ou fluxo de dados causam retrabalho no backend.
</p>

<p>
  A estratégia da equipe estrutura-se em quatro passos contínuos:
</p>

<ul>
  <li><b>Base Conceitual no Figma:</b> O Figma é utilizado para estabelecer as fundações de identidade visual, guia de estilos, tokens e wireframes conceituais essenciais, sem despender tempo excessivo detalhando todas as variações de estado e fluxos secundários na ferramenta gráfica.</li>
  <li><b>Estabelecimento dos Designs no Frontend:</b> As telas completas, formulários, componentes responsivos e navegação são construídos diretamente no Frontend (React SPA / Tailwind CSS), operando com dados mockados e sintéticos. O próprio frontend atua como o protótipo funcional e interativo do produto.</li>
  <li><b>Validação Sociotécnica no Frontend:</b> A cliente Maria Beatryz interage diretamente com as telas no navegador durante as sessões guiadas, validando a ergonomia, os campos necessários e a coerência visual antes de qualquer esforço de infraestrutura de banco de dados.</li>
  <li><b>Implementação Posterior da Lógica e Persistência:</b> Uma vez consolidados e aprovados os designs e contratos de tela no Frontend, a equipe implementa a <b>lógica de negócio por trás</b> (algoritmos do motor financeiro, apuração de diárias, regras de validação, DDL/migrations no Supabase e endpoints de API).</li>
</ul>

<h4>2. Dinâmica das Sessões Guiadas com a Cliente</h4>

<p>
  As sessões de validação ocorrem via Google Meet com duração máxima de 50 minutos e seguem a seguinte dinâmica estipulada:
</p>

<ul>
  <li><b>Condução e Facilitação:</b> A reunião é conduzida pelo responsável de UX / Product Owner da equipe.</li>
  <li><b>Comando do Protótipo no Frontend (Sessão Invertida):</b> O link da aplicação web em ambiente de preview/staging (com telas e mocks) é compartilhado com a cliente <b>Maria Beatryz</b>. Ela <b>compartilha sua própria tela e assume o controle da navegação</b>. A equipe atua apenas instruindo os cenários operacionais (ex: <i>"Maria, tente lançar as diárias de uma viagem de campo no RVT e visualizar o demonstrativo de custos"</i>). Esse formato expõe falhas de usabilidade e dúvidas de negócio no comportamento real da interface.</li>
  <li><b>Registro de Sugestões e Mudanças:</b> As observações e apontamentos de melhoria são registrados na ata da reunião e geram ajustes imediatos nas telas do frontend ou na especificação de regras.</li>
</ul>

<h4>3. Critérios Formais de Aceite (DoR e DoD)</h4>

<p><b>Definition of Ready (DoR) — Pronta para Implementação de Lógica e Persistência:</b></p>
<ol>
  <li>História de Usuário (US) descrita no padrão <i>Como [Papel], Quero [Ação], Para que [Benefício]</i>.</li>
  <li>Base visual concebida no Figma e <b>design de tela e componentes interativos já estabelecidos e navegáveis no Frontend</b> (com dados mockados).</li>
  <li><b>Aprovação da cliente Maria Beatryz</b> registrada em ata ou sessão sobre os layouts, campos de entrada e fluxo operacional.</li>
  <li>Critérios de aceite da história definidos e formalizados no formato BDD/Gherkin.</li>
  <li>Contrato de banco de dados, endpoints e regras de domínio previstos e mapeados (sem DDLs executados no banco de produção).</li>
</ol>

<p><b>Definition of Done (DoD) — Entregue, Integrada e Aceita:</b></p>
<ol>
  <li>Lógica de negócio e camadas de persistência desenvolvidas e acopladas à interface frontend já homologada.</li>
  <li>Cobertura de testes automatizados (unitários para regras de cálculo e de integração para APIs) validada no pipeline CI.</li>
  <li>Demonstração funcional completa do software rodando em ambiente de Staging na Vercel com dados sintéticos LGPD.</li>
  <li>Código integrado e aprovado via <i>Pull Request</i> na branch principal com revisão por pares.</li>
  <li>Termo de Aceite ou validação formal registrada na documentação.</li>
</ol>

<h4>4. Testes de Aceitação de Usuário (UAT)</h4>

<p>
  Após a implementação da lógica e persistência e a verificação interna de qualidade, a funcionalidade integrada é disponibilizada em ambiente de <b>Staging/Homologação</b>. A cliente Maria Beatryz recebe credenciais de acesso para executar o <b>UAT (User Acceptance Testing)</b>.
</p>

<p>
  Para viabilizar testes realistas e seguros em termos de <b>LGPD (Lei Geral de Proteção de Dados)</b>:
</p>

<ul>
  <li>É gerada uma massa de dados sintética baseada na estrutura real de custos, contratos, horas de RVT e colaboradores da DUOC.</li>
  <li>Nomes, CPFs, salários reais e documentos sensíveis de colaboradores e clientes são totalmente anonimizados/pseudonimizados.</li>
  <li>A cliente realiza simulações ponta a ponta (ex: lançamento do ponto, fechamento da folha e cruzamento de custos por projeto).</li>
  <li>Havendo divergência de regras, o ciclo entra na janela dedicada de correções; caso contrário, a funcionalidade é homologada para release.</li>
</ul>

</div>
<div class="split-layout-right">

<h3>Fluxo do Ciclo de Validação</h3>

<pre class="mermaid">
flowchart TD
    A["1. Elicitação das Regras / US"] --> B["2. Base Visual no Figma (Design System e Wireframes)"]
    B --> C["3. Estabelecimento dos Designs via Frontend (UI com Mocks)"]
    C --> D["4. Homologação Guiada com a Cliente via Meet (Sessão Invertida)"]
    D --> E{"Design & Fluxo Aprovados?"}
    
    E -- "NÃO" --> C
    E -- "SIM" --> F["5. DoR Atendido / Implementação da Lógica & Persistência"]
    
    F --> G["6. Integração Contínua e Deploy em Staging"]
    G --> H["7. Testes UAT Anonimizados com a Cliente"]
    H --> I["8. Aceite Formal e DoD Atendido"]
</pre>

</div>
</div>

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 05/09/2026 | Levantamento da equipe, papéis, canais e rito de validação | Eric Araújo, Gustavo | Matheus Ribeiro Szervinsk |
| `1.1` | 07/09/2026 | Detalhamento dos ritos sociotécnicos e matriz de canais de comunicação | Eric Araújo, Gustavo | Matheus Ribeiro Szervinsk |
| `2.0` | 15/09/2026 | Unificação integral dos artefatos 7.1 a 7.3 em página única contínua | Equipe Cascata Ágil | Matheus Ribeiro Szervinsk |
| `2.1` | 21/09/2026 | Refinamento metodológico do fluxo de validação (UI-First): base conceitual no Figma, estabelecimento ágil dos designs via Frontend com mocks e implementação posterior da lógica de backend e persistência após validação do DoR | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |