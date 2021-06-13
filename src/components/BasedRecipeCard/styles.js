import styled from 'styled-components';

export const TextContainer = styled.div`
  overflow: hidden;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;
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
  span {
    font-size: ${props => props.theme.fontSizes.larger};
    color: ${props => props.theme.colors.secondary};
    text-transform: uppercase;
  }

  p {
    font-size: ${props => props.theme.fontSizes.small};
    color: ${props =>
      props.theme.mode === 'light'
        ? props.theme.fontColors.secondary
        : props.theme.fontColors.primary};
  }
`;
