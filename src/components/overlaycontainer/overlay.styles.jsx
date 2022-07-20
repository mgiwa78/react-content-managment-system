import styled from "styled-components/macro";

export const OverLayContainerDiv = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9;
  backdrop-filter: saturate(0.5);
  overflow: hidden;
`;
