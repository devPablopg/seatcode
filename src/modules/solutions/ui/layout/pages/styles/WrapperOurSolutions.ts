import { LAPTOP, WIDESCREEN_DESKTOP } from "modules/shared/domain/Breakpoints";
import {
  EmptyParagraph,
  WrapperContent,
  WrapperImage,
  WrapperParagraph,
} from "modules/shared/ui/layout/components/Card/styles/WrapperCard";
import WrapperSummary from "modules/shared/ui/layout/components/Summary/styles/WrapperSummary";
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

const WrapperOurSolutions = styled.div`
  ${WrapperSummary} {
    &:last-of-type {
      font-family: SEATBCN-CondensedMedium, sans-serif;
      font-weight: 500;
    }
  }

  ${EmptyParagraph} {
    margin-bottom: 1vw;
  }
`;

const WrapperCard = styled.div`
  @media screen and (width >= ${LAPTOP}px) {
    margin: 5rem auto 14%;
  }

  ${WrapperParagraph} {
    span:last-of-type {
      color: ${(props) => props.theme.colors.primaryGreen.hexa};
    }
    @media screen and (width >= ${LAPTOP}px) {
      width: 32.3vw;
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

const WrapperItem = styled.div`
  text-align: center;
  text-align: -webkit-center;
  animation: 2s ${animLineUp} ease-in-out;
  margin: 5vw;
  text-transform: uppercase;
`;

export { WrapperCard, WrapperItem };
export default WrapperOurSolutions;
