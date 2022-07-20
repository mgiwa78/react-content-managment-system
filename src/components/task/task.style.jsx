import styled from "styled-components/macro";
import { ReactComponent as CheckSvg } from "../../assets/icon-check.svg";

export const TaskContainer = styled.div`
  width: 200px;
  background-color: #2b2c37;
  border-radius: 6px;
  position: relative;
  z-index: 9;
  height: max-content;
  width: 100%;
  padding: 20px;
  text-align: left;
  font-weight: 400;
  max-width: 480px;

  /* left: 50%; */
`;
export const TaskContainerTop = styled.div``;
export const TaskContainerBottom = styled.div`
  margin-top: 20px;
`;
export const TaskTitle = styled.span`
  font-size: 18px;
  color: white;
`;
export const TaskDescription = styled.p`
  font-size: 13px;
  letter-spacing: 1px;
  line-height: 17px;
  color: #828fa3;
  margin-top: 10px;
`;
export const TaskSubtasksTitle = styled.div`
  color: white;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0.7px;
  margin-bottom: 10px;
`;
export const TaskCheckBox = styled.div`
  width: 100%;
  margin-bottom: 10px;
  font-size: 12px;
  height: max-content;
  padding: 15px 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #20212c;
  border-radius: 4px;
`;
export const CheckBoxIcon = styled(CheckSvg)``;
export const TaskCheckIconBox = styled.div`
  width: 16px;
  padding-right: 2px;
  height: 16px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TaskCheckBoxName = styled.div`
  width: 100%;
  padding-left: 15px;
  color: white;
`;

export const TaskDropdown = styled.div`
  margin-bottom: 5px;
`;
export const TaskDropdownOption = styled.option``;
export const TaskDropdownSelect = styled.select`
  height: 40px;
  padding: 0px 10px;
  background-color: transparent;
  border-radius: 5px;
  border: solid 1px #828fa33d;
  color: white;

  width: 100%;
`;
export const TaskDropdownTitle = styled.div`
  margin-bottom: 5px;
  color: white;
  font-size: 12px;
  font-weight: 300;
`;
