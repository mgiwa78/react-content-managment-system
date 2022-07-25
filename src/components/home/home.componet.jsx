import React, { useEffect, useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { setTasksAction } from "../../store/country/task.action";
import HideIcon from "../hide icon/hide-icon.component";
import { SetViewMode } from "../../store/style/style.action";
import { SelectStlyeMode } from "../../store/style/style.selector";
import { defaultStyle } from "../../assets/defaultStyles";
const Home = () => {
  const dispatch = useDispatch();

  const StyleState = useSelector(SelectStlyeMode);

  const [bgStyle, setBgStyle] = useState({ ...defaultStyle });
  useEffect(() => {
    if (!bgStyle) return;
    if (!StyleState) return;
    setBgStyle(StyleState);
  }, [StyleState]);

  useState(() => {
    dispatch(setTasksAction(fullData));
    dispatch(SetViewMode({ ...defaultStyle }));
  }, []);
  console.log("home");

  // const [styleId, setStyleId] = useState("dark");

  // const [styleMode, setStyleMode] = useState(defaultStyle);
  // useEffect(() => {
  //   if (!styleMode) return;
  //   dispatch(SetViewMode(defaultStyle));
  // }, []);

  const [boardNav, SetboardNav] = useState(false);
  const handleState = () => {
    SetboardNav(!boardNav);
  };

  const [boardsMenu, setBoardsMenuState] = useState(false);
  const handlesetBoardsMenuState = () => {
    setBoardsMenuState(!boardsMenu);
  };

  console.log(bgStyle);

  return (
    <>
      {" "}
      <GlobalStyle />
      <HomeContainer style={{ backgroundColor: bgStyle.backgroundColor }}>
        <Navigation />

        <HideIcon className="desktop" handleClick={handlesetBoardsMenuState} />
        <HomeDisplay>
          {boardsMenu ? (
            // <OverlayContainer handleClick={handlesetBoardsMenuState}>
            <BoardsMenu handleHideMenu={handlesetBoardsMenuState} />
          ) : (
            // </OverlayContainer>
            ""
          )}
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
