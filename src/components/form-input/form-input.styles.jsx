import styled, { css } from "styled-components/macro";

export const FormInputContainer = styled.div``;
export const TextInput = styled.input`
  background-color: transparent;
  width: 100%;
  border: 1px solid #828fa357;
  padding: 10px 15px;
  margin-bottom: 10px;
  border-radius: 4px;
  ${({ color }) => {
    if (color === "dark")
      return css`
        background-color: transparent;
        color: #fff;

        &::placeholder {
          color: #c4c4c440;
        }
      `;
    else
      return css`
        color: #000;
        &::placeholder {
          color: #0000009d;
        }
      `;
  }}

  @media screen and (min-width: 360px) {
    min-width: 260px;
  }
  @media screen and (min-width: 415px) {
    min-width: 300px;
  }
  @media screen and (min-width: 500px) {
    min-width: 370px;
  }
  &.red {
    border-color: red;
    .errorText {
      display: block;
      color: red;
    }
  }
`;
export const ErrorText = styled.span`
  font-size: 12px;
`;
export const TextAraInput = styled.textarea`
  ${({ color }) => {
    if (color === "dark")
      return css`
        color: #fff;

        background-color: transparent;
        &::placeholder {
          color: #c4c4c440;
        }
      `;
    else
      return css`
        color: #000;
        &::placeholder {
          color: #00000068;
        }
      `;
  }}
  width: 100%;
  border: 1px solid #828fa357;
  padding: 10px 15px;
  border-radius: 4px;
  height: 150px;
  line-height: 19px;
  resize: none;
`;
export const FormInputLabel = styled.p`
  font-size: 12px;
  letter-spacing: 1px;
  margin-bottom: 5px;
  font-weight: 600;

  text-transform: capitalize;
`;
export const SelectDrpContainer = styled.div``;
export const SelectDrpValue = styled.h4`
  padding: 12px 10px;
  margin-bottom: 19px;

  font-size: 15px;
  font-weight: 300;
  border: 1px solid #828fa357;
  border-radius: 4px;
  &:hover {
    border-color: #635fc7;
  }
`;
export const SelectDrpOptionContainer = styled.ul`
  position: absolute;
  background-color: #20212c;
  color: #828fa3;
  box-shadow: 0px 0px 6px 2px #36437e44;

  list-style: none;

  border-radius: 8px;
  ${({ display }) =>
    css`
      display: ${display};
    `}

  @media screen and (min-width: 360px) {
    min-width: 260px;
  }
  @media screen and (min-width: 415px) {
    min-width: 300px;
  }
  @media screen and (min-width: 500px) {
    min-width: 370px;
  }
`;
export const SelectDrpOptionItem = styled.li`
  font-size: 15px;
  cursor: pointer;

  padding: 8px 20px;
`;
