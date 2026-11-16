import { useContext } from "react";
import { ToastContext } from "./ToastContext";
import type { ToastContextData } from "./ToastContext";

export function useToast(): ToastContextData {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast deve ser usado dentro de um ToastProvider");
  }
  return context;
}
