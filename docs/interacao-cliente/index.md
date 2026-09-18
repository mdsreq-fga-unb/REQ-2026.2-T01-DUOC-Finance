# Capítulo 7: Interação entre Equipe e Cliente

## Objetivo do Capítulo

Este capítulo formaliza o modelo de governança, cooperação e canais de comunicação estabelecidos para o projeto **DUOC Finance**. Ele descreve a estrutura organizacional interna da equipe Cascata Ágil, a definição clara de responsabilidades de cada papel e os ritos formais de contato e homologação que garantem a validação contínua dos artefatos junto à cliente parceira.

## Conjunto de Artefatos

A governança sociotécnica do projeto apoia-se em:

*   **Composição da Equipe:** Divisão clara de atribuições e papéis da equipe sob o modelo RAD adaptado (abordagem híbrida).
*   **Plano de Comunicação:** Estrutura matricial contendo os canais de interação interna e externa, acompanhados de sua finalidade e frequência.
*   **Processo de Validação:** Definição do fluxo regulatório para aprovação de interfaces no Figma, prototipagem e homologação de incrementos de código (UAT).

> [!NOTE]
> O registro histórico completo de atas, pautas prévias e listas de ações (*Action Items*) foi centralizado no **[Painel Geral de Atas de Reuniões](../atas/index.md)**.

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
| **Giovana Ferreira** | 231034707 | Engenheira Frontend e Designer UI/UX | Concepção dos protótipos navegáveis de alta fidelidade no Figma (desktop e mobile), testes de usabilidade com a cliente, concepção do design system e desenvolvimento da interface responsiva em React SPA. |
| **Carlos Gabriel** | 242015450 | Engenheiro Frontend e Designer UI/UX | Prototipação e fluxo de interação no Figma, implementação de telas e componentes em React SPA com Tailwind CSS, foco em usabilidade móvel (*mobile-first*) para o canteiro de obras e acessibilidade (IHC). |
| **Paulo Nery** | 221008740 | Engenheiro Backend | Desenvolvimento de APIs RESTful e serviços de backend, implementação do motor de regras financeiras da folha de pagamento, cálculo de horas de RVT, comissões, reembolsos e controle de acesso e segurança (RBAC/LGPD). |

---

<a id="72-comunicacao"></a>
## 7.2 Comunicação

Nesta seção são detalhados os canais oficiais de comunicação, a frequência das interações e os ritos formais estabelecidos tanto para o alinhamento contínuo com a cliente parceira Maria Beatryz quanto para a coordenação interna da equipe Cascata Ágil.

### Matriz de Canais e Rituais de Comunicação

| Canal / Plataforma | Público Participante | Finalidade e Objetivo da Interação | Frequência Esperada |
| :--- | :--- | :--- | :--- |
| :fontawesome-brands-whatsapp: **WhatsApp (Grupo Oficial)** | Equipe Cascata Ágil e Maria Beatryz | Comunicação ágil para esclarecimento de dúvidas pontuais sobre regras de negócio, alinhamento de pautas e agendamento de reuniões. | Sob demanda (contínuo / diário) |
| :material-video-account: **Google Meet (Videoconferência)** | Equipe completa e Maria Beatryz | Condução das sessões de *User Design*, validação assistida de protótipos de alta fidelidade e sessões guiadas de homologação incremental de software (RAD). | Quinzenal / Fechamento de iterações |
| :simple-figma: **Figma (Workspace)** | Designers UI/UX, Equipe e Cliente | Prototipação navegável de alta fidelidade (Desktop/Mobile), anotações em tela e homologação de requisitos pré-desenvolvimento. | Contínuo nas fases de *User Design* |
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
  A equipe <i>Cascata Ágil</i> formaliza nesta seção o compromisso metodológico de governança e rastreabilidade que rege a criação do <b>DUOC Finance</b>. Fica estabelecido o princípio inflexível de que <b>nenhuma linha de persistência de banco de dados (scripts DDL, migrations, entidades do ORM ou tabelas) é codificada antes da aprovação e homologação prévia do protótipo de alta fidelidade no Figma pela cliente parceira Maria Beatryz Vieira de Sousa</b>.
</p>

<p>
  Esta diretriz visa blindar o escopo do projeto, proteger o orçamento de horas da equipe de desenvolvimento e assegurar a máxima aderência às rotinas reais de Departamento Pessoal e Gestão Financeira da DUOC.
</p>

<hr />

<div class="split-layout">
<div class="split-layout-left">

<h4>1. Regra de Homologação Prévia no Figma</h4>

<p>
  Prototipar e navegar interativamente pelas telas no Figma antes de iniciar a codificação ou modelagem de banco de dados é um mecanismo de segurança sociotécnica. Em ecossistemas como o da DUOC, onde coexistem diferentes perfis de usuários (desde engenheiros e operários em campo lançando o Relatório de Viagem Técnica — RVT, até sócios acompanhando o custo real por contrato), pequenas ambiguidades no entendimento das regras de negócio podem resultar em retrabalho catastrófico no código backend.
</p>

<p>
  Modificar um fluxo de telas, um campo de entrada ou a disposição visual de um cálculo de comissão no Figma consome minutos do designer. Alterar essa mesma regra após o banco de dados persistido, com APIs implementadas e regras de negócios acopladas, exige refatoração de migrations, alteração de DTOs, reescrita de testes unitários e alto custo de regressão. A validação prévia no Figma garante que a equipe e a cliente concordam exatamente com o <b>comportamento da solução</b> antes do esforço de codificação.
</p>

<h4>2. Dinâmica das Sessões Guiadas com a Cliente</h4>

<p>
  As sessões de validação ocorrem via Google Meet com duração máxima de 50 minutos e seguem a seguinte dinâmica estipulada:
</p>

<ul>
  <li><b>Condução e Facilitação:</b> A reunião é conduzida pelo responsável de UX / Product Owner da equipe.</li>
  <li><b>Comando do Protótipo (Sessão Invertida):</b> O link do protótipo interativo do Figma é compartilhado diretamente com a cliente <b>Maria Beatryz</b>. Ela <b>compartilha sua própria tela e assume o controle da navegação</b>. A equipe atua apenas instruindo os cenários de uso (ex: <i>"Maria, tente lançar as horas técnicas de uma viagem de campo no RVT e aprovar a folha do mês"</i>). Esse formato expõe com clareza falhas de usabilidade e dúvidas operacionais em tempo real.</li>
  <li><b>Registro de Sugestões e Mudanças:</b> As observações e sugestões de mudança são anotadas no momento da reunião por um membro da equipe (Engenheiro de Requisitos / Relações Públicas) diretamente nos comentários do Figma e na ata da reunião. Cada ponto alterado gera um item no backlog de ajustes de prototipagem.</li>
</ul>

<h4>3. Critérios Formais de Aceite (DoR e DoD)</h4>

<p><b>Definition of Ready (DoR) — Pronta para Desenvolvimento:</b></p>
<ol>
  <li>História de Usuário (US) descrita no padrão <i>Como [Papel], Quero [Ação], Para que [Benefício]</i>.</li>
  <li>Protótipo de Alta Fidelidade no Figma correspondente à funcionalidade totalmente desenhado e validado pela equipe.</li>
  <li><b>Aprovação por escrito da cliente Maria Beatryz</b> gravada na ata da sessão ou nos comentários do Figma.</li>
  <li>Critérios de aceite da história definidos e validados.</li>
  <li>Contrato de banco de dados e endpoints previstos (sem DDLs executados).</li>
</ol>

<p><b>Definition of Done (DoD) — Entregue e Aceita:</b></p>
<ol>
  <li>Código-fonte desenvolvido e aderente à arquitetura proposta.</li>
  <li>Cobertura de testes automatizados (unitários e de integração) validada no pipeline.</li>
  <li>Demonstração funcional e homologada do software rodando em ambiente de Staging.</li>
  <li>Código integrado e aprovado via <i>Pull Request</i> na branch principal.</li>
  <li>Termo de Aceite registrado na documentação.</li>
</ol>

<h4>4. Testes de Aceitação de Usuário (UAT)</h4>

<p>
  Após a codificação e verificação interna de qualidade, a funcionalidade é implantada em ambiente de <b>Staging/Homologação</b>. A cliente Maria Beatryz recebe credenciais de acesso para executar o <b>UAT (User Acceptance Testing)</b>.
</p>

<p>
  Para viabilizar testes realistas e seguros em termos de <b>LGPD (Lei Geral de Proteção de Dados)</b>:
</p>

<ul>
  <li>É gerada uma massa de dados sintética baseada na estrutura real de custos, contratos, horas de RVT e colaboradores da DUOC.</li>
  <li>Nomes, CPFs, salários reais e documentos sensíveis de colaboradores e clientes são totalmente anonimizados/pseudonimizados.</li>
  <li>A cliente realiza simulações ponta a ponta (ex: lançamento do ponto, fechamento da folha e cruzamento de custos por projeto).</li>
  <li>Havendo divergência de regras, o ciclo retorna para ajuste; caso contrário, a funcionalidade é homologada para release.</li>
</ul>

</div>
<div class="split-layout-right">

<h3>Fluxo do Ciclo de Validação</h3>

<pre class="mermaid">
flowchart TD
    A["1. Elicitação das Regras / US"] --> B["2. Prototipagem no Figma"]
    B --> C["3. Homologação Guiada com a Cliente via Meet"]
    C --> D{"Aprovado Formalmente?"}
    
    D -- "NÃO" --> B
    D -- "SIM" --> F["4. DoR Alcançado / Construção RAD"]
    
    F --> G["5. Deploy em Staging (Homologação)"]
    G --> H["6. Testes UAT Anonimizados"]
    H --> I["7. Aceite Formal e DoD"]
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