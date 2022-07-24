import React from "react";
import { HideIconContainer, HideSvgIcon } from "./hide-icon.styles";

const HideIcon = ({ handleClick }) => {
  return (
    <HideIconContainer onClick={() => handleClick()}>
      <HideSvgIcon />
    </HideIconContainer>
  );
};

export default HideIcon;
