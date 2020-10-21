import React from 'react';
import { useFormContext } from 'react-hook-form';
import { string, bool, oneOfType, number } from 'prop-types';

import Icon from '@components/Icon';
import FormError from '@components/FormError';

import styled from './styled';

const TextInput = ({ defaultValue, disabled, name, label, placeholder, type, icon, error }) => {
  const { register } = useFormContext();

  return type !== 'hidden' && (
    <styled.Label label={label}>
      { label && !disabled && <styled.LabelText>{ label }</styled.LabelText> }
      <styled.Container>
        { icon && <Icon icon={icon} title={label || ''} inline /> }
        <styled.TextInput
          name={name}
          ref={register()}
          defaultValue={defaultValue}
          disabled={disabled}
          placeholder={placeholder}
          type={type || 'text'}
        />
      </styled.Container>
      <FormError>{ error }</FormError>
    </styled.Label>
  );
};

TextInput.propTypes = {
  defaultValue: oneOfType([string, number]),
  disabled: bool,
  name: string.isRequired,
  label: string,
  placeholder: string,
  type: string,
  icon: string,
  error: string
};

TextInput.defaultProps = {
  defaultValue: '',
  disabled: false,
  label: '',
  placeholder: '',
  type: '',
  icon: '',
  error: ''
};

export default TextInput;
