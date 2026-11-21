-- Alinha o esquema ao DER (docs/mvp/modelagem_bd.md).
-- Tabelas existentes são RENOMEADAS (não recriadas): nenhum dado é perdido,
-- exceto a coluna livre "contratos_obra.cliente", substituída pela FK id_cliente.

-- ===========================================================================
-- 1. Novos tipos
-- ===========================================================================
CREATE TYPE "TipoContrato" AS ENUM ('CLT', 'DIARISTA', 'PJ');
CREATE TYPE "StatusColaborador" AS ENUM ('ATIVO', 'AFASTADO', 'DESLIGADO');
CREATE TYPE "TipoCliente" AS ENUM ('PF', 'PJ');

-- ===========================================================================
-- 2. Novas entidades do DER
-- ===========================================================================
CREATE TABLE "cargo" (
    "id" TEXT NOT NULL,
    "funcao" VARCHAR(100) NOT NULL,
    "setor" VARCHAR(100) NOT NULL,

    CONSTRAINT "cargo_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "cargo_funcao_setor_key" ON "cargo"("funcao", "setor");

CREATE TABLE "endereco" (
    "id" TEXT NOT NULL,
    "cep" VARCHAR(8) NOT NULL,
    "bairro" VARCHAR(100) NOT NULL,
    "cidade" VARCHAR(100) NOT NULL,

    CONSTRAINT "endereco_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "cliente" (
    "id" TEXT NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "tipo" "TipoCliente" NOT NULL,
    "cpf_cnpj" VARCHAR(14) NOT NULL,
    "valor_contrato" DECIMAL(15,2) NOT NULL,
    "vigencia_inicio" DATE NOT NULL,
    "vigencia_fim" DATE,
    "status" "StatusContratoObra" NOT NULL DEFAULT 'ATIVO',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cliente_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "cliente_cpf_cnpj_key" ON "cliente"("cpf_cnpj");

CREATE TABLE "colaborador" (
    "id" TEXT NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "email" VARCHAR(254) NOT NULL,
    "email_corp" VARCHAR(254) NOT NULL,
    "tipo_contrato" "TipoContrato" NOT NULL,
    "id_cargo" TEXT NOT NULL,
    "id_endereco" TEXT NOT NULL,
    "status" "StatusColaborador" NOT NULL DEFAULT 'ATIVO',
    "contratacao" DATE NOT NULL,
    "documentos" VARCHAR(500),
    "cursos" VARCHAR(500),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "colaborador_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "colaborador_cpf_key" ON "colaborador"("cpf");
CREATE UNIQUE INDEX "colaborador_email_corp_key" ON "colaborador"("email_corp");
CREATE INDEX "colaborador_id_cargo_idx" ON "colaborador"("id_cargo");
ALTER TABLE "colaborador" ADD CONSTRAINT "colaborador_id_cargo_fkey" FOREIGN KEY ("id_cargo") REFERENCES "cargo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
ALTER TABLE "colaborador" ADD CONSTRAINT "colaborador_id_endereco_fkey" FOREIGN KEY ("id_endereco") REFERENCES "endereco"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

CREATE TABLE "dados_bancarios" (
    "id" TEXT NOT NULL,
    "id_colab" TEXT NOT NULL,
    "banco_compe" VARCHAR(3) NOT NULL,
    "agencia" VARCHAR(10) NOT NULL,
    "conta" VARCHAR(20) NOT NULL,
    "chave_pix" VARCHAR(255),
    "is_ativo" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "dados_bancarios_pkey" PRIMARY KEY ("id")
);
CREATE INDEX "dados_bancarios_id_colab_is_ativo_idx" ON "dados_bancarios"("id_colab", "is_ativo");
ALTER TABLE "dados_bancarios" ADD CONSTRAINT "dados_bancarios_id_colab_fkey" FOREIGN KEY ("id_colab") REFERENCES "colaborador"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- ===========================================================================
-- 3. Usuário (antes "usuarios")
-- ===========================================================================
ALTER TABLE "usuarios" RENAME TO "usuario";
ALTER TABLE "usuario" RENAME CONSTRAINT "usuarios_pkey" TO "usuario_pkey";
ALTER INDEX "usuarios_email_key" RENAME TO "usuario_email_key";
ALTER TABLE "usuario" RENAME COLUMN "senha_hash" TO "senha";
ALTER TABLE "usuario" RENAME COLUMN "papel" TO "nivel_acesso";
ALTER TABLE "usuario" RENAME COLUMN "tentativas_falhas" TO "tentativa_login";
ALTER TABLE "usuario" RENAME COLUMN "bloqueado_ate" TO "bloqueio";
ALTER TABLE "usuario" RENAME CONSTRAINT "usuarios_tentativas_falhas_nonnegative" TO "usuario_tentativa_login_nonnegative";
ALTER TABLE "usuario"
  ADD COLUMN "id_colab" TEXT,
  ADD COLUMN "data_ultima" TIMESTAMP(3),
  ADD COLUMN "historico_senhas" TEXT[] DEFAULT ARRAY[]::TEXT[];
CREATE UNIQUE INDEX "usuario_id_colab_key" ON "usuario"("id_colab");
ALTER TABLE "usuario" ADD CONSTRAINT "usuario_id_colab_fkey" FOREIGN KEY ("id_colab") REFERENCES "colaborador"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- Sessões (antes "sessoes")
ALTER TABLE "sessoes" RENAME TO "sessao";
ALTER TABLE "sessao" RENAME CONSTRAINT "sessoes_pkey" TO "sessao_pkey";
ALTER TABLE "sessao" RENAME COLUMN "usuario_id" TO "id_usuario";
ALTER INDEX "sessoes_usuario_id_revogada_em_idx" RENAME TO "sessao_id_usuario_revogada_em_idx";
ALTER INDEX "sessoes_refresh_token_hash_key" RENAME TO "sessao_refresh_token_hash_key";
ALTER TABLE "sessao" RENAME CONSTRAINT "sessoes_usuario_id_fkey" TO "sessao_id_usuario_fkey";

-- ===========================================================================
-- 4. Obras (antes "contratos_obra")
-- ===========================================================================
ALTER TABLE "contratos_obra" RENAME TO "obras";
ALTER TABLE "obras" RENAME CONSTRAINT "contratos_obra_pkey" TO "obras_pkey";
ALTER INDEX "contratos_obra_codigo_key" RENAME TO "obras_codigo_key";
ALTER INDEX "contratos_obra_gestor_responsavel_id_idx" RENAME TO "obras_gestor_responsavel_id_idx";
ALTER TABLE "obras" RENAME CONSTRAINT "contratos_obra_gestor_responsavel_id_fkey" TO "obras_gestor_responsavel_id_fkey";
-- O nome do cliente passa a vir da entidade Cliente (FK id_cliente)
ALTER TABLE "obras" DROP COLUMN "cliente";
ALTER TABLE "obras"
  ADD COLUMN "id_cliente" TEXT,
  ADD COLUMN "id_endereco" TEXT;
CREATE INDEX "obras_id_cliente_idx" ON "obras"("id_cliente");
ALTER TABLE "obras" ADD CONSTRAINT "obras_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "cliente"("id") ON DELETE SET NULL ON UPDATE CASCADE;
ALTER TABLE "obras" ADD CONSTRAINT "obras_id_endereco_fkey" FOREIGN KEY ("id_endereco") REFERENCES "endereco"("id") ON DELETE SET NULL ON UPDATE CASCADE;

CREATE TABLE "obra_colaboradores" (
    "id_obra" TEXT NOT NULL,
    "id_colab" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "obra_colaboradores_pkey" PRIMARY KEY ("id_obra", "id_colab")
);
CREATE INDEX "obra_colaboradores_id_colab_idx" ON "obra_colaboradores"("id_colab");
ALTER TABLE "obra_colaboradores" ADD CONSTRAINT "obra_colaboradores_id_obra_fkey" FOREIGN KEY ("id_obra") REFERENCES "obras"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "obra_colaboradores" ADD CONSTRAINT "obra_colaboradores_id_colab_fkey" FOREIGN KEY ("id_colab") REFERENCES "colaborador"("id") ON DELETE CASCADE ON UPDATE CASCADE;

CREATE TABLE "custos" (
    "id" TEXT NOT NULL,
    "id_obra" TEXT NOT NULL,
    "id_cliente" TEXT NOT NULL,
    "categoria" VARCHAR(100) NOT NULL,
    "orcamento_teto" DECIMAL(15,2) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "custos_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "custos_id_obra_categoria_key" ON "custos"("id_obra", "categoria");
CREATE INDEX "custos_id_cliente_idx" ON "custos"("id_cliente");
ALTER TABLE "custos" ADD CONSTRAINT "custos_id_obra_fkey" FOREIGN KEY ("id_obra") REFERENCES "obras"("id") ON DELETE CASCADE ON UPDATE CASCADE;
ALTER TABLE "custos" ADD CONSTRAINT "custos_id_cliente_fkey" FOREIGN KEY ("id_cliente") REFERENCES "cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- ===========================================================================
-- 5. Apontamentos (antes "rvts") e tabelas dependentes
-- ===========================================================================
ALTER TABLE "rvts" RENAME TO "apontamentos";
ALTER TABLE "apontamentos" RENAME CONSTRAINT "rvts_pkey" TO "apontamentos_pkey";
ALTER TABLE "apontamentos" RENAME COLUMN "colaborador_id" TO "id_colab";
ALTER TABLE "apontamentos" RENAME COLUMN "contrato_id" TO "id_contrato";
ALTER TABLE "apontamentos" RENAME COLUMN "data_jornada" TO "data";
ALTER INDEX "rvts_colaborador_id_data_jornada_idx" RENAME TO "apontamentos_id_colab_data_idx";
ALTER TABLE "apontamentos" RENAME CONSTRAINT "rvts_contrato_id_fkey" TO "apontamentos_id_contrato_fkey";
ALTER TABLE "apontamentos" ADD COLUMN "gestor" TEXT;
CREATE INDEX "apontamentos_id_contrato_status_idx" ON "apontamentos"("id_contrato", "status");
-- NOT VALID: apontamentos de teste anteriores ao cadastro de colaboradores
-- continuam legíveis; todo registro novo ou alterado é validado pela FK.
ALTER TABLE "apontamentos" ADD CONSTRAINT "apontamentos_id_colab_fkey" FOREIGN KEY ("id_colab") REFERENCES "colaborador"("id") ON DELETE RESTRICT ON UPDATE CASCADE NOT VALID;
ALTER TABLE "apontamentos" ADD CONSTRAINT "apontamentos_gestor_fkey" FOREIGN KEY ("gestor") REFERENCES "colaborador"("id") ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "rvt_evidencias" RENAME TO "apontamento_evidencias";
ALTER TABLE "apontamento_evidencias" RENAME CONSTRAINT "rvt_evidencias_pkey" TO "apontamento_evidencias_pkey";
ALTER TABLE "apontamento_evidencias" RENAME COLUMN "rvt_id" TO "id_apontamento";
ALTER INDEX "rvt_evidencias_rvt_id_idx" RENAME TO "apontamento_evidencias_id_apontamento_idx";
ALTER TABLE "apontamento_evidencias" RENAME CONSTRAINT "rvt_evidencias_rvt_id_fkey" TO "apontamento_evidencias_id_apontamento_fkey";

ALTER TABLE "rvt_historico" RENAME TO "apontamento_historico";
ALTER TABLE "apontamento_historico" RENAME CONSTRAINT "rvt_historico_pkey" TO "apontamento_historico_pkey";
ALTER TABLE "apontamento_historico" RENAME COLUMN "rvt_id" TO "id_apontamento";
ALTER INDEX "rvt_historico_rvt_id_created_at_idx" RENAME TO "apontamento_historico_id_apontamento_created_at_idx";
ALTER TABLE "apontamento_historico" RENAME CONSTRAINT "rvt_historico_rvt_id_fkey" TO "apontamento_historico_id_apontamento_fkey";
