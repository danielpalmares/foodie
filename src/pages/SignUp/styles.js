import styled from 'styled-components';

export const SignUpContainer = styled.div`
  padding: 0 1rem;

  @media screen and (min-width: 320px) {
    max-width: 300px;
    margin: 0 auto;
    padding: 0;
  }
  @media screen and (min-width: 375px) {
    max-width: 355px;
    margin: 0 auto;
    padding: 0;
  }
  @media screen and (min-width: 425px) {
    max-width: 405px;
    margin: 0 auto;
    padding: 0;
  }

  @media screen and (min-width: 768px) {
    max-width: 568px;
    margin: 0 auto;
    padding: 0;
  }
`;

export const Directions = styled.div`
  padding: 2rem 0;

  h1 {
    font-size: 4rem;
    font-weight: 700;
    color: ${props => props.theme.fontColors.primary};
    line-height: 1.5;

    padding: 2rem 0;
  }

  div {
    display: block;
    font-size: 1.4rem;
    color: ${props => props.theme.fontColors.primary};
    line-height: 1.5;

    padding-bottom: 1rem;

    a {
      color: ${props => props.theme.colors.primary};
      font-weight: 600;

      display: flex;
      align-items: center;
      gap: 0.5rem;
      width: fit-content;
    }
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  font-size: 1.2rem;
  font-weight: 600;
  color: #ff0033; // red
  text-align: center;

  padding: 1rem 0;
`;
