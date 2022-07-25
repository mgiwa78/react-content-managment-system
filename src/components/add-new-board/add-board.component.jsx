import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { defaultStyle } from "../../assets/defaultStyles";
import { SelectStlyeMode } from "../../store/style/style.selector";
import Button from "../button/button.compoent";
import FormInput, { TextAreaInput } from "../form-input/form-input.component";
import OverlayContainer from "../overlaycontainer/overlay.component";
import {
  AddBoardContainer,
  AddBoardSubBoardBox,
  AddBoardSubBoardCancel,
  AddBoardSubBoardSection,
  AddBoardSubBoardTitle,
  AddBoardTitle,
} from "./add-board.style";

const AddBoard = ({ onExit }) => {
  const StyleState = useSelector(SelectStlyeMode);

  const [bgStyle, setBgStyle] = useState({ ...defaultStyle });
  useEffect(() => {
    if (!bgStyle) return;
    if (!StyleState) return;
    setBgStyle(StyleState);
  }, [StyleState]);

  return (
    <OverlayContainer onExit={onExit}>
      <AddBoardContainer style={{ ...bgStyle.elements }}>
        <AddBoardTitle style={{ color: bgStyle.elements.color }}>
          Add new Board
        </AddBoardTitle>
        <FormInput
          color={bgStyle.elements.color}
          placeholder={"e.g. Web Design"}
          label={"Board Name"}
          name={"title"}
          value={"Enter title"}
        />
        <AddBoardSubBoardSection>
          <AddBoardSubBoardTitle style={{ ...bgStyle.elements }}>
            {" "}
            Board Colums
          </AddBoardSubBoardTitle>
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
    </OverlayContainer>
  );
};

export default AddBoard;
