import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 7rem;
  height: 7rem;
  border-radius: ${props => props.theme.border.radius};
  background: ${props => props.theme.colors.absolute};
  color: ${props => props.theme.colors.primary};

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;
