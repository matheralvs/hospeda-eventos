import {
  ReactNode,
  createContext,
  startTransition,
  useCallback,
  useState,
} from "react";

import {
  EventInput,
  EventWithAddressInput,
} from "@/services/dtos/EventServiceDTO";
import { eventService } from "@/services/eventService";

interface EventContextValue {
  events: EventInput[] | null;
  loading: boolean;
  createEventWithAddress: (eventData: EventWithAddressInput) => Promise<void>;
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

  const createEventWithAddress = useCallback(
    async (eventData: EventWithAddressInput) => {
      try {
        setLoading(true);

        await eventService.createWithAddress(eventData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

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
      value={{
        events,
        loading,
        createEventWithAddress,
        listEvents,
        deleteEventById,
      }}
    >
      {children}
    </EventContext.Provider>
  );
}
