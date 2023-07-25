"use client";

import { ReactNode } from "react";

import { EventContextProvider } from "@/contexts";

interface RootLayoutProviderProps {
  children: ReactNode;
}

export function RootLayoutProvider({ children }: RootLayoutProviderProps) {
  return <EventContextProvider>{children}</EventContextProvider>;
}
