import React, { useState, useEffect } from "react";
import WrapperAnimated from "./styles/WrapperAnimated";

const Animated = ({ animated }) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isBlinking, setIsBlinking] = useState(false);

  useEffect(() => {
    let timeout;
    if (isDeleting) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText.slice(0, prevText.length - 1));
      }, 100);
    } else {
      timeout = setTimeout(() => {
        if (currentText.length < animated[currentIndex].length) {
          setCurrentText(
            (prevText) => prevText + animated[currentIndex][prevText.length]
          );
        } else {
          setIsBlinking(true);
          setTimeout(() => setIsDeleting(true), 1000);
        }
      }, 70);
    }

    if (currentText === "" && isDeleting) {
      setIsDeleting(false);
      setIsBlinking(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % animated.length);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, animated]);

  return (
    <WrapperAnimated $isBlinking={isBlinking}>
      {currentText} <span className="cursor">|</span>
    </WrapperAnimated>
  );
};

export default Animated;
