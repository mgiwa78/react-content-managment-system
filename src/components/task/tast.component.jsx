import React, { useEffect, useState } from "react";
import { defaultStyle } from "../../assets/defaultStyles";
import { SelectStlyeMode } from "../../store/style/style.selector";
import { SelectDrp } from "../form-input/form-input.component";
import OverlayContainer from "../overlaycontainer/overlay.component";
import { OverLayContainerDiv } from "../overlaycontainer/overlay.styles";
import {
  CheckBoxIcon,
  MenuBtnDrpDwnItem,
  MenuBtnDrpDwnOption,
  MenutrailIcon,
  MenutrailIconBox,
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

import { useSelector } from "react-redux";
import TaskCheckBox from "../task-checkbox/taskcheckbox.component";

const Task = ({ task, taskStyles }) => {
  const StyleState = useSelector(SelectStlyeMode);

  //
  //
  //
  const [optionDrp, setOptionDrp] = useState(false);
  const handleSetOptionDrp = () => {
    setOptionDrp(!optionDrp);
  };
  //
  //
  //
  const [drpState, setDrpState] = useState("none");
  const handleDropAction = () => {
    drpState === "none" ? setDrpState("block") : setDrpState("none");
  };

  const [drpValue, setValue] = useState("Select an option");
  const handleItemAction = (e) => {
    const newValue = e.target.textContent;
    setValue(newValue);
  };
  //
  //
  //

  const [Style, setStyles] = useState({ ...defaultStyle });
  useEffect(() => {
    if (!Style) return;
    if (!StyleState) return;
    setStyles(StyleState);
  }, [StyleState]);
  const { color, backgroundColor } = Style.elements;

  return (
    <OverlayContainer>
      <TaskContainer style={{ backgroundColor }}>
        <TaskContainerTop>
          <TaskTitle style={{ color }}>
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
          <TaskSubtasksTitle style={{ color }}>
            Subtasks (2 of 3)
          </TaskSubtasksTitle>
          {task.subtasks.map((subtask) => (
            <TaskCheckBox key={subtask.title} subtask={subtask} style={Style} />
          ))}

          {
            // <TaskCheckBox
            //   styleState={Style.id}
            //   key={subtask.title}
            //   className={` ${subtask.isCompleted && "complete"}`}
            // >
            //   <TaskCheckIconBox
            //     styleState={Style.id}
            //     className={`check-icon-box ${subtask.isCompleted && "checked"}`}
            //   >
            //     {" "}
            //     <CheckBoxIcon />
            //   </TaskCheckIconBox>
            //   <TaskCheckBoxName>{subtask.title}</TaskCheckBoxName>
            // </TaskCheckBox>}}}
          }

          <TaskDropdown>
            <TaskDropdownTitle>Current Status</TaskDropdownTitle>
            <SelectDrp
              colorStyle={Style.elements.color}
              handleItemAction={(e) => handleItemAction(e)}
              dropState={drpState}
              setValue={() => setValue()}
              handleDropDownAction={() => handleDropAction()}
              dropDownValue={drpValue}
              items={["Doing", "Done", "Todo"]}
            ></SelectDrp>
          </TaskDropdown>
        </TaskContainerBottom>
      </TaskContainer>
    </OverlayContainer>
  );
};

export default Task;
