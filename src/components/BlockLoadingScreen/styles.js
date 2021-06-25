import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 140;

  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);

  display: flex;
  justify-content: center;
  align-items: center;
`;
