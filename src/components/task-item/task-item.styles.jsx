import styled from "styled-components/macro";
export const TaskItemContainer = styled.div`
  width: 280px;
  height: max-content;
  padding: 20px 5px 20px 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 8px;
  background-color: #2b2c37;
  margin-bottom: 20px;
  box-shadow: 0px 2px 9px 2px #364e7e27;
`;
export const TaskItemTitle = styled.span`
  font-size: 15px;
  margin-bottom: 10px;
  color: white;
`;
export const TaskItemSubTitle = styled.span`
  font-size: 12px;
  color: #828fa3;
`;
