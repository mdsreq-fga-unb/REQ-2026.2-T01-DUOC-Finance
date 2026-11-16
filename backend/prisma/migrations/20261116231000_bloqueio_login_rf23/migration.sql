-- RF23 / issue #155 — bloqueio de conta por tentativas consecutivas.
-- Guarda estado no PostgreSQL, persistindo mesmo após reinício da API.
ALTER TABLE "usuarios"
  ADD COLUMN "tentativas_falhas" INTEGER NOT NULL DEFAULT 0,
  ADD COLUMN "bloqueado_ate" TIMESTAMP(3);

ALTER TABLE "usuarios"
  ADD CONSTRAINT "usuarios_tentativas_falhas_nonnegative"
    CHECK ("tentativas_falhas" >= 0);
