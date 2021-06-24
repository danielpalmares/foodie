import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 150;

  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);

  display: flex;
  justify-content: center;
  align-items: center;

  visibility: ${props => (props.isActive ? 'visible' : 'hidden')};

  div {
    width: 30rem;
    background: ${props => props.theme.colors.secondary};
    border-radius: ${props => props.theme.border.radius};

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1rem;
    padding: 2rem;
    text-align: center;

    p {
      font-size: ${props => props.theme.fontSizes.larger};
      color: ${props =>
        props.theme.mode === 'light'
          ? props.theme.fontColors.primary
          : props.theme.fontColors.secondary};
    }

    button {
      outline: none;
      border: none;
      border-radius: ${props => props.theme.border.radius};
      padding: 0.5rem 1rem;
      background: ${props => props.theme.colors.quaternary};

      font-family: 'Nunito', sans-serif;
      font-size: ${props => props.theme.fontSizes.larger};
      color: ${props =>
        props.theme.mode === 'light'
          ? props.theme.fontColors.secondary
          : props.theme.fontColors.primary};

      cursor: pointer;
    }
  }
`;
