import * as S from "./Styles";

interface IButton {
  text: string;
  marginTop: string;
  onClick?: VoidFunction;
}

const Button = ({ text, marginTop, onClick }: IButton) => {
  return (
    <S.Button marginTop={marginTop} onClick={onClick}>
      {text}
    </S.Button>
  );
};

export default Button;
