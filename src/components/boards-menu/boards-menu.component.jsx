import React, { useEffect, useState } from "react";
import {
  SelectBoardsArray,
  SelectTaskObject,
} from "../../store/country/task.selector";
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
import { setBoardsAction } from "../../store/country/task.action";
import AddBoard from "../add-new-board/add-board.component";

const BoardsMenu = ({ handleHideMenu }) => {
  const boardsArray = useSelector(SelectBoardsArray);

  const [boardsItems, setBoardItems] = useState([]);
  useEffect(() => {
    if (!boardsArray) return;
    setBoardItems(boardsArray);
  }, [boardsArray]);

  const [addBoardDisplayState, SetAddboardDisplayState] = useState(false);
  const handleSetAddboardDisplayState = (e) => {
    SetAddboardDisplayState(!addBoardDisplayState);
  };
  return (
    <>
      <BoardsMenuContainer>
        <BoardsMenuitemContainer>
          <BoardsMenuTitle>ALL BOARDS (3)</BoardsMenuTitle>
          <BoardsItems>
            {boardsItems.map((board) => (
              <BoardsMenuitem
                as={Link}
                to={`/${board.name.split(" ").join("")}`}
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
          <StyleModeToggle>
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
