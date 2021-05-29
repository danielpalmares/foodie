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
  height: 18rem;

  border-radius: 1rem;
  padding: 2rem 1rem;

  transition: all 0.2s;
  cursor: pointer;
`;

export const RecipeCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-size: 1.4rem;
    font-weight: 600;
    color: ${props => props.theme.fontColors.secondary};
  }
`;

export const RecipeCardTitle = styled.h3`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.5;
  color: ${props => props.theme.fontColors.primary};
`;
