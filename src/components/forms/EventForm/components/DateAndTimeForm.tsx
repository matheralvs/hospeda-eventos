import { useFormContext } from "react-hook-form";

import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/Input";

export interface DateAndTimeFormProps {}

export function DateAndTimeForm(props: DateAndTimeFormProps) {
  const { control } = useFormContext();

  return (
    <div className="space-y-5">
      <h3 className="text-2xl font-bold text-content-base">Data e horário</h3>

      <div className="grid grid-cols-2 gap-4">
        <Form.Field
          control={control}
          name="date"
          render={({ field }) => (
            <Form.Item>
              <Form.Label>Data de início</Form.Label>
              <Form.Control>
                <Input type="date" {...field} />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />

        <Form.Field
          control={control}
          name="time"
          render={({ field }) => (
            <Form.Item>
              <Form.Label>Horário de início</Form.Label>
              <Form.Control>
                <Input type="time" {...field} />
              </Form.Control>
              <Form.Message />
            </Form.Item>
          )}
        />
      </div>
    </div>
  );
}