import styled from "styled-components";
import { Colors } from "../../styles/Colors";
import { Link } from "react-router-dom";

export const Header = styled.header`
  background-color: ${Colors.JetBlack};
  padding: 25px 10px;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 15px;
  gap: 10px;

  @media screen and (max-width: 467px) {
    padding: 0 10px;
  }

  .link-logo {
    display: block;
    text-decoration: none;
    font-size: 1.2rem;

    @media screen and (max-width: 467px) {
      font-size: 16px;
    }
  }
`;

export const BoxNav = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  button {
    display: flex;
    align-items: center;
    font-size: 1rem;
    padding: 6px 0;
    cursor: pointer;
    color: #ffff;
    background-color: transparent;
  }
`;

export const NavLink = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: 1rem;
  background-color: ${Colors.colorButton};
  color: #ffffff;
  padding: 6px 15px;
  border-radius: 15px;

  @media screen and (max-width: 467px) {
    font-size: 14px;
  }
`;
export const NavLink2 = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: 1rem;
  color: #ffffff;
  padding: 6px 15px;
`;