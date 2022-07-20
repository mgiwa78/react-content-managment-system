import React from "react";
import {
  MenuBtnDrpIcon,
  PlusIcon,
  MenuComponent,
  MenuConstainerLeft,
  MenuConstainerRight,
  MenuText,
  MenutrailIcon,
  MenuBtnPlusIconBox,
  MobileLogoIcon,
  DesktopLogoIcon,
  DesktopLogoborder,
  DesktopLogoBox,
  PlusBtnText,
} from "./navigation.styles";

const Navigation = () => {
  return (
    <MenuComponent>
      <MenuConstainerLeft>
        <MobileLogoIcon className="mobile"></MobileLogoIcon>

        <DesktopLogoBox className="desktop">
          <DesktopLogoIcon />
        </DesktopLogoBox>
        <MenuText>Platform Launch</MenuText>
        <MenuBtnDrpIcon className="mobile" />
      </MenuConstainerLeft>
      <MenuConstainerRight>
        <MenuBtnPlusIconBox>
          <PlusIcon className="mobile" />
          <PlusBtnText className="desktop">Add New Task</PlusBtnText>
        </MenuBtnPlusIconBox>

        <MenutrailIcon></MenutrailIcon>
      </MenuConstainerRight>
    </MenuComponent>
  );
};

export default Navigation;
