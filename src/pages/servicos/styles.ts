import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const Section = styled.section<{ load: boolean }>`
  height: ${({ load }) => load && "90vh"};

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

export const BoxServices = styled.div`
  max-width: 1050px;
  margin: 0 auto 60px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
  padding: 0 15px;
  align-items: center;

  @media screen and (max-width: 816px) {
    grid-template-columns: 1fr;
  }
`;

export const CardServices = styled.div`
  padding: 18px;
  background-color: aliceblue;
  border-radius: 10px;
  background-color: #27272a;

  @media screen and (max-width: 816px) {
    h2 {
      font-size: 22px;
    }

    p {
      font-size: 14px;
    }
  }

  h2 {
    color: ${Colors.fontColorWhite};
  }

  p {
    color: #9ca3af;
    margin-top: 15px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;

  @media screen and (max-width: 816px) {
    span {
      display: block;
      font-size: 1rem !important;
    }

    button {
      display: block;
      padding: 8px 16px !important;
    }
  }

  span {
    font-size: 1.2rem;
    display: block;
    font-weight: 700;
    color: ${Colors.fontColorWhite};
  }

  button {
    font-size: 1rem;
    display: block;
    cursor: pointer;
    border: none;
    background-color: ${Colors.colorButton};
    padding: 10px 20px;
    border-radius: 8px;
    font-weight: 600;
    transition: 0.3s;

    &:hover {
      color: ${Colors.fontColorWhite};
      background-color: #921eb9;
    }
  }
`;
