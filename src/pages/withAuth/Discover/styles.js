import styled from 'styled-components';

export const DiscoverContainer = styled.div`
  padding-bottom: 6.6rem;

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

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    overflow: hidden;

    h3 {
      font-size: 2rem;
      font-weight: 700;
      color: ${props => props.theme.fontColors.primary};
      align-self: flex-start;
    }
  }

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h3 {
      color: ${props => props.theme.fontColors.primary};
      font-size: 2rem;
      font-weight: 700;
    }
  }
`;
