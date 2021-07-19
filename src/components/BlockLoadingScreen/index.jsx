import React, { Component } from 'react';

import Spinner from '../Spinner';

import { Container } from './styles';

export default class BlockLoadingScreen extends Component {
  componentDidMount() {
    global.document.body.style.overflowY = 'hidden';
  }

  componentWillUnmount() {
    global.document.body.style.overflowY = 'scroll';
  }

  render() {
    return (
      <Container>
        <Spinner />
      </Container>
    );
  }
}
