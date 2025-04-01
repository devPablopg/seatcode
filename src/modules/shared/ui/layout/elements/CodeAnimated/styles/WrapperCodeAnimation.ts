import {
  LAPTOP,
  MOBILE,
  TABLET,
  WIDESCREEN_DESKTOP,
} from "modules/shared/domain/Breakpoints";
import styled, { keyframes } from "styled-components";

const planetRotate = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

const spin = keyframes`
  to {
    transform: rotate(1turn);
  }
`;

const Title = styled.h1`
  top: 55vw;
  right: 27vw;
  display: flex;
  justify-content: center;
  position: absolute;
  color: ${(props) => props.theme.colors.primaryGreen.hexa};

  @media screen and (min-width: ${TABLET}px) and (max-width: ${LAPTOP - 1}px) {
    top: 50vw;
    right: 30vw;
  }
  @media screen and (min-width: ${MOBILE}px) and (max-width: ${LAPTOP -1}px) and (orientation: landscape) {
    top: 29vw;
    right: 19vw;
  }
  @media screen and (min-width: ${LAPTOP}px) {
    top: 40vw;
    right: 25vw;
  }
  @media screen and (min-width: ${WIDESCREEN_DESKTOP}px) {
    top: 40vw;
    right: 25vw;
  }

  &::before {
    content: "";
    display: block;
    position: absolute;
    z-index: 1;
    top: -2vw;
    left: 2vw;
    width: 6vw;
    height: 6vw;
    border-radius: 50%;
    border: 3vw solid ${(props) => props.theme.colors.primaryGreen.rgba(0.1)};
    box-sizing: border-box;
  }
`;

const Em = styled.em`
  font-family: "SEATBCN-CondensedMedium", sans-serif;
  color: ${(props) => props.theme.colors.primaryGreen.hexa};
  font-size: 1.5vw;
  position: relative;
  font-style: normal;
  width: 1.5vw;
  text-align: center;
`;

const Planet = styled(Em)`
  animation: ${planetRotate} 4s linear infinite;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -0.5vmin;
    left: 3.5vmin;
    z-index: -1;
    width: 13vmin;
    height: 13vmin;
    border-radius: 50%;
  }
`;

const PlanetLeft = styled(Planet)`
  transform-origin: 3.6vw 1vw;

  &::after {
    content: "Ø";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    animation: ${spin} 2s linear infinite;
  }
`;

const rotate = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const grow = keyframes`
  50% {
    transform: scale(1);
  }
`;

const LoaderContainer = styled.div`
  height: 30px;
  animation: ${rotate} 6s linear infinite;
  position: absolute;
  top: 3px;
  left: 1.3vw;
`;

const Circle = styled.div<{ delay?: string }>`
  display: inline-block;
  background-color: ${(props) => props.theme.colors.primaryGreen.hexa};
  height: 30px;
  width: 30px;
  border-radius: 50%;
  transform: scale(0);
  animation: ${grow} 1.5s linear infinite;
  ${(props) => props.delay && `animation-delay: ${props.delay};`}
`;

export default Title;
export { Em, Planet, PlanetLeft, LoaderContainer, Circle };
