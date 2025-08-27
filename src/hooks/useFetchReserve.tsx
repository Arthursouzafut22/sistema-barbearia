import { useState } from "react";
import { IBook } from "../pages/book/types";

export const useFetchReserve = () => {
  const [servico, setServico] = useState<string | null | undefined>("");

  async function createBook(data: IBook, hora: string): Promise<void> {
    const objBook = { ...data, Servico: servico, Horario: hora };

    if (servico?.length === 0) return;

    try {
      const response = await fetch("http://localhost:3005/booking", {
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
