import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: auto;

  background: #111;
  padding: 1rem;

  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 100;

  a {
    button {
      background: none;
      outline: none;
      border: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      color: #555;
      cursor: pointer;

      &:active {
        color: #8338ec;
      }

      span {
        font-size: 1.1rem;
      }
    }
  }
`;
