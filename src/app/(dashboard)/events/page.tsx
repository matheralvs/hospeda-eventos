"use client";

import { Metadata } from "next";
import { useEffect } from "react";

import { useEvent } from "@/contexts/hooks";

import { HeaderWithActions } from "@/components/HeadingWithActions";
import { Empty } from "@/components/layouts/Empty";
import { Loading } from "@/components/Loading";
import { EventsTable } from "@/components/tables/EventsTable";

export const metadata: Metadata = {
  title: "Meus Eventos",
};

export default function Events() {
  const { events, loading, listEvents } = useEvent();

  useEffect(() => {
    listEvents();
  }, [listEvents]);

  return (
    <main className="flex flex-col gap-6 px-20 pt-8">
      <HeaderWithActions />

      {loading ? (
        <Loading />
      ) : !events || events.length === 0 ? (
        <Empty />
      ) : (
        <EventsTable.Root>
          <EventsTable.Head />
          {events?.map((event) => (
            <EventsTable.Body key={event.id} event={event} />
          ))}
        </EventsTable.Root>
      )}
    </main>
  );
}
