import { NavLink } from "react-router-dom";
import type { NavItem } from "../../types/navigation";
import Button from "../ui/Button";

import {
  LayoutDashboard,
  Users,
  CircleDollarSign,
  LogOut,
} from "lucide-react";

const menuItems: NavItem[] = [
  {
    iconName: LayoutDashboard,
    title: "Visão Geral",
    path: "/",
  },
  {
    iconName: Users,
    title: "Colaboradores",
    path: "/colaboradores",
    badge: "RF01",
  },
  {
    iconName: CircleDollarSign,
    title: "Fechamento",
    path: "/fechamento",
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-surface border-r border-border flex flex-col shrink-0 shadow-2xs">
      {/* 1. Cabeçalho / Logotipo */}
      <div className="h-16 flex items-center px-6 border-b border-border gap-3">
        <div
          className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-bold text-white 
                    text-sm shadow-xs border border-gold/40"
        >
          D
        </div>
        <div>
          <h1 className="font-bold text-dark text-base tracking-wide">
            DUOC Finance
          </h1>
          <p className="text-xs text-muted">Engenharia e Gestão</p>
        </div>
      </div>

      {/* 2. Menu de Navegação */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <p className="px-3 text-xs font-semibold text-muted uppercase tracking-wider mb-3">
          Menu Principal
        </p>

        {menuItems.map(({ title, path, badge, iconName: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? "bg-primary-light text-primary border border-primary/30 font-semibold shadow-2xs"
                  : "text-dark/80 hover:text-primary hover:bg-primary-light/50"
              }`
            }
          >
            <div className="flex items-center gap-2.5">
              {Icon && <Icon className="w-4 h-4 shrink-0" />}
              <span>{title}</span>
            </div>

            {badge && (
              <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-surface-subtle text-muted border border-border">
                {badge}
              </span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* 3. Rodapé do Usuário */}
      <div className="p-4 border-t border-border flex items-center gap-3 bg-surface-subtle/50">
        <div className="w-9 h-9 rounded-full bg-primary-light border border-primary/20 flex items-center justify-center text-sm font-bold text-primary">
          MB
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-dark truncate">
            Maria Beatryz
          </p>
          <p className="text-xs text-muted truncate">Auxiliar Administrativo</p>
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="p-2 text-muted hover:text-primary hover:bg-primary-light/60"
          title="Sair do sistema"
        >
          <LogOut className="w-4 h-4" />
        </Button>
      </div>
    </aside>
  );
}
