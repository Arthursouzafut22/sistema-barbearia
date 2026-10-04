import { useState } from "react";
import { IBook } from "../pages/book/types";
import { AuthLogin } from "../context/useContextLogin";
import { URL_BASE } from "../services/urls";
import { useNavigate } from "react-router-dom";

export const useFetchReserve = () => {
  const { user } = AuthLogin();
  const [servico, setServico] = useState<string | null | undefined>("");
  const [spinner, setSpinner] = useState(false);
  const navigate = useNavigate();

  async function createBook(data: IBook, hora: string): Promise<void> {
    const user_id = localStorage.getItem("id") ?? user?.id;
    const objBook = {
      ...data,
      Servico: servico,
      Horario: hora,
      usuario_id: user_id,
    };

    if (servico?.length === 0) return;

    try {
      setSpinner(true);
      const response = await fetch(URL_BASE + "/booking", {
        method: "POST",
        body: JSON.stringify(objBook),
        headers: { "Content-Type": "application/json" },
      });

      const json = await response.json();
      setSpinner(false);
      if (spinner === false) {
        navigate("/agendamentos");
      }
      return json;
    } catch (error) {
      console.error("Error em fazer agendamento", error);
    }
  }

  return {
    servico,
    spinner,
    navigate,
    setServico,
    createBook,
  };
};
