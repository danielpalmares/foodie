import styled from 'styled-components';

export const SidebarContainer = styled.aside`
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 260px;
    min-width: 260px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: ${props => props.theme.colors.absolute};
    border-right: ${props => props.theme.border.size} solid ${props => props.theme.border.color};
    padding: 2rem 1.5rem;
    z-index: 200;
    overflow-y: auto;
  }
`;

export const LogoArea = styled.div`
  .logo {
    height: 4rem;
    margin-bottom: 2rem;
  }

  .user-info {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: ${props => props.theme.background};
    border-radius: ${props => props.theme.border.radius};
    margin-bottom: 0.5rem;

    .avatar {
      height: 4rem;
      width: 4rem;
      border-radius: 50%;
      flex-shrink: 0;
    }

    div {
      min-width: 0;
      strong {
        display: block;
        font-size: ${props => props.theme.fontSizes.small};
        font-weight: 700;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      span {
        display: block;
        font-size: ${props => props.theme.fontSizes.tiny};
        color: ${props => props.theme.fontColors.tertiary};
      }
    }
  }
`;

export const Divider = styled.hr`
  border: none;
  border-top: ${props => props.theme.border.size} solid ${props => props.theme.border.color};
  margin: 1rem 0;
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  flex: 1;
`;

export const NavItem = styled.li`
  a {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    padding: 1.2rem 1.5rem;
    border-radius: ${props => props.theme.border.radius};
    color: ${props =>
      props.isActive ? props.theme.colors.primary : props.theme.fontColors.primary};
    background: ${props =>
      props.isActive ? `${props.theme.colors.primary}18` : 'transparent'};
    font-weight: ${props => (props.isActive ? 700 : 400)};
    font-size: ${props => props.theme.fontSizes.regular};
    transition: all 0.15s;
    text-decoration: none;

    span {
      font-size: ${props => props.theme.fontSizes.regular};
    }

    &:hover {
      background: ${props => `${props.theme.colors.primary}10`};
      color: ${props => props.theme.colors.primary};
    }
  }
`;

export const BottomActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: auto;

  button {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.2rem 1.5rem;
    border-radius: ${props => props.theme.border.radius};
    border: none;
    background: none;
    font-family: 'Nunito', sans-serif;
    font-size: ${props => props.theme.fontSizes.regular};
    cursor: pointer;
    transition: all 0.15s;
    width: 100%;
    text-align: left;

    &.theme-btn {
      color: ${props => props.theme.fontColors.primary};
      &:hover { background: ${props => props.theme.border.color}; }
    }

    &.logout-btn {
      color: ${props => props.theme.colors.red};
      &:hover { background: ${props => `${props.theme.colors.red}15`}; }
    }
  }
`;
