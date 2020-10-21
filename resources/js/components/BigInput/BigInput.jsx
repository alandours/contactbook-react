import React from 'react';
import { useFormContext } from 'react-hook-form';
import { string } from 'prop-types';

import FormError from '@components/FormError';

import styled from './styled';

const BigInput = ({ name, placeholder, type, error }) => {
  const { register } = useFormContext();

  return (
    <styled.Label>
      <styled.BigInput
        name={name}
        placeholder={placeholder}
        ref={register}
        type={type || 'text'}
      />
      <FormError>{error}</FormError>
    </styled.Label>
  );
};

BigInput.propTypes = {
  name: string.isRequired,
  placeholder: string,
  type: string,
  error: string
};

BigInput.defaultProps = {
  placeholder: '',
  type: 'text',
  error: ''
};

export default BigInput;
