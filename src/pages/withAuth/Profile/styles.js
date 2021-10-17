import styled, { keyframes } from 'styled-components';

export const InstructionsContainer = styled.div`
  display: flex;
  margin-top: 3rem;

  a {
    width: fit-content;
    height: fit-content;
    cursor: pointer;
    margin-bottom: -0.5rem;

    img {
      height: 10rem;
    }
  }
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

export const Avatar = styled.div`
  min-height: 10rem;
  min-width: 10rem;
  border: ${props => props.theme.border.size} solid
    ${props => props.theme.border.color};
  border-radius: 50%;

  background-image: url(${props => props.imageSrc});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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
      background: ${props => props.theme.border.color};

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

export const Marker = styled.div`
  height: 5.6rem;
  width: 5.6rem;
  border-radius: 50%;

  background-image: url(${props => props.imageSrc});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  position: absolute;
  top: 50%;
  left: ${props => `${props.position}%`}; // progress
  transform: ${props => `translate(-${props.position}%, -50%)`};
  z-index: 10;
`;

export const ProgressContainer = styled.div`
  width: 100%;
  height: 15rem;
  overflow-x: scroll;

  section {
    width: 2400px;
    height: 100%;
  }
`;

export const Stats = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  ul {
    display: flex;
    justify-content: space-between;
    flex: 1 1 auto;
    font-size: ${props => props.theme.fontSizes.small};

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      color: ${props => props.theme.fontColors.primary};

      span {
        font-weight: 700;
        border-radius: 1rem;
        padding: 0.5rem 1rem;

        color: ${props =>
          props.theme.mode === 'light'
            ? props.theme.fontColors.secondary
            : props.theme.fontColors.primary};
      }

      &:not(:last-child) {
        span {
          background: ${props => props.theme.colors.absolute};
        }
      }

      &:last-child {
        span {
          background: ${props => props.theme.colors.primary};
        }
      }
    }
  }
`;

export const Container = styled.div`
  margin: 0 1rem 6rem 1rem;

  .username {
    font-size: ${props => props.theme.fontSizes.small};
    font-weight: 700;
    display: block;
    text-align: center;
  }

  .name {
    font-size: ${props => props.theme.fontSizes.regular};
    font-weight: 700;
    display: block;
  }

  @media screen and (min-width: 768px) {
    max-width: 668px;
    margin: 0 auto;
    margin-bottom: 6rem;
  }

  header {
    display: flex;
    gap: 2rem;
    margin: 1rem 0;
  }

  section {
    padding: 1rem 0;
  }
`;

export const UserBiography = styled.span`
  display: flex;
  min-height: 5rem;
  margin: 1rem 0;
  background: ${props => props.theme.colors.absolute};
  padding: 1rem;
  border-radius: ${props => props.theme.border.radius};
  font-size: ${props => props.theme.fontSizes.regular};
  line-height: 1.5;
`;

export const UserNameContainer = styled.div`
  display: flex;

  h3 {
    font-size: ${props => props.theme.fontSizes.h3};
    font-weight: 700;
  }

  span {
    font-size: ${props => props.theme.fontSizes.regular};
  }
`;
