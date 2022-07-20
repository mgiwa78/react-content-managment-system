import styled from "styled-components/macro";
import { ReactComponent as HideIconSvg } from "../../assets/icon-show-sidebar.svg";

export const HideIconContainer = styled.div`
  width: 56px;
  height: 48px;
  background-color: #635fc7;
  position: fixed;
  bottom: 40px;
  border-top-right-radius: 60px;
  border-bottom-right-radius: 60px;
  display: flex;
  justify-content: center;
`;
export const HideIcon = styled(HideIconSvg)``;
