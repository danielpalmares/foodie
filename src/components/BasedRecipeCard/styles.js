import styled from 'styled-components';

export const TextContainer = styled.div`
  overflow: hidden;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  font-weight: 700;

  span {
    font-size: ${props => props.theme.fontSizes.larger};
    color: ${props =>
      props.theme.mode === 'light'
        ? props.theme.fontColors.secondary
        : props.theme.fontColors.primary};
    text-transform: uppercase;
    width: fit-content;
    align-self: center;
    position: relative;
    z-index: 1;
    padding: 0 0.5rem;

    &::after {
      display: block;
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 100%;
      width: 100%;
      z-index: -1;
      opacity: 0.7;
      transform: scale(1.07, 1.05) skewX(344deg);
      background: linear-gradient(to right, #ffbe0b, #fb5607);
    }
  }

  p {
    font-size: ${props => props.theme.fontSizes.small};
    color: ${props =>
      props.theme.mode === 'light'
        ? props.theme.fontColors.secondary
        : props.theme.fontColors.primary};
  }
`;

export const Container = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props => props.imageSrc});
  background-repeat: none;
  background-size: cover;
  background-position: center;

  width: 100%;
  height: 20rem;

  border-radius: 1rem;
  /* overflow: hidden; */
  cursor: pointer;
  text-align: center;
  padding: 2rem;

  font-weight: 700;
`;
