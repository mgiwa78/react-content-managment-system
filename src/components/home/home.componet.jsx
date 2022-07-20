import React from "react";
import BoardsDirectory from "../board-directory/board-directory.component";
import BoardsMenu from "../boards-menu/boards-menu.component";
import EmptyMsg from "../empty-msg/emptymsg.component";
import Navigation from "../navigation/navigaiton.component";
import OverlayContainer from "../overlaycontainer/overlay.component";
import { GlobalStyle, HomeContainer, HomeDisplay } from "./home.styles";
import fullData from "../../data.json";

const Home = () => {
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
            <BoardsMenu />
          </OverlayContainer> */}
          <BoardsMenu className="desktop" />
          <BoardsDirectory boards={boardsDirData} />
          {/* <EmptyMsg></EmptyMsg> */}
        </HomeDisplay>
      </HomeContainer>
    </>
  );
};

export default Home;
