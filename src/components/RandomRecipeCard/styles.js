import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  width: 100%;
  height: 20rem;

  border: ${props => props.theme.border.size} dashed
    ${props => props.theme.border.color};
  border-radius: ${props => props.theme.border.radius};
  padding: 2rem 1rem;

  transition: all 0.2s;
  position: relative;

  &::after {
    content: '?';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 5rem;
    height: 5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 700;
    font-size: 3rem; // unique situation
    color: ${props => props.theme.fontColors.tertiary};

    border: ${props => props.theme.border.size} dashed
      ${props => props.theme.border.color};
    border-radius: 50%;
  }

  button {
    font-family: 'Nunito', sans-serif;
    font-size: ${props => props.theme.fontSizes.small};
    font-weight: 700;
    color: ${props =>
      props.theme.mode === 'light'
        ? props.theme.fontColors.secondary
        : props.theme.fontColors.primary};

    display: flex;
    align-items: center;
    justify-content: center;
    align-self: flex-end;

    outline: none;
    border: none;
    border-radius: 1rem;
    background: ${props => props.theme.colors.quaternary};

    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: all 0.2s;
    z-index: 20;

    &:active {
      transform: translateY(0.5rem) scale(0.9);
    }
  }
`;
