import { InputHTMLAttributes, forwardRef } from "react";

import { cn } from "@/lib";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        type="text"
        className={cn(
          "w-full rounded-xl border border-interactive-secondary text-black placeholder:text-content-base/40 hover:bg-interactive-secondary/0 focus-visible:border-interactive-primary focus-visible:bg-interactive-secondary/0 focus-visible:ring-interactive-primary",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = "Input";
