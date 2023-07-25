import { useCallback, useEffect } from "react";

import { useFormContext } from "react-hook-form";

import { EventFormData } from "@/components/forms/EventForm/EventForm";

import { addressService } from "@/services/addressService";
import { AddressInput } from "@/services/dtos/AddressServiceDTO";

import { zipCodeMask } from "@/helpers/formatZipCode";

export function useEventPlaceForm() {
  const { setValue, watch, control } = useFormContext<EventFormData>();

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

    if (zipCodeValue.length !== 9) return;

    handleFetchAddress(zipCodeValue);
  }, [handleFetchAddress, setValue, zipCodeValue]);

  return { control };
}
