import { ReactNode } from "react";
import * as S from "./styles";

export default function Title({ children }: { children: ReactNode }) {
  return (
    <>
      <S.Title>{children}</S.Title>
      <S.Span></S.Span>
    </>
  );
}
