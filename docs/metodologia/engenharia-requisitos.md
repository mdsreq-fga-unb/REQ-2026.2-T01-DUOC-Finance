# Processo de Engenharia de Requisitos

Este capítulo sintetiza como as atividades de **Engenharia de Requisitos (ER)** são executadas pela equipe **Cascata Ágil** no projeto ***DUOC Finance***, conectando técnicas, ferramentas, artefatos e critérios de qualidade.

<a id="52-mapeamento-de-engenharia-de-requisitos-ao-processo"></a>
*(Nota: Os critérios de aceitação adotam listas estruturadas de regras de negócio verificáveis, e o mapeamento completo das fases do ciclo RAD está consolidado em [Estratégias de Engenharia](estrategias-esw.md) e [Organização & Atualização do Backlog](planejamento.md#organizacao-e-atualizacao-dos-requisitos)).*

---

<a id="51-elementos-de-engenharia-de-requisitos"></a>
## Etapas do Processo de Engenharia de Requisitos

<div class="er-cards-grid-3x2">
  <div class="er-stage-card">
    <div class="er-stage-title">1. Elicitação e Descoberta</div>
    <p><strong>Objetivo:</strong> Descobrir necessidades operacionais reais, regras de negócio e gargalos da DUOC.</p>
    <ul>
      <li><strong>Técnicas:</strong> Entrevistas semiestruturadas com Maria Beatryz e análise de planilhas legadas.</li>
      <li><strong>Artefatos:</strong> Planilhas sanitizadas e fluxos transacionais (<code>TR-01</code> a <code>TR-04</code>).</li>
    </ul>
    <div class="er-stage-links">
      Evidências: <a href="../../governanca/atas/reuniao-01/">Ata 01</a> · <a href="../../visao-produto/cenario-atual/#estrutura-detalhada-das-transacoes">Cenário Atual</a>
    </div>
  </div>

  <div class="er-stage-card">
    <div class="er-stage-title">2. Análise e Consenso</div>
    <p><strong>Objetivo:</strong> Estruturar o domínio, desambiguar conflitos e priorizar o escopo do MVP.</p>
    <ul>
      <li><strong>Técnicas:</strong> <em>Rich Picture</em>, Diagrama de Ishikawa e Matriz 4 × 4 (Valor × Esforço).</li>
      <li><strong>Artefatos:</strong> Mapa de Stakeholders, papéis RBAC e recorte de <strong>31 RFs MVP / 9 Pós-MVP</strong>.</li>
    </ul>
    <div class="er-stage-links">
      Evidências: <a href="../../visao-produto/cenario-atual/">Cenário Atual</a> · <a href="../../requisitos/priorizacao/">Priorização</a> · <a href="../../governanca/atas/reuniao-05/">Ata 05</a>
    </div>
  </div>

  <div class="er-stage-card">
    <div class="er-stage-title">3. Declaração e Especificação</div>
    <p><strong>Objetivo:</strong> Registrar os requisitos de forma atômica, clara e testável para negócio e engenharia.</p>
    <ul>
      <li><strong>Técnicas:</strong> Modelagem relacional (DER / Prisma) e decomposição modular por <code>OE</code>/<code>CAR</code>.</li>
      <li><strong>Artefatos:</strong> <code>40 RFs</code> + <code>40 USs</code> (1:1), <code>31 RNs</code>, <code>20 RNFs</code> (URPS+) e DER PostgreSQL.</li>
    </ul>
    <div class="er-stage-links">
      Evidências: <a href="../../visao-produto/solucao-proposta/">Solução Proposta</a> · <a href="../../requisitos/">Catálogo</a> · <a href="../../mvp/modelagem_bd/">Modelagem BD</a>
    </div>
  </div>

  <div class="er-stage-card">
    <div class="er-stage-title">4. Representação e Prototipação</div>
    <p><strong>Objetivo:</strong> Traduzir especificações em interfaces visuais e fluxos navegáveis (<em>UI-First</em>).</p>
    <ul>
      <li><strong>Ferramentas:</strong> Prototipação de alta fidelidade no <strong>Figma</strong> (Desktop e Mobile) e Frontend React.</li>
      <li><strong>Artefatos:</strong> Telas validadas sem alterações no Figma e fluxo sociotécnico documentado.</li>
    </ul>
    <div class="er-stage-links">
      Evidências: <a href="https://www.figma.com/design/jJ5lOX1FJ52vpFGk8cimoM/DUOC-FINANCE?node-id=1-3&t=CHCrS3jVWsoutYCM-1" target="_blank" rel="noopener">Figma ↗</a> · <a href="../../governanca/atas/reuniao-06/">Ata 06</a> · <a href="../interacao-cliente/">Interação</a>
    </div>
  </div>

  <div class="er-stage-card">
    <div class="er-stage-title">5. Verificação e Validação (V&amp;V)</div>
    <p><strong>Objetivo:</strong> Garantir corretude técnica (Verificação) e aderência ao negócio (Validação).</p>
    <ul>
      <li><strong>Técnicas:</strong> Avaliação por pares, inspeção em PRs, suítes Vitest (<code>107</code> backend / <code>18</code> frontend), CI/CD e UAT.</li>
      <li><strong>Critérios:</strong> Portões formais de entrada (DoR) e saída (DoD).</li>
    </ul>
    <div class="er-stage-links">
      Evidências: <a href="../../requisitos/feedback/">Feedback</a> · <a href="../../mvp/dor/">DoR</a> · <a href="../../mvp/dod/">DoD</a>
    </div>
  </div>

  <div class="er-stage-card">
    <div class="er-stage-title">6. Organização e Atualização</div>
    <p><strong>Objetivo:</strong> Controlar mudanças sem listas paralelas e manter rastreabilidade bidirecional.</p>
    <ul>
      <li><strong>Práticas:</strong> <em>Docs as Code</em> (MkDocs), GitHub Issues/Projects, Pull Requests e Fonte Única Canônica.</li>
      <li><strong>Artefatos:</strong> Cards unificados, matrizes de rastreabilidade e histórico por unidade.</li>
    </ul>
    <div class="er-stage-links">
      Evidências: <a href="../planejamento/#organizacao-e-atualizacao-dos-requisitos">Organização</a> · <a href="../organizacao-e-boas-praticas/">Boas Práticas</a> · <a href="../../requisitos/rastreabilidade/">Rastreabilidade</a>
    </div>
  </div>
</div>

---

## Histórico de Versão

| Versão | Data | Descrição | Autor(es) | Revisor(es) |
| :---: | :---: | :--- | :--- | :--- |
| `1.0` | 05/09/2026 | Estruturação inicial das atividades de Engenharia de Requisitos. | Carlos Gabriel | Matheus Ribeiro |
| `2.0` | 15/09/2026 | Unificação dos artefatos e alinhamento à stack NestJS/Supabase. | Equipe Cascata Ágil | Matheus Ribeiro Szervinsk |
| `2.8` | 17/11/2026 | Conversão das etapas para grade 3×2 em cards e remoção do mapeamento redundante com as fases do RAD. | Matheus Ribeiro Szervinsk | Equipe Cascata Ágil |
