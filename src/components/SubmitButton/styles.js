import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;

  font-family: 'Nunito', sans-serif;
  font-size: ${props => props.theme.fontSizes.larger};
  font-weight: 700;
  color: ${props =>
    props.theme.mode === 'light'
      ? props.theme.fontColors.secondary
      : props.theme.fontColors.primary};

  padding: 2rem;
  background: ${props => props.theme.colors.primary};
  outline: none;
  border: none;
  border-radius: ${props => props.theme.border.radius};

  cursor: pointer;
  transition: all 0.2s;

  &:active {
    transform: translateX(0.5rem);
  }
`;
