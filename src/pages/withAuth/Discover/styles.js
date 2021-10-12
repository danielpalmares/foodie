import styled, { keyframes } from 'styled-components';

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
  span {
    font-size: ${props => props.theme.fontSizes.regular};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    opacity: 0;

    animation: 5s ${fillOpacity} linear infinite;
  }
`;

export const Container = styled.div`
  background-color: ${props => props.theme.background};
  border-bottom-left-radius: ${props => props.theme.border.radius};
  border-bottom-right-radius: ${props => props.theme.border.radius};
  min-height: 100vh;

  padding: 0 1rem;

  main {
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 2rem 0;
  }
`;

export const HorizontalList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  overflow: scroll;
  padding: 1rem 0;

  li button {
    font-family: 'Nunito', sans-serif;
    font-size: ${props => props.theme.fontSizes.larger};
    font-weight: 700;
    color: ${props =>
      props.theme.mode === 'light'
        ? props.theme.fontColors.secondary
        : props.theme.fontColors.primary};

    text-align: center;
    white-space: nowrap;

    outline: none;
    border: none;
    padding: 1rem;
    border-radius: ${props => props.theme.border.radius};

    background: ${props =>
      `linear-gradient(to right bottom, ${props.theme.colors.tertiary}, ${props.theme.colors.quaternary})`};
    transition: all 0.2s;
    cursor: pointer;
  }
`;
