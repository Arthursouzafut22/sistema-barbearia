import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";
import type { Ilogin, Iuser } from "./types";
import { URL } from "../services/urls";

const AuthContext = createContext<Ilogin | null>(null);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de <AuthProvider>");
  }
  return context;
}

function readStorage<T>(key: string): T | null {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : null;
  } catch {
    return null;
  }
}

type Session = { id: string | number | null; token: string | null };

export function AuthProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<Session>(() => ({
    id: readStorage("id"),
    token: readStorage("token"),
  }));
  const [user, setUser] = useState<Iuser | null>(null);
  const [isLoading, setIsLoading] = useState(
    () => session.id !== null && session.token !== null
  );
  const [error, setError] = useState<string | null>(null);

  const login = useCallback((id: string | number, token: string) => {
    localStorage.setItem("id", JSON.stringify(id));
    localStorage.setItem("token", JSON.stringify(token));
    setSession({ id, token });
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    setSession({ id: null, token: null });
    setUser(null);
  }, []);

  useEffect(() => {
    const { id, token } = session;

    if (id === null || token === null) {
      setUser(null);
      setIsLoading(false);
      return;
    }

    const controller = new AbortController();

    async function fetchUser() {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`${URL}/user/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          signal: controller.signal,
        });

        if (response.status === 401) {
          logout();
          return;
        }
        if (!response.ok) {
          throw new Error(`Falha ao buscar usuário (${response.status})`);
        }

        const json = await response.json();
        const row = json.rows?.[0];
        if (!row) throw new Error("Usuário não encontrado");

        setUser({ id: row.id, nome: row.nome, email: row.email });
      } catch (err) {
        if (controller.signal.aborted) return;
        console.error(err);
        setError(err instanceof Error ? err.message : "Erro desconhecido");
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    }

    fetchUser();
    return () => controller.abort();
  }, [session, logout]);

  const value = useMemo<Ilogin>(
    () => ({
      user,
      isAuthenticated: user !== null,
      isLoading,
      error,
      login,
      logout,
    }),
    [user, isLoading, error, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
