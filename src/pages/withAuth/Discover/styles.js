import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div`
  padding-bottom: 8rem;
  animation: 0.4s ${fadeIn} ease-out;

  > section {
    margin: 3rem 0;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const HeroSection = styled.section`
  margin: 2rem 0 3rem;

  .hero-text {
    margin-bottom: 2rem;

    h1 {
      font-size: ${props => props.theme.fontSizes.h1};
      font-weight: 800;
      line-height: 1.3;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      flex-wrap: wrap;

      svg {
        color: ${props => props.theme.colors.primary};
      }
    }

    p {
      font-size: ${props => props.theme.fontSizes.regular};
      color: ${props => props.theme.fontColors.tertiary};
      margin-top: 0.5rem;
    }
  }
`;

export const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  transition: transform 0.2s;

  &:active {
    transform: translateX(4px);
  }
`;

export const FeaturedSection = styled.section`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FeaturedScroll = styled.div`
  display: flex;
  gap: 1.5rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding: 0.5rem 0 1rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FeaturedCard = styled.div`
  min-width: 22rem;
  flex-shrink: 0;
  scroll-snap-align: start;
  background: ${props => props.theme.colors.absolute};
  border-radius: ${props => props.theme.border.radius};
  border: ${props => props.theme.border.size} solid ${props => props.theme.border.color};
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(-2px);
  }

  @media (min-width: 768px) {
    min-width: 26rem;
  }
`;

export const FeaturedImage = styled.div`
  width: 100%;
  height: 14rem;
  background: ${props =>
    props.imageSrc
      ? `url(${props.imageSrc}) center/cover no-repeat`
      : props.theme.border.color};

  @media (min-width: 768px) {
    height: 16rem;
  }
`;

export const FeaturedInfo = styled.div`
  padding: 1.2rem;

  h4 {
    font-size: ${props => props.theme.fontSizes.small};
    font-weight: 700;
    line-height: 1.4;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: 0.5rem;
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: ${props => props.theme.fontSizes.tiny};
    color: ${props => props.theme.fontColors.tertiary};
  }
`;

export const QuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 1024px) {
    flex-direction: row;

    > * {
      flex: 1;
    }
  }
`;

export const CommunityGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CommunityCard = styled.div`
  background: ${props => props.theme.colors.absolute};
  border-radius: ${props => props.theme.border.radius};
  border: ${props => props.theme.border.size} solid ${props => props.theme.border.color};
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
  }
`;

export const CommunityImage = styled.div`
  width: 100%;
  padding-top: 70%;
  background: ${props =>
    props.imageSrc
      ? `url(${props.imageSrc}) center/cover no-repeat`
      : props.theme.border.color};
`;

export const CommunityInfo = styled.div`
  padding: 1rem;

  h4 {
    font-size: ${props => props.theme.fontSizes.tiny};
    font-weight: 700;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    line-height: 1.4;
    margin-bottom: 0.4rem;
  }

  span {
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: ${props => props.theme.fontSizes.tiny};
    color: ${props => props.theme.fontColors.tertiary};
  }
`;
