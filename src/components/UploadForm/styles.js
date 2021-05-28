import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 8.6rem;

  // media queries start area
  @media screen and (min-width: 320px) {
    max-width: 300px;
    margin: 0 auto;
  }

  @media screen and (min-width: 375px) {
    max-width: 355px;
    margin: 0 auto;
  }

  @media screen and (min-width: 425px) {
    max-width: 405px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    max-width: 568px;
    margin: 0 auto;
  }
  // media queries final area

  button {
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
      transform: translateX(0.5rem);
    }
  }
`;

export const UploadColumn = styled.div`
  h3 {
    font-size: 2rem;
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
    margin: 2rem 0;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    align-self: flex-start;
    font-size: 1.6rem;
    font-weight: 600;
    color: ${props => props.theme.fontColors.secondary};
  }

  input {
    font-family: 'Lexend', sans-serif;
    font-size: 1.6rem;
    font-weight: 600;
    color: ${props => props.theme.fontColors.primary};

    width: 100%;
    padding: 2rem;
    margin: 1rem 0;

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
      border-color: ${props => props.theme.colors.primary};
    }
  }
`;
