import { ButtonHTMLAttributes, ElementType } from "react";

import clsx from "clsx";

interface OptionsPopoverActionsProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ElementType;
  label: string;
  variant?: "edit" | "delete";
}

export function OptionsPopoverActions({
  icon: Icon,
  variant = "edit",
  label = "",
  ...props
}: OptionsPopoverActionsProps) {
  return (
    <button
      className={clsx(
        "flex items-center justify-center gap-2 rounded-md py-2 text-xs  transition-colors",
        {
          "text-content-base hover:bg-content-base/10": variant === "edit",
          "text-red-500 hover:bg-red-500/10": variant === "delete",
        },
      )}
      {...props}
    >
      <Icon className="h-4 w-4" />
      {label}
    </button>
  );
}
