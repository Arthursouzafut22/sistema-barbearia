import styled from "styled-components";
import { Colors } from "../../styles/Colors";
import { Link } from "react-router-dom";

export const Header = styled.header<{ mobile: boolean }>`
  background-color: ${Colors.JetBlack};
  padding: ${({ mobile }) => (mobile ? "20px 10px" : "25px 10px")};
  position: relative;
  height: ${({ mobile }) => mobile && "70px"};
  display: ${({ mobile }) => (mobile && "flex")};
  align-items: center;
  justify-content: space-between !important;
`;

export const Nav = styled.nav<{ mobile: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 15px;
  gap: 10px;
  width: ${({ mobile }) => mobile && "100%"};
  position: relative;

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
    color: ${Colors.fontColorWhite};
    background-color: transparent;
  }
`;

export const NavLink = styled(Link)`
  display: block;
  text-decoration: none;
  font-size: 1rem;
  background-color: ${Colors.colorButton};
  color: ${Colors.fontColorWhite};
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
  color: ${Colors.fontColorWhite};
  padding: 6px 15px;
`;

export const ButtonMobile = styled.button<{ menuActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  touch-action: manipulation;
  cursor: pointer;

  div {
    width: 25px;
    height: 3px;
    background-color: ${Colors.colorButton};
    transition: all 0.3s ease;
  }

  div:nth-child(1) {
    transform: ${({ menuActive }) =>
      menuActive ? "rotate(45deg) translate(5.2px, 5.2px)" : "rotate(0)"};
  }

  div:nth-child(2) {
    opacity: ${({ menuActive }) => (menuActive ? 0 : 1)};
    transform: ${({ menuActive }) =>
      menuActive ? "translateX(-20px)" : "translateX(0)"};
  }

  div:nth-child(3) {
    transform: ${({ menuActive }) =>
      menuActive ? "rotate(-45deg) translate(6px, -6px)" : "rotate(0)"};
  }
`;

export const ButtonClose = styled.button``;
