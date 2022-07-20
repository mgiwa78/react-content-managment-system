import styled from "styled-components/macro";

export const BoardsColumnContainer = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-items: flex-start;
  align-items: flex-start;
  align-content: center;
  height: inherit;
  width: max-content;
  /* border: solid 2px yellow; */
  max-height: 600px;
  margin-right: 30px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const BoardsColumnsTitleColour = styled.span``;
export const BoardsColumnsTitle = styled.span`
  font-size: 12px;
  margin-bottom: 10px;
  text-transform: capitalize;
  padding-left: 5px;
  color: #828fa3;
  letter-spacing: 1.6px;
`;