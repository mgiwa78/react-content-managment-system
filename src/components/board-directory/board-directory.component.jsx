import React from "react";
import BoardColumn from "../board-column/board-column.component";
import { BoardDirectoryContainer } from "./board-directory.styles";

const BoardsDirectory = ({ boards }) => {
  console.log(boards);
  return (
    <BoardDirectoryContainer>
      {boards.columns.map((board) => (
        <BoardColumn key={board.name} board={board}></BoardColumn>
      ))}
    </BoardDirectoryContainer>
  );
};

export default BoardsDirectory;
