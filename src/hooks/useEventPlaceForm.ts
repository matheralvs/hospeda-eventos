import { useCallback, useEffect } from "react";

import { zipCodeMask } from "@/helpers/formatZipCode";
import { addressService } from "@/services/addressService";
import { AddressInput } from "@/services/dtos/AddressServiceDTO";
import { useFormContext } from "react-hook-form";

import { EventFormData } from "@/components/forms/EventForm/EventForm";

export function useEventPlaceForm() {
  const { setValue, watch, control } = useFormContext<EventFormData>();

  const zipCodeValue = watch("zip_code");

  const handleSetAddressData = useCallback(
    (data: AddressInput) => {
      const { gia, logradouro, complemento, bairro, localidade, uf } = data;

      setValue("number", gia);
      setValue("address", logradouro);
      setValue("complement", complemento);
      setValue("neighborhood", bairro);
      setValue("city", localidade);
      setValue("state", uf);
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
    setValue("zip_code", zipCodeMask(zipCodeValue));

    if (zipCodeValue.length !== 9) return;

    handleFetchAddress(zipCodeValue);
  }, [handleFetchAddress, setValue, zipCodeValue]);

  return { control };
}
