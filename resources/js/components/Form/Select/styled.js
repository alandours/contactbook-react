import styled from 'styled-components';
import { formStyles } from '@theme/mixins';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SelectWrapper = styled.div`
  position: relative;
`;

const Selector = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.selected.contrast[3]};
  font-size: 0.8rem;
  margin-top: -6px;
  position: absolute;
  right: 2rem;
  top: 50%;
`;

const Select = styled.select`
  ${formStyles};
  appearance: none;
  border: 1px solid ${({ theme }) => theme.selected.contrast[4]};
  border-radius: 3px;
  cursor: pointer;
  display: grid;
  margin: 0 1.5rem;
  padding: 0.25rem;
  width: 200px;

  &:hover, &:focus {
    border: 1px solid ${({ theme }) => theme.mainColor.main};
  }

  &:hover + ${Selector},
  &:focus + ${Selector} {
    color: ${({ theme }) => theme.mainColor.main};
  }
`;

export default { SelectWrapper, Select, Selector };
