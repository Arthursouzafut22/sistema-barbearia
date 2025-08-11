import styled from "styled-components";
import Banner from "../../assets/banner77.png";
import BannerMobile from "../../assets/mobile.png";
import { Colors } from "../../styles/Colors";

export const Main = styled.main``;

export const BoxBanner = styled.div<{ mobile: boolean }>`
  background-image: ${({ mobile }) =>
    mobile ? `url(${BannerMobile})` : `url(${Banner})`};
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  height: ${({ mobile }) => (mobile ? "70vh" : "87vh")};
  display: flex;
  align-items: center;
  justify-content: center;

  .box {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    gap: 15px;

    h1 {
      color: #ffffff;
      font-size: 40px;
      text-align: center;
    }

    p {
      text-align: center;
      font-size: 18px;
      color: #ffffff;
    }

    button {
      display: flex;
      align-items: center;
      font-size: 1rem;
      cursor: pointer;
      padding: 10px 32px;
      gap: 5px;
      border-radius: 18px;
      background-color: ${Colors.colorButton};
      color: #ffffff;
    }
  }
`;
