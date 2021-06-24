import styled from 'styled-components';

export const Container = styled.div`
  div {
    width: 30rem;
    min-height: 20rem;
    background: none;
    border: ${props => props.theme.border.size} dashed
      ${props => props.theme.border.color};
    border-radius: ${props => props.theme.border.radius};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 2rem;

    p {
      text-align: center;
      font-size: ${props => props.theme.fontSizes.larger};
      color: ${props => props.theme.fontColors.tertiary};
      line-height: 1.5;
      border: ${props => props.theme.border.size} dashed
        ${props => props.theme.border.color};
      padding: 2rem;
      border-radius: ${props => props.theme.border.radius};
    }
  }
`;
