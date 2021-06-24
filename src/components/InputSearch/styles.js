import styled from 'styled-components';

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;

  input {
    font-family: 'Nunito', sans-serif;
    font-size: ${props => props.theme.fontSizes.larger};
    color: ${props => props.theme.fontColors.primary};

    width: 100%;
    padding: 2rem 5rem 2rem 1rem;

    background: ${props => props.theme.colors.absolute};
    border: ${props => props.theme.border.size} solid transparent;
    border-radius: ${props => props.theme.border.radius};
    outline: none;

    &:focus {
      border-color: ${props => props.theme.colors.quaternary};
    }

    &::placeholder {
      font-size: 1.4rem;
      font-weight: 600;
      color: ${props => props.theme.fontColors.tertiary};
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    color: ${props =>
      props.theme.mode === 'light'
        ? props.theme.fontColors.secondary
        : props.theme.fontColors.primary};

    padding: 0.5rem;

    background: ${props => props.theme.colors.quaternary};
    outline: none;
    border: none;
    border-radius: ${props => props.theme.border.radius};

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
