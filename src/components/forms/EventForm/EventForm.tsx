"use client";

import { useRouter } from "next/navigation";

import { useEvent } from "@/contexts/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/buttons/Button";
import { Divider } from "@/components/ui/Divider";
import { Form } from "@/components/ui/form";

import { useToast } from "@/hooks/useToast";

import { EventFormSchema } from "@/validations";

import { DateAndTimeForm } from "./components/DateAndTimeForm";
import { EventInformationForm } from "./components/EventInformationForm";
import { EventPlaceForm } from "./components/EventPlaceForm";

export type EventFormData = z.infer<typeof EventFormSchema>;

interface EventFormProps {
  id?: string;
  defaultAsyncValues?: EventFormData;
}

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

export function EventForm({ id, defaultAsyncValues }: EventFormProps) {
  const { createEventWithAddress, updateEvent } = useEvent();

  const form = useForm<EventFormData>({
    resolver: zodResolver(EventFormSchema),
    defaultValues: defaultValues,
    values: defaultAsyncValues,
  });

  const router = useRouter();

  const { toast } = useToast();

  async function onSubmit(data: EventFormData) {
    if (id) {
      try {
        await updateEvent(id, data);

        toast.success("Evento atualizado com sucesso!");
      } catch (error) {
        toast.error("Ocorreu um erro ao atualizar o evento!");
      }
    }

    try {
      await createEventWithAddress(data);

      toast.success("Evento criado com sucesso!");

      router.push("/events");

      form.reset();
    } catch (error) {
      if (error instanceof Error) {
        return error.message;
      }
      toast.error("Ocorreu um erro ao criar o evento!");
      throw error;
    }
  }

  return (
    <Form.Root {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <EventInformationForm />

        <Divider className="h-[2px]" />

        <EventPlaceForm />

        <Divider className="h-[2px]" />

        <DateAndTimeForm />

        <div className="flex justify-end">
          <Button type="submit">{id ? "Salvar" : "Cadastrar"}</Button>
        </div>
      </form>
    </Form.Root>
  );
}
