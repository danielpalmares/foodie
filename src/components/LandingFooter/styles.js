import styled from 'styled-components';

export const Footer = styled.footer`
  height: auto;
  width: 100%;
  background: ${props =>
    props.theme.mode === 'light'
      ? props.theme.colors.tertiary
      : props.theme.background};

  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  border-top: 2px solid ${props => props.theme.colors.border};
  position: relative;

  div {
    position: absolute;
    top: -19%;
    right: 5%;
    z-index: 10;

    a {
      button {
        color: #4078c0; // github color
        background: ${props => props.theme.background};

        border: 2px solid ${props => props.theme.colors.border};
        outline: none;
        border-radius: 1rem;
        padding: 1rem;

        display: flex;
        justify-content: center;
        align-items: center;

        transition: all 0.2s;
        cursor: pointer;

        &:active {
          transform: translateY(0.5rem) scale(0.9);
        }
      }
    }
  }

  img {
    height: calc(86px / 2);
  }

  p {
    font-size: 1.4rem;
    color: ${props => props.theme.fontColors.secondary};
    font-weight: 400;
    text-align: center;
    line-height: 1.5;
  }
`;
