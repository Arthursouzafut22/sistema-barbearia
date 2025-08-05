export interface Ilogin {
  user: Iuser | null;
}

export interface Iuser {
  id: number;
  email: string;
  nome: string;
}

export interface InfoUser {
  id: number | null;
  email: string | null;
  token: string | null;
}
