import styled from "styled-components/macro";
import { ReactComponent as CancelSvg } from "../../assets/icon-cross.svg";

export const EditTaskContainer = styled.div`
  width: 200px;
  font-size: 12px;
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
  @media screen and (min-width: 500px) {
    padding: 35px;
  }
`;
export const EditTaskTitle = styled.div`
  color: white;
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 300;
`;
export const EditTaskDesctription = styled.input``;
export const EditTaskSubTaskSection = styled.div`
  margin-top: 15px;
`;
export const EditTaskStatusSection = styled.div``;
export const EditTaskSubTaskBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const EditTaskSubTaskTitle = styled.h6`
  font-size: 12px;
  font-weight: normal;
  color: white;
`;
export const EditTaskSubTaskCancel = styled(CancelSvg)``;
export const EditTaskDropdown = styled.div`
  margin-bottom: 5px;
`;
export const EditTaskDropdownOption = styled.option``;
export const EditTaskDropdownSelect = styled.select`
  margin-bottom: 15px;
  height: 40px;
  padding: 0px 10px;
  background-color: transparent;
  border-radius: 5px;
  border: solid 1px #828fa33d;
  color: white;

  width: 100%;
`;
export const EditTaskDropdownTitle = styled.div`
  margin-bottom: 5px;
  color: white;
  font-size: 12px;
  font-weight: 300;
`;
