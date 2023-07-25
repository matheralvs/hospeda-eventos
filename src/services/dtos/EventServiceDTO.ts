export interface EventInput {
  id: string;
  name: string;
  privacy: "public" | "private";
  city: string;
  state: string;
  initialDate: string;
  initialTime: string;
}

export interface EventWithAddressInput {
  name: string;
  privacy: string;
  description: string;
  address: Address;
  initialDate: string;
  initialTime: string;
}

export interface Address {
  zipCode: string;
  number: string;
  street: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
}
