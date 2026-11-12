import type { LucideIcon } from "lucide-react"

export interface NavItem {
    title: string; // nome identificador
    path: string; // url da rota
    iconName?: LucideIcon; //  componente de icon segundo lucideIcon
    badge?: string; //contador / aviso
}