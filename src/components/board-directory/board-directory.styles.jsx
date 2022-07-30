import styled from "styled-components/macro";

export const BoardDirectoryContainer = styled.div`
  display: flex;
  width: max-content;
  min-width: calc(100vw - 350px);
  position: relative;
  overflow-x: scroll;
  /* border: solid 2px red; */
`;
export const AddBoardContainer = styled.div`
  height: inherit;
  border-radius: 6px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #635fc7;

  background-color: #e9effa49;

  min-height: calc(100vh - 250px);
  /* border: solid 2px red; */
`;
