-- CreateEnum
CREATE TYPE "StatusContratoObra" AS ENUM ('ATIVO', 'SUSPENSO', 'ENCERRADO');

-- CreateEnum
CREATE TYPE "StatusRvt" AS ENUM ('PENDENTE', 'HOMOLOGADO', 'REJEITADO');

-- CreateTable
CREATE TABLE "contratos_obra" (
    "id" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "cliente" TEXT,
    "status" "StatusContratoObra" NOT NULL DEFAULT 'ATIVO',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "contratos_obra_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rvts" (
    "id" TEXT NOT NULL,
    "colaborador_id" TEXT NOT NULL,
    "contrato_id" TEXT NOT NULL,
    "data_jornada" DATE NOT NULL,
    "horas_trabalhadas" DECIMAL(4,2) NOT NULL,
    "escopo_executado" TEXT NOT NULL,
    "status" "StatusRvt" NOT NULL DEFAULT 'PENDENTE',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "rvts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rvt_evidencias" (
    "id" TEXT NOT NULL,
    "rvt_id" TEXT NOT NULL,
    "nome_original" TEXT NOT NULL,
    "mime_type" TEXT NOT NULL,
    "tamanho_bytes" INTEGER NOT NULL,
    "hash_sha256" TEXT NOT NULL,
    "caminho_arquivo" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "rvt_evidencias_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "contratos_obra_codigo_key" ON "contratos_obra"("codigo");

-- CreateIndex
CREATE INDEX "rvts_colaborador_id_data_jornada_idx" ON "rvts"("colaborador_id", "data_jornada");

-- CreateIndex
CREATE INDEX "rvt_evidencias_rvt_id_idx" ON "rvt_evidencias"("rvt_id");

-- AddForeignKey
ALTER TABLE "rvts" ADD CONSTRAINT "rvts_contrato_id_fkey" FOREIGN KEY ("contrato_id") REFERENCES "contratos_obra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rvt_evidencias" ADD CONSTRAINT "rvt_evidencias_rvt_id_fkey" FOREIGN KEY ("rvt_id") REFERENCES "rvts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

