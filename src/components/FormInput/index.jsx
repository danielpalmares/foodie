import React from 'react';

import { Input, Label, InputContainer } from './styles';

export default function FormInput({
  type,
  id,
  placeholder,
  isRequired,
  handleChange,
  label,
}) {
  return (
    <InputContainer>
      <Label htmlFor={id}>{label}</Label>
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        required={isRequired}
        onChange={handleChange}
      />
    </InputContainer>
  );
}
