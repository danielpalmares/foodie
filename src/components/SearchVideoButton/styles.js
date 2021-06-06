import styled from 'styled-components';

export const SearchVideoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  outline: none;
  border: 2px solid
    ${props =>
      props.active ? props.theme.colors.quartenary : props.theme.colors.border};
  border-radius: 1rem;
  width: fit-content;
  align-self: flex-end;

  background: ${props => props.theme.fontColors.tertiary};
  padding: 0.5rem 1rem;

  font-size: 1.4rem;
  font-weight: 400;
  color: ${props =>
    props.theme.mode === 'light'
      ? props.theme.fontColors.bg
      : props.theme.fontColors.primary};

  cursor: pointer;
  transition: all 0.2s;

  &:active {
    transform: translateY(0.5rem) scale(0.9);
  }
`;
