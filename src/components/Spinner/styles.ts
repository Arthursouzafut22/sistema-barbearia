import styled from "styled-components";

export const Spinner = styled.div`
  width: 100px;
  height: 20px;
  line-height: 50px;
  text-align: center;

  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    background: white;
    border-radius: 50px;
    animation: up-down6 0.5s ease-in infinite alternate;
  }

  .dois {
    background: white;
    animation-delay: 0.16s;
  }

  .tres {
    background: white;
    animation-delay: 0.32s;
  }

  .quatro {
    background: white;
    animation-delay: 0.48s;
  }

  @keyframes up-down6 {
    0% {
      transform: translateY(-10px);
    }

    100% {
      transform: translateY(10px);
    }
  }
`;