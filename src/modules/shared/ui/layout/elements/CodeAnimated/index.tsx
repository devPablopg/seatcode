import React from "react";
import Title, {
  Circle,
  Em,
  LoaderContainer,
  PlanetLeft,
} from "./styles/WrapperCodeAnimation";

const CodeAnimation = () => {
  return (
    <Title>
      <Em>C</Em>
      <LoaderContainer>
        <Circle />
      </LoaderContainer>
      <PlanetLeft />
      <Em>D</Em>
      <Em>E</Em>
      <Em>.</Em>
    </Title>
  );
};

export default CodeAnimation;
