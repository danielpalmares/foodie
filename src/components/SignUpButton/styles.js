import styled from 'styled-components';

// variables
const colorOrange = '#FF8C00';
const colorWhite100 = '#ECEDF1';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  width: 30rem;
  margin: 0 auto;

  background: ${colorOrange};
  outline: none;
  border: none;
  border-radius: 2rem;
  padding: 2rem;

  font-size: 1.8rem;
  text-transform: capitalize;
  color: ${colorWhite100};
  cursor: pointer;
  transition: all 0.2s;

  ${this}:active {
    transform: translateX(1rem);
  }
`;
