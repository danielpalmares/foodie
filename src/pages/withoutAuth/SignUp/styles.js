import styled from 'styled-components';

export const SignUpContainer = styled.div`
  padding: 0 1rem 6rem 1rem;

  background-color: ${props => props.theme.background};
  border-radius: ${props => props.theme.border.radius};
  min-height: 100vh;
`;

export const Directions = styled.div`
  margin: 2rem 0;

  div {
    display: block;
    font-size: ${props => props.theme.fontSizes.small};
    color: ${props => props.theme.fontColors.primary};
    line-height: 1.5;
    margin-top: 2rem;

    a {
      color: ${props => props.theme.colors.primary};
      font-weight: 700;

      display: flex;
      align-items: center;
      gap: 0.5rem;
      width: fit-content;
    }
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 700;
  color: #ff0033; // red
  text-align: center;

  padding: 1rem 0;
`;
