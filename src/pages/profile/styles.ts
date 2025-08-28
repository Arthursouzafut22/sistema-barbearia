import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const Section = styled.section`
  padding-bottom: 180px;

  h1 {
    text-align: center;
    font-size: 35px;
    margin: 50px auto 20px auto;
    color: ${Colors.fontColorWhite};
  }
`;

export const Box = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  justify-content: center !important;
`;

export const BoxInfo = styled.div`
  background-color: #27272a;
  width: 100%;
  margin: 0 auto;
  padding: 50px 0px;
  border-radius: 10px;

  strong,
  p,
  button {
    text-align: center;
    display: block;
    color: ${Colors.fontColorWhite};
  }

  strong {
    font-size: 20px;
    margin-bottom: 3px;
  }

  button {
    font-size: 16px;
    margin: 0 auto;
    background-color: ${Colors.colorButton};
    padding: 6px 22px;
    cursor: pointer;
    margin-top: 15px;
    border-radius: 8px;
  }

  .box-1 {
    margin-bottom: 8px;
  }
`;
