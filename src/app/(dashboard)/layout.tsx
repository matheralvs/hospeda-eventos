"use client";

import { useParams, usePathname } from "next/navigation";
import { ReactNode } from "react";

import { Header } from "@/components/layouts/Header";
import { Sidebar } from "@/components/layouts/Sidebar";

interface DashboardLayoutProps {
  children: ReactNode;
}
export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathName = usePathname();

  const { id } = useParams();

  if (pathName === "/events/new" || pathName === `/events/edit/${id}`) {
    return <>{children}</>;
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
