import React from "react";
import Button from "../button/button.compoent";
import FormInput, { TextAreaInput } from "../form-input/form-input.component";
import {
  AddBoardContainer,
  AddBoardSubBoardBox,
  AddBoardSubBoardCancel,
  AddBoardSubBoardSection,
  AddBoardSubBoardTitle,
  AddBoardTitle,
} from "./add-board.style";

const AddBoard = () => {
  return (
    <AddBoardContainer>
      <AddBoardTitle>Add new Board</AddBoardTitle>
      <FormInput
        placeholder={"e.g. Web Design"}
        label={"Board Name"}
        name={"title"}
        value={"Enter title"}
      />
      <AddBoardSubBoardSection>
        <AddBoardSubBoardTitle> Board Colums</AddBoardSubBoardTitle>
        <AddBoardSubBoardBox>
          <FormInput
            placeholder={"Enter Title"}
            name={"title"}
            value={"Enter title"}
          />
          {/* <AddBoardSubBoardTitle></AddBoardSubBoardTitle> */}
          <AddBoardSubBoardCancel />
        </AddBoardSubBoardBox>
        <AddBoardSubBoardBox>
          <FormInput
            placeholder={"Enter Title"}
            name={"title"}
            value={"Enter title"}
          />
          {/* <AddBoardSubBoardTitle></AddBoardSubBoardTitle> */}
          <AddBoardSubBoardCancel />
        </AddBoardSubBoardBox>

        <Button btnType="inverted">+ Add New SubBoard</Button>
      </AddBoardSubBoardSection>
      <Button className="create_board" btnType="normal">
        Create Board
      </Button>
    </AddBoardContainer>
  );
};

export default AddBoard;
