import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { objectOf, any, func } from 'prop-types';
import { addContact, updateContact, setContactMessage } from '@store/actions';
import { appendFormattedData } from '@utils';

import FixedInfo from '@components/FixedInfo';
import ContactMessage from '@components/ContactMessage';
import Button from '@components/Button';
import MainForm from './components/MainForm';
import SecondaryForm from './components/SecondaryForm';

import styled from './styled';

const mapStateToProps = (state) => state;

const mapDispatchToProps = {
  addContact,
  updateContact,
  setContactMessage
};

const ContactForm = ({ contact, appData, addContact, updateContact, setContactMessage, action }) => {
  const [showFixedInfo, setShowFixedInfo] = useState(false);
  const history = useHistory();

  const { id: contactId, message } = contact || {};
  const methods = useForm();
  const { handleSubmit, reset } = methods;

  const handleScroll = (e) => {
    if (e.target.scrollTop > 180) setShowFixedInfo(true);
    else setShowFixedInfo(false);
  };

  useEffect(() => {
    if (contactId) reset(action === 'add' ? {} : contact);
    if (message && message.type === 'success') history.push(`/contacts/${contactId}`);
  }, [contact]);

  const onSubmit = (data) => {
    const formData = new FormData();
    appendFormattedData(formData, data);
    formData.append('image', data.image[0]);

    if (action === 'add') {
      addContact(formData);
    } else {
      updateContact(contactId, formData);
    }
  };

  if (!appData || !appData.numberTypes) return null;

  return (action === 'add' || (action === 'edit' && contactId)) && (
    <FormProvider { ...methods }>
      <styled.FormContainer onSubmit={handleSubmit(onSubmit)} onScroll={handleScroll}>
        { showFixedInfo && <FixedInfo contact={contact} /> }
        <ContactMessage />
        <MainForm />
        <SecondaryForm />
        <Button type="submit">
          Save contact
        </Button>
      </styled.FormContainer>
    </FormProvider>
  );
};

ContactForm.propTypes = {
  contact: objectOf(any),
  appData: objectOf(any),
  addContact: func,
  updateContact: func,
  setContactMessage: func
};

ContactForm.defaultProps = {
  contact: {},
  appData: {},
  addContact: () => {},
  updateContact: () => {},
  setContactMessage: () => {}
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
