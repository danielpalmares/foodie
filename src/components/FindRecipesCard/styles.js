import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: ${props => props.theme.colors.tertiary};

  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  border-radius: 1rem;

  margin: 2rem 0;
`;

export const IconContainer = styled.div`
  background: ${props => props.theme.background};
  width: 30%;
  height: 10rem;
  border-radius: 1rem;
  padding: 1rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextContainer = styled.div`
  width: 70%;
  padding: 1rem;

  font-size: 1.7rem;
  font-weight: 400;
  line-height: 1.4;

  p {
    color: ${props => props.theme.fontColors.bg};
  }

  a {
    &:link,
    &:visited {
      width: fit-content;
      color: ${props => props.theme.colors.primary};
      font-weight: 700;

      display: flex;
      align-items: center;
      gap: 0.5rem;

      transition: all 0.2s;
      cursor: pointer;
    }

    &:active {
      transform: translateX(0.5rem);
    }
  }
`;
