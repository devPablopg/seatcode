import styled, { keyframes } from "styled-components";

const animLineUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(80%);
  }
  20% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    transform: translateY(0%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const WrapperSummary = styled.p`
  font-family: SEATBCN-Condensed, sans-serif;
  font-size: clamp(12px, 1.9vw, 4vw);
  line-height: clamp(16px, 2.3vw, 4.8vw);
  color: ${(props) => props.theme.colors.white.hexa};
  font-weight: 350;
  font-style: italic;
  text-align: center;
  margin: 2rem 9.7vw 2rem 9.7vw;
  animation: 2s ${animLineUp} ease-in-out;
`;

export default WrapperSummary;
