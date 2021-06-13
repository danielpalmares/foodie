import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;

  .up-wrapper {
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

  .player-views,
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

  border: ${props => props.theme.border.size} solid
    ${props => props.theme.border.color};
  border-radius: ${props => props.theme.border.radius};
  overflow: hidden;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
