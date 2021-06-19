import React from 'react';

import { IoSearchOutline } from 'react-icons/io5';
import { InputWrapper } from './styles';

export default function InputSearch({
  handleInputChange,
  handleSearch,
  placeholder,
}) {
  // search whenever the enter key is pressed
  function handleSearchKeyDown(e) {
    e.key === 'Enter' && handleSearch();
  }

  return (
    <InputWrapper>
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleInputChange}
        onKeyDown={e => handleSearchKeyDown(e)}
      />

      <button onClick={handleSearch}>
        <IoSearchOutline size={26} />
      </button>
    </InputWrapper>
  );
}
