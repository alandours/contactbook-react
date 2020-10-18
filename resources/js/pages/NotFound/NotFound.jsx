import React from 'react';
import { string } from 'prop-types';

import styled from './styled';

const NotFound = ({ page }) => {
  const defaultData = {
    title: '404',
    message: '404 bro'
  };

  const data = {
    contact: {
      title: 'The contact does not exist',
      message: 'The contact couldn\'t be found. Select another one from the contact list'
    }
  };

  const { title, message } = data[page] || defaultData;

  return (
    <styled.NotFound>
      <styled.NotFoundTitle>
        { title }
      </styled.NotFoundTitle>
      <p>{ message }</p>
    </styled.NotFound>
  );
};

NotFound.propTypes = {
  page: string
};

NotFound.defaultProps = {
  page: ''
};

export default NotFound;
