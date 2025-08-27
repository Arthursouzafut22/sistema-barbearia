import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

export default function PrivateRouter({ children }: { children: ReactNode }) {
  const token = localStorage.getItem("token");

  return !token ? <Navigate to={"/login"} /> : children;
}
