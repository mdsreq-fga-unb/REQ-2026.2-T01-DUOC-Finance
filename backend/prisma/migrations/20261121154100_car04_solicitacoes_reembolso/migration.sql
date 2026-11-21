-- CreateEnum
CREATE TYPE "StatusReembolso" AS ENUM ('PENDENTE', 'APROVADO', 'REJEITADO');

-- CreateTable
CREATE TABLE "solicitacoes_reembolso" (
    "id" TEXT NOT NULL,
    "codigo" VARCHAR(32) NOT NULL,
    "solicitante_id" TEXT NOT NULL,
    "contrato_id" TEXT NOT NULL,
    "rvt_id" TEXT,
    "categoria" VARCHAR(80) NOT NULL,
    "descricao" TEXT NOT NULL,
    "valor_centavos" INTEGER NOT NULL,
    "data_despesa" DATE NOT NULL,
    "status" "StatusReembolso" NOT NULL DEFAULT 'PENDENTE',
    "valor_aprovado_centavos" INTEGER,
    "parecer" TEXT,
    "deliberado_por_id" TEXT,
    "deliberado_em" TIMESTAMP(3),
    "comprovante_nome_original" VARCHAR(255) NOT NULL,
    "comprovante_mime_type" VARCHAR(100) NOT NULL,
    "comprovante_tamanho_bytes" INTEGER NOT NULL,
    "comprovante_hash_sha256" VARCHAR(64) NOT NULL,
    "comprovante_chave_arquivo" VARCHAR(512) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "solicitacoes_reembolso_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "solicitacoes_reembolso_codigo_key" ON "solicitacoes_reembolso"("codigo");

-- CreateIndex
CREATE INDEX "solicitacoes_reembolso_solicitante_id_data_despesa_idx" ON "solicitacoes_reembolso"("solicitante_id", "data_despesa");

-- CreateIndex
CREATE INDEX "solicitacoes_reembolso_contrato_id_status_idx" ON "solicitacoes_reembolso"("contrato_id", "status");

-- CreateIndex
CREATE INDEX "solicitacoes_reembolso_status_created_at_idx" ON "solicitacoes_reembolso"("status", "created_at");

-- CreateIndex
CREATE INDEX "solicitacoes_reembolso_rvt_id_idx" ON "solicitacoes_reembolso"("rvt_id");

-- AddForeignKey
ALTER TABLE "solicitacoes_reembolso" ADD CONSTRAINT "solicitacoes_reembolso_solicitante_id_fkey" FOREIGN KEY ("solicitante_id") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solicitacoes_reembolso" ADD CONSTRAINT "solicitacoes_reembolso_deliberado_por_id_fkey" FOREIGN KEY ("deliberado_por_id") REFERENCES "usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solicitacoes_reembolso" ADD CONSTRAINT "solicitacoes_reembolso_contrato_id_fkey" FOREIGN KEY ("contrato_id") REFERENCES "contratos_obra"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "solicitacoes_reembolso" ADD CONSTRAINT "solicitacoes_reembolso_rvt_id_fkey" FOREIGN KEY ("rvt_id") REFERENCES "rvts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
