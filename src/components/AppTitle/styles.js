import styled from 'styled-components';

export const Title = styled.h3`
  width: 100%;
  font-size: ${props => props.theme.fontSizes.h3};
  font-weight: 700;
  color: ${props => props.theme.fontColors.primary};
  line-height: 1.5;
`;
