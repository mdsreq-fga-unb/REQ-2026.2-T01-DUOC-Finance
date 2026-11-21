-- CAR-04 / RF07 / RF08 — Integridade mínima dos reembolsos.
-- Migration complementar: a migration 20261121154100 já foi aplicada e
-- NÃO deve ser editada depois de registrada no banco.

ALTER TABLE "solicitacoes_reembolso"
  ADD CONSTRAINT "solicitacoes_reembolso_valor_positivo_check"
    CHECK ("valor_centavos" > 0),
  ADD CONSTRAINT "solicitacoes_reembolso_comprovante_tamanho_check"
    CHECK ("comprovante_tamanho_bytes" BETWEEN 1 AND 5242880),
  ADD CONSTRAINT "solicitacoes_reembolso_valor_aprovado_check"
    CHECK (
      "valor_aprovado_centavos" IS NULL
      OR (
        "valor_aprovado_centavos" > 0
        AND "valor_aprovado_centavos" <= "valor_centavos"
      )
    ),
  ADD CONSTRAINT "solicitacoes_reembolso_rejeicao_parecer_check"
    CHECK (
      "status" <> 'REJEITADO'
      OR length(btrim(COALESCE("parecer", ''))) > 0
    );
