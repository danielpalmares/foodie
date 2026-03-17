import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div`
  padding-bottom: 8rem;
  max-width: 70rem;
  animation: 0.4s ${fadeIn} ease-out;

  @media (min-width: 768px) {
    margin: 0 auto;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 2.5rem 0;
  }
`;

export const RecipeHero = styled.div`
  margin: 2rem 0 1.5rem;
`;

export const RecipeTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes.h1};
  font-weight: 800;
  line-height: 1.3;
  color: ${props => props.theme.fontColors.primary};
  margin-bottom: 1rem;
`;

export const MetaRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const MetaBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.2rem;
  background: ${props => props.theme.colors.absolute};
  border: ${props => props.theme.border.size} solid ${props => props.theme.border.color};
  border-radius: 10rem;
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 600;
  color: ${props => props.theme.fontColors.tertiary};

  svg {
    color: ${props => props.theme.colors.primary};
  }
`;

export const RecipePhoto = styled.div`
  background: ${props => props.imageSrc ? `url(${props.imageSrc}) center/cover no-repeat` : props.theme.border.color};
  height: 24rem;
  border-radius: ${props => props.theme.border.radius};

  @media (min-width: 425px) {
    height: 32rem;
  }

  @media (min-width: 768px) {
    height: 40rem;
  }
`;

export const InfoContainer = styled.div`
  margin: 1.5rem 0;
`;

export const ShareSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .share-buttons {
    display: flex;
    gap: 1rem;
  }
`;

export const FavoriteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4.5rem;
  height: 4.5rem;
  border: ${props => props.theme.border.size} solid ${props => props.theme.border.color};
  border-radius: ${props => props.theme.border.radius};
  background: ${props => props.theme.colors.absolute};
  cursor: pointer;
  transition: all 0.2s;

  &:active {
    transform: scale(0.9);
  }
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
  color: ${props => props.theme.mode === 'light' ? props.theme.fontColors.secondary : props.theme.fontColors.primary};

  span { white-space: nowrap; }

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
    &:active { transform: translateY(0.25rem) scale(0.9); }
  }

  .inactive {
    cursor: auto;
    opacity: 0.2;
    &:active { transform: none; }
  }
`;

export const IngredientsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 1rem 0;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 1.2rem 1.5rem;
    background: ${props => props.theme.colors.absolute};
    border: ${props => props.theme.border.size} solid ${props => props.theme.border.color};
    border-radius: ${props => props.theme.border.radius};

    span { text-transform: capitalize; }
    strong {
      color: ${props => props.theme.colors.primary};
      text-transform: lowercase;
      white-space: nowrap;
    }
  }
`;

export const StepContainer = styled.div`
  margin-bottom: 1.5rem;
  padding: 1.5rem;
  background: ${props => props.theme.colors.absolute};
  border: ${props => props.theme.border.size} solid ${props => props.theme.border.color};
  border-radius: ${props => props.theme.border.radius};

  span {
    font-size: ${props => props.theme.fontSizes.small};
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  p {
    font-size: ${props => props.theme.fontSizes.regular};
    line-height: 1.6;
    margin-top: 0.8rem;
  }
`;
