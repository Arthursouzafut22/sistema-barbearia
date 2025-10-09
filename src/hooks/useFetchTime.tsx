import { useState, useEffect } from "react";
import { URL_BASE } from "../services/urls";

interface ITimes {
  horariosDisponiveis: string[];
}

export const useFetchTime = () => {
  const [date, setDate] = useState("");
  const [times, setTimes] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${URL_BASE}/horarios-disponiveis?data=${date}`
        );

        if (!res.ok)
          throw new Error("Não foi possível buscar horários disponíveis");

        const json = (await res.json()) as ITimes;
        setTimes(json.horariosDisponiveis);
        setLoading(false);
      } catch (error: unknown) {
        console.error("Error em buscar horários", error);
      } finally {
        setLoading(false);
      }
    })();
  }, [date]);

  return {
    date,
    setDate,
    times,
    loading,
  };
};
