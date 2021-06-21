import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 2rem;

    font-family: 'Nunito', sans-serif;
    font-size: ${props => props.theme.fontSizes.larger};
    font-weight: 700;
    color: ${props =>
      props.theme.mode === 'light'
        ? props.theme.fontColors.secondary
        : props.theme.fontColors.primary};

    outline: none;
    border: none;
    border-radius: ${props => props.theme.border.radius};
    background: ${props => props.theme.colors.primary};

    transition: all 0.2s;
    cursor: pointer;

    &:active {
      transform: translateX(1rem);
    }
  }
`;

export const InputContainer = styled.div`
  position: relative;

  label {
    position: absolute;
    top: 28%;
    left: 5%;
    color: ${props => props.theme.fontColors.tertiary};

    @media screen and (min-width: 425px) {
      left: 3%;
    }
  }

  input {
    width: 100%;
    outline: none;
    background: ${props => props.theme.colors.absolute};

    font-family: 'Nunito', sans-serif;
    font-size: ${props => props.theme.fontSizes.regular};
    color: ${props => props.theme.fontColors.primary};

    padding: 2rem 2rem 2rem 5rem;
    border: ${props => props.theme.border.size} solid
      ${props => props.theme.border.color};
    border-radius: ${props => props.theme.border.radius};

    &:focus {
      border-color: ${props => props.theme.colors.primary};
    }

    &::placeholder {
      font-family: 'Nunito', sans-serif;
      font-size: ${props => props.theme.fontSizes.regular};
      color: ${props => props.theme.fontColors.tertiary};
    }
  }
`;

export const GenderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  label {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${props => props.theme.fontColors.tertiary};

    span {
      font-size: ${props => props.theme.fontSizes.larger};
      color: ${props => props.theme.fontColors.primary};
    }
  }

  input {
    display: none;
  }

  input#male:checked + label {
    color: #32949b; // blue
  }

  input#female:checked + label {
    color: #f8b9d4; // pink
  }
`;

export const Warning = styled.span`
  display: block;
  font-size: ${props => props.theme.fontSizes.tiny};
  color: ${props => props.theme.fontColors.primary};
  text-align: center;
  text-transform: uppercase;
`;
