import styled, { keyframes } from 'styled-components';

export const InstructionsContainer = styled.div`
  display: flex;
`;

export const MyRecipesList = styled.ul`
  display: flex;
  overflow-x: scroll;
  gap: 2rem;
  padding: 1rem 0;
`;

export const fillOpacity = keyframes`
  from {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;

export const SwipeDirection = styled.div`
  margin: 1rem 0;

  span {
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    opacity: 0;

    animation: 5s ${fillOpacity} linear infinite;
  }
`;

export const UserNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  margin-top: 3rem;

  h3 {
    font-size: 2rem;
    font-weight: 700;
  }

  span {
    font-size: 1.6rem;
    font-weight: 400;
  }
`;

export const Avatar = styled.img`
  width: calc(528px / 6);
  height: calc(560px / 6);

  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const BarContainer = styled.div`
  width: 2400px;
  height: 6rem; // cover avatar

  // for the progress bar image
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: relative;

  ul {
    width: 2400px;
    position: absolute;
    bottom: -50%;
    left: 0;

    li {
      width: 2px;
      height: 4rem;
      background: ${props => props.theme.colors.border};

      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }

    #beginner-bar {
      left: calc(0% + 52.8px / 2);
    }

    #amateur-bar {
      left: 25.5%;
      transform: translateX(-25.5%);
    }

    #aspirant-bar {
      left: 50%;
      transform: translateX(-50%);
    }

    #pro-bar {
      left: 74.5%;
      transform: translateX(-74.5%);
    }

    #chef-bar {
      left: calc(100% - 52.8px / 2);
    }
  }
`;

export const LevelList = styled.ul`
  width: 2400px;
  display: flex;
  position: relative;

  li {
    position: absolute;
    top: 0%;
    font-size: 1.8rem;
    font-weight: 700;
    color: ${props => props.theme.fontColors.primary};
    margin-top: 4rem;

    display: flex;

    span {
      display: flex;
      align-items: center;
      margin-left: 1rem;
      gap: 0.5rem;
      color: ${props => props.theme.colors.primary};
    }
  }

  #beginner {
    left: 0%;
  }

  #amateur {
    left: 24.5%;
    transform: translateX(-24.5%);
  }

  #aspirant {
    left: 50%;
    transform: translateX(-50%);
  }

  #pro {
    left: 75.5%;
    transform: translateX(-75.5%);
  }

  #chef {
    left: 100%;
    transform: translateX(-100%);
  }
`;

export const Marker = styled.img`
  height: calc(560px / 10);

  position: absolute;
  top: 50%;
  left: 0%; // progress
  transform: translate(-0%, -50%);
  z-index: 10;
`;

export const ProgressContainer = styled.div`
  width: 100%;
  height: 15rem;
  overflow-x: scroll;

  section {
    width: 2400px;
    height: 100%;

    // change later
    padding: 0 1rem;
    @media screen and (min-width: 768px) {
      max-width: 668px;
      margin: 0 auto;
      padding-left: 0;
      padding-right: 0;
    }
  }
`;

export const Stats = styled.div`
  width: 100%;
  padding: 3rem 0;

  // media queries start area
  /* @media screen and (min-width: 320px) {
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
  } */

  // media queries final area

  ul {
    display: flex;
    justify-content: space-between;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      p {
        color: ${props => props.theme.fontColors.primary};
      }

      span {
        font-weight: 700;
        border-radius: 1rem;
        padding: 0.5rem 1rem;
      }

      &:not(:last-child) {
        span {
          background: ${props => props.theme.colors.quartenary};
          color: ${props =>
            props.theme.mode === 'light'
              ? props.theme.fontColors.bg
              : props.theme.fontColors.primary};
        }
      }

      &:last-child {
        span {
          background: ${props => props.theme.colors.primary};
          color: ${props =>
            props.theme.mode === 'light'
              ? props.theme.fontColors.bg
              : props.theme.fontColors.primary};
        }
      }
    }
  }
`;

export const Wrapper = styled.div`
  padding: 0 1rem;
  margin-bottom: 6rem;

  @media screen and (min-width: 768px) {
    max-width: 668px;
    margin: 0 auto;
    margin-bottom: 6rem;
    padding-left: 0;
    padding-right: 0;
  }
`;

export const Container = styled.div`
  header {
    height: 15rem;
    position: relative;
    z-index: 0;

    &::before {
      content: '';
      position: absolute;
      z-index: -1;

      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      clip-path: polygon(0 25%, 100% 0, 100% 75%, 0 100%);
      background-color: ${props => props.theme.fontColors.tertiary};
    }
  }
`;
