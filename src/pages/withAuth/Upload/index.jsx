import React from 'react';

import Layout from '../../Layout';
import UploadForm from '../../../components/UploadForm';

import { UploadContainer } from './styles';

export default function Upload() {
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
