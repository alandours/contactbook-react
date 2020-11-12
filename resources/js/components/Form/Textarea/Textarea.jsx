import React from 'react';
import { useFormContext } from 'react-hook-form';
import { oneOfType, string, number } from 'prop-types';

import ErrorMessage from '@components/Form/ErrorMessage';

import styled from './styled';

const Textarea = ({ defaultValue, name, error, placeholder }) => {
  const { register } = useFormContext();

  return (
    <>
      <styled.Textarea
        name={name}
        ref={register}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
      <ErrorMessage>{ error }</ErrorMessage>
    </>
  );
};

Textarea.propTypes = {
  defaultValue: oneOfType([string, number]),
  name: string.isRequired,
  error: string,
  placeholder: string
};

Textarea.defaultProps = {
  defaultValue: '',
  error: '',
  placeholder: ''
};

export default Textarea;
