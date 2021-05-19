import styled from 'styled-components';

// variables
const colorGreen = '#49BF6A';
const colorWhite100 = '#ECEDF1';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  background: ${colorGreen};
  outline: none;
  border: none;
  border-radius: 2rem;
  padding: 1rem 2rem;

  font-size: 1.6rem;
  text-transform: capitalize;
  color: ${colorWhite100};
  cursor: pointer;
  transition: all 0.2s;

  ${this}:active {
    transform: translateX(1rem);
  }
`;
