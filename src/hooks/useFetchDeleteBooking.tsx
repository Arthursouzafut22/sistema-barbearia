import { useState } from "react";
import { IAppointmentsProps } from "../pages/appointments/types";
import { URL_BASE } from "../services/urls";

type SetProps = React.Dispatch<React.SetStateAction<IAppointmentsProps[]>>;

export const useFetchDeleteBooking = () => {
  const [spinner, setSpinner] = useState(false);

  const deleteBooking = async (id: number, setAgendamentos: SetProps) => {
    try {
      setSpinner(true);
      const response = await fetch(`${URL_BASE}/booking/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      if (response.ok === false) {
        throw new Error("Falha interna no response");
      }
      setAgendamentos((prev) =>
        prev.filter((item) => Number(item.id) !== Number(id))
      );
    } catch (erro: unknown) {
      console.error("Error interno na requisição", erro);
    } finally {
      setSpinner(false);
    }
  };

  return { deleteBooking, spinner };
};
