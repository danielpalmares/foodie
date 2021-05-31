import styled, { keyframes } from 'styled-components';

const rotating = keyframes`
  from {
    transform: rotate(0deg);
  }

  to { 
    transform: rotate(360deg);
  }
`;

export const SpinnerLoading = styled.div`
  height: 5rem;
  width: 5rem;
  background: transparent;
  border: 5px solid transparent;
  border-top-color: ${props => props.theme.colors.primary};
  border-right-color: ${props => props.theme.colors.primary};
  border-radius: 50%;
  margin: 0 auto;

  animation: 1s ${rotating} cubic-bezier(0.72, 0.9, 0.76, 0.13) infinite;
`;
