import { api } from "./api";
import {
  EventInput,
  EventWithAddressInput,
  EventWithAddressOutput,
} from "./dtos/EventServiceDTO";

class EventService {
  async listEvents() {
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

  async showEvent(id: string) {
    const { data: eventResponseData } = await api.get(`/event/show/${id}`);

    return eventResponseData;
  }

  async updateEvent(id: string, eventData: EventWithAddressOutput) {
    await api.put(`/event/${id}`, eventData);
  }
}

export const eventService = new EventService();
