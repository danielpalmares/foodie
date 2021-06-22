import React, { useEffect } from 'react';

import Layout from '../../Layout';
import UploadForm from '../../../components/UploadForm';

import { UploadContainer } from './styles';

import { useDispatch } from 'react-redux';
import { activePageAction } from '../../../store/activePage';
import { useObserver } from '../../../hooks';

export default function Upload() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();

  useEffect(() => dispatch(activePageAction('upload')));
  return (
    <>
      <Layout onlyBackButton>
        <UploadContainer>
          <h1>Show us your amazing recipe!</h1>

          <UploadForm />
        </UploadContainer>
      </Layout>
    </>
  );
}
