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
  padding-bottom: 6rem;

  header {
    display: flex;
    flex-direction: column;
    margin-bottom: 4rem;

    span {
      font-size: ${props => props.theme.fontSizes.small};
      font-weight: 600;
      color: ${props => props.theme.fontColors.primary};
      margin-bottom: 3rem;
    }
  }
`;
