import React, { useState } from "react";
import BoardsDirectory from "../board-directory/board-directory.component";
import BoardsMenu from "../boards-menu/boards-menu.component";
import EmptyMsg from "../empty-msg/emptymsg.component";
import Navigation from "../navigation/navigaiton.component";
import OverlayContainer from "../overlaycontainer/overlay.component";
import { GlobalStyle, HomeContainer, HomeDisplay } from "./home.styles";
import fullData from "../../data.json";
import Task from "../task/tast.component";
import AddTask from "../add task/add-task.component";
import EditTask from "../edit-task/edit-task.component";
import AddBoard from "../add-new-board/add-board.component";
import Delete from "../delete board/delete-board.comtainer";
import { useDispatch } from "react-redux";
import { setTasksAction } from "../../store/country/task.action";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(setTasksAction(fullData));

  const [boardNav, SetboardNav] = useState(false);
  const handleState = () => {
    SetboardNav(!boardNav);
  };
  const { boards } = fullData;
  const boardsDirData = boards[0];
  return (
    <>
      {" "}
      <GlobalStyle />
      <HomeContainer>
        <Navigation />
        <HomeDisplay>
          {/* <OverlayContainer>
            <Task />
          </OverlayContainer> */}
          {/* <OverlayContainer handleClick={handleState}>
            <AddTask />
          </OverlayContainer> */}
          {/* <OverlayContainer>
            <EditTask />
          </OverlayContainer> */}
          {/* <OverlayContainer>
            <AddBoard />
          </OverlayContainer> */}
          {/* <OverlayContainer>
            <Delete />
          </OverlayContainer> */}
          {/* <BoardsMenu className="desktop" /> */}
          <BoardsDirectory />
          {/* <EmptyMsg></EmptyMsg> */}
        </HomeDisplay>
      </HomeContainer>
    </>
  );
};

export default Home;
