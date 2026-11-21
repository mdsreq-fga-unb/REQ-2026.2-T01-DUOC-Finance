-- CreateEnum
CREATE TYPE "TipoEventoRvt" AS ENUM ('SUBMISSAO', 'RETIFICACAO', 'REENVIO', 'HOMOLOGACAO', 'REJEICAO');

-- AlterTable
ALTER TABLE "contratos_obra" ADD COLUMN     "gestor_responsavel_id" TEXT;

-- AlterTable
ALTER TABLE "rvts" ADD COLUMN     "janela_retificacao_inicio" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- RN02 — apontamentos já existentes contam a janela a partir da própria submissão
UPDATE "rvts" SET "janela_retificacao_inicio" = "created_at";

-- CreateTable
CREATE TABLE "rvt_historico" (
    "id" TEXT NOT NULL,
    "rvt_id" TEXT NOT NULL,
    "tipo" "TipoEventoRvt" NOT NULL,
    "autor_usuario_id" TEXT,
    "parecer" TEXT,
    "alteracoes" JSONB,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "rvt_historico_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "rvt_historico_rvt_id_created_at_idx" ON "rvt_historico"("rvt_id", "created_at");

-- CreateIndex
CREATE INDEX "contratos_obra_gestor_responsavel_id_idx" ON "contratos_obra"("gestor_responsavel_id");

-- AddForeignKey
ALTER TABLE "contratos_obra" ADD CONSTRAINT "contratos_obra_gestor_responsavel_id_fkey" FOREIGN KEY ("gestor_responsavel_id") REFERENCES "usuarios"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "rvt_historico" ADD CONSTRAINT "rvt_historico_rvt_id_fkey" FOREIGN KEY ("rvt_id") REFERENCES "rvts"("id") ON DELETE CASCADE ON UPDATE CASCADE;
