import axios from "axios";

import { AddressInput } from "./dtos/AddressServiceDTO";

class AddressService {
  async list(zipCode: string) {
    const { data } = await axios.get<AddressInput>(
      `https://viacep.com.br/ws/${zipCode}/json/`,
    );

    return data;
  }
}

export const addressService = new AddressService();
