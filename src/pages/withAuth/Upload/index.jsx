import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { activePageAction } from '../../../store/activePage';
import { uploadRecipeAction } from '../../../store/uploadRecipe';

import Layout from '../../Layout';
import AppTitle from '../../../components/AppTitle';
import UploadForm from '../../../components/UploadForm';

import { UploadContainer } from './styles';
import { clearUploadStatusAction } from '../../../store/uploadRecipe';

export const Container = styled.div`
  height: 100%;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 150;

  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(3px);

  display: flex;
  justify-content: center;
  align-items: center;

  visibility: ${props => (props.isActive ? 'visible' : 'hidden')};

  div {
    width: 30rem;
    background: ${props => props.theme.colors.secondary};
    border-radius: ${props => props.theme.border.radius};

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1rem;
    padding: 2rem;
    text-align: center;

    p {
      font-size: ${props => props.theme.fontSizes.larger};
      color: ${props =>
        props.theme.mode === 'light'
          ? props.theme.fontColors.primary
          : props.theme.fontColors.secondary};
    }

    button {
      outline: none;
      border: none;
      border-radius: ${props => props.theme.border.radius};
      padding: 0.5rem 1rem;
      background: ${props => props.theme.colors.quaternary};

      font-family: 'Nunito', sans-serif;
      font-size: ${props => props.theme.fontSizes.larger};
      color: ${props =>
        props.theme.mode === 'light'
          ? props.theme.fontColors.secondary
          : props.theme.fontColors.primary};

      cursor: pointer;
    }
  }
`;

function PopupMessage({ message, isActive, handleClick }) {
  return (
    <Container isActive={isActive}>
      <div>
        <p>{message}</p>

        <button onClick={handleClick}>Okay</button>
      </div>
    </Container>
  );
}

export default function Upload() {
  const dispatch = useDispatch();
  const { status, errorStatus } = useSelector(state => state.uploadedRecipe);

  const [popup, setPopup] = useState(false);
  const [bodyScroll, setBodyScroll] = useState(true);
  const [message, setMessage] = useState('');
  console.log(message);

  useEffect(() => {
    status && setMessage(status);
    errorStatus && setMessage(errorStatus);
  }, [status, errorStatus]);

  useEffect(() => {
    if (!message) return;

    setPopup(true);
    setBodyScroll(false);
  }, [message]);

  useEffect(() => {
    bodyScroll
      ? (document.body.style.overflowY = 'scroll')
      : (document.body.style.overflowY = 'hidden');
  }, [bodyScroll]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => dispatch(activePageAction('upload')));

  function handleForm(data) {
    dispatch(uploadRecipeAction(data));
    window.scrollTo(0, 0);
  }

  function handlePopup() {
    setPopup(false);
    setBodyScroll(true);
    setMessage('');
    return dispatch(clearUploadStatusAction());
  }

  return (
    <>
      <PopupMessage
        message={message}
        isActive={popup}
        handleClick={() => handlePopup()}
      />
      <Layout onlyBackButton>
        <UploadContainer>
          <AppTitle>Show us your amazing recipe!</AppTitle>

          <UploadForm handleGetData={handleForm} />
        </UploadContainer>
      </Layout>
    </>
  );
}
