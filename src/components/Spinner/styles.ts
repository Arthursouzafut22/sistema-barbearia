import styled from "styled-components";

export const Spinner = styled.svg`
    width: 1.35em;
    transform-origin: center;
    animation: rotate4 2s linear infinite;
  

  .loader {
    fill: none;
    stroke: #fff;
    stroke-width: 10;
    stroke-dasharray: 2, 200;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash4 1.5s ease-in-out infinite;
  }

  @keyframes rotate4 {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash4 {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 200;
      stroke-dashoffset: -35px;
    }

    100% {
      stroke-dashoffset: -125px;
    }
  }
`;