import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import { objectOf, any, func } from 'prop-types';
import { updateContact, setContactMessage } from '@store/actions';
import { appendFormattedData } from '@utils';

import FixedInfo from '@components/FixedInfo';
import Button from '@components/Button';
import MainForm from './components/MainForm';
import SecondaryForm from './components/SecondaryForm';

import styled from './styled';

const mapStateToProps = (state) => state;

const mapDispatchToProps = {
  updateContact,
  setContactMessage
};

const EditContact = ({ contact, appData, updateContact, setContactMessage }) => {
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

    updateContact(contactId, formData);
  };

  if (!appData || !appData.numberTypes) return null;

  return contactId && (
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

EditContact.propTypes = {
  contact: objectOf(any),
  appData: objectOf(any),
  updateContact: func,
  setContactMessage: func
};

EditContact.defaultProps = {
  contact: {},
  appData: {},
  updateContact: () => {},
  setContactMessage: () => {}
};

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);
