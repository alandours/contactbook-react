import React from 'react';
import { useFormContext } from 'react-hook-form';

import Input from '@components/Form/Input';

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
    <styled.MainInfo>
      <styled.FieldContainer type="multiline">
        <Input
          name="name"
          placeholder="Name"
          error={name.message}
          size="big"
        />
        <Input
          name="lastname"
          placeholder="Last name"
          error={lastname.message}
          size="big"
        />
      </styled.FieldContainer>
      <styled.FieldContainer>
        <Input
          type="date"
          name="birthday"
          placeholder="Birthday"
          error={birthday.message}
        />
      </styled.FieldContainer>
      <styled.FieldContainer>
        <Input
          name="address"
          placeholder="Address"
          error={address.message}
        />
      </styled.FieldContainer>
      <styled.FieldContainer>
        <Input
          name="met"
          placeholder="Met in"
          error={met.message}
        />
      </styled.FieldContainer>
      <styled.RemoveImageCheckbox name="removeImage" label="Delete photo" />
    </styled.MainInfo>
  );
};

export default MainFormData;
