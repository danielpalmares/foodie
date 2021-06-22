import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 1rem;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 2rem;

  img {
    height: auto;
    width: 100%;
  }

  a button {
    background: ${props => props.theme.colors.primary};
    outline: none;
    border: none;
    border-radius: ${props => props.theme.border.radius};
    padding: 1rem 2rem;

    display: flex;
    align-items: center;
    gap: 1rem;

    font-family: 'Nunito', sans-serif;
    font-size: ${props => props.theme.fontSizes.larger};
    font-weight: 700;
    color: ${props =>
      props.theme.mode === 'light'
        ? props.theme.fontColors.secondary
        : props.theme.fontColors.primary};

    transition: all 0.2s;
    cursor: pointer;

    &:active {
      transform: translateY(0.5rem) scale(0.9);
    }
  }

  @media screen and (min-width: 768px) {
    max-width: 668px;
    margin: 0 auto;
  }
`;
