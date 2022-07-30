import React, { useEffect, useMemo, useState } from "react";
import { SelectStlyeMode } from "../../store/style/style.selector";
import TaskItem from "../task-item/task-item.component";
import {
  BoardsColumnContainer,
  BoardsColumnsTitle,
  BoardsColumnsTitleColour,
} from "./board-column.styles";
import { useSelector } from "react-redux";
import { defaultStyle } from "../../assets/defaultStyles";

const BoardColumn = ({ columns }) => {
  const { name, tasks } = columns;
  const StyleState = useSelector(SelectStlyeMode);

  const [Style, setStyles] = useState({ ...defaultStyle });
  useEffect(() => {
    if (!Style) return;
    if (!StyleState) return;
    setStyles(StyleState);
  }, [StyleState]);

  return (
    <BoardsColumnContainer>
      <BoardsColumnsTitle>
        <BoardsColumnsTitleColour
          style={{ backgroundColor: "blue" }}
        ></BoardsColumnsTitleColour>
        {name?.toUpperCase()}
      </BoardsColumnsTitle>
      {tasks?.map((task) => (
        <TaskItem task={task} key={task.title} />
      ))}
    </BoardsColumnContainer>
  );
};

export default BoardColumn;
