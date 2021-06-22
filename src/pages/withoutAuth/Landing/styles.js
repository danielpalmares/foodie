import styled from 'styled-components';

export const LandingContainer = styled.div`
  min-height: 100vh;
  padding: 0 1rem;
`;

export const SectionContent = styled.section`
  padding: 6rem 0;
  border-bottom: 1px solid ${props => props.theme.border.color};

  h1 {
    font-size: ${props => props.theme.fontSizes.h1};
    font-weight: 700;
    line-height: 1.5;
    text-align: center;
    justify-self: center;
    align-self: center;

    span {
      color: ${props => props.theme.colors.quaternary};
    }
  }

  .svg-image {
    height: 15rem;
    justify-self: center;
    align-self: center;
  }

  @media screen and (min-width: 640px) {
    .left {
      grid-column: 1/1;
      grid-row: 1/1;
    }

    .right {
      grid-column: 2/2;
      grid-row: 1/1;
    }
  }
`;

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2rem;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;

  a {
    width: 30rem;
    margin: 0 auto;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      width: 100%;

      font-family: 'Nunito', sans-serif;
      font-size: ${props => props.theme.fontSizes.larger};
      font-weight: 700;
      color: ${props =>
        props.theme.mode === 'light'
          ? props.theme.fontColors.secondary
          : props.theme.fontColors.primary};

      padding: 2rem;
      background: ${props => props.theme.colors.primary};
      outline: none;
      border: none;
      border-radius: ${props => props.theme.border.radius};

      cursor: pointer;
      transition: all 0.2s;

      &:active {
        transform: translateX(0.5rem);
      }
    }
  }
`;
