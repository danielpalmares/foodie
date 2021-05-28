import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../contexts/GlobalContextProvider';

import styles from '../styles/pages/Upload.module.scss';

import Layout from './Layout';

import UploadForm from '../components/UploadForm';

export default function Upload() {
  const { addActivePage } = useContext(GlobalContext);

  useEffect(() => {
    return addActivePage('Upload');
  });

  return (
    <Layout onlyBackButton>
      <div className={styles.upload}>
        <h1>Show us your amazing recipe!</h1>

        <UploadForm />
      </div>
    </Layout>
  );
}
