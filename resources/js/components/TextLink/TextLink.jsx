import React from 'react';
import { bool, string } from 'prop-types';

import styled from './styled';

const TextLink = ({ highlight, children, url, type }) => (
  <styled.TextLink
    to={url}
    href={url}
    as={type || null}
    highlight={highlight ? 1 : 0}
  >
    { children }
  </styled.TextLink>
);

TextLink.propTypes = {
  highlight: bool,
  url: string,
  type: string,
  children: string
};

TextLink.defaultProps = {
  highlight: false,
  url: '',
  type: '',
  children: ''
};

export default TextLink;
