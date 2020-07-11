import React from 'react';
import { string, bool, number, oneOfType, element } from 'prop-types';

import styled from './styled';

const ListItem = ({ type = 'contact', sticky, id, children }) => (
  <styled.ListItem type={type} sticky={sticky}>
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
  type: string,
  sticky: bool,
  id: number,
  children: oneOfType([string, element])
};

ListItem.defaultProps = {
  type: 'contact',
  sticky: false,
  id: 0,
  children: ''
};

export default ListItem;
