import React from 'react';
import { useFormContext } from 'react-hook-form';
import { oneOfType, string, number, element, node } from 'prop-types';

import styled from './styled';

const Select = ({ name, defaultValue, placeholder, children }) => {
  const { register } = useFormContext();

  return (
    <styled.SelectWrapper>
      <styled.Select
        name={name}
        ref={register()}
        defaultValue={defaultValue}
      >
        { children }
      </styled.Select>
      <styled.Selector icon="chevron-down" />
    </styled.SelectWrapper>
  );
};

Select.propTypes = {
  name: string.isRequired,
  defaultValue: oneOfType([string, number]),
  placeholder: string,
  children: oneOfType([string, element, node])
};

Select.defaultProps = {
  defaultValue: '',
  placeholder: '',
  children: ''
};

export default Select;
