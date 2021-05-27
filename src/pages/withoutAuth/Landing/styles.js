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
  display: ${props => (props.theme.mode === 'dark' ? 'none' : 'block')};

  @media screen and (min-width: 425px) {
    left: 40%;
  }

  @media screen and (min-width: 768px) {
    left: 50%;
  }

  img {
    height: 100%;
  }
`;

export const LandingContent = styled.div`
  display: flex;
  flex-direction: column;
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

  main {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    margin: 4rem 0;

    h1 {
      font-size: 4rem;
      font-weight: 700;
      color: ${props => props.theme.fontColors.primary};
      line-height: 1.5;
    }

    h2 {
      font-size: 3rem;
      font-weight: 700;
      color: ${props => props.theme.colors.primary};
      line-height: 1.5;
    }

    h3 {
      font-size: 2rem;
      font-weight: 700;
      color: ${props => props.theme.fontColors.primary};
      line-height: 1.5;
    }
  }
`;
