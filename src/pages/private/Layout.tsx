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
      {/* <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      > */}
        <Header />
        {/* <div
          style={{
            flexGrow: 1, // <- mantém o footer no fim
            display: "flex", // <- garante layout
            flexDirection: "column",
          }}
        > */}
          {children}
        {/* </div> */}
        <Footer />
      {/* </div> */}
    </>
  );
}
