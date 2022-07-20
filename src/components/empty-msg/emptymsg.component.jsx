import Button from "../button/button.compoent";
import { EmptyMsgContainer, EmptyMsgText } from "./emptymsg.style";

const EmptyMsg = () => {
  return (
    <EmptyMsgContainer>
      <EmptyMsgText>
        This board is empty. Create a new column to get started.
      </EmptyMsgText>
      <Button />
    </EmptyMsgContainer>
  );
};

export default EmptyMsg;
