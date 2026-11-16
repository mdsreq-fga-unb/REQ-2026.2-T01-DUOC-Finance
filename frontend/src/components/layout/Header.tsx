import { Menu } from "lucide-react";

interface HeaderProps {
    onAbrirMenu: () => void;
}

export default function Header({ onAbrirMenu }: HeaderProps) {
    return (
        <header className="h-16 border-b border-border bg-surface/90 backdrop-blur-md px-4 sm:px-6 flex items-center justify-between shrink-0 shadow-2xs">
        <div className="flex items-center gap-2 min-w-0">
            <button
            type="button"
            onClick={onAbrirMenu}
            className="md:hidden w-10 h-10 -ml-1 rounded-lg flex items-center justify-center text-dark hover:bg-surface-subtle cursor-pointer"
            aria-label="Abrir menu"
            >
            <Menu className="w-5 h-5" />
            </button>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary-light border border-primary/20 px-2.5 py-0.5 rounded-full truncate">
            <span className="sm:hidden">Dev</span>
            <span className="hidden sm:inline">Ambiente de Desenvolvimento</span>
            </span>
        </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-xs text-muted">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Sistema Online
        </div>
      </div>
    </header>
  )
}
