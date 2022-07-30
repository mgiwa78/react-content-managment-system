import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { defaultStyle } from "../../assets/defaultStyles";
import {
  setBoardsArrayAction,
  setNewTask,
} from "../../store/boards/board.action";
import { SelectBoardsObject } from "../../store/boards/board.selector";
import { SelectStlyeMode } from "../../store/style/style.selector";
import Button from "../button/button.compoent";
import FormInput, {
  SelectDrp,
  TextAreaInput,
} from "../form-input/form-input.component";
import OverlayContainer from "../overlaycontainer/overlay.component";
import { OverLayContainerDiv } from "../overlaycontainer/overlay.styles";
import {
  AddTaskContainer,
  AddTaskDesctription,
  AddTaskDropdownOption,
  AddTaskDropdownSelect,
  AddTaskDropdownTitle,
  AddTaskStatusSection,
  AddTaskSubTaskBox,
  AddTaskSubTaskCancel,
  AddTaskSubTaskSection,
  AddTaskSubTaskTitle,
  AddTaskTitle,
  SubTasksContainer,
} from "./add-task.style";
import { useDispatch } from "react-redux";

const AddTask = ({ onExit }) => {
  const dispatch = useDispatch();
  const StyleState = useSelector(SelectStlyeMode);
  const BoardsObject = useSelector(SelectBoardsObject);

  const [bgStyle, setBgStyle] = useState({ ...defaultStyle });
  useEffect(() => {
    if (!bgStyle) return;
    if (!StyleState) return;
    setBgStyle(StyleState);
  }, [StyleState]);

  const defaultValues = {
    taskName: "",
    description: "",
  };
  const SubTaskValues = {
    subTask1: "",
  };
  const [subTaskFields, setSubTaskFields] = useState({ ...SubTaskValues });
  const { subTask1 } = subTaskFields;
  const handelSubTaskInputChange = (e) => {
    const { name, value } = e.target;
    setSubTaskFields({ ...SubTaskValues, [name]: [value] });
  };

  const subTask = (
    <AddTaskSubTaskBox>
      <FormInput
        color={bgStyle.id}
        handleChange={(e) => handelSubTaskInputChange(e)}
        placeholder={"Enter Title"}
        name={"subTask1"}
        value={SubTaskValues[subTask1]}
      />
      {/* <AddTaskSubTaskTitle></AddTaskSubTaskTitle> */}
      <AddTaskSubTaskCancel />
    </AddTaskSubTaskBox>
  );

  const AddSubTaskBox = () => {
    const subTaskName = `column${subTasks.length + 1}Name`;
    const newSubTask = (
      <AddTaskSubTaskBox key={subTaskName}>
        <FormInput
          color={bgStyle.id}
          handleChange={(e) => handelSubTaskInputChange(e)}
          placeholder={"Enter Title"}
          name={`${subTaskName}`}
          value={SubTaskValues[subTaskName]}
        />
        {/* <AddTaskSubTaskTitle></AddTaskSubTaskTitle> */}
        <AddTaskSubTaskCancel />
      </AddTaskSubTaskBox>
    );

    setSubTasks([...subTasks, newSubTask]);
  };
  const [subTasks, setSubTasks] = useState([]);

  const [formFields, setFormFields] = useState({ ...defaultValues });
  const { description, taskName } = formFields;
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
  const handelInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: [value] });
  };
  const [currentBoard, setCurrentBoard] = useState("none");
  const param = useParams();
  useEffect(() => {
    const currentBoardObject = BoardsObject[param.boardpage];
    if (currentBoardObject?.name) setCurrentBoard(currentBoardObject);
  }, []);

  const handleCreateTask = () => {
    console.log(description);

    const subTaskKeys = Object.keys(subTaskFields);
    const subTaskArray = [];
    subTaskKeys.forEach((subTaskKey) =>
      subTaskArray.push({
        title: subTaskFields[subTaskKey][0],
        isCompleted: false,
      })
    );
    const newTask = {
      id: drpValue,
      data: {
        title: taskName[0],
        description: description[0],
        status: drpValue,
        subtasks: [...subTaskArray],
      },
    };
    console.log(newTask);
    dispatch(setNewTask(BoardsObject, newTask, currentBoard));
    dispatch(setBoardsArrayAction(BoardsObject));
  };

  useState(() => {
    if (!BoardsObject) return;
    console.log("change", BoardsObject);
  }, [BoardsObject]);

  const [boardDrpOptions, setBoardDrpOptions] = useState([]);
  useEffect(() => {
    if (!currentBoard.name) return;
    const boardDrpArray = [];
    currentBoard.columns.forEach((column) => boardDrpArray.push(column.name));
    setBoardDrpOptions(boardDrpArray);
  }, [currentBoard]);

  return (
    <OverlayContainer onExit={onExit}>
      <AddTaskContainer style={{ ...bgStyle.elements }}>
        <AddTaskTitle>Add new task</AddTaskTitle>
        <FormInput
          handleChange={(e) => handelInputChange(e)}
          color={bgStyle.id}
          placeholder={"Enter Title"}
          label={"Task Title"}
          name={"taskName"}
          value={taskName}
        />
        <TextAreaInput
          label={"description"}
          handleChange={(e) => handelInputChange(e)}
          name={"description"}
          value={description}
          color={bgStyle.id}
          placeholder={
            "e.g. It’s always good to take a break. This 15 minute break will  recharge the batteries a little."
          }
        />

        <AddTaskSubTaskSection>
          <AddTaskSubTaskTitle> Subtasks</AddTaskSubTaskTitle>
          <SubTasksContainer>
            {subTasks.map((subtask) => subtask)}
          </SubTasksContainer>

          <Button handleClick={() => AddSubTaskBox()} btnType="inverted">
            + Add New Subtask
          </Button>
        </AddTaskSubTaskSection>
        <AddTaskStatusSection>
          <AddTaskDropdownTitle style={{ ...bgStyle.elements }}>
            Status
          </AddTaskDropdownTitle>
          <SelectDrp
            colorStyle={bgStyle.elements.color}
            handleItemAction={(e) => handleItemAction(e)}
            dropState={drpState}
            setValue={() => setValue()}
            handleDropDownAction={() => handleDropAction()}
            dropDownValue={drpValue}
            items={[...boardDrpOptions]}
          ></SelectDrp>

          <Button handleClick={() => handleCreateTask()} btnType="normal">
            Create Task
          </Button>
        </AddTaskStatusSection>
      </AddTaskContainer>
    </OverlayContainer>
  );
};

export default AddTask;
