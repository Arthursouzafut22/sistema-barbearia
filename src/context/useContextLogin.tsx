import {
  useContext,
  createContext,
  PropsWithChildren,
  useState,
  useEffect,
} from "react";
import { Ilogin, Iuser } from "./types";
import { URL } from "../services/urls";

const ContextLogin = createContext<Ilogin | null>({} as Ilogin);

export const AuthLogin = () => {
  const context = useContext(ContextLogin);

  if (!context) throw new TypeError("Erro no contexto de login!");
  return context;
};

export const UseContextLogin = ({ children }: PropsWithChildren) => {
  const [id] = useState(() => {
    const getId = localStorage.getItem("id");
    return getId ? JSON.parse(getId) : null;
  });
  const [token] = useState(() => {
    const getToken = localStorage.getItem("token");
    return getToken ? JSON.parse(getToken) : null;
  });
  const [user, setUser] = useState<Iuser | null>(null);

  useEffect(() => {
    if (id === null || token === null) return;

    async function getUser() {
      try {
        const response = await fetch(URL + `/user/${id}`, {
          method: "GET",
          headers: {
            "Content-type": "Application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const json = await response.json();
        setUser({
          id: json.rows[0].id,
          nome: json.rows[0].nome,
          email: json.rows[0].email,
        });
      } catch (erro) {
        console.error(erro);
      }
    }
    getUser();
  }, [id, token]);

  return (
    <ContextLogin.Provider value={{ user }}>{children}</ContextLogin.Provider>
  );
};
