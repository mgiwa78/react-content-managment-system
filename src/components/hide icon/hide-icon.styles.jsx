import styled from "styled-components/macro";
import { ReactComponent as HideIconSvg } from "../../assets/icon-show-sidebar.svg";

export const HideIconContainer = styled.div`
  width: 40px;
  height: 48px;
  background-color: #635fc7;
  position: absolute;
  bottom: 10px;
  border-top-right-radius: 60px;
  border-bottom-right-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const HideSvgIcon = styled(HideIconSvg)``;
