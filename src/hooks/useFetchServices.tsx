import { useEffect, useState } from "react";
import { URL_BASE } from "../services/urls";

export interface ServiceProps {
  id: number;
  descricao: string;
  imagems: string;
  nome: string;
  preco: string;
}

export const useFetchServices = () => {
  const [service, setService] = useState<ServiceProps[]>([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        setLoad(true);
        const response = await fetch(URL_BASE + "/services");

        if (!response.ok) throw new Error("Error em buscar serviços");
        const serviceJson = await response.json();
        setService(serviceJson);
        setLoad(false);
        return serviceJson;
      } catch (error: unknown) {
        console.error(error);
        throw new Error("Erro desconhecido em buscar serviços");
      }
    })();
  }, []);

  return { service, load };
};
