import React from "react";
import Button from "../button/button.compoent";
import FormInput, { TextAreaInput } from "../form-input/form-input.component";
import {
  EditTaskContainer,
  EditTaskDesctription,
  EditTaskDropdownOption,
  EditTaskDropdownSelect,
  EditTaskDropdownTitle,
  EditTaskStatusSection,
  EditTaskSubTaskBox,
  EditTaskSubTaskCancel,
  EditTaskSubTaskSection,
  EditTaskSubTaskTitle,
  EditTaskTitle,
} from "./edit-task.style";

const EditTask = () => {
  return (
    <EditTaskContainer>
      <EditTaskTitle>Add new task</EditTaskTitle>

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

      <EditTaskSubTaskSection>
        <EditTaskSubTaskTitle> Subtasks</EditTaskSubTaskTitle>
        <EditTaskSubTaskBox>
          <FormInput
            placeholder={"Enter Title"}
            name={"title"}
            value={"Enter title"}
          />
          {/* <EditTaskSubTaskTitle></EditTaskSubTaskTitle> */}
          <EditTaskSubTaskCancel />
        </EditTaskSubTaskBox>
        <EditTaskSubTaskBox>
          <FormInput
            placeholder={"Enter Title"}
            name={"title"}
            value={"Enter title"}
          />
          {/* <EditTaskSubTaskTitle></EditTaskSubTaskTitle> */}
          <EditTaskSubTaskCancel />
        </EditTaskSubTaskBox>
        <EditTaskSubTaskBox>
          <FormInput
            placeholder={"Enter Title"}
            name={"title"}
            value={"Enter title"}
          />
          {/* <EditTaskSubTaskTitle></EditTaskSubTaskTitle> */}
          <EditTaskSubTaskCancel />
        </EditTaskSubTaskBox>
        <Button btnType="inverted">+ Edit New Subtask</Button>
      </EditTaskSubTaskSection>
      <EditTaskStatusSection>
        <EditTaskDropdownTitle>Status</EditTaskDropdownTitle>
        <EditTaskDropdownSelect>
          <EditTaskDropdownOption>Todo</EditTaskDropdownOption>
          <EditTaskDropdownOption>Done</EditTaskDropdownOption>
          <EditTaskDropdownOption>Doing</EditTaskDropdownOption>
        </EditTaskDropdownSelect>
        <Button btnType="normal">Create Task</Button>
      </EditTaskStatusSection>
    </EditTaskContainer>
  );
};

export default EditTask;
