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

const FormInput = ({
  handleChange,
  color,
  placeholder,
  name,
  label,
  value,
}) => {
  return (
    <FormInputContainer>
      <FormInputLabel color={color}>{label}</FormInputLabel>
      <TextInput
        onChange={handleChange}
        color={color}
        // className="red"
        placeholder={`${placeholder}`}
        type={"text"}
        name={name}
        value={value}
      />
    </FormInputContainer>
  );
};
export const TextAreaInput = ({
  style,
  placeholder,
  name,
  label,
  value,
  handleChange,
  color,
}) => {
  return (
    <FormInputContainer>
      <FormInputLabel>{label}</FormInputLabel>
      <TextAraInput
        color={color}
        value={value}
        onChange={handleChange}
        placeholder={`${placeholder}`}
        type={"text"}
        name={name}
      />
    </FormInputContainer>
  );
};
export const SelectDrp = ({
  items,
  dropDownValue,
  handleDropAction,
  setValue,
  handleDropDownAction,
  handleItemAction,
  ...otherPros
}) => {
  return (
    <SelectDrpContainer>
      <SelectDrpValue
        style={{ color: otherPros.colorStyle }}
        onClick={handleDropDownAction}
      >
        {dropDownValue}
      </SelectDrpValue>
      <SelectDrpOptionContainer
        onClick={(e) => handleItemAction(e)}
        display={otherPros.dropState}
      >
        {items.map((item) => (
          <SelectDrpOptionItem key={item}>{item}</SelectDrpOptionItem>
        ))}
      </SelectDrpOptionContainer>
    </SelectDrpContainer>
  );
};

export default FormInput;
