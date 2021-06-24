import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { activePageAction } from '../../../store/activePage';
import { uploadRecipeAction } from '../../../store/uploadRecipe';
import { clearUploadStatusAction } from '../../../store/uploadRecipe';

import Layout from '../../Layout';
import AppTitle from '../../../components/AppTitle';
import UploadForm from '../../../components/UploadForm';
import PopupMessage from '../../../components/PopupMessage';

import { UploadContainer } from './styles';

export default function Upload() {
  const dispatch = useDispatch();

  // getting recipe upload status from state
  const { status, errorStatus } = useSelector(state => state.uploadedRecipe);

  // local states
  const [popup, setPopup] = useState(false);
  const [bodyScroll, setBodyScroll] = useState(true);
  const [message, setMessage] = useState('');

  // page's initial position
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // set the page as active
  useEffect(() => dispatch(activePageAction('upload')));

  // setting the local state with the state from redux
  useEffect(() => {
    status && setMessage(status);
    errorStatus && setMessage(errorStatus);
  }, [status, errorStatus]);

  // if there is any message then display it with the popup
  useEffect(() => {
    if (!message) return;

    setPopup(true);
    setBodyScroll(false);
  }, [message]);

  // toggle body scrolling
  useEffect(() => {
    bodyScroll
      ? (document.body.style.overflowY = 'scroll')
      : (document.body.style.overflowY = 'hidden');
  }, [bodyScroll]);

  function resetPopup() {
    setPopup(false);
    setBodyScroll(true);
    setMessage('');
  }

  // handle functions
  function handleForm(data) {
    dispatch(uploadRecipeAction(data));
    window.scrollTo(0, 0);
  }

  function handlePopup() {
    resetPopup();

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
