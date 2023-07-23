import * as RadioGroup from "@radix-ui/react-radio-group";
import { useFormContext } from "react-hook-form";

import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/Input";

export function EventInformationForm() {
  const form = useFormContext();

  return (
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
  );
}
