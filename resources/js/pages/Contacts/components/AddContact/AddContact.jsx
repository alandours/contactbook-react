import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import { objectOf, any, func } from 'prop-types';
import { addContact, setContactMessage } from '@store/actions';
import { appendFormattedData } from '@utils';

import FixedInfo from '@components/FixedInfo';
import Button from '@components/Button';
import MainForm from './components/MainForm';
import SecondaryForm from './components/SecondaryForm';

import styled from './styled';

const mapStateToProps = (state) => state;

const mapDispatchToProps = {
  addContact,
  setContactMessage
};

const AddContact = ({ contact, appData, addContact, setContactMessage }) => {
  const [showFixedInfo, setShowFixedInfo] = useState(false);

  const { id: contactId, message } = contact || {};
  const methods = useForm();
  const { handleSubmit, reset } = methods;

  const handleScroll = (e) => {
    if (e.target.scrollTop > 180) setShowFixedInfo(true);
    else setShowFixedInfo(false);
  };

  useEffect(() => {
    if (contactId) reset(contact);

    if (message) {
      setTimeout(() => {
        setContactMessage(null);
      }, 3000);
    }
  }, [contact]);

  const onSubmit = (data) => {
    const formData = new FormData();
    appendFormattedData(formData, data);
    formData.append('image', data.image[0]);

    addContact(formData);
  };

  if (!appData || !appData.numberTypes) return null;

  return (
    <FormProvider { ...methods }>
      { message && message && <div>{message}</div> }
      <styled.FormContainer onSubmit={handleSubmit(onSubmit)} onScroll={handleScroll}>
        { showFixedInfo && <FixedInfo contact={contact} /> }
        <MainForm />
        <SecondaryForm />
        <Button type="submit">
          Save contact
        </Button>
      </styled.FormContainer>
    </FormProvider>
  );
};

AddContact.propTypes = {
  contact: objectOf(any),
  appData: objectOf(any),
  addContact: func,
  setContactMessage: func
};

AddContact.defaultProps = {
  contact: {},
  appData: {},
  addContact: () => {},
  setContactMessage: () => {}
};

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);
