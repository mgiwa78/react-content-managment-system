import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { defaultStyle } from "../../assets/defaultStyles";
import {
  addNewBoardAction,
  setBoardsArrayAction,
  setBoardsObjectAction,
} from "../../store/boards/board.action";
import {
  SelectBoardsArray,
  SelectBoardsObject,
} from "../../store/boards/board.selector";
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
  AddBoardSubContainer,
  AddBoardTitle,
} from "./add-board.style";
import { ReactDOM } from "react";

const AddBoard = ({ onExit }) => {
  const BoardsArray = useSelector(SelectBoardsArray);
  const BoardsObject = useSelector(SelectBoardsObject);
  const StyleState = useSelector(SelectStlyeMode);
  const dispatch = useDispatch();

  const [bgStyle, setBgStyle] = useState({ ...defaultStyle });
  useEffect(() => {
    if (!bgStyle) return;
    if (!StyleState) return;
    setBgStyle(StyleState);
  }, [StyleState]);

  const defaultValues = {
    boardName: "",
  };

  const [formFields, setFormFields] = useState({
    boardName: "",
  });
  const { boardName } = formFields;

  const colValues = {
    column0Name: "",
  };
  const [colFields, setColFields] = useState({ ...colValues });
  const { column0Name } = colFields;

  const handelInputChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: [value] });
  };
  const handelSubInputChange = (e) => {
    const { name, value } = e.target;
    setColFields({ ...colFields, [name]: [value] });
  };

  const handleAddBoardSubmit = () => {
    const columnKeys = Object.keys(colFields);
    const columnsArray = [];
    columnKeys.forEach((columnKey) =>
      columnsArray.push({ name: colFields[columnKey][0] })
    );

    const newBoard = {
      name: boardName[0],
      columns: columnsArray,
    };
    console.log(newBoard);

    dispatch(addNewBoardAction(newBoard, BoardsObject));
  };

  const subColumn = (
    <AddBoardSubBoardBox key={"column0Name"}>
      <FormInput
        color={bgStyle.id}
        handleChange={(e) => handelSubInputChange(e)}
        placeholder={"Enter Title"}
        name="column0Name"
        value={colValues[column0Name]}
      />
      {/* <AddTaskSubTaskTitle></AddTaskSubTaskTitle> */}
      <AddBoardSubBoardCancel />
    </AddBoardSubBoardBox>
  );

  const AddColumnBox = () => {
    const Colname = `column${columns.length + 1}Name`;
    const newColumn = (
      <AddBoardSubBoardBox key={Colname}>
        <FormInput
          color={bgStyle.id}
          handleChange={(e) => handelSubInputChange(e)}
          placeholder={"Enter Title"}
          name={`${Colname}`}
          value={colValues[Colname]}
        />
        {/* <AddTaskSubTaskTitle></AddTaskSubTaskTitle> */}
        <AddBoardSubBoardCancel />
      </AddBoardSubBoardBox>
    );

    SetColumns([...columns, newColumn]);
  };
  const [columns, SetColumns] = useState([subColumn]);

  return (
    <OverlayContainer onExit={onExit}>
      <AddBoardContainer style={{ ...bgStyle.elements }}>
        <AddBoardTitle style={{ color: bgStyle.elements.color }}>
          Add new Board
        </AddBoardTitle>
        <FormInput
          handleChange={(e) => handelInputChange(e)}
          color={bgStyle.id}
          placeholder={"e.g. Web Design"}
          label={"Board Name"}
          name={"boardName"}
          value={boardName}
        />
        <AddBoardSubBoardSection>
          <AddBoardSubBoardTitle style={{ ...bgStyle.elements }}>
            {" "}
            Board Colums
          </AddBoardSubBoardTitle>
          <AddBoardSubContainer id="sub_component">
            {columns.map((column) => column)}
          </AddBoardSubContainer>

          <Button handleClick={(e) => AddColumnBox(e)} btnType="inverted">
            + Add New SubBoard
          </Button>
        </AddBoardSubBoardSection>
        <Button
          handleClick={() => handleAddBoardSubmit()}
          className="create_board"
          btnType="normal"
        >
          Create Board
        </Button>
      </AddBoardContainer>
    </OverlayContainer>
  );
};

export default AddBoard;
