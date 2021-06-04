import styled from 'styled-components';

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;

  input {
    font-family: 'Lexend', sans-serif;
    font-size: 1.6rem;
    font-weight: 600;
    color: ${props => props.theme.fontColors.primary};

    width: 100%;
    padding: 2rem 5rem 2rem 1rem;

    background: ${props => props.theme.fontColors.tertiary};
    border: 2px solid ${props => props.theme.colors.border};
    border-radius: 1rem;
    outline: none;

    &::placeholder {
      font-size: 1.4rem;
      font-weight: 600;
      color: ${props => props.theme.fontColors.secondary};
    }

    &:focus {
      border-color: ${props => props.theme.colors.quartenary};
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${props =>
      props.theme.mode === 'light'
        ? props.theme.fontColors.bg
        : props.theme.fontColors.primary};

    padding: 0.5rem;

    background: ${props => props.theme.colors.quartenary};
    outline: none;
    border: none;
    border-radius: 1rem;

    position: absolute;
    bottom: 22%;
    right: 3%;

    @media screen and (min-width: 425px) {
      right: 2%;
    }

    transition: all 0.2s;
    cursor: pointer;

    &:active {
      transform: translateY(0.5rem) scale(0.9);
    }
  }
`;
