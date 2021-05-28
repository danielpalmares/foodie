import styled from 'styled-components';

export const Missions = styled.div`
  width: 100%;
  padding-bottom: 15rem;

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

  h1 {
    font-size: 2rem;
    color: #8338ec;
    font-weight: 700;
    margin: 2rem 0;
    padding: 1rem 0;
    border-top: 2px solid #222;
    border-bottom: 2px solid #222;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    div {
      width: 100%;
      position: relative;

      li {
        color: #c7c7c7;
        padding: 1rem;
        font-weight: 700;
        width: 100%;
        height: auto;
        background: #000;
        opacity: 0.2;
        border-radius: 1rem;
        border: 2px solid #8338ec;
        //border-style: dashed;
        line-height: 1.5;

        display: flex;
        justify-content: space-between;

        span {
          color: #8338ec;
          font-weight: 700;
          align-self: flex-start;
          text-align: center;
          margin-left: 1rem;
        }
      }
    }
  }
`;

export const Stats = styled.div`
  width: 100%;
  padding: 3rem 0;

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
      background-color: ${props => props.theme.colors.quartenary};
    }

    div {
      height: 10rem;
      width: 10rem;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;

      border-radius: 50%;

      display: flex;
      align-items: center;
      justify-content: center;

      position: absolute;
      top: 75%;
      left: 50%;
      transform: translate(-50%, -50%);

      button {
        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        top: 40%;
        right: -10%;
        color: ${props => props.theme.fontColors.bg};

        border: 2px solid ${props => props.theme.background};
        border-radius: 50%;
        background: ${props => props.theme.colors.quartenary};

        padding: 0.5rem;
        cursor: pointer;
        transition: all 0.2s;

        &:active {
          transform: translateY(-0.5rem);
        }
      }
    }
  }
`;
