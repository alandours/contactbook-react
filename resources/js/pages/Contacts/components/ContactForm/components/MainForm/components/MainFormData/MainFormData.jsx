import React from 'react';
import { useFormContext } from 'react-hook-form';

import PageHeader from '@components/PageHeader';
import BigInput from '@components/BigInput';
import TextInput from '@components/TextInput';

import styled from './styled';

const MainFormData = () => {
  const { errors } = useFormContext();

  const {
    name = {},
    lastname = {},
    birthday = {},
    address = {},
    met = {}
  } = errors || {};

  return (
    <PageHeader>
      <styled.FieldContainer>
        <BigInput
          name="name"
          placeholder="Name"
          error={name.message}
        />
        <BigInput
          name="lastname"
          placeholder="Last name"
          error={lastname.message}
        />
      </styled.FieldContainer>
      <styled.FieldContainer>
        <TextInput
          type="date"
          name="birthday"
          placeholder="Birthday"
          error={birthday.message}
        />
      </styled.FieldContainer>
      <styled.FieldContainer>
        <TextInput
          name="address"
          placeholder="Address"
          error={address.message}
        />
      </styled.FieldContainer>
      <styled.FieldContainer>
        <TextInput
          name="met"
          placeholder="Met in"
          error={met.message}
        />
      </styled.FieldContainer>
    </PageHeader>
  );
};

export default MainFormData;
