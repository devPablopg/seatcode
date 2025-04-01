import {
  DESKTOP,
  LAPTOP,
  MOBILE,
  TABLET,
  WIDESCREEN_DESKTOP,
} from "modules/shared/domain/Breakpoints";
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

const frontalRise3D = keyframes`
  0% {
    transform: perspective(1000px) rotateX(90deg);
    opacity: 0;
  }
  50% {
    background-color: #a7f9ab;
  }
  100% {
    transform: perspective(1000px) rotateX(0deg);
    opacity: 1;
  }
`;

const WrapperPartnerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 90vw;
  margin: 3vw 0;
  padding: 1rem;
  font-family: SEATBCN-Condensed, sans-serif;
  background-color: ${(props) => props.theme.colors.darkGray.hexa};

  @media screen and (min-width: ${MOBILE}px) and (max-width: ${LAPTOP -1}px) and (orientation: landscape) {
    margin: 1vw 0;
    max-width: 43%;
  }

  @media screen and (min-width: ${TABLET}px) {
    margin: 1vw 0;
    max-width: 42%;
  }

  @media screen and (min-width: ${LAPTOP}px) {
    margin: 2vw 0;
    max-width: 37vw;
    padding: 3.5rem 2rem 6.5rem 2rem;
  }

  @media screen and (min-width: ${DESKTOP}px) {
    flex-wrap: nowrap;
    max-width: 90vw;
    width: 60%;
    margin: 7vw 0;
  }

  @media screen and (min-width: ${WIDESCREEN_DESKTOP + 1}px) {
    margin: 8vw 0;
  }

  @media screen and (min-width: 4000px) {
    margin: 12vw 0;
  }
`;

const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const WrapperTitle = styled.p`
  font-weight: 500;
  color: ${(props) => props.theme.colors.primaryGreen.hexa};
  font-size: clamp(1.2rem, 2.9vw, 5rem);
  animation: 2s ${animLineUp} ease-in-out;
  margin: 0;
`;

const WrapperParagraph = styled.p`
  font-weight: 400;
  color: ${(props) => props.theme.colors.white.hexa};
  font-size: clamp(12px, 1.3vw, 3rem);
  line-height: clamp(17px, 1.6vw, 3.6rem);
  animation: 2s ${animLineUp} ease-in-out;

  @media screen and (width >= ${LAPTOP}px) {
    width: 32vw;
  }
`;

const WrapperImage = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  align-items: flex-end;
  perspective: 2500px;

  img {
    width: 45%;
    height: 80px;
    padding: 2vw;
    object-fit: contain;
    object-position: center;
    background-color: ${(props) => props.theme.colors.white.hexa};
    transform-origin: bottom;
    transform-style: preserve-3d;
    animation: ${frontalRise3D} 1.5s ease-in-out forwards;

    @media screen and (min-width: ${LAPTOP}px) {
      width: 50%;
      height: 120px;
    }
  }

  @media screen and (min-width: ${DESKTOP}px) {
    img {
      position: absolute;
      width: 35vw;
      height: 25vw;
      top: 0.5vw;
    }
  }
`;

export { WrapperContent, WrapperTitle, WrapperParagraph, WrapperImage };
export default WrapperPartnerCard;
