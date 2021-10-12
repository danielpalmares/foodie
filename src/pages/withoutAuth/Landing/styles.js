import styled from 'styled-components';

export const LandingContainer = styled.div`
  background: ${props => props.theme.background};
  color: ${props => props.theme.fontColors.primary};
  overflow: hidden;
`;

export const SectionContent = styled.section`
  display: flex;
  flex-wrap: wrap;
  max-width: 1440px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 6rem;

  @media screen and (max-width: 820px) {
    padding: 3rem;
  }

  @media screen and (max-width: 425px) {
    padding: 2rem 1rem;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 40%;
  justify-content: space-between;
  gap: 2rem;

  img {
    width: fit-content;

    @media screen and (max-width: 425px) {
      height: 5rem;
    }
  }

  h1 {
    font-size: 3.5rem;
    font-weight: 700;
    line-height: 1.5;

    span {
      color: ${props => props.theme.colors.quaternary};
    }

    @media screen and (max-width: 425px) {
      font-size: 3rem;
    }
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 60%;
  gap: 2rem;

  .svg-hamburger {
    max-width: 100%;
    flex: 1;
  }

  a {
    margin-left: auto;
    max-width: fit-content;

    button {
      outline: none;
      border: none;
      padding: 1rem 2rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      font-family: 'Nunito', sans-serif;
      font-size: ${props => props.theme.fontSizes.larger};
      font-weight: 700;
      border-radius: ${props => props.theme.border.radius};
      background: ${props => props.theme.colors.primary};
      color: ${props => props.theme.fontColors.primary};
      transition: all 0.2s;
      cursor: pointer;

      &:active {
        transform: translateX(0.5rem);
      }
    }
  }
`;
