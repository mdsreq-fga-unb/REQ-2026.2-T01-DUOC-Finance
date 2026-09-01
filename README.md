# 🏢 DUOC Finance — Sistema de Gestão Financeira e Departamento Pessoal

[![UnB/FGA](https://img.shields.io/badge/UnB-FGA-blue)](https://fga.unb.br/)
[![Disciplina](https://img.shields.io/badge/Requisitos--de--Software-2026.2-green)](https://github.com/mdsreq-fga-unb/REQ-2026.2-T01-DUOC-Finance)
[![Documentation](https://img.shields.io/badge/Docs-MkDocs--Material-gold)](https://mdsreq-fga-unb.github.io/REQ-2026.2-T01-DUOC-Finance/)
[![Contributing](https://img.shields.io/badge/Contributing-Guia-orange)](./CONTRIBUTING.md)

> **Projeto da Disciplina de Requisitos de Software (2026.2)**  
> **Universidade de Brasília (UnB) — Campus Faculdade do Gama (FGA)**  
> **Docente:** Prof. Dr. George Marsicano  

---

## 📌 Sobre o Projeto

O **DUOC Finance** é uma solução digital desenvolvida para a empresa **DUOC Arquitetura e Engenharia LTDA**, com o objetivo de centralizar e automatizar o fluxo sociotécnico de **Departamento Pessoal e Gestão Financeira por Contrato**. O sistema resolve a fragmentação causada por planilhas desconectadas, unificando o registro de ponto, o Relatório de Viagem Técnica (RVT), o cálculo de folha de pagamento e a apuração do custo real de mão de obra por projeto em conformidade com a LGPD.

---

## 👥 Equipe de Desenvolvimento (Cascata Ágil)

| Foto | Integrante | GitHub | Matrícula | Responsabilidade Principal |
| :---: | :--- | :---: | :---: | :--- |
| <img src="https://github.com/cgbriel28.png" width="64" height="64" style="border-radius: 50%; border: 2px solid #DAA520;" alt="Gabriel"> | Gabriel | [@cgbriel28](https://github.com/cgbriel28) | 242015450 | Requisitos e Elicitação |
| <img src="https://github.com/EricAraujoBsB.png" width="64" height="64" style="border-radius: 50%; border: 2px solid #DAA520;" alt="Eric Araújo"> | Eric Araújo | [@EricAraujoBsB](https://github.com/EricAraujoBsB) | 200064053 | Modelagem e Arquitetura |
| <img src="https://github.com/gih7915.png" width="64" height="64" style="border-radius: 50%; border: 2px solid #DAA520;" alt="Giovanna"> | Giovanna | [@gih7915](https://github.com/gih7915) | 231034707 | Gestão de Qualidade e Testes |
| <img src="https://github.com/Gustavo2703.png" width="64" height="64" style="border-radius: 50%; border: 2px solid #DAA520;" alt="Gustavo"> | Gustavo | [@Gustavo2703](https://github.com/Gustavo2703) | 241025659 | Desenvolvimento Full Stack |
| <img src="https://github.com/szervinsk.png" width="64" height="64" style="border-radius: 50%; border: 2px solid #DAA520;" alt="Szervinsk"> | Matheus Ribeiro | [@szervinsk](https://github.com/szervinsk) | 231011749 | Elicitação e Contato com Cliente |
| <img src="https://github.com/Matheus-S-Camargo.png" width="64" height="64" style="border-radius: 50%; border: 2px solid #DAA520;" alt="Matheus Camargo"> | Matheus Camargo | [@Matheus-S-Camargo](https://github.com/Matheus-S-Camargo) | 241011475 | Engenharia de Software / Backend |
| <img src="https://github.com/Pnery2004.png" width="64" height="64" style="border-radius: 50%; border: 2px solid #DAA520;" alt="Paulo Nery"> | Paulo Nery | [@Pnery2004](https://github.com/Pnery2004) | 221008740 | Interface e Frontend |

---

## 🔗 Links Úteis e Documentação

- 🌐 **Site da Documentação (GitHub Pages):** [Acessar Documentação Completa](https://mdsreq-fga-unb.github.io/REQ-2026.2-T01-DUOC-Finance/)
- 📑 **Visão do Produto e Projeto:** Disponível na aba de Capítulos do nosso site MkDocs.
- 🎨 **Figma / Prototipagem:** [Link do Projeto no Figma](https://figma.com/)
- 🤝 **Cliente Parceiro:** DUOC Arquitetura e Engenharia (Representante: Maria Beatryz Vieira de Sousa | CNPJ: `53.616.784/0001-43`)
- 🌐 **Site da Empresa:** [https://www.duoc.eng.br/](https://www.duoc.eng.br/)

---

## 📁 Estrutura do Repositório

```text
.
├── .github/
│   ├── ISSUE_TEMPLATE/
│   │   ├── bug_report.md        # Template para reporte de bugs e divergências
│   │   ├── doc_update.md        # Template para atualização de documentação
│   │   └── feature_request.md   # Template para novos requisitos / funcionalidades
│   ├── workflows/
│   │   └── deploy.yml           # Pipeline de build e deploy no GitHub Pages
│   └── PULL_REQUEST_TEMPLATE.md # Template padronizado de Pull Requests
├── docs/                        # Código-fonte da documentação (Markdown e assets)
├── mkdocs.yml                   # Arquivo de configuração do MkDocs Material
├── requirements.txt             # Dependências Python para MkDocs
├── CONTRIBUTING.md              # Guia completo de contribuição, Git e Commits
├── .gitignore                   # Arquivos e pastas ignorados no versionamento
└── README.md                    # Apresentação institucional do repositório
```

---

## 🚀 Como Executar a Documentação Localmente

### Pré-requisitos
- Python 3.10 ou superior
- `pip` e `virtualenv`

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/mdsreq-fga-unb/REQ-2026.2-T01-DUOC-Finance.git
   cd REQ-2026.2-T01-DUOC-Finance
   ```

2. **Crie e ative um ambiente virtual:**
   ```bash
   python3 -m venv venv
   source venv/bin/activate  # No Windows: venv\Scripts\activate
   ```

3. **Instale as dependências:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Inicie o servidor de desenvolvimento do MkDocs:**
   ```bash
   mkdocs serve
   ```
   Acesse a documentação no navegador através do endereço: `http://127.0.0.1:8000/`.

---

## 🏛️ Governança, Commits e Contribuição

Para garantir a qualidade, rastreabilidade e padronização do código e da documentação, todo o time deve seguir as diretrizes do nosso [**Guia de Contribuição (CONTRIBUTING.md)**](./CONTRIBUTING.md).

### Resumo das Práticas:
- **Modelo de Branching:** Branches de trabalho a partir da `develop` (`feat/`, `fix/`, `docs/`, `infra/`, `refactor/`). Branches `main` e `develop` protegidas.
- **Padrão de Commits:** [Conventional Commits](https://www.conventionalcommits.org/pt-br/v1.0.0/) (`feat:`, `fix:`, `docs:`, `ci:`, `chore:`, `refactor:`).
- **Milestones:** Utilizadas para rastrear os entregáveis das Unidades da disciplina (`Unidade 1`, `Unidade 2`, etc.).
- **Classificação Nativa GitHub:** Campos nativos de *Type* e *Priority* do GitHub Issues/Projects.
- **Pull Requests:** Obrigatório preencher o template institucional e obter pelo menos 1 aprovação de revisão por pares antes do merge.