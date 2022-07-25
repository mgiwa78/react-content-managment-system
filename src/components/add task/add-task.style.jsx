import styled from "styled-components/macro";
import { ReactComponent as CancelSvg } from "../../assets/icon-cross.svg";

export const AddTaskContainer = styled.div`
  width: 200px;
  font-size: 12px;
  border-radius: 6px;
  position: relative;
  z-index: 9;
  height: max-content;
  width: 100%;
  padding: 20px;
  max-width: 480px;

  text-align: left;
  font-weight: 400;
  @media screen and (min-width: 500px) {
    padding: 35px;
  }
`;
export const AddTaskTitle = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 300;
`;
export const AddTaskDesctription = styled.input``;
export const AddTaskSubTaskSection = styled.div`
  margin-top: 15px;
`;
export const AddTaskStatusSection = styled.div``;
export const AddTaskSubTaskBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const AddTaskSubTaskTitle = styled.h6`
  font-size: 12px;
  font-weight: normal;
`;
export const AddTaskSubTaskCancel = styled(CancelSvg)``;
export const AddTaskDropdown = styled.div`
  margin-bottom: 5px;
`;
export const AddTaskDropdownOption = styled.option``;
export const AddTaskDropdownSelect = styled.select`
  height: 40px;
  margin-bottom: 15px;
  padding: 0px 10px;
  background-color: transparent;
  border-radius: 5px;
  border: solid 1px #828fa33d;

  width: 100%;
`;
export const AddTaskDropdownTitle = styled.div`
  margin-bottom: 5px;
  font-size: 12px;
  font-weight: 300;
`;
