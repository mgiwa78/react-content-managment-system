import React, { useEffect, useState } from "react";
import AddTask from "../add task/add-task.component";
import BoardsMenu from "../boards-menu/boards-menu.component";
import EditBoard from "../edit board/edit-board.component";
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
    // e.preventDefault();

    SetboardNav(!boardNav);
  };
  const [boardsMenu, setBoardsMenuState] = useState(false);
  const handlesetBoardsMenuState = () => {
    setBoardsMenuState(!boardsMenu);
  };

  const [optionDrp, setOptionDrp] = useState(false);
  const handleSetOptionDrp = () => {
    setOptionDrp(!optionDrp);
  };

  const [addTaskDisplay, setAddTaskDisplay] = useState(false);
  const handleAddTaskDisplay = (e) => {
    setAddTaskDisplay(!addTaskDisplay);
  };

  const [editBoardDisplayState, SetEditBoardDisplayState] = useState(false);
  const handleSetEditBoardDisplayState = (e) => {
    SetEditBoardDisplayState(!editBoardDisplayState);
  };
  return (
    <>
      <MenuComponent>
        {boardNav ? (
          <OverlayContainer
            onExit={() => handleMenuDrpDwn()}
            type="transparent"
            handleClick={handleMenuDrpDwn}
          >
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
              onClick={() => handleMenuDrpDwn()}
              className="mobile"
            />
          </MenuBtnDrpIconBox>
        </MenuConstainerLeft>
        <MenuConstainerRight>
          <MenuBtnPlusIconBox onClick={(e) => handleAddTaskDisplay(e)}>
            <PlusIcon className="mobile" />
            <PlusBtnText className="desktop">Add New Task</PlusBtnText>
          </MenuBtnPlusIconBox>
          <MenuBtnDrpDwn>
            <MenutrailIconBox onClick={() => handleSetOptionDrp()}>
              <MenutrailIcon />
            </MenutrailIconBox>
            {optionDrp ? (
              <MenuBtnDrpDwnOption>
                <MenuBtnDrpDwnItem
                  onClick={() => handleSetEditBoardDisplayState()}
                  itemType="normal"
                >
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
      {addTaskDisplay ? <AddTask onExit={handleAddTaskDisplay} /> : ""}
      {editBoardDisplayState ? (
        <EditBoard onExit={handleSetEditBoardDisplayState} />
      ) : (
        ""
      )}
    </>
  );
};

export default Navigation;