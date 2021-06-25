import styled, { keyframes } from 'styled-components';

export const fillOpacity = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const RecipeCardContainer = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
    url(${props => props.imageSrc});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  min-width: 30rem;

  height: 20rem;

  border-radius: ${props => props.theme.border.radius};
  padding: 2rem 1rem;

  opacity: 0;
  transition: all 0.2s;
  animation: 1s ${fillOpacity} cubic-bezier(0.73, 0.4, 0.4, 0.66) forwards;
`;

export const RecipeCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const RecipeCardTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.h3};
  font-weight: 700;
  color: ${props =>
    props.theme.mode === 'light'
      ? props.theme.fontColors.secondary
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
      ? props.theme.fontColors.secondary
      : props.theme.fontColors.primary};

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-size: ${props => props.theme.fontSizes.small};
    font-weight: 600;
    color: inherit;

    svg {
      color: ${props => props.theme.colors.primary};
      margin-top: -4px;
    }
  }

  button {
    font-family: 'Nunito', sans-serif;
    font-size: ${props => props.theme.fontSizes.small};
    font-weight: 700;
    color: inherit;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;

    outline: none;
    border: none;
    border-radius: ${props => props.theme.border.radius};
    background: ${props =>
      `linear-gradient(to right, ${props.theme.colors.secondary}, ${props.theme.colors.primary})`};
    cursor: pointer;
    transition: all 0.2s;

    &:active {
      transform: translateY(0.5rem) scale(0.9);
    }
  }
`;
