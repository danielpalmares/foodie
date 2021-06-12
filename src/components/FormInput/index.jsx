import React from 'react';

import { Input, Label, InputContainer } from './styles';

export default function FormInput({
  type,
  name,
  id,
  placeholder,
  isRequired,
  handleChange,
  labelHtmlFor,
  label,
}) {
  return (
    <InputContainer>
      <Label htmlFor={labelHtmlFor}>{label}</Label>
      <Input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        required={isRequired}
        onChange={handleChange}
      />
    </InputContainer>
  );
}
