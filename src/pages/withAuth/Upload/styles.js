import styled from 'styled-components';

export const UploadContainer = styled.div`
  h1 {
    font-size: 3rem;
    font-weight: 700;
    line-height: 1.5;
    color: ${props => props.theme.colors.primary};
  }

  // media queries start area
  @media screen and (min-width: 320px) {
    max-width: 300px;
    margin: 0 auto;
  }

  @media screen and (min-width: 375px) {
    max-width: 355px;
    margin: 0 auto;
  }

  @media screen and (min-width: 425px) {
    max-width: 405px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    max-width: 568px;
    margin: 0 auto;
  }
  // media queries final area
`;
