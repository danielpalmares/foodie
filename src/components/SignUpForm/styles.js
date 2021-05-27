import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 4rem;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    font-family: 'Lexend', sans-serif;
    font-size: 1.8rem;
    font-weight: 600;
    padding: 2rem;
    color: ${props =>
      props.theme.mode === 'light'
        ? props.theme.fontColors.bg
        : props.theme.fontColors.primary};

    outline: none;
    border: none;
    border-radius: 1rem;
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
    color: ${props => props.theme.fontColors.secondary};

    @media screen and (min-width: 425px) {
      left: 3%;
    }
  }

  input {
    width: 100%;
    outline: none;

    font-family: 'Lexend', sans-serif;
    font-size: 1.7rem;
    font-weight: 400;
    color: ${props => props.theme.fontColors.primary};
    padding: 2rem 2rem 2rem 5rem;

    border: 2px solid ${props => props.theme.colors.border};
    border-radius: 1rem;
    background: ${props => props.theme.background};

    &:focus {
      border-color: ${props => props.theme.colors.primary};
    }

    &::placeholder {
      font-family: 'Lexend', sans-serif;
      font-size: 1.7rem;
      font-weight: 400;
      color: ${props => props.theme.fontColors.secondary};
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
    color: ${props => props.theme.fontColors.secondary};

    span {
      font-size: 1.8rem;
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
  font-size: 1.2rem;
  color: ${props => props.theme.fontColors.secondary};
  text-align: center;
  text-transform: uppercase;
`;
