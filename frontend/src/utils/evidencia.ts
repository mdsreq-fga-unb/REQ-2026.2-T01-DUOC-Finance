import { RvtService } from "../services/rvt.service";

/**
 * Abre um anexo do RVT em nova aba. O arquivo exige o token de acesso,
 * então é baixado como blob em vez de um link direto.
 * A aba é aberta antes do download para não ser bloqueada como pop-up.
 */
export async function abrirEvidenciaEmNovaAba(rvtId: string, evidenciaId: string): Promise<void> {
  const aba = window.open("", "_blank");
  try {
    const blob = await RvtService.baixarEvidencia(rvtId, evidenciaId);
    const url = URL.createObjectURL(blob);
    if (aba) aba.location.href = url;
    else window.location.assign(url);
    setTimeout(() => URL.revokeObjectURL(url), 60_000);
  } catch (err) {
    aba?.close();
    throw err;
  }
}
