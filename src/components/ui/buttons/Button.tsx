import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="w-56 rounded-[2rem] bg-interactive-primary px-2 py-3 text-white transition-opacity hover:opacity-90"
      {...props}
    >
      {children}
    </button>
  );
}
