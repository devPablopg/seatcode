import styled, { keyframes } from "styled-components";

const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const WrapperAnimated = styled.span<{ $isBlinking: boolean }>`
  font-family: "SEATBCN-Condensed", sans-serif;
  font-size: 7.6vw;
  font-weight: 400;
  font-style: italic;
  color: ${(props) => props.theme.colors.primaryGreen.hexa};
  white-space: nowrap;
  overflow: hidden;
  padding-left: 5vw;

  .cursor {
    animation: ${({ $isBlinking }) => ($isBlinking ? blink : "none")} 0.9s infinite;
  }
`;

export default WrapperAnimated;
