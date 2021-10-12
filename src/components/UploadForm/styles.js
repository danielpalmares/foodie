import styled from 'styled-components';

export const RemoveButton = styled.button`
  position: absolute;
  top: -1.5rem;
  left: calc(50% - 1.5rem);

  background: ${props => props.theme.colors.red};
  padding: 0.5rem;
  width: 3rem;
  height: 3rem;
  outline: none;
  border: none;
  border-radius: 50%;
  color: ${props => props.theme.fontColors.primary};

  display: flex;
  flex-direction: center;
  align-items: center;
  transition: all 0.2s;

  &:active {
    transform: translateY(0.5rem) scale(0.9);
  }
`;

export const IngredientsList = styled.ul`
  li {
    display: flex;
    justify-content: space-between;

    background: ${props => props.theme.colors.absolute};
    padding: 1.5rem 2rem;
    border-radius: ${props => props.theme.border.radius};
    margin: 2rem 0;

    color: ${props => props.theme.fontColors.tertiary};
    position: relative;
  }
`;

export const TextArea = styled.textarea`
  font-family: 'Nunito', sans-serif;
  font-size: ${props => props.theme.fontSizes.regular};
  color: ${props => props.theme.fontColors.primary};

  min-width: 100%;
  max-width: 100%;
  height: 15rem;
  padding: 2rem;
  margin: 1rem 0;

  background: ${props => props.theme.colors.absolute};
  border-radius: ${props => props.theme.border.radius};
  border: none;
  outline: none;
  resize: none;
`;

export const ButtonAdd = styled.button`
  outline: none;
  border: none;
  border-radius: ${props => props.theme.border.radius};
  padding: 0.5rem;
  background: ${props => props.theme.colors.secondary};
  color: ${props =>
    props.theme.mode === 'light'
      ? props.theme.fontColors.primary
      : props.theme.fontColors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:active {
    transform: translateY(0.5rem) scale(0.9);
  }
`;

export const IngredientsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .submit {
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
  margin: 2rem 0;

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

export const Title = styled.h5`
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.primary};
`;
