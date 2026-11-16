export default function Header() {
    return (
        <header className="h-16 border-b border-border bg-surface/90 backdrop-blur-md px-6 flex items-center justify-between shrink-0 shadow-2xs">
        <div className="flex items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary-light border border-primary/20 px-2.5 py-0.5 rounded-full">
            Ambiente de Desenvolvimento
            </span>
        </div>

        <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-muted">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Sistema Online
            </div>
        </div>
        </header>
    );
}
