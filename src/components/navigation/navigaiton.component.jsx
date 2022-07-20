import React, { useState } from "react";
import BoardsMenu from "../boards-menu/boards-menu.component";
import HideIcon from "../hide icon/hide-icon.component";
import OverlayContainer from "../overlaycontainer/overlay.component";
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
  MenuBtnDrpDwn,
  MenuBtnDrpDwnItem,
  MenuBtnDrpDwnOption,
  MenuBtnDrpIconBox,
  MenutrailIconBox,
} from "./navigation.styles";

const Navigation = () => {
  const [boardNav, SetboardNav] = useState(false);
  const handleMenuDrpDwn = (e) => {
    e.preventDefault();
    SetboardNav(!boardNav);
  };

  const [optionDrp, setOptionDrp] = useState(false);
  const handleSetOptionDrp = () => {
    setOptionDrp(!optionDrp);
  };
  return (
    <>
      <MenuComponent>
        {boardNav ? (
          <OverlayContainer handleClick={handleMenuDrpDwn}>
            <BoardsMenu />
          </OverlayContainer>
        ) : (
          ""
        )}

        <MenuConstainerLeft>
          <MobileLogoIcon className="mobile"></MobileLogoIcon>
          <DesktopLogoBox className="desktop">
            <DesktopLogoIcon />
          </DesktopLogoBox>
          <MenuText>Platform Launch</MenuText>
          <MenuBtnDrpIconBox>
            <MenuBtnDrpIcon
              onClick={(e) => handleMenuDrpDwn(e)}
              className="mobile"
            />
          </MenuBtnDrpIconBox>
        </MenuConstainerLeft>
        <MenuConstainerRight>
          <MenuBtnPlusIconBox>
            <PlusIcon className="mobile" />
            <PlusBtnText className="desktop">Add New Task</PlusBtnText>
          </MenuBtnPlusIconBox>
          <MenuBtnDrpDwn>
            <MenutrailIconBox onClick={() => handleSetOptionDrp()}>
              <MenutrailIcon />
            </MenutrailIconBox>
            {optionDrp ? (
              <MenuBtnDrpDwnOption>
                <MenuBtnDrpDwnItem itemType="normal">
                  Edit Board
                </MenuBtnDrpDwnItem>
                <MenuBtnDrpDwnItem itemType="red">
                  Delete Board
                </MenuBtnDrpDwnItem>
              </MenuBtnDrpDwnOption>
            ) : (
              ""
            )}
          </MenuBtnDrpDwn>
        </MenuConstainerRight>
      </MenuComponent>
    </>
  );
};

export default Navigation;
