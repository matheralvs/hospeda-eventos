"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/buttons/Button";
import { Divider } from "@/components/ui/Divider";
import { Form } from "@/components/ui/form";

import { EventFormSchema } from "@/validations";

import { DateAndTimeForm } from "./components/DateAndTimeForm";
import { EventInformationForm } from "./components/EventInformationForm";
import { EventPlaceForm } from "./components/EventPlaceForm";

export type EventFormData = z.infer<typeof EventFormSchema>;

const defaultValues: EventFormData = {
  name: "",
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
  const form = useForm<EventFormData>({
    resolver: zodResolver(EventFormSchema),
    defaultValues,
  });

  function onSubmit(data: EventFormData) {
    if (id) {
      console.log(data);
    }

    console.log(data);

    form.reset();
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
