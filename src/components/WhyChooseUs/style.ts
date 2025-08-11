import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const Section = styled.section`
  background-color: #ffffff;
  padding: 80px 0;

  h1 {
    text-align: center;
    font-size: 36px;

    @media screen and (max-width: 767px) {
      font-size: 28px;
    }
  }

  .details {
    display: block;
    height: 5px;
    width: 80px;
    background-color: ${Colors.colorButton};
    margin: 0 auto;
    margin-top: 12px;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
  max-width: 1400px;
  margin: 40px auto auto auto;
  gap: 25px;
  flex-wrap: wrap;

  @media screen and (max-width: 767px) {
    flex-direction: column;

    .card {
      span {
        width: 60px !important;
        height: 60px !important;
        border-radius: 60px !important;
      }

      p {
        font-size: 14px !important;
      }
    }
  }

  .card {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 272px;
    gap: 16px;
    padding: 10px;
    width: 100%;
    flex: 1;

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0;
      width: 80px;
      height: 80px;
      border-radius: 80px;
      background-color: ${Colors.colorButton};
      color: #ffffff;
      box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }

    h2 {
      display: block;
      text-align: center;
    }

    p {
      font-size: 16px;
      text-align: center;
      height: 60px;
      color: #4b5563;
    }
  }
`;
