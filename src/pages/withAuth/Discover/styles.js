import styled from 'styled-components';

export const Container = styled.div`
  main {
    display: flex;
    flex-direction: column;
    margin-bottom: 6rem; // because of navigation
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

    background: ${props => props.theme.colors.tertiary};
    transition: all 0.2s;
    cursor: pointer;
  }
`;
