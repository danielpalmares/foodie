import styled from 'styled-components';

export const Container = styled.div`
  div {
    width: 30rem;
    height: 20rem;
    background: none;

    border: ${props => props.theme.border.size} dashed
      ${props => props.theme.border.color};
    border-radius: ${props => props.theme.border.radius};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    justify-content: center;
    gap: 2rem;
    padding: 2rem;
    color: ${props => props.theme.fontColors.tertiary};

    p {
      text-align: center;
      font-size: ${props => props.theme.fontSizes.larger};
      color: inherit;
      line-height: 1.5;
      border: ${props => props.theme.border.size} dashed
        ${props => props.theme.border.color};
      padding: 2rem;
      border-radius: ${props => props.theme.border.radius};
    }
  }
`;
