import type { ButtonHTMLAttributes, ReactNode } from "react";

// 1. Tipagem das variantes e tamanhos possíveis
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "gold"
  | "outline"
  | "ghost";

export type ButtonSize = "sm" | "md" | "lg";

// Props do componente: herda tudo que um <button> normal aceita (onClick, disabled, etc.)
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: ReactNode;
}

// 3. Mapas de classes do Tailwind para cada combinação
const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary text-white hover:bg-primary-dark shadow-sm border border-transparent",
  secondary: "bg-surface-subtle text-dark border border-border hover:bg-border/60 shadow-xs",
  gold: "bg-gold text-dark font-semibold hover:bg-gold-hover shadow-sm border border-transparent",
  outline: "bg-transparent text-primary border border-primary hover:bg-primary-light/50",
  ghost: "bg-transparent text-dark hover:bg-surface-subtle border border-transparent",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-xs rounded-md gap-1.5",
  md: "px-4 py-2 text-sm rounded-lg gap-2",
  lg: "px-6 py-3 text-base rounded-xl gap-2.5",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  children,
  ...rest
}: ButtonProps) {
  // Classes estruturais que TODO botão deve ter (flex, alinhamento, transição, disabled)
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer focus:outline-hidden focus:ring-2 focus:ring-primary/40 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98]";

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}
