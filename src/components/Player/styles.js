import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;

  div {
    display: flex;
    gap: 1rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-left: auto;
      white-space: nowrap;
    }
  }

  #views {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 1rem 0;
  }
`;

export const PlayerWrapper = styled.div`
  width: 100%;
  height: 20rem;

  border: 2px solid ${props => props.theme.colors.border};
  border-radius: 1rem;
  overflow: hidden;

  @media screen and (min-width: 425px) {
    height: 25rem;
  }

  @media screen and (min-width: 768px) {
    height: 30rem;
  }
`;
