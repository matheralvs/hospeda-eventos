import { Metadata } from "next";

import { HeaderWithActions } from "@/components/HeadingWithActions";
import { EventsTable } from "@/components/tables/EventsTable";

export const metadata: Metadata = {
  title: "Meus Eventos",
};

export default function Events() {
  return (
    <main className="flex flex-col gap-6 px-20 pt-8">
      <HeaderWithActions />

      <EventsTable.Root>
        <EventsTable.Head />
        <EventsTable.Body />
      </EventsTable.Root>
    </main>
  );
}
