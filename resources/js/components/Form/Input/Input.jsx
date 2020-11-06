import React from 'react';
import { useFormContext } from 'react-hook-form';
import { string, bool, oneOfType, number } from 'prop-types';

import Icon from '@components/Icon';
import ErrorMessage from '@components/Form/ErrorMessage';
import Label from '@components/Form/Label';

import styled from './styled';

const Input = ({ name, type, label, disabled, placeholder, icon, defaultValue, error, size }) => {
  const { register } = useFormContext();

  return (
    <Label label={label} disabled={disabled}>
      <styled.Container>
        { icon && <Icon icon={icon} title={label || ''} inline /> }
        <styled.Input
          name={name}
          type={type || 'text'}
          disabled={disabled}
          placeholder={placeholder}
          ref={register()}
          defaultValue={defaultValue}
          size={size}
        />
      </styled.Container>
      <ErrorMessage>{ error }</ErrorMessage>
    </Label>
  );
};

Input.propTypes = {
  name: string.isRequired,
  type: string,
  label: string,
  disabled: bool,
  placeholder: string,
  icon: string,
  defaultValue: oneOfType([string, number]),
  error: string,
  size: string
};

Input.defaultProps = {
  type: '',
  label: '',
  disabled: false,
  placeholder: '',
  icon: '',
  defaultValue: '',
  error: '',
  size: ''
};

export default Input;
