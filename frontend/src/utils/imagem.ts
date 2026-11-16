/**
 * Reduz fotos tiradas no celular antes do upload: câmeras atuais geram
 * arquivos de 3–8 MB, acima do limite de 5 MB e lentos em rede móvel.
 * PDFs e imagens já pequenas são devolvidos sem alteração.
 */
const LIMIAR_COMPRESSAO_BYTES = 1.5 * 1024 * 1024;
const DIMENSAO_MAXIMA = 1920;
const QUALIDADE_JPEG = 0.82;

export async function comprimirImagem(arquivo: File): Promise<File> {
  if (!arquivo.type.startsWith("image/") || arquivo.size <= LIMIAR_COMPRESSAO_BYTES) {
    return arquivo;
  }

  try {
    // createImageBitmap respeita a orientação EXIF por padrão
    const bitmap = await createImageBitmap(arquivo);
    const escala = Math.min(1, DIMENSAO_MAXIMA / Math.max(bitmap.width, bitmap.height));
    const largura = Math.round(bitmap.width * escala);
    const altura = Math.round(bitmap.height * escala);

    const canvas = document.createElement("canvas");
    canvas.width = largura;
    canvas.height = altura;
    const ctx = canvas.getContext("2d");
    if (!ctx) return arquivo;
    ctx.drawImage(bitmap, 0, 0, largura, altura);
    bitmap.close();

    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, "image/jpeg", QUALIDADE_JPEG)
    );
    if (!blob || blob.size >= arquivo.size) return arquivo;

    const nome = arquivo.name.replace(/\.[^.]+$/, "") + ".jpg";
    return new File([blob], nome, { type: "image/jpeg", lastModified: arquivo.lastModified });
  } catch {
    // Formato não decodificável pelo navegador: segue o original para validação
    return arquivo;
  }
}
