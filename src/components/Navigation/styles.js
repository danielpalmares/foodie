import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: auto;
  padding: 1rem;

  background: ${props => props.theme.background};
  border: 2px solid ${props => props.theme.colors.border};
  border-bottom: none;

  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 100;

  @media screen and (min-width: 768px) {
    max-width: 568px;
    margin: 0 auto;

    left: 50%;
    transform: translate(-50%, 0);
    border-radius: 1rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  a {
    button {
      background: none;
      outline: none;
      border: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      color: ${props => props.theme.fontColors.secondary};
      cursor: pointer;

      &:active {
        color: ${props => props.theme.colors.primary};
      }

      span {
        font-size: 1.1rem;
      }
    }
  }
`;