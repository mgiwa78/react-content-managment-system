import styled, { css } from "styled-components/macro";

export const OverLayContainerDiv = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  padding: 0 30px;
  background-color: #ffffff4a;
  z-index: 9;
  overflow: hidden;
  display: flex;

  @media screen and (min-width: 700px) {
    ${({ type }) =>
      type === "transparent"
        ? css`
            background-color: transparent;
          `
        : css`
            background-color: #0000004b;
          `}/* z-index: -4; */
  }
`;
