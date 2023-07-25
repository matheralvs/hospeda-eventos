import { Metadata } from "next";

import { eventService } from "@/services/eventService";

import { HeaderWithActions } from "@/components/HeadingWithActions";
import { EventsTable } from "@/components/tables/EventsTable";

export const metadata: Metadata = {
  title: "Meus Eventos",
};

export default async function Events() {
  const events = await eventService.list();

  return (
    <main className="flex flex-col gap-6 px-20 pt-8">
      <HeaderWithActions />

      <EventsTable.Root>
        <EventsTable.Head />
        {events.map((event) => (
          <EventsTable.Body
            key={event.id}
            name={event.name}
            privacy={event.privacy}
            city={event.city}
            state={event.state}
            initialDate={event.initialDate}
          />
        ))}
      </EventsTable.Root>
    </main>
  );
}
