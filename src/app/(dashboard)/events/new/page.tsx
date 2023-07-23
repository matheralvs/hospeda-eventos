import { Metadata } from "next";

import { NewEventForm } from "@/components/forms/NewEventForm";
import { NewEventHeader } from "@/components/pages/events/NewEventHeader";

export const metadata: Metadata = {
  title: "Novo Evento",
};

export default function NewEvent() {
  return (
    <main className="flex h-full flex-col items-center gap-6 bg-layout-body">
      <div className="mt-24 flex min-w-[1199px] flex-col gap-6">
        <NewEventHeader />

        <div className="h-max w-full rounded-tl-2xl rounded-tr-2xl border bg-white p-12 shadow-sm">
          <NewEventForm />
        </div>
      </div>
    </main>
  );
}
