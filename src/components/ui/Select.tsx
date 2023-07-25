import { SelectHTMLAttributes, forwardRef } from "react";

import { cn } from "@/lib";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, placeholder, ...props }, ref) => {
    return (
      <select
        className={cn(
          "group w-full rounded-xl border border-interactive-secondary text-black placeholder:text-content-base/40 hover:bg-interactive-secondary/0 focus-visible:border-interactive-primary focus-visible:bg-interactive-secondary/0 focus-visible:ring-interactive-primary",
          className,
        )}
        ref={ref}
        {...props}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {children}
      </select>
    );
  },
);

Select.displayName = "Select";
