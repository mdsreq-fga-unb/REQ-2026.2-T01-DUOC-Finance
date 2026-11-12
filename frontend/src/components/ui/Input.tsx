import { forwardRef, useId } from "react";
import type { InputHTMLAttributes, ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: LucideIcon;
  rightElement?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon: LeftIcon,
      rightElement,
      id,
      className = "",
      disabled,
      ...rest
    },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    return (
      <div className="w-full space-y-1.5 text-left">
        {label && (
          <label
            htmlFor={inputId}
            className="block text-xs font-semibold text-dark tracking-wide"
          >
            {label}
          </label>
        )}

        <div className="relative flex items-center">
          {LeftIcon && (
            <div className="absolute left-3.5 flex items-center pointer-events-none text-muted">
              <LeftIcon className="w-4 h-4 shrink-0" />
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            aria-invalid={Boolean(error)}
            className={`w-full h-11 bg-surface text-dark text-sm rounded-lg border transition-all placeholder:text-muted/60 focus:outline-hidden focus:ring-2 disabled:bg-surface-subtle disabled:opacity-60 disabled:cursor-not-allowed ${
              LeftIcon ? "pl-10" : "pl-3.5"
            } ${rightElement ? "pr-10" : "pr-3.5"} ${
              error
                ? "border-primary focus:border-primary focus:ring-primary/20 text-primary"
                : "border-border hover:border-dark/30 focus:border-primary focus:ring-primary/20"
            } ${className}`}
            {...rest}
          />

          {rightElement && (
            <div className="absolute right-3 flex items-center">
              {rightElement}
            </div>
          )}
        </div>

        {error ? (
          <p className="text-xs text-primary font-medium">{error}</p>
        ) : helperText ? (
          <p className="text-xs text-muted">{helperText}</p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
