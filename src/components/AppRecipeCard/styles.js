import styled from 'styled-components';

export const RecipeCardContainer = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props => props.imageSrc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  width: 100%;
  height: 20rem;

  border-radius: 1rem;
  padding: 2rem 1rem;
  /* margin: 2rem 0; */

  transition: all 0.2s;
`;

export const RecipeCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const RecipeCardTitle = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: ${props =>
    props.theme.mode === 'light'
      ? props.theme.fontColors.bg
      : props.theme.fontColors.primary};

  // for text overflowing
  line-height: 1.5;
  height: 3em;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const RecipeCardInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${props =>
    props.theme.mode === 'light'
      ? props.theme.fontColors.bg
      : props.theme.fontColors.primary};

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-size: 1.4rem;
    font-weight: 600;
    color: inherit;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    font-size: 1.4rem;

    padding: 0.5rem 1rem;

    border: none;
    border-radius: 1rem;
    outline: none;
    background: ${props => props.theme.colors.primary};
    color: inherit;
    cursor: pointer;
    transition: all 0.2s;

    &:active {
      transform: translateY(0.5rem) scale(0.9);
    }
  }
`;
