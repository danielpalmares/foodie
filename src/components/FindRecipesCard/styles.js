import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 15rem;
  background: ${props => props.theme.colors.absolute};

  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  /* margin-bottom: 1rem; */

  border: none;
  border-radius: ${props => props.theme.border.radius};
`;

export const IconContainer = styled.div`
  background: ${props => props.theme.background};
  width: 30%;
  height: 100%;
  border-radius: ${props => props.theme.border.radius};
  padding: 1rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const TextContainer = styled.div`
  width: 70%;
  height: 100%;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: center;

  font-size: ${props => props.theme.fontSizes.regular};
  line-height: 1.5;

  overflow: hidden;

  p {
    color: ${props => props.theme.fontColors.primary};
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
