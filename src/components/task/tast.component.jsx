import React from "react";
import {
  CheckBoxIcon,
  TaskCheckBox,
  TaskCheckBoxIcon,
  TaskCheckBoxName,
  TaskCheckIconBox,
  TaskContainer,
  TaskContainerBottom,
  TaskContainerTop,
  TaskDescription,
  TaskDropdown,
  TaskDropdownOption,
  TaskDropdownSelect,
  TaskDropdownTitle,
  TaskSubtasksTitle,
  TaskTitle,
} from "./task.style";

const Task = () => {
  return (
    <TaskContainer>
      <TaskContainerTop>
        <TaskTitle>
          Research pricing points of various competitors and trial different
          business models
        </TaskTitle>
        <TaskDescription>
          We know what we're planning to build for version one. Now we need to
          finalise the first pricing model we'll use. Keep iterating the
          subtasks until we have a coherent proposition.
        </TaskDescription>
      </TaskContainerTop>
      <TaskContainerBottom>
        <TaskSubtasksTitle>Subtasks (2 of 3)</TaskSubtasksTitle>
        <TaskCheckBox>
          <TaskCheckIconBox style={{ backgroundColor: "#635fc7" }}>
            {" "}
            <CheckBoxIcon />
          </TaskCheckIconBox>

          <TaskCheckBoxName>
            Research competitor pricing and business models
          </TaskCheckBoxName>
        </TaskCheckBox>
        <TaskCheckBox>
          <TaskCheckIconBox style={{ backgroundColor: "#635fc7" }}>
            {" "}
            <CheckBoxIcon />
          </TaskCheckIconBox>

          <TaskCheckBoxName>Surveying</TaskCheckBoxName>
        </TaskCheckBox>
        <TaskCheckBox>
          <TaskCheckIconBox style={{ backgroundColor: "#fff" }}>
            {" "}
            <CheckBoxIcon />
          </TaskCheckIconBox>

          <TaskCheckBoxName>
            Outline a business model that works for our solution
          </TaskCheckBoxName>
        </TaskCheckBox>
        <TaskDropdown>
          <TaskDropdownTitle>Current Status</TaskDropdownTitle>
          <TaskDropdownSelect>
            <TaskDropdownOption>Doing</TaskDropdownOption>
            <TaskDropdownOption>Done</TaskDropdownOption>
            <TaskDropdownOption>Doing</TaskDropdownOption>
          </TaskDropdownSelect>
        </TaskDropdown>
      </TaskContainerBottom>
    </TaskContainer>
  );
};

export default Task;
