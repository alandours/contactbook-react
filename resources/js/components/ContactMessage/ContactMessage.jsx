import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setContactMessage } from '@store/actions';

import styled from './styled';

const mapStateToProps = (state) => state;

const mapDispatchToProps = {
  setContactMessage
};

const ContactMessage = ({ contact, setContactMessage }) => {
  const { message } = contact;
  const { type, message: messageText } = message || {};

  useEffect(() => {
    console.log(message);
    if (message) {
      setTimeout(() => {
        setContactMessage(null);
      }, 3000);
    }
  }, [message]);

  return message && (
    <styled.ContactMessage type={type}>
      { messageText }
    </styled.ContactMessage>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactMessage);
