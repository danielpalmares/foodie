import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 8rem;
  margin-top: 2rem;
  animation: 0.4s ${fadeIn} ease-out;
`;

export const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ResultCard = styled.div`
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

export const ResultImage = styled.div`
  width: 100%;
  padding-top: 70%;
  background: ${props => props.imageSrc ? `url(${props.imageSrc}) center/cover no-repeat` : props.theme.border.color};
`;

export const ResultInfo = styled.div`
  padding: 1.2rem;

  h4 {
    font-size: ${props => props.theme.fontSizes.small};
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
