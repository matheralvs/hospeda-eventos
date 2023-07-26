"use client";

import { useEvent } from "@/contexts/hooks";

import { Empty } from "@/components/layouts/Empty";
import { Loading } from "@/components/Loading";

import { EventsTable } from ".";

interface EventsTableListProps {}

export function EventsTableList(props: EventsTableListProps) {
  const { events } = useEvent();

  return (
    <>
      {!events ? (
        <Loading />
      ) : events.length === 0 ? (
        <Empty />
      ) : (
        <EventsTable.Root>
          <EventsTable.Head />
          {events?.map((event) => (
            <EventsTable.Body key={event.id} event={event} />
          ))}
        </EventsTable.Root>
      )}
    </>
  );
}
