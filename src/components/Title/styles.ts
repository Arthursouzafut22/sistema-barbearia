import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const Title = styled.section`
  text-align: center;
  font-size: 36px;
  font-weight: 700;

  @media screen and (max-width: 767px) {
    font-size: 28px;
  }
`;

export const Span = styled.span`
  display: block;
  height: 5px;
  width: 80px;
  background-color: ${Colors.colorButton};
  margin: 0 auto;
  margin-top: 12px;
`;
