import { Metadata } from "next";

import { EventForm } from "@/components/forms/EventForm/EventForm";
import { EventHeader } from "@/components/pages/events/EventHeader";

import { eventService } from "@/services/eventService";

export const metadata: Metadata = {
  title: "Editar Evento",
};

interface EventEditProps {
  params: {
    id: string;
  };
}

export default async function EventEdit({ params: { id } }: EventEditProps) {
  const eventResponseData = await eventService.showEvent(id);

  return (
    <main className="flex h-full flex-col items-center gap-6 bg-layout-body">
      <div className="mt-24 flex w-full max-w-[1199px] flex-col gap-6 px-6 lg:px-0">
        <EventHeader text="Editar evento" />

        <div className="h-max w-full rounded-tl-2xl rounded-tr-2xl border bg-white p-12 shadow-sm">
          <EventForm id={id} defaultAsyncValues={eventResponseData} />
        </div>
      </div>
    </main>
  );
}
