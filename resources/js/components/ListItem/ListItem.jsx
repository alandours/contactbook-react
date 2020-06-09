import React from 'react';
import { string, bool, oneOfType, element } from 'prop-types';

import styled from './styled';

const ListItem = ({ as = 'li', type = 'contact', sticky, id, children }) => (
  <styled.ListItem as={as} type={type} sticky={sticky}>
    {
      id ? (
        <styled.ListLink to={`/contacts/${id}`}>
          { children }
        </styled.ListLink>
      ) : children
    }
  </styled.ListItem>
);

ListItem.propTypes = {
  as: string,
  type: string,
  sticky: bool,
  id: string,
  children: oneOfType([string, element])
};

ListItem.defaultProps = {
  as: 'li',
  type: 'contact',
  sticky: false,
  id: '',
  children: ''
};

export default ListItem;
