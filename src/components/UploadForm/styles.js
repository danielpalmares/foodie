import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    background: ${props => props.theme.colors.primary};

    width: 100%;
    outline: none;
    border: none;
    border-radius: ${props => props.theme.border.radius};
    padding: 2rem;

    font-size: ${props => props.theme.fontSizes.larger};
    color: ${props =>
      props.theme.mode === 'light'
        ? props.theme.fontColors.secondary
        : props.theme.fontColors.primary};

    cursor: pointer;
    transition: all 0.2s;

    &:active {
      transform: translateX(0.5rem);
    }
  }
`;

export const UploadColumn = styled.div`
  h4 {
    font-size: ${props => props.theme.fontSizes.small};
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
    margin: 2rem 0 1rem 0;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  label {
    align-self: flex-start;
    font-size: ${props => props.theme.fontSizes.regular};
    color: ${props => props.theme.fontColors.tertiary};
    cursor: pointer;
  }

  input {
    font-family: 'Nunito', sans-serif;
    font-size: ${props => props.theme.fontSizes.regular};
    color: ${props => props.theme.fontColors.primary};

    width: 100%;
    padding: 2rem;
    margin: 1rem 0;

    background: ${props => props.theme.colors.absolute};
    border: ${props => props.theme.border.size} solid transparent;
    border-radius: ${props => props.theme.border.radius};
    outline: none;

    &::placeholder {
      font-size: ${props => props.theme.fontSizes.regular};
      color: ${props => props.theme.fontColors.tertiary};
    }

    &:focus {
      border-color: ${props => props.theme.colors.quaternary};
    }
  }
`;
