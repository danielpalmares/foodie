import styled from 'styled-components';

export const LandingContainer = styled.div`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
`;

export const BlobContainer = styled.div`
  height: 40rem;
  position: absolute;
  top: 15%;
  left: 30%;
  z-index: -1;

  img {
    height: 100%;
  }
`;

export const LandingContent = styled.div`
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

    h1 {
      font-size: 4rem;
      font-weight: 700;
      color: #333;
      margin-bottom: 4rem;
    }

    h2 {
      font-size: 3rem;
      font-weight: 700;
      color: ${props => props.theme.colors.orange};
      margin-bottom: 4rem;
    }

    h3 {
      margin-bottom: 2.5rem;
      font-weight: 700;
      color: #333;
    }

    a {
      margin-top: 4rem;
    }
  }
`;
