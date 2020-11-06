import React from 'react';
import { useFormContext } from 'react-hook-form';
import { oneOfType, string, number } from 'prop-types';

import styled from './styled';

const Textarea = ({ defaultValue, name, label, placeholder }) => {
  const { register } = useFormContext();

  return (
    <styled.Textarea
      name={name}
      ref={register}
      defaultValue={defaultValue}
      placeholder={placeholder}
    />
  );
};

Textarea.propTypes = {
  defaultValue: oneOfType([string, number]),
  name: string.isRequired,
  label: string,
  placeholder: string
};

Textarea.defaultProps = {
  defaultValue: '',
  label: '',
  placeholder: ''
};

export default Textarea;
