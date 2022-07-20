import React, { useState } from "react";
import OverlayContainer from "../overlaycontainer/overlay.component";
import {
  BoardermenuBottom,
  BoardsAdditemBullet,
  BoardsAdditemName,
  BoardsItemBullet,
  BoardsItemName,
  BoardsItems,
  BoardsMenuAdditem,
  BoardsMenuContainer,
  BoardsMenuitem,
  BoardsMenuitemContainer,
  BoardsMenuTitle,
  DarkIcon,
  LightIcon,
  PeekIcon,
  PeekText,
  StyleModeToggle,
  TogglePeek,
} from "./boards-menu.styles";

const BoardsMenu = () => {
  return (
    <BoardsMenuContainer>
      <BoardsMenuitemContainer>
        <BoardsMenuTitle>ALL BOARDS (3)</BoardsMenuTitle>
        <BoardsItems>
          <BoardsMenuitem>
            <BoardsItemBullet className="bullet" />{" "}
            <BoardsItemName>Platform Launch</BoardsItemName>
          </BoardsMenuitem>
          <BoardsMenuitem>
            <BoardsItemBullet className="bullet" />{" "}
            <BoardsItemName>Marketing Plan</BoardsItemName>
          </BoardsMenuitem>
          <BoardsMenuitem>
            <BoardsItemBullet className="bullet" />{" "}
            <BoardsItemName>Roadmap</BoardsItemName>
          </BoardsMenuitem>
          <BoardsMenuAdditem>
            <BoardsAdditemBullet className="add_bullet" />{" "}
            <BoardsAdditemName>+ Create New Board</BoardsAdditemName>
          </BoardsMenuAdditem>
        </BoardsItems>
      </BoardsMenuitemContainer>
      <BoardermenuBottom>
        <StyleModeToggle>
          <DarkIcon />
          <LightIcon />
        </StyleModeToggle>
        <TogglePeek className="desktop">
          <PeekIcon />
          <PeekText>Hide Sidebar</PeekText>
        </TogglePeek>
      </BoardermenuBottom>
    </BoardsMenuContainer>
  );
};

export default BoardsMenu;
