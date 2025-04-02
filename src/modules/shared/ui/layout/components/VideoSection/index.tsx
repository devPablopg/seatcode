import React, { useState } from "react";
import WrapperCodeVideo, { CloseButton, WrapperVideo } from "./styles/WrapperCodeVideo";
import CloseIcon from "assets/img/icons/clearIcon.svg?react";

const VideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleVideoClick = () => {
    setShowVideo(!showVideo);
  };

  const handleCloseVideo = () => {
    setShowVideo(false);
  };

  return (
    <WrapperCodeVideo>
      {showVideo ? (
        <iframe
          src="https://www.youtube.com/embed/P0Wwh8q4VTY?autoplay=1&modestbranding=1&controls=0&rel=0"
          title="Code video"
          allow="autoplay;"
          allowFullScreen
        ></iframe>
      ) : (
        <WrapperVideo onClick={handleVideoClick}>
          <img src="reel.svg" alt="reel" loading="lazy" />
        </WrapperVideo>
      )}
      {showVideo && (
        <CloseButton data-testid="close-icon" onClick={handleCloseVideo}>
          <CloseIcon />
        </CloseButton>
      )}
    </WrapperCodeVideo>
  );
};

export default VideoSection;
