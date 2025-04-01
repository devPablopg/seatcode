import { LAPTOP, MOBILE } from "modules/shared/domain/Breakpoints";
import styled from "styled-components";

const WrapperContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  background-color: ${(props) => props.theme.colors.darkGray.hexa};
  border-radius: 5px;
  font-family: SEATBCN-Condensed, sans-serif;
  padding-left: 5vw;
  justify-content: center;

  @media screen and (min-width: ${MOBILE}px) and (max-width: ${LAPTOP}px) and (orientation: landscape) {
    width: 50%;
  }

  @media screen and (min-width: ${LAPTOP}px) {
    width: 50%;
  }
`;

const WrapperTitle = styled.p`
  font-weight: 500;
  font-size: clamp(1rem, 2.9vw, 4rem);
  color: ${(props) => props.theme.colors.primaryGreen.hexa};
`;

const WrapperInfo = styled.div`
  font-weight: 400;
  font-size: clamp(12px, 2vw, 3rem);
  color: ${(props) => props.theme.colors.white.hexa};

  p {
    margin: 0;
  }
`;

const WrapperEmail = styled.a`
  font-weight: 400;
  font-size: clamp(12px, 2vw, 3rem);
  color: ${(props) => props.theme.colors.white.hexa};
  text-decoration: none;
  margin-top: 1rem;
`;

const WrapperSocial = styled.div`
  display: flex;
  margin: 1rem 0;
  gap: 1vw;
`;

const WrapperLink = styled.a`
  color: ${(props) => props.theme.colors.white.hexa};

  svg {
    width: clamp(20px, 2.5vw, 4rem);
    height: clamp(20px, 2.5vw, 4rem);

    @media screen and (min-width: ${MOBILE}px) and (max-width: ${LAPTOP}px) and (orientation: landscape) {
      width: 22px;
      height: 22px;
    }
  }
`;

export { WrapperTitle, WrapperInfo, WrapperEmail, WrapperSocial, WrapperLink };
export default WrapperContactInfo;
