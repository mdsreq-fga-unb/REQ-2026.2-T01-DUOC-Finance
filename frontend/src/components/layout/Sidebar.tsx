import { NavLink, useNavigate } from 'react-router-dom'
import type { NavItem } from '../../types/navigation'
import Button from '../ui/Button'
import { useAuth } from '../../auth/AuthContext'
import { PERMISSOES, possuiPapel, type Papel } from '../../auth/permissoes'

import {
  LayoutDashboard,
  Users,
  CircleDollarSign,
  LogOut,
  ClipboardPlus,
  History,
  ClipboardCheck,
  X,
  ReceiptText,
  ShieldCheck,
} from "lucide-react";

const menuItems: (NavItem & { papeis: readonly Papel[] })[] = [
  {
    iconName: LayoutDashboard,
    title: 'Visão Geral',
    path: '/',
    papeis: PERMISSOES.dashboard,
  },
  {
    iconName: Users,
    title: 'Colaboradores',
    path: '/colaboradores',
    papeis: PERMISSOES.colaboradores,
    badge: 'RF01',
  },
  {
    iconName: ClipboardPlus,
    title: "Novo Apontamento",
    path: "/rvt/novo",
    papeis: PERMISSOES.novoRvt,
    badge: "RF04",
  },
  {
    iconName: History,
    title: "Meus Apontamentos",
    path: "/rvt/historico",
    papeis: PERMISSOES.historicoRvt,
  },
  {
    iconName: ClipboardCheck,
    title: 'Aprovação de Diárias',
    path: '/diarias/aprovacao',
    papeis: PERMISSOES.aprovacaoDiarias,
  },
  {
    iconName: ClipboardCheck,
    title: "Homologar Apontamentos",
    path: "/rvt/homologacao",
    papeis: PERMISSOES.homologacaoRvt,
    badge: 'RF32',
  },
  {
    iconName: ReceiptText,
    title: 'Reembolsos',
    path: '/reembolsos',
    papeis: PERMISSOES.reembolsos,
  },
  {
    iconName: CircleDollarSign,
    title: 'Fechamento',
    path: '/fechamento',
    papeis: PERMISSOES.fechamento,
  },
  {
    iconName: ShieldCheck,
    title: 'Gestão de Acessos',
    path: '/acessos',
    papeis: PERMISSOES.gestaoAcessos,
  },
]

interface SidebarProps {
  /** Estado da gaveta em telas menores que md */
  aberta: boolean;
  onFechar: () => void;
}

export default function Sidebar({ aberta, onFechar }: SidebarProps) {
  const navigate = useNavigate();
  const { usuario, logout } = useAuth();
  const menuPermitido = menuItems.filter((item) => possuiPapel(usuario?.papel, item.papeis));

  const handleLogout = async () => {
    onFechar();
    await logout();
    navigate('/login', { replace: true });
  }

  return (
    <>
    {/* Fundo escurecido da gaveta (somente mobile) */}
    <div
      className={`fixed inset-0 z-30 bg-dark/40 md:hidden transition-opacity ${
        aberta ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={onFechar}
      aria-hidden="true"
    />

    <aside
      className={`fixed inset-y-0 left-0 z-40 w-64 h-dvh bg-surface border-r border-border flex flex-col shrink-0 shadow-2xs transition-transform duration-200 md:static md:translate-x-0 ${
        aberta ? "translate-x-0 shadow-lg" : "-translate-x-full"
      }`}
    >
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
        <button
          type="button"
          onClick={onFechar}
          className="md:hidden ml-auto w-9 h-9 rounded-lg flex items-center justify-center text-muted hover:text-primary hover:bg-surface-subtle cursor-pointer"
          aria-label="Fechar menu"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* 2. Menu de Navegação */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        <p className="px-3 text-xs font-semibold text-muted uppercase tracking-wider mb-3">
          Menu Principal
        </p>

        {menuPermitido.map(({ title, path, badge, iconName: Icon }) => (
          <NavLink
            key={path}
            to={path}
            onClick={onFechar}
            className={({ isActive }) =>
              `flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? 'bg-primary-light text-primary border border-primary/30 font-semibold shadow-2xs'
                  : 'text-dark/80 hover:text-primary hover:bg-primary-light/50'
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
          {usuario?.email?.slice(0, 2).toUpperCase() ?? 'DU'}
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-dark truncate">
            {usuario?.email}
          </p>
          <p className="text-xs text-muted truncate">{usuario?.papel.replaceAll('_', ' ')}</p>
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="p-2 text-muted hover:text-primary hover:bg-primary-light/60"
          title="Sair do sistema"
          onClick={handleLogout}
        >
          <LogOut className="w-4 h-4" />
        </Button>
      </div>
    </aside>
    </>
  );
}
