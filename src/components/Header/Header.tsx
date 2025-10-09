import * as S from "./styles";
import { FaRegUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Colors } from "../../styles/Colors";
import useMedia from "../../hooks/useMedia";
import MenuMobile from "../MenuMobile/MenuMobile";
import { useCallback, useEffect, useState } from "react";
import Dropdown from "../Dropdown/Dropdown";

export default function Header() {
  const { mobile } = useMedia("(max-width:767px)");
  const [menuActive, setMenuActive] = useState(false);
  const [activeDropDown, setActiveDropDown] = useState(false);

  const closeMenu = useCallback(() => {
    setMenuActive(false);
  }, []);

  const closeDropDown = useCallback(() => {
    setActiveDropDown(false);
  }, []);

  useEffect(() => {
    const fecharDrop = () => setActiveDropDown(false);
    
    document.body.addEventListener("click", fecharDrop);

    return () => {
      document.body.removeEventListener("click", fecharDrop);
    };
  }, []);

  return (
    <S.Header mobile={mobile}>
      <S.Nav mobile={mobile}>
        <Link to={"/"} className="link-logo">
          <span style={{ color: Colors.colorButton }}>Barber</span>{" "}
          <span style={{ color: "#551A8B" }}>Vip</span>
        </Link>
        <S.BoxNav>
          {mobile ? (
            <S.ButtonMobile
              menuActive={menuActive}
              aria-label={"Abrir menu"}
              onClick={() => setMenuActive((prev) => !prev)}
            >
              <div></div>
              <div></div>
              <div></div>
            </S.ButtonMobile>
          ) : (
            <>
              <S.NavLink to={"/book"}>Agendar agora</S.NavLink>
              <S.NavLink2 to={"/services"}>Serviços</S.NavLink2>
              <button
                onClick={(e) => {
                  setActiveDropDown((prev) => !prev);
                  e.stopPropagation();
                }}
              >
                <FaRegUserCircle fontSize={28} />
              </button>
            </>
          )}
        </S.BoxNav>
        {!mobile && activeDropDown && (
          <Dropdown closeDropDown={closeDropDown} />
        )}
      </S.Nav>
      {mobile && menuActive && <MenuMobile closeMenu={closeMenu} />}
    </S.Header>
  );
}
