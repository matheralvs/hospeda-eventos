import { api } from "./api";
import { EventInput, EventWithAddressInput } from "./dtos/EventServiceDTO";

class EventService {
  async list() {
    const { data: eventResponseData } = await api.get<EventInput[]>(
      "/event/list",
    );

    return eventResponseData;
  }

  async createWithAddress(eventData: EventWithAddressInput) {
    await api.post("/event", eventData);
  }

  async deleteEventById(id: string) {
    await api.delete(`/event/${id}`);
  }
}

export const eventService = new EventService();
