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

export const FormRegister = styled.form`
  max-width: 450px;
  width: 100%;
  background-color: ${Colors.JetBlack};
  padding: 25px;
  border: 1px solid rgba(229, 231, 235, 0.3);
  border-radius: 6px;

  fieldset {
    border: none;
    display: block;

    &:first-child {
      margin-bottom: 25px;

      h2 {
        font-size: 24px;
        color: ${Colors.fontColorWhite};
      }
      p {
        line-height: 24px;
        color: ${Colors.fontColorGray};
      }
    }
  }

  .conta {
    font-size: 14px;
    text-align: center;
    color: ${Colors.fontColorWhite};
    margin-top: 18px;
  }
`;
