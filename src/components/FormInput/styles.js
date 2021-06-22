import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  top: 28%;
  left: 5%;
  color: ${props => props.theme.fontColors.tertiary};

  @media screen and (min-width: 425px) {
    left: 3%;
  }
`;

export const Input = styled.input`
  outline: none;
  width: 100%;

  font-family: 'Nunito', sans-serif;
  font-size: ${props => props.theme.fontSizes.larger};
  color: ${props => props.theme.fontColors.primary};

  padding: 2rem 2rem 2rem 5rem;
  border: ${props => props.theme.border.size} solid
    ${props => props.theme.border.color};
  border-radius: ${props => props.theme.border.radius};
  background: ${props => props.theme.colors.absolute};

  &:focus {
    border-color: ${props => props.theme.colors.primary};
  }

  &::placeholder {
    font-family: 'Nunito', sans-serif;
    font-size: ${props => props.theme.fontSizes.larger};
    color: ${props => props.theme.fontColors.tertiary};
  }
`;
