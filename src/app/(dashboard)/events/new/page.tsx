import { Metadata } from "next";

import { EventForm } from "@/components/forms/EventForm/EventForm";
import { EventHeader } from "@/components/pages/events/EventHeader";

export const metadata: Metadata = {
  title: "Novo Evento",
};

export default function NewEvent() {
  return (
    <main className="flex h-full flex-col items-center gap-6 bg-layout-body">
      <div className="mt-24 flex w-full max-w-[1199px] flex-col gap-6 px-6 lg:px-0">
        <EventHeader text="Criar evento" />

        <div className="h-max w-full rounded-tl-2xl rounded-tr-2xl border bg-white p-12 shadow-sm">
          <EventForm />
        </div>
      </div>
    </main>
  );
}
