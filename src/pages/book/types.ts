export interface IBook {
  Nome: string;
  Telefone: string;
  Data: Date;
  Horario?: string;
}

export interface IndexProps {
  indexService: number | undefined;
  indexTime: number | undefined;
}
