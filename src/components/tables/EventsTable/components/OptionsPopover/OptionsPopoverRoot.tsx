import { ReactNode } from "react";

import * as Popover from "@radix-ui/react-popover";

interface OptionsPopoverRootProps {
  children: ReactNode;
}

export function OptionsPopoverRoot({ children }: OptionsPopoverRootProps) {
  return (
    <Popover.Portal>
      <Popover.Content
        side="bottom"
        align="end"
        className="flex w-28 flex-col gap-1 rounded-lg border border-layout-body bg-layout-spotlight p-1 shadow-md"
      >
        {children}
      </Popover.Content>
    </Popover.Portal>
  );
}
