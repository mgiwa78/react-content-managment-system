import styled from "styled-components/macro";
import { ReactComponent as ArrowSvg } from "../../assets/icon-chevron-down.svg";
import { ReactComponent as TrailSvg } from "../../assets/icon-vertical-ellipsis.svg";
import { ReactComponent as PlusSvg } from "../../assets/icon-add-task-mobile.svg";
import { ReactComponent as MobileLogoSvg } from "../../assets/logo-mobile.svg";
import { ReactComponent as DesktopLogoSvg } from "../../assets/logo-light.svg";

export const MenuComponent = styled.div`
  z-index: 8;
  display: flex;
  position: absolute;
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
  }
  @media screen and (min-width: 1000px) {
    margin-right: 70px;
    padding-left: 54px;

    width: 300px;
  }
`;
export const MenuBtnDrpIcon = styled(ArrowSvg)`
  margin-left: 10px;
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
export const PlusBtnText = styled.span``;
export const PlusIcon = styled(PlusSvg)`
  width: 12px;
`;
export const MenutrailIcon = styled(TrailSvg)`
  margin-left: 10px;
  @media screen and (min-width: 700px) {
    margin-left: 20px;
  }
`;
