import styled from 'styled-components';

export const Container = styled.div`
  background: url(${props => props.imageSrc});
  background-repeat: none;
  background-size: cover;
  background-position: center;

  min-width: 100%;
  height: 16rem;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
  position: relative;

  span {
    position: absolute;
    top: 0;
    left: 0;
    background: ${props => props.theme.colors.primary};
    font-size: 1.7rem;
    font-weight: 700;
    color: #ecedf1;
    padding: 1rem;
    border-bottom-right-radius: 1rem;
    text-transform: uppercase;
  }
`;
