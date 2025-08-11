import { useState } from "react";
import { IForm } from "../pages/register/types";
import { URL } from "../services/urls";
import { useDelayNavigation } from "./useDelayNavigation";

interface Iregister {
  mensagem: string;
  sucesso: string;
}

export const useFetchRegister = () => {
  const [mensagem, setMensagem] = useState("");
  const [sucess, setSucess] = useState("");
  const [spinner, setSpinner] = useState(false);
  const { delayNavigation } = useDelayNavigation();

  const registerSubmit = async (data: IForm) => {
    try {
      setSpinner(true);
      const resposta = await fetch(URL + "/register", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = (await resposta.json()) as Iregister;
      setMensagem(json.mensagem);
      setSucess(json.sucesso);
      setSpinner(false);
      delayNavigation("/login");

      return json;
    } catch (erro) {
      console.error("Error ao enviar", erro);
    }
  };

  return {
    registerSubmit,
    mensagem,
    sucess,
    spinner,
  };
};
