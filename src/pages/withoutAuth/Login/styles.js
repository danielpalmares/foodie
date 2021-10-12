import styled from 'styled-components';

export const SignInContainer = styled.div`
  background: ${props => props.theme.background};
  min-height: 100vh;
`;

export const LoginWrapper = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 0 1rem 5rem 1rem;
`;

export const Directions = styled.div`
  margin: 2rem 0;

  h1 {
    font-size: ${props => props.theme.fontSizes.h1};
    line-height: 1.5;
    color: ${props => props.theme.fontColors.primary};
  }

  div {
    display: block;
    font-size: ${props => props.theme.fontSizes.small};
    color: ${props => props.theme.fontColors.primary};
    line-height: 1.5;
    margin-top: 2rem;

    a {
      color: ${props => props.theme.colors.primary};
      font-weight: 700;

      width: fit-content;
      display: flex;
      align-items: center;
      gap: 0.5rem;
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
