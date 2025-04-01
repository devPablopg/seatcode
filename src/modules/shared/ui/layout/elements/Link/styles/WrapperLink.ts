import { LAPTOP, WIDESCREEN_DESKTOP } from "modules/shared/domain/Breakpoints";
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

const WrapperLink = styled.div`
  position: relative;
  margin-top: 1vh;
  animation: 2s ${animLineUp} ease-in-out;
`;

const StyledLink = styled.a`
  display: block;
  width: fit-content;
  padding: 14px 1rem;
  text-decoration: none;
  background: ${(props) => props.theme.colors.primaryGreen.hexa};
  font-family: SEATBCN-Condensed, sans-serif;
  font-weight: 500;
  text-align: center;
  line-height: 100%;
  color: black;
  font-size: clamp(14px, 1.2vw, 4rem);
  text-transform: uppercase;
  transition: all 0.35s;
  border: 2px solid transparent;

  @media screen and (width >= ${LAPTOP}px) {
    padding: 20px 54px;
    &:hover {
      width: 200px;
      border: 2px solid ${(props) => props.theme.colors.primaryGreen.hexa};
      background: transparent;
      color: ${(props) => props.theme.colors.primaryGreen.hexa};
    }
  }

  @media screen and (width > ${WIDESCREEN_DESKTOP}px) {
    padding: 1em 2em;
    &:hover {
      border: 3px solid ${(props) => props.theme.colors.primaryGreen.hexa};
      width: 350px;
    }
  }
`;

const Icon = styled.div<{ $isRight: boolean;}>`
  width: 50px;
  height: 50px;
  border: 2px solid transparent;
  position: absolute;
  transform: rotate(45deg);
  right: 0;
  top: 0;
  z-index: -1;
  transition: all 0.35s;

  @media screen and (width >= ${LAPTOP}px) {
    svg {
      width: 30px;
      position: absolute;
      top: calc(50% - 15px);
      left: calc(50% - 15px);
      transform: rotate(-45deg);
      fill: ${(props) => props.theme.colors.primaryGreen.hexa};
      transition: all 0.35s;
    }
    ${StyledLink}:hover + & {
      border: 2px solid ${(props) => props.theme.colors.primaryGreen.hexa};
      ${(props) => props.$isRight ? `left: -22%;`: `right: -22%;`}
    }
  }

  @media screen and (width > ${WIDESCREEN_DESKTOP}px) {
    width: 3.5vw;
    height: 3.5vw;
    ${StyledLink}:hover + & {
      border: 3px solid ${(props) => props.theme.colors.primaryGreen.hexa};
      ${(props) => props.$isRight ? `left: -5vw;`: `right: -5vw;`}
    }
  }
`;

export { StyledLink, Icon };
export default WrapperLink;
