import * as S from "./styles";

export const Spinner = ({ color, width }: { color: string; width: string }) => {
  return (
    <S.Spinner
      viewBox="25 25 50 50"
      className="container"
      color={color}
      width={width}
    >
      <circle cx="50" cy="50" r="20" className="loader"></circle>
    </S.Spinner>
  );
};
