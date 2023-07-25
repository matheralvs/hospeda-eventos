import { ReactNode, createContext, useCallback, useState } from "react";

import {
  EventInput,
  EventWithAddressInput,
} from "@/services/dtos/EventServiceDTO";
import { eventService } from "@/services/eventService";

interface EventContextValue {
  events: EventInput[] | null;
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

  const createEventWithAddress = useCallback(
    async (eventData: EventWithAddressInput) => {
      try {
        await eventService.createWithAddress(eventData);
      } catch (error) {
        if (error instanceof Error) {
          console.log(error);
        }
      }
    },
    [],
  );

  const listEvents = useCallback(async () => {
    try {
      const eventsResponse = await eventService.listEvents();

      setEvents(eventsResponse);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const deleteEventById = useCallback(async (eventId: string) => {
    try {
      await eventService.deleteEventById(eventId);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const updateEvent = useCallback(
    async (eventId: string, eventData: EventWithAddressInput) => {
      try {
        await eventService.updateEvent(eventId, eventData);
      } catch (error) {
        console.log(error);
      }
    },
    [],
  );

  return (
    <EventContext.Provider
      value={{
        events,
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
