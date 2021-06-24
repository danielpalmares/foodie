import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-right: auto;

  outline: none;
  border: none;
  border-radius: ${props => props.theme.border.radius};

  font-family: 'Nunito', sans-serif;
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 700;
  color: ${props =>
    props.theme.mode === 'light'
      ? props.theme.fontColors.bg
      : props.theme.fontColors.primary};

  background: ${props => props.theme.colors.primary};
  padding: 1rem;

  cursor: pointer;
  transition: all 0.2s;

  &:active {
    transform: translateY(0.5rem) scale(0.9);
  }
`;
