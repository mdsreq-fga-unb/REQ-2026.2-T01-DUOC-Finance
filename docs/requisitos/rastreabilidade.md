# Rastreabilidade dos Requisitos e Matrizes

Este documento consolida a **rastreabilidade vertical e horizontal** dos requisitos de software do sistema ***DUOC Finance***, formalizando as inter-relações entre os direcionadores estratégicos do negócio, os objetivos táticos, as capacidades do produto e os artefatos de verificação e teste.

<div class="catalog-nav-deck">
  <a href="../" class="catalog-nav-btn">
    <span class="nav-btn-badge">91</span>
    <span class="nav-btn-text">Catálogo Geral de Requisitos ↗</span>
  </a>
  <a href="../priorizacao/" class="catalog-nav-btn">
    <span class="nav-btn-badge">4×4</span>
    <span class="nav-btn-text">Matriz de Priorização ↗</span>
  </a>
  <a href="../governanca-conformidade/#61-matriz-canonica-de-papeis-rbac" class="catalog-nav-btn catalog-nav-btn-ext">
    <span class="nav-btn-text">Atores & Papéis RBAC ↗</span>
  </a>
</div>

---

## Métricas de Cobertura e Rastreabilidade

<div class="grid cards" markdown>

-   :material-bullseye-arrow: **Objetivos Específicos (OE)**

    ---
    **4 OEs Estratégicos** (100% de cobertura)  
    Direcionadores táticos da parceria DUOC plenamente desdobrados.

-   :material-view-grid-plus-outline: **Características do Produto (CAR)**

    ---
    **10 CARs Arquiteturais** (100% mapeadas)  
    Capacidades de software estruturadas nos 4 módulos de domínio.

-   :material-format-list-checks: **Requisitos Funcionais (RF)**

    ---
    **40 Requisitos Funcionais**  
    Rastreabilidade vertical bidirecional com regras e casos de teste.

-   :material-shield-check-outline: **Requisitos Não Funcionais (RNF)**

    ---
    **20 Requisitos de Qualidade**  
    Atributos de segurança, desempenho, disponibilidade e conformidade CLT/LGPD.

-   :material-test-tube: **Casos de Teste (CT)**

    ---
    **31 Casos de Teste Catalogados**  
    Critérios mensuráveis de verificação e validação (DoD/DoR) ponta a ponta.

</div>

---

<a id="rastreabilidade-estrategica-e-diagramas-visuais"></a>
## Pirâmide de Abstração Interativa (Rastreabilidade Vertical e Horizontal)

A **Pirâmide de Abstração** sintetiza o desdobramento hierárquico completo da solução: parte do **Objetivo Geral (OG)** da DUOC Arquitetura e Engenharia, desdobra-se nos quatro **Objetivos Específicos (OE1 a OE4)** táticos, ramifica-se nas **10 Características do Produto (CAR-01 a CAR-10)** e deriva diretamente nos **40 Requisitos Funcionais (RF01 a RF40)**, indexando suas respectivas **Regras de Negócio (RNs)**, **Requisitos Não Funcionais (RNFs)** e **Casos de Teste (CTs)**.

Utilize a **barra de pesquisa interativa** abaixo para informar o código ou nome de qualquer requisito (ex.: `RF04`, `07`, `CAR-02`, `RN06`, `apontamento`, `reembolso`, `login`) ou clique diretamente sobre qualquer card da pirâmide: o painel **pintará automaticamente as linhas de conexão** da Característica, do Objetivo Específico e do Objetivo Geral correspondentes e **aplicará zoom automático** na cadeia selecionada.

<div id="duoc-interactive-pyramid"></div>

<p align="center" style="margin-top: 10px;">
  <a href="../../assets/images/requisitos/piramide_abstracao.jpg" target="_blank" rel="noopener noreferrer" class="md-button">Ver Versão Estática em JPG ↗</a> &nbsp;
  <a href="../../assets/images/piramide_abstracao_vetorizada.svg" target="_blank" rel="noopener noreferrer" download="piramide_abstracao_vetorizada.svg" class="md-button">Baixar Vetor SVG ↗</a>
</p>

---

<a id="matriz-sintese-geral-de-rastreabilidade"></a>
## Matriz-Síntese Geral de Rastreabilidade

Navegue pelas abas abaixo para consultar as correlações completas da solução, estruturadas de forma modular por **Objetivo Específico (OE)** ou na visão consolidada geral:

=== "Visão Geral Consolidada"

    | Objetivo Específico | Característica (CAR) | Requisitos Funcionais (RF) | Requisitos Não Funcionais (RNF) | Casos de Teste (CT) |
    | :--- | :--- | :--- | :--- | :--- |
    | **OE1** — Padronizar e Unificar os Dados | **CAR-01**: Gestão Cadastral Unificada | [RF01](index.md#rf01), [RF02](index.md#rf02), [RF03](index.md#rf03), [RF25](index.md#rf25), [RF26](index.md#rf26) | [RNF02](index.md#rnf02), [RNF03](index.md#rnf03), [RNF19](index.md#rnf19) | `CT-M1-01`, `CT-M1-02`, `CT-M1-03`, `CT-M1-12`, `CT-M1-13` |
    | **OE1** — Padronizar e Unificar os Dados | **CAR-02**: Apontamento de Campo (RVT) | [RF04](index.md#rf04), [RF19](index.md#rf19), [RF22](index.md#rf22), [RF32](index.md#rf32), [RF35](index.md#rf35) | [RNF01](index.md#rnf01), [RNF04](index.md#rnf04), [RNF07](index.md#rnf07), [RNF19](index.md#rnf19) | `CT-M1-04`, `CT-M1-09`, `CT-M1-11`, `CT-M1-15`, `CT-M1-16` |
    | **OE1** — Padronizar e Unificar os Dados | **CAR-09**: Integração FLIT | [RF20](index.md#rf20) | — | `CT-M1-10` |
    | **OE1** — Padronizar e Unificar os Dados | **CAR-10**: Exportação de Planilhas | [RF36](index.md#rf36) | — | `CT-M1-17` |
    | **OE2** — Eficiência Administrativo-Financeira | **CAR-03**: Fechamento Financeiro | [RF05](index.md#rf05), [RF06](index.md#rf06), [RF21](index.md#rf21), [RF27](index.md#rf27) | [RNF05](index.md#rnf05), [RNF06](index.md#rnf06), [RNF08](index.md#rnf08), [RNF10](index.md#rnf10) | `CT-M2-01`, `CT-M2-02`, `CT-M2-09`, `CT-M2-10` |
    | **OE2** — Eficiência Administrativo-Financeira | **CAR-04**: Prestação de Contas e Reembolsos | [RF07](index.md#rf07), [RF08](index.md#rf08), [RF28](index.md#rf28), [RF29](index.md#rf29) | [RNF06](index.md#rnf06), [RNF07](index.md#rnf07) | `CT-M2-03`, `CT-M2-04`, `CT-M2-11`, `CT-M2-12` |
    | **OE3** — Transparecer Custos por Contrato | **CAR-05**: Apropriação de Custos | [RF09](index.md#rf09), [RF10](index.md#rf10), [RF30](index.md#rf30), [RF33](index.md#rf33), [RF37](index.md#rf37), [RF38](index.md#rf38) | [RNF09](index.md#rnf09), [RNF10](index.md#rnf10), [RNF11](index.md#rnf11), [RNF12](index.md#rnf12) | `CT-M3-01`, `CT-M3-02`, `CT-M3-09`, `CT-M3-11`, `CT-M3-13`, `CT-M3-14` |
    | **OE3** — Transparecer Custos por Contrato | **CAR-06**: Painel Orçamentário | [RF11](index.md#rf11), [RF12](index.md#rf12), [RF31](index.md#rf31), [RF34](index.md#rf34), [RF39](index.md#rf39), [RF40](index.md#rf40) | [RNF09](index.md#rnf09), [RNF10](index.md#rnf10), [RNF12](index.md#rnf12) | `CT-M3-03`, `CT-M3-04`, `CT-M3-10`, `CT-M3-12`, `CT-M3-15`, `CT-M3-16` |
    | **OE4** — Governança e Segurança | **CAR-07**: Controle de Acesso (RBAC) | [RF13](index.md#rf13), [RF14](index.md#rf14), [RF17](index.md#rf17), [RF18](index.md#rf18), [RF23](index.md#rf23), [RF24](index.md#rf24) | [RNF13](index.md#rnf13), [RNF14](index.md#rnf14), [RNF20](index.md#rnf20) | `CT-M4-01`, `CT-M4-02`, `CT-M4-09`, `CT-M4-10`, `CT-M4-12`, `CT-M4-13` |
    | **OE4** — Governança e Segurança | **CAR-08**: Trilha de Auditoria | [RF15](index.md#rf15), [RF16](index.md#rf16) | [RNF15](index.md#rnf15), [RNF16](index.md#rnf16), [RNF17](index.md#rnf17), [RNF18](index.md#rnf18), [RNF20](index.md#rnf20) | `CT-M4-03`, `CT-M4-04` |

=== "Módulo 1 — OE1 (Padronização e Dados de Campo)"

    O **Módulo 1** centraliza a identificação dos profissionais técnicos e a coleta de dados de produção nos canteiros de obra da DUOC:

    | Característica (CAR) | Requisitos Funcionais (RF) | Requisitos Não Funcionais (RNF) | Casos de Teste (CT) |
    | :--- | :--- | :--- | :--- |
    | **[CAR-01](../visao-produto/solucao-proposta.md#car-01)**: Gestão Cadastral Unificada | [RF01](index.md#rf01) · Cadastrar colaborador<br>[RF02](index.md#rf02) · Atualizar cadastro<br>[RF03](index.md#rf03) · Movimentação funcional<br>[RF25](index.md#rf25) · Tipo de contratação<br>[RF26](index.md#rf26) · Histórico cadastral | [RNF02](index.md#rnf02) · Desempenho cadastral<br>[RNF03](index.md#rnf03) · Criptografia AES-256<br>[RNF19](index.md#rnf19) · Acessibilidade WCAG | `CT-M1-01`<br>`CT-M1-02`<br>`CT-M1-03`<br>`CT-M1-12`<br>`CT-M1-13` |
    | **[CAR-02](../visao-produto/solucao-proposta.md#car-02)**: Apontamento de Campo (RVT) | [RF04](index.md#rf04) · Submeter apontamento<br>[RF19](index.md#rf19) · Consultar apontamentos<br>[RF22](index.md#rf22) · Anexar evidências/GPS<br>[RF32](index.md#rf32) · Deliberar apontamento<br>[RF35](index.md#rf35) · Retificar apontamento | [RNF01](index.md#rnf01) · Operação local resiliente<br>[RNF04](index.md#rnf04) · Usabilidade RVT em campo<br>[RNF07](index.md#rnf07) · Integridade de anexos<br>[RNF19](index.md#rnf19) · Acessibilidade WCAG | `CT-M1-04`<br>`CT-M1-09`<br>`CT-M1-11`<br>`CT-M1-15`<br>`CT-M1-16` |
    | **[CAR-09](../visao-produto/solucao-proposta.md#car-09)**: Integração FLIT | [RF20](index.md#rf20) · Importar presenças homologadas | *(Integração via protocolo REST/HTTPS)* | `CT-M1-10` |
    | **[CAR-10](../visao-produto/solucao-proposta.md#car-10)**: Exportação de Planilhas | [RF36](index.md#rf36) · Exportar dados em planilha | *(Formatos estruturados CSV e XLSX)* | `CT-M1-17` |

=== "Módulo 2 — OE2 (Eficiência Financeira e Reembolsos)"

    O **Módulo 2** automatiza o fechamento quinzenal/mensal de diárias técnicas e o fluxo digital de aprovação de despesas e adiantamentos:

    | Característica (CAR) | Requisitos Funcionais (RF) | Requisitos Não Funcionais (RNF) | Casos de Teste (CT) |
    | :--- | :--- | :--- | :--- |
    | **[CAR-03](../visao-produto/solucao-proposta.md#car-03)**: Fechamento Financeiro | [RF05](index.md#rf05) · Solicitar prévia<br>[RF06](index.md#rf06) · Homologar fechamento<br>[RF21](index.md#rf21) · Estornar fechamento<br>[RF27](index.md#rf27) · Configurar diárias técnicas | [RNF05](index.md#rnf05) · Desempenho de cálculo<br>[RNF06](index.md#rnf06) · Precisão centesimal<br>[RNF08](index.md#rnf08) · Não-repúdio de estorno<br>[RNF10](index.md#rnf10) · Sigilo remuneratório | `CT-M2-01`<br>`CT-M2-02`<br>`CT-M2-09`<br>`CT-M2-10` |
    | **[CAR-04](../visao-produto/solucao-proposta.md#car-04)**: Prestação de Contas e Reembolsos | [RF07](index.md#rf07) · Submeter reembolso<br>[RF08](index.md#rf08) · Deliberar reembolso<br>[RF28](index.md#rf28) · Submeter adiantamento<br>[RF29](index.md#rf29) · Deliberar adiantamento | [RNF06](index.md#rnf06) · Precisão de cálculo<br>[RNF07](index.md#rnf07) · Sanitização de arquivos fiscais | `CT-M2-03`<br>`CT-M2-04`<br>`CT-M2-11`<br>`CT-M2-12` |

=== "Módulo 3 — OE3 (Custos por Contrato e Orçamento)"

    O **Módulo 3** garante a transparência dos custos diretos (mão de obra e despesas) apropriados a cada contrato e centro de custo:

    | Característica (CAR) | Requisitos Funcionais (RF) | Requisitos Não Funcionais (RNF) | Casos de Teste (CT) |
    | :--- | :--- | :--- | :--- |
    | **[CAR-05](../visao-produto/solucao-proposta.md#car-05)**: Apropriação de Custos | [RF09](index.md#rf09) · Apropriar custos<br>[RF10](index.md#rf10) · Rastreabilidade de custos<br>[RF30](index.md#rf30) · Comparativo de contratos<br>[RF33](index.md#rf33) · Cadastrar contrato<br>[RF37](index.md#rf37) · Atualizar contrato<br>[RF38](index.md#rf38) · Consultar contratos | [RNF09](index.md#rnf09) · Latência de consultas<br>[RNF10](index.md#rnf10) · Isolamento por alçada<br>[RNF11](index.md#rnf11) · Atomicidade ACID de custo<br>[RNF12](index.md#rnf12) · Painel consolidado | `CT-M3-01`<br>`CT-M3-02`<br>`CT-M3-09`<br>`CT-M3-11`<br>`CT-M3-13`<br>`CT-M3-14` |
    | **[CAR-06](../visao-produto/solucao-proposta.md#car-06)**: Painel Orçamentário | [RF11](index.md#rf11) · Filtrar indicadores<br>[RF12](index.md#rf12) · Execução orçamentária<br>[RF31](index.md#rf31) · Configurar alertas<br>[RF34](index.md#rf34) · Cadastrar centro de custo<br>[RF39](index.md#rf39) · Atualizar centro de custo<br>[RF40](index.md#rf40) · Definir tetos orçamentários | [RNF09](index.md#rnf09) · Tempo de resposta<br>[RNF10](index.md#rnf10) · Proteção orçamentária<br>[RNF12](index.md#rnf12) · Usabilidade analítica | `CT-M3-03`<br>`CT-M3-04`<br>`CT-M3-10`<br>`CT-M3-12`<br>`CT-M3-15`<br>`CT-M3-16` |

=== "Módulo 4 — OE4 (Segurança, RBAC e Auditoria)"

    O **Módulo 4** estabelece as defesas de segurança da informação, conformidade com a LGPD e guarda probatória segundo a CLT:

    | Característica (CAR) | Requisitos Funcionais (RF) | Requisitos Não Funcionais (RNF) | Casos de Teste (CT) |
    | :--- | :--- | :--- | :--- |
    | **[CAR-07](../visao-produto/solucao-proposta.md#car-07)**: Controle de Acesso (RBAC) | [RF13](index.md#rf13) · Efetuar login<br>[RF14](index.md#rf14) · Gerenciar perfis RBAC<br>[RF17](index.md#rf17) · Ativar acesso e recuperar<br>[RF18](index.md#rf18) · Logout manual<br>[RF23](index.md#rf23) · Bloqueio de tentativas<br>[RF24](index.md#rf24) · Renovação periódica | [RNF13](index.md#rnf13) · Tempo de sessão<br>[RNF14](index.md#rnf14) · Verificação de autorização<br>[RNF20](index.md#rnf20) · Validação de payload | `CT-M4-01`<br>`CT-M4-02`<br>`CT-M4-09`<br>`CT-M4-10`<br>`CT-M4-12`<br>`CT-M4-13` |
    | **[CAR-08](../visao-produto/solucao-proposta.md#car-08)**: Trilha de Auditoria | [RF15](index.md#rf15) · Consultar trilha<br>[RF16](index.md#rf16) · Exportar auditoria | [RNF15](index.md#rnf15) · Gravação append-only<br>[RNF16](index.md#rnf16) · Retenção quinquenal (CLT)<br>[RNF17](index.md#rnf17) · Backup diário verificado<br>[RNF18](index.md#rnf18) · Disponibilidade 99,5%<br>[RNF20](index.md#rnf20) · Integridade criptográfica | `CT-M4-03`<br>`CT-M4-04` |

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `4.1` | 30/10/2026 | Desacoplamento da Pirâmide de Abstração e Matriz-Síntese em documento próprio de Rastreabilidade. | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
| `4.2` | 02/11/2026 | Implementação da Pirâmide de Abstração Interativa nativa (com busca em tempo real, pintura de conexões RF → CAR → OE → OG, zoom automático e paleta de cores dos cards do catálogo), remoção do embed externo do Miro e organização da Matriz-Síntese em abas por Módulo/OE. | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
