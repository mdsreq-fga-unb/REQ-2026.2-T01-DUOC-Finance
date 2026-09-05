# 1. Cenário Atual do Cliente e do Negócio

## 1.1 Identificação do Cliente/Parceiro
* **Nome:** DUOC Arquitetura e Engenharia (CNPJ: 53.616.784/0001-43)
* **Tipo:** Microempresa (ME) privada do setor de arquitetura, engenharia e construção civil.
* **Representante:** Maria Beatryz Vieira de Sousa
* **Forma de contato:** (61) 991880352
* **Vínculo com o projeto:** Cliente real e parte interessada principal, responsável por validar o escopo, prioridades e entregas do sistema.

---

## 1.2 Introdução ao Negócio e Contexto
A DUOC Arquitetura e Engenharia LTDA ME (CNPJ: 53.616.784/0001-43) é uma microempresa do setor privado fundada em 23 de janeiro de 2024, com sede de operações localizada em Brasília DF. Inicialmente registrada sob a atividade econômica principal de instalação e manutenção elétrica, a DUOC rapidamente evoluiu suas operações para um modelo de negócios híbrido e multidisciplinar. Atualmente, a organização integra serviços de concepção e projeto arquitetônico, engenharia civil estrutural, projetos complementares (instalações hidrossanitárias e elétricas) e coordenação técnica com acompanhamento físico de canteiros de obras.

A rotina operacional da empresa caracteriza-se por um intenso fluxo sociotécnico de informações, que conecta equipes técnicas internas (sócios, arquitetos, engenheiros especialistas, estagiários e operários) a múltiplos atores externos (clientes residenciais e comerciais, fornecedores e órgãos reguladores). Com a expansão de contratos, a gestão descentralizada baseada em ferramentas fragmentadas (e-mails, WhatsApp e planilhas paralelas de Excel) gerou gargalos gerenciais severos. O cenário atual evidencia a inconsistência no registro de horas técnicas (RVT), falta de padronização no controle de folha de pagamento e reembolso de colaboradores, e opacidade no cálculo do custo real de mão de obra por projeto. Diante dessa conjuntura, o projeto visa reestruturar a infraestrutura administrativa da DUOC por meio de uma solução integrada de Departamento Pessoal e Gestão Financeira.

---

## 1.3 Rich Picture
A DUOC opera em um modelo híbrido e multidisciplinar, atendendo a projetos residenciais, comerciais e de infraestrutura. O fluxo de trabalho abrange desde a captação comercial e concepção arquitetônica/estrutural até a compatibilização de projetos complementares e acompanhamento de obras. A rotina envolve intensa troca de informações entre equipes internas e agentes externos.

<figure markdown="span">
  ![Rich Picture - DUOC Finance](../assets/images/rich-picture.png){ width="90%" }
  <figcaption>Figura 1: Rich Picture do ecossistema sociotécnico e escopo do DUOC Finance.</figcaption>
</figure>

---

## 1.4 Identificação da Oportunidade ou Problema
O problema central é a inconsistência gerencial e a opacidade na apuração da rentabilidade de contratos da DUOC, causadas pela fragmentação dos registros operacionais (RVT e ponto) em ferramentas desconectadas. O detalhamento do problema, do Diagrama de Ishikawa e das suas causas está na [Seção 1.4 detalhada](capitulo-1/1.4-problema-ishikawa.md).

---

## 1.5 Desafios do Projeto
O principal desafio do projeto é viabilizar tecnicamente a integração entre o registro de horas operacionais (RVT) de uma equipe com diferentes níveis de letramento tecnológico (desde engenheiros especialistas até operários de obra) e o módulo de processamento financeiro (folha de pagamento e comissões). Além disso, há o desafio de restringir estritamente o escopo ao Departamento Pessoal e Financeiro para entregar um Produto Mínimo Viável (MVP) funcional dentro de um semestre letivo, evitando que a solução tente englobar módulos de gestão de engenharia e se transforme em um ERP de construção inatingível.

---

## 1.7 Segmentação de Clientes

### Pessoas Físicas
Clientes finais de projetos e construções residenciais unifamiliares.

* **Perfil Humano de Interação:** São clientes com perfil predominantemente não técnico (leigos em engenharia, arquitetura e desenvolvimento de software). Valorizam uma comunicação simples, transparente, visual e com descrições altamente contextuais. Suas principais expectativas em relação à gestão financeira da obra são a clareza sobre o cumprimento de etapas contratuais, a previsibilidade de desembolso financeiro por fase da obra e a rastreabilidade simples das notas fiscais e compras de materiais.

### Empresas Corporativas
Organizações de médio e grande porte que contratam reformas comerciais, layout de escritórios ou soluções de automação e IoT predial.

* **Perfil Humano de Interação:** Os representantes de interface direta com a DUOC são gestores de facilities, gerentes de expansão ou diretores administrativos. Possuem um perfil focado em negócios, metas gerenciais e governança corporativa. Seu letramento tecnológico é corporativo (não focado em engenharia de campo). Exigem da plataforma relatórios consolidados em formatos padrão (como exportação em planilhas ou PDF estruturado), acompanhamento preciso de horas técnicas alocadas (RVT) no seu projeto corporativo e o cumprimento estrito de normas contratuais e prazos rígidos.

### Construtoras Consolidadas
Empresas de incorporação civil e infraestrutura urbana que terceirizam para a DUOC seus projetos complementares e serviços de instalações prediais.

* **Perfil Humano de Interação:** Os profissionais de contato são engenheiros residentes, diretores de engenharia, coordenadores de compras e fiscais de contrato. Trata-se de um perfil altamente técnico e analítico. Estão acostumados a dinâmicas rigorosas de medições de serviço, especificações técnicas detalhadas de custos e exigem rígida conformidade legal e trabalhista (uma vez que as construtoras são solidariamente responsáveis pelos encargos da DUOC). Para interagir com as medições e apuração de custos de mão de obra gerados pelo sistema da DUOC, eles demandam dados estruturados, controle exato de apontamento de horas técnicas e operacionais dos colaboradores (RVT) e relatórios de auditoria que facilitem a prestação de contas dos serviços terceirizados.