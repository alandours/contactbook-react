import React from 'react';
import { useFormContext } from 'react-hook-form';
import { string } from 'prop-types';

import styled from './styled';

const BigInput = ({ name, placeholder, type }) => {
  const { register } = useFormContext();

  return (
    <styled.Label>
      <styled.BigInput
        name={name}
        placeholder={placeholder}
        ref={register}
        type={type || 'text'}
      />
    </styled.Label>
  );
};

BigInput.propTypes = {
  name: string.isRequired,
  placeholder: string
};

BigInput.defaultProps = {
  placeholder: ''
};

export default BigInput;
