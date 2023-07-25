import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { EventFormData } from "@/components/forms/EventForm/EventForm";

import { eventService } from "@/services/eventService";

import { EventFormSchema } from "@/validations";

import { useToast } from "./useToast";

export const defaultValues: EventFormData = {
  name: "",
  privacy: "public",
  description: "",
  address: {
    zipCode: "",
    number: "",
    street: "",
    neighborhood: "",
    complement: "",
    city: "",
    state: "",
  },
  initialDate: new Date(),
  initialTime: "",
};

export function useEventForm() {
  const form = useForm<EventFormData>({
    resolver: zodResolver(EventFormSchema),
    defaultValues,
  });

  const router = useRouter();

  const { toast } = useToast();

  async function onSubmit(data: EventFormData) {
    const { initialDate, ...eventData } = data;

    let initialDateString = JSON.stringify(initialDate);
    initialDateString = JSON.parse(initialDateString);

    try {
      await eventService.createWithAddress({
        ...eventData,
        initialDate: initialDateString,
      });

      toast.success("Evento criado com sucesso!");

      router.push("/events");

      router.refresh();

      form.reset();
    } catch (error) {
      if (error instanceof Error) {
        return error.message;
      }
      toast.error("Ocorreu um erro ao criar o evento!");
      throw error;
    }
  }

  return {
    form,
    onSubmit,
  };
}
