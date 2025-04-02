import {
  LAPTOP,
  MOBILE,
  TABLET,
  WIDESCREEN_DESKTOP,
} from "modules/shared/domain/Breakpoints";
import {
  WrapperContent,
  WrapperImage,
  WrapperParagraph,
} from "modules/shared/ui/layout/components/Card/styles/WrapperCard";
import styled, { keyframes } from "styled-components";

const delayedShow = keyframes`
    to {
      visibility: visible;
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

const zoomIn = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const WrapperCard = styled.div`
  ${WrapperParagraph} {
    @media screen and (width >= ${LAPTOP}px) {
      width: 32.2vw;
    }
  }

  ${WrapperContent} {
    clip-path: unset;
  }

  ${WrapperImage} {
    clip-path: unset;

    @media screen and (min-width: ${LAPTOP}px) {
      img {
        height: max-content;
        max-height: 800px;
      }
    }

    @media screen and (min-width: ${WIDESCREEN_DESKTOP + 1}px) {
      img {
        height: max-content;
        max-height: 1300px;
      }
    }
  }
`;

const WrapperPortfolioBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 20vw;
    width: 90vw;
    object-fit: cover;
    object-position: center;
  }
`;

const WrapperPortfolioTitle = styled.h4`
  position: absolute;
  font-weight: 700;
  font-size: clamp(21px, 3.5vw, 4vw);
  font-style: italic;
  color: ${(props) => props.theme.colors.primaryGreen.hexa};
  visibility: hidden;
  animation: 0s linear 1s forwards ${delayedShow};
`;

const WrapperPortfolioContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  font-family: SEATBCN-Condensed, sans-serif;
  color: ${(props) => props.theme.colors.white.hexa};
  width: 90vw;
  margin: auto;
`;

const WrapperPortfolioCard = styled.div<{ $delay: number }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 4vw 0;

  @media screen and (min-width: ${TABLET}px) and (max-width: ${LAPTOP}px) {
    width: 45%;
  }
  @media screen and (min-width: ${MOBILE}px) and (max-width: ${LAPTOP}px) and (orientation: landscape) {
    width: 45%;
  }
  @media screen and (min-width: ${LAPTOP}px) {
    width: 24%;
  }

  p:first-of-type {
    font-family: SEATBCN-CondensedMedium, sans-serif;
    font-weight: 500;
    font-size: clamp(1rem, 1.4vw, 1.8vw);
    margin-bottom: 0;
  }

  p:last-of-type {
    display: inline-block;
    font-weight: 400;
    font-size: clamp(14px, 1.2vw, 1.5vw);
  }

  img {
    width: 100%;
    height: 151px;
    object-fit: cover;
    border-radius: 5px;
    animation: ${zoomIn} 1s ease-in-out ${(props) => props.$delay}s forwards;

    @media screen and (min-width: ${MOBILE}px) and (max-width: ${LAPTOP}px) and (orientation: landscape) {
      height: 250px;
    }
    @media screen and (min-width: ${LAPTOP}px) {
      height: 20em;
    }
    @media screen and (min-width: ${WIDESCREEN_DESKTOP}px) {
      height: 26em;
    }
    @media screen and (min-width: ${WIDESCREEN_DESKTOP + 1}px) {
      height: 35em;
    }
  }
`;

const WrapperItem = styled.div`
  text-align: center;
  text-align: -webkit-center;
  animation: 2s ${animLineUp} ease-in-out;
  margin-bottom: 5vw;
`;

const WrapperLinkedin = styled.div`
  height: 70vh;
  width: 90%;
  margin: 5vw auto;

  @media screen and (min-width: ${MOBILE}px) and (max-width: ${LAPTOP}px) and (orientation: landscape) {
    height: 90vh;
  }

  @media screen and (min-width: ${TABLET}px) {
    height: 55vh;
  }
`;

export {
  WrapperCard,
  WrapperPortfolioBg,
  WrapperPortfolioTitle,
  WrapperPortfolioContainer,
  WrapperPortfolioCard,
  WrapperItem,
  WrapperLinkedin
};
