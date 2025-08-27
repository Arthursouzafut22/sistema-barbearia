import styled from "styled-components";
import { Colors } from "../../styles/Colors";

export const Section = styled.section`
  h1 {
    text-align: center;
    font-size: 35px;
    margin: 50px auto;
    color: ${Colors.fontColorWhite};
  }
`;

export const FormBook = styled.form`
  /* border: 1px solid wheat; */
  max-width: 650px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Box1 = styled.div`
  background-color: #27272a;
  padding: 20px;
  border-radius: 10px;

  h2 {
    color: ${Colors.fontColorWhite};
    margin-bottom: 20px;
  }
`;

export const Box2 = styled.div`
  background-color: #27272a;
  padding: 20px;
  border-radius: 10px;
  margin-top: 25px;

  h2 {
    color: ${Colors.fontColorWhite};
    margin-bottom: 20px;
  }
`;

export const Box3 = styled.div`
  background-color: #27272a;
  padding: 20px;
  border-radius: 10px;
  margin-top: 25px;

  h2 {
    color: ${Colors.fontColorWhite};
    margin-bottom: 20px;
  }

  .load {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const DivButton = styled.div`
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 15px;
  padding: 12px 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  background-color: ${Colors.backgroundInput};
  color: ${Colors.fontColorWhite};

  span {
    display: block;
  }

  & :last-child {
    font-size: 15px;
    font-weight: 600;
  }
`;

export const BoxTimes = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  gap: 12px;

  div {
    border: 1px solid ${Colors.colorButton};
    padding: 12px 6px;
    text-align: center;
    color: ${Colors.fontColorWhite};
    border-radius: 10px;
    cursor: pointer;
    transition: 0.3s;

    @media screen and (max-width: 350px) {
      font-size: 14px;
    }

    &:hover {
      background-color: ${Colors.backgroundInput};
    }
  }
`;

export const BoxLoading = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 18px;

  p {
    font-size: 14px;
    color: ${Colors.fontColorWhite};
  }
`;
