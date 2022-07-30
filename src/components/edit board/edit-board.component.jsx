import React, { useEffect, useState } from "react";
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
import { defaultStyle } from "../../assets/defaultStyles";

import { useSelector } from "react-redux";
import { SelectStlyeMode } from "../../store/style/style.selector";
import { useDispatch } from "react-redux";

const EditBoard = ({ onExit }) => {
  const defaultValues = {
    boardName: "",
    column1Name: "",
    column2Name: "",
    column3Name: "",
  };
  const [formFields, setFormFields] = useState({ ...defaultValues });
  const { column2Name, column1Name, column3Name, boardName } = formFields;

  const handelInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: [value] });
  };
  //
  //
  const StyleState = useSelector(SelectStlyeMode);
  const dispatch = useDispatch();

  const [bgStyle, setBgStyle] = useState({ ...defaultStyle });
  useEffect(() => {
    if (!bgStyle) return;
    if (!StyleState) return;
    setBgStyle(StyleState);
  }, [StyleState]);

  return (
    <OverlayContainer onExit={onExit}>
      <EditBoardContainer style={{ ...bgStyle.elements }}>
        <EditBoardTitle>Edit Board</EditBoardTitle>
        <FormInput
          handleChange={(e) => handelInputChange(e)}
          color={bgStyle.id}
          placeholder={"e.g. Web Design"}
          label={"Board Name"}
          name={"boardName"}
          value={boardName}
        />
        <EditBoardSubBoardSection>
          <EditBoardSubBoardTitle> Board Colums</EditBoardSubBoardTitle>
          <EditBoardSubBoardBox>
            <FormInput
              placeholder={"Enter Title"}
              name={"column1Name"}
              value={column1Name}
              handleChange={(e) => handelInputChange(e)}
              color={bgStyle.id}
            />
            {/* <EditBoardSubBoardTitle></EditBoardSubBoardTitle> */}
            <EditBoardSubBoardCancel />
          </EditBoardSubBoardBox>
          <EditBoardSubBoardBox>
            <FormInput
              placeholder={"Enter Title"}
              name={"column2Name"}
              value={column2Name}
              handleChange={(e) => handelInputChange(e)}
              color={bgStyle.id}
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
