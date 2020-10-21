import React from 'react';
import { useFormContext } from 'react-hook-form';

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
    <styled.MainFormData>
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
    </styled.MainFormData>
  );
}

export default MainFormData;
