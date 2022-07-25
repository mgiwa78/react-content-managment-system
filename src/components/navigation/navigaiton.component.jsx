import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTasksAction } from "../../store/country/task.action";
import { SetViewMode } from "../../store/style/style.action";
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
  DesktopLogoIconDark,
} from "./navigation.styles";

import { defaultStyle } from "../../assets/defaultStyles";
import { SelectStlyeMode } from "../../store/style/style.selector";
import { DarkIcon } from "../boards-menu/boards-menu.styles";
import { useParams } from "react-router-dom";

const Navigation = () => {
  const StyleState = useSelector(SelectStlyeMode);

  const dispatch = useDispatch();

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

  const [pgStyle, setPgStyle] = useState({ ...defaultStyle });
  useEffect(() => {
    if (!pgStyle) return;
    if (!StyleState) return;
    setPgStyle(StyleState);
  }, [StyleState]);

  const params = useParams();

  useState(() => {
    dispatch(SetViewMode({ ...defaultStyle }));
  }, []);
  console.log(params);
  return (
    <>
      <MenuComponent style={{ ...pgStyle.elements }}>
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
          <DesktopLogoBox
            style={{ borderColor: pgStyle.nav.borderC }}
            className="desktop"
          >
            {pgStyle.id === "dark" ? (
              <DesktopLogoIcon />
            ) : (
              <DesktopLogoIconDark />
            )}
          </DesktopLogoBox>
          <MenuText>
            {Object.keys(params).length ? params.boardpage : "Select a board"}
          </MenuText>
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
