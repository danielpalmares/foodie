import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const GenderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  label {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: ${props => props.theme.fontColors.tertiary};

    span {
      font-size: ${props => props.theme.fontSizes.larger};
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
  font-size: ${props => props.theme.fontSizes.tiny};
  color: ${props => props.theme.fontColors.primary};
  text-align: center;
  text-transform: uppercase;
`;
