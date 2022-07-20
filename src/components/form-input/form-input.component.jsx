import React from "react";
import {
  FormInputContainer,
  FormInputLabel,
  Input,
  TextAraInput,
  TextInput,
} from "./form-input.styles";

const FormInput = ({ placeholder, name, label, value }) => {
  return (
    <FormInputContainer>
      <FormInputLabel>{label}</FormInputLabel>
      <TextInput placeholder={`${placeholder}`} type={"text"} name={name} />
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

export default FormInput;
