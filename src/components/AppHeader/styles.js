import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;

    background: ${props => props.theme.colors.absolute};
    color: ${props => props.theme.fontColors.tertiary};
    border: none;

    padding: 1rem;
    border-radius: ${props => props.theme.border.radius};
    transition: all 0.2s;
    cursor: pointer;

    &:active {
      transform: translateY(0.5rem) scale(0.9);
    }
  }

  img {
    height: calc(86px / 2);
  }
`;

export const UserContainer = styled.div`
  width: 4.6rem;
  height: 4.6rem;
  transition: all 0.2s;

  &:active {
    transform: translateY(0.5rem) scale(0.9);
  }

  img {
    height: 100%;
    width: 100%;
    cursor: pointer;
  }
`;
