import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 1.8rem;

  width: 100%;
  background: ${props => props.theme.colors.primary};
  outline: none;
  border: none;
  border-radius: 1rem;
  padding: 2rem;

  color: ${props =>
    props.theme.mode === 'light'
      ? props.theme.fontColors.bg
      : props.theme.fontColors.primary};

  cursor: pointer;
  transition: all 0.2s;

  ${this}:active {
    transform: translateX(1rem);
  }
`;
