import React from "react";
import Button from "../button/button.compoent";
import { DeleteContainer, Deletetext, DeleteType } from "./delete-board.styles";

const Delete = ({ type = "board" }) => {
  return (
    <DeleteContainer>
      <DeleteType>Delete this {type}?</DeleteType>
      <Deletetext>
        Are you sure you want to delete the ‘Platform Launch’ board? This action
        will remove all columns and tasks and cannot be reversed.
      </Deletetext>
      <Button btnType={"delete"}> Delete</Button>
      <Button btnType={"inverted"}> Cancel</Button>
    </DeleteContainer>
  );
};

export default Delete;
