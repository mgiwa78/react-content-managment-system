import React, { useEffect, useState } from "react";
import Button from "../button/button.compoent";
import FormInput, { TextAreaInput } from "../form-input/form-input.component";
import OverlayContainer from "../overlaycontainer/overlay.component";
import {
  EditBoardAddSubTaskSection,
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
import { SelectBoardsObject } from "../../store/boards/board.selector";
import { useParams } from "react-router-dom";

const EditBoard = ({ onExit }) => {
  const BoardsObject = useSelector(SelectBoardsObject);
  const param = useParams();
  const defaultValues = {
    boardName: "",
  };

  const colValues = {};
  const [colFields, setColFields] = useState({ ...colValues });
  const { column0Name, ...otherCols } = colFields;

  const handelSubInputChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
  };
  const [formFields, setFormFields] = useState({ ...defaultValues });
  const { boardName } = formFields;

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

  const subColumn = (
    <EditBoardSubBoardBox key={"column0Name"}>
      <FormInput
        color={bgStyle.id}
        handleChange={(e) => handelSubInputChange(e)}
        placeholder={"Enter Title"}
        name="column0Name"
        value={colValues[column0Name]}
      />
      {/* <EditTaskSubTaskTitle></EditTaskSubTaskTitle> */}
      <EditBoardSubBoardCancel />
    </EditBoardSubBoardBox>
  );

  const AddColumnBox = () => {
    const Colname = `column${columns.length + 1}Name`;
    const newColumn = (
      <EditBoardSubBoardBox key={Colname}>
        <FormInput
          color={bgStyle.id}
          handleChange={(e) => handelSubInputChange(e)}
          placeholder={"Enter Title"}
          name={`${Colname}`}
          value={colValues[Colname]}
        />
        {/* <EditTaskSubTaskTitle></EditTaskSubTaskTitle> */}
        <EditBoardSubBoardCancel />
      </EditBoardSubBoardBox>
    );

    SetColumns([...columns, newColumn]);
  };
  const [columns, SetColumns] = useState([]);

  const [currentBoard, setCurrentBoard] = useState("none");

  useEffect(() => {
    const currentBoardObject = BoardsObject[param.boardpage];
    if (currentBoardObject?.name) setCurrentBoard(currentBoardObject);
  }, []);

  useEffect(() => {
    if (currentBoard === "none") return;
    updateColumns(currentBoard);
  }, [currentBoard]);

  const updateColumns = async (current) => {
    const colNames = {};
    console.log(colFields.boardName);
    setFormFields({ boardName: current.name });

    current.columns.forEach((coll, index) => {
      colNames[`column${index}Name`] = coll.name;
    });
    console.log(colNames);

    setColFields({ ...colNames });

    const arrayEmp = current.columns.map((coll, index) => {
      const Colname = `column${index}Name`;

      return (
        <EditBoardSubBoardBox key={Colname}>
          <FormInput
            color={bgStyle.id}
            handleChange={(e) => handelSubInputChange(e)}
            placeholder={"Enter Title"}
            name={`${Colname}`}
            value={colNames[Colname]}
          />
          {/* <EditTaskSubTaskTitle></EditTaskSubTaskTitle> */}
          <EditBoardSubBoardCancel />
        </EditBoardSubBoardBox>
      );
    });
    SetColumns([...arrayEmp]);
  };

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
          <EditBoardAddSubTaskSection>
            {columns.map((column) => column)}
          </EditBoardAddSubTaskSection>

          <Button handleClick={() => AddColumnBox()} btnType="inverted">
            + New SubBoard
          </Button>
        </EditBoardSubBoardSection>
        <Button className="create_board" btnType="normal">
          Create Board
        </Button>
      </EditBoardContainer>
    </OverlayContainer>
  );
};

export default EditBoard;
