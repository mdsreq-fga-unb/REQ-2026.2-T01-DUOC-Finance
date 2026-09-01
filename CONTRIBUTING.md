# 📖 Guia de Contribuição — DUOC Finance

Seja bem-vindo(a) ao repositório do **DUOC Finance**! Este guia define as diretrizes, metodologias de desenvolvimento, padrões de branching, convenções de commits e processos de revisão por pares adotados pela equipe **Cascata Ágil** no âmbito da disciplina de **Requisitos de Software** (UnB/FGA).

Nosso objetivo é manter um histórico limpo, alta rastreabilidade entre requisitos e código, e um padrão profissional alinhado às melhores práticas do mercado de engenharia de software.

---

## Sumário

- [1. Princípios Gerais e Governança](#1-princípios-gerais-e-governança)
- [2. Fluxo de Branches (GitFlow Adaptado)](#2-fluxo-de-branches-gitflow-adaptado)
- [3. Padrão Universal de Commits (Conventional Commits)](#3-padrão-universal-de-commits-conventional-commits)
- [4. Ciclo de Vida de Demandas (Issues e Milestones)](#4-ciclo-de-vida-de-demandas-issues-e-milestones)
- [5. Padrão de Pull Requests e Revisão por Pares](#5-padrão-de-pull-requests-e-revisão-por-pares)
- [6. Guia de Estilo para a Documentação (MkDocs)](#6-guia-de-estilo-para-a-documentação-mkdocs)
- [7. Ambiente Local e Verificação](#7-ambiente-local-e-verificação)

---

## 1. Princípios Gerais e Governança

1. **Rastreabilidade Obrigatória:** Toda alteração significativa (seja código, infraestrutura ou documento de requisitos) deve estar vinculada a uma **Issue** aberta e à sua respectiva **Milestone** (Unidade de entrega).
2. **Qualidade Contínua:** Nenhuma alteração entra na branch principal sem passar por validação local (`mkdocs serve` / testes automatizados) e aprovação em Pull Request.
3. **Comunicação Transparente:** Discussões técnicas e decisões de requisitos devem ser registradas nos comentários das issues e PRs correspondentes.

---

## 2. Fluxo de Branches (GitFlow Adaptado)

Adotamos um modelo baseado em **GitFlow simplificado** com branches protegidas e branches efêmeras de trabalho:

```text
main ──────────────────────────────────────────● (Release / Entrega Oficial)
                                              ▲
develop ────────●─────────●─────────●─────────● (Integração Contínua)
                 \       /           \       /
feat/CAR01-ponto  ●─────●   docs/cap1 ●─────●   (Branches de Trabalho)
```

### Branches Principais (Permanentes)

- **`main`**: Contém a versão de produção/entrega estável. Apenas merges a partir da `develop` (ao final de cada Milestone / Unidade) são aceitos.
- **`develop`**: Branch principal de integração diária da equipe. Todo novo trabalho é integrado nela através de Pull Requests aprovados.

> [!WARNING]
> **É estritamente proibido realizar commits diretos na `main` ou na `develop`.**

### Branches de Trabalho (Temporárias)

Para desenvolver uma nova funcionalidade, corrigir um erro ou redigir documentação, crie uma branch a partir da `develop` atualizada:

```bash
git checkout develop
git pull origin develop
git checkout -b <prefixo>/<identificador-ou-issue>-<descricao-curta>
```

#### Padronização de Nomenclatura de Branches:

| Prefixo | Finalidade | Exemplo de Branch |
| :--- | :--- | :--- |
| `feat/` | Nova funcionalidade ou artefato de requisitos | `feat/12-requisitos-rvt` |
| `docs/` | Criação/atualização de documentação no MkDocs | `docs/05-capitulo-1-cenario-atual` |
| `fix/` | Correção de bug no sistema ou erro na documentação | `fix/20-link-quebrado-nav` |
| `refactor/` | Reestruturação de código ou texto sem mudar comportamento | `refactor/15-diagramas-processo` |
| `infra/` | Configurações de CI/CD, templates ou repositório | `infra/01-templates-e-workflows` |
| `test/` | Criação ou ajuste de testes automatizados | `test/30-testes-folha-pagamento` |

---

## 3. Padrão Universal de Commits (Conventional Commits)

Seguimos a especificação internacional [Conventional Commits v1.0.0](https://www.conventionalcommits.org/pt-br/v1.0.0/). Essa convenção padroniza o histórico do projeto, facilita auditorias e viabiliza a geração automatizada de changelogs.

### Estrutura da Mensagem de Commit

```text
<tipo>[escopo opcional]: <descrição no imperativo e em caixa baixa>

[corpo opcional detalhando o contexto e motivação]

[rodapé opcional com referências a issues, ex: Closes #12]
```

### Tipos Permitidos

- **`feat`**: Nova funcionalidade ou novo artefato de requisitos (ex: CAR, diagrama BPMN, casos de uso).
- **`fix`**: Correção de bug em código ou divergência em artefatos de requisitos.
- **`docs`**: Alterações puramente documentais (páginas do MkDocs, diagramas explicativos, README).
- **`style`**: Ajustes de formatação, indentação ou espaçamento que não alteram a lógica/significado.
- **`refactor`**: Mudança no código ou reorganização de texto que não altera a funcionalidade final nem corrige bugs.
- **`ci`**: Modificações nos arquivos de integração/entrega contínua (ex: `.github/workflows/deploy.yml`).
- **`chore`**: Tarefas de manutenção rotineira (ex: atualização de dependências no `requirements.txt`, `.gitignore`).
- **`test`**: Adição ou correção de suítes de testes.

### Exemplos Práticos de Commits

```bash
# Adição de novo artefato de requisitos
git commit -m "feat(requisitos): adicionar caracteristicas do produto CAR01 e CAR02"

# Atualização de capítulo do MkDocs
git commit -m "docs(cenario-atual): documentar stakeholders e matriz de problemas"

# Correção de link quebrado
git commit -m "fix(mkdocs): corrigir caminho relativo de imagem no capitulo 2"

# Atualização de CI/CD
git commit -m "ci(deploy): ajustar versao do python na pipeline de publicacao"

# Commit completo com corpo e referência de fechamento
git commit -m "feat(ponto): implementar tela de registro de jornada

Adiciona interface inicial de marcacao de ponto com calculo automatico de horas extras conforme CLT.

Closes #14"
```

### Boas Práticas para Mensagens de Commit
- Use o verbo no **imperativo** ("adicionar", "corrigir", "atualizar", nunca "adicionado" ou "adicionando").
- Mensagem de resumo em **letras minúsculas** e sem ponto final na primeira linha.
- Mantenha a primeira linha com no máximo **72 caracteres**.
- Faça commits atômicos (uma responsabilidade lógica por commit).

---

## 4. Ciclo de Vida de Demandas (Issues e Milestones)

Todo o trabalho deve ser planejado e rastreado no GitHub:

### Milestones (Unidades da Disciplina)
Utilizamos as **Milestones** nativas do GitHub para agrupar as entregas de cada ciclo/unidade do semestre:
- `Unidade 1`
- `Unidade 2`
- `Unidade 3`
- `Unidade 4`

Toda Issue e Pull Request **deve ser associado à sua respectiva Milestone**.

### Classificação Nativa do GitHub
- **Type:** Definido no painel de issues (Feature, Bug, Task).
- **Priority:** Definida no campo nativo do GitHub Projects/Issues (Urgent, High, Medium, Low).
- **Assignees:** Membro(s) responsável(is) pela execução da atividade.

### Labels Adicionais de Escopo e Status
Usamos labels para identificar a frente de trabalho e o estado da tarefa:

#### Escopo
- `scope: cenario-atual` — Capítulo 1 (Contexto e Problema)
- `scope: solucao` — Capítulo 2 (Objetivos e CARs)
- `scope: metodologia` — Capítulo 3 (Processos e Ciclo de Vida)

#### Status
- `status: precisa-de-revisao` — Artefato ou código finalizado aguardando revisão por pares.
- `status: em-andamento` — Tarefa sendo desenvolvida ativamente.
- `status: aprovado` — Revisado e pronto para merge.

---

## 5. Padrão de Pull Requests e Revisão por Pares

Todo incremento de software ou documentação é submetido via **Pull Request (PR)** apontando para a branch `develop`.

### Etapas para Abertura de PR

1. **Sincronize sua branch local com a `develop`:**
   ```bash
   git checkout develop
   git pull origin develop
   git checkout sua-branch
   git merge develop
   ```

2. **Abra o Pull Request:**
   - **Base:** `develop`
   - **Compare:** `sua-branch`
   - **Título:** Deve seguir o padrão de commit, por exemplo: `feat(requisitos): adicionar caracteristicas do produto CAR01 a CAR04`
   - **Template:** Preencha **todos** os campos do template institucional gerado automaticamente (`.github/PULL_REQUEST_TEMPLATE.md`).
   - **Rastreabilidade:** Adicione a palavra-chave de fechamento no campo de issue relacionada (ex: `Closes #15`).

### Critérios de Aceite para Merge (Code & Doc Review)

- [ ] Pelo menos **1 aprovação (Reviewer)** de outro integrante da equipe.
- [ ] Build do MkDocs validado sem warnings ou erros (`mkdocs build --strict`).
- [ ] Nenhum conflito pendente com a branch `develop`.
- [ ] Histórico de commits limpo e aderente ao Conventional Commits.
- [ ] **Estratégia de Merge:** Utilizar preferencialmente **Squash and Merge** ou **Rebase and Merge** para manter o histórico da `develop` linear e limpo.

---

## 6. Guia de Estilo para a Documentação (MkDocs)

Como o repositório hospeda a documentação viva da disciplina, siga estas diretrizes ao editar arquivos em `docs/`:

1. **Estrutura de Pastas:**
   - Mantenha capítulos agrupados em subpastas lógicas (ex: `docs/visao-produto/`).
   - Armazene imagens, diagramas e mídias em `docs/assets/images/`.
2. **Padrão de Nomenclatura de Arquivos:**
   - Use letras minúsculas separadas por hífen (`kebab-case`). Ex: `cap-1.md`, `requisitos-funcionais.md`.
3. **Uso de Admonitions (Avisos):**
   Utilize os blocos de destaque do Material for MkDocs:
   ```markdown
   !!! tip "Dica de Engenharia"
       Texto da dica explicativa.

   !!! warning "Atenção"
       Ponto crítico de validação ou requisito não funcional.
   ```
4. **Diagramas:**
   - Prefira diagramas renderizados em código via blocos `mermaid`:
   ```mermaid
   graph TD
       A[Elicitação] --> B[Modelagem]
       B --> C[Validação com Cliente]
   ```

---

## 7. Ambiente Local e Verificação

Antes de subir qualquer alteração, certifique-se de testar o build localmente:

```bash
# 1. Ativar o ambiente virtual
source venv/bin/activate  # No Windows: venv\Scripts\activate

# 2. Instalar / atualizar dependências
pip install -r requirements.txt

# 3. Executar o servidor de desenvolvimento
mkdocs serve

# 4. Validar se o build ocorre estritamente sem erros
mkdocs build --strict
```

Acesse `http://127.0.0.1:8000` no seu navegador para revisar a renderização das páginas.

---

Agradecemos o comprometimento de todos em manter o **DUOC Finance** dentro dos mais altos padrões de qualidade técnica e acadêmica!
