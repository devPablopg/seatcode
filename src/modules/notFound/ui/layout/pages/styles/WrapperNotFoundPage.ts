import {
  LAPTOP,
  MOBILE,
  WIDESCREEN_DESKTOP,
} from "modules/shared/domain/Breakpoints";
import styled from "styled-components";

const NotFoundContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  :first-child {
    position: relative;
  }
  :first-child h1 {
    position: absolute;
    font-family: "SEATBCN-CondensedBlack", sans-serif;
    font-size: 11vw;
    color: ${(props) => props.theme.colors.primaryGreen.hexa};
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (min-width: ${LAPTOP}px) {
    flex-wrap: nowrap;
    flex-direction: row-reverse;
  }

  @media screen and (min-width: ${MOBILE}px) and (max-width: ${LAPTOP}px) and (orientation: landscape) {
    flex-wrap: nowrap;
    flex-direction: row-reverse;
  }
`;

const InsideImage = styled.img`
  width: 100vw;
  height: 50vh;
  object-fit: cover;

  @media screen and (min-width: ${LAPTOP}px) {
    width: 50vw;
    height: 100vh;
  }

  @media screen and (min-width: ${MOBILE}px) and (max-width: ${LAPTOP}px) and (orientation: landscape) {
    width: 50vw;
    height: 100vh;
  }
`;

const NotFoundMessage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 40vh;
  color: ${(props) => props.theme.colors.white.hexa};
  padding: 1vw 5vw;

  h1 {
    font-size: clamp(28px, 3vw, 5vw);
    font-family: "SEATBCN-CondensedBlack", sans-serif;
    font-weight: 900;
    margin-bottom: 1vw;
    line-height: clamp(36.4px, 3.9vw, 6.5vw);
    color: ${(props) => props.theme.colors.white.hexa};
  }

  p {
    font-size: clamp(21px, 2.5vw, 4.5vw);
    font-family: "SEATBCN-Condensed", sans-serif;
    font-weight: 400;
    margin: 3vw 0;
  }

  a {
    margin: 4vw 0;
  }

  @media screen and (min-width: ${LAPTOP}px) {
    width: 50vw;
    height: 100vh;
  }

  @media screen and (min-width: ${MOBILE}px) and (max-width: ${LAPTOP}px) and (orientation: landscape) {
    width: 50vw;
    height: 100vh;
  }
`;

const NotFoundButton = styled.a`
  display: inline-block;
  padding: 0.8rem 2.5rem;
  font-family: "SEATBCN-Condensed", sans-serif;
  font-weight: 500;
  line-height: 1.45;
  text-align: center;
  letter-spacing: 0.1em;
  font-size: 2vw;
  color: ${(props) => props.theme.colors.primaryGreen.hexa};
  background-color: transparent;
  border: 1px solid ${(props) => props.theme.colors.primaryGreen.hexa};
  border-radius: 0.1875rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: ${(props) => props.theme.colors.darkGray.hexa};
    background-color: ${(props) => props.theme.colors.primaryGreen.hexa};
    border-color: ${(props) => props.theme.colors.primaryGreen.hexa};
  }

  @media screen and (min-width: ${WIDESCREEN_DESKTOP}px) {
    padding: 1.4rem 3.2rem;
    border: 2px solid ${(props) => props.theme.colors.primaryGreen.hexa};
  }

  @media screen and (min-width: ${WIDESCREEN_DESKTOP + 1}px) {
    padding: 2.2rem 4rem;
    border: 3px solid ${(props) => props.theme.colors.primaryGreen.hexa};
  }
`;

export default NotFoundContainer;
export { InsideImage, NotFoundMessage, NotFoundButton };
