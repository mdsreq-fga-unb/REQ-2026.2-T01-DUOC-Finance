CREATE TYPE "AcaoAcesso" AS ENUM (
    'PAPEL_ALTERADO',
    'CONTA_ATIVADA',
    'CONTA_DESATIVADA'
);

CREATE TABLE "eventos_acesso" (
    "id" TEXT NOT NULL,
    "operador_id" TEXT NOT NULL,
    "usuario_id" TEXT NOT NULL,
    "acao" "AcaoAcesso" NOT NULL,
    "papel_anterior" "PapelUsuario",
    "papel_novo" "PapelUsuario",
    "ativo_anterior" BOOLEAN,
    "ativo_novo" BOOLEAN,
    "ocorrido_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "eventos_acesso_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "eventos_acesso_usuario_id_ocorrido_em_idx"
ON "eventos_acesso"("usuario_id", "ocorrido_em");

CREATE INDEX "eventos_acesso_operador_id_ocorrido_em_idx"
ON "eventos_acesso"("operador_id", "ocorrido_em");

ALTER TABLE "eventos_acesso"
ADD CONSTRAINT "eventos_acesso_operador_id_fkey"
FOREIGN KEY ("operador_id") REFERENCES "usuarios"("id")
ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "eventos_acesso"
ADD CONSTRAINT "eventos_acesso_usuario_id_fkey"
FOREIGN KEY ("usuario_id") REFERENCES "usuarios"("id")
ON DELETE RESTRICT ON UPDATE CASCADE;

CREATE FUNCTION impedir_alteracao_eventos_acesso()
RETURNS trigger AS $$
BEGIN
    RAISE EXCEPTION 'eventos_acesso e append-only';
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER "eventos_acesso_append_only"
BEFORE UPDATE OR DELETE ON "eventos_acesso"
FOR EACH ROW EXECUTE FUNCTION impedir_alteracao_eventos_acesso();
