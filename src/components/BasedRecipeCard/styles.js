import styled from 'styled-components';

export const Container = styled.div`
  background: url(${props => props.imageSrc});
  background-repeat: none;
  background-size: cover;
  background-position: center;

  width: 100%;
  height: 20rem;

  border-radius: 1rem;
  /* overflow: hidden; */
  cursor: pointer;
  position: relative;

  span {
    position: absolute;
    top: -5%;
    left: 0;
    background: ${props => props.theme.colors.primary};
    font-size: 1.6rem;
    font-weight: 700;
    color: #ecedf1;
    text-transform: uppercase;
    padding: 1rem;

    border: 5px solid ${props => props.theme.fontColors.bg};
    border-radius: 1rem;
    border-left: none;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
`;
