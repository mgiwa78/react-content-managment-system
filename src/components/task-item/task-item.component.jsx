import React, { useState } from "react";
import OverlayContainer from "../overlaycontainer/overlay.component";
import { OverLayContainerDiv } from "../overlaycontainer/overlay.styles";
import Task from "../task/tast.component";
import {
  TaskItemContainer,
  TaskItemSubTitle,
  TaskItemTitle,
} from "./task-item.styles";

const TaskItem = ({ task }) => {
  const [displayTask, setDisplayTask] = useState(false);
  const { title, subtasks } = task;

  const handleTaskClick = (e) => {
    setDisplayTask(!displayTask);
  };

  return (
    <>
      <TaskItemContainer onClick={(e) => handleTaskClick(e)}>
        <TaskItemTitle className="task_title">{title}</TaskItemTitle>
        <TaskItemSubTitle>0 of {subtasks.length} substasks</TaskItemSubTitle>
      </TaskItemContainer>
      {displayTask ? <Task task={task} /> : ""}
    </>
  );
};

export default TaskItem;
