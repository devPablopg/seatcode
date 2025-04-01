import React from "react";
import LinkIcon from "assets/img/icons/link.svg?react";
import WrapperLink, { Icon, StyledLink } from "./styles/WrapperLink";

interface LinkProps {
  to: string;
  text: string;
  isRight?: boolean;
}

const Link = ({ to, text, isRight = false }: LinkProps) => {
  return (
    <WrapperLink>
      <StyledLink href={to}>{text}</StyledLink>
      <Icon $isRight={isRight}>
        <LinkIcon />
      </Icon>
    </WrapperLink>
  );
};

export default Link;
