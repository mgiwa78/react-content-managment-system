import styled from "styled-components/macro";
import { ReactComponent as LightSvg } from "../../assets/icon-light-theme.svg";
import { ReactComponent as DarkSvg } from "../../assets/icon-dark-theme.svg";
import { ReactComponent as PeekSvg } from "../../assets/icon-hide-sidebar.svg";

export const BoardsMenuContainer = styled.div`
  width: 264px;
  height: 322px;
  position: relative;
  z-index: 10;
  top: 0px;
  margin-top: 150px;
  /* transform: translateX(-50%); */
  box-shadow: 0px 5px 5px 4px #364e7e20;
  border-radius: 8px;
  background-color: #2b2c37;
  padding: 20px;
  /* display: none; */
  align-items: flex-start;
  flex-direction: column;

  @media screen and (min-width: 700px) {
    justify-content: space-between;
    z-index: 4;
    left: 0;
    top: 0px;

    margin-top: 80px;
    border-radius: 0;
    transform: none;
    position: fixed;
    box-shadow: none;
    padding: 40px 0 0 0px;
    font-size: 15px;
    overflow: hidden;
    z-index: 8;
    display: flex;
    justify-content: space-between;

    width: 261px;
    height: 100%;
    border-right: 2px solid #3e3f4e;
  }
  @media screen and (min-width: 1000px) {
    width: 300px;
  }
`;
export const BoardsItems = styled.div`
  @media screen and (min-width: 700px) {
    margin-top: 15px;
  }
`;
export const BoardsMenuTitle = styled.span`
  color: #828fa3;
  margin-bottom: 10px;
  font-size: 12px;
  letter-spacing: 1.8px;
  @media screen and (min-width: 700px) {
    font-size: 15px;
    height: 40px;
    letter-spacing: 2.7px;
    padding-left: 30px;
  }
  @media screen and (min-width: 1000px) {
    padding-left: 50px;
  }
`;
export const Boarditems = styled.div`
  width: 100%;
  padding-left: 15px;
  display: flex;
  justify-items: flex-start;
  align-items: center;
  margin-bottom: 5px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  height: 48px;
  @media screen and (min-width: 700px) {
    padding-left: 30px;
  }
  @media screen and (min-width: 1000px) {
    padding-left: 50px;
  }
`;
export const BoardsMenuitem = styled(Boarditems)`
  color: #828fa3;

  &&:hover {
    color: white;
    background-color: #635fc7;

    .bullet {
      background-color: #fff;
    }
  }
`;

export const BoardsMenuAdditem = styled(Boarditems)`
  color: #635fc7;
  font-weight: 500;
  .add_bullet {
    background-color: #635fc7;
  }
`;

export const BoardsItemName = styled.span``;
export const BoardsAdditemName = styled.span``;
export const BoardsItemBullet = styled.span`
  width: 16px;
  height: 16px;
  background-color: #828fa3;
  border-radius: 2px;
  margin-right: 10px;
`;
export const BoardsAdditemBullet = styled.span`
  width: 16px;
  height: 16px;
  background-color: #828fa3;
  border-radius: 2px;
  margin-right: 10px;
`;

export const BoardsMenuitemContainer = styled.div`
  width: 100%;
  position: relative;
  @media screen and (min-width: 700px) {
    text-align: left;
  }
`;
export const BoardermenuBottom = styled.div`
  width: 100%;
  bottom: 100px;
  @media screen and (min-width: 700px) {
    width: 100%;
    position: relative;
    padding: 20px 20px;
    margin-left: -20px;
  }
`;
export const StyleModeToggle = styled.div`
  width: 100%;
  background-color: #20212c;
  border-radius: 6px;
  height: 48px;
  padding: 0 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (min-width: 700px) {
    width: 80%;
    padding: 0 10px;
    width: 180px;
    margin-left: 25px;

    position: relative;
  }
`;
export const Toggle = styled.div``;
export const LightIcon = styled(LightSvg)``;
export const DarkIcon = styled(DarkSvg)``;
export const PeekIcon = styled(PeekSvg)`
  margin-right: 10px;
`;
export const PeekText = styled.span`
  line-height: 10px;
`;
export const TogglePeek = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: max-content;
  margin-top: 10px;
  width: 100%;
  padding: 15px;
  text-align: left;
  color: #828fa3;
  font-weight: 600;

  &:hover {
    background-color: #fff;
    color: black;
  }
  @media screen and (min-width: 700px) {
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    padding-left: 30px;
  }
  @media screen and (min-width: 1000px) {
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
    padding-left: 30px;
  }
`;
