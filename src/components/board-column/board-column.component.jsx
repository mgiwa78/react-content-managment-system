import React from "react";
import TaskItem from "../task-item/task-item.component";
import {
  BoardsColumnContainer,
  BoardsColumnsTitle,
  BoardsColumnsTitleColour,
} from "./board-column.styles";

const BoardColumn = ({ board }) => {
  const { name, tasks } = board;
  return (
    <BoardsColumnContainer>
      <BoardsColumnsTitle>
        <BoardsColumnsTitleColour
          style={{ backgroundColor: "blue" }}
        ></BoardsColumnsTitleColour>
        {name.toUpperCase()}
      </BoardsColumnsTitle>
      {tasks.map((task) => (
        <TaskItem task={task} key={task.title} />
      ))}
    </BoardsColumnContainer>
  );
};

export default BoardColumn;
