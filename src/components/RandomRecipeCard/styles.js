import styled from 'styled-components';

export const Card = styled.div`
  background: ${props =>
    props.active
      ? `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props.imageSrc})`
      : 'transparent'};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  gap: 2rem;

  width: 100%;
  height: 20rem;

  border: ${props =>
    props.active
      ? 'none'
      : `${props.theme.border.size} dashed ${props.theme.border.color}`};
  border-radius: 1rem;
  padding: 2rem 1rem;
  /* margin: 2rem 0; */

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
    font-size: 3rem;
    color: ${props => props.theme.fontColors.tertiary};

    border: ${props =>
      props.active
        ? 'none'
        : `${props.theme.border.size} dashed ${props.theme.border.color}`};
    border-radius: 50%;

    visibility: ${props => (props.active ? 'hidden' : 'visible')};
  }

  button {
    font-family: 'Nunito', sans-serif;
    background: ${props => props.theme.colors.secondary};
    align-self: flex-end;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${props =>
      props.theme.mode === 'light'
        ? props.theme.fontColors.secondary
        : props.theme.fontColors.primary};
    font-size: 1.4rem;
    font-weight: 700;

    outline: none;
    border: none;
    border-radius: 1rem;

    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: all 0.2s;
    z-index: 20;

    &:active {
      transform: translateY(0.5rem) scale(0.9);
    }
  }
`;
