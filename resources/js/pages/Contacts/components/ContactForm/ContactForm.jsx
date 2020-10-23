import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { useForm, FormProvider } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { objectOf, any, func, bool } from 'prop-types';
import { yupResolver } from '@hookform/resolvers';
import * as actions from '@store/actions';
import { appendFormattedData } from '@utils';

import FixedInfo from '@components/FixedInfo';
import ContactMessage from '@components/ContactMessage';
import Button from '@components/Button';
import Loader from '@components/Loader';
import MainForm from './components/MainForm';
import SecondaryForm from './components/SecondaryForm';

import schema from './schema';

import styled from './styled';

const mapStateToProps = (state, ownProps) => ({
  ...state,
  ...ownProps
});

const ContactForm = ({ edit, contact, appData, addContact, updateContact, deleteContact, getContactList, resetContact }) => {
  const [showFixedInfo, setShowFixedInfo] = useState(false);
  const [formLoading, setFormLoading] = useState(true);

  const history = useHistory();
  const formRef = useRef(null);

  const methods = useForm({
    resolver: yupResolver(schema)
  });

  const { handleSubmit, reset } = methods;

  const { id: contactId, message } = contact || {};

  useEffect(() => {
    if (!message) {
      reset(contact);
      setFormLoading(false);
    }

    const { type: messageType } = message || {};

    if (messageType === 'success') history.push(`/contacts/${contactId}`);
  }, [contact]);

  useEffect(() => {
    if (!edit)
      resetContact();
  }, [edit]);

  const handleScroll = (e) => {
    if (e.target === formRef.current) {
      if (e.target.scrollTop > 180) setShowFixedInfo(true);
      else setShowFixedInfo(false);
    }
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    appendFormattedData(formData, data);
    formData.append('image', data.image[0]);

    if (edit)
      updateContact(contactId, formData).then(getContactList);
    else
      addContact(formData).then(getContactList);
  };

  if (!appData || !appData.numberTypes) return null;

  return formLoading ? <Loader /> : (
    <FormProvider { ...methods }>
      <styled.ContactForm
        onSubmit={handleSubmit(onSubmit)}
        onScroll={handleScroll}
        ref={formRef}
      >
        { showFixedInfo && <FixedInfo contact={contact} /> }
        <ContactMessage />
        <MainForm />
        <SecondaryForm />
        <styled.FormActions>
          <Button
            type="button"
            handleClick={() => deleteContact(contactId).then(getContactList)}
            variant="danger"
          >
            Delete contact
          </Button>
          <Button type="submit">
            Save contact
          </Button>
        </styled.FormActions>
      </styled.ContactForm>
    </FormProvider>
  );
};

ContactForm.propTypes = {
  edit: bool,
  contact: objectOf(any),
  appData: objectOf(any),
  addContact: func,
  updateContact: func,
  deleteContact: func,
  getContactList: func,
  resetContact: func
};

ContactForm.defaultProps = {
  edit: false,
  contact: {},
  appData: {},
  addContact: () => {},
  updateContact: () => {},
  deleteContact: () => {},
  getContactList: () => {},
  resetContact: () => {}
};

export default connect(mapStateToProps, actions)(ContactForm);
