import { useState } from "react";
import { IBook } from "../pages/book/types";
import { AuthLogin } from "../context/useContextLogin";
import { URL_BASE } from "../services/urls";

export const useFetchReserve = () => {
  const { user } = AuthLogin();
  const [servico, setServico] = useState<string | null | undefined>("");

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
      const response = await fetch(URL_BASE + "/booking", {
        method: "POST",
        body: JSON.stringify(objBook),
        headers: { "Content-Type": "application/json" },
      });

      const json = await response.json();
      return json;
    } catch (error) {
      console.error("Error em fazer agendamento", error);
    }
  }

  return {
    servico,
    setServico,
    createBook,
  };
};
