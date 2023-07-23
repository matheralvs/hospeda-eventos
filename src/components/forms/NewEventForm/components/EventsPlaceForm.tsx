import { useFormContext } from "react-hook-form";

import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/Input";

export function EventsPlaceForm() {
  const form = useFormContext();

  return (
    <div className="space-y-5">
      <h3 className="text-2xl font-bold text-content-base">Local do evento</h3>

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
  );
}
