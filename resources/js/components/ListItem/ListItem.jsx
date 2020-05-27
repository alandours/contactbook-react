import React from 'react';


import styled from './styled';

const ListItem = ({ type = 'contact', id, children }) => (
  <styled.ListItem type={type}>
    {
      id ? (
        <styled.ListLink to={`/contacts/${id}`}>
          { children }
        </styled.ListLink>
      ) : children
    }
  </styled.ListItem>
);

export default ListItem;
