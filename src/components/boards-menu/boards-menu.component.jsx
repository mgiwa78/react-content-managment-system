import React, { useEffect, useState } from "react";
import {
  SelectBoardsArray,
  SelectBoardsObject,
  SelectTaskObject,
} from "../../store/boards/board.selector";
import OverlayContainer from "../overlaycontainer/overlay.component";
import {
  BoardermenuBottom,
  BoardsAdditemBullet,
  BoardsAdditemName,
  BoardsItemBullet,
  BoardsItemName,
  BoardsItems,
  BoardsMenuAdditem,
  BoardsMenuContainer,
  BoardsMenuitem,
  BoardsMenuitemContainer,
  BoardsMenuTitle,
  DarkIcon,
  LightIcon,
  PeekIcon,
  PeekText,
  StyleModeToggle,
  TogglePeek,
} from "./boards-menu.styles";
import { Navigate, Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {
  setBoardsAction,
  setBoardsObjectAction,
} from "../../store/boards/board.action";
import AddBoard from "../add-new-board/add-board.component";
import { SetViewMode } from "../../store/style/style.action";
import { SelectStlyeMode } from "../../store/style/style.selector";
import { styleModes } from "../../assets/defaultStyles";

const BoardsMenu = ({ handleHideMenu, desktop }) => {
  const dispatch = useDispatch();

  const StyleState = useSelector(SelectStlyeMode);

  const boardsArray = useSelector(SelectBoardsArray);

  const [boardsItems, setBoardItems] = useState([]);

  const [addBoardDisplayState, SetAddboardDisplayState] = useState(false);
  const handleSetAddboardDisplayState = (e) => {
    SetAddboardDisplayState(!addBoardDisplayState);
  };

  const [styleMode, setStyleMode] = useState(styleModes.dark);
  const handleSetStyleMode = () => {
    if (styleMode.id !== "light") {
      setStyleMode(styleModes.light);
    } else {
      setStyleMode(styleModes.dark);
    }
  };

  useEffect(() => {
    if (!StyleState) return;
    if (StyleState.id !== styleMode.id) {
      dispatch(SetViewMode(styleMode));
    }
  }, [styleMode]);

  useEffect(() => {
    if (!boardsArray) return;
    setBoardItems(boardsArray);
  }, [boardsArray]);

  return (
    <>
      <BoardsMenuContainer
        className={desktop ? `desktop` : "mobile"}
        style={{ ...styleMode.elements, borderColor: styleMode.nav.borderC }}
      >
        <BoardsMenuitemContainer>
          <BoardsMenuTitle>ALL BOARDS (3)</BoardsMenuTitle>
          <BoardsItems>
            {boardsItems.map((board) => (
              <BoardsMenuitem
                as={Link}
                to={`/${board.name.toLowerCase().split(" ").join("")}`}
                key={board.name}
              >
                <BoardsItemBullet className="bullet" />{" "}
                <BoardsItemName>{board.name}</BoardsItemName>
              </BoardsMenuitem>
            ))}

            <BoardsMenuAdditem onClick={() => handleSetAddboardDisplayState()}>
              <BoardsAdditemBullet className="add_bullet" />{" "}
              <BoardsAdditemName>+ Create New Board</BoardsAdditemName>
            </BoardsMenuAdditem>
          </BoardsItems>
        </BoardsMenuitemContainer>
        <BoardermenuBottom>
          <StyleModeToggle
            style={{ backgroundColor: styleMode.toggle }}
            onClick={() => handleSetStyleMode()}
          >
            <DarkIcon />
            <LightIcon />
          </StyleModeToggle>
          <TogglePeek onClick={() => handleHideMenu()} className="desktop">
            <PeekIcon />
            <PeekText>Hide Sidebar</PeekText>
          </TogglePeek>
        </BoardermenuBottom>
      </BoardsMenuContainer>
      {addBoardDisplayState ? (
        <AddBoard onExit={handleSetAddboardDisplayState} />
      ) : (
        ""
      )}
    </>
  );
};

export default BoardsMenu;
