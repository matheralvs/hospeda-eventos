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
  privacy: "public" | "private";
  description: string;
  address: Address;
  initialDate: Date;
  initialTime: string;
}

export interface EventWithAddressOutput
  extends Partial<EventWithAddressInput> {}

export interface Address {
  zipCode: string;
  number: string;
  street: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;
}
