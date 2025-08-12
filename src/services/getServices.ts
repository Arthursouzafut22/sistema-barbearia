import { URL_BASE } from "./urls";

export interface ServiceProps {
  id: number;
  descricao: string;
  imagems: string;
  nome: string;
  preco: string;
}

export async function getServices(): Promise<ServiceProps[]> {
  try {
    const response = await fetch(URL_BASE + "/services");

    if (!response.ok) throw new Error("Error em buscar serviços");
    const serviceJson = await response.json();

    return serviceJson;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error);
      throw new Error("Error em buscar serviços");
    }
    console.error(error);
    throw new Error("Erro desconhecido em buscar serviços");
  }
}
