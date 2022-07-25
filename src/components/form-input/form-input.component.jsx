import React, { useState } from "react";
import {
  ErrorText,
  FormInputContainer,
  FormInputLabel,
  Input,
  SelectDrpContainer,
  SelectDrpOptiionContainer,
  SelectDrpOptiionItem,
  SelectDrpOptionContainer,
  SelectDrpOptionItem,
  SelectDrpValue,
  TextAraInput,
  TextInput,
} from "./form-input.styles";

const FormInput = ({ color, placeholder, name, label, value }) => {
  return (
    <FormInputContainer>
      <FormInputLabel color={color}>{label}</FormInputLabel>
      <TextInput
        color={color}
        // className="red"
        placeholder={`${placeholder}`}
        type={"text"}
        name={name}
      ></TextInput>
    </FormInputContainer>
  );
};
export const TextAreaInput = ({ style, placeholder, name, label, value }) => {
  return (
    <FormInputContainer>
      <FormInputLabel>{label}</FormInputLabel>
      <TextAraInput placeholder={`${placeholder}`} type={"text"} name={name} />
    </FormInputContainer>
  );
};
export const SelectDrp = ({ items }) => {
  const [drpState, setDrpState] = useState("none");
  const handleDropAction = () => {
    drpState === "none" ? setDrpState("block") : setDrpState("none");
  };
  const [drpValue, setValue] = useState("Select an option");
  const handleItemAction = (e) => {
    const newValue = e.target.textContent;
    setValue(newValue);
  };
  return (
    <SelectDrpContainer>
      <SelectDrpValue onClick={() => handleDropAction()}>
        {drpValue}
      </SelectDrpValue>
      <SelectDrpOptionContainer display={drpState}>
        {items.map((item) => (
          <SelectDrpOptionItem onClick={(e) => handleItemAction(e)} key={item}>
            {item}
          </SelectDrpOptionItem>
        ))}
      </SelectDrpOptionContainer>
    </SelectDrpContainer>
  );
};

export default FormInput;
