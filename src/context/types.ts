export interface Iuser {
  id: number;
  nome: string;
  email: string;
}

export interface Ilogin {
  user: Iuser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (id: string | number, token: string) => void;
  logout: () => void;
}
