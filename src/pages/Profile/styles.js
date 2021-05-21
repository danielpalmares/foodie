import styled from 'styled-components';

export const Missions = styled.div``;

export const Stats = styled.div`
  /* display: flex;
  justify-content: center; */
  margin: 2rem 0;

  ul {
    display: flex;
    justify-content: space-evenly;

    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;

      p {
        color: #c7c7c7;
      }

      span {
        font-weight: 700;
        border-radius: 1rem;
        padding: 0.5rem 1rem;
      }

      &:not(:last-child) {
        span {
          background: #c7c7c7;
          color: #8338ec;
        }
      }

      &:last-child {
        span {
          background: #8338ec;
          color: #c7c7c7;
        }
      }
    }
  }
`;

export const Container = styled.div`
  header {
    height: 20rem;
    position: relative;
    clip-path: polygon(0 25%, 100% 0, 100% 75%, 0 100%);
    background: #8338ec;

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
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      button {
        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        top: 40%;
        right: -10%;
        color: #8338ec;

        border: 2px solid #8338ec;
        border-radius: 50%;
        background: white;

        padding: 0.5rem;
        cursor: pointer;
        transition: all 0.2s;

        &:active {
          transform: translateX(0.5rem);
        }
      }
    }
  }
`;
