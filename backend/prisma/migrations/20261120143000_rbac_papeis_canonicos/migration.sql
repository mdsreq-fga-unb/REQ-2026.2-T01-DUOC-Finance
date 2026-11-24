DO $$
BEGIN
    IF EXISTS (
        SELECT 1
        FROM "usuarios"
        WHERE "papel" = 'AUDITOR_EXTERNO'
    ) THEN
        RAISE EXCEPTION
            'Remapeie explicitamente usuarios AUDITOR_EXTERNO para um papel canonico antes de aplicar esta migration.';
    END IF;
END $$;

CREATE TYPE "PapelUsuario_novo" AS ENUM (
    'ADMIN_SISTEMA',
    'ADMIN_FINANCEIRO',
    'GESTOR_OBRAS',
    'TECNICO_CAMPO'
);

ALTER TABLE "usuarios"
ALTER COLUMN "papel" TYPE "PapelUsuario_novo"
USING (
    CASE "papel"::text
        WHEN 'GESTOR_OPERACIONAL' THEN 'GESTOR_OBRAS'
        ELSE "papel"::text
    END
)::"PapelUsuario_novo";

DROP TYPE "PapelUsuario";
ALTER TYPE "PapelUsuario_novo" RENAME TO "PapelUsuario";
