import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const Button = styled.button<{ marginTop: string }>`
  font-size: 1rem;
  font-weight: 500;
  display: block;
  width: 100%;
  color: ${Colors.fontColorWhite};
  background-color: ${Colors.colorButton};
  border: none;
  padding: 10px;
  cursor: pointer;
  border-radius: 6px;
  margin-top: ${({ marginTop }) => marginTop && marginTop};
`;
