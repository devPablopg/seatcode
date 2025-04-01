import { LAPTOP, WIDESCREEN_DESKTOP } from "modules/shared/domain/Breakpoints";
import {
  WrapperContent,
  WrapperImage,
  WrapperParagraph,
} from "modules/shared/ui/layout/components/Card/styles/WrapperCard";
import styled, { keyframes } from "styled-components";

const WrapperHighlights = styled.div`
  display: flex;
  justify-content: center;
  max-width: 70%;
  margin: auto;

  @media screen and (min-width: ${LAPTOP}px) {
    justify-content: space-between;
    max-width: 80%;
  }
`;

const WrapperPoint = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.white.hexa};
`;

const lights = keyframes`
0% {
  color: hsla(0, 0%, 100%, 0.8);
  text-shadow:
    0 0 1em hsla(123, 87%, 82%, 0.2),
    0 0 0.125em hsla(123, 87%, 82%, 0.3),
    -1em -0.125em 0.5em hsla(123, 87%, 82%, 0),
    1em 0.125em 0.5em hsla(123, 87%, 82%, 0);
}

30% { 
  color: hsla(0, 0%, 100%, 0.9);
  text-shadow:
    0 0 1em hsla(123, 87%, 82%, 0.5), 
    0 0 0.125em hsla(123, 87%, 82%, 0.5),
    -0.5em -0.125em 0.25em hsla(123, 87%, 82%, 0.2),
    0.5em 0.125em 0.25em hsla(123, 87%, 82%, 0.4); 
}

40% { 
  color: hsla(0, 0%, 100%, 0.95);
  text-shadow:
    0 0 1em hsla(123, 87%, 82%, 0.5), 
    0 0 0.125em hsla(123, 87%, 82%, 0.9), 
    -0.25em -0.125em 0.125em hsla(123, 87%, 82%, 0.2),
    0.25em 0.125em 0.125em hsla(123, 87%, 82%, 0.4); 
}

70% {
  color: hsla(0, 0%, 100%, 0.9);
  text-shadow:
    0 0 1em hsla(123, 87%, 82%, 0.5),
    0 0 0.125em hsla(123, 87%, 82%, 0.5),
    0.5em -0.125em 0.25em hsla(123, 87%, 82%, 0.2), 
    -0.5em 0.125em 0.25em hsla(123, 87%, 82%, 0.4);
}

100% {
  color: hsla(0, 0%, 100%, 0.8);
  text-shadow:
    0 0 1em hsla(123, 87%, 82%, 0.2), 
    0 0 0.125em hsla(123, 87%, 82%, 0.3),
    1em -0.125em 0.5em hsla(123, 87%, 82%, 0),
    -1em 0.125em 0.5em hsla(123, 87%, 82%, 0);
}
`;

const WrapperNumber = styled.p`
  font-size: clamp(24px, 6.7vw, 8vw);
  font-family: SEATBCN-Condensed, sans-serif;
  font-weight: 500;
  margin-bottom: 0;
  animation: ${lights} 5s 750ms linear infinite;
`;

const WrapperAchievement = styled.p`
  font-size: clamp(14px, 3.3vw, 5vw);
  font-family: SEATBCN-Condensed, sans-serif;
  font-weight: 350;
  max-width: 33%;
  line-height: clamp(16.8px, 3.9vw, 6.5vw);
  margin-top: 1vw;
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
        height: 38vw;
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

const WrapperCenteredTitle = styled.p`
  font-size: clamp(1rem, 3.3vw, 6vw);
  font-weight: 500;
  color: ${(props) => props.theme.colors.white.hexa};
  text-align: center;
  margin: 2rem 0;
  text-transform: uppercase;
`;

const WrapperPerks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: clamp(1rem, 1vw, 3vw);
  margin: 2vw 0;
`;

const WrapperItemPerk = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 24%;

  @media screen and (min-width: ${LAPTOP}px) {
    width: 14%;
  }

  img {
    width: clamp(40px, 7.8vw, 180px);
    height: clamp(40px, 7.8vw, 180px);
  }

  p {
    font-size: clamp(12px, 1.3vw, 2.5vw);
    line-height: clamp(14.4px, 1.5vw, 3vw);
    font-weight: 350;
    font-style: italic;
    text-align: center;
    color: ${(props) => props.theme.colors.white.hexa};
  }
`;

export {
  WrapperHighlights,
  WrapperPoint,
  WrapperNumber,
  WrapperAchievement,
  WrapperCard,
  WrapperCenteredTitle,
  WrapperPerks,
  WrapperItemPerk,
};
function hsl(arg0: number, arg1: number, arg2: number) {
  throw new Error("Function not implemented.");
}
