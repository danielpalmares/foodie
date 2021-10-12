import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    align-self: flex-start;
    font-size: ${props => props.theme.fontSizes.regular};
    color: ${props => props.theme.fontColors.tertiary};
  }
`;

export const Textarea = styled.textarea`
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
