import { useCallback, useEffect } from "react";

import { useFormContext } from "react-hook-form";

import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";

import { addressService } from "@/services/addressService";
import { AddressInput } from "@/services/dtos/AddressServiceDTO";

import { zipCodeMask } from "@/helpers";

import { brazilStates } from "@/utils";

import { EventFormData } from "../EventForm";

export function EventPlaceForm() {
  const {
    setValue,
    watch,
    control,
    formState: { isDirty },
  } = useFormContext<EventFormData>();

  const zipCodeValue = watch("address.zipCode");

  const handleSetAddressData = useCallback(
    (data: AddressInput) => {
      const { gia, logradouro, complemento, bairro, localidade, uf } = data;

      setValue("address.number", gia);
      setValue("address.street", logradouro);
      setValue("address.complement", complemento);
      setValue("address.neighborhood", bairro);
      setValue("address.city", localidade);
      setValue("address.state", uf);
    },
    [setValue],
  );

  const handleFetchAddress = useCallback(
    async (zipCode: string) => {
      const zipCodeData = await addressService.list(zipCode);

      handleSetAddressData(zipCodeData);
    },
    [handleSetAddressData],
  );

  useEffect(() => {
    setValue("address.zipCode", zipCodeMask(zipCodeValue));

    if (zipCodeValue?.length !== 9) return;

    handleFetchAddress(zipCodeValue);
  }, [handleFetchAddress, isDirty, setValue, zipCodeValue]);

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
