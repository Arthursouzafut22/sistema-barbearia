export interface IAppointmentsProps {
  cliente: string;
  data: string;
  horario: string;
  id: number;
  servico: string;
  telefone: string;
  usuario_id: number;
  status: Status;
}

enum Status {
  PENDENTE = "pendente",
  ACEITO = "aceito",
  RECUSADO = "recusado",
}

export interface IAppointments {
  meus_agendamentos: IAppointmentsProps[];
}
