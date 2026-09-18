# Capítulo 3: Intervenção Social

## Objetivo do Capítulo

Apesar da DUOC Arquitetura e Engenharia ser uma mini empresa consolidada no setor privado, o objetivo deste capítulo é avaliar o **DUOC Finance** como um agente de intervenção social e cultural dentro da estrutura da empresa, indo além de sua dimensão puramente tecnológica, mas social.

Sob a ótica da **Engenharia de Requisitos Sociotécnica**, analisa-se a transição dos fluxos informacionais informais para um modelo centralizado a partir dos seguintes eixos:

*   **Reorganização de Práticas e Poder:** A substituição do controle descentralizado de planilhas partilhadas por uma plataforma estruturada com restrição de acessos reorganiza práticas profissionais consolidadas, altera relações de visibilidade sobre as informações e desloca dinâmicas de confiança e autonomia.
*   **Relações de Trabalho:** Avaliação de como a formalização e a centralização dos dados impactam a rotina operacional e as interações cotidianas entre os colaboradores.
*   **Letramento Digital:** Mapeamento da curva de aprendizagem, acolhimento e capacitação técnica demandada pela nova solução frente aos diferentes perfis da equipe.
*   **Governança Corporativa:** Fortalecimento da segurança informacional, consistência dos registros e conformidade institucional da empresa.

## Conjunto de Artefatos

Este capítulo é composto pelas seguintes seções analíticas:

*   **Impactos Pretendidos:** Mapeamento das transformações organizacionais e sociais positivas planejadas pela introdução do software.
*   **Efeitos Emergentes:** Diagnóstico de possíveis comportamentos colaterais imprevistos, resistências de adoção e respectivas estratégias sociotécnicas de mitigação.

---

<a id="31-impactos-pretendidos"></a>
## 3.1 Impactos Pretendidos

A implementação do **DUOC Finance** tem como objetivo promover transformações organizacionais e culturais estruturadas na empresa parceira, divididas nos seguintes tópicos:

*   **Transição do Registro Informal para Contínuo e Auditável:**
    *   Substituição do modelo baseado em comunicação verbal, memória individual e preenchimento manual de planilhas por registros contínuos de horas técnicas (RVT) e ponto eletrônico.
    *   Eliminação da dependência de quem "lembra" ou "sabe" determinada informação, consolidando um histórico auditável e consistente.
    *   Redução drástica de divergências de dados e retrabalho administrativo no fechamento mensal.

*   **Segurança da Informação e Conformidade com a LGPD:**
    *   Adequação às diretrizes da Lei Geral de Proteção de Dados no tratamento de informações salariais e pessoais dos colaboradores.
    *   Superação da prática anterior de planilhas abertas compartilhadas, que expunha dados sensíveis indiscriminadamente a todos os envolvidos.
    *   Implementação de segmentação de visibilidade por papéis de acesso (RBAC), substituindo a dependência exclusiva do bom senso administrativo por governança formal.

*   **Mensuração Fidedigna e Rastreabilidade do Esforço de Trabalho:**
    *   Cálculo automatizado e unificado de horas extras, comissões e bonificações a partir de uma fonte única de dados.
    *   Eliminação de divergências decorrentes do cruzamento manual entre tabelas isoladas de ponto, benefícios e horas de campo.
    *   Ampliação da rastreabilidade e da visibilidade gerencial sobre os custos reais de mão de obra por projeto.

---

<a id="32-efeitos-emergentes-colaterais-e-mitigacoes"></a>
## 3.2 Efeitos Emergentes (Colaterais) e Mitigações

A introdução do **DUOC Finance** tende a produzir efeitos que extrapolam os objetivos originalmente pretendidos, decorrentes da própria natureza sociotécnica da mudança organizacional. Os principais efeitos emergentes identificados e suas respectivas medidas de mitigação estruturam-se nos seguintes tópicos:

*   **Resistência Tecnológica e Letramento Digital (Colaboradores de Campo):**
    *   *Desafio:* Resistência por parte de colaboradores menos habituados ao uso de sistemas digitais — particularmente operários e colaboradores de campo, cuja rotina de trabalho anterior não exigia familiaridade com interfaces estruturadas.
    *   *Fundamentação:* Essa resistência não decorre de má vontade, mas da exigência de um novo tipo de letramento computacional antes dispensável para o desempenho da função.
    *   *Mitigação:* Design *mobile-first* com áreas de toque generosas, fluxos de preenchimento em até 3 etapas e sessões práticas de acolhimento técnico.

*   **Redistribuição de Papéis e Centralização Informal (Equipe de RH e Administrativo):**
    *   *Desafio:* Resistência decorrente da perda da centralização informal que a equipe antes exercia sobre o processo de gestão de pessoal.
    *   *Fundamentação:* Na medida em que o sistema distribui esse controle entre diferentes papéis de acesso, é esperado que a equipe perceba uma redução de sua influência direta sobre o fluxo de informações.
    *   *Mitigação:* Comunicação clara de que a mudança representa um remanejamento de função — não uma substituição —, no qual a equipe mantém parcela relevante de responsabilidade e poder de decisão sobre os processos.

*   **Desconfiança sobre Sigilo versus Transparência Informal:**
    *   *Desafio:* Desconfiança gerada pela perda da transparência informal hoje existente, na qual o modelo de planilha compartilhada permitia visualizar informações de todos os demais, inclusive dados salariais.
    *   *Fundamentação:* A introdução do controle de acesso segmentado (RBAC), embora motivada por boas práticas de segurança e conformidade legal com a LGPD, pode ser interpretada inicialmente como redução de transparência.
    *   *Mitigação:* Esclarecimento didático sobre as exigências normativas da LGPD e as políticas de proteção aos dados dos próprios colaboradores, demonstrando que o sigilo assegura a privacidade de todos.

*   **Dualidade entre Sensação de Vigilância e Garantia de Proteção:**
    *   *Desafio:* O controle contínuo e estruturado de horas e presença tende a gerar, no primeiro momento, receio de vigilância constante e fiscalização ostensiva entre os colaboradores de campo.
    *   *Fundamentação:* O mesmo registro rigoroso é o instrumento formal que garante a apuração justa e fidedigna de horas extras, adicionais e bonificações devidas.
    *   *Mitigação:* Enquadramento comunicacional positivo com ênfase na justiça e no reconhecimento profissional, consolidando a percepção de que a ferramenta atua como garantia de direitos e proteção.

### Tabela Estruturada de Efeitos Colaterais e Medidas Mitigatórias

| Efeito Colateral Mapeado | Descrição do Risco Humano/Social | Causa Primária Provável | Estratégia de Mitigação no Sistema e no Processo |
| :--- | :--- | :--- | :--- |
| **Sensação de Vigilantismo / Microgestão** | Receio dos técnicos de campo de que o preenchimento do RVT seja um instrumento puramente punitivo ou de fiscalização ostensiva. | Foco histórico em controle de horários e cobranças administrativas sem contrapartida visível. | Enquadramento comunicacional positivo: enfatizar que o RVT garante o cômputo formal de horas extras, adicionais e ressarcimento ágil de despesas. |
| **Ansiedade de Inaptidão Digital** | Insegurança e bloqueio no uso da ferramenta por profissionais de campo com menor grau de letramento computacional. | Telas burocráticas, formulários longos e termos técnicos desconhecidos da rotina de obras. | Design *mobile-first* com poucos cliques, áreas de toque generosas, mensagens claras de confirmação e sessões práticas de acolhimento. |
| **Burocratização no Canteiro de Obras** | Percepção de que preencher o sistema consome tempo útil de fiscalização ou execução técnica das obras. | Excesso de campos obrigatórios no momento do preenchimento e exigência de conexão ininterrupta. | Fluxo simplificado de lançamento em até 3 etapas, autopreenchimento de dados do contrato e suporte a preenchimento rápido no smartphone. |
| **Tensão Salarial e Desconfiança sobre Sigilo** | Atritos internos motivados pelo desconhecimento sobre quem tem acesso a salários e valores de comissões. | Histórico de compartilhamento de dados financeiros em planilhas abertas para múltiplos usuários. | Implementação estrita de controle de acesso por papéis (RBAC) conforme a LGPD, deixando explícito quem visualiza cada conjunto de dados. |

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 05/09/2026 | Levantamento inicial dos impactos sociotécnicos e efeitos colaterais | Matheus Saraiva | Matheus Ribeiro Szervinsk |
| `1.1` | 07/09/2026 | Preenchimento da matriz de riscos e reestruturação analítica em tópicos | Matheus Saraiva | Matheus Ribeiro Szervinsk |
| `2.0` | 15/09/2026 | Unificação integral dos artefatos 3.1 e 3.2 em página única contínua | Equipe Cascata Ágil | Matheus Ribeiro Szervinsk |