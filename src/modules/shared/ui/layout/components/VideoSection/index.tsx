import React, { useState } from "react";
import WrapperCodeVideo, { WrapperVideo } from "./styles/WrapperCodeVideo";

const VideoSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleVideoClick = () => {
    setShowVideo(!showVideo);
  };

  return (
    <WrapperCodeVideo>
      {showVideo ? (
        <iframe
          src='https://www.youtube.com/embed/P0Wwh8q4VTY?autoplay=1&modestbranding=1&controls=0&rel=0'
          title="Code video"
          allow="autoplay;"
          allowFullScreen
        ></iframe>
      ) : (
        <WrapperVideo onClick={handleVideoClick}>
          <img
            src="reel.svg"
            alt="reel"
            loading="lazy"
          />
        </WrapperVideo>
      )}
    </WrapperCodeVideo>
  );
};

export default VideoSection;
