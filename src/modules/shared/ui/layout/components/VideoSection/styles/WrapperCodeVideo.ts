import { LAPTOP, WIDESCREEN_DESKTOP } from "modules/shared/domain/Breakpoints";
import styled, { keyframes } from "styled-components";

const coloring = keyframes`
  0% {
    opacity: 0;
    filter: grayscale(100%);
  }
  50% {
    filter: grayscale(80%);
}
`;

const pulseNeon = keyframes`
  0% {
    filter: drop-shadow(0 0 5px rgba(167, 249, 171, 0.7)) drop-shadow(0 0 10px rgba(167, 249, 171, 0.7)) drop-shadow(0 0 20px rgba(167, 249, 171, 0.7));
  }
  50% {
    filter: drop-shadow(0 0 10px rgba(167, 249, 171, 0.9)) drop-shadow(0 0 20px rgba(167, 249, 171, 0.9)) drop-shadow(0 0 40px rgba(167, 249, 171, 0.9));
  }
  100% {
    filter: drop-shadow(0 0 5px rgba(167, 249, 171, 0.7)) drop-shadow(0 0 10px rgba(167, 249, 171, 0.7)) drop-shadow(0 0 20px rgba(167, 249, 171, 0.7));
  }
`;

const WrapperCodeVideo = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  width: 90vw;
  margin: 0 auto;

  @media screen and (width >= ${LAPTOP}px) {
    width: 85vw;
    margin-bottom: -14vw;
  }

  @media screen and (width > ${WIDESCREEN_DESKTOP}px) {
    width: 85vw;
    margin: 20vw auto -14vw;
  }

  iframe {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0; 
    left: 0;
    border: none;

    @media screen and (width >= ${LAPTOP}px) {
      height: 75%;
    }
  }

  img {
    position: absolute;
    width: 8vw;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    animation: ${pulseNeon} 2s infinite ease-in-out;
  }
`;

const WrapperVideo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-image: url("/src/assets/img/seat/video.webp");
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
  background-size: cover;
  background-position: center;
  animation: ${coloring} 2000ms cubic-bezier(0.9, 0.7, 0.5, 0.9);

  @media screen and (min-width: ${LAPTOP}px) {
    height: 70%;
  }
`;

export { WrapperVideo };
export default WrapperCodeVideo;
