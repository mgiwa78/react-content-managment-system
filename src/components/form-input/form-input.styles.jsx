import styled from "styled-components/macro";

export const FormInputContainer = styled.div``;
export const TextInput = styled.input`
  background-color: transparent;
  color: #fff;
  width: 100%;
  border: 1px solid #828fa357;
  padding: 10px 15px;
  margin-bottom: 10px;
  border-radius: 4px;
  &::placeholder {
    color: #c4c4c440;
  }

  @media screen and (min-width: 360px) {
    min-width: 260px;
  }
  @media screen and (min-width: 415px) {
    min-width: 300px;
  }
  @media screen and (min-width: 500px) {
    min-width: 370px;
  }
`;
export const TextAraInput = styled.textarea`
  background-color: transparent;
  color: #fff;
  width: 100%;
  border: 1px solid #828fa357;
  padding: 10px 15px;
  border-radius: 4px;
  height: 150px;
  line-height: 19px;
  resize: none;
  &::placeholder {
    color: #c4c4c440;
  }
`;
export const FormInputLabel = styled.p`
  font-size: 12px;
  letter-spacing: 1px;
  margin-bottom: 5px;

  color: white;
  text-transform: capitalize;
`;
