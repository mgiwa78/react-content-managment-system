import styled from "styled-components/macro";

export const OverLayContainerDiv = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  left: 0;
  top: 0;
  padding: 0 30px;
  background-color: #00000070;
  z-index: 9;
  /* backdrop-filter: saturate(0.5); */
  overflow: hidden;
`;
