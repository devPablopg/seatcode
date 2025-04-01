import { LAPTOP, MOBILE } from "modules/shared/domain/Breakpoints";
import styled from "styled-components";

const MapContainer = styled.div`
  width: 100%;
  overflow: hidden;

  @media screen and (min-width: ${MOBILE}px) and (max-width: ${LAPTOP}px) and (orientation: landscape) {
    width: 50%;
  }

  @media screen and (min-width: ${LAPTOP}px) {
    width: 50%;
  }
`;

export const MapContainerStyle = styled.div`
  width: 100%;
  height: 30vh;
  max-height: 635px;

  @media screen and (min-width: ${MOBILE}px) and (max-width: ${LAPTOP}px) and (orientation: landscape) {
    height: 70vh;
  }

  @media screen and (min-width: ${LAPTOP}px) and (orientation: landscape) {
    height: 40vh;
  }

  @media screen and (min-width: ${LAPTOP + 1}px) {
    height: 55vh;
  }
`;

export const mapStyles = [
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "transit",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "landscape",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "road",
    elementType: "labels",
    stylers: [{ visibility: "on" }],
  },
];

const WrapperMarkerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: "SEATBCN-Condensed", sans-serif;
  padding: 1vw 1vw;

  img {
    position: absolute;
    width: 20%;
    height: 20%;
    top: 5%;
    left: 10%;
  }

  h3 {
    font-weight: 900;
    font-size: 1.7em;
    margin: 0 0 10px 0;
  }

  p {
    font-size: 1.2em;
    margin: 0;
  }
`;

export { WrapperMarkerInfo };
export default MapContainer;
