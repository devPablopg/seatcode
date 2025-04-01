import { DESKTOP, LAPTOP } from "modules/shared/domain/Breakpoints";
import styled from "styled-components";

const WrapperPartnership = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5vw auto 10vw;
  max-width: 90%;
  justify-content: space-evenly;

  :nth-child(even) div:last-of-type {
    justify-content: flex-end;
  }

  @media screen and (min-width: ${LAPTOP}px) {
    justify-content: space-between;
  }

  @media screen and (min-width: ${DESKTOP}px) {
    & > *:nth-child(even) {
      margin-left: auto;
    }

    & > *:nth-child(odd) {
      margin-right: auto;
    }

    :nth-child(even) div {
      text-align: right;
      width: 100%;

      p {
        margin-left: auto;
      }
    }
    :nth-child(even) div:last-of-type {
      width: 0;
    }

    :nth-child(odd) div > img {
      left: 75%;
    }

    :nth-child(even) div > img {
      margin-right: 49vw;
    }
  }
`;

export default WrapperPartnership;
