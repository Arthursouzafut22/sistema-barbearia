import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export function Layout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  if (pathname === "/login" || pathname === "/register") {
    return children;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
