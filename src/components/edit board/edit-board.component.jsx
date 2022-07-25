import React from "react";
import Button from "../button/button.compoent";
import FormInput, { TextAreaInput } from "../form-input/form-input.component";
import OverlayContainer from "../overlaycontainer/overlay.component";
import {
  EditBoardContainer,
  EditBoardSubBoardBox,
  EditBoardSubBoardCancel,
  EditBoardSubBoardSection,
  EditBoardSubBoardTitle,
  EditBoardTitle,
} from "./edit-board.style";

const EditBoard = ({ onExit }) => {
  return (
    <OverlayContainer onExit={onExit}>
      <EditBoardContainer>
        <EditBoardTitle>Edit new Board</EditBoardTitle>
        <FormInput
          placeholder={"e.g. Web Design"}
          label={"Board Name"}
          name={"title"}
          value={"Enter title"}
        />
        <EditBoardSubBoardSection>
          <EditBoardSubBoardTitle> Board Colums</EditBoardSubBoardTitle>
          <EditBoardSubBoardBox>
            <FormInput
              placeholder={"Enter Title"}
              name={"title"}
              value={"Enter title"}
            />
            {/* <EditBoardSubBoardTitle></EditBoardSubBoardTitle> */}
            <EditBoardSubBoardCancel />
          </EditBoardSubBoardBox>
          <EditBoardSubBoardBox>
            <FormInput
              placeholder={"Enter Title"}
              name={"title"}
              value={"Enter title"}
            />
            {/* <EditBoardSubBoardTitle></EditBoardSubBoardTitle> */}
            <EditBoardSubBoardCancel />
          </EditBoardSubBoardBox>

          <Button btnType="inverted">+ Edit New SubBoard</Button>
        </EditBoardSubBoardSection>
        <Button className="create_board" btnType="normal">
          Create Board
        </Button>
      </EditBoardContainer>
    </OverlayContainer>
  );
};

export default EditBoard;