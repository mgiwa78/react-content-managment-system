import React from "react";
import { ButtonComponent, ButtonPlus, Buttontext } from "./button.style";

const Button = ({ handleClick, btnType, children }) => {
  return (
    <ButtonComponent onClick={handleClick} type={btnType}>
      {/* <ButtonPlus /> */}
      <Buttontext>{children}</Buttontext>
    </ButtonComponent>
  );
};

export default Button;
