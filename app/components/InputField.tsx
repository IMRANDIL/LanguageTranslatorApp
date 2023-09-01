import React from 'react';
import {TextInput} from 'react-native';

interface InputFieldProps {
  placeholder: string;
  onChangeText: (text: string) => void;
}

const InputField = ({placeholder, onChangeText}: InputFieldProps) => {
  return <TextInput placeholder={placeholder} onChangeText={onChangeText} />;
};

export default InputField;
