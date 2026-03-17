import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div`
  padding-bottom: 8rem;
  animation: 0.4s ${fadeIn} ease-out;
`;

export const FeedHeader = styled.div`
  margin: 2rem 0 2.5rem;

  p {
    color: ${props => props.theme.fontColors.tertiary};
    font-size: ${props => props.theme.fontSizes.small};
    margin-top: 0.5rem;
  }
`;

export const Feed = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  max-width: 56rem;

  @media (min-width: 768px) {
    margin: 0 auto;
  }
`;

export const PostCard = styled.div`
  background: ${props => props.theme.colors.absolute};
  border-radius: ${props => props.theme.border.radius};
  border: ${props => props.theme.border.size} solid ${props => props.theme.border.color};
  overflow: hidden;
  animation: 0.5s ${fadeIn} ease-out backwards;

  &:nth-child(2) { animation-delay: 0.05s; }
  &:nth-child(3) { animation-delay: 0.1s; }
  &:nth-child(4) { animation-delay: 0.15s; }
`;

export const PostImage = styled.div`
  width: 100%;
  padding-top: 80%;
  background: ${props => props.imageSrc
    ? `url(${props.imageSrc}) center/cover no-repeat`
    : props.theme.border.color};
  cursor: pointer;
  transition: opacity 0.2s;

  &:active {
    opacity: 0.9;
  }
`;

export const PostActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;

  .left {
    display: flex;
    align-items: center;
    gap: 1.2rem;
  }
`;

export const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.isActive ? props.theme.colors.red : props.theme.fontColors.primary};
  transition: transform 0.15s, color 0.15s;
  padding: 0.3rem;

  &:active {
    transform: scale(0.85);
  }
`;

export const PostInfo = styled.div`
  padding: 0 1.5rem 1.5rem;
  cursor: pointer;

  h3 {
    font-size: ${props => props.theme.fontSizes.regular};
    font-weight: 700;
    line-height: 1.4;
    margin-bottom: 0.5rem;
  }
`;

export const PostMeta = styled.div`
  display: flex;
  gap: 1.5rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: ${props => props.theme.fontSizes.small};
    color: ${props => props.theme.fontColors.tertiary};
  }
`;

export const EmptyState = styled.p`
  text-align: center;
  color: ${props => props.theme.fontColors.tertiary};
  font-size: ${props => props.theme.fontSizes.regular};
  padding: 6rem 0;
`;
