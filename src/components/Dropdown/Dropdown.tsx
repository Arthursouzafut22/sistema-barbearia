import { useNavigate } from "react-router-dom";
import * as S from "./styles";
import { Colors } from "../../styles/Colors";
import { AuthLogin } from "../../context/useContextLogin";
import { memo } from "react";

function Dropdown({ closeDropDown }: { closeDropDown: () => void }) {
  const navigate = useNavigate();
  const { logout } = AuthLogin();

  return (
    <S.MenuDropdown onClick={(e) => e.stopPropagation()}>
      <button
        onClick={() => {
          navigate("/profile");
          closeDropDown();
        }}
      >
        Meu perfil
      </button>
      <button
        onClick={() => {
          navigate("/agendamentos");
          closeDropDown();
        }}
      >
        Meus agendamentos
      </button>
      <button onClick={logout} style={{ background: Colors.colorButton }}>
        Sair
      </button>
    </S.MenuDropdown>
  );
}

export default memo(Dropdown);
