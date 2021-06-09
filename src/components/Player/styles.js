import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;

  div {
    display: flex;
    gap: 1rem;

    .player-timing {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-left: auto;
      white-space: nowrap;

      svg {
        color: ${props => props.theme.colors.primary};
      }
    }
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin: 1rem 0;

  .player-views {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .player-rating {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  svg {
    color: ${props => props.theme.colors.primary};
  }
`;

export const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */

  /* width: 100%;
  height: 20rem; */

  border: 2px solid ${props => props.theme.colors.border};
  border-radius: 1rem;
  overflow: hidden;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }

  /* @media screen and (min-width: 425px) {
    height: 25rem;
  }

  @media screen and (min-width: 768px) {
    height: 30rem;
  } */
`;
