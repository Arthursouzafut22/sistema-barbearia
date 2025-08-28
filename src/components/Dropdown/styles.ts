import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const MenuDropdown = styled.div`
  position: absolute;
  right: 0;
  bottom: -170px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 18px 14px;
  background-color: #27272a;
  border-radius: 10px;

  button {
    display: block;
    font-size: 15px;
    width: 100%;
    padding: 8px 10px;
    cursor: pointer;
    border-radius: 8px;
    border: none;
    background-color: ${Colors.backgroundInput};
    color: ${Colors.fontColorWhite};
  }
`;
