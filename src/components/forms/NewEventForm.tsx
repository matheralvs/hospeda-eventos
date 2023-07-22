"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as RadioGroup from "@radix-ui/react-radio-group";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { NewEventFormSchema } from "@/validations";

import { Button } from "../ui/buttons/Button";
import { Divider } from "../ui/Divider";
import { Form } from "../ui/form";
import { Input } from "../ui/Input";

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

export function NewEventForm() {
  const form = useForm<NewEventFormData>({
    resolver: zodResolver(NewEventFormSchema),
    defaultValues,
  });

  function onSubmit(data: NewEventFormData) {
    console.log(data);
  }

  return (
    <Form.Root {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-5">
          <h3 className="text-2xl font-bold text-content-base">
            Informações do evento
          </h3>

          <Form.Field
            control={form.control}
            name="event_name"
            render={({ field }) => (
              <Form.Item>
                <Form.Label>Nome do evento</Form.Label>
                <Form.Control>
                  <Input placeholder="Nome do evento" {...field} />
                </Form.Control>
                <Form.Message />
              </Form.Item>
            )}
          />

          <Form.Field
            control={form.control}
            name="privacy"
            render={({ field }) => (
              <Form.Item>
                <Form.Label>Privacidade do evento</Form.Label>
                <Form.Control>
                  <RadioGroup.Root
                    defaultValue="public"
                    value={field.value}
                    onValueChange={field.onChange}
                    orientation="horizontal"
                    className="flex w-max gap-2 rounded-3xl bg-layout-body p-1"
                  >
                    <RadioGroup.Item
                      value="public"
                      className="rounded-3xl px-6 py-2 text-xs text-[#6E7073] data-[state=checked]:bg-primary-pure data-[state=checked]:text-white data-[state=checked]:shadow-md"
                    >
                      Público
                    </RadioGroup.Item>

                    <RadioGroup.Item
                      value="private"
                      className="rounded-3xl px-6 py-2 text-xs text-[#6E7073] data-[state=checked]:bg-primary-pure data-[state=checked]:text-white data-[state=checked]:shadow-md"
                    >
                      Privado
                    </RadioGroup.Item>
                  </RadioGroup.Root>
                </Form.Control>
                <Form.Message />
              </Form.Item>
            )}
          />

          <Form.Field
            control={form.control}
            name="description"
            render={({ field }) => (
              <Form.Item>
                <Form.Label>Descrição</Form.Label>
                <Form.Control>
                  <textarea
                    rows={5}
                    placeholder="Adicione uma descrição"
                    className="form-textarea w-full resize-none rounded-xl border-interactive-secondary placeholder:text-content-base/40"
                    {...field}
                  />
                </Form.Control>
                <Form.Message />
              </Form.Item>
            )}
          />
        </div>

        <Divider className="h-[2px]" />

        <div className="space-y-5">
          <h3 className="text-2xl font-bold text-content-base">
            Local do evento
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <Form.Field
              control={form.control}
              name="zip_code"
              render={({ field }) => (
                <Form.Item>
                  <Form.Label>CEP</Form.Label>
                  <Form.Control>
                    <Input placeholder="CEP" {...field} />
                  </Form.Control>
                  <Form.Message />
                </Form.Item>
              )}
            />

            <Form.Field
              control={form.control}
              name="number"
              render={({ field }) => (
                <Form.Item>
                  <Form.Label>Número</Form.Label>
                  <Form.Control>
                    <Input placeholder="Número" {...field} />
                  </Form.Control>
                  <Form.Message />
                </Form.Item>
              )}
            />

            <Form.Field
              control={form.control}
              name="address"
              render={({ field }) => (
                <Form.Item className="col-span-2">
                  <Form.Label>Endereço</Form.Label>
                  <Form.Control>
                    <Input placeholder="Endereço" {...field} />
                  </Form.Control>
                  <Form.Message />
                </Form.Item>
              )}
            />

            <Form.Field
              control={form.control}
              name="complement"
              render={({ field }) => (
                <Form.Item>
                  <Form.Label>Complemento</Form.Label>
                  <Form.Control>
                    <Input placeholder="Complemento" {...field} />
                  </Form.Control>
                  <Form.Message />
                </Form.Item>
              )}
            />

            <Form.Field
              control={form.control}
              name="neighborhood"
              render={({ field }) => (
                <Form.Item>
                  <Form.Label>Bairro</Form.Label>
                  <Form.Control>
                    <Input placeholder="Bairro" {...field} />
                  </Form.Control>
                  <Form.Message />
                </Form.Item>
              )}
            />

            <Form.Field
              control={form.control}
              name="city"
              render={({ field }) => (
                <Form.Item>
                  <Form.Label>Cidade</Form.Label>
                  <Form.Control>
                    <Input placeholder="Cidade" {...field} />
                  </Form.Control>
                  <Form.Message />
                </Form.Item>
              )}
            />

            <Form.Field
              control={form.control}
              name="state"
              render={({ field }) => (
                <Form.Item>
                  <Form.Label>Estado</Form.Label>
                  <Form.Control>
                    <Input placeholder="Bairro" {...field} />
                  </Form.Control>
                  <Form.Message />
                </Form.Item>
              )}
            />
          </div>
        </div>

        <Divider className="h-[2px]" />

        <div className="space-y-5">
          <h3 className="text-2xl font-bold text-content-base">
            Data e horário
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <Form.Field
              control={form.control}
              name="date"
              render={({ field }) => (
                <Form.Item>
                  <Form.Label>Data</Form.Label>
                  <Form.Control>
                    <Input type="date" {...field} />
                  </Form.Control>
                  <Form.Message />
                </Form.Item>
              )}
            />

            <Form.Field
              control={form.control}
              name="time"
              render={({ field }) => (
                <Form.Item>
                  <Form.Label>Horário</Form.Label>
                  <Form.Control>
                    <Input type="time" {...field} />
                  </Form.Control>
                  <Form.Message />
                </Form.Item>
              )}
            />
          </div>
        </div>

        <div className="flex justify-end">
          <Button type="submit">Cadastrar</Button>
        </div>
      </form>
    </Form.Root>
  );
}
