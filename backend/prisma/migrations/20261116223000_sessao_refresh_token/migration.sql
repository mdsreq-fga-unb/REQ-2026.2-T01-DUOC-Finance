-- Adiciona suporte a refresh tokens rotativos sem armazená-los em texto puro.
-- Sessões anteriores à migração permanecem válidas apenas até expirar o access token.
ALTER TABLE "sessoes" ADD COLUMN "refresh_token_hash" VARCHAR(64);
CREATE UNIQUE INDEX "sessoes_refresh_token_hash_key" ON "sessoes"("refresh_token_hash");
