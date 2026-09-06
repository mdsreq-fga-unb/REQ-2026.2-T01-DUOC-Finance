# 2. Solução Proposta

## 2.1 Objetivo Geral do Produto
O objetivo geral deste projeto é otimizar e reestruturar os fluxos operacionais, gerenciais e de pessoal da DUOC Arquitetura e Engenharia, mitigando a fragmentação de dados, retrabalho administrativo e riscos de passivos trabalhistas por meio de uma solução digital integrada de Departamento Pessoal e Gestão Financeira. Com essa iniciativa, busca-se estabelecer o controle preciso de custos de mão de obra por contrato (via registro estruturado de RVT) e assegurar a governança e conformidade legal das operações da empresa, servindo como uma alavanca estratégica de eficiência e rentabilidade para os sócios da organização.

---

## 2.2 Objetivos Específicos (OE)
Para viabilizar o alcance do objetivo geral, o projeto visa atingir as seguintes metas de negócio e operacionais:

* **OE1:** Eliminar a duplicidade de lançamentos e inconsistências administrativas na DUOC, unificando e padronizando o fluxo de registros de pessoal (ponto, férias e benefícios) e do Relatório de Viagem Técnica (RVT) em uma base de dados compartilhada.
* **OE2:** Mitigar falhas operacionais, atrasos e riscos de passivos trabalhistas no fechamento mensal, através da automação segura de cálculos de folha de pagamento, comissões contratuais, encargos previdenciários e reembolsos de despesas.
* **OE3:** Garantir a visibilidade real sobre a lucratividade de cada contrato, correlacionando de forma direta e automática o apontamento de horas técnicas (RVT) da equipe de engenharia aos respectivos custos financeiros de cada projeto.
* **OE4:** Resguardar a organização contra riscos de incidentes e inconformidades jurídicas, estabelecendo uma governança rigorosa sobre o tratamento e a privacidade de dados pessoais e salariais de colaboradores e clientes, em estrito cumprimento às exigências da LGPD.

---

## 2.5 Pesquisa de Mercado e Análise Competitiva
O mercado de tecnologia oferece dois grandes grupos de soluções que atendem, de forma isolada, às necessidades operacionais de escritórios de arquitetura e engenharia:

1. **Sistemas de Gestão de Projetos e Obras** (*Ex: ArqProject, Vobi, Projetools, Projete.app*): São plataformas consolidadas no relacionamento com o cliente e no ciclo de vida físico da obra. Oferecem módulos excelentes de briefing, orçamentação, cronograma (Gantt), compras de materiais e acompanhamento de fluxo de caixa comercial.
2. **Sistemas Especializados de Departamento Pessoal e Ponto** (*Ex: Convenia, Tangerino, Pontomais, GestãoClick*): São softwares robustos voltados à gestão de recursos humanos corporativos, cobrindo o registro eletrônico de ponto, gestão de férias, benefícios e geração de folhas de pagamento em conformidade com as leis trabalhistas.

### 2.5.1 O Gargalo da Fragmentação e o Custo de Integração
O problema crítico enfrentado pela DUOC — e comum a microempresas do setor — não é a falta de opções de software nessas verticais, mas sim a desconexão sistêmica entre elas. Adotar duas ferramentas de prateleira distintas exigiria que a DUOC realizasse a conciliação manual de dados. Para apurar o custo real de mão de obra por contrato, o gestor financeiro seria obrigado a exportar relatórios de horas técnicas (RVT) do sistema de pessoal, cruzar esses dados com planilhas salariais e, em seguida, imputar manualmente os custos agregados no sistema de projetos. Essa ponte de reconciliação manual mantém o risco de erros operacionais, retrabalho administrativo e opacidade financeira ativos no cotidiano do escritório.

### 2.5.2 O Diferencial Estratégico da Solução Proposta
O produto proposto para a DUOC não visa competir com ERPs gigantes de construção ou sistemas massivos de DP corporativo. O seu valor estratégico consiste em atuar como um **Hub Centralizador e Orquestrador do Fluxo Administrativo**, diferenciando-se pelos seguintes pilares:

* **Unificação do Fluxo de Informação por Papéis (RBAC):** A plataforma centraliza em um único ecossistema as interações de diferentes atores da DUOC sob chaves de acesso e permissões customizadas. O operário e o engenheiro de campo utilizam continuamente a interface simplificada para lançar o ponto e o Relatório de Viagem Técnica (RVT). O administrativo/RH recebe esse fluxo em tempo real para consolidar os cálculos de folha e comissões. Os sócios, por sua vez, acessam um painel gerencial que traduz automaticamente essas horas técnicas em custo real consolidado por contrato.
* **Extensibilidade e Prontidão para Integração:** Reconhecendo que o escopo do projeto é focado em um MVP de alta eficiência para um ciclo acadêmico, o sistema é arquitetado sob o conceito de integrabilidade. O motor de dados é projetado para permitir futuras conexões (via APIs RESTful ou exportações estruturadas) com softwares contábeis e de gestão de obras de mercado. Isso evita o retrabalho de desenvolver módulos complexos de engenharia civil que já existem no mercado, focando os recursos de desenvolvimento estritamente na dor mais latente da empresa: o nexo de causalidade entre tempo técnico alocado e custo financeiro.
* **Foco na Segurança de Dados Sensíveis e LGPD:** Ao contrário de planilhas compartilhadas e ferramentas financeiras genéricas que deixam dados de folha visíveis a todos, o sistema segmenta de forma segura as permissões de visibilidade das informações financeiras e de departamento pessoal em estrito cumprimento com a LGPD.

---

## Fontes Consultadas

* ArqProject: <https://arqproject.com.br>
* Convenia: <https://convenia.com.br>
* GestãoClick: <https://gestaoclick.com.br>
* Projete.app: <https://projete.app.br>
* Projetools: <https://projetools.com.br>
* Tangerino: <https://tangerino.com.br>
* Vobi: <https://vobi.com.br>