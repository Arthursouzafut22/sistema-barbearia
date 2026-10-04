import React, { useState } from "react";
import * as S from "./styles";
import { IAppointments, IAppointmentsProps } from "./types";
import { Spinner } from "../../components/Spinner/Spinner";
import { Colors } from "../../styles/Colors";
import { URL_BASE } from "../../services/urls";
import { useFetchDeleteBooking } from "../../hooks/useFetchDeleteBooking";
import { DeleteConfirmModal } from "../../components/DeleteConfirmModal/DeleteConfirmModal";

export default function Appointments() {
  const [agendamentos, setAgendamentos] = useState<IAppointmentsProps[]>([]);
  const { spinner, deleteBooking } = useFetchDeleteBooking();
  const [id, setId] = useState<number | null>(null);
  const [load, setLoad] = useState(false);
  const [open, setOpen] = useState(false);

  React.useEffect(() => {
    const user_id = localStorage.getItem("id");

    if (!user_id) return;

    (async () => {
      try {
        setLoad(true);
        const response = await fetch(
          `${URL_BASE}/booking/${JSON.parse(user_id)}`
        );
        if (!response.ok) throw new TypeError("Error no response.");

        const json = (await response.json()) as IAppointments;
        setAgendamentos(json.meus_agendamentos);
        setLoad(false);
      } catch (error: unknown) {
        console.error("Error em buscar agendamentos.", error);
        throw new Error("Erro interno em buscar agendamentos");
      }
    })();
  }, []);

  return (
    <S.Section load={load} columns={agendamentos.length === 0}>
      <h1>Meu Agendamentos</h1>
      <div className={"load"}>
        {load && <Spinner color={Colors?.colorButton} width="60px" />}
      </div>
      <S.BoxAgendamentos columns={agendamentos.length === 0}>
        {agendamentos.length === 0 && !load ? (
          <p style={{ color: "#fff" }}>Nenhum agendamento...</p>
        ) : (
          agendamentos &&
          agendamentos.map((item: IAppointmentsProps) => (
            <S.CardAgendamento key={item.id}>
              <p>
                <strong>Serviço:</strong> {item?.servico}
              </p>
              <p>
                <strong>Horario:</strong> {item?.horario.slice(0, 5)}
              </p>
              <p>
                <strong>data:</strong> {item?.data.slice(0, 10)}
              </p>
              <div className="box-button">
                <div>
                  <S.Status
                    style={{
                      fontSize: "14px",
                      color:
                        item.status == "pendente"
                          ? " #B45309"
                          : item.status == "aceito"
                          ? "#15803D"
                          : item.status == "recusado"
                          ? "#991B1B"
                          : "",
                      background:
                        item.status == "pendente"
                          ? "rgba(245, 158, 11, 0.15)"
                          : item.status == "aceito"
                          ? "rgba(34, 197, 94, 0.15)"
                          : item.status == "recusado"
                          ? "rgba(239, 68, 68, 0.15)"
                          : "",
                    }}
                  >
                    {item.status === "pendente" && "Agendamento Pendente"}
                    {item.status === "aceito" && "Agendamento Aceito"}
                    {item.status === "recusado" && "Agendamento Recusado"}
                  </S.Status>
                </div>
                <button
                  className="btn_cancel"
                  onClick={() => {
                    setOpen(true);
                    setId(item.id);
                  }}
                >
                  Cancelar
                </button>
              </div>
              {open && (
                <DeleteConfirmModal
                  onConfirm={async () => {
                    await deleteBooking(id as number, setAgendamentos);
                    setOpen(false);
                  }}
                  open={open}
                  spinner={spinner}
                  setOpen={setOpen}
                />
              )}
            </S.CardAgendamento>
          ))
        )}
      </S.BoxAgendamentos>
    </S.Section>
  );
}
