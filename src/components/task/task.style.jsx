import styled, { css } from "styled-components/macro";
import { ReactComponent as CheckSvg } from "../../assets/icon-check.svg";
import { ReactComponent as TrailSvg } from "../../assets/icon-vertical-ellipsis.svg";

export const TaskContainer = styled.div`
  width: 200px;
  background-color: #2b2c37;
  border-radius: 6px;
  position: relative;
  z-index: 90;
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
export const MenutrailIconBox = styled.div`
  width: 30px;
  height: max-content;
  right: 7px;
  top: 20px;
  position: absolute;
`;
export const MenutrailIcon = styled(TrailSvg)`
  margin-left: 10px;
  @media screen and (min-width: 700px) {
    margin-left: 20px;
  }
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
  /* &:hover {
    background-color: #635fc7;
  } */

  &.complete {
    text-decoration: line-through;
    color: white;
  }
  &:hover {
    background-color: #635fc7;
  }

  &.checked {
    &:hover {
      background-color: #635fc7;

      .check-icon-box {
        background-color: #2b2c37 !important;
      }
    }
  }
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
