import styled from "styled-components";
import { Colors } from "../../styles/Colors";
import { Link } from "react-router-dom";

export const Footer = styled.footer`
  padding: 60px 0 0 0;
  background-color: #18181b;
  margin-top: 40px;

  .linha-bottom {
    padding: 0px 15px;
    bottom: 0;
    width: 100%;
    max-width: 1400px;
    margin: 35px auto auto;

    .bottom {
      border: 0.5px solid #3f3f46;
      margin: 0 auto;
    }
  }
`;

export const BoxFooter = styled.footer`
  padding: 0px 15px;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: start;
  justify-content: space-between;
  gap: 20px;
  position: relative;

  @media screen and (max-width: 976px) {
    flex-wrap: wrap !important;
    gap: 35px !important;

    .card-footer,
    .card-contato,
    .card-endereco {
      max-width: 100% !important;
      flex: initial !important;
      width: 100%;
    }
  }

  .card-footer {
    max-width: 400px;
    flex: 1;

    h3 {
      color: ${Colors.fontColorWhite};
      margin-bottom: 20px;
      position: relative;

      @media screen and (max-width: 286px) {
        &::after {
          width: 137px !important;
        }
      }

      &::after {
        content: " ";
        width: 237px;
        height: 2px !important;
        background-color: ${Colors.colorButton};
        display: block;
        margin-top: 6px;
      }
    }

    p {
      color: ${Colors.fontColorWhite};
      margin-bottom: 10px;
    }

    span {
      color: ${Colors.colorButton};
    }

    .wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

  .card-contato {
    max-width: 400px;
    flex: 1;

    h3 {
      color: ${Colors.fontColorWhite};
      margin-bottom: 20px;

      position: relative;

      &::after {
        content: " ";
        width: 72px;
        height: 2px !important;
        background-color: ${Colors.colorButton};
        display: block;
        margin-top: 6px;
      }
    }
    p {
      display: flex;
      align-items: center;
      gap: 8px;
      color: ${Colors.fontColorWhite};
      margin-bottom: 10px;
    }

    .box-sociais {
      display: flex;
      align-items: end;
      gap: 8px;

      svg {
        cursor: pointer;
        transition: 0.3s;

        &:hover {
          color: ${Colors.colorButton} !important;
        }
      }
    }
  }
  .card-endereco {
    max-width: 400px;
    flex: 1;

    h3 {
      color: ${Colors.fontColorWhite};
      margin-bottom: 20px;

      position: relative;

      &::after {
        content: " ";
        width: 85px;
        height: 2px !important;
        background-color: ${Colors.colorButton};
        display: block;
        margin-top: 6px;
      }
    }

    .box-locacao {
      display: flex;
      align-items: start;
      gap: 5px;
    }

    p {
      color: ${Colors.fontColorWhite};
    }

    button {
      transition: 0.3s;

      &:hover {
        background-color: #921eb9;
      }
    }
  }
`;

export const LinkWpp = styled(Link)`
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  color: ${Colors.fontColorWhite};
  background-color: ${Colors.colorButton};
  border: none;
  padding: 10px;
  height: 39px;
  cursor: pointer;
  border-radius: 8px;
  margin-top: 15px;
  transition: 0.3s;
  text-decoration: none;

  &:hover {
    background-color: #921eb9;
  }

  @media screen and (max-width: 767px) {
    font-size: 15px !important;
  }
`;

export const BoxDireitos = styled.div`
  padding: 30px 15px;

  p {
    font-size: 14px;
    text-align: center;
    color: #a1a1aa;
  }
`;

export const BoxDireitosTwo = styled.div`
  p {
    font-size: 12px;
    padding: 20px;
    background-color: #27272a;
    color: #a1a1aa;
    text-align: center;
  }
`;
