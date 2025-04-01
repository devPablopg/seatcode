import { LAPTOP, MOBILE, TABLET } from "modules/shared/domain/Breakpoints";
import styled, { keyframes } from "styled-components";

const WrapperHeader = styled.section`
  height: 33vh;
  position: relative;
  overflow: hidden;

  @media screen and (min-width: ${TABLET}px) and (max-width: ${LAPTOP - 1}px) {
    height: 46vh;
  }
  @media screen and (min-width: ${MOBILE}px) and (max-width: ${LAPTOP - 1}px) and (orientation: landscape) {
    height: 80vh;
  }
  @media screen and (width = ${LAPTOP}px) {
    height: 50vh;
  }
  @media screen and (width > ${LAPTOP}px) {
    height: 100vh;
  }
`;

const glitchAnim1 = keyframes`
  0%, 100% { 
    opacity: 1;
    transform: translate3d(40px, 0, 0);
    clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%);
  }
  20% { clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%); }
  30% { clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%); }
  40% { clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%); }
  50% { clip-path: polygon(0 33%, 100% 33%, 100% 33%, 0 33%); }
  55% { clip-path: polygon(0 44%, 100% 44%, 100% 44%, 0 44%); }
  60% { clip-path: polygon(0 50%, 100% 50%, 100% 20%, 0 20%); }
  65% { clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%); }
  70% { clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%); }
  80% { clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%); }
  85% { clip-path: polygon(0 60%, 100% 60%, 100% 65%, 0 65%); }
  95% { clip-path: polygon(0 72%, 100% 72%, 100% 78%, 0 78%); }
`;

const glitchAnim2 = keyframes`
  0%, 100% { 
    opacity: 1;
    transform: translate3d(-10px, 0, 0);
    clip-path: polygon(0 25%, 100% 25%, 100% 30%, 0 30%);
  }
  10% { clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%); }
  15% { clip-path: polygon(0 5%, 100% 5%, 100% 20%, 0 20%); }
  17% { clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%); }
  19% { clip-path: polygon(0 40%, 100% 40%, 100% 40%, 0 40%); }
  33% { clip-path: polygon(0 52%, 100% 52%, 100% 59%, 0 59%); }
  35% { clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%); }
  40% { clip-path: polygon(0 75%, 100% 75%, 100% 75%, 0 75%); }
  45% { clip-path: polygon(0 65%, 100% 65%, 100% 40%, 0 40%); }
  49% { clip-path: polygon(0 45%, 100% 45%, 100% 50%, 0 50%); }
  50% { clip-path: polygon(0 14%, 100% 14%, 100% 33%, 0 33%); }
  55% { clip-path: polygon(0 15%, 100% 15%, 100% 35%, 0 35%); }
  60% { clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%); }
  70% { clip-path: polygon(0 65%, 100% 65%, 100% 60%, 0 60%); }
  80% { clip-path: polygon(0 80%, 100% 80%, 100% 85%, 0 85%); }
  90% { clip-path: polygon(0 55%, 100% 55%, 100% 65%, 0 65%); }
`;

const WrapperOverlay = styled.div`
  @keyframes fadeIn {
    0% {
      opacity: 0;
      filter: blur(20px);
      transform: scale(0.9);
    }
    50% {
      opacity: 0.5;
      filter: brightness(1) blur(10px);
    }
    100% {
      opacity: 1;
      filter: brightness(0.8) blur(5px);
      transform: scale(1);
    }
  }

  position: absolute;
  width: 100%;
  height: inherit;
  top: 0;
  left: 0;
  background-image: url("./hero-banner.webp");
  background-size: contain;
  background-position: right;
  overflow: hidden;
  will-change: transform, opacity, filter;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-repeat: no-repeat;
  z-index: -1;
  animation: fadeIn 3s ease;
  filter: brightness(0.7);

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: inherit;
    background-size: inherit;
    background-position: inherit;
    background-repeat: no-repeat;
    opacity: 0;
    pointer-events: none;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }

  &::before {
    animation: ${glitchAnim1} 15s infinite linear;
  }

  &::after {
    animation: ${glitchAnim2} 15s infinite linear;
  }
`;

const WrapperTitle = styled.h1`
  @keyframes come2life {
    0% {
      transform: scale3d(0, 0, 1) rotate(0.02deg);
      opacity: 0;
      filter: blur(10px);
    }
    25% {
      transform: scale3d(1, 1, 1) rotate(0.02deg);
      opacity: 0.4;
      filter: blur(10px);
    }
    40% {
      opacity: 0.7;
      filter: blur(5px);
    }
    80% {
      opacity: 0.8;
    }
    100% {
      transform: scale3d(1, 1, 1) rotate(0.02deg);
      filter: blur(3px);
      opacity: 1;
    }
  }

  font-family: "SEATBCN-Condensed", sans-serif;
  font-size: clamp(36px, 7.6vw, 8vw);
  font-weight: 400;
  color: ${(props) => props.theme.colors.white.hexa};
  height: fit-content;
  padding: 10vh 0 0 5vw;
  margin-bottom: 1rem;
  animation: come2life linear 3s;
  transform-origin: center center;
  filter: blur(1px);

  @media screen and (width >= ${LAPTOP}px) {
    padding: 17vh 0 0 5vw;
    filter: blur(1px);
  }
`;

const WrapperSubtitle = styled.h3`
  font-family: "SEATBCN-Condensed", sans-serif;
  font-weight: 350;
  font-style: italic;
  color: ${(props) => props.theme.colors.primaryGreen.hexa};
  font-size: clamp(2rem, 5vw, 6vw);
  padding-left: 5vw;
  animation: come2life linear 4s;
  transform-origin: left center;
`;

const WrapperNote = styled.p`
  @keyframes delayedShow {
    to {
      visibility: visible;
    }
  }

  color: ${(props) => props.theme.colors.white.hexa};
  font-size: clamp(12px, 2vw, 115px);
  line-height: clamp(14px, 2.4vw, 8.6rem);
  width: 20em;
  padding-left: 5vw;
  visibility: hidden;
  animation: 0s linear 1s forwards delayedShow;
`;

export { WrapperOverlay, WrapperTitle, WrapperSubtitle, WrapperNote };
export default WrapperHeader;