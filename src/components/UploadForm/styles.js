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
    margin-bottom: 0.5rem;
  }

  input, textarea {
    font-family: 'Nunito', sans-serif;
    font-size: ${props => props.theme.fontSizes.regular};
    color: ${props => props.theme.fontColors.primary};

    width: 100%;
    padding: 1.5rem;
    margin: 0.5rem 0;

    background: ${props => props.theme.colors.absolute};
    border: ${props => props.theme.border.size} solid transparent;
    border-radius: ${props => props.theme.border.radius};
    outline: none;
    resize: vertical;

    &::placeholder {
      font-size: ${props => props.theme.fontSizes.regular};
      color: ${props => props.theme.fontColors.tertiary};
    }

    &:focus {
      border-color: ${props => props.theme.colors.quaternary};
    }
  }

  input[type="file"] {
    padding: 1rem;
    cursor: pointer;
  }

  .ingredient-fields {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr auto;
    gap: 0.5rem;
    align-items: center;

    input { margin: 0; }

    @media screen and (max-width: 480px) {
      grid-template-columns: 1fr 1fr;
      input:first-child { grid-column: 1 / -1; }
    }
  }

  .instruction-row {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 0.5rem;
    align-items: flex-start;

    textarea { margin: 0; }
  }
`;

export const Title = styled.h5`
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.primary};
  margin: 2rem 0 1rem 0;
`;

export const PhotoPreview = styled.img`
  width: 100%;
  max-height: 20rem;
  object-fit: cover;
  border-radius: ${props => props.theme.border.radius};
  margin-top: 1rem;
`;

export const AddRemoveBtn = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: ${props => props.theme.border.size} solid ${props => props.theme.border.color};
  border-radius: ${props => props.theme.border.radius};
  color: ${props => props.theme.fontColors.tertiary};
  padding: 0.8rem 1.2rem;
  font-family: 'Nunito', sans-serif;
  font-size: ${props => props.theme.fontSizes.small};
  cursor: pointer;
  transition: all 0.2s;

  &.add-btn {
    width: 100%;
    justify-content: center;
    margin-top: 0.5rem;
    color: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
  }

  &:active {
    transform: scale(0.95);
  }
`;

// extend InputWrapper to handle ingredient/instruction inner layouts
// (done via className selectors in the component)
