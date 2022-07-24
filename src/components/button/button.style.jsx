import styled, { css } from "styled-components/macro";
import { ReactComponent as PlusSvg } from "../../assets/icon-add-task-mobile.svg";

export const ButtonComponent = styled.button`
  background-color: #635fc7;
  border-radius: 24px;
  height: 48px;
  width: 174px;
  border: none;
  ${({ type }) => {
    if (type === "inverted")
      return css`
        background-color: #fff;
        border-radius: 24px;
        height: 40px;
        font-weight: 500;
        width: 100%;
        border: none;
        margin: 5px 0 15px 0;
        font-size: 13px;
        color: #635fc7;
        &:hover {
          cursor: pointer;

          background-color: #635fc7;
          color: #fff;
        }
      `;
    if (type === "normal")
      return css`
        background-color: #635fc7;
        height: 40px;
        font-weight: 400;
        width: 100%;

        color: #fff;
        &:hover {
          cursor: pointer;

          background-color: #fff;
          color: #635fc7;
          font-weight: 700;
        }
      `;
    if (type === "delete")
      return css`
        background-color: #ea5555;
        height: 40px;
        font-weight: 500;
        width: 100%;
        margin-bottom: 10px;

        color: #fff;
        &:hover {
          cursor: pointer;
          font-weight: 700;

          background-color: white;
          color: #ea5555;
        }
      `;
  }}
`;
export const Buttontext = styled.span``;
export const ButtonPlus = styled(PlusSvg)``;
