import { HTMLAttributes, forwardRef } from "react";

import { cn } from "@/lib/utils";

interface DividerProps extends HTMLAttributes<HTMLDivElement> {}

export const Divider = forwardRef<HTMLDivElement, DividerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div className={cn("h-[1px] bg-layout-body", className)} ref={ref} />
    );
  },
);

Divider.displayName = "Divider";
