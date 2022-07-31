import styled, { css } from "styled-components/macro";
import { ReactComponent as CheckSvg } from "../../assets/icon-check.svg";

export const TaskCheckBoxContainer = styled.div`
  width: 100%;
  margin-bottom: 10px;
  font-size: 12px;
  height: max-content;
  font-weight: 500;
  padding: 15px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;

  border-radius: 4px;
  /* &:hover {
    background-color: #635fc7;
  } */

  ${({ styleState }) => {
    if (styleState === "dark")
      return css`
        background-color: #20212c;
        color: #fff;

        &:hover {
          background-color: #635fc7;
          .checked {
            background-color: #20212c !important;
          }
        }
        &.complete {
          text-decoration: line-through;
          color: white;
        }
      `;
    else
      return css`
        background-color: #fff;
        &:hover {
          color: #fff !important;
          background-color: #635fc7;
        }
        &.complete {
          text-decoration: line-through;
        }
      `;
  }}
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

  ${({ styleState }) => {
    if (styleState === "dark")
      return css`
        background-color: #fff;

        &:hover {
          background-color: #fff;
        }
        &.checked {
          background-color: #635fc7;
        }
      `;
    else
      return css`
        background-color: #fff;
        border: 1px solid rgba(130, 143, 163, 0.25);
        border-radius: 2px;

        &:hover {
          background-color: #fff;
        }
        &.checked {
          border: none;

          background-color: #635fc7;
        }
      `;
  }}
`;
export const TaskCheckBoxName = styled.div`
  width: 100%;
  padding-left: 15px;
`;
