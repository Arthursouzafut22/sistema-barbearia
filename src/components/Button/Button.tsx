import { ReactNode } from "react";
import * as S from "./Styles";

type ButtonProps = React.ComponentProps<"button"> & {
  children: string | ReactNode;
  marginTop: string;
};

const Button = ({ children, marginTop, ...rest }: ButtonProps) => {
  return (
    <S.Button marginTop={marginTop} {...rest}>
      {children}
    </S.Button>
  );
};

export default Button;
