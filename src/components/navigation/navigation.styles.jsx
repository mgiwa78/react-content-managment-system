import styled, { css } from "styled-components/macro";
import { ReactComponent as ArrowSvg } from "../../assets/icon-chevron-down.svg";
import { ReactComponent as TrailSvg } from "../../assets/icon-vertical-ellipsis.svg";
import { ReactComponent as PlusSvg } from "../../assets/icon-add-task-mobile.svg";
import { ReactComponent as MobileLogoSvg } from "../../assets/logo-mobile.svg";
import { ReactComponent as DesktopLogoSvg } from "../../assets/logo-light.svg";

export const MenuComponent = styled.div`
  z-index: 8;
  display: flex;
  position: relative;
  justify-content: space-between;
  padding: 20px 15px;
  background-color: #2b2c37;
  width: 100%;
  height: 64px;
  .mobile {
    display: block;
  }
  .desktop {
    display: none;
  }

  @media screen and (min-width: 700px) {
    height: 80px;
    font-size: 20px;
    .mobile {
      display: none;
    }
    .desktop {
      display: block;
    }
  }
  @media screen and (min-width: 1000px) {
    padding: 20px 70px 20px 0;
    height: 94px;
  }
`;
export const MenuConstainerLeft = styled.div`
  display: flex;
  align-items: center;
`;
export const MenuConstainerRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: max-content;
`;
export const MenuIcon = styled.div``;
export const MenuText = styled.div`
  color: white;
`;
export const MobileLogoIcon = styled(MobileLogoSvg)`
  margin-right: 7px;
`;
export const DesktopLogoIcon = styled(DesktopLogoSvg)`
  margin-right: 7px;
`;
export const DesktopLogoBox = styled.div`
  width: 246px;
  padding-top: 28px;
  margin-right: 40px;
  text-align: left;

  border-right: solid 2px #3e3f4e;
  height: 80px;
  @media screen and (min-width: 700px) {
    padding-left: 14px;
    font-size: 15px;
  }
  @media screen and (min-width: 1000px) {
    margin-right: 70px;
    padding-left: 54px;

    width: 300px;
  }
`;
export const MenuBtnDrpIconBox = styled.div`
  width: 20px;
  display: flex;
  justify-content: center;
  height: 30px;
  align-items: center;
`;
export const MenuBtnDrpIcon = styled(ArrowSvg)`
  text-align: center;
`;
export const MenuBtnDrpDwn = styled.div`
  margin-left: 10px;
`;
export const MenuBtnDrpDwnOption = styled.ul`
  position: absolute;
  list-style: none;
  display: flex;
  /* display: flex; */
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  align-content: center;

  right: 15px;
  top: 65px;
  width: 194px;
  height: inherit;
  background-color: #20212c;
  border-radius: 8px;
  font-size: 13px;
  color: #828fa3;
  text-align: left;
  box-shadow: -2px 2px 4px #364e7e7f;
  @media screen and (min-width: 700px) {
  }
  @media screen and (min-width: 1000px) {
    right: 70px;
    top: 80px;
    font-size: 15px;
  }
`;
export const MenuBtnDrpDwnItem = styled.li`
  height: 46px;
  padding: 15px;
  border-radius: 5px;
  width: 100%;

  ${({ itemType }) => {
    if (itemType === "red")
      return css`
        color: #ea5555;
        &:hover {
          background-color: #ea5555;
          color: #fff;
        }
      `;
  }}
`;
export const MenuBtnPlusIconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #635fc7;
  border-radius: 24px;

  width: 48px;
  height: 32px;
  @media screen and (min-width: 700px) {
    height: 40px;
    width: 164px;
    color: white;
  }
`;
export const PlusBtnText = styled.span`
  font-size: 18px;
`;
export const PlusIcon = styled(PlusSvg)`
  width: 12px;
`;
export const MenutrailIconBox = styled.div`
  width: 30px;
  height: max-content;
`;
export const MenutrailIcon = styled(TrailSvg)`
  margin-left: 10px;
  @media screen and (min-width: 700px) {
    margin-left: 20px;
  }
`;
