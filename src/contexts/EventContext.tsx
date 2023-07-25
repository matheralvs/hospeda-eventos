import { ReactNode, createContext, useCallback, useState } from "react";

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
  updateEvent: (
    eventId: string,
    eventData: EventWithAddressInput,
  ) => Promise<void>;
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
        if (error instanceof Error) {
          console.log(error.message);
        }
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  const listEvents = useCallback(async () => {
    try {
      setLoading(true);

      const eventsResponse = await eventService.listEvents();

      setEvents(eventsResponse);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const deleteEventById = useCallback(async (eventId: string) => {
    try {
      setLoading(true);

      await eventService.deleteEventById(eventId);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  const updateEvent = useCallback(
    async (eventId: string, eventData: EventWithAddressInput) => {
      try {
        setLoading(true);

        await eventService.updateEvent(eventId, eventData);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        }
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return (
    <EventContext.Provider
      value={{
        events,
        loading,
        createEventWithAddress,
        listEvents,
        updateEvent,
        deleteEventById,
      }}
    >
      {children}
    </EventContext.Provider>
  );
}
