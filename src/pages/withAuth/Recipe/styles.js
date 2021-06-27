import styled from 'styled-components';

export const DirectionButton = styled.button`
  width: fit-content;
  margin: 2rem auto;

  padding: 2rem;
  border: none;
  outline: none;
  border-radius: ${props => props.theme.border.radius};

  background: ${props =>
    `linear-gradient(to right bottom, ${props.theme.colors.tertiary}, ${props.theme.colors.quaternary})`};

  display: flex;
  justify-content: center;
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
    transform: translateX(0.5rem);
  }
`;

export const Container = styled.div`
  margin-bottom: 8rem;

  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 2rem 0;
  }
`;

export const RecipeTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes.h1};
  font-weight: 700;
  line-height: 1.5;
  color: ${props => props.theme.colors.primary};
`;

export const RecipePhoto = styled.div`
  background: url(${props => props.imageSrc});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  height: 20rem;
  position: relative;

  border-radius: ${props => props.theme.border.radius};

  @media screen and (min-width: 425px) {
    height: 30rem;
  }
`;

export const FavoriteButton = styled.button`
  outline: none;
  border: none;
  border-radius: ${props => props.theme.border.radius};

  background: ${props =>
    `linear-gradient(to right bottom, ${props.theme.colors.secondary},${props.theme.colors.quaternary} )`};
  color: ${props => (props.isFavorite ? props.theme.colors.red : '#FFF')};

  height: 5rem;
  width: 5rem;

  cursor: pointer;
  transition: all 0.2s;

  &:active {
    transform: translateY(0.5rem) scale(0.9);
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  gap: 2rem;

  #interactions {
    width: 100%;
    height: 5rem;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    #socialButtons {
      display: flex;
      height: 100%;
      margin-right: auto;
      gap: 1rem;
    }
  }

  #information {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        color: ${props => props.theme.colors.primary};
      }
    }
  }
`;

export const BadgeContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 2rem 0;
`;

export const Badge = styled.span`
  background: ${props => props.theme.colors.secondary};
  padding: 0.5rem 1rem;
  white-space: nowrap;
  border-radius: ${props => props.theme.border.radius};
  color: ${props =>
    props.theme.mode === 'light'
      ? props.theme.fontColors.secondary
      : props.theme.fontColors.primary};
`;

export const IngredientsHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ChangeIngredients = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  border-radius: ${props => props.theme.border.radius};

  padding: 0.5rem 1rem;
  background: ${props => props.theme.colors.quaternary};
  color: ${props =>
    props.theme.mode === 'light'
      ? props.theme.fontColors.secondary
      : props.theme.fontColors.primary};

  span {
    white-space: nowrap;
  }

  button {
    padding: 0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;
    border: none;
    outline: none;
    cursor: pointer;
    color: ${props => props.theme.colors.quaternary};
    background: ${props => props.theme.colors.absolute};
    transition: all 0.2s;

    &:active {
      transform: translateY(0.25rem) scale(0.9);
    }
  }

  .inactive {
    cursor: auto;
    opacity: 0.2;

    &:active {
      transform: none;
    }
  }
`;

export const IngredientsList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;

  gap: 2rem;
  margin: 2rem 0;

  li {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;

    span {
      text-transform: capitalize;
    }

    strong {
      color: ${props => props.theme.colors.primary};
      text-transform: lowercase;
      white-space: nowrap;
    }
  }
`;

export const StepContainer = styled.div`
  margin-bottom: 2rem;

  span {
    font-size: ${props => props.theme.fontSizes.larger};
    font-weight: 700;
    color: ${props => props.theme.colors.secondary};
  }

  p {
    font-size: ${props => props.theme.fontSizes.regular};
    line-height: 1.5;
  }
`;
