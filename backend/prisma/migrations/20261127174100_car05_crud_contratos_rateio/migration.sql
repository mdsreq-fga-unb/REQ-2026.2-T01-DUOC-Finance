ALTER TABLE "contratos_obra"
  ADD COLUMN "descricao" TEXT,
  ADD COLUMN "centro_custo" VARCHAR(80),
  ADD COLUMN "valor_diaria_centavos" INTEGER NOT NULL DEFAULT 0,
  ADD COLUMN "data_inicio" DATE,
  ADD COLUMN "data_fim" DATE;
