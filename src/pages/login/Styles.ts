import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const Section = styled.section`
  max-width: 1220px;
  margin: 0 auto;
  display: grid;
  place-items: center;
  align-items: center;
  height: 100vh;
  padding-inline: 25px;
`;

export const FormLogin = styled.form`
  max-width: 28.13rem;
  width: 100%;
  background-color: ${Colors.JetBlack};
  padding: 1.56rem;
  border: 1px solid rgba(229, 231, 235, 0.3);
  border-radius: 0.38rem;

  fieldset {
    border: none;
    display: block;
    position: relative;

    &:first-child {
      margin-bottom: 25px;

      h2 {
        font-size: 1.5rem;
        color: ${Colors.fontColorWhite};
      }
      p {
        line-height: 24px;
        color: ${Colors.fontColorGray};
      }
    }

    svg {
      position: absolute;
      top: 42%;
      right: 2%;
    }
  }

  .conta {
    font-size: 0.88rem;
    text-align: center;
    color: ${Colors.fontColorWhite};
    margin-top: 18px;

    a {
      color: ${Colors.fontColorWhite};
    }
  }
`;
