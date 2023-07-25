import { api } from "./api";
import { EventInput } from "./dtos/EventServiceDTO";

class EventService {
  async list() {
    const { data: eventResponseData } = await api.get<EventInput[]>(
      "/event/list",
    );

    return eventResponseData;
  }

  async create(eventData: EventInput) {
    await api.post<EventInput>("/event", eventData);
  }
}

export const eventService = new EventService();
