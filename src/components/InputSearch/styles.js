import styled from 'styled-components';

export const InputWrapper = styled.div`
  width: 100%;
  position: relative;

  input {
    font-family: 'Nunito', sans-serif;
    font-size: ${props => props.theme.fontSizes.regular};
    color: ${props => props.theme.fontColors.primary};

    width: 100%;
    padding: 1.6rem 5.5rem 1.6rem 1.5rem;

    background: ${props => props.theme.colors.absolute};
    border: ${props => props.theme.border.size} solid ${props => props.theme.border.color};
    border-radius: ${props => props.theme.border.radius};
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;

    &:focus {
      border-color: ${props => props.theme.colors.primary};
      box-shadow: 0 0 0 3px ${props => `${props.theme.colors.primary}20`};
    }

    &::placeholder {
      font-size: ${props => props.theme.fontSizes.small};
      font-weight: 600;
      color: ${props => props.theme.fontColors.tertiary};
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;

    color: #fff;
    padding: 0.8rem;

    background: ${props => props.theme.colors.primary};
    outline: none;
    border: none;
    border-radius: 0.8rem;

    position: absolute;
    top: 50%;
    right: 0.8rem;
    transform: translateY(-50%);

    transition: all 0.2s;
    cursor: pointer;

    &:hover {
      background: ${props => props.theme.colors.quaternary};
    }

    &:active {
      transform: translateY(-50%) scale(0.9);
    }
  }
`;
