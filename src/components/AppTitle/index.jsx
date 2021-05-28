import React from 'react';

import { Title } from './styles';

export default function AppTitle({ children, hasBorder = false }) {
  return <Title hasBorder={hasBorder}>{children}</Title>;
}
