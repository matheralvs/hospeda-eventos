import { ReactNode } from "react";

interface MainNavRootProps {
  children: ReactNode;
}

export function MainNavRoot({ children }: MainNavRootProps) {
  return <nav className="flex flex-col items-center gap-8">{children}</nav>;
}
