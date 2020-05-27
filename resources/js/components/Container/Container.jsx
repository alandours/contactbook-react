import React from 'react';

import styled from './styled';

const Container = ({ type, children }) => (
  <styled.Container type={type}>
    { children }
  </styled.Container>
);

export default Container;
