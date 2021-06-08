import styled from 'styled-components';

export const Container = styled.div`
  width: 20rem;
  height: auto;
  background: ${props => props.theme.colors.tertiary};
  padding: 0.5rem 1rem;
  border-radius: 0 1rem 1rem 1rem;

  font-size: 1.4rem;
  font-weight: 400;
  color: ${props => props.theme.fontColors.bg};
  position: relative;

  align-self: center;
  margin-left: 2rem;

  visibility: ${props => (props.active ? 'visible' : 'hidden')};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -9%;
    width: 2rem;
    height: 1rem;
    background: ${props => props.theme.colors.tertiary};
    clip-path: polygon(100% 0, 0 0, 100% 100%);
  }
`;
