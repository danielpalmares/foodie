import styled, { keyframes, css } from 'styled-components';

export const ObserverTarget = styled.div`
  display: block;
`;

export const PlayerWrapper = styled.div`
  width: 100%;
  min-height: 20rem;

  border: 2px solid ${props => props.theme.colors.border};
  border-radius: 1rem;
  overflow: hidden;

  @media screen and (min-width: 425px) {
    min-height: 25rem;
  }

  @media screen and (min-width: 768px) {
    min-height: 30rem;
  }
`;

export const Container = styled.div`
  padding: 0 1rem;

  @media screen and (min-width: 768px) {
    max-width: 668px;
    margin: 0 auto;

    padding-left: 0;
    padding-right: 0;
  }

  main {
    header {
      margin: 1rem 0;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      h1 {
        color: ${props => props.theme.colors.primary};
        font-size: 3rem;
        font-weight: 700;
        line-height: 1.2;
      }

      span {
        color: ${props => props.theme.fontColors.secondary};
        font-size: 1.4rem;
      }
    }
  }
`;

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const TutorialSection = styled.section`
  opacity: 0;
  transition: all 0.2s;
  animation: 2s ${fadeIn} cubic-bezier(0.73, 0.4, 0.4, 0.66) forwards;
`;
