import React from "react";
import WrapperCard, {
  EmptyParagraph,
  WrapperContent,
  WrapperImage,
  WrapperParagraph,
  WrapperSubtitle,
  WrapperTitle,
} from "./styles/WrapperCard";
import { INTRO, Paragraph, SRC_IMAGES_PREFIX } from "modules/shared/domain/Types";
import Link from "../../elements/Link";

interface ImageInfo {
  src: string;
  alt: string;
}

interface LinkInfo {
  to: string;
  text: string;
}
interface CardProps {
  isRight?: boolean;
  title: string;
  subtitle?: string;
  paragraph: Paragraph[];
  link?: LinkInfo;
  image: ImageInfo[];
}

const Card = ({
  isRight = false,
  title,
  subtitle,
  paragraph,
  link,
  image,
}: CardProps) => {
  return (
    <WrapperCard $isRight={isRight}>
      <WrapperContent $isRight={isRight}>
        <WrapperTitle>{title}</WrapperTitle>
        <WrapperSubtitle>{subtitle}</WrapperSubtitle>
        <WrapperParagraph $isRight={isRight}>
          {!!paragraph.length &&
            paragraph.map((phrase) => {
              return (
                <React.Fragment key={phrase.key}>
                  <span className={`${phrase.font}`}>
                    {phrase.text}
                  </span>
                  {phrase.key.includes(INTRO) && (
                    <EmptyParagraph />
                  )}
                </React.Fragment>
              );
            })}
        </WrapperParagraph>
        {link && <Link to={link.to} text={link.text} isRight={isRight} />}
      </WrapperContent>
      <WrapperImage $isRight={isRight}>
        {!!image.length &&
          image.map((img) => {
            return (
              <img
                key={img.alt}
                className={image.length === 2 ? "twice" : "single"}
                src={`${SRC_IMAGES_PREFIX}` + img.src}
                alt={img.alt}
                loading="lazy"
              />
            );
          })}
      </WrapperImage>
    </WrapperCard>
  );
};

export default Card;
