import styled from 'styled-components';

export const Title = styled.h4`
  width: 100%;
  font-size: 2rem;
  font-weight: 700;
  color: ${props => props.theme.fontColors.primary};
  line-height: 1.5;
  padding: 1rem 0;

  border-top: 2px solid
    ${props => (props.hasBorder ? props.theme.colors.border : 'transparent')};
  border-bottom: 2px solid
    ${props => (props.hasBorder ? props.theme.colors.border : 'transparent')};
`;
