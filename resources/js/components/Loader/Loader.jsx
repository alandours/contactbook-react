import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from './styled';

const Loader = () => (
  <styled.Loader>
    <FontAwesomeIcon icon="spinner" pulse size="2x" />
  </styled.Loader>
);

export default Loader;
