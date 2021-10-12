import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: auto;
  padding: 1rem;

  background: ${props => props.theme.background};
  border-top: ${props => props.theme.border.size} solid
    ${props => props.theme.border.color};

  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 100;

  @media screen and (min-width: 800px) {
    max-width: 768px;

    left: 50%;
    transform: translate(-50%, 0);

    border-left: ${props => props.theme.border.size} solid
      ${props => props.theme.border.color};
    border-right: ${props => props.theme.border.size} solid
      ${props => props.theme.border.color};
    border-radius: ${props => props.theme.border.radius};
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

export const Button = styled.button`
  background: none;
  outline: none;
  border: none;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: ${props =>
    props.isActive
      ? props.theme.colors.primary
      : props.theme.fontColors.tertiary};
  cursor: pointer;

  span {
    font-size: 1.1rem; // unique situation
  }
`;
