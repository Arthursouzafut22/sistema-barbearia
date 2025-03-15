import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const Input = styled.input`
  font-size: 1rem;
  display: block;
  width: 100%;
  color: ${Colors.fontColorGray};
  background-color: ${Colors.backgroundInput};
  border: 2px solid transparent;
  outline: 2px solid transparent;
  padding: 10px;
  margin-bottom: 15px;
  border-radius: 6px;

  &:focus {
    outline: 2px solid ${Colors.colorButton};
  }
`;