import { TABLET } from "modules/shared/domain/Breakpoints";
import styled from "styled-components";

const FooterContainer = styled.div`
  display: block;
  margin-bottom: 2rem;
  text-align: center;
  justify-content: space-evenly;

  @media screen and (min-width: ${TABLET}px) {
    display: flex;
  }

  @media screen and (min-height: 320px) and (max-height: 430px) and (orientation: landscape) {
    display: flex;
  }
`;

const FooterLink = styled.a`
  display: block;
  font-family: SEATBCN-CondensedBold, sans-serif;
  color: ${(props) => props.theme.colors.white.hexa};
  font-size: 12px;
  margin-bottom: 0.5rem;
  text-decoration: none;
  font-size: clamp(14px, 1.3vw, 2rem);
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.primaryGreen.hexa};
  }
`;

export { FooterLink };
export default FooterContainer;
