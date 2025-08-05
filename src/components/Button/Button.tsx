import { ReactNode } from "react";
import * as S from "./Styles";

interface IButton {
  children: string | ReactNode;
  marginTop: string;
  onClick?: VoidFunction;
}

const Button = ({ children, marginTop, onClick }: IButton) => {
  return (
    <S.Button marginTop={marginTop} onClick={onClick}>
      {children}
    </S.Button>
  );
};

export default Button;
