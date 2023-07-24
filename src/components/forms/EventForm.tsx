"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { NewEventFormSchema } from "@/validations";

import { Button } from "../ui/buttons/Button";
import { Divider } from "../ui/Divider";
import { Form } from "../ui/form";
import { DateAndTimeForm } from "./NewEventForm/components/DateAndTimeForm";
import { EventInformationForm } from "./NewEventForm/components/EventInformationForm";
import { EventsPlaceForm } from "./NewEventForm/components/EventsPlaceForm";

type NewEventFormData = z.infer<typeof NewEventFormSchema>;

const defaultValues: NewEventFormData = {
  event_name: "",
  privacy: "public",
  description: "",
  zip_code: "",
  number: "",
  address: "",
  complement: "",
  neighborhood: "",
  city: "",
  state: "",
  date: "",
  time: "",
};

interface EventFormProps {
  id?: string;
}

export function EventForm({ id }: EventFormProps) {
  const form = useForm<NewEventFormData>({
    resolver: zodResolver(NewEventFormSchema),
    defaultValues: id ? defaultValues : {},
  });

  function onSubmit(data: NewEventFormData) {
    console.log(data);
  }

  return (
    <Form.Root {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <EventInformationForm />

        <Divider className="h-[2px]" />

        <EventsPlaceForm />

        <Divider className="h-[2px]" />

        <DateAndTimeForm />

        <div className="flex justify-end">
          <Button type="submit">{id ? "Salvar" : "Cadastrar"}</Button>
        </div>
      </form>
    </Form.Root>
  );
}
