import * as S from "./styles";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Colors } from "../../styles/Colors";
import useMedia from "../../hooks/useMedia";

export default function Header() {
  const navigate = useNavigate();
  const { mobile } = useMedia("(max-width:339px)");

  return (
    <S.Header>
      <S.Nav>
        <Link to={"/"} className="link-logo">
          <span style={{ color: Colors.colorButton }}>Barber</span> Vip
        </Link>
        <S.BoxNav>
          <S.NavLink to={"/agendar"}>Agendar {mobile ? "" : "agora"}</S.NavLink>
          <button onClick={() => navigate("/perfil")}>
            <FaRegUserCircle fontSize={28} />
          </button>
        </S.BoxNav>
      </S.Nav>
    </S.Header>
  );
}
