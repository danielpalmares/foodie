import styled from 'styled-components';

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  margin: 2rem 0;

  input {
    font-family: 'Nunito', sans-serif;
    font-size: ${props => props.theme.fontSizes.larger};
    color: ${props => props.theme.fontColors.primary};

    width: 100%;
    padding: 2rem 5rem 2rem 1rem;

    background: ${props => props.theme.colors.absolute};
    border: none;
    border-radius: ${props => props.theme.border.radius};
    outline: none;

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

    background: ${props => props.theme.colors.tertiary};
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
