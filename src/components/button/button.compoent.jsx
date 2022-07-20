import React from "react";
import { ButtonComponent, ButtonPlus, Buttontext } from "./button.style";

const Button = ({ btnType, children }) => {
  return (
    <ButtonComponent type={btnType}>
      {/* <ButtonPlus /> */}
      <Buttontext>{children}</Buttontext>
    </ButtonComponent>
  );
};

export default Button;
