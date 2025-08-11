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
          <span style={{ color: Colors.colorButton }}>Barber</span>{" "}
          <span style={{ color: "#551A8B" }}>Vip</span>
        </Link>
        <S.BoxNav>

          <S.NavLink to={"/agendar"}>Agendar {mobile ? "" : "agora"}</S.NavLink>
          <S.NavLink2 to={"/serviços"}>Serviços</S.NavLink2>
          <button onClick={() => navigate("/perfil")}>
            <FaRegUserCircle fontSize={28} />
          </button>
        </S.BoxNav>
      </S.Nav>
    </S.Header>
  );
}
