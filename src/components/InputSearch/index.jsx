import React from 'react';

import { IoSearchOutline } from 'react-icons/io5';
import { InputWrapper } from './styles';

export default function InputSearch({
  handleInputChange,
  handleSearch,
  placeholder,
}) {
  return (
    <InputWrapper>
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleInputChange}
      />

      <button onClick={handleSearch}>
        <IoSearchOutline size={26} />
      </button>
    </InputWrapper>
  );
}
