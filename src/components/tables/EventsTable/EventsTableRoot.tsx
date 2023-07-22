import { ReactNode } from "react";

interface EventsTableRootProps {
  children: ReactNode;
}

export function EventsTableRoot({ children }: EventsTableRootProps) {
  return (
    <table className="table-auto border-separate border-spacing-0 rounded-lg border border-layout-body text-left shadow-sm">
      {children}
    </table>
  );
}
