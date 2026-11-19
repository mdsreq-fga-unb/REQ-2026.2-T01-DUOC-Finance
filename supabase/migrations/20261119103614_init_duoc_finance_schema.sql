-- ==========================================
-- ENUMS
-- ==========================================
CREATE TYPE tipo_contrato_enum AS ENUM ('CLT', 'DIARISTA', 'PJ');
CREATE TYPE status_colaborador_enum AS ENUM ('ATIVO', 'AFASTADO', 'DESLIGADO');
CREATE TYPE nivel_acesso_enum AS ENUM ('ADMIN_SISTEMA', 'ADMIN_FINANCEIRO', 'GESTOR_OBRAS', 'TECNICO_CAMPO');
CREATE TYPE tipo_cliente_enum AS ENUM ('PF', 'PJ');
CREATE TYPE status_cliente_enum AS ENUM ('ATIVO', 'SUSPENSO', 'ENCERRADO');
CREATE TYPE status_apontamento_enum AS ENUM ('PENDENTE', 'HOMOLOGADO', 'REJEITADO');

-- ==========================================
-- TABELAS BASE (SEM DEPENDÊNCIAS)
-- ==========================================
CREATE TABLE cargo (
    id SERIAL PRIMARY KEY,
    funcao VARCHAR(100) NOT NULL,
    setor VARCHAR(100) NOT NULL
);

CREATE TABLE endereco (
    id SERIAL PRIMARY KEY,
    cep VARCHAR(9) NOT NULL,
    bairro VARCHAR(100) NOT NULL,
    cidade VARCHAR(100) NOT NULL
);

CREATE TABLE cliente (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    tipo tipo_cliente_enum NOT NULL,
    cpf_cnpj VARCHAR(18) UNIQUE NOT NULL,
    valor_contrato DECIMAL(15, 4) NOT NULL,
    vigencia_inicio TIMESTAMPTZ NOT NULL,
    vigencia_fim TIMESTAMPTZ,
    status status_cliente_enum NOT NULL DEFAULT 'ATIVO'
);

-- ==========================================
-- COLABORADOR, USUÁRIO E DADOS BANCÁRIOS
-- ==========================================
CREATE TABLE colaborador (
    id SERIAL PRIMARY KEY,
    cpf VARCHAR(14) UNIQUE NOT NULL,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    email_corp VARCHAR(255) UNIQUE NOT NULL,
    tipo_contrato tipo_contrato_enum NOT NULL,
    id_cargo INT NOT NULL REFERENCES cargo(id),
    id_endereco INT NOT NULL REFERENCES endereco(id),
    status status_colaborador_enum NOT NULL DEFAULT 'ATIVO',
    contratacao TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    documentos VARCHAR(500), -- caminho/referência no bucket
    cursos VARCHAR(500)      -- caminho/referência no bucket
);

CREATE TABLE usuario (
    id SERIAL PRIMARY KEY,
    id_colab INT UNIQUE NOT NULL REFERENCES colaborador(id) ON DELETE CASCADE,
    nivel_acesso nivel_acesso_enum NOT NULL,
    senha VARCHAR(255) NOT NULL,
    tentativa_login INT NOT NULL DEFAULT 0,
    bloqueio TIMESTAMPTZ,
    data_ultima TIMESTAMPTZ,
    historico_senhas TEXT -- JSON array ou lista delimitada das últimas 5 senhas
);

CREATE TABLE dados_bancarios (
    id SERIAL PRIMARY KEY,
    id_colab INT NOT NULL REFERENCES colaborador(id) ON DELETE CASCADE,
    banco_compe VARCHAR(3) NOT NULL,
    agencia VARCHAR(10) NOT NULL,
    conta VARCHAR(20) NOT NULL,
    chave_pix VARCHAR(255),
    is_ativo BOOLEAN NOT NULL DEFAULT TRUE
);

-- ==========================================
-- OBRAS, CUSTOS E APONTAMENTOS
-- ==========================================
CREATE TABLE obras (
    id SERIAL PRIMARY KEY,
    id_endereco INT NOT NULL REFERENCES endereco(id),
    id_cliente INT NOT NULL REFERENCES cliente(id)
);

-- Tabela associativa para o relacionamento N:N ou N:1 (Colaborador trabalha em Obras)
CREATE TABLE obra_colaboradores (
    id_obra INT NOT NULL REFERENCES obras(id) ON DELETE CASCADE,
    id_colab INT NOT NULL REFERENCES colaborador(id) ON DELETE CASCADE,
    PRIMARY KEY (id_obra, id_colab)
);

CREATE TABLE custos (
    id SERIAL PRIMARY KEY,
    id_obra INT NOT NULL REFERENCES obras(id) ON DELETE CASCADE,
    id_cliente INT NOT NULL REFERENCES cliente(id),
    categoria VARCHAR(100) NOT NULL,
    orcamento_teto DECIMAL(15, 4) NOT NULL
);

CREATE TABLE apontamentos (
    id SERIAL PRIMARY KEY,
    id_colab INT NOT NULL REFERENCES colaborador(id),
    id_obra INT NOT NULL REFERENCES obras(id),
    data TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    status status_apontamento_enum NOT NULL DEFAULT 'PENDENTE',
    gestor INT REFERENCES colaborador(id),
    comprovante VARCHAR(500) -- caminho/referência no bucket
);