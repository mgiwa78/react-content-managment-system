import styled from "styled-components/macro";

export const DeleteContainer = styled.div`
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
  &.create_board {
    margin-top: 0px !important;
  }
  max-width: 480px;
  @media screen and (min-width: 500px) {
    padding: 35px;
  }
`;

export const DeleteType = styled.div`
  color: #ea5555;
  font-size: 18px;
  margin-bottom: 20px;
`;
export const Deletetext = styled.p`
  font-size: 13px;
  color: #828fa3;
  line-height: px;
  margin-bottom: 20px;
`;
