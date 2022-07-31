import React, { useState } from "react";
import { StyleReducer } from "../../store/style/style.reducer";
import {
  CheckBoxIcon,
  TaskCheckBoxContainer,
  TaskCheckBoxName,
  TaskCheckIconBox,
} from "./taskcheckbox.sytyles";

const TaskCheckBox = ({ style, subtask }) => {
  const [tastStatus, setTaskStatus] = useState(subtask.isCompleted);
  const handleTaskUpdate = () => {
    setTaskStatus(!tastStatus);
  };
  return (
    <TaskCheckBoxContainer
      onClick={() => handleTaskUpdate()}
      styleState={style.id}
      key={subtask.title}
      className={` ${tastStatus && "complete"}`}
    >
      <TaskCheckIconBox
        styleState={style.id}
        className={`check-icon-box ${tastStatus && "checked"}`}
      >
        {" "}
        <CheckBoxIcon />
      </TaskCheckIconBox>
      <TaskCheckBoxName>{subtask.title}</TaskCheckBoxName>
    </TaskCheckBoxContainer>
  );
};

export default TaskCheckBox;
