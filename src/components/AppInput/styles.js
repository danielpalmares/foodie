import styled from 'styled-components';

export const GenderWrapper = styled.div`
  input {
    display: none;
  }

  label {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${props => props.theme.fontColors.tertiary};
  }

  input#male:checked + label {
    color: #32949b; // blue
  }

  input#female:checked + label {
    color: #f8b9d4; // pink
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0.5rem 0;

  .defaultLabel {
    align-self: flex-start;
    font-size: ${props => props.theme.fontSizes.regular};
    color: ${props => props.theme.fontColors.tertiary};
  }

  .fileLabel {
    align-self: center;
    font-size: ${props => props.theme.fontSizes.regular};
    color: ${props => props.theme.fontColors.tertiary};

    width: 15rem;
    height: 15rem;
    border: 2px dashed
      ${props =>
        props.isPhotoSelected
          ? props.theme.colors.greenSuccess
          : props.theme.border.color};
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
    text-align: center;

    transition: all 0.2s;
  }

  input {
    font-family: 'Nunito', sans-serif;
    font-size: ${props => props.theme.fontSizes.regular};
    color: ${props => props.theme.fontColors.primary};

    width: 100%;
    padding: 2rem;
    margin: 0.5rem 0;

    background: ${props => props.theme.colors.absolute};
    border: ${props => props.theme.border.size} solid transparent;
    border-radius: ${props => props.theme.border.radius};
    outline: none;

    &::placeholder {
      font-size: ${props => props.theme.fontSizes.regular};
      color: ${props => props.theme.fontColors.tertiary};
    }
  }
`;
