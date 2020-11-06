import React from 'react';
import { useFormContext } from 'react-hook-form';
import { string } from 'prop-types';

import styled from './styled';

const Checkbox = ({ name, label, className }) => {
  const { register, watch } = useFormContext();

  const isChecked = watch(name);

  const icon = {
    active: ['fas', 'check-square'],
    inactive: ['far', 'square']
  };

  return (
    <styled.Checkbox className={className}>
      <styled.CheckboxIcon icon={isChecked ? icon.active : icon.inactive} />
      <styled.CheckboxText>{label}</styled.CheckboxText>
      <styled.OriginalCheckbox type="checkbox" name={name} ref={register} />
    </styled.Checkbox>
  );
};

Checkbox.propTypes = {
  name: string.isRequired,
  label: string,
  className: string
};

Checkbox.defaultProps = {
  label: '',
  className: ''
};

export default Checkbox;
