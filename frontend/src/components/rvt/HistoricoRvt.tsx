import { History } from "lucide-react";
import type { EventoHistoricoRvt, TipoEventoRvt } from "../../types/rvt";
import { EVENTO_RVT_LABEL, descreverAlteracoes, formatarDataHora } from "../../utils/rvt";

const COR_EVENTO: Record<TipoEventoRvt, string> = {
  SUBMISSAO: "bg-blue-500",
  RETIFICACAO: "bg-amber-500",
  REENVIO: "bg-amber-500",
  HOMOLOGACAO: "bg-emerald-500",
  REJEICAO: "bg-red-500",
};

/**
 * Linha do tempo do apontamento (RF32 / RF35): submissões, retificações
 * e pareceres preservados para rastreabilidade.
 */
export default function HistoricoRvt({ historico }: { historico: EventoHistoricoRvt[] }) {
  if (historico.length === 0) return null;

  return (
    <details className="group text-xs">
      <summary className="cursor-pointer select-none text-muted font-semibold flex items-center gap-1.5 hover:text-dark list-none">
        <History className="w-3.5 h-3.5" />
        Histórico ({historico.length})
        <span className="text-[10px] group-open:rotate-90 transition-transform">▸</span>
      </summary>
      <ol className="mt-2.5 ml-1.5 border-l border-border space-y-3">
        {historico.map((evento) => (
          <li key={evento.id} className="relative pl-4">
            <span
              className={`absolute -left-[4.5px] top-1 w-2 h-2 rounded-full ${COR_EVENTO[evento.tipo]}`}
              aria-hidden="true"
            />
            <p className="font-semibold text-dark">{EVENTO_RVT_LABEL[evento.tipo]}</p>
            <p className="text-[11px] text-muted">{formatarDataHora(evento.createdAt)}</p>
            {evento.parecer && (
              <p className="mt-1 text-dark/80 whitespace-pre-line">“{evento.parecer}”</p>
            )}
            {descreverAlteracoes(evento.alteracoes).map((linha) => (
              <p key={linha} className="mt-0.5 text-dark/70 break-words">
                {linha}
              </p>
            ))}
          </li>
        ))}
      </ol>
    </details>
  );
}
