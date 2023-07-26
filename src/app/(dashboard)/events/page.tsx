import { HeaderWithActions } from "@/components/HeadingWithActions";
import { EventsTableList } from "@/components/tables/EventsTable/EventsTableList";

export default function Events() {
  return (
    <main className="flex flex-col gap-6 px-20 pt-8">
      <HeaderWithActions />

      <EventsTableList />
    </main>
  );
}
