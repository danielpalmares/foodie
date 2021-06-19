import styled, { keyframes } from 'styled-components';

const fillOpacity = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  main {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 2rem;
    margin-bottom: 6rem; // navigation bar

    header {
      display: flex;
      flex-direction: column;

      span {
        color: ${props => props.theme.fontColors.tertiary};
        font-size: ${props => props.theme.fontSizes.small};
      }
    }
  }
`;

export const TutorialContainer = styled.div`
  opacity: 0;
  transition: all 0.2s;
  animation: 2s ${fillOpacity} cubic-bezier(0.73, 0.4, 0.4, 0.66) forwards;
`;
