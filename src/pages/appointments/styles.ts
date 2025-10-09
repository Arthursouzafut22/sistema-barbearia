import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const Section = styled.section<{ load: boolean; columns: boolean }>`
  height: ${({ load, columns }) => (load || columns) && "90vh"};

  @media screen and (max-width: 767px) {
    h1 {
      font-size: 28px;
    }
  }

  h1 {
    text-align: center;
    font-size: 35px;
    margin: 50px auto;
    color: ${Colors.fontColorWhite};
  }
  .load {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const BoxAgendamentos = styled.div<{ columns: boolean }>`
  max-width: 1050px;
  margin: 0 auto 60px auto;
  display: ${({ columns }) => (columns ? "flex" : "grid")};
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  padding: 0 15px;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 816px) {
    grid-template-columns: 1fr;
  }
`;

export const CardAgendamento = styled.div`
  padding: 18px;
  background-color: aliceblue;
  border-radius: 10px;
  background-color: #27272a;

  .box-button {
    align-items: center;
    justify-content: end;
    display: flex;
  }
  @media screen and (max-width: 816px) {
    p {
      font-size: 14px;
    }
  }

  p {
    margin-bottom: 10px;
    color: ${Colors.fontColorWhite};
  }

  button {
    font-size: 15px;
    display: block;
    cursor: pointer;
    border: none;
    background-color: ${Colors.colorButton};
    padding: 8px 20px;
    border-radius: 8px;
    font-weight: 600;
    transition: 0.3s;

    &:hover {
      color: ${Colors.fontColorWhite};
      background-color: #921eb9;
    }
  }
`;
