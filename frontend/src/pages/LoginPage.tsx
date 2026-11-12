import { useState } from "react";
import type { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Briefcase,
  Users,
  HardHat,
  ShieldCheck,
} from "lucide-react";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

export default function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setError("Por favor, preencha todos os campos.");
      return;
    }

    setError("");
    // Redireciona para o dashboard principal
    navigate("/");
  };

  const handleDemoAccess = (roleEmail: string) => {
    setEmail(roleEmail);
    setPassword("duoc2026");
    setError("");
  };

  return (
    <div className="min-h-screen w-screen grid grid-cols-1 lg:grid-cols-2 bg-surface">
      {/* 1. Coluna Esquerda: Hero Banner Institucional (apenas em telas grandes) */}
      <div className="hidden lg:flex relative flex-col justify-between p-12 overflow-hidden bg-dark">
        {/* Imagem de Fundo com Arquitetura e Filtro Gradiente */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 scale-105"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1541888946425-d0fbb186f5f7?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/65 to-dark/50" />

        {/* Topo do Banner */}
        <div className="relative z-10">
          <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-white/70">
            Arquitetura · Engenharia · Gestão
          </p>
        </div>

        {/* Rodapé do Banner */}
        <div className="relative z-10 max-w-lg space-y-4">
          <div className="w-12 h-1 bg-gold rounded-full" />
          <h2 className="text-3xl xl:text-4xl font-bold text-white leading-tight tracking-tight">
            Solidez em cada projeto.
            <br />
            Clareza em cada decisão.
          </h2>
          <p className="text-sm text-white/80 leading-relaxed font-light">
            O cuidado que transforma espaços também está presente na gestão do
            nosso negócio.
          </p>
        </div>
      </div>

      {/* 2. Coluna Direita: Formulário de Autenticação */}
      <div className="flex items-center justify-center p-6 sm:p-12 lg:p-16 bg-surface overflow-y-auto">
        <div className="w-full max-w-md space-y-8 py-6">
          {/* Cabeçalho do Formulário / Logotipo */}
          <div className="space-y-4">
            <div>
              <span className="text-3xl font-extrabold tracking-tight text-dark block">
                DUOC
              </span>
              <span className="text-xs font-semibold tracking-[0.35em] text-gold uppercase block -mt-1">
                finance
              </span>
            </div>

            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Bem-vindo à DUOC Finance
              </span>
              <h1 className="text-2xl font-bold text-dark mt-1">
                Uma gestão que conecta.
              </h1>
              <p className="text-sm text-muted mt-1 leading-relaxed">
                Acesse seu espaço de trabalho e acompanhe o que faz nossos
                projetos acontecerem.
              </p>
            </div>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="E-mail"
              type="email"
              placeholder="seu.nome@duoc.com.br"
              leftIcon={Mail}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Input
              label="Senha"
              type={showPassword ? "text" : "password"}
              placeholder="Digite sua senha"
              leftIcon={Lock}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              rightElement={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-muted hover:text-dark transition-colors cursor-pointer p-1"
                  aria-label={showPassword ? "Ocultar senha" : "Ver senha"}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              }
            />

            {error && (
              <p className="text-xs text-primary font-medium">{error}</p>
            )}

            {/* Lembrar de mim e Esqueci a senha */}
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer text-dark/80 select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded border-border text-primary focus:ring-primary/20 accent-primary"
                />
                <span>Lembrar de mim</span>
              </label>

              <button
                type="button"
                className="text-primary hover:text-primary-dark font-medium transition-colors cursor-pointer"
              >
                Esqueci minha senha
              </button>
            </div>

            {/* Botão de Submissão */}
            <Button
              type="submit"
              variant="primary"
              className="w-full h-11 text-sm font-semibold flex items-center justify-center gap-2 mt-2"
            >
              <span>Entrar</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </form>

          {/* Divisor de Acesso Rápido */}
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-[11px] uppercase tracking-wider text-muted font-semibold">
              <span className="bg-surface px-3">Acesso Demonstrativo</span>
            </div>
          </div>

          {/* Botões Rápidos para Demonstração */}
          <div className="grid grid-cols-3 gap-2.5">
            <button
              type="button"
              onClick={() => handleDemoAccess("gestor@duoc.com.br")}
              className="flex flex-col items-center justify-center p-3 rounded-lg border border-border bg-surface hover:bg-surface-subtle hover:border-dark/20 transition-all text-xs text-dark gap-1.5 cursor-pointer shadow-2xs"
            >
              <Briefcase className="w-4 h-4 text-primary" />
              <span className="font-medium">Gestor</span>
            </button>

            <button
              type="button"
              onClick={() => handleDemoAccess("rh@duoc.com.br")}
              className="flex flex-col items-center justify-center p-3 rounded-lg border border-border bg-surface hover:bg-surface-subtle hover:border-dark/20 transition-all text-xs text-dark gap-1.5 cursor-pointer shadow-2xs"
            >
              <Users className="w-4 h-4 text-primary" />
              <span className="font-medium">RH</span>
            </button>

            <button
              type="button"
              onClick={() => handleDemoAccess("tecnico@duoc.com.br")}
              className="flex flex-col items-center justify-center p-3 rounded-lg border border-border bg-surface hover:bg-surface-subtle hover:border-dark/20 transition-all text-xs text-dark gap-1.5 cursor-pointer shadow-2xs"
            >
              <HardHat className="w-4 h-4 text-primary" />
              <span className="font-medium">Técnico</span>
            </button>
          </div>

          {/* Rodapé / Nota informativa */}
          <div className="flex items-center justify-center gap-1.5 text-xs text-muted pt-2">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Ambiente de demonstração · Sem dados reais</span>
          </div>
        </div>
      </div>
    </div>
  );
}
