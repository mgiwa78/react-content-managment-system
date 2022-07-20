import styled from "styled-components/macro";
import { ReactComponent as PlusSvg } from "../../assets/icon-add-task-mobile.svg";

export const ButtonComponent = styled.button`
  background-color: #635fc7;
  border-radius: 24px;
  height: 48px;
  width: 174px;
  border: none;
`;
export const Buttontext = styled.span`
  font-size: 15px;
  color: white;
`;
export const ButtonPlus = styled(PlusSvg)``;
