import styled from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  color: ${props => props.theme.fontColors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding: 2rem 0;

  img {
    height: 5rem;
  }

  p {
    font-size: 1.4rem;
    text-align: center;
    line-height: 1.5;
  }
`;
