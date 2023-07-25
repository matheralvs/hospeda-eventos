import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";

import { useEventPlaceForm } from "@/hooks/useEventPlaceForm";

import { brazilStates } from "@/utils";

export function EventPlaceForm() {
  const { control } = useEventPlaceForm();

  return (
    <div className="space-y-5">
      <h3 className="text-2xl font-bold text-content-base">Local do evento</h3>

      <div className="grid grid-cols-2 gap-4">
        <Form.Field
          control={control}
          name="address.zipCode"
          render={({ field }) => (
            <Form.Item>
              <Form.Label>CEP</Form.Label>
              <Form.Control>
                <Input placeholder="CEP" maxLength={9} {...field} />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          control={control}
          name="address.number"
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
          control={control}
          name="address.street"
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
          control={control}
          name="address.complement"
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
          control={control}
          name="address.neighborhood"
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
          control={control}
          name="address.city"
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
          control={control}
          name="address.state"
          render={({ field }) => (
            <Form.Item>
              <Form.Label>Estado</Form.Label>
              <Form.Control>
                <Select placeholder="Estado" {...field}>
                  {brazilStates.map((state) => {
                    return (
                      <option key={state.value} value={state.value}>
                        {state.label}
                      </option>
                    );
                  })}
                </Select>
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
      </div>
    </div>
  );
}
