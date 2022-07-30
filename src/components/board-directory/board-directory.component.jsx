import React, { useEffect, useState } from "react";
import BoardColumn from "../board-column/board-column.component";
import {
  AddBoardContainer,
  BoardDirectoryContainer,
} from "./board-directory.styles";
import { useSelector, useDispatch } from "react-redux";
import {
  SelectBoardsArray,
  SelectBoardsObject,
} from "../../store/boards/board.selector";

import { useParams } from "react-router-dom";
import {
  setBoardsAction,
  setBoardsArrayAction,
  setBoardsObjectAction,
} from "../../store/boards/board.action";
import { defaultStyle } from "../../assets/defaultStyles";
import { SelectStlyeMode } from "../../store/style/style.selector";
const BoardsDirectory = () => {
  const BoardsObject = useSelector(SelectBoardsObject);
  const BoardsArray = useSelector(SelectBoardsArray);

  const dispatch = useDispatch();
  const param = useParams();

  const [boards, setBoards] = useState([]);

  useEffect(() => {
    if (Object.keys(BoardsObject).length === 0) return;
    if (Object.keys(BoardsArray).length === 0) return;
    const { boardpage } = param;
    setBoards(BoardsObject[boardpage]);
  }, [BoardsArray, param]);

  const StyleState = useSelector(SelectStlyeMode);

  const [bgStyle, setBgStyle] = useState({ ...defaultStyle });
  useEffect(() => {
    if (!bgStyle) return;
    if (!StyleState) return;
    setBgStyle(StyleState);
  }, [StyleState]);

  return (
    <BoardDirectoryContainer>
      {boards?.name ? (
        boards.columns.map((column) => (
          <BoardColumn key={column.name} columns={column} />
        ))
      ) : (
        <AddBoardContainer style={{ ...bgStyle.psudo }}>
          + New Column
        </AddBoardContainer>
      )}
    </BoardDirectoryContainer>
  );
};

export default BoardsDirectory;
