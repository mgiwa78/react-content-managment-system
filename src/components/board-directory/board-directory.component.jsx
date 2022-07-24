import React, { useEffect, useState } from "react";
import BoardColumn from "../board-column/board-column.component";
import { BoardDirectoryContainer } from "./board-directory.styles";
import { useSelector, useDispatch } from "react-redux";
import {
  SelectBoardsObject,
  SelectTaskObject,
} from "../../store/country/task.selector";

import { useParams } from "react-router-dom";
import {
  setBoardsAction,
  setBoardsArrayAction,
  setBoardsObjectAction,
} from "../../store/country/task.action";
const BoardsDirectory = () => {
  const tasksObject = useSelector(SelectTaskObject);
  const boardsObject = useSelector(SelectBoardsObject);

  const dispatch = useDispatch();
  const param = useParams();

  const [boards, setBoards] = useState([]);

  useEffect(() => {
    if (!tasksObject) return;
    dispatch(setBoardsArrayAction(tasksObject.boards));

    dispatch(setBoardsObjectAction(tasksObject.boards));
  }, [tasksObject]);

  useEffect(() => {
    if (Object.keys(boardsObject).length === 0) return;
    const { boardpage } = param;
    setBoards(boardsObject[boardpage]);
  }, [boardsObject, param]);

  return (
    <BoardDirectoryContainer>
      {boards?.map((board) => (
        <BoardColumn key={board.name} board={board}></BoardColumn>
      ))}
    </BoardDirectoryContainer>
  );
};

export default BoardsDirectory;
