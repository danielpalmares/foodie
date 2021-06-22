import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${props => props.imageSrc});
  background-repeat: none;
  background-size: cover;
  background-position: center;

  width: 100%;
  height: 20rem;

  border-radius: 1rem;
  padding: 2rem;
  cursor: pointer;

  span {
    font-size: ${props => props.theme.fontSizes.larger};
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    color: ${props =>
      props.theme.mode === 'light'
        ? props.theme.fontColors.secondary
        : props.theme.fontColors.primary};

    padding: 0 0.5rem;
    width: fit-content;

    position: relative;
    z-index: 1;

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
`;
