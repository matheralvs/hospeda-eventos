"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";

import { Header } from "@/components/layouts/Header";
import { Sidebar } from "@/components/layouts/Sidebar";

export interface DashboardLayoutProps {
  children: ReactNode;
}
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathName = usePathname();

  if (pathName === "/events/new") {
    return <div>{children}</div>;
  }

  return (
    <>
      <Header />

      <div className="grid min-h-screen grid-cols-layout">
        <Sidebar />
        {children}
      </div>
    </>
  );
}
