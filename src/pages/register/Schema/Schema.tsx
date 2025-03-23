import * as yup from "yup"

export const Schema = yup.object({
  ["Nome"]: yup.string().required("O nome é obrigatório"),
  ["E-mail"]: yup
    .string()
    .email("Digite um e-mail válido")
    .required("O e-mail é obrigatório")
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
  ["Senha"]: yup.string().required("A senha é obrigatório"),
  ["Confirme a senha"]: yup.string().required("A senha é obrigatório"),
});
