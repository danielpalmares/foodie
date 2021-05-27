import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  position: relative;
  margin: 2rem 0;

  span {
    display: block;
    font-size: 1.4rem;

    a:link,
    a:visited {
      color: ${props => props.theme.fontColors.secondary};
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    font-family: 'Lexend', sans-serif;
    font-size: 1.8rem;
    font-weight: 600;
    color: ${props =>
      props.theme.mode === 'light'
        ? props.theme.fontColors.bg
        : props.theme.fontColors.primary};
    padding: 2rem;

    outline: none;
    border: none;
    border-radius: 1rem;
    background: ${props => props.theme.colors.primary};
    transition: all 0.2s;

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
