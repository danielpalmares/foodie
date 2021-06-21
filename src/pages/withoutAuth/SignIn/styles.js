import styled from 'styled-components';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;

  @media screen and (min-width: 768px) {
    max-width: 668px;
    margin: 0 auto;
  }
`;

export const Directions = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-size: ${props => props.theme.fontSizes.h1};
    font-weight: 700;
    color: ${props => props.theme.fontColors.primary};
    line-height: 1.5;
    padding: 2rem 0;
  }

  div {
    font-size: ${props => props.theme.fontSizes.small};
    line-height: 1.5;
    padding-bottom: 1rem;

    span {
      color: ${props => props.theme.fontColors.primary};
    }

    a {
      color: ${props => props.theme.colors.primary};
      font-weight: 700;

      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`;
