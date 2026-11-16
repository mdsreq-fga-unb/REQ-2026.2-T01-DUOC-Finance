import { useState, useCallback } from "react";
import type { ReactNode } from "react";
import { CheckCircle2, AlertCircle, AlertTriangle, Info, X } from "lucide-react";
import { ToastContext } from "./ToastContext";
import type { ToastMessage } from "./ToastContext";

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = useCallback(
    ({ type, title, message, duration = 4000 }: Omit<ToastMessage, "id">) => {
      const id = Math.random().toString(36).substring(2, 9);
      const newToast: ToastMessage = { id, type, title, message, duration };

      setToasts((prev) => [...prev, newToast]);

      if (duration > 0) {
        setTimeout(() => {
          removeToast(id);
        }, duration);
      }
    },
    [removeToast]
  );

  const success = useCallback(
    (message: string, title?: string) => addToast({ type: "success", title, message }),
    [addToast]
  );

  const error = useCallback(
    (message: string, title?: string) => addToast({ type: "error", title, message }),
    [addToast]
  );

  const warning = useCallback(
    (message: string, title?: string) => addToast({ type: "warning", title, message }),
    [addToast]
  );

  const info = useCallback(
    (message: string, title?: string) => addToast({ type: "info", title, message }),
    [addToast]
  );

  return (
    <ToastContext.Provider
      value={{ addToast, success, error, warning, info, removeToast }}
    >
      {children}

      {/* Container de Toasts Flutuantes */}
      <div
        className="fixed top-4 right-4 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none"
        aria-live="polite"
      >
        {toasts.map((toast) => {
          const config = {
            success: {
              icon: CheckCircle2,
              border: "border-emerald-200",
              bg: "bg-emerald-50",
              text: "text-emerald-900",
              iconColor: "text-emerald-600",
            },
            error: {
              icon: AlertCircle,
              border: "border-primary/30",
              bg: "bg-primary-light",
              text: "text-primary-dark",
              iconColor: "text-primary",
            },
            warning: {
              icon: AlertTriangle,
              border: "border-amber-200",
              bg: "bg-amber-50",
              text: "text-amber-900",
              iconColor: "text-amber-600",
            },
            info: {
              icon: Info,
              border: "border-blue-200",
              bg: "bg-blue-50",
              text: "text-blue-900",
              iconColor: "text-blue-600",
            },
          }[toast.type];

          const IconComponent = config.icon;

          return (
            <div
              key={toast.id}
              className={`pointer-events-auto flex items-start gap-3 p-3.5 rounded-xl border shadow-lg transition-all animate-in slide-in-from-top-2 duration-200 ${config.bg} ${config.border}`}
            >
              <IconComponent className={`w-5 h-5 shrink-0 mt-0.5 ${config.iconColor}`} />
              <div className="flex-1 min-w-0">
                {toast.title && (
                  <h4 className={`text-xs font-bold uppercase tracking-wider ${config.text}`}>
                    {toast.title}
                  </h4>
                )}
                <p className={`text-xs font-medium mt-0.5 leading-relaxed ${config.text}`}>
                  {toast.message}
                </p>
              </div>
              <button
                type="button"
                onClick={() => removeToast(toast.id)}
                className={`p-1 rounded-md opacity-60 hover:opacity-100 transition-opacity ${config.text}`}
                aria-label="Fechar notificação"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}
