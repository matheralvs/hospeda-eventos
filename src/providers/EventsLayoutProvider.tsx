"use client";

import { ReactNode, useEffect } from "react";

import { useEvent } from "@/contexts/hooks";

interface EventsLayoutProviderProps {
  children: ReactNode;
}

export function EventsLayoutProvider({ children }: EventsLayoutProviderProps) {
  const { listEvents } = useEvent();

  useEffect(() => {
    listEvents();
  }, [listEvents]);

  return <>{children}</>;
}
