import styled from 'styled-components';

export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 4rem 0;
`;

export const GridLayout = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  gap: 2rem;
`;

export const SearchContainer = styled.div`
  background-color: ${props => props.theme.background};
  border-bottom-left-radius: ${props => props.theme.border.radius};
  border-bottom-right-radius: ${props => props.theme.border.radius};
  min-height: 100vh;
  padding: 0 1rem;

  header {
    display: flex;
    flex-direction: column;

    span {
      font-size: ${props => props.theme.fontSizes.small};
      font-weight: 600;
      color: ${props => props.theme.fontColors.tertiary};
      margin-bottom: 3rem;
    }
  }
`;
