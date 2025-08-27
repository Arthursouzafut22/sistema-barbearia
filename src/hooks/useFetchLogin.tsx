import { useState } from "react";
import { ILogin } from "../pages/login/types";
import { URL } from "../services/urls";
import { useDelayNavigation } from "./useDelayNavigation";

interface Ilogin {
  id: number;
  token: string;
  mensagem: string;
  sucesso: string;
}

export const useFetchLogin = () => {
  const [mensagem, setMensagem] = useState<string>("");
  const [sucess, setSucess] = useState("");
  const [spinner, setSpinner] = useState(false);
  const { delayNavigation } = useDelayNavigation();

  const loginSubmit = async (data: ILogin) => {
    try {
      setSpinner(true);
      const resposta = await fetch(URL + "/login", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" },
      });

      const json = (await resposta.json()) as Ilogin;

      if (json.id !== undefined && json.token !== undefined) {
        localStorage.setItem("id", JSON.stringify(json.id));
        localStorage.setItem("token", JSON.stringify(json.token));
      }
      setMensagem(json?.mensagem);

      setTimeout(() => {
        setMensagem("");
      }, 2000);

      setSucess(json.sucesso);
      setSpinner(false);
      delayNavigation("/", json.sucesso);
    } catch (erro) {
      console.log("Erro ao fazer login", erro);
    }
  };

  return {
    loginSubmit,
    mensagem,
    spinner,
    sucess,
  };
};
