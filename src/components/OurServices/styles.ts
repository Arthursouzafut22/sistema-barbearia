import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const Section = styled.section`
  padding: 80px 0;
`;

export const BoxCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  max-width: 1400px;
  margin: 40px auto auto auto;
  padding: 0px 15px;

  @media screen and (max-width: 1031px) {
    flex-wrap: wrap;
  }
`;

export const Card = styled.div`
  max-width: 350px;

  background-color: #27272a;
  flex: 1 1 350px;
  height: 440px;
  border-radius: 10px;

  @media screen and (max-width: 1217px) and (min-width: 767px) {
    height: 460px;
  }

  @media screen and (max-width: 767px) {
    max-width: 100%;
    height: auto;

    img {
      max-height: 180px !important;
    }

    h1 {
      font-size: 18px !important;
    }
    strong {
      font-size: 16px !important;
    }

    p {
      font-size: 14px !important;
    }
  }

  img {
    max-width: 100%;
    width: 100%;
    display: block;
    object-fit: cover;
    max-height: 200px;
    border-radius: 10px;
  }

  h1 {
    font-size: 20px;
    line-height: 24px;
  }

  strong {
    font-size: 18px;
    display: block;
    color: ${Colors.colorButton};
  }

  p {
    font-size: 16px;
    line-height: 20px;
    hyphens: auto;
    color: #9ca3af;
  }

  button {
    font-size: 16px;
    font-weight: 600;
    display: block;
    margin: 0 auto;
    width: 100%;
    cursor: pointer;
    border: none;
    padding: 10px;
    margin-top: 8px;
    border-radius: 8px;
    background-color: ${Colors.colorButton};
    color: #27272a;
    transition: 0.3s;

    &:hover {
      color: ${Colors.fontColorWhite};
      background-color: #921eb9;
    }
  }
`;

export const WrapperCard = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between !important;
  gap: 6px;
`;

export const ButtonPlus = styled.button`
  display: block;
  margin: 45px auto auto auto;
  font-size: 16px;
  padding: 12px 24px;
  border: 2px solid ${Colors.colorButton};
  border-radius: 18px;
  cursor: pointer;
  background-color: transparent;
  color: ${Colors.colorButton};
  font-weight: 600;
  transition: 0.3s;

  &:hover {
    background: ${Colors.colorButton};
    color: #27272a;
  }

  @media screen and (max-width: 767px) {
    font-size: 14px;
    padding: 10px 24px;
  }
`;
