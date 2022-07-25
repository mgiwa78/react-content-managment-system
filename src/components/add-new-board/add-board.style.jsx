import styled from "styled-components/macro";
import { ReactComponent as CancelSvg } from "../../assets/icon-cross.svg";

export const AddBoardContainer = styled.div`
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

  max-width: 480px;
  @media screen and (min-width: 500px) {
    padding: 35px;
  }
`;
export const AddBoardTitle = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
  font-weight: 300;
`;
export const AddBoardSubBoardSection = styled.div`
  margin-top: 15px;
`;
export const AddBoardSubBoardBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const AddBoardSubBoardTitle = styled.h6`
  font-size: 12px;
  font-weight: normal;
`;
export const AddBoardSubBoardCancel = styled(CancelSvg)``;
