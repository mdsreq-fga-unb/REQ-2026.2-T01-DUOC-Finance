# Capítulo 2: Solução Proposta e Alinhamento Técnico

## Objetivo do Capítulo

Este capítulo formaliza a visão de produto do DUOC Finance. Ele descreve como a solução de software proposta atuará de forma ativa na mitigação das dores identificadas no cenário atual, delimitando de forma estrita o escopo do Produto Mínimo Viável (MVP) e mapeando o alinhamento das decisões de arquitetura e tecnologia com o valor de negócio esperado pelo cliente.

## Conjunto de Artefatos

A definição da proposta de solução apoia-se nas seguintes especificações estruturadas:

*   **Declaração de Posição e Objetivos do Produto:** Síntese estratégica no padrão canônico (Para/Que/Diferente de/Nosso produto) e metas operacionais desdobradas na Pirâmide de Abstração.
*   **Características do Produto (CARs):** Mapeamento e rastreabilidade modular em cards (CAR-01 a CAR-08) subordinados aos objetivos de negócio e vinculados ao MVP.
*   **Tecnologias a Serem Utilizadas e Arquitetura:** Definição fundamentada da stack tecnológica, banco de dados e arquitetura de implantação.
*   **Pesquisa de Mercado e Análise Competitiva:** Mapeamento de soluções similares de prateleira e posicionamento do diferencial da solução.
*   **Viabilidade da Proposta (Análise do MVP):** Avaliação pragmática do cronograma, competências técnicas e mitigação de riscos de projeto.
*   **Benefícios Esperados:** Detalhamento do valor agregado tangível para a organização e para os colaboradores finais.

---

<a id="21-e-22-objetivos-do-produto"></a>
## 2.1 e 2.2 Objetivos do Produto

### 2.1 Objetivo Geral do Produto

> **Centralizar o fluxo de informações sobre gestão administrativa da DUOC Arquitetura e Engenharia em um único sistema, assegurando a sustentabilidade de seus projetos sob contrato.**

---

### 2.2 Objetivos Específicos (OE) do Produto

<a id="oe1-padronizar-e-unificar-os-dados"></a>
<a id="oe1-padronizacao-e-unificacao-de-dados-operacionais"></a>
??? abstract "OE1: Padronizar e Unificar os Dados"

    * **Natureza:** Operacional e Cadastral
    * **Valor de Negócio:** Assegura unicidade e integridade aos dados corporativos, eliminando redundâncias e retrabalho gerados por planilhas paralelas e envios em canais informais.
    * **Características Relacionadas:** [CAR-01](#car-01), [CAR-02](#car-02) (Principais); CAR-03, CAR-05, CAR-07 (Apoio).

<a id="oe2-aumentar-a-eficiencia-administrativo-financeira"></a>
<a id="oe2-eficiencia-e-otimizacao-administrativo-financeira"></a>
??? abstract "OE2: Aumentar a Eficiência Administrativo-Financeira"

    * **Natureza:** Tática e Operacional
    * **Valor de Negócio:** Reduz o tempo de processamento e consolida rotinas financeiras e reembolsos com rapidez e exatidão, mitigando erros manuais e eliminando custos operacionais invisíveis.
    * **Características Relacionadas:** [CAR-03](#car-03), [CAR-04](#car-04) (Principais); CAR-01, CAR-06, CAR-08 (Apoio).

<a id="oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato"></a>
<a id="oe3-inteligencia-de-custos-e-rentabilidade-por-contrato"></a>
??? abstract "OE3: Transparecer as informações sobre os Custos por Contrato"

    * **Natureza:** Estratégica e Analítica
    * **Valor de Negócio:** Prover inteligência analítica e visibilidade contínua em tempo real sobre a margem líquida e os custos diretos por obra, assegurando a sustentabilidade financeira de cada projeto sob contrato.
    * **Características Relacionadas:** [CAR-05](#car-05), [CAR-06](#car-06) (Principais); CAR-02, CAR-04 (Apoio).

<a id="oe4-garantir-seguranca-e-governanca-de-dados"></a>
<a id="oe4-seguranca-governanca-e-controle-de-acesso-a-dados"></a>
??? abstract "OE4: Garantir Segurança e Governança de Dados"

    * **Natureza:** Governança Corporativa e Conformidade
    * **Valor de Negócio:** Garante a integridade, confidencialidade e segregação de acesso sobre registros de pessoal e dados financeiros sensíveis, resguardando a privacidade e blindando a organização.
    * **Características Relacionadas:** [CAR-07](#car-07), [CAR-08](#car-08) (Principais); CAR-01, CAR-03 (Apoio).

---

<a id="23-caracteristicas-do-produto-car"></a>
## 2.3 Características do Produto (CAR)

As características do produto descrevem as capacidades funcionais do **DUOC Finance** no escopo do MVP, mapeadas diretamente aos Objetivos Específicos do negócio.

### Módulo de Padronização e Unificação de Dados (Suporte a OE1)

<a id="car-01"></a>
??? note "CAR-01: Gestão Cadastral Unificada de Pessoal"

    * **Valor de Negócio:** Consolida uma base cadastral única e fidedigna para a DUOC, eliminando redundâncias cadastrais, divergências de informações e retrabalho decorrente de planilhas paralelas de RH e financeiro.
    * **OEs Relacionadas:**
        * **OE Principal:** [OE1: Padronizar e Unificar os Dados](#oe1-padronizar-e-unificar-os-dados)
        * **Contribuição Secundária:** [OE2: Aumentar a Eficiência Administrativo-Financeira](#oe2-aumentar-a-eficiencia-administrativo-financeira)

<a id="car-02"></a>
??? note "CAR-02: Apontamento Móvel de Atividades e Registros de Campo"

    * **Valor de Negócio:** Padroniza e agiliza a captação de dados diretamente no canteiro de obras e em viagens técnicas, erradicando a perda de anotações físicas em papel e mensagens dispersas no WhatsApp.
    * **OEs Relacionadas:**
        * **OE Principal:** [OE1: Padronizar e Unificar os Dados](#oe1-padronizar-e-unificar-os-dados)
        * **Contribuição Secundária:** [OE3: Transparecer as informações sobre os Custos por Contrato](#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato)

### Módulo de Eficiência Administrativo-Financeira (Suporte a OE2)

<a id="car-03"></a>
??? note "CAR-03: Motor de Processamento e Fechamento Financeiro"

    * **Valor de Negócio:** Reduz a conferência financeira mensal de dias para horas supervisionadas, apoiando o cálculo de custo de diaristas e de comissões contratuais simplificadas — sem substituir a folha de colaboradores CLT nem o cálculo de encargos (INSS, FGTS, IRRF) e provisões (13º, férias), que seguem nos sistemas contábeis já usados pela DUOC.
    * **OEs Relacionadas:**
        * **OE Principal:** [OE2: Aumentar a Eficiência Administrativo-Financeira](#oe2-aumentar-a-eficiencia-administrativo-financeira)
        * **Contribuição Secundária:** [OE1: Padronizar e Unificar os Dados](#oe1-padronizar-e-unificar-os-dados)

<a id="car-04"></a>
??? note "CAR-04: Fluxo Digital de Prestação de Contas e Reembolsos"

    * **Valor de Negócio:** Confere celeridade e transparência ao fluxo de reembolsos operacionais, eliminando atritos com a equipe técnica, despesas sem comprovação e o extravio de cupons fiscais físicos.
    * **OEs Relacionadas:**
        * **OE Principal:** [OE2: Aumentar a Eficiência Administrativo-Financeira](#oe2-aumentar-a-eficiencia-administrativo-financeira)
        * **Contribuição Secundária:** [OE3: Transparecer as informações sobre os Custos por Contrato](#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato)

### Módulo de Inteligência de Custos por Contrato (Suporte a OE3)

<a id="car-05"></a>
??? note "CAR-05: Apropriação e Rastreabilidade de Custos por Contrato"

    * **Valor de Negócio:** Elimina o rateio manual e arbitrário de custos, proporcionando rastreabilidade contábil exata de quanto cada projeto despendeu em mão de obra e despesas de campo diretas.
    * **OEs Relacionadas:**
        * **OE Principal:** [OE3: Transparecer as informações sobre os Custos por Contrato](#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato)
        * **Contribuição Secundária:** [OE1: Padronizar e Unificar os Dados](#oe1-padronizar-e-unificar-os-dados)

<a id="car-06"></a>
??? note "CAR-06: Painel Analítico de Rentabilidade e Margens de Projeto"

    * **Valor de Negócio:** Empodera os sócios e a diretoria com visibilidade executiva em tempo real sobre o custo real apurado de cada contrato, prevenindo estouros de orçamento e embasando a precificação de propostas futuras.
    * **OEs Relacionadas:**
        * **OE Principal:** [OE3: Transparecer as informações sobre os Custos por Contrato](#oe3-transparecer-as-informacoes-sobre-os-custos-por-contrato)
        * **Contribuição Secundária:** [OE2: Aumentar a Eficiência Administrativo-Financeira](#oe2-aumentar-a-eficiencia-administrativo-financeira)

### Módulo de Governança, Segurança e Rastreabilidade (Suporte a OE4)

<a id="car-07"></a>
??? note "CAR-07: Controle de Acesso Baseado em Papéis (RBAC)"

    * **Valor de Negócio:** Assegura a confidencialidade de dados financeiros e salariais estratégicos, resguardando a privacidade da equipe, fortalecendo a governança e blindando a organização contra acessos não autorizados.
    * **OEs Relacionadas:**
        * **OE Principal:** [OE4: Garantir Segurança e Governança de Dados](#oe4-garantir-seguranca-e-governanca-de-dados)
        * **Contribuição Secundária:** [OE1: Padronizar e Unificar os Dados](#oe1-padronizar-e-unificar-os-dados)

<a id="car-08"></a>
??? note "CAR-08: Trilha de Auditoria e Histórico de Operações Sensíveis"

    * **Valor de Negócio:** Garante governança corporativa, conformidade e transparência organizacional contínua, assegurando que todas as ações financeiras e cadastrais relevantes possuam autoria e carimbo temporal inequívocos.
    * **OEs Relacionadas:**
        * **OE Principal:** [OE4: Garantir Segurança e Governança de Dados](#oe4-garantir-seguranca-e-governanca-de-dados)
        * **Contribuição Secundária:** [OE2: Aumentar a Eficiência Administrativo-Financeira](#oe2-aumentar-a-eficiencia-administrativo-financeira)

---

<a id="24-tecnologias-a-serem-utilizadas-e-arquitetura"></a>
## 2.4 Tecnologias a Serem Utilizadas e Arquitetura

Nesta seção são formalizadas as decisões de arquitetura e a composição da stack tecnológica selecionada para a construção do **DUOC Finance**. Cada escolha técnica foi fundamentada em critérios objetivos de engenharia de software: integridade transacional de dados financeiros, segurança da informação (LGPD), ergonomia de uso em campo (*mobile-first*), domínio técnico prévio da equipe e viabilidade de manutenção no semestre letivo.

### Matriz Geral da Stack Tecnológica

| Camada / Função | Tecnologia | Ícone | Justificativa Sintética no DUOC Finance |
| :--- | :--- | :---: | :--- |
| **Banco de Dados Relacional** | PostgreSQL | :simple-postgresql: | Conformidade ACID rigorosa, integridade referencial financeira e suporte nativo a RLS |
| **Linguagem Base** | TypeScript | :simple-typescript: | Tipagem estática unificada no Frontend e Backend, reduzindo bugs de execução |
| **Plataforma Backend** | Node.js | :fontawesome-brands-node-js: | Ambiente assíncrono orientado a eventos de alto throughput para APIs RESTful |
| **Framework Backend** | NestJS | :simple-nestjs: | Arquitetura modular corporativa, injeção de dependências e controle granular RBAC |
| **BaaS & Nuvem** | Supabase | :simple-supabase: | PostgreSQL gerenciado, autenticação nativa, Row-Level Security e geração rápida de APIs |
| **Framework Frontend** | React SPA | :fontawesome-brands-react: | Aplicação SPA componentizada, reativa e de alta performance |
| **Ferramenta de Build** | Vite | :simple-vite: | Empacotamento moderno com Hot Module Replacement (HMR) ultrarrápido |
| **Framework CSS** | Tailwind CSS | :simple-tailwindcss: | Utility-first CSS com tokens de design e responsividade *mobile-first* |
| **Componentes de UI** | Shadcn UI | :simple-shadcnui: | Componentes acessíveis, consistentes e otimizados para dashboards financeiros densos |
| **Design & Prototipagem** | Figma | :simple-figma: | Criação dos protótipos de alta fidelidade para homologação prévia sociotécnica |
| **Conteinerização** | Docker | :fontawesome-brands-docker: | Padronização dos ambientes locais de desenvolvimento, homologação e CI |
| **Hospedagem Frontend** | Vercel | :simple-vercel: | CDN global de baixa latência integrada ao domínio institucional da DUOC |
| **Integração Contínua (CI/CD)** | GitHub Actions | :simple-githubactions: | Pipelines automatizadas para linting, validações de tipagem (`tsc`) e testes |
| **Documentação Viva** | MkDocs Material | | Abordagem *Docs as Code* versionada com suporte a Markdown, tabelas e Mermaid |

### 1. Banco de Dados Relacional

<div class="tech-tags" markdown="1">
<span class="tech-tag">:simple-postgresql: PostgreSQL</span>
<span class="tech-tag">:simple-supabase: supabase</span>
</div>

* **Tipo:** Sistema de Gerenciamento de Banco de Dados Relacional (SGBD-R) de código aberto.
* **Justificativa Técnica e Integridade Financeira:** Aplicações de departamento pessoal e gestão financeira exigem estrita conformidade com as propriedades ACID (Atomicidade, Consistência, Isolamento e Durabilidade). A integridade referencial provida por chaves estrangeiras e *constraints* impede o registro de horas órfãs ou despesas desvinculadas de contratos válidos. 
  * Para o manuseio de valores monetários e cálculos de precisão, utiliza-se nativamente o tipo `NUMERIC`/`DECIMAL`, evitando problemas de arredondamento inerentes ao ponto flutuante.
* **Gerenciamento de Schema via Scripts de Migration:** O versionamento do banco de dados é automatizado por scripts de *migration* executados no pipeline de inicialização da aplicação, garantindo que todos os ambientes (desenvolvimento e produção) mantenham schemas idênticos.
* **Segurança e LGPD:** O PostgreSQL oferece suporte maduro a criptografia em repouso e em trânsito (SSL/TLS), além de mecanismos de controle de privilégios em nível de linha (*Row Level Security - RLS*), resguardando informações salariais e dados bancários confidenciais.

### 2. Backend e Arquitetura Física

<div class="tech-tags" markdown="1">
<span class="tech-tag">:fontawesome-brands-node-js: Node.js</span>
<span class="tech-tag">:simple-typescript: TypeScript</span>
<span class="tech-tag">:simple-nestjs: NestJS</span>
</div>

* **Tipo:** API RESTful com plataforma de execução assíncrona orientada a serviços, tipagem estática e arquitetura modular.
* **Justificativa Técnica:** A tipagem estática do TypeScript elimina classes comuns de erros em tempo de compilação, protegendo algoritmos de folha de pagamento e fórmulas de comissionamento contra coerções de tipos inesperadas. A estrutura modular do NestJS facilita a injeção de dependências e a segregação limpa de responsabilidades entre controladores, serviços e repositórios.
* **Mecanismo de Autenticação e Perfis de Acesso (RBAC):** 
  * **Autenticação:** Implementação stateless via *JSON Web Tokens* (JWT) assinados com algoritmos de chave assimétrica e tempo de expiração curto.
  * **Autorização Baseada em Papéis (RBAC — Role-Based Access Control):** Controle granular de acesso baseado em *Guards* e *Decorators* na API, validando permissões por perfis de acesso definidos na regra de negócio (ex.: `ADMINISTRADOR`, `GESTOR_OBRA`, `COLABORADOR`).
* **Automação via Scripts CLI:** A base de código conta com scripts automatizados via `package.json` para tarefas recorrentes de *seed* de dados sintéticos para testes, execução de suítes de teste de integração e geração de build de produção.

### 3. Frontend

<div class="tech-tags" markdown="1">
<span class="tech-tag">:fontawesome-brands-react: React</span>
<span class="tech-tag">:simple-typescript: TypeScript</span>
<span class="tech-tag">:simple-vite: Vite</span>
<span class="tech-tag">:simple-tailwindcss: Tailwind CSS</span>
<span class="tech-tag">:simple-shadcnui: Shadcn UI</span>
</div>

* **Tipo:** Aplicação de Página Única (*Single Page Application — SPA*) baseada em arquitetura desacoplada consumindo a API REST do Backend.
* **Justificativa Técnica:** O ecossistema React suporta a criação de interfaces reativas e modulares. O utilitário de build *Vite* proporciona recarregamento rápido em desenvolvimento e empacotamento otimizado de ativos estáticos, garantindo alto desempenho e baixo consumo de dados tanto em estações de trabalho quanto em dispositivos móveis conectados via redes 4G/5G nos canteiros de obra.
* **Ergonomia e Usabilidade (IHC):** O uso do Tailwind CSS aliado ao Shadcn UI viabiliza o desenvolvimento guiado por utilitários com suporte nativo a *design tokens*. Permite a rápida prototipação de componentes com paleta de cores de alto contraste, otimizados para leitura sob incidência de luz solar direta e com áreas de toque ampliadas para operação em smartphones nos canteiros.

### 4. Domínio da Equipe e Capacidade Operacional

<div class="tech-tags" markdown="1">
<span class="tech-tag">:simple-typescript: TypeScript</span>
<span class="tech-tag">:simple-postgresql: PostgreSQL</span>
<span class="tech-tag">:fontawesome-brands-node-js: Node.js</span>
<span class="tech-tag">:fontawesome-brands-react: React</span>
</div>

As escolhas do ecossistema **TypeScript/JavaScript (Node.js + React)** e do banco **PostgreSQL** levaram em consideração a maturidade e o domínio prévio de código dos membros da equipe de desenvolvimento. A padronização de uma única linguagem (TypeScript) tanto no Frontend quanto no Backend minimiza o contexto cognitivo de transição, acelera o reaproveitamento de interfaces/DTOs entre as camadas e garante entregas rápidas e previsíveis no ciclo de vida das Unidades de entrega do projeto.

### 5. Infraestrutura, Hospedagem e CI/CD

<div class="tech-tags" markdown="1">
<span class="tech-tag">:fontawesome-brands-docker: Docker</span>
<span class="tech-tag">:simple-vercel: Vercel</span>
<span class="tech-tag">:simple-githubactions: GitHub Actions</span>
<span class="tech-tag">:simple-supabase: Supabase</span>
</div>

* **Conteinerização com Docker e Docker Compose:** Todo o ambiente (PostgreSQL, Backend API e Frontend SPA) é orquestrado via scripts `docker-compose.yml`. Isso assegura paridade idêntica entre os ambientes locais de desenvolvimento e o ambiente de homologação.
* **Hospedagem (Host):**
  * **Backend & Banco de Dados:** Instância em nuvem gerenciada via Supabase / PostgreSQL em contêineres com backups automatizados.
  * **Frontend:** Distribuição e entrega de arquivos estáticos via CDN na **Vercel** para alta disponibilidade e baixa latência, redirecionada a partir do domínio próprio registrado da DUOC.
* **Integração e Entrega Contínua (CI/CD via GitHub Actions):** Pipelines automatizadas por scripts YAML no repositório executam verificação de qualidade (linters), validações de tipagem (`tsc`), testes unitários e o build do MkDocs a cada *Pull Request*, garantindo integração contínua sem quebras de ambiente.

---

<a id="25-pesquisa-de-mercado-e-analise-competitiva"></a>
## 2.5 Pesquisa de Mercado e Análise Competitiva

### Cenário de Mercado: Softwares de Prateleira (COTS) vs. Demanda Real

O mercado corporativo disponibiliza ferramentas consolidadas em nichos isolados, predominantemente no modelo SaaS de prateleira (*Commercial Off-The-Shelf - COTS*). De um lado, softwares tradicionais de Recursos Humanos e Departamento Pessoal priorizam rotinas genéricas de escritório (admissão digital, controle de férias e geração de holerites padronizados). De outro, sistemas de gestão de engenharia e arquitetura focam exclusivamente no ciclo físico das obras (cronogramas de Gantt, compras de insumos e orçamentações complexas).

O problema crítico da **DUOC Arquitetura e Engenharia** situa-se exatamente na fronteira entre esses dois domínios: a necessidade de correlacionar horas técnicas, relatórios de deslocamento (RVT) e despesas de canteiro diretamente ao custo real de pessoal por contrato. Sistemas comerciais genéricos forçam a organização a adaptar seus processos e sua cultura à rigidez pré-programada de plataformas externas, impondo fluxos burocráticos que geram atritos com as equipes de campo e mantêm a dependência de planilhas paralelas de conciliação.

### Comparação das Soluções de Mercado

| Solução de Mercado | Foco Principal | Recursos Atendidos | Lacuna Crítica para a DUOC | Diferencial do DUOC Finance |
| :--- | :--- | :--- | :--- | :--- |
| **Convenia** | Gestão de DP e RH corporativo | Admissão digital, gestão de benefícios e controle de férias. | Processos engessados de RH corporativo tradicional; não se integra a centros de custo de obras nem a relatórios de campo (RVT). | Conecta a rotina de pessoal diretamente aos contratos de engenharia e horas técnicas apropriadas a cada projeto. |
| **Tangerino** | Registro eletrônico de ponto (REP-P) | Ponto móvel por aplicativo, biometria facial e controle de jornada. | Registro estático de horários; não estabelece nexo entre o deslocamento técnico de visita de obra, despesas de viagem e contrato. | Integra ponto operacional, RVT e prestação de contas de despesas no mesmo fluxo tempestivo de homologação. |
| **Vobi** | Gestão de projetos e obras | Orçamentação, cronograma físico, compras e acompanhamento de obras. | Trata a mão de obra como custo estimado genérico, sem processar a folha real, comissões variáveis e encargos trabalhistas. | Apropria o custo real e individualizado da folha aos centros de custos de cada contrato em andamento. |
| **ArqProject** | Gestão financeira de escritórios de arquitetura | Fluxo de caixa de projetos, briefing e propostas comerciais. | Foco restrito à gestão comercial de projetos; não atende ao fluxo operacional dos técnicos em canteiro nem ao DP. | Solução sob medida (*tailor-made*), adaptada à linguagem, rotina e dinâmica de campo específica da DUOC. |

As soluções acima representam o estado da arte em seus respectivos segmentos de atuação. Contudo, nenhuma delas, de forma isolada, resolve o fluxo contínuo e integrado exigido pela DUOC, além de cobrarem licenças recorrentes por usuário (*headcount*) com dezenas de funcionalidades que a empresa jamais utilizaria (*bloatware*).

### O Gargalo da Reconciliação Manual

Quando ferramentas comerciais fragmentadas são adotadas em conjunto, o gestor administrativo da DUOC é transformado em um integrador manual de sistemas: precisa exportar relatórios do software de ponto, tabular dados do RVT a partir de canais de mensagens, recalcular comissões em planilhas Excel e, finalmente, transferir os custos consolidados para o controle financeiro de obras. 

Esse processo gera consequências danosas:
1. **Elevada taxa de erro humano:** Fórmulas manuais em planilhas sujeitas a inconsistências de cálculo e digitação.
2. **Retrabalho crônico e perda de histórico:** Dados dispersos em pastas locais sem trilha auditável de alterações.
3. **Opacidade gerencial:** A diretoria só descobre o custo real da mão de obra dias após o fechamento mensal, inviabilizando correções de margem em tempo hábil.

O MVP do DUOC Finance elimina esse gargalo ao instituir um fluxo contínuo onde colaborador, contrato, horas de RVT, despesas e encargos compartilham a mesma base de dados confiável.

### Pilares Diferenciais do DUOC Finance

O DUOC Finance não pretende atuar como um ERP genérico e massivo de engenharia civil, mas sim consolidar-se em torno de **três pilares de diferenciação estratégica**:

```text
                                PILARES DIFERENCIAIS
               ┌─────────────────────────┼─────────────────────────┐
               ▼                         ▼                         ▼
      [1. Hub Orquestrador]     [2. Solução Sob Medida]   [3. Segurança e LGPD]
      Nexo direto entre horas   Desenvolvido para a       Perfis estritos (RBAC),
      técnicas de campo e       rotina e cultura real     proteção de salários e
      custo por contrato.       da DUOC (Anti-Bloatware). conformidade legal.
```

#### 1. Hub Centralizador e Orquestrador do Fluxo Administrativo
* **Captura no Campo:** A equipe técnica registra ponto e RVT em interface ágil, no próprio canteiro de serviço.
* **Homologação Administrativa:** O setor financeiro/DP confere horas e despesas em tempo real, apoiando o cálculo de custo de folha e comissões.
* **Inteligência de Custos:** Os sócios visualizam o custo de mão de obra apurado de cada obra contratada.

#### 2. Desenvolvimento Sob Medida e Personalização Cultural (*Tailor-Made*)
O principal diferencial competitivo da solução frente a qualquer software de mercado é a **personalização sociotécnica total**:
* **O Software se Adapta à DUOC (e não o contrário):** Softwares de prateleira exigem que a empresa mude seu modo de trabalhar para se adequar ao sistema. O DUOC Finance foi concebido a partir da observação direta dos fluxos reais da DUOC, preservando suas práticas bem-sucedidas e digitalizando os pontos de atrito.
* **Identidade Visual e Cultura da Empresa ("A Cara da DUOC"):** A interface é construída seguindo rigorosamente o manual de identidade visual da DUOC Arquitetura e Engenharia (paleta institucional com destaque em Dourado Ocre `#DAA520`, tipografia limpa e modo escuro sofisticado). Essa estética gera sentimento de pertencimento, profissionalismo e engajamento imediato da equipe.
* **Ergonomia *Anti-Bloatware* (Design Enxuto):** Sistemas genéricos de mercado sobrecarregam os usuários com centenas de botões, abas e configurações irrelevantes. O DUOC Finance implementa fluxos rápidos (*mobile-first*) focados estritamente na rotina do técnico de campo e do auxiliar administrativo.
* **Terminologia Nativa do Negócio:** A interface adota o vocabulário real utilizado no cotidiano da DUOC (Relatório de Viagem Técnica - RVT, centros de custos vinculados a contratos multidisciplinares de arquitetura e engenharia), reduzindo drasticamente a curva de aprendizado e eliminando a resistência à adoção.

#### 3. Governança, Privacidade e Conformidade com a LGPD
Diferente do compartilhamento indiscriminado de arquivos em nuvem e planilhas de rede, o DUOC Finance implementa controle de acesso por papéis (RBAC). Dados salariais e remunerações de sócios são blindados contra acessos indevidos, garantindo conformidade rigorosa com a Lei nº 13.709/2018.

### Fontes de Referência

* [Convenia](https://www.convenia.com.br/)
* [Tangerino](https://tangerino.com.br/)
* [Vobi](https://vobi.com.br/)
* [ArqProject](https://arqproject.com.br/)

---

<a id="26-viabilidade-da-proposta-analise-do-mvp"></a>
## 2.6 Viabilidade da Proposta (Análise do MVP)

### Parecer de Viabilidade

O Produto Mínimo Viável (MVP) do DUOC Finance é viável no ciclo acadêmico e técnico da disciplina porque foi estritamente delimitado ao problema de maior valor para a cliente parceira: integrar o Departamento Pessoal, o Relatório de Viagem Técnica (RVT) e a apuração financeira de custos por contrato. A equipe declara **prontidão metodológica e técnica para especificar, prototipar, implementar e homologar esse recorte**, sem a pretensão de substituir integralmente sistemas de modelagem de engenharia ou softwares contábeis legados.

### Evidências Estruturadas de Viabilidade

| Dimensão | Declaração Formal | Evidência e Mecanismo de Controle |
| :--- | :--- | :--- |
| **Técnica** | A equipe possui competência técnica compatível com a complexidade do MVP. | Os papéis do time distribuem responsabilidades claras de elicitação de requisitos, arquitetura de software, modelagem de dados relacional, desenvolvimento backend, frontend e engenharia de qualidade (QA). |
| **Operacional** | Existe canal contínuo de acesso à representante focal Maria Beatryz para esclarecer regras e homologar entregas. | O plano de comunicação prevê interação via WhatsApp para dúvidas rotineiras e reuniões quinzenais síncronas via Google Meet. O processo de validação exige homologação de protótipos de alta fidelidade antes da codificação de persistência. |
| **Temporal** | O escopo delimitado do MVP é compatível com a janela real de construção do cronograma, executado de forma incremental por Unidade. | A construção de código concentra-se nas Unidades 3 e 4 (aprox. 3 semanas úteis): Semana 10, cadastro e RBAC; Semana 11, RVT (depende do cadastro); Semana 12, motor de custo e apropriação por contrato (depende dos dados de RVT). A equipe tem 6 integrantes, a maioria em primeiro projeto real, o que motivou o recorte de escopo descrito em "Delimitação do Escopo do MVP". Ainda não há prova de conceito das regras de cálculo de custo. |
| **Econômica** | O desenvolvimento e a implantação ocorrem sem custos proibitivos de licenciamento. | A proposta adota exclusivamente tecnologias de código aberto (PostgreSQL, Node.js/NestJS, React) e plataformas de hospedagem em nuvem gratuitas ou de baixo custo para o ambiente acadêmico. |

### Delimitação do Escopo do MVP

O MVP abrange o controle de acesso e papéis por perfis fixos (RBAC), registro manual de ponto, preenchimento e homologação de Relatório de Viagem Técnica (RVT), que já inclui o registro de despesas de campo e reembolso, motor de apoio ao cálculo de custo de mão de obra de diaristas e comissões contratuais simplificadas (não substituto de folha de pagamento oficial), e apropriação dos custos ao contrato correspondente. Uma visualização tabular direta de custo apurado por contrato e um registro básico de auditoria (log de alterações) para conformidade com a LGPD completam o valor tangível entregue à diretoria, sem a necessidade de um módulo de business intelligence dedicado. O cálculo de comissões contratuais será tratado como regra simplificada nesta primeira versão, com refinamento previsto para ciclos futuros.

Permanecem fora deste primeiro ciclo os módulos de engenharia civil pesada (como cronogramas de Gantt de obra, composições orçamentárias SINAPI e controle físico de estoque de canteiro). Essas capacidades poderão ser integradas futuramente através de APIs abertas.

### Riscos Mapeados e Condições de Aceite

Os principais riscos identificados consistem em: restrições de agenda da cliente parceira para sessões síncronas, complexidade de fórmulas trabalhistas, expansão não autorizada do escopo (scope creep) e a proteção de dados pessoais ficar restrita apenas ao ambiente de desenvolvimento. Tais riscos são mitigados por validações quinzenais estruturadas, prototipagem prévia no Figma antes da codificação, blindagem estrita do escopo por marcos avaliativos e, para a proteção de dados, pela aplicação em produção de RLS, criptografia em trânsito/repouso e RBAC (detalhadas na seção 2.4),  o uso de dados sintéticos citado na 2.4 cobre apenas o ambiente de desenvolvimento e testes, não substituindo essas medidas em produção.

O MVP será considerado concluído e apto para homologação quando todos os fluxos essenciais estiverem implementados, cobertos por testes automatizados, documentados no portal e formalmente aceitos pela cliente através de Termo de Homologação. O cronograma completo encontra-se registrado no [Capítulo 6 — Cronograma](../../cronograma/index.md), e o fluxo de aceite está detalhado no [Capítulo 7 — Interação com Cliente](../../interacao-cliente/index.md#73-processo-de-validacao-sociotecnica-e-homologacao-com-a-cliente).

---

<a id="27-beneficios-esperados"></a>
## 2.7 Benefícios Esperados

O DUOC Finance deverá gerar benefícios para a organização e para as pessoas que utilizarão continuamente o portal. A centralização dos registros de ponto, horas de RVT, férias, folha e reembolsos reduz a fragmentação atual e melhora a confiabilidade das informações financeiras e trabalhistas.

### Benefícios para a DUOC

- **Visibilidade de custo por contrato:** a correlação entre horas registradas, custos de pessoal e contratos permite acompanhar o custo real da mão de obra por projeto, apoiando decisões comerciais e de precificação.
- **Redução de erros e retrabalho:** a centralização de ponto, férias e horas de RVT em um único ambiente reduz divergências, duplicidade de lançamentos e falhas humanas no fechamento de folha, comissões e reembolsos.
- **Agilidade no fechamento financeiro:** informações padronizadas e disponíveis em tempo hábil tornam mais rápida a conferência das rotinas de Departamento Pessoal e Financeiro.
- **Conformidade jurídica e proteção de dados:** o registro formal das informações apoia a conformidade trabalhista e fiscal, enquanto o controle de acesso por perfis e a proteção dos dados pessoais contribuem para o atendimento à LGPD.
- **Base histórica para gestão:** o histórico consolidado de horas e custos oferece dados para avaliar contratos, identificar desvios e aperfeiçoar futuras propostas de serviço.

### Benefícios para os Usuários

- **Registro prático no canteiro de obras:** colaboradores poderão lançar horas e ponto de forma simples, inclusive por dispositivos móveis, sem repetir o preenchimento em diferentes planilhas.
- **Consulta facilitada de reembolsos:** o acompanhamento digital dos recibos e da situação das solicitações reduz a perda de documentos e torna mais previsível o processo de reembolso.
- **Clareza sobre férias e folha:** cada colaborador poderá consultar as informações autorizadas sobre férias, benefícios, folha de pagamento e histórico funcional.
- **Confidencialidade das informações:** dados salariais e funcionais serão acessíveis somente aos perfis autorizados, preservando a privacidade entre os colaboradores.
- **Maior transparência no trabalho:** o histórico dos registros e o acompanhamento das aprovações tornam mais claro como as horas informadas são conferidas e utilizadas no processamento financeiro.

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 05/09/2026 | Estruturação inicial dos objetivos, características, stack e análise de mercado | Equipe Cascata Ágil | Matheus Ribeiro Szervinsk |
| `1.1` | 07/09/2026 | Refinamento dos artefatos, inclusão do histórico e alinhamento com OEs | Equipe Cascata Ágil | Matheus Ribeiro Szervinsk |
| `1.2` | 08/09/2026 | Expansão de CAR-01 a CAR-08, purificação de abstração e tags de tecnologias | Matheus Ribeiro Szervinsk | Equipe DUOC Finance |
| `2.0` | 15/09/2026 | Unificação integral de todos os artefatos 2.1 a 2.7 em página única contínua | Equipe Cascata Ágil | Matheus Ribeiro Szervinsk |