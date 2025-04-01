import { LAPTOP, WIDESCREEN_DESKTOP } from "modules/shared/domain/Breakpoints";
import styled from "styled-components";

const WrapperContact = styled.section`
  display: flex;
  flex-wrap: wrap;
  max-width: 95vw;
  height: 100%;
  margin: 2rem auto;

  @media screen and (min-width: ${LAPTOP}px) {
    width: 85vw;
    margin: 3.25rem auto 14%;
  }

  @media screen and (width >= ${WIDESCREEN_DESKTOP}px) {
    margin-bottom: 10%;
  }
`;

export default WrapperContact;
