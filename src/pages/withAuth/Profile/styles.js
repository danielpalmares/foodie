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
  margin: 2rem 0 2.5rem;
  padding: 2.5rem;
  background: ${props => props.theme.colors.absolute};
  border: ${props => props.theme.border.size} solid
    ${props => props.theme.border.color};
  border-radius: ${props => props.theme.border.radius};
`;

export const Avatar = styled.img`
  height: 8rem;
  width: 8rem;
  border-radius: 50%;
  object-fit: contain;
  flex-shrink: 0;
`;

export const UserNameContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: ${props => props.theme.fontSizes.h2};
    font-weight: 800;
    line-height: 1.2;
  }

  span {
    font-size: ${props => props.theme.fontSizes.regular};
    color: ${props => props.theme.fontColors.tertiary};
  }

  .change-avatar {
    display: inline-block;
    margin-top: 0.5rem;
    font-size: ${props => props.theme.fontSizes.small};
    color: ${props => props.theme.colors.primary};
    font-weight: 700;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const Stats = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-bottom: 3rem;
`;

export const StatCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  padding: 1.8rem 1rem;
  background: ${props => props.theme.colors.absolute};
  border: ${props => props.theme.border.size} solid
    ${props => props.theme.border.color};
  border-radius: ${props => props.theme.border.radius};

  svg {
    color: ${props => props.theme.colors.primary};
  }

  strong {
    font-size: ${props => props.theme.fontSizes.h2};
    font-weight: 800;
    color: ${props => props.theme.fontColors.primary};
  }

  > span {
    font-size: ${props => props.theme.fontSizes.tiny};
    color: ${props => props.theme.fontColors.tertiary};
  }
`;

export const StatusBadge = styled.span`
  display: inline-block;
  padding: 0.3rem 1rem;
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
  margin-bottom: 3rem;
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  .count {
    font-size: ${props => props.theme.fontSizes.small};
    color: ${props => props.theme.fontColors.tertiary};
  }
`;

export const ViewAllLink = styled.button`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  background: none;
  border: none;
  color: ${props => props.theme.colors.primary};
  font-family: 'Nunito', sans-serif;
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: 700;
  cursor: pointer;
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
  border: ${props => props.theme.border.size} solid
    ${props => props.theme.border.color};
  overflow: hidden;
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
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
    margin-bottom: 0.3rem;
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: ${props => props.theme.fontSizes.tiny};
    color: ${props => props.theme.fontColors.tertiary};
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  color: ${props => props.theme.fontColors.tertiary};
  font-size: ${props => props.theme.fontSizes.regular};
  padding: 3rem 2rem;
  background: ${props => props.theme.colors.absolute};
  border: ${props => props.theme.border.size} dashed
    ${props => props.theme.border.color};
  border-radius: ${props => props.theme.border.radius};

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-top: 1rem;
    color: ${props => props.theme.colors.primary};
    font-weight: 700;
    font-size: ${props => props.theme.fontSizes.regular};
  }
`;

export const ProgressSection = styled.div`
  margin-bottom: 3rem;
  padding: 1.8rem 2rem;
  background: ${props => props.theme.colors.absolute};
  border: ${props => props.theme.border.size} solid
    ${props => props.theme.border.color};
  border-radius: ${props => props.theme.border.radius};
`;

export const ProgressLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;

  span {
    font-size: ${props => props.theme.fontSizes.small};
    color: ${props => props.theme.fontColors.tertiary};
  }

  strong {
    font-size: ${props => props.theme.fontSizes.small};
    color: ${props => props.theme.fontColors.primary};
    font-weight: 700;
  }
`;

export const ProgressBarTrack = styled.div`
  width: 100%;
  height: 0.6rem;
  border-radius: 10rem;
  overflow: hidden;
  background: ${props => props.theme.border.color};
`;

export const ProgressBarFill = styled.div`
  height: 100%;
  width: ${props => props.progress}%;
  border-radius: 10rem;
  transition: width 0.6s ease;
  background-image: url(${process.env.PUBLIC_URL + 'images/timelineBar.png'});
  background-size: cover;
  background-position: left center;
`;

export const InstructionsContainer = styled.div`
  display: flex;
  margin-top: 3rem;

  a {
    width: fit-content;
    height: fit-content;
    cursor: pointer;
    margin-bottom: -0.5rem;

    img {
      height: 10rem;
    }
  }
`;
