import styled from 'styled-components';

export const Missions = styled.div`
  padding: 0 1rem;
  margin: 10rem 0;

  h1 {
    font-size: 2rem;
    color: #8338ec;
    font-weight: 700;
    margin: 1rem 0;
  }

  div {
    color: #c7c7c7;
    padding: 1rem;
    font-weight: 700;
    width: 100%;
    height: auto;
    background: #111;
    border-radius: 1rem;
    border: 2px solid #8338ec;
    border-style: dashed;

    position: relative;

    span {
      background: #111;
      padding: 0.5rem 1rem;
      color: #8338ec;
      font-weight: 700;
      border: 2px solid #8338ec;
      border-style: dashed;

      position: absolute;
      border-radius: 1rem;

      top: 75%;
      right: 5%;
    }
  }
`;

export const Stats = styled.div`
  /* display: flex;
  justify-content: center; */
  padding: 2rem 0;

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
