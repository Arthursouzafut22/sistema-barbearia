import { FaRegUserCircle } from "react-icons/fa";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { Colors } from "../../styles/Colors";
import { memo } from "react";

function MenuMobile({ closeMenu }: { closeMenu: () => void }) {
  const navigate = useNavigate();

  return (
    <S.BoxMobile>
      <S.NavLink
        onClick={closeMenu}
        to={"/book"}
        background={Colors.colorButton}
        color={Colors.fontColorWhite}
      >
        Agendar agora
      </S.NavLink>
      <S.NavLink
        onClick={closeMenu}
        to={"/services"}
        background={"transparente"}
        color={"#fff"}
      >
        Serviços
      </S.NavLink>
      <button
        onClick={() => {
          navigate("/perfil");
          closeMenu();
        }}
      >
        <FaRegUserCircle fontSize={28} />
      </button>
    </S.BoxMobile>
  );
}

export default memo(MenuMobile);
