import React from 'react';
import { bool, string, oneOfType, element, node } from 'prop-types';

import styled from './styled';

const ContactBookLink = ({ url, type, highlight, title, variant, children, className }) => (
  <styled.ContactBookLink
    to={url}
    href={url}
    as={type || null}
    highlight={highlight ? 1 : 0}
    title={title}
    variant={variant}
    className={className}
  >
    { children }
  </styled.ContactBookLink>
);

ContactBookLink.propTypes = {
  url: string.isRequired,
  type: string,
  highlight: bool,
  title: string,
  variant: string,
  children: oneOfType([string, element, node]),
  className: string
};

ContactBookLink.defaultProps = {
  type: '',
  highlight: false,
  title: '',
  variant: '',
  children: '',
  className: ''
};

export default ContactBookLink;
