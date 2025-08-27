import styled from "styled-components";
import { Link } from "react-router-dom";
import { Colors } from "../../styles/Colors";
// import { Colors } from "../../styles/Colors";

export const BoxMobile = styled.div`
 position: absolute;
 /* border: 1px solid wheat; */
 /* bottom: -180px !important; */
 top: 69px;
 background-color: ${Colors.JetBlack};
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 gap: 7px;
 width: 100%;
 left: 0;
 right: 0;
 padding: 15px;
 height: 160px;
 z-index: 50;

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

export const NavLink = styled(Link)<{ background: string; color: string }>`
  background-color: ${({ background }) => background};
  display: block;
    text-decoration: none;
    font-size: 1rem;
    color: ${({color}) => color};
    padding: 6px 15px;
    border-radius: 15px;
    width: 100%;
    text-align: center;
  
    @media screen and (max-width: 467px) {
      font-size: 14px;
    }
`;
