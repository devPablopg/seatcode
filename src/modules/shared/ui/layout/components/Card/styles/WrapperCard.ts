import {
  LAPTOP,
  MOBILE,
  TABLET,
  WIDESCREEN_DESKTOP,
} from "modules/shared/domain/Breakpoints";
import styled, { keyframes } from "styled-components";

const WrapperCard = styled.section<{ $isRight: boolean }>`
  display: flex;
  position: relative;
  flex-wrap: wrap;
  max-width: 95vw;
  margin: 2rem auto;

  @media screen and (min-width: ${LAPTOP}px) {
    flex-direction: ${(props) => props.$isRight && "row-reverse"};
    width: 85vw;
    margin: 3.25rem auto 14%;
  }

  @media screen and (min-width: ${LAPTOP}px) and (max-width: ${LAPTOP}px) {
    margin-bottom: 10%;
  }

  @media screen and (width >= ${WIDESCREEN_DESKTOP}px) {
    margin-bottom: 10%;
  }
`;

const WrapperContent = styled.div<{ $isRight: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 2rem 1.5rem 4rem 1.5rem;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.darkGray.hexa};

  @media screen and (width > ${TABLET}px) {
    align-items: ${(props) => (props.$isRight ? "flex-end" : "flex-start")};
  }

  @media screen and (width > ${LAPTOP}px) {
    width: 65%;
    padding: 3.5rem 2rem 6.5rem 2rem;
    border-radius: 10px;
    clip-path: ${(props) =>
      props.$isRight
        ? "polygon(5% 0%, 100% 0, 100% 100%, 0% 100%)"
        : "polygon(0 0, 100% 0%, 95% 100%, 0% 100%)"};
  }
`;

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

const pulse = keyframes`
  0% {
    opacity: 0;
    filter: grayscale(100%);
  }
  50% {
    transform: scale(1.2);
    filter: grayscale(100%);
}
`;

const WrapperTitle = styled.p`
  font-family: SEATBCN-Condensed, sans-serif;
  font-weight: 500;
  color: ${(props) => props.theme.colors.primaryGreen.hexa};
  font-size: clamp(1.2rem, 2.9vw, 5rem);
  animation: 2s ${animLineUp} ease-in-out;
  margin: 0;
`;

const WrapperSubtitle = styled.p`
  font-family: SEATBCN-Condensed, sans-serif;
  font-weight: 350;
  color: ${(props) => props.theme.colors.primaryGreen.hexa};
  font-size: clamp(1rem, 2.1vw, 4.5rem);
  margin: 1vw 0;
  animation: 2s ${animLineUp} ease-in-out;
`;

const WrapperParagraph = styled.p<{ $isRight: boolean }>`
  color: ${(props) => props.theme.colors.white.hexa};
  text-align: left;
  font-size: clamp(12px, 1.3vw, 3rem);
  line-height: clamp(17px, 1.6vw, 3.6rem);
  animation: 2s ${animLineUp} ease-in-out;

  @media screen and (width > ${TABLET}px) {
    text-align: ${(props) => (props.$isRight ? "right" : "left")};
  }

  @media screen and (width >= ${LAPTOP}px) {
    width: 32vw;
  }

  span {
    &.bold {
      font-family: SEATBCN-CondensedMedium, sans-serif;
      font-weight: 500;
    }
    &.normal {
      font-weight: 400;
    }
  }
`;

const EmptyParagraph = styled.span`
  display: flex;
  margin-bottom: 2rem;
`;

const WrapperImage = styled.div<{ $isRight: boolean }>`
  display: flex;
  margin: auto;
  width: 85vw;
  gap: 2vw;
  margin-top: -2.5em;
  img {
    width: 100%;
    height: 150px;
    display: block;
    object-fit: cover;
    object-position: center;
    border-radius: 5px;
  }

  @media screen and (min-width: ${MOBILE}px) and (max-width: ${LAPTOP}px) and (orientation: landscape) {
    width: 90vw;
    img {
      height: 250px;
    }
  }

  @media screen and (min-width: ${LAPTOP}px) {
    position: absolute;
    clip-path: ${(props) =>
      props.$isRight
        ? "polygon(0 0, 54% 0, 50% 100%, 0% 100%)"
        : "polygon(5% 0%, 100% 0, 100% 100%, 0% 100%)"};
    margin-top: 4rem;
    left: ${(props) => (props.$isRight ? "0" : "39vw")};
    img {
      height: 30em;
      max-height: 600px;
      &.twice {
        width: 26%;
      }
      &.single {
        width: 54%;
      }
      animation: ${pulse} 2000ms cubic-bezier(0.9, 0.7, 0.5, 0.9);
    }
  }

  @media screen and (width: ${WIDESCREEN_DESKTOP}px) {
    img {
      height: 600px;
    }
  }

  @media screen and (min-width: ${LAPTOP}px) and (max-width: ${LAPTOP}px) {
    margin-top: 2.5em;
    img {
      height: 20em;

      &.single {
        width: 51%;
      }
    }
  }

  @media screen and (min-width: ${WIDESCREEN_DESKTOP + 1}px) {
    img {
      height: max-content;
      max-height: 1200px;
    }
  }
`;

export {
  WrapperContent,
  WrapperTitle,
  WrapperSubtitle,
  WrapperParagraph,
  EmptyParagraph,
  WrapperImage,
};
export default WrapperCard;
