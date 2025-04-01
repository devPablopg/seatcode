import React from "react";
import WrapperHeader, { WrapperNote, WrapperOverlay, WrapperSubtitle, WrapperTitle } from "./styles/WrapperHeader";
import FancyNavbar from "../Navbar";
import Animated from "../../elements/Animated";
import Particles from "../Particles";
import CodeAnimation from "../../elements/CodeAnimated";

interface HeaderProps {
  title: string;
  subTitle?: string;
  note?: string;
  animated?: string[];
}

const Header = ({ title, animated, subTitle, note }: HeaderProps) => {
  return (
    <WrapperHeader>
      <FancyNavbar />
      <Particles />
      <WrapperOverlay />
      <CodeAnimation />
      <WrapperTitle>{title}</WrapperTitle>
      {subTitle && (
        <WrapperSubtitle>
          {subTitle}
        </WrapperSubtitle>
      )}
      {!!animated && (
        <Animated animated={animated}></Animated>
      )}
      <WrapperNote>{note}</WrapperNote>
    </WrapperHeader>
  );
};

export default Header;
