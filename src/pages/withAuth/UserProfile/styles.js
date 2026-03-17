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
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin: 2.5rem 0;
  padding: 2.5rem;
  background: ${props => props.theme.colors.absolute};
  border: ${props => props.theme.border.size} solid ${props => props.theme.border.color};
  border-radius: ${props => props.theme.border.radius};
`;

export const Avatar = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`;

export const UserInfo = styled.div`
  flex: 1;
  min-width: 0;

  h2 {
    font-size: ${props => props.theme.fontSizes.h2};
    font-weight: 800;
    line-height: 1.2;
  }

  span {
    display: block;
    font-size: ${props => props.theme.fontSizes.regular};
    color: ${props => props.theme.fontColors.tertiary};
    margin-top: 0.2rem;
  }

  p {
    font-size: ${props => props.theme.fontSizes.small};
    color: ${props => props.theme.fontColors.tertiary};
    margin-top: 0.8rem;
    line-height: 1.5;
  }
`;

export const Stats = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

export const StatItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem;
  background: ${props => props.theme.colors.absolute};
  border: ${props => props.theme.border.size} solid ${props => props.theme.border.color};
  border-radius: ${props => props.theme.border.radius};

  .value {
    font-size: ${props => props.theme.fontSizes.h2};
    font-weight: 800;
    color: ${props => props.theme.colors.primary};
  }

  .label {
    font-size: ${props => props.theme.fontSizes.small};
    color: ${props => props.theme.fontColors.tertiary};
  }
`;

export const StatusBadge = styled.span`
  display: inline-block;
  padding: 0.4rem 1.2rem;
  background: ${props => props.theme.colors.secondary};
  border-radius: 10rem;
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 700;
  color: ${props =>
    props.theme.mode === 'light'
      ? props.theme.fontColors.secondary
      : props.theme.fontColors.primary};
`;

export const RecipesSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const RecipesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const RecipeCard = styled.div`
  background: ${props => props.theme.colors.absolute};
  border-radius: ${props => props.theme.border.radius};
  border: ${props => props.theme.border.size} solid ${props => props.theme.border.color};
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.08);
  }
`;

export const RecipeImage = styled.div`
  width: 100%;
  padding-top: 70%;
  background: ${props =>
    props.imageSrc
      ? `url(${props.imageSrc}) center/cover no-repeat`
      : props.theme.border.color};
`;

export const RecipeCardInfo = styled.div`
  padding: 1.2rem;

  h4 {
    font-size: ${props => props.theme.fontSizes.small};
    font-weight: 700;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1.4;
  }
`;

export const EmptyState = styled.p`
  text-align: center;
  color: ${props => props.theme.fontColors.tertiary};
  font-size: ${props => props.theme.fontSizes.regular};
  padding: 4rem 0;
`;
