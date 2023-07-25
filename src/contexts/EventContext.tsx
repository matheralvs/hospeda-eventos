import {
  ReactNode,
  createContext,
  startTransition,
  useCallback,
  useState,
} from "react";

import { EventInput } from "@/services/dtos/EventServiceDTO";
import { eventService } from "@/services/eventService";

interface EventContextValue {
  events: EventInput[] | null;
  loading: boolean;
  listEvents: () => Promise<void>;
  deleteEventById: (eventId: string) => Promise<void>;
}

export const EventContext = createContext({} as EventContextValue);

interface EventContextProviderProps {
  children: ReactNode;
}

export function EventContextProvider({ children }: EventContextProviderProps) {
  const [events, setEvents] = useState<EventInput[] | null>(null);
  const [loading, setLoading] = useState(false);

  const listEvents = useCallback(async () => {
    try {
      setLoading(true);

      const eventsResponse = await eventService.list();

      setEvents(eventsResponse);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteEventById = useCallback(async (eventId: string) => {
    try {
      setLoading(true);

      await eventService.deleteEventById(eventId);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <EventContext.Provider
      value={{ events, loading, listEvents, deleteEventById }}
    >
      {children}
    </EventContext.Provider>
  );
}
