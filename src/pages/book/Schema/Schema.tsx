import * as yup from "yup";

export const Schema = yup.object({
  Nome: yup
    .string()
    .matches(/^[A-Za-zÀ-ÖØ-öø-ÿ ]+$/, "Digite um nome válido")
    .required("O nome é obrigatório"),
  Telefone: yup
    .string()
    .matches(
      /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
      "Digite um telefone válido no formato (XX) XXXXX-XXXX"
    )
    .required("O telefone é obrigatório"),
  Data: yup.date().required("A data é obrigatória"),
});
