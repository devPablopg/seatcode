import React from "react";
import WrapperPartnerCard, { WrapperContent, WrapperImage, WrapperParagraph, WrapperTitle } from "./styles/WrapperPartnerCard";

interface ImageInfo {
  src: string;
  alt: string;
}

interface PartnerCardProps {
  title: string;
  paragraph: string;
  image: ImageInfo;
}

const PartnerCard = ({
  title,
  paragraph,
  image,
}: PartnerCardProps) => {
  return (
    <WrapperPartnerCard>
      <WrapperContent>
        <WrapperTitle>{title}</WrapperTitle>
        <WrapperParagraph>{paragraph}</WrapperParagraph>
      </WrapperContent>
      <WrapperImage>
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
        />
      </WrapperImage>
    </WrapperPartnerCard>
  );
};

export default PartnerCard;
