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
import { SetViewMode } from "../../store/style/style.action";
import { SelectStlyeMode } from "../../store/style/style.selector";

const BoardsMenu = ({ handleHideMenu }) => {
  const dispatch = useDispatch();

  const StyleState = useSelector(SelectStlyeMode);

  const styleModes = {
    dark: {
      id: "dark",
      backgroundColor: "#20212c",
      elements: {
        backgroundColor: "#2b2c37",
      },
      buttons: {
        inverted: {
          hover: { color: "#fff", backgroundColor: "#635fc7" },
          defaultState: { backgroundColor: "#fff", color: "#635fc7" },
        },
        normal: {
          defaultState: { color: "#fff", backgroundColor: "#635fc7" },
          hover: { backgroundColor: "#fff", color: "#635fc7" },
        },
        deleteTyp: {
          defaultState: { color: "#fff", backgroundColor: "#ea5555" },
          hover: { backgroundColor: "#fff", color: "#635fc7" },
        },
      },
    },
    light: {
      id: "light",
      backgroundColor: "#F4F7FD",
      elements: {
        backgroundColor: "#fff",
      },
      buttons: {
        inverted: {
          hover: { color: "#fff", backgroundColor: "#635fc7" },
          defaultState: { backgroundColor: "#fff", color: "#635fc7" },
        },
        normal: {
          defaultState: { color: "#fff", backgroundColor: "#635fc7" },
          hover: { backgroundColor: "#fff", color: "#635fc7" },
        },
        deleteTyp: {
          defaultState: { color: "#fff", backgroundColor: "#ea5555" },
          hover: { backgroundColor: "#fff", color: "#635fc7" },
        },
      },
    },
  };

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
          <StyleModeToggle onClick={() => handleSetStyleMode()}>
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
