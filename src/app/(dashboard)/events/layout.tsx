import { Metadata } from "next";
import { ReactNode } from "react";

import { EventsLayoutProvider } from "@/providers";

export const metadata: Metadata = {
  title: "Meus Eventos",
};

interface EventsLayoutProps {
  children: ReactNode;
}
export default function EventsLayout({ children }: EventsLayoutProps) {
  return <EventsLayoutProvider>{children}</EventsLayoutProvider>;
}
