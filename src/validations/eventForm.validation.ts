import { z } from "zod";

export const EventFormSchema = z.object({
  name: z.string().min(1, "Nome do evento é um campo obrigatório."),
  privacy: z.enum(["public", "private"]),
  description: z.string(),

  zip_code: z.coerce
    .string()
    .min(1, "CEP é um campo obrigatório.")
    .max(9, "CEP deve ter no máximo 9 caracteres."),
  number: z.string().min(1, "Número é um campo obrigatório."),
  address: z.string().min(1, "Endereço é um campo obrigatório."),
  complement: z.string(),
  neighborhood: z.string().min(1, "Bairro é um campo obrigatório."),
  city: z.string().min(1, "Cidade é um campo obrigatório."),
  state: z.string().min(1, "Estado é um campo obrigatório."),

  date: z.string().min(1, "Data de início é um campo obrigatório."),
  time: z.string().min(1, "Horário de início é um campo obrigatório."),
});
