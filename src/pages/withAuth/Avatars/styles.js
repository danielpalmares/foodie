import styled from 'styled-components';

export const Container = styled.div`
  margin: 2rem 0 8rem 0;

  h1 {
    font-size: ${props => props.theme.fontSizes.h1};
    line-height: 1.5;
    font-weight: 700;
    color: ${props =>
      props.theme.mode === 'light'
        ? props.theme.fontColors.secondary
        : props.theme.fontColors.primary};

    width: fit-content;
    position: relative;
    margin: 2rem auto;

    &::after {
      display: block;
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;

      height: 100%;
      width: 100%;
      z-index: -1;
      opacity: 0.7;
      transform: scale(1.07, 1.05) skewX(344deg);
      background: ${props =>
        `linear-gradient(to right bottom, ${props.theme.colors.tertiary}, ${props.theme.colors.quaternary})`};
    }
  }

  img {
    height: 20rem;
    align-self: center;
    justify-self: center;
    cursor: pointer;
    border: ${props => props.theme.border.size} solid transparent;
    border-radius: ${props => props.theme.border.radius};
    padding: 1rem;
    margin: 2rem 0;
  }

  .activeAvatar {
    border: ${props => props.theme.border.size} solid
      ${props => props.theme.colors.tertiary};
    border-radius: ${props => props.theme.border.radius};
    background: ${props =>
      `linear-gradient(to right bottom, ${props.theme.colors.tertiary}, ${props.theme.colors.quaternary})`};
  }
`;
