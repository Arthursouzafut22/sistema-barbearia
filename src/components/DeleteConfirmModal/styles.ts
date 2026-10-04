import styled from "styled-components";

export const Section = styled.section`
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  inset: 0;
  z-index: 19888880 !important;
`;

export const Modal = styled.div`
  background: white;
  border-radius: 8px;
  padding: 24px;
  width: 350px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
`;
