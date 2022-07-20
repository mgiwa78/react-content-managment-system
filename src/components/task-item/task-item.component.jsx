import React from "react";
import {
  TaskItemContainer,
  TaskItemSubTitle,
  TaskItemTitle,
} from "./task-item.styles";

const TaskItem = ({ task }) => {
  const { title, subtasks } = task;
  return (
    <TaskItemContainer>
      <TaskItemTitle>{title}</TaskItemTitle>
      <TaskItemSubTitle>0 of {subtasks.length} substasks</TaskItemSubTitle>
    </TaskItemContainer>
  );
};

export default TaskItem;
