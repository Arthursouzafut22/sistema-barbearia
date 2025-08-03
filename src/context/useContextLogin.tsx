import { useContext, createContext, PropsWithChildren, useState } from "react";

type userProps = {
  id: number;
  nome: string;
};

const ContextLogin = createContext<userProps | null>({} as userProps);

export const AuthLogin = () => {
  const context = useContext(ContextLogin);

  if (!context) throw new TypeError("Erro no contexto de login!");
  return context;
};

const useContextLogin = ({ children }: PropsWithChildren) => {
  const [token, setToken] = useState("");

  return <ContextLogin.Provider value={null}>{children}</ContextLogin.Provider>;
};

export default useContextLogin;
