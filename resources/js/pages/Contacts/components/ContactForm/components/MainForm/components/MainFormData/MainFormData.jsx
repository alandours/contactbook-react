import React from 'react';

import BigInput from '@components/BigInput';
import TextInput from '@components/TextInput';

import styled from './styled';

const MainFormData = () => (
  <styled.MainFormData>
    <styled.FieldContainer>
      <BigInput
        name="name"
        placeholder="Name"
      />
      <BigInput
        name="lastname"
        placeholder="Last name"
      />
    </styled.FieldContainer>
    <styled.FieldContainer>
      <TextInput
        type="date"
        name="birthday"
        placeholder="Birthday"
      />
    </styled.FieldContainer>
    <styled.FieldContainer>
      <TextInput
        name="address"
        placeholder="Address"
      />
    </styled.FieldContainer>
    <styled.FieldContainer>
      <TextInput
        name="met"
        placeholder="Met in"
      />
    </styled.FieldContainer>
  </styled.MainFormData>
);

export default MainFormData;
