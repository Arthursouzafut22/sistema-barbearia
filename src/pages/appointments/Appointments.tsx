import React, { useState } from "react";
import * as S from "./styles";
import { IAppointments, IAppointmentsProps } from "./types";
import { Spinner } from "../../components/Spinner/Spinner";
import { Colors } from "../../styles/Colors";
import { URL_BASE } from "../../services/urls";

export default function Appointments() {
  const [agendamentos, setAgendamentos] = useState<IAppointmentsProps[]>([]);
  const [load, setLoad] = useState(false);

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
        console.log("Error em buscar agendamentos.", error);
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
                <button onClick={() => []}>
                  Cancelar
                </button>
              </div>
            </S.CardAgendamento>
          ))
        )}
      </S.BoxAgendamentos>
    </S.Section>
  );
}
