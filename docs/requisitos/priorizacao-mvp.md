# Capítulo 8: Priorização e MVP

## 8.4 Método de Estimativa

As notas são estimativas relativas para apoiar o planejamento do MVP, não compromissos de prazo. O esforço é expresso em **pessoa-hora** para análise técnica, implementação, integração e testes de cada RF. Complexidade e lacuna de capacidade são avaliadas separadamente, considerando as dependências do requisito e o domínio técnico disponível na equipe.

### Escala de Esforço

| Nota | Esforço estimado | Referência para estimativa |
| :---: | :--- | :--- |
| **1** | Até 2 horas | Alteração localizada, com implementação e verificação simples. |
| **2** | Mais de 2 até 8 horas | Fluxo pequeno, com poucas regras e integração limitada. |
| **3** | Mais de 8 até 24 horas | Fluxo com múltiplas etapas, validações ou integração entre componentes. |
| **4** | Mais de 24 horas | Fluxo amplo, transversal ou sujeito a experimentação e retrabalho relevantes. |

Quando a estimativa em horas ultrapassar o limite de uma faixa, aplica-se a faixa seguinte. As horas são estimadas para o requisito como um todo; a nota de esforço é obtida diretamente pela faixa correspondente.

### Escala de Complexidade

| Nota | Dependências e incertezas |
| :---: | :--- |
| **1** | Sem dependência relevante; regra e resultado são diretos e conhecidos. |
| **2** | Poucas dependências locais; regras estáveis e incertezas pequenas. |
| **3** | Dependência entre componentes ou regras de negócio relevantes; exige alinhamento e validação. |
| **4** | Dependências entre módulos ou invariantes críticas, com incertezas técnicas/de negócio que podem alterar a solução. |

### Escala de Lacuna de Capacidade

Esta nota representa a distância entre o domínio técnico necessário e a experiência/capacidade disponível para executar o requisito, não a importância do requisito nem a competência individual de qualquer integrante.

| Nota | Domínio técnico da equipe |
| :---: | :--- |
| **1** | Domínio já demonstrado pela equipe; pouca ou nenhuma aprendizagem adicional. |
| **2** | Conhecimento de ferramentas e conceitos próximos; aprendizagem pontual é suficiente. |
| **3** | Experiência prática limitada; demanda estudo, protótipo ou apoio técnico durante a execução. |
| **4** | Lacuna significativa ou domínio ainda não validado; exige investigação e redução de incerteza antes/de forma integrada à implementação. |

### Fórmula de Consolidação

Para cada RF, a média consolidada do esforço técnico combina, com pesos iguais, a nota de esforço, a nota de complexidade e a nota de lacuna de capacidade:

**Média consolidada = (Esforço + Complexidade + Lacuna de Capacidade) / 3**

O resultado é apresentado com duas casas decimais. O arredondamento ocorre somente na apresentação; notas e estimativas em horas permanecem visíveis para permitir rastreabilidade. Uma média maior indica maior demanda técnica relativa para planejamento, não prioridade de negócio menor ou maior. A priorização de valor/MoSCoW deve ser feita separadamente.

## 8.5 Estimativa e Consolidação dos RFs

As notas preliminares consideram a descrição atual dos RFs, as relações entre módulos e as capacidades tecnológicas registradas para o projeto. A lacuna foi calibrada de forma conservadora diante da experiência ainda limitada da equipe em projetos reais e da ausência de prova de conceito das regras de cálculo de custos. A validação por pares poderá ajustar as notas após refinamento dos critérios de aceite e do desenho técnico.

| RF | OE / CAR | Requisito funcional | Esforço (h) | Nota de esforço | Complexidade | Lacuna de capacidade | Média consolidada |
| :---: | :---: | :--- | :---: | :---: | :---: | :---: | :---: |
| **RF01** | OE1 / CAR-01 | Cadastrar colaborador | 8 | 2 | 2 | 1 | **1,67** |
| **RF02** | OE1 / CAR-01 | Atualizar cadastro de colaborador | 12 | 3 | 3 | 2 | **2,67** |
| **RF03** | OE1 / CAR-01 | Registrar movimentação funcional | 8 | 2 | 3 | 2 | **2,33** |
| **RF04** | OE1 / CAR-02 | Submeter apontamento de campo | 24 | 3 | 4 | 3 | **3,33** |
| **RF05** | OE2 / CAR-03 | Solicitar prévia de fechamento | 24 | 3 | 4 | 3 | **3,33** |
| **RF06** | OE2 / CAR-03 | Homologar fechamento financeiro | 16 | 3 | 4 | 3 | **3,33** |
| **RF07** | OE2 / CAR-04 | Submeter solicitação de reembolso | 12 | 3 | 3 | 2 | **2,67** |
| **RF08** | OE2 / CAR-04 | Deliberar solicitação de reembolso | 12 | 3 | 3 | 2 | **2,67** |
| **RF09** | OE3 / CAR-05 | Apropriar custos operacionais | 24 | 3 | 4 | 4 | **3,67** |
| **RF10** | OE3 / CAR-05 | Consultar rastreabilidade de custos | 12 | 3 | 3 | 2 | **2,67** |
| **RF11** | OE3 / CAR-06 | Filtrar indicadores de custos | 16 | 3 | 3 | 3 | **3,00** |
| **RF12** | OE3 / CAR-06 | Monitorar execução orçamentária | 16 | 3 | 3 | 3 | **3,00** |
| **RF13** | OE4 / CAR-07 | Efetuar login no sistema | 8 | 2 | 3 | 2 | **2,33** |
| **RF14** | OE4 / CAR-07 | Gerenciar perfis de acesso | 24 | 3 | 4 | 3 | **3,33** |
| **RF15** | OE4 / CAR-08 | Consultar trilha de auditoria | 16 | 3 | 4 | 4 | **3,67** |
| **RF16** | OE4 / CAR-08 | Exportar relatório de auditoria | 16 | 3 | 3 | 3 | **3,00** |

