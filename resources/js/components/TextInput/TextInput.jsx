import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { string, bool, oneOfType, number } from 'prop-types';

import Icon from '@components/Icon';

import styled from './styled';

const TextInput = ({ defaultValue, disabled, name, label, placeholder, type, icon }) => {
  const [isFocused, setFocus] = useState(false);
  const { register } = useFormContext();

  return type !== 'hidden' && (
    <styled.Label>
      { label && !disabled && <styled.LabelText>{ label }</styled.LabelText> }
      <styled.Container>
        { icon && <Icon icon={icon} title={label || ''} inline /> }
        <styled.TextInput
          name={name}
          ref={register()}
          defaultValue={defaultValue}
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          placeholder={(!isFocused && placeholder) || ''}
          type={type || 'text'}
        />
      </styled.Container>
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
  icon: string
};

TextInput.defaultProps = {
  defaultValue: '',
  disabled: false,
  label: '',
  placeholder: '',
  type: '',
  icon: ''
};

export default TextInput;
