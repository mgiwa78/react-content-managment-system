import React from "react";
import Button from "../button/button.compoent";
import FormInput, { TextAreaInput } from "../form-input/form-input.component";
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
} from "./add-task.style";

const AddTask = () => {
  return (
    <AddTaskContainer>
      <AddTaskTitle>Add new task</AddTaskTitle>
      <FormInput
        placeholder={"Enter Title"}
        label={"title"}
        name={"title"}
        value={"Enter title"}
      />
      <TextAreaInput
        label={"description"}
        name={"title"}
        value={"Enter title"}
        placeholder={
          "e.g. It’s always good to take a break. This 15 minute break will  recharge the batteries a little."
        }
      />

      <AddTaskSubTaskSection>
        <AddTaskSubTaskTitle> Subtasks</AddTaskSubTaskTitle>
        <AddTaskSubTaskBox>
          <FormInput
            placeholder={"Enter Title"}
            name={"title"}
            value={"Enter title"}
          />
          {/* <AddTaskSubTaskTitle></AddTaskSubTaskTitle> */}
          <AddTaskSubTaskCancel />
        </AddTaskSubTaskBox>
        <AddTaskSubTaskBox>
          <FormInput
            placeholder={"Enter Title"}
            name={"title"}
            value={"Enter title"}
          />
          {/* <AddTaskSubTaskTitle></AddTaskSubTaskTitle> */}
          <AddTaskSubTaskCancel />
        </AddTaskSubTaskBox>
        <AddTaskSubTaskBox>
          <FormInput
            placeholder={"Enter Title"}
            name={"title"}
            value={"Enter title"}
          />
          {/* <AddTaskSubTaskTitle></AddTaskSubTaskTitle> */}
          <AddTaskSubTaskCancel />
        </AddTaskSubTaskBox>
        <Button btnType="inverted">+ Add New Subtask</Button>
      </AddTaskSubTaskSection>
      <AddTaskStatusSection>
        <AddTaskDropdownTitle>Status</AddTaskDropdownTitle>
        <AddTaskDropdownSelect>
          <AddTaskDropdownOption>Todo</AddTaskDropdownOption>
          <AddTaskDropdownOption>Done</AddTaskDropdownOption>
          <AddTaskDropdownOption>Doing</AddTaskDropdownOption>
        </AddTaskDropdownSelect>
        <Button btnType="normal">Create Task</Button>
      </AddTaskStatusSection>
    </AddTaskContainer>
  );
};

export default AddTask;
