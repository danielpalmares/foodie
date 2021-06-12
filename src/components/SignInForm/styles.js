import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  a:link,
  a:visited {
    width: fit-content;
    font-size: ${props => props.theme.fontSizes.small};
    color: ${props => props.theme.fontColors.tertiary};
  }
`;
