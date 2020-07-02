import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

const TextInput = styled.TextInput`
  background-color: white;
  margin: 10px 30px;

  padding: 10px 20px;
  border-radius: 15px;
`;

const Input = ({ placeholder, value, onChange, onSubmit }) => (
  <TextInput
    placeholder={placeholder}
    returnKeyType={"search"}
    value={value}
    onChangeText={onChange}
    onSubmitEditing={onSubmit}
  />
);

export default Input;
