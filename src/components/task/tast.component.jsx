import React, { useState } from "react";
import { SelectDrp } from "../form-input/form-input.component";
import OverlayContainer from "../overlaycontainer/overlay.component";
import { OverLayContainerDiv } from "../overlaycontainer/overlay.styles";
import {
  CheckBoxIcon,
  MenuBtnDrpDwnItem,
  MenuBtnDrpDwnOption,
  MenutrailIcon,
  MenutrailIconBox,
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

const Task = ({ task }) => {
  console.log(task);
  const [optionDrp, setOptionDrp] = useState(false);
  const handleSetOptionDrp = () => {
    setOptionDrp(!optionDrp);
  };
  return (
    <OverlayContainer>
      <TaskContainer>
        <TaskContainerTop>
          <TaskTitle>
            {task.title}

            <MenutrailIconBox onClick={() => handleSetOptionDrp()}>
              <MenutrailIcon />
            </MenutrailIconBox>
          </TaskTitle>

          {optionDrp ? (
            <MenuBtnDrpDwnOption>
              <MenuBtnDrpDwnItem itemType="normal">
                Edit Board
              </MenuBtnDrpDwnItem>
              <MenuBtnDrpDwnItem itemType="red">Delete Board</MenuBtnDrpDwnItem>
            </MenuBtnDrpDwnOption>
          ) : (
            ""
          )}
          <TaskDescription>{task.description}</TaskDescription>
        </TaskContainerTop>
        <TaskContainerBottom>
          <TaskSubtasksTitle>Subtasks (2 of 3)</TaskSubtasksTitle>
          {task.subtasks.map((subtask) => (
            <TaskCheckBox
              key={subtask.title}
              className={`checked ${subtask.isCompleted && "complete"}`}
            >
              <TaskCheckIconBox
                className="check-icon-box"
                style={
                  subtask.isCompleted
                    ? { backgroundColor: "#635fc7" }
                    : { backgroundColor: "#fff" }
                }
              >
                {" "}
                <CheckBoxIcon />
              </TaskCheckIconBox>
              <TaskCheckBoxName>{subtask.title}</TaskCheckBoxName>
            </TaskCheckBox>
          ))}

          <TaskDropdown>
            <TaskDropdownTitle>Current Status</TaskDropdownTitle>
            <SelectDrp items={["Doing", "Done", "Todo"]}></SelectDrp>
          </TaskDropdown>
        </TaskContainerBottom>
      </TaskContainer>
    </OverlayContainer>
  );
};

export default Task;
