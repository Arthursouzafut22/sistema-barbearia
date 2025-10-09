export interface IAppointmentsProps {
  cliente: string;
  data: string;
  horario: string;
  id: number;
  servico: string;
  telefone: string;
  usuario_id: number;
}

export interface IAppointments {
  meus_agendamentos: IAppointmentsProps[];
}
