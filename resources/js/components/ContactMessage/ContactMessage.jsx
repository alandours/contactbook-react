import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setContactMessage } from '@store/actions';
import { string, func } from 'prop-types';

import Icon from '@components/Icon';

import styled from './styled';

const mapStateToProps = (state) => {
  const { message: text, type } = state.contact.message || {};
  return {
    text,
    type
  };
};

const mapDispatchToProps = {
  setContactMessage
};

const ContactMessage = ({ text, type, setContactMessage }) => {
  const [visible, setVisible] = useState(true);

  const closeMessage = () => {
    setVisible(false);
    setTimeout(() => {
      setContactMessage(null);
    }, 250);
  };

  useEffect(() => {
    const timeOut = type === 'success' ? 1500 : 4000;

    if (text) {
      const messageTimeout = setTimeout(() => {
        closeMessage();
        clearTimeout(messageTimeout);
      }, timeOut);
    }

    return () => setVisible(true);
  }, [text]);

  return !!text && (
    <styled.ContactMessage type={type} visible={visible}>
      { text }
      <styled.CloseButton
        type="button"
        handleClick={closeMessage}
      >
        <Icon icon="times" />
      </styled.CloseButton>
    </styled.ContactMessage>
  );
};

ContactMessage.propTypes = {
  text: string,
  type: string,
  setContactMessage: func
};

ContactMessage.defaultProps = {
  text: '',
  type: '',
  setContactMessage: () => {}
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactMessage);
