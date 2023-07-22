import { ElementType } from "react";

import clsx from "clsx";

interface OptionsPopoverActionsProps {
  icon: ElementType;
  label: string;
  type?: "edit" | "delete";
}

export function OptionsPopoverActions({
  icon: Icon,
  type = "edit",
  label = "",
}: OptionsPopoverActionsProps) {
  return (
    <button
      className={clsx(
        "flex items-center justify-center gap-2 rounded-md py-2 text-xs  transition-colors",
        {
          "text-content-base hover:bg-content-base/10": type === "edit",
          "text-red-500 hover:bg-red-500/10": type === "delete",
        },
      )}
    >
      <Icon className="h-4 w-4" />
      {label}
    </button>
  );
}
