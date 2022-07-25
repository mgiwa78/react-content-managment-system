import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OverlayContainer from "../overlaycontainer/overlay.component";
import { OverLayContainerDiv } from "../overlaycontainer/overlay.styles";
import Task from "../task/tast.component";
import {
  TaskItemContainer,
  TaskItemSubTitle,
  TaskItemTitle,
} from "./task-item.styles";
import { defaultStyle } from "../../assets/defaultStyles";
import { SetViewMode } from "../../store/style/style.action";
import { SelectStlyeMode } from "../../store/style/style.selector";

const TaskItem = ({ task }) => {
  const [displayTask, setDisplayTask] = useState(false);
  const { title, subtasks } = task;

  const handleTaskClick = (e) => {
    setDisplayTask(!displayTask);
  };
  const dispatch = useDispatch();

  const StyleState = useSelector(SelectStlyeMode);

  const [bgStyle, setBgStyle] = useState({ ...defaultStyle });
  useEffect(() => {
    if (!bgStyle) return;
    if (!StyleState) return;
    setBgStyle(StyleState);
  }, [StyleState]);

  return (
    <>
      <TaskItemContainer
        style={{ ...bgStyle.taskItemBox }}
        onClick={(e) => handleTaskClick(e)}
      >
        <TaskItemTitle style={{ color: bgStyle.color }} className="task_title">
          {title}
        </TaskItemTitle>
        <TaskItemSubTitle>0 of {subtasks.length} substasks</TaskItemSubTitle>
      </TaskItemContainer>
      {displayTask ? <Task task={task} /> : ""}
    </>
  );
};

export default TaskItem;
